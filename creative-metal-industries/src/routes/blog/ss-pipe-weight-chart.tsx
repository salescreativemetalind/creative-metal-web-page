/**
 * /blog/ss-pipe-weight-chart
 * Target: "SS pipe weight chart ASTM A312 per metre"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../../components/RelatedPages";

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "SS Pipe Weight Chart — ASTM A312 Per Metre", "image": "https://www.creativemetalind.com/og-image.jpg",
  "author": { "@type": "Organization", "name": "Creative Metal Industries" },
  "publisher": { "@type": "Organization", "name": "Creative Metal Industries",
    "logo": { "@type": "ImageObject", "url": "https://www.creativemetalind.com/logo_cmi.png" } },
  "datePublished": "2026-07-23",
  "dateModified": "2026-07-23",
  "url": "https://www.creativemetalind.com/blog/ss-pipe-weight-chart",
  "description": "SS pipe weight chart ASTM A312 — per metre kg, all schedules 5S to XXS. Free download. CMI Vadodara. Call +91 99982 80619."
});

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How much does 2 inch SS 316 SCH 40 pipe weigh per metre?", "acceptedAnswer": { "@type": "Answer", "text": "About 5.54 kg/m. It is calculated from OD 60.3 mm and wall 3.91 mm: (60.3 − 3.91) × 3.91 × 0.02466 × 1.020 (the SS density factor) ≈ 5.54 kg/m. A 6 m random length therefore weighs roughly 33 kg." } },
    { "@type": "Question", "name": "Is SS pipe heavier than carbon steel pipe of the same size?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, by about 2%. Austenitic stainless (304/316) has a density of ~8.0 g/cm³ versus 7.85 for carbon steel. So a size that weighs 5.43 kg/m in carbon steel weighs about 5.54 kg/m in SS 316. Duplex 2205 is actually slightly lighter than CS (7.8 g/cm³)." } },
    { "@type": "Question", "name": "Do 304 and 316 pipe weigh differently?", "acceptedAnswer": { "@type": "Answer", "text": "No, not for practical purposes. SS 304 and 316/316L have essentially the same density (7.9–8.0 g/cm³), so the kg/m figures in this chart apply to both. The difference between them is corrosion resistance and price, not weight." } },
    { "@type": "Question", "name": "What is the formula to calculate SS pipe weight per metre?", "acceptedAnswer": { "@type": "Answer", "text": "Weight (kg/m) = (OD − WT) × WT × 0.02466 × density factor, with OD and WT in mm. Use density factor 1.020 for SS 304/316, 0.994 for Duplex 2205, 1.078 for Inconel 625 and 0.574 for Titanium Gr.2. The 0.02466 constant already includes carbon-steel density." } },
    { "@type": "Question", "name": "Should I order SS pipe on theoretical or actual weight?", "acceptedAnswer": { "@type": "Answer", "text": "For MTO and freight, theoretical (chart) weight is fine. For invoicing, insist on actual weighed weight — ASTM allows +12.5%/−0% on wall thickness, so actual weight can run several percent above theoretical. CMI bills on actual weight with weighbridge tickets on bulk orders." } }
  ]
});

export default function SSPipeWeightChart() {
  return (
    <>
      <Title>SS Pipe Weight Chart A312 | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="SS pipe weight chart ASTM A312 — per metre kg, all schedules 5S to XXS. Free download. CMI Vadodara. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/blog/ss-pipe-weight-chart" />
      <Meta property="og:title" content="SS Pipe Weight Chart A312 | CMI" />
      <Meta property="og:type" content="article" />
      <Meta property="og:description" content="SS pipe weight chart ASTM A312 — per metre kg, all schedules 5S to XXS. Free download. CMI Vadodara. Call +91 99982 80619." />
      <Meta property="og:url" content="https://www.creativemetalind.com/blog/ss-pipe-weight-chart" />
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
        <span>SS Pipe Weight Chart — ASTM A312 Per Metre</span>
      </div>

      <main style={{ "max-width": "800px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <div style={{ "margin-bottom": "2.5rem" }}>
          <span style={{ background: "#FEF3C7", color: "#92400E", padding: "0.25rem 0.7rem", "border-radius": "99px", "font-size": "0.75rem", "font-weight": "700" }}>Reference Chart</span>
          <span style={{ color: "#9ca3af", "font-size": "0.82rem", "margin-left": "0.75rem" }}>July 2026 · 8 min read</span>
          <h1 style={{ "font-size": "clamp(1.8rem,4vw,2.5rem)", "font-weight": "800", color: "#111827", margin: "1rem 0 1.25rem", "line-height": "1.2" }}>
            SS Pipe Weight Chart — ASTM A312 Per Metre
          </h1>
          <p style={{ "font-size": "1.05rem", color: "#374151", "line-height": "1.8" }}>
            This <strong>ss pipe weight chart — astm a312 per metre</strong> provides accurate weight data for engineers, procurement teams, and fabricators. Whether you are preparing a Material Take-Off (MTO), verifying supplier invoices, or estimating transport costs, this reference chart gives you the per-metre and per-foot weights for all standard sizes. Creative Metal Industries, Vadodara stocks all listed sizes — call <strong>+91 99982 80619</strong> for availability and pricing.
          </p>
        </div>

        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>SS Pipe Weight Chart — kg/m by NB &amp; Schedule (ASTM A312 / B36.19M)</h2>
        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>
          Theoretical weight per metre for austenitic stainless steel pipe (density 8.0 g/cm³, i.e. ~2% heavier than the carbon-steel figures you may be used to). Values are calculated from nominal OD and wall thickness per ASME B36.19M and rounded to two decimals. Use these for MTO, freight and costing; verify against weighbridge/actual for invoicing.
        </p>
        <div style={{ overflow: "auto", border: "1px solid #e5e7eb", "border-radius": "10px", "margin-bottom": "1rem" }}>
          {(() => {
            const ROWS = [
              { nb: '1/2"',  od: "21.3",  s10: "0.93", s40: "1.29", s80: "1.65" },
              { nb: '3/4"',  od: "26.7",  s10: "1.19", s40: "1.71", s80: "2.24" },
              { nb: '1"',    od: "33.4",  s10: "1.75", s40: "2.55", s80: "3.39" },
              { nb: '1.1/2"',od: "48.3",  s10: "2.72", s40: "4.11", s80: "5.69" },
              { nb: '2"',    od: "60.3",  s10: "3.43", s40: "5.54", s80: "7.72" },
              { nb: '3"',    od: "88.9",  s10: "6.16", s40: "11.63", s80: "16.07" },
              { nb: '4"',    od: "114.3", s10: "8.77", s40: "16.62", s80: "23.54" },
              { nb: '6"',    od: "168.3", s10: "16.85", s40: "29.30", s80: "44.68" },
              { nb: '8"',    od: "219.1", s10: "22.36", s40: "43.42", s80: "66.36" },
              { nb: '10"',   od: "273.0", s10: "31.30", s40: "62.53", s80: "97.35" },
              { nb: '12"',   od: "323.8", s10: "40.85", s40: "83.29", s80: "132.9" },
            ];
            return (
              <table style={{ width: "100%", "border-collapse": "collapse", "font-size": "0.88rem", "min-width": "560px" }}>
                <thead><tr style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff" }}>
                  <th style={{ padding: "0.6rem 0.9rem", "text-align": "left" }}>NB</th>
                  <th style={{ padding: "0.6rem 0.9rem", "text-align": "left" }}>OD (mm)</th>
                  <th style={{ padding: "0.6rem 0.9rem", "text-align": "left" }}>SCH 10S (kg/m)</th>
                  <th style={{ padding: "0.6rem 0.9rem", "text-align": "left" }}>SCH 40S (kg/m)</th>
                  <th style={{ padding: "0.6rem 0.9rem", "text-align": "left" }}>SCH 80S (kg/m)</th>
                </tr></thead>
                <tbody>
                  {ROWS.map((r, i) => (
                    <tr style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                      <td style={{ padding: "0.5rem 0.9rem", "font-weight": "700" }}>{r.nb}</td>
                      <td style={{ padding: "0.5rem 0.9rem" }}>{r.od}</td>
                      <td style={{ padding: "0.5rem 0.9rem" }}>{r.s10}</td>
                      <td style={{ padding: "0.5rem 0.9rem" }}>{r.s40}</td>
                      <td style={{ padding: "0.5rem 0.9rem" }}>{r.s80}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            );
          })()}
        </div>
        <p style={{ "font-size": "0.82rem", color: "#6b7280", "line-height": "1.7", "margin-bottom": "1rem" }}>
          For 304, 304L, 316, 316L and 321 the figures above are effectively identical (density 7.9–8.0 g/cm³). For SS 310/310S multiply by ~1.005, and for Duplex 2205 multiply by ~0.975 (density 7.8). Need SCH 5S, 160 or XXS, or a size above 12"? Call +91 99982 80619 — we hold the full ASME B36.19M table.
        </p>

        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>The Formula (so you can check any size)</h2>
        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>
          For any hollow pipe: <strong>Weight (kg/m) = (OD − WT) × WT × 0.02466 × density factor</strong>, where OD and WT are in mm. The constant 0.02466 already bakes in carbon-steel density (7.85 g/cm³), so apply a density factor to convert: SS 304/316 = <strong>1.020</strong>, Duplex 2205 = 0.994, SS 310 = 1.005, Inconel 625 = 1.078, Monel 400 = 1.130, Titanium Gr.2 = 0.574, CuNi 70/30 = 1.129.
        </p>
        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>
          Worked example — 2" NB SCH 40S SS 316: OD 60.3, WT 3.91 → (60.3 − 3.91) × 3.91 × 0.02466 × 1.020 ≈ <strong>5.54 kg/m</strong>, matching the table. That is why SS pipe costs a little more to ship than the same CS size: it is genuinely ~2% heavier.
        </p>

        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Using This Chart for MTO &amp; Costing</h2>
        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>
          Multiply kg/m by total run length per size/schedule, sum for total tonnage, then add 5–10% for cutting, bevelling and fit-up wastage. To convert to cost, multiply tonnage by the ₹/kg rate for your grade — see our <a href="/blog/ss-304-pipe-price-per-kg" style={{ color: "#E8821A", "font-weight": "600" }}>SS 304 price</a> and <a href="/blog/ss-316l-pipe-price-per-kg" style={{ color: "#E8821A", "font-weight": "600" }}>SS 316L price</a> guides. One caution when comparing quotes: confirm whether a supplier bills on <em>theoretical</em> or <em>actual</em> weight. ASTM allows +12.5%/−0% on wall thickness, so actual weight can sit several percent above theoretical. CMI invoices on actual weighed weight with weighbridge tickets on bulk lots.
        </p>

        {/* Internal Links — weight/size context */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Related Charts &amp; Calculators</h2>
        <ul style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.9", "padding-left": "1.25rem" }}>
          <li><a href="/blog/ss-pipe-size-chart" style={{ color: "#E8821A", "font-weight": "600" }}>SS Pipe Size Chart — OD &amp; wall thickness by schedule</a></li>
          <li><a href="/blog/pipe-nb-to-od-conversion" style={{ color: "#E8821A", "font-weight": "600" }}>NB to OD Conversion Chart</a></li>
          <li><a href="/blog/cs-pipe-weight-chart" style={{ color: "#E8821A", "font-weight": "600" }}>Carbon Steel Pipe Weight Chart (A106)</a></li>
          <li><a href="/blog/duplex-pipe-weight-chart" style={{ color: "#E8821A", "font-weight": "600" }}>Duplex Pipe Weight Chart</a></li>
          <li><a href="/ss-seamless-pipe-supplier-india" style={{ color: "#E8821A", "font-weight": "600" }}>SS Seamless Pipe Supplier — stock &amp; sizes</a></li>
        </ul>

        {/* FAQ Section */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Frequently Asked Questions</h2>
        <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "10px", padding: "1.5rem", "margin-bottom": "2rem" }}>
          <h3 style={{ "font-size": "1rem", "font-weight": "700", color: "#111827", margin: "0 0 0.5rem" }}>How much does 2 inch SS 316 SCH 40 pipe weigh per metre?</h3>
          <p style={{ "font-size": "0.9rem", color: "#374151", "line-height": "1.7", "margin-bottom": "1rem" }}>About 5.54 kg/m — from OD 60.3 mm and wall 3.91 mm: (60.3 − 3.91) × 3.91 × 0.02466 × 1.020 ≈ 5.54 kg/m. A 6 m random length is therefore roughly 33 kg.</p>
          <h3 style={{ "font-size": "1rem", "font-weight": "700", color: "#111827", margin: "1.25rem 0 0.5rem" }}>Is SS pipe heavier than carbon steel pipe of the same size?</h3>
          <p style={{ "font-size": "0.9rem", color: "#374151", "line-height": "1.7", "margin-bottom": "1rem" }}>Yes, by about 2%. Austenitic SS (304/316) is ~8.0 g/cm³ versus 7.85 for carbon steel. Duplex 2205 is actually slightly lighter than CS (7.8 g/cm³).</p>
          <h3 style={{ "font-size": "1rem", "font-weight": "700", color: "#111827", margin: "1.25rem 0 0.5rem" }}>Do 304 and 316 pipe weigh differently?</h3>
          <p style={{ "font-size": "0.9rem", color: "#374151", "line-height": "1.7", "margin-bottom": "1rem" }}>No — 304 and 316/316L have essentially the same density, so the kg/m figures here apply to both. Their difference is corrosion resistance and price, not weight.</p>
          <h3 style={{ "font-size": "1rem", "font-weight": "700", color: "#111827", margin: "1.25rem 0 0.5rem" }}>What is the formula to calculate SS pipe weight per metre?</h3>
          <p style={{ "font-size": "0.9rem", color: "#374151", "line-height": "1.7", "margin-bottom": "1rem" }}>Weight (kg/m) = (OD − WT) × WT × 0.02466 × density factor (OD, WT in mm). Use 1.020 for SS 304/316, 0.994 for Duplex 2205, 1.078 for Inconel 625, 0.574 for Titanium Gr.2.</p>
          <h3 style={{ "font-size": "1rem", "font-weight": "700", color: "#111827", margin: "1.25rem 0 0.5rem" }}>Should I order SS pipe on theoretical or actual weight?</h3>
          <p style={{ "font-size": "0.9rem", color: "#374151", "line-height": "1.7", "margin-bottom": "0" }}>Theoretical (chart) weight is fine for MTO and freight; for invoicing insist on actual weighed weight, since ASTM allows +12.5%/−0% on wall so actual can run several percent higher. CMI bills on actual weight with weighbridge tickets on bulk orders.</p>
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
      
        <RelatedPages currentPath="/blog/ss-pipe-weight-chart" />
      </main>
    </>
  );
}
