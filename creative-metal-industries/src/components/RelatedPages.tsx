/**
 * RelatedPages — Smart internal linking component for SEO
 * Shows contextually relevant links from OTHER categories on every page.
 * Only links to live product/supplier pages that target the site's keywords.
 */

// ── PAGE REGISTRY: All pages grouped by category ──────────────────────────────

const STAINLESS_STEEL_PAGES = [
  { href: "/ss-304-316l-pipe-supplier-india", label: "SS 304/316L Pipe Supplier" },
  { href: "/ss-seamless-pipe-supplier-india", label: "SS Seamless Pipe India" },
  { href: "/ss-sheet-supplier-vadodara", label: "SS Sheet Supplier Vadodara" },
  { href: "/ss-310-pipe-supplier-india", label: "SS 310 Pipe Supplier" },
  { href: "/ss-310s-plate-supplier-india", label: "SS 310S Plate Supplier" },
  { href: "/ss-321-pipe-supplier-india", label: "SS 321 Pipe Supplier" },
  { href: "/ss-347-pipe-supplier-india", label: "SS 347 Pipe Supplier" },
  { href: "/ss-410-pipe-supplier-india", label: "SS 410 Pipe Supplier" },
  { href: "/ss-430-sheet-supplier-india", label: "SS 430 Sheet Supplier" },
  { href: "/ss-904l-pipe-supplier-india", label: "SS 904L Pipe Supplier" },
  { href: "/stainless-steel-supplier-vadodara", label: "Stainless Steel Vadodara" },
  { href: "/stainless-steel-supplier-gujarat", label: "Stainless Steel Gujarat" },
];

const ALLOY_STEEL_PAGES = [
  { href: "/alloy-steel-pipe-supplier-india", label: "Alloy Steel Pipe India" },
  { href: "/p5-alloy-steel-pipe-supplier", label: "P5 Alloy Steel Pipe" },
  { href: "/p9-alloy-steel-pipe-supplier", label: "P9 Alloy Steel Pipe" },
  { href: "/p11-alloy-steel-pipe-supplier", label: "P11 Alloy Steel Pipe" },
  { href: "/p22-alloy-steel-pipe-supplier", label: "P22 Alloy Steel Pipe" },
  { href: "/p92-alloy-steel-pipe-supplier", label: "P92 Alloy Steel Pipe" },
];

const CARBON_STEEL_PAGES = [
  { href: "/carbon-steel-pipe-supplier-india", label: "Carbon Steel Pipe Supplier" },
  { href: "/carbon-steel-sa516-plate-stockist-india", label: "SA 516 Plate Stockist" },
  { href: "/astm-a36-steel-plate-supplier-india", label: "ASTM A36 Steel Plate" },
  { href: "/a106-gr-b-seamless-pipe-india", label: "A106 Gr B Seamless Pipe" },
  { href: "/a53-erw-pipe-supplier-india", label: "A53 ERW Pipe" },
  { href: "/api-5l-line-pipe-supplier-india", label: "API 5L Line Pipe" },
];

const EXOTIC_ALLOY_PAGES = [
  { href: "/duplex-steel-supplier-vadodara", label: "Duplex Steel Vadodara" },
  { href: "/duplex-2205-plate-supplier-india", label: "Duplex 2205 Plate" },
  { href: "/super-duplex-2507-pipe-supplier", label: "Super Duplex 2507 Pipe" },
  { href: "/inconel-pipe-supplier-india", label: "Inconel Pipe India" },
  { href: "/inconel-600-pipe-supplier-india", label: "Inconel 600 Pipe" },
  { href: "/inconel-718-supplier-india", label: "Inconel 718 Supplier" },
  { href: "/monel-400-pipe-supplier-india", label: "Monel 400 Pipe" },
  { href: "/monel-k500-supplier-india", label: "Monel K500 Supplier" },
  { href: "/hastelloy-pipe-supplier-india", label: "Hastelloy Pipe India" },
  { href: "/hastelloy-c22-pipe-supplier-india", label: "Hastelloy C22 Pipe" },
  { href: "/hastelloy-b2-pipe-supplier-india", label: "Hastelloy B2 Pipe" },
  { href: "/titanium-pipe-supplier-india", label: "Titanium Pipe India" },
  { href: "/titanium-bar-supplier-india", label: "Titanium Bar Supplier" },
  { href: "/titanium-grade-2-pipe-india", label: "Titanium Grade 2 Pipe" },
  { href: "/titanium-grade-5-pipe-india", label: "Titanium Grade 5 Pipe" },
  { href: "/incoloy-800-pipe-supplier-india", label: "Incoloy 800 Pipe" },
  { href: "/incoloy-825-pipe-supplier-india", label: "Incoloy 825 Pipe" },
];

const STRUCTURAL_STEEL_PAGES = [
  { href: "/ms-plate-supplier-india", label: "MS Plate Supplier India" },
  { href: "/ms-angle-channel-supplier-vadodara", label: "MS Angle/Channel Vadodara" },
  { href: "/ms-beam-ismb-supplier-india", label: "MS Beam ISMB India" },
  { href: "/ms-channel-ismc-supplier-india", label: "MS Channel ISMC India" },
  { href: "/ms-flat-bar-supplier-india", label: "MS Flat Bar India" },
];

// Top-level pages every route should reach.
const SITE_PAGES = [
  { href: "/products", label: "All Products" },
  { href: "/stainless-steel-supplier-gujarat", label: "Stainless Steel Gujarat" },
  { href: "/about", label: "About CMI" },
  { href: "/metal-trading", label: "Metal Trading" },
  { href: "/reviews", label: "Customer Reviews" },
  { href: "/sitemap", label: "Site Map" },
];

// ── Category definitions with their page sets ─────────────────────────────────

const ALL_CATEGORIES = [
  { id: "ss", title: "Stainless Steel Products", pages: STAINLESS_STEEL_PAGES },
  { id: "alloy", title: "Alloy Steel Products", pages: ALLOY_STEEL_PAGES },
  { id: "carbon", title: "Carbon Steel Products", pages: CARBON_STEEL_PAGES },
  { id: "exotic", title: "Exotic & Nickel Alloys", pages: EXOTIC_ALLOY_PAGES },
  { id: "structural", title: "Structural Steel", pages: STRUCTURAL_STEEL_PAGES },
];

// ── Determine which category a page belongs to ────────────────────────────────

function detectCategory(currentPath: string): string {
  const p = currentPath.toLowerCase();
  if (p.includes("duplex") || p.includes("inconel") || p.includes("monel") || p.includes("hastelloy") || p.includes("titanium") || p.includes("incoloy")) return "exotic";
  if (p.includes("alloy-steel") || p.includes("/p5-") || p.includes("/p9-") || p.includes("/p11-") || p.includes("/p22-") || p.includes("/p92-")) return "alloy";
  if (p.includes("carbon-steel") || p.includes("a106") || p.includes("a53-") || p.includes("api-5") || p.includes("a36")) return "carbon";
  if (p.includes("ms-")) return "structural";
  if (p.includes("ss-") || p.includes("stainless")) return "ss";
  return "ss"; // default
}

// ── Pick related links from OTHER categories (not the current page's category) ─

function getRelatedLinks(currentPath: string): { title: string; links: { href: string; label: string }[] }[] {
  const currentCategory = detectCategory(currentPath);
  const results: { title: string; links: { href: string; label: string }[] }[] = [];

  // Deterministic shuffle based on path (so each page gets different links)
  const hash = currentPath.split("").reduce((a, c) => a + c.charCodeAt(0), 0);

  for (const cat of ALL_CATEGORIES) {
    if (cat.id === currentCategory) continue; // skip own category

    // Filter out the current page itself
    const available = cat.pages.filter((p) => p.href !== currentPath);
    if (available.length === 0) continue;

    // Pick a few links from each category using deterministic selection
    const count = Math.min(available.length, 4);
    const offset = hash % available.length;
    const picked: { href: string; label: string }[] = [];
    for (let i = 0; i < count; i++) {
      picked.push(available[(offset + i) % available.length]);
    }

    results.push({ title: cat.title, links: picked });
  }

  // Always finish with the company and top-level pages.
  results.push({
    title: "Company & Resources",
    links: SITE_PAGES.filter((p) => p.href !== currentPath),
  });

  return results;
}

// ── Styles ────────────────────────────────────────────────────────────────────

const sectionStyle = {
  "margin-top": "3rem",
  "padding-top": "2rem",
  "border-top": "1px solid #e5e7eb",
};

const headingStyle = {
  "font-size": "1.3rem",
  "font-weight": "700",
  color: "#111827",
  "margin-bottom": "1.5rem",
};

const catTitleStyle = {
  "font-size": "0.82rem",
  "font-weight": "600",
  color: "#6b7280",
  "text-transform": "uppercase" as const,
  "letter-spacing": "0.04em",
  "margin-bottom": "0.5rem",
};

const linkGridStyle = {
  display: "flex",
  "flex-wrap": "wrap" as const,
  gap: "0.4rem",
  "margin-bottom": "1.25rem",
};

const linkStyle = {
  display: "inline-block",
  background: "#f8fafc",
  border: "1px solid #e2e8f0",
  "border-radius": "6px",
  padding: "0.3rem 0.7rem",
  "font-size": "0.78rem",
  "font-weight": "500",
  color: "#334155",
  "text-decoration": "none",
  transition: "all 0.15s ease",
};

// ── Component ─────────────────────────────────────────────────────────────────

export function RelatedPages(props: { currentPath: string }) {
  const sections = getRelatedLinks(props.currentPath);

  return (
    <section style={sectionStyle} aria-label="Related products and guides">
      <h2 style={headingStyle}>Explore More Products</h2>
      {sections.map((sec) => (
        <div>
          <p style={catTitleStyle}>{sec.title}</p>
          <div style={linkGridStyle}>
            {sec.links.map((link) => (
              <a href={link.href} style={linkStyle}>{link.label}</a>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
