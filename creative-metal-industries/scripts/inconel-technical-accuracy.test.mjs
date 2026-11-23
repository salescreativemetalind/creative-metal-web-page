import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [alloy718, inconelPipe] = await Promise.all([
  readFile(new URL("../src/routes/inconel-718-supplier-india.tsx", import.meta.url), "utf8"),
  readFile(new URL("../src/routes/inconel-pipe-supplier-india.tsx", import.meta.url), "utf8"),
]);

function title(source) {
  return source.match(/<Title>([^<]+)<\/Title>/)?.[1] ?? "";
}

function h1(source) {
  return source.match(/<h1[^>]*>\s*([^<]+)\s*<\/h1>/)?.[1].trim() ?? "";
}

function grades(source) {
  return source.match(/const GRADES = \[([\s\S]*?)\n\];/)?.[1] ?? "";
}

const unsupportedPromises = [
  /Ready Stock/i,
  /ready stock/i,
  /approved mills/i,
  /aerospace certified/i,
  /AMS certified/i,
  /Dual certification/i,
  /direct import from mills/i,
  /100% Positive Material Identification/i,
  /quotation within 4 hours/i,
  /Rs\s*[\d,]+\s*to\s*Rs/i,
  /\b4-6 week lead time\b/i,
  /\b4-8 week mill delivery\b/i,
];

test("Alloy 718 uses form-appropriate bar, forging and tubing specifications", () => {
  assert.match(alloy718, /ASTM B637[^\n]*(?:Bar|bar|forging)/);
  assert.match(alloy718, /AMS 5589\/5590 tubing condition/);
  assert.match(alloy718, /seamless tubing/i);
  assert.doesNotMatch(alloy718, /B444/);
  assert.doesNotMatch(alloy718, /Alloy 718 Seamless Pipe/i);
  assert.doesNotMatch(alloy718, /Inconel 718 pipe supplier/i);
});

test("general Inconel pipe page maps Alloy 600 and Alloy 625 correctly", () => {
  assert.match(inconelPipe, /Alloy 600[^\n]*N06600[^\n]*ASTM B167/);
  assert.match(inconelPipe, /Alloy 625[^\n]*N06625[^\n]*ASTM B444/);
  assert.match(inconelPipe, /ASTM B705 welded pipe/);
  assert.match(inconelPipe, /ASTM B829 provides general requirements/);
  assert.doesNotMatch(inconelPipe, /N07718|ASTM B637|AMS 5662/);

  const offeringList = grades(inconelPipe);
  assert.doesNotMatch(offeringList, /Alloy 718|Alloy 825|N07718|N08825/);
  assert.doesNotMatch(inconelPipe, /Alloy 625, 600, 718, 825|718, 825/);
  assert.match(inconelPipe, /Alloy 600 &amp; 625 Enquiries \| Vadodara, Gujarat/);
});

test("Alloy 825 uses Incoloy terminology and its dedicated internal link", () => {
  assert.doesNotMatch(inconelPipe, /Inconel 825/i);
  assert.match(inconelPipe, /href:"\/incoloy-825-pipe-supplier-india",label:"Incoloy 825 Pipe Supplier"/);
});

test("unsupported commercial and certification promises are absent", () => {
  for (const pattern of unsupportedPromises) {
    assert.doesNotMatch(alloy718, pattern);
    assert.doesNotMatch(inconelPipe, pattern);
  }
  assert.doesNotMatch(alloy718, /Special Metals|Carpenter|ATI|VDM/);
  assert.doesNotMatch(inconelPipe, /Special Metals|VDM Metals|Sandvik|Nippon/);
  assert.doesNotMatch(inconelPipe, /All our Inconel pipes|Every pipe ships/);
  assert.doesNotMatch(grades(alloy718), /Ready Stock|In Stock|Guaranteed Supply|Guaranteed Availability/i);
  assert.match(grades(alloy718), /Submit form and specification for review/);
});

test("procurement tables use clear, non-inventory headings", () => {
  assert.match(alloy718, /Common Alloy 718 Product Forms and Procurement Requirements/);
  assert.match(alloy718, />UNS Grade<\/th>/);
  assert.match(alloy718, />Dimensions to Specify<\/th>/);
  assert.match(alloy718, />Applicable Specification<\/th>/);
  assert.match(alloy718, />Quotation Status<\/th>/);
  assert.match(inconelPipe, />Alloy Type<\/th>/);
  assert.match(inconelPipe, /Alloy 625 Pipe and Tube Specifications/);
});

test("titles and H1s are distinct and aligned with separate intents", () => {
  assert.match(title(alloy718), /Inconel 718 Supplier India/);
  assert.match(title(inconelPipe), /Inconel Pipe Supplier India/);
  assert.notEqual(title(alloy718), title(inconelPipe));
  assert.match(h1(alloy718), /Inconel 718 Supplier in India/);
  assert.match(h1(inconelPipe), /Inconel Pipe Supplier in India/);
  assert.notEqual(h1(alloy718), h1(inconelPipe));
});

test("canonicals, robots directives and schema mechanisms remain intact", () => {
  assert.match(alloy718, /<Link rel="canonical" href="https:\/\/www\.creativemetalind\.com\/inconel-718-supplier-india" \/>/);
  assert.match(inconelPipe, /<Link rel="canonical" href="https:\/\/www\.creativemetalind\.com\/inconel-pipe-supplier-india" \/>/);
  for (const source of [alloy718, inconelPipe]) {
    assert.match(source, /<Meta name="robots" content="index, follow, max-image-preview:large" \/>/);
    assert.match(source, /const FAQ_SCHEMA = JSON\.stringify\([\s\S]*FAQS\.map/);
    assert.match(source, /<script type="application\/ld\+json" innerHTML=\{SCHEMA\} \/>/);
    assert.match(source, /<script type="application\/ld\+json" innerHTML=\{FAQ_SCHEMA\} \/>/);
    assert.match(source, /\{FAQS\.map\(f =>/);
  }
});

test("internal product and enquiry links remain accurate and functional", () => {
  assert.match(alloy718, /href:"\/inconel-pipe-supplier-india", label:"Inconel Pipe Supplier India"/);
  assert.match(inconelPipe, /href:"\/inconel-718-supplier-india",label:"Alloy 718 Bar & Tubing Enquiries"/);
  for (const source of [alloy718, inconelPipe]) {
    assert.match(source, /href="\/\#contact"/);
    assert.match(source, /href="tel:\+919998280619"/);
    assert.match(source, /href="https:\/\/wa\.me\/919998280619/);
  }
});
