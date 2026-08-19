import { Title, Meta, Link } from "@solidjs/meta";
import { For } from "solid-js";
import { PageLayout } from "../../components/Layout";

// Original featured posts
const FEATURED_POSTS = [
  { slug: "ss-304-stainless-steel-guide", tag: "Material Guide", date: "Jun 2026", readTime: "10 min read", icon: "⚪", title: "SS 304 Stainless Steel — Grades, Properties & Applications", excerpt: "The world's most used stainless steel. 18/8 composition, corrosion resistance, mechanical properties, welding tips, and sourcing guide." },
  { slug: "ss-316l-stainless-steel-guide", tag: "Material Guide", date: "Jun 2026", readTime: "10 min read", icon: "🔵", title: "SS 316L Stainless Steel — Molybdenum-Enhanced Corrosion Resistance", excerpt: "Why 316L is the go-to grade for marine, pharma, and chemical service. Composition, PREN value, chloride resistance." },
  { slug: "duplex-2205-steel-guide", tag: "Material Guide", date: "May 2026", readTime: "9 min read", icon: "🟡", title: "Duplex 2205 Steel — Properties, Applications & Specifications", excerpt: "Duplex 2205 delivers 2x strength of 316L with superior chloride SCC resistance. Complete guide." },
  { slug: "p91-alloy-steel-guide", tag: "Industry Insight", date: "Apr 2026", readTime: "10 min read", icon: "⚡", title: "P91 Alloy Steel — The Backbone of Ultra-Supercritical Power Plants", excerpt: "ASTM A335 P91 — creep properties, PWHT requirements, IBR compliance." },
  { slug: "inconel-625-guide", tag: "Exotic Alloy", date: "Mar 2026", readTime: "8 min read", icon: "🟠", title: "Inconel 625 — High-Temperature Nickel Alloy Guide", excerpt: "UNS N06625 for high-temperature oxidation resistance up to 1000°C." },
  { slug: "hastelloy-c276-guide", tag: "Exotic Alloy", date: "Apr 2026", readTime: "8 min read", icon: "🧪", title: "Hastelloy C-276 — The Ultimate Corrosion-Resistant Nickel Alloy", excerpt: "UNS N10276 resists HCl, H2SO4, wet chlorine — pharma, FGD, waste treatment." },
  { slug: "erw-vs-seamless-pipe", tag: "Buyer's Guide", date: "Jan 2026", readTime: "12 min read", icon: "🔩", title: "ERW vs Seamless Pipe — Complete Technical Comparison", excerpt: "Manufacturing difference, strength, cost comparison (India 2026), and when to specify each type." },
  { slug: "pipe-schedule-chart", tag: "Technical Reference", date: "Feb 2026", readTime: "6 min read", icon: "📐", title: "Pipe Schedule Chart — SCH 5S, 10S, 40, 80, 160, XXS Explained", excerpt: "Wall thickness tables for every size. How to calculate pressure rating from schedule." },
];

// Section-based article listings
const PRICE_ARTICLES = [
  { slug: "ss-304-pipe-price-per-kg", title: "SS 304 Pipe Price Per Kg India" },
  { slug: "ss-316l-pipe-price-per-kg", title: "SS 316L Pipe Price Per Kg India" },
  { slug: "ss-304-sheet-price-per-kg", title: "SS 304 Sheet Price Per Kg India" },
  { slug: "ss-316-sheet-price-per-kg", title: "SS 316 Sheet Price Per Kg India" },
  { slug: "ss-304-plate-price-india", title: "SS 304 Plate Price India Today" },
  { slug: "ss-316l-plate-price-india", title: "SS 316L Plate Price India" },
  { slug: "duplex-2205-pipe-price-india", title: "Duplex 2205 Pipe Price India" },
  { slug: "super-duplex-2507-pipe-price", title: "Super Duplex 2507 Pipe Price" },
  { slug: "inconel-625-pipe-price-india", title: "Inconel 625 Pipe Price India" },
  { slug: "monel-400-pipe-price-india", title: "Monel 400 Pipe Price India" },
  { slug: "hastelloy-c276-pipe-price", title: "Hastelloy C276 Pipe Price India" },
  { slug: "titanium-pipe-price-india", title: "Titanium Pipe Price India" },
  { slug: "alloy-steel-p91-pipe-price", title: "P91 Alloy Steel Pipe Price India" },
  { slug: "alloy-steel-p22-pipe-price", title: "P22 Alloy Steel Pipe Price India" },
  { slug: "carbon-steel-a106-pipe-price", title: "ASTM A106 CS Pipe Price India" },
  { slug: "erw-pipe-price-india", title: "ERW Pipe Price India IS 1239" },
  { slug: "api-5l-pipe-price-india", title: "API 5L Pipe Price India" },
  { slug: "ss-pipe-price-list-india", title: "SS Pipe Price List India 2026" },
  { slug: "ss-fittings-price-india", title: "SS Fittings Price India" },
  { slug: "ss-flange-price-india", title: "SS Flange Price India" },
  { slug: "sa-516-plate-price-india", title: "SA 516 Plate Price India" },
  { slug: "boiler-tube-price-india", title: "Boiler Tube Price India" },
  { slug: "ms-angle-price-today", title: "MS Angle Price Today Gujarat" },
  { slug: "ms-channel-price-today", title: "MS Channel Price Today Gujarat" },
  { slug: "ms-beam-price-today", title: "MS Beam Price Today Gujarat" },
  { slug: "tmt-bar-price-today-gujarat", title: "TMT Bar Price Today Gujarat" },
  { slug: "steel-price-forecast-india-2026", title: "Steel Price Forecast India 2026-27" },
  { slug: "nickel-lme-price-impact-ss", title: "Nickel LME Impact on SS Prices" },
  { slug: "hardox-plate-price-india", title: "Hardox Plate Price India" },
  { slug: "copper-nickel-pipe-price", title: "Copper Nickel Pipe Price India" },
];

const WEIGHT_CHART_ARTICLES = [
  { slug: "pipe-weight-calculator", title: "Pipe Weight Calculator Online" },
  { slug: "steel-weight-calculator", title: "Steel Weight Calculator — All Shapes" },
  { slug: "ss-pipe-weight-chart", title: "SS Pipe Weight Chart (ASTM A312)" },
  { slug: "cs-pipe-weight-chart", title: "CS Pipe Weight Chart (A106)" },
  { slug: "alloy-steel-pipe-weight-chart", title: "Alloy Steel Pipe Weight Chart" },
  { slug: "erw-pipe-weight-chart", title: "ERW Pipe Weight Chart IS 1239" },
  { slug: "ms-angle-weight-chart", title: "MS Angle Weight Chart IS 808" },
  { slug: "ismc-channel-weight-chart", title: "ISMC Channel Weight Chart" },
  { slug: "ismb-beam-weight-chart", title: "ISMB Beam Weight Chart" },
  { slug: "tmt-bar-weight-chart", title: "TMT Bar Weight Chart 8mm-32mm" },
  { slug: "flange-weight-chart", title: "Flange Weight Chart All Classes" },
  { slug: "pipe-elbow-weight-chart", title: "Pipe Elbow Weight Chart" },
  { slug: "ss-plate-weight-calculator", title: "SS Plate Weight Calculator" },
  { slug: "hollow-section-weight-chart", title: "Hollow Section Weight Chart" },
  { slug: "inconel-pipe-weight-chart", title: "Inconel Pipe Weight Chart" },
  { slug: "duplex-pipe-weight-chart", title: "Duplex Pipe Weight Chart" },
  { slug: "pipe-volume-calculator", title: "Pipe Volume Calculator" },
];

const COMPARISON_ARTICLES = [
  { slug: "carbon-steel-vs-stainless-steel", title: "Carbon Steel vs Stainless Steel" },
  { slug: "ss-304-vs-ss-316-difference", title: "SS 304 vs SS 316 — Difference" },
  { slug: "alloy-steel-vs-carbon-steel", title: "Alloy Steel vs Carbon Steel" },
  { slug: "duplex-2205-vs-inconel-625", title: "Duplex 2205 vs Inconel 625" },
  { slug: "astm-vs-asme-difference", title: "ASTM vs ASME Difference" },
  { slug: "ss-304-vs-ss-202", title: "SS 304 vs SS 202" },
  { slug: "seamless-vs-spiral-welded-pipe", title: "Seamless vs Spiral Welded Pipe" },
  { slug: "ss-pipe-vs-gi-pipe", title: "SS Pipe vs GI Pipe" },
  { slug: "forged-vs-cast-fittings", title: "Forged vs Cast Fittings" },
  { slug: "ss-304-vs-ss-304l", title: "SS 304 vs 304L" },
  { slug: "ss-316-vs-ss-316l", title: "SS 316 vs 316L" },
  { slug: "wn-flange-vs-so-flange", title: "Weld Neck vs Slip-On Flange" },
  { slug: "duplex-2205-vs-ss-316l", title: "Duplex 2205 vs SS 316L" },
  { slug: "inconel-625-vs-hastelloy-c276", title: "Inconel 625 vs Hastelloy C276" },
  { slug: "titanium-vs-stainless-steel", title: "Titanium vs Stainless Steel" },
  { slug: "duplex-vs-super-duplex", title: "Duplex vs Super Duplex" },
  { slug: "p91-vs-p22-alloy-steel", title: "P91 vs P22 Alloy Steel" },
  { slug: "sa-106-vs-api-5l", title: "ASTM A106 vs API 5L" },
  { slug: "hot-rolled-vs-cold-rolled-steel", title: "Hot Rolled vs Cold Rolled" },
  { slug: "seamless-vs-welded-ss-pipe", title: "SS Seamless vs Welded Pipe" },
  { slug: "fe500-vs-fe500d-tmt", title: "Fe 500 vs Fe 500D TMT" },
  { slug: "schedule-10-vs-schedule-40", title: "Schedule 10 vs Schedule 40" },
  { slug: "rf-vs-ff-vs-rtj-flange", title: "RF vs FF vs RTJ Flange" },
  { slug: "psl1-vs-psl2-api-5l", title: "PSL1 vs PSL2 API 5L" },
];

const SPEC_ARTICLES = [
  { slug: "asme-b16-5-flange-dimensions", title: "ASME B16.5 Flange Dimensions" },
  { slug: "asme-b16-9-fittings-dimensions", title: "ASME B16.9 Fittings Dimensions" },
  { slug: "asme-b16-11-forged-fittings", title: "ASME B16.11 Forged Fittings" },
  { slug: "is-1239-pipe-specification", title: "IS 1239 Pipe Specification" },
  { slug: "is-2062-steel-specification", title: "IS 2062 Steel Specification" },
  { slug: "is-808-structural-sections", title: "IS 808 Structural Sections" },
  { slug: "astm-a335-alloy-pipe-spec", title: "ASTM A335 Alloy Pipe Spec" },
  { slug: "astm-a106-pipe-specification", title: "ASTM A106 Pipe Specification" },
  { slug: "astm-a240-ss-plate-spec", title: "ASTM A240 SS Plate Spec" },
  { slug: "astm-b444-inconel-pipe-spec", title: "ASTM B444 Inconel Pipe Spec" },
  { slug: "api-5l-specification-guide", title: "API 5L Specification Guide" },
  { slug: "nace-mr0175-material-guide", title: "NACE MR0175 Material Guide" },
  { slug: "ibr-form-iiic-complete-guide", title: "IBR Form III-C Complete Guide" },
  { slug: "pmi-testing-complete-guide", title: "PMI Testing Complete Guide" },
  { slug: "ndt-testing-methods-pipes", title: "NDT Testing Methods for Pipes" },
  { slug: "din-flange-dimensions-chart", title: "DIN Flange Dimensions Chart" },
];

const INDUSTRY_ARTICLES = [
  { slug: "piping-material-oil-refinery", title: "Piping for Oil Refinery" },
  { slug: "steel-for-power-plant-boiler", title: "Steel for Power Plant Boiler" },
  { slug: "piping-for-chemical-plant", title: "Piping for Chemical Plant" },
  { slug: "ss-pipe-for-pharma-industry", title: "SS Pipe for Pharma Industry" },
  { slug: "ss-pipe-for-dairy-food", title: "SS Pipe for Dairy & Food" },
  { slug: "ss-pipe-for-water-treatment", title: "SS Pipe for Water Treatment" },
  { slug: "ss-pipe-for-marine-offshore", title: "SS Pipe for Marine & Offshore" },
  { slug: "structural-steel-for-building", title: "Structural Steel for Building" },
  { slug: "piping-for-desalination-plant", title: "Piping for Desalination Plant" },
  { slug: "piping-for-lng-terminal", title: "Piping for LNG Terminal" },
  { slug: "piping-for-oil-gas-pipeline", title: "Piping for Oil & Gas Pipeline" },
  { slug: "piping-for-hydrogen-plant", title: "Piping for Hydrogen Plant" },
  { slug: "steel-for-wind-turbine", title: "Steel for Wind Turbine" },
  { slug: "material-for-heat-exchanger", title: "Material for Heat Exchanger" },
  { slug: "steel-for-metro-rail", title: "Steel for Metro Rail" },
  { slug: "piping-for-brewery-distillery", title: "Piping for Brewery & Distillery" },
];

const HOWTO_ARTICLES = [
  { slug: "how-to-calculate-pipe-weight", title: "How to Calculate Pipe Weight" },
  { slug: "how-to-identify-ss-grade", title: "How to Identify SS Grade" },
  { slug: "how-to-weld-p91-steel", title: "How to Weld P91 Steel" },
  { slug: "how-to-weld-duplex-2205", title: "How to Weld Duplex 2205" },
  { slug: "how-to-weld-inconel-625", title: "How to Weld Inconel 625" },
  { slug: "how-to-weld-ss-304-316", title: "How to Weld SS 304/316L" },
  { slug: "how-to-do-pmi-testing", title: "How to Do PMI Testing" },
  { slug: "how-to-read-mill-test-certificate", title: "How to Read MTC" },
  { slug: "how-to-do-hydrostatic-test", title: "Hydrostatic Test Procedure" },
  { slug: "how-to-passivate-ss-pipe", title: "SS Pipe Passivation Procedure" },
  { slug: "how-to-select-pipe-schedule", title: "How to Select Pipe Schedule" },
  { slug: "how-to-prevent-galvanic-corrosion", title: "Galvanic Corrosion Prevention" },
  { slug: "how-to-do-pwht-procedure", title: "PWHT Procedure for P91" },
  { slug: "how-to-check-ss-pipe-quality", title: "How to Check SS Pipe Quality" },
  { slug: "how-to-prevent-stress-corrosion", title: "SCC Prevention in SS" },
  { slug: "how-to-prepare-piping-mto", title: "How to Prepare Piping MTO" },
];

const KNOWLEDGE_ARTICLES = [
  { slug: "what-is-stainless-steel", title: "What is Stainless Steel?" },
  { slug: "what-is-duplex-stainless-steel", title: "What is Duplex Steel?" },
  { slug: "what-is-alloy-steel", title: "What is Alloy Steel?" },
  { slug: "what-is-carbon-steel", title: "What is Carbon Steel?" },
  { slug: "what-is-inconel-alloy", title: "What is Inconel Alloy?" },
  { slug: "what-is-monel-alloy", title: "What is Monel Alloy?" },
  { slug: "what-is-hastelloy", title: "What is Hastelloy?" },
  { slug: "what-is-titanium-alloy", title: "What is Titanium Alloy?" },
  { slug: "what-is-seamless-pipe", title: "What is Seamless Pipe?" },
  { slug: "what-is-erw-pipe", title: "What is ERW Pipe?" },
  { slug: "what-is-pipe-schedule", title: "What is Pipe Schedule?" },
  { slug: "what-is-ibr-certification", title: "What is IBR Certification?" },
  { slug: "what-is-nace-mr0175", title: "What is NACE MR0175?" },
  { slug: "what-is-pmi-testing", title: "What is PMI Testing?" },
  { slug: "what-is-ndt-testing", title: "What is NDT Testing?" },
  { slug: "types-of-stainless-steel", title: "Types of Stainless Steel" },
  { slug: "types-of-corrosion-in-steel", title: "Types of Corrosion in Steel" },
  { slug: "types-of-pipe-manufacturing", title: "Types of Pipe Manufacturing" },
];

const BUYER_ARTICLES = [
  { slug: "how-to-buy-steel-pipe-online-india", title: "Buy Steel Pipe Online India" },
  { slug: "bulk-steel-procurement-tips", title: "Bulk Steel Procurement Tips" },
  { slug: "how-to-verify-steel-supplier", title: "How to Verify Steel Supplier" },
  { slug: "gst-on-steel-pipes-india", title: "GST on Steel Pipes India" },
  { slug: "hs-code-for-steel-pipes", title: "HS Code for Steel Pipes" },
  { slug: "astm-equivalent-indian-standards", title: "ASTM to IS Equivalent" },
  { slug: "approved-vendor-list-steel", title: "Approved Vendor List (AVL)" },
  { slug: "how-to-check-fake-mtc", title: "How to Detect Fake MTC" },
  { slug: "steel-procurement-common-mistakes", title: "Procurement Common Mistakes" },
  { slug: "epc-contractor-steel-supply", title: "Steel Supply for EPC Contractors" },
  { slug: "third-party-inspection-guide", title: "Third Party Inspection Guide" },
  { slug: "shipping-terms-fob-cif-steel", title: "FOB vs CIF Shipping Terms" },
];

const SIZE_CHART_ARTICLES = [
  { slug: "ss-pipe-size-chart", title: "SS Pipe Size Chart" },
  { slug: "cs-pipe-size-chart", title: "CS Pipe Size Chart" },
  { slug: "flange-dimensions-chart-150-300", title: "Flange Dimensions Class 150/300" },
  { slug: "elbow-dimensions-chart", title: "Pipe Elbow Dimensions" },
  { slug: "tee-dimensions-chart", title: "Pipe Tee Dimensions" },
  { slug: "pipe-nb-to-od-conversion", title: "NB to OD Conversion Chart" },
  { slug: "inch-to-mm-conversion-pipes", title: "Inch to mm Conversion" },
  { slug: "flange-bolt-chart", title: "Flange Bolt Chart B16.5" },
  { slug: "pipe-pressure-rating-chart", title: "Pipe Pressure Rating Chart" },
  { slug: "ms-angle-size-chart-is-808", title: "MS Angle Size Chart IS 808" },
  { slug: "ismc-dimensions-chart", title: "ISMC Channel Dimensions" },
  { slug: "forged-fittings-dimensions", title: "Forged Fittings Dimensions" },
];

const FAQ_ARTICLES = [
  { slug: "why-ss-pipe-is-expensive", title: "Why is SS Pipe Expensive?" },
  { slug: "why-inconel-is-costly", title: "Why is Inconel Costly?" },
  { slug: "why-duplex-steel-preferred-offshore", title: "Why Duplex for Offshore?" },
  { slug: "when-to-use-duplex-steel", title: "When to Use Duplex Steel?" },
  { slug: "when-to-use-inconel-alloy", title: "When to Use Inconel?" },
  { slug: "when-to-use-hastelloy", title: "When to Use Hastelloy?" },
  { slug: "can-ss-304-be-used-outdoor", title: "Can SS 304 Be Used Outdoor?" },
  { slug: "difference-pipe-and-tube", title: "Difference: Pipe vs Tube" },
  { slug: "faq-ss-pipe-buying-india", title: "SS Pipe Buying FAQ India" },
  { slug: "faq-carbon-steel-pipe-buying", title: "CS Pipe Buying FAQ" },
  { slug: "faq-exotic-alloy-buying", title: "Exotic Alloy Buying FAQ" },
  { slug: "faq-pipe-fittings-flanges", title: "Fittings & Flanges FAQ" },
];

const CASE_STUDY_ARTICLES = [
  { slug: "project-oil-refinery-ss-cs-supply", title: "Oil Refinery SS & CS Supply" },
  { slug: "project-power-plant-p91-boiler", title: "Power Plant P91 Boiler Supply" },
  { slug: "project-chemical-plant-exotic-alloy", title: "Chemical Plant Exotic Alloy" },
  { slug: "project-offshore-duplex-supply", title: "Offshore Duplex Supply" },
  { slug: "project-pharma-ss316l-electropolished", title: "Pharma SS 316L EP Supply" },
  { slug: "project-water-treatment-ss-pipe", title: "Water Treatment SS Pipe" },
  { slug: "project-export-middle-east-steel", title: "Export to Middle East" },
  { slug: "project-lng-cryogenic-piping", title: "LNG Cryogenic Piping" },
  { slug: "project-building-construction-tmt", title: "Building Construction TMT" },
  { slug: "project-fertilizer-plant-piping", title: "Fertilizer Plant Piping" },
];

// Helper to render a section of article links
function ArticleSection(props: { title: string; icon: string; articles: {slug: string; title: string}[] }) {
  return (
    <div style={{ "margin-bottom": "2.5rem" }}>
      <h2 style={{ "font-size": "1.3rem", "font-weight": "700", color: "#111827", margin: "0 0 1rem", display: "flex", "align-items": "center", gap: "0.5rem" }}>
        <span>{props.icon}</span> {props.title}
      </h2>
      <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fill, minmax(280px, 1fr))", gap: "0.5rem" }}>
        <For each={props.articles}>{(a) => (
          <a href={`/blog/${a.slug}`} style={{ color: "#E8821A", "text-decoration": "none", "font-size": "0.9rem", padding: "0.4rem 0", "border-bottom": "1px solid #f3f4f6", display: "block" }}>
            {a.title} →
          </a>
        )}</For>
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <PageLayout active="Blog">
      <Title>Steel &amp; Alloy Technical Blog | Creative Metal Industries</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="500+ technical guides on SS, Carbon Steel, Alloy, Duplex, Inconel, Hastelloy, Titanium — price charts, weight calculators, specifications, comparisons." />
      <Link rel="canonical" href="https://www.creativemetalind.com/blog" />
      <Meta property="og:type" content="website" />
      <Meta property="og:title" content="Steel & Alloy Technical Blog | Creative Metal Industries" />
      <Meta property="og:description" content="500+ guides on steel pricing, weight charts, specifications, material comparisons, industry applications. By CMI Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/blog" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />

      <section class="page-hero">
        <div class="container">
          <span class="section-label">Technical Blog</span>
          <h1>Steel &amp; Alloy Knowledge Hub</h1>
          <p>500+ technical guides — price charts, weight calculators, specifications, material comparisons and industry insights for procurement engineers, designers and fabricators.</p>
        </div>
      </section>

      {/* Featured Articles */}
      <section class="blog-page-section">
        <div class="container">
          <h2 style={{ "font-size": "1.5rem", "font-weight": "700", color: "#111827", margin: "0 0 1.5rem" }}>Featured Guides</h2>
          <div class="blog-grid" role="list">
            <For each={FEATURED_POSTS}>{(post) => (
              <article class="blog-card" role="listitem">
                <div class="blog-card-top">
                  <div class="blog-icon-wrap" aria-hidden="true"><span>{post.icon}</span></div>
                  <div class="blog-meta">
                    <span class="blog-tag">{post.tag}</span>
                    <span class="blog-date">{post.date}</span>
                  </div>
                </div>
                <h2 class="blog-title">{post.title}</h2>
                <p class="blog-excerpt">{post.excerpt}</p>
                <div class="blog-footer">
                  <span class="blog-read-time">🕐 {post.readTime}</span>
                  <a href={`/blog/${post.slug}`} class="blog-link">Read Article →</a>
                </div>
              </article>
            )}</For>
          </div>
        </div>
      </section>

      {/* All Articles by Category */}
      <section style={{ padding: "3rem 0", background: "#f9fafb" }}>
        <div class="container">
          <h2 style={{ "font-size": "1.8rem", "font-weight": "800", color: "#111827", margin: "0 0 2rem", "text-align": "center" }}>Browse All Articles by Category</h2>

          <ArticleSection title="Price & Rate Guides (Updated Monthly)" icon="💰" articles={PRICE_ARTICLES} />
          <ArticleSection title="Weight Charts & Calculators" icon="⚖️" articles={WEIGHT_CHART_ARTICLES} />
          <ArticleSection title="Material Comparisons (X vs Y)" icon="⚔️" articles={COMPARISON_ARTICLES} />
          <ArticleSection title="Specifications & Standards" icon="📋" articles={SPEC_ARTICLES} />
          <ArticleSection title="Industry Application Guides" icon="🏭" articles={INDUSTRY_ARTICLES} />
          <ArticleSection title="How-To & Process Guides" icon="🔧" articles={HOWTO_ARTICLES} />
          <ArticleSection title="Material Knowledge (What Is...)" icon="📚" articles={KNOWLEDGE_ARTICLES} />
          <ArticleSection title="Buyer Guides & Procurement" icon="🛒" articles={BUYER_ARTICLES} />
          <ArticleSection title="Size Charts & Dimension Tables" icon="📏" articles={SIZE_CHART_ARTICLES} />
          <ArticleSection title="FAQ & Questions" icon="❓" articles={FAQ_ARTICLES} />
          <ArticleSection title="Case Studies & Projects" icon="📋" articles={CASE_STUDY_ARTICLES} />
        </div>
      </section>
    </PageLayout>
  );
}
