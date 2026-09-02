/**
 * /steel-pipe-supplier-bangalore
 * Target: "pipe supplier Bangalore", "SS fittings Bangalore",
 * "steel plate Bangalore", "steel pipe supplier Bangalore"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";
import { LocationContent } from "../components/LocationContent";

const PRODUCTS = [
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310, 904L, 202", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L, IS 1239", sizes: "1/2\" to 48\"", type: "Seamless & ERW", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P5, P9, P11, P22, P91", sizes: "1/2\" to 24\"", type: "Seamless", stock: "Ready Stock" },
  { category: "Duplex & Super Duplex Pipes", grades: "Duplex 2205, Super Duplex 2507", sizes: "1/2\" to 16\"", type: "Seamless & Welded", stock: "Available" },
  { category: "SS Fittings", grades: "SS 304/316L/321 Elbows, Tees, Reducers", sizes: "1/2\" to 48\"", type: "Buttweld & Forged", stock: "Ready Stock" },
  { category: "Steel Plates", grades: "SA 516 Gr.60/70, IS 2062, SS 304/316L", sizes: "6mm to 150mm thick", type: "Hot & Cold Rolled", stock: "Available" },
  { category: "Flanges (All Materials)", grades: "SS, CS A105, Alloy F11/F22/F91", sizes: "1/2\" to 48\"", type: "WN, SO, Blind, LAP Joint", stock: "Ready Stock" },
  { category: "Structural Steel", grades: "TMT Fe500D, MS Angle, ISMC, ISMB, Plates", sizes: "Per IS standards", type: "Hot Rolled", stock: "Ready Stock" },
];

const INDUSTRIES = [
  { icon: "\u2699\uFE0F", name: "Aerospace & Defence", desc: "HAL, ISRO, NAL, BEML Bangalore — titanium, Inconel, special alloy pipes and precision tubes" },
  { icon: "\u{1F3ED}", name: "Heavy Engineering & Machine Tools", desc: "HMT, BHEL, BEL Bangalore — alloy steel, SS pipes and precision machined fittings" },
  { icon: "\u{1F697}", name: "Automobile Industry", desc: "Toyota, Volvo, Bosch — SS tubing, hydraulic pipes, precision cold-drawn tubes" },
  { icon: "\u{1F48A}", name: "Biotech & Pharma", desc: "Biocon, Bangalore Pharma cluster — SS 316L electropolished pipes for cGMP facilities" },
  { icon: "\u26A1", name: "Power & Energy", desc: "Raichur TPS, Bellary TPS — alloy steel P91/P22 boiler pipes, IBR certified" },
  { icon: "\u{1F3D7}\uFE0F", name: "Construction & Real Estate", desc: "Metro Phase 2, IT parks, commercial projects — TMT bars, structural steel, MS plates" },
];

const FAQS = [
  { q: "Who is the best steel pipe supplier in Bangalore?", a: "Creative Metal Industries (CMI) is a trusted steel pipe supplier serving Bangalore and Karnataka since 2012. We supply stainless steel pipes (304, 316L, 321, 310, 904L), carbon steel (A106, A53, API 5L), alloy steel (P91, P22, P11), duplex steel, and exotic alloys (Inconel, Hastelloy, Monel, Titanium). We serve HAL, ISRO, BHEL, Biocon and major EPC contractors in Bangalore. Our 2000+ tonne Vadodara warehouse ensures 2-3 day delivery to Peenya, Bommasandra, Jigani or any industrial area in Bangalore." },
  { q: "What is the delivery time for steel pipes from Vadodara to Bangalore?", a: "Standard delivery from our Vadodara warehouse to Bangalore is 2-3 working days via road (approx 1,200 km via NH48). Express 48-hour delivery available for urgent project requirements. We deliver directly to Peenya Industrial Area, Bommasandra, Jigani, Whitefield IT corridor, Electronics City, Bidadi, Nelamangala or any specified location in Bangalore. For large project orders, we can arrange dedicated trailer loads with advance scheduling." },
  { q: "Do you supply SS fittings and flanges in Bangalore?", a: "Yes, we are a comprehensive supplier of SS fittings and flanges in Bangalore. Our range includes buttweld fittings (elbows, tees, reducers, caps in SS 304/316L/321/310), forged fittings (socket weld and threaded — SS, CS, alloy), and flanges (weld neck, slip-on, blind, lap joint, ring type joint in class 150 to 2500). All fittings supplied with original MTC and full material traceability. We also stock CS A234 WPB fittings and alloy steel WP11/WP22 fittings for power plant applications." },
  { q: "What is the price of steel plate in Bangalore today?", a: "Steel plate prices in Bangalore vary by grade: IS 2062 MS plates range Rs 55-65 per kg, SA 516 Gr.70 boiler quality plates Rs 70-90 per kg, SS 304 plates Rs 220-350 per kg, and SS 316L plates Rs 320-480 per kg. Prices depend on thickness, quantity and current market conditions. For exact real-time pricing on any grade/thickness, call +91 99982 80619 — we provide formal quotations within 4 hours with competitive direct-mill pricing." },
  { q: "Can you supply to aerospace and defence projects in Bangalore?", a: "Yes, we supply special alloy materials for aerospace and defence applications in Bangalore. Our range includes Inconel 625/718 pipes and bars, Titanium Grade 2/5 tubes, Hastelloy C276 pipes, Monel 400/K500 and other high-performance alloys required by HAL, ISRO, NAL, BEL and DRDO. All materials supplied with full traceability — original mill certificates, third-party test reports, compliance certificates and NABL-accredited lab reports as per DGQA/CEMILAC requirements." },
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-pipe-supplier-bangalore#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name": "Creative Metal Industries — Steel Pipe Supplier Bangalore",
      "description": "Leading steel pipe supplier in Bangalore offering SS pipes, CS pipes, alloy steel, duplex pipes, SS fittings, flanges and steel plates for aerospace, pharma and heavy engineering.",
      "telephone": "+919998280619",
      "url": "https://www.creativemetalind.com/steel-pipe-supplier-bangalore",
      "address": { "@type": "PostalAddress", "streetAddress": "386/B GIDC Estate, Makarpura", "addressLocality": "Vadodara", "addressRegion": "Gujarat", "postalCode": "390010", "addressCountry": "IN" },
      "areaServed": { "@type": "City", "name": "Bangalore", "containedInPlace": { "@type": "State", "name": "Karnataka" } },
      "priceRange": "$$"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creativemetalind.com" },
        { "@type": "ListItem", "position": 2, "name": "Steel Pipe Supplier Bangalore", "item": "https://www.creativemetalind.com/steel-pipe-supplier-bangalore" }
      ]
    }
  ]
});
const FAQ_SCHEMA = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) });

export default function SteelPipeSupplierBangalore() {
  return (
    <>
      <Title>Pipe Supplier Bangalore | SS Fittings & Steel Plate | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Pipe supplier Bangalore — SS pipes, fittings, flanges, steel plates. SS 304/316L, carbon steel, alloy steel. Aerospace & pharma grade. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-pipe-supplier-bangalore" />
      <Meta property="og:title" content="Pipe Supplier Bangalore | SS Fittings, Steel Plate | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Pipe supplier Bangalore — SS pipes, fittings, steel plates. All grades. Aerospace & pharma approved. CMI." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-pipe-supplier-bangalore" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Pipe Supplier Bangalore | SS Fittings & Steel Plate | CMI" />
      <Meta name="twitter:description" content="Pipe supplier Bangalore — SS, CS, alloy pipes & fittings. Steel plates. 2-3 day delivery." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{ background: "#fff", "border-bottom": "1px solid #e5e7eb", padding: "1rem 1.5rem", display: "flex", "align-items": "center", gap: "1rem" }}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Pipe Supplier Bangalore" width="140" height="71" /></a>
        <div style={{ flex: 1 }} />
        <a href="/#contact" style={{ background: "#E8821A", color: "#fff", padding: "0.5rem 1.2rem", "border-radius": "6px", "font-weight": "700", "font-size": "0.85rem", "text-decoration": "none" }}>Get Quote</a>
      </nav>
      <div style={{ background: "#f9fafb", "border-bottom": "1px solid #e5e7eb", padding: "0.6rem 1.5rem", "font-size": "0.82rem", color: "#6b7280" }}>
        <a href="/" style={{ color: "#E8821A", "text-decoration": "none" }}>Home</a><span style={{ margin: "0 0.5rem" }}>{"\u203A"}</span>
        <span>Steel Pipe Supplier Bangalore</span>
      </div>

      <main style={{ "max-width": "960px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <div style={{ "margin-bottom": "2.5rem", "text-align": "center" }}>
          <h1 style={{ "font-size": "clamp(1.8rem,4vw,2.6rem)", "font-weight": "800", color: "#111827", margin: "0 0 1rem", "line-height": "1.2" }}>
            Pipe Supplier in Bangalore — SS Fittings, Steel Plates &amp; Industrial Piping
          </h1>
          <p style={{ "font-size": "1.05rem", color: "#374151", "line-height": "1.8", "max-width": "750px", margin: "0 auto" }}>
            <strong>Creative Metal Industries</strong> is a trusted <strong>pipe supplier in Bangalore</strong>, delivering stainless steel pipes, SS fittings, carbon steel pipes, alloy steel pipes, steel plates and structural steel to Karnataka's industrial powerhouse. We serve Bangalore's aerospace giants (HAL, ISRO, NAL), heavy engineering leaders (BHEL, BEL, BEML), biotech companies (Biocon), automobile manufacturers (Toyota, Volvo, Bosch) and major construction projects. From our 2000+ tonne Vadodara warehouse, we guarantee 2-3 day delivery to any location in Bangalore — Peenya, Bommasandra, Jigani, Whitefield or Electronics City.
          </p>
        </div>

        {/* Product Table */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Complete Product Range — Pipes, Fittings, Plates &amp; Structural Steel</h2>
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

        {/* Why Bangalore Trusts CMI */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Why Bangalore Industries Trust Creative Metal Industries</h2>
        <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "10px", padding: "1.5rem", "margin-bottom": "2rem" }}>
          <ul style={{ "font-size": "0.92rem", color: "#374151", "line-height": "1.9", "padding-left": "1.25rem", margin: 0 }}>
            <li><strong>Aerospace-grade materials:</strong> Inconel 625/718, Titanium Gr.2/5, Hastelloy C276, Monel — full traceability for HAL, ISRO, NAL requirements</li>
            <li><strong>Pharma/Biotech expertise:</strong> SS 316L electropolished pipes (Ra 0.4{"\u00B5"}m), sanitary fittings and tri-clamp connections for cGMP facilities</li>
            <li><strong>Complete fittings range:</strong> Buttweld (elbows, tees, reducers), forged (socket weld, threaded), flanges (WN, SO, blind) — all materials in stock</li>
            <li><strong>Steel plates for fabrication:</strong> SA 516 Gr.70 (pressure vessels), IS 2062 (structural), SS 304/316L plates — cut-to-size available</li>
            <li><strong>2-3 day guaranteed delivery:</strong> 1,200 km Vadodara to Bangalore via NH48 — dedicated transport, door-to-door with tracking</li>
            <li><strong>Direct mill pricing:</strong> No Bangalore middleman markup — sourced from Jindal, SAIL, Sumitomo, Vallourec, ISMT directly</li>
            <li><strong>Full documentation:</strong> Original MTC 3.1/3.2, IBR Form III-C, PMI, NABL lab reports, TPI certificates — as per your project spec</li>
            <li><strong>13+ years track record:</strong> Trusted by Karnataka's leading engineering companies since 2012</li>
          </ul>
        </div>

        {/* Industries */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Industries We Serve in Bangalore &amp; Karnataka</h2>
        <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(280px,1fr))", gap: "1rem", "margin-bottom": "2rem" }}>
          {INDUSTRIES.map(ind => (
            <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "8px", padding: "1rem" }}>
              <p style={{ "font-size": "1.1rem", margin: "0 0 0.3rem" }}>{ind.icon} <strong style={{ color: "#111827" }}>{ind.name}</strong></p>
              <p style={{ "font-size": "0.83rem", color: "#6b7280", margin: 0 }}>{ind.desc}</p>
            </div>
          ))}
        </div>

        {/* Supply Areas */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Key Supply Areas in Bangalore &amp; Karnataka</h2>
        <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(180px,1fr))", gap: "0.75rem", "margin-bottom": "2rem" }}>
          {["Peenya Industrial Area", "Bommasandra KIADB", "Jigani Industrial Area", "Whitefield / ITPL", "Electronics City", "Bidadi Industrial Area", "Nelamangala", "Harohalli Industrial Area", "Dobaspet", "Raichur TPS", "Bellary Steel Zone", "Hubli-Dharwad"].map(area => (
            <div style={{ background: "#fff", border: "1px solid #e5e7eb", "border-radius": "6px", padding: "0.6rem 0.8rem", "font-size": "0.83rem", "font-weight": "600", color: "#374151", "text-align": "center" }}>{area}</div>
          ))}
        </div>

        {/* Cross-sell */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Complete CMI Product Lines Available in Bangalore</h2>
        <p style={{ "font-size": "0.92rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1.5rem" }}>
          Creative Metal Industries is your single-source supplier for all industrial steel products in Bangalore. Our complete range includes <strong>stainless steel pipes and tubes</strong> (seamless and welded), <strong>carbon steel pipes</strong> (seamless, ERW, LSAW), <strong>alloy steel pipes</strong> (all P-grades with IBR), <strong>SS fittings</strong> (buttweld and forged in all grades), <strong>flanges</strong> (SS, CS, alloy in class 150 to 2500), <strong>steel plates</strong> (boiler quality, structural, stainless), <strong>TMT bars</strong> (Fe 500D for construction), <strong>structural steel</strong> (MS angle, ISMC channel, ISMB beam), <strong>exotic alloys</strong> (Inconel, Hastelloy, Monel, Titanium, CuNi), and <strong>fasteners</strong> (A193/A194 stud bolts and nuts). One purchase order covers your entire material requirement.
        </p>

        {/* FAQ */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Frequently Asked Questions — Pipe Supplier Bangalore</h2>
        <div style={{ display: "flex", "flex-direction": "column", gap: "0.75rem", "margin-bottom": "3rem" }}>
          {FAQS.map(f => (
            <details style={{ background: "#fff", border: "1px solid #e5e7eb", "border-radius": "10px", padding: "1rem 1.25rem" }}><summary style={{ "font-weight": "700", "font-size": "0.92rem", color: "#111827", cursor: "pointer" }}>{f.q}</summary><p style={{ "font-size": "0.88rem", color: "#374151", "line-height": "1.7", "margin-top": "0.6rem", "margin-bottom": 0 }}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", "border-radius": "12px", padding: "2.5rem", "text-align": "center", "margin-bottom": "2rem" }}>
          <h2 style={{ color: "#fff", "font-size": "1.4rem", "font-weight": "800", "margin-bottom": "0.6rem" }}>Need Steel Pipes, Fittings or Plates in Bangalore? Get Quote Now!</h2>
          <p style={{ color: "rgba(255,255,255,0.9)", "margin-bottom": "1.25rem", "font-size": "0.95rem" }}>SS, CS, Alloy, Duplex — Pipes, Fittings, Flanges, Plates. Ready stock. 2-3 day delivery to Bangalore.</p>
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
            { href: "/ss-buttweld-fittings-supplier-india", label: "SS Buttweld Fittings India" },
            { href: "/inconel-pipe-supplier-india", label: "Inconel Pipe Supplier India" },
            { href: "/steel-pipe-supplier-chennai", label: "Steel Pipe Supplier Chennai" },
            { href: "/steel-pipe-supplier-hyderabad", label: "Steel Pipe Supplier Hyderabad" },
          ].map(l => (
            <a href={l.href} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "8px", padding: "0.75rem 1rem", "font-size": "0.85rem", "font-weight": "600", color: "#E8821A", "text-decoration": "none" }}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <LocationContent slug="bangalore" />
      
        <RelatedPages currentPath="/steel-pipe-supplier-bangalore" />
      </main>

      <footer style={{ background: "#111827", color: "#9ca3af", padding: "2rem 1.5rem", "text-align": "center", "font-size": "0.82rem" }}>
        <p><strong style={{ color: "#fff" }}>Creative Metal Industries</strong> — Pipe Supplier Bangalore | SS Fittings, Steel Plates, Industrial Piping | Vadodara, Gujarat</p>
        <p style={{ "margin-top": "0.5rem" }}><a href="tel:+919998280619" style={{ color: "#E8821A" }}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{ color: "#E8821A" }}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
