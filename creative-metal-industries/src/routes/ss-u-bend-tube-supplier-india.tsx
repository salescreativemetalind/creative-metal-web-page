/**
 * /ss-u-bend-tube-supplier-india
 * Target: "SS U-bend tube supplier India", "stainless steel U-bend tube manufacturer",
 * "ASTM A213 U-bend tube", "heat exchanger tube bundle supplier India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade:"304L U-Bend", composition:"18Cr-8Ni-0.03C max", sizes:"OD 12.7-38.1mm, WT 0.89-2.77mm", wall:"Min 2D bend radius", apps:"Feedwater heaters, condensers", ht:"Solution annealed 1040C", stock:"Ready Stock" },
  { grade:"316L U-Bend", composition:"16Cr-10Ni-2Mo-0.03C max", sizes:"OD 12.7-38.1mm, WT 0.89-3.05mm", wall:"Min 1.5D bend radius", apps:"Seawater coolers, chemical HX", ht:"Solution annealed 1060C", stock:"Ready Stock" },
  { grade:"321 U-Bend", composition:"18Cr-10Ni-Ti stabilised", sizes:"OD 15.88-31.75mm, WT 1.24-2.77mm", wall:"Min 2D bend radius", apps:"High-temp exchangers, exhaust HX", ht:"Solution annealed 1060C + stabilised", stock:"Available" },
  { grade:"347 U-Bend", composition:"18Cr-11Ni-Nb stabilised", sizes:"OD 15.88-31.75mm, WT 1.24-2.77mm", wall:"Min 2D bend radius", apps:"Refinery heaters, reactor tubes", ht:"Solution annealed 1060C + stabilised", stock:"Available" },
  { grade:"Duplex 2205 U-Bend", composition:"22Cr-5Ni-3Mo-N", sizes:"OD 19.05-25.4mm, WT 1.65-2.77mm", wall:"Min 2.5D bend radius", apps:"Offshore coolers, desalination", ht:"Solution annealed 1080C + WQ", stock:"Available" },
];

const FAQS = [
  { q:"What is a U-bend tube and where is it used?", a:"A U-bend tube is a straight seamless tube that has been cold-bent into a U-shape with a precise radius, designed for shell-and-tube heat exchangers. The U-shape allows the tube bundle to expand and contract freely under thermal cycling without stress on the tube sheet. They are widely used in power plants, refineries, petrochemical plants, and desalination units wherever efficient heat transfer is required." },
  { q:"Which ASTM standards govern SS U-bend tubes?", a:"SS U-bend tubes are manufactured to ASTM A213 for seamless ferritic and austenitic alloy-steel boiler, superheater, and heat-exchanger tubes, and ASTM A249 for welded austenitic tubes. The bending, heat treatment, and inspection requirements follow TEMA standards and ASME Section VIII Div.1 for pressure vessel applications. All tubes are supplied with EN 10204 Type 3.1 mill test certificates." },
  { q:"What bend radius capabilities do you offer?", a:"We supply U-bend tubes with bend radii from 1.5D to 6D depending on the tube OD, wall thickness, and grade. Tighter radii (1.5D-2D) are achievable for austenitic grades like 304L and 316L due to their superior ductility. Duplex and super duplex grades typically require minimum 2.5D radius. All bends are stress-relief annealed after forming and inspected for ovality, wall thinning and surface defects per ASME SA-450." },
  { q:"How do you ensure quality on U-bend tubes?", a:"Every U-bend tube undergoes hydrostatic testing per ASTM A213 requirements, followed by eddy current testing for full-length defect detection. Post-bending inspections include wall thickness measurement at the apex (minimum 90 percent of nominal), ovality check (maximum 10 percent), and surface inspection for cracks or wrinkles. We also perform IGC testing per ASTM A262 Practice E and PMI verification on every heat." },
  { q:"Can you supply replacement tube bundles for existing heat exchangers?", a:"Yes. We regularly supply replacement U-bend tube bundles reverse-engineered from existing equipment. Send us the original tube drawing or TEMA datasheet and we will manufacture exact replacements including tube OD, wall thickness, bend radius, leg length, and tube-sheet hole pattern. Typical lead time is 3-4 weeks for standard austenitic grades from ready tube stock." },
  { q:"What is the advantage of U-bend tubes over straight tubes in heat exchangers?", a:"U-bend tube bundles eliminate the need for a floating head or expansion joint because the U-shape naturally accommodates differential thermal expansion between the shell and tubes. This reduces potential leak paths and lowers maintenance costs. The trade-off is slightly lower tube count per shell diameter and the inability to mechanically clean the inside of the bend region, which is why U-bend designs are preferred for clean services." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"SS U-Bend Tubes","description":"Stainless steel U-bend tubes to ASTM A213/A249 in grades 304L, 316L, 321, 347, Duplex 2205. OD 12.7-38.1mm for shell-and-tube heat exchangers. Stress relieved, hydrotest and ECT inspected.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"450","highPrice":"3500","offerCount":"200+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"34","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"SS U-Bend Tube Supplier India","item":"https://www.creativemetalind.com/ss-u-bend-tube-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SsUBendTubeSupplierIndia() {
  return (
    <>
      <Title>SS U-Bend Tube Supplier India | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Leading SS U-bend tube supplier in India. 304L, 316L, 321, 347, Duplex 2205 to ASTM A213/A249. OD 12.7-38.1mm. Shell-and-tube heat exchanger bundles. Stress relieved, ECT tested. Ready stock Vadodara. Creative Metal Industries." />
      <Link rel="canonical" href="https://www.creativemetalind.com/ss-u-bend-tube-supplier-india" />
      <Meta property="og:title" content="SS U-Bend Tube Supplier India | ASTM A213 | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="SS U-bend tube manufacturer India — 304L, 316L, 321, Duplex 2205. ASTM A213, OD 12.7-38.1mm. Heat exchanger bundles. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/ss-u-bend-tube-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS U-Bend Tube Supplier India | ASTM A213 304L 316L | CMI" />
      <Meta name="twitter:description" content="SS U-bend tube supplier India — 304L, 316L, 321, 347. ASTM A213. Heat exchanger tubes. Ready stock Vadodara." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — SS U-Bend Tube Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>›</span>
        <span>SS U-Bend Tube Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"0 0 1rem","line-height":"1.2"}}>
            SS U-Bend Tube Supplier in India — ASTM A213, All Grades
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is India's specialist <strong>SS U-bend tube supplier</strong> and heat exchanger tube bundle manufacturer. We stock seamless U-bend tubes in grades 304L, 316L, 321, 347 and Duplex 2205 to <strong>ASTM A213 and A249</strong> with OD range 12.7-38.1mm. Every tube is stress-relief annealed after bending, hydrostatically tested, and eddy current inspected. We supply complete replacement bundles for shell-and-tube exchangers with 3-4 week lead time from our Vadodara facility.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>SS U-Bend Tube Grades — Stock India</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"750px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Grade</th><th style={{padding:"0.7rem 0.8rem"}}>Composition</th><th style={{padding:"0.7rem 0.8rem"}}>Sizes</th><th style={{padding:"0.7rem 0.8rem"}}>Bend Radius</th><th style={{padding:"0.7rem 0.8rem"}}>Applications</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
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
            {label:"Standards",value:"ASTM A213, A249, ASME SA-213"},
            {label:"OD Range",value:"12.7mm to 38.1mm"},
            {label:"Wall Thickness",value:"0.89mm to 3.05mm (BWG 12-20)"},
            {label:"Bend Radius",value:"1.5D to 6D (as per TEMA)"},
            {label:"Length",value:"Straight leg up to 12m per TEMA sheet"},
            {label:"Post-Bend Treatment",value:"Stress-relief annealing"},
            {label:"Testing",value:"Hydro, ECT, UT, IGC, PMI"},
            {label:"Certification",value:"MTC EN 10204 3.1, IBR Form III-C"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Why Choose */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy SS U-Bend Tubes from CMI?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>Specialist bending facility:</strong> CNC mandrel bending with minimum ovality and wall thinning within ASME SA-450 limits</li>
          <li><strong>Complete bundle supply:</strong> Replacement tube bundles reverse-engineered from your TEMA datasheet or sample tubes</li>
          <li><strong>Full NDE after bending:</strong> Eddy current, hydrostatic, dye-penetrant inspection on every U-bend tube</li>
          <li><strong>All grades in stock:</strong> 304L, 316L, 321, 347 straight tubes ready for bending — 3-4 week delivery</li>
          <li><strong>TEMA compliant:</strong> Bend radius, tube pitch, and baffle spacing per TEMA R/C/B standards</li>
          <li><strong>Third-party inspection:</strong> DNV, TUV, SGS, BVIS accepted at our facility</li>
          <li><strong>Mill-certified material:</strong> EN 10204 3.1 MTCs with full chemical and mechanical properties</li>
        </ul>

        {/* Industries */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of SS U-Bend Tubes</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(220px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[{icon:"🔥",name:"Shell-and-Tube Heat Exchangers"},{icon:"⚡",name:"Power Plant Condensers"},{icon:"🛢️",name:"Refinery Reboilers"},{icon:"🧪",name:"Chemical Reactors"},{icon:"💧",name:"Desalination Evaporators"},{icon:"⚓",name:"Offshore Coolers"},{icon:"🏭",name:"Petrochemical Heaters"},{icon:"❄️",name:"HVAC Chillers"}].map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem","text-align":"center"}}>
              <span style={{"font-size":"1.3rem"}}>{ind.icon}</span>
              <p style={{"font-size":"0.85rem","font-weight":"600",color:"#111827",margin:"0.3rem 0 0"}}>{ind.name}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — SS U-Bend Tubes India</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need SS U-Bend Tubes? Get a Quote in 2 Hours.</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>304L, 316L, 321, 347, Duplex 2205. ASTM A213. OD 12.7-38.1mm. Heat exchanger bundles. Ready stock India.</p>
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
            {href:"/ss-seamless-pipe-supplier-india",label:"SS Seamless Pipe India"},
            {href:"/ss-304-316l-pipe-supplier-india",label:"SS 304 316L Pipe India"},
            {href:"/ss-321-pipe-supplier-india",label:"SS 321 Pipe Supplier"},
            {href:"/ss-347-pipe-supplier-india",label:"SS 347 Pipe Supplier"},
            {href:"/duplex-steel-supplier-vadodara",label:"Duplex Steel Vadodara"},
            {href:"/ss-coil-tube-supplier-india",label:"SS Coil Tube Supplier"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/ss-u-bend-tube-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — SS U-Bend Tube Supplier India | ASTM A213 | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
