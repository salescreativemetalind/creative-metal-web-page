/**
 * /ss-rectangular-pipe-supplier-india
 * Target: "SS rectangular pipe supplier India", "stainless steel rectangular pipe manufacturer",
 * "ASTM A554 rectangular pipe", "SS 304 rectangular pipe India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade:"304 Rectangular", composition:"18Cr-8Ni", sizes:"20x10 to 200x100mm, WT 0.5-6mm", wall:"ASTM A554 / A312", apps:"Architecture, structural frames", ht:"Solution annealed + pickled", stock:"Ready Stock" },
  { grade:"316L Rectangular", composition:"16Cr-10Ni-2Mo-0.03C max", sizes:"20x10 to 150x75mm, WT 0.8-5mm", wall:"ASTM A554 / A312", apps:"Marine, coastal, chemical", ht:"Solution annealed + pickled", stock:"Ready Stock" },
  { grade:"202 Rectangular", composition:"17Cr-4Ni-6Mn", sizes:"20x10 to 100x50mm, WT 0.5-3mm", wall:"ASTM A554", apps:"Furniture, display, economy use", ht:"Annealed", stock:"Ready Stock" },
  { grade:"304 Mirror Rectangular", composition:"18Cr-8Ni, 600-grit polish", sizes:"20x10 to 100x50mm, WT 0.8-2.5mm", wall:"ASTM A554", apps:"Interior decor, signage", ht:"Annealed + mirror polished", stock:"Ready Stock" },
  { grade:"304 Hairline Rectangular", composition:"18Cr-8Ni, 180-grit brush", sizes:"20x10 to 150x75mm, WT 0.8-3mm", wall:"ASTM A554", apps:"Elevator panels, wall cladding", ht:"Annealed + hairline finish", stock:"Ready Stock" },
];

const FAQS = [
  { q:"What sizes of SS rectangular pipe do you stock?", a:"We stock stainless steel rectangular pipes from 20x10mm up to 200x100mm in wall thicknesses from 0.5mm to 6mm. Popular sizes include 40x20mm, 50x25mm, 60x30mm, 75x50mm, 100x50mm, and 150x75mm. Standard lengths are 6 metres. We maintain ready stock in SS 304, 316L and 202 grades at our Vadodara warehouse for immediate despatch across India. Custom sizes can be manufactured on order with 4-6 week lead time." },
  { q:"What is the difference between rectangular pipe and square pipe?", a:"The key difference is the aspect ratio. Square pipe has equal sides (e.g. 50x50mm) while rectangular pipe has unequal sides (e.g. 100x50mm). Rectangular sections offer higher moment of inertia in one axis, making them more efficient for beams and applications where load is primarily in one direction. Square pipe provides equal strength in both axes, ideal for columns and multi-directional loading. Both are manufactured to the same ASTM A554 or A312 standards." },
  { q:"Can SS rectangular pipe be used for structural applications?", a:"Yes. SS 304 and 316L rectangular pipes with adequate wall thickness (typically 2mm and above) are widely used in structural applications. They offer excellent strength-to-weight ratio combined with corrosion resistance, making them ideal for outdoor structures in aggressive environments. For primary structural members, load calculations should be verified by a qualified engineer. We provide section property data including moment of inertia, section modulus, and cross-sectional area for all stock sizes." },
  { q:"What surface finishes are available on rectangular pipe?", a:"We supply SS rectangular pipe in mill finish (2B), hairline or satin finish (No.4, 180-grit directional brush), mirror polish (No.8, 600-grit reflective), bead-blasted (matte texture), and PVD-coated finishes (gold, rose gold, champagne, black). All polished and coated pipes are protected with PE adhesive film. For architectural projects, we can match specific finish textures to your reference sample. Polishing is available on all four faces or selective faces as required." },
  { q:"How do you calculate the weight of SS rectangular pipe?", a:"The theoretical weight formula for SS rectangular pipe is: Weight (kg/m) = [(A + B) x 2 / 3.14159 - T] x T x 0.02491, where A and B are the outer dimensions in mm and T is the wall thickness in mm, and 0.02491 is the density factor for SS 304 (7.93 g/cc). For example, a 100x50mm x 2mm WT SS 304 rectangular pipe weighs approximately 4.55 kg per metre. We provide weight charts for all stocked sizes and can weigh individual pieces on request." },
  { q:"Do you supply SS rectangular pipe for export?", a:"Yes. We are an established exporter of SS rectangular pipe to the Middle East, Africa, Southeast Asia, Europe and South America. All export orders are supplied with complete documentation including mill test certificates, packing lists, commercial invoices, certificates of origin, and fumigation certificates. We pack export orders in wooden cases or bundles with waterproof protection suitable for sea freight. Our GSTIN and IEC codes are active for hassle-free export clearance." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Product","name":"SS Rectangular Pipe","description":"Stainless steel rectangular pipe RHS to ASTM A554/A312 in grades 304, 316L, 202. Sizes 20x10 to 200x100mm. Mirror, hairline, mill finish. For structural, architectural, frames.","brand":{"@type":"Organization","name":"Creative Metal Industries"},"offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"180","highPrice":"1200","offerCount":"350+","availability":"https://schema.org/InStock"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.7","reviewCount":"45","bestRating":"5"}},{"@type":"LocalBusiness","name":"Creative Metal Industries","telephone":"+91-99982-80619","address":{"@type":"PostalAddress","streetAddress":"F-3, Loha Bhavan, Lakkadpitha Rd","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390001","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"SS Rectangular Pipe Supplier India","item":"https://www.creativemetalind.com/ss-rectangular-pipe-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SsRectangularPipeSupplierIndia() {
  return (
    <>
      <Title>SS Rectangular Pipe Supplier India | ASTM A554 304 316L | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="India's leading SS rectangular pipe supplier. 304, 316L, 202 to ASTM A554/A312. Sizes 20x10 to 200x100mm. Mirror, hairline, mill finish. Structural, architectural, furniture. Ready stock Vadodara. Creative Metal Industries." />
      <Link rel="canonical" href="https://www.creativemetalind.com/ss-rectangular-pipe-supplier-india" />
      <Meta property="og:title" content="SS Rectangular Pipe Supplier India | ASTM A554 | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="SS rectangular pipe manufacturer India — 304, 316L, 202. ASTM A554. 20x10-200x100mm. Mirror, hairline. Structural, architectural. Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/ss-rectangular-pipe-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS Rectangular Pipe Supplier India | ASTM A554 304 316L | CMI" />
      <Meta name="twitter:description" content="SS rectangular pipe supplier India — 304, 316L, 202. 20x10-200x100mm. Mirror, hairline. Vadodara." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — SS Rectangular Pipe Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>›</span>
        <span>SS Rectangular Pipe Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"0 0 1rem","line-height":"1.2"}}>
            SS Rectangular Pipe Supplier in India — All Sizes, All Finishes
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is India's trusted <strong>SS rectangular pipe supplier</strong> stocking stainless steel rectangular hollow sections in grades 304, 316L and 202 to <strong>ASTM A554 and A312</strong>. Sizes from 20x10mm to 200x100mm with wall thickness 0.5-6mm. Available in mill finish, hairline (satin), mirror polish, and decorative PVD coatings. Perfect for structural frames, architectural facades, furniture, and industrial applications. Ready stock from Vadodara with pan-India delivery.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>SS Rectangular Pipe Grades — Ready Stock India</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"750px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Grade</th><th style={{padding:"0.7rem 0.8rem"}}>Composition</th><th style={{padding:"0.7rem 0.8rem"}}>Sizes</th><th style={{padding:"0.7rem 0.8rem"}}>Standard</th><th style={{padding:"0.7rem 0.8rem"}}>Applications</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
            <tbody>
              {GRADES.map((g,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 0.8rem","font-weight":"700"}}>{g.grade}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.composition}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.sizes}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.wall}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.apps}</td><td style={{padding:"0.6rem 0.8rem","text-align":"center",color:g.stock==="Ready Stock"?"#16a34a":"#d97706","font-weight":"700"}}>{g.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Specifications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Specifications &amp; Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Standards",value:"ASTM A554, A312, EN 10296-2"},
            {label:"Size Range",value:"20x10mm to 200x100mm"},
            {label:"Wall Thickness",value:"0.5mm to 6.0mm"},
            {label:"Length",value:"3m and 6m standard, custom available"},
            {label:"Surface Finish",value:"Mill (2B), Hairline (No.4), Mirror (No.8), PVD"},
            {label:"Corner Radius",value:"Sharp corner and round corner options"},
            {label:"Testing",value:"Flattening, flaring, visual, dimensional"},
            {label:"Certification",value:"MTC EN 10204 3.1, test certificates"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Why Choose */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Buy SS Rectangular Pipe from CMI?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>Extensive stock:</strong> 20x10 to 200x100mm in 304, 316L, 202 — over 350 size-grade combinations ready</li>
          <li><strong>All finishes:</strong> Mill, hairline, mirror, bead-blasted, PVD gold/rose gold/black available</li>
          <li><strong>Structural and decorative:</strong> Both A554 (ornamental) and A312 (pressure-rated) rectangular pipe</li>
          <li><strong>Protected supply:</strong> PE film on all polished and coated pipes to prevent transit damage</li>
          <li><strong>Export ready:</strong> Wooden case packing, fumigation, complete export documentation</li>
          <li><strong>Custom fabrication:</strong> Cutting, bending, welding, notching, polishing, assembly services</li>
          <li><strong>Section property data:</strong> Moment of inertia, section modulus provided for structural calculations</li>
        </ul>

        {/* Industries */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of SS Rectangular Pipe</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(220px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[{icon:"🏢",name:"Structural Frameworks"},{icon:"🪜",name:"Handrails and Balustrades"},{icon:"🪑",name:"Furniture and Shelving"},{icon:"🏗️",name:"Canopy and Pergola Frames"},{icon:"🚪",name:"Door and Window Frames"},{icon:"🏬",name:"Shopfront and Signage"},{icon:"🏭",name:"Machine Guards"},{icon:"🌐",name:"Export Projects"}].map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem","text-align":"center"}}>
              <span style={{"font-size":"1.3rem"}}>{ind.icon}</span>
              <p style={{"font-size":"0.85rem","font-weight":"600",color:"#111827",margin:"0.3rem 0 0"}}>{ind.name}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — SS Rectangular Pipe India</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need SS Rectangular Pipe? Get a Quote in 2 Hours.</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>304, 316L, 202. ASTM A554. 20x10-200x100mm. Mirror, hairline, mill. Ready stock India.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>+91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote</a>
          </div>
        </div>

        {/* Internal Links */}
        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/ss-square-pipe-supplier-india",label:"SS Square Pipe India"},
            {href:"/ss-polished-pipe-supplier-india",label:"SS Polished Pipe India"},
            {href:"/ss-pipe-supplier-vadodara",label:"SS Pipe Supplier Vadodara"},
            {href:"/ss-304-316l-pipe-supplier-india",label:"SS 304 316L Pipe India"},
            {href:"/stainless-steel-supplier-vadodara",label:"Full SS Range Vadodara"},
            {href:"/ss-flanges-supplier-vadodara",label:"SS Flanges Vadodara"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/ss-rectangular-pipe-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — SS Rectangular Pipe Supplier India | ASTM A554 | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
