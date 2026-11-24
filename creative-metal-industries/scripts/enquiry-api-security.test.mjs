import test, { after } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const vite = await createServer({
  root: fileURLToPath(new URL("..", import.meta.url)),
  appType: "custom",
  logLevel: "silent",
  server: { middlewareMode: true },
});
after(async () => vite.close());

const { createEnquiryHandlers } = await vite.ssrLoadModule("/src/routes/api/enquiry.ts");

const validEnquiry = {
  name: "Test Buyer",
  company: "Example Industries",
  phone: "+91 99999 00000",
  email: "buyer@example.com",
  metal: "Stainless Steel",
  product: "Seamless Pipes",
  message: "SS 316L, 2 inch, 50 metres",
};

function request(body, options = {}) {
  const headers = { "Content-Type": "application/json", ...options.headers };
  return new Request("https://example.test/api/enquiry", {
    method: "POST",
    headers,
    body: typeof body === "string" || body instanceof ReadableStream ? body : JSON.stringify(body),
    ...(body instanceof ReadableStream ? { duplex: "half" } : {}),
  });
}

function mockHandlers({ failSend = false } = {}) {
  const transportOptions = [];
  const messages = [];
  const logs = [];
  let transportCreations = 0;
  const handlers = createEnquiryHandlers({
    createTransport(options) {
      transportCreations += 1;
      transportOptions.push(options);
      return {
        async sendMail(message) {
          messages.push(message);
          if (failSend) throw new Error("private SMTP provider detail");
          return { accepted: ["fixed@example.test"] };
        },
      };
    },
    smtpUser: () => "sender@example.test",
    smtpPass: () => "test-only-password",
    logError: (event) => logs.push(event),
  });
  return {
    handlers,
    transportOptions,
    messages,
    logs,
    transportCreations: () => transportCreations,
  };
}

async function post(store, body, options) {
  return store.handlers.POST({ request: request(body, options) });
}

function assertNoStore(response) {
  assert.equal(response.headers.get("Cache-Control"), "no-store, private");
}

function assertNoSmtp(store) {
  assert.equal(store.transportCreations(), 0);
  assert.equal(store.messages.length, 0);
}

test("valid enquiry sends one constrained message", async () => {
  const store = mockHandlers();
  const response = await post(store, validEnquiry);
  assert.equal(response.status, 200);
  assertNoStore(response);
  assert.deepEqual(await response.json(), { ok: true });
  assert.equal(store.transportCreations(), 1);
  assert.equal(store.messages.length, 1);

  assert.deepEqual(store.transportOptions[0], {
    service: "gmail",
    auth: { user: "sender@example.test", pass: "test-only-password" },
    disableFileAccess: true,
    disableUrlAccess: true,
  });
  const message = store.messages[0];
  assert.equal(message.from, "\"CMI Website\" <sender@example.test>");
  assert.equal(message.to, "creativemetalind@gmail.com");
  assert.equal(message.replyTo, "buyer@example.com");
  assert.equal(message.disableFileAccess, true);
  assert.equal(message.disableUrlAccess, true);
  assert.equal(Object.hasOwn(message, "raw"), false);
  assert.equal(Object.hasOwn(message, "attachments"), false);
});

test("email remains optional", async () => {
  const store = mockHandlers();
  const body = { ...validEnquiry };
  delete body.email;
  const response = await post(store, body);
  assert.equal(response.status, 200);
  assert.equal(store.messages[0].replyTo, undefined);
});

test("missing and empty required fields are rejected before SMTP", async () => {
  for (const field of ["name", "phone", "metal", "product"]) {
    for (const value of [undefined, "", "   "]) {
      const store = mockHandlers();
      const body = { ...validEnquiry };
      if (value === undefined) delete body[field];
      else body[field] = value;
      const response = await post(store, body);
      assert.equal(response.status, 400, field + " should be rejected");
      assertNoStore(response);
      assertNoSmtp(store);
    }
  }
});

test("non-string field values and non-object bodies are rejected", async () => {
  const invalidValues = [null, [], {}, 123, true, false];
  for (const field of Object.keys(validEnquiry)) {
    for (const value of invalidValues) {
      const store = mockHandlers();
      const response = await post(store, { ...validEnquiry, [field]: value });
      assert.equal(response.status, 400, field + " accepted " + JSON.stringify(value));
      assertNoSmtp(store);
    }
  }
  for (const body of [null, [], "text", 123, true]) {
    const store = mockHandlers();
    const response = await post(store, body);
    assert.equal(response.status, 400);
    assertNoSmtp(store);
  }
});

test("malformed JSON and unsupported content types are handled safely", async () => {
  const malformed = mockHandlers();
  const malformedResponse = await post(malformed, "{not-json");
  assert.equal(malformedResponse.status, 400);
  assert.deepEqual(await malformedResponse.json(), { ok: false, error: "Malformed JSON request." });
  assertNoSmtp(malformed);

  const unsupported = mockHandlers();
  const unsupportedResponse = await post(unsupported, JSON.stringify(validEnquiry), {
    headers: { "Content-Type": "text/plain" },
  });
  assert.equal(unsupportedResponse.status, 415);
  assertNoStore(unsupportedResponse);
  assertNoSmtp(unsupported);
});

test("body larger than 16 KiB is rejected while streaming without Content-Length", async () => {
  const store = mockHandlers();
  const bytes = new TextEncoder().encode("x".repeat(16 * 1024 + 1));
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(bytes.subarray(0, 8000));
      controller.enqueue(bytes.subarray(8000));
      controller.close();
    },
  });
  const response = await post(store, stream);
  assert.equal(response.status, 413);
  assertNoStore(response);
  assertNoSmtp(store);
});

test("declared oversized bodies are rejected before reading", async () => {
  const store = mockHandlers();
  const response = await post(store, validEnquiry, { headers: { "Content-Length": "16385" } });
  assert.equal(response.status, 413);
  assertNoSmtp(store);
});

test("field size limits accept boundaries and reject overflow", async () => {
  const limits = { name: 100, company: 150, phone: 32, email: 254, metal: 64, product: 64, message: 4000 };
  for (const [field, limit] of Object.entries(limits)) {
    if (field === "email") continue;
    const accepted = mockHandlers();
    const acceptedResponse = await post(accepted, { ...validEnquiry, [field]: "a".repeat(limit) });
    assert.equal(acceptedResponse.status, 200, field + " boundary should pass");

    const rejected = mockHandlers();
    const rejectedResponse = await post(rejected, { ...validEnquiry, [field]: "a".repeat(limit + 1) });
    assert.equal(rejectedResponse.status, 400, field + " overflow should fail");
    assertNoSmtp(rejected);
  }

  const longEmail = "a".repeat(243) + "@example.com";
  assert.equal(longEmail.length, 255);
  const rejected = mockHandlers();
  assert.equal((await post(rejected, { ...validEnquiry, email: longEmail })).status, 400);
  assertNoSmtp(rejected);
});

test("header injection, address lists and parser payloads are rejected", async () => {
  const attacks = [
    { name: "Buyer\r\nBcc: attacker@example.test" },
    { company: "Company\nCc: attacker@example.test" },
    { metal: "Steel\r\nX-Test: injected" },
    { email: "buyer@example.com,attacker@example.test" },
    { email: "buyer@example.com;attacker@example.test" },
    { email: "Group:buyer@example.com;" },
    { email: "Buyer (comment) <buyer@example.com>" },
    { email: "buyer@example.com\r\nBcc:attacker@example.test" },
    { email: "a@b.example,".repeat(100) },
  ];
  for (const attack of attacks) {
    const store = mockHandlers();
    const response = await post(store, { ...validEnquiry, ...attack });
    assert.equal(response.status, 400, JSON.stringify(attack));
    assertNoSmtp(store);
  }
});

test("HTML content is escaped while text content remains useful", async () => {
  const store = mockHandlers();
  const response = await post(store, {
    ...validEnquiry,
    name: "<b>Buyer & Co</b>",
    message: "<script>alert(1)</script> & details",
  });
  assert.equal(response.status, 200);
  const message = store.messages[0];
  assert.match(message.html, /&lt;b&gt;Buyer &amp; Co&lt;\/b&gt;/);
  assert.match(message.html, /&lt;script&gt;alert\(1\)&lt;\/script&gt; &amp; details/);
  assert.doesNotMatch(message.html, /<script>/);
  assert.match(message.text, /<script>alert\(1\)<\/script> & details/);
});

test("transport errors return bounded responses and logs without personal data", async () => {
  const store = mockHandlers({ failSend: true });
  const response = await post(store, validEnquiry);
  assert.equal(response.status, 502);
  assertNoStore(response);
  const responseText = await response.text();
  assert.doesNotMatch(responseText, /buyer@example|Test Buyer|private SMTP|test-only-password/);
  assert.deepEqual(store.logs, ["transport_failure"]);
  assert.doesNotMatch(JSON.stringify(store.logs), /buyer@example|Test Buyer|private SMTP|test-only-password/);
});
