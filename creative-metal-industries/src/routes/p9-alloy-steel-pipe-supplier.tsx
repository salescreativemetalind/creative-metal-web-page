/**
 * /p9-alloy-steel-pipe-supplier
 * Target: "P9 alloy steel pipe supplier", "ASTM A335 P9 pipe",
 * "9Cr-1Mo alloy pipe supplier India", "P9 chrome moly pipe"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade:"ASTM A335 P9", composition:"9Cr-1Mo", sizes:"1/2\" to 16 inch", schedule:"SCH 40–160", apps:"Heater tubes, superheaters", ht:"Normalised + Tempered", stock:"Ready Stock" },
  { grade:"ASTM A213 T9", composition:"9Cr-1Mo", sizes:"3/4\" to 3\" OD", schedule:"Min Wall–Avg Wall", apps:"Superheater/reheater tubes", ht:"Normalised + Tempered", stock:"Ready Stock" },
  { grade:"ASTM A234 WP9", composition:"9Cr-1Mo", sizes:"1/2\" to 16 inch", schedule:"SCH 40–160", apps:"Butt-weld fittings for P9", ht:"Normalised + Tempered", stock:"Available" },
  { grade:"ASTM A182 F9", composition:"9Cr-1Mo", sizes:"1/2\" to 16 inch", schedule:"Class 150–2500", apps:"Forged flanges for P9 systems", ht:"Normalised + Tempered", stock:"Available" },
  { grade:"ASTM A335 P91", composition:"9Cr-1Mo-V-Nb", sizes:"1/2\" to 24 inch", schedule:"SCH 40–XXS", apps:"Main steam, USC boilers", ht:"N (1040-1080°C) + T (730-780°C)", stock:"Ready Stock" },
];

const FAQS = [
  { q:"What is the difference between P9 and P91 alloy steel pipe?", a:"Both P9 and P91 contain 9% chromium, but they differ significantly in composition and performance. P9 (9Cr-1Mo) is a conventional ferritic alloy with moderate creep strength, suitable for service up to 593°C. P91 (9Cr-1Mo-V-Nb) contains vanadium and niobium additions that create MX carbonitride precipitates, providing much higher creep rupture strength. This allows P91 to operate at higher temperatures (up to 620°C) with thinner walls. P91 requires strict heat treatment control (normalise 1040-1080°C, temper 730-780°C) while P9 is simpler to process." },
  { q:"What temperature range is P9 alloy steel pipe suitable for?", a:"ASTM A335 P9 pipe is designed for continuous service at temperatures up to 593°C (1100°F) per ASME B31.1 and B31.3 allowable stress tables. The 9% chromium content provides excellent oxidation resistance and the 1% molybdenum contributes creep strength in this temperature range. P9 is commonly used in superheater and reheater tube banks where steam temperatures range from 480°C to 565°C. For applications above 593°C, the modified grade P91 (9Cr-1Mo-V-Nb) should be specified." },
  { q:"What are the welding requirements for P9 pipe?", a:"P9 (9Cr-1Mo) requires preheat of 200-300°C before welding and maintenance of interpass temperature between 200-350°C. The recommended filler metals are ER505 for GTAW and E505-15/16 for SMAW. Post-weld heat treatment is mandatory at 730-760°C for minimum 1 hour per 25mm thickness. After PWHT, hardness must not exceed 241 HBW. Unlike P91, P9 does not require the material to cool below 100°C before PWHT, simplifying the welding procedure for field installations." },
  { q:"Does Creative Metal Industries supply IBR-certified P9 pipe?", a:"Yes, we supply ASTM A335 P9 seamless pipe with IBR Form III-C certification for boiler applications in India. Our P9 stock comes from IBR-approved mills including ISMT (Ahmednagar), Sumitomo Metal Industries (Japan) and Tenaris (Italy). Each pipe includes full traceability with heat number, mill marking, and IBR stamp. Documentation includes chemical analysis, tensile and yield strength, impact values (where specified), and heat treatment records conforming to Indian Boiler Regulation requirements." },
  { q:"What sizes of P9 pipe are available in stock?", a:"We stock ASTM A335 P9 seamless pipe from 1/2 inch (15NB) to 16 inches (400NB) in schedules SCH 40, SCH 60, SCH 80, SCH 120 and SCH 160. Standard random lengths are 5.0 to 7.0 metres. For superheater tube applications, we also stock ASTM A213 T9 tubes from 3/4 inch to 3 inch OD in minimum wall thickness. Cut-to-length service available with 2-3 working days lead time. Larger quantities from mill in 8-10 weeks." },
  { q:"Why is P9 preferred over P5 for superheater applications?", a:"P9 (9Cr-1Mo) is preferred over P5 (5Cr-0.5Mo) for superheater and reheater tubes because the higher chromium content (9% vs 5%) provides significantly better steam-side oxidation resistance at temperatures above 540°C. At 565°C, the oxide scale growth rate on P9 is approximately 40% lower than P5, reducing tube blockage and improving heat transfer. Additionally, P9 has higher allowable stress at temperatures above 500°C, permitting thinner walls and better heat transfer efficiency in convection-heated tube banks." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"ASTM A335 P9 Alloy Steel Pipe","description":"ASTM A335 P9 (9Cr-1Mo) alloy steel seamless pipe for heater tubes and superheaters. Sizes 1/2 inch to 16 inch, SCH 40–160. IBR Form III-C certified. Ready stock Vadodara.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"sku":"CMI-P9-PIPE","material":"9Cr-1Mo Alloy Steel","offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"650","highPrice":"11000","offerCount":"150+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"28","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"},"url":"https://www.creativemetalind.com","openingHours":"Mo-Sa 09:00-18:00"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Alloy Steel Pipe","item":"https://www.creativemetalind.com/alloy-steel-pipe-supplier-india"},{"@type":"ListItem","position":3,"name":"P9 Alloy Steel Pipe Supplier","item":"https://www.creativemetalind.com/p9-alloy-steel-pipe-supplier"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function P9AlloySteelPipeSupplier() {
  return (
    <>
      <Title>P9 Alloy Steel Pipe Supplier | ASTM A335 P9 | 9Cr-1Mo | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="P9 alloy steel pipe supplier India — ASTM A335 P9 (9Cr-1Mo) seamless pipe for heater tubes and superheaters. Sizes 1/2 inch to 16 inch, SCH 40–160. IBR Form III-C certified. Creative Metal Industries Vadodara." />
      <Link rel="canonical" href="https://www.creativemetalind.com/p9-alloy-steel-pipe-supplier" />
      <Meta property="og:title" content="P9 Alloy Steel Pipe Supplier | ASTM A335 P9 9Cr-1Mo | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="ASTM A335 P9 (9Cr-1Mo) seamless pipe — heater tubes, superheaters. IBR certified. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/p9-alloy-steel-pipe-supplier" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="P9 Alloy Steel Pipe Supplier | ASTM A335 P9 | 9Cr-1Mo | CMI" />
      <Meta name="twitter:description" content="ASTM A335 P9 pipe supplier India — 9Cr-1Mo. Heater tubes, superheaters. IBR Form III-C. Ready stock." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — P9 Alloy Steel Pipe Supplier" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <a href="/alloy-steel-pipe-supplier-india" style={{color:"#E8821A","text-decoration":"none"}}>Alloy Steel Pipe</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>P9 Alloy Steel Pipe Supplier</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"0 0 1rem","line-height":"1.2"}}>
            P9 Alloy Steel Pipe Supplier — ASTM A335 P9 (9Cr-1Mo)
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is a specialist <strong>P9 alloy steel pipe supplier in India</strong> stocking ASTM A335 P9 (9Cr-1Mo) seamless pipes for superheater tubes, reheater sections, and fired heater applications. The 9% chromium composition delivers superior oxidation and steam-side scaling resistance at temperatures up to 593°C, making P9 the preferred material for power plant superheater piping. All pipes supplied with <strong>IBR Form III-C</strong> certification from approved mills. Ready stock 1/2" to 16", SCH 40 to 160 at Vadodara.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>P9 Alloy Steel Pipe & Related Products — Stock List</h2>
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
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>P9 Pipe Specifications &amp; Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Standard",value:"ASTM A335 / ASME SA335 Grade P9"},
            {label:"Composition",value:"9% Chromium, 1% Molybdenum (9Cr-1Mo)"},
            {label:"Type",value:"Seamless alloy steel pipe (hot-finished)"},
            {label:"Size Range",value:"1/2\" to 16 inch (15NB to 400NB)"},
            {label:"Schedules",value:"SCH 40, 60, 80, 100, 120, 160"},
            {label:"Max Service Temp",value:"593°C (1100°F) continuous"},
            {label:"Heat Treatment",value:"Normalised (920°C) + Tempered (730°C min)"},
            {label:"Testing",value:"Hydrostatic, UT (SA-530), Hardness ≤241 HBW, PMI"},
            {label:"Certification",value:"MTC EN 10204 3.1/3.2, IBR Form III-C"},
            {label:"Mills",value:"Sumitomo, ISMT, Tenaris, Vallourec"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of ASTM A335 P9 Pipe</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {title:"Superheater Tube Banks",desc:"P9 pipe and T9 tubes for primary and secondary superheater sections in coal-fired boilers operating at 540-580°C"},
            {title:"Reheater Sections",desc:"9Cr-1Mo piping for single and double reheat stages where steam-side oxidation resistance is critical"},
            {title:"Fired Heater Coils",desc:"Refinery heater convection and radiant section piping handling hydrocarbons at elevated temperatures"},
            {title:"Boiler Desuperheater Piping",desc:"P9 headers and connecting piping between superheater stages and attemperators"},
            {title:"High-Temperature Process Lines",desc:"Petrochemical plant piping where oxidation resistance above 540°C is required"},
            {title:"Waste Heat Recovery",desc:"HRSG evaporator and superheater sections in combined cycle power plants"},
          ].map(app => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0 0 0.3rem"}}>{app.title}</p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{app.desc}</p>
            </div>
          ))}
        </div>

        {/* Why CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy P9 Alloy Steel Pipe from CMI?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>Superheater specialist:</strong> Dedicated stock of P9 pipe and T9 tubes for power plant superheater and reheater applications</li>
          <li><strong>IBR certified:</strong> All P9 pipe supplied with IBR Form III-C for Indian boiler regulation compliance</li>
          <li><strong>Premium mill sourcing:</strong> Sumitomo (Japan), ISMT (India), Tenaris (Italy) — original MTC with full traceability</li>
          <li><strong>PMI verified:</strong> 100% positive material identification on every pipe to confirm 9Cr-1Mo composition</li>
          <li><strong>Complete system supply:</strong> Matching P9 fittings (WP9), flanges (F9) and tube-to-header welding consumables</li>
          <li><strong>Technical guidance:</strong> Support with P9 vs P91 selection, welding procedures and PWHT specifications</li>
          <li><strong>Competitive pricing:</strong> Direct from mill — no intermediaries. Formal quotation within 4 hours</li>
          <li><strong>Proven track record:</strong> 13+ years supplying P9 to BHEL, Thermax, L&T and leading boiler OEMs</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — P9 Alloy Steel Pipe</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need P9 Alloy Steel Pipe? Get IBR-Certified Quote Today.</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>ASTM A335 P9 (9Cr-1Mo). Sizes 1/2 inch to 16". SCH 40–160. IBR Form III-C. Ready stock India.</p>
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
            {href:"/p5-alloy-steel-pipe-supplier",label:"P5 Alloy Steel Pipe Supplier"},
            {href:"/p11-alloy-steel-pipe-supplier",label:"P11 Alloy Steel Pipe Supplier"},
            {href:"/p22-alloy-steel-pipe-supplier",label:"P22 Alloy Steel Pipe Supplier"},
            {href:"/p92-alloy-steel-pipe-supplier",label:"P92 Alloy Steel Pipe Supplier"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/p9-alloy-steel-pipe-supplier" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — P9 Alloy Steel Pipe Supplier India | ASTM A335 P9 (9Cr-1Mo) | IBR Certified | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
