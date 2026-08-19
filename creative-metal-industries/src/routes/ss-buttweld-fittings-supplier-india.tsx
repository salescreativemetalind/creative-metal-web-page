/**
 * /ss-buttweld-fittings-supplier-india
 * Target: "SS buttweld fittings supplier India", "SS pipe fittings supplier India",
 * "ASTM A403 fittings supplier", "stainless steel buttweld fittings India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade:"SS 304/304L", spec:"ASTM A403 WP304/WP304L", sizes:"1/2\" to 48\"", schedule:"SCH 5S–XXS", apps:"Food, dairy, general chemical", stock:"Ready Stock" },
  { grade:"SS 316/316L", spec:"ASTM A403 WP316/WP316L", sizes:"1/2\" to 48\"", schedule:"SCH 5S–XXS", apps:"Marine, pharma, chloride service", stock:"Ready Stock" },
  { grade:"SS 321", spec:"ASTM A403 WP321", sizes:"1/2\" to 24\"", schedule:"SCH 10S–160", apps:"High-temp stabilised piping", stock:"Ready Stock" },
  { grade:"SS 317L", spec:"ASTM A403 WP317L", sizes:"1/2\" to 16\"", schedule:"SCH 10S–80S", apps:"Aggressive acid, pulp & paper", stock:"Available" },
  { grade:"SS 310S", spec:"ASTM A403 WP310S", sizes:"1/2\" to 16\"", schedule:"SCH 10S–80S", apps:"Furnace, high-temp oxidation", stock:"Available" },
  { grade:"SS 347", spec:"ASTM A403 WP347", sizes:"1/2\" to 12\"", schedule:"SCH 10S–80S", apps:"Nb-stabilised high-temp", stock:"Available" },
  { grade:"SS 904L", spec:"ASTM A403 WP904L", sizes:"1/2\" to 12\"", schedule:"SCH 10S–40S", apps:"Sulphuric/phosphoric acid", stock:"Available" },
  { grade:"Duplex 2205", spec:"ASTM A815 UNS S31803", sizes:"1/2\" to 24\"", schedule:"SCH 10S–80S", apps:"Oil & gas, desalination", stock:"Ready Stock" },
  { grade:"Super Duplex 2507", spec:"ASTM A815 UNS S32750", sizes:"1/2\" to 12\"", schedule:"SCH 10S–80S", apps:"Offshore, subsea, seawater", stock:"Available" },
];

const FITTINGS = [
  { type:"45° Elbow", desc:"Low-angle directional change, reduces turbulence in flow" },
  { type:"90° Elbow LR", desc:"Long radius elbow (1.5D), standard directional change" },
  { type:"90° Elbow SR", desc:"Short radius elbow (1D), used where space is limited" },
  { type:"Equal Tee", desc:"Branch connection at 90°, same bore all three ends" },
  { type:"Reducing Tee", desc:"Branch connection with reduced outlet for lower-flow branch lines" },
  { type:"Concentric Reducer", desc:"Gradual pipe size reduction, maintains centre-line alignment" },
  { type:"Eccentric Reducer", desc:"Size reduction with flat side — prevents air lock in horizontal runs" },
  { type:"End Cap", desc:"Seals pipe end permanently, full pressure containment" },
  { type:"Stub End", desc:"Used with lap-joint flange for easy alignment and dismantling" },
];

const FAQS = [
  { q:"What types of SS buttweld fittings do you supply in India?", a:"We supply the full range — 45° elbows, 90° elbows (long radius and short radius), equal tees, reducing tees, concentric reducers, eccentric reducers, end caps, stub ends, and crosses. All fittings are manufactured to ASTM A403 (austenitic) and ASTM A815 (duplex/super duplex), conforming to ASME B16.9 and MSS SP-43 dimensional standards." },
  { q:"What sizes and schedules are available?", a:"We stock SS buttweld fittings from 1/2 inch (15NB) up to 48 inches (1200NB). Schedules available include SCH 5S, 10S, 20, 40S, 40, 80S, 80, 120, 160 and XXS. Larger sizes (above 24 inch) are typically available in SCH 10S to SCH 40. Custom wall thicknesses available on request." },
  { q:"Do your SS buttweld fittings come with material test certificates?", a:"Yes. Every fitting ships with an original Mill Test Certificate (MTC) per EN 10204 3.1 or 3.2. Certificates include chemical composition, mechanical properties, heat number traceability, and applicable test results (hydro, PMI, IGC). IBR Form III-C certification is available for boiler applications." },
  { q:"What is the difference between ASTM A403 and ASTM A815 fittings?", a:"ASTM A403 covers wrought austenitic stainless steel fittings — grades like WP304, WP316L, WP321, WP347, WP904L. ASTM A815 covers duplex and super duplex stainless steel fittings — UNS S31803 (Duplex 2205) and UNS S32750 (Super Duplex 2507). Both use the same ASME B16.9 dimensions." },
  { q:"Do you deliver SS buttweld fittings across India?", a:"Yes. We deliver pan-India from our Vadodara warehouse. Same-day dispatch for Gujarat (Vadodara, Ahmedabad, Surat, Bharuch, Dahej GIDC). 2-4 day delivery to Mumbai, Delhi, Chennai, Kolkata, Hyderabad, Pune, Visakhapatnam and all industrial locations across India." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/ss-buttweld-fittings-supplier-india#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries","telephone":"+919998280619","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"SS Buttweld Fittings Supplier India","item":"https://www.creativemetalind.com/ss-buttweld-fittings-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SsButtweldFittingsSupplierIndia() {
  return (
    <>
      <Title>SS Buttweld Fittings Supplier India | ASTM A403 | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="SS buttweld fittings supplier India — elbows, tees, reducers, caps in SS 304, 316L, 321, Duplex 2205. ASTM A403, ASME B16.9. SCH 10S–XXS." />
      <Link rel="canonical" href="https://www.creativemetalind.com/ss-buttweld-fittings-supplier-india" />
      <Meta property="og:title" content="SS Buttweld Fittings Supplier India | ASTM A403 | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="SS buttweld fittings supplier India — elbows, tees, reducers, caps. SS 304, 316L, Duplex 2205. ASTM A403, ASME B16.9. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/ss-buttweld-fittings-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS Buttweld Fittings Supplier India | ASTM A403 | CMI" />
      <Meta name="twitter:description" content="SS buttweld fittings supplier India — 304, 316L, 321, Duplex 2205. ASME B16.9. SCH 5S–XXS. Ready stock Vadodara." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — SS Buttweld Fittings Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>SS Buttweld Fittings Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"0 0 1rem","line-height":"1.2"}}>
            SS Buttweld Fittings Supplier in India — ASTM A403, All Grades
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is India's leading <strong>SS buttweld fittings supplier</strong> stocking 2,000+ fittings in all sizes and grades. We supply elbows (45° and 90° LR/SR), tees, concentric and eccentric reducers, end caps, and stub ends in SS 304/304L, 316/316L, 317L, 321, 310S, 347, 904L, Duplex 2205 and Super Duplex 2507 — manufactured to <strong>ASTM A403</strong>, ASTM A815, conforming to ASME B16.9 and MSS SP-43 dimensional standards. IBR Form III-C, NACE MR-01-75, PMI tested. Same-day dispatch from our Vadodara warehouse across India.
          </p>
        </div>

        {/* Fitting Types */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Types of SS Buttweld Fittings We Supply</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {FITTINGS.map(f => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"0.95rem","font-weight":"700",color:"#111827",margin:"0 0 0.3rem"}}>{f.type}</p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>SS Buttweld Fittings Grades — Ready Stock India</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"700px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Grade</th><th style={{padding:"0.7rem 0.8rem"}}>Specification</th><th style={{padding:"0.7rem 0.8rem"}}>Sizes</th><th style={{padding:"0.7rem 0.8rem"}}>Schedules</th><th style={{padding:"0.7rem 0.8rem"}}>Applications</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
            <tbody>
              {GRADES.map((g,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 0.8rem","font-weight":"700"}}>{g.grade}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.spec}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.sizes}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.schedule}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.apps}</td><td style={{padding:"0.6rem 0.8rem","text-align":"center",color:g.stock==="Ready Stock"?"#16a34a":"#d97706","font-weight":"700"}}>{g.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Specifications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Specifications &amp; Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Standards",value:"ASTM A403, A815, MSS SP-43"},
            {label:"Dimensions",value:"ASME B16.9, MSS SP-43"},
            {label:"Size Range",value:"1/2\" to 48\" (15NB to 1200NB)"},
            {label:"Schedules",value:"SCH 5S, 10S, 20, 40S, 40, 80S, 80, 120, 160, XXS"},
            {label:"Types",value:"45° Elbow, 90° LR/SR, Tee, Reducer, Cap, Stub End"},
            {label:"Testing",value:"Hydrostatic, PMI, Radiography, IGC, Hardness"},
            {label:"Certification",value:"MTC EN 10204 3.1/3.2, IBR Form III-C"},
            {label:"Surface",value:"Pickled, passivated, mill finish or polished"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Why Choose CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Choose CMI as Your SS Buttweld Fittings Supplier in India?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>2,000+ fittings in stock:</strong> All types, all grades, all schedules at our Vadodara warehouse — same-day dispatch nationwide</li>
          <li><strong>Reputed manufacturers:</strong> We stock fittings from Kanak Metal, Raaj Sagar, Ladhani Metal, Guru Gautam Steel — guaranteed quality</li>
          <li><strong>Full grade range:</strong> Austenitic (304 to 904L), Duplex 2205 and Super Duplex 2507 — single source for all your piping projects</li>
          <li><strong>IBR + MTC + PMI:</strong> Every fitting supplied with mandatory certifications for boiler, pressure vessel and critical service</li>
          <li><strong>TPI accepted:</strong> Third-party inspection under DNV, TUV, SGS, BVIS at our Vadodara facility</li>
          <li><strong>Value-added services:</strong> Marking, tagging, heat number stenciling, custom packing per project specs</li>
          <li><strong>Competitive pricing:</strong> Direct from manufacturer — no middleman. Formal quote within 2 hours</li>
          <li><strong>Since 2012:</strong> 13+ years supplying refineries, power plants, pharma and EPC contractors across India</li>
        </ul>

        {/* Industries */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Supply SS Buttweld Fittings To</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(220px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[{icon:"\u{1F6E2}\uFE0F",name:"Oil & Gas Refineries"},{icon:"\u{1F3ED}",name:"Petrochemical Plants"},{icon:"\u26A1",name:"Power & Energy"},{icon:"\u{1F9EA}",name:"Pharmaceutical"},{icon:"\u{1F331}",name:"Fertilizer Industry"},{icon:"\u{1F4A7}",name:"Water Treatment"},{icon:"\u2693",name:"Marine & Offshore"},{icon:"\u{1F3D7}\uFE0F",name:"EPC Contractors"}].map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem","text-align":"center"}}>
              <span style={{"font-size":"1.3rem"}}>{ind.icon}</span>
              <p style={{"font-size":"0.85rem","font-weight":"600",color:"#111827",margin:"0.3rem 0 0"}}>{ind.name}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — SS Buttweld Fittings India</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need SS Buttweld Fittings? Get a Quote in 2 Hours.</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>Elbows, tees, reducers, caps. SS 304, 316L, Duplex 2205. ASTM A403. ASME B16.9. IBR + MTC. Ready stock India.</p>
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
            {href:"/ss-pipe-supplier-vadodara",label:"SS Pipe Supplier Vadodara"},
            {href:"/stainless-steel-supplier-vadodara",label:"Full SS Range Vadodara"},
            {href:"/blog/ss-pipe-fittings-flanges-guide",label:"SS Fittings & Flanges Guide"},
            {href:"/ss-seamless-pipe-supplier-india",label:"SS Seamless Pipe India"},
            {href:"/ss-flanges-supplier-vadodara",label:"SS Flanges Supplier Vadodara"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/ss-buttweld-fittings-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — SS Buttweld Fittings Supplier India | ASTM A403 | ASME B16.9 | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
