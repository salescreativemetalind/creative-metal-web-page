/**
 * /steel-supplier-haldia
 * Target: "steel supplier Haldia", "refinery pipe Haldia",
 * "IOCL Haldia", "steel pipe supplier Haldia"
 */
import { Title, Meta, Link } from "@solidjs/meta";

const PRODUCTS = [
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310S, 904L", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L X42–X70, IS 1239", sizes: "1/2\" to 48\"", type: "Seamless & ERW", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P5, P9, P11, P22, P91", sizes: "1/2\" to 24\"", type: "Seamless (IBR)", stock: "Ready Stock" },
  { category: "SS Fittings", grades: "SS 304/316L Elbows, Tees, Reducers, Caps", sizes: "1/2\" to 48\"", type: "Buttweld & Forged", stock: "Ready Stock" },
  { category: "Flanges", grades: "SS 316L, CS A105, Alloy F11/F22/F91", sizes: "1/2\" to 48\"", type: "WN, SO, Blind, RTJ", stock: "Ready Stock" },
  { category: "Duplex & Super Duplex", grades: "Duplex 2205, Super Duplex 2507", sizes: "1/2\" to 16\"", type: "Seamless & Welded", stock: "Available" },
  { category: "Steel Plates", grades: "SA 516 Gr.60/70, SA 387 Gr.11/22, IS 2062", sizes: "6mm to 150mm thick", type: "Hot Rolled", stock: "Available" },
  { category: "API Line Pipes", grades: "API 5L Gr.B, X42, X52, X60, X65, X70", sizes: "2\" to 48\"", type: "LSAW / HSAW / ERW", stock: "Ready Stock" },
];

const INDUSTRIES = [
  { icon: "\u{1F6E2}\uFE0F", name: "IOCL Haldia Refinery", desc: "7.5 MMTPA refinery — alloy steel pipes (P5/P11/P22/P91), SS fittings, IBR-certified materials for turnaround and debottlenecking projects" },
  { icon: "\u{1F3ED}", name: "Haldia Petrochemicals Ltd", desc: "Major naphtha cracker complex — SS 321/347 for high-temp service, alloy pipes, exotic alloys for chemical processing units" },
  { icon: "\u2697\uFE0F", name: "Mitsubishi Chemical", desc: "Specialty chemicals manufacturing — SS 316L, Hastelloy C276, duplex for corrosive chemical environments" },
  { icon: "\u{1F9EA}", name: "Tata Chemicals", desc: "Soda ash and specialty chemicals — carbon steel piping, SS 316L for acid service, alloy fittings for high-temperature processes" },
  { icon: "\u{1F33F}", name: "Haldia Fertilizer Corporation", desc: "Urea and ammonia plant — SS 304/316L, alloy pipes for reformer and converter systems, NACE-compliant materials" },
  { icon: "\u{1F50B}", name: "Exide Industries", desc: "Battery manufacturing — lead-resistant SS piping, acid-proof fittings, chemical-resistant materials for electrolyte handling" },
];

const FAQS = [
  { q: "Who is the best steel supplier in Haldia, West Bengal?", a: "Creative Metal Industries (CMI) is a trusted steel supplier serving Haldia's petrochemical and refinery sector since 2012. We supply stainless steel pipes (304, 316L, 321, 310S), carbon steel (A106, API 5L), alloy steel (P91, P22, P11), duplex steel, and exotic alloys. We serve IOCL Haldia Refinery contractors, Haldia Petrochemicals, Mitsubishi Chemical, Tata Chemicals, and the entire Haldia industrial belt. Our Vadodara warehouse delivers to Haldia in 3-4 working days with complete documentation." },
  { q: "What is the delivery time for steel pipes from Vadodara to Haldia?", a: "Delivery from our Vadodara warehouse to Haldia is 3-4 working days via road transport (approximately 1,950 km). We have established logistics partners for regular deliveries to Haldia Dock Complex area, IOCL township, and the petrochemical zone. Express air-freight available for critical refinery shutdown materials. We also deliver to Kolkata, Durgapur, Kalyani, and other West Bengal industrial locations." },
  { q: "Do you supply materials for IOCL Haldia Refinery turnaround projects?", a: "Yes, we have proven experience supplying piping materials for IOCL Haldia Refinery shutdown and turnaround projects. Our ready stock includes IBR-certified alloy steel pipes (P5, P9, P11, P22, P91), stainless steel 304/316L/321 pipes and fittings, high-pressure flanges (Class 150 to 2500), and carbon steel pipes. Complete documentation provided — MTC EN 10204 3.1/3.2, IBR Form III-C, TPI witness reports, PMI certificates, and NACE compliance as per MR0175." },
  { q: "What grades are available for Haldia's petrochemical industry?", a: "For Haldia's petrochemical sector we maintain comprehensive stock of process piping materials. This includes SS 321/347 for high-temperature cracker applications, SS 316L for general chemical service, Hastelloy C276 for extreme corrosion environments, duplex 2205 for chloride-bearing streams, and alloy steel P5/P9 for hydroprocessing units. All materials supplied with full traceability, positive material identification (PMI), and original mill test certificates." },
  { q: "Can you supply API line pipes for Haldia pipeline projects?", a: "Absolutely. We supply API 5L line pipes in grades B through X70 for pipeline projects in and around Haldia. Our range includes ERW pipes (2\" to 24\"), LSAW/HSAW pipes (24\" to 48\"), and seamless pipes for high-pressure service. All pipes supplied with API monogram, hydrostatic test certificates, and third-party inspection as required. We support pipeline contractors working on IOCL, GAIL, and BPCL transmission pipeline projects in the eastern region." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","name":"Creative Metal Industries — Steel Supplier Haldia","description":"Trusted steel supplier in Haldia, West Bengal offering SS pipes, alloy steel, fittings and flanges for IOCL Refinery, Haldia Petrochemicals and chemical industries.","telephone":"+91-99982-80619","url":"https://www.creativemetalind.com/steel-supplier-haldia","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"City","name":"Haldia","containedInPlace":{"@type":"State","name":"West Bengal"}},"priceRange":"$$","aggregateRating":{"@type":"AggregateRating","ratingValue":"4.7","reviewCount":"31","bestRating":"5"}},{"@type":"Product","name":"Steel Pipes, Fittings & Flanges — Haldia Supply","description":"SS, CS, alloy steel pipes, fittings, flanges for Haldia refinery and petrochemical industries.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"55","highPrice":"15000","offerCount":"5000+","availability":"https://schema.org/InStock"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Supplier Haldia","item":"https://www.creativemetalind.com/steel-supplier-haldia"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelSupplierHaldia() {
  return (
    <>
      <Title>Steel Supplier Haldia | Refinery Pipes & Fittings | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Steel supplier Haldia — SS pipes, alloy steel P91/P22, fittings for IOCL Refinery & petrochemical plants. 3-4 day delivery. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-supplier-haldia" />
      <Meta property="og:title" content="Steel Supplier Haldia | IOCL Refinery Pipes & Fittings | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Steel supplier Haldia — SS, alloy, API pipes for refinery & petrochemical. 3-4 day delivery. CMI." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-supplier-haldia" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Supplier Haldia | Refinery Pipes & Fittings | CMI" />
      <Meta name="twitter:description" content="Steel supplier Haldia — SS, alloy, CS pipes for IOCL & petrochemicals. 3-4 day delivery." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Steel Supplier Haldia" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Supplier Haldia</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Supplier in Haldia — Refinery Pipes, Alloy Steel &amp; Industrial Piping
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is a trusted <strong>steel supplier in Haldia</strong>, West Bengal, serving the region's concentrated petrochemical and refinery belt. Haldia houses <strong>IOCL's 7.5 MMTPA refinery</strong>, Haldia Petrochemicals' naphtha cracker, Mitsubishi Chemical, Tata Chemicals, Haldia Fertilizer Corporation, and Exide Industries — creating massive demand for quality piping materials. We supply stainless steel pipes, carbon steel, alloy steel (P5/P9/P11/P22/P91), duplex, and exotic alloys with complete IBR and TPI documentation. Our 2000+ tonne Vadodara warehouse ensures 3-4 day delivery to Haldia with ready stock for turnaround and shutdown emergencies.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range — Pipes, Fittings &amp; Steel for Haldia</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Haldia Industries Choose Creative Metal Industries</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>IOCL Haldia Refinery specialist:</strong> Proven track record supplying alloy steel P91/P22/P11 and SS pipes for refinery turnaround and expansion projects</li>
            <li><strong>Petrochemical-grade materials:</strong> SS 321/347 for cracker service, Hastelloy C276 for aggressive chemicals, duplex for chloride environments</li>
            <li><strong>Complete IBR documentation:</strong> Form III-C, stage-wise inspection, TPI witness — as per IOCL and HPC specification requirements</li>
            <li><strong>API line pipe specialist:</strong> API 5L Gr.B to X70 for IOCL/GAIL pipeline projects — ERW, LSAW, seamless with full API monogram</li>
            <li><strong>Ready stock for emergencies:</strong> 2000+ tonne warehouse means no waiting for mill delivery during tight shutdown windows</li>
            <li><strong>3-4 day delivery to Haldia:</strong> Established logistics from Vadodara to Haldia Dock Complex area — express options for critical materials</li>
            <li><strong>Direct mill sourcing:</strong> Sumitomo, Vallourec, ISMT, Jindal, SAIL — competitive pricing without Kolkata middleman markup</li>
            <li><strong>NACE compliance:</strong> Materials meeting MR0175/ISO 15156 for sour service in refinery and petrochemical applications</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Haldia &amp; West Bengal</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas in Haldia &amp; West Bengal</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["Haldia Dock Complex","IOCL Refinery Area","Haldia Petrochemical Zone","Durgachak Industrial","Sutahata","Kolkata Industrial","Durgapur Steel City","Kalyani Industrial","Howrah Engineering","Asansol-Burnpur","Medinipur","Falta SEZ"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Specialized Solutions for Haldia's Process Industries</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Haldia's unique concentration of refineries, petrochemical plants, and chemical industries demands specialized piping solutions. Creative Metal Industries provides <strong>alloy steel P91 and P22 pipes</strong> for IOCL refinery furnace and reformer tubes, <strong>SS 321/347 for cracker and reactor piping</strong> at Haldia Petrochemicals, <strong>Hastelloy C276 and Inconel 625</strong> for Mitsubishi Chemical's aggressive environments, <strong>carbon steel API 5L</strong> for cross-country pipeline projects, and <strong>duplex 2205 for seawater cooling</strong> at the port facility. We understand the documentation standards required by IOCL, HPC, and other PSUs — every material ships with complete traceability from heat number to final test certificate.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Steel Supplier Haldia</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Steel Pipes or Fittings in Haldia? Get Quote Now!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>Alloy Steel, SS, Carbon Steel — Pipes, Fittings, Flanges. Ready stock. 3-4 day delivery to Haldia.</p>
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
            {href:"/ss-seamless-pipe-supplier-india",label:"SS Seamless Pipe Supplier India"},
            {href:"/steel-pipe-supplier-kolkata",label:"Steel Pipe Supplier Kolkata"},
            {href:"/carbon-steel-pipe-fittings-vadodara",label:"Carbon Steel Pipe Fittings"},
            {href:"/steel-pipe-supplier-vizag",label:"Steel Pipe Supplier Vizag"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Steel Supplier Haldia | Refinery Pipes, Alloy Steel, Petrochemical Piping | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
