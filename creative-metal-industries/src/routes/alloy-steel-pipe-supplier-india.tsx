/**
 * /alloy-steel-pipe-supplier-india
 * Target: "alloy steel pipe supplier India", "ASTM A335 P91 pipe supplier",
 * "alloy steel seamless pipe India", "P22 P11 pipe supplier"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade:"ASTM A335 P5", composition:"5Cr-0.5Mo", sizes:"1/2\" to 24\"", schedule:"SCH 40–XXS", apps:"Crude distillation, heaters", ht:"Normalised + Tempered", stock:"Ready Stock" },
  { grade:"ASTM A335 P9", composition:"9Cr-1Mo", sizes:"1/2\" to 16\"", schedule:"SCH 40–160", apps:"Heater tubes, superheaters", ht:"Normalised + Tempered", stock:"Available" },
  { grade:"ASTM A335 P11", composition:"1.25Cr-0.5Mo", sizes:"1/2\" to 24\"", schedule:"SCH 40–XXS", apps:"Boiler tubes, headers, piping", ht:"Normalised + Tempered", stock:"Ready Stock" },
  { grade:"ASTM A335 P12", composition:"1Cr-0.5Mo", sizes:"1/2\" to 16\"", schedule:"SCH 40–160", apps:"Superheater tubes, headers", ht:"Normalised + Tempered", stock:"Available" },
  { grade:"ASTM A335 P22", composition:"2.25Cr-1Mo", sizes:"1/2\" to 24\"", schedule:"SCH 40–XXS", apps:"Main steam, HRSG, headers", ht:"Normalised + Tempered", stock:"Ready Stock" },
  { grade:"ASTM A335 P91", composition:"9Cr-1Mo-V-Nb", sizes:"1/2\" to 24\"", schedule:"SCH 40–XXS", apps:"USC boilers, main steam, HRSG", ht:"Normalised (1040-1080°C) + Tempered (730-780°C)", stock:"Ready Stock" },
  { grade:"ASTM A335 P92", composition:"9Cr-1.8W-Mo-V-Nb", sizes:"1/2\" to 16\"", schedule:"SCH 40–160", apps:"Ultra-supercritical boilers", ht:"Normalised + Tempered", stock:"Available" },
];

const FAQS = [
  { q:"What is the difference between P91 and P22 alloy steel pipe?", a:"P91 (9Cr-1Mo-V-Nb) has higher creep strength than P22 (2.25Cr-1Mo), allowing thinner walls and lighter piping systems at the same temperature and pressure. P91 is used for main steam lines in supercritical and ultra-supercritical power plants (up to 600°C). P22 is used for lower-temperature headers and HRSG piping (up to 565°C). P91 requires strict heat treatment control — normalise at 1040-1080°C followed by temper at 730-780°C." },
  { q:"What is IBR certification for alloy steel pipe?", a:"IBR (Indian Boiler Regulations) certification is mandatory for pipes used in boilers and pressure vessels in India. IBR Form III-C is the material manufacturer certificate confirming the pipe meets IBR requirements. It includes chemical composition, mechanical properties, heat treatment, and NDT results. Only IBR-approved manufacturers can issue Form III-C. We supply all P-grades with valid IBR Form III-C documentation." },
  { q:"Which mills manufacture ASTM A335 alloy steel pipe?", a:"We source from world-class mills: Sumitomo Metal Industries (Japan) — premium P91/P92; Vallourec (France/Germany) — P91, P22, P11; ISMT India — P11, P22, P5, P9; Chelpipe (Russia); Maharashtra Seamless; and Jindal SAW. All pipes come with original Mill Test Certificate (MTC) per EN 10204 3.1/3.2 with full heat traceability." },
  { q:"What sizes of alloy steel pipe do you stock?", a:"We stock ASTM A335 alloy steel seamless pipe from 1/2 inch (15NB) to 24 inches (600NB) in schedules SCH 40, 60, 80, 100, 120, 140, 160 and XXS. Standard random lengths 5-7 metres. Fixed length and cut-to-length available. For P91 and P22, we maintain heavy-wall stock up to SCH XXS for main steam applications." },
  { q:"Why does P91 pipe require special heat treatment?", a:"P91 (9Cr-1Mo-V-Nb) derives its superior creep strength from a precise tempered martensitic microstructure formed by normalising at 1040-1080°C (air cooled to below 100°C) followed by tempering at 730-780°C. Incorrect heat treatment — over-tempering, under-normalising, or improper cooling — produces ferrite/bainite instead of martensite, drastically reducing creep life. All our P91 pipe is supplied with heat treatment certificates confirming N+T parameters." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/alloy-steel-pipe-supplier-india#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries","telephone":"+919998280619","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Alloy Steel Pipe Supplier India","item":"https://www.creativemetalind.com/alloy-steel-pipe-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function AlloySteelPipeSupplierIndia() {
  return (
    <>
      <Title>Alloy Steel Pipe Supplier India | P91 P22 P11 | IBR | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Alloy steel pipe supplier India — ASTM A335 P91, P22, P11, P5, P9, P92 seamless pipes for power plants and boilers. IBR Form III-C certified." />
      <Link rel="canonical" href="https://www.creativemetalind.com/alloy-steel-pipe-supplier-india" />
      <Meta property="og:title" content="Alloy Steel Pipe Supplier India | ASTM A335 P91, P22, P11 | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Alloy steel pipe supplier India — ASTM A335 P91, P22, P11. IBR certified. Sumitomo, Vallourec, ISMT. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/alloy-steel-pipe-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Alloy Steel Pipe Supplier India | P91 P22 P11 | IBR | CMI" />
      <Meta name="twitter:description" content="Alloy steel pipe supplier India — P91, P22, P11. ASTM A335. IBR Form III-C. Ready stock Vadodara." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Alloy Steel Pipe Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Alloy Steel Pipe Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"0 0 1rem","line-height":"1.2"}}>
            Alloy Steel Pipe Supplier in India — ASTM A335 P91, P22, P11
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is India's trusted <strong>alloy steel pipe supplier</strong> stocking ASTM A335 seamless pipes in all P-grades — P5, P9, P11, P12, P22, P91 and P92. These chrome moly (Cr-Mo) alloy steel pipes — often called chrome-moly pipe — are engineered for high-temperature, high-pressure service in power plant boilers, superheaters, main steam lines and HRSG systems. All pipes supplied with <strong>IBR Form III-C</strong> certification, sourced from world-class mills including Sumitomo (Japan), Vallourec (France) and ISMT (India). Ready stock at our Vadodara warehouse with same-day dispatch across India.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Alloy Steel Pipe Grades — ASTM A335 Ready Stock India</h2>
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
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Specifications &amp; Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Standard",value:"ASTM A335 / SA335 (ASME equivalent)"},
            {label:"Type",value:"Seamless alloy steel pipe (hot-finished)"},
            {label:"Size Range",value:"1/2\" to 24\" (15NB to 600NB)"},
            {label:"Schedules",value:"SCH 40, 60, 80, 100, 120, 140, 160, XXS"},
            {label:"Heat Treatment",value:"Normalised + Tempered (mandatory for all grades)"},
            {label:"Testing",value:"Hydrostatic, UT (ASME SA-530), Hardness, PMI"},
            {label:"Certification",value:"MTC EN 10204 3.1/3.2, IBR Form III-C"},
            {label:"Mills",value:"Sumitomo, Vallourec, ISMT, Maharashtra Seamless, Jindal"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* IBR Section */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>IBR Certification — What You Need to Know</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>
            <strong>Indian Boiler Regulations (IBR)</strong> mandate that all materials used in boiler construction and pressure piping must be certified under IBR. For alloy steel pipes, this means:
          </p>
          <ul style={{"font-size":"0.9rem",color:"#374151","line-height":"1.8","padding-left":"1.25rem"}}>
            <li><strong>Form III-C:</strong> Material manufacturer certificate — confirms chemical, mechanical, heat treatment and NDT compliance</li>
            <li><strong>Approved Mills:</strong> Only IBR-approved manufacturers (Sumitomo, Vallourec, ISMT, MSL) can issue valid Form III-C</li>
            <li><strong>Traceability:</strong> Every pipe marked with heat number, grade, size, schedule and IBR stamp</li>
            <li><strong>Inspection:</strong> Subject to inspection by IBR-authorised inspectors before use in boiler service</li>
            <li><strong>Mandatory for:</strong> Main steam lines, superheater/reheater tubes, headers, economiser tubes in thermal power plants</li>
          </ul>
          <p style={{"font-size":"0.9rem",color:"#374151","line-height":"1.8","margin-top":"1rem"}}>
            We maintain dedicated IBR-certified stock of P11, P22 and P91 pipes at our Vadodara warehouse for immediate dispatch to power plant projects.
          </p>
        </div>

        {/* P91 Section */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>ASTM A335 P91 Pipe — Grade Focus</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"2rem"}}>
          Among the chrome-moly range, <strong>P91 pipe</strong> (9Cr-1Mo-V-Nb) is the workhorse of modern supercritical and ultra-supercritical boilers. Its high creep strength allows thinner, lighter main steam lines and headers at temperatures up to 600°C. P91 owes its performance to a precise tempered-martensitic microstructure — normalised at 1040-1080°C then tempered at 730-780°C — so correct heat treatment is critical. We hold IBR-certified <strong>ASTM A335 P91</strong> seamless pipe in heavy-wall schedules up to XXS, each supplied with heat treatment certificates and PMI verification. For deeper metallurgy, see our <a href="/blog/p91-alloy-steel-guide" style={{color:"#E8821A","text-decoration":"underline"}}>P91 alloy steel guide</a>.
        </p>

        {/* Why Choose CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Choose CMI as Your Alloy Steel Pipe Supplier in India?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>IBR-ready stock:</strong> Dedicated inventory of P11, P22 and P91 with IBR Form III-C at our Vadodara warehouse</li>
          <li><strong>World-class mills:</strong> Authorised stockist for Sumitomo (Japan), Vallourec (France), ISMT (India) — guaranteed authenticity</li>
          <li><strong>Full P-grade range:</strong> P5, P9, P11, P12, P22, P91, P92 — single source for complete power plant piping</li>
          <li><strong>Heavy-wall specialist:</strong> SCH 120, 160, XXS in P91 and P22 for main steam and high-pressure headers</li>
          <li><strong>Technical expertise:</strong> Our team understands P91 heat treatment, PWHT requirements and creep considerations</li>
          <li><strong>PMI + hardness verified:</strong> 100% PMI and hardness testing on every pipe before dispatch (critical for P91)</li>
          <li><strong>Competitive pricing:</strong> Direct mill sourcing — no broker markup. Formal quotation within 4 hours</li>
          <li><strong>Since 2012:</strong> 13+ years supplying India's thermal power plants, boiler manufacturers and EPC contractors</li>
        </ul>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of Alloy Steel Pipe</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {title:"Main Steam Lines",desc:"P91 and P22 pipes for high-pressure main steam piping in supercritical and subcritical boilers"},
            {title:"Superheater / Reheater Tubes",desc:"P11, P22, P91 for superheater and reheater tube banks operating at 540-600°C"},
            {title:"Boiler Headers",desc:"P22 and P91 thick-wall pipes for high-pressure steam headers and manifolds"},
            {title:"HRSG Piping",desc:"P11 and P22 for Heat Recovery Steam Generator piping in combined cycle plants"},
            {title:"Petrochemical Heaters",desc:"P5 and P9 for crude oil heater tubes and furnace piping in refineries"},
            {title:"Process Piping",desc:"P11 for high-temperature process piping in chemical plants and fertilizer units"},
          ].map(app => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0 0 0.3rem"}}>{app.title}</p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{app.desc}</p>
            </div>
          ))}
        </div>

        {/* Industries */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Supply Alloy Steel Pipe To</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(220px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[{icon:"\u26A1",name:"Thermal Power Plants"},{icon:"\u{1F6E2}\uFE0F",name:"Oil & Gas Refineries"},{icon:"\u{1F3ED}",name:"Petrochemical Plants"},{icon:"\u{1F331}",name:"Fertilizer Industry"},{icon:"\u2699\uFE0F",name:"Boiler Manufacturers"},{icon:"\u{1F525}",name:"Furnace & Heat Treatment"},{icon:"\u{1F4A8}",name:"Combined Cycle / HRSG"},{icon:"\u{1F3D7}\uFE0F",name:"EPC Contractors"}].map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem","text-align":"center"}}>
              <span style={{"font-size":"1.3rem"}}>{ind.icon}</span>
              <p style={{"font-size":"0.85rem","font-weight":"600",color:"#111827",margin:"0.3rem 0 0"}}>{ind.name}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Alloy Steel Pipe India</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Alloy Steel Pipe? Get IBR-Certified Quote Today.</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>ASTM A335 P91, P22, P11. IBR Form III-C. Sumitomo, Vallourec, ISMT. Ready stock India.</p>
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
            {href:"/duplex-steel-supplier-vadodara",label:"Duplex Steel Supplier Vadodara"},
            {href:"/blog/p91-alloy-steel-guide",label:"P91 Alloy Steel Complete Guide"},
            {href:"/carbon-steel-pipe-fittings-vadodara",label:"Carbon Steel Pipe & Fittings"},
            {href:"/blog/carbon-steel-pipe-guide",label:"Carbon Steel Pipe Guide"},
            {href:"/ss-seamless-pipe-supplier-india",label:"SS Seamless Pipe India"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>

        <RelatedPages currentPath="/alloy-steel-pipe-supplier-india" />
      </main>
    </>
  );
}
