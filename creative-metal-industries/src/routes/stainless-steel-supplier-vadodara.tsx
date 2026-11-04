/**
 * /stainless-steel-supplier-vadodara
 * SEO landing page for local stainless steel supplier intent in Vadodara and the broader SS product range.
 */

import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";
const GRADES = [
  { grade: "SS 304 / 304L", forms: "Pipe, plate, sheet, fittings, flanges and bars", spec: "Confirm the product-form standard and exact grade", details: "Product form, grade, dimensions, quantity and required documents" },
  { grade: "SS 316 / 316L", forms: "Pipe, plate, sheet, fittings, flanges and bars", spec: "Confirm the product-form standard and exact grade", details: "Product form, grade, dimensions, quantity and required documents" },
  { grade: "SS 317L", forms: "Website-listed enquiry grade", spec: "Confirm the applicable standard for the requested form", details: "Exact designation, product form, dimensions and quantity" },
  { grade: "SS 321", forms: "Website-listed enquiry grade", spec: "Confirm the applicable standard for the requested form", details: "Exact designation, product form, dimensions and quantity" },
  { grade: "SS 310S", forms: "Website-listed enquiry grade", spec: "Confirm the applicable standard for the requested form", details: "Grade, product form, dimensions and service conditions" },
  { grade: "SS 347", forms: "Website-listed enquiry grade", spec: "Confirm the applicable standard for the requested form", details: "Exact designation, product form, dimensions and quantity" },
  { grade: "SS 904L", forms: "Website-listed enquiry grade", spec: "Confirm the applicable standard for the requested form", details: "UNS designation, product form, dimensions and quantity" },
  { grade: "Duplex 2205", forms: "Website-listed enquiry grade", spec: "Confirm grade and product-form standard", details: "UNS designation, form, dimensions and project requirements" },
  { grade: "Super Duplex 2507", forms: "Website-listed enquiry grade", spec: "Confirm grade and product-form standard", details: "UNS designation, form, dimensions and project requirements" },
];

const PRODUCTS = [
  { cat: "SS Pipes", desc: "State seamless or welded, grade, NPS/OD, wall thickness or schedule, length and quantity", std: "Provide the governing pipe standard and edition" },
  { cat: "SS Tubes", desc: "State outside diameter, wall thickness, grade, length, finish and intended tube specification", std: "Do not substitute a pipe standard for a tube requirement" },
  { cat: "SS Plates & Sheets", desc: "State grade, thickness, width, length, finish and quantity", std: "Provide the governing plate or sheet specification" },
  { cat: "SS Fittings", desc: "State fitting type, size, schedule, end connection, grade and quantity", std: "Provide the fitting and dimensional standards" },
  { cat: "SS Flanges", desc: "State flange type, size, pressure class, facing, grade and quantity", std: "Provide the flange standard and project requirements" },
  { cat: "SS Bars & Rounds", desc: "State shape, diameter or across-flats dimension, length, grade and condition", std: "Provide the governing bar specification" },
];

const WHY = [
  { icon: "🧰", head: "Product form", body: "Identify pipe, tube, plate, sheet, fitting, flange or bar so the requirement is routed correctly." },
  { icon: "🔎", head: "Grade and standard", body: "Provide the exact grade designation, governing product standard, edition and project clauses." },
  { icon: "📐", head: "Dimensions and quantity", body: "State all form-specific dimensions, lengths, end or finish requirements and required quantity." },
  { icon: "📍", head: "Vadodara logistics", body: "State the delivery or collection requirement, destination and requested date for quotation review." },
  { icon: "📋", head: "Documentation", body: "List certificate, test and inspection requirements exactly as written in the purchase specification." },
  { icon: "☎️", head: "Order confirmation", body: "Confirm offered scope, availability, lead time, source when required and commercial terms in the quotation." },
];

const FAQS = [
  {
    q: "What stainless steel products can I enquire about in Vadodara?",
    a: "The website accepts enquiries for stainless steel pipes, tubes, plates, sheets, fittings, flanges and bars. Include the product form, grade and specification so the team can confirm whether the requested scope can be offered for the order.",
  },
  {
    q: "Which stainless steel grades are listed?",
    a: "The product information on this website lists SS 304, 304L, 316, 316L, 317L, 321, 310S, 347 and 904L, as well as Duplex 2205 and Super Duplex 2507. Confirm the required grade and current availability with the sales team.",
  },
  {
    q: "Do you supply stainless steel pipes, plates, sheets, fittings and flanges?",
    a: "These stainless steel product forms are listed on the website. For pipes, include seamless or welded type; for all products, include grade, standard, dimensions and quantity so the team can confirm your specific requirement.",
  },
  {
    q: "Where is Creative Metal Industries located?",
    a: "Creative Metal Industries is based in Vadodara, Gujarat. Confirm the current office, visit or collection location by telephone before travelling.",
  },
  {
    q: "How can I request a quotation?",
    a: "Use the enquiry form or call the listed sales contact. Include product form, grade, applicable standard, size, quantity, required documentation and delivery location. Availability, documentation and delivery terms are confirmed for each order.",
  },
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creativemetalind.com" },
        { "@type": "ListItem", "position": 2, "name": "Stainless Steel Supplier in Vadodara", "item": "https://www.creativemetalind.com/stainless-steel-supplier-vadodara" },
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
      <Title>Stainless Steel Supplier in Vadodara | SS 304, 316L Products</Title>
      <Meta property="og:type" content="website" />
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Local stainless steel supplier in Vadodara for pipe, tube, sheet, plate, fitting, flange and bar enquiries. Send the product form, grade, dimensions and quantity." />
      <Link rel="canonical" href="https://www.creativemetalind.com/stainless-steel-supplier-vadodara" />
      <Meta property="og:title" content="Stainless Steel Supplier in Vadodara | Creative Metal Industries" />
      <Meta property="og:description" content="Vadodara-focused stainless steel product enquiries covering pipe, tube, sheet, plate, fitting, flange and bar requirements." />
      <Meta property="og:url" content="https://www.creativemetalind.com/stainless-steel-supplier-vadodara" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Stainless Steel Supplier in Vadodara | Creative Metal Industries" />
      <Meta name="twitter:description" content="Vadodara-focused stainless steel product enquiries covering pipe, tube, sheet, plate, fitting, flange and bar requirements." />
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
        <span>Stainless Steel Supplier in Vadodara</span>
      </div>

      <main>

        {/* ══ HERO ══ */}
        <section style={{ background: "linear-gradient(135deg,#fff8f0 0%,#fff 60%)", padding: "4rem 1.5rem 3rem", "border-bottom": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "900px", margin: "0 auto" }}>
            <span style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff", "font-size": "0.78rem", "font-weight": "700", padding: "0.3rem 0.85rem", "border-radius": "99px", "letter-spacing": "0.06em", "text-transform": "uppercase", "margin-bottom": "1rem", display: "inline-block" }}>
              🏭 Vadodara · Gujarat
            </span>
            <h1 style={{ "font-size": "clamp(1.8rem,5vw,3rem)", "font-weight": "800", "line-height": "1.2", "margin-bottom": "1.25rem", color: "#111827" }}>
              Stainless Steel Supplier in Vadodara
            </h1>
            <p style={{ "font-size": "1.1rem", color: "#374151", "max-width": "720px", "line-height": "1.75", "margin-bottom": "2rem" }}>
              This page serves local stainless-steel product enquiries in Vadodara, Gujarat, across pipe, tube, sheet, plate, fitting, flange and bar forms. It is a location and multi-product page—not the national technical landing page for SS pipe. For pipe-specific types, dimensions and RFQ guidance, visit the <a href="/ss-pipe-supplier" style={{color:"#E8821A","font-weight":"600"}}>national SS Pipe Supplier in India page</a>. Send the required product form, grade, specification, dimensions, quantity and delivery location for order-specific review.
            </p>
            <div style={{ display: "flex", gap: "1rem", "flex-wrap": "wrap", "margin-bottom": "2.5rem" }}>
              <a href="/#contact" class="btn btn-primary" style={{ "font-size": "1rem", padding: "0.75rem 1.75rem" }}>Request a Quote →</a>
              <a href="tel:+919998280619" class="btn btn-outline" style={{ "font-size": "1rem", padding: "0.75rem 1.75rem" }}>📞 +91 99982 80619</a>
            </div>
            <div style={{ display: "flex", gap: "2rem", "flex-wrap": "wrap" }}>
              {[
                { num: "Vadodara", label: "Gujarat location" },

                { num: "Pipes to bars", label: "Product forms listed" },
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
              Stainless Steel Grades and Listed Specifications
            </h2>
            <p style={{ color: "#6b7280", "margin-bottom": "2rem", "font-size": "0.95rem" }}>
              These are website-listed enquiry grades and product forms, not a stock list. Provide the exact product-form standard, designation, dimensions, quantity and documentation requirements for order-specific confirmation.
            </p>
            <div style={{ overflow: "auto", border: "1px solid #e5e7eb", "border-radius": "12px" }}>
              <table style={{ width: "100%", "border-collapse": "collapse", "font-size": "0.88rem", "min-width": "600px" }}>
                <thead>
                  <tr style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff" }}>
                    <th style={{ padding: "0.75rem 1rem", "text-align": "left", "font-weight": "700" }}>Grade</th>
                    <th style={{ padding: "0.75rem 1rem", "text-align": "left", "font-weight": "700" }}>Product Forms</th>
                    <th style={{ padding: "0.75rem 1rem", "text-align": "left", "font-weight": "700" }}>Standard</th>
                    <th style={{ padding: "0.75rem 1rem", "text-align": "left", "font-weight": "700" }}>Information to Specify</th>
                  </tr>
                </thead>
                <tbody>
                  {GRADES.map((g, i) => (
                    <tr style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                      <td style={{ padding: "0.65rem 1rem", "font-weight": "700", color: "#111827", "white-space": "nowrap" }}>{g.grade}</td>
                      <td style={{ padding: "0.65rem 1rem", color: "#374151", "font-size": "0.82rem" }}>{g.forms}</td>
                      <td style={{ padding: "0.65rem 1rem", color: "#374151", "font-size": "0.8rem" }}>{g.spec}</td>
                      <td style={{ padding: "0.65rem 1rem", color: "#374151", "font-size": "0.8rem" }}>{g.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ "font-size": "0.8rem", color: "#9ca3af", "margin-top": "0.75rem" }}>
              Material test certificates and additional documentation are subject to the specific product and order. Confirm requirements with the sales team.
            </p>
          </div>
        </section>

        {/* ══ PIPE AND TUBE RANGE ══ */}
        <section style={{ padding: "4rem 1.5rem", background: "#fff", "border-top": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "960px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.4rem,3vw,2rem)", "font-weight": "800", "margin-bottom": "1rem", color: "#111827" }}>
              Stainless Steel Pipes and Tubes
            </h2>
            <p style={{ "font-size": "1rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1.5rem" }}>
              The listed stainless-steel range includes seamless and welded pipes, as well as tubes. Product standards, grades, dimensions and documentation vary by requirement; provide the details from your project specification for an order-specific availability check.
            </p>
            <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(240px,1fr))", gap: "1rem", "margin-bottom": "1.5rem" }}>
              {[
                { type: "Seamless pipe", detail: "Specify grade, applicable standard, nominal size, schedule or wall thickness, length and quantity." },
                { type: "Welded pipe", detail: "State the required manufacturing type and project specification; confirm dimensions and availability for the order." },
                { type: "Stainless-steel tubes", detail: "Include outside diameter, wall thickness, grade, standard, length and application requirements." },
              ].map(item => (
                <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "10px", padding: "1.25rem" }}>
                  <h3 style={{ "font-size": "1rem", "font-weight": "700", color: "#111827", "margin-bottom": "0.5rem" }}>{item.type}</h3>
                  <p style={{ "font-size": "0.88rem", color: "#4b5563", "line-height": "1.65", margin: 0 }}>{item.detail}</p>
                </div>
              ))}
            </div>
            <a href="/ss-pipe-supplier" style={{ color: "#E8821A", "font-weight": "700", "text-decoration": "none" }}>
              View SS pipe specifications and request a pipe quotation →
            </a>
          </div>
        </section>

        {/* ══ PRODUCT CATEGORIES ══ */}
        <section style={{ padding: "4rem 1.5rem", background: "#f9fafb", "border-top": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "960px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.4rem,3vw,2rem)", "font-weight": "800", "margin-bottom": "0.5rem", color: "#111827" }}>
              Stainless Steel Product Categories
            </h2>
            <p style={{ color: "#6b7280", "margin-bottom": "2rem", "font-size": "0.95rem" }}>
              Explore the stainless steel product forms listed by Creative Metal Industries. Confirm grade-specific scope, dimensions and availability for your requirement.
            </p>
            <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(280px,1fr))", gap: "1.1rem" }}>
              {PRODUCTS.map(p => (
                <div style={{ background: "#fff", border: "1px solid #e5e7eb", "border-radius": "10px", padding: "1.4rem", "box-shadow": "0 1px 4px rgba(0,0,0,0.04)" }}>
                  <div style={{ "font-weight": "800", color: "#111827", "margin-bottom": "0.4rem", "font-size": "0.95rem" }}>{p.cat}</div>
                  <div style={{ "font-size": "0.85rem", color: "#374151", "margin-bottom": "0.5rem", "line-height": "1.55" }}>{p.desc}</div>
                  <div style={{ "font-size": "0.78rem", color: "#E8821A", "font-weight": "700" }}>{p.std}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ APPLICATIONS ══ */}
        <section style={{ padding: "3rem 1.5rem", background: "#fff", "border-top": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "960px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.4rem,3vw,2rem)", "font-weight": "800", "margin-bottom": "0.75rem", color: "#111827" }}>
              Stainless Steel Applications
            </h2>
            <p style={{ "font-size": "0.95rem", color: "#4b5563", "line-height": "1.75", margin: 0 }}>
              Stainless steel pipes, tubes, plates, sheets, fittings, flanges and bars are specified across process, food, pharmaceutical, water-treatment, power and fabrication projects. Confirm material suitability against the service conditions, design code and project specification.
            </p>
          </div>
        </section>

        {/* ══ WHY CMI ══ */}
        <section style={{ padding: "4rem 1.5rem", background: "#fff", "border-top": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "960px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.4rem,3vw,2rem)", "font-weight": "800", "margin-bottom": "0.5rem", color: "#111827", "text-align": "center" }}>
              Information to Include in a Vadodara Stainless Steel RFQ
            </h2>
            <p style={{ color: "#6b7280", "margin-bottom": "2.5rem", "text-align": "center", "font-size": "0.95rem" }}>
              Complete product and logistics details help distinguish a local multi-product enquiry from a national pipe-only requirement.
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
              Need Stainless Steel Products in Vadodara?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.9)", "margin-bottom": "2rem", "font-size": "1rem", "line-height": "1.65" }}>
              Contact Creative Metal Industries with your product specification, quantity and delivery location to request pricing and confirm availability.
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
              Confirm the relevant office or collection location and timing with the team before visiting.
            </p>
          </div>
        </section>

        {/* ── Internal Links — Topic Cluster ── */}
        <section style={{ padding: "3rem 1.5rem", background: "#fff", "border-top": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "900px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "1.2rem", "font-weight": "700", color: "#111827", "margin-bottom": "1.25rem" }}>Explore Our Stainless Steel Product Range</h2>
            <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(220px,1fr))", gap: "0.75rem" }}>
              {[
                { href: "/ss-pipe-supplier", label: "National SS Pipe Supplier — Seamless & Welded" },
                { href: "/ss-seamless-pipe-supplier-india", label: "SS Seamless Pipe Supplier India" },
                { href: "/ss-304-316l-pipe-supplier-india", label: "SS 304 316L Pipe India" },
                { href: "/ss-sheet-supplier-vadodara", label: "SS Sheet Supplier Vadodara" },
                { href: "/ss-310-pipe-supplier-india", label: "SS 310 Pipe Supplier India" },
                { href: "/ss-321-pipe-supplier-india", label: "SS 321 Pipe Supplier India" },
                { href: "/ss-347-pipe-supplier-india", label: "SS 347 Pipe Supplier India" },
                { href: "/ss-410-pipe-supplier-india", label: "SS 410 Pipe Supplier India" },
                { href: "/ss-430-sheet-supplier-india", label: "SS 430 Sheet Supplier India" },
                { href: "/ss-904l-pipe-supplier-india", label: "SS 904L Pipe Supplier India" },
              ].map(l => (
                <a href={l.href} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "8px", padding: "0.75rem 1rem", "font-size": "0.85rem", "font-weight": "600", color: "#E8821A", "text-decoration": "none" }}>{l.label} →</a>
              ))}
            </div>
          </div>
        </section>

        <RelatedPages currentPath="/stainless-steel-supplier-vadodara" />
      </main>

      {/* ── Footer ── */}
      <footer style={{ background: "#111827", color: "#9ca3af", padding: "2rem 1.5rem", "text-align": "center", "font-size": "0.82rem" }}>
        <p style={{ "margin-bottom": "0.5rem" }}>
          <strong style={{ color: "#fff" }}>Creative Metal Industries</strong> — Stainless Steel Supplier in Vadodara, Gujarat
        </p>
        <p style={{ margin: 0 }}>
          Vadodara, Gujarat — confirm the current visit or collection location before travelling &nbsp;|&nbsp;{" "}
          <a href="tel:+919998280619" style={{ color: "#E8821A" }}>+91 99982 80619</a> &nbsp;|&nbsp;{" "}
          <a href="https://www.creativemetalind.com" style={{ color: "#E8821A" }}>creativemetalind.com</a>
        </p>
      </footer>
    </>
  );
}
