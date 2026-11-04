import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { contactMethodForHref, trackSuccessfulEnquiry } from "../src/lib/enquiry-tracking.ts";

const [app, home, tracking] = await Promise.all([
  readFile(new URL("../src/app.tsx", import.meta.url), "utf8"),
  readFile(new URL("../src/routes/index.tsx", import.meta.url), "utf8"),
  readFile(new URL("../src/lib/enquiry-tracking.ts", import.meta.url), "utf8"),
]);

test("contact links are classified without placing destination details in analytics", () => {
  assert.equal(contactMethodForHref("tel:+919998280619"), "phone");
  assert.equal(contactMethodForHref("mailto:sales@example.com"), "email");
  assert.equal(contactMethodForHref("https://wa.me/919998280619?text=quote"), "whatsapp");
  assert.equal(contactMethodForHref("https://www.creativemetalind.com/contact"), "");
  assert.doesNotMatch(tracking, /destination_href|phone_number|email_address|message_text/);
});

test("successful enquiry event contains product categories but no personal fields", () => {
  const calls = [];
  globalThis.window = { gtag: (...args) => calls.push(args) };
  try {
    assert.equal(trackSuccessfulEnquiry("Stainless Steel", "Seamless Pipes"), true);
    assert.deepEqual(calls, [["event", "generate_lead", {
      method: "website_form",
      enquiry_material: "Stainless Steel",
      enquiry_product: "Seamless Pipes",
    }]]);
    const payload = JSON.stringify(calls);
    assert.doesNotMatch(payload, /name|company|phone|email|message/i);
  } finally {
    delete globalThis.window;
  }
});

test("form lead tracking occurs only inside the successful API response branch", () => {
  assert.match(home, /if \(json\.ok\) \{\s*trackSuccessfulEnquiry\(data\.metal, data\.product\);\s*setSubmitted\(true\)/);
  assert.doesNotMatch(home, /const handleSubmit[\s\S]*?trackSuccessfulEnquiry[\s\S]*?fetch\("\/api\/enquiry"/);
});

test("app installs delegated contact intent tracking once with cleanup", () => {
  assert.match(app, /onMount\(\(\) => \{ removeContactTracking = installContactIntentTracking\(\); \}\)/);
  assert.match(app, /onCleanup\(\(\) => removeContactTracking\?\.\(\)\)/);
});
