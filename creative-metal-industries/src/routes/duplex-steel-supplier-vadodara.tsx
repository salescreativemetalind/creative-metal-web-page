/**
 * /duplex-steel-supplier-vadodara
 * SEO landing page — "duplex steel supplier Vadodara", "alloy steel P91 pipe stockist Gujarat", "IBR certified pipe supplier Gujarat"
 */

import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const DUPLEX_GRADES = [
  {
    grade: "Duplex 2205 (S31803)",
    spec: "ASTM A790 / A928 / A182 F51",
    sizes: "6NB–300NB pipes · 3–80mm plates · Full fittings & flanges",
    apps: "Oil & gas, desalination, chemical processing, offshore platforms",
  },
  {
    grade: "Duplex S32205",
    spec: "ASTM A790 S32205 / A240 S32205",
    sizes: "6NB–300NB pipes · 3–60mm plates",
    apps: "Pulp & paper, heat exchangers, seawater handling",
  },
  {
    grade: "Super Duplex 2507 (S32750)",
    spec: "ASTM A790 S32750 / A182 F53",
    sizes: "6NB–200NB pipes · 3–60mm plates",
    apps: "Offshore oil & gas, desalination, subsea equipment",
  },
  {
    grade: "Zeron 100 (S32760)",
    spec: "ASTM A790 S32760 / A240 S32760",
    sizes: "6NB–150NB pipes · 3–40mm plates",
    apps: "Marine, subsea, chloride-rich environments",
  },
];

const ALLOY_GRADES = [
  {
    grade: "Alloy Steel P91 (9Cr-1Mo-V)",
    spec: "ASTM A335 P91 / A234 WP91 / A182 F91",
    sizes: "15NB–300NB, SCH 40–XXS",
    ibr: "IBR Form III-C available",
    apps: "Ultra-supercritical boilers, power plant headers, high-temp steam service",
  },
  {
    grade: "Alloy Steel P22 (2.25Cr-1Mo)",
    spec: "ASTM A335 P22 / A234 WP22 / A182 F22",
    sizes: "15NB–400NB, SCH 40–160",
    ibr: "IBR Form III-C available",
    apps: "Boiler tubes, superheater headers, petrochemical reactors",
  },
  {
    grade: "Alloy Steel P11 (1.25Cr-0.5Mo)",
    spec: "ASTM A335 P11 / A234 WP11 / A182 F11",
    sizes: "15NB–400NB, SCH 40–160",
    ibr: "IBR Form III-C available",
    apps: "Boiler piping, steam lines, elevated temperature service",
  },
];

const FAQS = [
  {
    q: "Who is the leading duplex steel supplier in Vadodara?",
    a: "Creative Metal Industries is the leading duplex steel supplier in Vadodara, Gujarat. We stock Duplex 2205 (S31803), Super Duplex 2507 (S32750) and Zeron 100 (S32760) pipes, plates, fittings and flanges at our GIDC Makarpura stockyard. Call +91 99982 80619 for immediate availability.",
  },
  {
    q: "What is the difference between Duplex 2205 and Super Duplex 2507?",
    a: "Duplex 2205 (S31803/S32205) has a PREN of ~35 and is suitable for most aggressive chemical and marine environments. Super Duplex 2507 (S32750) has a higher PREN of ~42 with greater corrosion resistance, particularly in chloride-rich and offshore environments. CMI stocks both grades in Vadodara with full ASTM certification.",
  },
  {
    q: "Do you supply Alloy Steel P91 pipes with IBR certification in Gujarat?",
    a: "Yes. We are an authorised IBR supplier in Gujarat. Alloy Steel P91 (ASTM A335 P91) pipes are supplied with IBR Form III-C certification, complete MTC (EN 10204 3.1), NACE compliance and heat/lot traceability. We serve power plants, ultra-supercritical boilers and high-pressure steam systems across Gujarat.",
  },
  {
    q: "What is IBR Form III-C and why does it matter for pipes in Gujarat?",
    a: "IBR (Indian Boiler Regulation) Form III-C is a statutory certification required for all materials used in boilers, pressure vessels and steam lines regulated under India's Boiler Act. Without IBR Form III-C, pipes and fittings cannot be legally used in boiler service. Creative Metal Industries is an authorised IBR material supplier in Gujarat, ensuring full regulatory compliance for your project.",
  },
  {
    q: "What are the applications of Duplex 2205 pipes supplied from Vadodara?",
    a: "Duplex 2205 pipes supplied by CMI from Vadodara are used in: oil & gas pipelines (ONGC, BPCL projects), offshore platforms, desalination plants, chemical processing equipment, fertilizer plant piping (GSFC, GNFC), seawater cooling systems, and heat exchangers requiring superior corrosion resistance over standard austenitic grades.",
  },
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type":"LocalBusiness","@id":"https://www.creativemetalind.com/duplex-steel-supplier-vadodara#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name": "Creative Metal Industries",
      "description": "Duplex steel supplier and IBR certified alloy steel pipe stockist in Vadodara, Gujarat. Duplex 2205, Super Duplex 2507, Alloy Steel P91/P22/P11 with IBR Form III-C.",
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
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creativemetalind.com" },
        { "@type": "ListItem", "position": 2, "name": "Duplex Steel Supplier Vadodara", "item": "https://www.creativemetalind.com/duplex-steel-supplier-vadodara" },
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

export default function DuplexSteelSupplierVadodara() {
  return (
    <>
      <Title>Duplex Steel Supplier Vadodara | IBR Certified Pipes | CMI</Title>
      <Meta property="og:type" content="website" />
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Leading duplex steel supplier in Vadodara — Duplex 2205 pipe, Super Duplex 2507, Alloy Steel P91/P22/P11 with IBR Form III-C. NACE, MTC certified." />
      <Link rel="canonical" href="https://www.creativemetalind.com/duplex-steel-supplier-vadodara" />
      <Meta property="og:title" content="Duplex Steel Supplier Vadodara | P91 Alloy Steel | IBR Certified | CMI" />
      <Meta property="og:description" content="Duplex 2205, Super Duplex 2507, Alloy Steel P91/P22/P11 pipes with IBR Form III-C. NACE, MTC certified. GIDC Makarpura Vadodara. Call +91 99982 80619." />
      <Meta property="og:url" content="https://www.creativemetalind.com/duplex-steel-supplier-vadodara" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Duplex Steel Supplier Vadodara | P91 Alloy Steel | IBR Certified Pipes Gujarat | CMI" />
      <Meta name="twitter:description" content="Leading duplex steel supplier in Vadodara — Duplex 2205, Super Duplex 2507, Alloy Steel P91/P22/P11 pipes with IBR Form III-C. NACE, MTC certified. Call +91 99982 80619." />
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
        <span>Duplex Steel Supplier Vadodara</span>
      </div>

      <main>

        {/* ══ HERO ══ */}
        <section style={{ background: "linear-gradient(135deg,#fff8f0 0%,#fff 60%)", padding: "4rem 1.5rem 3rem", "border-bottom": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "900px", margin: "0 auto" }}>
            <span style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff", "font-size": "0.78rem", "font-weight": "700", padding: "0.3rem 0.85rem", "border-radius": "99px", "letter-spacing": "0.06em", "text-transform": "uppercase", "margin-bottom": "1rem", display: "inline-block" }}>
              🏭 IBR Authorised · Vadodara Gujarat · Since 2012
            </span>
            <h1 style={{ "font-size": "clamp(1.8rem,5vw,3rem)", "font-weight": "800", "line-height": "1.2", "margin-bottom": "1.25rem", color: "#111827" }}>
              Duplex Steel &amp; Alloy Steel Supplier in{" "}
              <span style={{ color: "#E8821A" }}>Vadodara</span> — IBR Certified
            </h1>
            <p style={{ "font-size": "1.1rem", color: "#374151", "max-width": "720px", "line-height": "1.75", "margin-bottom": "2rem" }}>
              Creative Metal Industries supplies <strong>Duplex 2205 (S31803), Super Duplex 2507 (S32750), Zeron 100 (S32760)</strong> and
              {" "}<strong>Alloy Steel P91, P22, P11</strong> pipes, plates, fittings and flanges from Vadodara.
              As a dedicated <strong>Duplex 2205 supplier</strong>, we hold the 2205 stainless steel (and 2507 stainless steel super duplex) grades in ready stock.
              All Alloy Steel pipes supplied with <strong>IBR Form III-C</strong> certification — authorised IBR supplier in Gujarat.
              {" "}Sourced from <strong>Sandvik, Outokumpu, Tubacex, Sumitomo and Vallourec</strong>. Third-party inspection accepted under <strong>DNV, TUV, SGS, BVIS and LRIS</strong> at our GIDC Makarpura facility. MTC (EN 10204 3.1/3.2) and NACE MR-01-75 compliance on every consignment.
            </p>
            <div style={{ display: "flex", gap: "1rem", "flex-wrap": "wrap", "margin-bottom": "2.5rem" }}>
              <a href="/#contact" class="btn btn-primary" style={{ "font-size": "1rem", padding: "0.75rem 1.75rem" }}>Get Instant Quote →</a>
              <a href="tel:+919998280619" class="btn btn-outline" style={{ "font-size": "1rem", padding: "0.75rem 1.75rem" }}>📞 +91 99982 80619</a>
            </div>
            <div style={{ display: "flex", gap: "2rem", "flex-wrap": "wrap" }}>
              {[
                { num: "4",      label: "Duplex Grades Stocked" },
                { num: "IBR ✓",  label: "Form III-C Certified" },
                { num: "NACE ✓", label: "MR-01-75 Compliant" },
                { num: "15+ Yr", label: "Serving Gujarat" },
              ].map(s => (
                <div>
                  <div style={{ "font-size": "1.6rem", "font-weight": "800", color: "#E8821A" }}>{s.num}</div>
                  <div style={{ "font-size": "0.82rem", color: "#6b7280", "font-weight": "600" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SECTION 1: DUPLEX ══ */}
        <section style={{ padding: "4rem 1.5rem", background: "#fff" }}>
          <div style={{ "max-width": "960px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.3rem,3vw,1.8rem)", "font-weight": "800", "margin-bottom": "0.5rem", color: "#111827" }}>
              Duplex &amp; Super Duplex Steel — Grades &amp; Specifications
            </h2>
            <p style={{ color: "#6b7280", "margin-bottom": "2rem", "font-size": "0.95rem" }}>
              As a trusted <strong>Duplex 2205 pipe</strong> and <strong>2205 pipe supplier</strong>, we hold ready stock of Duplex 2205 (S31803/S32205) in seamless and welded form to ASTM A790, alongside Super Duplex 2507 and Zeron 100. All duplex grades are available as pipes, plates, fittings and flanges with ASTM MTC — dispatched from Vadodara across Gujarat and India.
            </p>
            <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(280px,1fr))", gap: "1.25rem" }}>
              {DUPLEX_GRADES.map(g => (
                <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "12px", padding: "1.5rem" }}>
                  <div style={{ "font-weight": "800", color: "#E8821A", "margin-bottom": "0.5rem", "font-size": "0.95rem" }}>{g.grade}</div>
                  <div style={{ "font-size": "0.82rem", color: "#374151", "margin-bottom": "0.35rem" }}>
                    <strong>Spec:</strong> {g.spec}
                  </div>
                  <div style={{ "font-size": "0.82rem", color: "#374151", "margin-bottom": "0.35rem" }}>
                    <strong>Sizes:</strong> {g.sizes}
                  </div>
                  <div style={{ "font-size": "0.8rem", color: "#6b7280", "font-style": "italic" }}>
                    <strong>Applications:</strong> {g.apps}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SECTION 2: ALLOY STEEL ══ */}
        <section style={{ padding: "4rem 1.5rem", background: "#f9fafb", "border-top": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "960px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.3rem,3vw,1.8rem)", "font-weight": "800", "margin-bottom": "0.5rem", color: "#111827" }}>
              Alloy Steel P91 / P22 / P11 Pipes — IBR Certified, Gujarat
            </h2>
            <p style={{ color: "#6b7280", "margin-bottom": "2rem", "font-size": "0.95rem" }}>
              All alloy steel pipes supplied with IBR Form III-C. ASTM A335 seamless pipes, SCH 40 to XXS, 15NB to 400NB.
            </p>
            <div style={{ overflow: "auto", border: "1px solid #e5e7eb", "border-radius": "12px" }}>
              <table style={{ width: "100%", "border-collapse": "collapse", "font-size": "0.88rem", "min-width": "560px" }}>
                <thead>
                  <tr style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff" }}>
                    <th style={{ padding: "0.75rem 1rem", "text-align": "left", "font-weight": "700" }}>Grade</th>
                    <th style={{ padding: "0.75rem 1rem", "text-align": "left", "font-weight": "700" }}>Standard</th>
                    <th style={{ padding: "0.75rem 1rem", "text-align": "left", "font-weight": "700" }}>Sizes</th>
                    <th style={{ padding: "0.75rem 1rem", "text-align": "left", "font-weight": "700" }}>IBR</th>
                  </tr>
                </thead>
                <tbody>
                  {ALLOY_GRADES.map((g, i) => (
                    <tr style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                      <td style={{ padding: "0.65rem 1rem", "font-weight": "700", color: "#111827" }}>{g.grade}</td>
                      <td style={{ padding: "0.65rem 1rem", color: "#374151", "font-size": "0.82rem" }}>{g.spec}</td>
                      <td style={{ padding: "0.65rem 1rem", color: "#374151", "font-size": "0.82rem" }}>{g.sizes}</td>
                      <td style={{ padding: "0.65rem 1rem" }}>
                        <span style={{ background: "#D1FAE5", color: "#065F46", border: "1px solid #34d399", "border-radius": "99px", padding: "0.15rem 0.6rem", "font-size": "0.75rem", "font-weight": "700" }}>
                          {g.ibr}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ "margin-top": "1.75rem", background: "#fff8f0", border: "1px solid #fde8cc", "border-radius": "10px", padding: "1.25rem 1.5rem" }}>
              <p style={{ "font-size": "0.9rem", color: "#374151", "line-height": "1.7", margin: 0 }}>
                <strong>Applications:</strong> Ultra-supercritical power plants, NTPC / GSECL thermal stations, petrochemical hydrocracker units,
                refinery fired heaters, high-pressure steam headers and boiler superheaters operating at temperatures above 550°C.
              </p>
            </div>
          </div>
        </section>

        {/* ══ SECTION 3: IBR EXPLANATION ══ */}
        <section style={{ padding: "4rem 1.5rem", background: "#fff", "border-top": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "860px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.3rem,3vw,1.8rem)", "font-weight": "800", "margin-bottom": "1.5rem", color: "#111827" }}>
              IBR Certification — What Is IBR Form III-C &amp; Why It Matters
            </h2>
            <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
              {[
                {
                  title: "What is IBR Form III-C?",
                  body: "IBR Form III-C is a statutory material test certificate issued under the Indian Boiler Regulations (IBR), 1950. It certifies that the pipe or fitting material meets all the chemical composition, mechanical properties and dimensional requirements for use in boiler, pressure vessel or steam piping service under Indian law.",
                },
                {
                  title: "Why is IBR required in Gujarat?",
                  body: "Any piping or fittings used in boilers, steam lines or pressure vessels operating under the Boiler Act requires IBR certification. Project inspectors, IBR inspecting officers and consultants at Gujarat power plants, fertilizer units and refineries mandate IBR Form III-C for compliance during statutory inspection.",
                },
                {
                  title: "CMI — Authorised IBR Supplier in Gujarat",
                  body: "Creative Metal Industries is an authorised IBR material supplier in Vadodara, Gujarat. We provide P91, P22, P11 and SS seamless pipes with valid IBR Form III-C from recognised mills. Our documentation team ensures full IBR compliance for your project audit trail.",
                },
              ].map(card => (
                <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "12px", padding: "1.5rem" }}>
                  <h3 style={{ "font-size": "0.95rem", "font-weight": "700", color: "#E8821A", "margin-bottom": "0.75rem" }}>{card.title}</h3>
                  <p style={{ "font-size": "0.88rem", color: "#374151", "line-height": "1.7", margin: 0 }}>{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FAQ ══ */}
        <section style={{ padding: "4rem 1.5rem", background: "#f9fafb", "border-top": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "760px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.4rem,3vw,2rem)", "font-weight": "800", "margin-bottom": "2rem", color: "#111827" }}>
              Frequently Asked Questions — Duplex Steel &amp; IBR Pipes in Vadodara
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
              Need Duplex or P91 Alloy Steel Pipes in Gujarat?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.9)", "margin-bottom": "2rem", "font-size": "1rem", "line-height": "1.65" }}>
              Contact us for price, availability and IBR documentation. Same-day quotes from GIDC Makarpura, Vadodara.
            </p>
            <div style={{ display: "flex", gap: "1rem", "justify-content": "center", "flex-wrap": "wrap" }}>
              <a href="tel:+919998280619" style={{ background: "#fff", color: "#E8821A", "font-weight": "800", "font-size": "1rem", padding: "0.85rem 2rem", "border-radius": "8px", "text-decoration": "none", "white-space": "nowrap" }}>
                📞 +91 99982 80619
              </a>
              <a href="https://wa.me/919998280619?text=Hi%2C+I+need+duplex+steel+or+P91+pipes+in+Gujarat" target="_blank" rel="noopener noreferrer" style={{ background: "#25D366", color: "#fff", "font-weight": "800", "font-size": "1rem", padding: "0.85rem 2rem", "border-radius": "8px", "text-decoration": "none", "white-space": "nowrap" }}>
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
            <h2 style={{ "font-size": "1.2rem", "font-weight": "700", color: "#111827", "margin-bottom": "1.25rem" }}>Explore Exotic Alloys &amp; Special Steel</h2>
            <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(220px,1fr))", gap: "0.75rem" }}>
              {[
                { href: "/inconel-pipe-supplier-india", label: "Inconel Pipe Supplier India" },
                { href: "/duplex-2205-plate-supplier-india", label: "Duplex 2205 Plate Supplier India" },
                { href: "/super-duplex-2507-pipe-supplier", label: "Super Duplex 2507 Pipe Supplier" },
                { href: "/hastelloy-pipe-supplier-india", label: "Hastelloy C-276 Pipe" },
                { href: "/incoloy-800-pipe-supplier-india", label: "Incoloy 800/825 Pipe" },
                { href: "/titanium-pipe-supplier-india", label: "Titanium Pipe Supplier India" },
                { href: "/ss-904l-pipe-supplier-india", label: "SS 904L Pipe Supplier India" },
                { href: "/alloy-steel-pipe-supplier-india", label: "Alloy Steel Pipe P91/P22" },
              ].map(l => (
                <a href={l.href} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "8px", padding: "0.75rem 1rem", "font-size": "0.85rem", "font-weight": "600", color: "#E8821A", "text-decoration": "none" }}>{l.label} →</a>
              ))}
            </div>
          </div>
        </section>

      
        <RelatedPages currentPath="/duplex-steel-supplier-vadodara" />
      </main>

      {/* ── Footer ── */}
      <footer style={{ background: "#111827", color: "#9ca3af", padding: "2rem 1.5rem", "text-align": "center", "font-size": "0.82rem" }}>
        <p style={{ "margin-bottom": "0.5rem" }}>
          <strong style={{ color: "#fff" }}>Creative Metal Industries</strong> — Duplex Steel &amp; IBR Certified Pipe Supplier Vadodara, Gujarat
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
