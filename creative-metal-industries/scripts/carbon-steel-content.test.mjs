import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const routes = {
  national: "carbon-steel-pipe-supplier-india",
  a106: "a106-gr-b-seamless-pipe-india",
  a53: "a53-erw-pipe-supplier-india",
  api5l: "api-5l-line-pipe-supplier-india",
};
const pages = Object.fromEntries(await Promise.all(Object.entries(routes).map(async ([key, route]) => [key, await readFile(new URL(`../src/routes/${route}.tsx`, import.meta.url), "utf8")])));
const page = pages.national;

test("carbon steel page owns the national generic supplier intent", () => {
  assert.match(page, /<Title>Carbon Steel Pipe Supplier in India \| Seamless &amp; ERW \| CMI<\/Title>/);
  assert.match(page, /<h1[^>]*>Carbon Steel Pipe Supplier in India — Seamless &amp; ERW<\/h1>/);
  assert.equal((page.match(/<h1\b/g) || []).length, 1);
  assert.match(page, /supplier, dealer and stockist serving industrial buyers across India/);
});

test("carbon steel page keeps specialist standards on their dedicated routes", () => {
  assert.match(page, /href: "\/a106-gr-b-seamless-pipe-india"/);
  assert.match(page, /href: "\/a53-erw-pipe-supplier-india"/);
  assert.match(page, /href: "\/api-5l-line-pipe-supplier-india"/);
  assert.match(page, /They are not interchangeable/);
});

test("carbon steel page gives procurement fields and order-specific availability guidance", () => {
  assert.match(page, /Information to Include in a Carbon Steel Pipe RFQ/);
  assert.match(page, /Standard, edition, grade and seamless or welded requirement/);
  assert.match(page, /NPS\/NB or OD, schedule or wall thickness/);
  assert.match(page, /current availability and receive an order-specific quotation/);
  assert.doesNotMatch(page, /\b(?:all sizes|all grades|every length|same.day dispatch|tonnes ready stock|India's largest|best price|quote within)\b/i);
});

test("verified documentation and service claims retain order scope boundaries", () => {
  assert.match(page, /EN 10204 3\.1 material test certificates are available for applicable supplied material/);
  assert.match(page, /specific offered product and order documents meet the applicable requirement/);
  assert.match(page, /does not represent universal IBR approval or CMI certification/);
  assert.match(page, /governing NACE or ISO standard, edition, clause, service conditions, tests and acceptance criteria/);
  assert.match(page, /Third-party inspection can be arranged against the agreed inspection scope/);
  assert.match(page, /Cut-to-length service and pipe-spool supply are available/);
  assert.match(page, /subject to quotation terms and order confirmation/);
});

test("carbon steel page routes enquiries through existing working channels", () => {
  assert.match(page, /href="\/#contact"/);
  assert.match(page, /wa\.me\/919998280619\?text=/);
  assert.match(page, /Request a Carbon Steel Pipe Quote/);
  assert.match(page, /Request MTC Details/);
});

test("carbon steel metadata, canonical and FAQ schema remain aligned", () => {
  assert.match(page, /name="robots" content="index, follow, max-image-preview:large"/);
  assert.match(page, /rel="canonical" href="https:\/\/www\.creativemetalind\.com\/carbon-steel-pipe-supplier-india"/);
  assert.match(page, /property="og:url" content="https:\/\/www\.creativemetalind\.com\/carbon-steel-pipe-supplier-india"/);
  assert.match(page, /"@type": "FAQPage"/);
  assert.match(page, /mainEntity: FAQS\.map/);
});

test("all carbon steel cluster pages have one H1, self-canonicals and aligned FAQ schema", () => {
  for (const [key, route] of Object.entries(routes)) {
    const source = pages[key];
    assert.equal((source.match(/<h1\b/g) || []).length, 1, `${route} must have one H1`);
    assert.match(source, new RegExp(`rel="canonical" href="https://www\\.creativemetalind\\.com/${route}"`));
    assert.match(source, /name="robots" content="index, follow, max-image-preview:large"/);
    assert.match(source, /"@type": "FAQPage"/);
    assert.match(source, /mainEntity: FAQS\.map/);
  }
});

test("specialist pages retain distinct intents and link to the national hub", () => {
  assert.match(pages.a106, /A106 Grade B Seamless Pipe Supplier in India/);
  assert.match(pages.a53, /A53 ERW Pipe Supplier in India/);
  assert.match(pages.api5l, /API 5L Line Pipe Supplier in India/);
  for (const source of [pages.a106, pages.a53, pages.api5l]) assert.match(source, /href="\/carbon-steel-pipe-supplier-india"/);
});

test("specialist pages avoid unsupported commercial and relationship claims", () => {
  const specialistSource = [pages.a106, pages.a53, pages.api5l].join("\n");
  assert.doesNotMatch(specialistSource, /500\+\s*tonnes|1000\+\s*tonnes|ready stock|India['’]s largest|same-day dispatch|quote within|Rs\s*80|approved supplier|GAIL\/ONGC-approved|Jindal|Welspun|Ratnamani|ISMT|SAIL|Tata|Surya Roshni|APL Apollo/i);
  assert.doesNotMatch(pages.api5l, /operated by GAIL|specified by Adani|Petronet LNG|dedicated inventory|formal quotation within/i);
});

test("specialist availability and documentation claims are order-specific", () => {
  for (const source of [pages.a106, pages.a53, pages.api5l]) {
    assert.match(source, /confirmed per quotation|confirmed for the offered material|confirmed for the offered product/i);
    assert.match(source, /EN 10204 3\.1/);
    assert.match(source, /\/\#contact/);
    assert.match(source, /wa\.me\/919998280619\?text=/);
  }
});
