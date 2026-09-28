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
    q: "Who is the best SS pipe supplier in India?",
    a: "Creative Metal Industries is one of India's leading SS pipe suppliers, established in 2012. We supply stainless steel pipes in SS 304, 316L, 321, 310S, 347, 904L, Duplex 2205 and Super Duplex 2507 — seamless and welded, 6NB to 600NB, all schedules. Ready stock at GIDC Makarpura, Vadodara with MTC, IBR and NACE certification. We serve industries across Vadodara, Delhi, Mumbai, Pune, Chennai, Bangalore and all major Indian cities. Call +91 99982 80619.",
  },
  {
    q: "What types of stainless steel pipes do you supply?",
    a: "We supply SS seamless pipes to ASTM A312, SS welded pipes (ERW/EFW), SS instrumentation tubes to ASTM A213/A269, and SS boiler tubes. We also supply ss square pipe, ss rectangular pipe, and ss round pipe for structural and architectural applications. Available in grades TP304, 304L, 316, 316L, 321, 310S, 347, 904L and Duplex 2205. Sizes from 6NB to 600NB in schedules SCH 5S to XXS. All pipes come with Mill Test Certificates (EN 10204 3.1/3.2) and IBR Form III-C where required.",
  },
  {
    q: "What are the most common SS pipe sizes?",
    a: "The most commonly used stainless steel pipe sizes are 2 inch ss pipe (50NB), 3 inch ss pipe (80NB), and 4 inch ss pipe (100NB) in schedule 40S for general industrial piping. We also stock 1 inch ss pipe (25NB), 1.5 inch (40NB), 6 inch ss pipe (150NB), and 8 inch (200NB) in ready inventory. For smaller instrument connections, ss pipe 1/2 inch (15NB) and 3/4 inch (20NB) are readily available. All sizes are supplied with complete ss pipe dimensions and weight specifications.",
  },
  {
    q: "What is the price of SS pipe per meter or per kg?",
    a: "SS pipe prices are quoted either per meter or per kg depending on your preference. Typical pricing ranges from ₹200-₹800 per kg for standard grades like SS 304 and 316L, depending on size, wall thickness (schedule), and quantity ordered. For ss pipe price per meter calculations, we multiply the weight per meter (from our ss pipe weight chart) by the per-kg rate. Factors affecting price include grade (304/316L/321), type (seamless vs welded), market nickel prices, and order quantity. For accurate ss pipe price per kg or per meter quote, share your requirement — grade, size, schedule, quantity. We provide transparent quotes within 2 hours. Call +91 99982 80619.",
  },
  {
    q: "Do you supply SS pipe in Delhi, Pune and Chennai?",
    a: "Yes. As a pan-India SS pipe supplier, we deliver stainless steel pipes from our Vadodara stockyard to Delhi, Pune, Chennai and all major Indian cities. Standard delivery time is 2-4 working days. For urgent requirements, we can arrange express delivery. We also serve nearby industrial hubs like Ankleshwar, Bharuch, Dahej, Ahmedabad, Surat and Mumbai with same-day or next-day dispatch.",
  },
  {
    q: "Who is the top stainless steel supplier in Vadodara, Gujarat?",
    a: "Creative Metal Industries is the leading stainless steel supplier in Vadodara, Gujarat, established in 2012. We stock SS 304, 316L, 317L, 321, 310S, 347, 904L, Duplex 2205 and Super Duplex 2507 in pipes, plates, sheets, fittings, flanges and bars. Located at GIDC Makarpura, Vadodara. Call +91 99982 80619.",
  },
  {
    q: "What stainless steel grades do you supply in Vadodara?",
    a: "We supply all major austenitic grades (SS 304, 316L, 317L, 321, 310S, 347, 904L) and duplex grades (2205, Super Duplex 2507) across all product forms. All materials come with ASTM certified MTC documentation and are available with IBR Form III-C and NACE certification as required.",
  },
  {
    q: "Do you have ss pipe weight chart and schedule chart available?",
    a: "Yes. We provide a comprehensive ss pipe weight chart covering all common sizes from 1/2 inch to 24 inch in various schedules (5S to XXS). Our ss pipe schedule chart shows weight per meter, OD, wall thickness and ss pipe dimensions for each size-schedule combination. The chart is available in our office or can be shared via email/WhatsApp. For quick reference, our team can provide weight calculations for your specific requirements within minutes. Request the downloadable PDF weight chart by calling +91 99982 80619.",
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
    q: "What surface finishes are available for SS pipes?",
    a: "We supply stainless steel pipes in multiple surface finishes: Mill Finish (as-manufactured), Pickled & Passivated (enhanced corrosion resistance), Bright Annealed or BA finish (smooth shiny surface for food/pharma), 2B finish ss pipe (cold-rolled smooth — most common industrial finish), No.4 Brushed/Satin (architectural applications), Mirror Finish or No.8 (highly polished for pharmaceutical/decorative use), and Electropolished (ultra-smooth for cleanroom applications). We also supply ss polished pipe and ss decorative pipe for architectural projects.",
  },
  {
    q: "What is the delivery time for stainless steel supply in Vadodara?",
    a: "For standard sizes in ready stock, same-day dispatch is available for orders placed before 2 PM. For non-stock grades or large project quantities, delivery is 3–7 working days. We serve all of Gujarat — Vadodara, Ankleshwar, Bharuch, Dahej, Surat, Ahmedabad, Rajkot and more. Pan-India delivery typically takes 2-4 working days from order confirmation.",
  },
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creativemetalind.com" },
        { "@type": "ListItem", "position": 2, "name": "SS Pipe Supplier Vadodara", "item": "https://www.creativemetalind.com/stainless-steel-supplier-vadodara" },
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
      <Title>SS Pipe Supplier in India | Stainless Steel Pipes Vadodara | CMI</Title>
      <Meta property="og:type" content="website" />
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Leading SS pipe supplier in India — Creative Metal Industries supplies stainless steel pipes, seamless & welded, SS 304, 316L, 321, Duplex 2205. Ready stock Vadodara. MTC, IBR certified." />
      <Link rel="canonical" href="https://www.creativemetalind.com/stainless-steel-supplier-vadodara" />
      <Meta property="og:title" content="SS Pipe Supplier India | Stainless Steel Pipes Vadodara | CMI" />
      <Meta property="og:description" content="Leading SS pipe supplier in India. Stainless steel pipes — SS 304, 316L, 321, Duplex 2205, seamless & welded. Ready stock Vadodara. IBR, MTC certified. Pan-India delivery." />
      <Meta property="og:url" content="https://www.creativemetalind.com/stainless-steel-supplier-vadodara" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS Pipe Supplier India | Stainless Steel Pipes Vadodara | Creative Metal Industries" />
      <Meta name="twitter:description" content="Leading SS pipe supplier in India — Creative Metal Industries. Stainless steel pipes SS 304, 316L, 321, Duplex 2205. Seamless & welded. IBR, MTC certified. Vadodara stock. Call +91 99982 80619." />
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
        <span>SS Pipe Supplier Vadodara</span>
      </div>

      <main>

        {/* ══ HERO ══ */}
        <section style={{ background: "linear-gradient(135deg,#fff8f0 0%,#fff 60%)", padding: "4rem 1.5rem 3rem", "border-bottom": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "900px", margin: "0 auto" }}>
            <span style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff", "font-size": "0.78rem", "font-weight": "700", padding: "0.3rem 0.85rem", "border-radius": "99px", "letter-spacing": "0.06em", "text-transform": "uppercase", "margin-bottom": "1rem", display: "inline-block" }}>
              🏭 Vadodara · Gujarat · Since 2012
            </span>
            <h1 style={{ "font-size": "clamp(1.8rem,5vw,3rem)", "font-weight": "800", "line-height": "1.2", "margin-bottom": "1.25rem", color: "#111827" }}>
              SS Pipe Supplier in India — Stainless Steel Pipes{" "}
              <span style={{ color: "#E8821A" }}>Vadodara, Gujarat</span>
            </h1>
            <p style={{ "font-size": "1.1rem", color: "#374151", "max-width": "720px", "line-height": "1.75", "margin-bottom": "2rem" }}>
              Creative Metal Industries is India's trusted <strong>SS pipe supplier</strong> and <strong>stainless steel pipe</strong> stockist,
              serving customers as a reliable <strong>stainless steel supplier</strong> across Vadodara, Gujarat and pan-India.
              We supply <strong>SS 304, 316L, 317L, 321, 310S, 347, 904L, Duplex 2205 and Super Duplex 2507</strong> stainless steel pipes, seamless and welded,
              along with plates, sheets, fittings, flanges and bars — all with full MTC, IBR Form III-C and NACE documentation.
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

        {/* ══ SS PIPE SUPPLIER SECTION ══ */}
        <section style={{ padding: "4rem 1.5rem", background: "#fff", "border-top": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "960px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.4rem,3vw,2rem)", "font-weight": "800", "margin-bottom": "1rem", color: "#111827" }}>
              SS Pipe Supplier in India — All Grades, All Sizes
            </h2>
            <p style={{ "font-size": "1.05rem", color: "#374151", "line-height": "1.8", "margin-bottom": "2rem" }}>
              Creative Metal Industries is India's leading <strong>SS pipe supplier</strong>, providing comprehensive stainless steel pipe solutions
              for industries across India. As a trusted <strong>stainless steel pipe supplier</strong> and <strong>SS pipe stockist</strong>, we maintain
              ready inventory of seamless and welded stainless steel pipes in all major grades — SS 304, SS 304L, SS 316, SS 316L, SS 321, SS 310S, SS 347,
              SS 904L, Duplex 2205 and Super Duplex 2507.
            </p>

            {/* SS Pipe Types */}
            <h3 style={{ "font-size": "1.1rem", "font-weight": "700", "margin-bottom": "1rem", color: "#111827" }}>
              Types of Stainless Steel Pipes We Supply
            </h3>
            <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(260px,1fr))", gap: "1rem", "margin-bottom": "2rem" }}>
              {[
                { type: "SS Seamless Pipes", desc: "ASTM A312 seamless stainless steel pipes — 6NB to 600NB, SCH 5S to XXS" },
                { type: "SS Welded Pipes (ERW)", desc: "Welded stainless steel pipes for general applications — cost-effective for larger diameters" },
                { type: "SS Instrumentation Tubes", desc: "ASTM A213 / A269 tubes for instrumentation, heat exchangers and condensers" },
                { type: "SS Boiler Tubes", desc: "ASTM A213 boiler and superheater tubes with IBR Form III-C certification" },
              ].map(item => (
                <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "10px", padding: "1.25rem" }}>
                  <h4 style={{ "font-size": "0.92rem", "font-weight": "700", color: "#111827", "margin-bottom": "0.5rem" }}>{item.type}</h4>
                  <p style={{ "font-size": "0.85rem", color: "#6b7280", "line-height": "1.6", margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* SS Pipe Grades & Applications */}
            <h3 style={{ "font-size": "1.1rem", "font-weight": "700", "margin-bottom": "1rem", color: "#111827" }}>
              SS Pipe Grades & Applications
            </h3>
            <div style={{ overflow: "auto", border: "1px solid #e5e7eb", "border-radius": "10px", "margin-bottom": "2rem" }}>
              <table style={{ width: "100%", "border-collapse": "collapse", "font-size": "0.875rem", "min-width": "600px" }}>
                <thead>
                  <tr style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff" }}>
                    <th style={{ padding: "0.7rem 1rem", "text-align": "left" }}>Grade</th>
                    <th style={{ padding: "0.7rem 1rem", "text-align": "left" }}>Standard</th>
                    <th style={{ padding: "0.7rem 1rem", "text-align": "left" }}>Typical Applications</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { grade: "SS 304 / 304L", std: "ASTM A312 TP304/TP304L", app: "General chemical, food processing, dairy, pharmaceutical equipment" },
                    { grade: "SS 316 / 316L", std: "ASTM A312 TP316/TP316L", app: "Marine environments, chloride service, pharmaceutical, chemical plants" },
                    { grade: "SS 321", std: "ASTM A312 TP321", app: "High-temperature service, boiler applications, stabilized against sensitization" },
                    { grade: "SS 310 / 310S", std: "ASTM A312 TP310S", app: "High-temperature furnace components, kiln parts, oxidation resistance" },
                    { grade: "SS 347", std: "ASTM A312 TP347", app: "High-temperature stabilized service, petrochemical equipment" },
                    { grade: "SS 904L", std: "ASTM A312 N08904", app: "Sulphuric acid, phosphoric acid, aggressive chemical environments" },
                    { grade: "Duplex 2205", std: "ASTM A790 S31803", app: "Oil & gas, desalination, seawater handling, petrochemical plants" },
                    { grade: "Super Duplex 2507", std: "ASTM A790 S32750", app: "Offshore platforms, subsea equipment, high-chloride environments" },
                  ].map((r, i) => (
                    <tr style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                      <td style={{ padding: "0.65rem 1rem", "font-weight": "700", color: "#111827" }}>{r.grade}</td>
                      <td style={{ padding: "0.65rem 1rem", color: "#374151", "font-size": "0.82rem" }}>{r.std}</td>
                      <td style={{ padding: "0.65rem 1rem", color: "#6b7280", "font-size": "0.82rem" }}>{r.app}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* SS Pipe Sizes & Specifications */}
            <h3 style={{ "font-size": "1.1rem", "font-weight": "700", "margin-bottom": "1rem", color: "#111827" }}>
              SS Pipe Sizes & Specifications
            </h3>
            <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(240px,1fr))", gap: "1rem", "margin-bottom": "2rem" }}>
              {[
                { label: "Size Range", value: "6NB (1/8 inch) to 600NB (24 inch)" },
                { label: "Wall Thickness", value: "SCH 5S, 10S, 20, 40S, 40, 80S, 80, 120, 160, XXS" },
                { label: "Pipe Type", value: "Seamless (SMLS) and Welded (ERW/EFW)" },
                { label: "Length", value: "Random (5-7m), Fixed (6m, 6.1m), Cut-to-length" },
                { label: "End Finish", value: "Plain End (PE), Bevelled End (30° bevel), Threaded (NPT/BSP)" },
                { label: "HSN Code", value: "73041110 (Seamless SS Pipes)" },
              ].map(spec => (
                <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "8px", padding: "1rem" }}>
                  <span style={{ "font-size": "0.75rem", color: "#6b7280", "text-transform": "uppercase", "letter-spacing": "0.05em", display: "block", "margin-bottom": "0.25rem" }}>{spec.label}</span>
                  <span style={{ "font-size": "0.9rem", "font-weight": "700", color: "#111827" }}>{spec.value}</span>
                </div>
              ))}
            </div>

            {/* SS Pipe Forms — Round, Square, Rectangular */}
            <h3 style={{ "font-size": "1.1rem", "font-weight": "700", "margin-bottom": "1rem", color: "#111827" }}>
              SS Pipe Forms — Round, Square & Rectangular Pipes
            </h3>
            <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1.25rem" }}>
              We supply stainless steel pipes in multiple forms to suit different applications. Whether you need <strong>ss round pipe</strong> for fluid transport,
              <strong>ss square pipe</strong> for structural framing, or <strong>ss rectangular pipe</strong> for architectural applications, we maintain
              ready stock of all forms in SS 304, 316L and other grades. All <strong>ss erw pipe</strong> (electric resistance welded) and seamless pipes
              are supplied with full MTC documentation and are available in <strong>ss decorative pipe</strong> finishes including <strong>ss polished pipe</strong> for
              architectural and interior design applications.
            </p>
            <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(260px,1fr))", gap: "1rem", "margin-bottom": "2rem" }}>
              {[
                {
                  form: "SS Round Pipe",
                  desc: "Standard circular pipes for fluid transport, oil & gas, chemical processing, and general piping systems. Available in seamless and welded forms.",
                  sizes: "6NB to 600NB (1/8\" to 24\")"
                },
                {
                  form: "SS Square Pipe",
                  desc: "Structural square hollow sections for frames, support structures, architectural elements, and fabrication. Equal sides for uniform strength.",
                  sizes: "15mm × 15mm to 200mm × 200mm"
                },
                {
                  form: "SS Rectangular Pipe",
                  desc: "Hollow rectangular sections for architectural facades, handrails, furniture, and structural applications requiring specific aspect ratios.",
                  sizes: "20mm × 10mm to 200mm × 100mm"
                },
              ].map(item => (
                <div style={{ background: "#fff", border: "1px solid #e5e7eb", "border-radius": "10px", padding: "1.25rem", "box-shadow": "0 1px 3px rgba(0,0,0,0.05)" }}>
                  <h4 style={{ "font-size": "0.95rem", "font-weight": "700", color: "#E8821A", "margin-bottom": "0.5rem" }}>{item.form}</h4>
                  <p style={{ "font-size": "0.85rem", color: "#374151", "line-height": "1.6", "margin-bottom": "0.6rem" }}>{item.desc}</p>
                  <div style={{ "font-size": "0.8rem", color: "#6b7280" }}>
                    <strong>Size Range:</strong> {item.sizes}
                  </div>
                </div>
              ))}
            </div>

            {/* SS Pipe Weight Chart */}
            <h3 style={{ "font-size": "1.1rem", "font-weight": "700", "margin-bottom": "1rem", color: "#111827" }}>
              SS Pipe Weight Chart — Common Sizes
            </h3>
            <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1.25rem" }}>
              Below is an <strong>ss pipe weight chart</strong> showing approximate weights for commonly-used stainless steel pipe sizes.
              Weight varies slightly based on grade (SS 304, 316L) and wall thickness (schedule). For complete <strong>ss pipe dimensions</strong> and
              weight calculations, contact our technical team.
            </p>
            <div style={{ overflow: "auto", border: "1px solid #e5e7eb", "border-radius": "10px", "margin-bottom": "1.5rem" }}>
              <table style={{ width: "100%", "border-collapse": "collapse", "font-size": "0.875rem", "min-width": "600px" }}>
                <thead>
                  <tr style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff" }}>
                    <th style={{ padding: "0.7rem 1rem", "text-align": "left" }}>Pipe Size (NB)</th>
                    <th style={{ padding: "0.7rem 1rem", "text-align": "left" }}>OD (mm)</th>
                    <th style={{ padding: "0.7rem 1rem", "text-align": "left" }}>Schedule</th>
                    <th style={{ padding: "0.7rem 1rem", "text-align": "left" }}>Wall Thickness (mm)</th>
                    <th style={{ padding: "0.7rem 1rem", "text-align": "left" }}>Weight (kg/m)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: "1/2\" (15NB)", od: "21.3", sch: "40S", wt: "2.77", weight: "1.27" },
                    { size: "3/4\" (20NB)", od: "26.9", sch: "40S", wt: "2.87", weight: "1.69" },
                    { size: "1\" (25NB)", od: "33.7", sch: "40S", wt: "3.38", weight: "2.50" },
                    { size: "1.5\" (40NB)", od: "48.3", sch: "40S", wt: "3.68", weight: "3.99" },
                    { size: "2\" (50NB)", od: "60.3", sch: "40S", wt: "3.91", weight: "5.44" },
                    { size: "3\" (80NB)", od: "88.9", sch: "40S", wt: "5.49", weight: "11.29" },
                    { size: "4\" (100NB)", od: "114.3", sch: "40S", wt: "6.02", weight: "16.07" },
                    { size: "6\" (150NB)", od: "168.3", sch: "40S", wt: "7.11", weight: "28.26" },
                    { size: "8\" (200NB)", od: "219.1", sch: "40S", wt: "8.18", weight: "42.55" },
                    { size: "10\" (250NB)", od: "273.0", sch: "40S", wt: "9.27", weight: "60.29" },
                  ].map((row, i) => (
                    <tr style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                      <td style={{ padding: "0.65rem 1rem", "font-weight": "700", color: "#111827" }}>{row.size}</td>
                      <td style={{ padding: "0.65rem 1rem", color: "#374151" }}>{row.od}</td>
                      <td style={{ padding: "0.65rem 1rem", color: "#374151" }}>{row.sch}</td>
                      <td style={{ padding: "0.65rem 1rem", color: "#374151" }}>{row.wt}</td>
                      <td style={{ padding: "0.65rem 1rem", "font-weight": "600", color: "#E8821A" }}>{row.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ "font-size": "0.82rem", color: "#6b7280", "margin-bottom": "2rem" }}>
              <strong>Note:</strong> The above <strong>ss pipe weight chart</strong> is for reference only. Actual weight may vary ±5% based on manufacturing tolerance.
              For complete <strong>ss pipe schedule chart</strong> covering all schedules (5S to XXS), request our downloadable PDF weight chart.
            </p>

            {/* SS Pipe Surface Finish Types */}
            <h3 style={{ "font-size": "1.1rem", "font-weight": "700", "margin-bottom": "1rem", color: "#111827" }}>
              SS Pipe Surface Finish Types
            </h3>
            <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1.25rem" }}>
              We supply stainless steel pipes in multiple surface finishes to meet different application requirements — from industrial process piping
              to pharmaceutical cleanroom installations and architectural applications requiring <strong>mirror finish ss pipe</strong> or <strong>2B finish ss pipe</strong>.
            </p>
            <div style={{ overflow: "auto", border: "1px solid #e5e7eb", "border-radius": "10px", "margin-bottom": "2rem" }}>
              <table style={{ width: "100%", "border-collapse": "collapse", "font-size": "0.875rem", "min-width": "600px" }}>
                <thead>
                  <tr style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff" }}>
                    <th style={{ padding: "0.7rem 1rem", "text-align": "left" }}>Surface Finish</th>
                    <th style={{ padding: "0.7rem 1rem", "text-align": "left" }}>Description</th>
                    <th style={{ padding: "0.7rem 1rem", "text-align": "left" }}>Typical Applications</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { finish: "Mill Finish", desc: "As-manufactured surface from mill, unpolished", app: "Industrial piping, general applications" },
                    { finish: "Pickled & Passivated", desc: "Chemically treated for enhanced corrosion resistance", app: "Chemical plants, aggressive environments" },
                    { finish: "Bright Annealed (BA)", desc: "Heat-treated in controlled atmosphere, smooth shiny surface", app: "Food processing, dairy, pharmaceutical" },
                    { finish: "2B Finish", desc: "Cold-rolled, smooth surface — most common industrial finish", app: "General industrial, architectural, food grade" },
                    { finish: "No.4 Brushed (Satin)", desc: "Brushed/satin finish, directional grain", app: "Architectural facades, kitchen equipment, decorative" },
                    { finish: "Mirror Finish (No.8)", desc: "Highly polished reflective surface", app: "Pharmaceutical, decorative, cleanroom, interior design" },
                    { finish: "Electropolished", desc: "Electrochemical polishing, ultra-smooth surface", app: "Pharmaceutical, biotech, semiconductor, cleanroom" },
                  ].map((row, i) => (
                    <tr style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                      <td style={{ padding: "0.65rem 1rem", "font-weight": "700", color: "#111827", "white-space": "nowrap" }}>{row.finish}</td>
                      <td style={{ padding: "0.65rem 1rem", color: "#374151", "font-size": "0.82rem" }}>{row.desc}</td>
                      <td style={{ padding: "0.65rem 1rem", color: "#6b7280", "font-size": "0.82rem" }}>{row.app}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* SS Pipe vs SS Tube */}
            <h3 style={{ "font-size": "1.1rem", "font-weight": "700", "margin-bottom": "1rem", color: "#111827" }}>
              SS Pipe vs SS Tube — What's the Difference?
            </h3>
            <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1.25rem" }}>
              Many buyers ask about <strong>ss pipe vs tube</strong> differences. While both are hollow cylindrical products, there are important distinctions
              in measurement, manufacturing, tolerances and applications. Understanding the difference between <strong>seamless vs welded ss pipe</strong> and
              the distinction between pipes and tubes helps ensure you order the right product for your application.
            </p>
            <div style={{ overflow: "auto", border: "1px solid #e5e7eb", "border-radius": "10px", "margin-bottom": "2rem" }}>
              <table style={{ width: "100%", "border-collapse": "collapse", "font-size": "0.875rem", "min-width": "600px" }}>
                <thead>
                  <tr style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff" }}>
                    <th style={{ padding: "0.7rem 1rem", "text-align": "left" }}>Parameter</th>
                    <th style={{ padding: "0.7rem 1rem", "text-align": "left" }}>SS Pipe</th>
                    <th style={{ padding: "0.7rem 1rem", "text-align": "left" }}>SS Tube</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      param: "Size Measurement",
                      pipe: "Nominal Pipe Size (NPS) — approximate inside diameter",
                      tube: "Exact Outside Diameter (OD) in mm or inches"
                    },
                    {
                      param: "Wall Thickness",
                      pipe: "Schedule-based (SCH 5S, 10S, 40S, 80S, XXS, etc.)",
                      tube: "Specified in exact mm or inches (e.g., 1.5mm, 2.0mm)"
                    },
                    {
                      param: "Size Range",
                      pipe: "1/8\" NB to 24\" NB and larger for large-bore pipes",
                      tube: "Typically smaller — 3mm OD to 200mm OD max"
                    },
                    {
                      param: "Manufacturing Tolerance",
                      pipe: "Looser tolerances (±12.5% on wall thickness)",
                      tube: "Tight tolerances (±5-10% on OD and wall)"
                    },
                    {
                      param: "Primary Applications",
                      pipe: "Fluid transport, oil & gas, chemical piping, structural",
                      tube: "Instrumentation, heat exchangers, precision equipment"
                    },
                    {
                      param: "Standards",
                      pipe: "ASTM A312 (pipes), ASME B36.19M",
                      tube: "ASTM A213, A269 (tubes), ASME B36.19M"
                    },
                    {
                      param: "Cost",
                      pipe: "Generally lower cost for same size",
                      tube: "Higher cost due to tighter tolerances"
                    },
                    {
                      param: "Example Product",
                      pipe: "2\" NB SCH 40S pipe (60.3mm OD, 3.91mm WT)",
                      tube: "50mm OD × 2mm WT instrumentation tube"
                    },
                  ].map((row, i) => (
                    <tr style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                      <td style={{ padding: "0.65rem 1rem", "font-weight": "700", color: "#111827", "white-space": "nowrap" }}>{row.param}</td>
                      <td style={{ padding: "0.65rem 1rem", color: "#374151", "font-size": "0.82rem" }}>{row.pipe}</td>
                      <td style={{ padding: "0.65rem 1rem", color: "#6b7280", "font-size": "0.82rem" }}>{row.tube}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ "font-size": "0.9rem", color: "#374151", "line-height": "1.8", "margin-bottom": "2rem" }}>
              <strong>Bottom line:</strong> For general piping systems (chemical plants, oil & gas, water treatment, HVAC), you need <strong>SS pipes</strong>.
              For instrumentation, heat exchangers, condensers, boiler tubes and precision applications, you need <strong>SS tubes</strong>.
              Most industrial projects require pipes, not tubes.
            </p>

            {/* SS Pipe Manufacturing Process */}
            <h3 style={{ "font-size": "1.1rem", "font-weight": "700", "margin-bottom": "1rem", color: "#111827" }}>
              SS Pipe Manufacturing Process
            </h3>
            <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1.25rem" }}>
              Understanding the <strong>ss pipe manufacturing process</strong> helps buyers choose between seamless and welded pipes. We supply both types
              depending on application requirements, pressure ratings, and budget.
            </p>
            <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(280px,1fr))", gap: "1rem", "margin-bottom": "2rem" }}>
              {[
                {
                  type: "Seamless SS Pipe Manufacturing",
                  process: "Solid round steel billet is heated to 1200°C and pierced using a piercing mill to create a hollow shell. The shell is then rolled and stretched through plug mills and sizing mills to achieve the desired diameter and wall thickness. No welding involved — superior strength and pressure rating.",
                  advantages: "Higher pressure rating, uniform strength in all directions, no weld seam, suitable for high-temperature service"
                },
                {
                  type: "Welded SS Pipe (ERW) Manufacturing",
                  process: "Stainless steel coil is uncoiled, edge-trimmed, formed into a tube shape through forming rolls, and welded using Electric Resistance Welding (ERW). The weld seam is then heat-treated, ground smooth if required, and the pipe is sized and cut to length.",
                  advantages: "Cost-effective for larger diameters, consistent OD and wall thickness, suitable for low-medium pressure applications"
                },
              ].map(item => (
                <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "10px", padding: "1.25rem" }}>
                  <h4 style={{ "font-size": "0.95rem", "font-weight": "700", color: "#E8821A", "margin-bottom": "0.65rem" }}>{item.type}</h4>
                  <p style={{ "font-size": "0.85rem", color: "#374151", "line-height": "1.6", "margin-bottom": "0.75rem" }}>{item.process}</p>
                  <p style={{ "font-size": "0.82rem", color: "#6b7280", "line-height": "1.5", margin: 0 }}>
                    <strong>Advantages:</strong> {item.advantages}
                  </p>
                </div>
              ))}
            </div>

            {/* Pan-India Delivery Locations */}
            <div style={{ background: "linear-gradient(135deg,#fff8f0,#ffffff)", border: "1px solid #e5e7eb", "border-radius": "12px", padding: "2rem", "margin-bottom": "2rem" }}>
              <h3 style={{ "font-size": "1.1rem", "font-weight": "700", "margin-bottom": "0.75rem", color: "#111827", "text-align": "center" }}>
                SS Pipe Supplier — Serving All Major Indian Cities
              </h3>
              <p style={{ "font-size": "0.9rem", color: "#6b7280", "text-align": "center", "margin-bottom": "1.25rem" }}>
                As a leading <strong>stainless steel pipe supplier</strong>, we deliver SS pipes across India from our Vadodara stockyard
              </p>
              <div style={{ display: "flex", "flex-wrap": "wrap", gap: "0.5rem", "justify-content": "center", "margin-bottom": "1.5rem" }}>
                {[
                  "Vadodara", "Ahmedabad", "Surat", "Delhi", "Mumbai", "Pune", "Chennai",
                  "Bangalore", "Hyderabad", "Kolkata", "Ankleshwar", "Bharuch", "Dahej",
                  "Hazira", "Gandhinagar", "Rajkot", "Jamnagar", "Indore", "Nagpur"
                ].map(city => (
                  <span style={{ background: "#fff", border: "1px solid #e5e7eb", "border-radius": "99px", padding: "0.35rem 0.9rem", "font-size": "0.82rem", "font-weight": "600", color: "#374151" }}>
                    {city}
                  </span>
                ))}
              </div>
              <p style={{ "font-size": "0.8rem", color: "#9ca3af", "text-align": "center" }}>
                Same-day dispatch for Gujarat · 2-4 days delivery pan-India · Export worldwide
              </p>
            </div>

            {/* Why Choose CMI as SS Pipe Supplier */}
            <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "12px", padding: "2rem" }}>
              <h3 style={{ "font-size": "1.1rem", "font-weight": "700", "margin-bottom": "1.25rem", color: "#111827" }}>
                Why Choose Creative Metal Industries as Your SS Pipe Supplier?
              </h3>
              <ul style={{ "list-style": "none", padding: 0, display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(280px,1fr))", gap: "0.75rem" }}>
                {[
                  "Ready stock of 1000+ SS pipe sizes at Vadodara — immediate availability",
                  "Mill-authorized stockist for Sandvik, Ratnamani, Venus Pipes, Salzgitter, Tubacex",
                  "MTC (EN 10204 3.1/3.2) supplied with every consignment",
                  "IBR Form III-C certified pipes for boiler and pressure vessel applications",
                  "NACE MR-01-75 compliant material for sour service and oil & gas applications",
                  "Third-party inspection accepted — DNV, TUV, SGS, BVIS, LRIS",
                  "Cut-to-size, beveling, threading, polishing services available",
                  "Competitive pricing with transparent quotes within 2 hours",
                  "Pan-India delivery from our GIDC Makarpura, Vadodara facility",
                  "15+ years experience supplying EPC contractors and major industrial projects",
                  "Export to UAE, Oman, Saudi Arabia, Kuwait, USA, UK and 50+ countries",
                  "Technical support and material selection assistance from qualified engineers"
                ].map(point => (
                  <li style={{ display: "flex", gap: "0.65rem", "align-items": "flex-start", "font-size": "0.875rem", color: "#374151", "line-height": "1.6" }}>
                    <span style={{ "flex-shrink": "0", color: "#E8821A", "font-weight": "700" }}>✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

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
                { href: "/ss-seamless-pipe-supplier-india", label: "SS Seamless Pipe Supplier India" },
                { href: "/ss-304-316l-pipe-supplier-india", label: "SS 304 316L Pipe India" },
                { href: "/ss-sheet-supplier-vadodara", label: "SS Sheet Supplier Vadodara" },
                { href: "/ss-310-pipe-supplier-india", label: "SS 310 Pipe Supplier India" },
                { href: "/ss-321-pipe-supplier-india", label: "SS 321 Pipe Supplier India" },
                { href: "/ss-347-pipe-supplier-india", label: "SS 347 Pipe Supplier India" },
                { href: "/ss-410-pipe-supplier-india", label: "SS 410 Pipe Supplier India" },
                { href: "/ss-430-sheet-supplier-india", label: "SS 430 Sheet Supplier India" },
                { href: "/ss-904l-pipe-supplier-india", label: "SS 904L Pipe Supplier India" },
                { href: "/ss-seamless-pipe-supplier-india", label: "SS Seamless Pipe Supplier India" },
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
