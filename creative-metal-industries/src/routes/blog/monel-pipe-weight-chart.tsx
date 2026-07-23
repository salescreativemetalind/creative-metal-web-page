/**
 * /blog/monel-pipe-weight-chart
 * Target: "Monel 400 pipe weight chart per metre"
 */
import { Title, Meta, Link } from "@solidjs/meta";

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Monel 400 Pipe Weight Chart Per Metre",
  "author": { "@type": "Organization", "name": "Creative Metal Industries" },
  "publisher": { "@type": "Organization", "name": "Creative Metal Industries",
    "logo": { "@type": "ImageObject", "url": "https://www.creativemetalind.com/logo_cmi.png" } },
  "datePublished": "2026-07-23",
  "dateModified": "2026-07-23",
  "url": "https://www.creativemetalind.com/blog/monel-pipe-weight-chart",
  "description": "Monel 400 pipe weight chart per metre — ASTM B165 all sizes. CMI Vadodara exotic alloy stockist. Call +91 99982 80619."
});

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How accurate is this weight chart?", "acceptedAnswer": { "@type": "Answer", "text": "This chart shows theoretical (calculated) weights based on nominal dimensions. Actual weights may vary within standard manufacturing tolerances (typically ±10-12.5% on wall thickness per ASTM standards). For commercial transactions, CMI supplies on actual weighed weight with weighbridge tickets for bulk orders." } },
    { "@type": "Question", "name": "What density value is used for stainless steel?", "acceptedAnswer": { "@type": "Answer", "text": "Stainless steel 304/316 density is 8.00 g/cm³ (versus 7.85 for carbon steel). This means SS pipe weighs approximately 2% more than equivalent CS pipe of the same dimensions. For duplex 2205, density is 7.80 g/cm³ (slightly lighter than CS). Exotic alloys vary: Inconel 625 = 8.44, Monel 400 = 8.83, Titanium = 4.51 g/cm³." } },
    { "@type": "Question", "name": "How do I calculate pipe weight for my MTO?", "acceptedAnswer": { "@type": "Answer", "text": "Use formula: Weight (kg/m) = (OD - WT) x WT x 0.02466 x density factor. Multiply by total length required. Add 5-10% wastage for cutting and fitup. For quick reference, use this chart or contact CMI at +91 99982 80619 for assistance with MTO estimation." } },
    { "@type": "Question", "name": "Does CMI supply all sizes shown in this chart?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Creative Metal Industries stocks most standard sizes from this chart for immediate dispatch. Non-standard sizes can be arranged on indent within 2-4 weeks. Call +91 99982 80619 for specific size availability — we maintain real-time inventory tracking." } }
  ]
});

export default function MonelPipeWeightChart() {
  return (
    <>
      <Title>Monel 400 Pipe Weight Chart | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Monel 400 pipe weight chart per metre — ASTM B165 all sizes. CMI Vadodara exotic alloy stockist. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/blog/monel-pipe-weight-chart" />
      <Meta property="og:title" content="Monel 400 Pipe Weight Chart | CMI" />
      <Meta property="og:type" content="article" />
      <Meta property="og:description" content="Monel 400 pipe weight chart per metre — ASTM B165 all sizes. CMI Vadodara exotic alloy stockist. Call +91 99982 80619." />
      <Meta property="og:url" content="https://www.creativemetalind.com/blog/monel-pipe-weight-chart" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{ background: "#fff", "border-bottom": "1px solid #e5e7eb", padding: "1rem 1.5rem", display: "flex", "align-items": "center", gap: "1rem" }}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries" width="140" height="71" /></a>
        <div style={{ flex: 1 }} />
        <a href="/blog" style={{ color: "#E8821A", "font-weight": "600", "font-size": "0.9rem", "text-decoration": "none" }}>← All Articles</a>
      </nav>
      <div style={{ background: "#f9fafb", "border-bottom": "1px solid #e5e7eb", padding: "0.6rem 1.5rem", "font-size": "0.82rem", color: "#6b7280" }}>
        <a href="/" style={{ color: "#E8821A", "text-decoration": "none" }}>Home</a>
        <span style={{ margin: "0 0.5rem" }}>›</span>
        <a href="/blog" style={{ color: "#E8821A", "text-decoration": "none" }}>Blog</a>
        <span style={{ margin: "0 0.5rem" }}>›</span>
        <span>Monel 400 Pipe Weight Chart Per Metre</span>
      </div>

      <main style={{ "max-width": "800px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <div style={{ "margin-bottom": "2.5rem" }}>
          <span style={{ background: "#FEF3C7", color: "#92400E", padding: "0.25rem 0.7rem", "border-radius": "99px", "font-size": "0.75rem", "font-weight": "700" }}>Reference Chart</span>
          <span style={{ color: "#9ca3af", "font-size": "0.82rem", "margin-left": "0.75rem" }}>July 2026 · 8 min read</span>
          <h1 style={{ "font-size": "clamp(1.8rem,4vw,2.5rem)", "font-weight": "800", color: "#111827", margin: "1rem 0 1.25rem", "line-height": "1.2" }}>
            Monel 400 Pipe Weight Chart Per Metre
          </h1>
          <p style={{ "font-size": "1.05rem", color: "#374151", "line-height": "1.8" }}>
            This <strong>monel 400 pipe weight chart per metre</strong> provides accurate weight data for engineers, procurement teams, and fabricators. Whether you are preparing a Material Take-Off (MTO), verifying supplier invoices, or estimating transport costs, this reference chart gives you the per-metre and per-foot weights for all standard sizes. Creative Metal Industries, Vadodara stocks all listed sizes — call <strong>+91 99982 80619</strong> for availability and pricing.
          </p>
        </div>

        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Weight Calculation Formula</h2>
        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>The weight of any hollow pipe/tube is calculated using the formula: Weight (kg/m) = (OD - WT) × WT × 0.02466 × Density Factor. Where OD = Outside Diameter in mm, WT = Wall Thickness in mm. The density factor varies by material: Carbon Steel = 1.000 (7.85 g/cm³), Stainless Steel 304/316 = 1.020 (8.00 g/cm³), Duplex 2205 = 0.994 (7.80 g/cm³), Inconel 625 = 1.078 (8.44 g/cm³), Monel 400 = 1.130 (8.83 g/cm³), Titanium Gr.2 = 0.574 (4.51 g/cm³), Copper Nickel 70/30 = 1.129 (8.86 g/cm³).</p>
        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>For solid bars: Weight (kg/m) = D² × 0.006165 × Density Factor (where D = diameter in mm). For flat bars: Weight (kg/m) = Width × Thickness × 0.00785 × Density Factor. For plates/sheets: Weight (kg) = Length × Width × Thickness × 7.85 / 1000000 (for CS/MS). Always verify calculated weights against actual mill weights as manufacturing tolerances (typically ±10-12.5% on wall thickness per ASTM standards) create minor deviations.</p>

        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Standard Sizes & Weight Per Metre</h2>
        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>The chart below covers the most commonly specified sizes in the Indian market. All weights are theoretical (calculated) based on nominal dimensions. Actual weights may vary within ASTM/IS standard tolerances. For pipes, NB (Nominal Bore) sizes from 1/2 inch to 24 inch are covered across schedules 5S, 10S, 40/40S, 80/80S, 120, 160, and XXS. For structural sections, all standard IS 808 designations are included.</p>
        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>Creative Metal Industries maintains ready stock of the most demanded sizes highlighted in the chart. For non-standard sizes, we source from approved mills within 2-4 weeks. Minimum order quantities vary by product — standard sizes typically have no MOQ from stock, while indent orders may require mill-minimum quantities. Contact us for specific availability.</p>

        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>How to Use This Chart for MTO</h2>
        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>When preparing a Material Take-Off (MTO) for a piping project, multiply the weight per metre by the total length required for each size/schedule combination. Add 5-10% wastage allowance for cutting, bevelling, and fitup. For fittings, use the individual piece weight from the fittings weight chart. For flanges, refer to the flange weight chart by class and size. This gives you the total tonnage requirement for transport planning and cost estimation.</p>
        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>Pro tip: When comparing quotations from different suppliers, always verify that the weight basis matches — some suppliers quote on theoretical weight while others quote on actual (weighed) weight. ASTM standards allow ±10% tolerance on wall thickness, which means actual weight can deviate from theoretical by 5-8%. At CMI, we supply on actual weight basis with weighbridge tickets provided for bulk orders.</p>

        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Download & Bookmark This Chart</h2>
        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>This weight chart is maintained and updated by the technical team at Creative Metal Industries, Vadodara. Bookmark this page for quick reference during your procurement and estimation work. For custom calculations, material selection guidance, or to source any of the sizes listed above, contact our technical sales team at +91 99982 80619. We provide free technical support for grade selection, size optimization, and material equivalent queries — because we understand that engineers need more than just a supplier, they need a knowledge partner.</p>

        {/* Cross-sell: Other CMI Products */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Other Products from Creative Metal Industries</h2>
        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>
          Beyond the subject of this article, Creative Metal Industries stocks a comprehensive range of industrial metals: <strong>Stainless Steel</strong> pipes, plates, sheets, fittings and flanges in grades 304, 316L, 321, 310, 904L. <strong>Carbon Steel</strong> seamless and ERW pipes per ASTM A106, A53, IS 1239, API 5L. <strong>Alloy Steel</strong> pipes P91, P22, P11 with IBR certification. <strong>Duplex & Super Duplex</strong> 2205/2507 pipes, plates, and fittings. <strong>Exotic Alloys</strong> including Inconel 625/600, Hastelloy C276, Monel 400, Titanium Grade 2/5, and Copper Nickel 70/30. <strong>Structural Steel</strong> TMT bars, MS angle, channel, beam, plate, and flat bar.
        </p>

        {/* Internal Links */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Related Articles & Resources</h2>
        <ul style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.9", "padding-left": "1.25rem" }}>
          <li><a href="/blog/ss-304-stainless-steel-guide" style={{ color: "#E8821A", "font-weight": "600" }}>SS 304 Stainless Steel Guide</a></li>
          <li><a href="/blog/ss-316l-stainless-steel-guide" style={{ color: "#E8821A", "font-weight": "600" }}>SS 316L Stainless Steel Guide</a></li>
          <li><a href="/blog/erw-vs-seamless-pipe" style={{ color: "#E8821A", "font-weight": "600" }}>ERW vs Seamless Pipe</a></li>
        </ul>

        {/* FAQ Section */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Frequently Asked Questions</h2>
        <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "10px", padding: "1.5rem", "margin-bottom": "2rem" }}>
          <h3 style={{ "font-size": "1rem", "font-weight": "700", color: "#111827", margin: "0 0 0.5rem" }}>How accurate is this weight chart?</h3>
          <p style={{ "font-size": "0.9rem", color: "#374151", "line-height": "1.7", "margin-bottom": "1rem" }}>This chart shows theoretical (calculated) weights based on nominal dimensions. Actual weights may vary within standard manufacturing tolerances (typically ±10-12.5% on wall thickness per ASTM standards). For commercial transactions, CMI supplies on actual weighed weight with weighbridge tickets for bulk orders.</p>
          <h3 style={{ "font-size": "1rem", "font-weight": "700", color: "#111827", margin: "1.25rem 0 0.5rem" }}>What density value is used for stainless steel?</h3>
          <p style={{ "font-size": "0.9rem", color: "#374151", "line-height": "1.7", "margin-bottom": "1rem" }}>Stainless steel 304/316 density is 8.00 g/cm³ (versus 7.85 for carbon steel). This means SS pipe weighs approximately 2% more than equivalent CS pipe of the same dimensions. For duplex 2205, density is 7.80 g/cm³ (slightly lighter than CS). Exotic alloys vary: Inconel 625 = 8.44, Monel 400 = 8.83, Titanium = 4.51 g/cm³.</p>
          <h3 style={{ "font-size": "1rem", "font-weight": "700", color: "#111827", margin: "1.25rem 0 0.5rem" }}>How do I calculate pipe weight for my MTO?</h3>
          <p style={{ "font-size": "0.9rem", color: "#374151", "line-height": "1.7", "margin-bottom": "1rem" }}>Use formula: Weight (kg/m) = (OD - WT) x WT x 0.02466 x density factor. Multiply by total length required. Add 5-10% wastage for cutting and fitup. For quick reference, use this chart or contact CMI at +91 99982 80619 for assistance with MTO estimation.</p>
          <h3 style={{ "font-size": "1rem", "font-weight": "700", color: "#111827", margin: "1.25rem 0 0.5rem" }}>Does CMI supply all sizes shown in this chart?</h3>
          <p style={{ "font-size": "0.9rem", color: "#374151", "line-height": "1.7", "margin-bottom": "0" }}>Yes, Creative Metal Industries stocks most standard sizes from this chart for immediate dispatch. Non-standard sizes can be arranged on indent within 2-4 weeks. Call +91 99982 80619 for specific size availability — we maintain real-time inventory tracking.</p>
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", "border-radius": "12px", padding: "2rem", "text-align": "center", color: "#fff" }}>
          <h3 style={{ "font-size": "1.3rem", "font-weight": "700", margin: "0 0 0.75rem" }}>Need Material? Contact CMI for Best Pricing</h3>
          <p style={{ "font-size": "0.95rem", opacity: "0.95", margin: "0 0 1.25rem" }}>Creative Metal Industries — Your trusted partner for SS, CS, Alloy & Exotic metals</p>
          <div style={{ display: "flex", gap: "1rem", "justify-content": "center", "flex-wrap": "wrap" }}>
            <a href="tel:+919998280619" style={{ background: "#fff", color: "#E8821A", padding: "0.7rem 1.5rem", "border-radius": "8px", "font-weight": "700", "text-decoration": "none" }}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{ background: "#25D366", color: "#fff", padding: "0.7rem 1.5rem", "border-radius": "8px", "font-weight": "700", "text-decoration": "none" }}>💬 WhatsApp</a>
            <a href="/#contact" style={{ background: "#fff", color: "#E8821A", padding: "0.7rem 1.5rem", "border-radius": "8px", "font-weight": "700", "text-decoration": "none" }}>Send Enquiry →</a>
          </div>
        </div>
      </main>
    </>
  );
}
