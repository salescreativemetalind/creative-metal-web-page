/**
 * /ss-pipe-supplier-vadodara
 * Dedicated SEO landing page for keyword: "SS pipe supplier Vadodara"
 */

import { Title, Meta, Link } from "@solidjs/meta";

const GRADES = [
  { grade: "SS 304 Pipe",        spec: "ASTM A312 TP304",        sizes: "6NB–600NB, SCH 5S–XXS",     stock: "Ready Stock" },
  { grade: "SS 304L Pipe",       spec: "ASTM A312 TP304L",       sizes: "6NB–600NB, SCH 5S–XXS",     stock: "Ready Stock" },
  { grade: "SS 316 Pipe",        spec: "ASTM A312 TP316",        sizes: "6NB–600NB, SCH 5S–XXS",     stock: "Ready Stock" },
  { grade: "SS 316L Pipe",       spec: "ASTM A312 TP316L",       sizes: "6NB–600NB, SCH 5S–XXS",     stock: "Ready Stock" },
  { grade: "SS 317L Pipe",       spec: "ASTM A312 TP317L",       sizes: "6NB–300NB",                 stock: "Available" },
  { grade: "SS 321 Pipe",        spec: "ASTM A312 TP321",        sizes: "6NB–400NB, SCH 10S–160",    stock: "Ready Stock" },
  { grade: "SS 310S Pipe",       spec: "ASTM A312 TP310S",       sizes: "6NB–300NB",                 stock: "Available" },
  { grade: "SS 347 Pipe",        spec: "ASTM A312 TP347",        sizes: "6NB–300NB",                 stock: "Available" },
  { grade: "SS 904L Pipe",       spec: "ASTM A312 N08904",       sizes: "6NB–200NB",                 stock: "Available" },
  { grade: "Duplex 2205 Pipe",   spec: "ASTM A790 S31803",       sizes: "6NB–300NB, SCH 5S–80S",     stock: "Ready Stock" },
  { grade: "Super Duplex 2507",  spec: "ASTM A790 S32750",       sizes: "6NB–200NB",                 stock: "Available" },
  { grade: "SS Welded Pipe",     spec: "ASTM A312 ERW/EFW/SAW",  sizes: "15NB–1200NB",               stock: "Ready Stock" },
];

const WHY = [
  { icon: "📦", head: "Largest Stock in Vadodara",         body: "Over 1,000 SS pipe sizes in ready stock at our 1,092 sq.mtr GIDC Makarpura yard. No waiting — same-day dispatch available." },
  { icon: "🏭", head: "Authorised Mill Stockist",           body: "Directly authorised by Sandvik, Ratnamani, Venus Pipes, Salzgitter and Tubacex. Full mill traceability on every pipe." },
  { icon: "📄", head: "Complete Documentation",             body: "MTC (EN 10204 3.1 / 3.2), IBR Form III-C, NACE MR-01-75, HIC tested material — available for every heat / lot." },
  { icon: "✂️", head: "Cut-to-Size & Processing",          body: "Pipe cutting, beveling, threading, polishing, pickling and passivation. We process to your exact drawing requirements." },
  { icon: "🔬", head: "Third-Party Inspection",             body: "BVIS, DNV GL, TUV SUD, SGS, LRIS inspection at our Vadodara facility. Stage-wise inspection for critical projects." },
  { icon: "🚚", head: "Same-Day Dispatch from Vadodara",   body: "Orders placed before 2 PM dispatched same day. Coverage: Ankleshwar, Bharuch, Dahej, Hazira, Surat, Ahmedabad within 4 hours." },
  { icon: "💰", head: "Best Price in Gujarat",             body: "Direct manufacturer pricing — no broker, no middleman. Transparent quotation within 2 hours of enquiry." },
  { icon: "⭐", head: "15+ Years Trusted in Vadodara",     body: "Established 2012. Supplying Vadodara's biggest EPC, oil refinery, petrochemical and fertilizer project contractors." },
];

const INDUSTRIES = [
  { icon: "🛢️", name: "Oil & Gas Refineries",        eg: "BPCL, HPCL, IOCL, ONGC projects, Vadodara" },
  { icon: "🏭", name: "Petrochemical Plants",         eg: "GAIL, ONGC, GSFC, Gujarat Gas" },
  { icon: "🌱", name: "Fertilizer Industry",          eg: "GSFC, GNFC, NFL, IFFCO" },
  { icon: "⚡", name: "Power & Energy",               eg: "NTPC, GSECL, thermal & solar power" },
  { icon: "🧪", name: "Chemical & Pharma",            eg: "API pharma units, specialty chemicals" },
  { icon: "🏗️", name: "EPC Contractors",             eg: "L&T, Tata Projects, Punj Lloyd" },
  { icon: "🏭", name: "Process Equipment Fabricators",eg: "Pressure vessels, heat exchangers, columns" },
  { icon: "💧", name: "Water & Desalination",         eg: "STP, ETP, industrial water treatment" },
];

const FAQS = [
  {
    q: "Who is the best SS pipe supplier in Vadodara?",
    a: "Creative Metal Industries is Vadodara's leading SS pipe supplier with ready stock of 1,000+ SS pipe sizes at GIDC Makarpura. We supply SS 304, 316L, 321, Duplex 2205 and all other grades with MTC, IBR Form III-C and NACE certification. Call +91 99982 80619 for same-day quotes.",
  },
  {
    q: "What SS pipe grades do you supply in Vadodara?",
    a: "We supply all austenitic grades: SS 304, 304L, 316, 316L, 317L, 321, 310S, 347, 904L in seamless (ASTM A312) and welded (ERW/EFW) forms. We also stock Duplex 2205 (S31803) and Super Duplex 2507 (S32750) pipes. All grades from 6NB to 600NB, SCH 5S to XXS.",
  },
  {
    q: "Do you provide IBR-certified SS pipes in Vadodara?",
    a: "Yes. We are an authorised IBR supplier in Vadodara. All IBR-required materials are supplied with IBR Form III-C certification. This covers SS seamless pipes as per ASTM A312, Carbon Steel pipes per A106/A53 and Alloy Steel pipes per A335 for boiler and pressure vessel service.",
  },
  {
    q: "What is the delivery time for SS pipes in Vadodara?",
    a: "For standard sizes in ready stock, we dispatch same day (for orders before 2 PM). For non-stock sizes, delivery is typically 3–7 working days from our mill network. We serve Vadodara, Ankleshwar, Bharuch, Dahej, Surat, Ahmedabad and all Gujarat locations.",
  },
  {
    q: "Do you supply SS pipes for GSFC, GNFC, IOCL projects in Vadodara?",
    a: "Yes. We are an approved vendor for major Gujarat petrochemical and fertilizer projects. We supply ASTM A312, A182, A403 certified SS pipes, fittings and flanges with full MTC documentation and TPI inspection as required by project specifications.",
  },
  {
    q: "What is the minimum order quantity for SS pipes in Vadodara?",
    a: "There is no minimum order quantity. We supply from single pieces for maintenance and repair to full truck loads for large EPC projects. Small orders are welcome — we understand the urgency of plant maintenance requirements.",
  },
  {
    q: "Where is your SS pipe warehouse in Vadodara?",
    a: "Our main stockyard is at 386/B, GIDC Estate, Makarpura, Vadodara 390010. Our office is at F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road, Vadodara 390001. Open Monday to Saturday, 9 AM to 7 PM.",
  },
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "SS Pipe Supplier Vadodara — Creative Metal Industries",
  "description": "Leading SS pipe supplier in Vadodara. Ready stock of SS 304, 316L, 321, Duplex 2205 seamless and welded pipes. IBR, NACE, MTC certified. GIDC Makarpura, Vadodara. Call +91 99982 80619.",
  "url": "https://www.creativemetalind.com/ss-pipe-supplier-vadodara",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home",                    "item": "https://www.creativemetalind.com" },
      { "@type": "ListItem", "position": 2, "name": "SS Pipe Supplier Vadodara","item": "https://www.creativemetalind.com/ss-pipe-supplier-vadodara" },
    ],
  },
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Creative Metal Industries",
    "description": "SS pipe supplier in Vadodara — Creative Metal Industries stocks SS 304, 316L, Duplex 2205 seamless and welded pipes, fittings, flanges and plates at GIDC Makarpura, Vadodara.",
    "url": "https://www.creativemetalind.com",
    "telephone": "+91-99982-80619",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "386/B GIDC Estate, Makarpura",
      "addressLocality": "Vadodara",
      "addressRegion": "Gujarat",
      "postalCode": "390010",
      "addressCountry": "IN",
    },
  },
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

export default function SsPipeSupplierVadodara() {
  return (
    <>
      <Title>SS Pipe Supplier Vadodara | SS 304, 316L, Duplex 2205 | Creative Metal Industries</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta
        name="description"
        content="#1 SS pipe supplier in Vadodara — Creative Metal Industries. Ready stock of SS 304, 316L, 321, Duplex 2205 seamless & welded pipes. IBR Form III-C, NACE, MTC certified. GIDC Makarpura. Call +91 99982 80619 for same-day dispatch."
      />
      <Meta name="keywords" content="SS pipe supplier Vadodara, stainless steel pipe supplier Vadodara, SS 304 pipe Vadodara, SS 316L pipe Vadodara, duplex pipe supplier Vadodara, seamless pipe supplier Vadodara, IBR pipe supplier Vadodara, SS pipe stockist Vadodara Gujarat" />
      <Link rel="canonical" href="https://www.creativemetalind.com/ss-pipe-supplier-vadodara" />
      <Meta property="og:title"       content="SS Pipe Supplier Vadodara | Creative Metal Industries" />
      <Meta property="og:description" content="Vadodara's leading SS pipe supplier — SS 304, 316L, Duplex 2205 ready stock. IBR, NACE, MTC certified. Same-day dispatch. Call +91 99982 80619." />
      <Meta property="og:url"         content="https://www.creativemetalind.com/ss-pipe-supplier-vadodara" />
      <Meta property="og:image"       content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS Pipe Supplier Vadodara | SS 304, 316L, Duplex 2205 | Creative Metal Industries" />
      <Meta name="twitter:description" content="#1 SS pipe supplier in Vadodara — Creative Metal Industries. Ready stock of SS 304, 316L, 321, Duplex 2205 seamless & welded pipes. IBR Form III-C, NACE, MTC certified. GIDC Makarpura. Call +91 99982 80619 for same-day dispatch." />
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
        <section style={{
          background: "linear-gradient(135deg,#fff8f0 0%,#fff 60%)",
          padding: "4rem 1.5rem 3rem",
          "border-bottom": "1px solid #e5e7eb",
        }}>
          <div style={{ "max-width": "900px", margin: "0 auto" }}>
            <span style={{
              background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff",
              "font-size": "0.78rem", "font-weight": "700", padding: "0.3rem 0.85rem",
              "border-radius": "99px", "letter-spacing": "0.06em",
              "text-transform": "uppercase", "margin-bottom": "1rem", display: "inline-block",
            }}>
              🏭 Vadodara · Gujarat · Since 2012
            </span>
            <h1 style={{ "font-size": "clamp(1.8rem,5vw,3rem)", "font-weight": "800", "line-height": "1.2", "margin-bottom": "1.25rem", color: "#111827" }}>
              #1 SS Pipe Supplier in{" "}
              <span style={{ color: "#E8821A" }}>Vadodara</span>
            </h1>
            <p style={{ "font-size": "1.1rem", color: "#374151", "max-width": "700px", "line-height": "1.75", "margin-bottom": "2rem" }}>
              Creative Metal Industries is Vadodara's most trusted stainless steel pipe supplier.
              We stock <strong>SS 304, 304L, 316, 316L, 317L, 321, 310S, 347, 904L, Duplex 2205
              and Super Duplex 2507</strong> seamless and welded pipes — all with MTC,
              IBR Form III-C and NACE certification. Same-day dispatch from our{" "}
              <strong>GIDC Makarpura, Vadodara</strong> stockyard.
            </p>
            <div style={{ display: "flex", gap: "1rem", "flex-wrap": "wrap", "align-items": "center", "margin-bottom": "2.5rem" }}>
              <a href="/#contact" class="btn btn-primary" style={{ "font-size": "1rem", padding: "0.75rem 1.75rem" }}>
                Get Instant Quote →
              </a>
              <a href="tel:+919998280619" class="btn btn-outline" style={{ "font-size": "1rem", padding: "0.75rem 1.75rem" }}>
                📞 +91 99982 80619
              </a>
            </div>
            <div style={{ display: "flex", gap: "2rem", "flex-wrap": "wrap" }}>
              {[
                { num: "1000+", label: "SS Pipe Sizes in Stock" },
                { num: "15+",   label: "Years in Vadodara" },
                { num: "500+",  label: "Projects Supplied" },
                { num: "24hr",  label: "Quote Turnaround" },
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
          <div style={{ "max-width": "960px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.4rem,3vw,2rem)", "font-weight": "800", "margin-bottom": "0.5rem", color: "#111827" }}>
              SS Pipe Stock — All Grades Available in Vadodara
            </h2>
            <p style={{ color: "#6b7280", "margin-bottom": "2rem", "font-size": "0.95rem" }}>
              Seamless &amp; welded SS pipes, all schedules SCH 5S to XXS, sizes 6NB to 600NB.
              Ready stock at GIDC Makarpura, Vadodara.
            </p>
            <div style={{ overflow: "auto", border: "1px solid #e5e7eb", "border-radius": "12px" }}>
              <table style={{ width: "100%", "border-collapse": "collapse", "font-size": "0.9rem", "min-width": "540px" }}>
                <thead>
                  <tr style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff" }}>
                    <th style={{ padding: "0.75rem 1rem", "text-align": "left", "font-weight": "700" }}>Grade</th>
                    <th style={{ padding: "0.75rem 1rem", "text-align": "left", "font-weight": "700" }}>Standard</th>
                    <th style={{ padding: "0.75rem 1rem", "text-align": "left", "font-weight": "700" }}>Size Range</th>
                    <th style={{ padding: "0.75rem 1rem", "text-align": "left", "font-weight": "700" }}>Availability</th>
                  </tr>
                </thead>
                <tbody>
                  {GRADES.map((g, i) => (
                    <tr style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                      <td style={{ padding: "0.65rem 1rem", "font-weight": "700", color: "#111827" }}>{g.grade}</td>
                      <td style={{ padding: "0.65rem 1rem", color: "#374151", "font-size": "0.82rem" }}>{g.spec}</td>
                      <td style={{ padding: "0.65rem 1rem", color: "#374151", "font-size": "0.82rem" }}>{g.sizes}</td>
                      <td style={{ padding: "0.65rem 1rem" }}>
                        <span style={{
                          background: g.stock === "Ready Stock" ? "#D1FAE5" : "#FEF3C7",
                          color:      g.stock === "Ready Stock" ? "#065F46" : "#92400E",
                          border:     `1px solid ${g.stock === "Ready Stock" ? "#34d399" : "#fcd34d"}`,
                          "border-radius": "99px", padding: "0.15rem 0.6rem",
                          "font-size": "0.75rem", "font-weight": "700",
                        }}>
                          {g.stock}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ "font-size": "0.8rem", color: "#9ca3af", "margin-top": "0.75rem" }}>
              All pipes supplied with Mill Test Certificate (EN 10204 3.1 / 3.2) · IBR Form III-C available · NACE MR-01-75 on request
            </p>
          </div>
        </section>

        {/* ══ WHY CMI ══ */}
        <section style={{ padding: "4rem 1.5rem", background: "#f9fafb", "border-top": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "960px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.4rem,3vw,2rem)", "font-weight": "800", "margin-bottom": "0.5rem", color: "#111827", "text-align": "center" }}>
              Why Vadodara Industries Choose Creative Metal Industries
            </h2>
            <p style={{ color: "#6b7280", "margin-bottom": "2.5rem", "text-align": "center", "font-size": "0.95rem" }}>
              Trusted by 500+ EPC contractors, fabricators and plant maintenance teams across Vadodara and Gujarat
            </p>
            <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(280px,1fr))", gap: "1.25rem" }}>
              {WHY.map(w => (
                <div style={{
                  background: "#fff", border: "1px solid #e5e7eb",
                  "border-radius": "12px", padding: "1.5rem",
                  "box-shadow": "0 1px 4px rgba(0,0,0,0.04)",
                }}>
                  <div style={{ "font-size": "1.8rem", "margin-bottom": "0.65rem" }}>{w.icon}</div>
                  <h3 style={{ "font-size": "0.95rem", "font-weight": "700", "margin-bottom": "0.4rem", color: "#111827" }}>{w.head}</h3>
                  <p style={{ "font-size": "0.875rem", color: "#6b7280", "line-height": "1.6", margin: 0 }}>{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ INDUSTRIES ══ */}
        <section style={{ padding: "4rem 1.5rem", background: "#fff", "border-top": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "960px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.4rem,3vw,2rem)", "font-weight": "800", "margin-bottom": "0.5rem", color: "#111827" }}>
              Industries We Supply SS Pipes to in Vadodara
            </h2>
            <p style={{ color: "#6b7280", "margin-bottom": "2rem", "font-size": "0.95rem" }}>
              From Vadodara's GIDC complexes to refineries across Gujarat — we are the preferred SS pipe supplier for:
            </p>
            <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(250px,1fr))", gap: "1rem" }}>
              {INDUSTRIES.map(ind => (
                <div style={{
                  background: "#fff8f0", border: "1px solid #fde8cc",
                  "border-radius": "10px", padding: "1.1rem 1.25rem",
                  display: "flex", gap: "0.75rem", "align-items": "flex-start",
                }}>
                  <span style={{ "font-size": "1.5rem", "flex-shrink": "0" }}>{ind.icon}</span>
                  <div>
                    <div style={{ "font-weight": "700", "font-size": "0.9rem", color: "#111827", "margin-bottom": "0.15rem" }}>{ind.name}</div>
                    <div style={{ "font-size": "0.78rem", color: "#92400E" }}>{ind.eg}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FAQ ══ */}
        <section style={{ padding: "4rem 1.5rem", background: "#f9fafb", "border-top": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "760px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.4rem,3vw,2rem)", "font-weight": "800", "margin-bottom": "2rem", color: "#111827" }}>
              Frequently Asked Questions — SS Pipe Supplier Vadodara
            </h2>
            <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
              {FAQS.map(f => (
                <details style={{
                  background: "#fff", border: "1px solid #e5e7eb",
                  "border-radius": "10px", padding: "1.1rem 1.4rem",
                  "box-shadow": "0 1px 4px rgba(0,0,0,0.04)",
                }}>
                  <summary style={{ "font-weight": "700", "font-size": "0.95rem", color: "#111827", cursor: "pointer", "list-style": "none" }}>
                    {f.q}
                  </summary>
                  <p style={{ "font-size": "0.9rem", color: "#374151", "line-height": "1.7", "margin-top": "0.75rem", "margin-bottom": 0 }}>
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ══ BUYING GUIDE ══ */}
        <section style={{ padding: "4rem 1.5rem", background: "#fff", "border-top": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "960px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.4rem,3vw,2rem)", "font-weight": "800", "margin-bottom": "1rem", color: "#111827" }}>
              SS Pipe Buying Guide for Vadodara Buyers
            </h2>
            <p style={{ color: "#374151", "font-size": "0.95rem", "line-height": "1.8", "margin-bottom": "1.5rem" }}>
              Before placing your order, ensure you have these details ready. This prevents wrong material delivery and costly project delays:
            </p>
            <div style={{ overflow: "auto", border: "1px solid #e5e7eb", "border-radius": "10px", "margin-bottom": "2rem" }}>
              <table style={{ width: "100%", "border-collapse": "collapse", "font-size": "0.88rem", "min-width": "500px" }}>
                <thead><tr style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff" }}><th style={{ padding: "0.7rem 1rem", "text-align": "left" }}>What to Specify</th><th style={{ padding: "0.7rem 1rem", "text-align": "left" }}>Example</th><th style={{ padding: "0.7rem 1rem", "text-align": "left" }}>Why It Matters</th></tr></thead>
                <tbody>
                  {[["Grade","SS 316L (TP316L)","Wrong grade = corrosion failure in service"],["Size","2 inch (50NB) or 60.3mm OD","Ensures fit with existing piping"],["Schedule","SCH 40S / SCH 80S","Determines pressure rating"],["Type","Seamless (SMLS)","Seamless for high-pressure; welded for large diameters"],["Standard","ASTM A312","Defines testing and acceptance criteria"],["Length","6m random / 6.1m fixed","Fixed length for pre-fabricated spools"],["Certification","MTC 3.1 + IBR Form III-C","IBR mandatory for boiler piping in India"]].map((r,i) => (
                    <tr style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                      <td style={{ padding: "0.6rem 1rem", "font-weight": "700", color: "#111827" }}>{r[0]}</td>
                      <td style={{ padding: "0.6rem 1rem", color: "#374151" }}>{r[1]}</td>
                      <td style={{ padding: "0.6rem 1rem", color: "#6b7280", "font-size": "0.82rem" }}>{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 style={{ "font-size": "clamp(1.4rem,3vw,2rem)", "font-weight": "800", "margin-bottom": "1rem", color: "#111827" }}>
              Case Study — GSFC Expansion Project, Vadodara
            </h2>
            <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "12px", padding: "1.5rem", "margin-bottom": "2rem" }}>
              <p style={{ "font-size": "0.92rem", color: "#374151", "line-height": "1.8", margin: "0 0 0.75rem" }}><strong>Client:</strong> EPC contractor for GSFC (Gujarat State Fertilizers) Vadodara unit expansion. Required 800+ metres of SS 316L seamless pipe (ASTM A312, sizes 3/4" to 6", SCH 10S-80S) with NACE MR-01-75 compliance for urea plant piping.</p>
              <p style={{ "font-size": "0.92rem", color: "#374151", "line-height": "1.8", margin: "0 0 0.75rem" }}><strong>Challenge:</strong> Tight delivery timeline (15 days) with stage-wise TPI inspection under TUV SUD at our Vadodara facility before dispatch.</p>
              <p style={{ "font-size": "0.92rem", color: "#374151", "line-height": "1.8", margin: 0 }}><strong>Result:</strong> 100% material dispatched within 12 days. Zero rejections at TPI. MTC + NACE compliance + hardness test reports provided for every heat. Client confirmed repeat order for Phase 2.</p>
            </div>

            <h2 style={{ "font-size": "clamp(1.4rem,3vw,2rem)", "font-weight": "800", "margin-bottom": "1rem", color: "#111827" }}>
              Storage &amp; Maintenance of SS Pipes
            </h2>
            <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(240px,1fr))", gap: "1rem", "margin-bottom": "2rem" }}>
              {[{h:"Proper Storage",d:"Store on wooden/plastic supports, never directly on ground or carbon steel. Keep end caps on. Indoor storage preferred for polished/mirror finish pipe."},{h:"Avoid Contamination",d:"Never use carbon steel wire brushes, grinding discs, or chains on SS pipe. Iron particles embed in the surface and cause rust spots within days."},{h:"Post-Weld Treatment",d:"After welding, always pickle and passivate (HNO3 + HF solution or paste) to restore the protective chromium oxide layer."},{h:"Periodic Inspection",d:"For installed piping, inspect annually for pitting (especially at welds), crevice corrosion under gaskets, and stress corrosion at bends in chloride environments."}].map(c => (
                <div style={{ background: "#fff8f0", border: "1px solid #fde8cc", "border-radius": "10px", padding: "1.1rem" }}>
                  <h3 style={{ "font-size": "0.92rem", "font-weight": "700", color: "#111827", "margin-bottom": "0.4rem" }}>{c.h}</h3>
                  <p style={{ "font-size": "0.84rem", color: "#6b7280", "line-height": "1.6", margin: 0 }}>{c.d}</p>
                </div>
              ))}
            </div>

            <h2 style={{ "font-size": "clamp(1.4rem,3vw,2rem)", "font-weight": "800", "margin-bottom": "1rem", color: "#111827" }}>
              Related Products — Internal Links
            </h2>
            <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(220px,1fr))", gap: "0.75rem", "margin-bottom": "2rem" }}>
              {[{href:"/ss-304-316l-pipe-supplier-india",label:"SS 304/316L Pipe India"},{href:"/carbon-steel-sa516-plate-stockist-india",label:"SA 516 Plate Stockist"},{href:"/nace-hic-steel-plate-supplier-india",label:"NACE HIC Plate India"},{href:"/tmt-bars-supplier-gujarat",label:"TMT Bars Gujarat"},{href:"/duplex-steel-supplier-vadodara",label:"Duplex Steel Vadodara"},{href:"/stainless-steel-supplier-vadodara",label:"Stainless Steel Vadodara"}].map(l => (
                <a href={l.href} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "8px", padding: "0.85rem 1rem", "font-size": "0.88rem", "font-weight": "600", color: "#E8821A", "text-decoration": "none" }}>{l.label} →</a>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section style={{
          padding: "4rem 1.5rem",
          background: "linear-gradient(135deg,#E8821A,#d85c2a)",
          "text-align": "center",
        }}>
          <div style={{ "max-width": "640px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.4rem,3vw,2rem)", "font-weight": "800", color: "#fff", "margin-bottom": "0.75rem" }}>
              Need SS Pipes in Vadodara?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.9)", "margin-bottom": "2rem", "font-size": "1rem", "line-height": "1.65" }}>
              Call or WhatsApp us now for a price and availability check. Same-day quotes, same-day dispatch from GIDC Makarpura, Vadodara.
            </p>
            <div style={{ display: "flex", gap: "1rem", "justify-content": "center", "flex-wrap": "wrap" }}>
              <a
                href="tel:+919998280619"
                style={{
                  background: "#fff", color: "#E8821A",
                  "font-weight": "800", "font-size": "1rem",
                  padding: "0.85rem 2rem", "border-radius": "8px",
                  "text-decoration": "none", "white-space": "nowrap",
                }}
              >
                📞 +91 99982 80619
              </a>
              <a
                href="https://wa.me/919998280619?text=Hi%2C+I+need+SS+pipe+supply+in+Vadodara"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#25D366", color: "#fff",
                  "font-weight": "800", "font-size": "1rem",
                  padding: "0.85rem 2rem", "border-radius": "8px",
                  "text-decoration": "none", "white-space": "nowrap",
                }}
              >
                💬 WhatsApp Now
              </a>
              <a
                href="/#contact"
                style={{
                  background: "rgba(255,255,255,0.15)", color: "#fff",
                  border: "2px solid rgba(255,255,255,0.5)",
                  "font-weight": "700", "font-size": "1rem",
                  padding: "0.85rem 2rem", "border-radius": "8px",
                  "text-decoration": "none", "white-space": "nowrap",
                }}
              >
                Send Enquiry →
              </a>
            </div>
            <p style={{ color: "rgba(255,255,255,0.75)", "font-size": "0.82rem", "margin-top": "1.5rem" }}>
              386/B GIDC Estate, Makarpura, Vadodara 390010 · Open Mon–Sat 9 AM–7 PM
            </p>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer style={{ background: "#111827", color: "#9ca3af", padding: "2rem 1.5rem", "text-align": "center", "font-size": "0.82rem" }}>
        <p style={{ "margin-bottom": "0.5rem" }}>
          <strong style={{ color: "#fff" }}>Creative Metal Industries</strong> — SS Pipe Supplier Vadodara, Gujarat
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
