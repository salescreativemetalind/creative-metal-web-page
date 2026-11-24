import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const routes = {
  hub: "carbon-steel-pipe-supplier-india",
  a53: "a53-erw-pipe-supplier-india",
  a106: "a106-gr-b-seamless-pipe-india",
  api5l: "api-5l-line-pipe-supplier-india",
};

const pages = Object.fromEntries(await Promise.all(
  Object.entries(routes).map(async ([key, route]) => [
    key,
    await readFile(new URL(`../src/routes/${route}.tsx`, import.meta.url), "utf8"),
  ]),
));

function title(source) {
  return source.match(/<Title>([\s\S]*?)<\/Title>/)?.[1].trim() ?? "";
}

function h1(source) {
  return source.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1].replace(/<[^>]+>/g, "").trim() ?? "";
}

function description(source) {
  return source.match(/<Meta name="description" content="([^"]+)" \/>/)?.[1].trim() ?? "";
}

const allSource = Object.values(pages).join("\n");

const prohibitedClaims = [
  /\b(?:500|1000)\+\s*tonnes\b/i,
  /\bready stock\b/i,
  /\bsame[- ]day dispatch\b/i,
  /\bfree delivery\b/i,
  /\bquote within \d+ hours?\b/i,
  /\bRs\s*\d+[\s,]*(?:-|–|to)\s*\d+\s*\/\s*kg\b/i,
  /\bapproved mills?\b/i,
  /\bdirect mill relationships?\b/i,
  /\bGAIL\/ONGC-approved\b/i,
  /\bIndia['’]s largest\b/i,
  /(?<!not )\bevery (?:pipe|length) (?:is|will be|ships|undergoes|includes|comes with)\b/i,
  /\ball (?:pipes?|sizes?|schedules?|grades?) (?:are |is )?(?:available|stocked|supplied)\b/i,
];

test("A53, A106 and API 5L retain distinct product-form intent", () => {
  assert.match(pages.a53, /ASTM A53 Type E electric-resistance-welded carbon steel pipe/);
  assert.match(pages.a53, /Grade A and Grade B requirements/);
  assert.match(pages.a53, /does not establish automatic fire-protection approval/);

  assert.match(pages.a106, /ASTM A106\/A106M includes Grade A, Grade B and Grade C/);
  assert.match(pages.a106, /seamless carbon steel pipe/);
  assert.match(pages.a106, /hot-finished or cold-drawn/);
  assert.match(pages.a106, /ASTM A530\/A530M general requirements/);

  assert.match(pages.api5l, /pipeline transportation systems/);
  assert.match(pages.api5l, /seamless and applicable welded line pipe/);
  assert.match(pages.api5l, /Do not use ERW, HFW, SAWL\/LSAW or SAWH\/SSAW as interchangeable labels/);
});

test("API 5L grade and PSL terminology remains qualified", () => {
  assert.match(pages.api5l, /Grade B/);
  assert.match(pages.api5l, /X42 \/ X46 \/ X52/);
  assert.match(pages.api5l, /X56 \/ X60 \/ X65 \/ X70/);
  assert.match(pages.api5l, /PSL1 and PSL2 are separate product specification levels/);
  assert.match(pages.api5l, /fracture toughness where applicable/);
  assert.match(pages.api5l, /does not by itself establish PSL, wall thickness, pressure rating/);
  assert.doesNotMatch(pages.api5l, /X(?:42|52|60|65|70)[^\n]*(?:up to|above)\s*\d+\s*bar/i);
});

test("IBR and sour-service wording is order and document specific", () => {
  assert.match(pages.hub, /does not represent universal IBR approval or CMI certification/);
  assert.match(pages.hub, /governing NACE or ISO standard, edition, clause/);
  assert.match(pages.a106, /EN 10204 3\.1 certificates and IBR-related documentation may be included as order-specific requirements/);
  assert.match(pages.a106, /subject to confirmation for the offered material/);
  assert.match(pages.a106, /does not represent universal IBR approval or CMI certification/);
  assert.match(pages.api5l, /Sour-service requirements may be included in an enquiry, but compliance is not automatic from an API 5L grade or PSL/);
  assert.match(pages.api5l, /Sour-service compliance is not an automatic property of API 5L or PSL2/);
  assert.match(pages.api5l, /HIC and SSC testing are separate project requirements/);
  assert.doesNotMatch(allSource, /PSL2 (?:is|means|guarantees) NACE/i);
  assert.doesNotMatch(allSource, /CMI is (?:IBR|NACE|API) certified/i);
});

test("unsupported inventory, price and supplier guarantees remain absent", () => {
  for (const pattern of prohibitedClaims) assert.doesNotMatch(allSource, pattern);
  assert.doesNotMatch(allSource, /Jindal SAW|Welspun|Ratnamani|Maharashtra Seamless|ISMT|APL Apollo|Surya Roshni/);
  assert.doesNotMatch(allSource, /operated by GAIL|specified by ONGC|specified by Adani|Petronet LNG/);
});

test("titles, descriptions and H1s remain distinct", () => {
  const titles = Object.values(pages).map(title);
  const descriptions = Object.values(pages).map(description);
  const h1s = Object.values(pages).map(h1);
  assert.ok(descriptions.every(Boolean));
  assert.equal(new Set(titles).size, 4);
  assert.equal(new Set(descriptions).size, 4);
  assert.equal(new Set(h1s).size, 4);
  assert.match(titles[0], /Carbon Steel Pipe Supplier in India/);
  assert.match(pages.a53, /<h1[^>]*>A53 ERW Pipe Supplier in India<\/h1>/);
  assert.match(pages.a106, /<h1[^>]*>A106 Grade B Seamless Pipe Supplier in India<\/h1>/);
  assert.match(pages.api5l, /<h1[^>]*>API 5L Line Pipe Supplier in India<\/h1>/);
});

test("canonicals, robots and schema mechanisms remain intact", () => {
  for (const [key, route] of Object.entries(routes)) {
    const source = pages[key];
    assert.match(source, new RegExp(`rel="canonical" href="https://www\\.creativemetalind\\.com/${route}"`));
    assert.match(source, /name="robots" content="index, follow, max-image-preview:large"/);
    assert.match(source, /"@type": "BreadcrumbList"/);
    assert.match(source, /"@type": "FAQPage"/);
    assert.match(source, /mainEntity: FAQS\.map/);
    assert.match(source, /innerHTML=\{SCHEMA\}/);
    assert.match(source, /innerHTML=\{FAQ_SCHEMA\}/);
  }
});

test("hub and specialist internal links remain reciprocal", () => {
  for (const route of [routes.a53, routes.a106, routes.api5l]) {
    assert.match(pages.hub, new RegExp(`/${route}`));
  }
  for (const source of [pages.a53, pages.a106, pages.api5l]) {
    assert.match(source, /href="\/carbon-steel-pipe-supplier-india"/);
  }
});

test("all routes retain contact, WhatsApp and phone destinations", () => {
  for (const source of Object.values(pages)) {
    assert.match(source, /href="\/#contact"/);
    assert.match(source, /https:\/\/wa\.me\/919998280619/);
    assert.match(source, /href="tel:\+919998280619"/);
  }
});
