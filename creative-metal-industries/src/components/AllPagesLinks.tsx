/**
 * AllPagesLinks — SEO internal links section for homepage.
 *
 * The blog/guide content this component used to link to has been removed as
 * part of focusing the site strictly on the target product keywords.
 * It now renders the product/supplier landing pages grouped by metal category.
 */

const cardStyle = {
  background: "#fff",
  border: "1px solid #e5e7eb",
  "border-radius": "12px",
  padding: "1.5rem",
  "margin-bottom": "1.5rem",
  "box-shadow": "0 1px 3px rgba(0,0,0,0.04)",
};

const cardHeadingStyle = {
  "font-size": "1.05rem",
  "font-weight": "700",
  color: "#111827",
  margin: "0 0 1rem",
  display: "flex",
  "align-items": "center",
  gap: "0.5rem",
  "padding-bottom": "0.75rem",
  "border-bottom": "2px solid #E8821A",
};

const pillStyle = {
  display: "inline-block",
  background: "#f8fafc",
  border: "1px solid #e2e8f0",
  "border-radius": "20px",
  padding: "0.35rem 0.85rem",
  "font-size": "0.78rem",
  "font-weight": "500",
  color: "#334155",
  "text-decoration": "none",
  transition: "all 0.15s ease",
  "line-height": "1.4",
};

const gridStyle = {
  display: "flex",
  "flex-wrap": "wrap",
  gap: "0.5rem",
};

function LinkCard(props: { icon: string; title: string; links: { href: string; label: string }[] }) {
  return (
    <div style={cardStyle}>
      <h3 style={cardHeadingStyle}>
        <span style={{ "font-size": "1.2rem" }}>{props.icon}</span>
        {props.title}
        <span style={{ "margin-left": "auto", "font-size": "0.75rem", "font-weight": "500", color: "#9ca3af" }}>{props.links.length} pages</span>
      </h3>
      <div style={gridStyle}>
        {props.links.map((l) => (
          <a href={l.href} style={pillStyle}>{l.label}</a>
        ))}
      </div>
    </div>
  );
}

const STAINLESS_LINKS = [
  { href: "/ss-304-316l-pipe-supplier-india", label: "SS 304/316L Pipe" },
  { href: "/ss-seamless-pipe-supplier-india", label: "SS Seamless Pipe" },
  { href: "/ss-310-pipe-supplier-india", label: "SS 310 Pipe" },
  { href: "/ss-310s-plate-supplier-india", label: "SS 310S Plate" },
  { href: "/ss-321-pipe-supplier-india", label: "SS 321 Pipe" },
  { href: "/ss-347-pipe-supplier-india", label: "SS 347 Pipe" },
  { href: "/ss-410-pipe-supplier-india", label: "SS 410 Pipe" },
  { href: "/ss-430-sheet-supplier-india", label: "SS 430 Sheet" },
  { href: "/ss-904l-pipe-supplier-india", label: "SS 904L Pipe" },
  { href: "/ss-sheet-supplier-vadodara", label: "SS Sheet Supplier" },
  { href: "/stainless-steel-supplier-vadodara", label: "Stainless Steel Vadodara" },
  { href: "/stainless-steel-supplier-gujarat", label: "Stainless Steel Gujarat" },
];

const CARBON_LINKS = [
  { href: "/carbon-steel-pipe-supplier-india", label: "Carbon Steel Pipe" },
  { href: "/carbon-steel-sa516-plate-stockist-india", label: "SA 516 Plate" },
  { href: "/a106-gr-b-seamless-pipe-india", label: "A106 Gr B Seamless Pipe" },
  { href: "/a53-erw-pipe-supplier-india", label: "A53 ERW Pipe" },
  { href: "/api-5l-line-pipe-supplier-india", label: "API 5L Line Pipe" },
  { href: "/astm-a36-steel-plate-supplier-india", label: "ASTM A36 Steel Plate" },
];

const ALLOY_LINKS = [
  { href: "/alloy-steel-pipe-supplier-india", label: "Alloy Steel Pipe" },
  { href: "/p5-alloy-steel-pipe-supplier", label: "P5 Alloy Steel Pipe" },
  { href: "/p9-alloy-steel-pipe-supplier", label: "P9 Alloy Steel Pipe" },
  { href: "/p11-alloy-steel-pipe-supplier", label: "P11 Alloy Steel Pipe" },
  { href: "/p22-alloy-steel-pipe-supplier", label: "P22 Alloy Steel Pipe" },
  { href: "/p92-alloy-steel-pipe-supplier", label: "P92 Alloy Steel Pipe" },
];

const DUPLEX_LINKS = [
  { href: "/duplex-steel-supplier-vadodara", label: "Duplex Steel Supplier" },
  { href: "/duplex-2205-plate-supplier-india", label: "Duplex 2205 Plate" },
  { href: "/super-duplex-2507-pipe-supplier", label: "Super Duplex 2507 Pipe" },
];

const NICKEL_LINKS = [
  { href: "/inconel-pipe-supplier-india", label: "Inconel Pipe" },
  { href: "/inconel-600-pipe-supplier-india", label: "Inconel 600 Pipe" },
  { href: "/inconel-718-supplier-india", label: "Inconel 718" },
  { href: "/incoloy-800-pipe-supplier-india", label: "Incoloy 800 Pipe" },
  { href: "/incoloy-825-pipe-supplier-india", label: "Incoloy 825 Pipe" },
  { href: "/hastelloy-pipe-supplier-india", label: "Hastelloy Pipe" },
  { href: "/hastelloy-c22-pipe-supplier-india", label: "Hastelloy C22 Pipe" },
  { href: "/hastelloy-b2-pipe-supplier-india", label: "Hastelloy B2 Pipe" },
  { href: "/monel-400-pipe-supplier-india", label: "Monel 400 Pipe" },
  { href: "/monel-k500-supplier-india", label: "Monel K500" },
];

const TITANIUM_LINKS = [
  { href: "/titanium-pipe-supplier-india", label: "Titanium Pipe" },
  { href: "/titanium-bar-supplier-india", label: "Titanium Bar" },
  { href: "/titanium-grade-2-pipe-india", label: "Titanium Grade 2 Pipe" },
  { href: "/titanium-grade-5-pipe-india", label: "Titanium Grade 5 Pipe" },
];

const STRUCTURAL_LINKS = [
  { href: "/ms-plate-supplier-india", label: "MS Plate" },
  { href: "/ms-angle-channel-supplier-vadodara", label: "MS Angle / Channel" },
  { href: "/ms-beam-ismb-supplier-india", label: "MS Beam ISMB" },
  { href: "/ms-channel-ismc-supplier-india", label: "MS Channel ISMC" },
  { href: "/ms-flat-bar-supplier-india", label: "MS Flat Bar" },
];

export function AllPagesLinks() {
  return (
    <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit, minmax(340px, 1fr))", gap: "1.5rem" }}>
      <LinkCard icon="⚪" title="Stainless Steel" links={STAINLESS_LINKS} />
      <LinkCard icon="⚫" title="Carbon Steel" links={CARBON_LINKS} />
      <LinkCard icon="🔩" title="Alloy Steel (Chrome-Moly)" links={ALLOY_LINKS} />
      <LinkCard icon="🟡" title="Duplex & Super Duplex" links={DUPLEX_LINKS} />
      <LinkCard icon="🟠" title="Nickel Alloys" links={NICKEL_LINKS} />
      <LinkCard icon="🔵" title="Titanium" links={TITANIUM_LINKS} />
      <LinkCard icon="🏗️" title="Mild / Structural Steel" links={STRUCTURAL_LINKS} />
    </div>
  );
}
