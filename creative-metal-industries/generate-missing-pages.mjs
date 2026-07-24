#!/usr/bin/env node
/**
 * Generates missing location + product pages for Creative Metal Industries
 * Run: node generate-missing-pages.mjs
 */
import { writeFileSync, existsSync } from "fs";
import { join } from "path";

const ROUTES = join(import.meta.dirname, "src/routes");
let created = 0;

// ═══════════════════════════════════════════════════════════════
// LOCATION PAGES DATA
// ═══════════════════════════════════════════════════════════════
const LOCATION_PAGES = [
  {
    slug: "ss-pipe-supplier-rajkot",
    city: "Rajkot",
    state: "Gujarat",
    keyword: "SS pipe supplier Rajkot, stainless steel dealer Rajkot",
    distance: "210 km",
    delivery: "1-2 days",
    industries: [
      { icon: "🔧", name: "Engineering & Auto Parts", desc: "Rajkot is India's engineering hub — SS round bars, pipes for CNC, forging, auto components" },
      { icon: "🏭", name: "Diesel Engine & Pump Mfg", desc: "Aji GIDC, Metoda GIDC — SS and CS pipes for pump casings, diesel engine parts" },
      { icon: "🛢️", name: "Oil & Gas Equipment", desc: "Wellhead equipment, valve bodies — alloy steel, duplex, exotic alloy pipes" },
      { icon: "🏗️", name: "Construction", desc: "Rajkot's growing infrastructure — structural steel, TMT bars, MS sections" },
    ],
    faqs: [
      { q: "Who is the best SS pipe supplier in Rajkot?", a: "Creative Metal Industries supplies SS 304, 316L, 321, 310 pipes to Rajkot's engineering industries. 1-2 day delivery from Vadodara (210 km). We serve Aji GIDC, Metoda GIDC, Lodhika and all Rajkot industrial areas. Call +91 99982 80619." },
      { q: "What is SS pipe price in Rajkot?", a: "SS 304 pipe price in Rajkot: seamless Rs 240-420/kg, welded Rs 170-300/kg. We offer mill-direct rates from Jindal, SAIL. Better than local dealers. Call for today's rate." },
      { q: "Do you supply SS round bars to Rajkot?", a: "Yes, SS round bars 304, 316, 410, 431 in 6mm to 300mm diameter. Both bright drawn and black finish. SAIL, Viraj makes. Ready stock for Rajkot's CNC and engineering shops." },
    ]
  },
  {
    slug: "ss-pipe-supplier-pune",
    city: "Pune",
    state: "Maharashtra",
    keyword: "SS pipe supplier Pune, SS pipe dealer Pune",
    distance: "530 km",
    delivery: "2-3 days",
    industries: [
      { icon: "🚗", name: "Automobile — Chakan/Pimpri", desc: "Tata Motors, Bajaj, Force Motors — SS tubes, precision pipes for auto industry" },
      { icon: "🏭", name: "Pharma & Biotech", desc: "Hinjewadi, Ranjangaon — SS 316L electropolished pipes for pharma clean rooms" },
      { icon: "⚡", name: "Power & Energy", desc: "Bhimashankar, industrial power plants — alloy steel P91/P22 boiler pipes" },
      { icon: "🔬", name: "Chemical Plants — MIDC", desc: "Kurkumbh MIDC, Ranjangaon MIDC — duplex, Hastelloy for chemical processing" },
    ],
    faqs: [
      { q: "Who supplies SS pipes in Pune?", a: "Creative Metal Industries is a trusted SS pipe supplier for Pune. We supply SS 304, 316L, 321, duplex 2205 pipes to Chakan, Pimpri-Chinchwad, Hinjewadi and all Pune MIDC areas. 2-3 day delivery from Vadodara. Call +91 99982 80619." },
      { q: "What is delivery time to Pune?", a: "2-3 working days from Vadodara (530 km via NH48). Daily transport available. Express 48-hour delivery for urgent needs. We serve all Pune industrial areas including Chakan, Ranjangaon, Kurkumbh MIDC." },
      { q: "Do you supply pharma grade SS pipe to Pune?", a: "Yes, SS 316L seamless pipes with electropolished (EP) and mirror finish for pharma applications. ASTM A270 sanitary tubes, ASME BPE compliant. Surface finish Ra 0.4 to Ra 0.8 micron. Complete material certificates provided." },
    ]
  },
  {
    slug: "steel-supplier-bharuch",
    city: "Bharuch",
    state: "Gujarat",
    keyword: "steel supplier Bharuch, SS pipe supplier Bharuch",
    distance: "75 km",
    delivery: "Same day",
    industries: [
      { icon: "🏭", name: "Chemical & Fertilizer", desc: "GNFC, GSFC Dahej corridor — SS 316L, Hastelloy, duplex for chemical plants" },
      { icon: "🛢️", name: "Oil & Gas — PCPIR", desc: "Dahej-Bharuch PCPIR — refinery grade CS, alloy, exotic alloy pipes" },
      { icon: "⚡", name: "Thermal Power", desc: "Bharuch thermal power plants — boiler tubes, P91 alloy steel" },
      { icon: "🔬", name: "Pharma — Ankleshwar GIDC", desc: "Pharma and dye intermediates — SS pipes, reactor vessels material" },
    ],
    faqs: [
      { q: "Who is the best steel supplier in Bharuch?", a: "Creative Metal Industries is just 75 km from Bharuch. Same-day delivery of SS, CS, alloy steel pipes. We supply to GNFC, Dahej PCPIR, Ankleshwar GIDC. Complete range with MTC. Call +91 99982 80619." },
      { q: "Do you supply to Dahej industrial area from Vadodara?", a: "Yes, Dahej is 90 km from our Vadodara warehouse. Same-day delivery. We supply SS, duplex, alloy steel, and exotic alloy pipes to ONGC, Reliance, IOCL, and all Dahej PCPIR companies." },
    ]
  },
  {
    slug: "ss-pipe-supplier-ankleshwar",
    city: "Ankleshwar",
    state: "Gujarat",
    keyword: "SS pipe supplier Ankleshwar, pipe fittings Ankleshwar GIDC",
    distance: "95 km",
    delivery: "Same day",
    industries: [
      { icon: "🔬", name: "Chemical & Dye Industry", desc: "Ankleshwar GIDC — India's largest chemical zone. SS 316L, Hastelloy for acid-resistant piping" },
      { icon: "💊", name: "Pharmaceuticals", desc: "Pharma units in GIDC — SS 316L electro-polished pipes, sanitary fittings" },
      { icon: "🏭", name: "Agrochemicals", desc: "Pesticide and fertilizer plants — duplex, alloy steel for corrosive environments" },
      { icon: "⚡", name: "Process Plants", desc: "Reactor vessels, heat exchangers — exotic alloy plates and pipes" },
    ],
    faqs: [
      { q: "Who supplies SS pipes to Ankleshwar GIDC?", a: "Creative Metal Industries is the closest SS pipe supplier to Ankleshwar GIDC (just 95 km from Vadodara). Same-day delivery. SS 304, 316L, 321, duplex 2205, Hastelloy C276 — all grades for chemical industry. Call +91 99982 80619." },
      { q: "What material is best for chemical plants in Ankleshwar?", a: "For acid environments: SS 316L for mild acids, Hastelloy C276 for HCl/mixed acids, Duplex 2205 for chloride environments. We stock all these grades. Our team can recommend the right material based on your process conditions." },
    ]
  },
  {
    slug: "ss-pipe-supplier-baroda",
    city: "Baroda (Vadodara)",
    state: "Gujarat",
    keyword: "SS pipe supplier Baroda, stainless steel pipe Baroda",
    distance: "Local",
    delivery: "Same day / Walk-in",
    industries: [
      { icon: "🛢️", name: "IOCL Koyali Refinery", desc: "Gujarat Refinery piping — SS, CS, alloy steel for shutdown and new projects" },
      { icon: "🏭", name: "GIDC Makarpura & Nandesari", desc: "Chemical, pharma, engineering — SS 316L, duplex pipes for process plants" },
      { icon: "⚡", name: "NTPC & Power", desc: "Thermal power plants — boiler tubes, P91/P22 alloy steel pipes, IBR certified" },
      { icon: "🏗️", name: "Construction & Infra", desc: "Vadodara Metro, roads, buildings — TMT bars, structural steel, MS sections" },
    ],
    faqs: [
      { q: "Where is the best SS pipe supplier in Baroda?", a: "Creative Metal Industries is located in Vadodara (Baroda) itself — at Lakkadpitha Road and GIDC Makarpura. Walk-in and pick up or same-day delivery anywhere in Baroda. We are the city's largest SS and alloy steel stockist since 2012. Call +91 99982 80619." },
      { q: "Can I visit your warehouse in Baroda?", a: "Yes! Our warehouse is at 386/B, GIDC Estate, Makarpura, Vadodara. Walk-in welcome. View stock, select material, and take delivery same day. Office hours: 10 AM to 7 PM, Monday to Saturday." },
    ]
  },
  {
    slug: "stainless-steel-supplier-gujarat",
    city: "Gujarat (State-wide)",
    state: "Gujarat",
    keyword: "stainless steel supplier Gujarat, SS pipe supplier Gujarat",
    distance: "State-wide",
    delivery: "1-3 days across Gujarat",
    industries: [
      { icon: "🛢️", name: "Oil & Gas — Jamnagar, Dahej, Hazira", desc: "Reliance Jamnagar, ONGC Hazira, Dahej PCPIR — all grades available" },
      { icon: "🏭", name: "Chemical Corridor — Ankleshwar to Vapi", desc: "India's chemical belt — SS 316L, Hastelloy, duplex for acid plants" },
      { icon: "⚡", name: "Power Plants — State-wide", desc: "GSECL, NTPC, Adani — boiler tubes, alloy steel P91/P22" },
      { icon: "💎", name: "Diamond & Textile — Surat", desc: "Boiler pipes, steam lines for textile and diamond polishing" },
      { icon: "🏗️", name: "Infrastructure — GIFT City, Metro", desc: "Structural steel for Gujarat's mega infrastructure projects" },
    ],
    faqs: [
      { q: "Who is the largest stainless steel supplier in Gujarat?", a: "Creative Metal Industries is one of Gujarat's leading stainless steel suppliers with 2000+ tonnes ready stock at GIDC Makarpura, Vadodara. We supply SS 304, 316L, 321, 310, 904L, duplex 2205, and exotic alloys to all districts of Gujarat. Same-day delivery within 200 km, 1-3 days state-wide." },
      { q: "Do you deliver stainless steel across Gujarat?", a: "Yes, we deliver across Gujarat — Ahmedabad, Surat, Rajkot, Bharuch, Ankleshwar, Vapi, Jamnagar, Bhavnagar, Gandhinagar, Mehsana and all GIDC areas. Own transport for local areas, dedicated carriers for long-distance. Call +91 99982 80619." },
    ]
  },
  {
    slug: "steel-supplier-gidc-makarpura",
    city: "GIDC Makarpura, Vadodara",
    state: "Gujarat",
    keyword: "steel supplier GIDC Makarpura, pipe supplier Makarpura Vadodara",
    distance: "Located here",
    delivery: "Immediate / Walk-in",
    industries: [
      { icon: "🏭", name: "Chemical Plants in GIDC", desc: "SS 316L, Hastelloy, duplex pipes for chemical process plants in Makarpura estate" },
      { icon: "🔧", name: "Engineering & Fabrication", desc: "Pipes, plates, bars for fabrication shops and engineering units" },
      { icon: "💊", name: "Pharma Units", desc: "SS 316L electropolished pipes and fittings for pharma clean rooms" },
      { icon: "⚡", name: "Power Equipment Mfg", desc: "Boiler components, heat exchanger material for OEMs in GIDC" },
    ],
    faqs: [
      { q: "Where is CMI warehouse in GIDC Makarpura?", a: "Our warehouse is at 386/B, GIDC Estate, Makarpura, Vadodara 390010. Walk-in welcome. We stock 2000+ tonnes of SS, CS, alloy steel, structural steel. Self-pickup or immediate delivery within GIDC. Call +91 99982 80619 for directions." },
      { q: "Can I buy small quantities from your Makarpura warehouse?", a: "Yes, we supply from single piece/plate to bulk quantities. Walk-in customers welcome. No minimum order for ready stock items. Cut-to-size service available on-site for plates and pipes." },
    ]
  },
  {
    slug: "steel-supplier-nandesari-gidc",
    city: "Nandesari GIDC, Vadodara",
    state: "Gujarat",
    keyword: "steel supplier Nandesari GIDC, pipe fittings Nandesari",
    distance: "15 km",
    delivery: "Same day / Hours",
    industries: [
      { icon: "🔬", name: "Chemical Plants", desc: "Nandesari chemical zone — SS 316L, Hastelloy for acid and alkali service" },
      { icon: "💊", name: "Pharma & API Units", desc: "Active pharma ingredient plants — SS 316L EP pipes, sanitary fittings" },
      { icon: "🏭", name: "Dye & Pigment Industry", desc: "Reactive dye plants — corrosion resistant duplex, alloy pipes" },
      { icon: "⚡", name: "Agrochemicals", desc: "Pesticide manufacturing — exotic alloys for highly corrosive processes" },
    ],
    faqs: [
      { q: "Do you supply to Nandesari GIDC?", a: "Yes, Nandesari GIDC is just 15 km from our Makarpura warehouse. We deliver within hours. Regular supply to chemical, pharma, and dye plants in Nandesari. SS 304, 316L, 321, duplex 2205, Hastelloy C276 — all grades stocked. Call +91 99982 80619." },
      { q: "What pipe material is suitable for chemical plants in Nandesari?", a: "SS 316L for general service, SS 316Ti for high-temp acids, Hastelloy C276 for HCl/mixed acids, Duplex 2205 for chloride media, Alloy 20 for sulphuric acid. We stock all and can recommend based on your process. Free material consultation available." },
    ]
  },
];

// ═══════════════════════════════════════════════════════════════
// PRODUCT LANDING PAGES DATA
// ═══════════════════════════════════════════════════════════════
const PRODUCT_PAGES = [
  { slug: "monel-400-pipe-supplier-india", h1: "Monel 400 Pipe Supplier India", keyword: "Monel 400 pipe supplier India, Monel pipe stockist", material: "Monel 400 (UNS N04400)", standard: "ASTM B165 / B829", grades: "Monel 400, Monel K-500", sizes: "1/2\" to 10\" NB, SCH 10 to XXS", apps: "Marine, HF acid, seawater, oil & gas" },
  { slug: "hastelloy-pipe-supplier-india", h1: "Hastelloy Pipe Supplier India", keyword: "Hastelloy pipe supplier India, Hastelloy C-276 pipe", material: "Hastelloy C-276 / C-22", standard: "ASTM B622 / B619", grades: "C-276, C-22, C-4, B-2, B-3, X", sizes: "1/2\" to 12\" NB, SCH 10S to XXS", apps: "Chemical plants, HCl, H2SO4, wet chlorine" },
  { slug: "copper-nickel-pipe-supplier-india", h1: "Copper Nickel Pipe Supplier India", keyword: "copper nickel pipe supplier India, CuNi 70/30 pipe", material: "Copper Nickel 70/30 & 90/10", standard: "ASTM B466 / B467", grades: "C71500 (70/30), C70600 (90/10)", sizes: "1/2\" to 12\" NB", apps: "Marine, desalination, heat exchangers, offshore" },
  { slug: "boiler-tube-supplier-india", h1: "Boiler Tube Supplier India", keyword: "boiler tube supplier India, SA 179 boiler tube", material: "Carbon & Alloy Steel", standard: "ASTM A179 / A192 / A210 / A213", grades: "SA 179, SA 192, SA 210 Gr.A1, SA 213 T11/T22/T91", sizes: "1/2\" to 5\" OD, all BWG", apps: "Boilers, superheaters, economizers, IBR" },
  { slug: "ss-round-bar-supplier-vadodara", h1: "SS Round Bar Supplier Vadodara", keyword: "SS round bar supplier Vadodara, stainless steel rod", material: "Stainless Steel", standard: "ASTM A276 / A479", grades: "304, 316, 316L, 321, 310, 410, 420, 431, 17-4PH", sizes: "6mm to 300mm diameter", apps: "CNC machining, shafts, fasteners, valves" },
  { slug: "ss-sheet-supplier-vadodara", h1: "SS Sheet Supplier Vadodara", keyword: "SS sheet supplier Vadodara, SS 304 sheet 2B finish", material: "Stainless Steel", standard: "ASTM A240 / A480", grades: "304, 316L, 321, 310, 409, 430, 904L", sizes: "0.4mm to 6mm thick, all widths", apps: "Kitchen, pharma, architecture, food processing" },
  { slug: "titanium-pipe-supplier-india", h1: "Titanium Pipe Supplier India", keyword: "titanium pipe supplier India, titanium Grade 2 pipe", material: "Titanium Gr.1, Gr.2, Gr.5", standard: "ASTM B861 / B862 / B337", grades: "Grade 1 (CP), Grade 2 (CP), Grade 5 (Ti-6Al-4V)", sizes: "1/2\" to 8\" NB", apps: "Chemical, desalination, aerospace, medical" },
  { slug: "ss-instrumentation-tube-supplier-india", h1: "SS Instrumentation Tube Supplier India", keyword: "SS instrumentation tube supplier India, ASTM A269 tube", material: "Stainless Steel", standard: "ASTM A269 / A213", grades: "TP 304, 304L, 316, 316L, 321, 825", sizes: "1/8\" to 1\" OD, 0.035\" to 0.120\" wall", apps: "Instrumentation, chemical injection, hydraulic" },
  { slug: "compression-fittings-supplier-india", h1: "Compression Tube Fittings Supplier India", keyword: "compression tube fittings supplier India, Swagelok type fittings", material: "SS 316 / Alloy", standard: "ASME B16.11 / MSS SP-79", grades: "SS 316, 316L, Duplex 2205, Monel 400", sizes: "3mm to 38mm tube OD", apps: "Instrumentation, chemical injection, sampling" },
  { slug: "api-5l-line-pipe-supplier-india", h1: "API 5L Line Pipe Supplier India", keyword: "API 5L line pipe supplier India, line pipe X52 X60", material: "Carbon Steel", standard: "API 5L PSL1 & PSL2", grades: "Gr.B, X42, X46, X52, X56, X60, X65, X70", sizes: "2\" to 48\", all wall thicknesses", apps: "Oil & gas pipelines, transmission, distribution" },
  { slug: "clad-plate-supplier-india", h1: "Clad Plate Supplier India", keyword: "clad plate supplier India, explosion bonded plate", material: "Bimetal Clad Steel", standard: "ASTM A263 / A264 / A265", grades: "CS+SS, CS+Inconel, CS+Monel, CS+Titanium", sizes: "6mm to 100mm total thickness", apps: "Pressure vessels, reactors, heat exchangers" },
  { slug: "heat-exchanger-tube-supplier-india", h1: "Heat Exchanger Tube Supplier India", keyword: "heat exchanger tube supplier India, condenser tube", material: "SS, CuNi, Titanium", standard: "ASTM A249 / A213 / B111 / B338", grades: "SS 304/316L, CuNi 70/30, Titanium Gr.2, Duplex 2205", sizes: "5/8\" to 1.5\" OD, various BWG", apps: "Shell & tube exchangers, condensers, coolers" },
  { slug: "ss-erw-pipe-supplier-vadodara", h1: "SS ERW Pipe Supplier Vadodara", keyword: "SS ERW pipe supplier Vadodara, stainless steel ERW pipe Gujarat", material: "Stainless Steel", standard: "ASTM A312 (ERW)", grades: "TP 304, 304L, 316, 316L, 202", sizes: "15NB to 200NB, SCH 5S to 40S", apps: "Water, food processing, general engineering" },
  { slug: "incoloy-800-pipe-supplier-india", h1: "Incoloy 800/800H/800HT Pipe Supplier India", keyword: "Incoloy 800 pipe supplier India, Incoloy 800HT pipe", material: "Incoloy 800/800H/800HT", standard: "ASTM B407 / B514", grades: "800 (N08800), 800H (N08810), 800HT (N08811)", sizes: "1/2\" to 10\" NB", apps: "Petrochemical furnaces, ethylene crackers, heat treatment" },
  { slug: "ms-angle-channel-supplier-vadodara", h1: "MS Angle & Channel Supplier Vadodara", keyword: "MS angle supplier Vadodara, MS channel ISMC supplier Gujarat", material: "Mild Steel IS 2062", standard: "IS 808, IS 2062 E250", grades: "E250 BR/A, E350 BR/A", sizes: "Angle 25x25 to 200x200, Channel ISMC 75 to 400", apps: "Structural, crane girders, buildings, conveyors" },
  { slug: "forged-fittings-supplier-india", h1: "Forged Fittings Supplier India", keyword: "forged fittings supplier India, socket weld fittings", material: "SS, CS, Alloy, Duplex", standard: "ASTM A182 / A105 / ASME B16.11", grades: "F304, F316L, F321, A105, F11, F22, F51, F53", sizes: "1/8\" to 4\", 2000# to 9000#", apps: "High-pressure piping, instrumentation, chemical" },
];

// ═══════════════════════════════════════════════════════════════
// LOCATION PAGE GENERATOR
// ═══════════════════════════════════════════════════════════════
function generateLocationPage(page) {
  const { slug, city, state, keyword, distance, delivery, industries, faqs } = page;
  const url = `https://www.creativemetalind.com/${slug}`;
  const funcName = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("");

  const industriesJsx = industries.map(ind =>
    `          <div style={{ background: "#f9fafb", padding: "1.2rem", "border-radius": "8px", border: "1px solid #e5e7eb" }}><p style={{ "font-size": "1.5rem", margin: "0 0 0.3rem" }}>${ind.icon}</p><h3 style={{ margin: "0 0 0.3rem", "font-size": "1rem" }}>${ind.name}</h3><p style={{ margin: 0, "font-size": "0.88rem", color: "#6b7280" }}>${ind.desc}</p></div>`
  ).join("\n");

  const faqsJsx = faqs.map(f =>
    `          <div style={{ "margin-bottom": "1.5rem", background: "#f9fafb", padding: "1.2rem", "border-radius": "8px" }}><h3 style={{ margin: "0 0 0.5rem", "font-size": "1rem" }}>${f.q}</h3><p style={{ margin: 0, "font-size": "0.92rem", color: "#4b5563", "line-height": "1.7" }}>${f.a}</p></div>`
  ).join("\n");

  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "LocalBusiness", "name": `Creative Metal Industries — ${city}`, "description": `Steel pipe and fittings supplier serving ${city}, ${state}. SS, CS, alloy steel, duplex and exotic alloy pipes.`, "telephone": "+91-99982-80619", "url": url, "address": { "@type": "PostalAddress", "streetAddress": "386/B GIDC Estate, Makarpura", "addressLocality": "Vadodara", "addressRegion": "Gujarat", "postalCode": "390010", "addressCountry": "IN" }, "areaServed": { "@type": "City", "name": city, "containedInPlace": { "@type": "State", "name": state } }, "priceRange": "$$" },
      { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creativemetalind.com" }, { "@type": "ListItem", "position": 2, "name": page.h1 || `Steel Supplier ${city}`, "item": url }] }
    ]
  });

  const faqSchema = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) });

  return `/**
 * /${slug}
 * Target: ${keyword}
 */
import { Title, Meta, Link } from "@solidjs/meta";

const SCHEMA = '${schema.replace(/'/g, "\\'")}';
const FAQ_SCHEMA = '${faqSchema.replace(/'/g, "\\'")}';

export default function ${funcName}() {
  return (<>
    <Title>${slug.includes("ss-pipe") ? "SS Pipe Supplier" : "Steel Supplier"} ${city} | Creative Metal Industries</Title>
    <Meta name="robots" content="index, follow, max-image-preview:large" />
    <Meta name="description" content="${keyword}. ${delivery} delivery from Vadodara. All grades SS, CS, alloy steel pipes, fittings & flanges. Call +91 99982 80619." />
    <Link rel="canonical" href="${url}" />
    <Meta property="og:title" content="${slug.includes("ss-pipe") ? "SS Pipe Supplier" : "Steel Supplier"} ${city} | CMI" />
    <Meta property="og:type" content="website" />
    <Meta property="og:description" content="${keyword}. ${delivery} delivery. Creative Metal Industries Vadodara." />
    <Meta property="og:url" content="${url}" />
    <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
    <Meta name="twitter:card" content="summary_large_image" />
    <script type="application/ld+json" innerHTML={SCHEMA} />
    <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

    <nav style={{ background: "#fff", "border-bottom": "1px solid #e5e7eb", padding: "1rem 1.5rem", display: "flex", "align-items": "center", gap: "1rem" }}>
      <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries" width="140" height="71" /></a>
      <div style={{ flex: 1 }} />
      <a href="/#contact" style={{ background: "#E8821A", color: "#fff", padding: "0.5rem 1.2rem", "border-radius": "6px", "font-weight": "700", "font-size": "0.85rem", "text-decoration": "none" }}>Get Quote</a>
    </nav>
    <div style={{ background: "#f9fafb", "border-bottom": "1px solid #e5e7eb", padding: "0.6rem 1.5rem", "font-size": "0.82rem", color: "#6b7280" }}>
      <a href="/" style={{ color: "#E8821A", "text-decoration": "none" }}>Home</a><span style={{ margin: "0 0.5rem" }}>{"\\u203A"}</span><span>${slug.includes("ss-pipe") ? "SS Pipe Supplier" : "Steel Supplier"} ${city}</span>
    </div>

    <main style={{ "max-width": "960px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <div style={{ "margin-bottom": "2.5rem", "text-align": "center" }}>
        <h1 style={{ "font-size": "clamp(1.8rem,4vw,2.6rem)", "font-weight": "800", color: "#111827", margin: "0 0 1rem" }}>${slug.includes("ss-pipe") ? "SS Pipe Supplier" : "Steel Supplier"} in ${city} — Pipes, Fittings & Flanges</h1>
        <p style={{ "font-size": "1.1rem", color: "#4b5563", "max-width": "700px", margin: "0 auto 1.5rem" }}>Creative Metal Industries supplies SS, carbon steel, alloy steel, duplex and exotic alloy pipes to ${city}. Distance: ${distance} from Vadodara. Delivery: ${delivery}.</p>
        <div style={{ display: "flex", gap: "1rem", "justify-content": "center", "flex-wrap": "wrap" }}>
          <a href="tel:+919998280619" style={{ background: "#E8821A", color: "#fff", padding: "0.8rem 1.5rem", "border-radius": "8px", "font-weight": "700", "text-decoration": "none" }}>📞 +91 99982 80619</a>
          <a href="https://wa.me/919998280619" style={{ background: "#25D366", color: "#fff", padding: "0.8rem 1.5rem", "border-radius": "8px", "font-weight": "700", "text-decoration": "none" }}>💬 WhatsApp</a>
        </div>
      </div>

      <section style={{ "margin-bottom": "3rem" }}>
        <h2>Industries We Serve in ${city}</h2>
        <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
${industriesJsx}
        </div>
      </section>

      <section style={{ "margin-bottom": "3rem" }}>
        <h2>Frequently Asked Questions</h2>
${faqsJsx}
      </section>

      <div style={{ background: "linear-gradient(135deg, #E8821A 0%, #d97706 100%)", "border-radius": "12px", padding: "2.5rem", "text-align": "center", color: "#fff" }}>
        <h2 style={{ margin: "0 0 0.5rem" }}>Need Steel Pipes in ${city}? Call Now!</h2>
        <p style={{ margin: "0 0 1.5rem", opacity: 0.9 }}>${delivery} dispatch. Best prices guaranteed.</p>
        <div style={{ display: "flex", gap: "1rem", "justify-content": "center", "flex-wrap": "wrap" }}>
          <a href="tel:+919998280619" style={{ background: "#fff", color: "#E8821A", padding: "0.8rem 1.5rem", "border-radius": "8px", "font-weight": "700", "text-decoration": "none" }}>📞 +91 99982 80619</a>
          <a href="https://wa.me/919998280619" style={{ background: "#25D366", color: "#fff", padding: "0.8rem 1.5rem", "border-radius": "8px", "font-weight": "700", "text-decoration": "none" }}>💬 WhatsApp Us</a>
        </div>
      </div>
    </main>

    <footer style={{ background: "#111827", color: "#9ca3af", padding: "2rem 1.5rem", "text-align": "center", "font-size": "0.85rem" }}>
      <p>© 2026 Creative Metal Industries, Vadodara. All rights reserved.</p>
      <p><a href="/privacy-policy" style={{ color: "#9ca3af" }}>Privacy Policy</a> · <a href="/terms" style={{ color: "#9ca3af" }}>Terms</a> · <a href="/sitemap" style={{ color: "#9ca3af" }}>Sitemap</a></p>
    </footer>
  </>);
}
`;
}

// ═══════════════════════════════════════════════════════════════
// PRODUCT PAGE GENERATOR
// ═══════════════════════════════════════════════════════════════
function generateProductPage(page) {
  const { slug, h1, keyword, material, standard, grades, sizes, apps } = page;
  const url = `https://www.creativemetalind.com/${slug}`;
  const funcName = slug.split("-").map(w => {
    if (w === "ss") return "SS";
    if (w === "ms") return "MS";
    if (w === "api") return "API";
    return w.charAt(0).toUpperCase() + w.slice(1);
  }).join("");

  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Product", "name": h1, "description": `${keyword}. ${material} — ${standard}. Ready stock at CMI Vadodara.`, "brand": { "@type": "Organization", "name": "Creative Metal Industries" }, "manufacturer": { "@type": "Organization", "name": "Creative Metal Industries" }, "offers": { "@type": "AggregateOffer", "priceCurrency": "INR", "lowPrice": "200", "highPrice": "25000", "offerCount": "500+", "availability": "https://schema.org/InStock" }, "url": url },
      { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creativemetalind.com" }, { "@type": "ListItem", "position": 2, "name": h1, "item": url }] }
    ]
  });

  return `/**
 * /${slug}
 * Target: ${keyword}
 */
import { Title, Meta, Link } from "@solidjs/meta";

const SCHEMA = '${schema.replace(/'/g, "\\'")}';

export default function ${funcName}() {
  return (<>
    <Title>${h1} | CMI Vadodara</Title>
    <Meta name="robots" content="index, follow, max-image-preview:large" />
    <Meta name="description" content="${keyword}. ${standard}. ${grades}. Sizes ${sizes}. Ready stock Vadodara. Call +91 99982 80619." />
    <Link rel="canonical" href="${url}" />
    <Meta property="og:title" content="${h1} | Creative Metal Industries" />
    <Meta property="og:type" content="website" />
    <Meta property="og:description" content="${keyword}. Ready stock at CMI Vadodara." />
    <Meta property="og:url" content="${url}" />
    <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
    <Meta name="twitter:card" content="summary_large_image" />
    <script type="application/ld+json" innerHTML={SCHEMA} />

    <nav style={{ background: "#fff", "border-bottom": "1px solid #e5e7eb", padding: "1rem 1.5rem", display: "flex", "align-items": "center", gap: "1rem" }}>
      <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries" width="140" height="71" /></a>
      <div style={{ flex: 1 }} />
      <a href="/#contact" style={{ background: "#E8821A", color: "#fff", padding: "0.5rem 1.2rem", "border-radius": "6px", "font-weight": "700", "font-size": "0.85rem", "text-decoration": "none" }}>Get Quote</a>
    </nav>
    <div style={{ background: "#f9fafb", "border-bottom": "1px solid #e5e7eb", padding: "0.6rem 1.5rem", "font-size": "0.82rem", color: "#6b7280" }}>
      <a href="/" style={{ color: "#E8821A", "text-decoration": "none" }}>Home</a><span style={{ margin: "0 0.5rem" }}>{"\\u203A"}</span><span>${h1}</span>
    </div>

    <main style={{ "max-width": "960px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <div style={{ "margin-bottom": "2.5rem", "text-align": "center" }}>
        <h1 style={{ "font-size": "clamp(1.8rem,4vw,2.4rem)", "font-weight": "800", color: "#111827", margin: "0 0 1rem" }}>${h1}</h1>
        <p style={{ "font-size": "1.1rem", color: "#4b5563", "max-width": "700px", margin: "0 auto 1.5rem" }}>Creative Metal Industries is a leading supplier of ${material} pipes, fittings and related products in India. Complete range as per ${standard}. Ready stock at our Vadodara warehouse with nationwide delivery.</p>
        <div style={{ display: "flex", gap: "1rem", "justify-content": "center", "flex-wrap": "wrap" }}>
          <a href="tel:+919998280619" style={{ background: "#E8821A", color: "#fff", padding: "0.8rem 1.5rem", "border-radius": "8px", "font-weight": "700", "text-decoration": "none" }}>📞 +91 99982 80619</a>
          <a href="https://wa.me/919998280619" style={{ background: "#25D366", color: "#fff", padding: "0.8rem 1.5rem", "border-radius": "8px", "font-weight": "700", "text-decoration": "none" }}>💬 WhatsApp</a>
        </div>
      </div>

      <section style={{ "margin-bottom": "3rem", background: "#f9fafb", padding: "2rem", "border-radius": "12px" }}>
        <h2 style={{ "margin-bottom": "1rem" }}>Product Specifications</h2>
        <table style={{ width: "100%", "border-collapse": "collapse", "font-size": "0.92rem" }}>
          <tbody>
            <tr><td style={{ padding: "0.7rem", "border-bottom": "1px solid #e5e7eb", "font-weight": "600", width: "35%" }}>Material</td><td style={{ padding: "0.7rem", "border-bottom": "1px solid #e5e7eb" }}>${material}</td></tr>
            <tr><td style={{ padding: "0.7rem", "border-bottom": "1px solid #e5e7eb", "font-weight": "600" }}>Standard</td><td style={{ padding: "0.7rem", "border-bottom": "1px solid #e5e7eb" }}>${standard}</td></tr>
            <tr><td style={{ padding: "0.7rem", "border-bottom": "1px solid #e5e7eb", "font-weight": "600" }}>Grades</td><td style={{ padding: "0.7rem", "border-bottom": "1px solid #e5e7eb" }}>${grades}</td></tr>
            <tr><td style={{ padding: "0.7rem", "border-bottom": "1px solid #e5e7eb", "font-weight": "600" }}>Sizes</td><td style={{ padding: "0.7rem", "border-bottom": "1px solid #e5e7eb" }}>${sizes}</td></tr>
            <tr><td style={{ padding: "0.7rem", "border-bottom": "1px solid #e5e7eb", "font-weight": "600" }}>Applications</td><td style={{ padding: "0.7rem", "border-bottom": "1px solid #e5e7eb" }}>${apps}</td></tr>
            <tr><td style={{ padding: "0.7rem", "font-weight": "600" }}>Stock</td><td style={{ padding: "0.7rem" }}>Ready stock at Vadodara + Indent available</td></tr>
          </tbody>
        </table>
      </section>

      <section style={{ "margin-bottom": "3rem" }}>
        <h2>Why Choose Creative Metal Industries?</h2>
        <ul style={{ "line-height": "2", "padding-left": "1.5rem" }}>
          <li><strong>Ready Stock:</strong> ${material} pipes and fittings available ex-stock Vadodara</li>
          <li><strong>Mill-Direct Pricing:</strong> Competitive rates with no broker margins</li>
          <li><strong>Complete Documentation:</strong> Original MTC (EN 10204 3.1/3.2), IBR, PMI, TPI reports</li>
          <li><strong>Pan-India Delivery:</strong> 2-5 days delivery anywhere in India</li>
          <li><strong>Cut-to-Size:</strong> Custom cutting and machining available</li>
          <li><strong>Expert Guidance:</strong> Material selection consultation by experienced team</li>
        </ul>
      </section>

      <section style={{ "margin-bottom": "3rem" }}>
        <h2>Related Products</h2>
        <div style={{ display: "flex", "flex-wrap": "wrap", gap: "0.5rem" }}>
          <a href="/ss-seamless-pipe-supplier-india" style={{ background: "#fff", border: "1px solid #e5e7eb", padding: "0.4rem 0.8rem", "border-radius": "6px", "font-size": "0.85rem", "text-decoration": "none", color: "#374151" }}>SS Seamless Pipe</a>
          <a href="/alloy-steel-pipe-supplier-india" style={{ background: "#fff", border: "1px solid #e5e7eb", padding: "0.4rem 0.8rem", "border-radius": "6px", "font-size": "0.85rem", "text-decoration": "none", color: "#374151" }}>Alloy Steel Pipe</a>
          <a href="/duplex-steel-supplier-vadodara" style={{ background: "#fff", border: "1px solid #e5e7eb", padding: "0.4rem 0.8rem", "border-radius": "6px", "font-size": "0.85rem", "text-decoration": "none", color: "#374151" }}>Duplex Steel</a>
          <a href="/inconel-pipe-supplier-india" style={{ background: "#fff", border: "1px solid #e5e7eb", padding: "0.4rem 0.8rem", "border-radius": "6px", "font-size": "0.85rem", "text-decoration": "none", color: "#374151" }}>Inconel Pipe</a>
          <a href="/ss-buttweld-fittings-supplier-india" style={{ background: "#fff", border: "1px solid #e5e7eb", padding: "0.4rem 0.8rem", "border-radius": "6px", "font-size": "0.85rem", "text-decoration": "none", color: "#374151" }}>SS Fittings</a>
          <a href="/ss-flanges-supplier-vadodara" style={{ background: "#fff", border: "1px solid #e5e7eb", padding: "0.4rem 0.8rem", "border-radius": "6px", "font-size": "0.85rem", "text-decoration": "none", color: "#374151" }}>SS Flanges</a>
        </div>
      </section>

      <div style={{ background: "linear-gradient(135deg, #E8821A 0%, #d97706 100%)", "border-radius": "12px", padding: "2.5rem", "text-align": "center", color: "#fff" }}>
        <h2 style={{ margin: "0 0 0.5rem" }}>Get Best Price for ${material}</h2>
        <p style={{ margin: "0 0 1.5rem", opacity: 0.9 }}>Ready stock. Mill test certificates. Pan-India delivery.</p>
        <div style={{ display: "flex", gap: "1rem", "justify-content": "center", "flex-wrap": "wrap" }}>
          <a href="tel:+919998280619" style={{ background: "#fff", color: "#E8821A", padding: "0.8rem 1.5rem", "border-radius": "8px", "font-weight": "700", "text-decoration": "none" }}>📞 +91 99982 80619</a>
          <a href="https://wa.me/919998280619" style={{ background: "#25D366", color: "#fff", padding: "0.8rem 1.5rem", "border-radius": "8px", "font-weight": "700", "text-decoration": "none" }}>💬 WhatsApp Us</a>
        </div>
      </div>
    </main>

    <footer style={{ background: "#111827", color: "#9ca3af", padding: "2rem 1.5rem", "text-align": "center", "font-size": "0.85rem" }}>
      <p>© 2026 Creative Metal Industries, Vadodara. All rights reserved.</p>
      <p><a href="/privacy-policy" style={{ color: "#9ca3af" }}>Privacy Policy</a> · <a href="/terms" style={{ color: "#9ca3af" }}>Terms</a> · <a href="/sitemap" style={{ color: "#9ca3af" }}>Sitemap</a></p>
    </footer>
  </>);
}
`;
}

// ═══════════════════════════════════════════════════════════════
// MAIN EXECUTION
// ═══════════════════════════════════════════════════════════════

// Generate location pages
for (const page of LOCATION_PAGES) {
  const filePath = join(ROUTES, `${page.slug}.tsx`);
  if (existsSync(filePath)) {
    console.log(`  SKIP (exists): ${page.slug}`);
    continue;
  }
  const content = generateLocationPage(page);
  writeFileSync(filePath, content);
  created++;
  console.log(`  ✓ Created: ${page.slug}.tsx`);
}

// Generate product pages
for (const page of PRODUCT_PAGES) {
  const filePath = join(ROUTES, `${page.slug}.tsx`);
  if (existsSync(filePath)) {
    console.log(`  SKIP (exists): ${page.slug}`);
    continue;
  }
  const content = generateProductPage(page);
  writeFileSync(filePath, content);
  created++;
  console.log(`  ✓ Created: ${page.slug}.tsx`);
}

console.log(`\n✅ Done! Created ${created} new page(s).`);
