/**
 * /compression-fittings-supplier-india
 * Target: "compression fittings supplier India", "Swagelok type fittings",
 * "SS tube fittings India", "instrumentation fittings"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade: "SS 316 Fittings", type: "Union, Elbow, Tee, Cross, Reducer", tubeOD: "1/8\" to 1\"", pressure: "Up to 10000 psi", temp: "-54°C to 600°C", design: "Double Ferrule", stock: "Ready Stock" },
  { grade: "SS 304 Fittings", type: "Union, Elbow, Tee, Connector, Plug", tubeOD: "1/8\" to 3/4\"", pressure: "Up to 8000 psi", temp: "-54°C to 537°C", design: "Double Ferrule", stock: "Ready Stock" },
  { grade: "Alloy 625 Fittings", type: "Union, Elbow, Tee, Bulkhead, Cross", tubeOD: "1/8\" to 1/2\"", pressure: "Up to 10000 psi", temp: "-196°C to 650°C", design: "Double Ferrule", stock: "Ready Stock" },
  { grade: "Monel 400 Fittings", type: "Union, Elbow, Tee, Connector", tubeOD: "1/8\" to 1/2\"", pressure: "Up to 10000 psi", temp: "-54°C to 480°C", design: "Double Ferrule", stock: "Available" },
  { grade: "Duplex 2205 Fittings", type: "Union, Elbow, Tee, Cross, Reducer", tubeOD: "1/8\" to 3/4\"", pressure: "Up to 10000 psi", temp: "-54°C to 300°C", design: "Double Ferrule", stock: "Available" },
  { grade: "Brass Fittings", type: "Union, Elbow, Tee, Connector, Plug", tubeOD: "1/8\" to 1\"", pressure: "Up to 3000 psi", temp: "-54°C to 230°C", design: "Double Ferrule", stock: "Ready Stock" },
];

const FAQS = [
  { q: "What are compression fittings and how do they work?", a: "Compression fittings (also called tube fittings or instrumentation fittings) create leak-tight connections on metal tubing without welding, brazing, or soldering. They work by compressing one or two ferrules (metal rings) onto the tube OD as the nut is tightened. The front ferrule grips the tube and creates a primary seal, while the back ferrule provides a secondary seal and acts as a spring to maintain connection integrity through thermal cycling and vibration. Double-ferrule designs (like Swagelok/Parker A-LOK type) provide superior sealing compared to single-ferrule designs, with working pressures up to 10,000 psi for 1/4\" SS 316 tubing." },
  { q: "What is the difference between single ferrule and double ferrule compression fittings?", a: "Single ferrule fittings use one ferrule that must perform both gripping and sealing functions simultaneously. Double ferrule fittings separate these functions — the front ferrule creates the seal against the fitting body, while the back ferrule grips the tube and provides a spring-loaded effect. Double ferrule advantages include: better vibration resistance, easier assembly (less torque required), more forgiving of operator technique, consistent performance across repeated remakes (up to 5+ reassemblies), and superior performance in thermal cycling applications. Creative Metal Industries recommends double-ferrule fittings for all critical instrumentation applications." },
  { q: "Are your fittings compatible with Swagelok and Parker fittings?", a: "Our compression fittings follow the same dimensional and design standards as Swagelok and Parker A-LOK type fittings. The tube OD dimensions, thread sizes, and ferrule geometry are interchangeable. However, we recommend: do not mix ferrules from different manufacturers on the same connection — once a ferrule is swaged onto a tube, use the same brand body for that connection. Our bodies are compatible with pre-swaged Swagelok and Parker ferrules for replacement purposes. All our fittings meet the same pressure-temperature ratings and pass equivalent qualification testing (hydrostatic, pneumatic, impulse, vibration)." },
  { q: "How do I select the right material for compression fittings?", a: "Material selection depends on the process media, temperature, and environment: SS 316 is the standard choice for most process instrumentation, chemical plants, and offshore applications (excellent corrosion resistance, -54 to 600°C). SS 304 works for general industrial service, air/gas systems where chlorides are absent. Alloy 625 is specified for high-temperature or severely corrosive environments (H₂S, strong acids, above 500°C). Monel 400 excels in seawater, HF acid, and marine environments. Duplex 2205 provides high strength with corrosion resistance for subsea instrumentation. Brass is economical for non-corrosive gas, air, and water systems below 230°C." },
  { q: "What are the pressure ratings for compression tube fittings?", a: "Pressure ratings depend on tube material, tube OD, and wall thickness. For SS 316 with standard wall tubing: 1/8\" OD — 15,000 psi, 1/4\" OD — 10,000 psi, 3/8\" OD — 9,600 psi, 1/2\" OD — 9,200 psi, 3/4\" OD — 7,500 psi, 1\" OD — 6,000 psi. These are cold working pressures at ambient temperature. Ratings decrease at elevated temperatures per ASME B31.3 allowable stress tables. Always verify that both the fitting and the tube are rated for your service conditions. CMI provides complete pressure-temperature charts with every order for your specific tube OD and wall thickness combination." },
  { q: "What are the installation tips for compression fittings?", a: "For proper installation: (1) Cut tube square using a tube cutter (not a hacksaw) and deburr both ID and OD. (2) Insert tube fully into the fitting until it bottoms on the shoulder. (3) Hand-tighten the nut, then tighten 1-1/4 turns past finger-tight for initial makeup (mark the nut at 6 o'clock to verify rotation). (4) For remakes, tighten only 1/8 to 1/4 turn past the previous position. (5) Never apply thread sealant on the threads — sealing is ferrule-to-tube, not thread-based. (6) Use two wrenches — one to hold the body, one to turn the nut. (7) Do not over-tighten — this can crack the ferrule or damage the tube. CMI provides gap inspection gauges for field verification of proper makeup." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"Compression Tube Fittings Supplier India — Swagelok/Parker Type","description":"Compression fittings supplier India — SS 316, SS 304, Alloy 625, Monel 400, Duplex 2205, Brass. Double ferrule design, 1/8&quot; to 1&quot; tube OD, up to 10000 psi. Swagelok/Parker type interchangeable. Creative Metal Industries, Vadodara.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"100","highPrice":"5000","offerCount":"1000+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"42","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Compression Fittings Supplier India","item":"https://www.creativemetalind.com/compression-fittings-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function CompressionFittingsSupplierIndia() {
  return (
    <>
      <Title>Compression Fittings Supplier India | Swagelok Type | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Compression fittings supplier India — Swagelok/Parker type double ferrule tube fittings. SS 316, SS 304, Alloy 625, Monel 400, Duplex 2205. 1/8&quot; to 1&quot; OD, up to 10000 psi. Ready stock Vadodara. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/compression-fittings-supplier-india" />
      <Meta property="og:title" content="Compression Fittings Supplier India | Swagelok Type SS Tube Fittings | CMI" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Compression fittings supplier India — SS 316, Alloy 625, Monel, Duplex double ferrule instrumentation fittings. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/compression-fittings-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Compression Fittings Supplier India | Instrumentation Fittings | CMI" />
      <Meta name="twitter:description" content="Compression tube fittings supplier India — Swagelok type, SS 316/304, Alloy 625. Ready stock." />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Compression Fittings Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Compression Fittings Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Compression Tube Fittings Supplier in India — Swagelok/Parker Type
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is India's leading <strong>compression fittings supplier</strong> stocking Swagelok/Parker type double-ferrule instrumentation tube fittings in SS 316, SS 304, Alloy 625, Monel 400, Duplex 2205, and Brass. Our fittings feature precision-machined double ferrule design for leak-tight connections up to 10,000 psi on tube OD from 1/8" to 1". Complete range of unions, elbows, tees, crosses, reducers, bulkheads, male/female connectors, plugs, caps, check valves, and needle valves. Ideal for process instrumentation, analyser systems, chemical injection, hydraulic lines, and laboratory applications. Ready stock at our Vadodara warehouse with same-day dispatch.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Compression Fittings — Material Grades &amp; Stock</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"900px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Material</th><th style={{padding:"0.7rem 0.8rem"}}>Types Available</th><th style={{padding:"0.7rem 0.8rem"}}>Tube OD</th><th style={{padding:"0.7rem 0.8rem"}}>Max Pressure</th><th style={{padding:"0.7rem 0.8rem"}}>Temp Range</th><th style={{padding:"0.7rem 0.8rem"}}>Design</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
            <tbody>
              {GRADES.map((g,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 0.8rem","font-weight":"700"}}>{g.grade}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.type}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.tubeOD}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.pressure}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.temp}</td><td style={{padding:"0.6rem 0.8rem","font-size":"0.8rem"}}>{g.design}</td><td style={{padding:"0.6rem 0.8rem","text-align":"center",color:g.stock==="Ready Stock"?"#16a34a":"#d97706","font-weight":"700"}}>{g.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Specifications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Specifications &amp; Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Fitting Type",value:"Double Ferrule Compression (Bite-Type)"},
            {label:"Design Standard",value:"Meets ASME B31.3 Process Piping requirements"},
            {label:"Tube OD Range",value:"1/8\" to 1\" (3mm to 25mm metric equivalent)"},
            {label:"Max Working Pressure",value:"10,000 psi (SS 316, 1/4\" OD at ambient)"},
            {label:"Temperature Range",value:"-54°C to 600°C (material dependent)"},
            {label:"Connection Types",value:"Union, Elbow, Tee, Cross, Reducer, Bulkhead"},
            {label:"Connector Types",value:"Male NPT, Female NPT, Male ISO, VCR Adapter"},
            {label:"Thread Standards",value:"NPT, BSP, ISO/Metric as per requirement"},
            {label:"Ferrule Material",value:"Same as body — SS 316, 304, Alloy 625, etc."},
            {label:"Surface Finish",value:"Electropolished / Mechanically Polished available"},
            {label:"Testing",value:"Hydrostatic 1.5x WP, Pneumatic, Helium Leak (optional)"},
            {label:"Marking",value:"Material grade, size, heat number traceability"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of Compression Fittings in India</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Process instrumentation:</strong> Pressure transmitters, flow meters, level gauges, temperature sensors — complete impulse line connections</li>
            <li><strong>Analyser systems:</strong> Sample conditioning panels, fast loops, gas chromatograph connections, online analyser tubing</li>
            <li><strong>Chemical injection:</strong> Inhibitor injection, demulsifier injection, methanol injection skids in oil &amp; gas</li>
            <li><strong>Hydraulic systems:</strong> High-pressure hydraulic control lines, actuator connections, accumulator piping</li>
            <li><strong>Gas chromatograph:</strong> Carrier gas lines, sample lines, vent lines — ultra-clean electropolished fittings</li>
            <li><strong>Laboratory:</strong> Research lab tubing, gas supply manifolds, vacuum systems, analytical instrument connections</li>
          </ul>
        </div>

        {/* Why Choose CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy Compression Fittings from Creative Metal Industries?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem"}}>
          <li><strong>Extensive stock:</strong> 5000+ fittings in SS 316, SS 304, and Brass ready ex-stock Vadodara — all sizes 1/8" to 1" OD</li>
          <li><strong>Swagelok/Parker interchangeable:</strong> Dimensionally identical double-ferrule design compatible with major brands</li>
          <li><strong>Exotic alloys:</strong> Alloy 625, Monel 400, Duplex 2205 fittings available for severe service applications</li>
          <li><strong>Complete range:</strong> Unions, elbows, tees, crosses, reducers, bulkheads, connectors, plugs, caps, needle valves, check valves</li>
          <li><strong>Full traceability:</strong> Material certificates (EN 10204 3.1), PMI tested, heat number traceability on every fitting</li>
          <li><strong>Project supply:</strong> Bulk quantities for EPC projects with consolidated packaging, material summary, and packing lists</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Compression Fittings</h2>
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
          <h2 style={{color:"#fff","font-size":"1.5rem","font-weight":"800","margin-bottom":"0.75rem"}}>Need Compression Fittings? Get Instant Quote</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>Ready stock SS 316 fittings. Swagelok/Parker type. Rs 100-5000 per piece. Same-day dispatch.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi%2C+I+need+compression+fittings+quote" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

        {/* Internal Links */}
        <div style={{"margin-top":"3rem"}}>
          <h3 style={{"font-size":"1.1rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>Related Products</h3>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
            {[
              {href:"/ss-instrumentation-tube-supplier-india", label:"SS Instrumentation Tube"},
              {href:"/ss-seamless-pipe-supplier-india", label:"SS Seamless Pipe"},
              {href:"/forged-fittings-supplier-india", label:"Forged Fittings"},
              {href:"/ss-hydraulic-tube-supplier-india", label:"SS Hydraulic Tube"},
              {href:"/inconel-pipe-supplier-india", label:"Inconel 625/600 Pipe"},
              {href:"/duplex-2205-fittings-supplier-india", label:"Duplex 2205 Fittings"},
            ].map(l => (
              <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
            ))}
          </div>
        </div>

        <RelatedPages currentPath="/compression-fittings-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p style={{"margin-bottom":"0.5rem"}}><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Compression Fittings Supplier India | Vadodara, Gujarat</p>
        <p style={{margin:0}}>F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="mailto:creativemetalind@gmail.com" style={{color:"#E8821A"}}>creativemetalind@gmail.com</a></p>
      </footer>
    </>
  );
}
