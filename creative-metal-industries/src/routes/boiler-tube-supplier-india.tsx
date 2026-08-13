/**
 * /boiler-tube-supplier-india
 * Target: "boiler tube supplier India", "SA 213 boiler tube",
 * "IBR boiler tube supplier", "heat exchanger tube India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  {
    grade: "SA 179 Cold Drawn Tube",
    composition: "Low Carbon Steel (C ≤ 0.06%)",
    sizes: "OD 15.88mm to 76.2mm",
    wall: "BWG 14 to 22 (1.65mm to 2.77mm)",
    apps: "Low-pressure heaters, economizers, condensers",
    ht: "Annealed + Normalized",
    stock: "Ready Stock"
  },
  {
    grade: "SA 192 Seamless Tube",
    composition: "Carbon Steel (C 0.06-0.18%)",
    sizes: "OD 15.88mm to 114.3mm",
    wall: "Min 1.5mm to 12mm",
    apps: "High-pressure boiler water tubes, steam drums",
    ht: "Hot Finished / Cold Drawn",
    stock: "Ready Stock"
  },
  {
    grade: "SA 210 Gr.A1 / C Tube",
    composition: "Medium Carbon Steel (C ≤ 0.27%)",
    sizes: "OD 15.88mm to 127mm",
    wall: "Min 2.0mm to 15mm",
    apps: "Superheaters, reheaters, high-pressure boilers",
    ht: "Normalized",
    stock: "Ready Stock"
  },
  {
    grade: "SA 213 T11 (1Cr-0.5Mo)",
    composition: "1.25% Cr, 0.5% Mo",
    sizes: "OD 12.7mm to 114.3mm",
    wall: "Min 1.65mm to 12.7mm",
    apps: "Superheaters, reheaters up to 570°C",
    ht: "Normalized + Tempered",
    stock: "Ready Stock"
  },
  {
    grade: "SA 213 T22 (2.25Cr-1Mo)",
    composition: "2.25% Cr, 1% Mo",
    sizes: "OD 12.7mm to 114.3mm",
    wall: "Min 1.65mm to 12.7mm",
    apps: "High-temp superheaters, steam piping up to 600°C",
    ht: "Normalized + Tempered",
    stock: "Ready Stock"
  },
  {
    grade: "SA 213 T91 (9Cr-1Mo-V)",
    composition: "9% Cr, 1% Mo, V, Nb",
    sizes: "OD 12.7mm to 76.2mm",
    wall: "Min 2.0mm to 10mm",
    apps: "Supercritical boilers, advanced USC power plants up to 650°C",
    ht: "Normalized 1050°C + Tempered 760°C",
    stock: "Available"
  },
  {
    grade: "SA 213 T5 / T9 (5Cr / 9Cr)",
    composition: "5% Cr, 0.5% Mo / 9% Cr, 1% Mo",
    sizes: "OD 12.7mm to 88.9mm",
    wall: "Min 1.65mm to 10mm",
    apps: "Refinery heater tubes, petroleum cracking service",
    ht: "Normalized + Tempered",
    stock: "Available"
  },
  {
    grade: "SA 213 TP304H / TP321H / TP347H",
    composition: "Austenitic SS (high carbon variants)",
    sizes: "OD 12.7mm to 88.9mm",
    wall: "Min 1.2mm to 8mm",
    apps: "High-temp superheaters above 600°C, creep-resistant applications",
    ht: "Solution Annealed 1040-1100°C",
    stock: "Available"
  }
];

const FAQS = [
  {
    q: "What is IBR certification and why is it needed for boiler tubes?",
    a: "IBR stands for Indian Boiler Regulation, a mandatory certification under the Indian Boiler Act 1923. Any tube or pipe used in boiler construction or repair in India must carry an IBR Form III-C certificate issued by an IBR-authorized inspecting agency. This form certifies that the material was manufactured under regulated conditions, tested per applicable ASTM/ASME standards, and inspected by a competent authority. Without IBR certification, the material cannot be legally used in boiler service in India. Creative Metal Industries supplies all boiler tubes with original IBR Form III-C from authorized mills — essential for NTPC, BHEL, Thermax, and all power plant projects."
  },
  {
    q: "What is the difference between SA 179, SA 192, and SA 210 boiler tubes?",
    a: "These three grades serve different pressure and temperature ranges in boiler systems. SA 179 is a low-carbon, cold-drawn tube for low-pressure heaters, economizers, and condensers — operating below 450°C and 100 bar. SA 192 is a hot-finished or cold-drawn tube for medium to high-pressure water tubes and steam drums — suitable up to 500°C. SA 210 Grade A1/C is a medium-carbon tube for superheaters and reheaters operating at higher pressures — the increased carbon gives higher tensile strength (min 415 MPa for Gr.A1). For service above 500°C, you need alloy steel tubes like SA 213 T11, T22, or T91 which add chromium and molybdenum for creep resistance."
  },
  {
    q: "What sizes of boiler tubes does CMI stock?",
    a: "Creative Metal Industries stocks boiler tubes in OD range 12.7mm (1/2 inch) to 127mm (5 inch) with wall thickness from BWG 22 (0.71mm) to 12.7mm depending on grade and application. Standard lengths are 5-7 metres random. For carbon steel grades (SA 179, SA 192, SA 210), we maintain deep stock of the most common sizes used in BHEL, L&T, and Thermax boiler designs. For alloy steel tubes (SA 213 T11, T22, T91), we stock standard OD sizes from 25.4mm to 76.2mm. Custom sizes and fixed lengths are available on indent with 4-8 week delivery from ISMT, MSL, Sumitomo, and Vallourec mills."
  },
  {
    q: "What is the price of SA 213 T11 boiler tube in India?",
    a: "SA 213 T11 boiler tube prices in India range from Rs 180 to Rs 450 per kilogram depending on size, wall thickness, quantity, and IBR certification requirements. Carbon steel grades (SA 179, SA 192) are more economical at Rs 90-200/kg. Higher alloy grades like T22 command Rs 250-550/kg, and T91 ranges from Rs 400-900/kg due to its complex composition and stringent testing requirements. IBR-certified tubes carry a 10-15% premium over non-IBR material. Creative Metal Industries offers competitive pricing through direct mill sourcing from ISMT (Ahmednagar), Maharashtra Seamless, Sumitomo, and Vallourec."
  },
  {
    q: "Which industries use boiler tubes supplied by CMI?",
    a: "Our boiler tubes serve: Thermal Power Plants — NTPC, state gencos, and private IPPs use SA 213 T22/T91 for superheaters and SA 192/SA 210 for water walls. Industrial Boilers — sugar mills, paper mills, textile units use SA 179/SA 192 for package boilers. Refineries — petroleum heater tubes in SA 213 T5/T9 for crude distillation and catalytic cracking. Fertilizer Plants — reformer tubes and waste heat boilers. Nuclear Power — NPCIL projects requiring SA 213 TP321H with stringent NDE. EPC Contractors — BHEL, L&T, Thermax, Cethar Vessels procure regularly from our Vadodara stock."
  },
  {
    q: "What testing is performed on boiler tubes before supply?",
    a: "Every boiler tube from CMI undergoes: Hydrostatic Test — per ASTM standard requirement (typically 70 bar for SA 179, 100+ bar for SA 213). Eddy Current Test (ECT) — 100% volumetric testing to detect longitudinal and transverse defects. Ultrasonic Test (UT) — for wall thickness verification and lamination detection. Flattening Test — to verify ductility (no cracking at specified compression). Flaring/Flange Test — to confirm tube formability for rolling into drum holes. Hardness Test — Rockwell/Brinell verification critical for NACE compliance and PWHT verification on T91. Chemical Analysis & Mechanical Testing — as per MTC with IBR witness. PMI — Positive Material Identification on every alloy tube bundle."
  }
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "name": "Boiler Tube",
      "description": "IBR certified boiler tubes — SA 179, SA 192, SA 210, SA 213 T11/T22/T91. Seamless carbon and alloy steel tubes for power plant boilers, superheaters, economizers. Sizes OD 12.7mm to 127mm.",
      "brand": { "@type": "Brand", "name": "Creative Metal Industries" },
      "sku": "CMI-BOILER-TUBE",
      "material": "SA 179 / SA 192 / SA 210 / SA 213 T11 / T22 / T91",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "90",
        "highPrice": "900",
        "unitCode": "KGM",
        "availability": "https://schema.org/InStock",
        "seller": { "@type": "Organization", "name": "Creative Metal Industries" }
      },
      "additionalProperty": [
        { "@type": "PropertyValue", "name": "Standard", "value": "ASTM A179 / A192 / A210 / A213" },
        { "@type": "PropertyValue", "name": "IBR Certified", "value": "Yes — Form III-C available" },
        { "@type": "PropertyValue", "name": "Size Range", "value": "OD 12.7mm to 127mm" },
        { "@type": "PropertyValue", "name": "Type", "value": "Seamless (Hot Finished / Cold Drawn)" }
      ]
    },
    {
      "@type": "LocalBusiness",
      "name": "Creative Metal Industries",
      "telephone": "+91-99982-80619",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "F-3, Loha Bhavan, Lakkadpitha Rd",
        "addressLocality": "Vadodara",
        "addressRegion": "Gujarat",
        "postalCode": "390001",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creativemetalind.com" },
        { "@type": "ListItem", "position": 2, "name": "Boiler Tube Supplier India", "item": "https://www.creativemetalind.com/boiler-tube-supplier-india" }
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

export default function BoilerTubeSupplierIndia() {
  return (
    <>
      <Title>Boiler Tube Supplier India | IBR Certified | SA 213 T11 T22 T91 | Creative Metal Industries</Title>
      <Meta name="description" content="India's leading IBR certified boiler tube supplier. SA 179, SA 192, SA 210, SA 213 T11/T22/T91 seamless tubes for power plant boilers &amp; superheaters. OD 12.7mm to 127mm. IBR Form III-C. Price Rs 90-900/kg. Ready stock Vadodara." />
      <Meta name="keywords" content="boiler tube supplier india, SA 213 T11 tube, SA 213 T22 tube, SA 213 T91 tube, IBR boiler tube, SA 179 tube supplier, SA 192 tube india, power plant boiler tube, NTPC boiler tube supplier" />
      <Meta property="og:title" content="Boiler Tube Supplier India | IBR Certified | SA 213 | CMI" />
      <Meta property="og:description" content="IBR certified boiler tube supplier India. SA 179, SA 192, SA 210, SA 213 T11/T22/T91. Power plant grade. Ready stock Vadodara." />
      <Meta property="og:type" content="product" />
      <Meta property="og:url" content="https://www.creativemetalind.com/boiler-tube-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/img/boiler-tube.jpg" />
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Link rel="canonical" href="https://www.creativemetalind.com/boiler-tube-supplier-india" />
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
            <span style="color:#374151;font-weight:600">Boiler Tube Supplier India</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section style="background:linear-gradient(135deg,#111827 0%,#1f2937 100%);padding:70px 0;text-align:center">
        <div style="max-width:900px;margin:0 auto;padding:0 20px">
          <h1 style="color:#fff;font-size:38px;font-weight:800;margin:0 0 18px;line-height:1.2">
            Boiler Tube Supplier India — IBR Certified
          </h1>
          <p style="color:#d1d5db;font-size:18px;margin:0 0 10px;line-height:1.7">
            India's trusted supplier of <strong style="color:#E8821A">IBR certified boiler tubes</strong> — SA 179, SA 192, SA 210, SA 213 T11/T22/T91 seamless tubes for thermal power plants, industrial boilers, superheaters, economizers, and reheaters. All tubes supplied with IBR Form III-C certification. OD range 12.7mm to 127mm. Ready stock from our Vadodara warehouse.
          </p>
          <p style="color:#9ca3af;font-size:15px;margin:0 0 28px">
            Price Range: <strong style="color:#E8821A">Rs 90 – 900/kg</strong> (grade dependent) | IBR Form III-C | NTPC/BHEL Approved Mills
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
            Boiler Tube Grades — IBR Certified Stock
          </h2>
          <p style="color:#6b7280;text-align:center;margin:0 0 36px;font-size:15px">
            Complete range from carbon steel economizer tubes to advanced alloy superheater tubes
          </p>
          <div style="overflow-x:auto;border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,0.08)">
            <table style="width:100%;border-collapse:collapse;font-size:14px;min-width:950px">
              <thead>
                <tr style="background:linear-gradient(135deg,#E8821A,#d97706)">
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Grade</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Composition</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Size (OD)</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Wall Thickness</th>
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
                    <td style="padding:11px 10px;font-size:13px">{g.wall}</td>
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
              { label: "Carbon Steel Standards", value: "ASTM A179 / A192 / A210 Gr.A1, C" },
              { label: "Alloy Steel Standard", value: "ASTM A213 / SA213 (T2, T5, T9, T11, T12, T22, T91, T92)" },
              { label: "Stainless Steel Tubes", value: "SA 213 TP304H, TP321H, TP347H" },
              { label: "Size Range (OD)", value: "12.7mm to 127mm (1/2 inch to 5 inch)" },
              { label: "Wall Thickness", value: "BWG 22 (0.71mm) to 12.7mm" },
              { label: "Manufacturing", value: "Hot Finished Seamless / Cold Drawn Seamless" },
              { label: "Length", value: "5-7 metres random, fixed length available" },
              { label: "IBR Certification", value: "IBR Form III-C from IBR-authorized agency" },
              { label: "Testing", value: "Hydrostatic, ECT (100%), UT, Flattening, Flaring, Hardness" },
              { label: "Additional Reports", value: "PMI, IGC (for SS), Impact Test (-20°C/-46°C)" },
              { label: "End Finish", value: "Plain End / Beveled / Threaded" },
              { label: "Mill Sources", value: "ISMT, MSL, Sumitomo, Vallourec, Tubacex, Sandvik" },
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
            Applications — Where Our Boiler Tubes Are Used
          </h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px">
            {[
              { icon: "⚡", title: "Thermal Power Plants", desc: "NTPC, state gencos, and IPPs — water wall tubes (SA 192), superheater tubes (SA 213 T22/T91), reheater tubes, and economizer tubes (SA 179). We supply to 500 MW and 660 MW units across India." },
              { icon: "🏭", title: "Industrial Boilers", desc: "Package boilers for sugar mills, paper mills, textile dyeing, food processing, and chemical plants. SA 179 and SA 192 tubes for low to medium pressure steam generation at 10-40 bar." },
              { icon: "🛢️", title: "Oil Refineries", desc: "Petroleum heater tubes in SA 213 T5/T9 for crude distillation, vacuum distillation, catalytic cracking, and hydrotreater furnaces. High-temperature service with H2/H2S resistance." },
              { icon: "🌾", title: "Fertilizer Plants", desc: "Primary reformer tubes, waste heat boilers, and steam superheaters. SA 213 T22 and TP321H for ammonia and urea production at elevated temperatures and pressures." },
              { icon: "☢️", title: "Nuclear Power", desc: "NPCIL projects requiring SA 213 TP321H and SA 213 T22 with additional impact testing at -20°C, 100% UT, and stringent NDE acceptance per nuclear code requirements." },
              { icon: "🏗️", title: "EPC Contractors", desc: "BHEL, L&T Power, Thermax, Cethar Vessels, and BGR Energy — project supply with complete documentation packages, staged delivery schedules, and third-party inspection support." },
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
            Why Buy Boiler Tubes from Creative Metal Industries?
          </h2>
          <div style="display:grid;gap:16px">
            {[
              { title: "IBR Form III-C on Every Tube", desc: "All boiler tubes supplied with original IBR Form III-C certificate from authorized inspecting agencies. No separate IBR inspection charges — included in our supply. This saves you 2-3 weeks of inspection lead time compared to non-IBR stockists." },
              { title: "NTPC/BHEL Approved Mill Sources", desc: "We source exclusively from mills on NTPC and BHEL approved vendor lists — ISMT (Ahmednagar), Maharashtra Seamless (Nagothane), Sumitomo (Japan), Vallourec (France). Guaranteed acceptance at any Indian power project site." },
              { title: "Deep Ready Stock", desc: "2000+ metres of SA 179, SA 192, SA 210, and SA 213 T11/T22 tubes maintained at our GIDC Makarpura warehouse. Same-day dispatch for emergency boiler shutdown requirements — critical for power plant availability." },
              { title: "Complete Testing Reports", desc: "Every tube bundle comes with: MTC (3.1/3.2), IBR Form III-C, 100% ECT report, hydrostatic test certificate, PMI certificate, and dimensional inspection report. Additional testing (impact, hardness, microstructure) available on request." },
              { title: "Project Supply Expertise", desc: "13+ years of supplying boiler projects — from 10 TPH industrial boilers to 660 MW supercritical units. We understand phased delivery schedules, vendor document requirements (VDR), and third-party inspection coordination with DNV, TUV, LRIS, and BIS." },
              { title: "Competitive Pricing", desc: "Direct mill relationships eliminate distributor margins. Ready stock availability means no indent premiums for standard sizes. Bulk project discounts for quantities above 5 tonnes. Price validity guaranteed for 7 days on formal quotations." },
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
            Frequently Asked Questions — Boiler Tubes
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
            Need IBR Certified Boiler Tubes? Get Instant Quote
          </h2>
          <p style="color:#d1d5db;font-size:16px;margin:0 0 28px">
            Ready stock SA 179 / SA 192 / SA 213. IBR Form III-C. Same-day dispatch for shutdown emergencies.
          </p>
          <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
            <a href="tel:+919998280619" style="background:#E8821A;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:16px">📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+boiler+tube+quote" target="_blank" rel="noopener" style="background:#25D366;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:16px">💬 WhatsApp</a>
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
              { href: "/heat-exchanger-tube-supplier-india", label: "Heat Exchanger Tubes" },
              { href: "/alloy-steel-pipe-supplier-india", label: "Alloy Steel P91/P22 Pipe" },
              { href: "/ss-seamless-pipe-supplier-india", label: "SS Seamless Pipe" },
              { href: "/incoloy-800-pipe-supplier-india", label: "Incoloy 800 Pipe" },
              { href: "/inconel-pipe-supplier-india", label: "Inconel 625/600 Pipe" },
              { href: "/carbon-steel-pipe-fittings-vadodara", label: "Carbon Steel Pipe" },
              { href: "/duplex-steel-supplier-vadodara", label: "Duplex 2205/2507" },
              { href: "/ss-flanges-supplier-vadodara", label: "SS Flanges" },
            ].map(link => (
              <a href={link.href} style="background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:14px 16px;text-decoration:none;font-size:14px;font-weight:600;color:#E8821A;text-align:center">
                {link.label} →
              </a>
            ))}
          </div>
        </div>
      </section>

      <RelatedPages currentPath="/boiler-tube-supplier-india" />

      {/* Footer */}
      <footer style="background:#111827;color:#9ca3af;padding:40px 20px;text-align:center;font-size:14px">
        <p style="margin:0 0 8px"><strong style="color:#fff">Creative Metal Industries</strong> — Boiler Tube Supplier India | IBR Certified | Vadodara, Gujarat</p>
        <p style="margin:0 0 8px">F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style="color:#E8821A">+91 99982 80619</a></p>
        <p style="margin:0"><a href="/privacy-policy" style="color:#9ca3af">Privacy Policy</a> · <a href="/terms" style="color:#9ca3af">Terms</a> · <a href="/sitemap" style="color:#9ca3af">Sitemap</a></p>
      </footer>
    </>
  );
}
