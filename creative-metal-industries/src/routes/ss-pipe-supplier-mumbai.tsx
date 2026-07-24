/**
 * /ss-pipe-supplier-mumbai
 * Target: "SS pipe supplier Mumbai", "stainless steel pipe Mumbai"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const PRODUCTS = [
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310, 904L", sizes: "1/2\" to 24\"", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L", sizes: "1/2\" to 48\"", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P5, P9, P11, P22, P91", sizes: "1/2\" to 24\"", stock: "Ready Stock" },
  { category: "Duplex & Super Duplex", grades: "2205, 2507, S32760", sizes: "1/2\" to 16\"", stock: "Available" },
  { category: "Exotic Alloys", grades: "Inconel 625/600, Hastelloy C276, Monel 400, Titanium", sizes: "1/2\" to 10\"", stock: "Available" },
  { category: "Fittings & Flanges", grades: "SS, CS, Alloy — Buttweld, Forged, All flange types", sizes: "1/2\" to 48\"", stock: "Ready Stock" },
  { category: "Steel Plates", grades: "SS, SA 516, IS 2062, Hardox, Corten", sizes: "3mm to 150mm", stock: "Available" },
];

const INDUSTRIES = [
  { icon: "🛢️", name: "BPCL / HPCL Refineries", desc: "Mahul Refinery complex — SS, CS, alloy pipes for turnaround and new projects" },
  { icon: "🏭", name: "Chemical & Pharma — Thane/Navi Mumbai", desc: "TTC MIDC, Taloja MIDC, Patalganga — pharma grade SS 316L, Hastelloy" },
  { icon: "🚢", name: "Shipbuilding & Offshore", desc: "Mazagon Dock, ONGC Western Offshore — marine grade duplex, CuNi pipes" },
  { icon: "⚡", name: "Power Plants", desc: "Tata Power Trombay, Adani Dahanu — boiler tubes, P91 alloy pipes" },
  { icon: "🏗️", name: "Infrastructure & Metro", desc: "Mumbai Metro, coastal road, bridges — structural steel, TMT bars" },
  { icon: "🔬", name: "Nuclear & Defence", desc: "BARC Trombay — special alloys, titanium, Inconel for nuclear applications" },
];

const FAQS = [
  { q: "Who is the best SS pipe supplier in Mumbai?", a: "Creative Metal Industries supplies stainless steel pipes to Mumbai since 2012. We offer SS 304, 316L, 321, 310S, 904L in seamless (ASTM A312) and welded forms. Our Vadodara warehouse dispatches to Mumbai daily — delivery in 1-2 days. We serve MIDC areas, refineries, ports, and all Mumbai industrial zones. Direct mill rates from Jindal, SAIL, Ratnamani." },
  { q: "What is delivery time from Vadodara to Mumbai?", a: "1-2 working days standard delivery. Vadodara to Mumbai is ~400 km via NH48. We dispatch daily with dedicated transport. Express delivery within 24 hours available. We also have ready stock arrangements with partners in Kalamboli steel market for commonly required SS 304/316L pipes and fittings." },
  { q: "Do you supply to BPCL Mahul and offshore projects?", a: "Yes, we are experienced suppliers to BPCL Mumbai Refinery, HPCL, ONGC Western Offshore, and other oil & gas projects. We supply with complete documentation — original MTC, TPI by EIL/PDIL/DNV/Lloyds, radiography, PMI, IBR Form III-C for boiler grade materials." },
  { q: "What is SS pipe price in Mumbai today?", a: "SS 304 seamless pipe prices in Mumbai range Rs 250-450/kg, welded Rs 180-320/kg depending on size and schedule. We offer competitive rates compared to Kalamboli market dealers. Call +91 99982 80619 for exact quotation." },
];

const SCHEMA = JSON.stringify({ "@context": "https://schema.org", "@graph": [
  { "@type": "LocalBusiness", "name": "Creative Metal Industries — SS Pipe Supplier Mumbai", "description": "Leading SS pipe supplier in Mumbai for refineries, chemical plants, offshore and infrastructure projects.", "telephone": "+91-99982-80619", "url": "https://www.creativemetalind.com/ss-pipe-supplier-mumbai", "address": { "@type": "PostalAddress", "streetAddress": "386/B GIDC Estate, Makarpura", "addressLocality": "Vadodara", "addressRegion": "Gujarat", "postalCode": "390010", "addressCountry": "IN" }, "areaServed": { "@type": "City", "name": "Mumbai", "containedInPlace": { "@type": "State", "name": "Maharashtra" } }, "priceRange": "$$" },
  { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creativemetalind.com" }, { "@type": "ListItem", "position": 2, "name": "SS Pipe Supplier Mumbai", "item": "https://www.creativemetalind.com/ss-pipe-supplier-mumbai" }] }
] });
const FAQ_SCHEMA = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) });

export default function SSPipeSupplierMumbai() {
  return (<>
    <Title>SS Pipe Supplier Mumbai | Stainless Steel Pipe Mumbai | CMI</Title>
    <Meta name="robots" content="index, follow, max-image-preview:large" />
    <Meta name="description" content="SS pipe supplier Mumbai — stainless steel 304/316L, carbon steel, alloy steel, duplex pipes, fittings & flanges. BPCL/HPCL approved. Delivery 1-2 days. Call +91 99982 80619." />
    <Link rel="canonical" href="https://www.creativemetalind.com/ss-pipe-supplier-mumbai" />
    <Meta property="og:title" content="SS Pipe Supplier Mumbai | Stainless Steel Pipe | CMI" />
    <Meta property="og:type" content="website" />
    <Meta property="og:description" content="SS pipe supplier Mumbai — SS, CS, alloy, duplex pipes. BPCL/HPCL approved. Creative Metal Industries." />
    <Meta property="og:url" content="https://www.creativemetalind.com/ss-pipe-supplier-mumbai" />
    <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
    <Meta name="twitter:card" content="summary_large_image" />
    <script type="application/ld+json" innerHTML={SCHEMA} />
    <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

    <nav style={{ background: "#fff", "border-bottom": "1px solid #e5e7eb", padding: "1rem 1.5rem", display: "flex", "align-items": "center", gap: "1rem" }}>
      <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries" width="140" height="71" /></a>
      <div style={{ flex: 1 }} />
      <a href="/#contact" style={{ background: "#E8821A", color: "#fff", padding: "0.5rem 1.2rem", "border-radius": "6px", "font-weight": "700", "font-size": "0.85rem", "text-decoration": "none" }}>Get Quote</a>
    </nav>
    <div style={{ background: "#f9fafb", "border-bottom": "1px solid #e5e7eb", padding: "0.6rem 1.5rem", "font-size": "0.82rem", color: "#6b7280" }}>
      <a href="/" style={{ color: "#E8821A", "text-decoration": "none" }}>Home</a><span style={{ margin: "0 0.5rem" }}>{"\u203A"}</span><span>SS Pipe Supplier Mumbai</span>
    </div>

    <main style={{ "max-width": "960px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <div style={{ "margin-bottom": "2.5rem", "text-align": "center" }}>
        <h1 style={{ "font-size": "clamp(1.8rem,4vw,2.6rem)", "font-weight": "800", color: "#111827", margin: "0 0 1rem" }}>SS Pipe Supplier in Mumbai — Stainless Steel, CS &amp; Alloy Pipes</h1>
        <p style={{ "font-size": "1.1rem", color: "#4b5563", "max-width": "700px", margin: "0 auto 1.5rem" }}>Creative Metal Industries supplies premium SS, carbon steel, alloy steel, duplex and exotic alloy pipes to Mumbai's refineries, chemical plants, offshore projects and infrastructure. 1-2 day delivery from Vadodara.</p>
        <div style={{ display: "flex", gap: "1rem", "justify-content": "center", "flex-wrap": "wrap" }}>
          <a href="tel:+919998280619" style={{ background: "#E8821A", color: "#fff", padding: "0.8rem 1.5rem", "border-radius": "8px", "font-weight": "700", "text-decoration": "none" }}>📞 +91 99982 80619</a>
          <a href="https://wa.me/919998280619" style={{ background: "#25D366", color: "#fff", padding: "0.8rem 1.5rem", "border-radius": "8px", "font-weight": "700", "text-decoration": "none" }}>💬 WhatsApp</a>
        </div>
      </div>

      <section style={{ "margin-bottom": "3rem" }}>
        <h2>Products We Supply in Mumbai</h2>
        <div style={{ "overflow-x": "auto" }}>
          <table style={{ width: "100%", "border-collapse": "collapse", "font-size": "0.9rem" }}>
            <thead><tr style={{ background: "#f3f4f6" }}><th style={{ padding: "0.75rem", "text-align": "left", "border-bottom": "2px solid #e5e7eb" }}>Product</th><th style={{ padding: "0.75rem", "text-align": "left", "border-bottom": "2px solid #e5e7eb" }}>Grades</th><th style={{ padding: "0.75rem", "text-align": "left", "border-bottom": "2px solid #e5e7eb" }}>Sizes</th><th style={{ padding: "0.75rem", "text-align": "left", "border-bottom": "2px solid #e5e7eb" }}>Stock</th></tr></thead>
            <tbody>{PRODUCTS.map(p => <tr><td style={{ padding: "0.75rem", "border-bottom": "1px solid #e5e7eb", "font-weight": "600" }}>{p.category}</td><td style={{ padding: "0.75rem", "border-bottom": "1px solid #e5e7eb" }}>{p.grades}</td><td style={{ padding: "0.75rem", "border-bottom": "1px solid #e5e7eb" }}>{p.sizes}</td><td style={{ padding: "0.75rem", "border-bottom": "1px solid #e5e7eb" }}>{p.stock}</td></tr>)}</tbody>
          </table>
        </div>
      </section>

      <section style={{ "margin-bottom": "3rem" }}>
        <h2>Industries We Serve in Mumbai</h2>
        <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
          {INDUSTRIES.map(ind => <div style={{ background: "#f9fafb", padding: "1.2rem", "border-radius": "8px", border: "1px solid #e5e7eb" }}><p style={{ "font-size": "1.5rem", margin: "0 0 0.3rem" }}>{ind.icon}</p><h3 style={{ margin: "0 0 0.3rem", "font-size": "1rem" }}>{ind.name}</h3><p style={{ margin: 0, "font-size": "0.88rem", color: "#6b7280" }}>{ind.desc}</p></div>)}
        </div>
      </section>

      <section style={{ "margin-bottom": "3rem" }}>
        <h2>Why Choose CMI for Mumbai Supply?</h2>
        <ul style={{ "line-height": "2", "padding-left": "1.5rem" }}>
          <li><strong>1-2 Day Delivery:</strong> Daily dispatch from Vadodara to Mumbai via NH48</li>
          <li><strong>Huge Ready Stock:</strong> 2000+ tonnes — SS, CS, alloy, structural at GIDC Makarpura</li>
          <li><strong>Better Than Kalamboli Rates:</strong> Direct mill pricing without middleman margins</li>
          <li><strong>Refinery Approved:</strong> Supplied to BPCL, HPCL, ONGC, Reliance projects</li>
          <li><strong>Complete Certifications:</strong> MTC, IBR, PMI, NACE, TPI — all documentation provided</li>
        </ul>
      </section>

      <section style={{ "margin-bottom": "3rem" }}>
        <h2>Frequently Asked Questions</h2>
        {FAQS.map(faq => <div style={{ "margin-bottom": "1.5rem", background: "#f9fafb", padding: "1.2rem", "border-radius": "8px" }}><h3 style={{ margin: "0 0 0.5rem", "font-size": "1rem" }}>{faq.q}</h3><p style={{ margin: 0, "font-size": "0.92rem", color: "#4b5563", "line-height": "1.7" }}>{faq.a}</p></div>)}
      </section>

      <div style={{ background: "linear-gradient(135deg, #E8821A 0%, #d97706 100%)", "border-radius": "12px", padding: "2.5rem", "text-align": "center", color: "#fff" }}>
        <h2 style={{ margin: "0 0 0.5rem" }}>Need SS Pipes in Mumbai? Call Now!</h2>
        <p style={{ margin: "0 0 1.5rem", opacity: 0.9 }}>Delivery in 1-2 days. Best prices guaranteed.</p>
        <div style={{ display: "flex", gap: "1rem", "justify-content": "center", "flex-wrap": "wrap" }}>
          <a href="tel:+919998280619" style={{ background: "#fff", color: "#E8821A", padding: "0.8rem 1.5rem", "border-radius": "8px", "font-weight": "700", "text-decoration": "none" }}>📞 +91 99982 80619</a>
          <a href="https://wa.me/919998280619" style={{ background: "#25D366", color: "#fff", padding: "0.8rem 1.5rem", "border-radius": "8px", "font-weight": "700", "text-decoration": "none" }}>💬 WhatsApp Us</a>
        </div>
      </div>
    
        <RelatedPages currentPath="/ss-pipe-supplier-mumbai" />
      </main>

    <footer style={{ background: "#111827", color: "#9ca3af", padding: "2rem 1.5rem", "text-align": "center", "font-size": "0.85rem" }}>
      <p>© 2026 Creative Metal Industries, Vadodara. All rights reserved.</p>
      <p><a href="/privacy-policy" style={{ color: "#9ca3af" }}>Privacy Policy</a> · <a href="/terms" style={{ color: "#9ca3af" }}>Terms</a> · <a href="/sitemap" style={{ color: "#9ca3af" }}>Sitemap</a></p>
    </footer>
  </>);
}
