/**
 * /ss-347-pipe-supplier-india
 * Target: "SS 347 pipe supplier India", "SS 347 niobium stabilized pipe",
 * "stainless steel 347 seamless pipe supplier India niobium stabilized"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade: "SS 347 (TP347)", composition: "18Cr-11Ni-Nb", sizes: "1/2\" to 12\"", schedule: "SCH 10S–80S", apps: "Refinery piping, catalytic reformers, high-temp chemical processing", ht: "Solution Annealed 1040-1120°C", stock: "Ready Stock" },
  { grade: "SS 347H (TP347H)", composition: "18Cr-11Ni-Nb (High C 0.04-0.10%)", sizes: "1/2\" to 10\"", schedule: "SCH 10S–80S", apps: "Superheater piping, reformer tubes, ethylene cracker piping", ht: "Solution Annealed", stock: "Ready Stock" },
  { grade: "SS 347 Welded", composition: "18Cr-11Ni-Nb", sizes: "1/2\" to 12\"", schedule: "SCH 5S–40S", apps: "Process piping, chemical plant lines", ht: "Solution Annealed + Pickled", stock: "Available" },
  { grade: "SS 347 ERW Pipe", composition: "18Cr-11Ni-Nb", sizes: "1/2\" to 8\"", schedule: "SCH 10S–40S", apps: "General industrial, heat exchanger connections", ht: "Solution Annealed", stock: "Available" },
];

const FAQS = [
  { q: "What is the difference between SS 347 and SS 321 pipe?", a: "Both SS 347 and SS 321 are stabilized austenitic stainless steels designed to prevent sensitization in the 425-870°C range, but they use different stabilizing elements. SS 347 uses niobium (Nb ≥ 10×C%) while SS 321 uses titanium (Ti ≥ 5×C%). Niobium forms more stable carbides than titanium and is preferred in many refinery and petrochemical applications because niobium transfers well across the welding arc (titanium does not). This means SS 347 weld metal retains its stabilization, whereas SS 321 welds typically require ER347 filler wire. For critical welded refinery piping, SS 347 is often the preferred specification." },
  { q: "Why is niobium stabilization preferred in refinery applications?", a: "In refinery piping operating at elevated temperatures, niobium (columbium) stabilization offers several advantages over titanium: (1) Nb carbides are more thermodynamically stable than Ti carbides at very high temperatures; (2) niobium transfers effectively through the welding arc so weld metal retains stabilization properties; (3) SS 347 shows better resistance to polythionic acid stress corrosion cracking (a common refinery failure mechanism during shutdowns); and (4) many refinery design codes specifically mandate SS 347 for service above 400°C. Creative Metal Industries stocks SS 347 in all common refinery pipe sizes." },
  { q: "What sizes of SS 347 pipe are available?", a: "Creative Metal Industries stocks SS 347/347H seamless pipes from 1/2 inch (15NB) to 12 inches (300NB) in schedules SCH 10S, 20S, 40S, and 80S per ASTM A312 TP347. Standard lengths are 5-7 metres (random length). Fixed-length cutting is available on request. For larger sizes up to 16 inches, we can arrange supply within 2-3 weeks from mill. Welded SS 347 pipes are available in SCH 5S to 40S. All material supplied with complete MTC documentation and solution annealing certificate." },
  { q: "What filler wire is recommended for welding SS 347 pipe?", a: "Use ER347 (AWS A5.9) filler wire for GTAW/TIG welding of SS 347 pipe. For SMAW, use E347-16 or E347-15 electrodes. The advantage of SS 347 over SS 321 is that the niobium stabilizer transfers effectively through the welding arc, so the weld deposit retains its stabilization properties. Pre-heat is not required. Maintain interpass temperature below 175°C to prevent hot cracking. Post-weld heat treatment (PWHT) is generally not required for corrosion service, but may be specified for creep service applications. Always purge with argon during root pass welding." },
  { q: "What is the maximum temperature for SS 347 pipe?", a: "SS 347 pipe can operate continuously up to 870°C in oxidizing environments. The niobium stabilization prevents intergranular corrosion (sensitization) throughout the 425-870°C range. For intermittent service, SS 347 can handle brief excursions to 900°C. The creep rupture strength of SS 347 is comparable to SS 321 at temperatures up to 800°C. Above 870°C, consider SS 310 or nickel alloys (Inconel 625/600) for superior oxidation resistance. CMI provides grade selection guidance for your specific temperature and environment." },
  { q: "Does SS 347 resist polythionic acid stress corrosion cracking?", a: "Yes, SS 347 offers excellent resistance to polythionic acid stress corrosion cracking (PTA-SCC), which is a major concern in refinery piping during shutdowns. Polythionic acids form when sulfide scales on sensitized stainless steel react with moisture and oxygen during turnarounds. Because SS 347 is stabilized with niobium and resists sensitization, it is far less susceptible to PTA-SCC than unstabilized grades like 304 or 316. NACE MR0103 and API RP 945 recommend stabilized grades (321 or 347) or low-carbon grades (304L/316L) for refinery service where PTA-SCC is a concern." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"SS 347 Seamless Pipe","description":"SS 347/347H niobium stabilized seamless and welded pipes per ASTM A312 TP347. Prevents sensitization 425-870°C. Excellent for refinery and high-temperature piping. Sizes 1/2\" to 12\". Creative Metal Industries, Vadodara.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"400","highPrice":"9000","offerCount":"400+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"36","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"SS 347 Pipe Supplier India","item":"https://www.creativemetalind.com/ss-347-pipe-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function Ss347PipeSupplierIndia() {
  return (
    <>
      <Title>SS 347 Pipe Supplier India | Niobium Stabilized | ASTM A312 | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="SS 347 pipe supplier India — ASTM A312 TP347/347H niobium stabilized seamless pipes for refinery & high-temp service up to 870°C. Sizes 1/2\" to 12\". Ready stock Vadodara. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/ss-347-pipe-supplier-india" />
      <Meta property="og:title" content="SS 347 Pipe Supplier India | Niobium Stabilized Stainless Steel | CMI" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="SS 347/347H niobium stabilized pipe supplier India — prevents sensitization, resists polythionic acid SCC. ASTM A312. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/ss-347-pipe-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS 347 Pipe Supplier India | Niobium Stabilized | CMI" />
      <Meta name="twitter:description" content="SS 347/347H pipe supplier India — Nb stabilized, refinery grade. Ready stock." />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — SS 347 Pipe Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>SS 347 Pipe Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            SS 347 Pipe Supplier in India — Niobium Stabilized Stainless Steel
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is a trusted <strong>SS 347 pipe supplier in India</strong> stocking ASTM A312 TP347/TP347H niobium (columbium) stabilized seamless and welded pipes. With Nb ≥ 10×C%, SS 347 forms extremely stable niobium carbides that prevent chromium depletion at grain boundaries, providing complete immunity to sensitization and intergranular corrosion in the 425-870°C range. Preferred over SS 321 in refinery applications due to superior weld metal stabilization and polythionic acid SCC resistance. Ready stock 1/2" to 12" NB from our Vadodara warehouse with immediate dispatch across India.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>SS 347 Pipe Grades — Ready Stock India</h2>
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
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Specifications & Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Standard",value:"ASTM A312 / SA312 (Pipe) · ASTM A213 / SA213 (Tube)"},
            {label:"Grade",value:"TP347, TP347H (High Carbon for Creep)"},
            {label:"Type",value:"Seamless & Welded (EFW/ERW)"},
            {label:"Size Range",value:"1/2\" to 12\" (15NB to 300NB)"},
            {label:"Schedules",value:"SCH 10S, 20S, 40S, 80S"},
            {label:"Max Service Temp",value:"870°C continuous (Nb stabilized against sensitization)"},
            {label:"Composition",value:"17-19% Cr, 9-13% Ni, Nb ≥ 10×C% (Stabilizer)"},
            {label:"Testing",value:"Hydrostatic, UT, IGC (A262 Practice E), PMI, Solution Annealed"},
            {label:"Certification",value:"MTC EN 10204 3.1/3.2, IBR Form III-C, NACE MR0175"},
            {label:"Mills",value:"Sandvik, Ratnamani, Tubacex, Sumitomo, imported"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of SS 347 Pipe in India</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Refineries:</strong> Catalytic reformer piping, crude distillation unit (CDU), hydrocracker hot-wall piping</li>
            <li><strong>Petrochemical:</strong> Ethylene plant transfer lines, styrene monomer reactors, acetic acid production</li>
            <li><strong>Power plants:</strong> Superheater connections, main steam piping, reheater connections above 540°C</li>
            <li><strong>Chemical processing:</strong> High-temperature reactor piping, oxidation process lines</li>
            <li><strong>Aircraft:</strong> Exhaust system components, collector rings, engine cowling</li>
            <li><strong>Fertilizer plants:</strong> Ammonia reformer outlet piping, waste heat boiler connections</li>
            <li><strong>Nuclear:</strong> Primary and secondary loop piping in select reactor systems</li>
            <li><strong>Food industry:</strong> High-temperature sterilization lines where stabilization is needed</li>
          </ul>
        </div>

        {/* Why Choose CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy SS 347 Pipe from Creative Metal Industries?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem"}}>
          <li><strong>Ready stock:</strong> SS 347/347H seamless pipes in key refinery sizes — immediate dispatch from Vadodara</li>
          <li><strong>Refinery approved:</strong> Material sourced from ASME, PED, NACE approved mills with full traceability</li>
          <li><strong>Complete testing:</strong> MTC 3.1/3.2, IGC test (A262 Practice E), PMI verification, solution annealing certificate</li>
          <li><strong>NACE compliance:</strong> Material compliant to NACE MR0175/MR0103 for sour service and refinery applications</li>
          <li><strong>Grade expertise:</strong> Technical guidance — SS 347 vs 321 vs 304H vs 316H for your specific service conditions</li>
          <li><strong>Mill-direct:</strong> Sourced from Sandvik, Ratnamani, Tubacex, Sumitomo — competitive pricing, no intermediaries</li>
          <li><strong>Pan-India delivery:</strong> Same-day dispatch, 2-5 day delivery anywhere in India via dedicated transport</li>
          <li><strong>Export:</strong> Regular exports to UAE, Saudi Arabia, Kuwait, Oman, Qatar, Southeast Asia, Africa</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — SS 347 Pipe</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"1rem","margin-bottom":"2rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.1rem 1.4rem"}}>
              <summary style={{"font-weight":"700","font-size":"0.95rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary>
              <p style={{"font-size":"0.9rem",color:"#374151","line-height":"1.7","margin-top":"0.75rem","margin-bottom":0}}>{f.a}</p>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-top":"3rem"}}>
          <h2 style={{color:"#fff","font-size":"1.5rem","font-weight":"800","margin-bottom":"0.75rem"}}>Need SS 347/347H Pipes? Get Instant Quote</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>Ready stock at Vadodara. Same-day dispatch. NACE compliant with full MTC.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+SS+347+pipe+quote" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

        {/* Internal Links */}
        <div style={{"margin-top":"3rem"}}>
          <h3 style={{"font-size":"1.1rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>Related Products</h3>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
            {[
              {href:"/ss-347h-tube-supplier-india", label:"SS 347H Boiler Tube"},
              {href:"/ss-321-pipe-supplier-india", label:"SS 321 Pipe (Ti Stabilized)"},
              {href:"/ss-321h-tube-supplier-india", label:"SS 321H Boiler Tube"},
              {href:"/ss-310-pipe-supplier-india", label:"SS 310 Pipe (High Temp)"},
              {href:"/inconel-pipe-supplier-india", label:"Inconel 625/600 Pipe"},
              {href:"/duplex-steel-supplier-vadodara", label:"Duplex 2205/2507 Supplier"},
            ].map(l => (
              <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
            ))}
          </div>
        </div>
      
        <RelatedPages currentPath="/ss-347-pipe-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p style={{"margin-bottom":"0.5rem"}}><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — SS 347 Pipe Supplier India | Vadodara, Gujarat</p>
        <p style={{margin:0}}>F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
