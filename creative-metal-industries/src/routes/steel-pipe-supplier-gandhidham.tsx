/**
 * /steel-pipe-supplier-gandhidham
 * Target: "pipe supplier Gandhidham Kutch", "steel Adipur Kutch",
 * "Kandla port steel", "pipe trading Gandhidham"
 */
import { Title, Meta, Link } from "@solidjs/meta";

const PRODUCTS = [
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L X42–X70, IS 1239/3589", sizes: "1/2\" to 60\"", type: "Seamless, ERW, LSAW", stock: "Ready Stock" },
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310S, 904L, Duplex 2205", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "API Line Pipes", grades: "API 5L Gr.B to X70, PSL1 & PSL2, NACE MR0175", sizes: "2\" to 60\"", type: "Seamless, ERW, LSAW", stock: "Ready Stock" },
  { category: "SS Fittings & Flanges", grades: "SS 304/316L Elbows, Tees, Reducers, WN/SO/Blind Flanges", sizes: "1/2\" to 48\"", type: "Buttweld, Forged", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P5, P9, P11, P22, P91", sizes: "1/2\" to 24\"", type: "Seamless (IBR)", stock: "Ready Stock" },
  { category: "Structural Steel", grades: "IS 2062 Gr.E250/E350, ASTM A36, A572 Gr.50", sizes: "Various sections", type: "Beams, Channels, Angles", stock: "Ready Stock" },
  { category: "Duplex & Super Duplex", grades: "Duplex 2205, Super Duplex 2507", sizes: "1/2\" to 16\"", type: "Seamless & Welded", stock: "Available" },
  { category: "GI & MS Pipes", grades: "IS 1239 GI, MS ERW, Scaffolding Pipes", sizes: "1/2\" to 6\"", type: "ERW, Galvanized", stock: "Ready Stock" },
];

const INDUSTRIES = [
  { icon: "\u{1F6A2}", name: "Kandla Port & Logistics", desc: "India's largest cargo port by volume — structural steel, CS pipes for port infrastructure, SS for marine environments, heavy plates for ship repair" },
  { icon: "\u{1F3ED}", name: "Gandhidham GIDC", desc: "Engineering, fabrication, and manufacturing units — carbon steel pipes, SS fittings, structural steel, and plates for general industrial applications" },
  { icon: "\u{1F9C2}", name: "Salt & Chemical Industry", desc: "Kutch's massive salt works and chemical plants — duplex 2205, SS 316L for brine handling, Hastelloy for bromine extraction, titanium for chlor-alkali" },
  { icon: "\u{1F527}", name: "Pipe Trading & Distribution", desc: "Gandhidham is Western India's pipe trading hub — bulk CS, ERW, LSAW pipes for redistribution to Kutch, Saurashtra, and Rajasthan markets" },
  { icon: "\u2699\uFE0F", name: "Fabrication Workshops", desc: "Heavy fabrication and structural steel workshops in Adipur industrial area — plates, pipes, sections, and fittings for tank and vessel fabrication" },
  { icon: "\u26FD", name: "Oil & Gas (Kutch Basin)", desc: "ONGC and GSPC exploration in Kutch basin — API 5L line pipes, NACE-compliant materials, high-yield steel for pipeline projects in desert terrain" },
];

const FAQS = [
  { q: "Who is the best steel pipe supplier in Gandhidham, Kutch?", a: "Creative Metal Industries (CMI) from Vadodara is Gandhidham's most reliable pipe supplier with SAME-DAY delivery across the full range — carbon steel, SS, API line pipes, fittings, flanges, and structural steel. Our 2000+ tonne warehouse ensures instant availability for Gandhidham's pipe trading community, Kandla port projects, GIDC manufacturing, and salt/chemical industry. We offer competitive bulk pricing ideal for Gandhidham's redistribution market." },
  { q: "How fast can steel pipes be delivered to Gandhidham from Vadodara?", a: "SAME-DAY delivery is possible — Gandhidham is approximately 380 km from Vadodara (6-7 hours via NH-27). Early morning dispatches reach Gandhidham/Adipur by afternoon. For bulk orders and regular supply contracts, we arrange dedicated full-truck-load shipments with scheduled weekly deliveries. Our logistics team is experienced with Kutch routes and maintains transport partnerships for consistent, reliable delivery to the Gandhidham-Adipur-Kandla industrial triangle." },
  { q: "Do you supply API line pipes for pipeline projects in Kutch?", a: "Yes, API 5L line pipes (Grade B to X70) in PSL1 and PSL2 specifications are our core products. Available in seamless (2\"-24\"), ERW (2\"-24\"), and LSAW (24\"-60\") with NACE MR0175 compliance for sour service. These are essential for oil and gas pipeline projects in Kutch basin, gas distribution networks, and water transmission lines in the region. All pipes supplied with hydrostatic test certificates, mill TCs, and third-party inspection as required." },
  { q: "Can you supply bulk pipes for Gandhidham's trading market?", a: "Absolutely. We understand Gandhidham's unique position as a pipe redistribution hub for Western India. We offer bulk pricing on container-load quantities of ERW pipes (IS 1239, IS 3589), seamless pipes (A106/A53), GI pipes, and structural tubes. Credit terms available for established traders. Our competitive pricing from direct mill sources and ready stock availability makes CMI the preferred primary supplier for Gandhidham's thriving pipe trading community." },
  { q: "What materials do you supply for Kutch's salt and chemical industry?", a: "Kutch's salt and chemical industry requires specialized corrosion-resistant materials. We supply: duplex 2205 for brine and high-chloride environments, SS 316L for general chemical service, Hastelloy C276 for bromine extraction plants, titanium Grade 2 for chlor-alkali cells, and FRP/HDPE-lined pipes for concentrated brine. For salt washing and crystallization plants, we provide engineered piping solutions that withstand the highly corrosive saltwater environments unique to Kutch's Little Rann operations." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","name":"Creative Metal Industries — Pipe Supplier Gandhidham","description":"Leading steel pipe supplier for Gandhidham, Adipur & Kandla — CS, SS, API pipes for port logistics, GIDC, salt/chemical industry. Same-day delivery from Vadodara.","telephone":"+91-99982-80619","url":"https://www.creativemetalind.com/steel-pipe-supplier-gandhidham","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"Place","name":"Gandhidham, Adipur, Kandla","containedInPlace":{"@type":"State","name":"Gujarat"}},"priceRange":"$$","aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"52","bestRating":"5"}},{"@type":"Product","name":"Steel Pipes, Fittings & Structural Steel — Gandhidham Supply","description":"Carbon steel, SS, API line pipes, fittings, and structural steel for Gandhidham GIDC, Kandla port, and Kutch industries. Same-day delivery.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"45","highPrice":"18000","offerCount":"5000+","availability":"https://schema.org/InStock"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Pipe Supplier Gandhidham","item":"https://www.creativemetalind.com/steel-pipe-supplier-gandhidham"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelPipeSupplierGandhidham() {
  return (
    <>
      <Title>Steel Pipe Supplier Gandhidham | Kutch Pipes | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Steel pipe supplier Gandhidham — CS, SS, API pipes for Kandla port, GIDC & Kutch industries. SAME-DAY delivery from Vadodara. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-pipe-supplier-gandhidham" />
      <Meta property="og:title" content="Steel Pipe Supplier Gandhidham Kutch | Kandla Port & GIDC | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Pipe supplier Gandhidham — bulk CS, SS, API pipes for Kandla port, salt/chemical, GIDC. Same-day delivery." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-pipe-supplier-gandhidham" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Pipe Supplier Gandhidham | Kutch Pipes | CMI" />
      <Meta name="twitter:description" content="Pipe supplier Gandhidham Kutch — CS, SS, API pipes for port & industrial. Same-day delivery." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Pipe Supplier Gandhidham" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Pipe Supplier Gandhidham</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Pipe Supplier in Gandhidham — Kandla Port, Adipur &amp; Kutch Industries
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is the leading <strong>steel pipe supplier for Gandhidham</strong>, Adipur, and the greater Kutch industrial region — delivering <strong>SAME-DAY from Vadodara</strong> (380 km). Gandhidham is Western India's largest pipe trading and distribution hub, strategically located near <strong>Kandla Port</strong> (India's busiest cargo port by tonnage), with thriving GIDC industrial estates, massive salt and chemical operations, fabrication workshops, and oil/gas exploration activity in the Kutch basin. Whether you need bulk carbon steel ERW pipes for redistribution, API 5L line pipes for pipeline projects, SS 316L for chemical plants, or structural steel for port infrastructure — CMI provides competitive pricing, ready stock, and reliable delivery that Gandhidham's trading community and industries depend on.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range — Pipes, Fittings &amp; Steel for Gandhidham</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Gandhidham &amp; Kutch Choose Creative Metal Industries</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>SAME-DAY delivery to Gandhidham:</strong> 380 km from Vadodara — morning dispatch reaches Gandhidham/Adipur by evening, bulk shipments on dedicated trucks</li>
            <li><strong>Bulk pricing for traders:</strong> Container-load quantities at mill-direct pricing — ideal for Gandhidham's pipe trading and redistribution market</li>
            <li><strong>Complete range under one roof:</strong> CS, SS, API, GI, structural — no need to source from multiple suppliers, one invoice, one delivery</li>
            <li><strong>Kandla port project support:</strong> Structural steel, marine-grade SS, heavy plates for port expansion, jetty repair, and cargo handling infrastructure</li>
            <li><strong>Salt/chemical industry specialist:</strong> Duplex 2205, SS 316L, Hastelloy for brine, chloride, and chemical environments unique to Kutch operations</li>
            <li><strong>API certified line pipes:</strong> PSL1/PSL2, NACE compliant for oil/gas pipeline projects in Kutch basin, complete documentation and TPI support</li>
            <li><strong>Same Gujarat state advantage:</strong> Intra-state GST, no border complications, faster movement for urgent orders to Kutch district</li>
            <li><strong>Credit terms for regular buyers:</strong> Flexible payment options for established traders, fabricators, and industrial consumers in Gandhidham market</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Gandhidham, Adipur &amp; Kutch</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas in Gandhidham &amp; Kutch Region</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["Gandhidham GIDC","Adipur Industrial","Kandla Port Area","Kandla SEZ","Anjar GIDC","Bhachau Industrial","Mundra Port/SEZ","Mandvi Coast","Kutch Salt Works","Lakhpat Wind Farm","Nakhatrana Area","Bhuj Industrial"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Gandhidham — Western India's Pipe Trading Capital</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Gandhidham has evolved into Western India's primary pipe trading and redistribution centre, serving markets across Kutch, Saurashtra, and Rajasthan. Creative Metal Industries supports this thriving ecosystem with <strong>bulk ERW and seamless pipe supply</strong> at competitive mill-direct pricing, <strong>API 5L line pipes</strong> for the region's growing pipeline infrastructure, <strong>GI pipes</strong> for water supply projects in semi-arid Kutch, and <strong>structural steel</strong> for Kandla port's continuous expansion. For the salt and chemical industry around Little Rann and coastal Kutch, we supply specialized corrosion-resistant alloys — <strong>duplex 2205 for brine</strong>, <strong>SS 316L for chemical process</strong>, and <strong>titanium for chlor-alkali operations</strong>. Whether you're a pipe trader, a fabricator, or an end-user industry — CMI delivers the range, quality, and pricing that keeps Gandhidham's industrial economy moving.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Pipe Supplier Gandhidham</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Steel Pipes in Gandhidham? Same-Day Delivery!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>CS, SS, API Pipes, Fittings & Structural — Ready stock. Bulk pricing for traders. Same-day dispatch from Vadodara.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4DE}"} +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4AC}"} WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote {"\u2192"}</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/steel-supplier-kandla",label:"Steel Supplier Kandla"},
            {href:"/steel-supplier-mundra",label:"Steel Supplier Mundra"},
            {href:"/steel-supplier-jamnagar",label:"Steel Supplier Jamnagar"},
            {href:"/alloy-steel-pipe-supplier-india",label:"Alloy Steel Pipe Supplier India"},
            {href:"/carbon-steel-pipe-fittings-vadodara",label:"CS Pipe Fittings Vadodara"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Steel Pipe Supplier Gandhidham | Kandla Port, Adipur, Kutch | CS, SS, API Pipes | Same-Day Delivery | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
