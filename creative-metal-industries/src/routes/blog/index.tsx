import { Title, Meta, Link } from "@solidjs/meta";
import { For } from "solid-js";
import { PageLayout } from "../../components/Layout";

const POSTS = [
  {
    slug: "ms-structural-steel-guide",
    tag: "Structural Guide", date: "Jun 2026", readTime: "9 min read", icon: "🏗️",
    title: "MS Angle, Channel, Plate & Pipe — Mild Steel Structural Guide",
    excerpt: "MS angle, MS channel, MS flat, MS plate, MS sheet (IS 2062), MS ERW pipe and MS seamless pipe. Sizes, weights, grades and Vadodara supply.",
  },
  {
    slug: "carbon-steel-pipe-guide",
    tag: "Material Guide", date: "Jun 2026", readTime: "9 min read", icon: "🛢️",
    title: "Carbon Steel Pipe, Plate, Fittings & Flanges — Complete Guide",
    excerpt: "Carbon steel pipe (ASTM A106 Gr.B), SA 516 Gr.70 plate, alloy plate, carbon steel fittings (A234 WPB) and flanges (A105). Grades and standards.",
  },
  {
    slug: "ss-sheet-plate-guide",
    tag: "Material Guide", date: "Jun 2026", readTime: "8 min read", icon: "🪞",
    title: "Stainless Steel Sheet & Plate — Grades, Finishes & Sizes",
    excerpt: "SS 304, 304L, 316, 310, 317, 410 sheet and plate, 2B and No.4 finishes, sizes and sheet packets. SS sheet & plate supplier Vadodara.",
  },
  {
    slug: "ss-long-products-fittings-guide",
    tag: "Product Guide", date: "Jun 2026", readTime: "8 min read", icon: "🔧",
    title: "SS Angle, Channel, Flat, Rod, Fittings & Flanges Guide",
    excerpt: "SS angle, channel, flat, SS 310 rod, SS ERW pipe, SS 317 pipe, SS fittings and SS flanges. Grades, standards and Vadodara supply.",
  },
  {
    slug: "exotic-alloy-plate-sheet-guide",
    tag: "Exotic Alloy", date: "Jun 2026", readTime: "9 min read", icon: "✨",
    title: "Exotic Alloy Sheet, Plate, Pipe & Bar — Duplex, Titanium, Inconel",
    excerpt: "Duplex & super duplex plate & sheet, titanium, Monel, Inconel and Hastelloy sheets, pipes, tubes and bars. Grades, applications and supply.",
  },
  {
    slug: "ss-304-stainless-steel-guide",
    tag: "Material Guide", date: "Jun 2026", readTime: "10 min read", icon: "⚪",
    title: "SS 304 Stainless Steel — Grades, Properties & Applications",
    excerpt: "The world's most used stainless steel. 18/8 composition, corrosion resistance, mechanical properties, welding tips, and sourcing guide for Indian buyers.",
  },
  {
    slug: "ss-316l-stainless-steel-guide",
    tag: "Material Guide", date: "Jun 2026", readTime: "10 min read", icon: "🔵",
    title: "SS 316L Stainless Steel — Molybdenum-Enhanced Corrosion Resistance",
    excerpt: "Why 316L is the go-to grade for marine, pharma, and chemical service. Composition, PREN value, chloride resistance, and how it differs from 304.",
  },
  {
    slug: "duplex-2205-steel-guide",
    tag: "Material Guide", date: "May 2026", readTime: "9 min read", icon: "🟡",
    title: "Duplex 2205 Steel — Properties, Applications & Specifications",
    excerpt: "Duplex 2205 (UNS S31803) delivers 2× the strength of 316L with superior chloride SCC resistance. Complete guide to composition, PREN 35, and where to use it.",
  },
  {
    slug: "super-duplex-2507-guide",
    tag: "Material Guide", date: "May 2026", readTime: "9 min read", icon: "🔶",
    title: "Super Duplex 2507 — Seawater Grade with PREN 42",
    excerpt: "UNS S32750 for offshore, subsea, and severe chloride service. Chemical composition, mechanical strength, PREN > 40, fabrication notes, and Indian stockist information.",
  },
  {
    slug: "p91-alloy-steel-guide",
    tag: "Industry Insight", date: "Apr 2026", readTime: "10 min read", icon: "⚡",
    title: "P91 Alloy Steel — The Backbone of Ultra-Supercritical Power Plants",
    excerpt: "ASTM A335 P91 (9Cr-1Mo-V-Nb) — creep properties, PWHT requirements, fabrication challenges, IBR compliance, and why it replaced P22 in modern boilers.",
  },
  {
    slug: "hastelloy-c276-guide",
    tag: "Exotic Alloy", date: "Apr 2026", readTime: "8 min read", icon: "🧪",
    title: "Hastelloy C-276 — The Ultimate Corrosion-Resistant Nickel Alloy",
    excerpt: "UNS N10276 resists HCl, H₂SO₄, wet chlorine, and FeCl₃ — applications in chemical processing, pharma, FGD, and waste treatment. Composition, properties, sourcing.",
  },
  {
    slug: "inconel-625-guide",
    tag: "Exotic Alloy", date: "Mar 2026", readTime: "8 min read", icon: "🟠",
    title: "Inconel 625 — High-Temperature Nickel Alloy Guide",
    excerpt: "UNS N06625 for high-temperature oxidation resistance up to 1000°C. Used in aerospace, offshore, chemical reactors, and bellows. Properties, welding, and supply.",
  },
  {
    slug: "titanium-grade-2-vs-grade-5",
    tag: "Material Guide", date: "Mar 2026", readTime: "7 min read", icon: "⬜",
    title: "Titanium Grade 2 vs Grade 5 (Ti-6Al-4V) — Which One Should You Choose?",
    excerpt: "CP titanium Grade 2 vs Ti-6Al-4V Grade 5 — corrosion resistance, strength, cost, and when to use each for industrial and aerospace applications.",
  },
  {
    slug: "pipe-schedule-chart",
    tag: "Technical Reference", date: "Feb 2026", readTime: "6 min read", icon: "📐",
    title: "Pipe Schedule Chart — SCH 5S, 10S, 40, 80, 160, XXS Explained",
    excerpt: "What does pipe schedule mean? Wall thickness tables for every size from 1/2\" to 24\". How to calculate pressure rating from schedule. Free reference chart.",
  },
  {
    slug: "mill-test-certificate-guide",
    tag: "Buyer's Guide", date: "Jan 2026", readTime: "6 min read", icon: "📄",
    title: "How to Read a Mill Test Certificate (MTC) — Practical Guide",
    excerpt: "EN 10204 3.1 vs 3.2, heat numbers, chemical analysis, mechanical properties — every field on an MTC explained for procurement engineers and inspectors.",
  },
  {
    slug: "erw-vs-seamless-pipe",
    tag: "Buyer's Guide", date: "Jan 2026", readTime: "12 min read", icon: "🔩",
    title: "ERW vs Seamless Pipe — Complete Technical Comparison",
    excerpt: "Manufacturing difference, strength, pressure rating, cost comparison (India 2026), standards (IS 1239, ASTM A106, API 5L), and when to specify each type.",
  },
  {
    slug: "ss-pipe-supplier-vadodara-guide",
    tag: "Buyer's Guide", date: "Jun 2026", readTime: "10 min read", icon: "🏭",
    title: "How to Choose the Best SS Pipe Supplier in Vadodara",
    excerpt: "Complete buyer's guide — SS pipe stockist vs dealer vs manufacturer, what to check, grades available, and why CMI is Vadodara's top choice.",
  },
  {
    slug: "ss-304-vs-321-guide",
    tag: "Technical Guide", date: "Jun 2026", readTime: "8 min read", icon: "🔬",
    title: "SS 304 vs SS 321 — When to Use the Stabilised Grade",
    excerpt: "Titanium stabilisation, sensitisation resistance, composition table, and when to specify 321 over 304 for high-temperature welded service.",
  },
  {
    slug: "pipe-fittings-selection-guide",
    tag: "Buyer's Guide", date: "Jun 2026", readTime: "9 min read", icon: "⚙️",
    title: "How to Select Pipe Fittings for Refinery and Process Piping",
    excerpt: "Buttweld vs forged vs threaded fittings — pressure class selection, ASME B16.9 vs B16.11, material selection for refinery applications.",
  },
  {
    slug: "ibr-certification-guide",
    tag: "Regulatory Guide", date: "Jun 2026", readTime: "8 min read", icon: "📋",
    title: "IBR Certification Explained — What Every Indian Pipe Buyer Must Know",
    excerpt: "What is IBR Form III-C, when is it mandatory, which materials need IBR, how to verify certificates, and common procurement mistakes.",
  },
  {
    slug: "inconel-vs-monel-guide",
    tag: "Material Comparison", date: "Jun 2026", readTime: "8 min read", icon: "⚖️",
    title: "Inconel vs Monel — Choosing the Right Nickel Alloy",
    excerpt: "Ni-Cr vs Ni-Cu alloys compared — oxidising vs reducing environments, temperature limits, cost analysis, and when to use each.",
  },
  {
    slug: "ss-flange-types-guide",
    tag: "Technical Guide", date: "Jun 2026", readTime: "8 min read", icon: "🔘",
    title: "SS Flange Types Explained — WNRF vs SORF vs Blind vs Socket Weld",
    excerpt: "Five main flange types, pressure class selection ASME B16.5, face types RF/FF/RTJ, and when to use each in process piping.",
  },
  {
    slug: "nace-hic-steel-plates-guide",
    tag: "Material Guide", date: "Jun 2026", readTime: "8 min read", icon: "🛡️",
    title: "NACE HIC Steel Plates — Essential for Sour Service Environments",
    excerpt: "What is NACE HIC, hydrogen induced cracking mechanism, TM-0284 testing, chemical requirements, and sourcing in India.",
  },
  {
    slug: "sa-516-carbon-steel-plate-guide",
    tag: "Material Guide", date: "Jun 2026", readTime: "8 min read", icon: "🪨",
    title: "SA 516 Carbon Steel Plate — The Pressure Vessel Standard",
    excerpt: "SA 516 Grade 60/65/70 — chemical composition, mechanical properties, applications in pressure vessels, NACE HIC testing.",
  },
  {
    slug: "tmt-bars-guide",
    tag: "Structural Guide", date: "Jun 2026", readTime: "8 min read", icon: "🏗️",
    title: "TMT Bars — The Backbone of Gujarat's Infrastructure",
    excerpt: "Thermo-mechanical treatment process, Fe 500/500D/550D grades explained, quality parameters, weight chart, and Gujarat supplier.",
  },
  {
    slug: "astm-a312-pipe-guide",
    tag: "Technical Guide", date: "Jun 2026", readTime: "7 min read", icon: "📏",
    title: "ASTM A312 Pipe Guide — Grades, Schedules & Specifications",
    excerpt: "Complete ASTM A312 guide — TP304, 316L grades, schedules, chemical composition, mechanical properties, testing requirements.",
  },
  {
    slug: "api-5l-pipe-guide",
    tag: "Technical Guide", date: "Jun 2026", readTime: "7 min read", icon: "🛢️",
    title: "API 5L Pipe — The Global Standard for Oil & Gas Transport",
    excerpt: "PSL1 vs PSL2, grades X42 to X80, chemical/mechanical requirements, pipeline applications. Line pipe supplier India.",
  },
  {
    slug: "ss-pipe-fittings-flanges-guide",
    tag: "Product Guide", date: "Jun 2026", readTime: "7 min read", icon: "🔧",
    title: "SS Pipe Fittings & Flanges — The Complete Piping System Kit",
    excerpt: "Types of pipe fittings (elbows, tees, weld neck, slip-on), grades (304, 316L, duplex), pressure classes 150-2500.",
  },
  {
    slug: "industrial-raw-material-supplier-india",
    tag: "Industry Insight", date: "Jun 2026", readTime: "7 min read", icon: "🏭",
    title: "Industrial Raw Material Suppliers — India's Growth Engine",
    excerpt: "How industrial raw material suppliers drive India's growth — infrastructure, manufacturing, import/export, quality assurance.",
  },
  {
    slug: "why-creative-metal-industries",
    tag: "Company", date: "Jun 2026", readTime: "6 min read", icon: "⭐",
    title: "Why Creative Metal Industries is Gujarat's Preferred Steel Trading Company",
    excerpt: "15+ years, 1092 sq.mtr stock yard, SS/CS/alloy/exotic metals, IBR/MTC certified. Why Gujarat industries choose CMI.",
  },
];

export default function BlogPage() {
  return (
    <PageLayout active="Blog">
      <Title>Steel &amp; Alloy Technical Blog | Creative Metal Industries</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Technical guides, material comparisons and industry insights on Stainless Steel, Duplex, Alloy Steel, Inconel, Hastelloy, Titanium. Written by Creative Metal Industries, Vadodara." />
      <Link rel="canonical" href="https://www.creativemetalind.com/blog" />
      <Meta property="og:type"        content="website" />
      <Meta property="og:title"       content="Steel & Alloy Technical Blog | Creative Metal Industries" />
      <Meta property="og:description" content="Technical guides on SS grades, duplex steel, alloy steel P91, pipe schedules, MTC reading and exotic alloys. By Creative Metal Industries, Vadodara." />
      <Meta property="og:url"         content="https://www.creativemetalind.com/blog" />
      <Meta property="og:image"       content="https://www.creativemetalind.com/logo_cmi.png" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel & Alloy Technical Blog | Creative Metal Industries" />
      <Meta name="twitter:description" content="Technical guides, material comparisons and industry insights on Stainless Steel, Duplex, Alloy Steel, Inconel, Hastelloy, Titanium. Written by Creative Metal Industries, Vadodara." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />

      <section class="page-hero">
        <div class="container">
          <span class="section-label">Technical Blog</span>
          <h1>Steel &amp; Alloy Knowledge Hub</h1>
          <p>Technical guides, material comparisons and industry insights — written by our engineers for procurement teams, designers and fabricators.</p>
        </div>
      </section>

      <section class="blog-page-section">
        <div class="container">
          <div class="blog-grid" role="list">
            <For each={POSTS}>{(post) => (
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
    </PageLayout>
  );
}
