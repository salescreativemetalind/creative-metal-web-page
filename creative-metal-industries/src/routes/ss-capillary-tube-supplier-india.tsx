/**
 * /ss-capillary-tube-supplier-india
 * Target: "SS capillary tube supplier India", "stainless steel capillary tubing manufacturer",
 * "ASTM A269 capillary tube", "316L capillary tube India"
 */
import { Title, Meta, Link } from "@solidjs/meta";

const GRADES = [
  { grade:"304 Capillary", composition:"18Cr-8Ni", sizes:"OD 0.5-6mm, WT 0.1-1.0mm", wall:"ID 0.3-5mm", apps:"Thermocouples, sensors, general", ht:"Bright annealed", stock:"Ready Stock" },
  { grade:"304L Capillary", composition:"18Cr-8Ni-0.03C max", sizes:"OD 0.5-6mm, WT 0.1-1.0mm", wall:"ID 0.3-5mm", apps:"Chromatography, medical devices", ht:"Bright annealed", stock:"Ready Stock" },
  { grade:"316L Capillary", composition:"16Cr-10Ni-2Mo-0.03C max", sizes:"OD 0.5-6mm, WT 0.1-1.5mm", wall:"ID 0.2-5mm", apps:"HPLC columns, pharma, offshore", ht:"Bright annealed", stock:"Ready Stock" },
  { grade:"316L EP Capillary", composition:"16Cr-10Ni-2Mo, electropolished", sizes:"OD 1.59-6.35mm, WT 0.25-1.0mm", wall:"ID 0.5-5mm, Ra<0.4um", apps:"Semiconductor, biotech, ultra-purity", ht:"Bright annealed + EP", stock:"Available" },
  { grade:"321 Capillary", composition:"18Cr-10Ni-Ti stabilised", sizes:"OD 1.0-6mm, WT 0.2-1.0mm", wall:"ID 0.5-5mm", apps:"High-temp sensors, exhaust probes", ht:"Bright annealed", stock:"Available" },
];

const FAQS = [
  { q:"What is stainless steel capillary tubing?", a:"SS capillary tubing is ultra-small-diameter seamless tubing typically ranging from 0.5mm to 6mm OD with very thin walls (0.1-1.5mm). It is manufactured to extremely tight dimensional tolerances and smooth internal surfaces, making it ideal for precision fluid transfer in analytical instruments, medical devices, thermocouples, and chromatography columns. The small bore creates controlled flow characteristics essential for micro-volume applications." },
  { q:"What are the main applications of SS capillary tubes?", a:"SS capillary tubes serve critical roles in HPLC and gas chromatography systems, medical device assemblies such as needles and catheters, thermocouple sheaths for temperature measurement, pressure gauge connections, semiconductor gas delivery, analytical sampling systems, and micro-chemical reactors. The combination of corrosion resistance, dimensional precision, and biocompatibility makes stainless capillary tubing indispensable in these fields." },
  { q:"What dimensional tolerances can you achieve on capillary tubing?", a:"We supply capillary tubing with OD tolerances as tight as plus or minus 0.02mm and wall thickness tolerances of plus or minus 10 percent or 0.05mm (whichever is greater). Internal diameter concentricity is maintained within 0.03mm TIR. For HPLC and medical applications, we can supply tubing with ID tolerance of plus or minus 0.01mm. These tight tolerances ensure consistent flow rates and reliable connections in precision assemblies." },
  { q:"Do you supply capillary tubing for medical device manufacturing?", a:"Yes. We supply 304L and 316L capillary tubing meeting ASTM A269 and ASTM F899 requirements for medical device applications. Tubes are available with bright-annealed or electropolished internal finish for biocompatibility. We can supply tubing with material certificates including full chemical analysis, mechanical properties, surface roughness measurements, and cleanliness verification. Custom cutting to precise lengths with burr-free ends is available." },
  { q:"What is the difference between capillary tube and instrumentation tube?", a:"Capillary tubing is generally defined as OD below 6mm with very thin walls, manufactured to tighter tolerances and smoother finishes than standard instrumentation tube. Instrumentation tubing (per ASTM A269) typically starts at 6.35mm OD and serves hydraulic, pneumatic, and process sampling functions. Capillary tubes are precision products designed for micro-volume flow control while instrumentation tubes handle higher volumes at standard industrial tolerances." },
  { q:"Can you supply capillary tubing in coil form?", a:"Yes. We supply SS capillary tubing in both straight cut lengths and continuous coil form. Coil lengths range from 10 metres to 500 metres depending on OD. Smaller diameters (0.5-2mm OD) can be supplied in coils up to 500m, while larger capillary sizes (3-6mm OD) are available in coils up to 100m. Coils are wound on plastic spools or wooden drums to prevent damage during transport. Straightened and cut lengths available from 100mm to 6000mm." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"SS Capillary Tubes","description":"Stainless steel capillary tubing to ASTM A269/A213 in grades 304, 304L, 316L, 321. OD 0.5-6mm with tight tolerances. For medical, chromatography, instrumentation, thermocouples. Bright annealed and electropolished.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"150","highPrice":"5000","offerCount":"300+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"22","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"SS Capillary Tube Supplier India","item":"https://www.creativemetalind.com/ss-capillary-tube-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SsCapillaryTubeSupplierIndia() {
  return (
    <>
      <Title>SS Capillary Tube Supplier India | ASTM A269 304L 316L | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="India's leading SS capillary tube supplier. 304, 304L, 316L to ASTM A269. OD 0.5-6mm, tight tolerances. Medical, HPLC, thermocouples, instrumentation. Bright annealed and EP finish. Creative Metal Industries Vadodara." />
      <Link rel="canonical" href="https://www.creativemetalind.com/ss-capillary-tube-supplier-india" />
      <Meta property="og:title" content="SS Capillary Tube Supplier India | ASTM A269 | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="SS capillary tubing manufacturer India — 304L, 316L. ASTM A269. OD 0.5-6mm. Medical, chromatography, instrumentation. Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/ss-capillary-tube-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS Capillary Tube Supplier India | ASTM A269 304L 316L | CMI" />
      <Meta name="twitter:description" content="SS capillary tube supplier India — 304L, 316L. OD 0.5-6mm. Medical, HPLC, sensors. Vadodara." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — SS Capillary Tube Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>›</span>
        <span>SS Capillary Tube Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"0 0 1rem","line-height":"1.2"}}>
            SS Capillary Tube Supplier in India — Precision OD 0.5-6mm
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries supplies precision <strong>SS capillary tubing</strong> in grades 304, 304L, 316L and 321 to <strong>ASTM A269 and A213</strong>. Our capillary tubes range from 0.5mm to 6mm OD with ultra-tight dimensional tolerances for medical devices, HPLC chromatography, thermocouple sheaths, semiconductor gas delivery and analytical instrumentation. Available in bright-annealed and electropolished finishes, in straight cut lengths or continuous coils. Ready stock from Vadodara with nationwide delivery.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>SS Capillary Tube Grades — Stock India</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"750px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Grade</th><th style={{padding:"0.7rem 0.8rem"}}>Composition</th><th style={{padding:"0.7rem 0.8rem"}}>Sizes</th><th style={{padding:"0.7rem 0.8rem"}}>ID / Finish</th><th style={{padding:"0.7rem 0.8rem"}}>Applications</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
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
            {label:"Standards",value:"ASTM A269, A213, ASTM F899 (medical)"},
            {label:"OD Range",value:"0.5mm to 6mm"},
            {label:"Wall Thickness",value:"0.1mm to 1.5mm"},
            {label:"Tolerances",value:"OD +/-0.02mm, WT +/-10%"},
            {label:"Surface Finish",value:"Bright annealed (BA), Electropolished (EP)"},
            {label:"Form",value:"Straight cut lengths or coils (10-500m)"},
            {label:"Testing",value:"Hydro, ECT, PMI, dimensional verification"},
            {label:"Certification",value:"MTC EN 10204 3.1, material traceability"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Why Choose */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy SS Capillary Tubes from CMI?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>Ultra-tight tolerances:</strong> OD accuracy to +/-0.02mm for precision instrument and medical device assemblies</li>
          <li><strong>Multiple finishes:</strong> Bright annealed, electropolished (Ra below 0.4um), and passivated options</li>
          <li><strong>Medical grade supply:</strong> ASTM F899 compliant with biocompatibility documentation</li>
          <li><strong>Coil and straight forms:</strong> Continuous coils to 500m or precision-cut straight lengths from 100mm</li>
          <li><strong>Custom processing:</strong> Burr-free cutting, end forming, bending, and marking services</li>
          <li><strong>Ready stock:</strong> 304L and 316L capillary tubes in popular sizes dispatched same-day from Vadodara</li>
          <li><strong>Full traceability:</strong> Heat-wise material certificates with chemical, mechanical, and dimensional data</li>
        </ul>

        {/* Industries */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of SS Capillary Tubes</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(220px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[{icon:"🔬",name:"HPLC / Gas Chromatography"},{icon:"🏥",name:"Medical Devices"},{icon:"🌡️",name:"Thermocouple Sheaths"},{icon:"💊",name:"Pharmaceutical Systems"},{icon:"🔧",name:"Pressure Gauges"},{icon:"💻",name:"Semiconductor Gas Lines"},{icon:"⚗️",name:"Analytical Instruments"},{icon:"🧪",name:"Micro-Chemical Reactors"}].map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem","text-align":"center"}}>
              <span style={{"font-size":"1.3rem"}}>{ind.icon}</span>
              <p style={{"font-size":"0.85rem","font-weight":"600",color:"#111827",margin:"0.3rem 0 0"}}>{ind.name}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — SS Capillary Tube India</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need SS Capillary Tubes? Get a Quote in 2 Hours.</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>304, 304L, 316L, 321. ASTM A269. OD 0.5-6mm. Medical, HPLC, sensors. Ready stock India.</p>
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
            {href:"/ss-hydraulic-tube-supplier-india",label:"SS Hydraulic Tube India"},
            {href:"/ss-seamless-pipe-supplier-india",label:"SS Seamless Pipe India"},
            {href:"/ss-304-316l-pipe-supplier-india",label:"SS 304 316L Pipe India"},
            {href:"/ss-electropolished-pipe-india",label:"SS Electropolished Pipe"},
            {href:"/stainless-steel-supplier-vadodara",label:"Full SS Range Vadodara"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — SS Capillary Tube Supplier India | ASTM A269 | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
