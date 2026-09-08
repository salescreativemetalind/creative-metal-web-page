/**
 * RelatedPages — Smart internal linking component for SEO
 * Shows contextually relevant links from OTHER categories on every page.
 * This ensures every page links to 20-30 other pages across the site.
 */

// ── PAGE REGISTRY: All pages grouped by category ──────────────────────────────

const STAINLESS_STEEL_PAGES = [
  { href: "/ss-pipe-supplier-vadodara", label: "SS Pipe Supplier Vadodara" },
  { href: "/ss-304-316l-pipe-supplier-india", label: "SS 304/316L Pipe Supplier" },
  { href: "/ss-seamless-pipe-supplier-india", label: "SS Seamless Pipe India" },
  { href: "/ss-erw-pipe-supplier-vadodara", label: "SS ERW Pipe Vadodara" },
  { href: "/ss-sheet-supplier-vadodara", label: "SS Sheet Supplier Vadodara" },
  { href: "/ss-flanges-supplier-vadodara", label: "SS Flanges Vadodara" },
  { href: "/ss-buttweld-fittings-supplier-india", label: "SS Buttweld Fittings" },
  { href: "/ss-round-bar-supplier-vadodara", label: "SS Round Bar Vadodara" },
  { href: "/ss-310-pipe-supplier-india", label: "SS 310 Pipe Supplier" },
  { href: "/ss-321-pipe-supplier-india", label: "SS 321 Pipe Supplier" },
  { href: "/ss-347-pipe-supplier-india", label: "SS 347 Pipe Supplier" },
  { href: "/ss-904l-pipe-supplier-india", label: "SS 904L Pipe Supplier" },
  { href: "/ss-polished-pipe-supplier-india", label: "SS Polished Pipe" },
  { href: "/ss-square-pipe-supplier-india", label: "SS Square Pipe" },
  { href: "/ss-rectangular-pipe-supplier-india", label: "SS Rectangular Pipe" },
  { href: "/ss-capillary-tube-supplier-india", label: "SS Capillary Tube" },
  { href: "/ss-coil-tube-supplier-india", label: "SS Coil Tube" },
  { href: "/ss-hydraulic-tube-supplier-india", label: "SS Hydraulic Tube" },
  { href: "/ss-instrumentation-tube-supplier-india", label: "SS Instrumentation Tube" },
  { href: "/ss-electropolished-pipe-india", label: "SS Electropolished Pipe" },
  { href: "/ss-reducer-supplier-india", label: "SS Reducer" },
  { href: "/ss-stub-end-supplier-india", label: "SS Stub End" },
  { href: "/ss-u-bend-tube-supplier-india", label: "SS U-Bend Tube" },
  { href: "/stainless-steel-supplier-vadodara", label: "Stainless Steel Vadodara" },
  { href: "/stainless-steel-supplier-gujarat", label: "Stainless Steel Gujarat" },
  { href: "/forged-fittings-supplier-india", label: "Forged Fittings India" },
];

const ALLOY_STEEL_PAGES = [
  { href: "/alloy-steel-pipe-supplier-india", label: "Alloy Steel Pipe India" },
  { href: "/p5-alloy-steel-pipe-supplier", label: "P5 Alloy Steel Pipe" },
  { href: "/p9-alloy-steel-pipe-supplier", label: "P9 Alloy Steel Pipe" },
  { href: "/p11-alloy-steel-pipe-supplier", label: "P11 Alloy Steel Pipe" },
  { href: "/p22-alloy-steel-pipe-supplier", label: "P22 Alloy Steel Pipe" },
  { href: "/p92-alloy-steel-pipe-supplier", label: "P92 Alloy Steel Pipe" },
  { href: "/sa-387-alloy-plate-supplier-india", label: "SA 387 Alloy Plate" },
  { href: "/boiler-tube-supplier-india", label: "Boiler Tube Supplier" },
  { href: "/heat-exchanger-tube-supplier-india", label: "Heat Exchanger Tube" },
];

const CARBON_STEEL_PAGES = [
  { href: "/carbon-steel-pipe-supplier-india", label: "Carbon Steel Pipe Supplier" },
  { href: "/carbon-steel-pipe-fittings-vadodara", label: "CS Pipe Fittings Vadodara" },
  { href: "/carbon-steel-sa516-plate-stockist-india", label: "SA 516 Plate Stockist" },
  { href: "/astm-a36-steel-plate-supplier-india", label: "ASTM A36 Steel Plate" },
  { href: "/carbon-steel-spectacle-blind-india", label: "CS Spectacle Blind" },
  { href: "/a106-gr-b-seamless-pipe-india", label: "A106 Gr B Seamless Pipe" },
  { href: "/a53-erw-pipe-supplier-india", label: "A53 ERW Pipe" },
  { href: "/a333-low-temp-pipe-supplier", label: "A333 Low Temp Pipe" },
  { href: "/a358-welded-pipe-supplier-india", label: "A358 Welded Pipe" },
  { href: "/a691-pipe-supplier-india", label: "A691 Pipe Supplier" },
  { href: "/api-5l-line-pipe-supplier-india", label: "API 5L Line Pipe" },
  { href: "/api-5ct-casing-tubing-india", label: "API 5CT Casing Tubing" },
  { href: "/nace-hic-steel-plate-supplier-india", label: "NACE HIC Steel Plate" },
  { href: "/corten-steel-plate-supplier-india", label: "Corten Steel Plate" },
  { href: "/hardox-wear-plate-supplier-india", label: "Hardox Wear Plate" },
  { href: "/sail-hard-plate-supplier-india", label: "SAIL Hard Plate" },
  { href: "/clad-plate-supplier-india", label: "Clad Plate Supplier" },
];

const EXOTIC_ALLOY_PAGES = [
  { href: "/duplex-steel-supplier-vadodara", label: "Duplex Steel Vadodara" },
  { href: "/duplex-2205-plate-supplier-india", label: "Duplex 2205 Plate" },
  { href: "/duplex-2205-fittings-supplier-india", label: "Duplex 2205 Fittings" },
  { href: "/duplex-2205-flanges-supplier-india", label: "Duplex 2205 Flanges" },
  { href: "/super-duplex-2507-pipe-supplier", label: "Super Duplex 2507 Pipe" },
  { href: "/super-duplex-2507-fittings-supplier", label: "Super Duplex 2507 Fittings" },
  { href: "/super-duplex-2507-flanges-supplier", label: "Super Duplex 2507 Flanges" },
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
  { href: "/copper-nickel-pipe-supplier-india", label: "Copper Nickel Pipe" },
  { href: "/cupro-nickel-9010-pipe-india", label: "CuNi 90/10 Pipe" },
  { href: "/cupro-nickel-7030-pipe-india", label: "CuNi 70/30 Pipe" },
  { href: "/nickel-200-pipe-supplier-india", label: "Nickel 200 Pipe" },
  { href: "/nickel-201-pipe-supplier-india", label: "Nickel 201 Pipe" },
  { href: "/alloy-20-pipe-supplier-india", label: "Alloy 20 Pipe" },
  { href: "/incoloy-800-pipe-supplier-india", label: "Incoloy 800 Pipe" },
  { href: "/incoloy-825-pipe-supplier-india", label: "Incoloy 825 Pipe" },
  { href: "/incoloy-800h-pipe-supplier", label: "Incoloy 800H Pipe" },
  { href: "/incoloy-800ht-tube-supplier", label: "Incoloy 800HT Tube" },
];

const STRUCTURAL_STEEL_PAGES = [
  { href: "/ms-plate-supplier-india", label: "MS Plate Supplier India" },
  { href: "/ms-angle-channel-supplier-vadodara", label: "MS Angle/Channel Vadodara" },
  { href: "/ms-beam-ismb-supplier-india", label: "MS Beam ISMB India" },
  { href: "/ms-channel-ismc-supplier-india", label: "MS Channel ISMC India" },
  { href: "/ms-flat-bar-supplier-india", label: "MS Flat Bar India" },
  { href: "/tmt-bars-supplier-gujarat", label: "TMT Bars Gujarat" },
  { href: "/compression-fittings-supplier-india", label: "Compression Fittings" },
];

const LOCATION_PAGES = [
  { href: "/ss-pipe-supplier-vadodara", label: "Vadodara" },
  { href: "/ss-pipe-supplier-ahmedabad", label: "Ahmedabad" },
  { href: "/ss-pipe-supplier-surat", label: "Surat" },
  { href: "/ss-pipe-supplier-mumbai", label: "Mumbai" },
  { href: "/ss-pipe-supplier-pune", label: "Pune" },
  { href: "/ss-pipe-supplier-rajkot", label: "Rajkot" },
  { href: "/steel-pipe-supplier-chennai", label: "Chennai" },
  { href: "/steel-pipe-supplier-hyderabad", label: "Hyderabad" },
  { href: "/steel-pipe-supplier-bangalore", label: "Bangalore" },
  { href: "/steel-pipe-supplier-kolkata", label: "Kolkata" },
  { href: "/steel-pipe-supplier-delhi", label: "Delhi" },
  { href: "/steel-supplier-bharuch", label: "Bharuch" },
  { href: "/steel-supplier-dahej", label: "Dahej" },
  { href: "/steel-supplier-gidc-makarpura", label: "GIDC Makarpura" },
  { href: "/steel-supplier-nandesari-gidc", label: "Nandesari GIDC" },
  { href: "/steel-supplier-hazira", label: "Hazira" },
  { href: "/steel-pipe-supplier-jaipur", label: "Jaipur" },
  { href: "/steel-pipe-supplier-vizag", label: "Vizag" },
  { href: "/steel-pipe-supplier-coimbatore", label: "Coimbatore" },
  { href: "/steel-supplier-indore", label: "Indore" },
  { href: "/steel-supplier-nagpur", label: "Nagpur" },
  { href: "/ss-pipe-supplier-baroda", label: "Baroda" },
  { href: "/ss-pipe-supplier-ankleshwar", label: "Ankleshwar" },
  { href: "/steel-pipe-supplier-aurangabad", label: "Aurangabad" },
  { href: "/steel-pipe-supplier-bhubaneswar", label: "Bhubaneswar" },
  { href: "/steel-pipe-supplier-gandhidham", label: "Gandhidham" },
  { href: "/steel-pipe-supplier-goa", label: "Goa" },
  { href: "/steel-pipe-supplier-hubli", label: "Hubli" },
  { href: "/steel-pipe-supplier-kochi", label: "Kochi" },
  { href: "/steel-pipe-supplier-ludhiana", label: "Ludhiana" },
  { href: "/steel-pipe-supplier-madurai", label: "Madurai" },
  { href: "/steel-pipe-supplier-navi-mumbai", label: "Navi Mumbai" },
  { href: "/steel-pipe-supplier-thane", label: "Thane" },
  { href: "/steel-pipe-supplier-trichy", label: "Trichy" },
  { href: "/steel-pipe-supplier-vasai", label: "Vasai" },
  { href: "/steel-supplier-ankleshwar-gidc", label: "Ankleshwar GIDC" },
  { href: "/steel-supplier-bhopal", label: "Bhopal" },
  { href: "/steel-supplier-chakan-pune", label: "Chakan Pune" },
  { href: "/steel-supplier-chandigarh", label: "Chandigarh" },
  { href: "/steel-supplier-durgapur", label: "Durgapur" },
  { href: "/steel-supplier-haldia", label: "Haldia" },
  { href: "/steel-supplier-jamnagar", label: "Jamnagar" },
  { href: "/steel-supplier-jhagadia", label: "Jhagadia" },
  { href: "/steel-supplier-kakinada", label: "Kakinada" },
  { href: "/steel-supplier-kandla", label: "Kandla" },
  { href: "/steel-supplier-kanpur", label: "Kanpur" },
  { href: "/steel-supplier-koyali", label: "Koyali" },
  { href: "/steel-supplier-mangalore", label: "Mangalore" },
  { href: "/steel-supplier-mathura", label: "Mathura" },
  { href: "/steel-supplier-mundra", label: "Mundra" },
  { href: "/steel-supplier-numaligarh", label: "Numaligarh" },
  { href: "/steel-supplier-panipat", label: "Panipat" },
  { href: "/steel-supplier-panoli-gidc", label: "Panoli GIDC" },
  { href: "/steel-supplier-paradip", label: "Paradip" },
  { href: "/steel-supplier-patalganga", label: "Patalganga" },
  { href: "/steel-supplier-raipur", label: "Raipur" },
  { href: "/steel-supplier-rourkela", label: "Rourkela" },
  { href: "/steel-supplier-salem", label: "Salem" },
  { href: "/steel-supplier-silvassa", label: "Silvassa" },
  { href: "/steel-supplier-vadodara-gidc", label: "Vadodara GIDC" },
  { href: "/steel-supplier-vapi-gidc", label: "Vapi GIDC" },
];

const PRICE_BLOG_PAGES = [
  { href: "/blog/ss-304-pipe-price-per-kg", label: "SS 304 Pipe Price" },
  { href: "/blog/ss-316l-pipe-price-per-kg", label: "SS 316L Pipe Price" },
  { href: "/blog/ss-pipe-price-list-india", label: "SS Pipe Price List" },
  { href: "/blog/duplex-2205-pipe-price-india", label: "Duplex 2205 Price" },
  { href: "/blog/inconel-625-pipe-price-india", label: "Inconel 625 Price" },
  { href: "/blog/monel-400-pipe-price-india", label: "Monel 400 Price" },
  { href: "/blog/hastelloy-c276-pipe-price", label: "Hastelloy C276 Price" },
  { href: "/blog/titanium-pipe-price-india", label: "Titanium Pipe Price" },
  { href: "/blog/alloy-steel-p91-pipe-price", label: "P91 Pipe Price" },
  { href: "/blog/carbon-steel-a106-pipe-price", label: "A106 Pipe Price" },
  { href: "/blog/erw-pipe-price-india", label: "ERW Pipe Price" },
  { href: "/blog/tmt-bar-price-today-gujarat", label: "TMT Bar Price" },
  { href: "/blog/ms-plate-price-vadodara", label: "MS Plate Price" },
  { href: "/blog/steel-price-forecast-india-2026", label: "Steel Price Forecast 2026" },
];

const WEIGHT_CHART_PAGES = [
  { href: "/blog/ss-pipe-weight-chart", label: "SS Pipe Weight Chart" },
  { href: "/blog/pipe-weight-calculator", label: "Pipe Weight Calculator" },
  { href: "/blog/steel-weight-calculator", label: "Steel Weight Calculator" },
  { href: "/blog/cs-pipe-weight-chart", label: "CS Pipe Weight Chart" },
  { href: "/blog/flange-weight-chart", label: "Flange Weight Chart" },
  { href: "/blog/ms-angle-weight-chart", label: "MS Angle Weight" },
  { href: "/blog/ismc-channel-weight-chart", label: "ISMC Channel Weight" },
  { href: "/blog/ismb-beam-weight-chart", label: "ISMB Beam Weight" },
  { href: "/blog/tmt-bar-weight-chart", label: "TMT Bar Weight" },
  { href: "/blog/pipe-schedule-chart", label: "Pipe Schedule Chart" },
  { href: "/blog/flange-dimensions-chart-150-300", label: "Flange Dimensions" },
  { href: "/blog/ss-pipe-size-chart", label: "SS Pipe Size Chart" },
];

const GUIDE_BLOG_PAGES = [
  { href: "/blog/seamless-vs-welded-ss-pipe", label: "Seamless vs Welded Pipe" },
  { href: "/blog/ss-304-vs-ss-316-difference", label: "SS 304 vs 316" },
  { href: "/blog/duplex-vs-super-duplex", label: "Duplex vs Super Duplex" },
  { href: "/blog/butt-weld-vs-socket-weld", label: "Buttweld vs Socket Weld" },
  { href: "/blog/what-is-ibr-certification", label: "What is IBR?" },
  { href: "/blog/what-is-mill-test-certificate", label: "What is MTC?" },
  { href: "/blog/how-to-read-mill-test-certificate", label: "How to Read MTC" },
  { href: "/blog/ibr-certification-guide", label: "IBR Guide" },
  { href: "/blog/carbon-steel-vs-stainless-steel", label: "CS vs SS" },
  { href: "/blog/erw-vs-seamless-pipe", label: "ERW vs Seamless" },
  { href: "/blog/wn-flange-vs-so-flange", label: "WN vs SO Flange" },
  { href: "/blog/pipe-fittings-selection-guide", label: "Fittings Selection Guide" },
  { href: "/blog/can-carbon-steel-resist-corrosion", label: "Can Carbon Steel Resist Corrosion?" },
  { href: "/blog/can-ss-pipe-be-painted", label: "Can SS Pipe Be Painted?" },
  { href: "/blog/difference-supplier-stockist-dealer", label: "Supplier vs Stockist vs Dealer" },
  { href: "/blog/inconel-vs-monel-guide", label: "Inconel vs Monel" },
  { href: "/blog/industrial-raw-material-supplier-india", label: "Industrial Raw Material Supply" },
  { href: "/blog/ss-flange-types-guide", label: "SS Flange Types" },
  { href: "/blog/ss-pipe-supplier-vadodara-explained", label: "SS Pipes Explained" },
  { href: "/blog/what-is-annealing-ss-pipe", label: "What is Annealing?" },
  { href: "/blog/what-is-bright-annealing-tube", label: "What is Bright Annealing?" },
  { href: "/blog/what-is-cold-worked-pipe", label: "What is Cold Working?" },
  { href: "/blog/what-is-eddy-current-testing", label: "Eddy Current Testing" },
  { href: "/blog/what-is-flattening-test", label: "Flattening Test" },
  { href: "/blog/what-is-heat-number-steel", label: "What is a Heat Number?" },
  { href: "/blog/what-is-hydrostatic-test", label: "Hydrostatic Test" },
  { href: "/blog/what-is-igc-test-ss", label: "IGC Test for SS" },
  { href: "/blog/when-to-use-ss-310-high-temp", label: "When to Use SS 310" },
  { href: "/blog/when-to-use-ss-321-vs-304", label: "SS 321 vs SS 304" },
  { href: "/blog/why-creative-metal-industries", label: "Why Creative Metal Industries" },
];

// Top-level pages every route should reach. These were previously only linked
// from SiteFooter, which renders on the few <PageLayout> routes, leaving them
// with very few internal links (/reviews had 7, /metal-trading 10, /about 19).
const SITE_PAGES = [
  { href: "/products", label: "All Products" },
  { href: "/stainless-steel-supplier-gujarat", label: "Stainless Steel Gujarat" },
  { href: "/blog", label: "Technical Blog" },
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
  { id: "location", title: "Supply Locations", pages: LOCATION_PAGES },
  { id: "price", title: "Price Guides", pages: PRICE_BLOG_PAGES },
  { id: "weight", title: "Weight Charts & Calculators", pages: WEIGHT_CHART_PAGES },
  { id: "guide", title: "Technical Guides", pages: GUIDE_BLOG_PAGES },
];

// ── Determine which category a page belongs to ────────────────────────────────

function detectCategory(currentPath: string): string {
  const p = currentPath.toLowerCase();
  if (p.includes("/blog/") && (p.includes("price") || p.includes("rate") || p.includes("cost"))) return "price";
  if (p.includes("/blog/") && (p.includes("weight") || p.includes("calculator") || p.includes("chart") || p.includes("dimension") || p.includes("size"))) return "weight";
  if (p.includes("/blog/")) return "guide";
  if (p.includes("duplex") || p.includes("inconel") || p.includes("monel") || p.includes("hastelloy") || p.includes("titanium") || p.includes("nickel") || p.includes("incoloy") || p.includes("alloy-20") || p.includes("cupro") || p.includes("copper-nickel")) return "exotic";
  if (p.includes("alloy-steel") || p.includes("/p5-") || p.includes("/p9-") || p.includes("/p11-") || p.includes("/p22-") || p.includes("/p92-") || p.includes("sa-387") || p.includes("boiler-tube") || p.includes("heat-exchanger")) return "alloy";
  if (p.includes("carbon-steel") || p.includes("a106") || p.includes("a53-") || p.includes("a333") || p.includes("a358") || p.includes("a691") || p.includes("api-5") || p.includes("nace") || p.includes("corten") || p.includes("hardox") || p.includes("sail-hard") || p.includes("clad-plate")) return "carbon";
  if (p.includes("ms-") || p.includes("tmt-") || p.includes("compression-fittings")) return "structural";
  if (p.includes("steel-supplier-") || p.includes("steel-pipe-supplier-") || (p.includes("ss-pipe-supplier-") && !p.includes("india"))) return "location";
  if (p.includes("ss-") || p.includes("stainless") || p.includes("forged-fittings")) return "ss";
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
    const available = cat.pages.filter(p => p.href !== currentPath);
    if (available.length === 0) continue;

    // Pick 3-5 links from each category using deterministic selection
    const count = Math.min(available.length, cat.id === "location" ? 5 : 4);
    const offset = hash % available.length;
    const picked: { href: string; label: string }[] = [];
    for (let i = 0; i < count; i++) {
      picked.push(available[(offset + i) % available.length]);
    }

    results.push({ title: cat.title, links: picked });
  }

  // Always finish with the company and top-level pages. Only the handful of
  // routes wrapped in <PageLayout> render SiteNav/SiteFooter, so without this
  // the other ~570 pages offered no route to /about, /products, /reviews,
  // /metal-trading or the state-level hub at all.
  results.push({
    title: "Company & Resources",
    links: SITE_PAGES.filter(p => p.href !== currentPath),
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
      <h2 style={headingStyle}>Explore More Products & Guides</h2>
      {sections.map(sec => (
        <div>
          <p style={catTitleStyle}>{sec.title}</p>
          <div style={linkGridStyle}>
            {sec.links.map(link => (
              <a href={link.href} style={linkStyle}>{link.label}</a>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
