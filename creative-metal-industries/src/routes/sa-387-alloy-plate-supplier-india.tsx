/**
 * /sa-387-alloy-plate-supplier-india
 * Target: "SA387 alloy plate supplier India", "ASTM A387 Gr 11 22 91 plate",
 * "Cr-Mo pressure vessel plate India", "SA387 plate stockist"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade:"SA387 Gr.11 Cl.1", composition:"1.25Cr-0.5Mo", sizes:"6mm to 100mm", schedule:"N+T / As Rolled", apps:"Pressure vessels, reactors", ht:"Normalised + Tempered", stock:"Ready Stock" },
  { grade:"SA387 Gr.11 Cl.2", composition:"1.25Cr-0.5Mo", sizes:"6mm to 150mm", schedule:"N+T", apps:"Boiler drums, headers", ht:"Normalised + Tempered", stock:"Ready Stock" },
  { grade:"SA387 Gr.22 Cl.1", composition:"2.25Cr-1Mo", sizes:"6mm to 100mm", schedule:"N+T / As Rolled", apps:"Reactors, separators", ht:"Normalised + Tempered", stock:"Ready Stock" },
  { grade:"SA387 Gr.22 Cl.2", composition:"2.25Cr-1Mo", sizes:"6mm to 150mm", schedule:"N+T", apps:"HP vessels, hydroprocessing", ht:"Normalised + Tempered", stock:"Ready Stock" },
  { grade:"SA387 Gr.91 Cl.2", composition:"9Cr-1Mo-V-Nb", sizes:"6mm to 100mm", schedule:"N+T", apps:"USC headers, high-temp vessels", ht:"N (1040-1080°C) + T (730-780°C)", stock:"Available" },
  { grade:"SA387 Gr.5 Cl.2", composition:"5Cr-0.5Mo", sizes:"6mm to 80mm", schedule:"N+T", apps:"Refinery columns, reactors", ht:"Normalised + Tempered", stock:"Available" },
];

const FAQS = [
  { q:"What is ASTM A387 / SA387 alloy steel plate used for?", a:"ASTM A387 (ASME SA387) is a Cr-Mo alloy steel plate specification designed for pressure vessel and boiler construction operating at elevated temperatures. The plates are used for fabricating reactor shells in hydroprocessing and hydrotreating units, high-pressure separator vessels, boiler drums and headers in thermal power plants, heat exchangers and column shells in refineries, and hydrogen service equipment. The chromium content (1.25% to 9%) provides oxidation resistance while molybdenum enhances creep strength at elevated temperatures up to 600°C." },
  { q:"What is the difference between Class 1 and Class 2 in SA387?", a:"SA387 Class 1 and Class 2 differ in mechanical properties and heat treatment requirements. Class 1 has lower tensile strength (450-585 MPa for Gr.11) and can be supplied in as-rolled or normalised condition — suitable for less critical applications at moderate temperatures. Class 2 has higher tensile strength (515-690 MPa for Gr.11) and must be normalised and tempered — required for critical pressure vessels, boiler drums, and high-temperature service. Class 2 plates have mandatory impact testing and are specified for all IBR and critical ASME code construction." },
  { q:"What grades of SA387 plate does Creative Metal Industries stock?", a:"We maintain comprehensive stock of ASTM A387 / SA387 Cr-Mo alloy steel plates in Grade 11 (1.25Cr-0.5Mo), Grade 22 (2.25Cr-1Mo), Grade 5 (5Cr-0.5Mo) and Grade 91 (9Cr-1Mo-V-Nb) in both Class 1 and Class 2. Thickness range is 6mm to 150mm. Standard plate sizes are 2000mm x 6000mm, 2500mm x 10000mm and 3000mm x 12000mm. All Class 2 plates are supplied normalised and tempered with full MTC per EN 10204 3.1/3.2. IBR Form III-C available for all grades used in boiler construction." },
  { q:"Do you supply IBR-certified SA387 plates?", a:"Yes, Creative Metal Industries supplies SA387 plates with IBR Form III-C certification for boiler and pressure vessel applications. Our IBR-certified stock includes Grade 11 Class 2 and Grade 22 Class 2 plates from approved mills including Jindal Steel (India), POSCO (Korea), Salzgitter (Germany) and Dillinger (Germany). IBR documentation includes complete chemical analysis (ladle + product), mechanical properties (tensile, yield, elongation, impact), heat treatment records, and ultrasonic examination results per SA435. All plates individually marked with IBR stamp and heat number." },
  { q:"What testing is performed on SA387 plates?", a:"SA387 plates undergo comprehensive testing including: chemical analysis (spectroscopy) for Cr, Mo, C, Mn, Si, P, S content verification; tensile testing for yield strength, ultimate tensile strength and elongation; Charpy impact testing at specified temperature (typically -20°C or 0°C for Class 2); hardness testing (Brinell) — maximum 225 HBW for Gr.11/22; ultrasonic examination per ASME SA435 for internal soundness; and hydrogen-induced cracking (HIC) testing per NACE TM0284 when specified for sour service applications." },
  { q:"What is the lead time for SA387 plates from CMI?", a:"For stock sizes of SA387 Gr.11 and Gr.22 Class 2 plates (6mm to 100mm thickness), we offer immediate dispatch from our Vadodara warehouse. Non-standard sizes or Grade 91 plates typically require 4-6 weeks from our mill partners. For large project quantities (50+ tonnes), direct mill rolling from Jindal, POSCO or European mills takes 8-12 weeks. We can provide cutting and profiling services (flame cut, plasma cut, waterjet) for custom plate blanks with 3-5 day additional lead time." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"ASTM A387 / SA387 Alloy Steel Plate","description":"ASTM A387 (SA387) Cr-Mo alloy steel pressure vessel plates — Gr.11, Gr.22, Gr.91, Class 1 & 2. Thickness 6-150mm. Normalised + Tempered. IBR Form III-C certified.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"sku":"CMI-SA387-PLATE","material":"Cr-Mo Alloy Steel Plate","offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"120","highPrice":"850","offerCount":"500+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"36","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"},"url":"https://www.creativemetalind.com","openingHours":"Mo-Sa 09:00-18:00"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Alloy Steel Plates","item":"https://www.creativemetalind.com/carbon-steel-sa516-plate-stockist-india"},{"@type":"ListItem","position":3,"name":"SA387 Alloy Plate Supplier India","item":"https://www.creativemetalind.com/sa-387-alloy-plate-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function Sa387AlloyPlateSupplierIndia() {
  return (
    <>
      <Title>SA387 Alloy Plate Supplier India | IBR | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="SA387 alloy plate supplier India — ASTM A387 Gr.11, Gr.22, Gr.91 Cr-Mo pressure vessel plates. Class 1 & 2, 6-150mm thick, N+T. IBR Form III-C certified. Creative Metal Industries Vadodara." />
      <Link rel="canonical" href="https://www.creativemetalind.com/sa-387-alloy-plate-supplier-india" />
      <Meta property="og:title" content="SA387 Alloy Plate Supplier India | ASTM A387 Gr 11, 22, 91 | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="ASTM A387 / SA387 Cr-Mo alloy plates — Gr.11, Gr.22, Gr.91. Pressure vessels, boiler drums. IBR certified. Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/sa-387-alloy-plate-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SA387 Alloy Plate Supplier India | ASTM A387 Gr 11 22 91 | CMI" />
      <Meta name="twitter:description" content="ASTM A387 Cr-Mo alloy plates — Gr.11, 22, 91. Pressure vessels, boiler drums. IBR. Vadodara." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — SA387 Alloy Plate Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>SA387 Alloy Plate Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"0 0 1rem","line-height":"1.2"}}>
            SA387 Alloy Steel Plate Supplier India — ASTM A387 Gr 11/22/91
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is India's trusted <strong>SA387 alloy steel plate supplier</strong> stocking ASTM A387 (ASME SA387) Cr-Mo pressure vessel plates in Grade 11, Grade 22, Grade 5 and Grade 91. These chrome-moly plates are essential for fabricating reactors, pressure vessels, boiler drums and high-temperature equipment in power plants, refineries and petrochemical plants. All plates supplied in <strong>Normalised + Tempered</strong> condition with <strong>IBR Form III-C</strong> certification. Thickness range 6mm to 150mm, ready stock at Vadodara.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>SA387 Alloy Plate Grades — Stock List India</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"800px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Grade</th><th style={{padding:"0.7rem 0.8rem"}}>Composition</th><th style={{padding:"0.7rem 0.8rem"}}>Thickness</th><th style={{padding:"0.7rem 0.8rem"}}>Condition</th><th style={{padding:"0.7rem 0.8rem"}}>Applications</th><th style={{padding:"0.7rem 0.8rem"}}>Heat Treatment</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
            <tbody>
              {GRADES.map((g,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 0.8rem","font-weight":"700"}}>{g.grade}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.composition}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.sizes}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.schedule}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.apps}</td><td style={{padding:"0.6rem 0.8rem","font-size":"0.8rem"}}>{g.ht}</td><td style={{padding:"0.6rem 0.8rem","text-align":"center",color:g.stock==="Ready Stock"?"#16a34a":"#d97706","font-weight":"700"}}>{g.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Specifications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>SA387 Plate Specifications &amp; Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Standard",value:"ASTM A387 / ASME SA387 (Cr-Mo Plates)"},
            {label:"Grades",value:"Gr.5 (5Cr), Gr.11 (1.25Cr), Gr.22 (2.25Cr), Gr.91 (9Cr)"},
            {label:"Classes",value:"Class 1 (lower strength) & Class 2 (higher strength, N+T)"},
            {label:"Thickness Range",value:"6mm to 150mm"},
            {label:"Plate Sizes",value:"2000x6000, 2500x10000, 3000x12000 mm"},
            {label:"Heat Treatment",value:"Normalised + Tempered (mandatory for Class 2)"},
            {label:"Testing",value:"Tensile, Impact (Charpy), Hardness, UT (SA435), HIC (optional)"},
            {label:"Certification",value:"MTC EN 10204 3.1/3.2, IBR Form III-C"},
            {label:"Cutting Services",value:"Flame cut, Plasma, Waterjet — custom blanks available"},
            {label:"Mills",value:"Jindal, POSCO, Salzgitter, Dillinger, Voestalpine"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of ASTM A387 / SA387 Plates</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {title:"Hydroprocessing Reactors",desc:"SA387 Gr.22 Cl.2 plates for reactor shells in hydrotreaters, hydrocrackers and hydrogen units operating at high temp/pressure"},
            {title:"Boiler Drums",desc:"SA387 Gr.11 Cl.2 for HP and LP boiler drum shells in thermal power plants — IBR certified"},
            {title:"Pressure Vessel Shells",desc:"Gr.11 and Gr.22 plates for high-temperature separator vessels, columns and heat exchanger shells"},
            {title:"Refinery Columns",desc:"SA387 Gr.5 and Gr.11 for crude distillation column shells and vacuum tower construction"},
            {title:"Power Plant Headers",desc:"SA387 Gr.22 and Gr.91 thick plates for fabricating welded headers and manifolds in boiler systems"},
            {title:"Petrochemical Equipment",desc:"Cr-Mo plates for ammonia converters, methanol reactors and synthesis gas equipment operating above 400°C"},
          ].map(app => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0 0 0.3rem"}}>{app.title}</p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{app.desc}</p>
            </div>
          ))}
        </div>

        {/* Why CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy SA387 Alloy Plate from CMI?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>Wide grade coverage:</strong> Gr.5, Gr.11, Gr.22 and Gr.91 in Class 1 and Class 2 — single source for all Cr-Mo plate requirements</li>
          <li><strong>Heavy plate stock:</strong> Thickness up to 150mm for reactor shells and boiler drums requiring thick-section Cr-Mo material</li>
          <li><strong>IBR Form III-C:</strong> All Class 2 plates available with IBR certification for boiler and pressure vessel construction</li>
          <li><strong>Premium mills:</strong> Jindal (India), POSCO (Korea), Salzgitter and Dillinger (Germany) — full traceability guaranteed</li>
          <li><strong>Cutting & profiling:</strong> In-house flame cutting, plasma cutting and waterjet services for custom plate blanks</li>
          <li><strong>UT tested:</strong> All plates ultrasonically examined per ASME SA435 — guaranteed internal soundness</li>
          <li><strong>HIC/SSCC tested:</strong> Plates available with NACE TM0284 (HIC) and TM0177 (SSCC) testing for sour service</li>
          <li><strong>Competitive pricing:</strong> Direct mill procurement with bulk buying advantage. Quotation within 4 hours</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — SA387 Alloy Steel Plate</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need SA387 Cr-Mo Alloy Plates? Get Quote Today.</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>ASTM A387 Gr.11, 22, 91 — Class 1 & 2. 6-150mm thick. IBR Form III-C. N+T condition. Ready stock India.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote →</a>
          </div>
        </div>

        {/* Internal Links */}
        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/alloy-steel-pipe-supplier-india",label:"Alloy Steel Pipe Supplier India"},
            {href:"/p22-alloy-steel-pipe-supplier",label:"P22 Alloy Steel Pipe Supplier"},
            {href:"/p11-alloy-steel-pipe-supplier",label:"P11 Alloy Steel Pipe Supplier"},
            {href:"/carbon-steel-sa516-plate-stockist-india",label:"SA516 Carbon Steel Plate"},
            {href:"/a691-pipe-supplier-india",label:"A691 EFW Pipe Supplier"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/sa-387-alloy-plate-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — SA387 Alloy Plate Supplier India | ASTM A387 Gr 11, 22, 91 | IBR Certified | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · F-3, Loha Bhavan, Lakkadpitha Rd, Vadodara 390001 · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
