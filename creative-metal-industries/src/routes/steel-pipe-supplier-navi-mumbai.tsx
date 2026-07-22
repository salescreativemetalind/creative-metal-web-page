/**
 * /steel-pipe-supplier-navi-mumbai
 * Target: "pipe supplier Navi Mumbai", "JNPT steel",
 * "Taloja pipe supplier", "Rabale MIDC steel"
 */
import { Title, Meta, Link } from "@solidjs/meta";

const PRODUCTS = [
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310S, 904L, Duplex 2205", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L X42–X70, IS 1239/3589", sizes: "1/2\" to 60\"", type: "Seamless, ERW, LSAW", stock: "Ready Stock" },
  { category: "SS Fittings & Flanges", grades: "SS 304/316L Elbows, Tees, Reducers, WN/SO/Blind Flanges", sizes: "1/2\" to 48\"", type: "Buttweld, Forged", stock: "Ready Stock" },
  { category: "API Line Pipes", grades: "API 5L Gr.B to X70, PSL1 & PSL2, NACE MR0175", sizes: "2\" to 60\"", type: "Seamless, ERW, LSAW", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P5, P9, P11, P22, P91", sizes: "1/2\" to 24\"", type: "Seamless (IBR)", stock: "Ready Stock" },
  { category: "Duplex & Super Duplex", grades: "Duplex 2205, Super Duplex 2507", sizes: "1/2\" to 16\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Exotic Alloys", grades: "Inconel 625/600, Hastelloy C276, Monel 400, Incoloy 825", sizes: "1/2\" to 10\"", type: "Seamless", stock: "Available" },
  { category: "Steel Plates & Sheets", grades: "SA 516 Gr.70, SA 387, SS 304/316L, Duplex Plates", sizes: "6mm to 200mm thick", type: "Hot Rolled, Clad", stock: "Ready Stock" },
];

const INDUSTRIES = [
  { icon: "\u{1F6A2}", name: "JNPT / Nhava Sheva Port", desc: "India's busiest container port — marine-grade SS 316L, duplex for seawater, structural steel for port infrastructure, API pipes for fuel terminal systems" },
  { icon: "\u{1F9EA}", name: "Taloja MIDC (Chemical)", desc: "One of Maharashtra's largest chemical manufacturing zones — SS 316L, Hastelloy, duplex for acid handling, reactor piping, and effluent treatment systems" },
  { icon: "\u2699\uFE0F", name: "Rabale & Turbhe MIDC", desc: "Engineering, IT hardware, and electronics manufacturing — precision SS tubing, CS pipes for utilities, structural steel for factory infrastructure" },
  { icon: "\u{1F6E2}\uFE0F", name: "BPCL/HPCL Oil Terminals", desc: "Major petroleum storage and distribution terminals — API line pipes, CS for tank farm piping, fire-safe valves, NACE-compliant materials for crude handling" },
  { icon: "\u{1F3ED}", name: "TTC Industrial Area", desc: "Trans-Thane Creek industrial zone — diverse manufacturing requiring complete range of CS, SS, GI pipes, fittings, and structural steel products" },
  { icon: "\u{1F3D7}\uFE0F", name: "Infrastructure & Metro", desc: "Navi Mumbai's rapid infrastructure development — metro rail, NAINA smart city, airport — structural steel, MS pipes, piling materials at massive scale" },
];

const FAQS = [
  { q: "Who is the best steel pipe supplier in Navi Mumbai?", a: "Creative Metal Industries (CMI) from Vadodara is a leading pipe supplier serving Navi Mumbai's industrial zones — Taloja MIDC, Rabale, Turbhe, TTC, and JNPT area. We deliver within 1-2 days with complete stock of SS, CS, API, alloy pipes, fittings, and flanges. Our Gujarat pricing is consistently more competitive than the Mumbai/Navi Mumbai local market, especially on specialty grades like duplex, Inconel, and Hastelloy that JNPT and Taloja chemical plants require." },
  { q: "How fast can pipes be delivered to Navi Mumbai from Vadodara?", a: "1-2 day delivery — Navi Mumbai is approximately 550 km from our Vadodara warehouse. Orders confirmed by morning are dispatched same day via dedicated transport and reach Taloja/Rabale/JNPT area by next morning. For JNPT port-related urgent projects or Taloja plant shutdowns, we can arrange express overnight delivery. Regular customers in Navi Mumbai benefit from scheduled weekly truck service with consolidated shipments for optimized freight costs." },
  { q: "Do you supply API pipes for JNPT and oil terminal projects?", a: "Yes, API 5L line pipes are a core product for JNPT and petroleum terminal projects in Navi Mumbai. We stock Grade B to X70 in PSL1 and PSL2, available in seamless (2\"-24\"), ERW (2\"-24\"), and LSAW (24\"-60\"). NACE MR0175 compliant materials available for sour crude handling at oil terminals. Also supply matching fittings (A234 WPB/WPC) and flanges (A105) in all pressure ratings. Complete pipeline material packages with hydrostatic test certificates and third-party inspection documentation." },
  { q: "Can you supply materials for Taloja MIDC chemical plants?", a: "Absolutely — Taloja MIDC is one of our key markets. We supply SS 316L seamless pipes and fittings for general chemical service, Hastelloy C276 for concentrated acid handling, duplex 2205 for chloride environments, Alloy 20 for sulphuric acid, and Inconel 625 for high-temperature corrosive service. For Taloja's effluent treatment plants, we supply FRP-compatible flanges and lined pipe systems. All materials with 3.1 MTCs, PMI certification, and NACE compliance documentation as required." },
  { q: "What advantage does CMI offer over Navi Mumbai local steel dealers?", a: "Four advantages: (1) Price — Gujarat's competitive ecosystem gives us 10-15% edge on SS and exotic grades over Mumbai market rates; (2) Range — exotic alloys (Hastelloy, Inconel, super duplex) in stock that local dealers typically indent from mills with 8-12 week lead time; (3) Documentation — complete mill certificates, PMI, IGC, NACE compliance for regulated industries; (4) Reliability — consistent quality and delivery, not dependent on Mumbai's congested logistics network. For Taloja/JNPT industries requiring certified materials, CMI is the logical choice." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","name":"Creative Metal Industries — Pipe Supplier Navi Mumbai","description":"Steel pipe supplier Navi Mumbai — SS, CS, API pipes for JNPT, Taloja MIDC, Rabale, TTC industrial. 1-2 day delivery from Vadodara.","telephone":"+91-99982-80619","url":"https://www.creativemetalind.com/steel-pipe-supplier-navi-mumbai","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"Place","name":"Navi Mumbai","containedInPlace":{"@type":"State","name":"Maharashtra"}},"priceRange":"$$","aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"61","bestRating":"5"}},{"@type":"Product","name":"Steel Pipes, Fittings & API Line Pipes — Navi Mumbai Supply","description":"SS, CS, API pipes, fittings, flanges for JNPT port, Taloja MIDC chemical, Rabale engineering. 1-2 day delivery.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"50","highPrice":"25000","offerCount":"5000+","availability":"https://schema.org/InStock"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Pipe Supplier Navi Mumbai","item":"https://www.creativemetalind.com/steel-pipe-supplier-navi-mumbai"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelPipeSupplierNaviMumbai() {
  return (
    <>
      <Title>Pipe Supplier Navi Mumbai | JNPT & Taloja | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Steel pipe supplier Navi Mumbai — SS, CS, API pipes for JNPT, Taloja MIDC & Rabale. 1-2 day delivery from Vadodara. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-pipe-supplier-navi-mumbai" />
      <Meta property="og:title" content="Pipe Supplier Navi Mumbai | JNPT, Taloja MIDC | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Pipe supplier Navi Mumbai — SS, CS, API pipes for JNPT port, Taloja chemical, Rabale MIDC. 1-2 day delivery." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-pipe-supplier-navi-mumbai" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Pipe Supplier Navi Mumbai | JNPT & Taloja | CMI" />
      <Meta name="twitter:description" content="Pipe supplier Navi Mumbai — SS, CS, API for port & chemical industries. 1-2 day delivery." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Pipe Supplier Navi Mumbai" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Pipe Supplier Navi Mumbai</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Pipe Supplier in Navi Mumbai — JNPT, Taloja MIDC &amp; Industrial Areas
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is a leading <strong>pipe supplier for Navi Mumbai</strong> — delivering SS, CS, API pipes, fittings, and flanges within <strong>1-2 days from Vadodara</strong>. Navi Mumbai is Maharashtra's industrial and logistics powerhouse, housing <strong>JNPT (Nhava Sheva)</strong> — India's busiest container port, <strong>Taloja MIDC</strong> — one of the largest chemical manufacturing zones, <strong>Rabale and Turbhe MIDC</strong> for engineering, major <strong>BPCL/HPCL oil terminals</strong>, and the expanding <strong>TTC industrial corridor</strong>. This concentrated industrial activity demands reliable steel supply with proper documentation, competitive pricing, and quick turnaround. CMI's 2000+ tonne ready stock, Gujarat-competitive pricing, and proven logistics to Navi Mumbai make us the smart alternative to overpriced Mumbai market suppliers.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range — Pipes, Fittings &amp; Steel for Navi Mumbai</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Navi Mumbai Industries Choose Creative Metal Industries</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>1-2 day delivery to Navi Mumbai:</strong> Dispatched same day, arrives next morning at Taloja/Rabale/JNPT — predictable logistics without Mumbai congestion</li>
            <li><strong>Gujarat pricing edge:</strong> 10-15% savings on SS and specialty grades compared to Mumbai market, significant on project-scale orders</li>
            <li><strong>JNPT port project support:</strong> Marine-grade SS 316L, duplex, structural steel, API pipes for container terminal and fuel farm infrastructure</li>
            <li><strong>Taloja chemical specialist:</strong> SS 316L, Hastelloy C276, duplex 2205, Alloy 20 — all chemical-grade materials with PMI and NACE certification</li>
            <li><strong>API certified line pipes:</strong> PSL1/PSL2 for oil terminal piping, NACE compliant for sour crude — complete documentation for BPCL/HPCL requirements</li>
            <li><strong>Exotic alloys in stock:</strong> Inconel, Hastelloy, super duplex, Monel — no 8-12 week mill lead time, immediate availability from our warehouse</li>
            <li><strong>Infrastructure project scale:</strong> Capacity to supply structural steel, MS pipes for Navi Mumbai's metro, airport, NAINA projects at volume pricing</li>
            <li><strong>Complete documentation:</strong> EN 10204 3.1 MTCs, PMI, IGC, NACE, IBR — all certifications for regulated industries in one package</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Navi Mumbai &amp; Raigad District</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas in Navi Mumbai &amp; Region</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["Taloja MIDC","Rabale MIDC","Turbhe MIDC","TTC Industrial","JNPT / Nhava Sheva","Panvel Industrial","Kharghar / CBD","Uran Oil Terminal","Patalganga MIDC","Mahape / Airoli","Nerul / Seawoods","Dronagiri Node"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Navi Mumbai — Port, Chemical &amp; Infrastructure Steel Solutions</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Navi Mumbai's unique industrial mix — Asia's busiest container port, major chemical manufacturing, petroleum terminals, and massive infrastructure development — creates demand for the full spectrum of steel products. Creative Metal Industries serves all these sectors: <strong>API 5L line pipes and NACE materials</strong> for JNPT fuel farms and BPCL/HPCL terminals, <strong>SS 316L and Hastelloy</strong> for Taloja's chemical process piping, <strong>duplex 2205</strong> for marine and high-chloride environments near the coast, <strong>structural steel and MS pipes</strong> for Navi Mumbai International Airport and metro rail projects, and <strong>precision tubing</strong> for Rabale/Turbhe engineering units. Our competitive Gujarat pricing, certified materials, and reliable 1-2 day logistics make us the preferred supplier for procurement teams who demand quality, price, and delivery performance simultaneously.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Pipe Supplier Navi Mumbai</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Steel Pipes in Navi Mumbai? 1-2 Day Delivery!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>SS, CS, API Pipes, Fittings, Flanges — Ready stock. Next-day delivery from Vadodara to JNPT/Taloja/Rabale.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4DE}"} +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4AC}"} WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote {"\u2192"}</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/steel-pipe-supplier-thane",label:"Pipe Supplier Thane"},
            {href:"/steel-supplier-patalganga",label:"Steel Supplier Patalganga MIDC"},
            {href:"/alloy-steel-pipe-supplier-india",label:"Alloy Steel Pipe Supplier India"},
            {href:"/duplex-steel-supplier-vadodara",label:"Duplex Steel Supplier Vadodara"},
            {href:"/inconel-pipe-supplier-india",label:"Inconel Pipe Supplier India"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Steel Pipe Supplier Navi Mumbai | JNPT, Taloja MIDC, Rabale | SS, CS, API Pipes | 1-2 Day Delivery | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
