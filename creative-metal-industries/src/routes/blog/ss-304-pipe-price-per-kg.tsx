/**
 * /blog/ss-304-pipe-price-per-kg
 * Target: "SS 304 pipe price per kg India today"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../../components/RelatedPages";

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "SS 304 Pipe Price Per Kg in India Today", "image": "https://www.creativemetalind.com/og-image.jpg",
  "author": { "@type": "Organization", "name": "Creative Metal Industries" },
  "publisher": { "@type": "Organization", "name": "Creative Metal Industries",
    "logo": { "@type": "ImageObject", "url": "https://www.creativemetalind.com/logo_cmi.png" } },
  "datePublished": "2026-07-23",
  "dateModified": "2026-07-23",
  "url": "https://www.creativemetalind.com/blog/ss-304-pipe-price-per-kg",
  "description": "SS 304 pipe price per kg India today — seamless & welded rates. Updated July 2026. Get best price from CMI Vadodara. Call +91 99982 80619."
});

// Indicative SS 304 / 304L price bands (₹/kg, ex-Vadodara, July 2026). These are
// direction-of-travel reference numbers for buyers, not a live quote — steel
// pricing moves with LME nickel weekly. Bands reflect seamless vs welded, size
// and the 304L premium.
const PRICE_BANDS = [
  { form: "SS 304 welded pipe (ERW/EFW)", size: '1/2" – 2" NB', band: "₹210 – 260" },
  { form: "SS 304 welded pipe (ERW/EFW)", size: '3" – 8" NB',   band: "₹190 – 235" },
  { form: "SS 304 seamless pipe",         size: '1/2" – 2" NB', band: "₹300 – 420" },
  { form: "SS 304 seamless pipe",         size: '3" – 6" NB',   band: "₹270 – 360" },
  { form: "SS 304L (low-carbon) pipe",    size: "all sizes",    band: "+₹10 – 25 over 304" },
  { form: "SS 304H (high-temp) pipe",     size: "all sizes",    band: "+₹15 – 30 over 304" },
];

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is the SS 304 pipe price per kg in India today?", "acceptedAnswer": { "@type": "Answer", "text": "As of July 2026, SS 304 welded pipe sits roughly in the ₹190–260/kg range and SS 304 seamless pipe roughly ₹270–420/kg ex-Vadodara, depending on size, schedule and quantity. These are indicative bands only — the rate moves weekly with LME nickel. Call +91 99982 80619 for a firm quote valid 3–7 days." } },
    { "@type": "Question", "name": "Why is SS 304 cheaper than SS 316L?", "acceptedAnswer": { "@type": "Answer", "text": "SS 304 contains about 8% nickel and no molybdenum, while SS 316L carries ~10-12% nickel plus 2-3% molybdenum. Molybdenum is expensive and the extra nickel adds cost, so 316L typically runs 20-40% higher per kg than 304. If your service has no chlorides, 304 is the cost-correct choice." } },
    { "@type": "Question", "name": "How much does the 304L or 304H variant add to the price?", "acceptedAnswer": { "@type": "Answer", "text": "The low-carbon 304L (for welded service) and high-temperature 304H usually carry a small premium of roughly ₹10-30/kg over standard 304, because they are lower-volume grades held for specific weld and elevated-temperature applications. For most general piping, standard 304 is adequate and cheaper." } },
    { "@type": "Question", "name": "Does seamless SS 304 pipe cost more than welded?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Seamless SS 304 pipe is produced by piercing and drawing, which is more labour- and scrap-intensive than roll-and-weld production. Seamless typically costs 30-60% more per kg than welded of the same size. For low-pressure and general service, welded (ERW/EFW) SS 304 is far more economical." } },
    { "@type": "Question", "name": "What moves the SS 304 price the most?", "acceptedAnswer": { "@type": "Answer", "text": "Nickel on the London Metal Exchange (LME) is the single biggest driver — roughly every US$1,000/tonne move in nickel shifts SS 304 pipe by about ₹15-20/kg. Chromium ferro-alloy prices, import parity, 18% GST, freight and order quantity account for the rest." } }
  ]
});

export default function SS304PipePricePerKg() {
  return (
    <>
      <Title>SS 304 Pipe Price Per Kg India | CMI 2026</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="SS 304 pipe price per kg India today — seamless & welded rates. Updated July 2026. Get best price from CMI Vadodara. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/blog/ss-304-pipe-price-per-kg" />
      <Meta property="og:title" content="SS 304 Pipe Price Per Kg India | CMI 2026" />
      <Meta property="og:type" content="article" />
      <Meta property="og:description" content="SS 304 pipe price per kg India today — seamless & welded rates. Updated July 2026. Get best price from CMI Vadodara. Call +91 99982 80619." />
      <Meta property="og:url" content="https://www.creativemetalind.com/blog/ss-304-pipe-price-per-kg" />
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
        <span>SS 304 Pipe Price Per Kg in India Today</span>
      </div>

      <main style={{ "max-width": "800px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <div style={{ "margin-bottom": "2.5rem" }}>
          <span style={{ background: "#FEF3C7", color: "#92400E", padding: "0.25rem 0.7rem", "border-radius": "99px", "font-size": "0.75rem", "font-weight": "700" }}>Price Guide</span>
          <span style={{ color: "#9ca3af", "font-size": "0.82rem", "margin-left": "0.75rem" }}>July 2026 · 8 min read</span>
          <h1 style={{ "font-size": "clamp(1.8rem,4vw,2.5rem)", "font-weight": "800", color: "#111827", margin: "1rem 0 1.25rem", "line-height": "1.2" }}>
            SS 304 Pipe Price Per Kg in India Today
          </h1>
          <p style={{ "font-size": "1.05rem", color: "#374151", "line-height": "1.8" }}>
            SS 304 is the most widely used stainless grade in India — 18% chromium, 8% nickel, no molybdenum — which makes it the baseline against which every other stainless price is measured. Because it carries no molybdenum, <strong>SS 304 pipe is the most economical austenitic grade</strong>, typically 20–40% cheaper per kg than 316L. The rate you pay is driven almost entirely by the nickel price on the LME, then by whether the pipe is seamless or welded, its size, and the quantity you buy. Below are the indicative price bands we see in the market as of July 2026, followed by what actually moves them. For a firm rate on your exact size and quantity, call <strong>+91 99982 80619</strong>.
          </p>
        </div>

        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>SS 304 Pipe Price Bands — July 2026 (₹/kg, ex-Vadodara)</h2>
        <div style={{ overflow: "auto", border: "1px solid #e5e7eb", "border-radius": "10px", "margin-bottom": "1rem" }}>
          <table style={{ width: "100%", "border-collapse": "collapse", "font-size": "0.9rem", "min-width": "520px" }}>
            <thead><tr style={{ background: "linear-gradient(135deg,#E8821A,#d85c2a)", color: "#fff" }}>
              <th style={{ padding: "0.7rem 1rem", "text-align": "left" }}>Product form</th>
              <th style={{ padding: "0.7rem 1rem", "text-align": "left" }}>Size</th>
              <th style={{ padding: "0.7rem 1rem", "text-align": "left" }}>Indicative ₹/kg</th>
            </tr></thead>
            <tbody>
              {PRICE_BANDS.map((r, i) => (
                <tr style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                  <td style={{ padding: "0.6rem 1rem", "font-weight": "600" }}>{r.form}</td>
                  <td style={{ padding: "0.6rem 1rem" }}>{r.size}</td>
                  <td style={{ padding: "0.6rem 1rem", "font-weight": "700", color: "#b45309" }}>{r.band}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ "font-size": "0.82rem", color: "#6b7280", "line-height": "1.7", "margin-bottom": "1rem" }}>
          Bands are indicative for procurement planning, not a firm offer. They exclude GST (18%) and freight, and assume ASTM A312 / A312M material with EN 10204 3.1 MTC. Larger sizes cost less per kg than small bore because the mill spreads fixed conversion cost over more weight. Prices revise weekly with nickel.
        </p>

        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>What Actually Moves the SS 304 Price</h2>
        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>
          <strong>Nickel (LME) — the dominant lever.</strong> SS 304 is roughly 8% nickel by weight, so its price tracks the London Metal Exchange nickel contract closely. As a rule of thumb, every US$1,000/tonne move in nickel shifts SS 304 pipe by about ₹15–20/kg. When you see a "304 price rise this week", it is almost always a nickel move, not a mill decision.
        </p>
        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>
          <strong>Seamless vs welded.</strong> Welded (ERW/EFW) SS 304 is the cheapest route because it is rolled from strip and seam-welded. Seamless is pierced and drawn — more scrap, more passes — so it runs 30–60% higher per kg. If your line is low-pressure water, food or general service, welded 304 is the correct commercial choice.
        </p>
        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>
          <strong>Grade variant.</strong> Standard 304 is the volume grade and the cheapest. 304L (low carbon, for welded assemblies that skip post-weld anneal) and 304H (high carbon, for elevated-temperature strength) are held in smaller quantities and carry a modest premium. Do not specify 304L or 304H unless the weld or temperature actually requires it — you will pay for stock you don't need.
        </p>
        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>
          <strong>Quantity and timing.</strong> Single-piece maintenance buys pay the top of the band; 5+ tonne project lots earn 3–8%; annual rate contracts lock a formula against a nickel index so you are insulated from weekly swings. If a project runs over months, ask us to price-lock at order confirmation.
        </p>

        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>SS 304 vs 304L vs 316L — Price and When to Pay More</h2>
        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>
          The most common costing mistake we see is buyers specifying 316L "to be safe" when 304 would serve. 316L adds molybdenum and more nickel for chloride resistance — it costs 20–40% more per kg. If there are no chlorides (no seawater, no coastal air, no chloride process stream), 304 gives the same mechanical performance for less money. Conversely, if chlorides are present, buying 304 to save money is a false economy — it will pit and you will replace the line. Match the grade to the service, then optimise on seamless-vs-welded and quantity. If you're unsure, our team will help you specify against your actual operating conditions — see our <a href="/blog/ss-304-vs-ss-316-difference" style={{ color: "#E8821A", "font-weight": "600" }}>SS 304 vs 316 comparison</a>.
        </p>

        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>How to Buy SS 304 Pipe at the Right Price from CMI</h2>
        <p style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" }}>
          We stock SS 304 and 304L seamless and welded pipe ready at our GIDC Makarpura, Vadodara yard, sourced direct from Jindal, Ratnamani and Venus with EN 10204 3.1 MTC on every consignment. Because we buy mill-direct there is no broker layer in the price. Send us the grade, size, schedule, quantity and delivery location and you'll have a formal quote — inclusive of GST, packing and local loading — within about 4 hours, valid 3–7 days. Delivery is same-day within Gujarat and 2–5 days across India. Payment is advance for first orders, moving to 15–30 day credit for established accounts.
        </p>

        {/* Internal Links — SS 304 price context */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Related SS 304 Pricing &amp; Grade Resources</h2>
        <ul style={{ "font-size": "0.95rem", color: "#374151", "line-height": "1.9", "padding-left": "1.25rem" }}>
          <li><a href="/ss-304-316l-pipe-supplier-india" style={{ color: "#E8821A", "font-weight": "600" }}>SS 304 / 316L Pipe Supplier — stock, sizes &amp; specs</a></li>
          <li><a href="/blog/ss-304-stainless-steel-guide" style={{ color: "#E8821A", "font-weight": "600" }}>SS 304 Stainless Steel Guide — properties &amp; uses</a></li>
          <li><a href="/blog/ss-316l-pipe-price-per-kg" style={{ color: "#E8821A", "font-weight": "600" }}>SS 316L Pipe Price Per Kg — compare the premium</a></li>
          <li><a href="/blog/ss-304-vs-ss-316-difference" style={{ color: "#E8821A", "font-weight": "600" }}>SS 304 vs 316 — which grade you actually need</a></li>
          <li><a href="/blog/ss-pipe-weight-chart" style={{ color: "#E8821A", "font-weight": "600" }}>SS Pipe Weight Chart — convert ₹/kg to ₹/metre</a></li>
          <li><a href="/blog/ss-pipe-price-list-india" style={{ color: "#E8821A", "font-weight": "600" }}>Full SS Pipe Price List India — all grades</a></li>
        </ul>

        {/* FAQ Section */}
        <h2 style={{ "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" }}>Frequently Asked Questions</h2>
        <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", "border-radius": "10px", padding: "1.5rem", "margin-bottom": "2rem" }}>
          <h3 style={{ "font-size": "1rem", "font-weight": "700", color: "#111827", margin: "0 0 0.5rem" }}>What is the SS 304 pipe price per kg in India today?</h3>
          <p style={{ "font-size": "0.9rem", color: "#374151", "line-height": "1.7", "margin-bottom": "1rem" }}>As of July 2026, SS 304 welded pipe sits roughly in the ₹190–260/kg range and SS 304 seamless pipe roughly ₹270–420/kg ex-Vadodara, depending on size, schedule and quantity. These are indicative bands only — the rate moves weekly with LME nickel. Call +91 99982 80619 for a firm quote valid 3–7 days.</p>
          <h3 style={{ "font-size": "1rem", "font-weight": "700", color: "#111827", margin: "1.25rem 0 0.5rem" }}>Why is SS 304 cheaper than SS 316L?</h3>
          <p style={{ "font-size": "0.9rem", color: "#374151", "line-height": "1.7", "margin-bottom": "1rem" }}>SS 304 contains about 8% nickel and no molybdenum, while SS 316L carries ~10–12% nickel plus 2–3% molybdenum. Molybdenum is expensive and the extra nickel adds cost, so 316L typically runs 20–40% higher per kg than 304. If your service has no chlorides, 304 is the cost-correct choice.</p>
          <h3 style={{ "font-size": "1rem", "font-weight": "700", color: "#111827", margin: "1.25rem 0 0.5rem" }}>How much does the 304L or 304H variant add to the price?</h3>
          <p style={{ "font-size": "0.9rem", color: "#374151", "line-height": "1.7", "margin-bottom": "1rem" }}>304L (for welded service) and 304H (high-temperature) usually carry a small premium of roughly ₹10–30/kg over standard 304, because they are lower-volume grades. For most general piping, standard 304 is adequate and cheaper.</p>
          <h3 style={{ "font-size": "1rem", "font-weight": "700", color: "#111827", margin: "1.25rem 0 0.5rem" }}>Does seamless SS 304 pipe cost more than welded?</h3>
          <p style={{ "font-size": "0.9rem", color: "#374151", "line-height": "1.7", "margin-bottom": "1rem" }}>Yes — seamless is pierced and drawn, which is more labour- and scrap-intensive than roll-and-weld, so it typically costs 30–60% more per kg. For low-pressure and general service, welded (ERW/EFW) SS 304 is far more economical.</p>
          <h3 style={{ "font-size": "1rem", "font-weight": "700", color: "#111827", margin: "1.25rem 0 0.5rem" }}>What moves the SS 304 price the most?</h3>
          <p style={{ "font-size": "0.9rem", color: "#374151", "line-height": "1.7", "margin-bottom": "0" }}>Nickel on the LME is the single biggest driver — roughly every US$1,000/tonne move in nickel shifts SS 304 pipe by about ₹15–20/kg. Chromium ferro-alloy prices, import parity, 18% GST, freight and order quantity account for the rest.</p>
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
      
        <RelatedPages currentPath="/blog/ss-304-pipe-price-per-kg" />
      </main>
    </>
  );
}
