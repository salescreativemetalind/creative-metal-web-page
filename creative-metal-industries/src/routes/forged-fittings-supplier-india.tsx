/**
 * /forged-fittings-supplier-india
 * Target: "forged fittings supplier India", "socket weld fittings India",
 * "threaded fittings supplier", "ASTM A182 forged fittings"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  {
    grade: "SS 304/304L Forged Fittings",
    spec: "ASTM A182 F304/F304L",
    types: "Elbow, Tee, Cross, Coupling, Union, Cap, Plug, Bush, Nipple",
    sizes: "1/8\" to 4\" NB",
    class: "2000#, 3000#, 6000#, 9000#",
    connection: "Socket Weld & Threaded (NPT/BSP)",
    stock: "Ready Stock"
  },
  {
    grade: "SS 316/316L Forged Fittings",
    spec: "ASTM A182 F316/F316L",
    types: "Elbow, Tee, Cross, Coupling, Union, Cap, Plug, Bush, Nipple",
    sizes: "1/8\" to 4\" NB",
    class: "2000#, 3000#, 6000#, 9000#",
    connection: "Socket Weld & Threaded (NPT/BSP)",
    stock: "Ready Stock"
  },
  {
    grade: "Carbon Steel Forged Fittings",
    spec: "ASTM A105 / A694 F52/F60",
    types: "Elbow, Tee, Coupling, Union, Cap, Plug, Outlet (Weldolet, Sockolet, Threadolet)",
    sizes: "1/8\" to 4\" NB",
    class: "2000#, 3000#, 6000#, 9000#",
    connection: "Socket Weld & Threaded (NPT/BSP)",
    stock: "Ready Stock"
  },
  {
    grade: "Alloy Steel Forged Fittings",
    spec: "ASTM A182 F11/F22/F91",
    types: "Elbow, Tee, Cross, Coupling, Union, Boss, Outlet",
    sizes: "1/8\" to 4\" NB",
    class: "3000#, 6000#, 9000#",
    connection: "Socket Weld & Threaded",
    stock: "Ready Stock"
  },
  {
    grade: "Duplex/Super Duplex Forged Fittings",
    spec: "ASTM A182 F51 (2205) / F53 (2507)",
    types: "Elbow, Tee, Cross, Coupling, Union, Cap, Plug",
    sizes: "1/4\" to 3\" NB",
    class: "3000#, 6000#",
    connection: "Socket Weld & Threaded",
    stock: "Available"
  },
  {
    grade: "Nickel Alloy Forged Fittings",
    spec: "ASTM B564 (Inconel 625/600, Monel 400, Hastelloy C-276)",
    types: "Elbow, Tee, Coupling, Union, Cap, Boss",
    sizes: "1/4\" to 2\" NB",
    class: "3000#, 6000#",
    connection: "Socket Weld & Threaded",
    stock: "Available"
  }
];

const FAQS = [
  {
    q: "What are forged fittings and how do they differ from buttweld fittings?",
    a: "Forged fittings are small-bore pipe connection components manufactured by hot or cold forging from solid bars or billets. They connect pipes using socket weld or threaded (screwed) joints, typically in sizes 1/8 inch to 4 inches NB. Buttweld fittings, in contrast, are manufactured by forming plates or pipes and are joined by butt welding — used for larger sizes (1/2 inch and above). Key differences: Forged fittings are stronger due to grain flow from forging. Socket weld/threaded connections are faster to install (no root pass welding required for threaded). However, buttweld joints provide smoother bore for better flow and easier radiographic inspection. Forged fittings dominate in instrument lines, bypass lines, drain/vent connections, and small-bore piping in refineries and power plants."
  },
  {
    q: "What is the difference between 3000# and 6000# fittings?",
    a: "The pound rating (3000# and 6000#) indicates the pressure class of forged fittings as defined in ASME B16.11. 3000# fittings are rated for approximately 3000 psi (207 bar) working pressure at ambient temperature — used with standard wall (SCH 80) pipe. 6000# fittings handle approximately 6000 psi (414 bar) — used with extra-strong (SCH 160 or XXS) pipe. The higher the class, the thicker the fitting wall and deeper the socket. There is also 2000# (for SCH 40 pipe) and 9000# (for XXS pipe in critical high-pressure applications). For most refinery and power plant small-bore piping, 3000# socket weld fittings with SCH 80 pipe are the standard specification."
  },
  {
    q: "What is the difference between socket weld and threaded fittings?",
    a: "Socket weld (SW) fittings have a female socket into which the pipe slides, then a fillet weld is applied around the pipe-to-fitting junction. Threaded (THD) fittings have internal NPT or BSP threads that screw onto externally threaded pipe. Socket weld is preferred for: sizes above 1/2 inch, high-pressure/high-temperature service, and where leak-tight joints are critical. Thread sealant (PTFE tape or pipe dope) is needed for threaded joints. Threaded fittings are preferred for: instrument connections, temporary installations, areas where welding is not permitted (live maintenance), and non-critical drain/vent services. In Indian refineries and power plants, socket weld 3000# is the default for permanent small-bore piping, while threaded is used for instrument tapping points and temporary bypasses."
  },
  {
    q: "What materials does CMI stock for forged fittings?",
    a: "Creative Metal Industries stocks forged fittings in: Stainless Steel — ASTM A182 F304, F304L, F316, F316L, F321, F347 (austenitic). Carbon Steel — ASTM A105 (standard), A350 LF2 (low temperature), A694 F52/F60/F65 (high yield). Alloy Steel — ASTM A182 F1, F5, F9, F11, F12, F22, F91 (chromium-molybdenum). Duplex — ASTM A182 F51 (2205), F53 (2507), F55 (S32760). Nickel Alloys — ASTM B564 Inconel 625/600, Monel 400, Hastelloy C-276. All fittings per ASME B16.11 in classes 2000#, 3000#, 6000#, and 9000# with both socket weld and threaded connections."
  },
  {
    q: "What is the price of SS 316L forged fittings in India?",
    a: "SS 316L (F316L) forged fitting prices vary by type, size, and class: 1/2 inch 3000# socket weld elbow typically Rs 150-300 per piece. 1 inch 3000# tee Rs 250-500 per piece. 2 inch 6000# coupling Rs 600-1200 per piece. Prices depend on current stainless steel market rates, quantity ordered, and specific fitting geometry. Carbon steel (A105) fittings are 60-70% less expensive than SS. Alloy steel (F11/F22) is typically 20-40% more than carbon steel. Creative Metal Industries offers project pricing for bulk orders covering complete small-bore MTO requirements. Call +91 99982 80619 for exact quotation with your bill of materials."
  },
  {
    q: "What documentation is provided with forged fittings?",
    a: "Every forged fitting from CMI is supplied with: Mill Test Certificate (MTC) per EN 10204 3.1/3.2 showing chemical composition, mechanical properties (tensile, yield, elongation, hardness), and heat number traceability. For alloy steel fittings (F11, F22, F91) — additional hardness test results per NACE MR0175 are included. For sour service projects — NACE compliance certificate and HIC/SSC test reports where applicable. PMI (Positive Material Identification) certificates are available on request. IBR Form III-C certification for boiler-grade fittings. We also provide dimensional inspection reports for critical project supplies."
  }
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    
    {
      "@type":"LocalBusiness","@id":"https://www.creativemetalind.com/forged-fittings-supplier-india#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name": "Creative Metal Industries",
      "telephone": "+919998280619",
      "address": { "@type": "PostalAddress", "streetAddress": "F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road, Sultanpura", "addressLocality": "Vadodara", "addressRegion": "Gujarat", "postalCode": "390001", "addressCountry": "IN" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.creativemetalind.com" },
        { "@type": "ListItem", "position": 2, "name": "Forged Fittings Supplier India", "item": "https://www.creativemetalind.com/forged-fittings-supplier-india" }
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

export default function ForgedFittingsSupplierIndia() {
  return (
    <>
      <Title>Forged Fittings Supplier India | ASME B16.11 | CMI</Title>
      <Meta name="description" content="India's trusted forged fittings supplier. Socket weld &amp; threaded fittings in SS 304/316L, CS A105, alloy F11/F22/F91, duplex." />
      <Meta property="og:title" content="Forged Fittings Supplier India | Socket Weld & Threaded | CMI" />
      <Meta property="og:description" content="Forged fittings supplier India. Socket weld &amp; threaded. SS, CS, alloy, duplex. ASME B16.11. Ready stock Vadodara." />
      <Meta property="og:type" content="product" />
      <Meta property="og:url" content="https://www.creativemetalind.com/forged-fittings-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Link rel="canonical" href="https://www.creativemetalind.com/forged-fittings-supplier-india" />
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
            <span style="color:#374151;font-weight:600">Forged Fittings Supplier India</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section style="background:linear-gradient(135deg,#111827 0%,#1f2937 100%);padding:70px 0;text-align:center">
        <div style="max-width:900px;margin:0 auto;padding:0 20px">
          <h1 style="color:#fff;font-size:38px;font-weight:800;margin:0 0 18px;line-height:1.2">
            Forged Fittings Supplier India
          </h1>
          <p style="color:#d1d5db;font-size:18px;margin:0 0 10px;line-height:1.7">
            India's comprehensive supplier of <strong style="color:#E8821A">socket weld and threaded forged fittings</strong> per ASME B16.11 — elbows, tees, couplings, unions, caps, plugs, bushings, and nipples. Available in SS 304/316L, carbon steel A105, alloy steel F11/F22/F91, duplex 2205/2507, and nickel alloys. Classes 2000# through 9000#. Sizes 1/8" to 4" NB. Ready stock from Vadodara warehouse.
          </p>
          <p style="color:#9ca3af;font-size:15px;margin:0 0 28px">
            Complete Small-Bore Piping Solutions | Mill Test Certificates | Pan-India Delivery
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
            Forged Fittings — Materials & Specifications
          </h2>
          <p style="color:#6b7280;text-align:center;margin:0 0 36px;font-size:15px">
            Complete range of socket weld and threaded fittings in all engineering materials
          </p>
          <div style="overflow-x:auto;border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,0.08)">
            <table style="width:100%;border-collapse:collapse;font-size:14px;min-width:1000px">
              <thead>
                <tr style="background:linear-gradient(135deg,#E8821A,#d97706)">
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Material Grade</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Specification</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Fitting Types</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Sizes</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Pressure Class</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Connection</th>
                  <th style="padding:14px 10px;color:#fff;text-align:left;font-weight:600">Stock</th>
                </tr>
              </thead>
              <tbody>
                {GRADES.map((g, i) => (
                  <tr style={{"background": i % 2 === 0 ? "#fff" : "#f9fafb"}}>
                    <td style="padding:11px 10px;font-weight:700;color:#111827;font-size:13px">{g.grade}</td>
                    <td style="padding:11px 10px;font-size:12px">{g.spec}</td>
                    <td style="padding:11px 10px;font-size:12px">{g.types}</td>
                    <td style="padding:11px 10px;font-size:13px">{g.sizes}</td>
                    <td style="padding:11px 10px;font-size:13px">{g.class}</td>
                    <td style="padding:11px 10px;font-size:12px">{g.connection}</td>
                    <td style={{"padding":"11px 10px","font-weight":"700","font-size":"12px","color": g.stock === "Ready Stock" ? "#16a34a" : "#d97706"}}>{g.stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fitting Types Explained */}
      <section style="padding:60px 0;background:#f9fafb">
        <div style="max-width:1200px;margin:0 auto;padding:0 20px">
          <h2 style="color:#111827;font-size:28px;font-weight:700;text-align:center;margin:0 0 36px">
            Forged Fitting Types We Supply
          </h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px">
            {[
              { name: "90° & 45° Elbows", desc: "Direction change in piping. SW and threaded. Full-bore and reducing available." },
              { name: "Equal & Reducing Tees", desc: "Branch connections in small-bore lines. All size combinations in stock." },
              { name: "Couplings (Full & Half)", desc: "Connect two pipe lengths. Full coupling for joining, half coupling for branch." },
              { name: "Unions", desc: "Dismountable connection without cutting pipe. Three-piece design with metal-to-metal seat." },
              { name: "Caps & Plugs", desc: "End closure for dead-ends. Caps for socket weld, plugs (hex/square) for threaded." },
              { name: "Bushings & Reducers", desc: "Size reduction. Hex bush (threaded), concentric/eccentric socket weld reducers." },
              { name: "Nipples (Barrel & Close)", desc: "Short pipe pieces — barrel nipple (threaded both ends), close nipple, swage nipple." },
              { name: "Outlet Fittings", desc: "Weldolet, Sockolet, Threadolet, Elbolet — branch connections on main pipe run." },
              { name: "Crosses", desc: "Four-way connection. Less common — primarily for instrument manifolds and gauge lines." },
              { name: "Boss Fittings", desc: "Weld-on boss for threaded instrument connections on vessels and headers." },
              { name: "Street Elbows", desc: "Male x Female thread configuration for compact direction changes in tight spaces." },
              { name: "Swage Nipples", desc: "Concentric and eccentric size reduction in one piece — replacing reducer + nipple combination." },
            ].map(item => (
              <div style="background:#fff;border:1px solid #e5e7eb;border-radius:10px;padding:16px">
                <h3 style="font-size:14px;font-weight:700;color:#E8821A;margin:0 0 6px">{item.name}</h3>
                <p style="font-size:13px;color:#4b5563;line-height:1.5;margin:0">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section style="padding:60px 0;background:#fff">
        <div style="max-width:1200px;margin:0 auto;padding:0 20px">
          <h2 style="color:#111827;font-size:28px;font-weight:700;text-align:center;margin:0 0 36px">
            Where Forged Fittings Are Used
          </h2>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px">
            {[
              { icon: "🛢️", title: "Oil Refineries & Petrochemical", desc: "Small-bore piping for instrument tapping, sampling points, drain/vent connections, bypass lines, and chemical injection quills. F316L for corrosive service, A105 for utility piping." },
              { icon: "⚡", title: "Power Plants", desc: "Boiler drum connections, superheater drain points, instrument connections on steam headers. F22/F91 for high-temperature alloy steel systems. IBR certified fittings for boiler applications." },
              { icon: "🧪", title: "Chemical & Pharmaceutical", desc: "Reactor vessel connections, sample points, gauge connections, chemical dosing lines. SS 316L socket weld for process purity, threaded for instrument connections." },
              { icon: "💧", title: "Water & Wastewater Treatment", desc: "Chemical dosing piping, instrument connections, pump suction/discharge small-bore branches. Duplex fittings for chloride-containing desalination environments." },
              { icon: "🔬", title: "Instrumentation & Control", desc: "Gauge roots, transmitter manifold connections, thermowell bosses, impulse tubing transitions. 3000# threaded as standard for instrument piping per ISA standards." },
              { icon: "🏭", title: "Fertilizer & Urea Plants", desc: "High-pressure piping connections in ammonia synthesis loops, CO2 removal systems. F316L and duplex for carbamate service. A105 for utility and nitrogen piping." },
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
            Why Buy Forged Fittings from Creative Metal Industries?
          </h2>
          <div style="display:grid;gap:16px">
            {[
              { title: "Massive Ready Stock — 500+ Line Items", desc: "We maintain one of Gujarat's largest forged fittings inventories — SS 304/316L, A105, F11/F22 in sizes 1/4\" to 2\" NB, classes 3000# and 6000#, both socket weld and threaded. No waiting for indent on standard items — same-day dispatch." },
              { title: "All Materials Under One Roof", desc: "From carbon steel A105 to exotic Inconel 625 forged fittings — single source procurement reduces your vendor coordination. Complete your small-bore MTO with one purchase order covering SS, CS, alloy, duplex, and nickel alloy requirements." },
              { title: "Genuine Forged (Not Machined from Bar)", desc: "All fittings are hot-forged from billets with proper grain flow — not machined from bar stock (which lacks forging integrity). We source from reputed forging units with in-house testing facilities and NABL-accredited labs." },
              { title: "Project Supply with Complete Documentation", desc: "MTC (3.1/3.2) with every batch, PMI certificates, hardness test reports (critical for NACE/sour service), and dimensional compliance certificates. We understand EPC documentation requirements — VDR packages prepared per your project format." },
              { title: "IBR & NACE Compliance", desc: "IBR Form III-C available for boiler-grade F22/F91 fittings. NACE MR0175/ISO 15156 compliant fittings with hardness below 22 HRC for sour service applications in oil & gas." },
              { title: "Competitive Project Pricing", desc: "For project quantities, we offer MTO-based pricing that's 15-25% below retail rates. Annual rate contracts for regular EPC contractors. Credit terms available for established accounts." },
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
            Frequently Asked Questions — Forged Fittings
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
            Need Forged Fittings? Send Your MTO for Best Pricing
          </h2>
          <p style="color:#d1d5db;font-size:16px;margin:0 0 28px">
            500+ items ready stock. SS, CS, Alloy, Duplex, Nickel alloys. Same-day dispatch.
          </p>
          <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
            <a href="tel:+919998280619" style="background:#E8821A;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:16px">📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+forged+fittings+quote" target="_blank" rel="noopener" style="background:#25D366;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:16px">💬 WhatsApp</a>
            <a href="mailto:creativemetalind@gmail.com" style="background:transparent;color:#fff;border:2px solid rgba(255,255,255,0.4);padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:600;font-size:16px">✉ Email MTO</a>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section style="padding:50px 0;background:#f9fafb">
        <div style="max-width:1200px;margin:0 auto;padding:0 20px">
          <h3 style="font-size:20px;font-weight:700;color:#111827;margin:0 0 20px;text-align:center">Related Products</h3>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px">
            {[
              { href: "/ss-buttweld-fittings-supplier-india", label: "SS Buttweld Fittings" },
              { href: "/compression-fittings-supplier-india", label: "Compression Fittings" },
              { href: "/ss-flanges-supplier-vadodara", label: "SS Flanges" },
              { href: "/ss-seamless-pipe-supplier-india", label: "SS Seamless Pipe" },
              { href: "/alloy-steel-pipe-supplier-india", label: "Alloy Steel Pipe" },
              { href: "/carbon-steel-pipe-fittings-vadodara", label: "Carbon Steel Fittings" },
              { href: "/duplex-steel-supplier-vadodara", label: "Duplex Steel" },
              { href: "/inconel-pipe-supplier-india", label: "Inconel Pipe & Fittings" },
            ].map(link => (
              <a href={link.href} style="background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:14px 16px;text-decoration:none;font-size:14px;font-weight:600;color:#E8821A;text-align:center">
                {link.label} →
              </a>
            ))}
          </div>
        </div>
      </section>

      <RelatedPages currentPath="/forged-fittings-supplier-india" />

      {/* Footer */}
      <footer style="background:#111827;color:#9ca3af;padding:40px 20px;text-align:center;font-size:14px">
        <p style="margin:0 0 8px"><strong style="color:#fff">Creative Metal Industries</strong> — Forged Fittings Supplier India | Vadodara, Gujarat</p>
        <p style="margin:0 0 8px">F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style="color:#E8821A">+91 99982 80619</a></p>
        <p style="margin:0"><a href="/privacy-policy" style="color:#9ca3af">Privacy Policy</a> · <a href="/terms" style="color:#9ca3af">Terms</a> · <a href="/sitemap" style="color:#9ca3af">Sitemap</a></p>
      </footer>
    </>
  );
}
