/**
 * /ss-polished-pipe-supplier-india
 * Target: "SS polished pipe supplier India", "stainless steel mirror polished pipe manufacturer",
 * "ASTM A312 polished pipe", "SS sanitary pipe India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade:"304 Mirror", composition:"18Cr-8Ni, 600-grit mirror polish", sizes:"OD 12.7-168.3mm, WT 1.0-4.0mm", wall:"ASTM A312 / A270", apps:"Architecture, dairy, food processing", ht:"Solution annealed + mirror polished", stock:"Ready Stock" },
  { grade:"316L Mirror", composition:"16Cr-10Ni-2Mo, 600-grit mirror", sizes:"OD 12.7-114.3mm, WT 1.0-3.0mm", wall:"ASTM A312 / A270", apps:"Pharma, biotech, coastal architecture", ht:"Solution annealed + mirror polished", stock:"Ready Stock" },
  { grade:"304 Hairline", composition:"18Cr-8Ni, 180-grit satin brush", sizes:"OD 12.7-168.3mm, WT 1.0-4.0mm", wall:"ASTM A312 / A554", apps:"Elevator panels, handrails, cladding", ht:"Solution annealed + hairline finish", stock:"Ready Stock" },
  { grade:"304L Sanitary", composition:"18Cr-8Ni-0.03C, 180-grit ID/OD", sizes:"OD 25.4-101.6mm, WT 1.65-2.77mm", wall:"ASTM A270 3-A", apps:"Dairy, beverage, food grade piping", ht:"Solution annealed + polished ID/OD", stock:"Ready Stock" },
  { grade:"316L Sanitary", composition:"16Cr-10Ni-2Mo-0.03C, Ra<0.8um", sizes:"OD 25.4-101.6mm, WT 1.65-2.77mm", wall:"ASTM A270 3-A", apps:"Pharmaceutical, biotech, CIP systems", ht:"Solution annealed + polished + passivated", stock:"Available" },
];

const FAQS = [
  { q:"What finish grades do you offer on SS polished pipe?", a:"We supply SS polished pipe in multiple finish grades. Mirror finish (No.8) is a highly reflective 600-grit mechanical polish ideal for decorative and architectural applications. Hairline or satin finish (No.4) is a 180-grit directional brush providing an elegant matte appearance for elevator panels and handrails. Sanitary polish includes both internal and external polishing to Ra below 0.8 micrometres per ASME BPE requirements. Custom grit specifications from 120 to 800 grit are available on request." },
  { q:"What is the difference between mechanical polishing and electropolishing?", a:"Mechanical polishing uses abrasive belts or wheels to physically remove surface material and create a smooth reflective finish. It produces excellent visual appearance but the surface still contains micro-scratches at microscopic level. Electropolishing is an electrochemical process that dissolves surface peaks preferentially, creating a truly smooth surface at molecular level with enhanced corrosion resistance and cleanability. EP pipe has Ra below 0.4um versus 0.4-0.8um for mechanical polish. EP is preferred for pharmaceutical and semiconductor applications." },
  { q:"What sizes of SS polished pipe do you stock?", a:"We stock SS polished pipe from OD 12.7mm to 168.3mm in wall thicknesses from 1.0mm to 4.0mm. Sanitary tubes per ASTM A270 are available from OD 25.4mm to 101.6mm. Standard lengths are 6 metres. For architectural projects, we can supply custom cut lengths from 100mm to 6000mm with polished ends. All polished pipes are supplied with PE protective film to prevent surface damage during transport and handling." },
  { q:"Is your polished pipe suitable for dairy and food processing?", a:"Yes. Our 304L and 316L sanitary polished pipes are manufactured to ASTM A270 with 3-A Sanitary Standards compliance. Internal surface is polished to Ra below 0.8 micrometres to prevent bacterial harbourage and allow effective CIP (clean-in-place) cleaning. Tubes are supplied with material certificates confirming compliance with FDA CFR 21 requirements. We also stock sanitary fittings (tri-clamp) to provide complete piping systems for dairy, beverage, and food processing plants." },
  { q:"What is the difference between ASTM A270 and ASTM A312 polished pipe?", a:"ASTM A312 is a general-purpose specification for welded and seamless austenitic SS pipe for high-temperature and corrosive service. When polished, it is still A312 pipe with an added surface treatment. ASTM A270 is specifically designed for sanitary (hygienic) applications with mandatory requirements for internal surface finish, special cleaning procedures, and end preparation for sanitary connections. A270 pipe must meet stricter surface roughness limits and cleanliness standards than A312." },
  { q:"How should SS polished pipe be handled and stored?", a:"SS polished pipe should always be handled with clean cotton or nylon gloves to prevent fingerprint etching. Store in a dry, covered area away from carbon steel to prevent iron contamination. Keep PE protective film on until final installation. Use nylon slings or padded cradles for lifting — never use steel chains or wire rope directly on polished surfaces. For long-term storage, wrap in VCI paper or plastic. Any surface contamination should be cleaned immediately with a suitable stainless steel cleaner." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"SS Polished Pipe","description":"Stainless steel mirror polished pipe to ASTM A312/A270 in grades 304, 316L. OD 12.7-168.3mm. Mirror, hairline, sanitary finish. For pharma, dairy, food, architectural applications.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"350","highPrice":"2500","offerCount":"300+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"39","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"SS Polished Pipe Supplier India","item":"https://www.creativemetalind.com/ss-polished-pipe-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SsPolishedPipeSupplierIndia() {
  return (
    <>
      <Title>SS Polished Pipe Supplier India | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="India's leading SS polished pipe supplier. 304, 316L mirror and sanitary polished pipe to ASTM A312/A270. OD 12.7-168.3mm. Pharma, dairy, food, architectural. Ready stock Vadodara. Creative Metal Industries." />
      <Link rel="canonical" href="https://www.creativemetalind.com/ss-polished-pipe-supplier-india" />
      <Meta property="og:title" content="SS Polished Pipe Supplier India | ASTM A312/A270 | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="SS mirror polished pipe manufacturer India — 304, 316L. ASTM A312/A270. OD 12.7-168.3mm. Pharma, dairy, architecture. Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/ss-polished-pipe-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS Polished Pipe Supplier India | Mirror Sanitary | CMI" />
      <Meta name="twitter:description" content="SS polished pipe supplier India — 304, 316L. Mirror, hairline, sanitary. OD 12.7-168.3mm. Vadodara." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — SS Polished Pipe Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>›</span>
        <span>SS Polished Pipe Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"0 0 1rem","line-height":"1.2"}}>
            SS Polished Pipe Supplier in India — Mirror, Hairline, Sanitary
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is India's trusted <strong>SS polished pipe supplier</strong> offering mirror-polished, hairline-finished, and sanitary-grade stainless steel pipes in 304, 316L to <strong>ASTM A312 and A270</strong>. OD range 12.7mm to 168.3mm with finishes from 180-grit hairline to 600-grit mirror and sanitary Ra below 0.8um. We serve pharmaceutical, dairy, food processing, architectural, and decorative industries with ready stock from our Vadodara warehouse.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>SS Polished Pipe Grades — Ready Stock India</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"750px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Grade</th><th style={{padding:"0.7rem 0.8rem"}}>Composition / Finish</th><th style={{padding:"0.7rem 0.8rem"}}>Sizes</th><th style={{padding:"0.7rem 0.8rem"}}>Standard</th><th style={{padding:"0.7rem 0.8rem"}}>Applications</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
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
            {label:"Standards",value:"ASTM A312, A270, A554, 3-A Sanitary"},
            {label:"OD Range",value:"12.7mm to 168.3mm"},
            {label:"Wall Thickness",value:"1.0mm to 4.0mm"},
            {label:"Finish Options",value:"Mirror (No.8), Hairline (No.4), Sanitary"},
            {label:"Surface Roughness",value:"Ra 0.4-0.8um (mechanical), Ra<0.4um (EP)"},
            {label:"Length",value:"6m standard, custom cut available"},
            {label:"Protection",value:"PE film on all polished surfaces"},
            {label:"Certification",value:"MTC EN 10204 3.1, Ra measurement report"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Why Choose */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy SS Polished Pipe from CMI?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>Complete range:</strong> Mirror, hairline, sanitary polished pipes from OD 12.7-168.3mm in single supply</li>
          <li><strong>Both decorative and sanitary:</strong> A554 architectural plus A270 sanitary pipes from one supplier</li>
          <li><strong>Surface finish verified:</strong> Ra measurement reports supplied with every sanitary batch</li>
          <li><strong>PE film protected:</strong> All polished pipes delivered with protective film preventing transit damage</li>
          <li><strong>Sanitary fittings available:</strong> Complete system supply including tri-clamp fittings, elbows, tees</li>
          <li><strong>Custom polishing:</strong> We can polish standard A312 pipe to your specified grit on request</li>
          <li><strong>Food and pharma compliance:</strong> 3-A, FDA CFR 21, ASME BPE compliant supply</li>
        </ul>

        {/* Industries */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of SS Polished Pipe</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(220px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[{icon:"💊",name:"Pharmaceutical Piping"},{icon:"🥛",name:"Dairy and Beverage"},{icon:"🍕",name:"Food Processing"},{icon:"🏢",name:"Architectural Facades"},{icon:"🪜",name:"Decorative Handrails"},{icon:"🛗",name:"Elevator Interiors"},{icon:"🏬",name:"Retail and Hospitality"},{icon:"🧪",name:"Biotech Clean Rooms"}].map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem","text-align":"center"}}>
              <span style={{"font-size":"1.3rem"}}>{ind.icon}</span>
              <p style={{"font-size":"0.85rem","font-weight":"600",color:"#111827",margin:"0.3rem 0 0"}}>{ind.name}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — SS Polished Pipe India</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need SS Polished Pipe? Get a Quote in 2 Hours.</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>304, 316L. ASTM A312/A270. Mirror, hairline, sanitary. OD 12.7-168.3mm. Ready stock India.</p>
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
            {href:"/ss-electropolished-pipe-india",label:"SS Electropolished Pipe"},
            {href:"/ss-square-pipe-supplier-india",label:"SS Square Pipe India"},
            {href:"/ss-rectangular-pipe-supplier-india",label:"SS Rectangular Pipe India"},
            {href:"/ss-pipe-supplier-vadodara",label:"SS Pipe Supplier Vadodara"},
            {href:"/ss-304-316l-pipe-supplier-india",label:"SS 304 316L Pipe India"},
            {href:"/ss-seamless-pipe-supplier-india",label:"SS Seamless Pipe India"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/ss-polished-pipe-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — SS Polished Pipe Supplier India | ASTM A312/A270 | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
