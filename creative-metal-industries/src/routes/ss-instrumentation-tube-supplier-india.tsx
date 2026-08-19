/**
 * /ss-instrumentation-tube-supplier-india
 * Target: "SS instrumentation tube supplier India", "ASTM A269 tube",
 * "SS 316 instrument tubing", "fractional tubing India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  {
    grade: "SS 316/316L Instrumentation Tube",
    composition: "16Cr-10Ni-2Mo (UNS S31600/S31603)",
    sizes: "OD 1/8\" to 1\" (3.18mm to 25.4mm)",
    wall: "0.035\" to 0.120\" (0.89mm to 3.05mm)",
    apps: "Process instrument lines, transmitter impulse tubing, gauge connections",
    finish: "Bright Annealed (BA) / Pickled",
    stock: "Ready Stock"
  },
  {
    grade: "SS 304/304L Instrumentation Tube",
    composition: "18Cr-8Ni (UNS S30400/S30403)",
    sizes: "OD 1/8\" to 1\" (3.18mm to 25.4mm)",
    wall: "0.035\" to 0.120\"",
    apps: "Utility instrument lines, air signal tubing, non-corrosive media",
    finish: "Bright Annealed (BA)",
    stock: "Ready Stock"
  },
  {
    grade: "SS 316L Seamless Tube (ASTM A213)",
    composition: "16Cr-10Ni-2Mo Low Carbon",
    sizes: "OD 6.35mm to 50.8mm",
    wall: "0.5mm to 5mm",
    apps: "Process sampling, chemical injection, analyser lines",
    finish: "Cold Drawn + Annealed",
    stock: "Ready Stock"
  },
  {
    grade: "Duplex 2205 Instrumentation Tube",
    composition: "22Cr-5Ni-3Mo (UNS S31803)",
    sizes: "OD 1/4\" to 1\" (6.35mm to 25.4mm)",
    wall: "0.035\" to 0.083\"",
    apps: "Offshore platforms, subsea controls, sour service instrument lines",
    finish: "Cold Drawn + Pickled",
    stock: "Available"
  },
  {
    grade: "Alloy 625 Instrumentation Tube",
    composition: "60Ni-22Cr-9Mo-3.5Nb (UNS N06625)",
    sizes: "OD 1/4\" to 3/4\" (6.35mm to 19.05mm)",
    wall: "0.035\" to 0.065\"",
    apps: "Extreme corrosion, deepwater subsea umbilicals, chemical injection",
    finish: "Cold Drawn + Bright Annealed",
    stock: "Available"
  },
  {
    grade: "Monel 400 Instrumentation Tube",
    composition: "67Ni-30Cu (UNS N04400)",
    sizes: "OD 1/4\" to 1/2\" (6.35mm to 12.7mm)",
    wall: "0.035\" to 0.065\"",
    apps: "Marine instrumentation, HF service gauge lines",
    finish: "Cold Drawn + Annealed",
    stock: "Indent"
  }
];

const FAQS = [
  {
    q: "What is instrumentation tubing and how does it differ from process pipe?",
    a: "Instrumentation tubing is small-diameter, precision-manufactured stainless steel tubing used for signal transmission lines in process instrumentation systems. Key differences from process pipe: Size — instrumentation tubes use fractional OD sizes (1/4\", 3/8\", 1/2\") measured by actual outside diameter, while pipes use nominal bore (NB) designations. Wall — instrument tubes have thin, precision walls (typically 0.035\" or 0.049\") with tight tolerances (±0.005\" OD). Surface — bright annealed (BA) finish inside and out for cleanliness and corrosion resistance. Connection — tubes use compression fittings (Swagelok/Parker type), not welded or threaded joints. Standard — ASTM A269 for welded and cold-drawn tubes, ASTM A213 for seamless. Instrumentation tubes carry pneumatic signals (3-15 psi air), hydraulic pressure to transmitters, and process fluid samples to analysers."
  },
  {
    q: "What is the difference between ASTM A269 and ASTM A213 instrumentation tubes?",
    a: "ASTM A269 covers welded and cold-drawn austenitic stainless steel tubing for general corrosion-resistant service — including instrumentation. The tube is made by TIG welding strip, then cold-drawing through a die to achieve final dimensions and smooth the weld. After drawing, it's bright annealed in a hydrogen atmosphere for a clean, oxide-free surface. ASTM A213 covers seamless tubes made from solid billets — giving a homogeneous structure with no weld line. For most instrumentation applications at ambient pressure and temperature, A269 welded-drawn tubes perform identically to A213 seamless and cost 30-40% less. Seamless A213 is specified for high-pressure service (above 200 bar), elevated temperatures, or where the client specification mandates seamless."
  },
  {
    q: "What OD sizes are most common for instrumentation tubing?",
    a: "The most widely used sizes in Indian refineries and process plants are: 1/4\" OD x 0.035\" wall — pneumatic signal lines (3-15 psi air from controller to control valve), small instrument impulse lines. 3/8\" OD x 0.049\" wall — transmitter impulse connections, gauge root valves to instrument. 1/2\" OD x 0.049\" wall — process sampling lines, chemical injection, larger impulse lines, analyser sample transport. 3/4\" OD x 0.065\" wall — heat tracing tubing, larger sample systems. 1\" OD x 0.065\" wall — utility connections, drain lines. Creative Metal Industries stocks all these standard sizes in SS 316L bright annealed finish — the default specification for hydrocarbon processing plants."
  },
  {
    q: "Why is SS 316L preferred over SS 304 for instrumentation tubes?",
    a: "SS 316L is the standard material for instrumentation tubing in oil & gas and petrochemical plants because: 1) Molybdenum (2-3%) provides pitting resistance in chloride-containing environments — instrument lines are exposed to rain, marine air, and occasional process leaks. 2) Low carbon (L-grade, 0.03% max) eliminates sensitisation at weld HAZ — critical since instrument tubing joints are often field-assembled without post-weld heat treatment. 3) Better crevice corrosion resistance at compression fitting interfaces. 4) NACE MR0175 compliance for sour service applications. SS 304 is acceptable for clean utility applications (air, nitrogen, water) where cost is the primary driver and chloride exposure is negligible."
  },
  {
    q: "What is the price of SS 316L instrumentation tube in India?",
    a: "SS 316L instrumentation tube prices vary by OD, wall thickness, and quantity: 1/4\" OD x 0.035\" wall — Rs 250-450 per metre. 3/8\" OD x 0.049\" wall — Rs 400-650 per metre. 1/2\" OD x 0.049\" wall — Rs 500-850 per metre. Pricing is per metre (not per kg) for small-diameter tubing. Coil form (typically 15m or 30m coils) is 10-15% less expensive than straight lengths (6m). Bright annealed (BA) finish commands a 15-20% premium over mill-finish pickled tubes. Creative Metal Industries stocks 316L BA tubes in all common sizes — contact +91 99982 80619 for exact rates with project quantity discounts."
  },
  {
    q: "What documentation is provided with instrumentation tubing?",
    a: "Every lot of instrumentation tubing from CMI is supplied with: Mill Test Certificate (EN 10204 3.1) showing chemical composition, mechanical properties (tensile, yield, elongation, hardness), and manufacturing details. Specific to instrument tubes: Eddy Current Test (ECT) certificate — 100% of tube length tested for defects. Hydrostatic or pneumatic test certificate. PMI (Positive Material Identification) report — critical to verify 316L vs 304 in the field. Surface roughness measurement (Ra value) for BA finish tubes. For NACE/sour service projects: hardness certificate (below 22 HRC) and compliance statement per MR0175. Dimensional certification showing OD, ID, wall thickness, and ovality within A269 tolerances."
  }
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    
    {
      "@type":"LocalBusiness","@id":"https://www.creativemetalind.com/ss-instrumentation-tube-supplier-india#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name": "Creative Metal Industries",
      "telephone": "+919998280619",
      "address": { "@type": "PostalAddress", "streetAddress": "F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road, Sultanpura", "addressLocality": "Vadodara", "addressRegion": "Gujarat", "postalCode": "390001", "addressCountry": "IN" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creativemetalind.com" },
        { "@type": "ListItem", "position": 2, "name": "SS Instrumentation Tube Supplier India", "item": "https://www.creativemetalind.com/ss-instrumentation-tube-supplier-india" }
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

export default function SSInstrumentationTubeSupplierIndia() {
  return (
    <>
      <Title>SS Instrumentation Tube Supplier India | 316L | CMI</Title>
      <Meta name="description" content="India's leading SS instrumentation tube supplier. 316L, 304L bright annealed tubing per ASTM A269. Fractional OD 1/8&quot; to 1&quot;." />
      <Meta name="keywords" content="SS instrumentation tube supplier india, ASTM A269 tube, SS 316L instrument tubing, fractional tubing india, bright annealed tube, swagelok tube, instrument impulse line, 316L BA tube india" />
      <Meta property="og:title" content="SS Instrumentation Tube Supplier India | 316L BA | ASTM A269 | CMI" />
      <Meta property="og:description" content="SS 316L instrumentation tube supplier India. ASTM A269. Bright annealed. Fractional OD. Ready stock Vadodara." />
      <Meta property="og:type" content="product" />
      <Meta property="og:url" content="https://www.creativemetalind.com/ss-instrumentation-tube-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Link rel="canonical" href="https://www.creativemetalind.com/ss-instrumentation-tube-supplier-india" />
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
            <span style="color:#374151;font-weight:600">SS Instrumentation Tube Supplier India</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section style="background:linear-gradient(135deg,#111827 0%,#1f2937 100%);padding:70px 0;text-align:center">
        <div style="max-width:900px;margin:0 auto;padding:0 20px">
          <h1 style="color:#fff;font-size:38px;font-weight:800;margin:0 0 18px;line-height:1.2">
            SS Instrumentation Tube Supplier India
          </h1>
          <p style="color:#d1d5db;font-size:18px;margin:0 0 10px;line-height:1.7">
            India's trusted supplier of <strong style="color:#E8821A">SS 316L bright annealed instrumentation tubing</strong> per ASTM A269. Precision fractional OD sizes from 1/8" to 1" for process instrument impulse lines, transmitter connections, analyser sampling systems, and chemical injection. Available in coils and straight lengths. Swagelok/Parker compatible. Ready stock from Vadodara warehouse.
          </p>
          <p style="color:#9ca3af;font-size:15px;margin:0 0 28px">
            316L Bright Annealed | 100% ECT Tested | Coils & Straights | Pan-India Delivery
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
            Instrumentation Tube Grades & Sizes
          </h2>
          <p style="color:#6b7280;text-align:center;margin:0 0 36px;font-size:15px">
            From standard SS 316L to exotic alloy 625 for the most demanding instrument systems
          </p>
          <div style="overflow-x:auto;border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,0.08)">
            <table style="width:100%;border-collapse:collapse;font-size:14px;min-width:1000px">
              <thead>
                <tr style="background:linear-gradient(135deg,#E8821A,#d97706)">
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Grade</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Composition</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">OD Range</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Wall Thickness</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Applications</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Finish</th>
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
                    <td style="padding:11px 10px;font-size:12px">{g.finish}</td>
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
              { label: "Welded-Drawn Tube", value: "ASTM A269 / ASME SA269" },
              { label: "Seamless Tube", value: "ASTM A213 / ASME SA213" },
              { label: "OD Range", value: "1/8\" (3.18mm) to 1\" (25.4mm) fractional" },
              { label: "Wall Thickness", value: "0.028\" to 0.120\" (0.71mm to 3.05mm)" },
              { label: "OD Tolerance", value: "±0.005\" (±0.127mm) per A269" },
              { label: "Wall Tolerance", value: "±10% of nominal" },
              { label: "Surface Finish", value: "Bright Annealed (BA) — Ra ≤ 0.8µm typical" },
              { label: "Form", value: "Coils (15m, 30m, 100m) & Straight lengths (6m)" },
              { label: "Materials", value: "SS 316L, 304L, Duplex 2205, Alloy 625, Monel 400" },
              { label: "Testing", value: "100% ECT, Hydrostatic/Pneumatic, PMI, Flattening" },
              { label: "Compatibility", value: "Swagelok, Parker, Hoke, Ham-Let compression fittings" },
              { label: "Standards Compliance", value: "ISA 5.1, IEC 60534, NACE MR0175 (sour service)" },
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
            Applications of Instrumentation Tubing
          </h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px">
            {[
              { icon: "📊", title: "Transmitter Impulse Lines", desc: "3/8\" and 1/2\" OD 316L tubing connecting process tapping points to pressure/differential pressure transmitters. The lifeline of process control — carrying process pressure signals to DCS/PLC systems." },
              { icon: "🔬", title: "Analyser Sample Systems", desc: "Sample transport lines from process to online analysers (gas chromatographs, pH meters, conductivity). Requires clean BA finish, precise dimensions, and fast sample response time." },
              { icon: "💉", title: "Chemical Injection Systems", desc: "Delivering precise doses of corrosion inhibitor, scale inhibitor, demulsifier, and other chemicals into process streams. 1/4\" to 1/2\" OD tubing at high pressure (up to 700 bar for deepwater applications)." },
              { icon: "🌡️", title: "Thermowell & Gauge Connections", desc: "Connecting temperature and pressure gauges to process via root valves. Short instrument tube runs with compression fittings — fast installation without hot work permits." },
              { icon: "🎛️", title: "Pneumatic Signal Lines", desc: "1/4\" OD tubing carrying 3-15 psi (0.2-1.0 bar) air signals from I/P converters to control valve actuators. Miles of tubing per plant — clean BA finish prevents contamination of signal air." },
              { icon: "🛢️", title: "Hydraulic Control Lines (Offshore)", desc: "Subsea control umbilicals and topside HPU lines in duplex 2205 or alloy 625 for deepwater applications. High-pressure (up to 700 bar) with zero-leak requirement over 25-year field life." },
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
            Why Buy Instrumentation Tubes from Creative Metal Industries?
          </h2>
          <div style="display:grid;gap:16px">
            {[
              { title: "Deep Stock of All Standard Sizes", desc: "We maintain inventory of SS 316L BA tubes in 1/4\", 3/8\", 1/2\", and 3/4\" OD — the four sizes that cover 95% of refinery/petrochemical instrumentation requirements. Both coil form (15m, 30m) and straight lengths (6m). No waiting for mill delivery on standard sizes." },
              { title: "Genuine Bright Annealed (BA) Finish", desc: "True BA finish produced by annealing in pure hydrogen atmosphere — giving a mirror-like internal surface (Ra < 0.8µm). This matters because: clean surface prevents contamination of process samples going to analysers, and smooth bore reduces dead volume in impulse lines for faster transmitter response." },
              { title: "100% Eddy Current Tested", desc: "Every metre of tubing has passed 100% ECT inspection at the mill — detecting pinholes, inclusions, and wall defects that could cause leaks at compression fitting joints. We provide ECT certificates with calibration standards as part of our documentation package." },
              { title: "Compression Fitting Compatible", desc: "All tubes are manufactured to ASTM A269 OD tolerances (±0.005\") ensuring perfect grip with Swagelok, Parker Hannifin, Hoke, Ham-Let, and equivalent compression fittings. We also supply the fittings themselves — elbows, tees, unions, bulkheads — for complete instrument hookup procurement." },
              { title: "NACE Compliant for Sour Service", desc: "For H2S-containing environments (NACE MR0175/ISO 15156): we supply 316L tubes with hardness below 22 HRC, certified chemical composition, and compliance statement. Also stock duplex 2205 and alloy 625 instrument tubes for extreme sour/high-chloride subsea conditions." },
              { title: "Project Quantity Pricing", desc: "Instrument tube requirements for new plants can be substantial — 5000-20000 metres per project. We offer competitive project pricing at these volumes with scheduled delivery per your construction phasing. Annual rate contracts available for EPC contractors and plant maintenance departments." },
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
            Frequently Asked Questions — Instrumentation Tube
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
            Need SS 316L Instrumentation Tubes? Get Instant Quote
          </h2>
          <p style="color:#d1d5db;font-size:16px;margin:0 0 28px">
            Bright annealed. Coils and straights. 100% ECT. Swagelok compatible. Same-day dispatch.
          </p>
          <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
            <a href="tel:+919998280619" style="background:#E8821A;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:16px">📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+instrumentation+tube+quote" target="_blank" rel="noopener" style="background:#25D366;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:16px">💬 WhatsApp</a>
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
              { href: "/compression-fittings-supplier-india", label: "Compression Fittings" },
              { href: "/ss-seamless-pipe-supplier-india", label: "SS Seamless Pipe" },
              { href: "/ss-capillary-tube-supplier-india", label: "SS Capillary Tube" },
              { href: "/ss-hydraulic-tube-supplier-india", label: "SS Hydraulic Tube" },
              { href: "/ss-coil-tube-supplier-india", label: "SS Coil Tube" },
              { href: "/heat-exchanger-tube-supplier-india", label: "Heat Exchanger Tubes" },
              { href: "/duplex-steel-supplier-vadodara", label: "Duplex 2205 Products" },
              { href: "/inconel-pipe-supplier-india", label: "Inconel 625 Tube" },
            ].map(link => (
              <a href={link.href} style="background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:14px 16px;text-decoration:none;font-size:14px;font-weight:600;color:#E8821A;text-align:center">
                {link.label} →
              </a>
            ))}
          </div>
        </div>
      </section>

      <RelatedPages currentPath="/ss-instrumentation-tube-supplier-india" />

      {/* Footer */}
      <footer style="background:#111827;color:#9ca3af;padding:40px 20px;text-align:center;font-size:14px">
        <p style="margin:0 0 8px"><strong style="color:#fff">Creative Metal Industries</strong> — SS Instrumentation Tube Supplier India | Vadodara, Gujarat</p>
        <p style="margin:0 0 8px">F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style="color:#E8821A">+91 99982 80619</a></p>
        <p style="margin:0"><a href="/privacy-policy" style="color:#9ca3af">Privacy Policy</a> · <a href="/terms" style="color:#9ca3af">Terms</a> · <a href="/sitemap" style="color:#9ca3af">Sitemap</a></p>
      </footer>
    </>
  );
}
