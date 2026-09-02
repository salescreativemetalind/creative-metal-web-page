/**
 * /steel-pipe-supplier-bhubaneswar
 * Target: "pipe supplier Bhubaneswar", "IOCL Paradip pipe",
 * "steel Odisha", "Kalinganagar steel supplier"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";
import { LocationContent } from "../components/LocationContent";

const PRODUCTS = [
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L X42–X70, IS 1239/3589", sizes: "1/2\" to 60\"", type: "Seamless, ERW, LSAW", stock: "Ready Stock" },
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310S, 904L, Duplex 2205", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "API Line Pipes", grades: "API 5L Gr.B to X70, PSL1 & PSL2, NACE MR0175", sizes: "2\" to 60\"", type: "Seamless, ERW, LSAW", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P5, P9, P11, P22, P91 (IBR Certified)", sizes: "1/2\" to 24\"", type: "Seamless", stock: "Ready Stock" },
  { category: "SS Fittings & Flanges", grades: "SS 304/316L Elbows, Tees, Reducers, WN/SO/Blind Flanges", sizes: "1/2\" to 48\"", type: "Buttweld, Forged", stock: "Ready Stock" },
  { category: "Duplex & Super Duplex", grades: "Duplex 2205, Super Duplex 2507", sizes: "1/2\" to 16\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Steel Plates", grades: "SA 516 Gr.60/70, SA 387 Gr.11/22, NACE, API 2H-50", sizes: "6mm to 200mm thick", type: "Hot Rolled", stock: "Ready Stock" },
  { category: "Exotic Alloys", grades: "Inconel 625, Hastelloy C276, Monel 400, Incoloy 825", sizes: "1/2\" to 10\"", type: "Seamless", stock: "Available" },
];

const INDUSTRIES = [
  { icon: "\u{1F6E2}\uFE0F", name: "IOCL Paradip Refinery", desc: "India's newest 15 MTPA refinery — API line pipes, alloy steel P91/P22 for high-temp service, SS 316L, NACE materials for crude/product piping systems" },
  { icon: "\u{1F3ED}", name: "Tata Steel Kalinganagar", desc: "Tata Steel's 8 MTPA integrated steel plant expansion — alloy pipes, SS for process, structural steel for plant infrastructure and maintenance" },
  { icon: "\u26A1", name: "NALCO (Aluminium)", desc: "National Aluminium Company — alloy steel for smelter high-temperature systems, CS piping for alumina refinery, SS for caustic service environments" },
  { icon: "\u{1F528}", name: "SAIL Rourkela Steel Plant", desc: "Steel Authority of India's Rourkela facility — alloy steel, SS pipes for coke oven and blast furnace gas systems, IBR tubes for power plant" },
  { icon: "\u26FD", name: "ONGC / GAIL (Gas Pipeline)", desc: "East coast gas pipeline network — API 5L X60/X65 LSAW pipes, NACE-compliant fittings, inline inspection tools material support" },
  { icon: "\u{1F3D7}\uFE0F", name: "Angul Aluminium & Steel Hub", desc: "Vedanta, JSPL Angul operations — large-diameter pipes, structural steel, alloy materials for smelter and steel plant expansion projects" },
];

const FAQS = [
  { q: "Who is the best steel pipe supplier in Bhubaneswar, Odisha?", a: "Creative Metal Industries (CMI) from Vadodara is a leading steel pipe supplier serving Odisha's major industrial projects — IOCL Paradip Refinery, Tata Steel Kalinganagar, NALCO, and Rourkela Steel Plant. We deliver within 2-3 days across Odisha with comprehensive stock of API line pipes, alloy steel, SS, and NACE-compliant materials. Our proven track record supplying refineries and steel plants across India, combined with competitive pricing, makes us the preferred choice for Odisha's heavy industrial sector." },
  { q: "How fast can steel pipes be delivered to Bhubaneswar/Odisha from Vadodara?", a: "2-3 day delivery — Bhubaneswar is approximately 1,600 km from Vadodara. We dispatch via dedicated full-truck-load transport, reaching Bhubaneswar in 2-3 days. For IOCL Paradip (130 km from Bhubaneswar), materials reach in 3 days. For Kalinganagar (120 km) and Angul (150 km), delivery is 2-3 days. For large project orders, we arrange advance dispatches in phased schedules matching your construction/shutdown timelines. Rail transport available for very heavy shipments." },
  { q: "Do you supply API pipes for IOCL Paradip Refinery?", a: "Yes, API 5L line pipes are a core product for IOCL Paradip's operations. We supply Grade B to X70 in PSL1 and PSL2 specifications, available in seamless (2\"-24\"), ERW (2\"-24\"), and LSAW (24\"-60\"). NACE MR0175 compliant for sour crude processing. Also supply alloy steel P91/P22 for high-temperature distillation column piping, SS 316L for chemical injection, and complete flanges/fittings packages. All materials with TPI (third-party inspection) coordination and comprehensive documentation packages required for refinery projects." },
  { q: "Can you supply alloy steel IBR pipes for Odisha's power plants?", a: "Absolutely. We supply IBR-certified alloy steel pipes for power plants across Odisha: P91 for main steam lines (high temperature/pressure), P22 for hot reheat, P11 for intermediate pressure, and P5/P9 for specific applications. All supplied with IBR Form III-C certification, stage-wise inspection records, and heat treatment documentation. We've supplied to multiple thermal power projects and understand the documentation requirements of Indian Boiler Regulations. NTPC Talcher, CPPs at steel plants, and captive power units are our regular customers." },
  { q: "What materials do you supply for Tata Steel Kalinganagar?", a: "For Tata Steel Kalinganagar's expansion and maintenance, we supply: alloy steel pipes (P11/P22/P91) for boiler and power systems, SS 304/316L for coke oven gas cleaning, carbon steel pipes for water, air, and general utilities, API 5L for gas distribution within plant, high-temperature 310S for heat treatment furnace environments, and structural steel for plant maintenance and minor expansions. Our experience supplying major steel plants (including Essar/AM-NS Hazira, JSW) means we understand the materials, documentation, and delivery schedules steel plants require." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-pipe-supplier-bhubaneswar#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries — Pipe Supplier Bhubaneswar Odisha","description":"Steel pipe supplier for Odisha — API pipes for IOCL Paradip, alloy steel for Tata Steel Kalinganagar, NALCO, SAIL Rourkela. 2-3 day delivery from Vadodara.","telephone":"+919998280619","url":"https://www.creativemetalind.com/steel-pipe-supplier-bhubaneswar","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"Place","name":"Bhubaneswar & Odisha Industrial","containedInPlace":{"@type":"State","name":"Odisha"}},"priceRange":"$$"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Pipe Supplier Bhubaneswar","item":"https://www.creativemetalind.com/steel-pipe-supplier-bhubaneswar"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelPipeSupplierBhubaneswar() {
  return (
    <>
      <Title>Pipe Supplier Bhubaneswar | IOCL Paradip | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Steel pipe supplier Bhubaneswar — API pipes for IOCL Paradip, alloy steel for Tata Steel Kalinganagar & NALCO. 2-3 day delivery. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-pipe-supplier-bhubaneswar" />
      <Meta property="og:title" content="Pipe Supplier Bhubaneswar | IOCL Paradip & Odisha Industries | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Pipe supplier Bhubaneswar — API, alloy steel, SS for IOCL Paradip, Tata Steel, NALCO. 2-3 day delivery from Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-pipe-supplier-bhubaneswar" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Pipe Supplier Bhubaneswar | IOCL Paradip | CMI" />
      <Meta name="twitter:description" content="Pipe supplier Odisha — API pipes, alloy steel for refinery & steel plants. 2-3 day delivery." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Pipe Supplier Bhubaneswar" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Pipe Supplier Bhubaneswar</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Pipe Supplier in Bhubaneswar — IOCL Paradip, Tata Steel &amp; Odisha Industries
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is a trusted <strong>pipe supplier for Bhubaneswar</strong> and Odisha's heavy industrial sector — delivering API pipes, alloy steel, and specialty materials within <strong>2-3 days from Vadodara</strong>. Odisha is India's emerging industrial powerhouse with <strong>IOCL Paradip Refinery</strong> (15 MTPA — India's newest and most modern), <strong>Tata Steel Kalinganagar</strong> (expanding to 8 MTPA), <strong>NALCO Damanjodi/Angul</strong>, <strong>SAIL Rourkela Steel Plant</strong>, and massive aluminium/steel investments by Vedanta and JSPL in Angul. This concentration of heavy industry — refining, steel making, aluminium smelting, and power generation — requires reliable supply of API line pipes, alloy steel for high-temperature service, NACE-compliant materials, and industrial SS piping.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range — Pipes &amp; Steel for Odisha Industries</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Odisha's Heavy Industries Choose Creative Metal Industries</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>2-3 day delivery across Odisha:</strong> Dedicated transport from Vadodara reaching Paradip, Kalinganagar, Angul, Rourkela — all major industrial locations covered</li>
            <li><strong>Refinery piping specialist:</strong> API 5L PSL2, NACE MR0175 materials, alloy P91/P22, SS 316L — complete IOCL Paradip material requirements from single source</li>
            <li><strong>IBR certified alloy steel:</strong> P91, P22, P11, P5 with Form III-C certification for power plants at steel works, refinery, and captive power applications</li>
            <li><strong>Steel plant experience:</strong> Supplied Essar/AM-NS Hazira, understand steel plant material needs — coke oven, blast furnace, BOF, and rolling mill applications</li>
            <li><strong>NACE/sour service compliant:</strong> Controlled chemistry, hardness-tested materials mandatory for Paradip's sour crude processing operations</li>
            <li><strong>Large-diameter LSAW pipes:</strong> API 5L up to 60\" diameter for refinery piping and cross-country pipeline projects in Odisha</li>
            <li><strong>Project-scale quantities:</strong> Capacity to supply 100+ tonnes per order for shutdown and expansion projects — phased delivery planning included</li>
            <li><strong>TPI coordination:</strong> Third-party inspection coordination (TUV, LRIS, BV) at our warehouse before dispatch — saves inspection travel costs for Odisha buyers</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Odisha &amp; Eastern India</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas in Odisha &amp; Eastern India</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["IOCL Paradip","Tata Steel Kalinganagar","NALCO Angul/Damanjodi","SAIL Rourkela","Vedanta Jharsuguda","JSPL Angul","Bhubaneswar Industrial","Cuttack/Choudwar","Paradeep Port","Dhamra Port","Sambalpur Industrial","Jajpur Road Industrial"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Odisha's Industrial Boom — CMI's Piping Solutions</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Odisha is experiencing India's largest concentration of heavy industrial investment — new refineries, expanding steel plants, aluminium smelters, and power plants creating unprecedented demand for industrial piping. Creative Metal Industries supports this growth with dedicated supply channels: <strong>API 5L X60/X65 line pipes</strong> for IOCL Paradip's crude and product pipelines, <strong>alloy steel P91/P22</strong> for high-temperature refinery distillation and power plant HRSG, <strong>SS 316L/321</strong> for chemical processing in alumina refineries, <strong>NACE-compliant carbon steel</strong> for sour crude handling at Paradip, <strong>large-bore LSAW pipes</strong> for cross-country pipelines by GAIL and IOCL, and <strong>structural steel</strong> for plant infrastructure. Our experience supplying Gujarat's heavy industrial belt (ONGC Hazira, Essar Steel, refineries) translates directly to Odisha's similar industrial profile — same materials, same standards, proven reliability delivered 2-3 days east.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Pipe Supplier Bhubaneswar</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Steel Pipes in Odisha? 2-3 Day Delivery!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>API Pipes, Alloy Steel, SS, NACE Materials — Ready stock. 2-3 day delivery to Paradip, Kalinganagar, Angul & all Odisha.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4DE}"} +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4AC}"} WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote {"\u2192"}</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/steel-pipe-supplier-kolkata",label:"Pipe Supplier Kolkata"},
            {href:"/steel-supplier-haldia",label:"Steel Supplier Haldia"},
            {href:"/alloy-steel-pipe-supplier-india",label:"Alloy Steel Pipe Supplier India"},
            {href:"/nace-hic-steel-plate-supplier-india",label:"NACE HIC Steel Plate Supplier"},
            {href:"/steel-pipe-supplier-vizag",label:"Pipe Supplier Vizag"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <LocationContent slug="bhubaneswar" />
      
        <RelatedPages currentPath="/steel-pipe-supplier-bhubaneswar" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Pipe Supplier Bhubaneswar | IOCL Paradip, Tata Steel, NALCO | API, Alloy, SS Pipes | 2-3 Day Delivery | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
