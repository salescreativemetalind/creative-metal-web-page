/**
 * /steel-supplier-ankleshwar-gidc
 * Target: "steel supplier Ankleshwar GIDC", "chemical plant pipe Ankleshwar",
 * "SS 316L Ankleshwar", "corrosion resistant pipe Ankleshwar"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const PRODUCTS = [
  { category: "SS 316L Pipes", grades: "SS 316L Seamless & Welded (primary for chemical)", sizes: "1/2\" to 16\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Hastelloy & Exotic", grades: "Hastelloy C276/C22, Inconel 625, Alloy 20, Monel 400", sizes: "1/2\" to 10\"", type: "Seamless", stock: "Available" },
  { category: "Duplex Steel Pipes", grades: "Duplex 2205, Super Duplex 2507, Lean Duplex 2101", sizes: "1/2\" to 12\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "SS Fittings & Flanges", grades: "SS 316L Elbows, Tees, Reducers, Flanges (all types)", sizes: "1/2\" to 24\"", type: "Buttweld, Forged, Socket Weld", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, IS 1239, IS 3589 (utility)", sizes: "1/2\" to 24\"", type: "Seamless & ERW", stock: "Ready Stock" },
  { category: "FRP-Lined CS Pipes", grades: "CS pipe with FRP/rubber lining (acid service)", sizes: "2\" to 24\"", type: "Lined", stock: "Available" },
  { category: "SS Sheets & Plates", grades: "SS 304/316L sheets, SA 240, HR/CR", sizes: "0.5mm to 50mm thick", type: "Hot/Cold Rolled", stock: "Ready Stock" },
  { category: "Instrument Tubing", grades: "SS 316L, Inconel 625, Monel 400 (1/4\" to 1\")", sizes: "1/4\" to 1\" OD", type: "Seamless Instrumentation", stock: "Ready Stock" },
];

const INDUSTRIES = [
  { icon: "\u2697\uFE0F", name: "Chemical Processing (3000+ units)", desc: "Ankleshwar's massive chemical cluster — SS 316L, Hastelloy C276, duplex for reactors, piping, heat exchangers, and storage systems" },
  { icon: "\u{1F48A}", name: "Pharmaceutical / API", desc: "Active Pharmaceutical Ingredient manufacturing — SS 316L electropolished, sanitary fittings, GMP-compliant piping systems" },
  { icon: "\u{1F3A8}", name: "Dye & Pigment Industry", desc: "Dye intermediates, azo dyes, pigments — SS 316L/Hastelloy for acid dye manufacturing, duplex for chloride processes" },
  { icon: "\u{1F33F}", name: "Pesticide & Agrochemical", desc: "Crop protection chemicals — corrosion-resistant piping for aggressive formulations, Hastelloy/Alloy 20 for acid service" },
  { icon: "\u{1F3ED}", name: "Petrochemical / Polymer", desc: "Polymer and resin manufacturing — SS 321 for high-temp, duplex for mixed chemical environments, CS for utility systems" },
  { icon: "\u267B\uFE0F", name: "ETP & Waste Treatment", desc: "Common Effluent Treatment Plants — SS 316L for chemical dosing, FRP-lined CS for acid drains, duplex for aeration systems" },
];

const FAQS = [
  { q: "Who is the best steel supplier for Ankleshwar GIDC chemical industry?", a: "Creative Metal Industries (CMI) is the preferred steel supplier for Ankleshwar GIDC's 3000+ chemical and pharmaceutical units — located just 100 km away in Vadodara with SAME-DAY delivery. We specialize in corrosion-resistant materials critical for chemical processing: SS 316L pipes and fittings, Hastelloy C276 for acid service, duplex 2205 for chloride environments, Alloy 20 for sulfuric acid, and Inconel 625 for high-temperature corrosion. Our expertise in chemical industry material selection sets us apart." },
  { q: "How fast can pipes be delivered to Ankleshwar from Vadodara?", a: "SAME-DAY delivery — Ankleshwar GIDC is just 100 km from our Vadodara warehouse (approximately 1.5 hours by road via NH8). Materials dispatched in the morning reach Ankleshwar within 2 hours. For emergency reactor vessel repairs or production line breakdowns, we can dispatch within 30 minutes of order confirmation. This speed is critical when chemical plants face unplanned downtime costing lakhs per hour. We deliver to all phases of Ankleshwar GIDC and nearby Jhagadia GIDC." },
  { q: "What corrosion-resistant materials do you stock for chemical plants?", a: "For Ankleshwar's chemical industry, we maintain comprehensive stock of corrosion-resistant alloys: SS 316L (general chemical service, most versatile), Hastelloy C276 (hydrochloric acid, mixed acids, chlorine gas), Hastelloy C22 (superior to C276 in oxidizing environments), Alloy 20 (sulfuric acid, specifically 20-80% concentration), Inconel 625 (high-temperature acid corrosion), Monel 400 (hydrofluoric acid), and duplex 2205 (chloride stress corrosion). All materials PMI-verified with complete composition certificates and corrosion data." },
  { q: "Do you supply piping for pharmaceutical plants in Ankleshwar?", a: "Yes, we supply complete pharma-grade piping systems for Ankleshwar's growing API (Active Pharmaceutical Ingredient) manufacturing sector. Our range includes SS 316L seamless pipes (internal electropolished to Ra 0.4 micron), sanitary tri-clamp fittings, orbital-weld prep tubes, SS 316L sheets for clean room panels, and instrument tubing. All materials with 3.1 MTC meeting FDA 21 CFR requirements, surface finish reports, and ferrite content certificates. We support both GMP process piping and utility systems." },
  { q: "Can you supply materials for ETP and effluent treatment plants?", a: "Absolutely. Ankleshwar GIDC's Common Effluent Treatment Plant (CETP) and individual factory ETPs require specialized materials. We supply SS 316L pipes and fittings for chemical dosing and neutralization systems, FRP-lined carbon steel for acid/alkali drainage, duplex 2205 for aeration and ozone contact systems, PP-lined CS for highly corrosive effluent, and SS 316L launders and weir plates. Complete sizing and material selection advice available based on effluent chemistry and temperature conditions." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-supplier-ankleshwar-gidc#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries — Steel Supplier Ankleshwar GIDC","description":"Specialist steel supplier for Ankleshwar GIDC chemical industry — SS 316L, Hastelloy, duplex, corrosion-resistant pipes. Same-day delivery from Vadodara (100 km).","telephone":"+919998280619","url":"https://www.creativemetalind.com/steel-supplier-ankleshwar-gidc","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"Place","name":"Ankleshwar GIDC","containedInPlace":{"@type":"State","name":"Gujarat"}},"priceRange":"$$"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Supplier Ankleshwar GIDC","item":"https://www.creativemetalind.com/steel-supplier-ankleshwar-gidc"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelSupplierAnkleshwarGIDC() {
  return (
    <>
      <Title>Steel Supplier Ankleshwar GIDC | Chemical Pipes | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Steel supplier Ankleshwar GIDC — SS 316L, Hastelloy, duplex pipes for 3000+ chemical plants. SAME-DAY delivery from Vadodara (100 km). Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-supplier-ankleshwar-gidc" />
      <Meta property="og:title" content="Steel Supplier Ankleshwar GIDC | Chemical & Pharma Pipes | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Steel supplier Ankleshwar GIDC — SS 316L, Hastelloy, duplex for chemical plants. Same-day delivery. CMI." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-supplier-ankleshwar-gidc" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Supplier Ankleshwar GIDC | Chemical Pipes | CMI" />
      <Meta name="twitter:description" content="Steel supplier Ankleshwar — SS 316L, Hastelloy, duplex for chemical industry. Same-day delivery." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Steel Supplier Ankleshwar GIDC" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Supplier Ankleshwar GIDC</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Supplier for Ankleshwar GIDC — Chemical &amp; Pharma Grade Pipes, Same-Day
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is the specialist <strong>steel supplier for Ankleshwar GIDC</strong> — India's largest chemical industrial estate with <strong>3000+ manufacturing units</strong>. Located just <strong>100 km from Vadodara with SAME-DAY delivery</strong>, we supply the corrosion-resistant materials that Ankleshwar's chemical, pharmaceutical, dye, pesticide, and polymer industries demand. Our expertise in <strong>SS 316L, Hastelloy C276, duplex 2205, Alloy 20, and Inconel 625</strong> means we don't just supply pipes — we help you select the right material for your specific chemical environment. When your reactor needs emergency piping or your production line faces corrosion failure, our same-day delivery from Vadodara (just 1.5 hours) eliminates costly downtime.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Product Range — Corrosion-Resistant Pipes for Chemical Industry</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Ankleshwar GIDC Chooses Creative Metal Industries</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>SAME-DAY delivery (100 km!):</strong> Vadodara to Ankleshwar in 1.5 hours — faster than any Mumbai supplier. Emergency dispatch within 30 minutes of order</li>
            <li><strong>Chemical corrosion expertise:</strong> We recommend the RIGHT alloy for YOUR chemical — not just sell what's in stock. 13+ years serving chemical plants</li>
            <li><strong>Complete exotic alloy stock:</strong> Hastelloy C276/C22, Inconel 625, Alloy 20, Monel 400, titanium Gr.2 — no 12-week mill wait for critical materials</li>
            <li><strong>3000+ GIDC units served:</strong> Trusted by Ankleshwar's chemical, pharma, dye, and pesticide manufacturers for reliable same-day material supply</li>
            <li><strong>Pharma GMP-compliant:</strong> SS 316L electropolished (Ra 0.4µm), sanitary fittings, 3.1 MTC with composition and surface finish reports</li>
            <li><strong>ETP/CETP specialist:</strong> Materials for effluent treatment — SS 316L, duplex, FRP-lined CS, PP-lined for aggressive chemical waste streams</li>
            <li><strong>PMI on every piece:</strong> Positive Material Identification — no risk of wrong alloy in critical chemical service applications</li>
            <li><strong>Same Gujarat state:</strong> No interstate complications, quick GST invoicing, seamless material flow — ideal for just-in-time chemical manufacturing</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Ankleshwar GIDC</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Delivery Areas — Ankleshwar &amp; Bharuch District</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["Ankleshwar GIDC Ph-1","Ankleshwar GIDC Ph-2","Ankleshwar GIDC Ph-3","Jhagadia GIDC","Panoli GIDC (nearby)","Dahej SEZ/PCPIR","Bharuch Industrial","Vilayat GIDC","Valia GIDC","Jambusar","Netrang","Hansot"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Material Selection Guide for Ankleshwar Chemical Industry</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Ankleshwar's diverse chemical manufacturing requires careful material selection. Creative Metal Industries provides expert guidance: <strong>SS 316L</strong> for general organic chemicals and moderate acids (most versatile, cost-effective), <strong>Hastelloy C276</strong> for hydrochloric acid, wet chlorine gas, and mixed acid environments (the workhorse of severe corrosion), <strong>Alloy 20</strong> for sulfuric acid in 20-80% concentration range, <strong>Monel 400</strong> for hydrofluoric acid and alkali service, <strong>Inconel 625</strong> for high-temperature acid corrosion above 500°C, <strong>duplex 2205</strong> for chloride stress corrosion cracking resistance, and <strong>titanium Grade 2</strong> for oxidizing acids and bleach. Wrong material selection causes premature failure and safety hazards — our 13+ years of chemical industry experience ensures you get it right the first time.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Steel Supplier Ankleshwar GIDC</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Chemical-Grade Pipes in Ankleshwar? Same-Day!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>SS 316L, Hastelloy, Duplex, Alloy 20 — Ready stock. Same-day from Vadodara to Ankleshwar (100 km).</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4DE}"} +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4AC}"} WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote {"\u2192"}</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/inconel-pipe-supplier-india",label:"Inconel Pipe Supplier India"},
            {href:"/duplex-steel-supplier-vadodara",label:"Duplex Steel Supplier Vadodara"},
            {href:"/steel-supplier-vadodara-gidc",label:"Steel Supplier Vadodara GIDC"},
            {href:"/steel-supplier-panoli-gidc",label:"Steel Supplier Panoli GIDC"},
            {href:"/steel-supplier-vapi-gidc",label:"Steel Supplier Vapi GIDC"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/steel-supplier-ankleshwar-gidc" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Steel Supplier Ankleshwar GIDC | Chemical & Pharma Grade Pipes | Same-Day Delivery | Vadodara</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
