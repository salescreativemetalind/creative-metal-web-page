/**
 * /a106-gr-b-seamless-pipe-india
 * Target: "A106 Gr B seamless pipe India", "ASTM A106 Grade B pipe supplier",
 * "carbon steel seamless pipe India", "A106 pipe high temperature"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade:"ASTM A106 Gr.B", composition:"C-Mn (0.30C max)", sizes:"1/2\" to 24 inch", schedule:"SCH 40–XXS", apps:"High-temp service, power plants", ht:"Hot-finished / Normalised", stock:"Ready Stock" },
  { grade:"ASTM A106 Gr.A", composition:"C-Mn (0.25C max)", sizes:"1/2\" to 24 inch", schedule:"SCH 40–160", apps:"Moderate pressure/temperature", ht:"Hot-finished", stock:"Available" },
  { grade:"ASTM A106 Gr.C", composition:"C-Mn (0.35C max)", sizes:"1/2\" to 16 inch", schedule:"SCH 40–160", apps:"Higher strength requirement", ht:"Hot-finished / Normalised", stock:"Available" },
  { grade:"ASTM A234 WPB", composition:"C-Mn (matching A106B)", sizes:"1/2\" to 24 inch", schedule:"SCH 40–XXS", apps:"Butt-weld fittings", ht:"Normalised", stock:"Ready Stock" },
  { grade:"ASTM A105", composition:"C-Mn (forged)", sizes:"1/2\" to 24 inch", schedule:"Class 150–2500", apps:"Forged flanges, fittings", ht:"Normalised", stock:"Ready Stock" },
];

const FAQS = [
  { q:"What is ASTM A106 Grade B seamless pipe used for?", a:"ASTM A106 Grade B is a carbon-manganese seamless steel pipe designed for high-temperature service up to 425°C (800°F). It is the most widely used carbon steel pipe specification in power generation, refineries and process industries. Primary applications include boiler feedwater piping, steam distribution lines, refinery process piping, heat exchanger connections, power plant auxiliary piping, and general industrial process piping where operating temperatures exceed the limits of A53/API 5L grades. A106 Gr.B is specified when the piping system will see sustained elevated temperatures." },
  { q:"What is the difference between ASTM A106 and ASTM A53?", a:"Both are carbon steel pipe specifications but differ in intended service. A106 is exclusively seamless and designed for high-temperature service (up to 425°C) — it has mandatory elevated temperature tensile testing and tighter chemical limits. A53 covers both seamless (Type S) and ERW (Type E) pipe for general service including structural, water, steam and gas lines at moderate temperatures. A106 Gr.B has minimum yield of 240 MPa and tensile of 415 MPa versus A53 Gr.B at 240/415 MPa — similar mechanical properties but A106 has additional high-temperature qualification." },
  { q:"What sizes of A106 Gr.B pipe does Creative Metal Industries stock?", a:"We maintain comprehensive stock of ASTM A106 Grade B seamless pipe from 1/2 inch (15NB) to 24 inches (600NB) in all standard schedules: SCH 40 (standard weight), SCH 80 (extra heavy), SCH 120, SCH 140, SCH 160 and XXS (extra extra strong). Standard random lengths are 5.5 to 7.0 metres. Fixed-length pipes available with 3-day lead time. For heavy-wall applications (power plant headers, high-pressure steam), we stock SCH 120-XXS in sizes up to 24 inches. Typical inventory exceeds 500 tonnes across all sizes." },
  { q:"Is ASTM A106 Gr.B pipe available with IBR certification?", a:"Yes, Creative Metal Industries supplies ASTM A106 Grade B seamless pipe with IBR Form III-C certification for boiler auxiliary piping, feedwater systems and steam distribution in Indian thermal power plants. Our IBR-certified A106 stock comes from approved mills including Jindal SAW, Maharashtra Seamless, ISMT and Bao Steel. Each pipe is marked with IBR stamp, heat number and grade identification. Documentation includes complete chemical and mechanical test results conforming to both ASTM A106 and Indian Boiler Regulation requirements." },
  { q:"What is the maximum temperature for A106 Grade B pipe?", a:"ASTM A106 Grade B pipe has ASME allowable stress values up to 425°C (800°F) per ASME B31.1 Power Piping and B31.3 Process Piping codes. Above 425°C, the allowable stress drops significantly due to creep considerations and graphitisation risk in carbon steel. For service above 425°C, chrome-moly alloy grades such as P11 (1.25Cr-0.5Mo) or P22 (2.25Cr-1Mo) must be used. In practice, many engineers limit A106 Gr.B to 400°C for critical piping with long design life to provide adequate margin against time-dependent degradation." },
  { q:"What testing does A106 Gr.B pipe undergo?", a:"ASTM A106 Grade B seamless pipe undergoes: hydrostatic testing at pressure calculated per ASTM A530 formula (or pneumatic test as alternative); tensile testing at room temperature confirming minimum 240 MPa yield and 415 MPa UTS; flattening test per ASTM A530; chemical analysis confirming C≤0.30%, Mn 0.29-1.06%, S≤0.035%, P≤0.035%; and for sizes over 2 inches, one bend test per heat. Optional supplementary requirements include ultrasonic examination (S4), hardness testing (S6) and elevated temperature tensile test. All our A106 pipe is supplied with MTC per EN 10204 3.1." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"ASTM A106 Grade B Seamless Pipe","description":"ASTM A106 Gr.B (C-Mn) carbon steel seamless pipe for high-temperature service. Power plants, refineries, boiler feedwater. Sizes 1/2 inch to 24 inch, SCH 40–XXS. IBR available.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"sku":"CMI-A106-GRB","material":"Carbon Steel (C-Mn)","offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"85","highPrice":"3500","offerCount":"1000+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"67","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"},"url":"https://www.creativemetalind.com","openingHours":"Mo-Sa 09:00-18:00"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Carbon Steel Pipe","item":"https://www.creativemetalind.com/carbon-steel-pipe-fittings-vadodara"},{"@type":"ListItem","position":3,"name":"A106 Gr.B Seamless Pipe India","item":"https://www.creativemetalind.com/a106-gr-b-seamless-pipe-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function A106GrBSeamlessPipeIndia() {
  return (
    <>
      <Title>A106 Gr.B Seamless Pipe India | ASTM A106 Grade B | High Temp | IBR | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="A106 Gr.B seamless pipe supplier India — ASTM A106 Grade B carbon steel pipe for high-temperature service, power plants and refineries. Sizes 1/2 inch to 24 inch, SCH 40–XXS. IBR available. Creative Metal Industries Vadodara." />
      <Link rel="canonical" href="https://www.creativemetalind.com/a106-gr-b-seamless-pipe-india" />
      <Meta property="og:title" content="A106 Gr.B Seamless Pipe India | ASTM A106 Grade B | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="ASTM A106 Grade B seamless pipe — high-temp service, power plants, refineries. IBR available. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/a106-gr-b-seamless-pipe-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="A106 Gr.B Seamless Pipe India | ASTM A106 Grade B | CMI" />
      <Meta name="twitter:description" content="ASTM A106 Gr.B seamless pipe India — high-temp service, power plants. IBR. Ready stock." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — A106 Gr.B Seamless Pipe Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <a href="/carbon-steel-pipe-fittings-vadodara" style={{color:"#E8821A","text-decoration":"none"}}>Carbon Steel Pipe</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>A106 Gr.B Seamless Pipe India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"0 0 1rem","line-height":"1.2"}}>
            A106 Gr.B Seamless Pipe Supplier India — ASTM A106 Grade B
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is a leading <strong>ASTM A106 Grade B seamless pipe supplier in India</strong> with 500+ tonnes ready stock for high-temperature service in power plants, refineries and process industries. A106 Gr.B is the industry standard carbon steel seamless pipe for service up to 425°C, used for boiler feedwater, steam distribution, process piping and heat exchanger connections. All pipes supplied with Mill Test Certificate per EN 10204 3.1. <strong>IBR Form III-C</strong> available for boiler-connected piping. Ready stock 1/2" to 24", SCH 40 to XXS at Vadodara.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>A106 Carbon Steel Seamless Pipe — Stock List</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"800px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Grade</th><th style={{padding:"0.7rem 0.8rem"}}>Composition</th><th style={{padding:"0.7rem 0.8rem"}}>Sizes</th><th style={{padding:"0.7rem 0.8rem"}}>Schedules</th><th style={{padding:"0.7rem 0.8rem"}}>Applications</th><th style={{padding:"0.7rem 0.8rem"}}>Condition</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
            <tbody>
              {GRADES.map((g,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 0.8rem","font-weight":"700"}}>{g.grade}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.composition}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.sizes}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.schedule}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.apps}</td><td style={{padding:"0.6rem 0.8rem","font-size":"0.8rem"}}>{g.ht}</td><td style={{padding:"0.6rem 0.8rem","text-align":"center",color:g.stock==="Ready Stock"?"#16a34a":"#d97706","font-weight":"700"}}>{g.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Specifications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>A106 Gr.B Specifications &amp; Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Standard",value:"ASTM A106 / ASME SA106 (seamless)"},
            {label:"Grade",value:"Grade B (most common) — C≤0.30%, Mn 0.29-1.06%"},
            {label:"Type",value:"Seamless carbon steel pipe (hot-finished)"},
            {label:"Size Range",value:"1/2\" to 24 inch (15NB to 600NB)"},
            {label:"Schedules",value:"SCH 40, 80, 100, 120, 140, 160, XXS"},
            {label:"Max Service Temp",value:"425°C (800°F) per ASME B31.1/B31.3"},
            {label:"Mechanical",value:"YS ≥240 MPa, UTS ≥415 MPa, Elong ≥30%"},
            {label:"Testing",value:"Hydrostatic, Tensile, Flattening, PMI (optional)"},
            {label:"Certification",value:"MTC EN 10204 3.1, IBR Form III-C (on request)"},
            {label:"Mills",value:"Jindal SAW, Maharashtra Seamless, ISMT, Bao Steel"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of ASTM A106 Gr.B Seamless Pipe</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {title:"Boiler Feedwater Piping",desc:"A106 Gr.B for HP/LP feedwater lines in power plants operating at 200-350°C and up to 200 bar pressure"},
            {title:"Steam Distribution Lines",desc:"Medium and low pressure steam piping in industrial plants, refineries and power station auxiliaries"},
            {title:"Refinery Process Piping",desc:"General process piping in crude units, catalytic crackers and hydrogen plants at elevated temperatures"},
            {title:"Heat Exchanger Connections",desc:"Inlet/outlet nozzle piping and connecting lines for shell-and-tube heat exchangers"},
            {title:"Power Plant Auxiliary Piping",desc:"Condensate, drain, vent, and blowdown piping in thermal and combined cycle power plants"},
            {title:"High-Pressure Headers",desc:"SCH 120-XXS pipe for HP steam headers and manifolds where carbon steel is adequate (below 425°C)"},
          ].map(app => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0 0 0.3rem"}}>{app.title}</p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{app.desc}</p>
            </div>
          ))}
        </div>

        {/* Why CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy A106 Gr.B Seamless Pipe from CMI?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>Massive stock:</strong> 500+ tonnes of A106 Gr.B pipe from 1/2" to 24" in SCH 40 through XXS — India's largest independent stockist</li>
          <li><strong>IBR available:</strong> A106 Gr.B with IBR Form III-C for boiler-connected piping and power plant applications</li>
          <li><strong>All schedules:</strong> SCH 40, 80, 120, 160, XXS — complete range for both standard and heavy-wall applications</li>
          <li><strong>Approved mills:</strong> Jindal SAW, Maharashtra Seamless, ISMT — original MTC with full heat traceability</li>
          <li><strong>Matching components:</strong> A234 WPB fittings, A105 flanges, A193 B7 fasteners — complete piping system from one source</li>
          <li><strong>Same-day dispatch:</strong> Stock sizes dispatched same day from Vadodara. Pan-India delivery via dedicated transport</li>
          <li><strong>Competitive pricing:</strong> Bulk purchasing power from mills — best rates for project quantities. Quote within 2 hours</li>
          <li><strong>Quality assured:</strong> Random third-party testing, dimensional verification and visual inspection before dispatch</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — A106 Gr.B Seamless Pipe</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need A106 Gr.B Seamless Pipe? Get Instant Quote.</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>ASTM A106 Grade B. Sizes 1/2 inch to 24". SCH 40–XXS. IBR available. 500+ tonnes ready stock India.</p>
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
            {href:"/a53-erw-pipe-supplier-india",label:"A53 ERW Pipe Supplier India"},
            {href:"/a333-low-temp-pipe-supplier",label:"A333 Low Temp Pipe Supplier"},
            {href:"/carbon-steel-pipe-fittings-vadodara",label:"Carbon Steel Pipe & Fittings"},
            {href:"/alloy-steel-pipe-supplier-india",label:"Alloy Steel Pipe Supplier"},
            {href:"/p11-alloy-steel-pipe-supplier",label:"P11 Alloy Steel Pipe Supplier"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/a106-gr-b-seamless-pipe-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — A106 Gr.B Seamless Pipe Supplier India | ASTM A106 Grade B | High Temperature | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
