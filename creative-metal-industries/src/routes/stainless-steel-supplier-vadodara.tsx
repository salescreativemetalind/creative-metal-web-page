/**
 * /stainless-steel-supplier-vadodara
 * SEO landing page — "stainless steel supplier Vadodara Gujarat", "stainless steel pipe manufacturer Vadodara"
 */

import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";
import { LocationContent } from "../components/LocationContent";

const GRADES = [
  {
    grade: "SS 304",
    forms: "Pipes, Plates, Sheets, Fittings, Flanges, Bars",
    spec: "ASTM A312 / A240 / A182 / A403 / A276",
    sizes: "6NB–600NB pipes · 1–100mm plates · Full range fittings",
  },
  {
    grade: "SS 316L",
    forms: "Pipes, Plates, Sheets, Fittings, Flanges, Bars",
    spec: "ASTM A312 TP316L / A240 316L / A182 F316L",
    sizes: "6NB–600NB pipes · 1–100mm plates · Full range fittings",
  },
  {
    grade: "SS 317L",
    forms: "Pipes, Plates, Fittings, Flanges, Bars",
    spec: "ASTM A312 TP317L / A240 317L / A182 F317L",
    sizes: "6NB–300NB pipes · 2–80mm plates",
  },
  {
    grade: "SS 321",
    forms: "Pipes, Plates, Sheets, Fittings, Flanges, Bars",
    spec: "ASTM A312 TP321 / A240 321 / A182 F321",
    sizes: "6NB–400NB pipes · 1.5–80mm plates",
  },
  {
    grade: "SS 310S",
    forms: "Pipes, Plates, Sheets, Fittings, Bars",
    spec: "ASTM A312 TP310S / A240 310S / A276",
    sizes: "6NB–300NB pipes · 2–60mm plates",
  },
  {
    grade: "SS 347",
    forms: "Pipes, Plates, Fittings, Flanges, Bars",
    spec: "ASTM A312 TP347 / A240 347 / A182 F347",
    sizes: "6NB–300NB pipes · 2–60mm plates",
  },
  {
    grade: "SS 904L",
    forms: "Pipes, Plates, Fittings, Flanges",
    spec: "ASTM A312 N08904 / A240 N08904",
    sizes: "6NB–200NB pipes · 3–50mm plates",
  },
  {
    grade: "Duplex 2205",
    forms: "Pipes, Plates, Fittings, Flanges, Bars",
    spec: "ASTM A790 S31803 / A240 S31803 / A182 F51",
    sizes: "6NB–300NB pipes · 3–80mm plates",
  },
  {
    grade: "Super Duplex 2507",
    forms: "Pipes, Plates, Fittings, Flanges",
    spec: "ASTM A790 S32750 / A240 S32750 / A182 F53",
    sizes: "6NB–200NB pipes · 3–60mm plates",
  },
];

const PRODUCTS = [
  { cat: "SS Pipes",            desc: "Seamless & welded, SCH 5S–XXS, 6NB–600NB, all grades",   std: "ASTM A312, A790" },
  { cat: "SS Plates & Sheets",  desc: "HR/CR/2B finish, 1mm–150mm thick, 1000–3000mm wide",      std: "ASTM A240, EN 10028" },
  { cat: "SS Fittings",         desc: "Elbows, Tees, Reducers, End Caps — BW & SW",              std: "ASTM A403, MSS SP-43" },
  { cat: "SS Flanges",          desc: "WNRF, SORF, BLRF, SWRF, Threaded — class 150–2500",       std: "ASME B16.5 / B16.47" },
  { cat: "SS Bars & Rounds",    desc: "Round, Hex, Flat, Square — all grades 3mm–300mm dia",     std: "ASTM A276, A484" },
];

const WHY = [
  { icon: "🏭", head: "Manufacturer & Mill Stockist",   body: "Authorised stockist for Ratnamani, Sandvik, Venus Pipes, Salzgitter, Tubacex. Direct mill pricing with full traceability." },
  { icon: "📦", head: "Largest SS Stock in Vadodara",   body: "1,000+ SS pipe sizes, 500+ plate sizes in ready stock at 1,092 sq.mtr GIDC Makarpura yard. Same-day dispatch available." },
  { icon: "📄", head: "Full Certification",              body: "MTC EN 10204 3.1/3.2, IBR Form III-C, NACE MR-01-75, HIC tested material available for every heat/lot." },
  { icon: "✂️", head: "Processing & Fabrication",       body: "Cut-to-size, pipe beveling, threading, polishing, pickling, passivation. Processed to your exact drawing requirements." },
  { icon: "🔬", head: "TPI & Third-Party Inspection",   body: "BVIS, DNV GL, TUV SUD, SGS, LRIS inspection at our Vadodara facility. Stage-wise inspection for critical orders." },
  { icon: "🚚", head: "Same-Day Dispatch from Vadodara", body: "Orders before 2 PM dispatched same day. Serving Ankleshwar, Bharuch, Dahej, Hazira, Surat, Ahmedabad within 4 hours." },
];

const FAQS = [
  {
    q: "Who is the top stainless steel supplier in Vadodara, Gujarat?",
    a: "Creative Metal Industries is the leading stainless steel supplier in Vadodara, Gujarat, established in 2012. We stock SS 304, 316L, 317L, 321, 310S, 347, 904L, Duplex 2205 and Super Duplex 2507 in pipes, plates, sheets, fittings, flanges and bars. Located at GIDC Makarpura, Vadodara. Call +91 99982 80619.",
  },
  {
    q: "What stainless steel grades do you supply in Vadodara?",
    a: "We supply all major austenitic grades (SS 304, 316L, 317L, 321, 310S, 347, 904L) and duplex grades (2205, Super Duplex 2507) across all product forms. All materials come with ASTM certified MTC documentation and are available with IBR Form III-C and NACE certification as required.",
  },
  {
    q: "Are you a stainless steel pipe manufacturer or only a stockist in Vadodara?",
    a: "Creative Metal Industries operates as both a manufacturer's authorised stockist and a service centre. We are authorised by major SS pipe mills and maintain large ready-stock at GIDC Makarpura. We also offer pipe processing services (cutting, beveling, threading) making us a complete SS pipe solution provider in Vadodara.",
  },
  {
    q: "Do you supply IBR certified stainless steel pipes in Gujarat?",
    a: "Yes. We are an authorised IBR supplier in Gujarat. All IBR-required SS pipe materials are supplied with IBR Form III-C certification. This is available for SS 304, 316L, 321 seamless pipes per ASTM A312 for boiler, pressure vessel and high-temperature service applications.",
  },
  {
    q: "What is the delivery time for stainless steel supply in Vadodara?",
    a: "For standard sizes in ready stock, same-day dispatch is available for orders placed before 2 PM. For non-stock grades or large project quantities, delivery is 3–7 working days. We serve all of Gujarat — Vadodara, Ankleshwar, Bharuch, Dahej, Surat, Ahmedabad, Rajkot and more.",
  },
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type":"LocalBusiness","@id":"https://www.creativemetalind.com/stainless-steel-supplier-vadodara#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name": "Creative Metal Industries",
      "description": "Stainless steel supplier and pipe manufacturer stockist in Vadodara, Gujarat. SS 304, 316L, 321, Duplex 2205 pipes, plates, fittings, flanges — IBR, NACE, MTC certified.",
      "url": "https://www.creativemetalind.com",
      "telephone": "+919998280619",
      "foundingDate": "2012",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "386/B GIDC Estate, Makarpura",
        "addressLocality": "Vadodara",
        "addressRegion": "Gujarat",
        "postalCode": "390010",
        "addressCountry": "IN",
      },
      "areaServed": ["Vadodara", "Gujarat", "Ankleshwar", "Bharuch", "Dahej", "Surat", "Ahmedabad"],
      "sameAs": ["https://www.creativemetalind.com"],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creativemetalind.com" },
        { "@type": "ListItem", "position": 2, "name": "Stainless Steel Supplier Vadodara", "item": "https://www.creativemetalind.com/stainless-steel-supplier-vadodara" },
      ],
    },
  ],
});

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQS.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
});

export default function StainlessSteelSupplierVadodara() {
  return (
    <>
      <Title>Stainless Steel Supplier Vadodara | SS Pipes Gujarat | CMI</Title>
      <Meta property="og:type" content="website" />
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Trusted stainless steel supplier in Vadodara, Gujarat serving all India — Creative Metal Industries. SS 304, 316L, 321, Duplex 2205 pipes, plates, fittings, flanges." />
      <Link rel="canonical" href="https://www.creativemetalind.com/stainless-steel-supplier-vadodara" />
      <Meta property="og:title" content="Stainless Steel Supplier Vadodara | SS Pipe Manufacturer Gujarat | CMI" />
      <Meta property="og:description" content="Top stainless steel supplier in Vadodara Gujarat. SS 304, 316L, 321, Duplex 2205 pipes, plates, fittings, flanges. IBR, NACE, MTC certified. Call +91 99982 80619." />
      <Meta property="og:url" content="https://www.creativemetalind.com/stainless-steel-supplier-vadodara" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Stainless Steel Supplier Vadodara | SS Pipe Manufacturer Gujarat | Creative Metal Industries" />
      <Meta name="twitter:description" content="Top stainless steel supplier in Vadodara Gujarat — Creative Metal Industries. SS 304, 316L, 321, Duplex 2205 pipes, plates, fittings, flanges. IBR, NACE, MTC certified. GIDC Makarpura Vadodara. Call +91 99982 80619." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      {/* ── Nav ── */}
      <nav style={{ background: "#fff", "border-bottom": "1px solid #e5e7eb", padding: "1rem 1.5rem", display: "flex", "align-items": "center", gap: "1rem" }}>
        <a href="/" style={{ display: "flex", "align-items": "center" }}>
          <img src="/logo_cmi.png" alt="Creative Metal Industries" width="140" height="71" />
        </a>
        <div style={{ flex: 1 }} />
        <a href="tel:+919998280619" class="btn btn-outline" style={{ "font-size": "0.85rem", padding: "0.45rem 1rem" }}>📞 +91 99982 80619</a>
        <a href="/#contact" class="btn btn-primary" style={{ "font-size": "0.85rem", padding: "0.45rem 1rem" }}>Get a Quote</a>
      </nav>

      {/* ── Breadcrumb ── */}
      <div style={{ background: "#f9fafb", "border-bottom": "1px solid #e5e7eb", padding: "0.6rem 1.5rem", "font-size": "0.82rem", color: "#6b7280" }}>
        <a href="/" style={{ color: "#E8821A", "text-decoration": "none" }}>Home</a>
        <span style={{ margin: "0 0.5rem" }}>›</span>
        <span>Stainless Steel Supplier Vadodara</span>
      </div>

      <main>

        {/* ══ HERO ══ */}
        <section style={{ background: "linear-gradient(135deg,#fff8f0 0%,#fff 60%)", padding: "4rem 1.5rem 3rem", "border-bottom": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "900px", margin: "0 auto" }}>
            <span style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff", "font-size": "0.78rem", "font-weight": "700", padding: "0.3rem 0.85rem", "border-radius": "99px", "letter-spacing": "0.06em", "text-transform": "uppercase", "margin-bottom": "1rem", display: "inline-block" }}>
              🏭 Vadodara · Gujarat · Since 2012
            </span>
            <h1 style={{ "font-size": "clamp(1.8rem,5vw,3rem)", "font-weight": "800", "line-height": "1.2", "margin-bottom": "1.25rem", color: "#111827" }}>
              Stainless Steel Supplier &amp; Manufacturer in{" "}
              <span style={{ color: "#E8821A" }}>Vadodara, Gujarat</span>
            </h1>
            <p style={{ "font-size": "1.1rem", color: "#374151", "max-width": "720px", "line-height": "1.75", "margin-bottom": "2rem" }}>
              Creative Metal Industries is Vadodara's most trusted stainless steel supplier and mill-authorised stockist,
              serving customers as a reliable <strong>stainless steel supplier</strong> across Gujarat and pan-India.
              We supply <strong>SS 304, 316L, 317L, 321, 310S, 347, 904L, Duplex 2205 and Super Duplex 2507</strong> in
              pipes, plates, sheets, fittings, flanges and bars — all with full MTC, IBR Form III-C and NACE documentation.
              Ready stock at our <strong>GIDC Makarpura, Vadodara</strong> yard.
            </p>
            <div style={{ display: "flex", gap: "1rem", "flex-wrap": "wrap", "margin-bottom": "2.5rem" }}>
              <a href="/#contact" class="btn btn-primary" style={{ "font-size": "1rem", padding: "0.75rem 1.75rem" }}>Get Instant Quote →</a>
              <a href="tel:+919998280619" class="btn btn-outline" style={{ "font-size": "1rem", padding: "0.75rem 1.75rem" }}>📞 +91 99982 80619</a>
            </div>
            <div style={{ display: "flex", gap: "2rem", "flex-wrap": "wrap" }}>
              {[
                { num: "9 Grades",  label: "SS Grades in Stock" },
                { num: "1000+",    label: "SS Pipe Sizes Ready" },
                { num: "15+ Yrs",  label: "Serving Vadodara" },
                { num: "IBR ✓",    label: "Form III-C Certified" },
              ].map(s => (
                <div>
                  <div style={{ "font-size": "1.6rem", "font-weight": "800", color: "#E8821A" }}>{s.num}</div>
                  <div style={{ "font-size": "0.82rem", color: "#6b7280", "font-weight": "600" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ GRADES ══ */}
        <section style={{ padding: "4rem 1.5rem", background: "#fff" }}>
          <div style={{ "max-width": "1000px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.4rem,3vw,2rem)", "font-weight": "800", "margin-bottom": "0.5rem", color: "#111827" }}>
              Stainless Steel Grades — All Forms Available in Vadodara
            </h2>
            <p style={{ color: "#6b7280", "margin-bottom": "2rem", "font-size": "0.95rem" }}>
              All grades supplied as pipes, plates, sheets, fittings, flanges and bars with full ASTM mill certification.
            </p>
            <div style={{ overflow: "auto", border: "1px solid #e5e7eb", "border-radius": "12px" }}>
              <table style={{ width: "100%", "border-collapse": "collapse", "font-size": "0.88rem", "min-width": "600px" }}>
                <thead>
                  <tr style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff" }}>
                    <th style={{ padding: "0.75rem 1rem", "text-align": "left", "font-weight": "700" }}>Grade</th>
                    <th style={{ padding: "0.75rem 1rem", "text-align": "left", "font-weight": "700" }}>Product Forms</th>
                    <th style={{ padding: "0.75rem 1rem", "text-align": "left", "font-weight": "700" }}>Standard</th>
                    <th style={{ padding: "0.75rem 1rem", "text-align": "left", "font-weight": "700" }}>Size Range</th>
                  </tr>
                </thead>
                <tbody>
                  {GRADES.map((g, i) => (
                    <tr style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                      <td style={{ padding: "0.65rem 1rem", "font-weight": "700", color: "#111827", "white-space": "nowrap" }}>{g.grade}</td>
                      <td style={{ padding: "0.65rem 1rem", color: "#374151", "font-size": "0.82rem" }}>{g.forms}</td>
                      <td style={{ padding: "0.65rem 1rem", color: "#374151", "font-size": "0.8rem" }}>{g.spec}</td>
                      <td style={{ padding: "0.65rem 1rem", color: "#374151", "font-size": "0.8rem" }}>{g.sizes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ "font-size": "0.8rem", color: "#9ca3af", "margin-top": "0.75rem" }}>
              All materials supplied with MTC (EN 10204 3.1 / 3.2) · IBR Form III-C available · NACE MR-01-75 on request
            </p>
          </div>
        </section>

        {/* ══ PRODUCT CATEGORIES ══ */}
        <section style={{ padding: "4rem 1.5rem", background: "#f9fafb", "border-top": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "960px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.4rem,3vw,2rem)", "font-weight": "800", "margin-bottom": "0.5rem", color: "#111827" }}>
              Stainless Steel Product Categories
            </h2>
            <p style={{ color: "#6b7280", "margin-bottom": "2rem", "font-size": "0.95rem" }}>
              Complete range of SS products — all grades, all forms, all specifications.
            </p>
            <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(280px,1fr))", gap: "1.1rem" }}>
              {PRODUCTS.map(p => (
                <div style={{ background: "#fff", border: "1px solid #e5e7eb", "border-radius": "10px", padding: "1.4rem", "box-shadow": "0 1px 4px rgba(0,0,0,0.04)" }}>
                  <div style={{ "font-weight": "800", color: "#111827", "margin-bottom": "0.4rem", "font-size": "0.95rem" }}>{p.cat}</div>
                  <div style={{ "font-size": "0.85rem", color: "#374151", "margin-bottom": "0.5rem", "line-height": "1.55" }}>{p.desc}</div>
                  <div style={{ "font-size": "0.78rem", color: "#E8821A", "font-weight": "700" }}>Std: {p.std}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ WHY CMI ══ */}
        <section style={{ padding: "4rem 1.5rem", background: "#fff", "border-top": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "960px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.4rem,3vw,2rem)", "font-weight": "800", "margin-bottom": "0.5rem", color: "#111827", "text-align": "center" }}>
              Why Choose CMI as Your Stainless Steel Supplier in Vadodara
            </h2>
            <p style={{ color: "#6b7280", "margin-bottom": "2.5rem", "text-align": "center", "font-size": "0.95rem" }}>
              Trusted by 500+ EPC contractors, fabricators and plant maintenance teams since 2012
            </p>
            <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(280px,1fr))", gap: "1.25rem" }}>
              {WHY.map(w => (
                <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "12px", padding: "1.5rem", "box-shadow": "0 1px 4px rgba(0,0,0,0.04)" }}>
                  <div style={{ "font-size": "1.8rem", "margin-bottom": "0.65rem" }}>{w.icon}</div>
                  <h3 style={{ "font-size": "0.95rem", "font-weight": "700", "margin-bottom": "0.4rem", color: "#111827" }}>{w.head}</h3>
                  <p style={{ "font-size": "0.875rem", color: "#6b7280", "line-height": "1.6", margin: 0 }}>{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FAQ ══ */}
        <section style={{ padding: "4rem 1.5rem", background: "#f9fafb", "border-top": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "760px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.4rem,3vw,2rem)", "font-weight": "800", "margin-bottom": "2rem", color: "#111827" }}>
              Frequently Asked Questions — Stainless Steel Supplier Vadodara
            </h2>
            <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
              {FAQS.map(f => (
                <details style={{ background: "#fff", border: "1px solid #e5e7eb", "border-radius": "10px", padding: "1.1rem 1.4rem", "box-shadow": "0 1px 4px rgba(0,0,0,0.04)" }}>
                  <summary style={{ "font-weight": "700", "font-size": "0.95rem", color: "#111827", cursor: "pointer", "list-style": "none" }}>
                    {f.q}
                  </summary>
                  <p style={{ "font-size": "0.9rem", color: "#374151", "line-height": "1.7", "margin-top": "0.75rem", "margin-bottom": 0 }}>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section style={{ padding: "4rem 1.5rem", background: "linear-gradient(135deg,#E8821A,#d85c2a)", "text-align": "center" }}>
          <div style={{ "max-width": "640px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.4rem,3vw,2rem)", "font-weight": "800", color: "#fff", "margin-bottom": "0.75rem" }}>
              Need Stainless Steel in Vadodara?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.9)", "margin-bottom": "2rem", "font-size": "1rem", "line-height": "1.65" }}>
              Call or WhatsApp us for a price and availability check. Same-day quotes, same-day dispatch from GIDC Makarpura, Vadodara.
            </p>
            <div style={{ display: "flex", gap: "1rem", "justify-content": "center", "flex-wrap": "wrap" }}>
              <a href="tel:+919998280619" style={{ background: "#fff", color: "#E8821A", "font-weight": "800", "font-size": "1rem", padding: "0.85rem 2rem", "border-radius": "8px", "text-decoration": "none", "white-space": "nowrap" }}>
                📞 +91 99982 80619
              </a>
              <a href="https://wa.me/919998280619?text=Hi%2C+I+need+stainless+steel+supply+in+Vadodara" target="_blank" rel="noopener noreferrer" style={{ background: "#25D366", color: "#fff", "font-weight": "800", "font-size": "1rem", padding: "0.85rem 2rem", "border-radius": "8px", "text-decoration": "none", "white-space": "nowrap" }}>
                💬 WhatsApp Now
              </a>
              <a href="/#contact" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "2px solid rgba(255,255,255,0.5)", "font-weight": "700", "font-size": "1rem", padding: "0.85rem 2rem", "border-radius": "8px", "text-decoration": "none", "white-space": "nowrap" }}>
                Send Enquiry →
              </a>
            </div>
            <p style={{ color: "rgba(255,255,255,0.75)", "font-size": "0.82rem", "margin-top": "1.5rem" }}>
              386/B GIDC Estate, Makarpura, Vadodara 390010 · Open Mon–Sat 9 AM–7 PM
            </p>
          </div>
        </section>

        {/* ── Internal Links — Topic Cluster ── */}
        <section style={{ padding: "3rem 1.5rem", background: "#fff", "border-top": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "900px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "1.2rem", "font-weight": "700", color: "#111827", "margin-bottom": "1.25rem" }}>Explore Our Stainless Steel Product Range</h2>
            <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(220px,1fr))", gap: "0.75rem" }}>
              {[
                { href: "/ss-pipe-supplier-vadodara", label: "SS Pipe Supplier Vadodara" },
                { href: "/ss-seamless-pipe-supplier-india", label: "SS Seamless Pipe Supplier India" },
                { href: "/ss-buttweld-fittings-supplier-india", label: "SS Buttweld Fittings India" },
                { href: "/ss-flanges-supplier-vadodara", label: "SS Flanges Supplier Vadodara" },
                { href: "/ss-304-316l-pipe-supplier-india", label: "SS 304 316L Pipe India" },
                { href: "/blog/ss-304-stainless-steel-guide", label: "SS 304 Grade Guide" },
                { href: "/blog/ss-316l-stainless-steel-guide", label: "SS 316L Grade Guide" },
                { href: "/blog/ss-sheet-plate-guide", label: "SS Sheet & Plate Guide" },
                { href: "/blog/ss-pipe-supplier-vadodara-guide", label: "How to Choose SS Pipe Supplier" },
                { href: "/blog/erw-vs-seamless-pipe", label: "ERW vs Seamless Pipe" },
                { href: "/blog/pipe-schedule-chart", label: "Pipe Schedule Chart" },
                { href: "/blog/ss-long-products-fittings-guide", label: "SS Angle, Rod & Fittings" },
              ].map(l => (
                <a href={l.href} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "8px", padding: "0.75rem 1rem", "font-size": "0.85rem", "font-weight": "600", color: "#E8821A", "text-decoration": "none" }}>{l.label} →</a>
              ))}
            </div>
          </div>
        </section>

      
        <LocationContent slug="vadodara" />

      
        <RelatedPages currentPath="/stainless-steel-supplier-vadodara" />
      </main>

      {/* ── Footer ── */}
      <footer style={{ background: "#111827", color: "#9ca3af", padding: "2rem 1.5rem", "text-align": "center", "font-size": "0.82rem" }}>
        <p style={{ "margin-bottom": "0.5rem" }}>
          <strong style={{ color: "#fff" }}>Creative Metal Industries</strong> — Stainless Steel Supplier Vadodara, Gujarat
        </p>
        <p style={{ margin: 0 }}>
          386/B GIDC Estate, Makarpura, Vadodara 390010 &nbsp;|&nbsp;{" "}
          <a href="tel:+919998280619" style={{ color: "#E8821A" }}>+91 99982 80619</a> &nbsp;|&nbsp;{" "}
          <a href="https://www.creativemetalind.com" style={{ color: "#E8821A" }}>creativemetalind.com</a>
        </p>
      </footer>
    </>
  );
}
