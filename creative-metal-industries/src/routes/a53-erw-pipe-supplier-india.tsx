/**
 * /a53-erw-pipe-supplier-india
 * Target: "A53 ERW pipe supplier India", "ASTM A53 Type E Grade B",
 * "ERW steel pipe India", "A53 pipe structural water fire"
 */
import { Title, Meta, Link } from "@solidjs/meta";

const GRADES = [
  { grade:"ASTM A53 Type E Gr.B", composition:"C-Mn (ERW)", sizes:"1/2\" to 26 inch", schedule:"SCH 40", apps:"Structural, water, fire protection", ht:"As-welded / Normalised", stock:"Ready Stock" },
  { grade:"ASTM A53 Type E Gr.A", composition:"C-Mn (ERW)", sizes:"1/2\" to 20\"", schedule:"SCH 40", apps:"Low-pressure service, fencing", ht:"As-welded", stock:"Ready Stock" },
  { grade:"ASTM A53 Type S Gr.B", composition:"C-Mn (Seamless)", sizes:"1/2\" to 16 inch", schedule:"SCH 40–80", apps:"Pressure piping, mechanical", ht:"Hot-finished", stock:"Available" },
  { grade:"IS 1239 (ERW)", composition:"C-Mn", sizes:"1/2\" to 6\"", schedule:"Light/Medium/Heavy", apps:"Water, gas, general engineering", ht:"As-welded + galvanised", stock:"Ready Stock" },
  { grade:"ASTM A795 (Fire)", composition:"C-Mn (ERW/Seamless)", sizes:"1\" to 12 inch", schedule:"SCH 40", apps:"Fire sprinkler systems", ht:"As-welded / Galvanised", stock:"Available" },
];

const FAQS = [
  { q:"What is ASTM A53 Type E Grade B ERW pipe?", a:"ASTM A53 Type E Grade B is an Electric Resistance Welded (ERW) carbon steel pipe manufactured by forming flat steel strip into a tube shape and welding the longitudinal seam using high-frequency electric resistance welding. Grade B has minimum yield strength of 240 MPa and tensile strength of 415 MPa. Type E designation indicates ERW manufacturing (vs Type S for seamless). A53 ERW pipe is the most widely used steel pipe specification for structural applications, water distribution, fire protection systems, general purpose piping, fencing, bollards and scaffolding." },
  { q:"What is the difference between A53 Type E and Type S pipe?", a:"A53 Type E is Electric Resistance Welded (ERW) pipe — made by forming strip steel and welding the longitudinal seam. It has a weld seam running along its length. A53 Type S is seamless pipe — manufactured by piercing a solid billet with no weld seam. Type S has higher pressure ratings and is preferred for pressure piping and mechanical applications. Type E is more economical and widely used for structural, water, fire protection and general-purpose applications where the presence of a weld seam is acceptable. Both types come in Grade A (lower strength) and Grade B (higher strength)." },
  { q:"Can A53 ERW pipe be used for fire protection systems?", a:"Yes, ASTM A53 Type E Grade B ERW pipe is widely approved for fire protection sprinkler systems per NFPA 13, FM Global and UL standards. For fire protection service, the pipe must be factory-coated (black or galvanised) and hydrostatically tested. Many fire protection specifications also reference ASTM A795 which is specifically designed for fire service. We supply A53 ERW pipe in both black and hot-dip galvanised finish for fire sprinkler systems, standpipe risers, fire hydrant connections and deluge systems. Grooved end and threaded end options available." },
  { q:"What sizes of A53 ERW pipe does Creative Metal Industries stock?", a:"We maintain large stock of ASTM A53 Type E Grade B ERW pipe from 1/2 inch (15NB) to 26 inches (650NB) in Schedule 40 (standard weight). Smaller sizes up to 6 inch are also available in SCH 80 (extra heavy). Standard lengths are 6.0 metres. Both plain end and bevelled end finish available. Galvanised (hot-dip zinc coated) A53 ERW pipe stocked from 1/2 inch to 8 inches for water and fire protection. Threaded and coupled pipe available in sizes up to 6 inches. Typical stock exceeds 1000 tonnes across all sizes." },
  { q:"What is the pressure rating of A53 ERW pipe?", a:"The pressure rating of ASTM A53 Type E Grade B ERW pipe depends on the size and wall thickness (schedule). For SCH 40 pipe: 1/2\" rated at 3138 psi (21.6 MPa), 2\" at 2220 psi (15.3 MPa), 4\" at 1575 psi (10.9 MPa), 8\" at 1083 psi (7.5 MPa), 12 inch at 812 psi (5.6 MPa). These ratings are based on ASME B31.1 allowable stress at ambient temperature with standard safety factor. For elevated temperature service above 200°C, ASTM A106 seamless pipe should be specified instead of A53 ERW due to the weld seam limitations at higher temperatures." },
  { q:"Do you supply galvanised A53 ERW pipe?", a:"Yes, Creative Metal Industries stocks ASTM A53 Type E Grade B ERW pipe in both black (uncoated) and hot-dip galvanised finish. Our galvanised pipe meets the zinc coating requirements of ASTM A53 Section 14 — minimum 610 g/m² zinc coating on outside and 305 g/m² on inside. Galvanised pipe is stocked in sizes 1/2 inch to 8 inches, SCH 40, in 6-metre lengths. Available with threaded ends (BSP or NPT) and sockets, or plain/bevelled ends. Ideal for water supply, potable water systems, fire protection, outdoor structural and corrosive environment applications." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"ASTM A53 Type E Grade B ERW Pipe","description":"ASTM A53 Type E Grade B ERW carbon steel pipe for structural, water and fire protection. Sizes 1/2 inch to 26 inch, SCH 40. Black and galvanised. Ready stock India.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"sku":"CMI-A53-ERW","material":"Carbon Steel (ERW)","offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"55","highPrice":"2800","offerCount":"1500+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.7","reviewCount":"82","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"},"url":"https://www.creativemetalind.com","openingHours":"Mo-Sa 09:00-18:00"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Carbon Steel Pipe","item":"https://www.creativemetalind.com/carbon-steel-pipe-fittings-vadodara"},{"@type":"ListItem","position":3,"name":"A53 ERW Pipe Supplier India","item":"https://www.creativemetalind.com/a53-erw-pipe-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function A53ErwPipeSupplierIndia() {
  return (
    <>
      <Title>A53 ERW Pipe Supplier India | ASTM A53 Type E Grade B | Structural | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="A53 ERW pipe supplier India — ASTM A53 Type E Grade B for structural, water and fire protection. Sizes 1/2 inch to 26 inch, SCH 40. Black & galvanised. Creative Metal Industries Vadodara." />
      <Link rel="canonical" href="https://www.creativemetalind.com/a53-erw-pipe-supplier-india" />
      <Meta property="og:title" content="A53 ERW Pipe Supplier India | ASTM A53 Type E Grade B | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="ASTM A53 ERW pipe — structural, water, fire protection. 1/2 inch to 26 inch. Black and galvanised. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/a53-erw-pipe-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="A53 ERW Pipe Supplier India | ASTM A53 Type E Gr.B | CMI" />
      <Meta name="twitter:description" content="ASTM A53 ERW pipe India — structural, water, fire. 1/2 inch to 26 inch. Black and galvanised. Ready stock." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — A53 ERW Pipe Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <a href="/carbon-steel-pipe-fittings-vadodara" style={{color:"#E8821A","text-decoration":"none"}}>Carbon Steel Pipe</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>A53 ERW Pipe Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"0 0 1rem","line-height":"1.2"}}>
            A53 ERW Pipe Supplier India — ASTM A53 Type E Grade B
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is one of India's largest <strong>ASTM A53 ERW pipe suppliers</strong> with 1000+ tonnes ready stock of Type E Grade B electric resistance welded pipe for structural, water distribution, fire protection and general-purpose applications. A53 ERW is the industry workhorse for cost-effective carbon steel piping across construction, infrastructure, industrial and commercial projects. Available in black and <strong>hot-dip galvanised</strong> finish. Sizes 1/2 inch to 26", SCH 40, plain end and threaded. Ready stock at Vadodara with same-day dispatch across India.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>A53 ERW Pipe & Related Products — Stock List</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"800px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Grade</th><th style={{padding:"0.7rem 0.8rem"}}>Type</th><th style={{padding:"0.7rem 0.8rem"}}>Sizes</th><th style={{padding:"0.7rem 0.8rem"}}>Schedules</th><th style={{padding:"0.7rem 0.8rem"}}>Applications</th><th style={{padding:"0.7rem 0.8rem"}}>Condition</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
            <tbody>
              {GRADES.map((g,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 0.8rem","font-weight":"700"}}>{g.grade}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.composition}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.sizes}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.schedule}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.apps}</td><td style={{padding:"0.6rem 0.8rem","font-size":"0.8rem"}}>{g.ht}</td><td style={{padding:"0.6rem 0.8rem","text-align":"center",color:g.stock==="Ready Stock"?"#16a34a":"#d97706","font-weight":"700"}}>{g.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Specifications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>A53 ERW Pipe Specifications &amp; Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Standard",value:"ASTM A53 / ASME SA53 (ERW & Seamless)"},
            {label:"Type",value:"Type E (Electric Resistance Welded)"},
            {label:"Grade",value:"Grade B — YS ≥240 MPa, UTS ≥415 MPa"},
            {label:"Size Range",value:"1/2\" to 26 inch (15NB to 650NB)"},
            {label:"Schedule",value:"SCH 40 (standard) — SCH 80 up to 6\""},
            {label:"Lengths",value:"6.0 metres standard"},
            {label:"End Finish",value:"Plain end, Bevelled, Threaded & Coupled"},
            {label:"Coating",value:"Black (mill varnish) or Hot-Dip Galvanised"},
            {label:"Testing",value:"Hydrostatic (per ASTM A53), UT weld seam, Tensile"},
            {label:"Mills",value:"APL Apollo, Jindal, Tata, Surya Roshni, Welspun"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of ASTM A53 ERW Pipe</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {title:"Structural & Construction",desc:"Columns, beams, trusses, handrails, bollards and structural supports in buildings, bridges and industrial plants"},
            {title:"Water Distribution",desc:"Municipal water supply mains, industrial water systems, cooling water piping and irrigation infrastructure"},
            {title:"Fire Protection Systems",desc:"Fire sprinkler risers, standpipe systems, fire hydrant connections and deluge piping per NFPA 13"},
            {title:"HVAC & Mechanical",desc:"Chilled water, condenser water and steam distribution piping in commercial and industrial HVAC systems"},
            {title:"Fencing & Guard Rails",desc:"Perimeter fencing, highway guard rails, parking barriers and security bollards using galvanised A53 ERW"},
            {title:"Oil & Gas (Low Pressure)",desc:"Low-pressure gathering lines, utility piping and instrument tubing in oil field and gas plant installations"},
          ].map(app => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0 0 0.3rem"}}>{app.title}</p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{app.desc}</p>
            </div>
          ))}
        </div>

        {/* Why CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy A53 ERW Pipe from CMI?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>Largest stock:</strong> 1000+ tonnes of A53 ERW pipe in sizes 1/2" to 26" — immediate availability for any project size</li>
          <li><strong>Black & galvanised:</strong> Both finishes available from stock for water, structural and fire protection applications</li>
          <li><strong>Multiple end options:</strong> Plain end, bevelled end, threaded and coupled — ready for your installation method</li>
          <li><strong>Fire protection approved:</strong> A53 and A795 pipe meeting NFPA 13, FM Global and UL requirements for fire systems</li>
          <li><strong>Reputed mills:</strong> APL Apollo, Jindal, Tata, Surya Roshni — ISI marked, NABL tested, full MTC provided</li>
          <li><strong>Bulk pricing:</strong> Significant discounts on project quantities (10+ tonnes). Formal quote within 2 hours</li>
          <li><strong>Cut-to-length:</strong> Custom cutting service available for non-standard lengths. Threading service for sizes up to 6"</li>
          <li><strong>Pan-India delivery:</strong> Dedicated transport fleet for Gujarat, Maharashtra, Rajasthan. All-India delivery via road/rail</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — A53 ERW Pipe</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need A53 ERW Pipe? Get Bulk Pricing Today.</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>ASTM A53 Type E Grade B. Sizes 1/2 inch to 26". Black & Galvanised. 1000+ tonnes ready stock India.</p>
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
            {href:"/a106-gr-b-seamless-pipe-india",label:"A106 Gr.B Seamless Pipe India"},
            {href:"/a333-low-temp-pipe-supplier",label:"A333 Low Temp Pipe Supplier"},
            {href:"/carbon-steel-pipe-fittings-vadodara",label:"Carbon Steel Pipe & Fittings"},
            {href:"/a691-pipe-supplier-india",label:"A691 EFW Pipe Supplier"},
            {href:"/alloy-steel-pipe-supplier-india",label:"Alloy Steel Pipe Supplier"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — A53 ERW Pipe Supplier India | ASTM A53 Type E Grade B | Structural, Water, Fire | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
