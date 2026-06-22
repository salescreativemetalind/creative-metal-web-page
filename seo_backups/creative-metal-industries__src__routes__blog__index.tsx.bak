import { Title, Meta, Link } from "@solidjs/meta";
import { For } from "solid-js";
import { PageLayout } from "../../components/Layout";

const POSTS = [
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
    slug: "titanium-grade-2-guide",
    tag: "Material Guide", date: "Mar 2026", readTime: "7 min read", icon: "⬜",
    title: "Titanium Grade 2 — Commercially Pure, Maximum Corrosion Resistance",
    excerpt: "CP titanium Grade 2 (UNS R50400) — the most used titanium grade for chemical processing, desalination, marine, and medical. Properties, applications, cost.",
  },
  {
    slug: "titanium-grade-5-guide",
    tag: "Material Guide", date: "Feb 2026", readTime: "7 min read", icon: "🚀",
    title: "Titanium Grade 5 (Ti-6Al-4V) — Aerospace-Strength Alloy",
    excerpt: "The workhorse alpha-beta titanium alloy. 900+ MPa tensile strength for aerospace, medical implants, motorsport, and high-performance engineering applications.",
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
];

export default function BlogPage() {
  return (
    <PageLayout active="Blog">
      <Title>Steel &amp; Alloy Technical Blog | Creative Metal Industries</Title>
      <Meta name="description" content="Technical guides, material comparisons and industry insights on Stainless Steel, Duplex, Alloy Steel, Inconel, Hastelloy, Titanium. Written by Creative Metal Industries, Vadodara." />
      <Link rel="canonical" href="https://www.creativemetalind.com/blog" />
      <Meta property="og:type"        content="website" />
      <Meta property="og:title"       content="Steel & Alloy Technical Blog | Creative Metal Industries" />
      <Meta property="og:description" content="Technical guides on SS grades, duplex steel, alloy steel P91, pipe schedules, MTC reading and exotic alloys. By Creative Metal Industries, Vadodara." />
      <Meta property="og:url"         content="https://www.creativemetalind.com/blog" />
      <Meta property="og:image"       content="https://www.creativemetalind.com/logo_cmi.png" />

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
