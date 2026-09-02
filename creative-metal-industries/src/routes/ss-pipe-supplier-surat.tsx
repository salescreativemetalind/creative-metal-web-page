/**
 * /ss-pipe-supplier-surat
 * Target: "SS pipe supplier Surat", "stainless steel pipe supplier Surat"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";
import { LocationContent } from "../components/LocationContent";

const PRODUCTS = [
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310, 904L, 202", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, IS 1239, API 5L", sizes: "1/2\" to 48\"", type: "Seamless & ERW", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P5, P9, P11, P22, P91", sizes: "1/2\" to 24\"", type: "Seamless", stock: "Ready Stock" },
  { category: "Duplex Steel Pipes", grades: "Duplex 2205, Super Duplex 2507", sizes: "1/2\" to 16\"", type: "Seamless & Welded", stock: "Available" },
  { category: "Pipe Fittings & Flanges", grades: "SS, CS, Alloy — All types", sizes: "1/2\" to 48\"", type: "Buttweld, Forged, Flanges", stock: "Ready Stock" },
  { category: "Steel Plates & Sheets", grades: "SS 304/316L, SA 516, IS 2062, Hardox", sizes: "3mm to 150mm thick", type: "Hot Rolled & CR", stock: "Available" },
];

const INDUSTRIES = [
  { icon: "💎", name: "Diamond & Textile Industry", desc: "SS pipes for steam boilers, chemical processing in textile dyeing and diamond polishing units" },
  { icon: "🏭", name: "Chemical Plants — Sachin/Pandesara GIDC", desc: "SS 316L, Hastelloy, Duplex for chemical reactors, acid plants, ETP/STP" },
  { icon: "🛢️", name: "ONGC & Hazira Complex", desc: "Alloy steel, duplex, CuNi pipes for ONGC Hazira, Reliance, NTPC Kawas" },
  { icon: "⚡", name: "Power Plants", desc: "NTPC Kawas, Essar Power — boiler tubes, P91/P22 alloy pipes, IBR certified" },
  { icon: "🏗️", name: "Construction & Real Estate", desc: "Surat's booming real estate — structural steel, TMT bars, MS sections" },
  { icon: "🚢", name: "Port & Marine — Hazira", desc: "Hazira port, shipyard — marine grade duplex, super duplex and CuNi piping" },
];

const FAQS = [
  { q: "Who is the best SS pipe supplier in Surat?", a: "Creative Metal Industries is a trusted SS pipe supplier for Surat since 2012. We supply SS 304, 316L, 321, 310S, and 904L pipes in seamless and welded form. Our Vadodara warehouse is 150 km from Surat with next-day delivery guaranteed. We serve Sachin GIDC, Pandesara GIDC, Hazira Industrial Area, and Surat city. Call +91 99982 80619 for best prices." },
  { q: "What is the delivery time for pipe supply to Surat?", a: "Next-day delivery for all ready stock items. Our Vadodara warehouse at GIDC Makarpura is 150 km from Surat — dispatch in morning reaches Surat by evening same day or next morning. For Hazira industrial area, we have regular transport arrangements. Express delivery within 6-8 hours available for urgent requirements." },
  { q: "Do you supply to Hazira ONGC and industrial area?", a: "Yes, we are regular suppliers to Hazira industrial complex including ONGC, Reliance, Essar, NTPC Kawas, and L&T shipyard at Hazira. We supply SS, duplex, alloy steel, and exotic alloy pipes with full documentation — MTC, TPI reports, IBR certificates for boiler applications." },
  { q: "What is SS 304 pipe price in Surat today?", a: "SS 304 seamless pipe price in Surat ranges from Rs 245-430 per kg. Welded pipes from Rs 175-310 per kg. Prices vary by size, schedule, and current nickel LME rates. We offer direct mill rates without middleman charges. Call +91 99982 80619 for exact quotation with delivery to Surat." },
  { q: "Do you supply structural steel and TMT bars in Surat?", a: "Yes, we supply MS angles (IS 808), MS channels (ISMC), MS beams (ISMB), MS plates (IS 2062), and TMT bars (Fe 500D) from SAIL, JSW, TATA, and VSP. Surat's growing construction market is a major focus for us. All BIS-certified primary material with test certificates." },
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    { "@type":"LocalBusiness","@id":"https://www.creativemetalind.com/ss-pipe-supplier-surat#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name": "Creative Metal Industries — SS Pipe Supplier Surat", "description": "Leading SS pipe supplier in Surat offering stainless steel, carbon steel, alloy steel pipes, fittings and flanges for chemical, textile, ONGC and construction projects.", "telephone": "+919998280619", "url": "https://www.creativemetalind.com/ss-pipe-supplier-surat", "address": { "@type": "PostalAddress", "streetAddress": "386/B GIDC Estate, Makarpura", "addressLocality": "Vadodara", "addressRegion": "Gujarat", "postalCode": "390010", "addressCountry": "IN" }, "areaServed": { "@type": "City", "name": "Surat", "containedInPlace": { "@type": "State", "name": "Gujarat" } }, "priceRange": "$$" },
    { "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creativemetalind.com" }, { "@type": "ListItem", "position": 2, "name": "SS Pipe Supplier Surat", "item": "https://www.creativemetalind.com/ss-pipe-supplier-surat" } ] }
  ]
});
const FAQ_SCHEMA = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) });

export default function SSPipeSupplierSurat() {
  return (
    <>
      <Title>SS Pipe Supplier Surat | Stainless Steel Pipe Surat | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="SS pipe supplier Surat — stainless steel 304/316L, carbon steel, alloy steel pipes, fittings & flanges. Next-day delivery from Vadodara." />
      <Link rel="canonical" href="https://www.creativemetalind.com/ss-pipe-supplier-surat" />
      <Meta property="og:title" content="SS Pipe Supplier Surat | Stainless Steel Pipe | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="SS pipe supplier Surat — stainless steel, CS, alloy pipes. Next-day delivery. Creative Metal Industries." />
      <Meta property="og:url" content="https://www.creativemetalind.com/ss-pipe-supplier-surat" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{ background: "#fff", "border-bottom": "1px solid #e5e7eb", padding: "1rem 1.5rem", display: "flex", "align-items": "center", gap: "1rem" }}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — SS Pipe Supplier Surat" width="140" height="71" /></a>
        <div style={{ flex: 1 }} />
        <a href="/#contact" style={{ background: "#E8821A", color: "#fff", padding: "0.5rem 1.2rem", "border-radius": "6px", "font-weight": "700", "font-size": "0.85rem", "text-decoration": "none" }}>Get Quote</a>
      </nav>
      <div style={{ background: "#f9fafb", "border-bottom": "1px solid #e5e7eb", padding: "0.6rem 1.5rem", "font-size": "0.82rem", color: "#6b7280" }}>
        <a href="/" style={{ color: "#E8821A", "text-decoration": "none" }}>Home</a><span style={{ margin: "0 0.5rem" }}>{"\u203A"}</span><span>SS Pipe Supplier Surat</span>
      </div>

      <main style={{ "max-width": "960px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <div style={{ "margin-bottom": "2.5rem", "text-align": "center" }}>
          <h1 style={{ "font-size": "clamp(1.8rem,4vw,2.6rem)", "font-weight": "800", color: "#111827", margin: "0 0 1rem", "line-height": "1.2" }}>SS Pipe Supplier in Surat — Stainless Steel Pipes &amp; Fittings</h1>
          <p style={{ "font-size": "1.1rem", color: "#4b5563", "max-width": "700px", margin: "0 auto 1.5rem" }}>Creative Metal Industries supplies SS, carbon steel, alloy steel and exotic alloy pipes to Surat's chemical, textile, power and construction industries. Next-day delivery from Vadodara.</p>
          <div style={{ display: "flex", gap: "1rem", "justify-content": "center", "flex-wrap": "wrap" }}>
            <a href="tel:+919998280619" style={{ background: "#E8821A", color: "#fff", padding: "0.8rem 1.5rem", "border-radius": "8px", "font-weight": "700", "text-decoration": "none" }}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619" style={{ background: "#25D366", color: "#fff", padding: "0.8rem 1.5rem", "border-radius": "8px", "font-weight": "700", "text-decoration": "none" }}>💬 WhatsApp</a>
          </div>
        </div>

        <section style={{ "margin-bottom": "3rem" }}>
          <h2 style={{ "font-size": "1.5rem", "font-weight": "700", "margin-bottom": "1rem" }}>Products We Supply in Surat</h2>
          <div style={{ "overflow-x": "auto" }}>
            <table style={{ width: "100%", "border-collapse": "collapse", "font-size": "0.9rem" }}>
              <thead><tr style={{ background: "#f3f4f6" }}><th style={{ padding: "0.75rem", "text-align": "left", "border-bottom": "2px solid #e5e7eb" }}>Product</th><th style={{ padding: "0.75rem", "text-align": "left", "border-bottom": "2px solid #e5e7eb" }}>Grades</th><th style={{ padding: "0.75rem", "text-align": "left", "border-bottom": "2px solid #e5e7eb" }}>Sizes</th><th style={{ padding: "0.75rem", "text-align": "left", "border-bottom": "2px solid #e5e7eb" }}>Stock</th></tr></thead>
              <tbody>{PRODUCTS.map(p => <tr><td style={{ padding: "0.75rem", "border-bottom": "1px solid #e5e7eb", "font-weight": "600" }}>{p.category}</td><td style={{ padding: "0.75rem", "border-bottom": "1px solid #e5e7eb" }}>{p.grades}</td><td style={{ padding: "0.75rem", "border-bottom": "1px solid #e5e7eb" }}>{p.sizes}</td><td style={{ padding: "0.75rem", "border-bottom": "1px solid #e5e7eb" }}>{p.stock}</td></tr>)}</tbody>
            </table>
          </div>
        </section>

        <section style={{ "margin-bottom": "3rem" }}>
          <h2 style={{ "font-size": "1.5rem", "font-weight": "700", "margin-bottom": "1rem" }}>Industries We Serve in Surat</h2>
          <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {INDUSTRIES.map(ind => <div style={{ background: "#f9fafb", padding: "1.2rem", "border-radius": "8px", border: "1px solid #e5e7eb" }}><p style={{ "font-size": "1.5rem", margin: "0 0 0.3rem" }}>{ind.icon}</p><h3 style={{ margin: "0 0 0.3rem", "font-size": "1rem" }}>{ind.name}</h3><p style={{ margin: 0, "font-size": "0.88rem", color: "#6b7280" }}>{ind.desc}</p></div>)}
          </div>
        </section>

        <section style={{ "margin-bottom": "3rem" }}>
          <h2 style={{ "font-size": "1.5rem", "font-weight": "700", "margin-bottom": "1rem" }}>Why Choose CMI for Surat Supply?</h2>
          <ul style={{ "line-height": "2", "padding-left": "1.5rem" }}>
            <li><strong>Next-Day Delivery:</strong> Vadodara to Surat (150 km) — dispatch today, deliver tomorrow morning</li>
            <li><strong>2000+ Tonnes Stock:</strong> SS, CS, alloy, structural — all available for immediate dispatch</li>
            <li><strong>Mill-Direct Rates:</strong> Jindal, SAIL, Ratnamani, ISMT — no broker margins</li>
            <li><strong>Full Documentation:</strong> MTC 3.1/3.2, IBR Form III-C, PMI, TPI — all provided</li>
            <li><strong>Serving Since 2012:</strong> 12+ years experience in Gujarat steel market</li>
          </ul>
        </section>

        <section style={{ "margin-bottom": "3rem" }}>
          <h2 style={{ "font-size": "1.5rem", "font-weight": "700", "margin-bottom": "1rem" }}>Frequently Asked Questions</h2>
          {FAQS.map(faq => <div style={{ "margin-bottom": "1.5rem", background: "#f9fafb", padding: "1.2rem", "border-radius": "8px" }}><h3 style={{ margin: "0 0 0.5rem", "font-size": "1rem", color: "#111827" }}>{faq.q}</h3><p style={{ margin: 0, "font-size": "0.92rem", color: "#4b5563", "line-height": "1.7" }}>{faq.a}</p></div>)}
        </section>

        <div style={{ background: "linear-gradient(135deg, #E8821A 0%, #d97706 100%)", "border-radius": "12px", padding: "2.5rem", "text-align": "center", color: "#fff" }}>
          <h2 style={{ margin: "0 0 0.5rem", "font-size": "1.5rem" }}>Need SS Pipes in Surat? Call Now!</h2>
          <p style={{ margin: "0 0 1.5rem", opacity: 0.9 }}>Next-day dispatch from Vadodara. Best prices guaranteed.</p>
          <div style={{ display: "flex", gap: "1rem", "justify-content": "center", "flex-wrap": "wrap" }}>
            <a href="tel:+919998280619" style={{ background: "#fff", color: "#E8821A", padding: "0.8rem 1.5rem", "border-radius": "8px", "font-weight": "700", "text-decoration": "none" }}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619" style={{ background: "#25D366", color: "#fff", padding: "0.8rem 1.5rem", "border-radius": "8px", "font-weight": "700", "text-decoration": "none" }}>💬 WhatsApp Us</a>
          </div>
        </div>
      
        <LocationContent slug="surat" />
      
        <RelatedPages currentPath="/ss-pipe-supplier-surat" />
      </main>

      <footer style={{ background: "#111827", color: "#9ca3af", padding: "2rem 1.5rem", "text-align": "center", "font-size": "0.85rem" }}>
        <p>© 2026 Creative Metal Industries, Vadodara. All rights reserved.</p>
        <p><a href="/privacy-policy" style={{ color: "#9ca3af" }}>Privacy Policy</a> · <a href="/terms" style={{ color: "#9ca3af" }}>Terms</a> · <a href="/sitemap" style={{ color: "#9ca3af" }}>Sitemap</a></p>
      </footer>
    </>
  );
}
