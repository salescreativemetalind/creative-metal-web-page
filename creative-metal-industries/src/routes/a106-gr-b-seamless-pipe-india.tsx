import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const FAQS = [
  { q: "What is ASTM A106 Grade B pipe?", a: "ASTM A106 Grade B is a seamless carbon steel pipe grade used for high-temperature service. The current project specification, design code and purchase clauses should determine whether it is suitable for the intended pressure, temperature and fluid service." },
  { q: "How does ASTM A106 differ from ASTM A53?", a: "ASTM A106 covers seamless carbon steel pipe for high-temperature service. ASTM A53 covers seamless and welded pipe, depending on type, for mechanical and pressure applications. Confirm the required standard, type and grade from the approved piping specification rather than treating the two standards as interchangeable." },
  { q: "What dimensions should an A106 Grade B enquiry include?", a: "State the nominal pipe size or outside diameter, schedule or exact wall thickness, length, quantity, end preparation and any dimensional tolerance clauses. Current availability and cut-to-length feasibility are confirmed against the complete requirement." },
  { q: "Can A106 Grade B be requested with MTC and IBR documentation?", a: "EN 10204 3.1 certificates and IBR-related documentation may be included as order-specific requirements, subject to confirmation for the offered material. State the exact IBR regulation, document or form, applicable product, inspecting authority and project clauses in the enquiry; the quotation must confirm the offered material and document scope, and this does not represent universal IBR approval or CMI certification." },
  { q: "What tests apply to ASTM A106 pipe?", a: "ASTM A106 and its referenced general requirements define applicable chemical, mechanical and product tests. Additional NDT, hardness, impact, inspection or project tests must be stated in the purchase specification and confirmed for the offered material." },
];

const SCHEMA = JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.creativemetalind.com" },
  { "@type": "ListItem", position: 2, name: "Carbon Steel Pipe", item: "https://www.creativemetalind.com/carbon-steel-pipe-supplier-india" },
  { "@type": "ListItem", position: 3, name: "A106 Grade B Seamless Pipe", item: "https://www.creativemetalind.com/a106-gr-b-seamless-pipe-india" },
] });
const FAQ_SCHEMA = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) });
const heading = { "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" };
const card = { background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "8px", padding: "1rem" };

export default function A106GrBSeamlessPipeIndia() {
  return <>
    <Title>A106 Grade B Seamless Pipe Supplier India | CMI</Title>
    <Meta name="robots" content="index, follow, max-image-preview:large" />
    <Meta name="description" content="ASTM A106 Grade B seamless pipe supplier in India. Review specification and RFQ requirements, then confirm dimensions, MTC, IBR scope and availability." />
    <Link rel="canonical" href="https://www.creativemetalind.com/a106-gr-b-seamless-pipe-india" />
    <Meta property="og:type" content="website" /><Meta property="og:title" content="A106 Grade B Seamless Pipe Supplier India | Creative Metal Industries" />
    <Meta property="og:description" content="ASTM A106 Grade B seamless pipe enquiries with order-specific dimensions, documentation, inspection and availability confirmation." />
    <Meta property="og:url" content="https://www.creativemetalind.com/a106-gr-b-seamless-pipe-india" /><Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
    <Meta name="twitter:card" content="summary_large_image" /><Meta name="twitter:title" content="A106 Grade B Seamless Pipe Supplier India | CMI" /><Meta name="twitter:description" content="Send the A106 grade, size, schedule, quantity and documentation clauses for an order-specific quotation." /><Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
    <script type="application/ld+json" innerHTML={SCHEMA} /><script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

    <nav style={{ background: "#fff", "border-bottom": "1px solid #e5e7eb", padding: "1rem 1.5rem", display: "flex", "align-items": "center", gap: "1rem", "flex-wrap": "wrap" }}><a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries" width="140" height="71" /></a><div style={{ flex: 1 }} /><a href="/#contact" style={{ background: "#E8821A", color: "#fff", padding: "0.5rem 1rem", "border-radius": "6px", "font-weight": "700", "text-decoration": "none" }}>Request Quote</a></nav>
    <div style={{ background: "#f9fafb", padding: "0.6rem 1.5rem", "font-size": "0.82rem", color: "#6b7280" }}><a href="/" style={{ color: "#E8821A" }}>Home</a> › <a href="/carbon-steel-pipe-supplier-india" style={{ color: "#E8821A" }}>Carbon Steel Pipe</a> › A106 Grade B</div>

    <main style={{ "max-width": "960px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <header style={{ "text-align": "center", "max-width": "780px", margin: "0 auto" }}><h1 style={{ "font-size": "clamp(1.8rem,4vw,2.6rem)", "line-height": "1.2", color: "#111827" }}>A106 Grade B Seamless Pipe Supplier in India</h1><p style={{ color: "#374151", "line-height": "1.8" }}>Creative Metal Industries handles ASTM A106 Grade B seamless carbon steel pipe enquiries for Indian industrial buyers. Send the governing specification and edition, dimensions, quantity, service conditions and documentation clauses so current availability, source and commercial terms can be confirmed for the order.</p></header>

      <h2 style={heading}>ASTM A106 Grade B Procurement Scope</h2>
      <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(250px,1fr))", gap: "1rem" }}>
        {[ ["Standard", "ASTM A106 / ASME SA-106 when specified"], ["Product form", "Seamless carbon steel pipe"], ["Grade", "Grade B; confirm exact edition and purchase clauses"], ["Dimensions", "Specify NPS/NB or OD, schedule or wall thickness and length"], ["Documentation", "EN 10204 3.1 MTC and applicable IBR requirements can be requested"], ["Availability", "Stock, source and delivery terms are confirmed per quotation"] ].map(([a,b]) => <div style={card}><strong style={{ color: "#111827" }}>{a}</strong><p style={{ color: "#6b7280", margin: "0.35rem 0 0", "line-height": "1.6" }}>{b}</p></div>)}
      </div>

      <h2 style={heading}>A106 Grades and Seamless Manufacturing Route</h2>
      <p style={{ color: "#374151", "line-height": "1.8" }}>ASTM A106/A106M includes Grade A, Grade B and Grade C as distinct seamless carbon steel pipe grades. Grade B is the focus of this page, but the purchase order must state the required grade and applicable edition; the grade names do not establish interchangeable chemistry, strength or design suitability. Product may be hot-finished or cold-drawn as permitted by the applicable standard and purchase specification. Any resulting heat-treatment, testing or dimensional requirements must be checked against the stated ASTM A106/A106M edition and the referenced ASTM A530/A530M general requirements.</p>

      <h2 style={heading}>Where A106 Grade B Is Commonly Specified</h2>
      <p style={{ color: "#374151", "line-height": "1.8" }}>ASTM A106 Grade B is commonly considered for seamless carbon steel process piping and elevated-temperature service. Typical project contexts include steam, boiler auxiliary, refinery and process piping, but ASTM designation alone does not establish a pressure or temperature guarantee. The purchaser's engineer must confirm the governing design code, allowable stress, corrosion allowance, pressure, temperature, fluid and service-specific requirements.</p>

      <h2 style={heading}>Information to Include in an A106 RFQ</h2>
      <ul style={{ color: "#374151", "line-height": "1.9" }}><li>ASTM/ASME specification, edition and Grade B requirement</li><li>NPS/NB or outside diameter, schedule or wall thickness, and length</li><li>Quantity and required end preparation</li><li>Design or service conditions where relevant to the purchase specification</li><li>EN 10204 3.1 MTC, IBR document, testing and inspection clauses</li><li>Delivery destination and required date</li></ul>

      <h2 style={heading}>Documentation and Inspection</h2>
      <p style={{ color: "#374151", "line-height": "1.8" }}>EN 10204 3.1 material test certificates may be requested for the offered material. Where IBR requirements apply, identify the exact product, regulation, document or form, inspecting authority and project clauses; IBR documentation must be confirmed for the specific offered material and order and does not represent universal product approval or CMI certification. Third-party inspection can be arranged against an agreed scope. Confirm that certificates and inspection records correspond to the offered heat or lot before purchase.</p>

      <h2 style={heading}>Frequently Asked Questions</h2><div style={{ display: "grid", gap: "0.75rem" }}>{FAQS.map((f) => <details style={{ ...card, background: "#fff" }}><summary style={{ "font-weight": "700", cursor: "pointer" }}>{f.q}</summary><p style={{ color: "#374151", "line-height": "1.7" }}>{f.a}</p></details>)}</div>

      <div style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff", padding: "2.25rem 1.25rem", "border-radius": "12px", "text-align": "center", margin: "3rem 0 2rem" }}><h2>Request an A106 Grade B Quote</h2><p>Send grade, dimensions, quantity, MTC/IBR requirements and delivery destination for confirmation.</p><div style={{ display: "flex", gap: "0.75rem", "justify-content": "center", "flex-wrap": "wrap" }}><a href="/#contact" style={{ background: "#fff", color: "#E8821A", padding: "0.75rem 1.25rem", "border-radius": "8px", "font-weight": "800" }}>Use Enquiry Form</a><a href="tel:+919998280619" style={{ background: "#fff", color: "#E8821A", padding: "0.75rem 1.25rem", "border-radius": "8px", "font-weight": "800" }}>Call +91 99982 80619</a><a href="https://wa.me/919998280619?text=Hi%2C+I+need+an+ASTM+A106+Grade+B+seamless+pipe+quotation." target="_blank" rel="noopener" style={{ background: "#25D366", color: "#fff", padding: "0.75rem 1.25rem", "border-radius": "8px", "font-weight": "800" }}>WhatsApp Requirement</a></div></div>

      <h2 style={heading}>Related Carbon Steel Pipe Pages</h2><div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(210px,1fr))", gap: "0.75rem" }}>{[["/carbon-steel-pipe-supplier-india","Compare Carbon Steel Pipe Standards"],["/a53-erw-pipe-supplier-india","ASTM A53 ERW Pipe"],["/api-5l-line-pipe-supplier-india","API 5L Line Pipe"]].map(([href,label]) => <a href={href} style={{ ...card, color: "#E8821A", "font-weight": "700" }}>{label} →</a>)}</div>
      <RelatedPages currentPath="/a106-gr-b-seamless-pipe-india" />
    </main>
  </>;
}
