/**
 * /steel-supplier-durgapur
 * Target: "steel supplier Durgapur", "industrial pipe West Bengal",
 * "SAIL Durgapur", "steel pipe supplier Durgapur"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const PRODUCTS = [
  { category: "Alloy Steel Pipes (IBR)", grades: "ASTM A335 P5, P9, P11, P22, P91", sizes: "1/2\" to 24\"", type: "Seamless (IBR)", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L X42–X70", sizes: "1/2\" to 48\"", type: "Seamless & ERW", stock: "Ready Stock" },
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 310S, 321, 904L", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Boiler Tubes (IBR)", grades: "ASTM A213 T11, T22, T91, T5, T9", sizes: "1\" to 6\" OD", type: "Seamless IBR", stock: "Ready Stock" },
  { category: "SS Fittings & Flanges", grades: "SS 304/316L Elbows, Tees, Flanges WN/SO/Blind", sizes: "1/2\" to 48\"", type: "Buttweld & Forged", stock: "Ready Stock" },
  { category: "Steel Plates", grades: "SA 516 Gr.60/70, SA 387 Gr.11/22, IS 2062", sizes: "6mm to 150mm thick", type: "Hot Rolled", stock: "Available" },
  { category: "API Line Pipes", grades: "API 5L Gr.B, X42, X52, X60, X65, X70", sizes: "2\" to 48\"", type: "LSAW / HSAW / ERW", stock: "Ready Stock" },
  { category: "Exotic Alloys", grades: "Inconel 600/625/825, Hastelloy C276/C22, Monel 400", sizes: "1/2\" to 12\"", type: "Seamless & Welded", stock: "Available" },
];

const INDUSTRIES = [
  { icon: "\u{1F3ED}", name: "SAIL Durgapur Steel Plant (DSP)", desc: "4.5 MTPA integrated steel plant — exotic alloys (Inconel, Hastelloy, duplex) for maintenance that SAIL doesn't produce, SS fittings, alloy pipes for coke oven and BF repairs" },
  { icon: "\u26A1", name: "DPL Power (Durgapur Projects Ltd)", desc: "Thermal power generation — IBR alloy steel boiler tubes (T11/T22/T91), steam line pipes (P91/P22), high-pressure fittings for DVC power stations" },
  { icon: "\u{1F3D7}\uFE0F", name: "ADDA Industrial Area", desc: "Durgapur's largest industrial zone — CS and SS piping for manufacturing units, engineering fabricators, and process industries" },
  { icon: "\u{1F9EA}", name: "Fertilizer Plants", desc: "Ammonia and urea processing — SS 304/316L for acid and ammonia service, NACE-compliant alloy pipes, duplex for high-chloride cooling systems" },
  { icon: "\u{1F525}", name: "Thermal Power (DVC)", desc: "Damodar Valley Corporation power stations — IBR-certified boiler tubes, alloy steam pipes P91/P22/P11, high-pressure flanges and fittings for Mejia, Bakreswar, Santaldih TPS" },
  { icon: "\u2699\uFE0F", name: "Engineering & Fabrication", desc: "Heavy engineering workshops in Durgapur — structural steel plates, CS pipes, SS sheets, alloy fittings for fabrication of pressure vessels, heat exchangers, and industrial equipment" },
];

const FAQS = [
  { q: "Who is the best steel supplier for Durgapur industries?", a: "Creative Metal Industries (CMI) is a trusted steel supplier serving Durgapur's industrial sector since 2012. We specialize in materials that SAIL Durgapur Steel Plant doesn't manufacture — exotic alloys (Inconel, Hastelloy, Monel), duplex and super duplex steel, IBR-certified alloy pipes (P91/P22/P11), and stainless steel pipes (304, 316L, 310S, 321). We serve SAIL DSP maintenance contractors, DPL Power, ADDA industrial units, DVC power stations, and the entire Asansol-Durgapur industrial belt. Our Vadodara warehouse delivers to Durgapur in 3-4 working days with complete documentation." },
  { q: "What is the delivery time for steel pipes from Vadodara to Durgapur?", a: "Delivery from our Vadodara warehouse to Durgapur is 3-4 working days via road transport (approximately 1,900 km). We have established logistics partners for regular deliveries to SAIL DSP Complex, ADDA Industrial Area, and DPL Township. Express air-freight available for critical shutdown materials. We also deliver to Asansol, Burnpur, Raniganj, Kolkata, and other West Bengal industrial locations." },
  { q: "What specialized alloys do you supply that SAIL doesn't manufacture?", a: "SAIL Durgapur produces carbon steel and structural products — but their plants don't manufacture the specialized alloys needed for maintenance and high-performance applications. CMI supplies Inconel 600/625/825 for high-temperature furnace components, Hastelloy C276/C22 for extreme corrosion resistance, duplex 2205 and super duplex 2507 for chloride-bearing environments, Monel 400 for acid service, and alloy steel P91/P22 for steam systems. These are exactly the materials SAIL DSP maintenance contractors need but cannot source from the plant itself." },
  { q: "Do you supply IBR-certified pipes for DVC power plants?", a: "Yes, we maintain ready stock of IBR-certified alloy steel pipes and boiler tubes for DVC power stations including Mejia TPS, Bakreswar TPS, and Santaldih TPS. Our IBR range includes boiler tubes (T11, T22, T91, T5, T9), steam line pipes (P91, P22, P11, P5), and high-pressure fittings. All materials supplied with IBR Form III-C, stage-wise inspection certificates, hydraulic test reports, and EN 10204 3.1/3.2 mill test certificates. We understand DVC's stringent documentation requirements." },
  { q: "Can you handle bulk supply for steel plant maintenance shutdowns?", a: "Absolutely. We have extensive experience supplying piping materials for planned shutdowns at integrated steel plants. Our 2000+ tonne Vadodara warehouse stocks the exotic alloys, SS pipes, and alloy fittings needed during SAIL DSP annual maintenance. We can mobilize 20-50 tonnes of mixed materials within 3-4 days. Pre-shutdown planning support available — share your material requisition list and we'll confirm stock availability, pricing, and delivery schedule for your entire shutdown requirement in one go." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-supplier-durgapur#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries — Steel Supplier Durgapur","description":"Trusted steel supplier in Durgapur, West Bengal offering exotic alloys, IBR pipes, SS pipes and fittings for SAIL DSP, DVC power plants and industrial maintenance.","telephone":"+919998280619","url":"https://www.creativemetalind.com/steel-supplier-durgapur","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"City","name":"Durgapur","containedInPlace":{"@type":"State","name":"West Bengal"}},"priceRange":"$$"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Supplier Durgapur","item":"https://www.creativemetalind.com/steel-supplier-durgapur"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelSupplierDurgapur() {
  return (
    <>
      <Title>Steel Supplier Durgapur | IBR Pipes & Alloys | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Steel supplier Durgapur — IBR alloy pipes, exotic alloys, SS pipes for SAIL DSP & DVC power plants. 3-4 day delivery. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-supplier-durgapur" />
      <Meta property="og:title" content="Steel Supplier Durgapur | SAIL DSP & Power Plant Pipes | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Steel supplier Durgapur — exotic alloys, IBR pipes, SS for steel plant & power. 3-4 day delivery. CMI." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-supplier-durgapur" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Supplier Durgapur | IBR Pipes & Alloys | CMI" />
      <Meta name="twitter:description" content="Steel supplier Durgapur — IBR alloy pipes, exotic alloys for SAIL & DVC power. 3-4 day delivery." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Steel Supplier Durgapur" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Supplier Durgapur</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Supplier in Durgapur — Industrial Pipes, IBR Alloys &amp; Exotic Metals
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is your trusted <strong>steel supplier in Durgapur</strong>, West Bengal, strategically serving the Asansol-Durgapur industrial corridor. Durgapur is home to <strong>SAIL's Durgapur Steel Plant (DSP)</strong> — a 4.5 MTPA integrated facility — alongside DPL Power, DVC thermal stations, ADDA Industrial Area, and numerous engineering fabricators. While SAIL produces carbon and structural steel, the region's maintenance and power sectors need specialized alloys that primary steel plants don't manufacture. CMI fills this critical gap by supplying <strong>Inconel, Hastelloy, duplex, super duplex, and IBR-certified alloy pipes</strong> (P91/P22/P11) with complete documentation. Our 2000+ tonne Vadodara warehouse ensures 3-4 day delivery to Durgapur with ready stock for shutdown emergencies and power plant boiler maintenance.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range — Pipes, Boiler Tubes &amp; Exotic Alloys for Durgapur</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Durgapur Industries Choose Creative Metal Industries</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Fills the gap SAIL doesn't cover:</strong> We supply exotic alloys (Inconel, Hastelloy, Monel), duplex, and super duplex that SAIL DSP doesn't manufacture — essential for plant maintenance and specialized applications</li>
            <li><strong>IBR boiler tubes for DVC power:</strong> Ready stock of T11/T22/T91 boiler tubes and P91/P22 steam pipes with IBR Form III-C certification for Mejia, Bakreswar, and Santaldih thermal power stations</li>
            <li><strong>Steel plant maintenance specialist:</strong> Proven track record supplying alloy and exotic materials for SAIL DSP coke oven, blast furnace, and rolling mill maintenance shutdowns</li>
            <li><strong>Complete IBR documentation:</strong> Form III-C, stage-wise inspection, TPI witness, hydraulic test — as per DVC and SAIL specification requirements</li>
            <li><strong>3-4 day delivery to Durgapur:</strong> Established logistics from Vadodara to SAIL DSP Complex, ADDA Industrial, and DPL Township — express options for critical materials</li>
            <li><strong>Ready stock for emergencies:</strong> 2000+ tonne warehouse means no waiting for mill delivery during tight shutdown windows at steel or power plants</li>
            <li><strong>Direct mill sourcing:</strong> Sumitomo, Vallourec, ISMT, Sandvik, Special Metals — competitive pricing without Kolkata middleman markup</li>
            <li><strong>NACE compliance:</strong> Materials meeting MR0175/ISO 15156 for sour service in coke oven gas and chemical processing applications</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Durgapur &amp; West Bengal</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas in Durgapur &amp; West Bengal</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["SAIL DSP Complex","DPL Township","ADDA Industrial Area","Durgapur Chemical Zone","Asansol Industrial","Burnpur IISCO","Andal Industrial","Raniganj Coal Belt","Panagarh Industrial","Mejia TPS","Bakreswar TPS","Santaldih TPS"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Specialized Solutions for Durgapur's Steel &amp; Power Sector</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Durgapur's industrial ecosystem revolves around steel production and power generation — both demanding highly specialized piping materials. Creative Metal Industries supplies <strong>Inconel 600/625 for SAIL DSP's blast furnace and coke oven tuyeres</strong>, <strong>Hastelloy C276 for corrosive gas handling</strong>, <strong>IBR alloy steel P91/P22 boiler tubes for DVC thermal power stations</strong>, <strong>duplex 2205 for cooling water systems</strong>, and <strong>SS 310S for high-temperature kiln and furnace applications</strong>. We understand that when a steel plant or power station calls for maintenance materials, downtime costs lakhs per hour — our ready stock and 3-4 day delivery ensures your shutdown stays on schedule. We also supply <a href="/steel-pipe-supplier-kolkata" style={{color:"#E8821A","font-weight":"600"}}>steel pipes across Kolkata</a>, <a href="/steel-supplier-rourkela" style={{color:"#E8821A","font-weight":"600"}}>Rourkela's steel belt</a>, and the broader <a href="/alloy-steel-pipe-supplier-india" style={{color:"#E8821A","font-weight":"600"}}>alloy steel market across India</a>.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Steel Supplier Durgapur</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Steel Pipes or Exotic Alloys in Durgapur? Get Quote Now!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>IBR Alloy Pipes, Boiler Tubes, Inconel, Hastelloy, SS — Ready stock. 3-4 day delivery to Durgapur.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4DE}"} +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4AC}"} WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote {"\u2192"}</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/steel-pipe-supplier-kolkata",label:"Steel Pipe Supplier Kolkata"},
            {href:"/steel-supplier-rourkela",label:"Steel Supplier Rourkela"},
            {href:"/alloy-steel-pipe-supplier-india",label:"Alloy Steel Pipe Supplier India"},
            {href:"/steel-supplier-haldia",label:"Steel Supplier Haldia"},
            {href:"/steel-supplier-raipur",label:"Steel Supplier Raipur"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/steel-supplier-durgapur" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Steel Supplier Durgapur | IBR Pipes, Exotic Alloys, Boiler Tubes | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
