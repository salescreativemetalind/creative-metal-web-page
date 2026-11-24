import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const FAQS = [
  { q: "What is API 5L line pipe?", a: "API Specification 5L covers seamless and welded steel line pipe for pipeline transportation systems. The required edition, product specification level, grade, manufacturing process, dimensions and project clauses must be stated in the purchase specification." },
  { q: "What is the difference between API 5L PSL1 and PSL2?", a: "PSL1 and PSL2 have different technical and testing requirements. PSL2 adds requirements in areas such as chemistry, mechanical testing, traceability and nondestructive inspection, subject to the applicable edition and product. The project specification should state the required PSL and supplementary clauses." },
  { q: "How should an API 5L grade be selected?", a: "Grade selection depends on pipeline design, pressure, diameter, wall thickness, temperature, fluid, route, welding and service conditions. Selection belongs to the purchaser's pipeline engineer; an enquiry should state the approved grade rather than asking the supplier to infer it." },
  { q: "Can sour-service or NACE requirements be requested?", a: "Sour-service requirements may be included in an enquiry, but compliance is not automatic from an API 5L grade or PSL. State the governing NACE or ISO document, edition, clause, service conditions, HIC or SSC test requirements, acceptance criteria and inspection plan so compliance and the offered document scope can be confirmed for the specific material and order." },
  { q: "What documents should an API 5L enquiry request?", a: "State the required certificate type, traceability, test reports, NDT records, coating documents and third-party inspection scope. EN 10204 3.1 material test certificates are available for applicable supplied material; any different certificate scope must be confirmed in the quotation." },
];

const GRADE_GUIDE = [
  { designation: "Grade B", meaning: "Base grade designation used within API 5L", procurement: "State PSL, manufacturing route, dimensions, edition and project clauses" },
  { designation: "X42 / X46 / X52", meaning: "X-grade designation; the number identifies the specified minimum yield-strength level in customary units", procurement: "Do not infer availability or suitability; state the engineer-approved grade and PSL" },
  { designation: "X56 / X60 / X65 / X70 and other X grades", meaning: "Higher X-grade designations remain edition- and product-specific", procurement: "Confirm permitted process, toughness, welding, testing and supplementary requirements" },
];

const SCHEMA = JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.creativemetalind.com" },
  { "@type": "ListItem", position: 2, name: "Carbon Steel Pipe", item: "https://www.creativemetalind.com/carbon-steel-pipe-supplier-india" },
  { "@type": "ListItem", position: 3, name: "API 5L Line Pipe", item: "https://www.creativemetalind.com/api-5l-line-pipe-supplier-india" },
] });
const FAQ_SCHEMA = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) });
const heading = { "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" };
const card = { background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "8px", padding: "1rem" };

export default function API5lLinePipeSupplierIndia() {
  return <>
    <Title>API 5L Line Pipe Supplier India | PSL1 &amp; PSL2 | CMI</Title>
    <Meta name="robots" content="index, follow, max-image-preview:large" />
    <Meta name="description" content="API 5L line pipe supplier in India. Review PSL, grade and RFQ requirements, then confirm manufacturing route, dimensions, testing and availability." />
    <Link rel="canonical" href="https://www.creativemetalind.com/api-5l-line-pipe-supplier-india" />
    <Meta property="og:type" content="website" /><Meta property="og:title" content="API 5L Line Pipe Supplier India | Creative Metal Industries" />
    <Meta property="og:description" content="API 5L line pipe enquiries with order-specific PSL, grade, process, dimensions, testing, documentation and availability confirmation." />
    <Meta property="og:url" content="https://www.creativemetalind.com/api-5l-line-pipe-supplier-india" /><Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
    <Meta name="twitter:card" content="summary_large_image" /><Meta name="twitter:title" content="API 5L Line Pipe Supplier India | CMI" /><Meta name="twitter:description" content="Send the API 5L edition, PSL, grade, process, dimensions, quantity and project clauses for an order-specific quotation." /><Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
    <script type="application/ld+json" innerHTML={SCHEMA} /><script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

    <nav style={{ background: "#fff", "border-bottom": "1px solid #e5e7eb", padding: "1rem 1.5rem", display: "flex", "align-items": "center", gap: "1rem", "flex-wrap": "wrap" }}><a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries" width="140" height="71" /></a><div style={{ flex: 1 }} /><a href="/#contact" style={{ background: "#E8821A", color: "#fff", padding: "0.5rem 1rem", "border-radius": "6px", "font-weight": "700", "text-decoration": "none" }}>Request Quote</a></nav>
    <div style={{ background: "#f9fafb", padding: "0.6rem 1.5rem", "font-size": "0.82rem", color: "#6b7280" }}><a href="/" style={{ color: "#E8821A" }}>Home</a> › <a href="/carbon-steel-pipe-supplier-india" style={{ color: "#E8821A" }}>Carbon Steel Pipe</a> › API 5L Line Pipe</div>

    <main style={{ "max-width": "960px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <header style={{ "text-align": "center", "max-width": "780px", margin: "0 auto" }}><h1 style={{ "font-size": "clamp(1.8rem,4vw,2.6rem)", "line-height": "1.2", color: "#111827" }}>API 5L Line Pipe Supplier in India</h1><p style={{ color: "#374151", "line-height": "1.8" }}>Creative Metal Industries handles API 5L seamless and welded line pipe enquiries for pipeline procurement in India. Send the applicable edition, PSL, grade, manufacturing process, dimensions, quantity, service conditions and project clauses so source, current availability, documentation and delivery terms can be confirmed per quotation.</p></header>

      <h2 style={heading}>API 5L Procurement Scope</h2>
      <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(250px,1fr))", gap: "1rem" }}>{[
        ["Standard", "API Specification 5L; state the applicable edition"], ["Product form", "Seamless or welded steel line pipe as specified"], ["PSL and grade", "State PSL1 or PSL2 and the approved grade"], ["Dimensions", "Specify outside diameter, wall thickness, length and tolerances"], ["Project clauses", "State service, coating, testing, NDT and supplementary requirements"], ["Availability", "Source, manufacturing route and delivery terms are confirmed per quotation"],
      ].map(([a,b]) => <div style={card}><strong>{a}</strong><p style={{ color: "#6b7280", margin: "0.35rem 0 0", "line-height": "1.6" }}>{b}</p></div>)}</div>

      <h2 style={heading}>API 5L Grade and PSL Procurement Guide</h2>
      <p style={{ color: "#374151", "line-height": "1.8" }}>API 5L uses Grade B and X-grade designations. In an X grade, the number identifies the specified minimum yield-strength level in customary units, but it does not by itself establish PSL, wall thickness, pressure rating, manufacturing route, toughness, sour-service suitability or availability. Use the grade approved by the purchaser's pipeline engineer.</p>
      <div style={{ overflow: "auto", border: "1px solid #e5e7eb", "border-radius": "10px", "margin-bottom": "1.5rem" }}><table style={{ width: "100%", "border-collapse": "collapse", "font-size": "0.86rem", "min-width": "720px" }}><thead><tr style={{ background: "#111827", color: "#fff" }}><th style={{ padding: "0.75rem", "text-align": "left" }}>Grade terminology</th><th style={{ padding: "0.75rem", "text-align": "left" }}>What it communicates</th><th style={{ padding: "0.75rem", "text-align": "left" }}>What the buyer must specify</th></tr></thead><tbody>{GRADE_GUIDE.map((item, index) => <tr style={{ background: index % 2 ? "#f9fafb" : "#fff" }}><td style={{ padding: "0.75rem", "font-weight": "700" }}>{item.designation}</td><td style={{ padding: "0.75rem" }}>{item.meaning}</td><td style={{ padding: "0.75rem" }}>{item.procurement}</td></tr>)}</tbody></table></div>

      <h2 style={heading}>PSL1, PSL2 and Manufacturing Process</h2>
      <p style={{ color: "#374151", "line-height": "1.8" }}>PSL1 and PSL2 are separate product specification levels. PSL2 generally introduces tighter or additional requirements in areas such as chemical composition and carbon-equivalent control, mechanical testing, fracture toughness where applicable, traceability, manufacturing controls and nondestructive inspection. Exact requirements depend on the applicable API 5L edition, grade, dimensions, manufacturing process, service and purchaser-specified clauses.</p>
      <p style={{ color: "#374151", "line-height": "1.8" }}>API 5L covers seamless and applicable welded line pipe. Welded routes may include electric-welded and submerged-arc-welded processes where permitted by the applicable edition and product specification. Do not use ERW, HFW, SAWL/LSAW or SAWH/SSAW as interchangeable labels. The purchase specification must state the permitted process and all welding, toughness, traceability, hydrostatic testing and NDT requirements.</p>

      <h2 style={heading}>Information to Include in an API 5L RFQ</h2>
      <ul style={{ color: "#374151", "line-height": "1.9" }}><li>API 5L edition, PSL, grade and permitted manufacturing process</li><li>Outside diameter, wall thickness, length, quantity and dimensional tolerances</li><li>End preparation, coating system and surface condition</li><li>Design and service conditions, including sour-service requirements where applicable</li><li>Chemical, mechanical, impact, hydrostatic, NDT, HIC or SSC clauses required by the project</li><li>Certificate type, traceability, inspection plan, third-party witness points and delivery destination</li></ul>

      <h2 style={heading}>NACE, Testing, Coating and Documentation</h2>
      <p style={{ color: "#374151", "line-height": "1.8" }}>Sour-service compliance is not an automatic property of API 5L or PSL2. Material described as NACE-compliant is available only where the offered product is confirmed against the applicable NACE or ISO standard, edition, clause, service conditions, hardness or chemistry limits, test methods and acceptance criteria. HIC and SSC testing are separate project requirements and must not be inferred from the grade or PSL alone. Third-party inspection and EN 10204 3.1 documentation may be requested, but the quotation and document schedule must confirm the offered product, traceability, coating, NDT, toughness, hydrostatic, HIC, SSC and inspection scope.</p>

      <h2 style={heading}>API 5L Price and Delivery</h2>
      <p style={{ color: "#374151", "line-height": "1.8" }}>Line pipe pricing depends on the complete technical scope, quantity, manufacturing route, source requirement, testing, coating, inspection, logistics and current availability. Request a dated quotation rather than relying on a static per-kilogram range. Pan-India delivery is available subject to quotation terms and order confirmation.</p>

      <h2 style={heading}>Frequently Asked Questions</h2><div style={{ display: "grid", gap: "0.75rem" }}>{FAQS.map((f) => <details style={{ ...card, background: "#fff" }}><summary style={{ "font-weight": "700", cursor: "pointer" }}>{f.q}</summary><p style={{ color: "#374151", "line-height": "1.7" }}>{f.a}</p></details>)}</div>

      <div style={{ background: "linear-gradient(135deg,#1f2937,#111827)", color: "#fff", padding: "2.25rem 1.25rem", "border-radius": "12px", "text-align": "center", margin: "3rem 0 2rem" }}><h2>Request an API 5L Line Pipe Quote</h2><p>Send the edition, PSL, grade, process, dimensions, quantity, tests, documents and destination for confirmation.</p><div style={{ display: "flex", gap: "0.75rem", "justify-content": "center", "flex-wrap": "wrap" }}><a href="/#contact" style={{ background: "#fff", color: "#111827", padding: "0.75rem 1.25rem", "border-radius": "8px", "font-weight": "800" }}>Use Enquiry Form</a><a href="tel:+919998280619" style={{ background: "#fff", color: "#111827", padding: "0.75rem 1.25rem", "border-radius": "8px", "font-weight": "800" }}>Call +91 99982 80619</a><a href="https://wa.me/919998280619?text=Hi%2C+I+need+an+API+5L+line+pipe+quotation." target="_blank" rel="noopener" style={{ background: "#25D366", color: "#fff", padding: "0.75rem 1.25rem", "border-radius": "8px", "font-weight": "800" }}>WhatsApp Requirement</a></div></div>

      <h2 style={heading}>Related Carbon Steel Pipe Pages</h2><div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(210px,1fr))", gap: "0.75rem" }}>{[["/carbon-steel-pipe-supplier-india","Compare Carbon Steel Pipe Standards"],["/a106-gr-b-seamless-pipe-india","ASTM A106 Grade B Seamless Pipe"],["/a53-erw-pipe-supplier-india","ASTM A53 ERW Pipe"]].map(([href,label]) => <a href={href} style={{ ...card, color: "#E8821A", "font-weight": "700" }}>{label} →</a>)}</div>
      <RelatedPages currentPath="/api-5l-line-pipe-supplier-india" />
    </main>
  </>;
}
