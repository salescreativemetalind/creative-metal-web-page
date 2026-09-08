/**
 * /steel-supplier-mundra
 * Target: "steel supplier Mundra", "Adani port pipe",
 * "industrial steel Mundra", "steel pipe supplier Mundra"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";
import { LocationContent } from "../components/LocationContent";

const PRODUCTS = [
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310S, 904L", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L X42–X65, IS 3589", sizes: "1/2\" to 60\"", type: "Seamless, ERW, LSAW", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P5, P11, P22, P91, A691", sizes: "1/2\" to 24\"", type: "Seamless (IBR)", stock: "Ready Stock" },
  { category: "SS Fittings & Flanges", grades: "SS 304/316L Elbows, Tees, Reducers, Flanges", sizes: "1/2\" to 48\"", type: "Buttweld, Forged, WN/SO/Blind", stock: "Ready Stock" },
  { category: "Duplex & Super Duplex", grades: "Duplex 2205, Super Duplex 2507", sizes: "1/2\" to 16\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Steel Plates", grades: "SA 516 Gr.70, IS 2062, Shipbuilding Grade", sizes: "6mm to 200mm thick", type: "Hot Rolled", stock: "Available" },
  { category: "Structural Steel", grades: "MS Angle, ISMC, ISMB, TMT Fe500D", sizes: "Per IS standards", type: "SAIL / Jindal / Tata", stock: "Ready Stock" },
  { category: "API Line Pipes", grades: "API 5L Gr.B to X70, PSL1 & PSL2", sizes: "2\" to 60\"", type: "Seamless, ERW, LSAW, HSAW", stock: "Ready Stock" },
];

const INDUSTRIES = [
  { icon: "\u{1F6A2}", name: "Adani Port (India's Largest)", desc: "India's largest private port — structural steel, MS pipes, API line pipes for port infrastructure, jetty construction, and material handling systems" },
  { icon: "\u26A1", name: "Adani Power Mundra", desc: "4,620 MW thermal power station — alloy P22/P91 for boiler piping, CS for BOP, SS for cooling water and desalination systems" },
  { icon: "\u{1F3ED}", name: "Tata Mundra UMPP", desc: "4,000 MW ultra mega power project — alloy steel P91 for supercritical boilers, IBR-certified materials, complete shutdown support" },
  { icon: "\u{1F6E2}\uFE0F", name: "OPaL Petrochemical (ONGC)", desc: "Dahej-Mundra petrochemical corridor — SS 316L/321 for process piping, alloy steel for cracker units, NACE materials" },
  { icon: "\u{1F3D7}\uFE0F", name: "Mundra SEZ Industries", desc: "Multi-product SEZ — pipes, fittings, structural steel for manufacturing units, export-oriented factories, and warehousing facilities" },
  { icon: "\u{1F9C2}", name: "Salt & Chemical Works", desc: "Kutch's salt and soda ash industry — SS 316L for brine systems, duplex for chloride environments, FRP-lined CS" },
];

const FAQS = [
  { q: "Who is the best steel supplier in Mundra, Gujarat?", a: "Creative Metal Industries (CMI) is a leading steel supplier serving Mundra's massive industrial complex from Vadodara — just 350 km away with SAME-DAY delivery. We supply structural steel and API pipes for Adani Port, alloy steel for Adani Power and Tata UMPP, SS and duplex for petrochemical units, and complete piping materials for SEZ industries. Our 2000+ tonne ready stock and Gujarat location give us unmatched logistics advantage for Mundra projects." },
  { q: "How fast can steel be delivered to Mundra from Vadodara?", a: "SAME-DAY delivery — Mundra is approximately 350 km from our Vadodara warehouse (about 6 hours by road). Materials dispatched in the morning reach Mundra by evening. This speed is critical for power plant shutdowns at Adani and Tata UMPP where downtime costs run into crores per day. We maintain dedicated Kutch-route transport and can dispatch emergency materials within 2 hours of order confirmation, including weekends and holidays." },
  { q: "Do you supply steel for Adani Port Mundra projects?", a: "Yes, we are a regular supplier to contractors working at Adani Port Mundra — India's largest private port handling 300+ MMT annually. We supply API 5L line pipes for pipeline installations, structural steel (MS angles, channels, beams, plates) for jetty and berth construction, MS pipes (IS 3589) for piling and foundations, SS 316L for seawater-exposed applications, and duplex 2205 for desalination systems. Complete material traceability with original mill test certificates provided." },
  { q: "What materials are needed for Mundra power plants?", a: "Mundra hosts two mega power plants — Adani Power (4,620 MW) and Tata UMPP (4,000 MW supercritical). For these we supply alloy steel P91 pipes for supercritical boiler circuits (main steam, hot reheat), P22 for intermediate circuits, P11 for lower-pressure sections, carbon steel for BOP (balance of plant) piping, SS 304/316L for cooling water and DM plant piping, and flanges/fittings in matching alloy grades. All boiler materials IBR Form III-C certified with TPI witness." },
  { q: "Can you supply export-quality pipes through Mundra SEZ?", a: "Absolutely. We supply export-quality piping materials to units in Mundra SEZ and can support documentation required for SEZ transactions. Our materials meet international standards (ASTM, ASME, API, EN) with third-party inspection certificates from agencies like TUV, Lloyd's, and BV. We can supply materials against CT-1 forms for SEZ units and provide all export documentation including packing lists, certificates of origin, and inspection releases as required." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-supplier-mundra#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries — Steel Supplier Mundra","description":"Leading steel supplier for Mundra — Adani Port, Adani Power, Tata UMPP. Structural steel, API pipes, alloy steel. Same-day delivery from Vadodara.","telephone":"+919998280619","url":"https://www.creativemetalind.com/steel-supplier-mundra","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"Place","name":"Mundra","containedInPlace":{"@type":"State","name":"Gujarat"}},"priceRange":"$$"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Supplier Mundra","item":"https://www.creativemetalind.com/steel-supplier-mundra"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelSupplierMundra() {
  return (
    <>
      <Title>Steel Supplier Mundra | Adani Port & Power Pipes | CMI</Title>
      <Meta name="robots" content="noindex, follow" />
      <Meta name="description" content="Steel supplier Mundra — structural steel, API pipes for Adani Port, alloy steel for power plants. SAME-DAY delivery from Vadodara. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-supplier-mundra" />
      <Meta property="og:title" content="Steel Supplier Mundra | Adani Port, Power Plants | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Steel supplier Mundra — same-day delivery of structural steel, API pipes for port & power. CMI Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-supplier-mundra" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Supplier Mundra | Adani Port & Power Pipes | CMI" />
      <Meta name="twitter:description" content="Steel supplier Mundra — same-day delivery, API pipes, alloy steel for Adani complex." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Steel Supplier Mundra" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Supplier Mundra</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Supplier in Mundra — Adani Port, Power Plants &amp; SEZ, Same-Day Delivery
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> serves Mundra — India's busiest private port and a major power/industrial hub — with <strong>SAME-DAY delivery from Vadodara (350 km)</strong>. Mundra's industrial landscape includes <strong>Adani Port</strong> (India's largest private port handling 300+ MMT/year), <strong>Adani Power's 4,620 MW station</strong>, <strong>Tata Mundra UMPP (4,000 MW supercritical)</strong>, OPaL petrochemical, and the Mundra SEZ. This creates massive demand for structural steel, API line pipes, alloy steel for power generation, and SS/duplex for petrochemical and port applications. Our Vadodara warehouse stocks 2000+ tonnes — no other Gujarat supplier can match our combination of stock depth and same-day delivery speed to Kutch district.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range — Pipes, Fittings &amp; Steel for Mundra</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Mundra Industries Choose Creative Metal Industries</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>SAME-DAY delivery to Mundra:</strong> 350 km from Vadodara (6 hours) — morning dispatch arrives by evening. Fastest supplier for Kutch industrial projects</li>
            <li><strong>Adani Port approved:</strong> Structural steel, API line pipes, MS piling pipes — complete range for port expansion, jetty construction, material handling</li>
            <li><strong>Power plant specialist:</strong> IBR-certified P91 for supercritical boilers at Tata UMPP, P22/P11 for Adani Power — shutdown/turnaround support</li>
            <li><strong>SEZ documentation support:</strong> CT-1 compatible supply, international standards compliance (ASTM/ASME/API/EN), third-party inspection</li>
            <li><strong>Complete structural range:</strong> MS angles, channels, beams, plates, TMT bars — one source for all construction and infrastructure needs</li>
            <li><strong>Marine/port-grade materials:</strong> Duplex 2205 for seawater, SS 316L for corrosive coastal environment, heavy structural for marine structures</li>
            <li><strong>Same Gujarat state advantage:</strong> No interstate logistics complications, common GST, faster material flow and invoicing</li>
            <li><strong>2000+ tonne ready stock:</strong> API 5L, alloy steel, SS, structural — all from warehouse, no mill lead time for Mundra emergencies</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Mundra &amp; Kutch</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas in Mundra &amp; Kutch District</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["Adani Port Complex","Adani Power Station","Tata UMPP Mundra","Mundra SEZ","Gandhidham Industrial","Kandla Port Area","Adipur","Anjar Industrial","Bhuj Industrial","Nakhatrana","Mandvi","Kutch Cement Belt"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Port &amp; Power — Complete Steel Solutions for Mundra</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Mundra's unique combination of port infrastructure and mega power generation demands a supplier who understands both sectors. Creative Metal Industries supplies <strong>API 5L line pipes (Gr.B to X70)</strong> for port pipeline systems, <strong>heavy structural steel</strong> (IS 2062 plates, MS beams, channels) for jetty and berth construction, <strong>alloy P91 for supercritical boiler service</strong> at Tata UMPP, <strong>P22/P11 for Adani Power's conventional boilers</strong>, <strong>SS 316L and duplex 2205</strong> for desalination and seawater cooling at both port and power facilities, and <strong>MS piling pipes</strong> (IS 3589) for marine foundation work. Whether it's a routine maintenance order or an emergency during a boiler outage, our same-day delivery from Vadodara ensures Mundra never waits for critical materials.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Steel Supplier Mundra</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Steel in Mundra? Same-Day Delivery!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>API Pipes, Alloy Steel, Structural — Ready stock. Same-day from Vadodara to Mundra (350 km).</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4DE}"} +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4AC}"} WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote {"\u2192"}</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/alloy-steel-pipe-supplier-india",label:"Alloy Steel Pipe Supplier India"},
            {href:"/steel-supplier-kandla",label:"Steel Supplier Kandla"},
            {href:"/steel-supplier-jamnagar",label:"Steel Supplier Jamnagar"},
            {href:"/carbon-steel-pipe-fittings-vadodara",label:"Carbon Steel Pipe Fittings"},
            {href:"/steel-supplier-hazira",label:"Steel Supplier Hazira"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <LocationContent slug="mundra" />
      
        <RelatedPages currentPath="/steel-supplier-mundra" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Steel Supplier Mundra | Adani Port & Power, Tata UMPP | Same-Day Delivery | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
