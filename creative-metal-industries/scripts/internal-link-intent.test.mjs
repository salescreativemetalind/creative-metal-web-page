import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [home, layout, stainlessGuide, ssNational, ssLocal, ssSeamless, ssGrades, ss310, duplex, duplexPlate, superDuplexPipe] = await Promise.all([
  readFile(new URL("../src/routes/index.tsx", import.meta.url), "utf8"),
  readFile(new URL("../src/components/Layout.tsx", import.meta.url), "utf8"),
  readFile(new URL("../src/routes/top-stainless-steel-pipe-supplier-india-quality-assured.tsx", import.meta.url), "utf8"),
  readFile(new URL("../src/routes/ss-pipe-supplier.tsx", import.meta.url), "utf8"),
  readFile(new URL("../src/routes/stainless-steel-supplier-vadodara.tsx", import.meta.url), "utf8"),
  readFile(new URL("../src/routes/ss-seamless-pipe-supplier-india.tsx", import.meta.url), "utf8"),
  readFile(new URL("../src/routes/ss-304-316l-pipe-supplier-india.tsx", import.meta.url), "utf8"),
  readFile(new URL("../src/routes/ss-310-pipe-supplier-india.tsx", import.meta.url), "utf8"),
  readFile(new URL("../src/routes/duplex-steel-supplier-vadodara.tsx", import.meta.url), "utf8"),
  readFile(new URL("../src/routes/duplex-2205-plate-supplier-india.tsx", import.meta.url), "utf8"),
  readFile(new URL("../src/routes/super-duplex-2507-pipe-supplier.tsx", import.meta.url), "utf8"),
]);

test("shared and home product navigation labels describe their destination pages", () => {
  for (const source of [home, layout]) {
    assert.match(source, /href: "\/ss-pipe-supplier",\s+label: "SS Pipes"/);
    assert.match(source, /href: "\/inconel-pipe-supplier-india",\s+label: "Inconel Pipe"/);
    assert.match(source, /href: "\/carbon-steel-pipe-supplier-india",\s+label: "Carbon Steel Pipe"/);
  }
  assert.match(home, /href: "\/ms-beam-ismb-supplier-india",\s+label: "MS Beam ISMB"/);
});

test("homepage company and footer links point to matching product intents", () => {
  assert.match(home, /href="\/ss-pipe-supplier"[^>]*>stainless steel pipes<\/a>/);
  assert.match(home, /href="\/carbon-steel-pipe-supplier-india"[^>]*>carbon steel pipes<\/a>/);
  assert.match(home, /href="\/alloy-steel-pipe-supplier-india"[^>]*>alloy steel pipes<\/a>/);
  assert.match(home, /href="\/inconel-pipe-supplier-india"[^>]*>Inconel pipe<\/a>/);
  assert.match(home, /href="\/hastelloy-pipe-supplier-india"[^>]*>Hastelloy pipe<\/a>/);
  assert.match(home, /href="\/monel-400-pipe-supplier-india"[^>]*>Monel 400<\/a>/);
  assert.match(home, /href="\/ss-seamless-pipe-supplier-india">SS Seamless Pipe<\/a>/);
});

test("stainless pipe buying guide sends welded-pipe readers to the general SS pipe page", () => {
  assert.match(stainlessGuide, /href="\/ss-pipe-supplier">Explore stainless steel pipe enquiries/);
});

test("SS seamless page includes buyer enquiry details without depending on a generic heading", () => {
  assert.match(ssSeamless, /SS Seamless Pipe Enquiries for Indian Buyers/);
  assert.match(ssSeamless, /complete pipe specification, edition and applicable purchase-order or project clauses/);
  assert.match(ssSeamless, /tests, certificates and inspection clauses/);
  assert.match(ssSeamless, /destination and requested date/);
  assert.match(ssSeamless, /not a guarantee of current stock/);
});

test("five stainless steel pages retain distinct search intents", () => {
  assert.match(ssNational, /<Title>SS Pipe Supplier in India \| Seamless &amp; Welded Pipes<\/Title>/);
  assert.match(ssNational, /general pipe enquiry process rather than duplicating detailed grade selection/);
  assert.match(ssLocal, /<Title>Stainless Steel Supplier in Vadodara/);
  assert.match(ssLocal, /location and multi-product page—not the national technical landing page for SS pipe/);
  assert.match(ssSeamless, /<Title>SS Seamless Pipe Supplier in India \| ASTM A312<\/Title>/);
  assert.match(ssSeamless, /without a longitudinal weld seam/);
  assert.match(ssGrades, /<Title>SS 304 &amp; SS 316L Pipe Supplier in India/);
  assert.match(ssGrades, /grade-specific page covers enquiries and procurement distinctions/);
  assert.match(ss310, /<Title>SS 310 &amp; 310S Pipe Supplier in India/);
  assert.match(ss310, /dedicated to SS 310-family pipe grade enquiries/);
});

test("specialist stainless pages link to the national pipe hub without replacing their intent", () => {
  for (const source of [ssLocal, ssSeamless, ssGrades, ss310]) assert.match(source, /href="\/ss-pipe-supplier"/);
  assert.match(ssNational, /href(?:=|:)"\/ss-seamless-pipe-supplier-india"/);
  assert.match(ssNational, /href(?:=|:)"\/ss-304-316l-pipe-supplier-india"/);
  assert.match(ssNational, /href(?:=|:)"\/ss-310-pipe-supplier-india"/);
});

test("stainless pages provide procurement fields without unsupported range or location promises", () => {
  assert.match(ssNational, /How Your Stainless Steel Pipe RFQ Is Reviewed/);
  assert.match(ssNational, /quotation explicitly confirms the offered grade and pipe form/);

  assert.match(ssLocal, /Information to Include in a Vadodara Stainless Steel RFQ/);
  assert.match(ssLocal, /Confirm the current office, visit or collection location by telephone/);
  assert.doesNotMatch(ssLocal, /6NB[–-]600NB|class 150[–-]2500|all grades 3mm[–-]300mm|Full range fittings|386\/B GIDC Estate/);

  assert.match(ssSeamless, /complete pipe specification, edition/);
  assert.match(ssSeamless, /no alternate grade is permitted unless the buyer approves it/);
  assert.match(ssGrades, /SS 304\/316L Pipe RFQ Requirements/);
  assert.match(ssGrades, /does not publish a guaranteed size or schedule range/);
  assert.doesNotMatch(ssGrades, /6NB \(1\/8 inch\) to 600NB|PREN \(approx\.\)|Density \(g\/cm³\)/);
  assert.match(ss310, /Service Data to Include in an SS 310-Family RFQ/);
  assert.match(ss310, /continuous, intermittent or cyclic/);
});

test("duplex page keeps certification terms as buyer requirements, not company or product claims", () => {
  const metadataStart = duplex.indexOf("<Title>");
  const metadataEnd = duplex.indexOf('<script type="application/ld+json"', metadataStart);
  const metadata = duplex.slice(metadataStart, metadataEnd);

  // The evidence matrix has no scoped IBR/NACE certificates or MTC records.
  assert.doesNotMatch(metadata, /\b(?:IBR|NACE|MTC)\b|certif(?:ied|ication)|authori[sz]ed/i);
  assert.doesNotMatch(duplex, /\b(?:IBR|NACE|MTC)\b[^.!?\n]{0,70}\b(?:certified|certification|certificate|certificates|compliant|compliance|available|stocked|supplied|provided|on every|every consignment)\b/i);
  assert.doesNotMatch(duplex, /\b(?:authori[sz]ed|certified)\s+(?:IBR|NACE|MTC)\s+(?:supplier|material|products?|stock)\b/i);
  assert.match(duplex, /List any project-specific documentation or compliance requirements, such as IBR, NACE or MTC/);
  assert.match(duplex, /scope can be confirmed for the specific order/);
  assert.match(duplex, /"acceptedAnswer": \{ "@type": "Answer", "text": f\.a \}/);
  assert.match(duplex, /wa\.me\/919998280619\?text=Hi%2C\+I\+need\+duplex\+or\+super\+duplex\+steel\+in\+Gujarat/);
  assert.match(duplex, /Duplex Steel Supplier in \{? ?<span style=\{\{ color: "#E8821A" \}\}>Vadodara/);
});

test("homepage uses semantic heading levels while keeping its hero card presentational", () => {
  assert.match(home, /<div class="hero-card-title">Industrial Metal Products<\/div>/);
  assert.doesNotMatch(home, /<h3>Industrial Metal Products<\/h3>/);
  for (const title of ["Our Mission", "Quality Policy", "Global Reach", "Timing Confirmation"]) {
    assert.match(home, new RegExp(`<h3>${title}<\\/h3>`));
    assert.doesNotMatch(home, new RegExp(`<h4>${title}<\\/h4>`));
  }
});

test("duplex plate page links Super Duplex 2507 intent to its dedicated pipe page", () => {
  assert.match(duplexPlate, /href:"\/super-duplex-2507-pipe-supplier",\s*label:"Super Duplex 2507 Pipe"/);
  assert.doesNotMatch(duplexPlate, /href:"\/duplex-steel-supplier-vadodara",\s*label:"Super Duplex 2507 Pipe"/);
});

test("duplex pages retain distinct supplier and product-form search intents", () => {
  assert.match(duplex, /<Title>Duplex Steel Supplier in Vadodara/);
  assert.match(duplex, /<h1[\s\S]*?Duplex Steel Supplier in/);
  assert.match(duplexPlate, /<Title>Duplex 2205 Plate Supplier India/);
  assert.match(duplexPlate, /<h1[\s\S]*?Duplex 2205 Plate Supplier in India/);
  assert.match(superDuplexPipe, /<Title>Super Duplex 2507 Pipe Supplier India/);
  assert.match(superDuplexPipe, /<h1[\s\S]*?Super Duplex 2507 Pipe Supplier in India/);
});

test("unsupported duplex certification and stock promises stay out of page claims", () => {
  const pages = [duplex, duplexPlate, superDuplexPipe];
  for (const source of pages) {
    const pageMetadata = source.slice(0, source.indexOf("export default"));
    assert.doesNotMatch(pageMetadata, /\b(?:IBR|NACE|MTC)\s+(?:certified|compliant|available|stockist|stock)\b/i);
    assert.doesNotMatch(source, /\b(?:ready stock|same.day dispatch|dispatch within|NACE certified|IBR certified|MTC certified|manufacturer|stockist)\b|\b(?:we have|currently have|available now|available in stock)\b/i);
    assert.match(source, /(?:does not confirm|not confirmed|for order-specific|must be confirmed)/i);
  }
  // These terms remain valid as documents or requirements a buyer may request.
  assert.match(duplex, /documentation or compliance requirements, such as IBR, NACE or MTC/);
  assert.match(superDuplexPipe, /List the required standard, clause, inspection or certificate in your enquiry/);
});

test("homepage no longer promises unsupported certifications, stock or company credentials", () => {
  assert.doesNotMatch(home, /(?:IBR|NACE|HIC)\s+(?:certified|available|stock available|tested)/i);
  assert.doesNotMatch(home, /\b(?:ready stock|same.day dispatch|50\+ exports|since 2012|authorized mill|certified manufacturer)\b/i);
  assert.match(home, /Specify any required IBR scope for order-specific confirmation/);
  assert.match(home, /Listed grades, standards, dimensions, product forms and source names are enquiry references only/);
});
