/**
 * /titanium-pipe-supplier-india
 * Target: "titanium pipe supplier India", "titanium Grade 2 pipe",
 * "titanium Grade 5 pipe", "ASTM B861 pipe India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  {
    grade: "Titanium Grade 1 Seamless Pipe",
    composition: "CP Ti (99.5% min), Soft",
    sizes: "1/2\" to 6\" NB",
    schedule: "SCH 10S, 40S, 80S",
    apps: "Chemical process, electroplating, marine heat exchangers",
    ht: "Annealed 650-750°C / Vacuum Annealed",
    stock: "Available"
  },
  {
    grade: "Titanium Grade 2 Seamless Pipe",
    composition: "CP Ti (99.2% min), Standard",
    sizes: "1/2\" to 10\" NB",
    schedule: "SCH 10S, 20S, 40S, 80S",
    apps: "Chemical plants, desalination, power plant condensers, chlor-alkali",
    ht: "Annealed 650-750°C",
    stock: "Ready Stock"
  },
  {
    grade: "Titanium Grade 5 Seamless Pipe (Ti-6Al-4V)",
    composition: "90% Ti, 6% Al, 4% V",
    sizes: "1/2\" to 4\" NB",
    schedule: "SCH 10S, 40S, 80S",
    apps: "Aerospace, defence, high-strength chemical, marine risers",
    ht: "Mill Annealed / STA (Solution Treated + Aged)",
    stock: "Available"
  },
  {
    grade: "Titanium Grade 7 Seamless Pipe",
    composition: "CP Ti + 0.15% Pd (Palladium)",
    sizes: "1/2\" to 6\" NB",
    schedule: "SCH 10S, 40S",
    apps: "Enhanced crevice corrosion resistance, reducing acid environments",
    ht: "Annealed 650-750°C",
    stock: "Indent"
  },
  {
    grade: "Titanium Grade 9 Pipe (Ti-3Al-2.5V)",
    composition: "Ti + 3% Al + 2.5% V",
    sizes: "1/2\" to 4\" NB",
    schedule: "SCH 10S, 40S, 80S",
    apps: "Aerospace hydraulic lines, offshore risers, sporting goods",
    ht: "Stress Relieved / Annealed",
    stock: "Indent"
  },
  {
    grade: "Titanium Grade 2 Welded Pipe",
    composition: "CP Ti per ASTM B862",
    sizes: "2\" to 12\" NB",
    schedule: "SCH 10S, 20S, 40S",
    apps: "Large-diameter chemical piping, FGD systems, water treatment",
    ht: "Stress Relieved (post-weld)",
    stock: "Available"
  },
  {
    grade: "Titanium Grade 2 Tube (Condenser)",
    composition: "CP Ti per ASTM B338",
    sizes: "OD 12.7mm to 50.8mm",
    wall: "BWG 18 to 24 (0.56mm to 1.24mm)",
    apps: "Power plant condensers, MSF desalination, lube oil coolers",
    ht: "Annealed + Pickled",
    stock: "Ready Stock"
  }
];

const FAQS = [
  {
    q: "Why is titanium used for piping instead of stainless steel?",
    a: "Titanium is chosen over stainless steel when the service environment exceeds SS capability: Chloride-induced stress corrosion cracking — titanium is immune to SCC in chloride environments where austenitic SS (304/316) fails catastrophically. Seawater and brackish water — titanium has zero corrosion rate in seawater at all temperatures up to 260°C, while SS pits at temperatures above 60°C. Oxidizing acids — titanium forms an extremely stable TiO2 oxide film in wet chlorine, nitric acid, and chromic acid. Weight savings — titanium's density (4.51 g/cm³) is 43% lighter than steel (7.85 g/cm³), critical for aerospace and offshore platforms. However, titanium costs 5-10x more than SS 316L, so it's specified only where SS cannot survive the environment or where weight is critical."
  },
  {
    q: "What is the difference between Titanium Grade 2 and Grade 5?",
    a: "Grade 2 is commercially pure (CP) titanium with excellent corrosion resistance and moderate strength (tensile 345 MPa, yield 275 MPa). It's the workhorse grade for chemical process piping, heat exchangers, and marine applications — chosen for corrosion resistance rather than strength. Grade 5 (Ti-6Al-4V) is an alpha-beta alloy with double the strength (tensile 895 MPa, yield 828 MPa) but slightly reduced corrosion resistance compared to CP grades. Grade 5 is chosen for aerospace structural components, high-strength fasteners, defence applications, and situations where both strength and light weight are needed. For chemical piping applications, Grade 2 is almost always the correct choice. Grade 5 is specified only when structural loads justify its premium cost."
  },
  {
    q: "What sizes of titanium pipe does CMI supply?",
    a: "Creative Metal Industries supplies titanium pipes in: Seamless pipes per ASTM B861 from 1/2 inch to 10 inches NB in schedules SCH 5S through SCH 80S. Welded pipes per ASTM B862 from 2 inches to 12 inches NB. Condenser/heat exchanger tubes per ASTM B338 from OD 12.7mm to 50.8mm in BWG 18-24. Standard lengths 3-6 metres random (titanium billets limit length). Cut-to-length and custom sizes available. We also supply titanium fittings (ASTM B363), flanges (ASTM B381), plates (ASTM B265), and bars (ASTM B348) for complete piping system procurement."
  },
  {
    q: "What is the price of titanium Grade 2 pipe in India?",
    a: "Titanium Grade 2 seamless pipe prices in India range from Rs 5,000 to Rs 15,000 per kilogram depending on size, wall thickness, and quantity. Grade 5 (Ti-6Al-4V) is more expensive at Rs 8,000 to Rs 25,000/kg due to complex alloying and heat treatment. Titanium condenser tubes (ASTM B338) range from Rs 4,000 to Rs 10,000/kg. Prices are influenced by global titanium sponge prices and availability from mills. Creative Metal Industries sources from VSMPO-AVISMA (Russia/world's largest), Baoji (China), Kobe Steel (Japan), and Western Superconducting (China). Quantity discounts available for project orders above 100 kg."
  },
  {
    q: "Which industries use titanium pipes in India?",
    a: "Key applications in India: Chemical Processing — chlor-alkali plants (wet chlorine piping), bleach plants, sodium hypochlorite production, organic acid handling. Desalination — MSF and MED condenser tube bundles, brine heaters, intake piping at BARC and MIDAL plants. Power Plants — condenser tubes replacing CuNi and SS (longer life, zero fouling), FGD wet scrubber components. Aerospace & Defence — HAL, ISRO, DRDO structural and hydraulic systems (Grade 5/Grade 9). Offshore Oil & Gas — seawater cooling on platforms where long maintenance-free life justifies premium cost. Medical — implants and surgical instruments (Grade 5 ELI). Electroplating — anode baskets and tank linings handling chromic acid and mixed acids."
  },
  {
    q: "How is titanium pipe welded? What special precautions are needed?",
    a: "Titanium welding requires rigorous shielding from atmospheric contamination — oxygen, nitrogen, and hydrogen at welding temperature cause embrittlement. Requirements: GTAW (TIG) process only for piping — with argon shielding gas (99.99% purity minimum). Trail shield (argon blanket) on the OD behind the weld pool. Complete argon purge inside the pipe (oxygen level below 50 ppm before striking arc). Filler metal ERTi-2 for Grade 2, ERTi-5 for Grade 5. Clean room conditions — no oil, grease, fingerprints, or carbon steel contamination within 3 metres. Weld color indicates quality: bright silver = perfect, light straw/gold = acceptable, blue = marginal, purple/grey = reject (contaminated). No preheating or PWHT required for CP grades. CMI can recommend qualified titanium welding contractors and provide WPS guidance."
  }
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    
    {
      "@type":"LocalBusiness","@id":"https://www.creativemetalind.com/titanium-pipe-supplier-india#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name": "Creative Metal Industries",
      "telephone": "+919998280619",
      "address": { "@type": "PostalAddress", "streetAddress": "F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road, Sultanpura", "addressLocality": "Vadodara", "addressRegion": "Gujarat", "postalCode": "390001", "addressCountry": "IN" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creativemetalind.com" },
        { "@type": "ListItem", "position": 2, "name": "Titanium Pipe Supplier India", "item": "https://www.creativemetalind.com/titanium-pipe-supplier-india" }
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

export default function TitaniumPipeSupplierIndia() {
  return (
    <>
      <Title>Titanium Pipe Supplier India | Grade 2 &amp; Grade 5 | CMI</Title>
      <Meta name="description" content="Titanium pipe supplier India. Grade 1, 2, 5, 7, 9 seamless pipes per ASTM B861. Lightweight corrosion-proof piping for chemical and desalination." />
      <Meta property="og:title" content="Titanium Pipe Supplier India | Grade 2 & Grade 5 | CMI" />
      <Meta property="og:description" content="India's trusted titanium pipe supplier. Grade 2 and Grade 5. ASTM B861. Chemical, desalination, aerospace grade. Ready stock." />
      <Meta property="og:type" content="product" />
      <Meta property="og:url" content="https://www.creativemetalind.com/titanium-pipe-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Link rel="canonical" href="https://www.creativemetalind.com/titanium-pipe-supplier-india" />
      <script type="application/ld+json">{SCHEMA}</script>
      <script type="application/ld+json">{FAQ_SCHEMA}</script>

      {/* Navigation */}
      <nav style="background:#111827;padding:12px 0;position:sticky;top:0;z-index:100;box-shadow:0 2px 8px rgba(0,0,0,0.3)">
        <div style="max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;padding:0 20px">
          <a href="/" style="display:flex;align-items:center;text-decoration:none">
            <img width="87" height="44" src="/logo_cmi.png" alt="Creative Metal Industries Logo" style="height:44px;width:auto" loading="eager" />
          </a>
          <div style="display:flex;gap:24px;align-items:center">
            <a href="/" style="color:#fff;text-decoration:none;font-size:14px;font-weight:500">Home</a>
            <a href="/about" style="color:#fff;text-decoration:none;font-size:14px;font-weight:500">About</a>
            <a href="/products" style="color:#fff;text-decoration:none;font-size:14px;font-weight:500">Products</a>
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
            <span style="color:#374151;font-weight:600">Titanium Pipe Supplier India</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section style="background:linear-gradient(135deg,#111827 0%,#1f2937 100%);padding:70px 0;text-align:center">
        <div style="max-width:900px;margin:0 auto;padding:0 20px">
          <h1 style="color:#fff;font-size:38px;font-weight:800;margin:0 0 18px;line-height:1.2">
            Titanium Pipe Supplier India
          </h1>
          <p style="color:#d1d5db;font-size:18px;margin:0 0 10px;line-height:1.7">
India's specialist <strong style="color:#E8821A">titanium supplier</strong> and <strong style="color:#E8821A">titanium pipe supplier</strong>, stocking titanium Grade 2 and Grade 5 (Ti-6Al-4V) seamless and welded pipes per ASTM B861/B862. The lightest and most corrosion-resistant metal for industrial piping — immune to seawater, chlorides, and oxidizing acids where stainless steel fails. 43% lighter than steel with infinite fatigue life. Sizes 1/2" to 12" NB. Stock and indent supply from Vadodara. For round, square and hex bar, see our <a href="/titanium-bar-supplier-india" style="color:#E8821A;text-decoration:underline">titanium bar supplier</a> page.
          </p>
          <p style="color:#9ca3af;font-size:15px;margin:0 0 28px">
            Price Range: <strong style="color:#E8821A">Rs 5,000 – 25,000/kg</strong> | Full Traceability | Delivery across India & Export
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
            Titanium Pipe & Tube Grades
          </h2>
          <p style="color:#6b7280;text-align:center;margin:0 0 36px;font-size:15px">
            From commercially pure Grade 2 for chemical service to high-strength Grade 5 for aerospace
          </p>
          <div style="overflow-x:auto;border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,0.08)">
            <table style="width:100%;border-collapse:collapse;font-size:14px;min-width:950px">
              <thead>
                <tr style="background:linear-gradient(135deg,#E8821A,#d97706)">
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Grade</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Composition</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Sizes</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Schedule</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Applications</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Heat Treatment</th>
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
              { label: "Seamless Pipe Standard", value: "ASTM B861 / ASME SB861" },
              { label: "Welded Pipe Standard", value: "ASTM B862 / ASME SB862" },
              { label: "Tube Standard", value: "ASTM B338 / ASME SB338" },
              { label: "Fittings", value: "ASTM B363 (Buttweld Fittings)" },
              { label: "Flanges", value: "ASTM B381 (Forgings)" },
              { label: "Grades Available", value: "Grade 1, 2, 3, 5, 7, 9, 12, 16, 23" },
              { label: "Pipe Size Range", value: "1/2\" to 12\" NB (seamless up to 10\")" },
              { label: "Condenser Tube OD", value: "12.7mm to 50.8mm (per B338)" },
              { label: "Density", value: "4.51 g/cm³ (43% lighter than steel)" },
              { label: "Melting Point", value: "1668°C (Grade 2)" },
              { label: "Testing", value: "Hydrostatic, UT (100%), PMI, Flattening, Flaring, Bend Test" },
              { label: "Mill Sources", value: "VSMPO-AVISMA, Baoji Titanium, Kobe Steel, OTIC" },
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
            Applications of Titanium Pipe in India
          </h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px">
            {[
              { icon: "🧪", title: "Chemical & Chlor-Alkali", desc: "Wet chlorine piping, bleach production, sodium hypochlorite handling, chlorine dioxide systems. Titanium is the only economical material for wet chlorine gas service — zero corrosion rate at all temperatures." },
              { icon: "💧", title: "Desalination & Water Treatment", desc: "MSF evaporator tubes, MED condenser tubes, RO high-pressure piping. Grade 2 tubes at BARC desalination facility have operated 25+ years without failure or fouling — the longest-life condenser material available." },
              { icon: "⚡", title: "Power Plant Condensers", desc: "Main condenser tube bundles replacing CuNi and SS — especially at coastal stations with warm seawater. Titanium eliminates ammonia corrosion (from cooling water treatment) that attacks copper alloys." },
              { icon: "✈️", title: "Aerospace & Defence", desc: "HAL, ISRO, DRDO applications — Grade 5 (Ti-6Al-4V) for structural frames, hydraulic systems, engine components. Grade 9 (Ti-3Al-2.5V) for aerospace hydraulic tubing. Full traceability per DGQA requirements." },
              { icon: "🛢️", title: "Offshore Oil & Gas", desc: "Seawater cooling risers, firewater systems, heat exchanger tubes on FPSOs and platforms. Titanium's zero-maintenance characteristic is critical for subsea/unmanned facilities where access is limited." },
              { icon: "🏥", title: "Medical & Pharmaceutical", desc: "Pharmaceutical reactor piping handling oxidizing APIs and intermediates. Medical device manufacturing — Grade 5 ELI (Extra Low Interstitial) for surgical implants and instruments. Biocompatible and non-toxic." },
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
            Why Buy Titanium Pipes from Creative Metal Industries?
          </h2>
          <div style="display:grid;gap:16px">
            {[
              { title: "Verified Mill Sources with Full Traceability", desc: "All titanium sourced from VSMPO-AVISMA (world's largest titanium producer), Baoji Titanium Industry, Kobe Steel, and OTIC with complete documentation chain from sponge production through final product. Critical for aerospace applications requiring NADCAP/AS9100 compliance." },
              { title: "Grade 2 Stock for Chemical Industry", desc: "Maintain stock of titanium Grade 2 seamless pipes in common sizes (1/2\" to 4\" NB, SCH 10S and 40S) and condenser tubes (OD 19.05mm and 25.4mm). Chemical plants requiring emergency replacement can get material within days instead of the typical 12-16 week mill lead time." },
              { title: "Complete Testing & Certification", desc: "Every titanium pipe supplied with: chemical analysis (O, N, H, Fe, C content critical for Ti), mechanical properties, 100% UT, hydrostatic test, PMI verification. For aerospace: additional testing including flattening, flaring, reverse bend, and microstructure examination per AMS standards." },
              { title: "Handling & Contamination Prevention", desc: "Titanium requires careful handling to prevent iron contamination (embedded iron causes galvanic pitting in service). Our warehouse has dedicated titanium storage — segregated from carbon steel with stainless steel racks. Packaging uses plastic end caps, non-metallic strapping, and desiccant for moisture protection." },
              { title: "Welding & Fabrication Guidance", desc: "Titanium welding is unforgiving — one mistake in shielding gas purity ruins the component. We provide: detailed welding guidelines, recommended WPS parameters, filler wire supply (ERTi-2, ERTi-5), and can connect you with qualified titanium fabricators in India." },
              { title: "Competitive Pricing & Global Supply", desc: "Our network of titanium suppliers across Russia, China, Japan, and USA ensures competitive pricing and short delivery. For standard chemical grades (Gr.2), we offer 10-20% savings over typical Indian market rates through bulk purchasing agreements with Chinese and Russian mills." },
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
            Frequently Asked Questions — Titanium Pipe
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
            Need Titanium Grade 2 or Grade 5 Pipes? Get Instant Quote
          </h2>
          <p style="color:#d1d5db;font-size:16px;margin:0 0 28px">
            Stock and indent supply. ASTM B861/B862 certified. Chemical, aerospace, and marine grade.
          </p>
          <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
            <a href="tel:+919998280619" style="background:#E8821A;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:16px">📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+titanium+pipe+quote" target="_blank" rel="noopener" style="background:#25D366;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:16px">💬 WhatsApp</a>
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
              { href: "/titanium-bar-supplier-india", label: "Titanium Bar Supplier" },
              { href: "/titanium-grade-2-pipe-india", label: "Titanium Grade 2 Details" },
              { href: "/titanium-grade-5-pipe-india", label: "Titanium Grade 5 Details" },
              { href: "/monel-400-pipe-supplier-india", label: "Monel 400 Pipe" },
              { href: "/hastelloy-pipe-supplier-india", label: "Hastelloy C-276 Pipe" },
              { href: "/inconel-pipe-supplier-india", label: "Inconel 625/600 Pipe" },
              { href: "/incoloy-800-pipe-supplier-india", label: "Incoloy 800/825 Pipe" },
              { href: "/duplex-steel-supplier-vadodara", label: "Duplex 2205/2507" },
            ].map(link => (
              <a href={link.href} style="background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:14px 16px;text-decoration:none;font-size:14px;font-weight:600;color:#E8821A;text-align:center">
                {link.label} →
              </a>
            ))}
          </div>
        </div>
      </section>

      <RelatedPages currentPath="/titanium-pipe-supplier-india" />

      {/* Footer */}
      <footer style="background:#111827;color:#9ca3af;padding:40px 20px;text-align:center;font-size:14px">
        <p style="margin:0 0 8px"><strong style="color:#fff">Creative Metal Industries</strong> — Titanium Pipe Supplier India | Vadodara, Gujarat</p>
        <p style="margin:0 0 8px">F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style="color:#E8821A">+91 99982 80619</a></p>
        <p style="margin:0"><a href="/privacy-policy" style="color:#9ca3af">Privacy Policy</a> · <a href="/terms" style="color:#9ca3af">Terms</a> · <a href="/sitemap" style="color:#9ca3af">Sitemap</a></p>
      </footer>
    </>
  );
}
