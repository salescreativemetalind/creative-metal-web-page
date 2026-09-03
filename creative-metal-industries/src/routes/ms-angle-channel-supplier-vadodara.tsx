/**
 * /ms-angle-channel-supplier-vadodara
 * SEO landing page — "MS angle supplier Vadodara", "MS channel supplier Vadodara", "ISMC channel", "structural steel Vadodara", "ISMB beam Vadodara"
 */

import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const PRODUCTS = [
  { product: "MS Equal Angle", standard: "IS 808 / IS 2062 E250", sizes: "25×25×3 to 200×200×25 mm", weight: "1.1 – 47.0 kg/m", apps: "Building frames, trusses, machine supports", stock: "Ready Stock" },
  { product: "MS Unequal Angle", standard: "IS 808 / IS 2062 E250", sizes: "30×20×3 to 200×150×18 mm", weight: "1.0 – 38.0 kg/m", apps: "Staircase stringers, frames, brackets", stock: "Ready Stock" },
  { product: "ISMC Channel", standard: "IS 808 / IS 2062 E250", sizes: "ISMC 75 to ISMC 400", weight: "7.14 – 61.6 kg/m", apps: "Industrial sheds, PEB structures, crane rails", stock: "Ready Stock" },
  { product: "MS Flat Bar", standard: "IS 1732 / IS 2062 E250", sizes: "20×3 to 200×25 mm", weight: "0.5 – 39.3 kg/m", apps: "Grills, gates, fabrication, machine parts", stock: "Ready Stock" },
  { product: "MS Round Bar", standard: "IS 2062 E250 / EN8 / EN9", sizes: "8 mm to 200 mm dia", weight: "0.4 – 247 kg/m", apps: "Shafts, axles, bolts, general machining", stock: "Ready Stock" },
  { product: "TMT Bar (Fe500D)", standard: "IS 1786 Fe500D", sizes: "8 mm to 32 mm dia", weight: "0.39 – 6.31 kg/m", apps: "RCC columns, beams, slabs, foundations", stock: "Ready Stock" },
];

const SPECS = [
  { label: "Material Grade", value: "IS 2062 E250A / E250B / E250C" },
  { label: "Section Standards", value: "IS 808 (Angle, Channel, Beam sections)" },
  { label: "TMT Standard", value: "IS 1786 Fe500D — BIS certified" },
  { label: "Flat/Round Standard", value: "IS 1732, IS 2062, EN8/EN9" },
  { label: "Lengths Available", value: "6 metre / 12 metre standard, cut-to-length on request" },
  { label: "Dimensional Tolerance", value: "As per IS 808 — weight ±2.5%, length ±50mm" },
  { label: "Testing", value: "Tensile, bend test, impact test (Charpy), re-bend test for TMT" },
  { label: "Surface Finish", value: "Hot-rolled mill finish, black steel (oiled/non-oiled)" },
  { label: "Origin / Mills", value: "SAIL (Bhilai/Bokaro), Vizag Steel, Rourkela, JSW, RINL" },
  { label: "Certification", value: "ISI mark, BIS certification, mill TC (test certificate)" },
  { label: "TMT Brands", value: "TATA Tiscon, SAIL TMT, JSW NeoSteel, Vizag TMT, Shyam TMT" },
  { label: "Price Range", value: "₹55 – ₹75/kg depending on section and grade" },
];

const APPLICATIONS = [
  { title: "Building Construction", desc: "Residential & commercial RCC structures, columns, beams and slabs across Vadodara city and suburbs" },
  { title: "Industrial Sheds & PEB", desc: "Pre-engineered building structures, factory sheds in GIDC Makarpura, Halol, Savli and Waghodia" },
  { title: "Machine Frames & Bases", desc: "Fabricated machine frames, jigs, fixtures and equipment bases for Vadodara manufacturing units" },
  { title: "Road & Bridge Infrastructure", desc: "Gujarat highway projects, bridge girders, road barriers, sign boards and railway infrastructure" },
  { title: "Fabrication Shops", desc: "General fabrication workshops in Vadodara for grills, gates, staircase, platforms and racks" },
  { title: "Godowns & Warehouses", desc: "Warehouse structural frames, mezzanine floors, storage racks across Gujarat industrial estates" },
];

const WHY_BUY = [
  { title: "Located in Vadodara — Same Day Pickup", desc: "Walk in to our F-3 Loha Bhavan, Lakkadpitha Road stockyard. Pick up material same-day without waiting for transport from Ahmedabad or Mumbai." },
  { title: "Full Structural Range Under One Roof", desc: "Angle, Channel, Beam (ISMB/ISMC), Flat, Round, TMT — all structural sections available from single source. No need to run to multiple dealers." },
  { title: "Cut-to-Length Available", desc: "We offer cutting facility on-site. Get your angles, channels and flats cut to exact length for your project — saves time and reduces wastage." },
  { title: "Competitive Rates vs Ahmedabad Dealers", desc: "Direct sourcing from SAIL, Vizag and JSW means better rates than Ahmedabad brokers. Save ₹2-5/kg compared to trading desks." },
  { title: "ISI Marked — BIS Certified Material Only", desc: "Every section we sell carries ISI mark and BIS certification. No secondary or defective material. Full mill TC provided on request." },
  { title: "Construction + Industrial Both Served", desc: "Whether you need TMT for your house construction or ISMC for a factory shed — we supply both residential builders and industrial fabricators in Vadodara." },
];

const FAQS = [
  {
    q: "What MS angle and channel sizes are available in Vadodara?",
    a: "We stock MS Equal Angle from 25×25×3mm to 200×200×25mm, Unequal Angle from 30×20×3 to 200×150×18mm, and ISMC Channel from ISMC 75 to ISMC 400. All sections are IS 808 compliant with IS 2062 E250 grade material. Walk-in at our Lakkadpitha Road stockyard or call +91 99982 80619.",
  },
  {
    q: "What is the difference between IS 2062 and IS 1786 steel?",
    a: "IS 2062 covers structural steel (angles, channels, beams, flats, plates) with grades E250A/B/C for general construction and fabrication. IS 1786 specifically covers TMT reinforcement bars (Fe415, Fe500, Fe500D) for RCC construction. Both are BIS certified — we stock both standards at CMI Vadodara.",
  },
  {
    q: "Do you deliver to GIDC Makarpura and all areas of Vadodara?",
    a: "Yes. We deliver across all Vadodara areas — GIDC Makarpura, GIDC Halol, Waghodia, Savli, Gorwa, Maneja, Karelibaug, Alkapuri, Gotri, Fatehgunj and surrounding Gujarat districts including Anand, Bharuch, Dahod. Same-day delivery within Vadodara city limits.",
  },
  {
    q: "What is the price range for MS structural steel in Vadodara?",
    a: "Current market price for MS structural steel (angle, channel, flat, round) ranges from ₹55 to ₹75 per kg depending on the section, size and grade. TMT bars (Fe500D) are priced separately based on brand. Call +91 99982 80619 for today's live rate.",
  },
  {
    q: "Is there a minimum order quantity (MOQ)?",
    a: "No minimum order for ready stock items. Whether you need 1 piece of ISMC 150 or a full truckload of MS angle — we serve all order sizes. Ideal for small fabricators, construction sites and large industrial projects alike.",
  },
  {
    q: "Which TMT bar brands do you stock?",
    a: "We stock TATA Tiscon, SAIL TMT, JSW NeoSteel, Vizag TMT, Shyam TMT and other BIS-certified Fe500D TMT bars from 8mm to 32mm diameter. All brands carry ISI mark with full mill test certificate. Delivery to your construction site in Vadodara.",
  },
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type":"LocalBusiness","@id":"https://www.creativemetalind.com/ms-angle-channel-supplier-vadodara#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name": "Creative Metal Industries",
      "description": "MS angle supplier Vadodara, MS channel ISMC supplier Gujarat. Structural steel IS 2062, IS 808 sections, TMT bars. Ready stock Lakkadpitha Road, Vadodara.",
      "url": "https://www.creativemetalind.com",
      "telephone": "+919998280619",
      "email": "creativemetalind@gmail.com",
      "foundingDate": "2012",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road, Sultanpura",
        "addressLocality": "Vadodara",
        "addressRegion": "Gujarat",
        "postalCode": "390001",
        "addressCountry": "IN",
      },
      "areaServed": ["Vadodara", "Gujarat", "GIDC Makarpura", "Halol", "Savli", "Waghodia", "Anand", "Bharuch"],
    },
    {
      "@type": "Product",
      "image": "https://www.creativemetalind.com/img/ms-angle.png", "name": "MS Angle & Channel Supplier Vadodara",
      "description": "MS Equal Angle, Unequal Angle, ISMC Channel, MS Flat Bar, MS Round Bar, TMT Bar Fe500D — IS 808, IS 2062 E250, IS 1786. Ready stock Vadodara.",
      "brand": { "@type": "Organization", "name": "Creative Metal Industries" },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "55",
        "highPrice": "75",
        "unitCode": "KGM",
        "availability": "https://schema.org/InStock",
      },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creativemetalind.com" },
        { "@type": "ListItem", "position": 2, "name": "MS Angle & Channel Supplier Vadodara", "item": "https://www.creativemetalind.com/ms-angle-channel-supplier-vadodara" },
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

export default function MSAngleChannelSupplierVadodara() {
  return (
    <>
      <Title>MS Angle &amp; Channel Supplier Vadodara | ISMC | CMI</Title>
      <Meta property="og:type" content="website" />
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="MS angle supplier Vadodara, MS channel ISMC supplier Gujarat. IS 808, IS 2062 E250. Equal angle 25×25 to 200×200, ISMC 75 to 400, TMT Fe500D." />
      <Meta name="keywords" content="MS angle supplier Vadodara, MS channel supplier Vadodara, ISMC channel, structural steel Vadodara, ISMB beam Vadodara, TMT bar supplier Vadodara, MS flat bar Vadodara" />
      <Link rel="canonical" href="https://www.creativemetalind.com/ms-angle-channel-supplier-vadodara" />
      <Meta property="og:title" content="MS Angle &amp; Channel Supplier Vadodara | Structural Steel | CMI" />
      <Meta property="og:description" content="MS angle, ISMC channel, TMT bar, MS flat &amp; round bar supplier in Vadodara. IS 2062 E250, IS 808. Ready stock. ₹55-75/kg. Call +91 99982 80619." />
      <Meta property="og:url" content="https://www.creativemetalind.com/ms-angle-channel-supplier-vadodara" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="MS Angle &amp; Channel Supplier Vadodara | ISMC | Structural Steel | CMI" />
      <Meta name="twitter:description" content="MS angle, ISMC channel, TMT bar, MS flat &amp; round bar supplier in Vadodara. IS 2062 E250, IS 808. Ready stock. ₹55-75/kg. Call +91 99982 80619." />
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
        <span>MS Angle & Channel Supplier Vadodara</span>
      </div>

      <main>

        {/* ══ HERO ══ */}
        <section style={{ background: "linear-gradient(135deg,#fff8f0 0%,#fff 60%)", padding: "4rem 1.5rem 3rem", "border-bottom": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "900px", margin: "0 auto" }}>
            <span style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff", "font-size": "0.78rem", "font-weight": "700", padding: "0.3rem 0.85rem", "border-radius": "99px", "letter-spacing": "0.06em", "text-transform": "uppercase", "margin-bottom": "1rem", display: "inline-block" }}>
              🏗️ Structural Steel · Vadodara · ISI Certified · Since 2012
            </span>
            <h1 style={{ "font-size": "clamp(1.8rem,5vw,3rem)", "font-weight": "800", "line-height": "1.2", "margin-bottom": "1.25rem", color: "#111827" }}>
              MS Angle & Channel Supplier in{" "}
              <span style={{ color: "#E8821A" }}>Vadodara</span>
            </h1>
            <p style={{ "font-size": "1.1rem", color: "#374151", "max-width": "720px", "line-height": "1.75", "margin-bottom": "2rem" }}>
              Creative Metal Industries is your one-stop <strong>structural steel supplier in Vadodara</strong>. We stock <strong>MS Equal & Unequal Angle, ISMC Channel (75–400), MS Flat Bar, MS Round Bar and TMT Bars (Fe500D)</strong> — all compliant with <strong>IS 808, IS 2062 E250 and IS 1786</strong>. Sourced directly from <strong>SAIL, Vizag Steel, Rourkela, JSW</strong>. Walk-in pickup at Lakkadpitha Road or same-day delivery to any Vadodara location. ISI marked, BIS certified — mill test certificate provided.
            </p>
            <div style={{ display: "flex", gap: "1rem", "flex-wrap": "wrap", "margin-bottom": "2.5rem" }}>
              <a href="/#contact" class="btn btn-primary" style={{ "font-size": "1rem", padding: "0.75rem 1.75rem" }}>Get Instant Quote →</a>
              <a href="tel:+919998280619" class="btn btn-outline" style={{ "font-size": "1rem", padding: "0.75rem 1.75rem" }}>📞 +91 99982 80619</a>
            </div>
            <div style={{ display: "flex", gap: "2rem", "flex-wrap": "wrap" }}>
              {[
                { num: "6+", label: "Product Sections Stocked" },
                { num: "ISI ✓", label: "BIS Certified Material" },
                { num: "₹55-75", label: "Per Kg Range" },
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

        {/* ══ PRODUCT TABLE ══ */}
        <section style={{ padding: "4rem 1.5rem", background: "#fff" }}>
          <div style={{ "max-width": "1050px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.3rem,3vw,1.8rem)", "font-weight": "800", "margin-bottom": "0.5rem", color: "#111827" }}>
              MS Structural Steel Products — Available Sizes & Stock
            </h2>
            <p style={{ color: "#6b7280", "margin-bottom": "2rem", "font-size": "0.95rem" }}>
              All products ISI marked with BIS certification. SAIL, Vizag, JSW and Rourkela origin.
            </p>
            <div style={{ overflow: "auto", border: "1px solid #e5e7eb", "border-radius": "12px" }}>
              <table style={{ width: "100%", "border-collapse": "collapse", "font-size": "0.88rem", "min-width": "720px" }}>
                <thead>
                  <tr style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff" }}>
                    <th style={{ padding: "0.75rem 1rem", "text-align": "left", "font-weight": "700" }}>Product</th>
                    <th style={{ padding: "0.75rem 1rem", "text-align": "left", "font-weight": "700" }}>Standard</th>
                    <th style={{ padding: "0.75rem 1rem", "text-align": "left", "font-weight": "700" }}>Sizes Available</th>
                    <th style={{ padding: "0.75rem 1rem", "text-align": "left", "font-weight": "700" }}>Weight Range</th>
                    <th style={{ padding: "0.75rem 1rem", "text-align": "left", "font-weight": "700" }}>Applications</th>
                    <th style={{ padding: "0.75rem 1rem", "text-align": "left", "font-weight": "700" }}>Stock</th>
                  </tr>
                </thead>
                <tbody>
                  {PRODUCTS.map((p, i) => (
                    <tr style={{"background": i % 2 === 0 ? "#fff" : "#f9fafb"}}>
                      <td style={{ padding: "0.65rem 1rem", "font-weight": "700", color: "#111827" }}>{p.product}</td>
                      <td style={{ padding: "0.65rem 1rem", color: "#374151", "font-size": "0.82rem" }}>{p.standard}</td>
                      <td style={{ padding: "0.65rem 1rem", color: "#374151", "font-size": "0.82rem" }}>{p.sizes}</td>
                      <td style={{ padding: "0.65rem 1rem", color: "#374151", "font-size": "0.82rem" }}>{p.weight}</td>
                      <td style={{ padding: "0.65rem 1rem", color: "#374151", "font-size": "0.82rem" }}>{p.apps}</td>
                      <td style={{ padding: "0.65rem 1rem" }}>
                        <span style={{ background: "#D1FAE5", color: "#065F46", border: "1px solid #34d399", "border-radius": "99px", padding: "0.15rem 0.6rem", "font-size": "0.75rem", "font-weight": "700" }}>
                          {p.stock}
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
              Complete details of standards, grades, testing and origin for all structural sections.
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
              Applications — Where Our Structural Steel Is Used in Vadodara
            </h2>
            <p style={{ color: "#6b7280", "margin-bottom": "2rem", "font-size": "0.95rem" }}>
              Serving construction sites, industrial fabricators and infrastructure projects across Vadodara and Gujarat.
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
              Why Buy Structural Steel from Creative Metal Industries, Vadodara?
            </h2>
            <p style={{ color: "#6b7280", "margin-bottom": "2rem", "font-size": "0.95rem" }}>
              Local stock, honest rates, and full product range — here's why Vadodara builders and fabricators trust CMI.
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
              Frequently Asked Questions — MS Angle & Channel Vadodara
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
              Need MS Angle, Channel or TMT Bar in Vadodara?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.9)", "margin-bottom": "2rem", "font-size": "1rem", "line-height": "1.65" }}>
              Call or WhatsApp for today's rate and stock availability. Same-day pickup from Lakkadpitha Road, Vadodara.
            </p>
            <div style={{ display: "flex", gap: "1rem", "justify-content": "center", "flex-wrap": "wrap" }}>
              <a href="tel:+919998280619" style={{ background: "#fff", color: "#E8821A", "font-weight": "800", "font-size": "1rem", padding: "0.85rem 2rem", "border-radius": "8px", "text-decoration": "none", "white-space": "nowrap" }}>
                📞 +91 99982 80619
              </a>
              <a href="https://wa.me/919998280619?text=Hi%2C+I+need+MS+angle+channel+in+Vadodara" target="_blank" rel="noopener noreferrer" style={{ background: "#25D366", color: "#fff", "font-weight": "800", "font-size": "1rem", padding: "0.85rem 2rem", "border-radius": "8px", "text-decoration": "none", "white-space": "nowrap" }}>
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
            <h2 style={{ "font-size": "1.2rem", "font-weight": "700", color: "#111827", "margin-bottom": "1.25rem" }}>Related Structural Steel Products</h2>
            <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(220px,1fr))", gap: "0.75rem" }}>
              {[
                { href: "/ms-beam-ismb-supplier-india", label: "MS Beam ISMB Supplier" },
                { href: "/ms-channel-ismc-supplier-india", label: "MS Channel ISMC India" },
                { href: "/ms-flat-bar-supplier-india", label: "MS Flat Bar Supplier India" },
                { href: "/ms-plate-supplier-india", label: "MS Plate Supplier India" },
                { href: "/tmt-bars-supplier-gujarat", label: "TMT Bars Supplier Gujarat" },
                { href: "/carbon-steel-pipe-fittings-vadodara", label: "CS Pipe & Fittings Vadodara" },
                { href: "/blog/ms-structural-steel-guide", label: "MS Structural Steel Guide" },
                { href: "/stainless-steel-supplier-vadodara", label: "SS Supplier Vadodara" },
              ].map(l => (
                <a href={l.href} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "8px", padding: "0.75rem 1rem", "font-size": "0.85rem", "font-weight": "600", color: "#E8821A", "text-decoration": "none" }}>{l.label} →</a>
              ))}
            </div>
          </div>
        </section>

        <RelatedPages currentPath="/ms-angle-channel-supplier-vadodara" />
      </main>

      {/* ── Footer ── */}
      <footer style={{ background: "#111827", color: "#9ca3af", padding: "2rem 1.5rem", "text-align": "center", "font-size": "0.82rem" }}>
        <p style={{ "margin-bottom": "0.5rem" }}>
          <strong style={{ color: "#fff" }}>Creative Metal Industries</strong> — MS Angle & Channel Supplier Vadodara, Gujarat
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
