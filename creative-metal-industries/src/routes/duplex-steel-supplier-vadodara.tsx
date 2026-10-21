/**
 * /duplex-steel-supplier-vadodara
 * SEO landing page — "duplex steel supplier Vadodara", "duplex 2205 pipe supplier"
 */

import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const DUPLEX_GRADE_EXAMPLES = [
  "Duplex 2205 (S31803/S32205)",
  "Super Duplex 2507 (S32750)",
  "Zeron 100 (S32760)",
];

const FAQS = [
  {
    q: "What details should I include in a duplex steel enquiry?",
    a: "Share the designation stated in your project documents, product form, governing specification, dimensions, quantity, delivery destination and required documents. Confirm any grade equivalence with your project engineer before ordering.",
  },
  {
    q: "What is the difference between Duplex 2205 and Super Duplex 2507?",
    a: "Use the grade and UNS designation stated in the project specification. Grade selection and suitability depend on project requirements; confirm them with the responsible engineer and applicable material documents.",
  },
  {
    q: "Can I request IBR, NACE or MTC documentation?",
    a: "Share the grade or UNS designation, product form, applicable standard, dimensions or schedule, quantity and delivery destination. List any project-specific documentation or compliance requirements, such as IBR, NACE or MTC, so their scope can be confirmed for the specific order.",
  },
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    
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
      <Title>Duplex Steel Supplier in Vadodara | Duplex 2205 &amp; Super Duplex 2507 | CMI</Title>
      <Meta property="og:type" content="website" />
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Enquire about Duplex 2205, Super Duplex 2507 and related duplex steel products in Vadodara. Share grade, product form, standard, dimensions, quantity and documentation needs for order-specific confirmation." />
      <Link rel="canonical" href="https://www.creativemetalind.com/duplex-steel-supplier-vadodara" />
      <Meta property="og:title" content="Duplex Steel Supplier in Vadodara | Duplex 2205 &amp; Super Duplex 2507 | CMI" />
      <Meta property="og:description" content="Enquire about Duplex 2205, Super Duplex 2507 and related duplex steel products in Vadodara. Share grade, product form, standard, dimensions, quantity and documentation needs for order-specific confirmation." />
      <Meta property="og:url" content="https://www.creativemetalind.com/duplex-steel-supplier-vadodara" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Duplex Steel Supplier in Vadodara | Duplex 2205 &amp; Super Duplex 2507 | CMI" />
      <Meta name="twitter:description" content="Enquire about Duplex 2205, Super Duplex 2507 and related duplex steel products in Vadodara. Share grade, product form, standard, dimensions, quantity and documentation needs for order-specific confirmation." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      {/* ── Nav ── */}
      <nav class="duplex-page-nav" style={{ background: "#fff", "border-bottom": "1px solid #e5e7eb", padding: "1rem 1.5rem", display: "flex", "align-items": "center", gap: "1rem" }}>
        <a href="/" style={{ display: "flex", "align-items": "center" }}>
          <img src="/logo_cmi.png" alt="Creative Metal Industries" width="140" height="71" />
        </a>
        <div style={{ flex: 1 }} />
        <a href="tel:+919998280619" class="duplex-page-phone btn btn-outline" style={{ "font-size": "0.85rem", padding: "0.45rem 1rem" }}>📞 +91 99982 80619</a>
        <a href="/#contact" class="duplex-page-quote btn btn-primary" style={{ "font-size": "0.85rem", padding: "0.45rem 1rem" }}>Get a Quote</a>
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
              Duplex &amp; Super Duplex · Vadodara, Gujarat
            </span>
            <h1 style={{ "font-size": "clamp(1.8rem,5vw,3rem)", "font-weight": "800", "line-height": "1.2", "margin-bottom": "1.25rem", color: "#111827" }}>
              Duplex Steel Supplier in <span style={{ color: "#E8821A" }}>Vadodara</span>
            </h1>
            <p style={{ "font-size": "1.1rem", color: "#374151", "max-width": "720px", "line-height": "1.75", "margin-bottom": "2rem" }}>
              For a duplex steel enquiry in Vadodara, share the project-specified grade and designation, product form, governing specification, dimensions, quantity, destination and documentation requirements. Product availability and document scope require confirmation for the specific enquiry.
            </p>
            <div style={{ display: "flex", gap: "1rem", "flex-wrap": "wrap", "margin-bottom": "2.5rem" }}>
              <a href="/#contact" class="btn btn-primary" style={{ "font-size": "1rem", padding: "0.75rem 1.75rem" }}>Get Instant Quote →</a>
              <a href="tel:+919998280619" class="btn btn-outline" style={{ "font-size": "1rem", padding: "0.75rem 1.75rem" }}>📞 +91 99982 80619</a>
            </div>
            <div style={{ display: "flex", gap: "2rem", "flex-wrap": "wrap" }}>
              {[
                { num: "2205",   label: "Duplex grade listed" },
                { num: "2507",   label: "Super Duplex grade listed" },
                { num: "UNS",    label: "Share the exact designation" },
                { num: "RFQ",    label: "Confirm order requirements" },
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
              Duplex &amp; Super Duplex Steel Enquiries
            </h2>
            <p style={{ color: "#6b7280", "margin-bottom": "2rem", "font-size": "0.95rem" }}>
              The designations below are examples retained to help buyers describe a requirement. They do not confirm that CMI currently supplies those grades or product forms. Confirm the grade, product form and applicable specification against project documents; do not infer equivalence between standards for different forms.
            </p>
            <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit,minmax(280px,1fr))", gap: "1.25rem" }}>
              {DUPLEX_GRADE_EXAMPLES.map(grade => (
                <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "12px", padding: "1.5rem" }}>
                  <div style={{ "font-weight": "800", color: "#E8821A", "font-size": "0.95rem" }}>{grade}</div>
                  <p style={{ "font-size": "0.82rem", color: "#6b7280", "margin-top": "0.5rem" }}>Enquiry example only; confirm requested form and availability.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FAQ ══ */}
        <section style={{ padding: "4rem 1.5rem", background: "#f9fafb", "border-top": "1px solid #e5e7eb" }}>
          <div style={{ "max-width": "760px", margin: "0 auto" }}>
            <h2 style={{ "font-size": "clamp(1.4rem,3vw,2rem)", "font-weight": "800", "margin-bottom": "2rem", color: "#111827" }}>
              Duplex Steel Enquiry Questions
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
              Need Duplex or Super Duplex Steel in Gujarat?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.9)", "margin-bottom": "2rem", "font-size": "1rem", "line-height": "1.65" }}>
              Send the grade, product form, dimensions and quantity for an order-specific quotation.
            </p>
            <div style={{ display: "flex", gap: "1rem", "justify-content": "center", "flex-wrap": "wrap" }}>
              <a href="tel:+919998280619" style={{ background: "#fff", color: "#E8821A", "font-weight": "800", "font-size": "1rem", padding: "0.85rem 2rem", "border-radius": "8px", "text-decoration": "none", "white-space": "nowrap" }}>
                📞 +91 99982 80619
              </a>
              <a href="https://wa.me/919998280619?text=Hi%2C+I+need+duplex+or+super+duplex+steel+in+Gujarat" target="_blank" rel="noopener noreferrer" style={{ background: "#25D366", color: "#fff", "font-weight": "800", "font-size": "1rem", padding: "0.85rem 2rem", "border-radius": "8px", "text-decoration": "none", "white-space": "nowrap" }}>
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
          <strong style={{ color: "#fff" }}>Creative Metal Industries</strong> — Duplex Steel Supplier Vadodara, Gujarat
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
