/**
 * /steel-pipe-supplier-chennai
 * Target: "SS pipe supplier Chennai", "carbon steel pipe Chennai",
 * "alloy steel pipe Chennai", "steel pipe supplier Chennai"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const PRODUCTS = [
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310, 904L, 202", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, IS 1239, API 5L", sizes: "1/2\" to 48\"", type: "Seamless & ERW", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P5, P9, P11, P22, P91", sizes: "1/2\" to 24\"", type: "Seamless", stock: "Ready Stock" },
  { category: "Duplex Steel Pipes", grades: "Duplex 2205, Super Duplex 2507", sizes: "1/2\" to 16\"", type: "Seamless & Welded", stock: "Available" },
  { category: "Exotic Alloy Pipes", grades: "Inconel 625/600, Hastelloy C276, Monel 400", sizes: "1/2\" to 10\"", type: "Seamless", stock: "Available" },
  { category: "Pipe Fittings", grades: "SS, CS, Alloy — Elbows, Tees, Reducers", sizes: "1/2\" to 48\"", type: "Buttweld & Forged", stock: "Ready Stock" },
  { category: "Flanges", grades: "SS 304/316L, CS A105, Alloy F11/F22/F91", sizes: "1/2\" to 48\"", type: "Weld Neck, Slip-On, Blind", stock: "Ready Stock" },
  { category: "Steel Plates", grades: "SA 516 Gr.60/70, NACE HIC, IS 2062", sizes: "6mm to 150mm thick", type: "Hot Rolled", stock: "Available" },
];

const INDUSTRIES = [
  { icon: "\u{1F6E2}\uFE0F", name: "CPCL / IOCL Refineries", desc: "Manali Refinery piping materials — SS, CS, alloy pipes and fittings" },
  { icon: "\u{1F3ED}", name: "Petrochemical Plants", desc: "SIPCOT Cuddalore, Ennore industrial complex — process piping and structural steel" },
  { icon: "\u26A1", name: "Thermal Power Plants", desc: "North Chennai Thermal, Ennore TPS — boiler tubes, P91/P22 alloy pipes" },
  { icon: "\u{1F30A}", name: "Desalination Plants", desc: "NEMMELI, Minjur desal projects — duplex, super duplex and CuNi pipes" },
  { icon: "\u{1F6A2}", name: "Shipbuilding & Ports", desc: "Kattupalli port, L&T shipyard — marine grade SS and CuNi piping" },
  { icon: "\u{1F3D7}\uFE0F", name: "Construction & Infra", desc: "Metro projects, flyovers — structural steel, TMT bars, MS sections" },
];

const FAQS = [
  { q: "Who is the best steel pipe supplier in Chennai?", a: "Creative Metal Industries (CMI) is a trusted steel pipe supplier serving Chennai since 2012. We supply stainless steel (304, 316L, 321, 310, 904L), carbon steel (A106, A53, API 5L), alloy steel (P91, P22, P11), duplex, and exotic alloy pipes. Our Vadodara warehouse maintains 2000+ tonnes ready stock with direct dispatch to Chennai within 2-3 days via road transport. We serve major projects including CPCL Manali, North Chennai Thermal, and SIPCOT industrial complexes." },
  { q: "What are the delivery timelines for steel pipe to Chennai?", a: "Standard delivery to Chennai is 2-3 working days from our Vadodara warehouse via dedicated road transport (approx 1,350 km). For urgent requirements, we offer express dispatch with 48-hour delivery. Bulk orders for refinery/power plant projects can be shipped via container to Chennai Port. We also maintain local ready stock arrangements with our Chennai distribution partners for commonly required sizes in SS 304/316L and CS A106 Gr.B." },
  { q: "Do you supply IBR certified pipes in Chennai?", a: "Yes, we supply IBR Form III-C certified alloy steel pipes (ASTM A335 P91, P22, P11) and carbon steel pipes for boiler applications in Chennai. These are sourced from IBR-approved mills — Sumitomo (Japan), Vallourec (France), ISMT (India), and Maharashtra Seamless. All documentation including original MTC (EN 10204 3.1/3.2), IBR Form III-C, and heat treatment certificates provided. We have supplied IBR materials to North Chennai Thermal Power Station and TANGEDCO projects." },
  { q: "What is the price of SS 304 pipe in Chennai today?", a: "SS 304 seamless pipe prices in Chennai range from Rs 250-450 per kg depending on size, schedule, and quantity. ERW/welded SS 304 pipes are available from Rs 180-320 per kg. Prices fluctuate based on nickel rates in the London Metal Exchange (LME). For accurate real-time pricing, contact us at +91 99982 80619. We offer competitive rates with no broker margins — direct supply from Jindal, Salem Steel Plant (SAIL), and imported mills." },
  { q: "Can you supply to CPCL and IOCL refinery projects in Chennai?", a: "Absolutely. We are experienced suppliers to oil and gas refinery projects. We supply as per CPCL/IOCL approved material specifications with complete documentation — original MTC, third-party inspection (TPI) by PDIL/EIL/Lloyds, radiography reports, PMI certificates, and NABL-accredited lab test reports. Our product range covers all refinery piping needs — SS 304/316L for process, CS A106 for utility, alloy P5/P9 for heaters, and duplex for seawater cooling systems." },
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Creative Metal Industries — Steel Pipe Supplier Chennai",
      "description": "Leading steel pipe supplier in Chennai offering SS, carbon steel, alloy steel, duplex and exotic alloy pipes, fittings and flanges for refineries, power plants and industrial projects.",
      "telephone": "+91-99982-80619",
      "url": "https://www.creativemetalind.com/steel-pipe-supplier-chennai",
      "address": { "@type": "PostalAddress", "streetAddress": "386/B GIDC Estate, Makarpura", "addressLocality": "Vadodara", "addressRegion": "Gujarat", "postalCode": "390010", "addressCountry": "IN" },
      "areaServed": { "@type": "City", "name": "Chennai", "containedInPlace": { "@type": "State", "name": "Tamil Nadu" } },
      "priceRange": "$$",
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "56", "bestRating": "5" }
    },
    {
      "@type": "Product",
      "name": "Steel Pipes & Fittings — Chennai Supply",
      "description": "Complete range of SS, CS, alloy steel, duplex and exotic alloy pipes, fittings and flanges supplied to Chennai industries.",
      "brand": { "@type": "Organization", "name": "Creative Metal Industries" },
      "offers": { "@type": "AggregateOffer", "priceCurrency": "INR", "lowPrice": "180", "highPrice": "15000", "offerCount": "5000+", "availability": "https://schema.org/InStock" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creativemetalind.com" },
        { "@type": "ListItem", "position": 2, "name": "Steel Pipe Supplier Chennai", "item": "https://www.creativemetalind.com/steel-pipe-supplier-chennai" }
      ]
    }
  ]
});
const FAQ_SCHEMA = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) });

export default function SteelPipeSupplierChennai() {
  return (
    <>
      <Title>Steel Pipe Supplier Chennai | SS CS Alloy | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Steel pipe supplier Chennai — SS 304/316L, carbon steel, alloy steel P91/P22, duplex pipes, fittings & flanges. CPCL/IOCL approved. Free delivery. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-pipe-supplier-chennai" />
      <Meta property="og:title" content="Steel Pipe Supplier Chennai | SS, Carbon Steel, Alloy Steel | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Steel pipe supplier Chennai — SS, CS, alloy, duplex pipes. CPCL/IOCL approved. Ready stock. Creative Metal Industries." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-pipe-supplier-chennai" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Pipe Supplier Chennai | SS CS Alloy | CMI" />
      <Meta name="twitter:description" content="Steel pipe supplier Chennai — SS, CS, alloy. Ready stock. Delivery in 2-3 days." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{ background: "#fff", "border-bottom": "1px solid #e5e7eb", padding: "1rem 1.5rem", display: "flex", "align-items": "center", gap: "1rem" }}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Steel Pipe Supplier Chennai" width="140" height="71" /></a>
        <div style={{ flex: 1 }} />
        <a href="/#contact" style={{ background: "#E8821A", color: "#fff", padding: "0.5rem 1.2rem", "border-radius": "6px", "font-weight": "700", "font-size": "0.85rem", "text-decoration": "none" }}>Get Quote</a>
      </nav>
      <div style={{ background: "#f9fafb", "border-bottom": "1px solid #e5e7eb", padding: "0.6rem 1.5rem", "font-size": "0.82rem", color: "#6b7280" }}>
        <a href="/" style={{ color: "#E8821A", "text-decoration": "none" }}>Home</a><span style={{ margin: "0 0.5rem" }}>{"\u203A"}</span>
        <span>Steel Pipe Supplier Chennai</span>
      </div>

      <main style={{ "max-width": "960px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        {/* Hero Section */}
        <div style={{ "margin-bottom": "2.5rem", "text-align": "center" }}>
          <h1 style={{ "font-size": "clamp(1.8rem,4vw,2.6rem)", "font-weight": "800", color: "#111827", margin: "0 0 1rem", "line-height": "1.2" }}>
            Steel Pipe Supplier in Chennai — SS, Carbon Steel &amp; Alloy Steel Pipes
          </h1>
          <p style={{ "font-size": "1.05rem", color: "#374151", "line-height": "1.8", "max-width": "750px", margin: "0 auto" }}>
            <strong>Creative Metal Industries</strong> is your reliable <strong>steel pipe supplier in Chennai</strong>, delivering a comprehensive range of stainless steel, carbon steel, alloy steel, duplex and exotic alloy pipes to Tamil Nadu's industrial heartland. From CPCL Manali Refinery to North Chennai Thermal Power Station, SIPCOT industrial complexes to Chennai Port — we supply high-quality piping materials with complete documentation and competitive pricing. Our Vadodara warehouse stocks 2000+ tonnes with guaranteed 2-3 day delivery to Chennai.
          </p>
        </div>

        {/* Product Range Table */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Complete Product Range — Steel Pipes, Fittings &amp; Flanges in Chennai</h2>
        <div style={{ overflow: "auto", border: "1px solid #e5e7eb", "border-radius": "10px", "margin-bottom": "2rem" }}>
          <table style={{ width: "100%", "border-collapse": "collapse", "font-size": "0.85rem", "min-width": "700px" }}>
            <thead><tr style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff" }}><th style={{ padding: "0.7rem 0.8rem", "text-align": "left" }}>Product Category</th><th style={{ padding: "0.7rem 0.8rem" }}>Grades Available</th><th style={{ padding: "0.7rem 0.8rem" }}>Sizes</th><th style={{ padding: "0.7rem 0.8rem" }}>Type</th><th style={{ padding: "0.7rem 0.8rem" }}>Stock Status</th></tr></thead>
            <tbody>
              {PRODUCTS.map((p, i) => (
                <tr style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb" }}><td style={{ padding: "0.6rem 0.8rem", "font-weight": "700" }}>{p.category}</td><td style={{ padding: "0.6rem 0.8rem" }}>{p.grades}</td><td style={{ padding: "0.6rem 0.8rem" }}>{p.sizes}</td><td style={{ padding: "0.6rem 0.8rem" }}>{p.type}</td><td style={{ padding: "0.6rem 0.8rem", "text-align": "center", color: p.stock === "Ready Stock" ? "#16a34a" : "#d97706", "font-weight": "700" }}>{p.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Why Chennai Trusts CMI */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Why Chennai Industries Trust Creative Metal Industries</h2>
        <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "10px", padding: "1.5rem", "margin-bottom": "2rem" }}>
          <ul style={{ "font-size": "0.92rem", color: "#374151", "line-height": "1.9", "padding-left": "1.25rem", margin: 0 }}>
            <li><strong>13+ years experience:</strong> Supplying to Chennai industries since 2012 — refineries, power plants, shipyards and manufacturing units</li>
            <li><strong>All materials, one source:</strong> SS 304/316L, carbon steel, alloy P91/P22, duplex 2205/2507, Inconel, Hastelloy, Monel — complete industrial piping under one roof</li>
            <li><strong>CPCL/IOCL project experience:</strong> Documented supply track record for refinery shutdowns and expansion projects at Manali and Ennore</li>
            <li><strong>2-3 day delivery:</strong> Dedicated road transport from Vadodara to Chennai — 1,350 km, door-to-door delivery with tracking</li>
            <li><strong>Complete documentation:</strong> Original MTC (EN 10204 3.1/3.2), IBR Form III-C, PMI reports, NABL lab reports, radiography — as per project specifications</li>
            <li><strong>Competitive pricing:</strong> Direct mill sourcing from Jindal, SAIL Salem, Sumitomo, Vallourec — no broker markup. Formal quotation within 4 hours</li>
            <li><strong>Technical support:</strong> Material selection guidance, equivalent grade suggestions, PWHT recommendations by our experienced team</li>
            <li><strong>Custom sizes:</strong> Cut-to-length pipes, non-standard wall thicknesses, special end preparations — available on order</li>
          </ul>
        </div>

        {/* Industries Served */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Industries We Serve in Chennai &amp; Tamil Nadu</h2>
        <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(280px,1fr))", gap: "1rem", "margin-bottom": "2rem" }}>
          {INDUSTRIES.map(ind => (
            <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "8px", padding: "1rem" }}>
              <p style={{ "font-size": "1.1rem", margin: "0 0 0.3rem" }}>{ind.icon} <strong style={{ color: "#111827" }}>{ind.name}</strong></p>
              <p style={{ "font-size": "0.83rem", color: "#6b7280", margin: 0 }}>{ind.desc}</p>
            </div>
          ))}
        </div>

        {/* Key Supply Areas */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Key Supply Areas in Chennai &amp; Tamil Nadu</h2>
        <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(180px,1fr))", gap: "0.75rem", "margin-bottom": "2rem" }}>
          {["Manali Industrial Area", "SIPCOT Cuddalore", "Ennore Port & TPS", "Kattupalli Shipyard", "Ambattur Industrial Estate", "Sriperumbudur", "Tiruvallur", "Maraimalai Nagar", "Guindy Industrial Estate", "Nungambakkam", "Ranipet (Leather/Chemical)", "Hosur Industrial Area"].map(area => (
            <div style={{ background: "#fff", border: "1px solid #e5e7eb", "border-radius": "6px", padding: "0.6rem 0.8rem", "font-size": "0.83rem", "font-weight": "600", color: "#374151", "text-align": "center" }}>{area}</div>
          ))}
        </div>

        {/* Specifications */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Supply Specifications &amp; Standards</h2>
        <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(280px,1fr))", gap: "1rem", "margin-bottom": "2rem" }}>
          {[
            { label: "SS Pipe Standards", value: "ASTM A312, A269, A213, A249, A358" },
            { label: "CS Pipe Standards", value: "ASTM A106, A53, API 5L, IS 1239, IS 3589" },
            { label: "Alloy Pipe Standards", value: "ASTM A335, A691, ASTM A213 (tubes)" },
            { label: "Fittings Standards", value: "ASTM A403, A234, A182 (forged)" },
            { label: "Flange Standards", value: "ASME B16.5, B16.47 | Class 150–2500" },
            { label: "Testing & Inspection", value: "PMI, UT, RT, Hydro, Hardness, NABL Lab" },
            { label: "Certification", value: "MTC 3.1/3.2, IBR III-C, TPI by EIL/PDIL" },
            { label: "Delivery Mode", value: "Road transport 2-3 days | Container via port" },
          ].map(s => (
            <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "8px", padding: "1rem" }}>
              <span style={{ "font-size": "0.78rem", color: "#6b7280", "text-transform": "uppercase", "letter-spacing": "0.05em" }}>{s.label}</span>
              <p style={{ "font-size": "0.92rem", "font-weight": "700", color: "#111827", margin: "0.25rem 0 0" }}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Cross-sell Section */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Complete CMI Product Lines Available in Chennai</h2>
        <p style={{ "font-size": "0.92rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1.5rem" }}>
          Beyond pipes, Creative Metal Industries supplies a full spectrum of industrial steel products to Chennai. Whether you need <strong>TMT bars</strong> for construction, <strong>MS angles and channels</strong> for structural fabrication, <strong>SS and CS flanges</strong> for piping systems, or <strong>steel plates</strong> (SA 516, NACE HIC, IS 2062) for pressure vessels — we are your single-source supplier. Our product range also includes <strong>forged fittings</strong> (socket weld and threaded), <strong>fasteners</strong> (stud bolts, nuts as per ASTM A193/A194), and <strong>gaskets</strong> (spiral wound, ring joint). One purchase order, one supplier, complete traceability.
        </p>

        {/* FAQ Section */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Frequently Asked Questions — Steel Pipe Supplier Chennai</h2>
        <div style={{ display: "flex", "flex-direction": "column", gap: "0.75rem", "margin-bottom": "3rem" }}>
          {FAQS.map(f => (
            <details style={{ background: "#fff", border: "1px solid #e5e7eb", "border-radius": "10px", padding: "1rem 1.25rem" }}><summary style={{ "font-weight": "700", "font-size": "0.92rem", color: "#111827", cursor: "pointer" }}>{f.q}</summary><p style={{ "font-size": "0.88rem", color: "#374151", "line-height": "1.7", "margin-top": "0.6rem", "margin-bottom": 0 }}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", "border-radius": "12px", padding: "2.5rem", "text-align": "center", "margin-bottom": "2rem" }}>
          <h2 style={{ color: "#fff", "font-size": "1.4rem", "font-weight": "800", "margin-bottom": "0.6rem" }}>Need Steel Pipes in Chennai? Get Instant Quote!</h2>
          <p style={{ color: "rgba(255,255,255,0.9)", "margin-bottom": "1.25rem", "font-size": "0.95rem" }}>SS, Carbon Steel, Alloy, Duplex — All grades. Ready stock. Delivery in 2-3 days to Chennai.</p>
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
            { href: "/ss-seamless-pipe-supplier-india", label: "SS Seamless Pipe Supplier India" },
            { href: "/alloy-steel-pipe-supplier-india", label: "Alloy Steel Pipe Supplier India" },
            { href: "/carbon-steel-pipe-fittings-vadodara", label: "Carbon Steel Pipe & Fittings" },
            { href: "/steel-pipe-supplier-hyderabad", label: "Steel Pipe Supplier Hyderabad" },
            { href: "/steel-pipe-supplier-bangalore", label: "Steel Pipe Supplier Bangalore" },
          ].map(l => (
            <a href={l.href} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "8px", padding: "0.75rem 1rem", "font-size": "0.85rem", "font-weight": "600", color: "#E8821A", "text-decoration": "none" }}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/steel-pipe-supplier-chennai" />
      </main>

      <footer style={{ background: "#111827", color: "#9ca3af", padding: "2rem 1.5rem", "text-align": "center", "font-size": "0.82rem" }}>
        <p><strong style={{ color: "#fff" }}>Creative Metal Industries</strong> — Steel Pipe Supplier Chennai | SS, Carbon Steel, Alloy Steel Pipes | Vadodara, Gujarat</p>
        <p style={{ "margin-top": "0.5rem" }}><a href="tel:+919998280619" style={{ color: "#E8821A" }}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{ color: "#E8821A" }}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
