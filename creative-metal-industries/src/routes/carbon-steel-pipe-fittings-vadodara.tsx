/**
 * /carbon-steel-pipe-fittings-vadodara
 * SEO landing page — "carbon steel plate supplier Vadodara", "pipe fittings flanges supplier Vadodara", "ERW pipe supplier Vadodara"
 */

import { Title, Meta, Link } from "@solidjs/meta";

const CS_PIPES = [
  { grade: "ERW Pipe (IS 1239)",       spec: "IS 1239 Part-1",         sizes: "15NB–150NB, Light/Medium/Heavy", makes: "APL Apollo, Tata, Surya" },
  { grade: "ERW Pipe (IS 3589)",       spec: "IS 3589",                sizes: "150NB–600NB, 3.2–20mm WT",      makes: "APL Apollo, JSW, ISMT" },
  { grade: "Seamless Pipe A106 Gr.B",  spec: "ASTM A106 Gr.B",         sizes: "15NB–300NB, SCH 40–XXS",        makes: "ISMT, MSL, Ratnamani" },
  { grade: "Seamless Pipe A53 Gr.B",   spec: "ASTM A53 Gr.B",          sizes: "15NB–300NB, SCH 40–160",        makes: "ISMT, MSL" },
  { grade: "API 5L Line Pipe X42",     spec: "API 5L X42 PSL1/PSL2",   sizes: "50NB–600NB, 4–25mm WT",         makes: "Tata, JSW, Jindal" },
  { grade: "API 5L Line Pipe X52–X65", spec: "API 5L X52/X60/X65",     sizes: "100NB–800NB, 6–32mm WT",        makes: "Tata, JSW, Wellspun" },
  { grade: "API 5L Line Pipe X70–X80", spec: "API 5L X70/X80 PSL2",    sizes: "150NB–1200NB, 8–40mm WT",       makes: "Welspun, Jindal SAW" },
];

const ERW_TABLE = [
  { nb: "15 (½\")", od: "21.3 mm", light: "2.0 mm", medium: "2.6 mm", heavy: "3.2 mm" },
  { nb: "20 (¾\")", od: "26.9 mm", light: "2.0 mm", medium: "2.6 mm", heavy: "3.2 mm" },
  { nb: "25 (1\")",  od: "33.7 mm", light: "2.6 mm", medium: "3.2 mm", heavy: "4.0 mm" },
  { nb: "32 (1¼\")", od: "42.4 mm", light: "2.6 mm", medium: "3.2 mm", heavy: "4.0 mm" },
  { nb: "40 (1½\")", od: "48.3 mm", light: "2.9 mm", medium: "3.2 mm", heavy: "4.0 mm" },
  { nb: "50 (2\")",  od: "60.3 mm", light: "2.9 mm", medium: "3.6 mm", heavy: "4.5 mm" },
  { nb: "65 (2½\")", od: "76.1 mm", light: "3.2 mm", medium: "3.6 mm", heavy: "4.5 mm" },
  { nb: "80 (3\")",  od: "88.9 mm", light: "3.2 mm", medium: "4.0 mm", heavy: "4.8 mm" },
  { nb: "100 (4\")", od: "114.3 mm", light: "3.6 mm", medium: "4.5 mm", heavy: "5.4 mm" },
  { nb: "125 (5\")", od: "139.7 mm", light: "4.0 mm", medium: "4.8 mm", heavy: "5.4 mm" },
  { nb: "150 (6\")", od: "168.3 mm", light: "4.0 mm", medium: "4.8 mm", heavy: "5.4 mm" },
  { nb: "200 (8\")", od: "219.1 mm", light: "—",      medium: "5.9 mm", heavy: "6.3 mm" },
  { nb: "250 (10\")",od: "273.0 mm", light: "—",      medium: "6.3 mm", heavy: "6.3 mm" },
  { nb: "300 (12\")",od: "323.9 mm", light: "—",      medium: "6.4 mm", heavy: "6.4 mm" },
];

const FITTINGS = [
  { type: "BW Elbows 90°/45°/180°",   spec: "ASTM A234 WPB / ASME B16.9",  size: "15NB–600NB",         ibr: "Available" },
  { type: "BW Tees (Equal/Reducing)",  spec: "ASTM A234 WPB / ASME B16.9",  size: "15NB–600NB",         ibr: "Available" },
  { type: "BW Reducers (Con/Ecc)",     spec: "ASTM A234 WPB / ASME B16.9",  size: "20NB×15NB to 600NB", ibr: "Available" },
  { type: "BW End Caps",               spec: "ASTM A234 WPB / ASME B16.9",  size: "15NB–600NB",         ibr: "Available" },
  { type: "Forged SW/Screwed Fittings",spec: "ASTM A105 / ASME B16.11",     size: "6NB–50NB, 3000#–9000#", ibr: "Available" },
  { type: "Flanges WNRF / SORF / BLRF",spec: "ASTM A105 / ASME B16.5",      size: "15NB–600NB, Class 150–2500", ibr: "Available" },
];

const PLATES = [
  { grade: "IS 2062 E250 (Gr.A/B/C)", thick: "3 mm – 150 mm", width: "1000–3100 mm", app: "General structural & fabrication" },
  { grade: "SA 516 Gr. 60",           thick: "6 mm – 100 mm", width: "1200–3000 mm", app: "Low-temperature pressure vessels" },
  { grade: "SA 516 Gr. 70",           thick: "6 mm – 150 mm", width: "1200–3000 mm", app: "Boilers & pressure vessels" },
  { grade: "IS 2002 (Boiler Quality)", thick: "6 mm – 100 mm", width: "1200–2500 mm", app: "IBR boiler shell, drum construction" },
  { grade: "NACE / HIC Tested Plate",  thick: "6 mm – 100 mm", width: "1200–3000 mm", app: "Sour service, H₂S environments" },
];

const FAQS = [
  {
    q: "Who is the best ERW pipe supplier in Vadodara?",
    a: "Creative Metal Industries is a leading ERW pipe supplier in Vadodara, Gujarat. We stock APL Apollo, Tata and Surya ERW pipes as per IS 1239 (15NB–150NB) and IS 3589 (150NB–600NB) in light, medium and heavy thickness. Same-day dispatch from GIDC Makarpura. Call +91 99982 80619.",
  },
  {
    q: "Do you supply carbon steel pipe fittings and flanges in Vadodara?",
    a: "Yes. We supply a complete range of carbon steel buttweld fittings (ASTM A234 WPB, ASME B16.9) and forged fittings (ASTM A105, ASME B16.11) including elbows, tees, reducers, end caps and flanges (WNRF, SORF, BLRF) in all sizes 15NB to 600NB. IBR certified fittings available.",
  },
  {
    q: "Do you supply API 5L line pipes in Vadodara for pipeline projects?",
    a: "Yes. We supply API 5L X42, X52, X60, X65, X70 and X80 grade line pipes (PSL1 and PSL2) from leading mills — Tata Steel, JSW, Welspun, Jindal SAW — for oil & gas pipeline projects across Gujarat. Full material traceability with MTC provided.",
  },
  {
    q: "Are SA 516 Gr.70 pressure vessel plates available in Vadodara?",
    a: "Yes. We stock SA 516 Gr.60 and Gr.70 boiler quality pressure vessel plates in 6–150mm thickness from reputed mills. IBR certification available for SA 516 Gr.70 plates used in boiler drum and shell construction. Also available: IS 2062, IS 2002 boiler quality and NACE/HIC tested plates.",
  },
  {
    q: "What is the difference between IS 1239 and IS 3589 ERW pipes?",
    a: "IS 1239 covers ERW pipes in smaller sizes (15NB to 150NB) with Light, Medium and Heavy designations for wall thickness. IS 3589 covers larger ERW pipes (150NB to 600NB) with specific wall thicknesses. Both are used for water supply, plumbing, structural and low-pressure industrial applications. CMI stocks both standards at GIDC Makarpura, Vadodara.",
  },
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Creative Metal Industries",
      "description": "Carbon steel pipe, ERW pipe, fittings, flanges and plate supplier in Vadodara. IS 2062, ASTM A106, API 5L, IBR certified. GIDC Makarpura.",
      "url": "https://www.creativemetalind.com",
      "telephone": "+91-99982-80619",
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
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creativemetalind.com" },
        { "@type": "ListItem", "position": 2, "name": "Carbon Steel Pipe Fittings Vadodara", "item": "https://www.creativemetalind.com/carbon-steel-pipe-fittings-vadodara" },
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

export default function CarbonSteelPipeFittingsVadodara() {
  return (
    <>
      <Title>Carbon Steel Pipe Fittings Flanges Supplier Vadodara | A106 Gr.B | ERW | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Carbon steel pipe supplier Vadodara — ASTM A106 Gr.B seamless pipe, ERW pipe IS 1239, CS buttweld fittings A234 WPB, carbon steel flanges A105. IBR, MTC certified. Same-day dispatch. Creative Metal Industries." />
      <Meta name="keywords" content="carbon steel plate supplier Vadodara, pipe fittings flanges supplier Vadodara, ERW pipe supplier Vadodara, API 5L pipe Gujarat, carbon steel fittings Vadodara, SA 516 Gr 70 plate Vadodara" />
      <Link rel="canonical" href="https://www.creativemetalind.com/carbon-steel-pipe-fittings-vadodara" />
      <Meta property="og:title" content="Carbon Steel Pipe Fittings Flanges Supplier Vadodara | ERW Pipe | CMI" />
      <Meta property="og:description" content="Carbon steel ERW pipe, buttweld fittings, flanges and plates in Vadodara. IS 2062, ASTM A106, API 5L, IBR certified. Call +91 99982 80619." />
      <Meta property="og:url" content="https://www.creativemetalind.com/carbon-steel-pipe-fittings-vadodara" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Carbon Steel Pipe Fittings Flanges Supplier Vadodara | ERW Pipe | Creative Metal Industries" />
      <Meta name="twitter:description" content="Carbon steel plate, ERW pipe, buttweld fittings and flanges supplier in Vadodara. IS 2062, ASTM A106, API 5L, IBR certified. GIDC Makarpura. Call +91 99982 80619." />
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
        <span>Carbon Steel Pipe Fittings Vadodara</span>
      </div>

      <main>

        {/* ══ HERO ══ */}
        <section style={{ background: "linear-gradient(135deg,#fff8f0 0%,#fff 60%)", padding: "4rem 1.5rem 3rem", "border-bottom": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "900px", margin: "0 auto" }}>
            <span style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff", "font-size": "0.78rem", "font-weight": "700", padding: "0.3rem 0.85rem", "border-radius": "99px", "letter-spacing": "0.06em", "text-transform": "uppercase", "margin-bottom": "1rem", display: "inline-block" }}>
              🏭 IS · ASTM · API · IBR Certified · Vadodara Gujarat
            </span>
            <h1 style={{ "font-size": "clamp(1.8rem,5vw,3rem)", "font-weight": "800", "line-height": "1.2", "margin-bottom": "1.25rem", color: "#111827" }}>
              Carbon Steel Pipe, Fittings &amp; Flanges Supplier in{" "}
              <span style={{ color: "#E8821A" }}>Vadodara</span>
            </h1>
            <p style={{ "font-size": "1.1rem", color: "#374151", "max-width": "720px", "line-height": "1.75", "margin-bottom": "2rem" }}>
              Creative Metal Industries supplies a complete range of <strong>ERW pipes (IS 1239 / IS 3589), Seamless pipes (ASTM A106/A53),
              API 5L line pipes</strong>, buttweld fittings, forged fittings, flanges and carbon steel plates (IS 2062, SA 516 Gr.70)
              from Vadodara. Established in <strong>2012</strong>, we supply all materials with <strong>MTC (EN 10204 3.1/3.2)</strong>, IBR Form III-C, and <strong>NACE MR-01-75</strong> compliance. Third-party inspection under <strong>DNV, TUV, SGS, BVIS, LRIS</strong> at our GIDC Makarpura facility. Ready stock — same-day dispatch.
            </p>
            <div style={{ display: "flex", gap: "1rem", "flex-wrap": "wrap", "margin-bottom": "2.5rem" }}>
              <a href="/#contact" class="btn btn-primary" style={{ "font-size": "1rem", padding: "0.75rem 1.75rem" }}>Get Instant Quote →</a>
              <a href="tel:+919998280619" class="btn btn-outline" style={{ "font-size": "1rem", padding: "0.75rem 1.75rem" }}>📞 +91 99982 80619</a>
            </div>
            <div style={{ display: "flex", gap: "2rem", "flex-wrap": "wrap" }}>
              {[
                { num: "IS/ASTM", label: "Certified Pipes" },
                { num: "API 5L",  label: "Line Pipes X42–X80" },
                { num: "IBR ✓",   label: "Form III-C Available" },
                { num: "≥15 Yrs", label: "Supplying Vadodara" },
              ].map(s => (
                <div>
                  <div style={{ "font-size": "1.6rem", "font-weight": "800", color: "#E8821A" }}>{s.num}</div>
                  <div style={{ "font-size": "0.82rem", color: "#6b7280", "font-weight": "600" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SECTION 1: CS PIPES ══ */}
        <section style={{ padding: "4rem 1.5rem", background: "#fff" }}>
          <div style={{ "max-width": "1000px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.3rem,3vw,1.8rem)", "font-weight": "800", "margin-bottom": "0.5rem", color: "#111827" }}>
              Carbon Steel Pipes — ERW, Seamless &amp; API 5L Line Pipes
            </h2>
            <p style={{ color: "#6b7280", "margin-bottom": "2rem", "font-size": "0.95rem" }}>
              APL Apollo, Tata, JSW, ISMT, Welspun — all reputed makes available with MTC.
            </p>
            <div style={{ overflow: "auto", border: "1px solid #e5e7eb", "border-radius": "12px" }}>
              <table style={{ width: "100%", "border-collapse": "collapse", "font-size": "0.88rem", "min-width": "580px" }}>
                <thead>
                  <tr style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff" }}>
                    <th style={{ padding: "0.75rem 1rem", "text-align": "left", "font-weight": "700" }}>Pipe Type / Grade</th>
                    <th style={{ padding: "0.75rem 1rem", "text-align": "left", "font-weight": "700" }}>Standard</th>
                    <th style={{ padding: "0.75rem 1rem", "text-align": "left", "font-weight": "700" }}>Sizes</th>
                    <th style={{ padding: "0.75rem 1rem", "text-align": "left", "font-weight": "700" }}>Makes</th>
                  </tr>
                </thead>
                <tbody>
                  {CS_PIPES.map((p, i) => (
                    <tr style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                      <td style={{ padding: "0.65rem 1rem", "font-weight": "700", color: "#111827" }}>{p.grade}</td>
                      <td style={{ padding: "0.65rem 1rem", color: "#374151", "font-size": "0.82rem" }}>{p.spec}</td>
                      <td style={{ padding: "0.65rem 1rem", color: "#374151", "font-size": "0.82rem" }}>{p.sizes}</td>
                      <td style={{ padding: "0.65rem 1rem", color: "#374151", "font-size": "0.82rem" }}>{p.makes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ══ ERW SIZE TABLE ══ */}
        <section style={{ padding: "3rem 1.5rem", background: "#f9fafb", "border-top": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "900px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.2rem,3vw,1.6rem)", "font-weight": "800", "margin-bottom": "0.5rem", color: "#111827" }}>
              IS 1239 ERW Pipe Size &amp; Wall Thickness Chart
            </h2>
            <p style={{ color: "#6b7280", "margin-bottom": "1.5rem", "font-size": "0.9rem" }}>
              Standard wall thicknesses for Light (L), Medium (M) and Heavy (H) class ERW pipes per IS 1239.
            </p>
            <div style={{ overflow: "auto", border: "1px solid #e5e7eb", "border-radius": "10px" }}>
              <table style={{ width: "100%", "border-collapse": "collapse", "font-size": "0.84rem", "min-width": "460px" }}>
                <thead>
                  <tr style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff" }}>
                    <th style={{ padding: "0.6rem 0.9rem", "text-align": "left", "font-weight": "700" }}>NB Size</th>
                    <th style={{ padding: "0.6rem 0.9rem", "text-align": "left", "font-weight": "700" }}>OD (mm)</th>
                    <th style={{ padding: "0.6rem 0.9rem", "text-align": "left", "font-weight": "700" }}>Light WT</th>
                    <th style={{ padding: "0.6rem 0.9rem", "text-align": "left", "font-weight": "700" }}>Medium WT</th>
                    <th style={{ padding: "0.6rem 0.9rem", "text-align": "left", "font-weight": "700" }}>Heavy WT</th>
                  </tr>
                </thead>
                <tbody>
                  {ERW_TABLE.map((row, i) => (
                    <tr style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                      <td style={{ padding: "0.5rem 0.9rem", "font-weight": "600", color: "#111827" }}>{row.nb}</td>
                      <td style={{ padding: "0.5rem 0.9rem", color: "#374151" }}>{row.od}</td>
                      <td style={{ padding: "0.5rem 0.9rem", color: "#374151" }}>{row.light}</td>
                      <td style={{ padding: "0.5rem 0.9rem", color: "#374151" }}>{row.medium}</td>
                      <td style={{ padding: "0.5rem 0.9rem", color: "#374151" }}>{row.heavy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ══ SECTION 2: FITTINGS & FLANGES ══ */}
        <section style={{ padding: "4rem 1.5rem", background: "#fff", "border-top": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "960px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.3rem,3vw,1.8rem)", "font-weight": "800", "margin-bottom": "0.5rem", color: "#111827" }}>
              CS Fittings &amp; Flanges — Buttweld, Forged &amp; Flanges
            </h2>
            <p style={{ color: "#6b7280", "margin-bottom": "2rem", "font-size": "0.95rem" }}>
              ASTM A234 WPB buttweld fittings, A105 forged fittings and ASME B16.5 flanges — all IBR certifiable.
            </p>
            <div style={{ overflow: "auto", border: "1px solid #e5e7eb", "border-radius": "12px" }}>
              <table style={{ width: "100%", "border-collapse": "collapse", "font-size": "0.88rem", "min-width": "520px" }}>
                <thead>
                  <tr style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff" }}>
                    <th style={{ padding: "0.75rem 1rem", "text-align": "left", "font-weight": "700" }}>Type</th>
                    <th style={{ padding: "0.75rem 1rem", "text-align": "left", "font-weight": "700" }}>Standard</th>
                    <th style={{ padding: "0.75rem 1rem", "text-align": "left", "font-weight": "700" }}>Size Range</th>
                    <th style={{ padding: "0.75rem 1rem", "text-align": "left", "font-weight": "700" }}>IBR</th>
                  </tr>
                </thead>
                <tbody>
                  {FITTINGS.map((f, i) => (
                    <tr style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                      <td style={{ padding: "0.65rem 1rem", "font-weight": "700", color: "#111827" }}>{f.type}</td>
                      <td style={{ padding: "0.65rem 1rem", color: "#374151", "font-size": "0.82rem" }}>{f.spec}</td>
                      <td style={{ padding: "0.65rem 1rem", color: "#374151", "font-size": "0.82rem" }}>{f.size}</td>
                      <td style={{ padding: "0.65rem 1rem" }}>
                        <span style={{ background: "#D1FAE5", color: "#065F46", border: "1px solid #34d399", "border-radius": "99px", padding: "0.15rem 0.6rem", "font-size": "0.75rem", "font-weight": "700" }}>
                          {f.ibr}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ══ SECTION 3: CS PLATES ══ */}
        <section style={{ padding: "4rem 1.5rem", background: "#f9fafb", "border-top": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "960px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.3rem,3vw,1.8rem)", "font-weight": "800", "margin-bottom": "0.5rem", color: "#111827" }}>
              Carbon Steel Plates — IS 2062, SA 516 Gr.70, Boiler Quality
            </h2>
            <p style={{ color: "#6b7280", "margin-bottom": "2rem", "font-size": "0.95rem" }}>
              Structural, pressure vessel and boiler quality CS plates from reputed mills — SAIL, TATA, JSW, ESSAR.
            </p>
            <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(260px,1fr))", gap: "1.1rem" }}>
              {PLATES.map(pl => (
                <div style={{ background: "#fff", border: "1px solid #e5e7eb", "border-radius": "10px", padding: "1.4rem" }}>
                  <div style={{ "font-weight": "800", color: "#111827", "margin-bottom": "0.4rem", "font-size": "0.92rem" }}>{pl.grade}</div>
                  <div style={{ "font-size": "0.82rem", color: "#374151", "margin-bottom": "0.25rem" }}>Thickness: {pl.thick}</div>
                  <div style={{ "font-size": "0.82rem", color: "#374151", "margin-bottom": "0.5rem" }}>Width: {pl.width}</div>
                  <div style={{ "font-size": "0.8rem", color: "#E8821A", "font-weight": "600", "font-style": "italic" }}>{pl.app}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FAQ ══ */}
        <section style={{ padding: "4rem 1.5rem", background: "#fff", "border-top": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "760px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.4rem,3vw,2rem)", "font-weight": "800", "margin-bottom": "2rem", color: "#111827" }}>
              Frequently Asked Questions — Carbon Steel Pipe Fittings Vadodara
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
              Need Carbon Steel Pipes, Fittings or Flanges in Vadodara?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.9)", "margin-bottom": "2rem", "font-size": "1rem", "line-height": "1.65" }}>
              Call or WhatsApp for price and stock availability. Same-day dispatch from GIDC Makarpura, Vadodara.
            </p>
            <div style={{ display: "flex", gap: "1rem", "justify-content": "center", "flex-wrap": "wrap" }}>
              <a href="tel:+919998280619" style={{ background: "#fff", color: "#E8821A", "font-weight": "800", "font-size": "1rem", padding: "0.85rem 2rem", "border-radius": "8px", "text-decoration": "none", "white-space": "nowrap" }}>
                📞 +91 99982 80619
              </a>
              <a href="https://wa.me/919998280619?text=Hi%2C+I+need+carbon+steel+pipes+fittings+in+Vadodara" target="_blank" rel="noopener noreferrer" style={{ background: "#25D366", color: "#fff", "font-weight": "800", "font-size": "1rem", padding: "0.85rem 2rem", "border-radius": "8px", "text-decoration": "none", "white-space": "nowrap" }}>
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

      </main>

      {/* ── Internal Links — Topic Cluster ── */}
      <section style={{ padding: "3rem 1.5rem", background: "#fff", "border-top": "1px solid #e5e7eb" }}>
        <div style={{ "max-width": "900px", margin: "0 auto" }}>
          <h2 style={{ "font-size": "1.2rem", "font-weight": "700", color: "#111827", "margin-bottom": "1.25rem" }}>Related Carbon &amp; Alloy Steel Products</h2>
          <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(220px,1fr))", gap: "0.75rem" }}>
            {[
              { href: "/carbon-steel-sa516-plate-stockist-india", label: "SA 516 Plate Stockist India" },
              { href: "/nace-hic-steel-plate-supplier-india", label: "NACE HIC Plate Supplier India" },
              { href: "/alloy-steel-pipe-supplier-india", label: "Alloy Steel P91 P22 Pipe India" },
              { href: "/blog/carbon-steel-pipe-guide", label: "Carbon Steel Pipe Guide" },
              { href: "/blog/p91-alloy-steel-guide", label: "P91 Alloy Steel Guide" },
              { href: "/blog/sa-516-carbon-steel-plate-guide", label: "SA 516 Plate Guide" },
              { href: "/blog/nace-hic-steel-plates-guide", label: "NACE HIC Plates Guide" },
              { href: "/blog/ms-structural-steel-guide", label: "MS Structural Steel Guide" },
            ].map(l => (
              <a href={l.href} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "8px", padding: "0.75rem 1rem", "font-size": "0.85rem", "font-weight": "600", color: "#E8821A", "text-decoration": "none" }}>{l.label} →</a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: "#111827", color: "#9ca3af", padding: "2rem 1.5rem", "text-align": "center", "font-size": "0.82rem" }}>
        <p style={{ "margin-bottom": "0.5rem" }}>
          <strong style={{ color: "#fff" }}>Creative Metal Industries</strong> — Carbon Steel Pipe, Fittings &amp; Flanges Supplier Vadodara, Gujarat
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
