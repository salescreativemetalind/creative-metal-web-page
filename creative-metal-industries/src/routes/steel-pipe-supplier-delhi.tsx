/**
 * /steel-pipe-supplier-delhi
 * Target: "steel pipe supplier Delhi NCR", "SS pipe Delhi",
 * "carbon steel Delhi", "pipe fittings Delhi"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";
import { LocationContent } from "../components/LocationContent";

const PRODUCTS = [
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310, 904L, 202", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L, IS 1239", sizes: "1/2\" to 48\"", type: "Seamless & ERW", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P5, P9, P11, P22, P91, P92", sizes: "1/2\" to 24\"", type: "Seamless (IBR)", stock: "Ready Stock" },
  { category: "Duplex & Super Duplex", grades: "Duplex 2205, Super Duplex 2507", sizes: "1/2\" to 16\"", type: "Seamless & Welded", stock: "Available" },
  { category: "Pipe Fittings", grades: "SS, CS, Alloy — Elbows, Tees, Reducers", sizes: "1/2\" to 48\"", type: "Buttweld & Forged", stock: "Ready Stock" },
  { category: "Flanges", grades: "SS 304/316L, CS A105, Alloy F11/F22/F91", sizes: "1/2\" to 48\"", type: "WN, SO, Blind, RTJ", stock: "Ready Stock" },
  { category: "Steel Plates", grades: "SA 516 Gr.60/70, IS 2062, NACE HIC, BQ", sizes: "6mm to 150mm thick", type: "Hot Rolled", stock: "Available" },
  { category: "Structural & TMT", grades: "TMT Fe500D, MS Angle, ISMC, ISMB, Plate", sizes: "Per IS standards", type: "SAIL / Jindal / Tata", stock: "Ready Stock" },
];

const INDUSTRIES = [
  { icon: "\u{1F6E2}\uFE0F", name: "IOCL Mathura & Panipat Refineries", desc: "Refinery piping — SS, CS, alloy pipes and fittings for turnaround and expansion projects" },
  { icon: "\u26A1", name: "NTPC Power Plants", desc: "NTPC Dadri, Badarpur, Jhajjar — P91, P22, P11 alloy steel pipes with IBR Form III-C" },
  { icon: "\u{1F3ED}", name: "Manufacturing & Engineering", desc: "Noida, Greater Noida, Manesar — precision tubes, hydraulic pipes, industrial piping" },
  { icon: "\u{1F48A}", name: "Pharmaceutical Industry", desc: "Baddi, Haridwar pharma clusters — SS 316L electropolished pipes for GMP facilities" },
  { icon: "\u{1F3D7}\uFE0F", name: "Construction & Real Estate", desc: "Delhi Metro expansion, smart cities, highways — TMT bars, structural steel, MS plates" },
  { icon: "\u{1F30A}", name: "Water & Sewage Infrastructure", desc: "Jal Jeevan Mission, STP projects — MS/SS pipes, DI fittings, large diameter SAW pipes" },
];

const FAQS = [
  { q: "Who is the best steel pipe supplier in Delhi NCR?", a: "Creative Metal Industries (CMI) is a trusted steel pipe supplier serving Delhi NCR (Delhi, Noida, Gurgaon, Faridabad, Ghaziabad) since 2012. We supply stainless steel pipes (304, 316L, 321, 310, 904L), carbon steel (A106, A53, API 5L, IS 1239), alloy steel (P91, P22, P11 with IBR), duplex, and exotic alloys. We serve IOCL Mathura/Panipat, NTPC plants, Delhi Metro, and NCR's manufacturing sector. Our 2000+ tonne Vadodara warehouse ensures 2-3 day delivery to any location in Delhi NCR." },
  { q: "What is the delivery time for steel pipes to Delhi NCR?", a: "Standard delivery from Vadodara to Delhi NCR is 2-3 working days via NH48 highway (approx 1,050 km). Express 48-hour delivery available for urgent requirements. We deliver to all industrial areas in NCR — Wazirpur (Delhi), Mayapuri (Delhi), Noida/Greater Noida, Manesar/Gurgaon, Faridabad, Ghaziabad, Kundli, Bahadurgarh, and Sonepat. Dedicated truck loads for bulk orders with advance scheduling and real-time tracking." },
  { q: "Do you supply to IOCL and NTPC projects in North India?", a: "Yes, we have extensive experience supplying to IOCL refineries (Mathura, Panipat) and NTPC power stations (Dadri, Jhajjar, Rihand, Singrauli). For refineries, we supply as per approved material specifications with TPI by EIL/PDIL, complete MTC (EN 10204 3.1/3.2), PMI reports and NABL lab tests. For power plants, we provide IBR Form III-C certified P91/P22/P11 pipes from Sumitomo, Vallourec and ISMT — always maintaining emergency stock for critical sizes." },
  { q: "What is the price of SS pipe in Delhi today?", a: "SS 304 seamless pipe prices in Delhi NCR range from Rs 250-450 per kg for standard sizes. SS 316L pipes range Rs 350-550 per kg. Welded/ERW SS 304 pipes start from Rs 180 per kg. Carbon steel A106 Gr.B ranges Rs 75-180 per kg. All prices depend on size, schedule, quantity and current LME/market rates. For exact real-time pricing, call +91 99982 80619 — formal quotation within 4 hours. Direct mill supply with no Delhi market broker margins." },
  { q: "Can you supply structural steel and TMT bars in Delhi NCR?", a: "Yes, we supply structural steel and TMT bars across Delhi NCR for construction projects. Our range includes TMT bars (Fe 500D from SAIL, Tata Tiscon, Jindal — 8mm to 32mm), MS angles (25x25 to 200x200mm), ISMC channels (75mm to 400mm), ISMB beams (100mm to 600mm), and MS plates (6mm to 80mm thick). These are supplied as per IS 1786 (TMT), IS 2062 (structural) with original mill certificates. Competitive bulk rates for large construction projects, Delhi Metro, and infrastructure development." },
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-pipe-supplier-delhi#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name": "Creative Metal Industries — Steel Pipe Supplier Delhi NCR",
      "description": "Leading steel pipe supplier in Delhi NCR offering SS pipes, carbon steel pipes, alloy steel, pipe fittings, flanges and structural steel for refineries, power plants and construction.",
      "telephone": "+919998280619",
      "url": "https://www.creativemetalind.com/steel-pipe-supplier-delhi",
      "address": { "@type": "PostalAddress", "streetAddress": "386/B GIDC Estate, Makarpura", "addressLocality": "Vadodara", "addressRegion": "Gujarat", "postalCode": "390010", "addressCountry": "IN" },
      "areaServed": { "@type": "City", "name": "Delhi", "containedInPlace": { "@type": "State", "name": "Delhi NCR" } },
      "priceRange": "$$"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creativemetalind.com" },
        { "@type": "ListItem", "position": 2, "name": "Steel Pipe Supplier Delhi", "item": "https://www.creativemetalind.com/steel-pipe-supplier-delhi" }
      ]
    }
  ]
});
const FAQ_SCHEMA = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) });

export default function SteelPipeSupplierDelhi() {
  return (
    <>
      <Title>Steel Pipe Supplier Delhi NCR | SS CS Alloy | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Steel pipe supplier Delhi NCR — SS 304/316L, carbon steel, alloy P91/P22, duplex pipes, fittings & flanges. IOCL/NTPC approved. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-pipe-supplier-delhi" />
      <Meta property="og:title" content="Steel Pipe Supplier Delhi NCR | SS, Carbon Steel, Alloy | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Steel pipe supplier Delhi NCR — SS, CS, alloy pipes & fittings. IOCL/NTPC approved. Ready stock. CMI." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-pipe-supplier-delhi" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Pipe Supplier Delhi NCR | SS CS Alloy | CMI" />
      <Meta name="twitter:description" content="Steel pipe supplier Delhi NCR — SS, CS, alloy pipes. Ready stock. 2-3 day delivery." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{ background: "#fff", "border-bottom": "1px solid #e5e7eb", padding: "1rem 1.5rem", display: "flex", "align-items": "center", gap: "1rem" }}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Steel Pipe Supplier Delhi NCR" width="140" height="71" /></a>
        <div style={{ flex: 1 }} />
        <a href="/#contact" style={{ background: "#E8821A", color: "#fff", padding: "0.5rem 1.2rem", "border-radius": "6px", "font-weight": "700", "font-size": "0.85rem", "text-decoration": "none" }}>Get Quote</a>
      </nav>
      <div style={{ background: "#f9fafb", "border-bottom": "1px solid #e5e7eb", padding: "0.6rem 1.5rem", "font-size": "0.82rem", color: "#6b7280" }}>
        <a href="/" style={{ color: "#E8821A", "text-decoration": "none" }}>Home</a><span style={{ margin: "0 0.5rem" }}>{"\u203A"}</span>
        <span>Steel Pipe Supplier Delhi NCR</span>
      </div>

      <main style={{ "max-width": "960px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <div style={{ "margin-bottom": "2.5rem", "text-align": "center" }}>
          <h1 style={{ "font-size": "clamp(1.8rem,4vw,2.6rem)", "font-weight": "800", color: "#111827", margin: "0 0 1rem", "line-height": "1.2" }}>
            Steel Pipe Supplier in Delhi NCR — SS Pipes, Carbon Steel &amp; Alloy Steel
          </h1>
          <p style={{ "font-size": "1.05rem", color: "#374151", "line-height": "1.8", "max-width": "750px", margin: "0 auto" }}>
            <strong>Creative Metal Industries</strong> is North India's reliable <strong>steel pipe supplier in Delhi NCR</strong>, delivering stainless steel pipes, carbon steel pipes, alloy steel pipes, pipe fittings, flanges and structural steel across Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and the wider NCR region. We serve IOCL refineries (Mathura, Panipat), NTPC power stations, Delhi Metro Rail Corporation, pharmaceutical manufacturers in Baddi/Haridwar, and the region's thriving manufacturing sector. With 2000+ tonnes ready stock at our Vadodara warehouse and 2-3 day delivery via NH48, we are your fastest route to quality piping materials in North India.
          </p>
        </div>

        {/* Product Table */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Complete Product Range — Pipes, Fittings &amp; Structural Steel for Delhi NCR</h2>
        <div style={{ overflow: "auto", border: "1px solid #e5e7eb", "border-radius": "10px", "margin-bottom": "2rem" }}>
          <table style={{ width: "100%", "border-collapse": "collapse", "font-size": "0.85rem", "min-width": "700px" }}>
            <thead><tr style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff" }}><th style={{ padding: "0.7rem 0.8rem", "text-align": "left" }}>Product</th><th style={{ padding: "0.7rem 0.8rem" }}>Grades</th><th style={{ padding: "0.7rem 0.8rem" }}>Sizes</th><th style={{ padding: "0.7rem 0.8rem" }}>Type</th><th style={{ padding: "0.7rem 0.8rem" }}>Stock</th></tr></thead>
            <tbody>
              {PRODUCTS.map((p, i) => (
                <tr style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb" }}><td style={{ padding: "0.6rem 0.8rem", "font-weight": "700" }}>{p.category}</td><td style={{ padding: "0.6rem 0.8rem" }}>{p.grades}</td><td style={{ padding: "0.6rem 0.8rem" }}>{p.sizes}</td><td style={{ padding: "0.6rem 0.8rem" }}>{p.type}</td><td style={{ padding: "0.6rem 0.8rem", "text-align": "center", color: p.stock === "Ready Stock" ? "#16a34a" : "#d97706", "font-weight": "700" }}>{p.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Why Delhi Trusts CMI */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Why Delhi NCR Industries Choose Creative Metal Industries</h2>
        <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "10px", padding: "1.5rem", "margin-bottom": "2rem" }}>
          <ul style={{ "font-size": "0.92rem", color: "#374151", "line-height": "1.9", "padding-left": "1.25rem", margin: 0 }}>
            <li><strong>Fastest delivery in North India:</strong> 2-3 days from Vadodara to Delhi NCR via NH48 (1,050 km) — quicker than most North Indian stockists</li>
            <li><strong>IOCL/NTPC project experience:</strong> Documented supply track record for Mathura Refinery, Panipat Refinery, NTPC Dadri and Jhajjar TPS</li>
            <li><strong>Complete range under one roof:</strong> SS, CS, alloy, duplex, exotic alloys + fittings + flanges + plates + structural — eliminate multiple vendors</li>
            <li><strong>IBR-certified alloy stock:</strong> P91, P22, P11 always available with IBR Form III-C — critical for power plant shutdowns and urgent requirements</li>
            <li><strong>No Delhi market markups:</strong> Direct mill supply from Jindal, SAIL, Sumitomo, Vallourec, ISMT — bypass Wazirpur/Mayapuri broker chains</li>
            <li><strong>Full project documentation:</strong> MTC 3.1/3.2, IBR certificates, PMI, TPI reports (EIL/PDIL/Lloyds), NABL lab tests — as per your project specs</li>
            <li><strong>Structural steel for construction:</strong> TMT bars, MS angles, channels, beams, plates — bulk supply for metro, highway and building projects</li>
            <li><strong>13+ years reliability:</strong> Consistent quality and timely delivery since 2012 — trusted by NCR's leading EPC contractors and fabricators</li>
          </ul>
        </div>

        {/* Industries */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Industries We Serve in Delhi NCR &amp; North India</h2>
        <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(280px,1fr))", gap: "1rem", "margin-bottom": "2rem" }}>
          {INDUSTRIES.map(ind => (
            <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "8px", padding: "1rem" }}>
              <p style={{ "font-size": "1.1rem", margin: "0 0 0.3rem" }}>{ind.icon} <strong style={{ color: "#111827" }}>{ind.name}</strong></p>
              <p style={{ "font-size": "0.83rem", color: "#6b7280", margin: 0 }}>{ind.desc}</p>
            </div>
          ))}
        </div>

        {/* Supply Areas */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Key Supply Areas in Delhi NCR &amp; North India</h2>
        <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(180px,1fr))", gap: "0.75rem", "margin-bottom": "2rem" }}>
          {["Wazirpur Industrial Area", "Mayapuri Industrial Area", "Noida / Greater Noida", "Manesar / Gurgaon IMT", "Faridabad Industrial Area", "Ghaziabad / Sahibabad", "Kundli Industrial Area", "Bahadurgarh / Rohtak", "Sonepat Industrial Belt", "IOCL Mathura Refinery", "IOCL Panipat Refinery", "NTPC Dadri / Jhajjar"].map(area => (
            <div style={{ background: "#fff", border: "1px solid #e5e7eb", "border-radius": "6px", padding: "0.6rem 0.8rem", "font-size": "0.83rem", "font-weight": "600", color: "#374151", "text-align": "center" }}>{area}</div>
          ))}
        </div>

        {/* Cross-sell */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Complete CMI Product Lines Available in Delhi NCR</h2>
        <p style={{ "font-size": "0.92rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1.5rem" }}>
          Creative Metal Industries is your single-source steel supplier for all industrial and construction needs in Delhi NCR. Our comprehensive range includes <strong>stainless steel pipes and tubes</strong> (seamless, welded, ERW in all grades), <strong>carbon steel pipes</strong> (A106, A53, API 5L, IS 1239, IS 3589), <strong>alloy steel pipes</strong> (all P-grades with IBR), <strong>pipe fittings</strong> (buttweld and forged in SS/CS/alloy), <strong>flanges</strong> (all types, all materials, class 150 to 2500), <strong>steel plates</strong> (SA 516, NACE HIC, IS 2062, boiler quality), <strong>TMT bars</strong> (Fe 500D — 8mm to 32mm), <strong>structural steel</strong> (MS angle, ISMC, ISMB, plates), <strong>exotic alloys</strong> (Inconel, Hastelloy, Monel, Titanium, Duplex), and <strong>fasteners</strong> (A193/A194 stud bolts). One PO, one invoice, complete traceability.
        </p>

        {/* FAQ */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Frequently Asked Questions — Steel Pipe Supplier Delhi NCR</h2>
        <div style={{ display: "flex", "flex-direction": "column", gap: "0.75rem", "margin-bottom": "3rem" }}>
          {FAQS.map(f => (
            <details style={{ background: "#fff", border: "1px solid #e5e7eb", "border-radius": "10px", padding: "1rem 1.25rem" }}><summary style={{ "font-weight": "700", "font-size": "0.92rem", color: "#111827", cursor: "pointer" }}>{f.q}</summary><p style={{ "font-size": "0.88rem", color: "#374151", "line-height": "1.7", "margin-top": "0.6rem", "margin-bottom": 0 }}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", "border-radius": "12px", padding: "2.5rem", "text-align": "center", "margin-bottom": "2rem" }}>
          <h2 style={{ color: "#fff", "font-size": "1.4rem", "font-weight": "800", "margin-bottom": "0.6rem" }}>Need Steel Pipes in Delhi NCR? Get Instant Quote!</h2>
          <p style={{ color: "rgba(255,255,255,0.9)", "margin-bottom": "1.25rem", "font-size": "0.95rem" }}>SS, Carbon Steel, Alloy, Duplex — All grades. Ready stock. Delivery in 2-3 days to Delhi NCR.</p>
          <div style={{ display: "flex", gap: "1rem", "justify-content": "center", "flex-wrap": "wrap" }}>
            <a href="tel:+919998280619" style={{ background: "#fff", color: "#E8821A", "font-weight": "800", padding: "0.75rem 1.5rem", "border-radius": "8px", "text-decoration": "none", "font-size": "0.95rem" }}>{"\u{1F4DE}"} +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{ background: "#25D366", color: "#fff", "font-weight": "800", padding: "0.75rem 1.5rem", "border-radius": "8px", "text-decoration": "none", "font-size": "0.95rem" }}>{"\u{1F4AC}"} WhatsApp</a>
            <a href="/#contact" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "2px solid rgba(255,255,255,0.5)", "font-weight": "700", padding: "0.75rem 1.5rem", "border-radius": "8px", "text-decoration": "none", "font-size": "0.95rem" }}>Request Formal Quote {"\u2192"}</a>
          </div>
        </div>

        {/* Internal Links */}
        <h3 style={{ "font-size": "1rem", "font-weight": "700", color: "#111827", "margin-bottom": "0.75rem" }}>Related Pages</h3>
        <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(200px,1fr))", gap: "0.75rem" }}>
          {[
            { href: "/alloy-steel-pipe-supplier-india", label: "Alloy Steel Pipe Supplier India" },
            { href: "/ss-seamless-pipe-supplier-india", label: "SS Seamless Pipe Supplier India" },
            { href: "/carbon-steel-pipe-fittings-vadodara", label: "Carbon Steel Pipe & Fittings" },
            { href: "/steel-pipe-supplier-kolkata", label: "Steel Pipe Supplier Kolkata" },
            { href: "/steel-pipe-supplier-chennai", label: "Steel Pipe Supplier Chennai" },
          ].map(l => (
            <a href={l.href} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "8px", padding: "0.75rem 1rem", "font-size": "0.85rem", "font-weight": "600", color: "#E8821A", "text-decoration": "none" }}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <LocationContent slug="delhi" />
      
        <RelatedPages currentPath="/steel-pipe-supplier-delhi" />
      </main>

      <footer style={{ background: "#111827", color: "#9ca3af", padding: "2rem 1.5rem", "text-align": "center", "font-size": "0.82rem" }}>
        <p><strong style={{ color: "#fff" }}>Creative Metal Industries</strong> — Steel Pipe Supplier Delhi NCR | SS, Carbon Steel, Alloy Pipes & Fittings | Vadodara, Gujarat</p>
        <p style={{ "margin-top": "0.5rem" }}><a href="tel:+919998280619" style={{ color: "#E8821A" }}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{ color: "#E8821A" }}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
