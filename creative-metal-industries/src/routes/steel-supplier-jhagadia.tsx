/**
 * /steel-supplier-jhagadia
 * Target: "steel supplier Jhagadia industrial", "pipe fittings Jhagadia",
 * "SS 316L Jhagadia GIDC", "chemical steel Jhagadia Bharuch"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const PRODUCTS = [
  { category: "Stainless Steel Pipes", grades: "SS 304, 316L, 321, 310S, 904L, Duplex 2205", sizes: "1/2\" to 24\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Hastelloy Pipes & Fittings", grades: "Hastelloy C276, C22, B2, Alloy 20", sizes: "1/2\" to 10\"", type: "Seamless", stock: "Ready Stock" },
  { category: "Duplex & Super Duplex", grades: "Duplex 2205, Super Duplex 2507, Lean Duplex 2101", sizes: "1/2\" to 16\"", type: "Seamless & Welded", stock: "Ready Stock" },
  { category: "Carbon Steel Pipes", grades: "ASTM A106 Gr.B, A53, API 5L X42–X65, IS 3589", sizes: "1/2\" to 48\"", type: "Seamless, ERW, LSAW", stock: "Ready Stock" },
  { category: "SS Fittings & Flanges", grades: "SS 304/316L Elbows, Tees, Reducers, Flanges (WN/SO/Blind)", sizes: "1/2\" to 48\"", type: "Buttweld, Forged", stock: "Ready Stock" },
  { category: "Exotic Alloy Pipes", grades: "Inconel 625, Monel 400, Incoloy 825, Titanium Gr.2", sizes: "1/2\" to 10\"", type: "Seamless", stock: "Available" },
  { category: "PTFE Lined Pipes", grades: "CS + PTFE/FEP Lining, SS + PTFE Lining", sizes: "1\" to 12\"", type: "Lined Pipes & Fittings", stock: "Available" },
  { category: "Chemical-Grade Plates", grades: "SS 316L, Duplex 2205, Hastelloy C276, Alloy 20", sizes: "3mm to 100mm thick", type: "Hot Rolled, Clad", stock: "Available" },
];

const INDUSTRIES = [
  { icon: "\u{1F9EA}", name: "Chemical Manufacturing", desc: "Jhagadia GIDC houses major chemical producers requiring SS 316L, Hastelloy C276, and duplex piping for corrosive acid and solvent handling systems" },
  { icon: "\u{1F48A}", name: "Pharma & Intermediates", desc: "Pharmaceutical intermediate plants need electropolished SS 316L pipes, sanitary fittings, and acid-resistant duplex for reactor piping circuits" },
  { icon: "\u{1F9F4}", name: "Pesticide & Agrochemical", desc: "Pesticide formulation and manufacturing units require Hastelloy C276 for HCl service, SS 316L for organic solvents, and PTFE-lined pipes for concentrated acids" },
  { icon: "\u{1F308}", name: "Dye & Dye Intermediates", desc: "Dye chemical plants processing sulphuric acid and nitric acid need duplex 2205, Alloy 20, and high-molybdenum austenitic grades for extended service life" },
  { icon: "\u2697\uFE0F", name: "Specialty Chemical Plants", desc: "Fine chemical and specialty manufacturers require exotic alloys — Incoloy 825, Hastelloy B2, titanium for highly specific corrosion environments" },
  { icon: "\u{1F3ED}", name: "Fabrication & EPC", desc: "Engineering and fabrication shops in Jhagadia and Ankleshwar belt source pipes, fittings, flanges, and plates for reactor vessel and column fabrication" },
];

const FAQS = [
  { q: "Who is the best steel supplier for Jhagadia GIDC, Gujarat?", a: "Creative Metal Industries (CMI) is Jhagadia's closest specialized steel supplier — just 130 km from Vadodara with SAME-DAY delivery. We specialize in chemical-grade materials including SS 316L, Hastelloy C276, duplex 2205, and Alloy 20 that Jhagadia's chemical and pharma plants demand. Our 2000+ tonne ready stock and expertise in corrosion-resistant alloys make us the preferred piping partner for Jhagadia GIDC's chemical manufacturing cluster." },
  { q: "How fast can chemical-grade pipes be delivered to Jhagadia?", a: "SAME-DAY delivery guaranteed — Jhagadia GIDC is approximately 130 km from our Vadodara warehouse (around 2.5 hours via Bharuch). Morning orders reach your plant by afternoon. This is especially critical for unplanned shutdowns at chemical plants where corrosive leaks require immediate replacement of Hastelloy or SS 316L piping. We maintain dedicated transport for the Ankleshwar-Jhagadia chemical belt and dispatch within 2 hours of order confirmation." },
  { q: "Do you supply Hastelloy C276 pipes for chemical plants in Jhagadia?", a: "Yes, Hastelloy C276 is one of our core specialty products for Jhagadia's chemical industry. We stock seamless pipes (1/2\" to 6\"), fittings (elbows, tees, reducers), and flanges in Hastelloy C276, C22, and B2. These are essential for handling hydrochloric acid, sulphuric acid, chlorinated solvents, and mixed acid environments common in Jhagadia's chemical plants. All materials supplied with mill test certificates, PMI reports, and NACE compliance where required." },
  { q: "What corrosion-resistant materials are available for Jhagadia's chemical industry?", a: "We offer the complete spectrum of corrosion-resistant alloys for Jhagadia: SS 316L (general chemical service), duplex 2205 (chloride + acid), super duplex 2507 (high-chloride), Hastelloy C276 (universal acid resistance), Alloy 20 (sulphuric acid), Incoloy 825 (mixed acids), Monel 400 (HF acid), and titanium Gr.2 (chlorine/bleach). Our metallurgical team helps select the right grade for your specific chemical exposure — temperature, concentration, and velocity all matter." },
  { q: "Can you supply PTFE-lined pipes for Jhagadia GIDC plants?", a: "Yes, we supply PTFE and FEP lined pipes and fittings for handling concentrated acids (HCl, H2SO4, HNO3) and aggressive chemicals where even Hastelloy has limitations. Available in sizes 1\" to 12\" with carbon steel or stainless steel outer shell. Also available: rubber-lined pipes for slurry service, glass-lined pipes for pharma reactors, and PP-lined pipes for cost-effective chemical resistance. Complete lined piping systems with matched fittings, expansion joints, and sight glasses supplied as a package." },
];

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"LocalBusiness","@id":"https://www.creativemetalind.com/steel-supplier-jhagadia#business","parentOrganization":{"@id":"https://www.creativemetalind.com/#organization"},"name":"Creative Metal Industries — Steel Supplier Jhagadia GIDC","description":"Chemical-grade steel supplier for Jhagadia GIDC — SS 316L, Hastelloy C276, duplex pipes for chemical/pharma plants. Same-day delivery from Vadodara (130 km).","telephone":"+919998280619","url":"https://www.creativemetalind.com/steel-supplier-jhagadia","address":{"@type":"PostalAddress","streetAddress":"386/B GIDC Estate, Makarpura","addressLocality":"Vadodara","addressRegion":"Gujarat","postalCode":"390010","addressCountry":"IN"},"areaServed":{"@type":"Place","name":"Jhagadia GIDC Industrial Area","containedInPlace":{"@type":"State","name":"Gujarat"}},"priceRange":"$$"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.creativemetalind.com"},{"@type":"ListItem","position":2,"name":"Steel Supplier Jhagadia","item":"https://www.creativemetalind.com/steel-supplier-jhagadia"}]}]});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});

export default function SteelSupplierJhagadia() {
  return (
    <>
      <Title>Steel Supplier Jhagadia GIDC | Chemical Pipes | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Steel supplier Jhagadia GIDC — SS 316L, Hastelloy C276, duplex pipes for chemical & pharma plants. SAME-DAY delivery from Vadodara. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/steel-supplier-jhagadia" />
      <Meta property="og:title" content="Steel Supplier Jhagadia GIDC | Chemical-Grade Pipes | Creative Metal Industries" />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content="Chemical-grade steel supplier Jhagadia — SS 316L, Hastelloy, duplex for GIDC chemical plants. Same-day delivery from Vadodara." />
      <Meta property="og:url" content="https://www.creativemetalind.com/steel-supplier-jhagadia" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Steel Supplier Jhagadia GIDC | Chemical Pipes | CMI" />
      <Meta name="twitter:description" content="Steel supplier Jhagadia — Hastelloy, SS 316L, duplex for chemical plants. Same-day delivery." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries — Steel Supplier Jhagadia" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/#contact" style={{background:"#E8821A",color:"#fff",padding:"0.5rem 1.2rem","border-radius":"6px","font-weight":"700","font-size":"0.85rem","text-decoration":"none"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Steel Supplier Jhagadia</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem","text-align":"center"}}>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827",margin:"0 0 1rem","line-height":"1.2"}}>
            Steel Supplier in Jhagadia GIDC — Chemical-Grade Pipes &amp; Fittings, Same-Day Delivery
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8","max-width":"750px",margin:"0 auto"}}>
            <strong>Creative Metal Industries</strong> is the leading <strong>steel supplier for Jhagadia GIDC</strong> — just <strong>130 km with SAME-DAY delivery</strong> from our Vadodara warehouse. Jhagadia industrial estate in Bharuch district is a major extension of Gujarat's Ankleshwar chemical belt, housing over 200 chemical, pharmaceutical, pesticide, and dye intermediate manufacturing units. These industries demand highly specialized corrosion-resistant piping — <strong>SS 316L for general chemical service</strong>, <strong>Hastelloy C276 for concentrated acid handling</strong>, <strong>duplex 2205 for chloride environments</strong>, and exotic alloys like Alloy 20 and Incoloy 825 for mixed acid exposure. CMI's chemical-grade inventory and same-day dispatch capability make us the fastest and most reliable piping partner for Jhagadia's corrosive industrial environment.
          </p>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Complete Product Range — Chemical-Grade Pipes &amp; Fittings for Jhagadia</h2>
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

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Jhagadia Chemical Plants Choose Creative Metal Industries</h2>
        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>SAME-DAY delivery to Jhagadia:</strong> Just 130 km (2.5 hours) from Vadodara — fastest material supply for chemical plant shutdowns and emergencies</li>
            <li><strong>Chemical-grade alloy specialist:</strong> SS 316L, Hastelloy C276/C22/B2, duplex 2205, Alloy 20, Incoloy 825 — all grades for corrosive environments</li>
            <li><strong>Corrosion engineering support:</strong> Our metallurgical team helps select the right alloy based on acid type, concentration, temperature, and flow velocity</li>
            <li><strong>Complete lined piping systems:</strong> PTFE, FEP, rubber, glass, and PP lined pipes and fittings for concentrated acid service beyond metal capabilities</li>
            <li><strong>PMI tested materials:</strong> Positive Material Identification on every exotic alloy shipment — critical for chemical plant safety and insurance compliance</li>
            <li><strong>Ankleshwar-Jhagadia belt expertise:</strong> 25+ years supplying the Gujarat chemical corridor — we understand your corrosion challenges intimately</li>
            <li><strong>Same Gujarat state:</strong> No interstate documentation — fast GST billing, seamless material movement, no border delays for urgent deliveries</li>
            <li><strong>2000+ tonne ready stock:</strong> Ex-stock SS 316L and Hastelloy — no 12-week mill lead time when your reactor is leaking today</li>
          </ul>
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Industries We Serve in Jhagadia &amp; Bharuch District</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {INDUSTRIES.map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
              <p style={{"font-size":"1.1rem",margin:"0 0 0.3rem"}}>{ind.icon} <strong style={{color:"#111827"}}>{ind.name}</strong></p>
              <p style={{"font-size":"0.83rem",color:"#6b7280",margin:0}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Supply Areas in Jhagadia &amp; Bharuch Region</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(180px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {["Jhagadia GIDC Phase 1","Jhagadia GIDC Phase 2","Jhagadia Extension","Ankleshwar GIDC","Panoli GIDC","Dahej SEZ","Dahej GIDC","Vilayat GIDC","Bharuch GIDC","Sarigam GIDC","Valia Industrial","Netrang Area"].map(area => (
            <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.6rem 0.8rem","font-size":"0.83rem","font-weight":"600",color:"#374151","text-align":"center"}}>{area}</div>
          ))}
        </div>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Specialized Chemical Piping Solutions for Jhagadia</h2>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Jhagadia's chemical industry processes some of the most corrosive chemicals known — hydrochloric acid, sulphuric acid, nitric acid, chlorinated solvents, and organic intermediates at elevated temperatures. Creative Metal Industries provides comprehensive corrosion-resistant piping solutions: <strong>Hastelloy C276</strong> for universal acid resistance including HCl and mixed acids, <strong>Alloy 20</strong> specifically for sulphuric acid service (all concentrations), <strong>duplex 2205</strong> for chloride-containing environments where SS 316L shows pitting, <strong>Incoloy 825</strong> for phosphoric acid and mixed sulphuric/phosphoric service, and <strong>titanium Grade 2</strong> for oxidizing chloride environments. For concentrated acids beyond metallic pipe capabilities, we supply complete <strong>PTFE-lined piping systems</strong> with matching fittings and expansion joints. One supplier, one call — complete corrosion solutions for Jhagadia's toughest chemical environments.
        </p>

        <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827",margin:"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Steel Supplier Jhagadia</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQS.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Chemical-Grade Pipes in Jhagadia? Same-Day Delivery!</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.95rem"}}>SS 316L, Hastelloy C276, Duplex, Alloy 20 — Ready stock. Same-day from Vadodara to Jhagadia (130 km).</p>
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
            {href:"/steel-supplier-panoli-gidc",label:"Steel Supplier Panoli GIDC"},
            {href:"/duplex-steel-supplier-vadodara",label:"Duplex Steel Supplier Vadodara"},
            {href:"/inconel-pipe-supplier-india",label:"Inconel Pipe Supplier India"},
            {href:"/ss-seamless-pipe-supplier-india",label:"SS Seamless Pipe Supplier India"},
          ].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/steel-supplier-jhagadia" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Steel Supplier Jhagadia GIDC | Chemical-Grade Pipes | SS 316L, Hastelloy, Duplex | Same-Day Delivery | Vadodara, Gujarat</p>
        <p style={{"margin-top":"0.5rem"}}><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> · <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
