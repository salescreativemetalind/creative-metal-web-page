/**
 * /p22-alloy-steel-pipe-supplier
 * Target: "P22 alloy steel pipe supplier", "ASTM A335 P22 pipe",
 * "2.25Cr-1Mo alloy pipe India", "P22 main steam pipe supplier"
 */
import { Title, Meta, Link } from "@solidjs/meta";

const GRADES = [
  { grade:"ASTM A335 P22", composition:"2.25Cr-1Mo", sizes:"1/2\" to 24 inch", schedule:"SCH 40–XXS", apps:"Main steam, HRSG headers", ht:"Normalised + Tempered", stock:"Ready Stock" },
  { grade:"ASTM A213 T22", composition:"2.25Cr-1Mo", sizes:"3/4\" to 4\" OD", schedule:"Min Wall–Avg Wall", apps:"Superheater/reheater tubes", ht:"Normalised + Tempered", stock:"Ready Stock" },
  { grade:"ASTM A234 WP22", composition:"2.25Cr-1Mo", sizes:"1/2\" to 24 inch", schedule:"SCH 40–XXS", apps:"Butt-weld fittings for P22", ht:"Normalised + Tempered", stock:"Ready Stock" },
  { grade:"ASTM A182 F22", composition:"2.25Cr-1Mo", sizes:"1/2\" to 24 inch", schedule:"Class 150–2500", apps:"Forged flanges for P22 systems", ht:"Normalised + Tempered", stock:"Available" },
  { grade:"ASTM A387 Gr.22 Cl.2", composition:"2.25Cr-1Mo", sizes:"6mm to 150mm thick", schedule:"Plates", apps:"Pressure vessel shells, headers", ht:"Normalised + Tempered", stock:"Available" },
  { grade:"ASTM A691 1.25CR", composition:"2.25Cr-1Mo (EFW)", sizes:"16 inch to 60 inch", schedule:"Various WT", apps:"Large dia headers, crossover", ht:"Normalised + Tempered + PWHT", stock:"Available" },
];

const FAQS = [
  { q:"What is ASTM A335 P22 alloy steel pipe used for?", a:"ASTM A335 P22 is a 2.25% chromium, 1% molybdenum alloy steel seamless pipe designed for high-temperature, high-pressure service in power plants and refineries. Primary applications include main steam piping in subcritical boilers (up to 565°C/103 bar), hot reheat lines, HRSG superheater and evaporator headers, high-pressure boiler headers, and hydrogen service piping in refineries. P22 is the workhorse grade for Indian thermal power plants operating at subcritical parameters, widely used by BHEL, L&T and Thermax in 210MW and 500MW units." },
  { q:"What is the maximum temperature and pressure for P22 pipe?", a:"ASTM A335 P22 pipe has ASME allowable stress values up to 600°C (1112°F) per ASME B31.1 Power Piping code, though the practical design limit is typically 565°C where the allowable stress is approximately 47 MPa. For subcritical power plants (168 kg/cm² main steam pressure), P22 is used for main steam lines up to 565°C. Above this temperature, the allowable stress drops significantly and P91 (9Cr-1Mo-V-Nb) becomes the preferred choice. For HRSG applications, P22 headers typically operate at 540°C and 100-140 bar." },
  { q:"What is the difference between P22 and P91 for main steam piping?", a:"P22 (2.25Cr-1Mo) is used for subcritical main steam (≤565°C, ≤170 bar) while P91 (9Cr-1Mo-V-Nb) is required for supercritical and ultra-supercritical parameters (580-620°C, 250+ bar). At 565°C, P91 has approximately 2.5 times higher allowable stress than P22, enabling much thinner pipe walls. This reduces weight, thermal stresses during startup, and fabrication costs. However, P91 requires strict heat treatment control and experienced welders. For subcritical 500MW units in India, P22 remains the standard choice for main steam piping." },
  { q:"Do you supply IBR-certified P22 pipe for power plants?", a:"Yes, Creative Metal Industries maintains dedicated IBR-certified stock of ASTM A335 P22 seamless pipe for boiler and power plant applications. We supply P22 with IBR Form III-C from approved mills including Sumitomo (Japan), Vallourec (France), ISMT (India) and Maharashtra Seamless. Our IBR stock covers 1/2 inch to 24 inches in schedules up to XXS. Heavy-wall P22 (SCH 120-XXS) for main steam headers is a speciality. All pipes individually marked with IBR stamp, heat number and full traceability documentation for boiler inspector approval." },
  { q:"What are the welding requirements for P22 alloy steel pipe?", a:"P22 (2.25Cr-1Mo) requires preheat of 200-250°C minimum before welding. Interpass temperature maintained at 200-300°C. Filler metals: ER90S-B3 (GTAW) and E9018-B3 (SMAW). Post-weld heat treatment is mandatory at 690-730°C for minimum 1 hour per 25mm wall thickness, with heating/cooling rates not exceeding 200°C/hour above 300°C. Maximum hardness after PWHT is 241 HBW (225 HBW for sour service). Hydrogen bake-out at 300-350°C for 2 hours is recommended for thick sections before final PWHT." },
  { q:"What sizes of P22 pipe does CMI stock for main steam applications?", a:"We maintain heavy-wall stock of ASTM A335 P22 seamless pipe specifically for main steam and high-pressure header applications. Stock includes sizes from 1/2 inch (15NB) to 24 inches (600NB) in SCH 40, 60, 80, 100, 120, 140, 160 and XXS. For 500MW main steam lines, we stock P22 in 14\"-18\" x SCH 120-160. For headers, 6\"-12 inch x SCH XXS. Standard lengths 5-7 metres random. Fixed-length cutting available. All heavy-wall P22 stock maintained with IBR Form III-C for immediate deployment to power plant sites." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"ASTM A335 P22 Alloy Steel Pipe","description":"ASTM A335 P22 (2.25Cr-1Mo) alloy steel seamless pipe for main steam, HRSG and power plant applications. Sizes 1/2 inch to 24 inch, SCH 40–XXS. IBR Form III-C certified.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"sku":"CMI-P22-PIPE","material":"2.25Cr-1Mo Alloy Steel","offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"500","highPrice":"11000","offerCount":"300+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"47","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"},"url":"https://www.creativemetalind.com","openingHours":"Mo-Sa 09:00-18:00"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Alloy Steel Pipe","item":"https://www.creativemetalind.com/alloy-steel-pipe-supplier-india"},{"@type":"ListItem","position":3,"name":"P22 Alloy Steel Pipe Supplier","item":"https://www.creativemetalind.com/p22-alloy-steel-pipe-supplier"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function P22AlloySteelPipeSupplier() {
  return (
    <>
      <Title>P22 Alloy Steel Pipe Supplier | ASTM A335 P22 | 2.25Cr-1Mo | IBR | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="P22 alloy steel pipe supplier India — ASTM A335 P22 (2.25Cr-1Mo) seamless pipe for main steam, HRSG and power plant service. Sizes 1/2 inch to 24 inch, SCH 40–XXS. IBR Form III-C certified. Creative Metal Industries Vadodara." />
      <Link rel="canonical" href="https://www.creativemetalind.com/p22-alloy-steel-pipe-supplier" />
      <Meta property="og:title" content="P22 Alloy Steel Pipe Supplier | ASTM A335 P22 2.25Cr-1Mo | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="ASTM A335 P22 (2.25Cr-1Mo) seamless pipe — main steam, HRSG, power plant. IBR certified. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/p22-alloy-steel-pipe-supplier" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="P22 Alloy Steel Pipe Supplier | ASTM A335 P22 | 2.25Cr-1Mo | CMI" />
      <Meta name="twitter:description" content="ASTM A335 P22 pipe supplier India — 2.25Cr-1Mo. Main steam, HRSG, power plant. IBR Form III-C. Ready stock." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — P22 Alloy Steel Pipe Supplier" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <a href="/alloy-steel-pipe-supplier-india" style={{color:"#E8821A","text-decoration":"none"}}>Alloy Steel Pipe</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>P22 Alloy Steel Pipe Supplier</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"0 0 1rem","line-height":"1.2"}}>
            P22 Alloy Steel Pipe Supplier — ASTM A335 P22 (2.25Cr-1Mo)
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is a leading <strong>P22 alloy steel pipe supplier in India</strong> with heavy-wall IBR-certified stock of ASTM A335 P22 (2.25Cr-1Mo) seamless pipes for main steam lines, HRSG headers and power plant high-pressure piping. P22 is the primary material for subcritical power plant main steam and hot reheat piping operating up to 565°C. All pipes supplied with <strong>IBR Form III-C</strong> certification from Sumitomo, Vallourec, ISMT and Maharashtra Seamless. Ready stock 1/2" to 24", SCH 40 to XXS at our Vadodara warehouse.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>P22 Alloy Steel Pipe & Related Products — Stock List</h2>
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
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>P22 Pipe Specifications &amp; Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Standard",value:"ASTM A335 / ASME SA335 Grade P22"},
            {label:"Composition",value:"2.25% Chromium, 1% Molybdenum (2.25Cr-1Mo)"},
            {label:"Type",value:"Seamless alloy steel pipe (hot-finished)"},
            {label:"Size Range",value:"1/2\" to 24 inch (15NB to 600NB)"},
            {label:"Schedules",value:"SCH 40, 60, 80, 100, 120, 140, 160, XXS"},
            {label:"Max Service Temp",value:"600°C (1112°F) — practical limit 565°C"},
            {label:"Heat Treatment",value:"Normalised (900-930°C) + Tempered (690°C min)"},
            {label:"Testing",value:"Hydrostatic, UT (SA-530), Hardness ≤241 HBW, PMI"},
            {label:"Certification",value:"MTC EN 10204 3.1/3.2, IBR Form III-C"},
            {label:"Mills",value:"Sumitomo, Vallourec, ISMT, Maharashtra Seamless"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of ASTM A335 P22 Pipe</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {title:"Main Steam Lines",desc:"P22 heavy-wall pipe for main steam piping in subcritical boilers operating at 540-565°C and 130-170 kg/cm² pressure"},
            {title:"Hot Reheat Piping",desc:"Large diameter P22 pipe for hot reheat lines connecting boiler reheater outlet to HP/IP turbine at 540°C"},
            {title:"HRSG Superheater Headers",desc:"Thick-wall P22 headers for high-pressure superheater sections in combined cycle HRSG systems"},
            {title:"Boiler High-Pressure Headers",desc:"P22 SCH XXS pipe for HP steam headers connecting superheater banks in coal-fired boilers"},
            {title:"Power Plant Crossover Piping",desc:"P22 for HP-IP crossover and cold reheat piping in 210MW and 500MW thermal power plants"},
            {title:"Hydrogen Service (Refinery)",desc:"P22 pipe for high-temperature hydrogen service in hydrotreater and hydrocracker units (per API 941)"},
          ].map(app => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0 0 0.3rem"}}>{app.title}</p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{app.desc}</p>
            </div>
          ))}
        </div>

        {/* Why CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy P22 Alloy Steel Pipe from CMI?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>Main steam specialist:</strong> Heavy-wall P22 stock in SCH 120-XXS up to 24" for main steam and HP header applications</li>
          <li><strong>IBR Form III-C:</strong> All P22 pipe pre-certified under Indian Boiler Regulations for immediate deployment to power plant sites</li>
          <li><strong>World-class mills:</strong> Sumitomo (Japan), Vallourec (France), ISMT (India) — original MTC with full heat traceability</li>
          <li><strong>Complete P22 system:</strong> Pipe + fittings (WP22) + flanges (F22) + plates (SA387 Gr.22) from single source</li>
          <li><strong>Power plant approved:</strong> Regular supplier to BHEL, Thermax, L&T, BGR and leading boiler/EPC contractors</li>
          <li><strong>100% PMI + hardness:</strong> Every P22 pipe verified by XRF and hardness testing before dispatch</li>
          <li><strong>Competitive pricing:</strong> Direct mill procurement — no broker markup. Formal quotation within 4 hours</li>
          <li><strong>13+ years experience:</strong> Proven track record supplying P22 to India's 210MW, 500MW and 660MW power projects</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — P22 Alloy Steel Pipe</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need P22 Alloy Steel Pipe? Get IBR-Certified Quote Today.</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>ASTM A335 P22 (2.25Cr-1Mo). Sizes 1/2 inch to 24". SCH 40–XXS. IBR Form III-C. Ready stock India.</p>
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
            {href:"/p11-alloy-steel-pipe-supplier",label:"P11 Alloy Steel Pipe Supplier"},
            {href:"/p92-alloy-steel-pipe-supplier",label:"P92 Alloy Steel Pipe Supplier"},
            {href:"/sa-387-alloy-plate-supplier-india",label:"SA387 Alloy Plate Supplier"},
            {href:"/a691-pipe-supplier-india",label:"A691 EFW Pipe Supplier"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — P22 Alloy Steel Pipe Supplier India | ASTM A335 P22 (2.25Cr-1Mo) | IBR Certified | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
