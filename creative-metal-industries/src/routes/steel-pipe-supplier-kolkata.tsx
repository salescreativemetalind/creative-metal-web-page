/**
 * /steel-pipe-supplier-kolkata
 * Target: "steel pipe supplier Kolkata", "SS flange Kolkata",
 * "alloy pipe Kolkata", "pipe fittings Kolkata"
 */
import { Title, Meta, Link } from "@solidjs/meta";

const PRODUCTS = [
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310, 904L", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L, IS 3589", sizes: "1/2\" to 48\"", type: "Seamless & ERW/SAW", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P11, P22, P91, P5, P9", sizes: "1/2\" to 24\"", type: "Seamless (IBR)", stock: "Ready Stock" },
  { category: "Duplex Steel Pipes", grades: "Duplex 2205, Super Duplex 2507", sizes: "1/2\" to 16\"", type: "Seamless & Welded", stock: "Available" },
  { category: "SS & CS Flanges", grades: "SS 304/316L, CS A105, Alloy F11/F22/F91", sizes: "1/2\" to 48\"", type: "WN, SO, Blind, RTJ", stock: "Ready Stock" },
  { category: "Pipe Fittings", grades: "SS, CS, Alloy — BW & Forged", sizes: "1/2\" to 48\"", type: "Elbows, Tees, Reducers", stock: "Ready Stock" },
  { category: "Steel Plates", grades: "SA 516 Gr.70, NACE HIC, IS 2062, Boiler Qty", sizes: "6mm to 200mm thick", type: "Hot Rolled", stock: "Available" },
  { category: "Structural Steel", grades: "TMT Fe500D, MS Angle, Channel, Beam", sizes: "Per IS standards", type: "Hot Rolled / SAIL", stock: "Ready Stock" },
];

const INDUSTRIES = [
  { icon: "\u26A1", name: "Thermal Power (DVC/NTPC)", desc: "DVC plants, Farakka STPS, Kolaghat TPS — P91, P22, P11 alloy pipes with IBR Form III-C" },
  { icon: "\u{1F6E2}\uFE0F", name: "Oil Refineries (IOCL Haldia)", desc: "IOCL Haldia Refinery, Numaligarh pipeline — SS, CS, alloy pipes and fittings for shutdown/expansion" },
  { icon: "\u{1F6A2}", name: "Shipbuilding & Ports", desc: "Kolkata Port, Haldia Dock, Garden Reach Shipbuilders — marine-grade SS, CuNi pipes" },
  { icon: "\u{1F3ED}", name: "Steel Plants (SAIL/Tata)", desc: "SAIL Durgapur, IISCO Burnpur, Tata Steel Jamshedpur — replacement piping and maintenance materials" },
  { icon: "\u{1F331}", name: "Fertilizer Plants", desc: "Haldia Fertilizer, MCFL — SS 304/316L process piping, alloy steel for reformer tubes" },
  { icon: "\u{1F3D7}\uFE0F", name: "Infrastructure & Construction", desc: "Kolkata Metro expansion, industrial parks — TMT bars, structural steel, MS plates" },
];

const FAQS = [
  { q: "Who is the best steel pipe supplier in Kolkata?", a: "Creative Metal Industries (CMI) is a trusted steel pipe supplier serving Kolkata and Eastern India since 2012. We supply stainless steel pipes (304, 316L, 321, 310, 904L), carbon steel (A106, A53, API 5L, IS 3589), alloy steel (P91, P22, P11 with IBR), duplex, and exotic alloys. We serve DVC/NTPC power plants, IOCL Haldia, SAIL Durgapur, and Garden Reach Shipbuilders. Our 2000+ tonne Vadodara warehouse provides 3-4 day delivery to Kolkata via dedicated road transport or rail." },
  { q: "What is the delivery time for steel pipes to Kolkata?", a: "Standard delivery from our Vadodara warehouse to Kolkata is 3-4 working days via road transport (approx 1,900 km). Express delivery in 72 hours available for urgent requirements. For Haldia industrial area (2,000 km), add half a day. We also ship via Indian Railways for bulk orders (10+ tonnes) which offers cost-effective delivery in 5-6 days. Door-to-door delivery to Howrah, Liluah, Belgharia, Dankuni or any industrial location in Kolkata/Howrah." },
  { q: "Do you supply SS flanges and pipe fittings in Kolkata?", a: "Yes, we are a comprehensive supplier of SS flanges and pipe fittings in Kolkata. Our flange range includes weld neck, slip-on, blind, lap joint, threaded and RTJ flanges in SS 304/316L, carbon steel A105, and alloy steel F11/F22/F91 — class 150 to 2500. Pipe fittings include buttweld (elbows 45/90/180, equal/reducing tees, concentric/eccentric reducers, caps) and forged fittings (socket weld and threaded). All with original MTC and material traceability." },
  { q: "Can you supply IBR-certified pipes for DVC power plants?", a: "Absolutely. We have extensive experience supplying IBR Form III-C certified alloy steel pipes to DVC (Damodar Valley Corporation) power plants and NTPC stations in Eastern India. We supply P91 (main steam), P22 (headers), P11 (economiser) from IBR-approved mills — Sumitomo (Japan), Vallourec (France), ISMT (India). Complete documentation: IBR Form III-C, MTC EN 10204 3.1/3.2, heat treatment records, hardness reports, and PMI certificates. Ready stock for emergency shutdowns." },
  { q: "What is the price of carbon steel pipe in Kolkata?", a: "Carbon steel seamless pipe (ASTM A106 Gr.B) prices in Kolkata range from Rs 75-180 per kg depending on size and schedule. ERW pipes (IS 1239/IS 3589) start from Rs 55 per kg. API 5L Gr.B line pipe for oil & gas starts from Rs 80 per kg. Prices depend on diameter, wall thickness, quantity and current steel market rates. For exact pricing, call +91 99982 80619 — formal quotation within 4 hours. We offer competitive direct-mill rates without Kolkata dealer margins." },
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Creative Metal Industries — Steel Pipe Supplier Kolkata",
      "description": "Trusted steel pipe supplier in Kolkata — SS pipes, CS pipes, alloy steel, flanges, fittings for power plants, refineries and shipbuilding in Eastern India.",
      "telephone": "+91-99982-80619",
      "url": "https://www.creativemetalind.com/steel-pipe-supplier-kolkata",
      "address": { "@type": "PostalAddress", "streetAddress": "386/B GIDC Estate, Makarpura", "addressLocality": "Vadodara", "addressRegion": "Gujarat", "postalCode": "390010", "addressCountry": "IN" },
      "areaServed": { "@type": "City", "name": "Kolkata", "containedInPlace": { "@type": "State", "name": "West Bengal" } },
      "priceRange": "$$",
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "39", "bestRating": "5" }
    },
    {
      "@type": "Product",
      "name": "Steel Pipes, Flanges & Fittings — Kolkata Supply",
      "description": "SS, CS, alloy steel pipes, flanges and fittings supplied to Kolkata and Eastern India industries.",
      "brand": { "@type": "Organization", "name": "Creative Metal Industries" },
      "offers": { "@type": "AggregateOffer", "priceCurrency": "INR", "lowPrice": "55", "highPrice": "15000", "offerCount": "5000+", "availability": "https://schema.org/InStock" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creativemetalind.com" },
        { "@type": "ListItem", "position": 2, "name": "Steel Pipe Supplier Kolkata", "item": "https://www.creativemetalind.com/steel-pipe-supplier-kolkata" }
      ]
    }
  ]
});
const FAQ_SCHEMA = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) });

export default function SteelPipeSupplierKolkata() {
  return (
    <>
      <Title>Steel Pipe Supplier Kolkata | SS Flange Alloy | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Steel pipe supplier Kolkata — SS 304/316L, carbon steel, alloy P91/P22 pipes, flanges & fittings. IBR certified. DVC/NTPC approved. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-pipe-supplier-kolkata" />
      <Meta property="og:title" content="Steel Pipe Supplier Kolkata | SS, Alloy, Flanges | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Steel pipe supplier Kolkata — SS, CS, alloy pipes, flanges & fittings. IBR certified. Ready stock. CMI." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-pipe-supplier-kolkata" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Pipe Supplier Kolkata | SS Flange Alloy | CMI" />
      <Meta name="twitter:description" content="Steel pipe supplier Kolkata — SS, CS, alloy pipes & flanges. IBR. 3-4 day delivery." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{ background: "#fff", "border-bottom": "1px solid #e5e7eb", padding: "1rem 1.5rem", display: "flex", "align-items": "center", gap: "1rem" }}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Steel Pipe Supplier Kolkata" width="140" height="71" /></a>
        <div style={{ flex: 1 }} />
        <a href="/#contact" style={{ background: "#E8821A", color: "#fff", padding: "0.5rem 1.2rem", "border-radius": "6px", "font-weight": "700", "font-size": "0.85rem", "text-decoration": "none" }}>Get Quote</a>
      </nav>
      <div style={{ background: "#f9fafb", "border-bottom": "1px solid #e5e7eb", padding: "0.6rem 1.5rem", "font-size": "0.82rem", color: "#6b7280" }}>
        <a href="/" style={{ color: "#E8821A", "text-decoration": "none" }}>Home</a><span style={{ margin: "0 0.5rem" }}>{"\u203A"}</span>
        <span>Steel Pipe Supplier Kolkata</span>
      </div>

      <main style={{ "max-width": "960px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <div style={{ "margin-bottom": "2.5rem", "text-align": "center" }}>
          <h1 style={{ "font-size": "clamp(1.8rem,4vw,2.6rem)", "font-weight": "800", color: "#111827", margin: "0 0 1rem", "line-height": "1.2" }}>
            Steel Pipe Supplier in Kolkata — SS Flanges, Alloy Pipes &amp; Fittings
          </h1>
          <p style={{ "font-size": "1.05rem", color: "#374151", "line-height": "1.8", "max-width": "750px", margin: "0 auto" }}>
            <strong>Creative Metal Industries</strong> is Eastern India's trusted <strong>steel pipe supplier in Kolkata</strong>, delivering stainless steel pipes, carbon steel pipes, alloy steel pipes, flanges and pipe fittings to West Bengal's industrial backbone. We serve DVC and NTPC thermal power stations, IOCL Haldia Refinery, SAIL Durgapur Steel Plant, Garden Reach Shipbuilders, and the region's fertilizer and chemical industry. With 2000+ tonnes ready stock at our Vadodara warehouse and dedicated transport to Kolkata (3-4 days), we ensure uninterrupted material supply for your projects — from planned expansions to emergency shutdowns.
          </p>
        </div>

        {/* Product Table */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Complete Product Range — Pipes, Flanges &amp; Fittings for Kolkata</h2>
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

        {/* Why Kolkata */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Why Kolkata &amp; Eastern India Choose CMI</h2>
        <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "10px", padding: "1.5rem", "margin-bottom": "2rem" }}>
          <ul style={{ "font-size": "0.92rem", color: "#374151", "line-height": "1.9", "padding-left": "1.25rem", margin: 0 }}>
            <li><strong>Power plant specialist:</strong> IBR-certified P91, P22, P11 alloy pipes for DVC, NTPC Farakka, Kolaghat and Mejia TPS with immediate dispatch</li>
            <li><strong>Refinery-approved:</strong> Full documentation including TPI (PDIL/EIL), PMI certificates, RT reports for IOCL Haldia and NRL projects</li>
            <li><strong>Complete flange inventory:</strong> WN, SO, blind, RTJ flanges in SS 304/316L, CS A105, alloy F11/F22 — class 150 to 2500, ASME B16.5 and B16.47</li>
            <li><strong>Eastern India reach:</strong> Kolkata, Haldia, Durgapur, Jamshedpur, Burnpur, Ranchi, Bhubaneswar — all served from Vadodara via road and rail</li>
            <li><strong>Emergency shutdown support:</strong> Critical materials dispatched within 24 hours for unplanned maintenance — P91/P22 heavy wall always in stock</li>
            <li><strong>SAIL-equivalent grades:</strong> We supply IS 3589, IS 1239, IS 2062 grades along with ASTM equivalents — matching local procurement specifications</li>
            <li><strong>Direct mill pricing:</strong> No Kolkata dealer/broker margin — sourced from Jindal, SAIL, Maharashtra Seamless, Sumitomo, Vallourec directly</li>
            <li><strong>13+ years reliability:</strong> Consistent quality and documentation since 2012 — trusted by Eastern India's EPC contractors and plant engineers</li>
          </ul>
        </div>

        {/* Industries */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Industries We Serve in Kolkata &amp; Eastern India</h2>
        <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(280px,1fr))", gap: "1rem", "margin-bottom": "2rem" }}>
          {INDUSTRIES.map(ind => (
            <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "8px", padding: "1rem" }}>
              <p style={{ "font-size": "1.1rem", margin: "0 0 0.3rem" }}>{ind.icon} <strong style={{ color: "#111827" }}>{ind.name}</strong></p>
              <p style={{ "font-size": "0.83rem", color: "#6b7280", margin: 0 }}>{ind.desc}</p>
            </div>
          ))}
        </div>

        {/* Supply Areas */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Key Supply Areas — Kolkata &amp; Eastern India</h2>
        <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(180px,1fr))", gap: "0.75rem", "margin-bottom": "2rem" }}>
          {["Howrah Industrial Belt", "Liluah / Belur", "Dankuni Industrial Area", "Haldia Industrial Complex", "Durgapur (SAIL/DVC)", "Jamshedpur (Tata Steel)", "Burnpur (IISCO)", "Asansol / Raniganj", "Kalyani Industrial Area", "Falta SEZ", "Budge Budge", "Uluberia / Sankrail"].map(area => (
            <div style={{ background: "#fff", border: "1px solid #e5e7eb", "border-radius": "6px", padding: "0.6rem 0.8rem", "font-size": "0.83rem", "font-weight": "600", color: "#374151", "text-align": "center" }}>{area}</div>
          ))}
        </div>

        {/* Cross-sell */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Complete CMI Product Lines Available in Kolkata</h2>
        <p style={{ "font-size": "0.92rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1.5rem" }}>
          Creative Metal Industries delivers the full range of industrial steel products to Kolkata and Eastern India. Our inventory includes <strong>stainless steel pipes</strong> (seamless and welded in all grades), <strong>carbon steel pipes</strong> (seamless A106, ERW IS 1239, SAW IS 3589), <strong>alloy steel pipes</strong> (P91/P22/P11 with IBR certification), <strong>flanges</strong> (SS/CS/alloy in all types and pressure classes), <strong>pipe fittings</strong> (buttweld and forged), <strong>steel plates</strong> (SA 516 Gr.70, NACE HIC for pressure vessels), <strong>TMT bars</strong> (Fe 500D — SAIL, Tata, Jindal), <strong>structural steel</strong> (ISMC, ISMB, MS angle), and <strong>exotic alloys</strong> (Inconel, Hastelloy, Monel, Duplex). Single source for your complete project bill of materials.
        </p>

        {/* FAQ */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Frequently Asked Questions — Steel Pipe Supplier Kolkata</h2>
        <div style={{ display: "flex", "flex-direction": "column", gap: "0.75rem", "margin-bottom": "3rem" }}>
          {FAQS.map(f => (
            <details style={{ background: "#fff", border: "1px solid #e5e7eb", "border-radius": "10px", padding: "1rem 1.25rem" }}><summary style={{ "font-weight": "700", "font-size": "0.92rem", color: "#111827", cursor: "pointer" }}>{f.q}</summary><p style={{ "font-size": "0.88rem", color: "#374151", "line-height": "1.7", "margin-top": "0.6rem", "margin-bottom": 0 }}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", "border-radius": "12px", padding: "2.5rem", "text-align": "center", "margin-bottom": "2rem" }}>
          <h2 style={{ color: "#fff", "font-size": "1.4rem", "font-weight": "800", "margin-bottom": "0.6rem" }}>Need Steel Pipes or Flanges in Kolkata? Get Quote Today!</h2>
          <p style={{ color: "rgba(255,255,255,0.9)", "margin-bottom": "1.25rem", "font-size": "0.95rem" }}>SS, CS, Alloy pipes & flanges. IBR certified. Ready stock. 3-4 day delivery to Kolkata & Eastern India.</p>
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
            { href: "/ss-flanges-supplier-vadodara", label: "SS Flanges Supplier India" },
            { href: "/carbon-steel-pipe-fittings-vadodara", label: "Carbon Steel Pipe & Fittings" },
            { href: "/steel-pipe-supplier-delhi", label: "Steel Pipe Supplier Delhi" },
            { href: "/steel-pipe-supplier-chennai", label: "Steel Pipe Supplier Chennai" },
          ].map(l => (
            <a href={l.href} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "8px", padding: "0.75rem 1rem", "font-size": "0.85rem", "font-weight": "600", color: "#E8821A", "text-decoration": "none" }}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      </main>

      <footer style={{ background: "#111827", color: "#9ca3af", padding: "2rem 1.5rem", "text-align": "center", "font-size": "0.82rem" }}>
        <p><strong style={{ color: "#fff" }}>Creative Metal Industries</strong> — Steel Pipe Supplier Kolkata | SS Flanges, Alloy Pipes, Fittings | Vadodara, Gujarat</p>
        <p style={{ "margin-top": "0.5rem" }}><a href="tel:+919998280619" style={{ color: "#E8821A" }}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{ color: "#E8821A" }}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
