/**
 * /steel-pipe-supplier-madurai
 * Target: "pipe supplier Madurai", "industrial steel Madurai",
 * "SS pipe Madurai", "carbon steel Madurai Tamil Nadu"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";
import { LocationContent } from "../components/LocationContent";

const PRODUCTS = [
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310S, 202", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L, IS 1239, IS 3589", sizes: "1/2\" to 48\"", type: "Seamless, ERW, LSAW", stock: "Ready Stock" },
  { category: "MS Structural Pipes", grades: "IS 1161 YSt 210/240/310, IS 4923, IS 2062 E250", sizes: "15mm to 300mm NB", type: "ERW Round/Square/Rect", stock: "Ready Stock" },
  { category: "SS Fittings & Flanges", grades: "SS 304/316L Elbows, Tees, Reducers, Flanges", sizes: "1/2\" to 24\"", type: "Buttweld, Forged, WN/SO/Blind", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P5, P9, P11, P22, P91", sizes: "1/2\" to 16\"", type: "Seamless (IBR)", stock: "Available" },
  { category: "GI & GP Pipes", grades: "IS 1239 Class A/B/C, Hot Dip Galvanized", sizes: "15mm to 150mm NB", type: "ERW Threaded/Plain", stock: "Ready Stock" },
  { category: "Steel Plates & Sheets", grades: "SA 516 Gr.70, IS 2062 E250/E350, SS 304/316L", sizes: "1mm to 100mm thick", type: "HR/CR Plates & Sheets", stock: "Ready Stock" },
  { category: "Pipe Fittings (CS/SS)", grades: "A234 WPB, SS 304/316L Buttweld & Forged", sizes: "1/2\" to 48\"", type: "Elbows, Tees, Reducers, Caps", stock: "Ready Stock" },
];

const INDUSTRIES = [
  { icon: "\u{1F697}", name: "Auto & Rubber Components", desc: "TVS group suppliers, rubber moulding units, auto ancillary — SS tubes for hydraulics, CS pipes for chassis, structural steel for factory construction" },
  { icon: "\u{1FAA8}", name: "Granite & Stone Industry", desc: "Madurai granite processing and export cluster — structural steel, MS pipes for factory sheds, SS for polishing machinery, heavy plates for cutting frames" },
  { icon: "\u{1F9F5}", name: "Textile & Spinning Mills", desc: "South Tamil Nadu textile belt — SS pipes for steam systems, GI pipes for utilities, structural for mill construction, boiler piping for captive power" },
  { icon: "\u{1F35E}", name: "Food Processing & Cold Storage", desc: "Spice processing, cold storage, packaged foods — SS 304/316L for food-grade piping, dairy equipment, beverage processing lines" },
  { icon: "\u{1F3EB}", name: "Madurai Kamaraj University R&D", desc: "Research laboratories and pilot plants — SS precision tubes, specialty alloys for research equipment, custom-cut materials for academic projects" },
  { icon: "\u{1F3ED}", name: "SIDCO Kappalur Industrial", desc: "SIDCO industrial estate — general industrial piping, structural steel for factories, GI for utilities, MS pipes for fabrication workshops" },
];

const FAQS = [
  { q: "Who is the best steel pipe supplier for Madurai industries?", a: "Creative Metal Industries (CMI) Vadodara is a trusted steel pipe supplier for Madurai with 2-3 day delivery across the full product range. We supply SS 304/316L pipes for food and textile industries, carbon steel pipes for general industrial use, structural steel for construction, GI pipes for plumbing and utilities. With 2000+ tonnes ready stock and competitive pricing for bulk orders, we serve Madurai's auto components, granite, textile, and food processing sectors reliably." },
  { q: "How quickly can steel pipes be delivered to Madurai from Vadodara?", a: "Delivery to Madurai takes 2-3 days from our Vadodara warehouse (approximately 1,700 km via NH44/NH48 route through Bangalore). For urgent requirements, we offer priority dispatch with materials leaving within 24 hours of order confirmation. Our regular supply routes to Tamil Nadu ensure reliable transit times. We also maintain good transport connections for heavy structural materials and bulk pipe consignments to the Madurai industrial belt." },
  { q: "Do you supply SS 304/316L pipes for food processing in Madurai?", a: "Yes, we supply complete range of food-grade stainless steel pipes and fittings for Madurai's food processing industry. SS 304 and 316L seamless and welded pipes from 1/2 inch to 12 inch, electropolished finish available for dairy and beverage applications. All materials supplied with mill test certificates confirming food-grade chemical composition. We also provide SS fittings (tri-clamp, buttweld) and valves for hygienic process piping systems used in spice processing and packaged food manufacturing." },
  { q: "What structural steel do you supply for Madurai construction projects?", a: "For Madurai's construction and infrastructure sector, we supply IS 2062 E250/E350 structural steel including MS pipes (round, square, rectangular hollow sections), IS 1161 scaffolding pipes, HR plates for fabrication, and GI pipes for plumbing. Sizes range from 15mm to 300mm NB in structural tubes and 1mm to 100mm in plates. We support factory shed construction, commercial buildings, educational institutions, and government infrastructure projects across the Madurai region at competitive wholesale pricing." },
  { q: "Can you supply materials for textile mills in South Tamil Nadu?", a: "Absolutely. We supply piping materials for textile and spinning mills across South Tamil Nadu including Madurai, Dindigul, Sivakasi, and Virudhunagar. This includes SS pipes for steam distribution systems, carbon steel for boiler piping (IBR certified), GI pipes for water and utility lines, and structural steel for mill construction and expansion. We also supply flanges and fittings in matching grades. Bulk orders for new mill setup get special pricing with phased delivery scheduling." },
];


const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-pipe-supplier-madurai#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries — Pipe Supplier Madurai","description":"Steel and SS pipe supplier for Madurai industries — auto components, granite, textile, food processing. 2-3 day delivery from Vadodara.","telephone":"+919998280619","url":"https://www.creativemetalind.com/steel-pipe-supplier-madurai","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"Place","name":"Madurai","containedInPlace":{"@type":"State","name":"Tamil Nadu"}},"priceRange":"$$"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Pipe Supplier Madurai","item":"https://www.creativemetalind.com/steel-pipe-supplier-madurai"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelPipeSupplierMadurai() {
  return (
    <>
      <Title>Pipe Supplier Madurai | SS & CS Pipes | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Pipe supplier Madurai — SS 304/316L, carbon steel, structural pipes for textile, auto, food industries. 2-3 day delivery. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-pipe-supplier-madurai" />
      <Meta property="og:title" content="Pipe Supplier Madurai | Industrial SS & CS Pipes | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Pipe supplier Madurai — SS, CS, structural pipes for textile, auto, granite and food processing industries. CMI Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-pipe-supplier-madurai" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Pipe Supplier Madurai | SS & CS Pipes | CMI" />
      <Meta name="twitter:description" content="Pipe supplier Madurai — SS, CS, structural pipes for Tamil Nadu industries. 2-3 day delivery." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />


      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Pipe Supplier Madurai" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Pipe Supplier Madurai</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Pipe Supplier in Madurai — SS, CS &amp; Structural Steel for Industrial Tamil Nadu
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is your reliable <strong>pipe supplier for Madurai</strong> and South Tamil Nadu's industrial belt. Madurai — one of India's oldest industrial cities — has a thriving ecosystem of <strong>rubber and auto components manufacturers</strong>, granite processing units, textile spinning mills, and food processing plants. We supply the complete range of <strong>stainless steel, carbon steel, structural pipes, and fittings</strong> from our 2000+ tonne Vadodara warehouse with <strong>2-3 day delivery</strong>. Whether you need SS 304 food-grade pipes for your spice processing plant, structural hollow sections for factory construction, or GI pipes for textile mill utilities, CMI delivers quality materials at competitive wholesale pricing with full documentation and mill test certificates.
          </p>
        </div>


        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range — Pipes, Fittings &amp; Steel for Madurai</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Madurai Industries Choose Creative Metal Industries</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>Complete industrial range:</strong> SS, CS, MS structural, GI — one supplier for all pipe and steel requirements across Madurai's diverse industries</li>
            <li><strong>Food-grade SS specialist:</strong> SS 304/316L certified pipes and fittings for food processing, dairy, and beverage — electropolished finish available</li>
            <li><strong>Competitive bulk pricing:</strong> Factory-direct rates for textile mills, auto component manufacturers, and construction projects — volume discounts on regular orders</li>
            <li><strong>2-3 day reliable delivery:</strong> 1,700 km transit with dedicated transport — regular supply routes to Tamil Nadu ensure consistency</li>
            <li><strong>Structural steel variety:</strong> Round, square, rectangular hollow sections for factory sheds, commercial buildings, and granite processing infrastructure</li>
            <li><strong>Textile mill piping:</strong> Steam pipes, boiler tubes (IBR), GI utilities, structural — complete material solution for spinning and weaving mill projects</li>
            <li><strong>Full documentation:</strong> Mill test certificates, IS/ASTM compliance, GST invoicing — professional procurement for organized sector industries</li>
            <li><strong>2000+ tonne ready stock:</strong> No waiting for manufacturing — immediate dispatch for most sizes and grades required in Madurai</li>
          </ul>
        </div>


        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Madurai &amp; South Tamil Nadu</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas in Madurai &amp; Surrounding Region</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["SIDCO Kappalur","Madurai Industrial Estate","Thirumangalam","Dindigul Industrial","Sivakasi Fireworks Belt","Virudhunagar","Theni District","Periyakulam","Usilampatti","Melur Industrial","Ramanathapuram","Paramakudi"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>


        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Comprehensive Steel Solutions for Madurai's Growing Economy</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Madurai's industrial landscape is remarkably diverse — from precision rubber components for the automotive sector to massive granite processing units, from traditional textile mills modernizing with new technology to modern food processing plants meeting global standards. Creative Metal Industries caters to this diversity with a <strong>comprehensive product portfolio</strong> that includes SS 304/316L pipes for food-grade and corrosion-resistant applications, <strong>carbon steel IS 1239/A106</strong> for general process piping, <strong>structural hollow sections</strong> for factory buildings and warehouses, <strong>GI pipes</strong> for water distribution and utilities, and complete <strong>buttweld and forged fittings</strong> in all grades. For the granite industry's heavy fabrication needs, we supply thick-wall MS pipes and HR plates. For textile mills requiring steam systems, we provide IBR-grade carbon steel with proper certification. One supplier, one invoice, complete piping solution for Madurai — that's Creative Metal Industries.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Pipe Supplier Madurai</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>


        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Steel Pipes in Madurai? Call Now!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>SS, CS, Structural, GI Pipes & Fittings — Ready stock. 2-3 day delivery to Madurai.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4DE}"} +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4AC}"} WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote {"\u2192"}</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/steel-pipe-supplier-coimbatore",label:"Steel Pipe Supplier Coimbatore"},
            {href:"/steel-pipe-supplier-trichy",label:"Pipe Supplier Trichy"},
            {href:"/steel-pipe-supplier-chennai",label:"Pipe Supplier Chennai"},
            {href:"/ss-304-316l-pipe-supplier-india",label:"SS 304/316L Pipe Supplier"},
            {href:"/steel-supplier-salem",label:"Steel Supplier Salem"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <LocationContent slug="madurai" />
      
        <RelatedPages currentPath="/steel-pipe-supplier-madurai" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Pipe Supplier Madurai | SS & CS Pipes | Structural Steel | Tamil Nadu | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
