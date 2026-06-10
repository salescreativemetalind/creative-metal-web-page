import { Title, Meta, Link } from "@solidjs/meta";
import { For } from "solid-js";
import { PageLayout } from "../components/Layout";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PRODUCTS = [
  {
    icon: "⚪",
    title: "Stainless Steel Products",
    grades: "SS 304, 304L, 316, 316L, 317L, 321, 310S, 347, 409, 410, 904L, Duplex 2205, Super Duplex 2507",
    forms: "Pipes · Tubes · Plates · Sheets · Coils · Fittings · Flanges · Bars · Strips",
    note: "Austenitic, ferritic, duplex and super duplex grades. Imported and indigenous mills. IBR, NACE, MTC on all material.",
  },
  {
    icon: "🔩",
    title: "Carbon Steel Products",
    grades: "IS 2062 E250/E350, ASTM A106 Gr.B/C, SA 516 Gr.60/70, API 5L Gr.B, A36, A572",
    forms: "Seamless Pipes · ERW Pipes · Plates · Structural Sections · Bars · Fittings · Flanges",
    note: "Boiler quality, pressure vessel and structural grades. IBR Form III-C. NACE/HIC stock available.",
  },
  {
    icon: "🟠",
    title: "Alloy Steel Products",
    grades: "ASTM A335 P5, P9, P11, P12, P22, P91, P92 · A387 Gr.11/12/22/91",
    forms: "Seamless Pipes · Boiler Tubes · Plates · Fittings · Flanges",
    note: "High-temperature creep-resistant grades for supercritical power plants and refineries. IBR certified.",
  },
  {
    icon: "🛢️",
    title: "Pipes & Tubes",
    grades: "SS, CS, AS, Duplex, Inconel, Monel, Hastelloy, Titanium · API 5L · ASTM A312/A106/A335",
    forms: "Seamless · Welded ERW/EFW/SAW · Line Pipes · Boiler Tubes · Instrumentation Tubes",
    note: "6NB to 1200NB. SCH 5S to XXS. IBR Form III-C. MTC 3.1/3.2. Ready stock — immediate dispatch.",
  },
  {
    icon: "⚙️",
    title: "Pipe Fittings",
    grades: "SS (A403) · CS/AS (A234) · Duplex (A815) · Inconel · Hastelloy · Titanium",
    forms: "Buttweld · Forged SW/Threaded · Olets · Compression Fittings",
    note: "Elbows, Tees, Reducers, Caps, Stub Ends. ASME B16.9 / B16.11. 2000# to 9000#. MSS SP-97 Olets.",
  },
  {
    icon: "🔧",
    title: "Flanges",
    grades: "SS (A182) · CS/AS (A105/A182 F11/F22/F91) · Duplex F51 · Super Duplex F53",
    forms: "Slip-On · Weld Neck · Blind · Socket Weld · Threaded · Lap Joint · Orifice",
    note: "ASME B16.5 (150# to 2500#) and B16.47 (Series A & B). IBR Form III-C. Raised face, flat face, RTJ.",
  },
  {
    icon: "🔵",
    title: "Valves",
    grades: "SS 316L · A216 WCB · A351 CF8M · Duplex · Hastelloy · Bronze",
    forms: "Gate · Globe · Check · Ball · Butterfly · Needle · Safety Relief",
    note: "API 600/602/603, BS 1873, ASME B16.34. Flanged, threaded, wafer and lug end. IBR certified valves available.",
  },
  {
    icon: "📋",
    title: "Plates, Sheets & Coils",
    grades: "SS 304/316L/317L/321/310/904L · CS IS 2062/SA 516 · Hardox 400/500 · Duplex/Super Duplex · Corten A/B",
    forms: "Hot Rolled Plates · Cold Rolled Sheets · Coils · Chequered Plates · Clad Plates · Wear Plates",
    note: "Thickness 0.4mm to 200mm. Cut-to-size available. 2B, BA, No.4, Mirror finish for SS. SAIL, Jindal, Outokumpu, SSAB.",
  },
];

const GRADES_TABLE = [
  { material: "SS Pipes & Tubes",          standard: "ASTM A312 / A213 / A269",      grades: "304, 304L, 316, 316L, 321, 317L, 310S, 347, 904L",    form: "Seamless / Welded" },
  { material: "Duplex / Super Duplex Pipe", standard: "ASTM A790 / A789",             grades: "UNS S31803 (2205), S32750 (2507), S32760",             form: "Seamless / Welded" },
  { material: "CS Seamless Pipe",          standard: "ASTM A106 / A53 / API 5L",      grades: "Gr.B, Gr.C, x42–x80",                                 form: "Seamless / ERW"    },
  { material: "Alloy Steel Pipe",          standard: "ASTM A335",                     grades: "P5, P9, P11, P12, P22, P91, P92",                      form: "Seamless"          },
  { material: "SS Plates & Sheets",        standard: "ASTM A240 / A480",             grades: "304, 316L, 317L, 321, 310, 347, 409, 410, 904L",       form: "CR / HR / Coil"    },
  { material: "Alloy Steel Plate",         standard: "ASTM A387",                     grades: "Gr.5, 9, 11, 12, 22, 91 Cl.1 & 2",                    form: "Normalised & Temp" },
  { material: "CS Pressure Vessel Plate",  standard: "ASME SA 516 / IS 2062",        grades: "Gr.60/70, E250/E350, NACE/HIC",                        form: "Plates"            },
  { material: "SS Buttweld Fittings",      standard: "ASTM A403 / A815",             grades: "304, 316L, 317L, 321, 310, 904L, 2205, 2507",          form: "All Types"         },
  { material: "Forged Fittings",           standard: "ASTM A182",                     grades: "F304, F316L, F321, F51, F53, F11, F22, F91",           form: "SW / Threaded"     },
  { material: "SS / CS / AS Flanges",      standard: "ASTM A182 / A105",             grades: "F304, F316L, F321, A105, F11, F22, F91, F53",          form: "All ASME B16.5"    },
  { material: "Inconel",                   standard: "ASTM B444 / B443 / B407",      grades: "600, 625, 718, 800, 825",                              form: "All Product Forms" },
  { material: "Monel / Hastelloy",         standard: "ASTM B165 / B622",             grades: "Monel 400, K-500 · Hastelloy C-276, C-22, B-2",        form: "All Product Forms" },
  { material: "Titanium",                  standard: "ASTM B337 / B265 / B338",      grades: "Grade 1, 2, 5 (Ti-6Al-4V), 7, 9",                     form: "Pipes/Sheets/Bars" },
  { material: "Wear Plates",               standard: "SSAB / TATA / AMNS",           grades: "Hardox 400/450/500/600, Abrex 400/500, S690QL",        form: "Plates"            },
];

const INDUSTRIES = [
  { icon: "🛢️", name: "Oil & Gas",              desc: "API 5L line pipes, SS seamless pipes, Duplex fittings, alloy steel flanges for upstream and downstream operations." },
  { icon: "🏭", name: "Petrochemical & Refinery",desc: "P91/P22 alloy steel, 316L/904L SS, Hastelloy and Inconel for high-temperature, high-pressure process equipment." },
  { icon: "⚡", name: "Power Plants",            desc: "IBR certified boiler tubes, P91 seamless pipes, alloy steel plates for supercritical and ultra-supercritical boilers." },
  { icon: "🌱", name: "Fertilizer Plants",       desc: "Duplex 2205 and SS 316L pipes, CS pressure vessel plates, alloy steel fittings for ammonia and urea process lines." },
  { icon: "🧪", name: "Chemical & Pharma",       desc: "Hastelloy C-276, Inconel 625, Titanium Grade 2 and SS 904L for aggressive chemical and pharmaceutical environments." },
  { icon: "🧱", name: "Cement & Mining",         desc: "Hardox wear plates, MS structural sections, ERW pipes and CS plates for heavy-duty mining and cement machinery." },
  { icon: "⚓", name: "Marine & Offshore",       desc: "Super Duplex 2507, CuNi 90/10 pipes, Titanium and 316L SS for seawater handling and offshore platform structures." },
  { icon: "🔬", name: "EPC & Fabrication",       desc: "Complete bill of materials supply for EPC projects — pipes, plates, fittings, flanges and structural steel from one source." },
];

const ADVANTAGES = [
  { icon: "📦", title: "Ready Stock — Immediate Dispatch",   body: "Deep inventory at our 1,092 sq.mtr GIDC Makarpura warehouse. Routine orders dispatched within 24–48 hours." },
  { icon: "🚨", title: "Emergency & Urgent Supply",          body: "We handle emergency procurement requirements for plant shutdowns and critical breakdowns. Same-day dispatch possible." },
  { icon: "🌐", title: "PAN India & Export Delivery",        body: "Doorstep delivery across all Indian states. Exports to UAE, Oman, Kuwait, Bahrain, Saudi Arabia, UK and USA." },
  { icon: "📄", title: "Complete Documentation",             body: "MTC EN 10204 3.1/3.2, IBR Form III-C, NACE, HIC, PWHT, Hydro test certificates with every consignment." },
  { icon: "🔬", title: "Third-Party Inspection",             body: "Inspection under DNV, TUV, SGS, BVIS, LRIS and customer-nominated TPI agencies. Stage-wise inspection available." },
  { icon: "💰", title: "Competitive & Transparent Pricing",  body: "Direct mill and importer relationships enable best market rates. Volume discounts for project and bulk orders." },
  { icon: "🌍", title: "Imported & Indigenous Materials",    body: "Access to European, Japanese, Korean and US mills for specialty grades alongside SAIL, Jindal, Ratnamani stocks." },
  { icon: "⚡", title: "Fast Quote — 24-Hour Response",      body: "Send your requirement and receive a detailed technical and commercial quote within 24 working hours." },
];

const FAQS = [
  {
    q: "What types of metal products does Creative Metal Industries supply?",
    a: "Creative Metal Industries supplies a comprehensive range of industrial metals including Stainless Steel, Carbon Steel, Alloy Steel and Exotic Alloys (Inconel, Monel, Hastelloy, Titanium, Duplex, Super Duplex) in all product forms — Pipes, Tubes, Plates, Sheets, Coils, Pipe Fittings, Flanges and Valves. We are a trusted metal trading company in Vadodara with ready stock for immediate delivery.",
  },
  {
    q: "Do you supply industrial metals with IBR certification?",
    a: "Yes. We are a leading industrial metal supplier in Vadodara providing IBR Form III-C certified Pipes, Tubes, Plates and Fittings for boiler, pressure vessel and steam service applications. Alloy steel P91/P22 and carbon steel SA 516 with IBR are part of our regular stock.",
  },
  {
    q: "Can you handle emergency metal supply requirements?",
    a: "Absolutely. Emergency procurement and same-day dispatch is one of our core capabilities. Our ready stock at the GIDC Makarpura warehouse in Vadodara allows us to handle critical breakdowns, plant shutdowns and urgent project requirements across India.",
  },
  {
    q: "What is your delivery coverage for industrial metal supply?",
    a: "We provide PAN India delivery to all states including Gujarat, Maharashtra, Rajasthan, Madhya Pradesh, Tamil Nadu, Karnataka and more. We also export industrial metals to the UAE, Oman, Bahrain, Kuwait, Saudi Arabia, UK, USA and 50+ countries worldwide.",
  },
  {
    q: "Do you supply imported metals and exotic alloys?",
    a: "Yes. As a metal importer and exporter in Vadodara, we have direct import channels from Europe, Japan, Korea and the USA. We stock Inconel 625/718, Monel 400, Hastelloy C-276/C-22, Super Duplex 2507, Titanium Grade 2 and 5, and other specialty grades not available domestically.",
  },
  {
    q: "What documentation do you provide with industrial metal supply?",
    a: "Every consignment from Creative Metal Industries is supplied with original Mill Test Certificates (MTC EN 10204 3.1 or 3.2), IBR Form III-C (where applicable), NACE MR-0175 compliance certificates, HIC test reports, hydrostatic test certificates and third-party inspection reports from DNV, TUV, SGS, BVIS or LRIS.",
  },
  {
    q: "Do you supply metals to EPC contractors and large industrial projects?",
    a: "Yes. We are a preferred industrial raw material supplier for EPC contractors, fabricators and process industries. We handle complete bill-of-material supply for large projects — pipes, plates, fittings, flanges and structural steel from a single source, with project tracking and phased delivery.",
  },
  {
    q: "What grades of stainless steel pipes do you stock in Vadodara?",
    a: "Our stainless steel pipe stock in Vadodara covers grades SS 304, 304L, 316, 316L, 317L, 321, 310S, 347 and 904L as per ASTM A312 and A213. We also stock Duplex 2205 (UNS S31803) and Super Duplex 2507 (UNS S32750) in sizes 6NB to 600NB across schedules SCH 5S to XXS.",
  },
  {
    q: "Can you source rare or non-standard metal grades?",
    a: "Yes. Our extensive vendor network and direct mill relationships allow us to procure rare and non-standard grades including Hastelloy B-3, Incoloy 825, Titanium Grade 7, Nickel 200/201, Alloy 20 (N08020) and other specialty materials. Typically sourced within 2–4 weeks with full MTC.",
  },
  {
    q: "How do I get a quote from Creative Metal Industries?",
    a: "You can contact us via phone at +91 99982 80619 (Sunny Shah) or +91 98255 06110 (Ghewar Shah), email at creativemetalind@gmail.com, or submit your requirement through our website enquiry form. We respond with a detailed technical and commercial quote within 24 working hours.",
  },
];

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQS.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
});

const SERVICE_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Industrial Metal Trading & Supply",
  "serviceType": "Metal Trading, Stockist and Supply",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Creative Metal Industries",
    "url": "https://www.creativemetalind.com",
    "telephone": "+919998280619",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road",
      "addressLocality": "Vadodara",
      "addressRegion": "Gujarat",
      "postalCode": "390001",
      "addressCountry": "IN",
    },
  },
  "areaServed": ["India", "UAE", "Oman", "Kuwait", "Bahrain", "Saudi Arabia", "UK", "USA"],
  "description": "Creative Metal Industries is a trusted metal trading company in Vadodara, Gujarat supplying Stainless Steel, Carbon Steel, Alloy Steel, Pipes, Tubes, Plates, Fittings, Flanges and Valves to Oil & Gas, Petrochemical, Power and EPC industries since 2012.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Industrial Metal Products",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Stainless Steel Pipes Vadodara" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Carbon Steel Plates IBR Gujarat" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Alloy Steel P91 Pipes India" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Duplex Steel Fittings Flanges" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Inconel Hastelloy Monel Supply India" } },
    ],
  },
});

const BREADCRUMB_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home",          "item": "https://www.creativemetalind.com/" },
    { "@type": "ListItem", "position": 2, "name": "Metal Trading", "item": "https://www.creativemetalind.com/metal-trading" },
  ],
});

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function MetalTradingPage() {
  return (
    <PageLayout active="">
      {/* ── SEO Meta ─────────────────────────────────────────── */}
      <Title>Metal Trading Company in Vadodara | Creative Metal Industries</Title>
      <Meta
        name="description"
        content="Creative Metal Industries — trusted metal trading company in Vadodara since 2012. Ready stock of SS, Carbon & Alloy Steel Pipes, Plates, Fittings, Flanges. PAN India delivery. Call +91 99982 80619."
      />
      <Link rel="canonical" href="https://www.creativemetalind.com/metal-trading" />

      {/* Open Graph */}
      <Meta property="og:type"        content="website" />
      <Meta property="og:title"       content="Metal Trading Company in Vadodara | Creative Metal Industries" />
      <Meta property="og:description" content="Trusted industrial metal stockist & supplier in Vadodara, Gujarat. SS, Carbon & Alloy Steel Pipes, Plates, Fittings, Flanges. IBR certified. PAN India supply." />
      <Meta property="og:url"         content="https://www.creativemetalind.com/metal-trading" />
      <Meta property="og:image"       content="https://www.creativemetalind.com/logo_cmi.png" />
      <Meta property="og:locale"      content="en_IN" />

      {/* Twitter */}
      <Meta name="twitter:card"        content="summary_large_image" />
      <Meta name="twitter:title"       content="Metal Trading Company in Vadodara | Creative Metal Industries" />
      <Meta name="twitter:description" content="Ready stock industrial metals — SS, CS, Alloy Steel, Pipes, Plates, Fittings, Flanges. PAN India. IBR certified. Call +91 99982 80619." />
      <Meta name="twitter:image"       content="https://www.creativemetalind.com/logo_cmi.png" />

      {/* Schema */}
      <script type="application/ld+json" innerHTML={SERVICE_SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />
      <script type="application/ld+json" innerHTML={BREADCRUMB_SCHEMA} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section class="page-hero" aria-label="Metal Trading Company in Vadodara">
        <div class="container">
          <nav aria-label="Breadcrumb" style="margin-bottom:1rem">
            <ol style="display:flex;gap:0.5rem;list-style:none;font-size:0.8rem;color:rgba(255,255,255,0.7);flex-wrap:wrap">
              <li><a href="/" style="color:rgba(255,255,255,0.7)">Home</a></li>
              <li aria-hidden="true" style="color:rgba(255,255,255,0.4)">›</li>
              <li style="color:var(--white)">Metal Trading</li>
            </ol>
          </nav>
          <span class="section-label">Trusted Since 2012 · Vadodara, Gujarat</span>
          <h1>Metal Trading Company in Vadodara</h1>
          <p>
            Creative Metal Industries — your reliable industrial metal stockist, supplier, importer
            and exporter for Stainless Steel, Carbon Steel, Alloy Steel, Pipes, Plates, Fittings,
            Flanges and Valves. Ready stock. PAN India delivery. Emergency supply support.
          </p>
          <div style="display:flex;gap:1rem;flex-wrap:wrap;margin-top:2rem">
            <a href="/#contact" class="btn btn-primary">Get a Quote →</a>
            <a href="tel:+919998280619" class="btn btn-outline" style="border-color:rgba(255,255,255,0.5);color:var(--white)">
              📞 +91 99982 80619
            </a>
          </div>
        </div>
      </section>

      {/* ── Introduction ─────────────────────────────────────── */}
      <section style="background:var(--white);padding:5rem 0" aria-label="About Creative Metal Industries">
        <div class="container">
          <div class="about-top" style="margin-bottom:4rem">
            <div class="about-top-left">
              <span class="section-label">Who We Are</span>
              <h2>Gujarat's Premier Metal Trading Company</h2>
              <p class="about-tagline">Stockist · Supplier · Importer · Exporter · Indentor</p>
            </div>
            <div class="about-top-divider" aria-hidden="true" />
            <div class="about-top-right">
              <p>
                Established in <strong>2012</strong>, Creative Metal Industries has grown into one of
                Gujarat's most trusted <strong>metal trading companies in Vadodara</strong>. From our
                <strong>1,092 sq.mtr warehouse at GIDC Makarpura</strong>, we maintain deep ready stock
                of Stainless Steel, Carbon Steel, Alloy Steel and Exotic Alloys — available for
                immediate dispatch to any location across India and worldwide.
              </p>
              <p>
                As a dedicated <strong>industrial metal supplier in Vadodara</strong>, we serve Oil &amp;
                Gas, Petrochemical, Power, Fertilizer, Chemical, Pharmaceutical, Cement and EPC
                industries with precision-grade materials backed by full documentation — Mill Test
                Certificates, IBR Form III-C, NACE compliance and third-party inspection reports
                from DNV, TUV, SGS and LRIS.
              </p>
              <p>
                Whether you need a single piece for maintenance or a full bill of materials for a
                large EPC project, our team of qualified procurement engineers ensures you receive
                the right material, at the right price, delivered on time — every time. We stock
                <strong>both imported and indigenous materials</strong>, giving you access to the
                widest range of grades and specifications under one roof.
              </p>
            </div>
          </div>

          {/* Trust Stats */}
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:1.5rem;padding:2.5rem;background:var(--sky2);border-radius:12px;border:1px solid var(--border)">
            {[
              { num: "2012",  label: "Established"           },
              { num: "14+",   label: "Years of Experience"   },
              { num: "500+",  label: "Projects Supplied"     },
              { num: "50+",   label: "Countries Exported"    },
              { num: "1092",  label: "Sq.Mtr Warehouse"      },
              { num: "5000+", label: "Material Grades Stocked"},
            ].map(s => (
              <div style="text-align:center;padding:1rem 0.5rem">
                <span class="stat-num" style="display:block;font-size:1.8rem;font-weight:800;background:linear-gradient(135deg,var(--amber),var(--rose));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1.1">
                  {s.num}
                </span>
                <span style="font-size:0.75rem;color:var(--muted);text-transform:uppercase;letter-spacing:0.06em;margin-top:0.3rem;display:block">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────────────── */}
      <section class="why-choose-section" style="padding:5rem 0" aria-label="Why choose Creative Metal Industries">
        <div class="container">
          <div class="section-head-center" style="margin-bottom:3rem">
            <span class="section-label">Why Choose Us</span>
            <h2>Why Creative Metal Industries is Vadodara's Most Trusted Industrial Metal Supplier</h2>
            <p>
              From emergency procurement to large project supply — we deliver quality industrial metals
              with complete documentation, competitive pricing and unmatched service reliability.
            </p>
          </div>
          <div class="about-pillars">
            <For each={ADVANTAGES}>{(adv) => (
              <div class="pillar-card">
                <div class="pillar-icon-wrap"><span class="pillar-icon">{adv.icon}</span></div>
                <div class="pillar-body">
                  <h4>{adv.title}</h4>
                  <p>{adv.body}</p>
                </div>
              </div>
            )}</For>
          </div>
        </div>
      </section>

      {/* ── Complete Product Range ────────────────────────────── */}
      <section style="background:var(--white);padding:5rem 0;border-top:1px solid var(--border)" aria-label="Industrial metal product range">
        <div class="container">
          <div class="section-head-center" style="margin-bottom:3rem">
            <span class="section-label">Our Products</span>
            <h2>Complete Industrial Metal Product Range</h2>
            <p>
              Stainless Steel, Carbon Steel, Alloy Steel, Exotic Alloys — in every product form
              required by process, power and structural industries.
            </p>
          </div>
          <div class="services-grid">
            <For each={PRODUCTS}>{(p) => (
              <article class="service-card" aria-label={p.title}>
                <span style="font-size:2rem;display:block;margin-bottom:0.75rem" aria-hidden="true">{p.icon}</span>
                <h3>{p.title}</h3>
                <p style="font-size:0.82rem;color:var(--amber);font-weight:600;margin-bottom:0.4rem">{p.grades}</p>
                <p style="font-size:0.82rem;color:var(--muted);margin-bottom:0.5rem">
                  <strong>Forms:</strong> {p.forms}
                </p>
                <p>{p.note}</p>
              </article>
            )}</For>
          </div>
        </div>
      </section>

      {/* ── Grades & Specifications Table ────────────────────── */}
      <section style="background:var(--sky2);padding:5rem 0;border-top:1px solid var(--border)" aria-label="Material grades and specifications">
        <div class="container">
          <div class="section-head-center" style="margin-bottom:3rem">
            <span class="section-label">Grades & Specifications</span>
            <h2>Industrial Metal Grades and Material Specifications</h2>
            <p>
              Quick reference for procurement engineers and project managers. All grades supplied with
              original Mill Test Certificates and applicable international standard compliance.
            </p>
          </div>
          <div style="overflow-x:auto;border-radius:10px;border:1px solid var(--border);box-shadow:0 2px 12px rgba(0,0,0,0.06)">
            <table style="width:100%;border-collapse:collapse;background:var(--white);font-size:0.875rem" aria-label="Material grades and specifications table">
              <thead>
                <tr style="background:linear-gradient(135deg,var(--amber),var(--rose))">
                  <th style="padding:0.85rem 1rem;text-align:left;color:var(--white);font-weight:700;white-space:nowrap">Material</th>
                  <th style="padding:0.85rem 1rem;text-align:left;color:var(--white);font-weight:700;white-space:nowrap">Standard</th>
                  <th style="padding:0.85rem 1rem;text-align:left;color:var(--white);font-weight:700">Grades Available</th>
                  <th style="padding:0.85rem 1rem;text-align:left;color:var(--white);font-weight:700;white-space:nowrap">Form</th>
                </tr>
              </thead>
              <tbody>
                <For each={GRADES_TABLE}>{(row, i) => (
                  <tr style={`background:${i() % 2 === 0 ? "var(--white)" : "var(--sky2)"};border-bottom:1px solid var(--border)`}>
                    <td style="padding:0.75rem 1rem;font-weight:600;color:var(--ink);white-space:nowrap">{row.material}</td>
                    <td style="padding:0.75rem 1rem;color:var(--amber);font-weight:500;white-space:nowrap">{row.standard}</td>
                    <td style="padding:0.75rem 1rem;color:var(--charcoal)">{row.grades}</td>
                    <td style="padding:0.75rem 1rem;color:var(--muted);white-space:nowrap">{row.form}</td>
                  </tr>
                )}</For>
              </tbody>
            </table>
          </div>
          <p style="margin-top:1rem;font-size:0.82rem;color:var(--muted);text-align:center">
            * Additional grades, special sizes and non-standard specifications available on request. Contact our team for sourcing.
          </p>
        </div>
      </section>

      {/* ── Industries We Serve ───────────────────────────────── */}
      <section style="background:var(--white);padding:5rem 0;border-top:1px solid var(--border)" aria-label="Industries served by Creative Metal Industries">
        <div class="container">
          <div class="section-head-center" style="margin-bottom:3rem">
            <span class="section-label">Industries We Serve</span>
            <h2>Industrial Metal Supply for Every Process Industry</h2>
            <p>
              Trusted by procurement teams, project engineers and maintenance managers across
              India's most demanding industrial sectors.
            </p>
          </div>
          <div class="services-grid">
            <For each={INDUSTRIES}>{(ind) => (
              <article class="service-card" aria-label={ind.name}>
                <span style="font-size:2rem;display:block;margin-bottom:0.75rem" aria-hidden="true">{ind.icon}</span>
                <h3>{ind.name}</h3>
                <p>{ind.desc}</p>
              </article>
            )}</For>
          </div>
        </div>
      </section>

      {/* ── Supply & Logistics ───────────────────────────────── */}
      <section style="background:var(--sky2);padding:5rem 0;border-top:1px solid var(--border)" aria-label="Supply and logistics capabilities">
        <div class="container">
          <div class="about-top" style="margin-bottom:3rem">
            <div class="about-top-left">
              <span class="section-label">Logistics</span>
              <h2>Supply &amp; Logistics Capabilities</h2>
            </div>
            <div class="about-top-divider" aria-hidden="true" />
            <div class="about-top-right">
              <p>
                As a <strong>metal stockist in Gujarat</strong> with a 1,092 sq.mtr GIDC Makarpura
                warehouse, Creative Metal Industries maintains one of the largest ready inventories
                of industrial metals in the region. Our logistics infrastructure ensures fast,
                reliable delivery to any location in India.
              </p>
              <ul style="margin:1rem 0;padding-left:1.25rem;color:var(--charcoal);line-height:2">
                <li><strong>PAN India Delivery</strong> — all states, major and Tier 2 industrial cities</li>
                <li><strong>Same-Day Dispatch</strong> — for emergency requirements from ready stock</li>
                <li><strong>Door-to-Door</strong> — truck, tempo and courier delivery options</li>
                <li><strong>Export Ready</strong> — sea freight, air freight, packing lists, CO, MTC</li>
                <li><strong>Project-Based Phased Supply</strong> — scheduled delivery for EPC projects</li>
                <li><strong>Secure Packaging</strong> — end-cap protection, wooden crating, stretch wrap</li>
              </ul>
              <p>
                Export destinations include <strong>UAE, Oman, Bahrain, Kuwait, Saudi Arabia, UK,
                USA, South Africa, Singapore</strong> and 50+ countries. Full export documentation
                provided — Certificate of Origin, Packing List, Insurance and custom clearance support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quality Assurance ────────────────────────────────── */}
      <section style="background:var(--white);padding:5rem 0;border-top:1px solid var(--border)" aria-label="Quality assurance and documentation">
        <div class="container">
          <div class="section-head-center" style="margin-bottom:3rem">
            <span class="section-label">Quality &amp; Documentation</span>
            <h2>Quality Assurance You Can Rely On</h2>
            <p>
              Every material supplied by Creative Metal Industries comes with complete
              traceability and internationally recognised certification.
            </p>
          </div>
          <div class="about-pillars">
            {[
              { icon: "📋", title: "Mill Test Certificates",         body: "EN 10204 3.1 (mill-certified) and 3.2 (third-party countersigned) MTCs provided for all materials. Chemical composition and mechanical properties verified." },
              { icon: "🏅", title: "IBR Form III-C",                 body: "IBR certified pipes, tubes, plates and fittings for boiler, pressure vessel and steam line applications as per Indian Boiler Regulations." },
              { icon: "🧪", title: "NACE & HIC Compliance",          body: "NACE MR-0175 compliance certificates and HIC tested plates for sour service applications in refineries and gas processing plants." },
              { icon: "🔬", title: "Third-Party Inspection",         body: "Inspection by DNV, TUV Rheinland, SGS, BVIS, LRIS and any customer-nominated TPI agency. Stage-wise and final inspection reports provided." },
              { icon: "💧", title: "Hydrostatic Test Certificates",  body: "Hydraulic pressure test certificates for pipes and tubes as per relevant ASTM/ASME/IBR standards. Test pressure and duration documented." },
              { icon: "🛡️", title: "PWHT & Impact Test Reports",    body: "Post-weld heat treatment certificates and Charpy impact test reports for alloy steel and low-temperature service materials." },
            ].map(q => (
              <div class="pillar-card">
                <div class="pillar-icon-wrap"><span class="pillar-icon">{q.icon}</span></div>
                <div class="pillar-body"><h4>{q.title}</h4><p>{q.body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ──────────────────────────────────────────────── */}
      <section style="background:var(--sky2);padding:5rem 0;border-top:1px solid var(--border)" aria-label="Frequently asked questions">
        <div class="container">
          <div class="section-head-center" style="margin-bottom:3rem">
            <span class="section-label">FAQ</span>
            <h2>Frequently Asked Questions — Industrial Metal Supply</h2>
            <p>Common questions from procurement engineers, project managers and industrial buyers.</p>
          </div>
          <div style="display:flex;flex-direction:column;gap:1rem;max-width:860px;margin:0 auto">
            <For each={FAQS}>{(faq, i) => (
              <details
                style="background:var(--white);border:1px solid var(--border);border-radius:10px;padding:1.25rem 1.5rem;cursor:pointer"
                name="faq-group"
              >
                <summary style="font-weight:600;color:var(--ink);font-size:0.975rem;list-style:none;display:flex;justify-content:space-between;align-items:center;gap:1rem">
                  <span>{i() + 1}. {faq.q}</span>
                  <span style="color:var(--amber);flex-shrink:0;font-size:1.2rem">+</span>
                </summary>
                <p style="margin-top:0.875rem;color:var(--charcoal);font-size:0.9rem;line-height:1.75;border-top:1px solid var(--border);padding-top:0.875rem">
                  {faq.a}
                </p>
              </details>
            )}</For>
          </div>
        </div>
      </section>

      {/* ── Conclusion CTA ────────────────────────────────────── */}
      <section class="cta-banner" aria-label="Contact Creative Metal Industries">
        <div class="container" style="position:relative;z-index:1;text-align:center">
          <span class="section-label" style="color:rgba(255,255,255,0.8)">Get Started Today</span>
          <h2 style="color:var(--white);font-size:clamp(1.6rem,3vw,2.4rem);margin-bottom:0.75rem">
            Your Trusted Metal Trading Company in Vadodara
          </h2>
          <p style="color:rgba(255,255,255,0.85);max-width:620px;margin:0 auto 2rem;font-size:1rem;line-height:1.75">
            Ready stock of industrial metals. Immediate dispatch. PAN India and international delivery.
            IBR, NACE, MTC certified supply. Get your quote within 24 hours from Gujarat's most
            reliable <strong style="color:var(--white)">industrial metal supplier</strong>.
          </p>
          <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap">
            <a href="/#contact"          class="btn btn-white">📋 Send Enquiry →</a>
            <a href="tel:+919998280619"  class="btn btn-outline" style="border-color:rgba(255,255,255,0.6);color:var(--white)">📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619" class="btn btn-outline" style="border-color:rgba(255,255,255,0.6);color:var(--white)" target="_blank" rel="noopener">💬 WhatsApp</a>
          </div>
          <p style="margin-top:2rem;font-size:0.8rem;color:rgba(255,255,255,0.6)">
            Sunny Shah: +91 99982 80619 &nbsp;·&nbsp; Ghewar Shah: +91 98255 06110 &nbsp;·&nbsp;
            creativemetalind@gmail.com &nbsp;·&nbsp; Mon–Sat 9 AM – 7 PM IST
          </p>
        </div>
      </section>

      {/* ── Internal Links ───────────────────────────────────── */}
      <section style="background:var(--white);padding:3rem 0;border-top:1px solid var(--border)" aria-label="Explore more">
        <div class="container">
          <div class="section-head-center" style="margin-bottom:2rem">
            <span class="section-label">Explore More</span>
            <h2>Related Pages &amp; Resources</h2>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem">
            {[
              { href: "/products",                  icon: "📐", label: "Size & Weight Charts",            desc: "IS 808, IS 1239, ASTM A312 spec tables" },
              { href: "/about",                     icon: "🏭", label: "About Us",                        desc: "Our facility, team and certifications"    },
              { href: "/blog",                      icon: "📚", label: "Technical Blog",                  desc: "Guides for procurement engineers"         },
              { href: "/blog/ss-304-vs-316l",       icon: "🔬", label: "SS 304 vs 316L Guide",           desc: "Which grade for your application?"        },
              { href: "/blog/how-to-read-mtc",      icon: "📄", label: "How to Read an MTC",             desc: "EN 10204 3.1 / 3.2 explained"            },
              { href: "/blog/duplex-vs-super-duplex",icon:"⚗️", label: "Duplex 2205 vs 2507",            desc: "PREN, strength and corrosion comparison"  },
              { href: "/#contact",                  icon: "✉️", label: "Contact & Enquiry",               desc: "Send your material requirement"          },
              { href: "/#product-tabs",             icon: "🛢️", label: "Product Catalogue",              desc: "Browse our full product range"           },
            ].map(l => (
              <a
                href={l.href}
                style="display:flex;gap:0.75rem;align-items:flex-start;padding:1rem 1.25rem;border:1px solid var(--border);border-radius:8px;background:var(--sky2);transition:all 0.2s;text-decoration:none"
              >
                <span style="font-size:1.4rem;flex-shrink:0">{l.icon}</span>
                <div>
                  <strong style="font-size:0.875rem;color:var(--ink);display:block">{l.label}</strong>
                  <span style="font-size:0.78rem;color:var(--muted)">{l.desc}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
