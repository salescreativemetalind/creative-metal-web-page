/**
 * /steel-supplier-jamnagar
 * Target: "steel supplier Jamnagar", "Reliance refinery pipe",
 * "Essar pipe Jamnagar", "steel pipe supplier Jamnagar"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";
import { LocationContent } from "../components/LocationContent";

const PRODUCTS = [
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310S, 347, 904L", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L X42–X70, IS 1239", sizes: "1/2\" to 48\"", type: "Seamless & ERW", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P5, P9, P11, P22, P91", sizes: "1/2\" to 24\"", type: "Seamless (IBR)", stock: "Ready Stock" },
  { category: "SS Fittings & Flanges", grades: "SS 304/316L Elbows, Tees, Reducers, Flanges", sizes: "1/2\" to 48\"", type: "Buttweld, Forged, WN/SO/Blind", stock: "Ready Stock" },
  { category: "Duplex & Super Duplex", grades: "Duplex 2205, Super Duplex 2507, Lean Duplex 2101", sizes: "1/2\" to 16\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Exotic Alloys", grades: "Inconel 625/800HT, Hastelloy C276, Monel 400", sizes: "1/2\" to 12\"", type: "Seamless", stock: "Available" },
  { category: "Steel Plates", grades: "SA 516 Gr.70, SA 387 Gr.11/22, Cladded, NACE", sizes: "6mm to 200mm thick", type: "Hot Rolled", stock: "Available" },
  { category: "API Line Pipes", grades: "API 5L Gr.B to X70, PSL1 & PSL2", sizes: "2\" to 60\"", type: "Seamless, LSAW, HSAW", stock: "Ready Stock" },
];

const INDUSTRIES = [
  { icon: "\u{1F6E2}\uFE0F", name: "Reliance Jamnagar Refinery", desc: "World's largest refinery complex (1.24 MMTPA) — alloy steel, SS, exotic alloys for continuous expansion and turnaround projects" },
  { icon: "\u26FD", name: "Nayara Energy (Essar)", desc: "20 MMTPA refinery at Vadinar — alloy pipes P91/P22, SS fittings, IBR-certified materials for shutdown and revamp projects" },
  { icon: "\u2699\uFE0F", name: "Brass Parts Manufacturing", desc: "Jamnagar's world-famous brass cluster — SS pipes for finishing, MS structures, precision tubes for CNC machining units" },
  { icon: "\u{1F9C2}", name: "Salt & Chemical Works", desc: "Gujarat's salt pans and chemical processing — SS 316L, duplex for brine handling, FRP-lined CS for salt crystallizers" },
  { icon: "\u{1F3ED}", name: "Cement & Limestone", desc: "Ambuja, Ultratech limestone belt — wear plates, structural steel, MS piping for material handling and kiln systems" },
  { icon: "\u26A1", name: "Power & Infrastructure", desc: "Adani Mundra corridor, Sikka power — alloy P22/P91 for boiler tubes, CS for balance-of-plant piping systems" },
];

const FAQS = [
  { q: "Who is the best steel supplier in Jamnagar, Gujarat?", a: "Creative Metal Industries (CMI) is a premier steel supplier serving Jamnagar's massive refinery sector since 2012. Located just 300 km away in Vadodara, we offer SAME-DAY dispatch and next-day delivery. We supply alloy steel pipes (P5/P9/P11/P22/P91) for Reliance and Nayara refineries, SS pipes and fittings, duplex steel, exotic alloys, and carbon steel. Our proximity to Jamnagar gives us a significant logistics advantage over Mumbai or Delhi-based suppliers." },
  { q: "How fast can you deliver steel pipes to Jamnagar from Vadodara?", a: "We offer SAME-DAY delivery to Jamnagar — our warehouse in Vadodara is just 300 km away (approximately 5 hours by road). Materials dispatched by morning reach Jamnagar the same evening. This is a massive advantage for refinery shutdown projects where every hour counts. No other pipe supplier in India can match this speed of delivery to Jamnagar. Express vehicles available 24/7 for emergency requirements at Reliance and Nayara refineries." },
  { q: "Do you supply pipes for Reliance Jamnagar Refinery projects?", a: "Yes, we are an established material supplier for EPC contractors working at Reliance Jamnagar Refinery — the world's largest single-location refinery complex. We supply IBR-certified alloy steel pipes (A335 P5, P9, P11, P22, P91), SS 304/316L/321/347 pipes and fittings, exotic alloys (Inconel, Hastelloy, Monel), and duplex steel. Complete documentation including MTC EN 10204 3.1/3.2, IBR Form III-C, TPI witness, PMI, and NACE compliance certificates provided." },
  { q: "What materials do you supply for Nayara Energy (Essar) Vadinar refinery?", a: "For Nayara Energy's 20 MMTPA refinery at Vadinar near Jamnagar, we supply the full range of process piping materials. This includes alloy steel P91 and P22 for high-temperature services, SS 321/347 for reformer piping, SS 316L for general chemical service, duplex 2205 for seawater systems, and API 5L line pipes for tank farm piping. We support both planned turnarounds and emergency material requirements with same-day dispatch from our Vadodara facility." },
  { q: "Can you supply structural steel and plates for Jamnagar projects?", a: "Absolutely. Beyond piping, we supply comprehensive structural steel and plate materials for Jamnagar's industrial projects. Our range includes SA 516 Gr.70 pressure vessel plates, SA 387 alloy plates for reactor vessels, IS 2062 structural plates, TMT bars (Fe 500D for civil construction), MS angles/channels/beams for plant structures, and wear-resistant plates for material handling. All materials from SAIL, Jindal, Tata, Essar — supplied with original mill test certificates." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-supplier-jamnagar#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries — Steel Supplier Jamnagar","description":"Leading steel supplier in Jamnagar offering pipes, fittings, alloy steel for Reliance Refinery, Nayara Energy and Gujarat industries. Same-day delivery from Vadodara.","telephone":"+919998280619","url":"https://www.creativemetalind.com/steel-supplier-jamnagar","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"City","name":"Jamnagar","containedInPlace":{"@type":"State","name":"Gujarat"}},"priceRange":"$$"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Supplier Jamnagar","item":"https://www.creativemetalind.com/steel-supplier-jamnagar"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelSupplierJamnagar() {
  return (
    <>
      <Title>Steel Supplier Jamnagar | Reliance Refinery Pipes | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Steel supplier Jamnagar — alloy steel, SS pipes for Reliance & Nayara refineries. SAME-DAY delivery from Vadodara (300 km). Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-supplier-jamnagar" />
      <Meta property="og:title" content="Steel Supplier Jamnagar | Reliance & Nayara Refinery Pipes | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Steel supplier Jamnagar — same-day delivery of alloy, SS, CS pipes for refineries. CMI Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-supplier-jamnagar" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Supplier Jamnagar | Reliance Refinery Pipes | CMI" />
      <Meta name="twitter:description" content="Steel supplier Jamnagar — same-day delivery, alloy & SS pipes for refineries." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Steel Supplier Jamnagar" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Supplier Jamnagar</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Supplier in Jamnagar — Reliance &amp; Nayara Refinery Pipes, Same-Day Delivery
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is Jamnagar's closest steel supplier from our Vadodara base — just <strong>300 km with SAME-DAY delivery</strong>. Jamnagar hosts the <strong>world's largest refinery complex (Reliance, 1.24 MMTPA)</strong> and Nayara Energy's 20 MMTPA refinery at Vadinar, creating India's highest concentration of refinery-grade piping demand. We supply alloy steel pipes (P5/P9/P11/P22/P91), stainless steel pipes and fittings, duplex and super duplex, exotic alloys (Inconel, Hastelloy, Monel), and API line pipes — all from ready stock with IBR certification and complete TPI documentation. When you're working against a shutdown clock, our same-day delivery from Vadodara is unmatched by any Mumbai or Delhi supplier.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range — Pipes, Fittings &amp; Steel for Jamnagar</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Jamnagar Industries Choose Creative Metal Industries</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>SAME-DAY delivery guaranteed:</strong> Vadodara to Jamnagar is just 300 km (5 hours) — morning dispatch reaches by evening. No other supplier matches this speed</li>
            <li><strong>Reliance Refinery approved:</strong> Proven vendor for EPC contractors at world's largest refinery — alloy P91/P22, IBR pipes, exotic alloys from ready stock</li>
            <li><strong>Nayara Energy (Essar) specialist:</strong> Regular supply to Vadinar refinery turnarounds — complete IBR and TPI documentation, emergency 24/7 dispatch</li>
            <li><strong>24/7 emergency supply:</strong> Dedicated vehicles for refinery shutdown emergencies — call anytime, we dispatch within hours, deliver same day</li>
            <li><strong>Complete exotic alloy stock:</strong> Inconel 625/800HT, Hastelloy C276, Monel 400, Alloy 20 — critical materials ready without 12-week mill lead time</li>
            <li><strong>Full IBR &amp; TPI support:</strong> IBR Form III-C, stage-wise inspection, EN 10204 3.1/3.2, PMI — all documentation as per Reliance/Nayara specs</li>
            <li><strong>Gujarat's own supplier:</strong> No interstate logistics hassles, same GST state, faster invoicing and material flow</li>
            <li><strong>Direct mill pricing:</strong> Sumitomo, Vallourec, ISMT, Sandvik, Jindal — factory-direct rates without broker chains</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Jamnagar &amp; Saurashtra</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas in Jamnagar &amp; Saurashtra</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["Reliance Moti Khavdi","Vadinar (Nayara Energy)","Jamnagar GIDC","Sikka Industrial","Rajkot Industrial","Morbi Ceramic Belt","Porbandar","Junagadh Industrial","Surendranagar","Amreli","Bhavnagar GIDC","Veraval"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Refinery Piping Solutions for Jamnagar</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Jamnagar's twin mega-refineries create unparalleled demand for specialized piping materials. Creative Metal Industries maintains dedicated inventory for refinery applications — <strong>ASTM A335 P91 pipes</strong> for high-temperature reformer service (up to 600°C), <strong>P22 and P11</strong> for heat exchanger and boiler piping, <strong>SS 321/347H</strong> for cracker and reactor systems, <strong>Inconel 800HT</strong> for reformer outlet pigtails, <strong>duplex 2205</strong> for crude desalter and seawater systems, and <strong>API 5L X65/X70</strong> for tank farm and offsite piping. Every material is backed by complete documentation — IBR Form III-C for boiler piping, NACE MR0175 compliance for sour service, and TPI witness for critical applications. Our same-day delivery eliminates costly refinery downtime.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Steel Supplier Jamnagar</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Steel Pipes in Jamnagar? Same-Day Delivery!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>Alloy Steel, SS, Duplex, Exotic — Ready stock. Same-day from Vadodara to Jamnagar (300 km).</p>
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
            {href:"/inconel-pipe-supplier-india",label:"Inconel Pipe Supplier India"},
            {href:"/duplex-steel-supplier-vadodara",label:"Duplex Steel Supplier"},
            {href:"/steel-supplier-hazira",label:"Steel Supplier Hazira"},
            {href:"/steel-supplier-mundra",label:"Steel Supplier Mundra"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <LocationContent slug="jamnagar" />
      
        <RelatedPages currentPath="/steel-supplier-jamnagar" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Steel Supplier Jamnagar | Reliance & Nayara Refinery Pipes | Same-Day Delivery | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
