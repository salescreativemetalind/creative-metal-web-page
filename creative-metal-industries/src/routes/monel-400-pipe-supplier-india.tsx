/**
 * /monel-400-pipe-supplier-india
 * Target: "Monel 400 pipe supplier India", "Monel K500 pipe",
 * "UNS N04400 pipe India", "ASTM B165 pipe supplier"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  {
    grade: "Monel 400 Seamless Pipe",
    composition: "67% Ni, 30% Cu, 2% Fe, 1% Mn (UNS N04400)",
    sizes: "1/2\" to 10\" NB",
    schedule: "SCH 10S, 40S, 80S, 160",
    apps: "Marine, seawater valves, HF acid, brine",
    ht: "Annealed at 760-870°C",
    stock: "Ready Stock"
  },
  {
    grade: "Monel 400 Welded Pipe",
    composition: "UNS N04400 per ASTM B725",
    sizes: "2\" to 12\" NB",
    schedule: "SCH 10S, 40S, 80S",
    apps: "Large-diameter marine piping, oil refinery components",
    ht: "Stress Relieved",
    stock: "Available"
  },
  {
    grade: "Monel 400 Tube (Condenser Grade)",
    composition: "N04400 per ASTM B163",
    sizes: "OD 9.53mm to 50.8mm",
    wall: "BWG 16 to 24",
    apps: "Feedwater heaters, lube oil coolers, steam condensers",
    ht: "Annealed + Bright Finished",
    stock: "Ready Stock"
  },
  {
    grade: "Monel K-500 Pipe",
    composition: "65% Ni, 30% Cu, 3% Al, 0.6% Ti (UNS N05500)",
    sizes: "1/2\" to 4\" NB",
    schedule: "SCH 40S, 80S",
    apps: "High-strength marine shafts, fasteners, springs, pump impellers",
    ht: "Age Hardened (480°C for 16 hrs)",
    stock: "Indent"
  },
  {
    grade: "Monel R-405 (Free Machining)",
    composition: "N04400 + controlled Sulfur (0.025-0.060%)",
    sizes: "Round bar OD 6mm to 200mm",
    schedule: "—",
    apps: "Screw machine parts, valve stems, fasteners",
    ht: "Hot Worked + Annealed",
    stock: "Available"
  }
];

const FAQS = [
  {
    q: "What is Monel 400 and why is it used for piping?",
    a: "Monel 400 (UNS N04400) is a nickel-copper alloy containing approximately 67% nickel and 30% copper. This unique composition gives it outstanding resistance to: seawater and marine atmospheres (no pitting even in stagnant conditions), hydrofluoric acid (HF) at all concentrations and temperatures, deaerated sulfuric and hydrochloric acids, and alkaline solutions including sodium and potassium hydroxide. Monel 400 is one of the few alloys that can handle hydrofluoric acid — making it irreplaceable in petroleum refining (HF alkylation units) and uranium processing. Its high nickel content provides resistance to stress corrosion cracking in chloride environments where stainless steel fails. The alloy also retains good strength at sub-zero temperatures, making it suitable for cryogenic service."
  },
  {
    q: "What is the difference between Monel 400 and Monel K-500?",
    a: "Monel 400 is a single-phase solid-solution alloy that cannot be hardened by heat treatment — it has moderate strength (tensile ~550 MPa in annealed condition) with excellent corrosion resistance. Monel K-500 is a precipitation-hardenable variant with added aluminium (2.3-3.15%) and titanium (0.35-0.85%) that enables age-hardening to achieve significantly higher strength (tensile ~1100 MPa) and hardness (~35 HRC). K-500 retains most of the corrosion resistance of Monel 400 while offering 2x the strength — making it the material of choice for pump shafts, impellers, propeller shafts, valve stems, and springs in marine and chemical service. K-500 costs 30-50% more than Monel 400 due to additional alloying and heat treatment."
  },
  {
    q: "Where is Monel 400 pipe used in Indian industry?",
    a: "Key applications in India: Petroleum Refining — HF alkylation units at IOCL, HPCL, BPCL, and Reliance refineries. Monel 400 is the mandatory material for all piping, vessels, and valves handling hydrofluoric acid in alkylation service. Chemical Plants — handling HF, deaerated H2SO4, and mixed acids in agrochemical and fluorochemical production. Marine & Shipbuilding — seawater piping, propeller shafts, pump casings for Indian Navy and merchant vessels. Nuclear Energy — uranium hexafluoride (UF6) handling systems at nuclear fuel fabrication facilities (NPCIL). Oil & Gas — sour gas components where H2S/CO2 resistance with high strength is needed. Power Plants — feedwater heater tubes and de-aerator components."
  },
  {
    q: "What sizes of Monel 400 pipe does CMI stock?",
    a: "Creative Metal Industries stocks Monel 400 seamless pipes from 1/2 inch to 10 inches NB in schedules SCH 10S through SCH 160 per ASTM B165 (seamless pipe) and ASTM B725 (welded pipe). Condenser and heat exchanger tubes per ASTM B163 are available in OD 9.53mm to 50.8mm. We also maintain stock of Monel 400 bars (ASTM B164), plates (ASTM B127), fittings (ASTM B366), and flanges (ASTM B564). Standard pipe lengths are 5-7 metres. For Monel K-500, we supply round bars and custom-machined components on indent."
  },
  {
    q: "What is the price of Monel 400 pipe in India?",
    a: "Monel 400 seamless pipe prices in India range from Rs 3,500 to Rs 9,000 per kilogram depending on size, schedule, and quantity. Condenser tubes (ASTM B163) range from Rs 3,000 to Rs 7,000/kg. Monel K-500 is higher at Rs 5,000 to Rs 12,000/kg due to additional alloying and age-hardening treatment. Prices fluctuate with LME nickel and copper rates. Creative Metal Industries offers competitive pricing through direct sourcing from Special Metals (Huntington), VDM Metals, and approved Asian mills. Volume discounts apply for project quantities exceeding 200 kg."
  },
  {
    q: "How is Monel 400 pipe welded?",
    a: "Monel 400 is welded using GTAW (TIG) or SMAW with matching filler metals — ERNiCu-7 (TIG wire) or ENiCu-7 (covered electrode). Key considerations: Monel has a sluggish weld puddle compared to steel — use slightly higher heat input but maintain interpass temperature below 150°C. Thorough cleaning is essential — Monel is sensitive to sulfur and lead contamination causing hot cracking. No preheating required for most thicknesses. PWHT is not mandatory but stress relief at 540-590°C improves corrosion resistance in some services. For HF acid service, post-weld stress relief is recommended to eliminate residual stresses that could promote cracking. Dissimilar welding to carbon steel uses ENiCu-7 filler to prevent carbon migration. CMI provides WPS guidance and filler metal supply for Monel welding."
  }
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    
    {
      "@type":"LocalBusiness","@id":"https://www.creativemetalind.com/monel-400-pipe-supplier-india#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name": "Creative Metal Industries",
      "telephone": "+919998280619",
      "address": { "@type": "PostalAddress", "streetAddress": "F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road, Sultanpura", "addressLocality": "Vadodara", "addressRegion": "Gujarat", "postalCode": "390001", "addressCountry": "IN" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creativemetalind.com" },
        { "@type": "ListItem", "position": 2, "name": "Monel 400 Pipe Supplier India", "item": "https://www.creativemetalind.com/monel-400-pipe-supplier-india" }
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

export default function Monel400PipeSupplierIndia() {
  return (
    <>
      <Title>Monel 400 Pipe Supplier India | UNS N04400 | ASTM B165 | CMI</Title>
      <Meta name="description" content="India's leading Monel pipe supplier — Monel 400 (UNS N04400) seamless pipes per ASTM B165, tubes per ASTM B163, plus Monel K-500. HF acid & marine grade." />
      <Meta property="og:title" content="Monel 400 Pipe Supplier India | UNS N04400 | CMI" />
      <Meta property="og:description" content="India's trusted Monel 400 pipe supplier. ASTM B165 seamless. HF acid and marine grade. Ready stock Vadodara." />
      <Meta property="og:type" content="product" />
      <Meta property="og:url" content="https://www.creativemetalind.com/monel-400-pipe-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Link rel="canonical" href="https://www.creativemetalind.com/monel-400-pipe-supplier-india" />
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
            <a href="/inconel-pipe-supplier-india" style="color:#E8821A;text-decoration:none">Nickel Alloy Pipes</a>
            <span style="margin:0 8px">›</span>
            <span style="color:#374151;font-weight:600">Monel 400 Pipe Supplier India</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section style="background:linear-gradient(135deg,#111827 0%,#1f2937 100%);padding:70px 0;text-align:center">
        <div style="max-width:900px;margin:0 auto;padding:0 20px">
          <h1 style="color:#fff;font-size:38px;font-weight:800;margin:0 0 18px;line-height:1.2">
            Monel 400 Pipe Supplier India
          </h1>
          <p style="color:#d1d5db;font-size:18px;margin:0 0 10px;line-height:1.7">
India's specialist <strong style="color:#E8821A">Monel supplier</strong> and dedicated <strong style="color:#E8821A">Monel 400 supplier</strong>, stocking <strong style="color:#E8821A">Monel 400 (UNS N04400)</strong> and <strong style="color:#E8821A">Monel K-500</strong> seamless pipes per ASTM B165. We supply <strong style="color:#E8821A">Monel seamless pipe</strong> in the original nickel-copper alloy — unmatched for hydrofluoric acid (HF) service, marine seawater piping, and reducing acid environments. One of the few alloys that resists HF at all concentrations. Sizes 1/2" to 10" NB. Ready stock from Vadodara.
          </p>
          <p style="color:#9ca3af;font-size:15px;margin:0 0 28px">
            Price Range: <strong style="color:#E8821A">Rs 3,500 – 9,000/kg</strong> | Mill Test Certificates | Delivery across India
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
            Monel Pipe & Tube Grades
          </h2>
          <p style="color:#6b7280;text-align:center;margin:0 0 36px;font-size:15px">
            Complete Monel alloy range — from corrosion-resistant 400 to high-strength K-500
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
              { label: "Seamless Pipe Standard", value: "ASTM B165 / ASME SB165" },
              { label: "Welded Pipe Standard", value: "ASTM B725 / ASME SB725" },
              { label: "Tube Standard", value: "ASTM B163 / ASME SB163" },
              { label: "Bar Standard", value: "ASTM B164 (Monel 400) / QQ-N-286 (K-500)" },
              { label: "Fittings/Flanges", value: "ASTM B366 (Fittings) / B564 (Forgings)" },
              { label: "Grades", value: "Monel 400 (N04400), K-500 (N05500), R-405" },
              { label: "Pipe Size Range", value: "1/2\" to 12\" NB" },
              { label: "Tube OD Range", value: "9.53mm to 50.8mm (per B163)" },
              { label: "Density", value: "8.83 g/cm³ (heavier than steel)" },
              { label: "Key Resistance", value: "HF acid (all conc.), seawater, deaerated H2SO4" },
              { label: "Testing", value: "Hydrostatic, UT, PMI, Flattening, IGC, Hardness" },
              { label: "Mill Sources", value: "Special Metals, VDM Metals, Sandvik, Huntington" },
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
            Applications of Monel 400 Pipe in India
          </h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px">
            {[
              { icon: "🛢️", title: "HF Alkylation Units (Refineries)", desc: "The primary application in India — IOCL, HPCL, BPCL, Reliance, and Nayara refineries use Monel 400 for all piping, valves, vessels, and heat exchangers in HF alkylation. No substitute material exists for this critical service." },
              { icon: "⚓", title: "Marine & Shipbuilding", desc: "Seawater piping systems, propeller shafts (K-500), pump casings, and valve components for Indian Navy, Coast Guard, and merchant vessels. Monel resists seawater corrosion with zero pitting — even in stagnant conditions." },
              { icon: "🧪", title: "Chemical Processing", desc: "Handling hydrofluoric acid in fluorochemical manufacturing, deaerated sulfuric acid (up to 80% concentration), and alkaline solutions. Monel 400 is standard for HF storage tanks, piping, and reaction vessels." },
              { icon: "☢️", title: "Nuclear Fuel Processing", desc: "Uranium hexafluoride (UF6) conversion and enrichment facilities. Monel's HF resistance makes it essential for nuclear fuel cycle components at BARC, NFC Hyderabad, and NPCIL facilities." },
              { icon: "⚡", title: "Power Plant Components", desc: "Feedwater heater tubes, de-aerator internals, and condensate handling where oxygen-free conditions and mildly acidic condensate would corrode carbon steel. Monel 400 condenser tubes for steam cycle service." },
              { icon: "🔧", title: "Oil & Gas Production", desc: "Downhole components, pump shafts, valve stems in sour wells with H2S+CO2+chlorides. Monel K-500's combination of high strength (>1000 MPa) and corrosion resistance suits harsh production environments." },
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
            Why Buy Monel 400 Pipes from Creative Metal Industries?
          </h2>
          <div style="display:grid;gap:16px">
            {[
              { title: "Genuine Special Metals / VDM Source", desc: "All Monel 400 pipes sourced from Special Metals Corporation (Huntington Alloys — the original developer of Monel), VDM Metals, and Sandvik. Genuine material with full traceability — critical for HF alkylation service where material failure has catastrophic safety consequences." },
              { title: "Ready Stock for Refinery Shutdowns", desc: "Maintain stock of Monel 400 seamless pipes in sizes 1/2\" to 4\" and condenser tubes in popular ODs. Refinery turnarounds and HF alkylation unit maintenance cannot wait for 12-16 week mill delivery. Our stock ensures material availability when you need it most." },
              { title: "HF Service Documentation", desc: "Complete documentation package for HF alkylation projects: MTC (3.1/3.2) with full chemical analysis, mechanical properties including hardness (critical for HF service — must be below 35 HRC), PMI certificate, impact test results, and compliance with API 661/API 661 requirements." },
              { title: "Complete Monel Product Range", desc: "Beyond pipes — we supply Monel 400 fittings (ASTM B366), flanges (ASTM B564), bars (ASTM B164), plates (ASTM B127), and fasteners. Monel K-500 bars for machined components (pump shafts, impellers, valve stems). Single-source procurement for your complete Monel requirement." },
              { title: "Technical Expertise — 400 vs K-500 Selection", desc: "Our engineers help you decide between Monel 400 (corrosion-focused) and K-500 (strength + corrosion) based on your service conditions. We understand the age-hardening heat treatment for K-500 and can advise on appropriate hardness for NACE compliance in sour service." },
              { title: "Competitive Pricing & Export", desc: "Direct mill purchasing enables competitive pricing for Indian and export markets. We supply Monel to refineries across India and export to Middle East, Africa, and Southeast Asia. LC, advance, and credit terms available for established accounts." },
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
            Frequently Asked Questions — Monel 400 Pipe
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
            Need Monel 400 Pipes? Get Instant Quote
          </h2>
          <p style="color:#d1d5db;font-size:16px;margin:0 0 28px">
            Ready stock at Vadodara. ASTM B165 certified. HF alkylation and marine grade.
          </p>
          <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
            <a href="tel:+919998280619" style="background:#E8821A;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:16px">📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+Monel+400+pipe+quote" target="_blank" rel="noopener" style="background:#25D366;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:16px">💬 WhatsApp</a>
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
              { href: "/monel-k500-supplier-india", label: "Monel K-500 Bar" },
              { href: "/inconel-pipe-supplier-india", label: "Inconel 625/600 Pipe" },
              { href: "/hastelloy-pipe-supplier-india", label: "Hastelloy C-276 Pipe" },
              { href: "/titanium-pipe-supplier-india", label: "Titanium Pipe" },
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

      <RelatedPages currentPath="/monel-400-pipe-supplier-india" />

      {/* Footer */}
      <footer style="background:#111827;color:#9ca3af;padding:40px 20px;text-align:center;font-size:14px">
        <p style="margin:0 0 8px"><strong style="color:#fff">Creative Metal Industries</strong> — Monel 400 Pipe Supplier India | Vadodara, Gujarat</p>
        <p style="margin:0 0 8px">F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style="color:#E8821A">+91 99982 80619</a></p>
        <p style="margin:0"><a href="/privacy-policy" style="color:#9ca3af">Privacy Policy</a> · <a href="/terms" style="color:#9ca3af">Terms</a> · <a href="/sitemap" style="color:#9ca3af">Sitemap</a></p>
      </footer>
    </>
  );
}
