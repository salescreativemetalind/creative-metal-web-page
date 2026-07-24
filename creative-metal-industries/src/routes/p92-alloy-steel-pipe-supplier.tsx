/**
 * /p92-alloy-steel-pipe-supplier
 * Target: "P92 alloy steel pipe supplier", "ASTM A335 P92 pipe",
 * "9Cr-1.8W-Mo-V-Nb pipe India", "ultra-supercritical boiler pipe"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade:"ASTM A335 P92", composition:"9Cr-1.8W-Mo-V-Nb", sizes:"1/2\" to 16 inch", schedule:"SCH 40–160", apps:"Ultra-supercritical boilers", ht:"N (1040-1080°C) + T (730-780°C)", stock:"Ready Stock" },
  { grade:"ASTM A213 T92", composition:"9Cr-1.8W-Mo-V-Nb", sizes:"1\" to 3\" OD", schedule:"Min Wall–Avg Wall", apps:"USC superheater/reheater tubes", ht:"N (1040-1080°C) + T (730-780°C)", stock:"Available" },
  { grade:"ASTM A234 WP92", composition:"9Cr-1.8W-Mo-V-Nb", sizes:"1/2\" to 16 inch", schedule:"SCH 40–160", apps:"Butt-weld fittings for P92", ht:"N + T (matching pipe)", stock:"Available" },
  { grade:"ASTM A182 F92", composition:"9Cr-1.8W-Mo-V-Nb", sizes:"1/2\" to 16 inch", schedule:"Class 150–2500", apps:"Forged flanges for P92 systems", ht:"N + T (matching pipe)", stock:"Available" },
  { grade:"ASTM A335 P91", composition:"9Cr-1Mo-V-Nb", sizes:"1/2\" to 24 inch", schedule:"SCH 40–XXS", apps:"Supercritical boilers, main steam", ht:"N (1040-1080°C) + T (730-780°C)", stock:"Ready Stock" },
];

const FAQS = [
  { q:"What is ASTM A335 P92 alloy steel pipe and how is it different from P91?", a:"ASTM A335 P92 (9Cr-1.8W-Mo-V-Nb-B) is an advanced 9% chromium alloy steel pipe designed for ultra-supercritical (USC) and advanced ultra-supercritical (A-USC) boiler applications. Compared to P91 (9Cr-1Mo-V-Nb), P92 replaces most of the molybdenum with tungsten (1.8% W vs 1% Mo in P91) and adds a small amount of boron. This provides approximately 20-30% higher creep rupture strength than P91 at 600-620°C, allowing thinner walls and lighter piping systems in next-generation power plants operating at steam parameters of 300+ bar and 600-620°C." },
  { q:"What temperature and pressure is P92 pipe rated for?", a:"ASTM A335 P92 pipe is designed for continuous service at temperatures up to 620°C (1148°F) and pressures exceeding 300 bar in ultra-supercritical boiler applications. At 600°C, P92 has approximately 20% higher allowable stress than P91, enabling wall thickness reductions of 15-20%. The creep rupture strength of P92 at 600°C/100,000 hours is approximately 120 MPa compared to 94 MPa for P91. This makes P92 the material of choice for next-generation 660MW and 800MW ultra-supercritical power plants being built in India." },
  { q:"What heat treatment does P92 pipe require?", a:"P92 requires precise two-stage heat treatment to develop its optimal tempered martensitic microstructure. Normalising is performed at 1040-1080°C with air cooling to below 100°C (complete martensitic transformation must be verified). Tempering follows at 730-780°C for minimum 2 hours. The exact parameters are critical — over-tempering above 780°C or under-normalising below 1040°C will produce incorrect microstructure with dramatically reduced creep life. All our P92 pipe is supplied with detailed heat treatment certificates confirming time-temperature records for both normalising and tempering cycles." },
  { q:"What are the welding challenges with P92 pipe?", a:"P92 welding is more demanding than P91 due to the tungsten and boron additions. Preheat of 200-300°C is required. After welding, the joint must cool to below 100°C (verified by thermocouple) before PWHT to ensure complete martensitic transformation. PWHT temperature is 740-770°C for minimum 2 hours — higher than P91 due to the tungsten-stabilised carbides. Matching filler metals (AWS A5.28 ER90S-G / E9015-G designation) must be used. Maximum hardness after PWHT is 265 HBW. Dissimilar metal welds (DMW) between P92 and austenitic stainless require nickel-base filler (ERNiCr-3 or ENiCrFe-3)." },
  { q:"Which mills manufacture P92 pipe and does CMI stock it?", a:"P92 is a speciality grade manufactured by premium mills including Sumitomo Metal Industries (Japan) — the world leader in P92 production, Vallourec (France/Germany), Tenaris (Italy), and NSSMC (Japan). Creative Metal Industries maintains stock of ASTM A335 P92 seamless pipe in sizes 1/2 inch to 16 inches, SCH 40 through 160, sourced primarily from Sumitomo and Vallourec. All P92 stock comes with original Mill Test Certificate per EN 10204 3.2 with witnessed inspection, complete heat treatment records, and microstructure verification report." },
  { q:"Where is P92 pipe used in Indian power plants?", a:"P92 pipe is being specified for India's next-generation ultra-supercritical (USC) power plants operating at 600°C/300 bar steam parameters. Current applications include NTPC's 800MW USC units at Darlipali and Lara, Adani Power's USC projects, and upcoming 660MW USC units by BHEL. P92 is used for main steam piping, hot reheat lines, and final superheater headers where the higher creep strength allows significant weight reduction compared to P91. As India transitions from subcritical to USC technology for improved efficiency (>45% vs 33% for subcritical), demand for P92 is growing rapidly." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"ASTM A335 P92 Alloy Steel Pipe","description":"ASTM A335 P92 (9Cr-1.8W-Mo-V-Nb) alloy steel seamless pipe for ultra-supercritical boilers and next-generation power plants. Sizes 1/2 inch to 16 inch, SCH 40–160.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"sku":"CMI-P92-PIPE","material":"9Cr-1.8W-Mo-V-Nb Alloy Steel","offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"2500","highPrice":"25000","offerCount":"80+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"18","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"},"url":"https://www.creativemetalind.com","openingHours":"Mo-Sa 09:00-18:00"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Alloy Steel Pipe","item":"https://www.creativemetalind.com/alloy-steel-pipe-supplier-india"},{"@type":"ListItem","position":3,"name":"P92 Alloy Steel Pipe Supplier","item":"https://www.creativemetalind.com/p92-alloy-steel-pipe-supplier"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function P92AlloySteelPipeSupplier() {
  return (
    <>
      <Title>P92 Alloy Steel Pipe Supplier | ASTM A335 P92 | 9Cr-1.8W | USC Boiler | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="P92 alloy steel pipe supplier India — ASTM A335 P92 (9Cr-1.8W-Mo-V-Nb) seamless pipe for ultra-supercritical boilers and next-gen power. Sizes 1/2 inch to 16 inch, SCH 40–160. Creative Metal Industries Vadodara." />
      <Link rel="canonical" href="https://www.creativemetalind.com/p92-alloy-steel-pipe-supplier" />
      <Meta property="og:title" content="P92 Alloy Steel Pipe Supplier | ASTM A335 P92 9Cr-1.8W | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="ASTM A335 P92 (9Cr-1.8W-Mo-V-Nb) seamless pipe — ultra-supercritical boilers, next-gen power. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/p92-alloy-steel-pipe-supplier" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="P92 Alloy Steel Pipe Supplier | ASTM A335 P92 | 9Cr-1.8W | CMI" />
      <Meta name="twitter:description" content="ASTM A335 P92 pipe supplier India — 9Cr-1.8W-Mo-V-Nb. Ultra-supercritical boilers. Ready stock." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — P92 Alloy Steel Pipe Supplier" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <a href="/alloy-steel-pipe-supplier-india" style={{color:"#E8821A","text-decoration":"none"}}>Alloy Steel Pipe</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>P92 Alloy Steel Pipe Supplier</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"0 0 1rem","line-height":"1.2"}}>
            P92 Alloy Steel Pipe Supplier — ASTM A335 P92 (9Cr-1.8W-Mo-V-Nb)
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is a specialist <strong>P92 alloy steel pipe supplier in India</strong> stocking ASTM A335 P92 (9Cr-1.8W-Mo-V-Nb-B) seamless pipes for ultra-supercritical (USC) boilers and next-generation power plants. P92 offers 20-30% higher creep strength than P91 at 600-620°C, enabling thinner walls and lighter piping for USC parameters (300+ bar, 600°C+). Sourced exclusively from Sumitomo (Japan) and Vallourec (France) with full material certification including microstructure verification. Ready stock 1/2" to 16", SCH 40 to 160.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>P92 Alloy Steel Pipe & Related Products — Stock List</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"800px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Grade</th><th style={{padding:"0.7rem 0.8rem"}}>Composition</th><th style={{padding:"0.7rem 0.8rem"}}>Sizes</th><th style={{padding:"0.7rem 0.8rem"}}>Schedules</th><th style={{padding:"0.7rem 0.8rem"}}>Applications</th><th style={{padding:"0.7rem 0.8rem"}}>Heat Treatment</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
            <tbody>
              {GRADES.map((g,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 0.8rem","font-weight":"700"}}>{g.grade}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.composition}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.sizes}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.schedule}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.apps}</td><td style={{padding:"0.6rem 0.8rem","font-size":"0.8rem"}}>{g.ht}</td><td style={{padding:"0.6rem 0.8rem","text-align":"center",color:g.stock==="Ready Stock"?"#16a34a":"#d97706","font-weight":"700"}}>{g.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Specifications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>P92 Pipe Specifications &amp; Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Standard",value:"ASTM A335 / ASME SA335 Grade P92"},
            {label:"Composition",value:"9Cr-1.8W-0.5Mo-V-Nb-B (Grade 92)"},
            {label:"Type",value:"Seamless alloy steel pipe (hot-finished)"},
            {label:"Size Range",value:"1/2\" to 16 inch (15NB to 400NB)"},
            {label:"Schedules",value:"SCH 40, 60, 80, 100, 120, 160"},
            {label:"Max Service Temp",value:"620°C (1148°F) continuous"},
            {label:"Heat Treatment",value:"Normalised (1040-1080°C) + Tempered (730-780°C)"},
            {label:"Creep Strength",value:"~120 MPa at 600°C/100,000h (vs 94 MPa for P91)"},
            {label:"Testing",value:"UT, Hydrostatic, Hardness ≤265 HBW, PMI, Microstructure"},
            {label:"Mills",value:"Sumitomo (Japan), Vallourec (France), NSSMC"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of ASTM A335 P92 Pipe</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {title:"USC Main Steam Lines",desc:"P92 for main steam piping in ultra-supercritical boilers operating at 600-620°C and 300+ bar pressure"},
            {title:"USC Hot Reheat Piping",desc:"Large diameter P92 pipe for hot reheat lines in 660MW and 800MW ultra-supercritical power units"},
            {title:"Final Superheater Headers",desc:"P92 thick-wall headers for highest-temperature superheater stages where P91 would require excessive wall thickness"},
            {title:"Advanced USC Development",desc:"P92 for Advanced Ultra-Supercritical (A-USC) power plant development projects targeting 650°C+ steam"},
            {title:"Next-Gen Power Projects",desc:"NTPC Darlipali, Lara and similar 800MW USC projects specifying P92 for weight-critical piping systems"},
            {title:"High-Efficiency Boilers",desc:"P92 enabling >45% thermal efficiency through higher steam parameters in modern coal-fired power plants"},
          ].map(app => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0 0 0.3rem"}}>{app.title}</p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{app.desc}</p>
            </div>
          ))}
        </div>

        {/* Why CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy P92 Alloy Steel Pipe from CMI?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>USC specialist:</strong> Dedicated inventory of P92 pipe from premium Japanese and European mills for ultra-supercritical projects</li>
          <li><strong>Premium sourcing only:</strong> Exclusively from Sumitomo (Japan) and Vallourec (France) — the world's leading P92 manufacturers</li>
          <li><strong>Full material certification:</strong> EN 10204 3.2 witnessed MTC with complete heat treatment records and microstructure verification</li>
          <li><strong>Matching system components:</strong> P92 fittings (WP92), flanges (F92), and compatible welding consumables available</li>
          <li><strong>Technical expertise:</strong> Deep knowledge of P92 heat treatment, welding challenges, DMW requirements and PWHT parameters</li>
          <li><strong>Quality assured:</strong> 100% PMI, hardness testing, and microstructure review on every pipe before dispatch</li>
          <li><strong>Project support:</strong> Material planning, staged deliveries and technical documentation for USC power plant projects</li>
          <li><strong>Competitive lead time:</strong> Stock sizes shipped within 3-5 days. Mill orders from Sumitomo in 12-16 weeks</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — P92 Alloy Steel Pipe</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need P92 Alloy Steel Pipe? Get Expert Quote Today.</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>ASTM A335 P92 (9Cr-1.8W-Mo-V-Nb). Sizes 1/2 inch to 16". SCH 40–160. Sumitomo, Vallourec. India stock.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote →</a>
          </div>
        </div>

        {/* Internal Links */}
        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/alloy-steel-pipe-supplier-india",label:"Alloy Steel Pipe Supplier India"},
            {href:"/p22-alloy-steel-pipe-supplier",label:"P22 Alloy Steel Pipe Supplier"},
            {href:"/p9-alloy-steel-pipe-supplier",label:"P9 Alloy Steel Pipe Supplier"},
            {href:"/sa-387-alloy-plate-supplier-india",label:"SA387 Alloy Plate Supplier"},
            {href:"/a691-pipe-supplier-india",label:"A691 EFW Pipe Supplier"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/p92-alloy-steel-pipe-supplier" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — P92 Alloy Steel Pipe Supplier India | ASTM A335 P92 (9Cr-1.8W-Mo-V-Nb) | Ultra-Supercritical | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
