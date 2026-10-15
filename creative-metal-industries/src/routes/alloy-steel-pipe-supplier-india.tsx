/**
 * /alloy-steel-pipe-supplier-india
 * Target: "alloy steel pipe supplier India", "ASTM A335 P91 pipe supplier",
 * "alloy steel seamless pipe India", "P22 P11 pipe supplier"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADES = [
  { grade:"ASTM A335 P5", composition:"5Cr-0.5Mo", sizes:"1/2\" to 24\"", schedule:"SCH 40–XXS", apps:"Crude distillation, heaters", ht:"Normalised + Tempered", stock:"Confirm availability" },
  { grade:"ASTM A335 P9", composition:"9Cr-1Mo", sizes:"1/2\" to 16\"", schedule:"SCH 40–160", apps:"Heater tubes, superheaters", ht:"Normalised + Tempered", stock:"Confirm availability" },
  { grade:"ASTM A335 P11", composition:"1.25Cr-0.5Mo", sizes:"1/2\" to 24\"", schedule:"SCH 40–XXS", apps:"Boiler tubes, headers, piping", ht:"Normalised + Tempered", stock:"Confirm availability" },
  { grade:"ASTM A335 P12", composition:"1Cr-0.5Mo", sizes:"1/2\" to 16\"", schedule:"SCH 40–160", apps:"Superheater tubes, headers", ht:"Normalised + Tempered", stock:"Confirm availability" },
  { grade:"ASTM A335 P22", composition:"2.25Cr-1Mo", sizes:"1/2\" to 24\"", schedule:"SCH 40–XXS", apps:"Main steam, HRSG, headers", ht:"Normalised + Tempered", stock:"Confirm availability" },
  { grade:"ASTM A335 P91", composition:"9Cr-1Mo-V-Nb", sizes:"1/2\" to 24\"", schedule:"SCH 40–XXS", apps:"USC boilers, main steam, HRSG", ht:"Normalised (1040-1080°C) + Tempered (730-780°C)", stock:"Confirm availability" },
  { grade:"ASTM A335 P92", composition:"9Cr-1.8W-Mo-V-Nb", sizes:"1/2\" to 16\"", schedule:"SCH 40–160", apps:"Ultra-supercritical boilers", ht:"Normalised + Tempered", stock:"Confirm availability" },
];

const FAQS = [
  { q:"What is the difference between P91 and P22 alloy steel pipe?", a:"P91 (9Cr-1Mo-V-Nb) has higher creep strength than P22 (2.25Cr-1Mo), allowing thinner walls and lighter piping systems at the same temperature and pressure. P91 is used for main steam lines in supercritical and ultra-supercritical power plants (up to 600°C). P22 is used for lower-temperature headers and HRSG piping (up to 565°C). P91 requires strict heat treatment control — normalise at 1040-1080°C followed by temper at 730-780°C." },
  { q:"What is the difference between P91 and P92 material?", a:"Both are 9% chromium creep-strength-enhanced ferritic steels, and the difference is the alloying route used to reach that creep strength. P91 is 9Cr-1Mo-V-Nb. P92 keeps the same chromium base but adds roughly 1.8% tungsten and reduces molybdenum, which raises creep rupture strength further at the same temperature. In practice that means P92 allows thinner walls than P91 for an equivalent duty, which lowers weight and reduces thermal stress at welds — the reason it is specified for ultra-supercritical boiler and main steam service where P91 would need excessive wall thickness. Both require closely controlled normalising and tempering, and P92 is the less forgiving of the two on heat treatment and welding procedure. For either grade, confirm availability and any required IBR Form III-C or heat-treatment documentation against the specific order." },
  { q:"What is IBR Form III-C for alloy steel pipe?", a:"Form III-C is a material manufacturer's certificate used for applicable IBR documentation. Requirements depend on the project and product. Include the required grade and documentation in your enquiry, then confirm that the certificate is available and matches the specific material and heat/lot before purchase." },
  { q:"Can I specify a mill or manufacturer for an alloy steel pipe order?", a:"Include any approved-manufacturer requirement in your enquiry. Confirm the offered product's source and applicable material documentation for the specific order before purchase." },
  { q:"What sizes of alloy steel pipe can I enquire about?", a:"The listed enquiry range is 1/2 inch (15NB) to 24 inches (600NB), with schedules from SCH 40 through XXS. Specify the required dimensions and length, then confirm current availability and any cut-to-length requirements for your order." },
  { q:"Why does P91 pipe require special heat treatment?", a:"P91 (9Cr-1Mo-V-Nb) derives its superior creep strength from a precise tempered martensitic microstructure formed by normalising at 1040-1080°C (air cooled to below 100°C) followed by tempering at 730-780°C. Incorrect heat treatment — over-tempering, under-normalising, or improper cooling — produces ferrite/bainite instead of martensite, drastically reducing creep life. If heat-treatment records are required for P91, include that requirement in your enquiry and confirm the documents available for the specific material." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Alloy Steel Pipe Supplier India","item":"https://www.creativemetalind.com/alloy-steel-pipe-supplier-india"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function AlloySteelPipeSupplierIndia() {
  return (
    <>
      <Title>Alloy Steel Pipe Supplier India | P91 P22 P11 | IBR | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Alloy steel pipe supplier in India for ASTM A335 P91, P22 and P11. Specify size and schedule; confirm IBR Form III-C documents and order availability." />
      <Link rel="canonical" href="https://www.creativemetalind.com/alloy-steel-pipe-supplier-india" />
      <Meta property="og:title" content="Alloy Steel Pipe Supplier India | ASTM A335 P91, P22, P11 | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Enquire about ASTM A335 P91, P22 and P11 alloy steel pipes. Confirm order availability and any required IBR Form III-C documentation with Creative Metal Industries." />
      <Meta property="og:url" content="https://www.creativemetalind.com/alloy-steel-pipe-supplier-india" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Alloy Steel Pipe Supplier India | P91 P22 P11 | IBR | CMI" />
      <Meta name="twitter:description" content="Enquire about ASTM A335 P91, P22 and P11 alloy steel pipes. Confirm order availability and any required IBR Form III-C documentation." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Alloy Steel Pipe Supplier India" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Alloy Steel Pipe Supplier India</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"0 0 1rem","line-height":"1.2"}}>
            Alloy Steel Pipe Supplier in India — ASTM A335 P91, P22, P11
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            Creative Metal Industries supplies ASTM A335 seamless alloy steel pipes in grades including P11, P22 and P91 for high-temperature industrial service. Share your required grade, size, schedule and delivery location to request a quotation. Confirm current availability and any required IBR Form III-C documentation for the specific order before purchase.
          </p>
        </div>

        {/* Grade Table */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Alloy Steel Pipe Grades — ASTM A335</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"800px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 0.8rem","text-align":"left"}}>Grade</th><th style={{padding:"0.7rem 0.8rem"}}>Composition</th><th style={{padding:"0.7rem 0.8rem"}}>Sizes</th><th style={{padding:"0.7rem 0.8rem"}}>Schedules</th><th style={{padding:"0.7rem 0.8rem"}}>Applications</th><th style={{padding:"0.7rem 0.8rem"}}>Heat Treatment</th><th style={{padding:"0.7rem 0.8rem"}}>Availability</th></tr></thead>
            <tbody>
              {GRADES.map((g,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 0.8rem","font-weight":"700"}}>{g.grade}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.composition}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.sizes}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.schedule}</td><td style={{padding:"0.6rem 0.8rem"}}>{g.apps}</td><td style={{padding:"0.6rem 0.8rem","font-size":"0.8rem"}}>{g.ht}</td><td style={{padding:"0.6rem 0.8rem","text-align":"center",color:"#d97706","font-weight":"700"}}>{g.stock}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Specifications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Specifications &amp; Technical Details</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {label:"Standard",value:"ASTM A335 / SA335 (ASME equivalent)"},
            {label:"Type",value:"Seamless alloy steel pipe (hot-finished)"},
            {label:"Size Range",value:"1/2\" to 24\" (15NB to 600NB)"},
            {label:"Schedules",value:"SCH 40, 60, 80, 100, 120, 140, 160, XXS"},
            {label:"Heat Treatment",value:"Normalised + Tempered (mandatory for all grades)"},
            {label:"Testing requirements",value:"Hydrostatic, UT (ASME SA-530), hardness or PMI (confirm scope)"},
            {label:"Documentation to specify",value:"MTC and any required IBR Form III-C (confirm for order)"},
            {label:"Mill / source requirements",value:"Specify any approved manufacturer; confirm source and documentation for the order"},
          ].map(s => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <span style={{"font-size":"0.78rem",color:"#6b7280","text-transform":"uppercase","letter-spacing":"0.05em"}}>{s.label}</span>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.25rem 0 0"}}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* IBR Section */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>IBR Certification — What You Need to Know</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>
            <strong>Indian Boiler Regulations (IBR)</strong> requirements depend on the boiler application and project specification. For an alloy steel pipe order, identify the applicable requirements and confirm the documentation needed with the responsible project engineer or inspector.
          </p>
          <ul style={{"font-size":"0.9rem",color:"#374151","line-height":"1.8","padding-left":"1.25rem"}}>
            <li><strong>Form III-C:</strong> Request the applicable material manufacturer's certificate and confirm its scope for the offered product.</li>
            <li><strong>Mill and document checks:</strong> Verify the manufacturer and required documentation against the project specification.</li>
            <li><strong>Traceability:</strong> Check that grade and heat/lot identification on the material match its documents.</li>
            <li><strong>Inspection:</strong> Confirm any inspection requirements with the project specification and responsible authority.</li>
            <li><strong>Application:</strong> Check requirements for the specific boiler or pressure-piping service before ordering.</li>
          </ul>
          <p style={{"font-size":"0.9rem",color:"#374151","line-height":"1.8","margin-top":"1rem"}}>
            For IBR-regulated applications, state the required grade and documentation in your enquiry. Ask the sales team to confirm whether the applicable Form III-C is available for the specific material and order.
          </p>
        </div>

        {/* P91 Section */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>ASTM A335 P91 Pipe — Grade Focus</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"2rem"}}>
          <strong>P91 pipe</strong> (9Cr-1Mo-V-Nb) is used in high-temperature boiler and steam-piping applications. Its performance depends on correct material selection and heat treatment. For an ASTM A335 P91 enquiry, specify the required size and schedule, and confirm the heat-treatment records, inspection scope and any IBR documentation required for the order.
        </p>

        {/* Why Choose CMI */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Choose CMI as Your Alloy Steel Pipe Supplier in India?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>IBR documentation:</strong> Specify Form III-C requirements and confirm documentation scope for the requested grade and order</li>
          <li><strong>Order-specific documentation:</strong> Include required certificates, traceability and inspection scope in your enquiry; confirm what applies to the offered material.</li>
          <li><strong>Grades to enquire about:</strong> P5, P9, P11, P12, P22, P91 and P92; confirm the required grade and current availability for your order.</li>
          <li><strong>Dimensions and schedules:</strong> Share the required size and schedule, including heavy-wall requirements, for order-specific confirmation.</li>
          <li><strong>Material requirements:</strong> Identify heat-treatment, PWHT, PMI, hardness or other project requirements in your enquiry for confirmation.</li>
          <li><strong>Source requirements:</strong> Specify any approved manufacturer and confirm product source and applicable documents for the specific order.</li>
          <li><strong>Quotation:</strong> Request a quotation with your grade, size, schedule, quantity and documentation requirements.</li>
        </ul>

        {/* Applications */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications of Alloy Steel Pipe</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {title:"Main Steam Lines",desc:"P91 and P22 pipes for high-pressure main steam piping in supercritical and subcritical boilers"},
            {title:"Superheater / Reheater Tubes",desc:"P11, P22, P91 for superheater and reheater tube banks operating at 540-600°C"},
            {title:"Boiler Headers",desc:"P22 and P91 thick-wall pipes for high-pressure steam headers and manifolds"},
            {title:"HRSG Piping",desc:"P11 and P22 for Heat Recovery Steam Generator piping in combined cycle plants"},
            {title:"Petrochemical Heaters",desc:"P5 and P9 for crude oil heater tubes and furnace piping in refineries"},
            {title:"Process Piping",desc:"P11 for high-temperature process piping in chemical plants and fertilizer units"},
          ].map(app => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0 0 0.3rem"}}>{app.title}</p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{app.desc}</p>
            </div>
          ))}
        </div>

        {/* Industries */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Supply Alloy Steel Pipe To</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(220px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[{icon:"\u26A1",name:"Thermal Power Plants"},{icon:"\u{1F6E2}\uFE0F",name:"Oil & Gas Refineries"},{icon:"\u{1F3ED}",name:"Petrochemical Plants"},{icon:"\u{1F331}",name:"Fertilizer Industry"},{icon:"\u2699\uFE0F",name:"Boiler Manufacturers"},{icon:"\u{1F525}",name:"Furnace & Heat Treatment"},{icon:"\u{1F4A8}",name:"Combined Cycle / HRSG"},{icon:"\u{1F3D7}\uFE0F",name:"EPC Contractors"}].map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem","text-align":"center"}}>
              <span style={{"font-size":"1.3rem"}}>{ind.icon}</span>
              <p style={{"font-size":"0.85rem","font-weight":"600",color:"#111827",margin:"0.3rem 0 0"}}>{ind.name}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Alloy Steel Pipe India</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Alloy Steel Pipe? Request a Quote.</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>Enquire about ASTM A335 P91, P22 and P11. Include your size and schedule; confirm availability and any required IBR Form III-C documentation for your order.</p>
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
            {href:"/duplex-steel-supplier-vadodara",label:"Duplex Steel Supplier Vadodara"},
            {href:"/p22-alloy-steel-pipe-supplier",label:"P22 Alloy Steel Pipe Supplier"},
            {href:"/p11-alloy-steel-pipe-supplier",label:"P11 Alloy Steel Pipe Supplier"},
            {href:"/carbon-steel-pipe-supplier-india",label:"Carbon Steel Pipe India"},
            {href:"/ss-seamless-pipe-supplier-india",label:"SS Seamless Pipe India"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>

        <RelatedPages currentPath="/alloy-steel-pipe-supplier-india" />
      </main>
    </>
  );
}
