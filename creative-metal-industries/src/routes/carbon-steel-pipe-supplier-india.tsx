import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const STANDARDS = [
  { standard: "ASTM A106", form: "Seamless carbon steel pipe", use: "Commonly specified for elevated-temperature process piping", href: "/a106-gr-b-seamless-pipe-india", label: "A106 Gr.B seamless pipe" },
  { standard: "ASTM A53", form: "Seamless or welded pipe, depending on type", use: "General mechanical, pressure and utility requirements", href: "/a53-erw-pipe-supplier-india", label: "A53 ERW pipe" },
  { standard: "API 5L", form: "Seamless or welded line pipe", use: "Pipeline transportation systems for oil, gas and water", href: "/api-5l-line-pipe-supplier-india", label: "API 5L line pipe" },
  { standard: "IS 1239", form: "Steel tubes and tubulars covered by the specified part", use: "Indian-standard water, gas, air and general engineering requirements", href: "/#contact", label: "Enquire about IS 1239" },
  { standard: "IS 3589", form: "Electric-fusion-welded steel pipe", use: "Water, sewage and other specified large-diameter applications", href: "/#contact", label: "Enquire about IS 3589" },
];

const FAQS = [
  { q: "What information is needed for a carbon steel pipe quotation?", a: "Send the governing standard and edition, grade, seamless or welded requirement, nominal size or outside diameter, schedule or wall thickness, length, quantity, end finish, delivery destination and requested date. Also list every required certificate, IBR requirement, NACE clause, test and inspection hold point so the offered scope can be confirmed in the quotation." },
  { q: "What is the difference between ASTM A106, ASTM A53 and API 5L?", a: "ASTM A106 covers seamless carbon steel pipe for high-temperature service. ASTM A53 covers seamless and welded pipe, depending on type, for mechanical and pressure applications and permits several finish conditions. API 5L covers seamless and welded line pipe for pipeline transportation systems. The purchaser's design specification and project engineer should determine the governing standard." },
  { q: "What is the difference between seamless and ERW carbon steel pipe?", a: "Seamless pipe is produced without a longitudinal weld seam. ERW pipe is formed from strip and joined by electric resistance welding. Neither manufacturing route should be selected from a general web description alone: confirm the governing standard, grade, design conditions, dimensional requirements and project clauses before purchase." },
  { q: "How are carbon steel pipe sizes and schedules specified?", a: "Pipe is commonly ordered by nominal pipe size or nominal bore together with a schedule, or by outside diameter and exact wall thickness. A schedule is a wall-thickness designation; its actual thickness changes with nominal size. Include both the size and schedule or wall thickness in the enquiry." },
  { q: "What affects carbon steel pipe price in India?", a: "Price depends on the standard, grade, seamless or welded construction, size, wall thickness, length, quantity, source requirement, testing, documentation, inspection, coating, delivery destination and current availability. A dated quotation based on the complete specification is more reliable than a generic price-per-kilogram figure." },
  { q: "Can MTC, IBR, sour-service and third-party inspection requirements be included?", a: "EN 10204 3.1 certificates, IBR documentation, sour-service material requirements and third-party inspection may be included in an enquiry. State the exact IBR document and applicable product, the governing NACE or ISO standard, edition and clause, service conditions, required tests, acceptance criteria and inspection plan. Compliance and document scope must be confirmed for the specific offered material and order; these are not universal approvals of CMI or every carbon steel pipe." },
  { q: "Is carbon steel pipe the same as carbon steel tube?", a: "The terms are sometimes used loosely, but procurement dimensions differ. Pipe is generally specified by nominal pipe size and schedule, while tube is commonly specified by actual outside diameter and wall thickness. Use the terminology and dimensional standard stated in the purchase specification." },
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.creativemetalind.com" },
    { "@type": "ListItem", position: 2, name: "Carbon Steel Pipe Supplier India", item: "https://www.creativemetalind.com/carbon-steel-pipe-supplier-india" },
  ],
});
const FAQ_SCHEMA = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) });

const heading = { "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" };
const card = { background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "8px", padding: "1rem" };

export default function CarbonSteelPipeSupplierIndia() {
  return (
    <>
      <Title>Carbon Steel Pipe Supplier in India | Seamless &amp; ERW | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Carbon steel pipe supplier, dealer and stockist in India. Compare ASTM A106, A53, API 5L, IS 1239 and IS 3589, then request an order-specific quote." />
      <Link rel="canonical" href="https://www.creativemetalind.com/carbon-steel-pipe-supplier-india" />
      <Meta property="og:type" content="website" />
      <Meta property="og:title" content="Carbon Steel Pipe Supplier in India | Seamless & ERW | Creative Metal Industries" />
      <Meta property="og:description" content="Carbon steel pipe enquiries for seamless and welded requirements, with specification guidance, documentation options and pan-India delivery." />
      <Meta property="og:url" content="https://www.creativemetalind.com/carbon-steel-pipe-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Carbon Steel Pipe Supplier in India | Seamless & ERW | CMI" />
      <Meta name="twitter:description" content="Compare carbon steel pipe standards and send grade, size, schedule, quantity and documentation requirements for a quotation." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{ background: "#fff", "border-bottom": "1px solid #e5e7eb", padding: "1rem 1.5rem", display: "flex", "align-items": "center", gap: "1rem" }}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries" width="140" height="71" /></a>
        <div style={{ flex: 1 }} />
        <a href="/#contact" style={{ background: "#E8821A", color: "#fff", padding: "0.5rem 1.2rem", "border-radius": "6px", "font-weight": "700", "font-size": "0.85rem", "text-decoration": "none" }}>Request a Quote</a>
      </nav>
      <div style={{ background: "#f9fafb", "border-bottom": "1px solid #e5e7eb", padding: "0.6rem 1.5rem", "font-size": "0.82rem", color: "#6b7280" }}>
        <a href="/" style={{ color: "#E8821A", "text-decoration": "none" }}>Home</a><span style={{ margin: "0 0.5rem" }}>›</span><span>Carbon Steel Pipe Supplier India</span>
      </div>

      <main style={{ "max-width": "960px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <div style={{ "margin-bottom": "2.5rem", "text-align": "center" }}>
          <h1 style={{ "font-size": "clamp(1.8rem,4vw,2.6rem)", "font-weight": "800", color: "#111827", margin: "0 0 1rem", "line-height": "1.2" }}>Carbon Steel Pipe Supplier in India — Seamless &amp; ERW</h1>
          <p style={{ "font-size": "1.05rem", color: "#374151", "line-height": "1.8", "max-width": "780px", margin: "0 auto" }}>
            Creative Metal Industries is a carbon steel pipe supplier, dealer and stockist serving industrial buyers across India. Regular physical stock is maintained at the GIDC Makarpura warehouse, with additional requirements handled against the buyer's specification. Send the standard, grade, dimensions, quantity and documentation clauses to confirm current availability and receive an order-specific quotation.
          </p>
        </div>

        <h2 style={heading}>Carbon Steel Pipe Standards by Application</h2>
        <p style={{ color: "#374151", "line-height": "1.8" }}>The standards below represent distinct procurement requirements. They are not interchangeable, and listing a standard does not mean every grade, size or wall thickness is continuously available.</p>
        <div style={{ overflow: "auto", border: "1px solid #e5e7eb", "border-radius": "10px", "margin-bottom": "2rem" }}>
          <table style={{ width: "100%", "border-collapse": "collapse", "font-size": "0.86rem", "min-width": "760px" }}>
            <thead><tr style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff" }}><th style={{ padding: "0.75rem", "text-align": "left" }}>Standard</th><th style={{ padding: "0.75rem", "text-align": "left" }}>Product form</th><th style={{ padding: "0.75rem", "text-align": "left" }}>Typical specification intent</th><th style={{ padding: "0.75rem" }}>Next step</th></tr></thead>
            <tbody>{STANDARDS.map((item, index) => <tr style={{ background: index % 2 ? "#f9fafb" : "#fff" }}><td style={{ padding: "0.7rem", "font-weight": "700" }}>{item.standard}</td><td style={{ padding: "0.7rem" }}>{item.form}</td><td style={{ padding: "0.7rem" }}>{item.use}</td><td style={{ padding: "0.7rem", "text-align": "center" }}><a href={item.href} style={{ color: "#E8821A", "font-weight": "700" }}>{item.label} →</a></td></tr>)}</tbody>
          </table>
        </div>

        <h2 style={heading}>Seamless vs ERW Carbon Steel Pipe</h2>
        <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(280px,1fr))", gap: "1rem" }}>
          <div style={card}><h3 style={{ margin: "0 0 0.5rem", color: "#111827" }}>Seamless pipe</h3><p style={{ margin: 0, color: "#4b5563", "line-height": "1.7" }}>Produced without a longitudinal weld seam. ASTM A106 is a common seamless specification for elevated-temperature service. Confirm the grade, schedule, design conditions and project clauses rather than selecting pipe from manufacturing method alone.</p></div>
          <div style={card}><h3 style={{ margin: "0 0 0.5rem", color: "#111827" }}>ERW and other welded pipe</h3><p style={{ margin: 0, color: "#4b5563", "line-height": "1.7" }}>Welded pipe is formed from strip or plate using a process permitted by the governing standard. ERW is one longitudinal electric-resistance-welded route; API 5L may permit other welded routes depending on the edition, grade, dimensions and project specification. State the permitted process, weld examination and governing specification in the RFQ.</p></div>
        </div>

        <h2 style={heading}>How to Specify Size, Schedule and Length</h2>
        <p style={{ color: "#374151", "line-height": "1.8" }}>Pipe is normally ordered by nominal pipe size or nominal bore together with a schedule, or by outside diameter and exact wall thickness. The same schedule has different wall thicknesses at different nominal sizes. Exact stocked diameters and wall thicknesses are therefore confirmed against each enquiry rather than represented as a universal range.</p>

        <h2 style={heading}>Information to Include in a Carbon Steel Pipe RFQ</h2>
        <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(250px,1fr))", gap: "0.8rem" }}>
          {[
            ["Material specification", "Standard, edition, grade and seamless or welded requirement"],
            ["Dimensions", "NPS/NB or OD, schedule or wall thickness, and required length"],
            ["Commercial quantity", "Number of lengths, total metres or total weight"],
            ["Ends and surface", "Plain, bevelled or threaded ends; coating or finish requirements"],
            ["Service conditions", "Application, design pressure and temperature where relevant"],
            ["Documents", "EN 10204 3.1 MTC and any required IBR or NACE clauses"],
            ["Inspection", "Third-party agency, inspection plan, tests and witness or hold points"],
            ["Delivery", "Destination, required date, packing and transport instructions"],
          ].map(([title, text]) => <div style={card}><h3 style={{ "font-size": "0.95rem", margin: "0 0 0.35rem", color: "#111827" }}>{title}</h3><p style={{ "font-size": "0.86rem", margin: 0, color: "#6b7280", "line-height": "1.55" }}>{text}</p></div>)}
        </div>

        <h2 style={heading}>Documentation, Inspection and Supply Services</h2>
        <ul style={{ color: "#374151", "line-height": "1.8", padding: "0 0 0 1.25rem" }}>
          <li>EN 10204 3.1 material test certificates are available for applicable supplied material.</li>
          <li>IBR-approved material and documentation are available only where the specific offered product and order documents meet the applicable requirement; this does not represent universal IBR approval or CMI certification.</li>
          <li>NACE-compliant material is available only where confirmed against the governing NACE or ISO standard, edition, clause, service conditions, tests and acceptance criteria for the offered material.</li>
          <li>Third-party inspection can be arranged against the agreed inspection scope.</li>
          <li>Cut-to-length service and pipe-spool supply are available; send drawings, dimensions, end preparation and inspection requirements.</li>
          <li>Pan-India delivery is available from the GIDC Makarpura warehouse, subject to quotation terms and order confirmation.</li>
        </ul>

        <h2 style={heading}>What Determines Carbon Steel Pipe Price?</h2>
        <p style={{ color: "#374151", "line-height": "1.8" }}>Carbon steel pipe price depends on the standard and grade, seamless or welded construction, diameter, wall thickness, length, quantity, source requirement, testing, documentation, inspection, coating, delivery destination and current availability. Request a dated quotation using the complete specification instead of relying on an undated price-per-kilogram figure.</p>

        <h2 style={heading}>Explore Carbon Steel Pipe Specifications</h2>
        <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(220px,1fr))", gap: "0.75rem" }}>
          {[
            ["/a106-gr-b-seamless-pipe-india", "ASTM A106 Gr.B Seamless Pipe"],
            ["/a53-erw-pipe-supplier-india", "ASTM A53 ERW Pipe"],
            ["/api-5l-line-pipe-supplier-india", "API 5L Line Pipe"],
            ["/carbon-steel-sa516-plate-stockist-india", "Related SA 516 Plate"],
          ].map(([href, label]) => <a href={href} style={{ background: "#fff8f0", border: "1px solid #fde8cc", "border-radius": "8px", padding: "0.85rem 1rem", "font-size": "0.88rem", "font-weight": "600", color: "#E8821A", "text-decoration": "none" }}>{label} →</a>)}
        </div>

        <h2 style={heading}>Frequently Asked Questions</h2>
        <div style={{ display: "flex", "flex-direction": "column", gap: "0.75rem", "margin-bottom": "3rem" }}>{FAQS.map((faq) => <details style={{ background: "#fff", border: "1px solid #e5e7eb", "border-radius": "10px", padding: "1rem 1.25rem" }}><summary style={{ "font-weight": "700", color: "#111827", cursor: "pointer" }}>{faq.q}</summary><p style={{ color: "#374151", "line-height": "1.7", "margin-bottom": 0 }}>{faq.a}</p></details>)}</div>

        <div style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", "border-radius": "12px", padding: "2.5rem 1.25rem", "text-align": "center" }}>
          <h2 style={{ color: "#fff", margin: "0 0 0.75rem" }}>Request a Carbon Steel Pipe Quote</h2>
          <p style={{ color: "rgba(255,255,255,0.92)", "max-width": "680px", margin: "0 auto 1.5rem" }}>Send the standard, grade, dimensions, quantity, documentation and delivery destination. The quotation will confirm the offered material, current availability, inspection scope and commercial terms.</p>
          <div style={{ display: "flex", gap: "0.75rem", "justify-content": "center", "flex-wrap": "wrap" }}>
            <a href="/#contact" style={{ background: "#fff", color: "#E8821A", "font-weight": "800", padding: "0.75rem 1.25rem", "border-radius": "8px", "text-decoration": "none" }}>Request a Quote</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+a+quotation+for+carbon+steel+pipe.+I+will+share+the+standard%2C+grade%2C+size%2C+schedule%2C+quantity+and+documentation+requirements." target="_blank" rel="noopener" style={{ background: "#25D366", color: "#fff", "font-weight": "800", padding: "0.75rem 1.25rem", "border-radius": "8px", "text-decoration": "none" }}>Enquire About Available Grades</a>
            <a href="/#contact" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "2px solid rgba(255,255,255,0.5)", "font-weight": "700", padding: "0.75rem 1.25rem", "border-radius": "8px", "text-decoration": "none" }}>Request MTC Details</a>
          </div>
        </div>

        <RelatedPages currentPath="/carbon-steel-pipe-supplier-india" />
      </main>

      <footer style={{ background: "#111827", color: "#9ca3af", padding: "2rem 1.5rem", "text-align": "center", "font-size": "0.82rem" }}>
        <p><strong style={{ color: "#fff" }}>Creative Metal Industries</strong> — supplier, dealer and stockist established in 2012</p>
        <p>GIDC Makarpura warehouse, Vadodara | <a href="tel:+919998280619" style={{ color: "#E8821A" }}>+91 99982 80619</a></p>
      </footer>
    </>
  );
}
