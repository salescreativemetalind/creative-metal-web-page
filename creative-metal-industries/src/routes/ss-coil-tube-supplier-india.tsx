/**
 * /ss-coil-tube-supplier-india
 * Target: "SS coil tube supplier India", "stainless steel coiled tubing manufacturer",
 * "ASTM A269 coiled tube", "316L coil tubing India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade:"304L Coil", composition:"18Cr-8Ni-0.03C max", sizes:"OD 3-25.4mm, WT 0.5-2.77mm", wall:"Coil length 50-5000m", apps:"Instrumentation, heat tracing", ht:"Bright annealed", stock:"Ready Stock" },
  { grade:"316L Coil", composition:"16Cr-10Ni-2Mo-0.03C max", sizes:"OD 3-25.4mm, WT 0.5-2.77mm", wall:"Coil length 50-5000m", apps:"Chemical injection, offshore", ht:"Bright annealed", stock:"Ready Stock" },
  { grade:"316L EP Coil", composition:"16Cr-10Ni-2Mo, electropolished ID", sizes:"OD 6.35-12.7mm, WT 0.89-1.65mm", wall:"Coil length 100-3000m", apps:"Pharmaceutical, semiconductor", ht:"Bright annealed + EP", stock:"Available" },
  { grade:"321 Coil", composition:"18Cr-10Ni-Ti stabilised", sizes:"OD 6.35-19.05mm, WT 0.89-2.11mm", wall:"Coil length 50-2000m", apps:"High-temp tracing, exhaust", ht:"Bright annealed", stock:"Available" },
  { grade:"Alloy 825 Coil", composition:"42Ni-21Cr-3Mo-2Cu-Ti", sizes:"OD 6.35-19.05mm, WT 0.89-2.11mm", wall:"Coil length 50-2000m", apps:"Sour gas, H2S environments", ht:"Solution annealed", stock:"Available" },
];

const FAQS = [
  { q:"What is stainless steel coiled tubing and where is it used?", a:"SS coiled tubing is seamless or welded stainless steel tube supplied in continuous coil form rather than straight lengths. Coils can run from 50 metres to over 5000 metres without any joints. It is widely used in chemical injection systems, hydraulic control lines, subsea umbilicals, instrument air lines, heat tracing systems and downhole applications in oil and gas wells where a continuous jointless tube is essential for leak-free performance." },
  { q:"Which ASTM standards apply to SS coiled tubing?", a:"SS coiled tubing is manufactured to ASTM A269 for general-purpose seamless and welded austenitic tubes, ASTM A213 for seamless boiler and heat exchanger tubes, and ASTM A249 for welded tubes. For subsea and umbilical applications, additional specifications like NORSOK M-630 and API 5ST may apply. All our coiled tubing meets dimensional tolerances per ASTM and is supplied with EN 10204 Type 3.1 certificates." },
  { q:"What coil lengths can you supply?", a:"We supply SS coiled tubing in continuous lengths from 50 metres up to 5000 metres depending on OD and wall thickness. Smaller OD tubes (3-9.53mm) are available in longer coil lengths up to 5000m, while larger OD tubes (12.7-25.4mm) are typically supplied in 50-1500m coils. Custom coil lengths and spool sizes are available on request to match your reel or installation requirements." },
  { q:"Can you supply coiled tubing for subsea umbilical systems?", a:"Yes. We supply 316L bright-annealed coiled tubing qualified for subsea umbilical applications meeting NORSOK M-630 requirements. These tubes undergo enhanced testing including full-length eddy current inspection, hydrostatic testing to 1.5x design pressure, flattening and flaring tests, and corrosion testing per ASTM G48. Typical sizes for umbilicals range from OD 9.53mm to 25.4mm with WT 1.24-2.77mm." },
  { q:"What surface finish options are available on coil tubing?", a:"We offer bright-annealed (BA) finish as standard which gives a smooth, oxide-free internal and external surface with Ra below 0.8 micrometres. For pharmaceutical and semiconductor applications, we supply electropolished (EP) internal finish with Ra below 0.4 micrometres. Pickled and passivated finish is also available for general corrosion resistance. External plastic coating or sheathing can be applied for subsea protection." },
  { q:"What testing is performed on SS coiled tubing?", a:"All coiled tubing is hydrostatically tested to ASTM requirements (typically 69 bar or as calculated per wall thickness). Full-length eddy current testing detects any wall defects along the entire coil. Additional tests include positive material identification (PMI), intergranular corrosion testing (ASTM A262 Practice E), mechanical testing (tensile, hardness, flattening, flare), and dimensional verification at both ends and mid-coil." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/ss-coil-tube-supplier-india#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries","telephone":"+919998280619","address":{"@type":"PostalAddress","streetAddress":"F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road, Sultanpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"SS Coil Tube Supplier India","item":"https://www.creativemetalind.com/ss-coil-tube-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SsCoilTubeSupplierIndia() {
  return (
    <>
      <Title>SS Coil Tube Supplier India | ASTM A269 304L 316L | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Leading SS coiled tubing supplier India. 304L, 316L, 321, Alloy 825 to ASTM A269/A213. OD 3-25.4mm, coil lengths 50-5000m. Bright annealed, EP finish." />
      <Link rel="canonical" href="https://www.creativemetalind.com/ss-coil-tube-supplier-india" />
      <Meta property="og:title" content="SS Coil Tube Supplier India | ASTM A269 | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="SS coiled tubing manufacturer India — 304L, 316L, Alloy 825. ASTM A269. OD 3-25.4mm, lengths to 5000m. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/ss-coil-tube-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS Coil Tube Supplier India | ASTM A269 304L 316L | CMI" />
      <Meta name="twitter:description" content="SS coiled tubing supplier India — 304L, 316L. ASTM A269. OD 3-25.4mm. Chemical injection, umbilicals. Vadodara." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — SS Coil Tube Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>›</span>
        <span>SS Coil Tube Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"0 0 1rem","line-height":"1.2"}}>
            SS Coil Tube Supplier in India — ASTM A269, Continuous Lengths
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is India's trusted <strong>SS coiled tubing supplier</strong> stocking continuous-length seamless and welded coil tubes in 304L, 316L, 321 and Alloy 825 to <strong>ASTM A269 and A213</strong>. OD range 3mm to 25.4mm with coil lengths from 50m to 5000m. Bright-annealed and electropolished finishes for chemical injection, instrumentation, subsea umbilicals and heat tracing applications. Ready stock from our Vadodara warehouse with pan-India delivery.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>SS Coiled Tubing Grades — Stock India</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"750px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Grade</th><th style={{padding:"0.7rem 0.8rem"}}>Composition</th><th style={{padding:"0.7rem 0.8rem"}}>Sizes</th><th style={{padding:"0.7rem 0.8rem"}}>Coil Length</th><th style={{padding:"0.7rem 0.8rem"}}>Applications</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
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
            {label:"Standards",value:"ASTM A269, A213, A249, NORSOK M-630"},
            {label:"OD Range",value:"3mm to 25.4mm"},
            {label:"Wall Thickness",value:"0.5mm to 2.77mm"},
            {label:"Coil Length",value:"50m to 5000m continuous"},
            {label:"Surface Finish",value:"Bright annealed (BA), Electropolished (EP)"},
            {label:"Tolerances",value:"OD +/-0.05mm, WT +/-10%"},
            {label:"Testing",value:"Hydro, ECT full length, PMI, IGC"},
            {label:"Certification",value:"MTC EN 10204 3.1, NACE MR-01-75"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Why Choose */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy SS Coiled Tubing from CMI?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>Continuous lengths to 5000m:</strong> No joints, no leak paths — ideal for critical chemical injection and umbilical systems</li>
          <li><strong>Bright annealed + EP options:</strong> Internal Ra below 0.4um for pharma and semiconductor purity requirements</li>
          <li><strong>Subsea qualified:</strong> 316L coil tubing meeting NORSOK M-630 with enhanced corrosion and mechanical testing</li>
          <li><strong>Full-length ECT:</strong> Every metre of coil eddy-current tested for defect-free assurance</li>
          <li><strong>Custom spool sizes:</strong> Wound on reels sized to your installation equipment and transport constraints</li>
          <li><strong>Quick delivery:</strong> Ready stock 304L and 316L coils dispatched same-day from Vadodara</li>
          <li><strong>Complete documentation:</strong> MTC, ECT charts, hydro certificates, material traceability per heat</li>
        </ul>

        {/* Industries */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of SS Coiled Tubing</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(220px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[{icon:"💉",name:"Chemical Injection Systems"},{icon:"⚓",name:"Subsea Umbilicals"},{icon:"🔧",name:"Instrumentation Lines"},{icon:"🔥",name:"Heat Tracing"},{icon:"🛢️",name:"Downhole Applications"},{icon:"💊",name:"Pharmaceutical Transfer"},{icon:"🔬",name:"Semiconductor Gas Lines"},{icon:"🏭",name:"Process Control Tubing"}].map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem","text-align":"center"}}>
              <span style={{"font-size":"1.3rem"}}>{ind.icon}</span>
              <p style={{"font-size":"0.85rem","font-weight":"600",color:"#111827",margin:"0.3rem 0 0"}}>{ind.name}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — SS Coiled Tubing India</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need SS Coiled Tubing? Get a Quote in 2 Hours.</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>304L, 316L, 321, Alloy 825. ASTM A269. OD 3-25.4mm. Coil lengths to 5000m. Ready stock India.</p>
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
            {href:"/ss-capillary-tube-supplier-india",label:"SS Capillary Tube India"},
            {href:"/ss-u-bend-tube-supplier-india",label:"SS U-Bend Tube India"},
            {href:"/ss-seamless-pipe-supplier-india",label:"SS Seamless Pipe India"},
            {href:"/ss-hydraulic-tube-supplier-india",label:"SS Hydraulic Tube India"},
            {href:"/incoloy-825-pipe-supplier-india",label:"Alloy 825 Pipe India"},
            {href:"/ss-304-316l-pipe-supplier-india",label:"SS 304 316L Pipe India"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/ss-coil-tube-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — SS Coil Tube Supplier India | ASTM A269 | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
