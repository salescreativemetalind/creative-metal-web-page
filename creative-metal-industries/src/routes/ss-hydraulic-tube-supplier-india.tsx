/**
 * /ss-hydraulic-tube-supplier-india
 * Target: "SS hydraulic tube supplier India", "stainless steel hydraulic tubing manufacturer",
 * "ASTM A269 hydraulic tube", "316L hydraulic tubing India"
 */
import { Title, Meta, Link } from "@solidjs/meta";

const GRADES = [
  { grade:"304L Hydraulic", composition:"18Cr-8Ni-0.03C max", sizes:"OD 6-42mm, WT 1.0-4.0mm", wall:"SCH 40S-160", apps:"General hydraulic, instrumentation", ht:"Bright annealed", stock:"Ready Stock" },
  { grade:"316L Hydraulic", composition:"16Cr-10Ni-2Mo-0.03C max", sizes:"OD 6-42mm, WT 1.0-5.0mm", wall:"SCH 40S-XXS", apps:"Marine hydraulic, chemical process", ht:"Bright annealed", stock:"Ready Stock" },
  { grade:"316L High Pressure", composition:"16Cr-10Ni-2Mo, heavy wall", sizes:"OD 6-25mm, WT 2.0-6.0mm", wall:"Up to 1034 bar WP", apps:"Subsea BOP, HPU systems", ht:"Bright annealed + cold drawn", stock:"Ready Stock" },
  { grade:"316Ti Hydraulic", composition:"16Cr-10Ni-2Mo-Ti stabilised", sizes:"OD 8-38mm, WT 1.5-4.0mm", wall:"SCH 80-160", apps:"High-temp hydraulic, exhaust", ht:"Solution annealed", stock:"Available" },
  { grade:"Duplex 2205 Hydraulic", composition:"22Cr-5Ni-3Mo-N", sizes:"OD 10-38mm, WT 1.5-5.0mm", wall:"Up to 1379 bar WP", apps:"Offshore hydraulic, subsea controls", ht:"Solution annealed + WQ", stock:"Available" },
];

const FAQS = [
  { q:"What is stainless steel hydraulic tubing?", a:"SS hydraulic tubing is precision cold-drawn seamless tube manufactured to very tight OD and WT tolerances for high-pressure fluid power systems. Unlike standard process pipe, hydraulic tube has superior internal surface finish (Ra below 1.6um), precise dimensional control for leak-free fitting connections, and is rated for working pressures from 200 bar to over 1000 bar depending on OD and wall thickness. It is the backbone of hydraulic power units, control systems, and instrumentation lines." },
  { q:"Which standards cover SS hydraulic tubing?", a:"SS hydraulic tubing is manufactured primarily to ASTM A269 (seamless and welded austenitic tubes for general service) and EN 10216-5 (European seamless stainless steel tubes for pressure purposes). For subsea and offshore applications, NORSOK M-630 and DNV-OS-F101 may additionally apply. High-pressure tubing is also governed by ASME B31.3 for process piping and rated per Barlow formula with appropriate safety factors." },
  { q:"What pressure ratings can SS hydraulic tubing handle?", a:"Pressure ratings depend on OD, wall thickness, grade and design factor. For example, 316L tube at OD 12mm x WT 2mm has a working pressure of approximately 460 bar (with 4:1 safety factor). Our heavy-wall 316L tubes (OD 12mm x WT 4mm) reach working pressures above 1000 bar. Duplex 2205 provides even higher ratings due to its superior yield strength (450 MPa minimum vs 170 MPa for 316L). We provide pressure rating tables for all stocked sizes." },
  { q:"Is your hydraulic tubing suitable for offshore and subsea use?", a:"Yes. Our 316L and Duplex 2205 hydraulic tubing is qualified for offshore and subsea applications including BOP control systems, hydraulic power units, chemical injection lines, and subsea control modules. Tubing meets NORSOK M-630 requirements with enhanced corrosion testing (ASTM G48 Method A), full-length ECT, and hardness below 22 HRC for sour service per NACE MR-01-75. We supply to major subsea contractors operating in the North Sea, Gulf of Mexico, and Asia Pacific." },
  { q:"What is the difference between hydraulic tube and standard seamless tube?", a:"Hydraulic tube differs from standard seamless tube in three key aspects. First, dimensional tolerances are significantly tighter (OD +/-0.1mm vs +/-1% for standard). Second, internal surface finish is controlled (Ra below 1.6um) to prevent seal damage and particle generation. Third, hydraulic tube is specifically pressure-rated and tested to higher hydrostatic pressures. Standard seamless tube to ASTM A312 is designed primarily for process piping and may not have the precision needed for hydraulic fittings." },
  { q:"Do you offer fabrication services for hydraulic tubing assemblies?", a:"Yes. We provide complete hydraulic tubing fabrication including precision cutting, deburring, tube bending (CNC mandrel bending up to 180 degrees), swaging, flaring, and assembly with compression fittings, cone-and-thread fittings, or orbital-welded joints. All fabricated assemblies are pressure-tested and flushed to NAS 1638 Class 6 cleanliness before dispatch. This saves our customers significant on-site fabrication time and ensures factory-quality connections." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"SS Hydraulic Tubing","description":"Stainless steel hydraulic tubing to ASTM A269/EN10216-5 in grades 304L, 316L, Duplex 2205. OD 6-42mm, pressures to 1379 bar. For hydraulic systems, offshore, instrumentation. Precision tolerances, bright annealed.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"300","highPrice":"3500","offerCount":"250+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"31","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"SS Hydraulic Tube Supplier India","item":"https://www.creativemetalind.com/ss-hydraulic-tube-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SsHydraulicTubeSupplierIndia() {
  return (
    <>
      <Title>SS Hydraulic Tube Supplier India | ASTM A269 316L Duplex | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Leading SS hydraulic tubing supplier India. 304L, 316L, Duplex 2205 to ASTM A269/EN10216-5. OD 6-42mm, working pressures to 1379 bar. Offshore, subsea, instrumentation. Bright annealed, precision tolerances. Creative Metal Industries Vadodara." />
      <Link rel="canonical" href="https://www.creativemetalind.com/ss-hydraulic-tube-supplier-india" />
      <Meta property="og:title" content="SS Hydraulic Tube Supplier India | ASTM A269 | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="SS hydraulic tubing manufacturer India — 316L, Duplex 2205. ASTM A269. OD 6-42mm. High-pressure offshore, subsea. Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/ss-hydraulic-tube-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS Hydraulic Tube Supplier India | ASTM A269 316L | CMI" />
      <Meta name="twitter:description" content="SS hydraulic tube supplier India — 316L, Duplex 2205. OD 6-42mm. Subsea, offshore. Vadodara." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — SS Hydraulic Tube Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>›</span>
        <span>SS Hydraulic Tube Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"0 0 1rem","line-height":"1.2"}}>
            SS Hydraulic Tube Supplier in India — High Pressure, Precision
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is India's specialist <strong>SS hydraulic tubing supplier</strong> offering precision cold-drawn seamless tubes in 304L, 316L, 316Ti and Duplex 2205 to <strong>ASTM A269 and EN 10216-5</strong>. OD range 6mm to 42mm with working pressures up to 1379 bar. Our hydraulic tubes feature tight dimensional tolerances, smooth internal surface finish (Ra below 1.6um), and are pressure-rated for offshore, subsea, and industrial hydraulic systems. Ready stock from Vadodara with fabrication services available.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>SS Hydraulic Tube Grades — Stock India</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"750px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Grade</th><th style={{padding:"0.7rem 0.8rem"}}>Composition</th><th style={{padding:"0.7rem 0.8rem"}}>Sizes</th><th style={{padding:"0.7rem 0.8rem"}}>Pressure / Schedule</th><th style={{padding:"0.7rem 0.8rem"}}>Applications</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
            <tbody>
              {GRADES.map((g,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 0.8rem","font-weight":"700"}}>{g.grade}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.composition}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.sizes}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.wall}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.apps}</td><td style={{padding:"0.6rem 0.8rem","text-align":"center",color:g.stock==="Ready Stock"?"#16a34a":"#d97706","font-weight":"700"}}>{g.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Specifications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Specifications &amp; Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Standards",value:"ASTM A269, EN 10216-5, NORSOK M-630"},
            {label:"OD Range",value:"6mm to 42mm"},
            {label:"Wall Thickness",value:"1.0mm to 6.0mm"},
            {label:"Working Pressure",value:"Up to 1379 bar (Duplex 2205)"},
            {label:"Surface Finish",value:"ID Ra < 1.6um, bright annealed"},
            {label:"Tolerances",value:"OD +/-0.1mm, WT +/-10%"},
            {label:"Testing",value:"Hydro 1.5x WP, ECT, PMI, hardness"},
            {label:"Certification",value:"MTC EN 10204 3.1, NACE, pressure tables"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Why Choose */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy SS Hydraulic Tubes from CMI?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>Precision tolerances:</strong> OD accuracy +/-0.1mm ensures leak-free connection with compression and bite-type fittings</li>
          <li><strong>High-pressure rated:</strong> Working pressures to 1379 bar with Duplex 2205 heavy-wall tubes for subsea BOP systems</li>
          <li><strong>Smooth internal bore:</strong> Ra below 1.6um prevents seal damage and reduces friction in hydraulic circuits</li>
          <li><strong>Offshore qualified:</strong> NORSOK M-630, NACE MR-01-75, DNV type-approved materials for subsea service</li>
          <li><strong>Fabrication services:</strong> CNC bending, swaging, flaring, orbital welding, pressure testing and flushing</li>
          <li><strong>Ready stock:</strong> 304L and 316L hydraulic tubes in popular sizes dispatched same-day from Vadodara</li>
          <li><strong>Complete documentation:</strong> Pressure rating tables, MTCs, ECT charts, and hardness certificates</li>
        </ul>

        {/* Industries */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of SS Hydraulic Tubing</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(220px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[{icon:"⚓",name:"Offshore Hydraulic Systems"},{icon:"🌊",name:"Subsea Control Modules"},{icon:"🛢️",name:"BOP Control Lines"},{icon:"🔧",name:"Instrumentation Tubing"},{icon:"🏭",name:"Industrial Hydraulics"},{icon:"⚡",name:"Power Plant HPU"},{icon:"🚢",name:"Marine Deck Equipment"},{icon:"💉",name:"Chemical Injection Lines"}].map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem","text-align":"center"}}>
              <span style={{"font-size":"1.3rem"}}>{ind.icon}</span>
              <p style={{"font-size":"0.85rem","font-weight":"600",color:"#111827",margin:"0.3rem 0 0"}}>{ind.name}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — SS Hydraulic Tube India</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need SS Hydraulic Tubing? Get a Quote in 2 Hours.</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>304L, 316L, Duplex 2205. ASTM A269. OD 6-42mm. High pressure. Offshore qualified. Ready stock India.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>+91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote</a>
          </div>
        </div>

        {/* Internal Links */}
        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/ss-coil-tube-supplier-india",label:"SS Coil Tube India"},
            {href:"/ss-capillary-tube-supplier-india",label:"SS Capillary Tube India"},
            {href:"/ss-seamless-pipe-supplier-india",label:"SS Seamless Pipe India"},
            {href:"/duplex-steel-supplier-vadodara",label:"Duplex Steel Vadodara"},
            {href:"/super-duplex-2507-pipe-supplier",label:"Super Duplex 2507 Pipe"},
            {href:"/ss-304-316l-pipe-supplier-india",label:"SS 304 316L Pipe India"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — SS Hydraulic Tube Supplier India | ASTM A269 | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
