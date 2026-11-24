import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const FAQS = [
  { q: "What is ASTM A53 Type E pipe?", a: "ASTM A53 Type E is electric-resistance-welded carbon steel pipe. The required grade, edition, dimensions, finish, testing and end preparation should be stated in the purchase specification." },
  { q: "How does A53 Type E differ from A106 pipe?", a: "ASTM A53 covers welded and seamless pipe, depending on type, for mechanical and pressure applications. ASTM A106 covers seamless carbon steel pipe for high-temperature service. They are not interchangeable; use the standard required by the approved piping specification." },
  { q: "Can A53 ERW pipe be requested in black or galvanized finish?", a: "State black or galvanized finish and the governing coating requirements in the enquiry. Availability, coating scope, dimensions and end preparation must be confirmed for the offered material." },
  { q: "What should an A53 ERW pipe enquiry include?", a: "Include the ASTM or ASME specification and edition, type, grade, NPS or OD, schedule or wall thickness, length, quantity, finish, ends, application, tests, documents and delivery destination." },
  { q: "What documents can be requested with A53 ERW pipe?", a: "EN 10204 3.1 material test certificates are available for applicable supplied material. State every certificate, inspection and project requirement in the RFQ so the quotation can confirm the exact document scope." },
];

const SCHEMA = JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.creativemetalind.com" },
  { "@type": "ListItem", position: 2, name: "Carbon Steel Pipe", item: "https://www.creativemetalind.com/carbon-steel-pipe-supplier-india" },
  { "@type": "ListItem", position: 3, name: "A53 ERW Pipe", item: "https://www.creativemetalind.com/a53-erw-pipe-supplier-india" },
] });
const FAQ_SCHEMA = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) });
const heading = { "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" };
const card = { background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "8px", padding: "1rem" };

export default function A53ErwPipeSupplierIndia() {
  return <>
    <Title>A53 ERW Pipe Supplier India | ASTM A53 Type E | CMI</Title>
    <Meta name="robots" content="index, follow, max-image-preview:large" />
    <Meta name="description" content="ASTM A53 Type E ERW pipe supplier in India. Review grade, finish and RFQ requirements, then confirm dimensions, documentation and availability." />
    <Link rel="canonical" href="https://www.creativemetalind.com/a53-erw-pipe-supplier-india" />
    <Meta property="og:type" content="website" /><Meta property="og:title" content="A53 ERW Pipe Supplier India | Creative Metal Industries" />
    <Meta property="og:description" content="ASTM A53 Type E ERW pipe enquiries with order-specific grade, dimensions, finish, documentation and availability confirmation." />
    <Meta property="og:url" content="https://www.creativemetalind.com/a53-erw-pipe-supplier-india" /><Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
    <Meta name="twitter:card" content="summary_large_image" /><Meta name="twitter:title" content="A53 ERW Pipe Supplier India | CMI" /><Meta name="twitter:description" content="Send the A53 type, grade, dimensions, finish, quantity and document requirements for an order-specific quotation." /><Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
    <script type="application/ld+json" innerHTML={SCHEMA} /><script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

    <nav style={{ background: "#fff", "border-bottom": "1px solid #e5e7eb", padding: "1rem 1.5rem", display: "flex", "align-items": "center", gap: "1rem", "flex-wrap": "wrap" }}><a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries" width="140" height="71" /></a><div style={{ flex: 1 }} /><a href="/#contact" style={{ background: "#E8821A", color: "#fff", padding: "0.5rem 1rem", "border-radius": "6px", "font-weight": "700", "text-decoration": "none" }}>Request Quote</a></nav>
    <div style={{ background: "#f9fafb", padding: "0.6rem 1.5rem", "font-size": "0.82rem", color: "#6b7280" }}><a href="/" style={{ color: "#E8821A" }}>Home</a> › <a href="/carbon-steel-pipe-supplier-india" style={{ color: "#E8821A" }}>Carbon Steel Pipe</a> › A53 ERW Pipe</div>

    <main style={{ "max-width": "960px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <header style={{ "text-align": "center", "max-width": "780px", margin: "0 auto" }}><h1 style={{ "font-size": "clamp(1.8rem,4vw,2.6rem)", "line-height": "1.2", color: "#111827" }}>A53 ERW Pipe Supplier in India</h1><p style={{ color: "#374151", "line-height": "1.8" }}>Creative Metal Industries handles ASTM A53 Type E electric-resistance-welded carbon steel pipe enquiries for Indian industrial buyers. Send the applicable edition, grade, dimensions, finish, quantity and project clauses so current availability, source, documentation and delivery terms can be confirmed per quotation.</p></header>

      <h2 style={heading}>ASTM A53 Type E Procurement Scope</h2>
      <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(250px,1fr))", gap: "1rem" }}>{[
        ["Standard", "ASTM A53 / ASME SA-53 when specified"], ["Product form", "Type E electric-resistance-welded carbon steel pipe"], ["Grade", "State Grade A or Grade B and the governing edition"], ["Dimensions", "Specify NPS/NB or OD, schedule or wall thickness and length"], ["Finish and ends", "State black or galvanized finish and plain, bevelled or threaded ends"], ["Availability", "Stock, source, finish and delivery terms are confirmed per quotation"],
      ].map(([a,b]) => <div style={card}><strong>{a}</strong><p style={{ color: "#6b7280", margin: "0.35rem 0 0", "line-height": "1.6" }}>{b}</p></div>)}</div>

      <h2 style={heading}>A53 Type E Grades, Dimensions and Finish</h2>
      <p style={{ color: "#374151", "line-height": "1.8" }}>ASTM A53 Type E includes distinct Grade A and Grade B requirements. The purchase specification must identify the required grade and applicable ASTM A53/A53M or ASME SA-53 edition; grade names should not be treated as interchangeable and this page does not assign edition-independent chemistry or strength values. Specify NPS and schedule, or outside diameter and exact wall thickness, because a schedule designation represents different wall thicknesses at different nominal sizes.</p>
      <p style={{ color: "#374151", "line-height": "1.8" }}>State whether black or galvanized finish is required, together with coating clauses, end preparation, length and tolerances. Plain, bevelled, threaded or coupled ends are purchaser-defined requirements. Hydrostatic testing, permitted test alternatives, weld examination, dimensional inspection and additional project tests must follow the applicable standard edition and purchase order; A53 designation alone does not establish automatic fire-protection approval.</p>

      <h2 style={heading}>A53 ERW and Other Carbon Steel Pipe Standards</h2>
      <p style={{ color: "#374151", "line-height": "1.8" }}>ASTM A53 Type E identifies electric-resistance-welded pipe under the A53 specification. ASTM A106 covers seamless carbon steel pipe commonly specified for elevated-temperature service, while API 5L addresses seamless and applicable welded line pipe for pipeline transportation systems. Product selection must follow the approved design and purchase specification rather than a general application list.</p>

      <h2 style={heading}>Information to Include in an A53 ERW RFQ</h2>
      <ul style={{ color: "#374151", "line-height": "1.9" }}><li>ASTM/ASME specification, edition, Type E and required grade</li><li>NPS/NB or outside diameter, schedule or exact wall thickness, length and quantity</li><li>Black or galvanized finish, coating clauses and end preparation</li><li>Application and design or service conditions where relevant</li><li>EN 10204 3.1 MTC, testing, inspection and traceability requirements</li><li>Delivery destination and required date</li></ul>

      <h2 style={heading}>Documentation, Testing and Availability</h2>
      <p style={{ color: "#374151", "line-height": "1.8" }}>EN 10204 3.1 material test certificates are available for applicable supplied material, and third-party inspection can be arranged against an agreed inspection scope. Include hydrostatic, weld examination, coating, dimensional or project-specific requirements in the enquiry. The quotation should identify the offered grade, dimensions, finish, source, documents, inspection scope and delivery terms.</p>

      <h2 style={heading}>Frequently Asked Questions</h2><div style={{ display: "grid", gap: "0.75rem" }}>{FAQS.map((f) => <details style={{ ...card, background: "#fff" }}><summary style={{ "font-weight": "700", cursor: "pointer" }}>{f.q}</summary><p style={{ color: "#374151", "line-height": "1.7" }}>{f.a}</p></details>)}</div>

      <div style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff", padding: "2.25rem 1.25rem", "border-radius": "12px", "text-align": "center", margin: "3rem 0 2rem" }}><h2>Request an A53 ERW Pipe Quote</h2><p>Send the type, grade, dimensions, finish, quantity, documents and destination for confirmation.</p><div style={{ display: "flex", gap: "0.75rem", "justify-content": "center", "flex-wrap": "wrap" }}><a href="/#contact" style={{ background: "#fff", color: "#E8821A", padding: "0.75rem 1.25rem", "border-radius": "8px", "font-weight": "800" }}>Use Enquiry Form</a><a href="tel:+919998280619" style={{ background: "#fff", color: "#E8821A", padding: "0.75rem 1.25rem", "border-radius": "8px", "font-weight": "800" }}>Call +91 99982 80619</a><a href="https://wa.me/919998280619?text=Hi%2C+I+need+an+ASTM+A53+ERW+pipe+quotation." target="_blank" rel="noopener" style={{ background: "#25D366", color: "#fff", padding: "0.75rem 1.25rem", "border-radius": "8px", "font-weight": "800" }}>WhatsApp Requirement</a></div></div>

      <h2 style={heading}>Related Carbon Steel Pipe Pages</h2><div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(210px,1fr))", gap: "0.75rem" }}>{[["/carbon-steel-pipe-supplier-india","Compare Carbon Steel Pipe Standards"],["/a106-gr-b-seamless-pipe-india","ASTM A106 Grade B Seamless Pipe"],["/api-5l-line-pipe-supplier-india","API 5L Line Pipe"]].map(([href,label]) => <a href={href} style={{ ...card, color: "#E8821A", "font-weight": "700" }}>{label} →</a>)}</div>
      <RelatedPages currentPath="/a53-erw-pipe-supplier-india" />
    </main>
  </>;
}
