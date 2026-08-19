/**
 * /api-5l-line-pipe-supplier-india
 * Target: "API 5L line pipe supplier India", "API 5L X52 pipe supplier",
 * "API 5L PSL2 pipe India", "line pipe supplier Vadodara", "API 5L X65 pipe"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade:"API 5L Gr.B PSL1", composition:"C-Mn (0.26C max, 1.20Mn)", sizes:"1/2\" to 48\"", schedule:"WT 3.2–25.4 mm", apps:"Water pipelines, low-pressure gas distribution", ht:"As-rolled / Normalised", stock:"Ready Stock" },
  { grade:"API 5L X42 PSL2", composition:"C-Mn-Si (0.22C, 1.30Mn)", sizes:"2\" to 42\"", schedule:"WT 4.8–22.2 mm", apps:"City gas distribution (CGD), PNG pipelines", ht:"Normalised / TMCP", stock:"Ready Stock" },
  { grade:"API 5L X52 PSL2", composition:"C-Mn-Nb-V (0.22C, 1.40Mn)", sizes:"4\" to 48\"", schedule:"WT 5.6–25.4 mm", apps:"Oil & gas transmission, cross-country pipelines", ht:"TMCP / Q&T", stock:"Ready Stock" },
  { grade:"API 5L X60 PSL2", composition:"C-Mn-Nb-V-Ti (0.12C, 1.60Mn)", sizes:"6\" to 48\"", schedule:"WT 6.4–25.4 mm", apps:"High-pressure gas transmission, GAIL trunk lines", ht:"TMCP", stock:"Ready Stock" },
  { grade:"API 5L X65 PSL2", composition:"C-Mn-Nb-V-Ti (0.12C, 1.65Mn)", sizes:"8\" to 48\"", schedule:"WT 7.1–31.8 mm", apps:"Offshore subsea, sour service (NACE MR0175)", ht:"TMCP / Q&T", stock:"Available" },
  { grade:"API 5L X70 PSL2", composition:"C-Mn-Nb-V-Ti-Mo (0.12C, 1.70Mn)", sizes:"12\" to 48\"", schedule:"WT 9.5–31.8 mm", apps:"High-pressure long-distance gas transmission", ht:"TMCP", stock:"Available" },
  { grade:"ASTM A106 Gr.B (related)", composition:"C-Mn (0.30C max)", sizes:"1/2\" to 24\"", schedule:"SCH 40–XXS", apps:"High-temp process piping, plant piping", ht:"Hot-finished / Normalised", stock:"Ready Stock" },
];

const FAQS = [
  { q:"What is API 5L line pipe and what is it used for?", a:"API 5L is the international specification (American Petroleum Institute) for seamless and welded steel line pipe used in pipeline transportation systems for oil, natural gas and water. It covers grades from Gr.B (low carbon) to X80 (high-strength micro-alloyed). API 5L pipe is used for crude oil transmission, natural gas trunk lines, CGD (city gas distribution), water pipelines, refinery interconnect piping, and cross-country pipelines. In India, API 5L is specified by GAIL, ONGC, IOC, Reliance, Petronet LNG and all CGD operators including Adani Gas, Mahanagar Gas and Gujarat Gas." },
  { q:"What is the difference between PSL1 and PSL2 in API 5L?", a:"PSL1 (Product Specification Level 1) is a standard quality level with basic requirements for chemical composition, mechanical properties and testing. PSL2 is a higher quality level with mandatory carbon equivalent limits (CE/Pcm), impact testing (Charpy V-notch at specified temperature), additional NDT requirements, and tighter chemical limits. PSL2 also requires traceability to individual pipe level. For sour service (H2S environments), PSL2 with NACE MR0175/ISO 15156 compliance is mandatory. Most GAIL, ONGC and oil company projects in India specify PSL2 for critical service." },
  { q:"How to choose between API 5L X42, X52 and X65 grades?", a:"Grade selection depends on operating pressure, pipe diameter and service environment. X42 PSL2 is standard for city gas distribution (CGD) and medium-pressure lines (up to 70 bar). X52 PSL2 is the workhorse grade for cross-country oil and gas pipelines at 70-100 bar. X65 PSL2 is used for high-pressure gas transmission (above 100 bar) and offshore/subsea where wall thickness reduction is needed. X65/X70 with NACE compliance is specified for sour service. Higher grades allow thinner walls, reducing material cost and welding time, but require TMCP processing and stricter quality control." },
  { q:"What sizes of API 5L line pipe does Creative Metal Industries stock?", a:"We stock API 5L line pipe from 1/2 inch (15mm OD) to 48 inches (1219mm OD) in both seamless and welded (ERW/LSAW/SSAW) types. Seamless sizes: 1/2\" to 16\" in Gr.B, X42, X52. LSAW/ERW sizes: 16\" to 48\" in X42, X52, X60, X65, X70. Wall thickness from 3.2mm to 31.8mm. Standard pipe lengths: 6 metres (single random) and 12 metres (double random). Our stock covers GAIL CGD specifications, ONGC pipeline requirements and general industrial applications. Indent orders for non-stock sizes with 4-6 week delivery." },
  { q:"What is the price range of API 5L pipe in India?", a:"API 5L pipe prices in India range from Rs 80/kg to Rs 400/kg depending on grade, size, type (seamless vs welded), PSL level and coating requirements. Gr.B PSL1 ERW pipe starts around Rs 80-100/kg for standard sizes. X52 PSL2 seamless ranges from Rs 120-200/kg. X65/X70 PSL2 with 3LPE coating and NACE compliance can go up to Rs 300-400/kg. Prices vary with international steel market, mill origin, quantity and additional requirements (HIC/SSC testing, special coating). Contact us for current pricing — we provide formal quotations within 4 hours with validity." },
  { q:"What testing and documentation is provided with API 5L pipe?", a:"API 5L PSL2 pipe is supplied with: Mill Test Certificate per EN 10204 3.2 (with third-party witness), hydrostatic test certificate, chemical analysis (ladle + product), tensile test (longitudinal + transverse), Charpy impact test at specified temperature (0°C or -20°C), hardness test (HRC ≤22 for sour service), NDT reports (UT for seamless, UT + RT for welded), dimensional inspection report, and coating inspection report (for 3LPE/3LPP/FBE). For sour service: HIC test per NACE TM0284 and SSC test per NACE TM0177. OISD-206 compliance certificate for petroleum industry pipelines in India." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/api-5l-line-pipe-supplier-india#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries","telephone":"+919998280619","email":"creativemetalind@gmail.com","address":{"@type":"PostalAddress","streetAddress":"F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road, Sultanpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"},"url":"https://www.creativemetalind.com","openingHours":"Mo-Sa 09:00-18:00"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Carbon Steel Pipe","item":"https://www.creativemetalind.com/carbon-steel-pipe-fittings-vadodara"},{"@type":"ListItem","position":3,"name":"API 5L Line Pipe Supplier India","item":"https://www.creativemetalind.com/api-5l-line-pipe-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function API5lLinePipeSupplierIndia() {
  return (
    <>
      <Title>API 5L Line Pipe Supplier India | X52 X60 X65 PSL2 | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="API 5L line pipe supplier India — PSL1 &amp; PSL2, grades Gr.B to X70. Seamless, ERW, LSAW. Sizes 1/2&quot; to 48&quot;. 3LPE/FBE coating. NACE MR0175." />
      <Link rel="canonical" href="https://www.creativemetalind.com/api-5l-line-pipe-supplier-india" />
      <Meta property="og:title" content="API 5L Line Pipe Supplier India | PSL2 X52 X60 X65 | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="API 5L line pipe supplier India — PSL1 &amp; PSL2, Gr.B to X70. Seamless &amp; welded. NACE compliant. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/api-5l-line-pipe-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="API 5L Line Pipe Supplier India | X52 X60 X65 PSL2 | CMI" />
      <Meta name="twitter:description" content="API 5L line pipe — PSL2 X52, X60, X65, X70. NACE/HIC/SSC. Jindal SAW, Welspun. Ready stock." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      {/* Nav */}
      <nav style="background:#1f2937;position:sticky;top:0;z-index:50;border-bottom:1px solid #374151;padding:0.75rem 1.5rem;display:flex;align-items:center;gap:1rem">
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — API 5L Line Pipe Supplier India" width="140" height="71" /></a>
        <div style="flex:1;display:flex;gap:1.5rem;align-items:center">
          <a href="/" style="color:#d1d5db;text-decoration:none;font-size:0.85rem;font-weight:500">Home</a>
          <a href="/about" style="color:#d1d5db;text-decoration:none;font-size:0.85rem;font-weight:500">About</a>
          <a href="/blog" style="color:#d1d5db;text-decoration:none;font-size:0.85rem;font-weight:500">Blog</a>
        </div>
        <a href="tel:+919998280619" style="background:#E8821A;color:#fff;padding:0.5rem 1.2rem;border-radius:6px;font-weight:700;font-size:0.85rem;text-decoration:none">📞 +91 99982 80619</a>
      </nav>

      {/* Breadcrumb */}
      <div style="background:#f9fafb;border-bottom:1px solid #e5e7eb;padding:0.6rem 1.5rem;font-size:0.82rem;color:#6b7280">
        <a href="/" style="color:#E8821A;text-decoration:none">Home</a><span style="margin:0 0.5rem">{"\u203A"}</span>
        <a href="/carbon-steel-pipe-fittings-vadodara" style="color:#E8821A;text-decoration:none">Carbon Steel Pipe</a><span style="margin:0 0.5rem">{"\u203A"}</span>
        <span>API 5L Line Pipe Supplier India</span>
      </div>

      <main style="max-width:960px;margin:0 auto;padding:3rem 1.5rem">

        {/* Hero */}
        <div style="background:linear-gradient(135deg,#1f2937 0%,#111827 100%);border-radius:16px;padding:3rem 2rem;text-align:center;margin-bottom:3rem">
          <h1 style="font-size:clamp(1.8rem,4vw,2.6rem);font-weight:800;color:#fff;margin:0 0 1rem;line-height:1.2">
            API 5L Line Pipe Supplier India — PSL1 &amp; PSL2
          </h1>
          <p style="font-size:1.05rem;color:#d1d5db;line-height:1.8;max-width:750px;margin:0 auto 1.5rem">
            Creative Metal Industries is India's trusted <strong style="color:#E8821A">API 5L line pipe supplier</strong> with deep stock of PSL1 and PSL2 grades from Gr.B to X70. Seamless, ERW, LSAW and SSAW line pipe for oil & gas transmission, CGD networks, water pipelines and refinery interconnects. NACE MR0175 compliant for sour service. Sourced from GAIL/ONGC-approved mills — Jindal SAW, ISMT, Welspun, Ratnamani and SAIL. Ready stock at Vadodara with pan-India delivery.
          </p>
          <p style="font-size:1.3rem;font-weight:800;color:#E8821A;margin:0 0 1.5rem">Rs 80 – 400/kg <span style="font-size:0.85rem;font-weight:400;color:#9ca3af">(depending on grade, size & coating)</span></p>
          <a href="tel:+919998280619" style="display:inline-block;background:#E8821A;color:#fff;padding:0.9rem 2rem;border-radius:8px;font-weight:700;font-size:1rem;text-decoration:none">Get Instant Quote — Call Now</a>
        </div>

        {/* Grade Table */}
        <h2 style="font-size:1.4rem;font-weight:700;color:#111827;margin:2.5rem 0 1rem;border-bottom:2px solid #E8821A;padding-bottom:0.5rem">API 5L Line Pipe Grades — Ready Stock India</h2>
        <div style="overflow:auto;border:1px solid #e5e7eb;border-radius:10px;margin-bottom:2rem">
          <table style="width:100%;border-collapse:collapse;font-size:0.85rem;min-width:900px">
            <thead><tr style="background:linear-gradient(135deg,#E8821A,#d85c2a);color:#fff"><th style="padding:0.7rem 0.8rem;text-align:left">Grade</th><th style="padding:0.7rem 0.8rem">Composition</th><th style="padding:0.7rem 0.8rem">Sizes</th><th style="padding:0.7rem 0.8rem">Wall Thickness</th><th style="padding:0.7rem 0.8rem">Applications</th><th style="padding:0.7rem 0.8rem">Condition</th><th style="padding:0.7rem 0.8rem">Stock</th></tr></thead>
            <tbody>
              {GRADES.map((g, i) => (
                <tr style={{"background": i % 2 === 0 ? "#fff" : "#f9fafb"}}><td style="padding:0.6rem 0.8rem;font-weight:700">{g.grade}</td><td style="padding:0.6rem 0.8rem">{g.composition}</td><td style="padding:0.6rem 0.8rem">{g.sizes}</td><td style="padding:0.6rem 0.8rem">{g.schedule}</td><td style="padding:0.6rem 0.8rem">{g.apps}</td><td style="padding:0.6rem 0.8rem;font-size:0.8rem">{g.ht}</td><td style={{"padding":"0.6rem 0.8rem","text-align":"center","color": g.stock === "Ready Stock" ? "#16a34a" : "#d97706","font-weight":"700"}}>{g.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Technical Specs Grid */}
        <h2 style="font-size:1.4rem;font-weight:700;color:#111827;margin:2.5rem 0 1rem;border-bottom:2px solid #E8821A;padding-bottom:0.5rem">Technical Specifications — API 5L Line Pipe</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1rem;margin-bottom:2rem">
          {[
            {label:"Standard", value:"API 5L 46th Edition (ISO 3183)"},
            {label:"Manufacturing", value:"Seamless / ERW / LSAW / SSAW"},
            {label:"Size Range", value:"1/2\" to 48\" (15mm to 1219mm OD)"},
            {label:"Grades", value:"Gr.B, X42, X46, X52, X56, X60, X65, X70, X80"},
            {label:"Product Specification Level", value:"PSL1 (standard) & PSL2 (enhanced)"},
            {label:"Coating", value:"3LPE / 3LPP / FBE / Bare / Coal Tar Enamel"},
            {label:"Testing", value:"Hydrostatic / UT / RT (radiography for weld seam)"},
            {label:"End Finish", value:"Beveled (30°) / Plain End / Threaded (small dia)"},
            {label:"Mill Sources", value:"Jindal SAW / ISMT / Welspun / Ratnamani / SAIL"},
            {label:"Length", value:"6 metres (SRL) / 12 metres (DRL)"},
            {label:"Certification", value:"OISD-206 / IBR / NACE MR0175 / ISO 15156"},
            {label:"Application", value:"Oil & gas pipelines / Water / CGD / Refinery"},
          ].map(s => (
            <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:1rem">
              <span style="font-size:0.78rem;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em">{s.label}</span>
              <p style="font-size:0.92rem;font-weight:700;color:#111827;margin:0.25rem 0 0">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications Grid */}
        <h2 style="font-size:1.4rem;font-weight:700;color:#111827;margin:2.5rem 0 1rem;border-bottom:2px solid #E8821A;padding-bottom:0.5rem">Applications of API 5L Line Pipe</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1rem;margin-bottom:2rem">
          {[
            {title:"Oil & Gas Transmission", desc:"X52/X60/X65 PSL2 for crude oil and natural gas trunk pipelines operated by GAIL, ONGC, IOC and Reliance. High-pressure service up to 100+ bar with 3LPE coating."},
            {title:"City Gas Distribution (CGD/PNG)", desc:"X42/X52 PSL2 for CGD networks — steel trunk lines and PE transition. Specified by Adani Gas, Gujarat Gas, Mahanagar Gas and IGL for piped natural gas distribution."},
            {title:"Water Pipeline", desc:"Gr.B/X42 PSL1 for potable water transmission, irrigation pipelines and water supply schemes. Cement mortar lined (CML) or epoxy coated for corrosion protection."},
            {title:"Refinery Process Piping", desc:"Gr.B/X42 for refinery interconnect piping, tank farm connections and process lines within petroleum refineries and petrochemical complexes. OISD-206 compliance."},
            {title:"Cross-Country Pipeline", desc:"X60/X65 PSL2 LSAW pipe for long-distance cross-country pipelines. NACE MR0175 for sour gas service. Used in Petronet LNG trunk lines and GAIL national grid."},
            {title:"Offshore & Subsea", desc:"X65/X70 PSL2 with enhanced requirements — HIC/SSC tested, NACE compliant, 3LPP coated. For offshore platform riser pipes, subsea tie-backs and jacket legs."},
          ].map(app => (
            <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:1.25rem">
              <p style="font-size:0.95rem;font-weight:700;color:#111827;margin:0 0 0.4rem">{app.title}</p>
              <p style="font-size:0.83rem;color:#6b7280;margin:0;line-height:1.6">{app.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Choose CMI */}
        <h2 style="font-size:1.4rem;font-weight:700;color:#111827;margin:2.5rem 0 1rem;border-bottom:2px solid #E8821A;padding-bottom:0.5rem">Why Choose CMI as Your API 5L Line Pipe Supplier in India?</h2>
        <ul style="font-size:0.92rem;color:#374151;line-height:1.9;margin-bottom:2rem;padding-left:1.25rem">
          <li><strong>API 5L certified mills:</strong> Direct supply from GAIL/ONGC-approved manufacturers — Jindal SAW, Welspun, ISMT, Ratnamani, Maharashtra Seamless and SAIL. Original MTC with full heat traceability.</li>
          <li><strong>PSL2 with NACE/HIC/SSC:</strong> Complete range of sour service pipe with HIC testing per NACE TM0284 and SSC testing per NACE TM0177. ISO 15156 compliant for H2S environments.</li>
          <li><strong>Deep stock for CGD projects:</strong> Dedicated inventory of X42 and X52 PSL2 for city gas distribution projects — fast delivery for CGD operators across India.</li>
          <li><strong>Complete size range:</strong> From 1/2" seamless to 48" LSAW — single source for entire pipeline project requirements. Both SRL (6m) and DRL (12m) lengths.</li>
          <li><strong>Coating coordination:</strong> We coordinate 3LPE, 3LPP and FBE coating from approved coating plants. Complete supply of coated pipe with DFT reports and holiday test certificates.</li>
          <li><strong>Competitive pricing:</strong> Bulk buying from mills plus lean operations = best rates. Rs 80-400/kg depending on grade and requirements. Formal quotation within 4 hours.</li>
        </ul>

        {/* FAQ Accordion */}
        <h2 style="font-size:1.4rem;font-weight:700;color:#111827;margin:2.5rem 0 1rem;border-bottom:2px solid #E8821A;padding-bottom:0.5rem">Frequently Asked Questions — API 5L Line Pipe India</h2>
        <div style="display:flex;flex-direction:column;gap:0.75rem;margin-bottom:3rem">
          {FAQS.map(f => (
            <details style="background:#fff;border:1px solid #e5e7eb;border-radius:10px;padding:1rem 1.25rem"><summary style="font-weight:700;font-size:0.92rem;color:#111827;cursor:pointer">{f.q}</summary><p style="font-size:0.88rem;color:#374151;line-height:1.7;margin-top:0.6rem;margin-bottom:0">{f.a}</p></details>
          ))}
        </div>

        {/* CTA Section */}
        <div style="background:linear-gradient(135deg,#1f2937,#111827);border-radius:12px;padding:2.5rem;text-align:center;margin-bottom:2rem">
          <h2 style="color:#fff;font-size:1.4rem;font-weight:800;margin-bottom:0.6rem">Need API 5L Line Pipe? Get Best Price Today.</h2>
          <p style="color:rgba(255,255,255,0.85);margin-bottom:1.25rem;font-size:0.95rem">PSL1 & PSL2. Gr.B to X70. Seamless & Welded. 3LPE/FBE coated. NACE compliant. Ready stock India.</p>
          <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap">
            <a href="tel:+919998280619" style="background:#E8821A;color:#fff;font-weight:800;padding:0.75rem 1.5rem;border-radius:8px;text-decoration:none;font-size:0.95rem">📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style="background:#25D366;color:#fff;font-weight:800;padding:0.75rem 1.5rem;border-radius:8px;text-decoration:none;font-size:0.95rem">💬 WhatsApp</a>
            <a href="mailto:creativemetalind@gmail.com" style="background:rgba(255,255,255,0.1);color:#fff;border:2px solid rgba(255,255,255,0.4);font-weight:700;padding:0.75rem 1.5rem;border-radius:8px;text-decoration:none;font-size:0.95rem">✉️ Email Quote Request</a>
          </div>
        </div>

        {/* Related Products Grid */}
        <h3 style="font-size:1rem;font-weight:700;color:#111827;margin-bottom:0.75rem">Related Products</h3>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:0.75rem;margin-bottom:2rem">
          {[
            {href:"/a106-gr-b-seamless-pipe-india", label:"A106 Gr.B Seamless Pipe"},
            {href:"/a53-erw-pipe-supplier-india", label:"A53 ERW Pipe Supplier"},
            {href:"/api-5ct-casing-tubing-india", label:"API 5CT Casing & Tubing"},
            {href:"/carbon-steel-pipe-fittings-vadodara", label:"Carbon Steel Pipe & Fittings"},
            {href:"/alloy-steel-pipe-supplier-india", label:"Alloy Steel Pipe Supplier"},
            {href:"/a333-low-temp-pipe-supplier", label:"A333 Low Temp Pipe"},
            {href:"/a691-pipe-supplier-india", label:"A691 LSAW Pipe Supplier"},
            {href:"/a358-welded-pipe-supplier-india", label:"A358 Welded Pipe Supplier"},
          ].map(l => (
            <a href={l.href} style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:0.75rem 1rem;font-size:0.85rem;font-weight:600;color:#E8821A;text-decoration:none">{l.label} →</a>
          ))}
        </div>

        <RelatedPages currentPath="/api-5l-line-pipe-supplier-india" />
      </main>

      {/* Footer */}
      <footer style="background:#111827;color:#9ca3af;padding:2rem 1.5rem;text-align:center;font-size:0.82rem">
        <p><strong style="color:#fff">Creative Metal Industries</strong> — API 5L Line Pipe Supplier India | PSL2 X52 X60 X65 | NACE | Vadodara, Gujarat</p>
        <p style="margin-top:0.5rem"><a href="tel:+919998280619" style="color:#E8821A">+91 99982 80619</a> · <a href="mailto:creativemetalind@gmail.com" style="color:#E8821A">creativemetalind@gmail.com</a> · F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001</p>
        <p style="margin-top:0.5rem"><a href="/privacy-policy" style="color:#9ca3af">Privacy Policy</a> · <a href="/terms" style="color:#9ca3af">Terms</a> · <a href="/sitemap" style="color:#9ca3af">Sitemap</a></p>
      </footer>
    </>
  );
}
