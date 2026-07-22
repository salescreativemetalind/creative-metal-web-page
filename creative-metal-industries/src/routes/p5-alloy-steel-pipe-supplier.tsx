/**
 * /p5-alloy-steel-pipe-supplier
 * Target: "P5 alloy steel pipe supplier", "ASTM A335 P5 pipe",
 * "5Cr-0.5Mo alloy pipe supplier India", "P5 chrome moly pipe"
 */
import { Title, Meta, Link } from "@solidjs/meta";

const GRADES = [
  { grade:"ASTM A335 P5", composition:"5Cr-0.5Mo", sizes:"1/2\" to 24 inch", schedule:"SCH 40–XXS", apps:"Crude distillation, refinery heaters", ht:"Normalised + Tempered", stock:"Ready Stock" },
  { grade:"ASTM A335 P5b", composition:"5Cr-0.5Mo-Si", sizes:"1/2\" to 16 inch", schedule:"SCH 40–160", apps:"High-silicon refinery piping", ht:"Normalised + Tempered", stock:"Available" },
  { grade:"ASTM A335 P5c", composition:"5Cr-0.5Mo-Ti", sizes:"1/2\" to 12 inch", schedule:"SCH 40–160", apps:"Stabilised grade, H₂S service", ht:"Normalised + Tempered", stock:"Available" },
  { grade:"ASTM A213 T5", composition:"5Cr-0.5Mo", sizes:"3/4\" to 3\" OD", schedule:"Min Wall–Avg Wall", apps:"Heater tubes, furnace coils", ht:"Normalised + Tempered", stock:"Ready Stock" },
  { grade:"ASTM A234 WP5", composition:"5Cr-0.5Mo", sizes:"1/2\" to 24 inch", schedule:"SCH 40–XXS", apps:"Butt-weld fittings for P5 piping", ht:"Normalised + Tempered", stock:"Ready Stock" },
  { grade:"ASTM A182 F5", composition:"5Cr-0.5Mo", sizes:"1/2\" to 24 inch", schedule:"Class 150–2500", apps:"Forged flanges for P5 systems", ht:"Normalised + Tempered", stock:"Available" },
];

const FAQS = [
  { q:"What is ASTM A335 P5 alloy steel pipe used for?", a:"ASTM A335 P5 is a 5% chromium, 0.5% molybdenum alloy steel seamless pipe specifically designed for high-temperature service in petroleum refineries. The 5Cr-0.5Mo composition provides excellent resistance to oxidation and sulfidation at temperatures up to 593°C (1100°F). Primary applications include crude distillation column piping, vacuum distillation transfer lines, fired heater coils and convection section piping, catalytic reformer piping, and hydrodesulfurization unit piping where resistance to hydrogen attack and sulfur corrosion is critical." },
  { q:"What is the temperature limit for P5 alloy steel pipe?", a:"ASTM A335 P5 pipe is rated for continuous service up to 593°C (1100°F) per ASME B31.3 allowable stress tables. At this temperature, the 5% chromium content provides adequate oxidation resistance while the 0.5% molybdenum contributes to creep strength. For cyclic service or where frequent thermal transients occur, a derating to 565°C is commonly applied. Above 593°C, higher chromium grades such as P9 (9Cr-1Mo) or P91 (9Cr-1Mo-V-Nb) should be considered for adequate long-term creep life." },
  { q:"What is the difference between P5, P5b and P5c grades?", a:"All three grades share the 5Cr-0.5Mo base composition but have important variations. P5 is the standard grade for general refinery piping. P5b adds silicon (1.0-2.0% Si) which improves resistance to high-temperature oxidation and is preferred for furnace outlet piping. P5c adds titanium (0.50% min Ti) as a stabilising element which prevents sensitisation during welding and is preferred for piping exposed to polythionic acid stress corrosion cracking during shutdowns. Selection depends on the specific corrosion mechanism in your service environment." },
  { q:"Do you supply IBR-certified P5 alloy steel pipe?", a:"Yes, Creative Metal Industries supplies ASTM A335 P5 pipe with IBR Form III-C certification for boiler and pressure vessel applications regulated under Indian Boiler Regulations. Our IBR-certified P5 stock is sourced from approved mills including ISMT India, Sumitomo Metal Industries Japan, and Maharashtra Seamless Limited. Each pipe is marked with heat number, IBR stamp, grade designation and manufacturer identification. IBR Form III-C documentation includes complete chemical analysis, mechanical test results, heat treatment parameters and NDE results." },
  { q:"What sizes of P5 pipe does Creative Metal Industries stock?", a:"We maintain ready stock of ASTM A335 P5 seamless pipe from 1/2 inch (15NB) through 24 inches (600NB) in schedules SCH 40, SCH 60, SCH 80, SCH 120, SCH 160 and XXS (extra extra strong). Standard lengths are 5.0 to 7.0 metres random. Fixed-length and cut-to-length orders are available with 2-3 day lead time. For heavy-wall requirements above SCH 120, we maintain dedicated stock up to 24 inches specifically for refinery heater piping and critical process lines." },
  { q:"What welding precautions are needed for P5 alloy steel pipe?", a:"P5 (5Cr-0.5Mo) requires preheat of 200-300°C before welding to prevent hydrogen-induced cracking in the heat-affected zone. Interpass temperature should be maintained between 200-350°C. Post-weld heat treatment (PWHT) is mandatory at 690-750°C for a minimum of 1 hour per 25mm wall thickness. Filler metals should be ER505 (GTAW) or E502-15/16 (SMAW) matching the 5Cr-0.5Mo composition. Hardness after PWHT must not exceed 241 HBW per NACE MR0175 if the pipe will be in sour service." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"ASTM A335 P5 Alloy Steel Pipe","description":"ASTM A335 P5 (5Cr-0.5Mo) alloy steel seamless pipe for refinery heaters and crude distillation. Sizes 1/2 inch to 24 inch, SCH 40–XXS. IBR Form III-C certified. Ready stock at Vadodara.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"sku":"CMI-P5-PIPE","material":"5Cr-0.5Mo Alloy Steel","offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"550","highPrice":"9500","offerCount":"200+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"34","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"},"url":"https://www.creativemetalind.com","openingHours":"Mo-Sa 09:00-18:00"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Alloy Steel Pipe","item":"https://www.creativemetalind.com/alloy-steel-pipe-supplier-india"},{"@type":"ListItem","position":3,"name":"P5 Alloy Steel Pipe Supplier","item":"https://www.creativemetalind.com/p5-alloy-steel-pipe-supplier"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function P5AlloySteelPipeSupplier() {
  return (
    <>
      <Title>P5 Alloy Steel Pipe Supplier | ASTM A335 P5 | 5Cr-0.5Mo | IBR | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="P5 alloy steel pipe supplier India — ASTM A335 P5 (5Cr-0.5Mo) seamless pipe for refinery heaters and crude distillation. Sizes 1/2 inch to 24 inch, SCH 40–XXS. IBR Form III-C certified. Creative Metal Industries Vadodara." />
      <Link rel="canonical" href="https://www.creativemetalind.com/p5-alloy-steel-pipe-supplier" />
      <Meta property="og:title" content="P5 Alloy Steel Pipe Supplier | ASTM A335 P5 5Cr-0.5Mo | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="ASTM A335 P5 alloy steel seamless pipe — 5Cr-0.5Mo, refinery heaters, crude distillation. IBR certified. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/p5-alloy-steel-pipe-supplier" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="P5 Alloy Steel Pipe Supplier | ASTM A335 P5 | 5Cr-0.5Mo | CMI" />
      <Meta name="twitter:description" content="ASTM A335 P5 pipe supplier India — 5Cr-0.5Mo. Refinery heaters, crude distillation. IBR Form III-C. Ready stock." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — P5 Alloy Steel Pipe Supplier" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <a href="/alloy-steel-pipe-supplier-india" style={{color:"#E8821A","text-decoration":"none"}}>Alloy Steel Pipe</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>P5 Alloy Steel Pipe Supplier</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"0 0 1rem","line-height":"1.2"}}>
            P5 Alloy Steel Pipe Supplier — ASTM A335 P5 (5Cr-0.5Mo)
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is a leading <strong>P5 alloy steel pipe supplier in India</strong> stocking ASTM A335 P5 (5Cr-0.5Mo) seamless pipes for petroleum refinery heaters, crude distillation columns, and high-temperature process piping. The 5% chromium content provides excellent sulfidation and oxidation resistance up to 593°C, making P5 the standard choice for refinery fired-heater piping. All pipes supplied with <strong>IBR Form III-C</strong> certification, sourced from Sumitomo, ISMT and Maharashtra Seamless. Ready stock 1/2" to 24", SCH 40 to XXS at our Vadodara warehouse.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>P5 Alloy Steel Pipe & Related Products — Ready Stock</h2>
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
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>P5 Pipe Specifications &amp; Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Standard",value:"ASTM A335 / ASME SA335 Grade P5"},
            {label:"Composition",value:"5% Chromium, 0.5% Molybdenum (5Cr-0.5Mo)"},
            {label:"Type",value:"Seamless alloy steel pipe (hot-finished)"},
            {label:"Size Range",value:"1/2\" to 24 inch (15NB to 600NB)"},
            {label:"Schedules",value:"SCH 40, 60, 80, 100, 120, 140, 160, XXS"},
            {label:"Max Service Temp",value:"593°C (1100°F) continuous"},
            {label:"Heat Treatment",value:"Normalised + Tempered (900°C + 680°C min)"},
            {label:"Testing",value:"Hydrostatic, UT (SA-530), Hardness ≤235 HBW, PMI"},
            {label:"Certification",value:"MTC EN 10204 3.1/3.2, IBR Form III-C"},
            {label:"Mills",value:"Sumitomo, ISMT, Maharashtra Seamless, Vallourec"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of ASTM A335 P5 Pipe</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {title:"Refinery Fired Heaters",desc:"P5 pipe for crude heater inlet/outlet piping and convection section where sulfidation resistance is critical at 450-593°C"},
            {title:"Crude Distillation Units",desc:"Transfer lines from atmospheric and vacuum distillation columns handling high-sulfur crude at elevated temperatures"},
            {title:"Catalytic Reformer Piping",desc:"Reactor effluent lines and charge heater piping in catalytic reforming units operating at 480-540°C"},
            {title:"Hydrodesulfurization Units",desc:"HDS reactor piping where resistance to hydrogen attack at high temperature and pressure is essential"},
            {title:"Vacuum Distillation",desc:"Vacuum column overhead and transfer line piping handling reduced crude at temperatures up to 400°C"},
            {title:"Delayed Coker Units",desc:"Heater outlet piping and coke drum inlet lines exposed to high-temperature, high-sulfur environments"},
          ].map(app => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0 0 0.3rem"}}>{app.title}</p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{app.desc}</p>
            </div>
          ))}
        </div>

        {/* Why CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy P5 Alloy Steel Pipe from CMI?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>Refinery-grade stock:</strong> Dedicated inventory of P5 seamless pipe in SCH 40 through XXS for fired-heater and transfer-line applications</li>
          <li><strong>IBR Form III-C:</strong> All P5 pipe supplied with valid IBR certification for pressure piping and boiler-connected systems</li>
          <li><strong>Premium mills:</strong> Sourced from Sumitomo (Japan), ISMT (India) and Maharashtra Seamless — guaranteed traceability</li>
          <li><strong>100% PMI tested:</strong> Every pipe verified by positive material identification (XRF) to confirm 5Cr-0.5Mo composition before dispatch</li>
          <li><strong>Complete P5 system:</strong> Matching fittings (WP5), flanges (F5) and fasteners available for complete piping spool fabrication</li>
          <li><strong>Heavy-wall availability:</strong> SCH 120, 160 and XXS up to 24" for high-pressure refinery heater outlet piping</li>
          <li><strong>Fast delivery:</strong> Same-day dispatch from Vadodara warehouse for stock sizes. Project quantities from mill in 6-8 weeks</li>
          <li><strong>Technical support:</strong> Assistance with P5 welding procedures (WPS), PWHT requirements and material selection for H₂/H₂S service</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — P5 Alloy Steel Pipe</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need P5 Alloy Steel Pipe? Get IBR-Certified Quote Today.</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>ASTM A335 P5 (5Cr-0.5Mo). Sizes 1/2 inch to 24". SCH 40–XXS. IBR Form III-C. Ready stock India.</p>
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
            {href:"/alloy-steel-pipe-supplier-india",label:"Alloy Steel Pipe Supplier India"},
            {href:"/p9-alloy-steel-pipe-supplier",label:"P9 Alloy Steel Pipe Supplier"},
            {href:"/p11-alloy-steel-pipe-supplier",label:"P11 Alloy Steel Pipe Supplier"},
            {href:"/p22-alloy-steel-pipe-supplier",label:"P22 Alloy Steel Pipe Supplier"},
            {href:"/carbon-steel-pipe-fittings-vadodara",label:"Carbon Steel Pipe & Fittings"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — P5 Alloy Steel Pipe Supplier India | ASTM A335 P5 (5Cr-0.5Mo) | IBR Certified | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
