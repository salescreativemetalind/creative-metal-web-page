/**
 * /astm-a36-steel-plate-supplier-india
 * Target: "ASTM A36 steel plate supplier India", "a36 steel", "a36 steel plate",
 * "a36 plate", "astm a36 steel plate supplier"
 * NOTE: A36 is a STRUCTURAL carbon steel grade — NOT a pressure-vessel grade.
 *       Pressure-vessel plate (SA 516) is owned by /carbon-steel-sa516-plate-stockist-india.
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade:"ASTM A36 Plate", composition:"C ≤ 0.26%, Mn 0.60–0.90% (typ.)", sizes:"5mm to 150mm thk", form:"Hot-rolled plate", apps:"Structural fabrication, base plates, gussets", ht:"As-rolled", stock:"Ready Stock" },
  { grade:"ASTM A36 Flat / Sections", composition:"Structural carbon steel", sizes:"Flats, angles, channels, beams", form:"Hot-rolled sections", apps:"Frames, brackets, supports", ht:"As-rolled", stock:"Available" },
  { grade:"IS 2062 E250 (A/BR)", composition:"Equivalent structural grade (India)", sizes:"5mm to 100mm thk", form:"Hot-rolled plate", apps:"General structural — Indian projects", ht:"As-rolled", stock:"Ready Stock" },
  { grade:"S275JR (EN 10025)", composition:"Comparable EU structural grade", sizes:"6mm to 100mm thk", form:"Hot-rolled plate", apps:"Structural / export projects", ht:"As-rolled", stock:"Available" },
];

const FAQS = [
  { q:"What is ASTM A36 steel plate?", a:"ASTM A36 is a general-purpose structural carbon steel specified for buildings, bridges, and general fabrication. It has a minimum yield strength of around 250 MPa (36 ksi) and a tensile range of roughly 400–550 MPa, with typical carbon content near 0.26%. A36 is prized for its excellent weldability, machinability, and low cost, which makes it the default choice for structural plate, base plates, and general engineering components. It is a structural grade — not a pressure-vessel grade." },
  { q:"What is the difference between ASTM A36 and SA 516 plate?", a:"A36 is a structural carbon steel intended for buildings, frames, and general fabrication, defined mainly by minimum yield (~250 MPa). SA 516 (ASTM A516) is a pressure-vessel quality plate governed by ASME Section II, with controlled notch toughness and tighter chemistry for boilers, pressure vessels, and storage tanks. If your application is a coded pressure vessel or boiler, you need SA 516 Gr.60/70 — see our SA 516 plate stockist page. If it is structural or general fabrication, A36 is the correct and more economical choice." },
  { q:"What thickness and forms of A36 plate are available?", a:"Creative Metal Industries supplies ASTM A36 in hot-rolled plate form from about 5mm to 150mm thickness in standard mill widths and lengths, with cut-to-size available on request. A36-equivalent structural sections (flats, angles, channels, beams) are also available. Non-standard sizes are supplied against project requirements. Material is supplied with Mill Test Certificate (EN 10204 3.1) confirming chemistry and mechanical properties." },
  { q:"Is ASTM A36 steel weldable?", a:"Yes. A36 has excellent weldability using common processes (SMAW, GMAW, SAW, FCAW) with standard mild-steel filler such as E70xx electrodes. Its low carbon and modest alloy content mean no special preheat is normally required for thin-to-moderate sections, though heavier sections may benefit from preheat per the welding procedure. This weldability is one of the main reasons A36 is the workhorse grade for structural fabrication." },
  { q:"What are the typical applications of A36 steel plate?", a:"A36 plate and sections are used across structural and general fabrication: building and industrial structures, column base plates, gusset and stiffener plates, machine bases and frames, brackets, walkways and platforms, tanks and hoppers (non-pressure), and fabricated equipment. It is specified where good strength, weldability, and economy are needed and where pressure-vessel or low-temperature toughness certification is not required." },
  { q:"Which Indian and international grades are equivalent to A36?", a:"Common structural equivalents include IS 2062 E250 (A / BR) in India, S275JR per EN 10025 in Europe, and SS400 / JIS G3101 in Japan. These are broadly comparable general structural carbon steels, though exact chemistry, toughness, and testing requirements differ by specification. We can supply against A36 or the equivalent grade your drawing or project standard calls for, with the corresponding MTC." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/astm-a36-steel-plate-supplier-india#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries","telephone":"+919998280619","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Carbon Steel Plate","item":"https://www.creativemetalind.com/carbon-steel-sa516-plate-stockist-india"},{"@type":"ListItem","position":3,"name":"ASTM A36 Steel Plate Supplier India","item":"https://www.creativemetalind.com/astm-a36-steel-plate-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function AstmA36SteelPlateSupplierIndia() {
  return (
    <>
      <Title>ASTM A36 Steel Plate Supplier India | A36 Plate | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="ASTM A36 steel plate supplier India — structural carbon steel plate (~250 MPa yield). A36 plate, flats & sections for fabrication. MTC. Ready stock Vadodara." />
      <Link rel="canonical" href="https://www.creativemetalind.com/astm-a36-steel-plate-supplier-india" />
      <Meta property="og:title" content="ASTM A36 Steel Plate Supplier India | A36 Plate | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="A36 steel plate supplier India — structural carbon steel plate for fabrication, base plates & sections. MTC EN 10204 3.1. Ready stock Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/astm-a36-steel-plate-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="ASTM A36 Steel Plate Supplier India | A36 Plate | CMI" />
      <Meta name="twitter:description" content="A36 steel plate supplier India — structural carbon steel plate & sections. MTC. Ready stock Vadodara." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — ASTM A36 Steel Plate Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <a href="/carbon-steel-sa516-plate-stockist-india" style={{color:"#E8821A","text-decoration":"none"}}>Carbon Steel Plate</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>ASTM A36 Steel Plate Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"0 0 1rem","line-height":"1.2"}}>
            ASTM A36 Steel Plate Supplier in India
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries is a trusted <strong>ASTM A36 steel plate supplier in India</strong>, stocking <strong>A36 structural carbon steel plate</strong> for fabrication, base plates, and general engineering. A36 is a general-purpose structural grade with a minimum yield of around <strong>250 MPa (36 ksi)</strong> and tensile of roughly 400–550 MPa, valued for its excellent weldability and economy. We supply <strong>A36 plate</strong>, flats, and structural sections with Mill Test Certificate (EN 10204 3.1) from our GIDC Makarpura, Vadodara facility. For pressure-vessel and boiler plate, see our <a href="/carbon-steel-sa516-plate-stockist-india" style={{color:"#E8821A","text-decoration":"underline"}}>SA 516 plate stockist</a> page — A36 is a structural grade, not a pressure-vessel grade.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>A36 &amp; Equivalent Structural Grades — Stock</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"800px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Grade</th><th style={{padding:"0.7rem 0.8rem"}}>Composition</th><th style={{padding:"0.7rem 0.8rem"}}>Sizes</th><th style={{padding:"0.7rem 0.8rem"}}>Form</th><th style={{padding:"0.7rem 0.8rem"}}>Applications</th><th style={{padding:"0.7rem 0.8rem"}}>Condition</th><th style={{padding:"0.7rem 0.8rem"}}>Stock</th></tr></thead>
            <tbody>
              {GRADES.map((g,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 0.8rem","font-weight":"700"}}>{g.grade}</td><td style={{padding:"0.6rem 0.8rem","font-size":"0.8rem"}}>{g.composition}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.sizes}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.form}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.apps}</td><td style={{padding:"0.6rem 0.8rem","font-size":"0.8rem"}}>{g.ht}</td><td style={{padding:"0.6rem 0.8rem","text-align":"center",color:g.stock==="Ready Stock"?"#16a34a":"#d97706","font-weight":"700"}}>{g.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* About A36 */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>What is ASTM A36 Steel?</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>
          ASTM A36 is the most widely specified structural carbon steel worldwide. It is defined primarily by mechanical properties — a minimum yield strength of about 250 MPa (36,000 psi) and tensile strength in the 400–550 MPa range — rather than a tightly fixed chemistry, with typical carbon around 0.26% and manganese used to develop strength. This combination gives A36 good strength for structural use while keeping it easy to weld, cut, drill, and form.
        </p>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"2rem"}}>
          Because A36 is a <strong>structural grade</strong>, it is intended for buildings, frames, base plates, and general fabrication — not for coded pressure vessels or boilers, which require pressure-vessel quality plate such as SA 516 with controlled notch toughness. When a drawing calls for A36 (or its equivalents like IS 2062 E250 or S275JR), it signals a general-fabrication requirement where weldability and economy matter most.
        </p>

        {/* Specifications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>A36 Specifications &amp; Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Standard",value:"ASTM A36 / A36M (structural carbon steel)"},
            {label:"Min Yield Strength",value:"~250 MPa (36 ksi)"},
            {label:"Tensile Strength",value:"~400–550 MPa (58–80 ksi)"},
            {label:"Typical Carbon",value:"C ≤ 0.26% (thickness dependent)"},
            {label:"Product Forms",value:"Hot-rolled plate, flats, angles, channels, beams"},
            {label:"Thickness Range",value:"~5mm to 150mm (cut-to-size on request)"},
            {label:"Weldability",value:"Excellent — E70xx / standard mild-steel fillers"},
            {label:"Certification",value:"MTC EN 10204 3.1 (chemical + mechanical)"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of A36 Steel Plate</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {title:"Structural Fabrication",desc:"Building and industrial structures, trusses, frames and welded assemblies where good strength and weldability are needed"},
            {title:"Base Plates & Gussets",desc:"Column base plates, gusset and stiffener plates, connection and bearing plates for structural steelwork"},
            {title:"Machine Bases & Frames",desc:"Fabricated equipment bases, skid frames, brackets and supports in general engineering"},
            {title:"Platforms & Walkways",desc:"Floor plates, walkways, ladders, handrails and access structures"},
            {title:"Non-Pressure Tanks & Hoppers",desc:"General storage hoppers, chutes and non-pressure fabricated vessels"},
            {title:"General Engineering",desc:"Cut, drilled and formed components across construction, material handling and infrastructure"},
          ].map(app => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0 0 0.3rem"}}>{app.title}</p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{app.desc}</p>
            </div>
          ))}
        </div>

        {/* Why CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Choose Creative Metal Industries for A36 Plate?</h2>
        <ul style={{"list-style":"none",padding:0,display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"2rem"}}>
          {[
            "A36 structural carbon steel plate, flats and sections — ready stock at Vadodara",
            "Cut-to-size, flame/plasma cutting and drilling available on request",
            "Complete MTC (EN 10204 3.1) with chemical and mechanical reports",
            "Equivalent structural grades supplied to drawing (IS 2062 E250, S275JR, SS400)",
            "Correct grade guidance — A36 for structural, SA 516 for pressure-vessel needs",
            "Pan-India delivery from GIDC Makarpura, Vadodara since 2012",
          ].map(point => (
            <li style={{display:"flex",gap:"0.7rem","align-items":"flex-start","font-size":"0.92rem",color:"#374151","line-height":"1.5"}}>
              <span style={{"flex-shrink":"0",color:"#E8821A","font-weight":"700"}}>✓</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Internal Links */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Related Products</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(220px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {[
            {href:"/carbon-steel-sa516-plate-stockist-india",label:"SA 516 Pressure Vessel Plate"},
            {href:"/ms-plate-supplier-india",label:"MS Plate Supplier India"},
            {href:"/carbon-steel-pipe-supplier-india",label:"Carbon Steel Pipe Supplier"},
            {href:"/ms-channel-ismc-supplier-india",label:"MS Channel ISMC India"},
            {href:"/ms-beam-ismb-supplier-india",label:"MS Beam ISMB India"},
          ].map(link => (
            <a href={link.href} style={{background:"#fff8f0",border:"1px solid #fde8cc","border-radius":"8px",padding:"0.85rem 1rem","font-size":"0.88rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>
              {link.label} →
            </a>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — A36 Steel Plate</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(faq => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}>
              <summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{faq.q}</summary>
              <p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{faq.a}</p>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center"}}>
          <h2 style={{"font-size":"1.5rem","font-weight":"800",color:"#fff","margin-bottom":"0.75rem"}}>Need A36 Steel Plate?</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem","font-size":"0.95rem"}}>
            Get price and availability — structural plate, flats and sections. Pan-India delivery.
          </p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.75rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619?text=Hi+I+need+ASTM+A36+steel+plate" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.75rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.75rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

        <RelatedPages currentPath="/astm-a36-steel-plate-supplier-india" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — ASTM A36 Steel Plate Supplier India</p>
        <p>GIDC Makarpura, Vadodara 390010 | <a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a></p>
      </footer>
    </>
  );
}
