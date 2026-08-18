/**
 * /heat-exchanger-tube-supplier-india
 * Target: "heat exchanger tube supplier India", "condenser tube supplier",
 * "ASTM A249 tube", "shell and tube heat exchanger tubes India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  {
    grade: "SS 304/304L Tube (ASTM A249)",
    composition: "18Cr-8Ni (UNS S30400/S30403)",
    sizes: "OD 9.53mm to 50.8mm",
    wall: "BWG 14 to 24 (0.56mm to 2.11mm)",
    apps: "General chemical HX, food processing, pharmaceutical",
    ht: "Solution Annealed + Bright Annealed",
    stock: "Ready Stock"
  },
  {
    grade: "SS 316/316L Tube (ASTM A249)",
    composition: "16Cr-10Ni-2Mo (UNS S31600/S31603)",
    sizes: "OD 9.53mm to 50.8mm",
    wall: "BWG 14 to 24",
    apps: "Marine coolers, chloride environments, pharma purified water",
    ht: "Solution Annealed + Bright Annealed",
    stock: "Ready Stock"
  },
  {
    grade: "SS 321/321H Tube (ASTM A249/A213)",
    composition: "18Cr-10Ni-Ti stabilised",
    sizes: "OD 12.7mm to 38.1mm",
    wall: "BWG 14 to 20",
    apps: "High-temp exchangers, exhaust gas coolers, reformer effluent",
    ht: "Solution Annealed 1050°C",
    stock: "Available"
  },
  {
    grade: "SS 904L Tube",
    composition: "20Cr-25Ni-4.5Mo-1.5Cu (UNS N08904)",
    sizes: "OD 12.7mm to 38.1mm",
    wall: "BWG 16 to 22",
    apps: "Sulfuric acid coolers, seawater HX, phosphoric acid",
    ht: "Solution Annealed 1100°C + WQ",
    stock: "Available"
  },
  {
    grade: "Duplex 2205 Tube (ASTM A789)",
    composition: "22Cr-5Ni-3Mo (UNS S31803)",
    sizes: "OD 12.7mm to 50.8mm",
    wall: "BWG 14 to 20",
    apps: "Seawater coolers, chloride-rich cooling water, offshore HX",
    ht: "Solution Annealed 1020-1080°C + WQ",
    stock: "Available"
  },
  {
    grade: "CuNi 90/10 Tube (ASTM B111)",
    composition: "90Cu-10Ni (UNS C70600)",
    sizes: "OD 12.7mm to 50.8mm",
    wall: "BWG 16 to 22",
    apps: "Power plant condensers, lube oil coolers, marine HX",
    ht: "Annealed O60",
    stock: "Ready Stock"
  },
  {
    grade: "Titanium Gr.2 Tube (ASTM B338)",
    composition: "CP Titanium (UNS R50400)",
    sizes: "OD 12.7mm to 50.8mm",
    wall: "BWG 18 to 24",
    apps: "MSF desalination, power condenser, chlor-alkali",
    ht: "Annealed + Pickled",
    stock: "Available"
  },
  {
    grade: "Inconel 625 Tube (ASTM B444)",
    composition: "60Ni-22Cr-9Mo-3.5Nb (UNS N06625)",
    sizes: "OD 9.53mm to 38.1mm",
    wall: "BWG 16 to 22",
    apps: "Aggressive acid coolers, flue gas HX, waste incinerator",
    ht: "Solution Annealed 1100°C",
    stock: "Indent"
  }
];

const FAQS = [
  {
    q: "What is the difference between ASTM A249 and ASTM A213 tubes?",
    a: "ASTM A249 covers welded austenitic stainless steel tubes for boilers, superheaters, heat exchangers, and condensers. ASTM A213 covers seamless ferritic and austenitic alloy steel tubes for the same applications. The key differences: A249 tubes are made by welding strip material into a tube then cold-drawing and annealing — making them more economical for standard sizes. A213 tubes are produced from solid billets by hot piercing — giving homogeneous microstructure without a weld seam. For critical high-pressure/high-temperature service (boiler superheaters, nuclear), seamless A213 is preferred. For most shell-and-tube heat exchangers at moderate pressures, welded A249 tubes provide excellent performance at lower cost. Creative Metal Industries stocks both types."
  },
  {
    q: "How do I select the right tube material for my heat exchanger?",
    a: "Material selection depends on four factors: 1) Process fluid — what chemicals/temperature/pressure on tube side? 2) Cooling medium — seawater, cooling tower water, river water, or air? 3) Design life requirement — 10 years, 20 years, or plant lifetime? 4) Budget. General guidelines: SS 304L for clean water/mild chemicals below 60°C. SS 316L for chloride-containing cooling water up to 50°C. Duplex 2205 for seawater and brackish water. CuNi 90/10 for seawater where biofouling resistance is needed. Titanium for hot seawater, chlorinated water, or 30+ year life requirement. Inconel/Hastelloy for aggressive acids and high-temperature gas. Contact CMI at +91 99982 80619 — our engineers will recommend the optimum material for your specific service conditions."
  },
  {
    q: "What sizes of heat exchanger tubes does CMI supply?",
    a: "We supply heat exchanger tubes in OD range 9.53mm (3/8 inch) to 50.8mm (2 inch) — covering 95% of shell-and-tube exchanger designs. Standard ODs include: 9.53, 12.7, 15.88, 19.05, 22.22, 25.4, 31.75, 38.1, 44.45, and 50.8mm. Wall thickness from BWG 24 (0.56mm thin wall) to BWG 14 (2.11mm heavy wall). Standard lengths: 3, 4.5, 6, and 7.5 metres. U-bend tubes with specified bend radius are available for fixed-tubesheet designs. We can also supply tubes with enhanced surfaces (low-fin, twisted) for improved heat transfer — on indent basis."
  },
  {
    q: "What is the price range for heat exchanger tubes in India?",
    a: "Pricing varies significantly by material: SS 304L welded tube (A249): Rs 250-500/kg. SS 316L welded tube: Rs 350-650/kg. Duplex 2205 tube: Rs 800-1500/kg. CuNi 90/10 tube: Rs 1500-4000/kg. Titanium Gr.2 tube: Rs 5000-12000/kg. Inconel 625 tube: Rs 5000-15000/kg. Prices depend on OD, wall thickness, quantity, testing requirements, and current metal market rates. For project quantities (100+ tubes), CMI offers significant volume discounts. Contact us with your tube data sheet for exact quotation."
  },
  {
    q: "What testing is performed on heat exchanger tubes?",
    a: "Standard testing includes: Hydrostatic Test — typically at 70-100 bar depending on wall thickness and design pressure. Eddy Current Test (ECT) — 100% volumetric inspection detecting defects as small as 10% wall loss. This is the most critical test for HX tubes as it finds longitudinal defects, pits, and inclusions. Ultrasonic Test — for wall thickness verification and lamination detection. Flattening Test — verify ductility for tube expansion into tube sheets. Flaring Test — confirm tube can be rolled/expanded without cracking. PMI — positive material identification on every tube bundle. Additional tests per project requirement: corrosion test (IGC per A262), grain size measurement, microstructure examination, and mercury-free certificate."
  },
  {
    q: "Can CMI supply U-bend tubes for heat exchangers?",
    a: "Yes, we supply U-bend heat exchanger tubes in all materials — SS, CuNi, titanium, and nickel alloys. U-bends are manufactured by cold bending straight tubes on a mandrel to the specified bend radius (typically 1.5D to 3D minimum). Important considerations: Minimum bend radius depends on material and tube OD/wall ratio. After bending, tubes require stress relief annealing to eliminate residual stresses (critical for chloride service to prevent SCC). U-bend legs must be of equal length within tight tolerances (typically ±1.5mm). Creative Metal Industries works with specialized tube bending facilities to deliver ready-to-install U-bend bundles per your tube layout drawing."
  }
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "name": "Heat Exchanger Tube",
      "description": "Heat exchanger and condenser tubes in SS 304/316L, duplex 2205, CuNi, titanium, and Inconel. ASTM A249/A213/B111/B338/B444. OD 9.53mm to 50.8mm. For shell-and-tube HX, condensers, coolers.",
      "brand": { "@type": "Brand", "name": "Creative Metal Industries" },
      "sku": "CMI-HX-TUBE",
      "material": "SS 304/316/321/904L, Duplex 2205, CuNi, Titanium, Inconel",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "250",
        "highPrice": "15000",
        "unitCode": "KGM",
        "availability": "https://schema.org/InStock",
        "seller": { "@type": "Organization", "name": "Creative Metal Industries" }
      },
      "additionalProperty": [
        { "@type": "PropertyValue", "name": "Standards", "value": "ASTM A249, A213, B111, B338, B444" },
        { "@type": "PropertyValue", "name": "OD Range", "value": "9.53mm to 50.8mm" },
        { "@type": "PropertyValue", "name": "Wall Thickness", "value": "BWG 14 to 24" },
        { "@type": "PropertyValue", "name": "Type", "value": "Seamless / Welded / U-Bend" }
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
        { "@type": "ListItem", "position": 2, "name": "Heat Exchanger Tube Supplier India", "item": "https://www.creativemetalind.com/heat-exchanger-tube-supplier-india" }
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

export default function HeatExchangerTubeSupplierIndia() {
  return (
    <>
      <Title>Heat Exchanger Tube Supplier India | Condenser Tubes | CMI</Title>
      <Meta name="description" content="India's trusted heat exchanger &amp; condenser tube supplier. SS 304/316L, Duplex 2205, CuNi, Titanium, Inconel tubes per ASTM A249/A213/B111/B338. OD 9.53mm to 50.8mm. 100% ECT tested. Ready stock Vadodara." />
      <Meta name="keywords" content="heat exchanger tube supplier india, condenser tube supplier, ASTM A249 tube, shell and tube exchanger, SS 316L HX tube, CuNi condenser tube, titanium condenser tube, duplex 2205 tube india" />
      <Meta property="og:title" content="Heat Exchanger Tube Supplier India | Condenser Tubes | CMI" />
      <Meta property="og:description" content="Heat exchanger &amp; condenser tube supplier India. SS, CuNi, Titanium, Inconel. ASTM A249/B111/B338. 100% ECT. Ready stock." />
      <Meta property="og:type" content="product" />
      <Meta property="og:url" content="https://www.creativemetalind.com/heat-exchanger-tube-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/img/heat-exchanger-tube.jpg" />
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Link rel="canonical" href="https://www.creativemetalind.com/heat-exchanger-tube-supplier-india" />
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
            <span style="color:#374151;font-weight:600">Heat Exchanger Tube Supplier India</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section style="background:linear-gradient(135deg,#111827 0%,#1f2937 100%);padding:70px 0;text-align:center">
        <div style="max-width:900px;margin:0 auto;padding:0 20px">
          <h1 style="color:#fff;font-size:38px;font-weight:800;margin:0 0 18px;line-height:1.2">
            Heat Exchanger Tube Supplier India
          </h1>
          <p style="color:#d1d5db;font-size:18px;margin:0 0 10px;line-height:1.7">
            India's comprehensive supplier of <strong style="color:#E8821A">heat exchanger and condenser tubes</strong> in stainless steel, duplex, copper nickel, titanium, and nickel alloys. ASTM A249, A213, B111, B338, B444 certified. OD 9.53mm to 50.8mm with 100% eddy current testing. Straight tubes and U-bends for shell-and-tube exchangers, condensers, coolers, and evaporators. Ready stock from Vadodara.
          </p>
          <p style="color:#9ca3af;font-size:15px;margin:0 0 28px">
            All Materials | 100% ECT Tested | U-Bends Available | Pan-India Delivery
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
            Heat Exchanger Tube Grades — Multi-Material Stock
          </h2>
          <p style="color:#6b7280;text-align:center;margin:0 0 36px;font-size:15px">
            From economical SS 304L to exotic titanium and Inconel — the right tube material for every service
          </p>
          <div style="overflow-x:auto;border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,0.08)">
            <table style="width:100%;border-collapse:collapse;font-size:14px;min-width:1000px">
              <thead>
                <tr style="background:linear-gradient(135deg,#E8821A,#d97706)">
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Material Grade</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Composition</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">OD Range</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Wall (BWG)</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Applications</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Condition</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Stock</th>
                </tr>
              </thead>
              <tbody>
                {GRADES.map((g, i) => (
                  <tr style={{"background": i % 2 === 0 ? "#fff" : "#f9fafb"}}>
                    <td style="padding:11px 10px;font-weight:700;color:#111827;font-size:13px">{g.grade}</td>
                    <td style="padding:11px 10px;font-size:12px">{g.composition}</td>
                    <td style="padding:11px 10px;font-size:13px">{g.sizes}</td>
                    <td style="padding:11px 10px;font-size:13px">{g.wall}</td>
                    <td style="padding:11px 10px;font-size:12px">{g.apps}</td>
                    <td style="padding:11px 10px;font-size:12px">{g.ht}</td>
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
              { label: "SS Welded Tube", value: "ASTM A249 / ASME SA249" },
              { label: "SS Seamless Tube", value: "ASTM A213 / ASME SA213" },
              { label: "CuNi Tube", value: "ASTM B111 / ASME SB111" },
              { label: "Titanium Tube", value: "ASTM B338 / ASME SB338" },
              { label: "Inconel/Hastelloy Tube", value: "ASTM B444 / B622 / ASME SB444" },
              { label: "Duplex Tube", value: "ASTM A789 / ASME SA789" },
              { label: "OD Range", value: "9.53mm (3/8\") to 50.8mm (2\")" },
              { label: "Wall Thickness", value: "BWG 14 (2.11mm) to BWG 24 (0.56mm)" },
              { label: "Lengths", value: "3m, 4.5m, 6m, 7.5m (per TEMA/project spec)" },
              { label: "End Finish", value: "Plain, Expanded, Rolled, Seal Welded" },
              { label: "Testing", value: "100% ECT, Hydrostatic, PMI, Flattening, Flaring" },
              { label: "Special", value: "U-Bend, Low-Fin, Corrugated, Twisted available" },
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
            Heat Exchanger Types We Supply Tubes For
          </h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px">
            {[
              { icon: "🔄", title: "Shell & Tube Heat Exchangers", desc: "The most common industrial HX type. We supply tube bundles for BEM, BEU, AES, and all TEMA configurations. Straight tubes and U-bends with precise length tolerances for proper tube-to-tubesheet fit." },
              { icon: "💨", title: "Steam Condensers (Power Plants)", desc: "Main condenser tube bundles for NTPC, state gencos, and nuclear power. Typically 19.05mm or 25.4mm OD in CuNi, titanium, or SS 316L. Thousands of tubes per condenser — we handle large-quantity project orders." },
              { icon: "🧊", title: "Air-Cooled Heat Exchangers (ACHE)", desc: "Finned tube bundles for aerial coolers in refineries and gas plants. We supply base tubes in SS, CS, and alloy — compatible with aluminum fin wrapping by ACHE manufacturers." },
              { icon: "🛢️", title: "Refinery Process Exchangers", desc: "Crude preheat trains, overhead condensers, reboilers, and interchangers. Materials from CS to alloy steel, SS, and exotic alloys based on process fluid corrosivity and temperature." },
              { icon: "🧪", title: "Chemical Plant Coolers", desc: "Acid coolers (sulfuric, phosphoric, hydrochloric), vent condensers, reflux condensers. Material selection critical — one wrong choice means tube failure within months." },
              { icon: "💧", title: "Desalination & Water Treatment", desc: "MSF/MED evaporator and condenser tubes. Titanium and CuNi are the standard materials. We supply tubes per SWCC (Saudi) and MIDAL (India) specifications for desalination projects." },
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
            Why Buy Heat Exchanger Tubes from Creative Metal Industries?
          </h2>
          <div style="display:grid;gap:16px">
            {[
              { title: "Multi-Material Stock Under One Roof", desc: "SS 304/316L, CuNi 90/10, and titanium Grade 2 condenser tubes in popular ODs (19.05mm, 25.4mm) maintained in stock. No need to approach separate suppliers for each material — single PO covers your complete tube requirement." },
              { title: "100% Eddy Current Tested", desc: "Every tube we supply has undergone 100% ECT volumetric inspection — the most critical quality check for heat exchanger tubes. ECT detects pinholes, inclusions, cracks, and wall thinning that would cause premature failure in service. We provide ECT reports with calibration standards noted." },
              { title: "U-Bend Manufacturing", desc: "We supply ready-made U-bend tubes to your specified bend radius and leg lengths. Post-bend stress relief annealing for chloride-sensitive materials (SS, duplex). Dimensional inspection of bend radius, ovality, and leg length per TEMA tolerances." },
              { title: "Project Supply Expertise", desc: "We understand TEMA standards, tube data sheet requirements, and EPC procurement workflows. Supply capability from 50 tubes (maintenance retube) to 5000+ tubes (new-build condenser). Staged deliveries coordinated with your fabrication schedule." },
              { title: "Material Selection Consultation", desc: "Choosing the wrong tube material is costly — replacement means cutting the shell, extracting the bundle, and losing weeks of production. Our engineers help you select the optimum material considering: service life, media compatibility, maximum velocity, and total life-cycle cost." },
              { title: "Competitive Pricing for Tube Quantities", desc: "HX tube orders are typically 200-5000 metres. Our bulk purchasing from Ratnamani, Sandvik, Sumitomo, KME, and VSMPO enables project-competitive pricing. We also handle retube quantities (minimum 10 tubes) for maintenance requirements." },
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
            Frequently Asked Questions — Heat Exchanger Tubes
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
            Need Heat Exchanger Tubes? Send Your Tube Data Sheet
          </h2>
          <p style="color:#d1d5db;font-size:16px;margin:0 0 28px">
            Multi-material stock. 100% ECT. U-bends available. Project quantities and retube spares.
          </p>
          <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
            <a href="tel:+919998280619" style="background:#E8821A;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:16px">📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+heat+exchanger+tube+quote" target="_blank" rel="noopener" style="background:#25D366;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:16px">💬 WhatsApp</a>
            <a href="mailto:creativemetalind@gmail.com" style="background:transparent;color:#fff;border:2px solid rgba(255,255,255,0.4);padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:600;font-size:16px">✉ Email Tube Data Sheet</a>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section style="padding:50px 0;background:#f9fafb">
        <div style="max-width:1200px;margin:0 auto;padding:0 20px">
          <h3 style="font-size:20px;font-weight:700;color:#111827;margin:0 0 20px;text-align:center">Related Products</h3>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px">
            {[
              { href: "/boiler-tube-supplier-india", label: "Boiler Tubes (SA 213)" },
              { href: "/copper-nickel-pipe-supplier-india", label: "CuNi 90/10 & 70/30 Pipe" },
              { href: "/titanium-pipe-supplier-india", label: "Titanium Tubes & Pipe" },
              { href: "/inconel-pipe-supplier-india", label: "Inconel 625 Tube" },
              { href: "/ss-seamless-pipe-supplier-india", label: "SS Seamless Pipe" },
              { href: "/incoloy-800-pipe-supplier-india", label: "Incoloy 800/825 Tube" },
              { href: "/hastelloy-pipe-supplier-india", label: "Hastelloy C-276 Tube" },
              { href: "/duplex-steel-supplier-vadodara", label: "Duplex 2205 Tube" },
            ].map(link => (
              <a href={link.href} style="background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:14px 16px;text-decoration:none;font-size:14px;font-weight:600;color:#E8821A;text-align:center">
                {link.label} →
              </a>
            ))}
          </div>
        </div>
      </section>

      <RelatedPages currentPath="/heat-exchanger-tube-supplier-india" />

      {/* Footer */}
      <footer style="background:#111827;color:#9ca3af;padding:40px 20px;text-align:center;font-size:14px">
        <p style="margin:0 0 8px"><strong style="color:#fff">Creative Metal Industries</strong> — Heat Exchanger Tube Supplier India | Vadodara, Gujarat</p>
        <p style="margin:0 0 8px">F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style="color:#E8821A">+91 99982 80619</a></p>
        <p style="margin:0"><a href="/privacy-policy" style="color:#9ca3af">Privacy Policy</a> · <a href="/terms" style="color:#9ca3af">Terms</a> · <a href="/sitemap" style="color:#9ca3af">Sitemap</a></p>
      </footer>
    </>
  );
}
