/**
 * /ss-erw-pipe-supplier-vadodara
 * SEO landing page — "SS ERW pipe supplier Vadodara", "stainless steel welded pipe Vadodara", "SS 304 ERW pipe", "SS pipe for railing Vadodara"
 */

import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade: "SS 202 ERW Pipe", standard: "ASTM A554 / IS 6913", sizes: "1/2\" to 4\" NB (Round), 12×12 to 75×75 (Square)", wall: "0.5 mm – 2.0 mm", apps: "Decorative railing, furniture, display", finish: "Mirror / Satin / No.4", stock: "Ready Stock" },
  { grade: "SS 304 ERW Pipe", standard: "ASTM A312 / A554 / IS 6913", sizes: "1/2\" to 8\" NB (Round), 12×12 to 150×150 (Square)", wall: "0.8 mm – 3.0 mm", apps: "Railing, food industry, dairy, process", finish: "180 Grit / 320 Grit / Mirror", stock: "Ready Stock" },
  { grade: "SS 316 ERW Pipe", standard: "ASTM A312 / A554", sizes: "1/2\" to 6\" NB (Round), 20×20 to 100×100 (Square)", wall: "1.0 mm – 3.0 mm", apps: "Chemical, pharma, marine, coastal railing", finish: "Mill / Satin / 320 Grit", stock: "Ready Stock" },
  { grade: "SS ERW Round Pipe", standard: "ASTM A554 / A312", sizes: "12.7 mm OD to 219 mm OD", wall: "0.5 mm – 3.0 mm", apps: "Handrails, balustrades, process lines", finish: "All finishes available", stock: "Ready Stock" },
  { grade: "SS ERW Square Pipe", standard: "ASTM A554 / IS 6913", sizes: "12×12 mm to 150×150 mm", wall: "0.6 mm – 3.0 mm", apps: "Furniture, gates, grills, architectural", finish: "Mirror / Satin / Hairline", stock: "Ready Stock" },
  { grade: "SS ERW Rectangular Pipe", standard: "ASTM A554 / IS 6913", sizes: "20×10 mm to 150×75 mm", wall: "0.6 mm – 3.0 mm", apps: "Window frames, door frames, partitions", finish: "Mirror / Satin / No.4", stock: "Ready Stock" },
];

const SPECS = [
  { label: "Process Pipe Standard", value: "ASTM A312 TP304/304L/316/316L (Welded)" },
  { label: "Decorative/Structural Standard", value: "ASTM A554 (Welded SS Mechanical Tubing)" },
  { label: "Indian Standard", value: "IS 6913 (SS tubes for general engineering)" },
  { label: "Round Pipe Sizes", value: "1/2\" to 8\" NB (12.7 mm to 219 mm OD)" },
  { label: "Square Pipe Sizes", value: "12×12 mm to 150×150 mm" },
  { label: "Rectangular Pipe Sizes", value: "20×10 mm to 150×75 mm" },
  { label: "Wall Thickness", value: "0.5 mm to 3.0 mm (18 SWG to 10 SWG)" },
  { label: "Finishes Available", value: "180 Grit, 320 Grit, Mirror (No.8), No.4 Satin, Hairline" },
  { label: "Standard Lengths", value: "6.0 metre / 6.1 metre (custom cut available)" },
  { label: "Grades", value: "SS 202, SS 304, SS 304L, SS 316, SS 316L" },
  { label: "Weld Type", value: "ERW (Electric Resistance Welded) — bead inside ground" },
  { label: "Price Range", value: "₹180 – ₹400/kg depending on grade, size and finish" },
];

const APPLICATIONS = [
  { title: "Railing & Handrails", desc: "SS 304 and SS 202 ERW pipes for staircase railings, balcony handrails and balustrades in Vadodara homes, offices and commercial buildings" },
  { title: "Furniture & Fabrication", desc: "Square and rectangular SS pipes for tables, chairs, shelving units, display racks — fabrication shops in GIDC and Vadodara city" },
  { title: "Food & Beverage Industry", desc: "SS 304 ERW pipes for food processing lines, bakery equipment, kitchen ducting and restaurant fit-out across Gujarat" },
  { title: "Dairy Piping", desc: "SS 304/316 ERW pipes for milk collection, processing and CIP (clean-in-place) lines in dairy plants near Anand and Vadodara" },
  { title: "Architectural & Decorative", desc: "Mirror and satin finish SS pipes for lobby entrance, showroom interiors, temple gates and decorative structures in Vadodara" },
  { title: "Process Piping (Light Duty)", desc: "SS 304/316 ERW pipes for low-pressure water, chemical and utility lines in factories, GIDC units and commercial buildings" },
];

const WHY_BUY = [
  { title: "Huge Stock Variety — Round + Square + Rectangular", desc: "All three profiles in stock from 12mm to 150mm. No need to visit multiple dealers — get round, square and rectangular SS pipe from one counter at Lakkadpitha Road." },
  { title: "Walk-In from GIDC & Vadodara City", desc: "Our stockyard on Lakkadpitha Road is accessible from GIDC Makarpura, Maneja, Gorwa, Karelibaug, Alkapuri — pick up material within 30 minutes of placing order." },
  { title: "All Finishes Available — Mirror to Mill", desc: "180 grit, 320 grit, mirror (No.8), satin (No.4), hairline — choose your finish for decorative or industrial application. No waiting for polishing vendor." },
  { title: "Competitive vs Mumbai & Ahmedabad", desc: "Direct procurement from pipe mills means ₹10-25/kg savings compared to Mumbai and Ahmedabad trading desks. Best rates for Vadodara and South Gujarat." },
  { title: "Cut-to-Length Service", desc: "Need pipes cut to specific length for your railing or furniture project? We offer clean cutting at our stockyard — no extra trip to a cutting shop." },
  { title: "Decorative + Industrial Both Covered", desc: "Whether you need mirror-finish pipe for a hotel lobby railing or A312-grade pipe for a dairy processing line — we supply both categories from the same location." },
];

const FAQS = [
  {
    q: "What is the difference between ERW and seamless SS pipe?",
    a: "ERW (Electric Resistance Welded) pipes are made by rolling a flat strip and welding the seam — cost-effective and suitable for low/medium pressure, decorative and structural use. Seamless pipes have no weld seam, are costlier, and are used for high-pressure, high-temperature and critical applications (ASTM A312 seamless). For railing, furniture and general piping in Vadodara, ERW is the preferred and economical choice.",
  },
  {
    q: "Should I use SS 202 or SS 304 for railing in Vadodara?",
    a: "SS 304 is recommended for outdoor railing and coastal areas due to superior corrosion resistance. SS 202 is suitable for indoor railing, furniture and dry environments where cost saving matters. For Vadodara's climate (non-coastal), SS 202 works well indoors; use SS 304 for outdoor balcony and terrace railings for long-term durability.",
  },
  {
    q: "What SS pipe finishes are available at CMI Vadodara?",
    a: "We stock: 180 Grit (matte industrial), 320 Grit (smooth satin), Mirror/No.8 (high reflective), No.4 Satin (brushed directional), and Hairline finish. Mirror and satin are most popular for railing and decorative work. Mill finish is available for process/industrial applications. All finishes in stock — no waiting.",
  },
  {
    q: "What is the price range for SS ERW pipe in Vadodara?",
    a: "SS ERW pipe prices range from ₹180 to ₹400 per kg depending on grade (202 is cheapest, 316 most expensive), wall thickness, size and finish (mirror costs more than mill finish). Call +91 99982 80619 for today's exact rate based on your requirement.",
  },
  {
    q: "What square and rectangular SS pipe sizes are available?",
    a: "Square pipes: 12×12, 16×16, 19×19, 20×20, 25×25, 30×30, 38×38, 40×40, 50×50, 60×60, 75×75, 80×80, 100×100, 150×150 mm. Rectangular: 20×10, 25×12, 30×15, 40×20, 50×25, 60×30, 75×40, 100×50, 150×75 mm. Wall thickness 0.6 to 3.0 mm. All in SS 202 and SS 304.",
  },
  {
    q: "Can SS ERW pipe be used for water supply or gas lines?",
    a: "SS 304 ERW pipe (ASTM A312 welded) can be used for water supply, potable water and low-pressure utility lines. However, for gas lines (LPG, natural gas), seamless pipes are recommended as per IS 1239/IS 3589 norms. For high-pressure or code-regulated gas piping, use SS seamless. Consult us at +91 99982 80619 for the right product selection.",
  },
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Creative Metal Industries",
      "description": "SS ERW pipe supplier Vadodara — stainless steel welded pipe, SS 304, SS 202, SS 316 in round, square and rectangular. Decorative and process piping. Lakkadpitha Road, Vadodara.",
      "url": "https://www.creativemetalind.com",
      "telephone": "+91-99982-80619",
      "email": "creativemetalind@gmail.com",
      "foundingDate": "2012",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "F-3, Loha Bhavan, Lakkadpitha Rd",
        "addressLocality": "Vadodara",
        "addressRegion": "Gujarat",
        "postalCode": "390001",
        "addressCountry": "IN",
      },
      "areaServed": ["Vadodara", "Gujarat", "GIDC Makarpura", "Anand", "Bharuch", "Surat", "Ahmedabad"],
    },
    {
      "@type": "Product",
      "name": "SS ERW Pipe Supplier Vadodara",
      "description": "SS 202, SS 304, SS 316 ERW pipes — round, square and rectangular. ASTM A312, A554, IS 6913. Mirror, satin, mill finish. Ready stock Vadodara.",
      "brand": { "@type": "Organization", "name": "Creative Metal Industries" },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "180",
        "highPrice": "400",
        "unitCode": "KGM",
        "offerCount": "500+",
        "availability": "https://schema.org/InStock",
      },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creativemetalind.com" },
        { "@type": "ListItem", "position": 2, "name": "SS ERW Pipe Supplier Vadodara", "item": "https://www.creativemetalind.com/ss-erw-pipe-supplier-vadodara" },
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

export default function SSErwPipeSupplierVadodara() {
  return (
    <>
      <Title>SS ERW Pipe Supplier Vadodara | SS 304 202 316 | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="SS ERW pipe supplier Vadodara — SS 304, 202, 316 welded pipe in round, square &amp; rectangular. ASTM A312/A554. Mirror, satin, mill finish. Price ₹180-400/kg. Same-day pickup. Call +91 99982 80619." />
      <Meta name="keywords" content="SS ERW pipe supplier Vadodara, stainless steel welded pipe Vadodara, SS 304 ERW pipe, SS pipe for railing Vadodara, SS square pipe Vadodara, SS rectangular pipe Vadodara" />
      <Link rel="canonical" href="https://www.creativemetalind.com/ss-erw-pipe-supplier-vadodara" />
      <Meta property="og:title" content="SS ERW Pipe Supplier Vadodara | SS 304 202 316 | Round Square Rect | CMI" />
      <Meta property="og:description" content="SS ERW pipe — round, square &amp; rectangular. SS 304, 202, 316. Mirror/satin/mill finish. Ready stock Vadodara. ₹180-400/kg. Call +91 99982 80619." />
      <Meta property="og:url" content="https://www.creativemetalind.com/ss-erw-pipe-supplier-vadodara" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS ERW Pipe Supplier Vadodara | SS 304 202 316 | Round Square Rectangular | CMI" />
      <Meta name="twitter:description" content="SS ERW pipe — round, square &amp; rectangular. SS 304, 202, 316. Mirror/satin/mill finish. Ready stock Vadodara. ₹180-400/kg. Call +91 99982 80619." />
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
        <span>SS ERW Pipe Supplier Vadodara</span>
      </div>

      <main>

        {/* ══ HERO ══ */}
        <section style={{ background: "linear-gradient(135deg,#fff8f0 0%,#fff 60%)", padding: "4rem 1.5rem 3rem", "border-bottom": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "900px", margin: "0 auto" }}>
            <span style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff", "font-size": "0.78rem", "font-weight": "700", padding: "0.3rem 0.85rem", "border-radius": "99px", "letter-spacing": "0.06em", "text-transform": "uppercase", "margin-bottom": "1rem", display: "inline-block" }}>
              ✨ SS Pipe · Round + Square + Rect · Vadodara · Since 2012
            </span>
            <h1 style={{ "font-size": "clamp(1.8rem,5vw,3rem)", "font-weight": "800", "line-height": "1.2", "margin-bottom": "1.25rem", color: "#111827" }}>
              SS ERW Pipe Supplier in{" "}
              <span style={{ color: "#E8821A" }}>Vadodara</span>
            </h1>
            <p style={{ "font-size": "1.1rem", color: "#374151", "max-width": "720px", "line-height": "1.75", "margin-bottom": "2rem" }}>
              Creative Metal Industries is your trusted <strong>stainless steel ERW pipe supplier in Vadodara</strong>. We stock <strong>SS 202, SS 304, SS 316 ERW pipes</strong> in <strong>Round, Square and Rectangular</strong> profiles — all compliant with <strong>ASTM A312, ASTM A554 and IS 6913</strong>. Available in <strong>Mirror, Satin, 320 Grit, 180 Grit and Mill finish</strong>. Sizes from 1/2" to 8" NB round, 12×12 to 150×150 square. Walk-in at Lakkadpitha Road for instant pickup or same-day delivery across Vadodara.
            </p>
            <div style={{ display: "flex", gap: "1rem", "flex-wrap": "wrap", "margin-bottom": "2.5rem" }}>
              <a href="/#contact" class="btn btn-primary" style={{ "font-size": "1rem", padding: "0.75rem 1.75rem" }}>Get Instant Quote →</a>
              <a href="tel:+919998280619" class="btn btn-outline" style={{ "font-size": "1rem", padding: "0.75rem 1.75rem" }}>📞 +91 99982 80619</a>
            </div>
            <div style={{ display: "flex", gap: "2rem", "flex-wrap": "wrap" }}>
              {[
                { num: "3 Profiles", label: "Round · Square · Rect" },
                { num: "5 Finishes", label: "Mirror to Mill" },
                { num: "₹180-400", label: "Per Kg Range" },
                { num: "Same Day", label: "Pickup / Delivery" },
              ].map(s => (
                <div>
                  <div style={{ "font-size": "1.6rem", "font-weight": "800", color: "#E8821A" }}>{s.num}</div>
                  <div style={{ "font-size": "0.82rem", color: "#6b7280", "font-weight": "600" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ GRADES TABLE ══ */}
        <section style={{ padding: "4rem 1.5rem", background: "#fff" }}>
          <div style={{ "max-width": "1100px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.3rem,3vw,1.8rem)", "font-weight": "800", "margin-bottom": "0.5rem", color: "#111827" }}>
              SS ERW Pipe Grades & Types — Available Stock
            </h2>
            <p style={{ color: "#6b7280", "margin-bottom": "2rem", "font-size": "0.95rem" }}>
              All grades in round, square and rectangular profiles. Decorative and process grade both available.
            </p>
            <div style={{ overflow: "auto", border: "1px solid #e5e7eb", "border-radius": "12px" }}>
              <table style={{ width: "100%", "border-collapse": "collapse", "font-size": "0.86rem", "min-width": "860px" }}>
                <thead>
                  <tr style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff" }}>
                    <th style={{ padding: "0.75rem 0.9rem", "text-align": "left", "font-weight": "700" }}>Grade / Type</th>
                    <th style={{ padding: "0.75rem 0.9rem", "text-align": "left", "font-weight": "700" }}>Standard</th>
                    <th style={{ padding: "0.75rem 0.9rem", "text-align": "left", "font-weight": "700" }}>Sizes</th>
                    <th style={{ padding: "0.75rem 0.9rem", "text-align": "left", "font-weight": "700" }}>Wall Thickness</th>
                    <th style={{ padding: "0.75rem 0.9rem", "text-align": "left", "font-weight": "700" }}>Applications</th>
                    <th style={{ padding: "0.75rem 0.9rem", "text-align": "left", "font-weight": "700" }}>Finish</th>
                    <th style={{ padding: "0.75rem 0.9rem", "text-align": "left", "font-weight": "700" }}>Stock</th>
                  </tr>
                </thead>
                <tbody>
                  {GRADES.map((g, i) => (
                    <tr style={{"background": i % 2 === 0 ? "#fff" : "#f9fafb"}}>
                      <td style={{ padding: "0.6rem 0.9rem", "font-weight": "700", color: "#111827" }}>{g.grade}</td>
                      <td style={{ padding: "0.6rem 0.9rem", color: "#374151", "font-size": "0.8rem" }}>{g.standard}</td>
                      <td style={{ padding: "0.6rem 0.9rem", color: "#374151", "font-size": "0.8rem" }}>{g.sizes}</td>
                      <td style={{ padding: "0.6rem 0.9rem", color: "#374151", "font-size": "0.8rem" }}>{g.wall}</td>
                      <td style={{ padding: "0.6rem 0.9rem", color: "#374151", "font-size": "0.8rem" }}>{g.apps}</td>
                      <td style={{ padding: "0.6rem 0.9rem", color: "#374151", "font-size": "0.8rem" }}>{g.finish}</td>
                      <td style={{ padding: "0.6rem 0.9rem" }}>
                        <span style={{ background: "#D1FAE5", color: "#065F46", border: "1px solid #34d399", "border-radius": "99px", padding: "0.15rem 0.6rem", "font-size": "0.72rem", "font-weight": "700" }}>
                          {g.stock}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ══ SPECS GRID ══ */}
        <section style={{ padding: "4rem 1.5rem", background: "#f9fafb", "border-top": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "960px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.3rem,3vw,1.8rem)", "font-weight": "800", "margin-bottom": "0.5rem", color: "#111827" }}>
              Technical Specifications
            </h2>
            <p style={{ color: "#6b7280", "margin-bottom": "2rem", "font-size": "0.95rem" }}>
              Complete details of standards, sizes, finishes and grades for all SS ERW pipes.
            </p>
            <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(280px,1fr))", gap: "1rem" }}>
              {SPECS.map(s => (
                <div style={{ background: "#fff", border: "1px solid #e5e7eb", "border-radius": "10px", padding: "1.2rem 1.4rem" }}>
                  <div style={{ "font-size": "0.8rem", color: "#E8821A", "font-weight": "700", "text-transform": "uppercase", "letter-spacing": "0.04em", "margin-bottom": "0.3rem" }}>{s.label}</div>
                  <div style={{ "font-size": "0.9rem", color: "#111827", "font-weight": "600" }}>{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ APPLICATIONS GRID ══ */}
        <section style={{ padding: "4rem 1.5rem", background: "#fff", "border-top": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "960px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.3rem,3vw,1.8rem)", "font-weight": "800", "margin-bottom": "0.5rem", color: "#111827" }}>
              Applications — Where Our SS ERW Pipes Are Used in Vadodara
            </h2>
            <p style={{ color: "#6b7280", "margin-bottom": "2rem", "font-size": "0.95rem" }}>
              From home railing to dairy piping — serving decorative fabricators and industrial users across Vadodara and Gujarat.
            </p>
            <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(280px,1fr))", gap: "1.25rem" }}>
              {APPLICATIONS.map(a => (
                <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "12px", padding: "1.5rem" }}>
                  <div style={{ "font-weight": "800", color: "#E8821A", "margin-bottom": "0.5rem", "font-size": "0.95rem" }}>{a.title}</div>
                  <div style={{ "font-size": "0.85rem", color: "#374151", "line-height": "1.6" }}>{a.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ WHY BUY FROM CMI ══ */}
        <section style={{ padding: "4rem 1.5rem", background: "#f9fafb", "border-top": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "960px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.3rem,3vw,1.8rem)", "font-weight": "800", "margin-bottom": "0.5rem", color: "#111827" }}>
              Why Buy SS ERW Pipe from Creative Metal Industries, Vadodara?
            </h2>
            <p style={{ color: "#6b7280", "margin-bottom": "2rem", "font-size": "0.95rem" }}>
              Largest local variety, all finishes in stock, and honest pricing — here's why Vadodara fabricators prefer CMI.
            </p>
            <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(300px,1fr))", gap: "1.25rem" }}>
              {WHY_BUY.map(w => (
                <div style={{ background: "#fff", border: "1px solid #e5e7eb", "border-radius": "12px", padding: "1.5rem" }}>
                  <div style={{ "font-weight": "800", color: "#111827", "margin-bottom": "0.5rem", "font-size": "0.95rem" }}>{w.title}</div>
                  <div style={{ "font-size": "0.85rem", color: "#374151", "line-height": "1.65" }}>{w.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FAQ ACCORDION ══ */}
        <section style={{ padding: "4rem 1.5rem", background: "#fff", "border-top": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "760px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.4rem,3vw,2rem)", "font-weight": "800", "margin-bottom": "2rem", color: "#111827" }}>
              Frequently Asked Questions — SS ERW Pipe Vadodara
            </h2>
            <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
              {FAQS.map(f => (
                <details style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "10px", padding: "1.1rem 1.4rem", "box-shadow": "0 1px 4px rgba(0,0,0,0.04)" }}>
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
              Need SS ERW Pipe in Vadodara?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.9)", "margin-bottom": "2rem", "font-size": "1rem", "line-height": "1.65" }}>
              Call or WhatsApp for today's rate, finish options and stock availability. Same-day pickup from Lakkadpitha Road.
            </p>
            <div style={{ display: "flex", gap: "1rem", "justify-content": "center", "flex-wrap": "wrap" }}>
              <a href="tel:+919998280619" style={{ background: "#fff", color: "#E8821A", "font-weight": "800", "font-size": "1rem", padding: "0.85rem 2rem", "border-radius": "8px", "text-decoration": "none", "white-space": "nowrap" }}>
                📞 +91 99982 80619
              </a>
              <a href="https://wa.me/919998280619?text=Hi%2C+I+need+SS+ERW+pipe+in+Vadodara" target="_blank" rel="noopener noreferrer" style={{ background: "#25D366", color: "#fff", "font-weight": "800", "font-size": "1rem", padding: "0.85rem 2rem", "border-radius": "8px", "text-decoration": "none", "white-space": "nowrap" }}>
                💬 WhatsApp Now
              </a>
              <a href="/#contact" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "2px solid rgba(255,255,255,0.5)", "font-weight": "700", "font-size": "1rem", padding: "0.85rem 2rem", "border-radius": "8px", "text-decoration": "none", "white-space": "nowrap" }}>
                Send Enquiry →
              </a>
            </div>
            <p style={{ color: "rgba(255,255,255,0.75)", "font-size": "0.82rem", "margin-top": "1.5rem" }}>
              F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 · Open Mon–Sat 9 AM–7 PM
            </p>
          </div>
        </section>

        {/* ── Related Products ── */}
        <section style={{ padding: "3rem 1.5rem", background: "#fff", "border-top": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "900px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "1.2rem", "font-weight": "700", color: "#111827", "margin-bottom": "1.25rem" }}>Related SS Pipe & Tube Products</h2>
            <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(220px,1fr))", gap: "0.75rem" }}>
              {[
                { href: "/ss-seamless-pipe-supplier-india", label: "SS Seamless Pipe India" },
                { href: "/ss-square-pipe-supplier-india", label: "SS Square Pipe Supplier" },
                { href: "/ss-rectangular-pipe-supplier-india", label: "SS Rectangular Pipe" },
                { href: "/ss-polished-pipe-supplier-india", label: "SS Polished Pipe India" },
                { href: "/ss-304-316l-pipe-supplier-india", label: "SS 304/316L Pipe India" },
                { href: "/ss-pipe-supplier-vadodara", label: "SS Pipe Supplier Vadodara" },
                { href: "/ss-round-bar-supplier-vadodara", label: "SS Round Bar Vadodara" },
                { href: "/stainless-steel-supplier-vadodara", label: "SS Supplier Vadodara" },
              ].map(l => (
                <a href={l.href} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "8px", padding: "0.75rem 1rem", "font-size": "0.85rem", "font-weight": "600", color: "#E8821A", "text-decoration": "none" }}>{l.label} →</a>
              ))}
            </div>
          </div>
        </section>

        <RelatedPages currentPath="/ss-erw-pipe-supplier-vadodara" />
      </main>

      {/* ── Footer ── */}
      <footer style={{ background: "#111827", color: "#9ca3af", padding: "2rem 1.5rem", "text-align": "center", "font-size": "0.82rem" }}>
        <p style={{ "margin-bottom": "0.5rem" }}>
          <strong style={{ color: "#fff" }}>Creative Metal Industries</strong> — SS ERW Pipe Supplier Vadodara, Gujarat
        </p>
        <p style={{ margin: 0 }}>
          F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 &nbsp;|&nbsp;{" "}
          <a href="tel:+919998280619" style={{ color: "#E8821A" }}>+91 99982 80619</a> &nbsp;|&nbsp;{" "}
          <a href="mailto:creativemetalind@gmail.com" style={{ color: "#E8821A" }}>creativemetalind@gmail.com</a>
        </p>
      </footer>
    </>
  );
}
