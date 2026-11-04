import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const about = await readFile(new URL("../src/routes/about.tsx", import.meta.url), "utf8");

test("About page establishes local identity through verifiable contact and enquiry guidance", () => {
  assert.match(about, /Vadodara-based contact for specification-led industrial metal enquiries/);
  assert.match(about, /Arrange a Local Product Enquiry/);
  assert.match(about, /confirm the current office, meeting or collection location/);
  assert.match(about, /State the Vadodara destination or collection requirement/);
});

test("About page demonstrates industry knowledge without claiming unsupported project history", () => {
  assert.match(about, /Information Industrial Buyers Should Include/);
  assert.match(about, /Process, chemical and refinery projects/);
  assert.match(about, /Food, dairy and pharmaceutical systems/);
  assert.match(about, /drawings or bills of material/);
  assert.match(about, /do not claim completed projects, approvals or suitability/);
});

test("About page does not present unverified facilities or fixed opening hours", () => {
  assert.doesNotMatch(about, /Our Facility|Office &amp; Warehouse|Godown &amp; Yard|386\/B, GIDC Estate|Open Monday to Saturday|9:00 AM to 7:00 PM/);
  assert.match(about, /does not independently verify warehouse facilities or opening hours/);
});
