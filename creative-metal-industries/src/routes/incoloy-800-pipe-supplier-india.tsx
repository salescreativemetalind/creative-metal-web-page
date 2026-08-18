/**
 * /incoloy-800-pipe-supplier-india
 * Target: "Incoloy 800 pipe supplier India", "Incoloy 825 pipe",
 * "UNS N08800 pipe India", "ASTM B407 pipe supplier"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  {
    grade: "Incoloy 800 Seamless Pipe",
    composition: "32Ni-21Cr-46Fe (UNS N08800)",
    sizes: "1/2\" to 8\" NB",
    schedule: "SCH 10S, 40S, 80S",
    apps: "Process heating, sheathing for electrical heating elements",
    ht: "Solution Annealed 980°C",
    stock: "Ready Stock"
  },
  {
    grade: "Incoloy 800H Seamless Pipe",
    composition: "32Ni-21Cr-46Fe, C 0.05-0.10% (UNS N08810)",
    sizes: "1/2\" to 8\" NB",
    schedule: "SCH 10S, 40S, 80S",
    apps: "Reformer pigtails, petrochemical furnaces above 600°C",
    ht: "Solution Annealed 1100-1175°C",
    stock: "Ready Stock"
  },
  {
    grade: "Incoloy 800HT Tube",
    composition: "32Ni-21Cr-46Fe, C 0.06-0.10%, Al+Ti 0.85-1.20% (UNS N08811)",
    sizes: "OD 12.7mm to 114.3mm",
    wall: "Min 1.65mm to 12.7mm",
    apps: "Ethylene cracker radiant coils, steam methane reformer tubes",
    ht: "Solution Annealed 1150°C minimum",
    stock: "Available"
  },
  {
    grade: "Incoloy 825 Seamless Pipe",
    composition: "42Ni-21.5Cr-30Fe-3Mo-2Cu (UNS N08825)",
    sizes: "1/2\" to 8\" NB",
    schedule: "SCH 10S, 40S, 80S",
    apps: "H2SO4 handling, phosphoric acid, pickling tanks, oil & gas sour wells",
    ht: "Solution Annealed 940°C",
    stock: "Ready Stock"
  },
  {
    grade: "Incoloy 825 Welded Pipe",
    composition: "UNS N08825 per ASTM B423/B705",
    sizes: "2\" to 12\" NB",
    schedule: "SCH 10S, 40S",
    apps: "Large-diameter acid piping, offshore sour gas gathering lines",
    ht: "Solution Annealed + Stress Relieved",
    stock: "Available"
  },
  {
    grade: "Incoloy 800/800H Tube (ASTM B163/B515)",
    composition: "N08800/N08810",
    sizes: "OD 9.53mm to 50.8mm",
    wall: "BWG 14 to 22",
    apps: "Feedwater heaters, steam generators, heat exchangers",
    ht: "Annealed + Bright Finished",
    stock: "Available"
  }
];

const FAQS = [
  {
    q: "What is the difference between Incoloy 800, 800H, and 800HT?",
    a: "All three are nickel-iron-chromium alloys with the same base composition (32Ni-21Cr-46Fe), but they differ in carbon content and heat treatment which dramatically affects high-temperature performance. Incoloy 800 (UNS N08800) has carbon 0.10% max — general purpose grade for moderate temperatures below 600°C. Incoloy 800H (UNS N08810) has controlled carbon 0.05-0.10% and requires solution annealing above 1100°C — this gives a coarse grain structure (ASTM 5 or coarser) that provides superior creep-rupture strength above 600°C. Used for reformer pigtails and furnace components. Incoloy 800HT (UNS N08811) adds the requirement of Al+Ti 0.85-1.20% (for gamma-prime strengthening) plus controlled carbon and high-temperature anneal — providing the highest creep strength of the trio. 800HT is specified for the most demanding applications like ethylene cracker radiant coils operating at 900-1100°C."
  },
  {
    q: "What is the difference between Incoloy 800 and Incoloy 825?",
    a: "Despite similar names, these are very different alloys targeting different problems. Incoloy 800/800H/800HT (N08800/N08810/N08811) is designed for HIGH TEMPERATURE service — oxidation resistance and creep strength at 600-1100°C. Composition: 32Ni-21Cr-46Fe. Used in furnaces, reformers, and ethylene crackers. Incoloy 825 (N08825) is designed for CORROSION RESISTANCE at ambient to moderate temperatures. Composition: 42Ni-21.5Cr-30Fe-3Mo-2Cu — the added molybdenum and copper provide exceptional resistance to sulfuric acid, phosphoric acid, and pitting in chloride environments. Used in chemical plants, oil & gas sour wells, and pickling operations. Think of it as: 800-series = heat resistance, 825 = acid resistance."
  },
  {
    q: "Where is Incoloy 800H used in Indian industry?",
    a: "Incoloy 800H is extensively used in Indian petrochemical and fertilizer plants: Steam Methane Reformer (SMR) Tubes — hydrogen production at Reliance, IOCL, HPCL, and fertilizer plants. The tubes operate at 850-950°C under 25-40 bar pressure for 100,000+ hour design life. Ethylene Cracker Radiant Coils — at IOCL Panipat, Reliance Jamnagar, GAIL Pata — 800HT grade for tube metal temperatures reaching 1050°C. Reformer Pigtails — flexible connections from outlet headers to transfer lines at 850°C. Petrochemical Furnace Tubes — pyrolysis and thermal cracking reactors. Nuclear Applications — steam generator tubes at NPCIL PHWR (Pressurised Heavy Water Reactors)."
  },
  {
    q: "What sizes of Incoloy pipe does CMI supply?",
    a: "Creative Metal Industries supplies Incoloy 800/800H seamless pipes from 1/2 inch to 8 inches NB in schedules SCH 10S through SCH 80S per ASTM B407 (seamless) and ASTM B514 (welded). Incoloy 825 pipes per ASTM B423 (seamless) and ASTM B705 (welded) in sizes up to 12 inches. Heat exchanger and steam generator tubes per ASTM B163/B515 from OD 9.53mm to 50.8mm. Reformer tubes (800HT) in custom ODs per project specifications. We also supply matching fittings (ASTM B366), flanges (ASTM B564), and bars (ASTM B408) for complete piping systems."
  },
  {
    q: "What is the price of Incoloy 800 pipe in India?",
    a: "Incoloy 800 seamless pipe prices in India range from Rs 1,800 to Rs 5,500 per kilogram depending on grade variant (800 vs 800H vs 800HT), size, schedule, and quantity. Incoloy 825 commands a slight premium at Rs 2,200 to Rs 6,500/kg due to higher nickel and molybdenum content. Reformer tubes (800HT) in large ODs can exceed Rs 8,000/kg due to specialized manufacturing and stringent testing. Prices fluctuate with LME nickel rates. Creative Metal Industries offers competitive pricing through direct sourcing from Special Metals, VDM Metals, Sandvik, and Nippon Yakin. Project discounts available for quantities above 500 kg."
  },
  {
    q: "What testing and certification is provided with Incoloy pipes?",
    a: "Every Incoloy pipe from CMI is supplied with: Mill Test Certificate (EN 10204 3.1/3.2) showing complete chemical analysis (important: carbon, Al, Ti content for 800H/800HT), mechanical properties (tensile, yield, elongation at room and elevated temperatures for 800H), grain size measurement (ASTM 5 or coarser for 800H/800HT — critical for creep performance), and hydrostatic test. Additional testing available: 100% UT, PMI, intergranular corrosion test (ASTM A262 for 825, ASTM G28 for 800), impact test at design minimum temperature, and stress-rupture data for reformer tube applications. IBR Form III-C available for boiler-code vessels."
  }
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "name": "Incoloy 800/825 Pipe",
      "description": "Incoloy 800, 800H, 800HT, and 825 seamless pipes per ASTM B407/B423. High-temperature and corrosion-resistant nickel-iron-chromium alloys for petrochemical reformers, ethylene crackers, and acid handling. Sizes 1/2 inch to 12 inch NB.",
      "brand": { "@type": "Brand", "name": "Creative Metal Industries" },
      "sku": "CMI-INCOLOY-PIPE",
      "material": "Incoloy 800 (N08800) / 800H (N08810) / 800HT (N08811) / 825 (N08825)",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "1800",
        "highPrice": "8000",
        "unitCode": "KGM",
        "availability": "https://schema.org/InStock",
        "seller": { "@type": "Organization", "name": "Creative Metal Industries" }
      },
      "additionalProperty": [
        { "@type": "PropertyValue", "name": "Standard", "value": "ASTM B407 (800/H/HT) / B423 (825) Seamless" },
        { "@type": "PropertyValue", "name": "Grades", "value": "800, 800H, 800HT, 825" },
        { "@type": "PropertyValue", "name": "Size Range", "value": "1/2 inch to 12 inch NB" },
        { "@type": "PropertyValue", "name": "Key Property", "value": "800H: Creep at 1000°C | 825: H2SO4/HCl resistant" }
      ]
    },
    {
      "@type": "LocalBusiness",
      "name": "Creative Metal Industries",
      "telephone": "+91-99982-80619",
      "address": { "@type": "PostalAddress", "streetAddress": "F-3, Loha Bhavan, Lakkadpitha Rd", "addressLocality": "Vadodara", "addressRegion": "Gujarat", "postalCode": "390001", "addressCountry": "IN" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creativemetalind.com" },
        { "@type": "ListItem", "position": 2, "name": "Incoloy 800 Pipe Supplier India", "item": "https://www.creativemetalind.com/incoloy-800-pipe-supplier-india" }
      ]
    }
  ]
});

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQS.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
});

export default function Incoloy800PipeSupplierIndia() {
  return (
    <>
      <Title>Incoloy 800 / 825 Pipe Supplier India | 800H, 800HT | CMI</Title>
      <Meta name="description" content="India's leading Incoloy pipe supplier. 800, 800H, 800HT (N08810/N08811) for reformers &amp; crackers. 825 (N08825) for acid service. ASTM B407/B423. Sizes 1/2&quot; to 12&quot; NB. Price Rs 1,800-8,000/kg. Ready stock Vadodara." />
      <Meta name="keywords" content="incoloy 800 pipe supplier india, incoloy 800H pipe, incoloy 800HT tube, incoloy 825 pipe, UNS N08800 pipe, UNS N08825 pipe, ASTM B407 pipe, reformer tube india, ethylene cracker tube" />
      <Meta property="og:title" content="Incoloy 800/825 Pipe Supplier India | 800H, 800HT | CMI" />
      <Meta property="og:description" content="Incoloy 800/800H/800HT and 825 pipe supplier India. ASTM B407/B423. Reformers, crackers, acid service. Ready stock." />
      <Meta property="og:type" content="product" />
      <Meta property="og:url" content="https://www.creativemetalind.com/incoloy-800-pipe-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/img/incoloy-800-pipe.jpg" />
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Link rel="canonical" href="https://www.creativemetalind.com/incoloy-800-pipe-supplier-india" />
      <script type="application/ld+json">{SCHEMA}</script>
      <script type="application/ld+json">{FAQ_SCHEMA}</script>

      {/* Navigation */}
      <nav style="background:#111827;padding:12px 0;position:sticky;top:0;z-index:100;box-shadow:0 2px 8px rgba(0,0,0,0.3)">
        <div style="max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;padding:0 20px">
          <a href="/" style="display:flex;align-items:center;text-decoration:none">
            <img src="/logo_cmi.png" alt="Creative Metal Industries Logo" style="height:44px;width:auto" loading="eager" />
          </a>
          <div style="display:flex;gap:24px;align-items:center">
            <a href="/" style="color:#fff;text-decoration:none;font-size:14px;font-weight:500">Home</a>
            <a href="/about" style="color:#fff;text-decoration:none;font-size:14px;font-weight:500">About</a>
            <a href="/blog" style="color:#fff;text-decoration:none;font-size:14px;font-weight:500">Blog</a>
            <a href="tel:+919998280619" style="background:#E8821A;color:#fff;padding:8px 18px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:600">+91 99982 80619</a>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <section style="background:#f9fafb;padding:14px 0;border-bottom:1px solid #e5e7eb">
        <div style="max-width:1200px;margin:0 auto;padding:0 20px">
          <nav style="font-size:13px;color:#6b7280">
            <a href="/" style="color:#E8821A;text-decoration:none">Home</a>
            <span style="margin:0 8px">›</span>
            <a href="/inconel-pipe-supplier-india" style="color:#E8821A;text-decoration:none">Nickel Alloy Pipes</a>
            <span style="margin:0 8px">›</span>
            <span style="color:#374151;font-weight:600">Incoloy 800/825 Pipe Supplier India</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section style="background:linear-gradient(135deg,#111827 0%,#1f2937 100%);padding:70px 0;text-align:center">
        <div style="max-width:900px;margin:0 auto;padding:0 20px">
          <h1 style="color:#fff;font-size:38px;font-weight:800;margin:0 0 18px;line-height:1.2">
            Incoloy 800 / 825 Pipe Supplier India
          </h1>
          <p style="color:#d1d5db;font-size:18px;margin:0 0 10px;line-height:1.7">
            India's specialist supplier of <strong style="color:#E8821A">Incoloy 800H/800HT</strong> for high-temperature petrochemical service and <strong style="color:#E8821A">Incoloy 825</strong> for acid and corrosion resistance. 800H provides superior creep strength for reformer tubes and ethylene cracker coils operating at 900-1100°C. 825 handles sulfuric acid, phosphoric acid, and sour gas environments. ASTM B407/B423 certified. Ready stock from Vadodara.
          </p>
          <p style="color:#9ca3af;font-size:15px;margin:0 0 28px">
            Price Range: <strong style="color:#E8821A">Rs 1,800 – 8,000/kg</strong> | Full Mill Traceability | Delivery across India
          </p>
          <a href="tel:+919998280619" style="display:inline-block;background:#E8821A;color:#fff;padding:14px 36px;border-radius:8px;text-decoration:none;font-size:16px;font-weight:700;box-shadow:0 4px 14px rgba(232,130,26,0.4)">
            Get Quote: +91 99982 80619
          </a>
        </div>
      </section>

      {/* Grade Table */}
      <section style="padding:60px 0;background:#fff">
        <div style="max-width:1200px;margin:0 auto;padding:0 20px">
          <h2 style="color:#111827;font-size:28px;font-weight:700;text-align:center;margin:0 0 12px">
            Incoloy Pipe & Tube Grades
          </h2>
          <p style="color:#6b7280;text-align:center;margin:0 0 36px;font-size:15px">
            High-temperature 800-series for furnaces and corrosion-resistant 825 for chemical service
          </p>
          <div style="overflow-x:auto;border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,0.08)">
            <table style="width:100%;border-collapse:collapse;font-size:14px;min-width:1000px">
              <thead>
                <tr style="background:linear-gradient(135deg,#E8821A,#d97706)">
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Grade</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Composition</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Sizes</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Schedule / Wall</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Applications</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Heat Treatment</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Stock</th>
                </tr>
              </thead>
              <tbody>
                {GRADES.map((g, i) => (
                  <tr style={{"background": i % 2 === 0 ? "#fff" : "#f9fafb"}}>
                    <td style="padding:11px 10px;font-weight:700;color:#111827;font-size:12px">{g.grade}</td>
                    <td style="padding:11px 10px;font-size:11px">{g.composition}</td>
                    <td style="padding:11px 10px;font-size:13px">{g.sizes}</td>
                    <td style="padding:11px 10px;font-size:13px">{g.schedule || g.wall}</td>
                    <td style="padding:11px 10px;font-size:12px">{g.apps}</td>
                    <td style="padding:11px 10px;font-size:11px">{g.ht}</td>
                    <td style={{"padding":"11px 10px","font-weight":"700","font-size":"12px","color": g.stock === "Ready Stock" ? "#16a34a" : g.stock === "Available" ? "#d97706" : "#6b7280"}}>{g.stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section style="padding:60px 0;background:#f9fafb">
        <div style="max-width:1200px;margin:0 auto;padding:0 20px">
          <h2 style="color:#111827;font-size:28px;font-weight:700;text-align:center;margin:0 0 36px">
            Technical Specifications
          </h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px">
            {[
              { label: "800/800H/800HT Pipe", value: "ASTM B407 / ASME SB407 (Seamless)" },
              { label: "800 Welded Pipe", value: "ASTM B514 / ASME SB514" },
              { label: "825 Seamless Pipe", value: "ASTM B423 / ASME SB423" },
              { label: "825 Welded Pipe", value: "ASTM B705 / ASME SB705" },
              { label: "Tube Standard", value: "ASTM B163 / B515 (HX & condenser tubes)" },
              { label: "Grades", value: "800 (N08800), 800H (N08810), 800HT (N08811), 825 (N08825)" },
              { label: "Pipe Size Range", value: "1/2\" to 12\" NB (seamless up to 8\")" },
              { label: "Max Service Temp", value: "800H/HT: 1100°C | 825: 540°C (corrosion limit)" },
              { label: "Key Requirement (800H)", value: "Grain Size ASTM 5 or coarser (for creep)" },
              { label: "Key Resistance (825)", value: "H2SO4, HCl, H3PO4, pitting in Cl⁻" },
              { label: "Testing", value: "Hydrostatic, UT, PMI, IGC (A262/G28), Grain Size" },
              { label: "Mill Sources", value: "Special Metals, VDM Metals, Sandvik, Nippon Yakin" },
            ].map(spec => (
              <div style="background:#fff;border:1px solid #e5e7eb;border-radius:10px;padding:18px">
                <span style="font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em">{spec.label}</span>
                <p style="font-size:15px;font-weight:700;color:#111827;margin:6px 0 0">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section style="padding:60px 0;background:#fff">
        <div style="max-width:1200px;margin:0 auto;padding:0 20px">
          <h2 style="color:#111827;font-size:28px;font-weight:700;text-align:center;margin:0 0 36px">
            Applications of Incoloy 800/825 in India
          </h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px">
            {[
              { icon: "🔥", title: "Steam Methane Reformers (800H/HT)", desc: "Primary reformer catalyst tubes in hydrogen, ammonia, and methanol plants. Operating at 850-950°C and 25-40 bar for 100,000+ hour design life. IOCL, HPCL, Reliance, and all major fertilizer plants use 800H/HT." },
              { icon: "⚗️", title: "Ethylene Cracker Radiant Coils (800HT)", desc: "Pyrolysis furnace tubes at Reliance Jamnagar, IOCL Panipat, GAIL Pata — the highest-temperature application with tube metal temperatures reaching 1050-1100°C. 800HT provides maximum creep life." },
              { icon: "🧪", title: "Chemical Plants — Acid Handling (825)", desc: "Incoloy 825 for sulfuric acid pickling lines, phosphoric acid production, mixed acid environments. Superior to SS 316L in reducing acids and resistant to pitting from chlorides." },
              { icon: "🛢️", title: "Oil & Gas Sour Service (825)", desc: "Downhole tubing, flow lines, and process piping in H2S/CO2 containing wells. Incoloy 825 meets NACE MR0175 and provides SCC resistance where duplex is marginal." },
              { icon: "☢️", title: "Nuclear Power (800)", desc: "Steam generator tubes in NPCIL Pressurised Heavy Water Reactors (PHWR). Incoloy 800 provides resistance to stress corrosion cracking in high-temperature water with caustic concentration." },
              { icon: "🏭", title: "Petrochemical Furnace Components (800H)", desc: "Reformer pigtails, transfer lines, outlet manifolds, and radiant tube supports. Anywhere above 600°C where P91 alloy steel runs out of creep capability — 800H takes over." },
            ].map(app => (
              <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:24px">
                <span style="font-size:28px">{app.icon}</span>
                <h3 style="font-size:16px;font-weight:700;color:#111827;margin:8px 0 6px">{app.title}</h3>
                <p style="font-size:14px;color:#4b5563;line-height:1.6;margin:0">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CMI */}
      <section style="padding:60px 0;background:#f9fafb">
        <div style="max-width:900px;margin:0 auto;padding:0 20px">
          <h2 style="color:#111827;font-size:28px;font-weight:700;text-align:center;margin:0 0 36px">
            Why Buy Incoloy Pipes from Creative Metal Industries?
          </h2>
          <div style="display:grid;gap:16px">
            {[
              { title: "Genuine Mill Sources for Critical Applications", desc: "Incoloy 800H/HT for reformer and cracker service is one of the most critical material specifications in petrochemicals — wrong material means catastrophic tube failure at 1000°C. We source exclusively from Special Metals, VDM, Sandvik, and Nippon Yakin with full traceability from melt through final testing." },
              { title: "Grain Size Verified (ASTM 5 or Coarser)", desc: "For Incoloy 800H and 800HT, the grain size requirement is the most important quality parameter — it directly determines creep-rupture life. We verify every pipe carries grain size certification per ASTM E112, rejecting any material finer than ASTM 5. This attention to detail is what separates reliable reformer tube supply from premature failure risk." },
              { title: "Stock of Both 800-Series and 825", desc: "We stock Incoloy 800/800H seamless pipes in common sizes (1/2\" to 4\") AND Incoloy 825 pipes for acid service projects. Many suppliers stock only one family — CMI covers both high-temperature and corrosion-resistant applications from a single source." },
              { title: "Complete Documentation Package", desc: "MTC (3.1/3.2) with: full chemical analysis (C, Al, Ti content critical for H/HT designation), mechanical properties at room AND elevated temperature, grain size measurement, IGC test (ASTM A262 Practice E for 825), hydrostatic test, and 100% UT. IBR Form III-C for code applications." },
              { title: "Technical Selection Guidance", desc: "Choosing between 800, 800H, and 800HT — or between 800-series and 825 — requires understanding the actual service conditions. Our engineers help you specify the correct grade, avoiding over-specification (unnecessary cost) or under-specification (premature failure). 13+ years of supply experience to Indian petrochemical majors." },
              { title: "Competitive Pricing & Fast Delivery", desc: "Ready stock for common sizes means immediate dispatch. For project quantities, we offer competitive pricing against any authorized Indian distributor. Standard delivery 2-5 days within India. Express overnight possible for Gujarat/Maharashtra locations. Export with full documentation to 50+ countries." },
            ].map(item => (
              <div style="background:#fff;border:1px solid #e5e7eb;border-radius:10px;padding:20px">
                <h3 style="font-size:16px;font-weight:700;color:#E8821A;margin:0 0 8px">{item.title}</h3>
                <p style="font-size:14px;color:#4b5563;line-height:1.7;margin:0">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style="padding:60px 0;background:#fff">
        <div style="max-width:900px;margin:0 auto;padding:0 20px">
          <h2 style="color:#111827;font-size:28px;font-weight:700;text-align:center;margin:0 0 36px">
            Frequently Asked Questions — Incoloy 800/825 Pipe
          </h2>
          <div style="display:flex;flex-direction:column;gap:12px">
            {FAQS.map(faq => (
              <details style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;padding:18px 22px">
                <summary style="font-weight:700;font-size:15px;color:#111827;cursor:pointer;line-height:1.4">{faq.q}</summary>
                <p style="font-size:14px;color:#4b5563;line-height:1.7;margin:14px 0 0">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style="padding:60px 0;background:linear-gradient(135deg,#111827,#1f2937)">
        <div style="max-width:700px;margin:0 auto;padding:0 20px;text-align:center">
          <h2 style="color:#fff;font-size:28px;font-weight:800;margin:0 0 12px">
            Need Incoloy 800H or 825 Pipes? Get Instant Quote
          </h2>
          <p style="color:#d1d5db;font-size:16px;margin:0 0 28px">
            Ready stock. ASTM B407/B423 certified. Reformer grade and acid-resistant grade.
          </p>
          <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
            <a href="tel:+919998280619" style="background:#E8821A;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:16px">📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+Incoloy+pipe+quote" target="_blank" rel="noopener" style="background:#25D366;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:16px">💬 WhatsApp</a>
            <a href="mailto:creativemetalind@gmail.com" style="background:transparent;color:#fff;border:2px solid rgba(255,255,255,0.4);padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:600;font-size:16px">✉ Email Enquiry</a>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section style="padding:50px 0;background:#f9fafb">
        <div style="max-width:1200px;margin:0 auto;padding:0 20px">
          <h3 style="font-size:20px;font-weight:700;color:#111827;margin:0 0 20px;text-align:center">Related Products</h3>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px">
            {[
              { href: "/incoloy-800h-pipe-supplier", label: "Incoloy 800H Details" },
              { href: "/incoloy-825-pipe-supplier-india", label: "Incoloy 825 Details" },
              { href: "/inconel-pipe-supplier-india", label: "Inconel 625/600 Pipe" },
              { href: "/hastelloy-pipe-supplier-india", label: "Hastelloy C-276 Pipe" },
              { href: "/nickel-200-pipe-supplier-india", label: "Nickel 200 Pipe" },
              { href: "/alloy-steel-pipe-supplier-india", label: "Alloy Steel P91/P22" },
              { href: "/heat-exchanger-tube-supplier-india", label: "Heat Exchanger Tubes" },
              { href: "/boiler-tube-supplier-india", label: "Boiler Tubes" },
            ].map(link => (
              <a href={link.href} style="background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:14px 16px;text-decoration:none;font-size:14px;font-weight:600;color:#E8821A;text-align:center">
                {link.label} →
              </a>
            ))}
          </div>
        </div>
      </section>

      <RelatedPages currentPath="/incoloy-800-pipe-supplier-india" />

      {/* Footer */}
      <footer style="background:#111827;color:#9ca3af;padding:40px 20px;text-align:center;font-size:14px">
        <p style="margin:0 0 8px"><strong style="color:#fff">Creative Metal Industries</strong> — Incoloy 800/825 Pipe Supplier India | Vadodara, Gujarat</p>
        <p style="margin:0 0 8px">F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style="color:#E8821A">+91 99982 80619</a></p>
        <p style="margin:0"><a href="/privacy-policy" style="color:#9ca3af">Privacy Policy</a> · <a href="/terms" style="color:#9ca3af">Terms</a> · <a href="/sitemap" style="color:#9ca3af">Sitemap</a></p>
      </footer>
    </>
  );
}
