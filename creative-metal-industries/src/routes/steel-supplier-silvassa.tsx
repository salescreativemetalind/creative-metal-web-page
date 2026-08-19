/**
 * /steel-supplier-silvassa
 * Target: "steel supplier Silvassa", "pipe fittings Silvassa Dadra Nagar",
 * "industrial steel Silvassa UT", "SS pipes Silvassa"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const PRODUCTS = [
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310S, 202, Duplex 2205", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L, IS 1239/3589", sizes: "1/2\" to 48\"", type: "Seamless, ERW, LSAW", stock: "Ready Stock" },
  { category: "SS Fittings & Flanges", grades: "SS 304/316L Elbows, Tees, Reducers, WN/SO/Blind Flanges", sizes: "1/2\" to 48\"", type: "Buttweld, Forged", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P5, P9, P11, P22, P91", sizes: "1/2\" to 24\"", type: "Seamless (IBR)", stock: "Ready Stock" },
  { category: "GI & MS Pipes", grades: "IS 1239 GI Heavy/Medium/Light, MS ERW, Square/Rectangular", sizes: "1/2\" to 6\" (round), various (hollow)", type: "ERW, Galvanized", stock: "Ready Stock" },
  { category: "Duplex & Super Duplex", grades: "Duplex 2205, Super Duplex 2507, Lean Duplex 2101", sizes: "1/2\" to 16\"", type: "Seamless & Welded", stock: "Available" },
  { category: "Steel Plates & Sheets", grades: "SS 304/316L Sheets, MS Plates IS 2062, Chequered", sizes: "0.5mm to 150mm", type: "HR, CR, BA Finish", stock: "Ready Stock" },
  { category: "Structural Steel", grades: "IS 2062 Gr.E250/E350, Beams, Channels, Angles, TMT", sizes: "Various standard sections", type: "Hot Rolled", stock: "Ready Stock" },
];

const INDUSTRIES = [
  { icon: "\u2699\uFE0F", name: "Engineering & Manufacturing", desc: "Silvassa's large engineering cluster — CNC, precision parts, machine tools — requires SS pipes, CS fittings, structural steel for plant infrastructure and product manufacturing" },
  { icon: "\u{1F48A}", name: "Pharmaceutical Industry", desc: "Pharma companies in Silvassa (tax-incentive driven) need electropolished SS 316L pipes, sanitary fittings, TC clamp connections for GMP-compliant process piping" },
  { icon: "\u{1F4E6}", name: "Plastic & Packaging", desc: "Plastic moulding and packaging industry uses SS pipes for cooling systems, CS for utility piping, structural steel for factory sheds and material handling systems" },
  { icon: "\u26A1", name: "Electrical & Electronics", desc: "Electrical equipment and electronics manufacturers require GI conduits, cable trays, SS enclosures, and precision tubing for component manufacturing" },
  { icon: "\u{1F35E}", name: "Food Processing", desc: "Food processing units in Silvassa need SS 304/316L food-grade pipes, dairy fittings, sanitary valves, and polished tubing for hygienic production lines" },
  { icon: "\u{1F697}", name: "Auto Components", desc: "Automotive parts manufacturers use precision steel tubes, CR sheets, structural steel for jigs/fixtures, and SS for exhaust and fuel system components" },
];

const FAQS = [
  { q: "Who is the best steel supplier in Silvassa, Dadra & Nagar Haveli?", a: "Creative Metal Industries (CMI) is Silvassa's nearest large-scale steel supplier — just 170 km from Vadodara with SAME-DAY delivery. We supply the full range: SS pipes for pharma/food, CS pipes for industrial, GI for construction, structural steel for factory sheds, and specialty alloys for engineering applications. Our ready stock of 2000+ tonnes and proximity make us faster and more competitive than Mumbai-based suppliers for Silvassa's diverse manufacturing sector." },
  { q: "How fast can steel be delivered to Silvassa from Vadodara?", a: "SAME-DAY delivery — Silvassa is approximately 170 km from our Vadodara warehouse (about 3 hours via NH-48 through Valsad). Morning orders are dispatched immediately and reach Silvassa industrial areas by afternoon. This is significantly faster than sourcing from Mumbai (160 km but through heavy traffic and congestion). For regular buyers, we maintain scheduled delivery runs to Silvassa and can arrange weekly stock replenishment at your factory." },
  { q: "Do you supply pharma-grade SS pipes for Silvassa's pharmaceutical industry?", a: "Yes, pharmaceutical-grade stainless steel piping is one of our specialties for Silvassa. We supply SS 316L seamless pipes with electropolished internal finish (Ra < 0.8 μm), TC (tri-clamp) fittings, sanitary valves, sight glasses, and orbital-weld quality tubes. These meet cGMP requirements for water-for-injection (WFI), purified water, CIP/SIP systems, and process piping in pharma plants. All materials with 3.1 mill certificates, surface finish reports, and material traceability documentation." },
  { q: "Why do Silvassa manufacturers prefer CMI over Mumbai suppliers?", a: "Three key advantages: (1) Faster delivery — 3 hours from Vadodara vs. 5-6 hours from Mumbai through heavy traffic; (2) Better pricing — Vadodara's lower operational costs translate to competitive rates; (3) No traffic/logistics headaches — Mumbai's congestion causes unpredictable delays, while NH-48 from Vadodara is a clear highway route. Additionally, as a Gujarat-based supplier, we understand the industrial needs of Silvassa's diverse manufacturing base that originally migrated from Gujarat." },
  { q: "Can you supply structural steel for factory construction in Silvassa?", a: "Yes, we supply complete structural steel packages for factory construction and expansion in Silvassa: I-beams (ISMB/ISHB), channels (ISMC/ISLC), angles, plates, hollow sections (square and rectangular tubes), TMT bars, and roofing materials. All conforming to IS 2062 Grade E250/E350. We also supply anchor bolts, base plates, and grating. For new factory projects, we can work with your structural consultant to provide optimized material lists with competitive bulk pricing and scheduled delivery." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-supplier-silvassa#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries — Steel Supplier Silvassa","description":"Leading steel supplier for Silvassa industrial hub — SS, CS, GI pipes, fittings, structural steel for engineering, pharma, food processing. Same-day delivery from Vadodara (170 km).","telephone":"+919998280619","url":"https://www.creativemetalind.com/steel-supplier-silvassa","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"Place","name":"Silvassa Industrial Area","containedInPlace":{"@type":"AdministrativeArea","name":"Dadra & Nagar Haveli"}},"priceRange":"$$"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Supplier Silvassa","item":"https://www.creativemetalind.com/steel-supplier-silvassa"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelSupplierSilvassa() {
  return (
    <>
      <Title>Steel Supplier Silvassa | Pipes & Fittings | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Steel supplier Silvassa — SS, CS, GI pipes & fittings for pharma, engineering & manufacturing. SAME-DAY delivery from Vadodara. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-supplier-silvassa" />
      <Meta property="og:title" content="Steel Supplier Silvassa | Dadra & Nagar Haveli | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Steel supplier Silvassa — SS, CS pipes, fittings, structural steel for industrial manufacturing hub. Same-day delivery from Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-supplier-silvassa" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Supplier Silvassa | Pipes & Fittings | CMI" />
      <Meta name="twitter:description" content="Steel supplier Silvassa — SS, CS pipes for pharma & engineering. Same-day delivery." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Steel Supplier Silvassa" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Supplier Silvassa</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Supplier in Silvassa — Engineering, Pharma &amp; Manufacturing Hub
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is the preferred <strong>steel supplier for Silvassa</strong> industrial zone — just <strong>170 km with SAME-DAY delivery</strong> from Vadodara. Silvassa (Dadra &amp; Nagar Haveli, Union Territory) is one of India's fastest-growing manufacturing hubs, attracting industries through favourable tax policies and excellent connectivity. The region houses over 3,500 manufacturing units spanning <strong>engineering and precision manufacturing</strong>, <strong>pharmaceuticals</strong>, <strong>plastic and packaging</strong>, <strong>electrical equipment</strong>, <strong>food processing</strong>, and <strong>automotive components</strong>. CMI provides the complete steel requirement — SS 316L for pharma GMP piping, food-grade tubes, carbon steel for industrial utilities, GI for construction, structural sections for factory buildings, and specialty alloys for engineering applications. Faster than Mumbai suppliers, more competitive in pricing, and with 2000+ tonnes ready stock.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range — Pipes, Fittings &amp; Steel for Silvassa</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"700px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Product</th><th style={{padding:"0.7rem 0.8rem"}}>Grades</th><th style={{padding:"0.7rem 0.8rem"}}>Sizes</th><th style={{padding:"0.7rem 0.8rem"}}>Type</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
            <tbody>
              {PRODUCTS.map((p,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 0.8rem","font-weight":"700"}}>{p.category}</td><td style={{padding:"0.6rem 0.8rem"}}>{p.grades}</td><td style={{padding:"0.6rem 0.8rem"}}>{p.sizes}</td><td style={{padding:"0.6rem 0.8rem"}}>{p.type}</td><td style={{padding:"0.6rem 0.8rem","text-align":"center",color:p.stock==="Ready Stock"?"#16a34a":"#d97706","font-weight":"700"}}>{p.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Silvassa Manufacturers Choose Creative Metal Industries</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>SAME-DAY delivery to Silvassa:</strong> Just 170 km (3 hours) from Vadodara — faster than Mumbai through traffic-free NH-48 highway route</li>
            <li><strong>Better than Mumbai pricing:</strong> Vadodara's lower overheads mean more competitive rates — significant savings on regular purchases for Silvassa factories</li>
            <li><strong>Pharma-grade SS specialist:</strong> Electropolished SS 316L, sanitary fittings, TC connections for GMP/cGMP compliant pharmaceutical process piping</li>
            <li><strong>Food-grade piping:</strong> SS 304/316L polished tubes, dairy fittings, hygienic valves for food processing and beverage plants in Silvassa</li>
            <li><strong>Complete structural steel:</strong> I-beams, channels, angles, plates, hollow sections, TMT — one-stop for factory construction and expansion</li>
            <li><strong>Diverse inventory for diverse industry:</strong> Engineering, pharma, food, electrical, auto — whatever your sector, we stock what you need</li>
            <li><strong>No logistics headaches:</strong> Clear highway delivery from Vadodara — no Mumbai traffic jams, port congestion, or unpredictable delays</li>
            <li><strong>2000+ tonne ready stock:</strong> Walk-in or call — immediate availability for most standard items without waiting for mill production</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Silvassa &amp; Dadra Nagar Haveli</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas in Silvassa &amp; Surrounding Region</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["Silvassa Industrial Estate","Masat Road Industrial","Khanvel Road Area","Amli Industrial","Dadra Industrial","Kilavni Industrial","Rakholi Area","Naroli Industrial","Kilvani GIDC","Daman Industrial","Vapi GIDC","Umbergaon GIDC"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Silvassa's Manufacturing Advantage — Our Steel Solutions</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Silvassa's manufacturing ecosystem is uniquely diverse, and Creative Metal Industries matches this diversity with our comprehensive product range. For the <strong>pharmaceutical sector</strong>, we supply mirror-finish SS 316L seamless pipes (Ra 0.4–0.8 μm), orbital-weld quality tubes, and complete sanitary fitting systems for WFI and clean utility piping. For <strong>engineering and precision manufacturing</strong>, we stock cold-drawn seamless tubes, precision bore pipes, and hydraulic tubing in various grades. <strong>Food processing plants</strong> get dairy-grade SS 304 polished tubes with TC clamp fittings. <strong>Electrical manufacturers</strong> source GI conduits, cable tray materials, and SS enclosure sheets. For <strong>factory construction</strong>, we provide structural steel packages — beams, columns, purlins, sheeting — delivered in phased schedules matching your construction timeline. One supplier for all your steel needs in Silvassa.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Steel Supplier Silvassa</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Steel in Silvassa? Same-Day Delivery!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>SS, CS, GI Pipes, Fittings, Structural Steel — Ready stock. Same-day from Vadodara to Silvassa (170 km).</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4DE}"} +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4AC}"} WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote {"\u2192"}</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/steel-supplier-vapi-gidc",label:"Steel Supplier Vapi GIDC"},
            {href:"/ss-seamless-pipe-supplier-india",label:"SS Seamless Pipe Supplier India"},
            {href:"/ss-flanges-supplier-vadodara",label:"SS Flanges Supplier Vadodara"},
            {href:"/carbon-steel-pipe-fittings-vadodara",label:"CS Pipe Fittings Vadodara"},
            {href:"/stainless-steel-supplier-vadodara",label:"Stainless Steel Supplier Vadodara"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/steel-supplier-silvassa" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Steel Supplier Silvassa | Dadra & Nagar Haveli | SS, CS, GI Pipes & Structural | Same-Day Delivery | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
