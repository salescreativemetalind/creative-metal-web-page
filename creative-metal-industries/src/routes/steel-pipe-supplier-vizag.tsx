/**
 * /steel-pipe-supplier-vizag
 * Target: "pipe supplier Visakhapatnam", "HPCL Vizag pipe",
 * "steel Vizag", "pipe fittings Vizag"
 */
import { Title, Meta, Link } from "@solidjs/meta";

const PRODUCTS = [
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310, 904L", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L, IS 1239", sizes: "1/2\" to 48\"", type: "Seamless & ERW", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P5, P9, P11, P22, P91", sizes: "1/2\" to 24\"", type: "Seamless (IBR)", stock: "Ready Stock" },
  { category: "Duplex & Super Duplex", grades: "Duplex 2205, Super Duplex 2507", sizes: "1/2\" to 16\"", type: "Seamless & Welded", stock: "Available" },
  { category: "Pipe Fittings", grades: "SS, CS, Alloy — BW & Forged", sizes: "1/2\" to 48\"", type: "Elbows, Tees, Reducers", stock: "Ready Stock" },
  { category: "Flanges", grades: "SS 304/316L, CS A105, Alloy F11/F22/F91", sizes: "1/2\" to 48\"", type: "WN, SO, Blind, RTJ", stock: "Ready Stock" },
  { category: "Steel Plates", grades: "SA 516 Gr.70, IS 2062, NACE HIC, BQ", sizes: "6mm to 200mm", type: "Hot Rolled", stock: "Available" },
  { category: "Exotic Alloys", grades: "Inconel 625/600, Hastelloy C276, Monel 400, CuNi", sizes: "1/2\" to 10\"", type: "Seamless", stock: "Available" },
];

const INDUSTRIES = [
  { icon: "\u{1F6E2}\uFE0F", name: "HPCL Vizag Refinery", desc: "Complete piping materials for turnaround, expansion and maintenance — SS, CS, alloy, duplex pipes and fittings" },
  { icon: "\u{1F6A2}", name: "Vizag Steel Plant (RINL)", desc: "Replacement piping, process lines, utility piping — carbon steel, alloy steel, structural steel" },
  { icon: "\u{1F3ED}", name: "Pharma & Chemical SEZ", desc: "Jawaharlal Nehru Pharma City — SS 316L electropolished pipes, CRA piping for chemical plants" },
  { icon: "\u26A1", name: "NTPC Simhadri TPS", desc: "Alloy steel P91/P22/P11 with IBR Form III-C for boiler systems and steam piping" },
  { icon: "\u{1F30A}", name: "Shipbuilding & Naval", desc: "Hindustan Shipyard, naval dockyard — marine-grade SS, CuNi 90/10, duplex piping" },
  { icon: "\u{1F3D7}\uFE0F", name: "Port & Infrastructure", desc: "Vizag Port, Gangavaram Port, industrial corridors — structural steel, MS pipes, TMT bars" },
];

const FAQS = [
  { q: "Who is the best pipe supplier in Visakhapatnam (Vizag)?", a: "Creative Metal Industries (CMI) is a trusted pipe supplier serving Vizag and Andhra Pradesh since 2012. We supply stainless steel pipes (304, 316L, 321, 310, 904L), carbon steel (A106, A53, API 5L), alloy steel (P91, P22, P11 with IBR), duplex, and exotic alloys (Inconel, Hastelloy, CuNi). We serve HPCL Vizag Refinery, Vizag Steel Plant (RINL), NTPC Simhadri, Hindustan Shipyard and the pharma SEZ. Our Vadodara warehouse delivers to Vizag in 3-4 days." },
  { q: "What is the delivery time for pipes to Vizag?", a: "Standard delivery from our Vadodara warehouse to Vizag is 3-4 working days via road (approx 1,500 km). Express delivery available for HPCL/NTPC urgent shutdown requirements. We deliver directly to Auto Nagar, Steel Plant area, Pharma City, HPCL refinery gate, Gangavaram port area and all industrial locations in Vizag. For large project orders, container shipping via Vizag Port is also available." },
  { q: "Can you supply to HPCL Vizag Refinery projects?", a: "Absolutely. We have extensive experience supplying to oil refinery projects including HPCL Vizag. We supply as per HPCL-approved material specifications with complete TPI documentation by EIL/PDIL/Lloyds. Our range covers all refinery piping needs — SS 304/316L for process, CS A106 for utility, alloy P5/P9 for heaters, duplex 2205 for seawater cooling, and CuNi for marine applications. PMI, RT, hydro test reports and NABL lab certificates provided." },
  { q: "Do you supply to Vizag Steel Plant (RINL)?", a: "Yes, we supply replacement piping, maintenance materials and project piping to Vizag Steel Plant (RINL/Rashtriya Ispat Nigam Limited). Our range includes carbon steel pipes (IS 1239, IS 3589, A106), alloy steel pipes for coke oven and blast furnace piping, SS pipes for chemical treatment, structural steel for plant maintenance, and flanges/fittings in all materials. We can match RINL's procurement specifications with equivalent ASTM/IS grades." },
  { q: "What is the price of SS pipe in Vizag?", a: "SS 304 seamless pipe prices in Vizag range from Rs 250-450 per kg depending on size and schedule. SS 316L ranges Rs 350-550 per kg. Carbon steel A106 Gr.B starts from Rs 75 per kg. Duplex 2205 ranges Rs 800-1500 per kg. All prices depend on quantity and current market rates. For exact pricing, call +91 99982 80619 — formal quotation within 4 hours. Direct mill supply without Vizag dealer margins." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","name":"Creative Metal Industries — Pipe Supplier Vizag","description":"Leading pipe supplier in Visakhapatnam offering SS pipes, CS pipes, alloy steel, duplex, exotic alloys for HPCL refinery, Vizag Steel Plant and shipbuilding.","telephone":"+91-99982-80619","url":"https://www.creativemetalind.com/steel-pipe-supplier-vizag","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"City","name":"Visakhapatnam","containedInPlace":{"@type":"State","name":"Andhra Pradesh"}},"priceRange":"$$","aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"35","bestRating":"5"}},{"@type":"Product","name":"Steel Pipes & Fittings — Vizag Supply","description":"SS, CS, alloy, duplex and exotic alloy pipes supplied to HPCL, RINL, NTPC and shipbuilding in Vizag.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"75","highPrice":"18000","offerCount":"5000+","availability":"https://schema.org/InStock"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Pipe Supplier Vizag","item":"https://www.creativemetalind.com/steel-pipe-supplier-vizag"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelPipeSupplierVizag() {
  return (
    <>
      <Title>Pipe Supplier Vizag | HPCL Steel Vizag | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Pipe supplier Vizag — SS, carbon steel, alloy, duplex pipes for HPCL refinery, Vizag Steel Plant, NTPC Simhadri. IBR certified. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-pipe-supplier-vizag" />
      <Meta property="og:title" content="Pipe Supplier Vizag | HPCL, RINL, NTPC | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Pipe supplier Vizag — SS, CS, alloy pipes for HPCL, RINL, shipbuilding. Ready stock. CMI." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-pipe-supplier-vizag" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Pipe Supplier Vizag | HPCL Steel Vizag | CMI" />
      <Meta name="twitter:description" content="Pipe supplier Vizag — SS, CS, alloy pipes. HPCL/RINL approved. 3-4 day delivery." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Pipe Supplier Vizag" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Pipe Supplier Vizag</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Pipe Supplier in Visakhapatnam (Vizag) — HPCL, RINL &amp; Industrial Piping
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is a trusted <strong>pipe supplier in Visakhapatnam (Vizag)</strong>, delivering stainless steel pipes, carbon steel pipes, alloy steel pipes, duplex steel, exotic alloys, pipe fittings and flanges to AP's industrial capital. Vizag hosts India's premier heavy industries — HPCL Refinery, Vizag Steel Plant (RINL), NTPC Simhadri, Hindustan Shipyard and the Pharma City SEZ — and CMI supplies quality piping materials to all of them. With 2000+ tonnes ready stock at our Vadodara warehouse and 3-4 day delivery to Vizag, we ensure uninterrupted material supply for shutdowns, expansions and new projects.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range for Vizag Industries</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Vizag Industries Trust CMI</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Refinery-approved supplier:</strong> Full documentation for HPCL Vizag — TPI (EIL/PDIL), PMI, RT, hydro test, NABL lab reports</li>
            <li><strong>Shutdown emergency stock:</strong> P91, P22, P11 heavy-wall pipes and critical SS sizes always available for unplanned turnarounds</li>
            <li><strong>Marine-grade materials:</strong> CuNi 90/10, Duplex 2205, Super Duplex 2507 for Hindustan Shipyard and naval projects</li>
            <li><strong>Vizag Steel Plant experience:</strong> CS, alloy and structural steel supply matching RINL procurement specifications</li>
            <li><strong>3-4 day reliable delivery:</strong> Vadodara to Vizag via road — dedicated transport with real-time tracking</li>
            <li><strong>Direct mill pricing:</strong> Sumitomo, Vallourec, Jindal, ISMT, Maharashtra Seamless — no Vizag Auto Nagar dealer markup</li>
            <li><strong>Complete range:</strong> SS, CS, alloy, duplex, exotic alloys + fittings + flanges + plates — one PO for complete BOM</li>
            <li><strong>IBR certified stock:</strong> P91/P22/P11 with IBR Form III-C for NTPC Simhadri and state thermal power stations</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Vizag &amp; AP</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas — Vizag &amp; Andhra Pradesh</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["HPCL Refinery Area","Vizag Steel Plant","Auto Nagar","Pharma City (Parawada)","NTPC Simhadri","Hindustan Shipyard","Gangavaram Port","Anakapalle Industrial","Atchutapuram SEZ","Nakkapalle","Kakinada (ONGC)","Rajahmundry"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete CMI Product Lines for Vizag</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Creative Metal Industries delivers the complete spectrum of industrial piping products to Vizag and coastal AP. Our range includes <strong>SS pipes</strong> (seamless and welded in all grades), <strong>carbon steel pipes</strong> (A106, A53, API 5L, IS 1239/3589), <strong>alloy steel pipes</strong> (all P-grades with IBR), <strong>duplex and super duplex</strong> (for seawater and corrosive service), <strong>exotic alloys</strong> (Inconel 625, Hastelloy C276, Monel 400, CuNi 90/10 for marine), <strong>pipe fittings</strong> (buttweld and forged), <strong>flanges</strong> (all types, class 150-2500), <strong>steel plates</strong> (SA 516, NACE HIC for pressure vessels), <strong>structural steel</strong> and <strong>TMT bars</strong>. Single source for HPCL turnarounds, RINL maintenance and new project material.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Pipe Supplier Vizag</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Pipes in Vizag? Get Quote for HPCL/RINL Projects!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>SS, CS, Alloy, Duplex, Exotic — All grades. IBR certified. Ready stock. 3-4 day delivery.</p>
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
            {href:"/steel-pipe-supplier-hyderabad",label:"Steel Pipe Supplier Hyderabad"},
            {href:"/steel-pipe-supplier-chennai",label:"Steel Pipe Supplier Chennai"},
            {href:"/duplex-steel-supplier-vadodara",label:"Duplex Steel Supplier"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Pipe Supplier Vizag | HPCL, RINL, NTPC Piping Materials | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
