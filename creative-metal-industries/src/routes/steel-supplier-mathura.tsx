/**
 * /steel-supplier-mathura
 * Target: "steel supplier Mathura", "IOCL Mathura refinery pipe",
 * "refinery steel Mathura UP"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const PRODUCTS = [
  { category: "API Line Pipes", grades: "API 5L Gr.B to X65, PSL1 & PSL2, NACE MR0175", sizes: "2\" to 48\"", type: "Seamless, ERW, LSAW", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P5, P9, P11, P22, P91", sizes: "1/2\" to 24\"", type: "Seamless (IBR)", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B/C, A53, API 5L, IS 3589", sizes: "1/2\" to 48\"", type: "Seamless, ERW, LSAW", stock: "Ready Stock" },
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310S, 904L, Duplex 2205", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "NACE/HIC Steel Plates", grades: "SA 516 Gr.60/70 NACE, SA 387 Gr.11/22, HIC Tested", sizes: "6mm to 150mm thick", type: "Hot Rolled (Normalized)", stock: "Ready Stock" },
  { category: "Pipe Fittings & Flanges", grades: "CS A234 WPB, SS 304/316L, Alloy WP11/WP22", sizes: "1/2\" to 48\"", type: "Buttweld, Forged, WN/SO/Blind", stock: "Ready Stock" },
  { category: "Duplex & Super Duplex", grades: "Duplex 2205, Super Duplex 2507", sizes: "1/2\" to 16\"", type: "Seamless & Welded", stock: "Available" },
  { category: "High Temp Alloys", grades: "Inconel 625/800H, Hastelloy C276, Monel 400", sizes: "1/2\" to 10\"", type: "Seamless", stock: "Available" },
];

const INDUSTRIES = [
  { icon: "\u{1F6E2}\uFE0F", name: "IOCL Mathura Refinery (8 MMTPA)", desc: "One of India's oldest and strategically located refineries — API pipes, NACE CS, alloy steel for ongoing maintenance, revamp projects, and shutdown turnarounds" },
  { icon: "\u26FD", name: "Gas Pipeline Network (UP)", desc: "GAIL and city gas distribution network — API 5L line pipes, CS fittings, coated pipes for natural gas transmission and distribution across UP" },
  { icon: "\u{1F3ED}", name: "Agra Industrial Belt", desc: "Engineering, glass, leather, and chemical industries near Agra — SS pipes, CS structural, general industrial piping for manufacturing sector" },
  { icon: "\u26A1", name: "Power Plants (UP Grid)", desc: "Thermal and gas power plants in Uttar Pradesh — alloy steel IBR pipes for boilers, CS for BOP, SS for cooling water systems" },
  { icon: "\u{1F3D7}\uFE0F", name: "Infrastructure & Construction", desc: "Expressway projects, Mathura-Vrindavan development — structural steel, MS pipes for bridges, GI for water supply infrastructure" },
  { icon: "\u{1F9EA}", name: "Chemical & Fertilizer (UP)", desc: "Downstream chemical plants, fertilizer units — SS 304/316L for process, alloy for high-temperature, NACE materials for chemical service" },
];

const FAQS = [
  { q: "Who is the best steel supplier for IOCL Mathura Refinery?", a: "Creative Metal Industries (CMI) is a reliable supplier of refinery-grade piping materials for IOCL Mathura Refinery. We supply API 5L PSL2 line pipes, NACE MR0175 compliant carbon steel, alloy steel P5/P9/P11/P22 for high-temperature service, SS 316L/321 for process piping, and complete fittings and flanges. With 2000+ tonnes ready stock and 2-day delivery from Vadodara to Mathura, we support both planned shutdowns and emergency maintenance requirements at this strategic refinery." },
  { q: "How fast can pipes be delivered to Mathura from Vadodara?", a: "Delivery to Mathura takes just 2 days from our Vadodara warehouse (approximately 1,100 km via NH48/Yamuna Expressway route). For IOCL Mathura refinery shutdown emergencies where every hour of downtime is costly, we offer priority dispatch within hours with dedicated transport. Our regular supply routes to North India ensure reliable and consistent transit times to Mathura and surrounding areas including Agra and the UP industrial belt." },
  { q: "Do you supply NACE materials for Mathura Refinery sour service?", a: "Yes. IOCL Mathura processes various crude grades including high-sulphur varieties requiring NACE MR0175/ISO 15156 compliant piping. We supply NACE carbon steel with restricted chemistry and controlled hardness (max 22 HRC), HIC-tested plates SA 516 Gr.70, alloy steel with PWHT documentation, SS 316L with ferrite control, and duplex 2205 for chloride environments. Complete NACE compliance certificates, HIC/SSC test reports, and hardness mapping provided with every supply." },
  { q: "Can you support IOCL Mathura refinery shutdown/turnaround?", a: "Absolutely. IOCL Mathura's periodic shutdowns require rapid material mobilization. CMI maintains ready stock of all refinery-grade materials — pre-inspected pipes, fittings, flanges, and plates. We can dispatch 20-50 tonnes within 24 hours for turnaround support. With just 2-day delivery time, materials reach site quickly. All documentation (MTCs, NACE compliance, dimensional reports, TPI certificates) is prepared in advance to clear refinery QA/QC without delays." },
  { q: "What is your delivery coverage around Mathura in UP?", a: "From our Vadodara base, we serve the entire Mathura-Agra-Firozabad-Aligarh industrial corridor with 2-day delivery. This includes IOCL Mathura Refinery, Agra industrial areas, Firozabad glass industry, Aligarh lock/hardware manufacturers, and the broader western UP industrial belt. We also supply to gas pipeline projects, power plants, and construction projects across Uttar Pradesh with reliable logistics through established transport networks." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","name":"Creative Metal Industries — Steel Supplier Mathura","description":"Steel supplier for IOCL Mathura Refinery — API pipes, NACE materials, alloy steel. 2-day delivery from Vadodara.","telephone":"+91-99982-80619","url":"https://www.creativemetalind.com/steel-supplier-mathura","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"Place","name":"Mathura","containedInPlace":{"@type":"State","name":"Uttar Pradesh"}},"priceRange":"$$","aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"31","bestRating":"5"}},{"@type":"Product","name":"API Pipes, NACE Materials & Refinery Steel — Mathura Supply","description":"Refinery-grade piping for IOCL Mathura — API 5L, NACE CS, alloy steel, SS. 2-day delivery from Vadodara.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"60","highPrice":"22000","offerCount":"4500+","availability":"https://schema.org/InStock"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Supplier Mathura","item":"https://www.creativemetalind.com/steel-supplier-mathura"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});


export default function SteelSupplierMathura() {
  return (
    <>
      <Title>Steel Supplier Mathura | IOCL Refinery Pipes | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Steel supplier Mathura — API pipes, NACE materials for IOCL Mathura refinery, shutdown support. 2-day delivery. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-supplier-mathura" />
      <Meta property="og:title" content="Steel Supplier Mathura | IOCL Refinery & Industrial Pipes | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Steel supplier Mathura — refinery piping for IOCL Mathura, gas pipeline materials, industrial steel. CMI Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-supplier-mathura" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Supplier Mathura | IOCL Refinery Pipes | CMI" />
      <Meta name="twitter:description" content="Steel supplier Mathura — API pipes, NACE materials for IOCL refinery. 2-day delivery." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Steel Supplier Mathura" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Supplier Mathura</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Supplier in Mathura — IOCL Refinery Piping, Shutdown Support &amp; Industrial Steel
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is a proven <strong>steel supplier for Mathura</strong>, primarily serving the <strong>IOCL Mathura Refinery (8 MMTPA)</strong> — one of India's strategically important refineries located in western Uttar Pradesh. With <strong>2-day delivery from Vadodara</strong> (just 1,100 km), we provide rapid material supply for refinery maintenance, shutdown turnarounds, and ongoing revamp projects. Our 2000+ tonne inventory includes <strong>API line pipes, NACE-compliant carbon steel, alloy steel P5/P9/P11/P22, stainless steel</strong>, and complete fittings/flanges range. Beyond the refinery, we also serve Mathura-Agra's industrial corridor including gas pipeline projects, power plants, and the region's diverse manufacturing sector with quality piping materials and full documentation.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range — Pipes, Plates &amp; Steel for Mathura</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Mathura Industries Choose Creative Metal Industries</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>IOCL Mathura refinery specialist:</strong> Complete API, NACE, alloy, SS range — proven supplier for India's refinery maintenance and revamp projects</li>
            <li><strong>Just 2-day delivery:</strong> 1,100 km from Vadodara — fastest material supply for Mathura refinery shutdowns and emergencies</li>
            <li><strong>Shutdown turnaround support:</strong> 20-50 tonnes mobilized within 24 hours — pre-certified materials for rapid refinery QA acceptance</li>
            <li><strong>NACE/sour service materials:</strong> MR0175 compliant CS, HIC-tested plates, controlled hardness alloy — mandatory for Mathura's crude processing</li>
            <li><strong>Complete documentation:</strong> MTCs, NACE certificates, TPI reports, IBR Form III-C — all ready before dispatch for zero site-level delays</li>
            <li><strong>Gas pipeline supply:</strong> API 5L PSL1/PSL2 for GAIL and city gas distribution projects across UP</li>
            <li><strong>Agra corridor coverage:</strong> Industrial piping for Mathura-Agra-Firozabad-Aligarh manufacturing belt</li>
            <li><strong>2000+ tonne ready stock:</strong> No mill waiting — ex-stock dispatch for critical refinery requirements</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Mathura &amp; Western UP</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas in Mathura &amp; Surrounding Region</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["IOCL Mathura Refinery","Agra Industrial Area","Firozabad Glass Belt","Aligarh Lock Industry","Hathras Industrial","Vrindavan Development","Bharatpur (Rajasthan)","Etah Manufacturing","Mainpuri District","GAIL Pipeline Corridor","Noida/Greater Noida","Yamuna Expressway Belt"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Refinery Piping &amp; Shutdown Support for IOCL Mathura</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          IOCL Mathura Refinery has been operational since 1982 and undergoes regular maintenance shutdowns and capacity revamp projects requiring reliable piping material supply. Creative Metal Industries provides <strong>API 5L line pipes</strong> for product transfer lines, <strong>NACE MR0175 carbon steel</strong> for sour crude service areas, <strong>alloy steel A335 P5/P9</strong> for catalytic reformer and hydrotreater piping, <strong>P11/P22</strong> for furnace and heater tubes, <strong>SS 316L/321</strong> for process and chemical service, and <strong>SA 516 Gr.70 NACE plates</strong> for pressure vessel repairs. Our 2-day delivery advantage means Mathura refinery can order today and have materials on-site day after tomorrow — critical when every day of shutdown extension costs crores. We also support GAIL's gas pipeline projects in the region with API PSL2 pipes and city gas distribution materials for Agra-Mathura smart city development.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Steel Supplier Mathura</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Refinery Pipes in Mathura? 2-Day Delivery!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>API Pipes, NACE CS, Alloy Steel — Ready stock. 2-day delivery to IOCL Mathura Refinery.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4DE}"} +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4AC}"} WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote {"\u2192"}</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/steel-supplier-panipat",label:"Steel Supplier Panipat"},
            {href:"/steel-pipe-supplier-delhi",label:"Steel Pipe Supplier Delhi"},
            {href:"/alloy-steel-pipe-supplier-india",label:"Alloy Steel Pipe Supplier India"},
            {href:"/nace-hic-steel-plate-supplier-india",label:"NACE HIC Steel Plate Supplier"},
            {href:"/steel-supplier-kanpur",label:"Steel Supplier Kanpur"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/steel-supplier-mathura" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Steel Supplier Mathura | IOCL Refinery Pipes | Shutdown Support | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
