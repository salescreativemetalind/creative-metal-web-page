import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [familyPage, c22Page] = await Promise.all([
  readFile(new URL("../src/routes/hastelloy-pipe-supplier-india.tsx", import.meta.url), "utf8"),
  readFile(new URL("../src/routes/hastelloy-c22-pipe-supplier-india.tsx", import.meta.url), "utf8"),
]);

function title(source) {
  return source.match(/<Title>([\s\S]*?)<\/Title>/)?.[1].trim() ?? "";
}

function h1(source) {
  return source.match(/<h1[^>]*>\s*([^<]+)\s*<\/h1>/)?.[1].trim() ?? "";
}

const unsupportedClaims = [
  /Ready Stock/i,
  /same[- ]day dispatch/i,
  /free delivery/i,
  /delivery in \d/i,
  /\b\d+-\d+ weeks? from mill\b/i,
  /Rs\s*[\d,]+\s*(?:–|-|to)\s*[\d,]+/i,
  /volume discounts?/i,
  /approved mills?/i,
  /direct mill relationships?/i,
  /100% ultrasonic/i,
  /Every (?:pipe|length) (?:undergoes|ships)/i,
  /zero corrosion (?:failures?|allowance)/i,
  /ultimate (?:corrosion|insurance)/i,
  /NACE MR0175 compliant/i,
  /full mill certificates?/i,
  /supplied Hastelloy to all these sectors/i,
  /13\+ years of nickel alloy supply/i,
];

test("C-22 and C-276 retain correct UNS identities", () => {
  for (const source of [familyPage, c22Page]) {
    assert.match(source, /C-22[^\n]*N06022|N06022[^\n]*C-22/);
    assert.match(source, /C-276[^\n]*N10276|N10276[^\n]*C-276/);
  }
});

test("standards remain assigned to appropriate product forms", () => {
  for (const source of [familyPage, c22Page]) {
    assert.match(source, /ASTM B622[^\n]*(?:seamless pipe|seamless pipe or tube|seamless pipe and tube)/i);
    assert.match(source, /ASTM B619[^\n]*welded pipe/i);
    assert.match(source, /ASTM B366[^\n]*(?:wrought fittings|fitting forms)/i);
    assert.match(source, /ASTM B564[^\n]*(?:forgings|forged products)/i);
    assert.doesNotMatch(source, /ASTM B564[^\n]*seamless pipe/i);
    assert.doesNotMatch(source, /\bERW\b/);
  }
});

test("unsupported commercial guarantees are absent", () => {
  for (const source of [familyPage, c22Page]) {
    for (const pattern of unsupportedClaims) assert.doesNotMatch(source, pattern);
    assert.doesNotMatch(source, /VDM Metals|Special Metals|Sandvik/);
  }
});

test("trade-name wording does not prove manufacturer identity", () => {
  for (const source of [familyPage, c22Page]) {
    assert.match(source, /HASTELLOY is a Haynes International trade name/);
    assert.match(source, /(?:manufacturer|trade-name)[^\n]*(?:confirm|offered documentation)/i);
  }
});

test("family and C-22 pages retain distinct search intents", () => {
  assert.match(title(familyPage), /Hastelloy Pipe Supplier India/);
  assert.match(title(familyPage), /C-276/);
  assert.match(title(c22Page), /Hastelloy C-22 Pipe Supplier India/);
  assert.match(title(c22Page), /N06022/);
  assert.notEqual(title(familyPage), title(c22Page));
  assert.match(h1(familyPage), /Alloy C-276 and C-22 Enquiries/);
  assert.match(h1(c22Page), /UNS N06022 Enquiries/);
  assert.notEqual(h1(familyPage), h1(c22Page));
});

test("clarity headings, product label and Open Graph type remain corrected", () => {
  assert.match(c22Page, /Information to Include in an Alloy C-22 Enquiry/);
  assert.match(c22Page, /Alloy C-22 \(UNS N06022\)/);
  assert.doesNotMatch(c22Page, /Why Buy Hastelloy C22 Pipe from Creative Metal Industries\?/);
  assert.doesNotMatch(c22Page, /Hastelloy C22 \(UNS N06022\)/);
  assert.match(familyPage, /Alloy C-276 Pipe and Tube Specifications/);
  assert.doesNotMatch(familyPage, /Hastelloy C276 Pipe Supplier — Grade &amp; Specifications/);
  assert.match(familyPage, /<Meta property="og:type" content="website" \/>/);
  assert.doesNotMatch(familyPage, /<Meta property="og:type" content="product" \/>/);
});

test("canonicals, robots and FAQ breadcrumb schema mechanisms remain intact", () => {
  assert.match(familyPage, /<Link rel="canonical" href="https:\/\/www\.creativemetalind\.com\/hastelloy-pipe-supplier-india" \/>/);
  assert.match(c22Page, /<Link rel="canonical" href="https:\/\/www\.creativemetalind\.com\/hastelloy-c22-pipe-supplier-india" \/>/);
  for (const source of [familyPage, c22Page]) {
    assert.match(source, /<Meta name="robots" content="index, follow, max-image-preview:large" \/>/);
    assert.match(source, /const FAQ_SCHEMA = JSON\.stringify\([\s\S]*FAQS\.map/);
    assert.match(source, /<script type="application\/ld\+json" innerHTML=\{SCHEMA\} \/>/);
    assert.match(source, /<script type="application\/ld\+json" innerHTML=\{FAQ_SCHEMA\} \/>/);
    assert.match(source, /\{FAQS\.map\(/);
  }
});

test("internal links and enquiry channels remain accurate", () => {
  assert.doesNotMatch(familyPage, /href="\/inconel-pipe-supplier-india"[^>]*>Exotic Alloy Pipes/);
  assert.match(familyPage, /href:\s*"\/hastelloy-c22-pipe-supplier-india"/);
  assert.match(c22Page, /href:"\/hastelloy-pipe-supplier-india", label:"Hastelloy Pipe Supplier India"/);
  assert.match(c22Page, /Alloy 718 Bar & Tubing Enquiries/);
  assert.doesNotMatch(c22Page, /Inconel 718 Bar & Pipe/);
  for (const source of [familyPage, c22Page]) {
    assert.match(source, /href="tel:\+919998280619"/);
    assert.match(source, /href="https:\/\/wa\.me\/919998280619/);
    assert.match(source, /href="\/#contact"/);
  }
  assert.match(familyPage, /href="mailto:creativemetalind@gmail\.com"/);
});
