/**
 * /steel-supplier-panipat
 * Target: "steel supplier Panipat", "IOCL refinery pipe Panipat",
 * "NTPC Panipat steel", "industrial pipe Haryana"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";
import { LocationContent } from "../components/LocationContent";

const PRODUCTS = [
  { category: "API Line Pipes", grades: "API 5L Gr.B to X70, PSL1 & PSL2, NACE MR0175", sizes: "2\" to 60\"", type: "Seamless, ERW, LSAW", stock: "Ready Stock" },
  { category: "Alloy Steel Pipes", grades: "ASTM A335 P5, P9, P11, P22, P91", sizes: "1/2\" to 24\"", type: "Seamless (IBR)", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B/C, A53, API 5L, IS 3589", sizes: "1/2\" to 48\"", type: "Seamless, ERW, LSAW", stock: "Ready Stock" },
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310S, 904L, Duplex 2205", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "NACE/HIC Steel Plates", grades: "SA 516 Gr.60/70 NACE, SA 387 Gr.11/22, HIC Tested", sizes: "6mm to 150mm thick", type: "Hot Rolled (Normalized)", stock: "Ready Stock" },
  { category: "Pipe Fittings & Flanges", grades: "CS A234 WPB, SS 304/316L, Alloy WP11/WP22", sizes: "1/2\" to 48\"", type: "Buttweld, Forged, WN/SO/Blind", stock: "Ready Stock" },
  { category: "Duplex & Super Duplex", grades: "Duplex 2205, Super Duplex 2507", sizes: "1/2\" to 16\"", type: "Seamless & Welded", stock: "Available" },
  { category: "Boiler Tubes (IBR)", grades: "SA 213 T11, T22, T91, SA 210 Gr.A1/C", sizes: "1\" to 6\" OD", type: "Seamless (IBR Certified)", stock: "Ready Stock" },
];

const INDUSTRIES = [
  { icon: "\u{1F6E2}\uFE0F", name: "IOCL Panipat Refinery (15 MMTPA)", desc: "One of India's largest refineries with integrated petrochemical complex — API pipes, NACE CS, alloy steel for CDU, FCC, DHDT, PX-PTA units" },
  { icon: "\u{1F9F5}", name: "Textile Mills (Panipat Hub)", desc: "India's textile recycling capital — GI pipes, SS for dyeing machinery, structural steel for mill construction, boiler tubes for steam generation" },
  { icon: "\u26A1", name: "NTPC Panipat (Coal TPS)", desc: "920 MW coal thermal power station — alloy steel P11/P22/P91 for boilers, IBR tubes for superheaters, CS for balance-of-plant piping systems" },
  { icon: "\u{1F525}", name: "Panipat Thermal Power (HPGCL)", desc: "State thermal power generation — alloy boiler tubes, CS pipes for BOP, SS for FGD (flue gas desulphurization) systems and cooling water" },
  { icon: "\u{1F9EA}", name: "IOCL Petrochemical Complex", desc: "Integrated PX-PTA, naphtha cracker — SS 316L/321 for aromatic service, alloy for high-temperature reactors, duplex for corrosive process streams" },
  { icon: "\u{1F3ED}", name: "Haryana Industrial Belt", desc: "Auto components, pharma, food processing along NH1 corridor — general industrial piping, structural steel, SS for food and pharma applications" },
];

const FAQS = [
  { q: "Who is the best steel supplier for IOCL Panipat Refinery?", a: "Creative Metal Industries (CMI) is an established supplier of refinery and petrochemical piping materials. For IOCL Panipat's 15 MMTPA refinery and integrated petrochemical complex, we supply API 5L PSL2 line pipes, NACE MR0175 compliant carbon steel, alloy steel P5/P9/P11/P22/P91, SS 316L/321 for process piping, and duplex for corrosive environments. With 2000+ tonnes ready stock and 2-day delivery from Vadodara, we support both routine maintenance and major turnaround shutdowns." },
  { q: "How fast can refinery pipes be delivered to Panipat from Vadodara?", a: "Delivery to Panipat takes just 2 days from our Vadodara warehouse (approximately 1,100 km via NH48 through Rajasthan or NH48/Delhi route). For IOCL Panipat refinery shutdown emergencies, we offer priority dispatch within hours with dedicated full-truck-load transport. The well-connected highway network between Gujarat and Haryana ensures reliable transit. We have extensive experience delivering to Panipat's industrial area and refinery township." },
  { q: "Do you supply IBR-certified alloy steel for NTPC Panipat?", a: "Yes. For NTPC Panipat's 920 MW coal thermal power station, we supply IBR-certified alloy steel boiler tubes (SA 213 T11/T22/T91) for superheater and reheater sections, header pipes (SA 335 P22/P91), and carbon steel for economizer and BOP piping. All materials come with IBR Form III-C certification, stage-wise inspection reports, and comply with NTPC's material specifications. We also support Panipat TPS (HPGCL) with similar IBR-grade materials." },
  { q: "Can you support IOCL Panipat refinery turnaround/shutdown?", a: "Absolutely. IOCL Panipat's periodic shutdowns for the refinery and petrochemical complex require rapid material mobilization. CMI maintains ready stock of all refinery-grade materials including NACE CS, alloy steel, SS, API pipes, fittings, and flanges. We can mobilize 50-100 tonnes within 48 hours. Materials arrive pre-certified with all required documentation (MTCs, NACE compliance, TPI certificates) ready for IOCL's stringent QA/QC acceptance process." },
  { q: "What materials do you supply for Panipat textile industry?", a: "For Panipat's massive textile recycling and manufacturing industry, we supply GI pipes for water distribution and steam lines, SS 304 pipes for dyeing machine internals, carbon steel structural tubes for factory shed construction, boiler tubes for captive steam generation, and MS pipes for general utilities. We offer competitive bulk pricing for textile mill projects including new setup and expansion. Regular supply routes to Panipat ensure 2-day delivery consistency." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-supplier-panipat#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries — Steel Supplier Panipat","description":"Steel supplier for IOCL Panipat Refinery, NTPC power plant, and textile industry. API pipes, alloy steel, IBR certified. 2-day delivery.","telephone":"+919998280619","url":"https://www.creativemetalind.com/steel-supplier-panipat","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"Place","name":"Panipat","containedInPlace":{"@type":"State","name":"Haryana"}},"priceRange":"$$"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Supplier Panipat","item":"https://www.creativemetalind.com/steel-supplier-panipat"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelSupplierPanipat() {
  return (
    <>
      <Title>Steel Supplier Panipat | IOCL Refinery Pipes | CMI</Title>
      <Meta name="robots" content="noindex, follow" />
      <Meta name="description" content="Steel supplier Panipat — API pipes, NACE materials for IOCL refinery, IBR alloy for NTPC. 2-day delivery. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-supplier-panipat" />
      <Meta property="og:title" content="Steel Supplier Panipat | IOCL Refinery & NTPC Pipes | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Steel supplier Panipat — refinery piping for IOCL, IBR alloy for NTPC power plant, textile industry steel. CMI Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-supplier-panipat" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Supplier Panipat | IOCL Refinery Pipes | CMI" />
      <Meta name="twitter:description" content="Steel supplier Panipat — refinery pipes, IBR alloy steel, industrial piping. 2-day delivery." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Steel Supplier Panipat" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Supplier Panipat</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Supplier in Panipat — IOCL Refinery, NTPC Power Plant &amp; Industrial Piping
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is a trusted <strong>steel supplier for Panipat</strong>, serving the <strong>IOCL Panipat Refinery (15 MMTPA)</strong> — one of India's largest integrated refinery-petrochemical complexes — along with <strong>NTPC Panipat (920 MW)</strong> power plant and Haryana's industrial belt. With <strong>2-day delivery from Vadodara</strong> (1,100 km), we provide API line pipes, NACE-compliant carbon steel, alloy steel IBR pipes for power plants, and the complete range of SS and fittings. Panipat is also India's textile recycling capital, creating additional demand for industrial piping and structural steel. Our 2000+ tonne ready stock ensures that whether it's a refinery turnaround, power plant boiler tube replacement, or new textile mill construction — materials are available immediately without mill lead time delays.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range — Pipes, Alloys &amp; Steel for Panipat</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Panipat Industries Choose Creative Metal Industries</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>IOCL Panipat refinery specialist:</strong> 15 MMTPA refinery + petrochemical — API, NACE, alloy, SS for CDU, FCC, DHDT, naphtha cracker, PX-PTA</li>
            <li><strong>2-day delivery from Vadodara:</strong> 1,100 km with reliable transport — fastest supply for refinery shutdowns and power plant emergencies</li>
            <li><strong>IBR-certified for NTPC:</strong> Alloy boiler tubes T11/T22/T91, header pipes P22/P91 with IBR Form III-C for power plant maintenance</li>
            <li><strong>NACE/sour service expertise:</strong> MR0175 compliant CS, HIC-tested plates, controlled hardness alloy for Panipat refinery's crude processing</li>
            <li><strong>Petrochemical-grade SS:</strong> SS 316L/321 for aromatic service, high-temperature service materials for naphtha cracker and PTA plant</li>
            <li><strong>Shutdown turnaround support:</strong> 50-100 tonnes mobilized within 48 hours with pre-certified documentation for rapid QA acceptance</li>
            <li><strong>Textile industry supply:</strong> GI, structural, boiler tubes for Panipat's massive textile manufacturing sector</li>
            <li><strong>2000+ tonne ready stock:</strong> Ex-stock availability eliminates mill lead times for refinery and power plant critical requirements</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Panipat &amp; Haryana</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas in Panipat &amp; Haryana Region</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["IOCL Panipat Refinery","NTPC Panipat TPS","Panipat Textile Area","Samalkha Industrial","Karnal Industries","Sonipat Manufacturing","Kurukshetra Industrial","Ambala Engineering","Yamunanagar Plywood","Bahadurgarh Industrial","Kundli Industrial","Manesar Auto Hub"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Integrated Refinery-Petrochemical Piping for IOCL Panipat</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          IOCL Panipat is unique as an integrated refinery-petrochemical complex with PX-PTA (paraxylene-purified terephthalic acid) and naphtha cracker units alongside conventional refining. This creates diverse piping requirements — from <strong>NACE MR0175 carbon steel</strong> for sour crude processing to <strong>SS 321/347H</strong> for high-temperature aromatic service in the PTA plant, from <strong>API 5L X65 PSL2</strong> for crude/product pipelines to <strong>alloy P91</strong> for naphtha cracker furnace tubes. Creative Metal Industries supplies the complete spectrum from ready stock: <strong>duplex 2205</strong> for process water with high chlorides, <strong>Incoloy 825</strong> for sulfuric acid service, <strong>SS 316L</strong> for general process piping, and <strong>SA 516 Gr.70 NACE plates</strong> for pressure vessels. For NTPC Panipat's coal-fired boilers, we provide IBR-certified alloy tubes and pipes for ongoing maintenance and life extension programs.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Steel Supplier Panipat</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Refinery or Power Plant Pipes in Panipat?</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>API Pipes, NACE CS, Alloy IBR, SS — Ready stock. 2-day delivery to Panipat.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4DE}"} +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>{"\u{1F4AC}"} WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.95rem"}}>Request Formal Quote {"\u2192"}</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Pages</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[
            {href:"/steel-supplier-mathura",label:"Steel Supplier Mathura"},
            {href:"/steel-pipe-supplier-delhi",label:"Steel Pipe Supplier Delhi"},
            {href:"/alloy-steel-pipe-supplier-india",label:"Alloy Steel Pipe Supplier India"},
            {href:"/steel-supplier-chandigarh",label:"Steel Supplier Chandigarh"},
            {href:"/nace-hic-steel-plate-supplier-india",label:"NACE HIC Steel Plate Supplier"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <LocationContent slug="panipat" />
      
        <RelatedPages currentPath="/steel-supplier-panipat" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Steel Supplier Panipat | IOCL Refinery | NTPC Pipes | IBR Alloy Steel | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
