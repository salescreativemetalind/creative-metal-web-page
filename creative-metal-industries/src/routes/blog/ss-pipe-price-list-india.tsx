/**
 * /blog/ss-pipe-price-list-india
 * Target: "SS pipe price list India 2026 all grades"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../../components/RelatedPages";

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "SS Pipe Price List India 2026 — All Grades", "image": "https://www.creativemetalind.com/og-image.jpg",
  "author": { "@type": "Organization", "name": "Creative Metal Industries" },
  "publisher": { "@type": "Organization", "name": "Creative Metal Industries",
    "logo": { "@type": "ImageObject", "url": "https://www.creativemetalind.com/logo_cmi.png" } },
  "datePublished": "2026-07-23",
  "dateModified": "2026-07-23",
  "url": "https://www.creativemetalind.com/blog/ss-pipe-price-list-india",
  "description": "SS pipe price list India 2026 — 304, 316L, 321, 310, 904L rates. Updated July. CMI Vadodara stockist. Call +91 99982 80619."
});

// Indicative SS pipe price bands by grade (₹/kg, seamless, ex-Vadodara, July
// 2026). Reference numbers for procurement planning only — stainless pricing
// tracks LME nickel and molybdenum weekly. The premium column shows how each
// grade sits relative to SS 304, the market baseline.
const GRADE_BANDS = [
  { grade: "SS 304 / 304L",  uns: "S30400 / S30403", seamless: "₹270 – 420", note: "Baseline austenitic grade" },
  { grade: "SS 316 / 316L",  uns: "S31600 / S31603", seamless: "₹340 – 560", note: "+20–40% over 304 (adds Mo)" },
  { grade: "SS 321 / 321H",  uns: "S32100 / S32109", seamless: "₹360 – 600", note: "Ti-stabilised, high-temp" },
  { grade: "SS 310 / 310S",  uns: "S31000 / S31008", seamless: "₹520 – 820", note: "25Cr/20Ni, furnace service" },
  { grade: "SS 347 / 347H",  uns: "S34700 / S34709", seamless: "₹430 – 700", note: "Nb-stabilised" },
  { grade: "SS 904L",        uns: "N08904",          seamless: "₹700 – 1,150", note: "Super-austenitic, high Mo/Ni" },
];

// Approximate welded vs seamless spread and size effect, same market snapshot.
const FORM_BANDS = [
  { form: "Welded (ERW / EFW)", size: '1/2" – 2" NB', factor: "~30–40% below seamless" },
  { form: "Welded (ERW / EFW)", size: '3" – 12" NB',  factor: "~35–50% below seamless" },
  { form: "Seamless (small bore)", size: '1/2" – 2" NB', factor: "Top of grade band" },
  { form: "Seamless (large bore)", size: '3" – 8" NB',   factor: "Lower ₹/kg — fixed cost spread over weight" },
];

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is the SS pipe price per kg in India in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "As of July 2026, indicative seamless bands ex-Vadodara are roughly: SS 304/304L ₹270–420/kg, SS 316/316L ₹340–560/kg, SS 321 ₹360–600/kg, SS 310/310S ₹520–820/kg, SS 347 ₹430–700/kg, and SS 904L ₹700–1,150/kg. Welded pipe runs 30–50% below seamless. These are planning bands only — the rate moves weekly with LME nickel. Call +91 99982 80619 for a firm quote valid 3–7 days." } },
    { "@type": "Question", "name": "Why is SS 316L more expensive than SS 304 in the price list?", "acceptedAnswer": { "@type": "Answer", "text": "SS 316L adds 2–3% molybdenum and more nickel than SS 304 for chloride resistance. Molybdenum is costly, so 316L typically runs 20–40% higher per kg than 304. If your service has no chlorides, 304 gives the same mechanical performance for less — specify 316L only when chlorides are actually present." } },
    { "@type": "Question", "name": "Why does the same grade have such a wide price range?", "acceptedAnswer": { "@type": "Answer", "text": "Within one grade the ₹/kg depends on seamless vs welded (welded is 30–50% cheaper), pipe size (large-bore costs less per kg than small-bore because fixed conversion cost spreads over more weight), quantity (5+ tonne lots earn 3–8%), and the LME nickel level on the day. That is why a single rate card is misleading and we quote per requirement." } },
    { "@type": "Question", "name": "Do the listed prices include GST and delivery?", "acceptedAnswer": { "@type": "Answer", "text": "The indicative bands on this page exclude GST (18%) and freight. A formal CMI quote is all-inclusive — GST, packing and local loading — and is valid 3–7 days. Delivery is same-day within Gujarat and 2–5 days across India, with advance payment for first orders and 15–30 day credit for established accounts." } }
  ]
});

export default function SSPipePriceListIndia() {
  return (
    <>
      <Title>SS Pipe Price List India 2026 | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="SS pipe price list India 2026 — 304, 316L, 321, 310, 904L rates. Updated July. CMI Vadodara stockist. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/blog/ss-pipe-price-list-india" />
      <Meta property="og:title" content="SS Pipe Price List India 2026 | CMI" />
      <Meta property="og:type" content="article" />
      <Meta property="og:description" content="SS pipe price list India 2026 — 304, 316L, 321, 310, 904L rates. Updated July. CMI Vadodara stockist. Call +91 99982 80619." />
      <Meta property="og:url" content="https://www.creativemetalind.com/blog/ss-pipe-price-list-india" />
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
        <span>SS Pipe Price List India 2026 — All Grades</span>
      </div>

      <main style={{ "max-width": "800px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <div style={{ "margin-bottom": "2.5rem" }}>
          <span style={{ background: "#FEF3C7", color: "#92400E", padding: "0.25rem 0.7rem", "border-radius": "99px", "font-size": "0.75rem", "font-weight": "700" }}>Price Guide</span>
          <span style={{ color: "#9ca3af", "font-size": "0.82rem", "margin-left": "0.75rem" }}>July 2026 · 8 min read</span>
          <h1 style={{ "font-size": "clamp(1.8rem,4vw,2.5rem)", "font-weight": "800", color: "#111827", margin: "1rem 0 1.25rem", "line-height": "1.2" }}>
            SS Pipe Price List India 2026 — All Grades
          </h1>
          <p style={{ "font-size": "1.05rem", color: "#374151", "line-height": "1.8" }}>
            This is a working <strong>SS pipe price list for India, updated July 2026</strong> — indicative per-kg bands for the austenitic grades buyers ask for most: 304/304L, 316/316L, 321, 310/310S, 347 and 904L. Stainless pricing is not a fixed rate card; it moves weekly with <strong>LME nickel and molybdenum</strong>, and the number you pay depends on grade, seamless-vs-welded, size and quantity. The tables below give you a realistic range to plan against, and explain how each grade sits relative to SS 304 — the market baseline. For a firm quote on your exact grade, size and quantity, call <strong>+91 99982 80619</strong>.
          </p>
        </div>

        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>SS Pipe Price List by Grade — July 2026 (₹/kg, seamless, ex-Vadodara)</h2>
        <div style={{ overflow: "auto", border: "1px solid #e5e7eb", "border-radius": "10px", "margin-bottom": "1rem" }}>
          <table style={{ width: "100%", "border-collapse": "collapse", "font-size": "0.9rem", "min-width": "560px" }}>
            <thead><tr style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff" }}>
              <th style={{ padding: "0.7rem 1rem", "text-align": "left" }}>Grade</th>
              <th style={{ padding: "0.7rem 1rem", "text-align": "left" }}>UNS</th>
              <th style={{ padding: "0.7rem 1rem", "text-align": "left" }}>Seamless ₹/kg</th>
              <th style={{ padding: "0.7rem 1rem", "text-align": "left" }}>Notes</th>
            </tr></thead>
            <tbody>
              {GRADE_BANDS.map((r, i) => (
                <tr style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                  <td style={{ padding: "0.6rem 1rem", "font-weight": "600" }}>{r.grade}</td>
                  <td style={{ padding: "0.6rem 1rem" }}>{r.uns}</td>
                  <td style={{ padding: "0.6rem 1rem", "font-weight": "700", color: "#b45309" }}>{r.seamless}</td>
                  <td style={{ padding: "0.6rem 1rem" }}>{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ "font-size": "0.82rem", color: "#6b7280", "line-height": "1.7", "margin-bottom": "1rem" }}>
          Bands are indicative for procurement planning, not a firm offer. They exclude GST (18%) and freight, and assume ASTM A312 material with EN 10204 3.1 MTC. Prices revise weekly with LME nickel and molybdenum.
        </p>

        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Welded vs Seamless &amp; the Size Effect</h2>
        <div style={{ overflow: "auto", border: "1px solid #e5e7eb", "border-radius": "10px", "margin-bottom": "1rem" }}>
          <table style={{ width: "100%", "border-collapse": "collapse", "font-size": "0.9rem", "min-width": "520px" }}>
            <thead><tr style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff" }}>
              <th style={{ padding: "0.7rem 1rem", "text-align": "left" }}>Product form</th>
              <th style={{ padding: "0.7rem 1rem", "text-align": "left" }}>Size</th>
              <th style={{ padding: "0.7rem 1rem", "text-align": "left" }}>Effect on ₹/kg</th>
            </tr></thead>
            <tbody>
              {FORM_BANDS.map((r, i) => (
                <tr style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                  <td style={{ padding: "0.6rem 1rem", "font-weight": "600" }}>{r.form}</td>
                  <td style={{ padding: "0.6rem 1rem" }}>{r.size}</td>
                  <td style={{ padding: "0.6rem 1rem" }}>{r.factor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>
          Two levers move a stainless price as much as the grade does. First, <strong>welded (ERW/EFW) runs well below seamless</strong> — rolled from strip and seam-welded rather than pierced and drawn — so for low-pressure water, food and general service, welded is the correct commercial choice. Second, <strong>large-bore costs less per kg than small-bore</strong> because the mill spreads fixed conversion cost over more weight. A 6" seamless line will often quote lower ₹/kg than a 1" line of the same grade.
        </p>

        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>What Moves the SS Pipe Price</h2>
        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>
          <strong>Nickel (LME) is the dominant lever.</strong> Every austenitic grade carries nickel — 8% in 304, 10–14% in 316L, up to ~25% in 904L — so its price tracks the LME nickel contract. As a rule of thumb, roughly every US$1,000/tonne move in nickel shifts SS 304 pipe by about ₹15–20/kg, and higher-nickel grades move more. <strong>Molybdenum</strong> adds a second lever for 316L, 904L and 317L. After the alloy content come import parity, 18% GST, freight and order quantity.
        </p>
        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>
          The most common costing mistake is over-specifying grade. Buyers reach for 316L "to be safe" when 304 would serve — a 20–40% premium for molybdenum they don't need. Specify to the actual service: no chlorides, use 304; chlorides present, 304 is a false economy because it will pit. For high-temperature service, 321/347/310 earn their premium; below that, they are money left on the table. Our <a href="/blog/ss-304-vs-ss-316-difference" style={{ color: "#E8821A", "font-weight": "600" }}>SS 304 vs 316 comparison</a> walks through the decision.
        </p>

        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>How to Buy at the Right Price from CMI</h2>
        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>
          We stock all the grades above — seamless and welded — ready at our GIDC Makarpura, Vadodara yard, sourced mill-direct from Jindal, Ratnamani and Venus with EN 10204 3.1 MTC on every consignment, so there is no broker layer in the price. Send the grade, size, schedule, quantity and delivery location and you'll have a formal quote inclusive of GST, packing and local loading within about 4 hours, valid 3–7 days. Bulk lots (5+ tonnes) earn 3–8%; annual rate contracts lock a formula against a nickel index so extended projects are insulated from weekly swings. Delivery is same-day within Gujarat and 2–5 days across India; payment is advance for first orders, moving to 15–30 day credit for established accounts.
        </p>

        {/* Cross-sell: Other CMI Products */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Other Products from Creative Metal Industries</h2>
        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>
          Beyond the subject of this article, Creative Metal Industries stocks a comprehensive range of industrial metals: <strong>Stainless Steel</strong> pipes, plates, sheets, fittings and flanges in grades 304, 316L, 321, 310, 904L. <strong>Carbon Steel</strong> seamless and ERW pipes per ASTM A106, A53, IS 1239, API 5L. <strong>Alloy Steel</strong> pipes P91, P22, P11 with IBR certification. <strong>Duplex & Super Duplex</strong> 2205/2507 pipes, plates, and fittings. <strong>Exotic Alloys</strong> including Inconel 625/600, Hastelloy C276, Monel 400, Titanium Grade 2/5, and Copper Nickel 70/30. <strong>Structural Steel</strong> TMT bars, MS angle, channel, beam, plate, and flat bar.
        </p>

        {/* Internal Links */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Grade-Wise Price Guides &amp; Resources</h2>
        <ul style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.9", "padding-left": "1.25rem" }}>
          <li><a href="/blog/ss-304-pipe-price-per-kg" style={{ color: "#E8821A", "font-weight": "600" }}>SS 304 Pipe Price Per Kg — detailed bands</a></li>
          <li><a href="/blog/ss-316l-pipe-price-per-kg" style={{ color: "#E8821A", "font-weight": "600" }}>SS 316L Pipe Price Per Kg — the molybdenum premium</a></li>
          <li><a href="/ss-304-316l-pipe-supplier-india" style={{ color: "#E8821A", "font-weight": "600" }}>SS 304 / 316L Pipe Supplier — stock, sizes &amp; specs</a></li>
          <li><a href="/ss-seamless-pipe-supplier-india" style={{ color: "#E8821A", "font-weight": "600" }}>SS Seamless Pipe Supplier India</a></li>
          <li><a href="/blog/ss-pipe-weight-chart" style={{ color: "#E8821A", "font-weight": "600" }}>SS Pipe Weight Chart — convert ₹/kg to ₹/metre</a></li>
          <li><a href="/blog/erw-vs-seamless-pipe" style={{ color: "#E8821A", "font-weight": "600" }}>ERW vs Seamless Pipe — which to specify</a></li>
          <li><a href="/blog/ss-304-vs-ss-316-difference" style={{ color: "#E8821A", "font-weight": "600" }}>SS 304 vs 316 — which grade you actually need</a></li>
        </ul>

        {/* FAQ Section */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Frequently Asked Questions</h2>
        <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "10px", padding: "1.5rem", "margin-bottom": "2rem" }}>
          <h3 style={{ "font-size": "1rem", "font-weight": "700", color: "#111827", margin: "0 0 0.5rem" }}>What is the SS pipe price per kg in India in 2026?</h3>
          <p style={{ "font-size": "0.9rem", color: "#374151", "line-height": "1.7", "margin-bottom": "1rem" }}>As of July 2026, indicative seamless bands ex-Vadodara are roughly: SS 304/304L ₹270–420/kg, SS 316/316L ₹340–560/kg, SS 321 ₹360–600/kg, SS 310/310S ₹520–820/kg, SS 347 ₹430–700/kg, and SS 904L ₹700–1,150/kg. Welded pipe runs 30–50% below seamless. These are planning bands only — the rate moves weekly with LME nickel. Call +91 99982 80619 for a firm quote valid 3–7 days.</p>
          <h3 style={{ "font-size": "1rem", "font-weight": "700", color: "#111827", margin: "1.25rem 0 0.5rem" }}>Why is SS 316L more expensive than SS 304 in the price list?</h3>
          <p style={{ "font-size": "0.9rem", color: "#374151", "line-height": "1.7", "margin-bottom": "1rem" }}>SS 316L adds 2–3% molybdenum and more nickel than SS 304 for chloride resistance. Molybdenum is costly, so 316L typically runs 20–40% higher per kg than 304. If your service has no chlorides, 304 gives the same mechanical performance for less — specify 316L only when chlorides are actually present.</p>
          <h3 style={{ "font-size": "1rem", "font-weight": "700", color: "#111827", margin: "1.25rem 0 0.5rem" }}>Why does the same grade have such a wide price range?</h3>
          <p style={{ "font-size": "0.9rem", color: "#374151", "line-height": "1.7", "margin-bottom": "1rem" }}>Within one grade the ₹/kg depends on seamless vs welded (welded is 30–50% cheaper), pipe size (large-bore costs less per kg than small-bore), quantity (5+ tonne lots earn 3–8%), and the LME nickel level on the day. That is why a single rate card is misleading and we quote per requirement.</p>
          <h3 style={{ "font-size": "1rem", "font-weight": "700", color: "#111827", margin: "1.25rem 0 0.5rem" }}>Do the listed prices include GST and delivery?</h3>
          <p style={{ "font-size": "0.9rem", color: "#374151", "line-height": "1.7", "margin-bottom": "0" }}>The indicative bands on this page exclude GST (18%) and freight. A formal CMI quote is all-inclusive — GST, packing and local loading — and is valid 3–7 days. Delivery is same-day within Gujarat and 2–5 days across India, with advance payment for first orders and 15–30 day credit for established accounts.</p>
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
      
        <RelatedPages currentPath="/blog/ss-pipe-price-list-india" />
      </main>
    </>
  );
}
