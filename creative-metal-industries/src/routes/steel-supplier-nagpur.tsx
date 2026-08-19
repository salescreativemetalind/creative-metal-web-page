/**
 * /steel-supplier-nagpur
 * Target: "steel supplier Nagpur", "pipe fittings Nagpur",
 * "MS angle Nagpur", "steel pipe Nagpur"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const PRODUCTS = [
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310, 904L", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L, IS 1239", sizes: "1/2\" to 48\"", type: "Seamless & ERW", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P11, P22, P91, P5, P9", sizes: "1/2\" to 24\"", type: "Seamless (IBR)", stock: "Ready Stock" },
  { category: "Structural Steel", grades: "TMT Fe500D, MS Angle, ISMC, ISMB, Plates", sizes: "Per IS standards", type: "Hot Rolled", stock: "Ready Stock" },
  { category: "Pipe Fittings", grades: "SS, CS, Alloy — BW & Forged", sizes: "1/2\" to 48\"", type: "Elbows, Tees, Reducers", stock: "Ready Stock" },
  { category: "Flanges", grades: "SS 304/316L, CS A105, Alloy F11/F22", sizes: "1/2\" to 48\"", type: "WN, SO, Blind", stock: "Ready Stock" },
  { category: "Steel Plates", grades: "SA 516 Gr.70, IS 2062, BQ, NACE HIC", sizes: "6mm to 150mm", type: "Hot Rolled", stock: "Available" },
  { category: "Duplex & Exotic Alloys", grades: "Duplex 2205, Inconel, Hastelloy, Monel", sizes: "1/2\" to 16\"", type: "Seamless", stock: "Available" },
];

const INDUSTRIES = [
  { icon: "\u{1F3ED}", name: "MIHAN SEZ & Aerospace", desc: "Multi-modal International Hub Airport — SS pipes, precision tubes, exotic alloys for aerospace and defence manufacturing" },
  { icon: "\u26A1", name: "Power Generation", desc: "Koradi TPS, Khaperkheda TPS (MAHAGENCO) — alloy steel P91/P22/P11 boiler tubes with IBR Form III-C certification" },
  { icon: "\u{1F3D7}\uFE0F", name: "Construction & Infrastructure", desc: "Nagpur Metro, MIHAN development, Smart City projects — TMT bars, MS angles, channels, beams and structural plates" },
  { icon: "\u{1F3E2}", name: "Butibori MIDC Industries", desc: "Asia's largest MIDC estate — carbon steel, SS piping, flanges and fittings for manufacturing and process plants" },
  { icon: "\u{1F9F1}", name: "Cement & Mining", desc: "ACC, Ambuja, UltraTech plants in Vidarbha — abrasion-resistant plates, structural steel, heavy-gauge piping" },
  { icon: "\u{1F6E1}\uFE0F", name: "Ordnance & Defence", desc: "Ordnance Factory Ambajhari, Vehicle Factory Jabalpur (nearby) — special-grade alloy steel, high-pressure pipes and exotic alloys" },
];

const FAQS = [
  { q: "Who is the best steel supplier in Nagpur?", a: "Creative Metal Industries (CMI) is a leading steel supplier serving Nagpur and the entire Vidarbha region since 2012. We supply stainless steel pipes (304, 316L, 321, 310, 904L), carbon steel (A106, A53, API 5L), alloy steel (P91, P22, P11 with IBR), structural steel (TMT, MS angles, channels, beams), pipe fittings and flanges. We serve MIHAN SEZ, Butibori MIDC, Hingna MIDC, Koradi/Khaperkheda power plants and Vidarbha's cement industry. Our Vadodara warehouse delivers within 1-2 days." },
  { q: "What is the delivery time from Vadodara to Nagpur?", a: "Delivery from our Vadodara warehouse to Nagpur is 1-2 days via road (approximately 800 km via NH44/NH53). We dispatch daily to Nagpur and Central India, making us faster than many Mumbai-based suppliers for Vidarbha region. We deliver to MIHAN SEZ, Butibori MIDC, Hingna MIDC, Kalmeshwar industrial area, Wadi and all locations across Nagpur city and Vidarbha." },
  { q: "Do you supply alloy steel pipes for Nagpur power plants?", a: "Yes, we supply ASTM A335 P91, P22, P11, P5 and P9 alloy steel seamless pipes specifically for Koradi TPS, Khaperkheda TPS, and other MAHAGENCO thermal power stations in Vidarbha. All pipes supplied with IBR Form III-C certification, material test certificates (MTC 3.1/3.2), and third-party inspection reports. We maintain ready stock for emergency boiler shutdowns requiring fast turnaround." },
  { q: "What structural steel do you supply to Nagpur?", a: "We supply the complete structural steel range to Nagpur: TMT bars (Fe 500D from SAIL, Tata Tiscon, Jindal — 8mm to 32mm diameter), MS angles (25x25mm to 200x200mm), ISMC channels (75mm to 400mm), ISMB beams (100mm to 600mm), MS plates (6mm to 80mm per IS 2062), and MS flats/rounds. Used extensively for Nagpur Metro construction, MIHAN projects and commercial building development across the city." },
  { q: "Can you supply pipe fittings to Butibori MIDC Nagpur?", a: "Absolutely. Butibori MIDC is one of our key delivery points in Central India. We supply stainless steel buttweld fittings (elbows, tees, reducers), forged fittings (socket-weld, threaded), carbon steel fittings (MSS-SP75 for pipeline), flanges (WN, SO, blind in all classes), and gaskets. Complete piping package from a single source — eliminates multiple vendor coordination for your Butibori plant projects." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-supplier-nagpur#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries — Steel Supplier Nagpur","description":"Leading steel supplier in Nagpur offering SS pipes, carbon steel, alloy steel, structural steel, pipe fittings and flanges for MIHAN SEZ, Butibori MIDC and power plants.","telephone":"+919998280619","url":"https://www.creativemetalind.com/steel-supplier-nagpur","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"City","name":"Nagpur","containedInPlace":{"@type":"State","name":"Maharashtra"}},"priceRange":"$$"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Supplier Nagpur","item":"https://www.creativemetalind.com/steel-supplier-nagpur"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelSupplierNagpur() {
  return (
    <>
      <Title>Steel Supplier Nagpur | Pipe Fittings & MS Angle | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Steel supplier Nagpur — SS pipes, MS angles, pipe fittings, structural steel for MIHAN SEZ & Butibori MIDC. 1-2 day delivery. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-supplier-nagpur" />
      <Meta property="og:title" content="Steel Supplier Nagpur | Pipe Fittings, MS Angle, SS Pipes | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Steel supplier Nagpur — SS pipes, pipe fittings, MS angles. 1-2 day delivery from Vadodara. CMI." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-supplier-nagpur" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Supplier Nagpur | Pipe Fittings & MS Angle | CMI" />
      <Meta name="twitter:description" content="Steel supplier Nagpur — SS, CS, structural steel. 1-2 day delivery." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Steel Supplier Nagpur" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Supplier Nagpur</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Supplier in Nagpur — Pipe Fittings, MS Angle &amp; Industrial Piping
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is Central India's trusted <strong>steel supplier in Nagpur</strong>, delivering stainless steel pipes, carbon steel pipes, MS angles, pipe fittings, flanges and alloy steel tubes to Vidarbha's industrial powerhouse. We serve the MIHAN SEZ aerospace and defence corridor, Butibori MIDC — one of Asia's largest industrial estates, Kalmeshwar industrial belt, MAHAGENCO thermal power stations (Koradi TPS, Khaperkheda TPS), and the Vidarbha cement belt featuring ACC, Ambuja and UltraTech plants. Our Vadodara warehouse, located 800 km away via NH44, delivers to Nagpur within <strong>1-2 days</strong> — giving us a significant speed advantage over north or south India suppliers for the entire Central India region.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range for Nagpur Industries</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Nagpur Industries Choose CMI</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>1-2 day delivery — Central India advantage:</strong> Vadodara to Nagpur via NH44 in 800 km — daily dispatches, consistent transit time</li>
            <li><strong>MIHAN SEZ specialist:</strong> Exotic alloys, precision SS tubes, aerospace-grade piping for defence and aviation manufacturing in MIHAN</li>
            <li><strong>Power plant ready stock:</strong> P91, P22, P11 alloy pipes with IBR certification for Koradi TPS and Khaperkheda TPS shutdown requirements</li>
            <li><strong>Butibori MIDC trusted supplier:</strong> Complete piping solutions — SS, CS, alloy pipes + fittings + flanges delivered door-to-door</li>
            <li><strong>Cement industry expertise:</strong> Abrasion-resistant plates, heavy structural steel, high-pressure piping for ACC, Ambuja and UltraTech</li>
            <li><strong>Direct mill pricing:</strong> No Nagpur dealer markup — sourced from Jindal, SAIL, Sumitomo, Vallourec, ISMT directly</li>
            <li><strong>Full documentation:</strong> Original MTC 3.1/3.2, IBR Form III-C, third-party inspection, PMI reports — all as per project specs</li>
            <li><strong>13+ years reliability:</strong> Serving Vidarbha industries since 2012 — proven track record of on-time supply with zero quality complaints</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Nagpur &amp; Vidarbha</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas — Nagpur &amp; Central India</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["MIHAN SEZ","Butibori MIDC","Hingna MIDC","Kalmeshwar Industrial","Wadi Industrial Area","Koradi TPS","Khaperkheda TPS","Chandrapur (WCL)","Amravati Industrial","Wardha Road Belt","Kamptee Cantonment","Yavatmal-Akola Belt"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete CMI Product Lines for Nagpur</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          CMI is your single-source steel supplier for all industrial needs in Nagpur and the Vidarbha region. Our range includes <strong>SS pipes and tubes</strong> (seamless, welded, electropolished — 304, 316L, 321, 310, 904L), <strong>carbon steel pipes</strong> (A106, A53, API 5L, ERW IS 1239), <strong>alloy steel pipes</strong> (P91/P22/P11 with IBR for thermal power), <strong>pipe fittings</strong> (buttweld and forged in all materials and schedules), <strong>flanges</strong> (WN, SO, blind — class 150 to 2500#), <strong>steel plates</strong> (SA 516 Gr.70, IS 2062, BQ plates, NACE HIC), <strong>TMT bars</strong> (Fe 500D from SAIL, Tata Tiscon — 8mm to 32mm), <strong>MS structural steel</strong> (angles, channels, beams, flats), and <strong>exotic alloys</strong> (Inconel 600/625, Hastelloy C276, Monel 400, Duplex 2205). One purchase order, complete traceability, 1-2 day delivery to Nagpur.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Steel Supplier Nagpur</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Steel in Nagpur? Get Quote — 1-2 Day Delivery!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>SS Pipes, MS Angles, Pipe Fittings, Flanges — All grades. Ready stock Vadodara. Fast delivery to Nagpur.</p>
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
            {href:"/carbon-steel-pipe-fittings-vadodara",label:"Carbon Steel Pipe Fittings Vadodara"},
            {href:"/steel-supplier-raipur",label:"Steel Supplier Raipur"},
            {href:"/steel-supplier-indore",label:"Steel Supplier Indore"},
            {href:"/steel-pipe-supplier-hyderabad",label:"Steel Pipe Supplier Hyderabad"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/steel-supplier-nagpur" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Steel Supplier Nagpur | SS Pipes, Pipe Fittings, MS Angles | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
