import { Title, Meta, Link } from "@solidjs/meta";
import { For } from "solid-js";
import { PageLayout } from "../../components/Layout";

const POSTS = [
  {
    slug: "ss-304-vs-316l",
    tag: "Technical Guide", date: "May 2026", readTime: "5 min read", icon: "🔬",
    title: "SS 304 vs SS 316L — Which Stainless Steel Grade Should You Choose?",
    excerpt: "Choosing between SS 304 and SS 316L is one of the most common decisions in process piping. This guide covers corrosion resistance, temperature limits, cost difference and ideal applications for each grade.",
  },
  {
    slug: "how-to-read-mtc",
    tag: "Buyer's Guide", date: "Apr 2026", readTime: "6 min read", icon: "📄",
    title: "How to Read a Mill Test Certificate (MTC) — A Practical Guide",
    excerpt: "A Mill Test Certificate (EN 10204 3.1/3.2) is your proof of material quality. We explain every field — chemical composition, mechanical properties, heat number and test methods.",
  },
  {
    slug: "duplex-vs-super-duplex",
    tag: "Material Science", date: "Mar 2026", readTime: "7 min read", icon: "⚗️",
    title: "Duplex 2205 vs Super Duplex 2507 — Understanding the Difference",
    excerpt: "Both are dual-phase austenitic-ferritic steels but with very different performance profiles. Learn the PREN values, chloride resistance, strength levels, and when to specify each.",
  },
  {
    slug: "p91-alloy-steel-power-plants",
    tag: "Industry Insight", date: "Feb 2026", readTime: "8 min read", icon: "⚡",
    title: "Why P91 Alloy Steel is Critical for Modern Power Plants",
    excerpt: "Grade P91 (9Cr-1Mo-V) has become the backbone of ultra-supercritical boiler systems. We explore its creep resistance, PWHT requirements and why it commands a premium over P22 and P11.",
  },
  {
    slug: "astm-a312-vs-api-5l",
    tag: "Specification Guide", date: "Jan 2026", readTime: "6 min read", icon: "📐",
    title: "ASTM A312 vs API 5L — Choosing the Right Pipe Standard",
    excerpt: "ASTM A312 governs austenitic stainless steel for chemical and general service, while API 5L covers carbon steel for oil and gas transmission. Full comparison inside.",
  },
  {
    slug: "hastelloy-vs-inconel",
    tag: "Corrosion Control", date: "Dec 2025", readTime: "7 min read", icon: "🧪",
    title: "Hastelloy C-276 vs Inconel 625 — Which Nickel Alloy for Corrosive Service?",
    excerpt: "Hastelloy C-276 excels in reducing environments (HCl, H2SO4), while Inconel 625 is better at high-temperature oxidising conditions. Detailed comparison with real-world use cases.",
  },
  {
    slug: "understanding-pipe-schedules",
    tag: "Technical Guide", date: "Nov 2025", readTime: "5 min read", icon: "🛢️",
    title: "Pipe Schedules Explained — SCH 5S, 10S, 40, 80, 160, XXS",
    excerpt: "Pipe schedule defines wall thickness. A 2-inch pipe in SCH 40 and SCH 80 has the same outer diameter but very different wall thickness, weight and pressure rating. We explain it all.",
  },
  {
    slug: "titanium-grades-comparison",
    tag: "Material Science", date: "Oct 2025", readTime: "6 min read", icon: "🚀",
    title: "Titanium Grade 2 vs Grade 5 (Ti-6Al-4V) — Properties and Applications",
    excerpt: "Grade 2 is commercially pure titanium — affordable, highly corrosion resistant. Grade 5 adds aluminium and vanadium for aerospace-level strength. Which one do you need?",
  },
  {
    slug: "erw-vs-seamless-pipe",
    tag: "Buyer's Guide", date: "Sep 2025", readTime: "5 min read", icon: "🔩",
    title: "ERW vs Seamless Pipe — When to Use Which?",
    excerpt: "Seamless pipes are made without a weld seam — better for high-pressure, high-temperature critical service. ERW pipes are cost-effective for moderate pressures. Here's the complete breakdown.",
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
