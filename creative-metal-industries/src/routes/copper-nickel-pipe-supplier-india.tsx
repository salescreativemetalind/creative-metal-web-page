/**
 * /copper-nickel-pipe-supplier-india
 * Target: "copper nickel pipe supplier India", "CuNi 70/30 pipe",
 * "CuNi 90/10 pipe supplier", "ASTM B466 pipe India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  {
    grade: "CuNi 90/10 Seamless Pipe (C70600)",
    composition: "90% Cu, 10% Ni, 1.5% Fe, 1% Mn",
    sizes: "1/2\" to 12\" NB",
    schedule: "SCH 10, 20, 40, 80",
    apps: "Seawater cooling, shipboard piping, desalination",
    ht: "Annealed (O60 Temper)",
    stock: "Ready Stock"
  },
  {
    grade: "CuNi 70/30 Seamless Pipe (C71500)",
    composition: "70% Cu, 30% Ni, 0.5% Fe, 1% Mn",
    sizes: "1/2\" to 10\" NB",
    schedule: "SCH 10, 20, 40, 80",
    apps: "Offshore platforms, condensers, high-velocity seawater",
    ht: "Annealed (O60 Temper)",
    stock: "Ready Stock"
  },
  {
    grade: "CuNi 90/10 Welded Pipe (C70600)",
    composition: "90% Cu, 10% Ni",
    sizes: "2\" to 24\" NB",
    schedule: "SCH 10, 20, 40",
    apps: "Large-diameter seawater intake, fire main systems",
    ht: "Stress Relieved / Annealed",
    stock: "Available"
  },
  {
    grade: "CuNi 70/30 Welded Pipe (C71500)",
    composition: "70% Cu, 30% Ni",
    sizes: "2\" to 16\" NB",
    schedule: "SCH 10, 20, 40",
    apps: "Condenser inlet/outlet piping, platform risers",
    ht: "Stress Relieved / Annealed",
    stock: "Available"
  },
  {
    grade: "CuNi 90/10 Tube (Condenser Grade)",
    composition: "C70600 per ASTM B111",
    sizes: "OD 12.7mm to 50.8mm",
    wall: "BWG 16 to 22",
    apps: "Shell & tube condensers, feedwater heaters",
    ht: "Annealed + Light Drawn",
    stock: "Ready Stock"
  },
  {
    grade: "CuNi 70/30 Tube (Heat Exchanger)",
    composition: "C71500 per ASTM B111",
    sizes: "OD 12.7mm to 50.8mm",
    wall: "BWG 16 to 22",
    apps: "Power plant condensers, lube oil coolers, marine HX",
    ht: "Annealed + Bright Finished",
    stock: "Available"
  }
];

const FAQS = [
  {
    q: "What is copper nickel alloy and why is it used for piping?",
    a: "Copper nickel (CuNi) is a family of alloys where copper is the base metal with nickel additions of 10% or 30%. These alloys combine the inherent antimicrobial and biofouling-resistant properties of copper with the strength and seawater corrosion resistance imparted by nickel. CuNi pipes are the industry standard for seawater service because they resist biofouling (barnacles, mussels don't attach), have excellent erosion-corrosion resistance at seawater velocities up to 3.5 m/s (90/10) or 4.5 m/s (70/30), and maintain mechanical integrity over decades of service. They are used extensively in naval vessels, offshore platforms, desalination plants, and coastal power stations."
  },
  {
    q: "What is the difference between CuNi 90/10 and CuNi 70/30?",
    a: "CuNi 90/10 (C70600) contains 10% nickel and is the most widely used grade for general seawater piping systems — fire mains, cooling water, ballast lines. It offers good corrosion resistance at flow velocities up to 3.5 m/s and is more economical. CuNi 70/30 (C71500) contains 30% nickel, providing superior corrosion resistance in high-velocity seawater (up to 4.5 m/s), better resistance to impingement attack, and higher mechanical strength (tensile 360 MPa vs 275 MPa for 90/10). C71500 is chosen for critical applications — condenser tubes, high-velocity lines, offshore risers — where service life must exceed 30 years without replacement. The 70/30 grade costs approximately 40-60% more than 90/10."
  },
  {
    q: "What sizes of CuNi pipe does Creative Metal Industries stock?",
    a: "We stock CuNi 90/10 and 70/30 seamless pipes from 1/2 inch to 12 inches NB in schedules SCH 10, 20, 40, and 80 per ASTM B466 (seamless) and ASTM B467 (welded). For condenser and heat exchanger service, we maintain CuNi tubes from OD 12.7mm to 50.8mm in BWG 16-22 per ASTM B111. Welded pipes in larger diameters (up to 24 inch for 90/10) are available on indent. Fittings per ASTM B171 (flanges) and MSS-SP75 (buttweld) complete the system. Standard lengths 5-6 metres."
  },
  {
    q: "What is the price of CuNi 90/10 pipe in India?",
    a: "CuNi 90/10 pipe prices in India range from Rs 1,500 to Rs 4,500 per kilogram depending on size, wall thickness, and current copper/nickel commodity rates on LME. CuNi 70/30 commands a premium at Rs 2,500 to Rs 6,500 per kg due to higher nickel content. Prices are directly linked to London Metal Exchange copper and nickel rates and fluctuate weekly. Creative Metal Industries offers competitive pricing through direct relationships with KME (Germany), Wieland (Germany), Mueller Industries, and Indian mills. Contact us for today's exact rate with quantity discounts."
  },
  {
    q: "Which industries use copper nickel pipes in India?",
    a: "Major applications in India include: Indian Navy and Coast Guard — shipboard seawater piping, cooling systems, and fire mains per Naval spec. Offshore Oil & Gas — ONGC and private operators use CuNi for platform seawater lift pumps, cooling, and firewater. Desalination Plants — distillation condenser tubes and intake piping at MIDAL, Reliance, and BARC plants. Coastal Power Stations — condenser tubes and cooling water piping at NPCIL, NTPC, and state gencos near coastline. Shipbuilding — Cochin Shipyard, L&T Shipbuilding, MDL use CuNi piping systems. Chemical Plants — handling neutral and mildly acidic seawater and brackish water environments."
  },
  {
    q: "How is copper nickel pipe welded?",
    a: "CuNi pipes are welded using GTAW (TIG) with ERCuNi (70/30) filler wire and argon shielding. Key considerations: Preheat not required for most thicknesses below 12mm. Interpass temperature should not exceed 150°C to prevent hot cracking. Use stringer beads rather than weaving to control heat input. Root pass must have argon purge to prevent internal oxidation (copper oxide inclusions are detrimental). Clean all surfaces thoroughly — CuNi is sensitive to sulfur, lead, and zinc contamination from lubricants, paints, or galvanized material in proximity. Post-weld heat treatment is not required. The completed weld should have a smooth golden color — dark brown or black indicates oxidation."
  }
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "name": "Copper Nickel Pipe",
      "description": "Copper Nickel 90/10 (C70600) and 70/30 (C71500) seamless and welded pipes per ASTM B466/B467. Marine-grade seawater resistant piping for Navy, offshore, desalination. Sizes 1/2 inch to 24 inch NB.",
      "brand": { "@type": "Brand", "name": "Creative Metal Industries" },
      "sku": "CMI-CUNI-PIPE",
      "material": "CuNi 90/10 (C70600) / CuNi 70/30 (C71500)",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "1500",
        "highPrice": "6500",
        "unitCode": "KGM",
        "availability": "https://schema.org/InStock",
        "seller": { "@type": "Organization", "name": "Creative Metal Industries" }
      },
      "additionalProperty": [
        { "@type": "PropertyValue", "name": "Standard", "value": "ASTM B466 (Seamless) / ASTM B467 (Welded) / ASTM B111 (Tube)" },
        { "@type": "PropertyValue", "name": "Grades", "value": "CuNi 90/10 (C70600), CuNi 70/30 (C71500)" },
        { "@type": "PropertyValue", "name": "Size Range", "value": "1/2 inch to 24 inch NB" },
        { "@type": "PropertyValue", "name": "Type", "value": "Seamless / Welded" }
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
        { "@type": "ListItem", "position": 2, "name": "Copper Nickel Pipe Supplier India", "item": "https://www.creativemetalind.com/copper-nickel-pipe-supplier-india" }
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

export default function CopperNickelPipeSupplierIndia() {
  return (
    <>
      <Title>Copper Nickel Pipe Supplier India | CuNi 90/10 & 70/30 | ASTM B466 | Creative Metal Industries</Title>
      <Meta name="description" content="India's leading copper nickel pipe supplier. CuNi 90/10 (C70600) &amp; 70/30 (C71500) seamless pipes per ASTM B466. Marine-grade seawater piping for Navy, offshore, desalination. Sizes 1/2&quot; to 24&quot; NB. Price Rs 1,500-6,500/kg. Ready stock Vadodara." />
      <Meta name="keywords" content="copper nickel pipe supplier india, CuNi 90/10 pipe, CuNi 70/30 pipe, C70600 pipe india, C71500 pipe supplier, ASTM B466 pipe, seawater pipe india, marine pipe supplier, cupro nickel pipe india" />
      <Meta property="og:title" content="Copper Nickel Pipe Supplier India | CuNi 90/10 & 70/30 | CMI" />
      <Meta property="og:description" content="India's trusted CuNi pipe supplier. 90/10 (C70600) and 70/30 (C71500). ASTM B466 seamless. Marine grade. Ready stock." />
      <Meta property="og:type" content="product" />
      <Meta property="og:url" content="https://www.creativemetalind.com/copper-nickel-pipe-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/img/copper-nickel-pipe.jpg" />
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Link rel="canonical" href="https://www.creativemetalind.com/copper-nickel-pipe-supplier-india" />
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
            <span style="color:#374151;font-weight:600">Copper Nickel Pipe Supplier India</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section style="background:linear-gradient(135deg,#111827 0%,#1f2937 100%);padding:70px 0;text-align:center">
        <div style="max-width:900px;margin:0 auto;padding:0 20px">
          <h1 style="color:#fff;font-size:38px;font-weight:800;margin:0 0 18px;line-height:1.2">
            Copper Nickel Pipe Supplier India
          </h1>
          <p style="color:#d1d5db;font-size:18px;margin:0 0 10px;line-height:1.7">
            India's trusted supplier of <strong style="color:#E8821A">CuNi 90/10 (C70600) and 70/30 (C71500)</strong> seamless and welded pipes per ASTM B466 and B467. The gold standard for marine seawater piping — used by the Indian Navy, offshore platforms, desalination plants, and coastal power stations. Inherent biofouling resistance and 30+ year service life in seawater. Ready stock from Vadodara.
          </p>
          <p style="color:#9ca3af;font-size:15px;margin:0 0 28px">
            Price Range: <strong style="color:#E8821A">Rs 1,500 – 6,500/kg</strong> | Mill Test Certificates | Delivery across India
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
            Copper Nickel Pipe & Tube Grades — Ready Stock
          </h2>
          <p style="color:#6b7280;text-align:center;margin:0 0 36px;font-size:15px">
            Complete range of CuNi 90/10 and 70/30 for marine and industrial seawater applications
          </p>
          <div style="overflow-x:auto;border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,0.08)">
            <table style="width:100%;border-collapse:collapse;font-size:14px;min-width:950px">
              <thead>
                <tr style="background:linear-gradient(135deg,#E8821A,#d97706)">
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Grade</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Composition</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Sizes</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Schedule / Wall</th>
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
                    <td style="padding:11px 10px;font-size:13px">{g.schedule || g.wall}</td>
                    <td style="padding:11px 10px;font-size:12px">{g.apps}</td>
                    <td style="padding:11px 10px;font-size:12px">{g.ht}</td>
                    <td style={{"padding":"11px 10px","font-weight":"700","font-size":"12px","color": g.stock === "Ready Stock" ? "#16a34a" : "#d97706"}}>{g.stock}</td>
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
              { label: "Seamless Pipe Standard", value: "ASTM B466 / ASME SB466" },
              { label: "Welded Pipe Standard", value: "ASTM B467 / ASME SB467" },
              { label: "Condenser Tube Standard", value: "ASTM B111 / ASME SB111" },
              { label: "Fittings Standard", value: "ASTM B171 (Plates), MSS-SP75 (BW Fittings)" },
              { label: "Grades", value: "CuNi 90/10 (C70600) | CuNi 70/30 (C71500)" },
              { label: "Pipe Size Range", value: "1/2\" to 24\" NB (seamless up to 12\")" },
              { label: "Tube Size (OD)", value: "12.7mm to 50.8mm (condenser/HX grade)" },
              { label: "Schedules", value: "SCH 5, 10, 20, 40, 80" },
              { label: "Max Seawater Velocity", value: "90/10: 3.5 m/s | 70/30: 4.5 m/s" },
              { label: "Max Service Temperature", value: "300°C (above this, strength drops)" },
              { label: "Testing", value: "Hydrostatic, ECT (100%), UT, PMI, Flattening" },
              { label: "Mill Sources", value: "KME (Germany), Wieland, Mueller, Hindustan Copper" },
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
            Applications of Copper Nickel Pipe in India
          </h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px">
            {[
              { icon: "⚓", title: "Indian Navy & Coast Guard", desc: "Shipboard seawater cooling, fire main systems, bilge piping, and ballast lines per NES 747 and Naval specifications. CuNi 90/10 is the standard choice for all Indian Navy vessels built at MDL, CSL, and GRSE." },
              { icon: "🛢️", title: "Offshore Oil & Gas", desc: "ONGC, Reliance, and Vedanta offshore platforms — seawater lift piping, cooling systems, firewater mains, and produced water handling. CuNi 70/30 for high-velocity critical lines." },
              { icon: "💧", title: "Desalination Plants", desc: "Multi-stage flash (MSF) and multi-effect distillation (MED) plants — condenser tubes, intake piping, and brine heaters. CuNi provides decades of service without biofouling or pitting." },
              { icon: "⚡", title: "Coastal Power Stations", desc: "NTPC, NPCIL, and state gencos near coastline — condenser tube bundles, cooling water piping from sea intake to condenser inlet. CuNi 70/30 tubes for main condenser, 90/10 for auxiliary coolers." },
              { icon: "🚢", title: "Shipbuilding", desc: "Cochin Shipyard, L&T Shipbuilding, ABG Shipyard — all seawater piping systems on merchant vessels, tankers, and LNG carriers. CuNi eliminates the need for antifouling coatings or cathodic protection." },
              { icon: "🏭", title: "Chemical & Petrochemical", desc: "Handling brackish water, mild acids, and neutral salt solutions. CuNi provides excellent resistance to biofouling in cooling water circuits drawing from rivers or estuaries near coastal chemical complexes." },
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
            Why Buy Copper Nickel Pipes from Creative Metal Industries?
          </h2>
          <div style="display:grid;gap:16px">
            {[
              { title: "Genuine European Mill Sources", desc: "All CuNi pipes sourced from KME (Germany), Wieland-Werke, Mueller Industries, and Luvata — world leaders in copper alloy manufacturing. Full traceability with original mill test certificates showing exact composition including critical iron content (1-1.8% Fe for optimum seawater performance)." },
              { title: "Ready Stock for Urgent Requirements", desc: "Maintain ready stock of CuNi 90/10 seamless pipes in sizes 1/2 inch to 6 inch and condenser tubes in popular ODs (19.05mm, 25.4mm). Ship emergencies and offshore platform shutdowns cannot wait for 12-week mill delivery — our stock ensures your critical equipment is back online within days." },
              { title: "Naval & Offshore Approved", desc: "Material complying with ASTM B466/B467 and equivalent BS 2871 Part 3 CN107/CN108 specifications. Suitable for Indian Navy projects per NES 747. Documentation packages meet requirements of ClassNK, Lloyd's Register, DNV GL, Bureau Veritas, and Indian Register of Shipping (IRS)." },
              { title: "Complete Piping System Supply", desc: "Beyond pipes — we supply CuNi fittings (elbows, tees, reducers), flanges (ASTM B171), stub ends, and gaskets. One-stop procurement for your complete seawater piping system — reducing vendor coordination and ensuring material compatibility." },
              { title: "Technical Guidance", desc: "Copper nickel has specific requirements for welding, brazing, and galvanic isolation from steel structures. Our engineers provide guidance on: filler metal selection (ERCuNi), galvanic compatibility, flow velocity limits, cathodic protection considerations, and proper surface preparation." },
              { title: "Competitive Pricing & Export Capability", desc: "Direct mill purchasing in bulk enables competitive pricing for Indian and export markets. We export CuNi to shipyards in UAE, Oman, Qatar, and Southeast Asia. LC, TT, and credit terms available for established accounts. Full export documentation including CoO and packing list." },
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
            Frequently Asked Questions — Copper Nickel Pipe
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
            Need CuNi 90/10 or 70/30 Pipes? Get Instant Quote
          </h2>
          <p style="color:#d1d5db;font-size:16px;margin:0 0 28px">
            Ready stock at Vadodara. ASTM B466 certified. Fast delivery for marine and offshore projects.
          </p>
          <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
            <a href="tel:+919998280619" style="background:#E8821A;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:16px">📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+copper+nickel+pipe+quote" target="_blank" rel="noopener" style="background:#25D366;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:16px">💬 WhatsApp</a>
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
              { href: "/cupro-nickel-9010-pipe-india", label: "CuNi 90/10 Pipe Details" },
              { href: "/cupro-nickel-7030-pipe-india", label: "CuNi 70/30 Pipe Details" },
              { href: "/nickel-200-pipe-supplier-india", label: "Nickel 200 Pipe" },
              { href: "/monel-400-pipe-supplier-india", label: "Monel 400 Pipe" },
              { href: "/titanium-pipe-supplier-india", label: "Titanium Pipe" },
              { href: "/heat-exchanger-tube-supplier-india", label: "Heat Exchanger Tubes" },
              { href: "/inconel-pipe-supplier-india", label: "Inconel 625/600 Pipe" },
              { href: "/hastelloy-pipe-supplier-india", label: "Hastelloy C-276 Pipe" },
            ].map(link => (
              <a href={link.href} style="background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:14px 16px;text-decoration:none;font-size:14px;font-weight:600;color:#E8821A;text-align:center">
                {link.label} →
              </a>
            ))}
          </div>
        </div>
      </section>

      <RelatedPages currentPath="/copper-nickel-pipe-supplier-india" />

      {/* Footer */}
      <footer style="background:#111827;color:#9ca3af;padding:40px 20px;text-align:center;font-size:14px">
        <p style="margin:0 0 8px"><strong style="color:#fff">Creative Metal Industries</strong> — Copper Nickel Pipe Supplier India | Vadodara, Gujarat</p>
        <p style="margin:0 0 8px">F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style="color:#E8821A">+91 99982 80619</a></p>
        <p style="margin:0"><a href="/privacy-policy" style="color:#9ca3af">Privacy Policy</a> · <a href="/terms" style="color:#9ca3af">Terms</a> · <a href="/sitemap" style="color:#9ca3af">Sitemap</a></p>
      </footer>
    </>
  );
}
