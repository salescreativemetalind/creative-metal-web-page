/**
 * /steel-pipe-supplier-trichy
 * Target: "pipe supplier Trichy", "BHEL Trichy steel",
 * "boiler tube Trichy", "alloy P91 P22 Trichy"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";
import { LocationContent } from "../components/LocationContent";

const PRODUCTS = [
  { category: "Alloy Steel Boiler Tubes", grades: "ASTM A213 T11, T22, T91, SA 213 T9, T5", sizes: "1/2\" to 6\" OD", type: "Seamless (IBR Approved)", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P5, P9, P11, P22, P91", sizes: "1/2\" to 24\"", type: "Seamless (IBR)", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L X42–X65, IS 1239", sizes: "1/2\" to 48\"", type: "Seamless, ERW, LSAW", stock: "Ready Stock" },
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310S, 347H", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "SS Fittings & Flanges", grades: "SS 304/316L Elbows, Tees, Reducers, Flanges", sizes: "1/2\" to 48\"", type: "Buttweld, Forged, WN/SO/Blind", stock: "Ready Stock" },
  { category: "Steel Plates", grades: "SA 516 Gr.60/70, SA 387 Gr.11/22, IS 2062", sizes: "6mm to 150mm thick", type: "Hot Rolled", stock: "Available" },
  { category: "High Temp Alloys", grades: "Inconel 600/625, Incoloy 800H/HT, Hastelloy C276", sizes: "1/2\" to 8\"", type: "Seamless", stock: "Available" },
  { category: "Header Pipes", grades: "SA 106 Gr.C, SA 335 P22/P91, SA 672", sizes: "8\" to 36\" OD, Heavy Wall", type: "Seamless / Fabricated", stock: "Available" },
];

const INDUSTRIES = [
  { icon: "\u{1F525}", name: "BHEL Trichy (Boiler Plant)", desc: "India's largest boiler manufacturer — alloy steel boiler tubes T11/T22/T91, header pipes P22/P91, superheater/reheater materials with IBR Form III-C certification" },
  { icon: "\u26A1", name: "NLC India (Neyveli Lignite)", desc: "Lignite-based thermal power stations — carbon steel and alloy piping for boiler systems, IBR-certified tubes for power generation maintenance and expansion" },
  { icon: "\u{1F4A7}", name: "Heavy Water Plant Tuticorin", desc: "Department of Atomic Energy facility — specialized alloy and SS materials for heavy water production systems, stringent quality and documentation requirements" },
  { icon: "\u{1F3ED}", name: "Ordnance Factory Trichy", desc: "Defence manufacturing — precision tubes, alloy steel, carbon steel for ordnance production requirements with strict quality compliance and MTC documentation" },
  { icon: "\u2699\uFE0F", name: "HAPP (Heavy Alloy Penetrator)", desc: "Defence metallurgy production — high-alloy materials, specialty steel grades for defence manufacturing with certified traceability and quality assurance" },
  { icon: "\u{1F3D7}\uFE0F", name: "Cement & Sugar Plants (TN)", desc: "Dalmia, India Cements, Chettinad group — carbon steel structural pipes, wear-resistant plates, SS for sugar processing and cement plant maintenance" },
];

const FAQS = [
  { q: "Who is the best pipe supplier for BHEL Trichy boiler projects?", a: "Creative Metal Industries (CMI) is a leading supplier of alloy steel boiler tubes and pipes for BHEL Trichy. We supply ASTM A213 T11, T22, T91 boiler tubes for superheater, reheater, and economizer sections, along with A335 P22/P91 header pipes. All materials come with IBR Form III-C certification and third-party inspection. With 2000+ tonnes ready stock in Vadodara, we support BHEL's production schedules with reliable 2-3 day delivery to Tiruchirappalli." },
  { q: "How fast can boiler tubes be delivered to Trichy from Vadodara?", a: "Delivery to Tiruchirappalli takes 2-3 days from our Vadodara warehouse (approximately 1,600 km via NH48/NH44 route). For urgent BHEL production requirements or power plant shutdown emergencies, we offer priority dispatch with dedicated transport. Materials are dispatched within 24 hours of order confirmation. We maintain regular supply chains to Trichy and have extensive experience shipping IBR-certified boiler tubes to BHEL's facility." },
  { q: "Do you supply IBR-certified alloy steel pipes for power plants?", a: "Yes, IBR certification is our core strength. We supply complete IBR-certified alloy steel pipes including A335 P11, P22, P91 for high-temperature power plant piping, A213 T11/T22/T91 boiler tubes for superheaters and reheaters, and SA 106 Gr.C for headers. Every material comes with IBR Form III-C, stage-wise inspection certificates, and complete traceability from mill to site. We support NLC, TANGEDCO, and private power plants across Tamil Nadu." },
  { q: "What grades of P91 alloy steel do you stock for Trichy?", a: "We maintain ready stock of P91 (ASTM A335 Grade P91) in sizes from 1\" to 16\" NB, wall thickness from Sch 40 to Sch 160/XXS. Also stocked are SA 213 T91 boiler tubes in OD range 25.4mm to 76.2mm. All P91 materials are supplied with hardness testing (max 250 BHN), impact testing at 20°C, and complete PWHT recommendations. P91 is critical for BHEL's supercritical and ultra-supercritical boiler projects being manufactured at Trichy." },
  { q: "Can you supply materials for NLC Neyveli power plant maintenance?", a: "Absolutely. For NLC India's lignite-based thermal power stations at Neyveli (near Trichy), we supply alloy steel boiler tubes T11/T22 for economizer and superheater replacement, carbon steel pipes A106 Gr.B for BOP piping, SS 304/316L for condensate and cooling systems, and steel plates SA 516 Gr.70 for pressure vessels. All boiler-grade materials come with IBR certification. We also support NLC's expansion projects with bulk material supply at competitive pricing." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-pipe-supplier-trichy#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries — Pipe Supplier Trichy","description":"Leading boiler tube and alloy steel pipe supplier for BHEL Trichy, NLC Neyveli, and Tamil Nadu industries. 2-3 day delivery from Vadodara.","telephone":"+919998280619","url":"https://www.creativemetalind.com/steel-pipe-supplier-trichy","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"Place","name":"Tiruchirappalli (Trichy)","containedInPlace":{"@type":"State","name":"Tamil Nadu"}},"priceRange":"$$"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Pipe Supplier Trichy","item":"https://www.creativemetalind.com/steel-pipe-supplier-trichy"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelPipeSupplierTrichy() {
  return (
    <>
      <Title>Pipe Supplier Trichy | BHEL Boiler Tubes | CMI</Title>
      <Meta name="robots" content="noindex, follow" />
      <Meta name="description" content="Pipe supplier Trichy — alloy P91/P22 boiler tubes for BHEL, IBR pipes for NLC power plants. 2-3 day delivery. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-pipe-supplier-trichy" />
      <Meta property="og:title" content="Pipe Supplier Trichy | BHEL Boiler Tubes & Alloy Steel | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Pipe supplier Trichy — alloy steel boiler tubes for BHEL, IBR certified P91/P22, NLC power plant materials. CMI Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-pipe-supplier-trichy" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Pipe Supplier Trichy | BHEL Boiler Tubes | CMI" />
      <Meta name="twitter:description" content="Pipe supplier Trichy — alloy P91/P22 boiler tubes for BHEL, IBR pipes for power plants." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Pipe Supplier Trichy" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Pipe Supplier Trichy</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Pipe Supplier in Trichy — BHEL Boiler Tubes, Alloy P91/P22 &amp; IBR Materials
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is a trusted <strong>pipe supplier for Tiruchirappalli (Trichy)</strong>, specializing in alloy steel boiler tubes and IBR-certified piping materials for <strong>BHEL Trichy</strong> — India's largest manufacturer of power plant boilers. With a dedicated 2000+ tonne inventory at our Vadodara warehouse, we deliver alloy P91, P22, T11, T22, and T91 boiler tubes within <strong>2-3 days to Trichy</strong>. Our expertise extends to NLC India's lignite power stations at Neyveli, the Heavy Water Plant, Ordnance Factory, and Tamil Nadu's growing industrial base. BHEL Trichy's supercritical and ultra-supercritical boiler projects demand the highest quality alloy steel — CMI delivers precisely that, with complete IBR Form III-C certification, mill test certificates, and third-party inspection reports for every consignment.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range — Boiler Tubes, Pipes &amp; Steel for Trichy</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Trichy Industries Choose Creative Metal Industries</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>BHEL boiler tube specialist:</strong> Complete range of alloy T11/T22/T91 superheater, reheater, and economizer tubes — IBR Form III-C certified for every lot</li>
            <li><strong>P91/P22 header pipe experts:</strong> Heavy-wall alloy pipes for boiler headers, main steam lines, and hot reheat piping — BHEL's most critical requirement</li>
            <li><strong>IBR documentation complete:</strong> Form III-C, stage-wise inspection, chemical/mechanical test certs — ready for BHEL's QA acceptance at Trichy plant</li>
            <li><strong>2-3 day reliable delivery:</strong> 1,600 km distance covered efficiently with dedicated transport — supporting BHEL production timelines</li>
            <li><strong>Supercritical boiler materials:</strong> Advanced P91, P92, SS 347H, Alloy 617 for BHEL's latest 800 MW supercritical boiler manufacturing programs</li>
            <li><strong>NLC power plant support:</strong> Alloy and carbon steel IBR piping for Neyveli lignite power station maintenance and capacity expansion</li>
            <li><strong>Third-party inspection (TPI):</strong> Materials inspected by BHEL-approved agencies (BIS, LRIS, TUV) before dispatch — reducing rejection at site</li>
            <li><strong>2000+ tonne ready stock:</strong> No mill lead times of 3-4 months — ex-stock availability means BHEL production never stops waiting for materials</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Trichy &amp; Tamil Nadu Region</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas in Trichy &amp; Surrounding Region</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["BHEL Trichy Complex","NLC Neyveli","SIDCO Trichy","Ordnance Factory","Heavy Water Plant","Trichy SIDCO Industrial","Thuvakudi Industrial","Lalgudi SIPCOT","Manapparai Industrial","Pudukkottai Industries","Thanjavur Region","Karur Textile Hub"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Specialized Boiler Tube &amp; Alloy Steel Solutions for BHEL Trichy</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          BHEL Tiruchirappalli is the backbone of India's power sector, manufacturing boilers for subcritical, supercritical, and ultra-supercritical thermal power projects. Creative Metal Industries understands BHEL's exacting quality requirements and supplies <strong>SA 213 T91/T22/T11 boiler tubes</strong> for superheater and reheater banks, <strong>SA 335 P91/P22 pipes</strong> for headers and main steam lines, <strong>SA 106 Gr.C header pipes</strong> in heavy wall thicknesses, and <strong>SA 213 TP347H</strong> for advanced supercritical applications. Every material is supplied with IBR Form III-C, complete traceability from reputed mills (Tubacex, Vallourec, ISMT, MSL), hardness testing, impact testing, and positive material identification. For NLC Neyveli's ongoing boiler maintenance programs, we supply replacement tubes and pipes with matching specifications to OEM standards. CMI's dedicated inventory ensures BHEL's production lines are never idle waiting for critical alloy steel.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Pipe Supplier Trichy</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Boiler Tubes or Alloy Pipes in Trichy?</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>P91/P22 Boiler Tubes, IBR Pipes, Header Materials — Ready stock. 2-3 day delivery to BHEL Trichy.</p>
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
            {href:"/steel-pipe-supplier-chennai",label:"Steel Pipe Supplier Chennai"},
            {href:"/steel-pipe-supplier-coimbatore",label:"Steel Pipe Supplier Coimbatore"},
            {href:"/steel-supplier-salem",label:"Steel Supplier Salem"},
            {href:"/steel-pipe-supplier-madurai",label:"Pipe Supplier Madurai"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <LocationContent slug="trichy" />
      
        <RelatedPages currentPath="/steel-pipe-supplier-trichy" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Pipe Supplier Trichy | BHEL Boiler Tubes | Alloy P91/P22 | IBR Certified | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
