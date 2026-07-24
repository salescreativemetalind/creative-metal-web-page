/**
 * /ss-pipe-supplier-ahmedabad
 * Target: "SS pipe supplier Ahmedabad", "stainless steel pipe Ahmedabad",
 * "steel pipe supplier Ahmedabad"
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
  { category: "Steel Plates & Sheets", grades: "SS 304/316L, SA 516, IS 2062, Hardox", sizes: "3mm to 150mm thick", type: "Hot Rolled & CR", stock: "Available" },
];

const INDUSTRIES = [
  { icon: "🏭", name: "Chemical & Pharma", desc: "Vatva GIDC, Naroda GIDC, Odhav — chemical process piping, pharma SS 316L pipes" },
  { icon: "🛢️", name: "Oil & Gas / Refineries", desc: "IOCL Koyali (nearby), GSPC projects — refinery piping and fittings" },
  { icon: "🏗️", name: "Construction & Infra", desc: "Ahmedabad Metro, GIFT City, high-rises — structural steel, TMT bars" },
  { icon: "🔬", name: "Textile & Dyeing", desc: "Narol textile belt — SS pipes, boiler tubes for steam lines" },
  { icon: "⚡", name: "Power & Energy", desc: "Torrent Power, Adani — boiler tubes, alloy steel P91/P22 pipes" },
  { icon: "🚗", name: "Automobile & Engineering", desc: "Sanand industrial area — precision tubes, round bars, structural steel" },
];

const FAQS = [
  { q: "Who is the best SS pipe supplier in Ahmedabad?", a: "Creative Metal Industries (CMI) is a trusted SS pipe supplier serving Ahmedabad since 2012. We supply stainless steel pipes in grades 304, 304L, 316, 316L, 321, 310S, and 904L. Both seamless (ASTM A312) and welded pipes available in all schedules from SCH 5S to XXS. Our Vadodara warehouse is just 110 km from Ahmedabad — delivery within same day or next day. We serve Vatva GIDC, Naroda GIDC, Odhav, Sanand, and all Ahmedabad industrial areas." },
  { q: "What is the delivery time from Vadodara to Ahmedabad?", a: "Same-day or next-day delivery. Our warehouse at GIDC Makarpura, Vadodara is only 110 km from Ahmedabad. For urgent requirements, we can arrange express dispatch reaching Ahmedabad within 4-6 hours. Regular orders are dispatched same day and delivered next morning. We also offer free delivery for bulk orders above certain value within Ahmedabad city limits." },
  { q: "Do you supply to Vatva GIDC and Naroda GIDC?", a: "Yes, we regularly supply to Vatva GIDC, Naroda GIDC, Odhav Industrial Estate, Sanand Auto Hub, Changodar GIDC, and all industrial areas in and around Ahmedabad. Our clients include chemical plants, pharmaceutical companies, textile units, engineering works, and EPC contractors operating in these estates." },
  { q: "What is SS 304 pipe price in Ahmedabad today?", a: "SS 304 seamless pipe prices in Ahmedabad range from Rs 240-420 per kg depending on size, schedule, and quantity. Welded SS 304 pipes start from Rs 170-300 per kg. Prices depend on nickel LME rates and mill pricing. Call us at +91 99982 80619 for today's exact rates. We offer better prices than most Ahmedabad-based dealers because we buy directly from mills — Jindal, SAIL Salem, Ratnamani." },
  { q: "Can you supply material with Mill Test Certificate in Ahmedabad?", a: "Yes, all material is supplied with original Mill Test Certificate (MTC) as per EN 10204 Type 3.1. For critical applications, we provide 3.2 certificates with TPI validation by DNV, TUV, SGS, or BVIS. PMI (Positive Material Identification) reports, NABL lab test reports, and IBR Form III-C certificates are also available on request." },
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Creative Metal Industries — SS Pipe Supplier Ahmedabad",
      "description": "Leading SS pipe supplier in Ahmedabad offering stainless steel, carbon steel, alloy steel, duplex and exotic alloy pipes, fittings and flanges for chemical, pharma and industrial projects.",
      "telephone": "+91-99982-80619",
      "url": "https://www.creativemetalind.com/ss-pipe-supplier-ahmedabad",
      "address": { "@type": "PostalAddress", "streetAddress": "386/B GIDC Estate, Makarpura", "addressLocality": "Vadodara", "addressRegion": "Gujarat", "postalCode": "390010", "addressCountry": "IN" },
      "areaServed": { "@type": "City", "name": "Ahmedabad", "containedInPlace": { "@type": "State", "name": "Gujarat" } },
      "priceRange": "$$",
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "72", "bestRating": "5" }
    },
    {
      "@type": "Product",
      "name": "SS Pipes & Fittings — Ahmedabad Supply",
      "description": "Complete range of stainless steel, carbon steel, alloy steel, duplex and exotic alloy pipes, fittings and flanges supplied to Ahmedabad industries.",
      "brand": { "@type": "Organization", "name": "Creative Metal Industries" },
      "offers": { "@type": "AggregateOffer", "priceCurrency": "INR", "lowPrice": "170", "highPrice": "15000", "offerCount": "5000+", "availability": "https://schema.org/InStock" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creativemetalind.com" },
        { "@type": "ListItem", "position": 2, "name": "SS Pipe Supplier Ahmedabad", "item": "https://www.creativemetalind.com/ss-pipe-supplier-ahmedabad" }
      ]
    }
  ]
});
const FAQ_SCHEMA = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) });

export default function SSPipeSupplierAhmedabad() {
  return (
    <>
      <Title>SS Pipe Supplier Ahmedabad | Stainless Steel Pipe | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="SS pipe supplier Ahmedabad — stainless steel 304/316L, carbon steel, alloy steel pipes, fittings & flanges. Same-day delivery from Vadodara. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/ss-pipe-supplier-ahmedabad" />
      <Meta property="og:title" content="SS Pipe Supplier Ahmedabad | Stainless Steel Pipe | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="SS pipe supplier Ahmedabad — stainless steel, CS, alloy pipes. Same-day delivery. Creative Metal Industries." />
      <Meta property="og:url" content="https://www.creativemetalind.com/ss-pipe-supplier-ahmedabad" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS Pipe Supplier Ahmedabad | Stainless Steel | CMI" />
      <Meta name="twitter:description" content="SS pipe supplier Ahmedabad — stainless steel pipes. Same-day delivery from Vadodara." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{ background: "#fff", "border-bottom": "1px solid #e5e7eb", padding: "1rem 1.5rem", display: "flex", "align-items": "center", gap: "1rem" }}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — SS Pipe Supplier Ahmedabad" width="140" height="71" /></a>
        <div style={{ flex: 1 }} />
        <a href="/#contact" style={{ background: "#E8821A", color: "#fff", padding: "0.5rem 1.2rem", "border-radius": "6px", "font-weight": "700", "font-size": "0.85rem", "text-decoration": "none" }}>Get Quote</a>
      </nav>
      <div style={{ background: "#f9fafb", "border-bottom": "1px solid #e5e7eb", padding: "0.6rem 1.5rem", "font-size": "0.82rem", color: "#6b7280" }}>
        <a href="/" style={{ color: "#E8821A", "text-decoration": "none" }}>Home</a><span style={{ margin: "0 0.5rem" }}>{"\u203A"}</span>
        <span>SS Pipe Supplier Ahmedabad</span>
      </div>

      <main style={{ "max-width": "960px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <div style={{ "margin-bottom": "2.5rem", "text-align": "center" }}>
          <h1 style={{ "font-size": "clamp(1.8rem,4vw,2.6rem)", "font-weight": "800", color: "#111827", margin: "0 0 1rem", "line-height": "1.2" }}>
            SS Pipe Supplier in Ahmedabad — Stainless Steel Pipes, Fittings &amp; Flanges
          </h1>
          <p style={{ "font-size": "1.1rem", color: "#4b5563", "max-width": "700px", margin: "0 auto 1.5rem" }}>
            Creative Metal Industries supplies premium stainless steel, carbon steel, alloy steel, duplex and exotic alloy pipes to all industrial areas in Ahmedabad. Same-day delivery from our Vadodara warehouse — just 110 km away.
          </p>
          <div style={{ display: "flex", gap: "1rem", "justify-content": "center", "flex-wrap": "wrap" }}>
            <a href="tel:+919998280619" style={{ background: "#E8821A", color: "#fff", padding: "0.8rem 1.5rem", "border-radius": "8px", "font-weight": "700", "text-decoration": "none" }}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619" style={{ background: "#25D366", color: "#fff", padding: "0.8rem 1.5rem", "border-radius": "8px", "font-weight": "700", "text-decoration": "none" }}>💬 WhatsApp</a>
          </div>
        </div>

        <section style={{ "margin-bottom": "3rem" }}>
          <h2 style={{ "font-size": "1.5rem", "font-weight": "700", "margin-bottom": "1rem" }}>Products We Supply in Ahmedabad</h2>
          <div style={{ "overflow-x": "auto" }}>
            <table style={{ width: "100%", "border-collapse": "collapse", "font-size": "0.9rem" }}>
              <thead><tr style={{ background: "#f3f4f6" }}><th style={{ padding: "0.75rem", "text-align": "left", "border-bottom": "2px solid #e5e7eb" }}>Product</th><th style={{ padding: "0.75rem", "text-align": "left", "border-bottom": "2px solid #e5e7eb" }}>Grades</th><th style={{ padding: "0.75rem", "text-align": "left", "border-bottom": "2px solid #e5e7eb" }}>Sizes</th><th style={{ padding: "0.75rem", "text-align": "left", "border-bottom": "2px solid #e5e7eb" }}>Stock</th></tr></thead>
              <tbody>{PRODUCTS.map(p => <tr><td style={{ padding: "0.75rem", "border-bottom": "1px solid #e5e7eb", "font-weight": "600" }}>{p.category}</td><td style={{ padding: "0.75rem", "border-bottom": "1px solid #e5e7eb" }}>{p.grades}</td><td style={{ padding: "0.75rem", "border-bottom": "1px solid #e5e7eb" }}>{p.sizes}</td><td style={{ padding: "0.75rem", "border-bottom": "1px solid #e5e7eb" }}>{p.stock}</td></tr>)}</tbody>
            </table>
          </div>
        </section>

        <section style={{ "margin-bottom": "3rem" }}>
          <h2 style={{ "font-size": "1.5rem", "font-weight": "700", "margin-bottom": "1rem" }}>Industries We Serve in Ahmedabad</h2>
          <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {INDUSTRIES.map(ind => <div style={{ background: "#f9fafb", padding: "1.2rem", "border-radius": "8px", border: "1px solid #e5e7eb" }}><p style={{ "font-size": "1.5rem", margin: "0 0 0.3rem" }}>{ind.icon}</p><h3 style={{ margin: "0 0 0.3rem", "font-size": "1rem" }}>{ind.name}</h3><p style={{ margin: 0, "font-size": "0.88rem", color: "#6b7280" }}>{ind.desc}</p></div>)}
          </div>
        </section>

        <section style={{ "margin-bottom": "3rem" }}>
          <h2 style={{ "font-size": "1.5rem", "font-weight": "700", "margin-bottom": "1rem" }}>Why Choose CMI for Ahmedabad Supply?</h2>
          <ul style={{ "line-height": "2", "padding-left": "1.5rem" }}>
            <li><strong>Same-Day Delivery:</strong> Vadodara to Ahmedabad in 4-6 hours — fastest supply in Gujarat</li>
            <li><strong>Huge Ready Stock:</strong> 2000+ tonnes at GIDC Makarpura warehouse — no waiting</li>
            <li><strong>Direct Mill Pricing:</strong> We buy from Jindal, SAIL, Ratnamani — no broker margins</li>
            <li><strong>Complete Documentation:</strong> MTC 3.1/3.2, IBR, PMI, NABL reports — all provided</li>
            <li><strong>All Grades Available:</strong> SS, CS, alloy, duplex, exotic alloys — single-source supply</li>
            <li><strong>Cut-to-Size Service:</strong> Plates, sheets, pipes cut as per your drawing</li>
          </ul>
        </section>

        <section style={{ "margin-bottom": "3rem" }}>
          <h2 style={{ "font-size": "1.5rem", "font-weight": "700", "margin-bottom": "1rem" }}>Frequently Asked Questions</h2>
          {FAQS.map(faq => <div style={{ "margin-bottom": "1.5rem", background: "#f9fafb", padding: "1.2rem", "border-radius": "8px" }}><h3 style={{ margin: "0 0 0.5rem", "font-size": "1rem", color: "#111827" }}>{faq.q}</h3><p style={{ margin: 0, "font-size": "0.92rem", color: "#4b5563", "line-height": "1.7" }}>{faq.a}</p></div>)}
        </section>

        <section style={{ "margin-bottom": "3rem" }}>
          <h2 style={{ "font-size": "1.5rem", "font-weight": "700", "margin-bottom": "1rem" }}>Other Locations We Serve</h2>
          <div style={{ display: "flex", "flex-wrap": "wrap", gap: "0.5rem" }}>
            {["Vadodara","Surat","Mumbai","Pune","Rajkot","Bharuch","Ankleshwar","Chennai","Hyderabad","Delhi","Kolkata"].map(c => <a href={`/${c === "Vadodara" ? "stainless-steel-supplier-vadodara" : c === "Mumbai" ? "ss-pipe-supplier-mumbai" : c === "Surat" ? "ss-pipe-supplier-surat" : c === "Pune" ? "ss-pipe-supplier-pune" : c === "Rajkot" ? "ss-pipe-supplier-rajkot" : c === "Bharuch" ? "steel-supplier-bharuch" : c === "Ankleshwar" ? "steel-supplier-ankleshwar-gidc" : `steel-pipe-supplier-${c.toLowerCase()}`}`} style={{ background: "#fff", border: "1px solid #e5e7eb", padding: "0.4rem 0.8rem", "border-radius": "6px", "font-size": "0.85rem", "text-decoration": "none", color: "#374151" }}>{c}</a>)}
          </div>
        </section>

        <div style={{ background: "linear-gradient(135deg, #E8821A 0%, #d97706 100%)", "border-radius": "12px", padding: "2.5rem", "text-align": "center", color: "#fff" }}>
          <h2 style={{ margin: "0 0 0.5rem", "font-size": "1.5rem" }}>Need SS Pipes in Ahmedabad? Call Now!</h2>
          <p style={{ margin: "0 0 1.5rem", opacity: 0.9 }}>Same-day dispatch from Vadodara. Best prices guaranteed.</p>
          <div style={{ display: "flex", gap: "1rem", "justify-content": "center", "flex-wrap": "wrap" }}>
            <a href="tel:+919998280619" style={{ background: "#fff", color: "#E8821A", padding: "0.8rem 1.5rem", "border-radius": "8px", "font-weight": "700", "text-decoration": "none" }}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619" style={{ background: "#25D366", color: "#fff", padding: "0.8rem 1.5rem", "border-radius": "8px", "font-weight": "700", "text-decoration": "none" }}>💬 WhatsApp Us</a>
          </div>
        </div>
      
        <RelatedPages currentPath="/ss-pipe-supplier-ahmedabad" />
      </main>

      <footer style={{ background: "#111827", color: "#9ca3af", padding: "2rem 1.5rem", "text-align": "center", "font-size": "0.85rem" }}>
        <p>© 2026 Creative Metal Industries, Vadodara. All rights reserved.</p>
        <p><a href="/privacy-policy" style={{ color: "#9ca3af" }}>Privacy Policy</a> · <a href="/terms" style={{ color: "#9ca3af" }}>Terms</a> · <a href="/sitemap" style={{ color: "#9ca3af" }}>Sitemap</a></p>
      </footer>
    </>
  );
}
