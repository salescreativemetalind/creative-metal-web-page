import test, { after } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const vite = await createServer({
  root: fileURLToPath(new URL("..", import.meta.url)),
  appType: "custom",
  logLevel: "silent",
  server: { middlewareMode: true },
});
after(async () => vite.close());

const { createReviewsAdminHandlers } = await vite.ssrLoadModule(
  "/src/routes/api/reviews-admin.ts",
);
const adminPage = await readFile(
  new URL("../src/routes/admin/reviews.tsx", import.meta.url),
  "utf8",
);

const expectedToken = "test-only-admin-token";

function request(path = "/api/reviews-admin", options = {}) {
  return new Request(`https://example.test${path}`, options);
}

function review(id, overrides = {}) {
  return {
    id,
    name: `Buyer ${id}`,
    title: `Review ${id}`,
    comment: `Comment ${id}`,
    rating: 5,
    product: "Pipe",
    status: "approved",
    createdAt: "2026-01-01T00:00:00.000Z",
    approvedAt: "2026-01-02T00:00:00.000Z",
    ip: "192.0.2.1",
    ...overrides,
  };
}

function memoryHandlers(initialReviews = []) {
  let records = structuredClone(initialReviews);
  return {
    handlers: createReviewsAdminHandlers({
      load: () => structuredClone(records),
      save: (updated) => { records = structuredClone(updated); },
      expectedToken: () => expectedToken,
    }),
    records: () => structuredClone(records),
  };
}

function bearerHeader(token = expectedToken) {
  return { Authorization: `Bearer ${token}` };
}

test("authenticated GET returns sanitized reviews with no-store caching", async () => {
  const { handlers } = memoryHandlers([
    review("older", { createdAt: "2026-01-01T00:00:00.000Z" }),
    review("newer", { createdAt: "2026-02-01T00:00:00.000Z" }),
  ]);

  const response = await handlers.GET({
    request: request("/api/reviews-admin", { headers: bearerHeader() }),
  });
  const json = await response.json();

  assert.equal(response.status, 200);
  assert.equal(response.headers.get("Cache-Control"), "no-store, private");
  assert.equal(json.total, 2);
  assert.deepEqual(json.data.map(({ id }) => id), ["newer", "older"]);
  assert.deepEqual(Object.keys(json.data[0]).sort(), [
    "approvedAt", "comment", "createdAt", "id", "name",
    "product", "rating", "status", "title",
  ]);
  assert.equal(Object.hasOwn(json.data[0], "ip"), false);
});

test("authenticated DELETE removes only the requested review and disables caching", async () => {
  const store = memoryHandlers([review("keep"), review("delete")]);
  const response = await store.handlers.DELETE({
    request: request("/api/reviews-admin", {
      method: "DELETE",
      headers: { "Content-Type": "application/json", ...bearerHeader() },
      body: JSON.stringify({ id: "delete" }),
    }),
  });

  assert.equal(response.status, 200);
  assert.equal(response.headers.get("Cache-Control"), "no-store, private");
  assert.deepEqual(await response.json(), {
    ok: true,
    message: "Review deleted.",
  });
  assert.deepEqual(store.records().map(({ id }) => id), ["keep"]);
});

test("GET rejects missing, incorrect, empty, and malformed authorization headers", async () => {
  const { handlers } = memoryHandlers();
  const cases = [
    undefined,
    "Bearer incorrect-token",
    "",
    "Bearer",
    "Bearer ",
    "Basic test-only-admin-token",
    "Token test-only-admin-token",
  ];

  for (const authorization of cases) {
    const headers = authorization === undefined ? {} : { Authorization: authorization };
    const response = await handlers.GET({
      request: request("/api/reviews-admin", { headers }),
    });
    assert.equal(response.status, 401, `expected rejection for ${JSON.stringify(authorization)}`);
    assert.equal(response.headers.get("Cache-Control"), "no-store, private");
  }
});

test("unauthorized DELETE is rejected before its JSON body is parsed", async () => {
  const store = memoryHandlers([review("keep")]);
  const response = await store.handlers.DELETE({
    request: request("/api/reviews-admin", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: "not-json",
    }),
  });

  assert.equal(response.status, 401);
  assert.equal(response.headers.get("Cache-Control"), "no-store, private");
  assert.deepEqual(store.records().map(({ id }) => id), ["keep"]);
});

test("authenticated DELETE rejects non-object JSON without modifying reviews", async () => {
  const invalidBodies = [null, [], "text", 123, true];

  for (const invalidBody of invalidBodies) {
    const store = memoryHandlers([review("keep")]);
    const response = await store.handlers.DELETE({
      request: request("/api/reviews-admin", {
        method: "DELETE",
        headers: { "Content-Type": "application/json", ...bearerHeader() },
        body: JSON.stringify(invalidBody),
      }),
    });

    assert.equal(response.status, 400, `expected rejection for ${JSON.stringify(invalidBody)}`);
    assert.equal(response.headers.get("Cache-Control"), "no-store, private");
    assert.deepEqual(await response.json(), {
      ok: false,
      error: "Invalid request body",
    });
    assert.deepEqual(store.records().map(({ id }) => id), ["keep"]);
  }
});

test("GET and DELETE reject legacy query-string authentication", async () => {
  const { handlers } = memoryHandlers();
  const getResponse = await handlers.GET({
    request: request("/api/reviews-admin?token=legacy-token"),
  });
  const deleteResponse = await handlers.DELETE({
    request: request("/api/reviews-admin?token=legacy-token", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: "review-id" }),
    }),
  });

  assert.equal(getResponse.status, 400);
  assert.equal(deleteResponse.status, 400);
  assert.equal(getResponse.headers.get("Cache-Control"), "no-store, private");
  assert.equal(deleteResponse.headers.get("Cache-Control"), "no-store, private");
});

test("DELETE rejects legacy request-body authentication after bearer authentication", async () => {
  const { handlers } = memoryHandlers([review("review-id")]);
  const response = await handlers.DELETE({
    request: request("/api/reviews-admin", {
      method: "DELETE",
      headers: { "Content-Type": "application/json", ...bearerHeader() },
      body: JSON.stringify({ token: "legacy-token", id: "review-id" }),
    }),
  });

  assert.equal(response.status, 400);
  assert.equal(response.headers.get("Cache-Control"), "no-store, private");
  assert.deepEqual(await response.json(), {
    ok: false,
    error: "Request-body authentication is not supported",
  });
});

test("admin client sends bearer headers and no token in URLs or bodies", () => {
  assert.match(adminPage, /Authorization: `Bearer \$\{token\(\)\}`/);
  assert.doesNotMatch(adminPage, /reviews-admin\?token=/);
  assert.doesNotMatch(adminPage, /JSON\.stringify\(\{\s*token:/);
  assert.doesNotMatch(adminPage, /default:\s*cmi-admin/i);
});
