/**
 * /hastelloy-pipe-supplier-india
 * Target: "Hastelloy pipe supplier India", "Hastelloy C276 pipe supplier",
 * "Hastelloy C22 pipe India", "nickel alloy pipe supplier India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  {
    grade: "Hastelloy C-276 Seamless Pipe",
    composition: "57Ni-16Cr-16Mo-5Fe-4W (UNS N10276)",
    sizes: "1/2\" to 12\" NB",
    schedule: "SCH 10S, 40S, 80S, 160",
    apps: "HCl, H2SO4, wet chlorine, FGD systems",
    ht: "Solution Annealed 1120°C + WQ",
    stock: "Ready Stock"
  },
  {
    grade: "Hastelloy C-22 Seamless Pipe",
    composition: "56Ni-22Cr-13Mo-3W-3Fe (UNS N06022)",
    sizes: "1/2\" to 8\" NB",
    schedule: "SCH 10S, 40S, 80S",
    apps: "Chemical reactors, pharmaceutical, oxidizing acids",
    ht: "Solution Annealed 1120°C + WQ",
    stock: "Ready Stock"
  },
  {
    grade: "Hastelloy B-2 Seamless Pipe",
    composition: "69Ni-28Mo-2Fe (UNS N10665)",
    sizes: "1/2\" to 6\" NB",
    schedule: "SCH 10S, 40S, 80S",
    apps: "Pure HCl service, reducing acids, acetic acid",
    ht: "Solution Annealed 1065°C",
    stock: "Available"
  },
  {
    grade: "Hastelloy B-3 Seamless Pipe",
    composition: "65Ni-28.5Mo-1.5Cr-1.5Fe (UNS N10675)",
    sizes: "1/2\" to 6\" NB",
    schedule: "SCH 10S, 40S, 80S",
    apps: "Improved thermal stability over B-2, HCl at all concentrations",
    ht: "Solution Annealed 1065°C",
    stock: "Available"
  },
  {
    grade: "Hastelloy X Pipe",
    composition: "47Ni-22Cr-9Mo-18Fe (UNS N06002)",
    sizes: "1/2\" to 8\" NB",
    schedule: "SCH 10S, 40S, 80S",
    apps: "Gas turbine combustion cans, afterburners, high-temp oxidation",
    ht: "Solution Annealed 1175°C",
    stock: "Available"
  },
  {
    grade: "Hastelloy C-4 Seamless Pipe",
    composition: "65Ni-16Cr-16Mo (UNS N06455)",
    sizes: "1/2\" to 6\" NB",
    schedule: "SCH 10S, 40S, 80S",
    apps: "Chemical processing where thermal stability is critical",
    ht: "Solution Annealed 1065°C",
    stock: "Indent"
  }
];

const FAQS = [
  {
    q: "What is Hastelloy and why is it used for piping?",
    a: "Hastelloy is a family of nickel-molybdenum-chromium superalloys developed by Haynes International. These alloys offer exceptional resistance to uniform corrosion, localized attack (pitting and crevice), and stress corrosion cracking in the most aggressive chemical environments. Hastelloy pipes are used where stainless steel and even duplex grades fail — in concentrated hydrochloric acid, sulfuric acid, wet chlorine gas, and mixed acid environments. The high molybdenum content (up to 28% in B-grades) provides unmatched resistance to reducing acids, while the chromium content in C-grades protects against oxidizing media."
  },
  {
    q: "What is the difference between Hastelloy C-276 and C-22?",
    a: "Hastelloy C-276 (UNS N10276) contains 16% Cr, 16% Mo, and 4% W — making it the most versatile corrosion-resistant alloy for both oxidizing and reducing environments. C-22 (UNS N06022) has higher chromium (22%) and slightly lower molybdenum (13%) — giving it superior resistance to oxidizing acids and chlorine-contaminated environments but slightly less performance in pure reducing acids. C-22 also has better weldability with less susceptibility to grain-boundary attack in the heat-affected zone. For general chemical processing where both oxidizing and reducing conditions exist, C-276 is the standard choice. For predominantly oxidizing environments or where welding integrity is critical, C-22 is preferred."
  },
  {
    q: "What sizes of Hastelloy pipe does CMI supply?",
    a: "Creative Metal Industries supplies Hastelloy seamless pipes from 1/2 inch (15NB) to 12 inches (300NB) in schedules SCH 10S, 20S, 40S, 80S, 120, and 160 as per ASTM B622 (seamless) and ASTM B619 (welded). We also stock Hastelloy welded pipes up to 24 inches for large-diameter chemical process piping. Tube sizes per ASTM B622 are available from OD 6.35mm to 114.3mm. Fittings (elbows, tees, reducers) per ASTM B366 and flanges per ASTM B564 complete the piping system. Standard lengths are 5-7 metres random, with fixed and cut-to-length options."
  },
  {
    q: "What is the price of Hastelloy C-276 pipe in India?",
    a: "Hastelloy C-276 pipe prices in India range from Rs 4,500 to Rs 12,000 per kilogram depending on size, schedule, quantity, and current nickel/molybdenum market rates. C-276 is one of the most expensive engineering alloys due to its high nickel (57%) and molybdenum (16%) content. Welded pipes are 20-30% less expensive than seamless for equivalent sizes. Creative Metal Industries offers competitive pricing through direct relationships with mills like Haynes, VDM Metals, and Special Metals. Volume discounts apply for project quantities above 500 kg."
  },
  {
    q: "Which industries use Hastelloy pipes in India?",
    a: "In India, Hastelloy pipes are primarily used in: Chemical manufacturing — HCl production, chlor-alkali plants, agrochemical reactors. Pharmaceutical — active pharmaceutical ingredient (API) reactors handling corrosive solvents. Petrochemical — sour gas processing, amine units, acid gas removal. Fertilizer — phosphoric acid and sulfuric acid piping. Flue Gas Desulphurization (FGD) — absorber towers and wet scrubber ducting in thermal power plants. Pulp and paper — bleach plant piping handling chlorine dioxide. Nuclear — spent fuel reprocessing where mixed acids are present. Creative Metal Industries has supplied Hastelloy to all these sectors since 2012."
  },
  {
    q: "How is Hastelloy pipe welded? What precautions are needed?",
    a: "Hastelloy pipes are welded using GTAW (TIG) or SMAW processes with matching filler metals — ERNiCrMo-4 (C-276), ERNiCrMo-10 (C-22), or ERNiMo-7 (B-2). Key precautions: Use low heat input (0.5-1.5 kJ/mm) to minimize segregation of molybdenum and tungsten. Interpass temperature must not exceed 95°C. Clean all surfaces thoroughly — Hastelloy is sensitive to sulfur contamination. No preheating or PWHT required for C-grades. For B-2 grade, avoid oxidizing conditions during welding. Solution annealing the completed weldment (1120°C, water quench) provides maximum corrosion resistance. CMI provides welding guidance and qualified WPS documentation with every Hastelloy pipe supply."
  }
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    
    {
      "@type":"LocalBusiness","@id":"https://www.creativemetalind.com/hastelloy-pipe-supplier-india#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name": "Creative Metal Industries",
      "telephone": "+919998280619",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road, Sultanpura",
        "addressLocality": "Vadodara",
        "addressRegion": "Gujarat",
        "postalCode": "390001",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creativemetalind.com" },
        { "@type": "ListItem", "position": 2, "name": "Exotic Alloy Pipes", "item": "https://www.creativemetalind.com/inconel-pipe-supplier-india" },
        { "@type": "ListItem", "position": 3, "name": "Hastelloy Pipe Supplier India", "item": "https://www.creativemetalind.com/hastelloy-pipe-supplier-india" }
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

export default function HastelloyPipeSupplierIndia() {
  return (
    <>
      <Title>Hastelloy Pipe Supplier India | C-276, C-22, B-2 | CMI</Title>
      <Meta name="description" content="Hastelloy pipe supplier India — Hastelloy C276 (N10276), C-22, B-2 seamless pipes per ASTM B622. Corrosion-resistant nickel alloy for chemical & pharma." />
      <Meta property="og:title" content="Hastelloy Pipe Supplier India | C-276, C-22 | Creative Metal Industries" />
      <Meta property="og:description" content="India's trusted Hastelloy pipe supplier. C-276, C-22, B-2 seamless pipes per ASTM B622. Chemical-resistant nickel alloy pipes. Ready stock Vadodara." />
      <Meta property="og:type" content="product" />
      <Meta property="og:url" content="https://www.creativemetalind.com/hastelloy-pipe-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Link rel="canonical" href="https://www.creativemetalind.com/hastelloy-pipe-supplier-india" />
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
            <a href="/inconel-pipe-supplier-india" style="color:#E8821A;text-decoration:none">Exotic Alloy Pipes</a>
            <span style="margin:0 8px">›</span>
            <span style="color:#374151;font-weight:600">Hastelloy Pipe Supplier India</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section style="background:linear-gradient(135deg,#111827 0%,#1f2937 100%);padding:70px 0;text-align:center">
        <div style="max-width:900px;margin:0 auto;padding:0 20px">
          <h1 style="color:#fff;font-size:38px;font-weight:800;margin:0 0 18px;line-height:1.2">
            Hastelloy Pipe Supplier India
          </h1>
          <p style="color:#d1d5db;font-size:18px;margin:0 0 10px;line-height:1.7">
Leading <strong style="color:#E8821A">Hastelloy supplier</strong> of <strong style="color:#E8821A">Hastelloy C-276 and C-22</strong> seamless and welded pipes per ASTM B622 and ASTM B619. This Hastelloy metal is the ultimate corrosion-resistant alloy for handling hydrochloric acid, sulfuric acid, wet chlorine, and mixed chemical environments. Sizes 1/2" to 12" NB in all schedules. Ready stock from Vadodara, Gujarat.
          </p>
          <p style="color:#9ca3af;font-size:15px;margin:0 0 28px">
            Price Range: <strong style="color:#E8821A">Rs 4,500 – 12,000/kg</strong> | Mill Test Certificates | Free Delivery across India
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
            Hastelloy Pipe Grades & Specifications
          </h2>
          <p style="color:#6b7280;text-align:center;margin:0 0 36px;font-size:15px">
            Complete range of Hastelloy nickel alloy pipes for the most aggressive corrosion environments
          </p>
          <div style="overflow-x:auto;border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,0.08)">
            <table style="width:100%;border-collapse:collapse;font-size:14px;min-width:900px">
              <thead>
                <tr style="background:linear-gradient(135deg,#E8821A,#d97706)">
                  <th style="padding:14px 12px;color:#fff;text-align:left;font-weight:600">Grade</th>
                  <th style="padding:14px 12px;color:#fff;text-align:left;font-weight:600">Composition</th>
                  <th style="padding:14px 12px;color:#fff;text-align:left;font-weight:600">Sizes</th>
                  <th style="padding:14px 12px;color:#fff;text-align:left;font-weight:600">Schedule</th>
                  <th style="padding:14px 12px;color:#fff;text-align:left;font-weight:600">Applications</th>
                  <th style="padding:14px 12px;color:#fff;text-align:left;font-weight:600">Heat Treatment</th>
                  <th style="padding:14px 12px;color:#fff;text-align:left;font-weight:600">Stock</th>
                </tr>
              </thead>
              <tbody>
                {GRADES.map((g, i) => (
                  <tr style={{"background": i % 2 === 0 ? "#fff" : "#f9fafb"}}>
                    <td style="padding:12px;font-weight:700;color:#111827">{g.grade}</td>
                    <td style="padding:12px;font-size:13px">{g.composition}</td>
                    <td style="padding:12px">{g.sizes}</td>
                    <td style="padding:12px;font-size:13px">{g.schedule}</td>
                    <td style="padding:12px;font-size:13px">{g.apps}</td>
                    <td style="padding:12px;font-size:12px">{g.ht}</td>
                    <td style={{"padding":"12px","font-weight":"700","color": g.stock === "Ready Stock" ? "#16a34a" : g.stock === "Available" ? "#d97706" : "#6b7280"}}>{g.stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Hastelloy C276 */}
      <section style="padding:60px 0;background:#fff">
        <div style="max-width:900px;margin:0 auto;padding:0 20px">
          <h2 style="color:#111827;font-size:28px;font-weight:700;text-align:center;margin:0 0 20px">
            Hastelloy C276 Pipe Supplier — Grade &amp; Specifications
          </h2>
          <p style="color:#4b5563;font-size:16px;line-height:1.8;margin:0">
            As a specialist <strong>Hastelloy C276 supplier</strong>, we hold ready stock of <strong>Hastelloy C276 pipe</strong> (UNS N10276) in seamless form to ASTM B622, sizes 1/2" to 12" NB. Its 57Ni-16Cr-16Mo-5Fe-4W chemistry makes C-276 the most versatile corrosion-resistant alloy for both oxidizing and reducing media — the standard choice for hydrochloric acid, sulfuric acid, wet chlorine and FGD systems where stainless and duplex grades fail. Every length ships solution annealed with full MTC and heat traceability; see the grade table above for complete C-276 data.
          </p>
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
              { label: "Standard (Seamless)", value: "ASTM B622 / ASME SB622" },
              { label: "Standard (Welded)", value: "ASTM B619 / ASME SB619" },
              { label: "Fittings Standard", value: "ASTM B366 (Buttweld Fittings)" },
              { label: "Flanges Standard", value: "ASTM B564 (Forgings)" },
              { label: "Grades Available", value: "C-276, C-22, C-4, B-2, B-3, X, G-30" },
              { label: "Size Range", value: "1/2\" to 12\" NB (Seamless), up to 24\" (Welded)" },
              { label: "Schedules", value: "SCH 5S, 10S, 20S, 40S, 80S, 120, 160" },
              { label: "Type", value: "Seamless, Welded (TIG/Plasma), ERW" },
              { label: "Max Service Temp", value: "C-276: 1095°C | B-2: 870°C | X: 1200°C" },
              { label: "Testing", value: "Hydrostatic, UT (100%), PMI, IGC, Flattening, Flaring" },
              { label: "Certification", value: "MTC EN 10204 3.1/3.2, NACE MR0175" },
              { label: "Mill Sources", value: "Haynes, VDM Metals, Special Metals, Sandvik" },
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
            Applications of Hastelloy Pipe in India
          </h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px">
            {[
              { icon: "🧪", title: "Chemical Processing", desc: "HCl production, chlorination reactors, acid recovery systems. C-276 handles both oxidizing and reducing acids that destroy stainless steel." },
              { icon: "💊", title: "Pharmaceutical & API", desc: "Active ingredient reactors with corrosive solvents, halogenated compounds, and strong acid catalysts. C-22 preferred for oxidizing drug intermediates." },
              { icon: "🛢️", title: "Petrochemical & Refinery", desc: "Sour gas processing, amine regeneration towers, overhead condensers, and acid gas removal units. NACE MR0175 compliant." },
              { icon: "⚡", title: "Flue Gas Desulphurization", desc: "FGD absorber towers, quench sections, wet scrubber ducting in coal-fired power plants. C-276 resists the hot sulfuric/chloride mixture." },
              { icon: "🌊", title: "Pulp & Paper", desc: "Bleach plant piping handling chlorine dioxide, hypochlorite, and chlorinated wash water. C-22 outperforms titanium in these media." },
              { icon: "☢️", title: "Nuclear Fuel Processing", desc: "Spent fuel reprocessing with nitric-hydrofluoric acid mixtures. B-2 grade for pure reducing acid service without oxidizers." },
              { icon: "🏭", title: "Fertilizer Plants", desc: "Phosphoric acid concentration, sulfuric acid piping, and ammonium nitrate production lines requiring zero corrosion allowance." },
              { icon: "🔬", title: "Waste Treatment", desc: "Hazardous waste incinerator off-gas scrubbing systems, industrial effluent handling with unknown/variable chemistry." },
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
            Why Buy Hastelloy Pipes from Creative Metal Industries?
          </h2>
          <div style="display:grid;gap:16px">
            {[
              { title: "Genuine Mill Source", desc: "All Hastelloy pipes sourced directly from Haynes International, VDM Metals (ThyssenKrupp), and Special Metals with original mill test certificates. Full traceability from heat number to your delivery." },
              { title: "Ready Stock Vadodara", desc: "Maintain ready stock of Hastelloy C-276 and C-22 seamless pipes in commonly requested sizes. Same-day dispatch for stock items. Custom sizes within 6-8 weeks from mill." },
              { title: "Complete Testing & Certification", desc: "Every pipe undergoes hydrostatic test, 100% ultrasonic examination, positive material identification (PMI by XRF), intergranular corrosion test (ASTM G28), and visual inspection. NACE MR0175/ISO 15156 compliance for sour service." },
              { title: "Technical Expertise", desc: "Our engineers help you select between C-276, C-22, B-2, and other grades based on your specific media, temperature, and concentration. 13+ years of nickel alloy supply experience across diverse chemical environments." },
              { title: "Competitive Pricing", desc: "Direct mill relationships and bulk purchasing from authorized distributors enable competitive pricing. We stock multiple heat numbers allowing us to offer immediate availability without indent premiums." },
              { title: "Complete Piping Solution", desc: "Beyond pipes — we supply matching Hastelloy fittings (ASTM B366), flanges (ASTM B564), bars, plates, and fasteners. One purchase order covers your complete exotic alloy requirement." },
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
            Frequently Asked Questions — Hastelloy Pipe
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
            Need Hastelloy C-276 / C-22 Pipes? Get Instant Quote
          </h2>
          <p style="color:#d1d5db;font-size:16px;margin:0 0 28px">
            Ready stock at Vadodara warehouse. Complete documentation. Pan-India delivery in 2-5 days.
          </p>
          <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
            <a href="tel:+919998280619" style="background:#E8821A;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:16px">📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+Hastelloy+pipe+quote" target="_blank" rel="noopener" style="background:#25D366;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:16px">💬 WhatsApp</a>
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
              { href: "/inconel-pipe-supplier-india", label: "Inconel 625/600 Pipe" },
              { href: "/monel-400-pipe-supplier-india", label: "Monel 400 Pipe" },
              { href: "/hastelloy-c22-pipe-supplier-india", label: "Hastelloy C22 Pipe" },
              { href: "/incoloy-800-pipe-supplier-india", label: "Incoloy 800/825 Pipe" },
              { href: "/titanium-pipe-supplier-india", label: "Titanium Pipe" },
              { href: "/duplex-steel-supplier-vadodara", label: "Duplex 2205/2507" },
              { href: "/ss-seamless-pipe-supplier-india", label: "SS Seamless Pipe" },
            ].map(link => (
              <a href={link.href} style="background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:14px 16px;text-decoration:none;font-size:14px;font-weight:600;color:#E8821A;text-align:center;transition:box-shadow 0.2s">
                {link.label} →
              </a>
            ))}
          </div>
        </div>
      </section>

      <RelatedPages currentPath="/hastelloy-pipe-supplier-india" />

      {/* Footer */}
      <footer style="background:#111827;color:#9ca3af;padding:40px 20px;text-align:center;font-size:14px">
        <p style="margin:0 0 8px"><strong style="color:#fff">Creative Metal Industries</strong> — Hastelloy Pipe Supplier India | Vadodara, Gujarat</p>
        <p style="margin:0 0 8px">F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style="color:#E8821A">+91 99982 80619</a></p>
        <p style="margin:0"><a href="/privacy-policy" style="color:#9ca3af">Privacy Policy</a> · <a href="/terms" style="color:#9ca3af">Terms</a> · <a href="/sitemap" style="color:#9ca3af">Sitemap</a></p>
      </footer>
    </>
  );
}
