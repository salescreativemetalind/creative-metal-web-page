/**
 * /steel-supplier-panoli-gidc
 * Target: "steel supplier Panoli GIDC", "dye chemical pipe Panoli",
 * "SS 316L Panoli", "corrosion resistant pipe Panoli Gujarat"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";
import { LocationContent } from "../components/LocationContent";

const PRODUCTS = [
  { category: "SS 316L Pipes", grades: "SS 316L Seamless & Welded (chemical/dye grade)", sizes: "1/2\" to 16\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Hastelloy & Exotic", grades: "Hastelloy C276/C22, Inconel 625, Alloy 20, Titanium Gr.2", sizes: "1/2\" to 10\"", type: "Seamless", stock: "Available" },
  { category: "Duplex Steel Pipes", grades: "Duplex 2205, Super Duplex 2507", sizes: "1/2\" to 12\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "SS Fittings & Flanges", grades: "SS 316L Elbows, Tees, Reducers, Flanges (all types)", sizes: "1/2\" to 24\"", type: "Buttweld, Forged, Socket Weld", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, IS 1239 (utility/steam)", sizes: "1/2\" to 24\"", type: "Seamless & ERW", stock: "Ready Stock" },
  { category: "Glass/Enamel-Lined CS", grades: "CS with glass/enamel lining (reactor piping)", sizes: "2\" to 12\"", type: "Lined", stock: "Available" },
  { category: "SS Sheets & Plates", grades: "SS 304/316L sheets, SA 240, chequered", sizes: "0.5mm to 50mm thick", type: "Hot/Cold Rolled", stock: "Ready Stock" },
  { category: "PTFE-Lined Pipes", grades: "CS with PTFE/PFA lining (extreme corrosion)", sizes: "1\" to 12\"", type: "Lined", stock: "Available" },
];

const INDUSTRIES = [
  { icon: "\u{1F3A8}", name: "Dye & Dye Intermediates", desc: "India's largest dye cluster — Hastelloy C276 for sulfonation, SS 316L for organic synthesis, Alloy 20 for acid handling systems" },
  { icon: "\u2697\uFE0F", name: "Chemical Processing", desc: "Organic and inorganic chemicals — SS 316L, Hastelloy, duplex for reactors, distillation columns, and process piping" },
  { icon: "\u{1F3A8}", name: "Pigment Manufacturing", desc: "Organic and inorganic pigments — corrosion-resistant pipes for grinding, filtration, and drying systems in aggressive media" },
  { icon: "\u267B\uFE0F", name: "CETP (Effluent Treatment)", desc: "Panoli CETP — SS 316L for chemical dosing, FRP-lined for acid drains, duplex for aeration and oxidation systems" },
  { icon: "\u{1F48A}", name: "Pharma Intermediates", desc: "Pharmaceutical intermediate manufacturing — SS 316L for clean process, Hastelloy for chlorination and bromination reactions" },
  { icon: "\u{1F9EA}", name: "Specialty Chemicals", desc: "Fine chemicals, catalysts, surfactants — SS 316L/316Ti, Inconel for high-temp reactions, duplex for mixed halide environments" },
];

const FAQS = [
  { q: "Who is the best steel supplier for Panoli GIDC dye industry?", a: "Creative Metal Industries (CMI) is the specialist steel supplier for Panoli GIDC — India's largest dye and dye intermediate cluster. Located just 120 km away in Vadodara with SAME-DAY delivery, we supply the corrosion-resistant materials that dye manufacturing demands: Hastelloy C276 for sulfonation and chlorination, SS 316L for general organic synthesis, Alloy 20 for sulfuric acid service, and duplex 2205 for chloride environments. Our 13+ years serving Gujarat's chemical industry means we understand Panoli's specific material challenges." },
  { q: "How fast can pipes be delivered to Panoli GIDC from Vadodara?", a: "SAME-DAY delivery — Panoli GIDC is just 120 km from our Vadodara warehouse (approximately 2 hours by road via NH8). Materials dispatched in the morning reach Panoli before lunch. For emergency breakdowns at dye reactors or chemical plants, we can dispatch within 30 minutes of confirmation. We deliver to all areas of Panoli GIDC, and also service nearby Ankleshwar GIDC (10 km from Panoli), Jhagadia GIDC, and the entire Bharuch district chemical belt." },
  { q: "What materials are best for dye sulfonation reactors?", a: "Dye sulfonation involves concentrated sulfuric acid (oleum) at elevated temperatures — one of the most aggressive chemical environments. We recommend Hastelloy C276 for reactor piping and agitator shafts (withstands mixed acid, chloride, and high temperature), Alloy 20 for sulfuric acid in 20-80% concentration at moderate temperatures, and glass-lined CS reactors with Hastelloy nozzle connections. For downstream dilution and filtration where conditions are milder, SS 316L is cost-effective. Complete PMI and intergranular corrosion testing on all alloys." },
  { q: "Do you supply CETP piping materials for Panoli?", a: "Yes, Panoli GIDC's Common Effluent Treatment Plant (CETP) handles highly complex dye and chemical effluent requiring specialized materials. We supply SS 316L pipes and fittings for chemical dosing (lime, alum, polymer), FRP-lined carbon steel for mixed acid/dye effluent collection, duplex 2205 for aeration basins and ozone systems, PP-lined pipes for concentrated acid/alkali drains, and PTFE-lined pipes for extremely aggressive streams. Material selection is based on effluent BOD/COD, pH range, chloride content, and dissolved metals." },
  { q: "What corrosion-resistant grades work for pigment manufacturing?", a: "Pigment manufacturing at Panoli involves grinding, milling, filtration, and drying in various acid/alkali media. We recommend SS 316L for general pigment slurry handling (good all-round resistance), Hastelloy C276 for chloride-containing processes (phthalocyanine pigments), duplex 2205 where chloride stress cracking is a concern, titanium Grade 2 for oxidizing acid environments (TiO2 production), and Alloy 20 for sulfuric acid-based processes. Wear-resistant lined pipes available for abrasive pigment slurries. Material selection depends on specific pigment chemistry and operating conditions." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-supplier-panoli-gidc#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries — Steel Supplier Panoli GIDC","description":"Specialist steel supplier for Panoli GIDC dye and chemical industry — Hastelloy, SS 316L, duplex, exotic alloy pipes. Same-day delivery from Vadodara (120 km).","telephone":"+919998280619","url":"https://www.creativemetalind.com/steel-supplier-panoli-gidc","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"Place","name":"Panoli GIDC","containedInPlace":{"@type":"State","name":"Gujarat"}},"priceRange":"$$"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Supplier Panoli GIDC","item":"https://www.creativemetalind.com/steel-supplier-panoli-gidc"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelSupplierPanoliGIDC() {
  return (
    <>
      <Title>Steel Supplier Panoli GIDC | Dye Chemical Pipes | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Steel supplier Panoli GIDC — Hastelloy, SS 316L, duplex pipes for India's largest dye cluster. SAME-DAY delivery from Vadodara (120 km). Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-supplier-panoli-gidc" />
      <Meta property="og:title" content="Steel Supplier Panoli GIDC | Dye & Chemical Pipes | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Steel supplier Panoli GIDC — Hastelloy, SS 316L for dye & chemical industry. Same-day delivery. CMI Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-supplier-panoli-gidc" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Supplier Panoli GIDC | Dye Chemical Pipes | CMI" />
      <Meta name="twitter:description" content="Steel supplier Panoli GIDC — Hastelloy, SS 316L for dye industry. Same-day delivery." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Steel Supplier Panoli GIDC" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Supplier Panoli GIDC</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Supplier for Panoli GIDC — Dye &amp; Chemical Grade Pipes, Same-Day Delivery
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is the specialist <strong>steel supplier for Panoli GIDC</strong> — home to <strong>India's largest dye and dye intermediate manufacturing cluster</strong>. Located just <strong>120 km from Vadodara with SAME-DAY delivery (2 hours)</strong>, we supply the high-performance corrosion-resistant alloys that Panoli's aggressive chemical processes demand. Dye manufacturing involves some of the harshest chemical environments in Indian industry — concentrated sulfuric acid in sulfonation, hydrochloric acid in chlorination, mixed acids in nitration, and chloride-rich process streams. Our expertise in <strong>Hastelloy C276, SS 316L, Alloy 20, duplex 2205</strong>, and <strong>titanium</strong> ensures Panoli's dye, pigment, and chemical manufacturers get materials that withstand their specific process conditions without premature failure.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Product Range — Dye &amp; Chemical Grade Pipes for Panoli</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Panoli GIDC Chooses Creative Metal Industries</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>SAME-DAY delivery (120 km!):</strong> Vadodara to Panoli in just 2 hours — fastest material supply in Bharuch district. Emergency dispatch within 30 minutes</li>
            <li><strong>Dye industry specialist:</strong> 13+ years serving India's largest dye cluster — we understand sulfonation, chlorination, nitration, and diazotization piping needs</li>
            <li><strong>Hastelloy C276 expert:</strong> Ready stock of C276 pipes and fittings — the workhorse alloy for Panoli's harsh acid environments. No 12-week import wait</li>
            <li><strong>Complete material selection:</strong> We recommend the right alloy for YOUR specific reaction — preventing costly corrosion failures and production losses</li>
            <li><strong>CETP approved materials:</strong> SS 316L, duplex, FRP-lined, PTFE-lined — complete range for Panoli's Common Effluent Treatment Plant</li>
            <li><strong>PMI on every piece:</strong> Positive Material Identification — critical in dye industry where wrong alloy can cause catastrophic failure in acid service</li>
            <li><strong>Connects to Ankleshwar:</strong> Panoli is just 10 km from Ankleshwar GIDC — we serve the entire Bharuch chemical corridor same-day</li>
            <li><strong>Lined pipe specialist:</strong> Glass-lined, PTFE-lined, PP-lined, FRP-lined — for when metallic pipes can't handle Panoli's extreme chemistry</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Panoli GIDC</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Delivery Areas — Panoli &amp; Bharuch Chemical Belt</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["Panoli GIDC Main","Panoli GIDC Extension","Ankleshwar GIDC (10 km)","Jhagadia GIDC","Dahej SEZ/PCPIR","Bharuch Town","Vilayat GIDC","Valia Industrial","Netrang","Rajpipla","Zagadia","Amod"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Material Guide for Panoli's Dye &amp; Pigment Industry</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Panoli GIDC's dye and dye intermediate manufacturing represents some of India's most demanding corrosion environments. Creative Metal Industries provides expert material selection: <strong>Hastelloy C276</strong> for sulfonation reactors (oleum + SO3 at 80-120°C), chlorosulfonation, and wet chlorine gas service — the undisputed choice for Panoli's most aggressive processes. <strong>Alloy 20</strong> for sulfuric acid dilution systems (20-80% H2SO4). <strong>SS 316L</strong> for general organic synthesis, filtration, and washing systems where conditions are moderate. <strong>Titanium Grade 2</strong> for oxidizing acid environments and bleach production. <strong>Duplex 2205</strong> where chloride stress cracking threatens standard austenitic stainless. <strong>PTFE-lined CS</strong> for highly concentrated HCl and mixed acid systems where even Hastelloy faces limitations. Each recommendation is backed by corrosion rate data specific to Panoli's dye chemistry.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Steel Supplier Panoli GIDC</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Dye-Grade Pipes in Panoli? Same-Day!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>Hastelloy C276, SS 316L, Alloy 20, Duplex — Ready stock. Same-day from Vadodara to Panoli (120 km).</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4DE}"} +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4AC}"} WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote {"\u2192"}</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/steel-supplier-ankleshwar-gidc",label:"Steel Supplier Ankleshwar GIDC"},
            {href:"/inconel-pipe-supplier-india",label:"Inconel Pipe Supplier India"},
            {href:"/duplex-steel-supplier-vadodara",label:"Duplex Steel Supplier Vadodara"},
            {href:"/steel-supplier-vapi-gidc",label:"Steel Supplier Vapi GIDC"},
            {href:"/steel-supplier-vadodara-gidc",label:"Steel Supplier Vadodara GIDC"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <LocationContent slug="panoli" />
      
        <RelatedPages currentPath="/steel-supplier-panoli-gidc" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Steel Supplier Panoli GIDC | Dye & Chemical Grade Pipes | Same-Day Delivery | Vadodara</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
