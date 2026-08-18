/**
 * /p11-alloy-steel-pipe-supplier
 * Target: "P11 alloy steel pipe supplier", "ASTM A335 P11 pipe",
 * "1.25Cr-0.5Mo alloy pipe India", "P11 boiler pipe supplier"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade:"ASTM A335 P11", composition:"1.25Cr-0.5Mo", sizes:"1/2\" to 24 inch", schedule:"SCH 40–XXS", apps:"Boiler headers, economiser tubes", ht:"Normalised + Tempered", stock:"Ready Stock" },
  { grade:"ASTM A213 T11", composition:"1.25Cr-0.5Mo", sizes:"3/4\" to 4\" OD", schedule:"Min Wall–Avg Wall", apps:"Waterwall, economiser tubes", ht:"Normalised + Tempered", stock:"Ready Stock" },
  { grade:"ASTM A234 WP11", composition:"1.25Cr-0.5Mo", sizes:"1/2\" to 24 inch", schedule:"SCH 40–XXS", apps:"Butt-weld fittings for P11", ht:"Normalised + Tempered", stock:"Ready Stock" },
  { grade:"ASTM A182 F11", composition:"1.25Cr-0.5Mo", sizes:"1/2\" to 24 inch", schedule:"Class 150–2500", apps:"Forged flanges for P11 systems", ht:"Normalised + Tempered", stock:"Available" },
  { grade:"ASTM A387 Gr.11 Cl.2", composition:"1.25Cr-0.5Mo", sizes:"6mm to 150mm thick", schedule:"Plates", apps:"Pressure vessel shells, headers", ht:"Normalised + Tempered", stock:"Available" },
];

const FAQS = [
  { q:"What is ASTM A335 P11 alloy steel pipe used for?", a:"ASTM A335 P11 is a 1.25% chromium, 0.5% molybdenum alloy steel seamless pipe designed for elevated temperature service in power generation and process industries. The primary applications include boiler headers and stub connections, economiser inlet and outlet piping, intermediate-pressure steam piping, HRSG evaporator and superheater headers, and process piping in refineries and chemical plants operating between 400-550°C. P11 is the most widely used Cr-Mo grade in Indian thermal power plants for IBR-certified boiler piping." },
  { q:"What is the maximum temperature for P11 pipe?", a:"ASTM A335 P11 pipe has an ASME allowable stress up to 565°C (1050°F) for pressure design calculations per ASME B31.1 Power Piping. Above 565°C, the allowable stress drops significantly and higher grades like P22 (2.25Cr-1Mo) or P91 (9Cr-1Mo-V-Nb) should be considered. In practice, P11 is commonly used for headers and piping where metal temperature does not exceed 540°C. For cyclic service (frequent startups/shutdowns), many designers limit P11 to 510°C to ensure adequate fatigue life." },
  { q:"What is the difference between P11 and P22 alloy steel pipe?", a:"P11 (1.25Cr-0.5Mo) and P22 (2.25Cr-1Mo) differ in chromium content and temperature capability. P22 has nearly double the chromium of P11, providing better oxidation resistance and higher creep strength above 500°C. At 565°C, P22 has approximately 20% higher allowable stress than P11. P22 is preferred for main steam and hot reheat piping while P11 is used for lower-temperature headers, economiser piping and intermediate-pressure steam. P11 is easier to weld and has a simpler PWHT requirement (650-700°C vs 690-730°C for P22)." },
  { q:"Do you supply IBR-certified P11 pipe for boiler applications?", a:"Yes, Creative Metal Industries maintains dedicated IBR-certified stock of ASTM A335 P11 seamless pipe specifically for boiler and pressure vessel applications under Indian Boiler Regulations. We supply P11 pipe with IBR Form III-C from approved mills including ISMT India, Maharashtra Seamless, Sumitomo Japan and Vallourec France. Our IBR stock covers sizes from 1/2 inch to 24 inches in SCH 40 through XXS. Each pipe is individually marked with IBR stamp, heat number and grade, with full documentation for boiler inspector approval." },
  { q:"What welding procedure is required for P11 pipe?", a:"P11 (1.25Cr-0.5Mo) requires preheat of 150-200°C minimum before welding. Interpass temperature should be maintained at 150-300°C. Recommended filler metals are ER80S-B2 (GTAW) and E8018-B2 (SMAW) matching the 1.25Cr-0.5Mo composition. Post-weld heat treatment is mandatory at 650-700°C for minimum 1 hour per 25mm wall thickness. Maximum hardness after PWHT is 225 HBW. P11 is considered the easiest Cr-Mo grade to weld among the common P-grades, making it suitable for field welding applications." },
  { q:"What sizes of P11 pipe does CMI stock?", a:"We maintain comprehensive stock of ASTM A335 P11 seamless pipe from 1/2 inch (15NB) to 24 inches (600NB) in schedules SCH 40, 60, 80, 100, 120, 140, 160 and XXS (extra extra strong). For boiler tube applications, we stock ASTM A213 T11 from 3/4 inch to 4 inch OD. Standard random lengths 5-7 metres. We hold heavy-wall P11 stock (SCH 120 and above) specifically for boiler header and high-pressure economiser applications in BHEL and Thermax boiler projects." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"ASTM A335 P11 Alloy Steel Pipe","description":"ASTM A335 P11 (1.25Cr-0.5Mo) alloy steel seamless pipe for boiler headers, economiser tubes and IBR service. Sizes 1/2 inch to 24 inch, SCH 40–XXS. IBR Form III-C certified.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"sku":"CMI-P11-PIPE","material":"1.25Cr-0.5Mo Alloy Steel","offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"420","highPrice":"8500","offerCount":"350+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"52","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"},"url":"https://www.creativemetalind.com","openingHours":"Mo-Sa 09:00-18:00"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Alloy Steel Pipe","item":"https://www.creativemetalind.com/alloy-steel-pipe-supplier-india"},{"@type":"ListItem","position":3,"name":"P11 Alloy Steel Pipe Supplier","item":"https://www.creativemetalind.com/p11-alloy-steel-pipe-supplier"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function P11AlloySteelPipeSupplier() {
  return (
    <>
      <Title>P11 Alloy Steel Pipe Supplier | ASTM A335 P11 | IBR | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="P11 alloy steel pipe supplier India — ASTM A335 P11 (1.25Cr-0.5Mo) seamless pipe for boiler headers, economiser tubes and IBR service. Sizes 1/2 inch to 24 inch, SCH 40–XXS. IBR Form III-C certified. Creative Metal Industries Vadodara." />
      <Link rel="canonical" href="https://www.creativemetalind.com/p11-alloy-steel-pipe-supplier" />
      <Meta property="og:title" content="P11 Alloy Steel Pipe Supplier | ASTM A335 P11 1.25Cr-0.5Mo | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="ASTM A335 P11 (1.25Cr-0.5Mo) seamless pipe — boiler headers, economiser, IBR service. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/p11-alloy-steel-pipe-supplier" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="P11 Alloy Steel Pipe Supplier | ASTM A335 P11 | 1.25Cr-0.5Mo | CMI" />
      <Meta name="twitter:description" content="ASTM A335 P11 pipe supplier India — 1.25Cr-0.5Mo. Boiler headers, economiser, IBR. Ready stock." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — P11 Alloy Steel Pipe Supplier" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <a href="/alloy-steel-pipe-supplier-india" style={{color:"#E8821A","text-decoration":"none"}}>Alloy Steel Pipe</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>P11 Alloy Steel Pipe Supplier</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"0 0 1rem","line-height":"1.2"}}>
            P11 Alloy Steel Pipe Supplier — ASTM A335 P11 (1.25Cr-0.5Mo)
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is India's most trusted <strong>P11 alloy steel pipe supplier</strong> with dedicated IBR-certified stock of ASTM A335 P11 (1.25Cr-0.5Mo) seamless pipes for boiler headers, economiser piping and intermediate-pressure steam service. P11 is the backbone of Indian thermal power plant piping systems, providing reliable service up to 565°C. All pipes supplied with <strong>IBR Form III-C</strong> certification from ISMT, Maharashtra Seamless, Sumitomo and Vallourec. Ready stock 1/2" to 24", SCH 40 to XXS at our Vadodara warehouse.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>P11 Alloy Steel Pipe & Related Products — Stock List</h2>
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
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>P11 Pipe Specifications &amp; Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Standard",value:"ASTM A335 / ASME SA335 Grade P11"},
            {label:"Composition",value:"1.25% Chromium, 0.5% Molybdenum"},
            {label:"Type",value:"Seamless alloy steel pipe (hot-finished)"},
            {label:"Size Range",value:"1/2\" to 24 inch (15NB to 600NB)"},
            {label:"Schedules",value:"SCH 40, 60, 80, 100, 120, 140, 160, XXS"},
            {label:"Max Service Temp",value:"565°C (1050°F) continuous"},
            {label:"Heat Treatment",value:"Normalised (900°C) + Tempered (650°C min)"},
            {label:"Testing",value:"Hydrostatic, UT (SA-530), Hardness ≤225 HBW, PMI"},
            {label:"Certification",value:"MTC EN 10204 3.1/3.2, IBR Form III-C"},
            {label:"Mills",value:"ISMT, Maharashtra Seamless, Sumitomo, Vallourec"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of ASTM A335 P11 Pipe</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {title:"Boiler Headers & Manifolds",desc:"P11 thick-wall pipe for HP and IP headers in subcritical boilers, connecting superheater and economiser tube banks"},
            {title:"Economiser Piping",desc:"Inlet/outlet headers and connecting piping for economiser sections in coal-fired and HRSG boilers at 350-450°C"},
            {title:"Intermediate Pressure Steam",desc:"IP turbine extraction and bleed steam piping where temperatures range from 400-540°C"},
            {title:"HRSG Headers",desc:"Evaporator and low-temperature superheater headers in Heat Recovery Steam Generators"},
            {title:"Process Plant Piping",desc:"Refinery and chemical plant piping for moderate-temperature (400-540°C) elevated pressure service"},
            {title:"Deaerator & Feedwater Piping",desc:"High-pressure feedwater piping and deaerator storage vessel connections in power plants"},
          ].map(app => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0 0 0.3rem"}}>{app.title}</p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{app.desc}</p>
            </div>
          ))}
        </div>

        {/* Why CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy P11 Alloy Steel Pipe from CMI?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>Largest P11 stock in Gujarat:</strong> 200+ tonnes of IBR-certified P11 pipe from 1/2" to 24" in SCH 40 through XXS</li>
          <li><strong>IBR Form III-C ready:</strong> All P11 pipe pre-certified under Indian Boiler Regulations for immediate use in boiler projects</li>
          <li><strong>BHEL/Thermax approved:</strong> Regular supplier to India's leading boiler manufacturers and power plant EPC contractors</li>
          <li><strong>Heavy-wall specialist:</strong> SCH 120, 160 and XXS stock for high-pressure headers up to 24 inch diameter</li>
          <li><strong>Matching accessories:</strong> P11 fittings (WP11), flanges (F11), fasteners and welding consumables from single source</li>
          <li><strong>100% tested:</strong> Every pipe PMI verified, hardness tested and ultrasonically examined before dispatch</li>
          <li><strong>Same-day dispatch:</strong> Stock sizes dispatched same day from Vadodara warehouse. All-India delivery network</li>
          <li><strong>Technical support:</strong> WPS development, PWHT guidance and material selection assistance for boiler piping</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — P11 Alloy Steel Pipe</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need P11 Alloy Steel Pipe? Get IBR-Certified Quote Today.</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>ASTM A335 P11 (1.25Cr-0.5Mo). Sizes 1/2 inch to 24". SCH 40–XXS. IBR Form III-C. Ready stock India.</p>
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
            {href:"/p5-alloy-steel-pipe-supplier",label:"P5 Alloy Steel Pipe Supplier"},
            {href:"/sa-387-alloy-plate-supplier-india",label:"SA387 Alloy Plate Supplier"},
            {href:"/a106-gr-b-seamless-pipe-india",label:"A106 Gr.B Seamless Pipe"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/p11-alloy-steel-pipe-supplier" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — P11 Alloy Steel Pipe Supplier India | ASTM A335 P11 (1.25Cr-0.5Mo) | IBR Certified | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
