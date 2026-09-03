/**
 * /blog/api-5l-pipe-guide
 * Target: "API 5L pipe", "metal importer exporter India", "stainless steel pipe manufacturer India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../../components/RelatedPages";

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"API 5L Pipe — The Global Standard for Oil and Gas Transport","author":{"@type":"Organization","name":"Creative Metal Industries"},"publisher":{"@type":"Organization","name":"Creative Metal Industries","logo":{"@type":"ImageObject","url":"https://www.creativemetalind.com/logo_cmi.png"}},"datePublished":"2026-06-17", "dateModified": "2026-06-17","image":"https://www.creativemetalind.com/img/line_pipes.png","url":"https://www.creativemetalind.com/blog/api-5l-pipe-guide"});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is API 5L pipe used for?","acceptedAnswer":{"@type":"Answer","text":"API 5L pipes are used for transporting oil, natural gas, and water in pipeline systems. This includes: onshore cross-country oil/gas pipelines, offshore subsea pipelines, gas gathering and distribution networks, water transmission mains, refinery and plant interconnecting pipelines, and city gas distribution systems. API 5L is THE global standard for line pipe — accepted by every major oil company worldwide."}},{"@type":"Question","name":"What is the difference between PSL1 and PSL2?","acceptedAnswer":{"@type":"Answer","text":"PSL1 (Product Specification Level 1) is the standard quality level with basic testing requirements. PSL2 is the enhanced quality level requiring: mandatory Charpy impact testing at specified temperature, tighter chemical limits (max Carbon Equivalent), stricter dimensional tolerances, mandatory NDE of weld seam, and individual pipe traceability. For sour service (H₂S), offshore, or critical pipelines — PSL2 is always specified."}},{"@type":"Question","name":"What do API 5L grades X42, X52, X65 mean?","acceptedAnswer":{"@type":"Answer","text":"The number after 'X' represents the minimum yield strength in ksi (thousand pounds per square inch). X42 = 42 ksi (290 MPa), X52 = 52 ksi (360 MPa), X65 = 65 ksi (450 MPa), X70 = 70 ksi (485 MPa), X80 = 80 ksi (555 MPa). Higher grade = thinner wall for same pressure rating = lighter, cheaper pipeline. But higher grades are harder to weld and less ductile."}}]});

export default function Api5LGuide() {
  return (
    <>
      <Title>API 5L Pipe Guide — Grades, PSL1 vs PSL2 | CMI India</Title>
      <Meta property="og:description" content="API 5L line pipe — PSL1 vs PSL2, grades X42 to X80, chemical/mechanical requirements, pipeline applications. Metal importer exporter India. Creative Metal Industries." />
      <Meta property="og:url" content="https://www.creativemetalind.com/blog/api-5l-pipe-guide" />
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="API 5L line pipe — PSL1 vs PSL2, grades X42 to X80, chemical/mechanical requirements, pipeline applications. Metal importer exporter India." />
      <Link rel="canonical" href="https://www.creativemetalind.com/blog/api-5l-pipe-guide" />
      <Meta property="og:title" content="API 5L Pipe — The Global Standard for Oil & Gas Transport" />
      <Meta property="og:type" content="article" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="API 5L Pipe Guide — Grades, PSL1 vs PSL2 | CMI India" />
      <Meta name="twitter:description" content="API 5L line pipe — PSL1 vs PSL2, grades X42 to X80, chemical/mechanical requirements, pipeline applications. Metal importer exporter India. Creative Metal Industries." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/blog" style={{color:"#E8821A","font-weight":"600","font-size":"0.9rem","text-decoration":"none"}}>← All Articles</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>›</span>
        <a href="/blog" style={{color:"#E8821A","text-decoration":"none"}}>Blog</a><span style={{margin:"0 0.5rem"}}>›</span>
        <span>API 5L Pipe Guide</span>
      </div>

      <main style={{"max-width":"800px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem"}}>
          <span style={{background:"#FEF3C7",color:"#92400E",padding:"0.25rem 0.7rem","border-radius":"99px","font-size":"0.75rem","font-weight":"700"}}>Specification Guide</span>
          <span style={{color:"#9ca3af","font-size":"0.82rem","margin-left":"0.75rem"}}>June 2026 · 9 min read</span>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"1rem 0 1.25rem","line-height":"1.2"}}>
            API 5L Pipe — The Global Standard for Oil and Gas Transport
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8"}}>
            Every oil pipeline, gas transmission line, and subsea flowline on Earth is built with <strong>API 5L pipe</strong>. Developed by the American Petroleum Institute, this specification defines line pipe for the transport of petroleum products and natural gas from wellhead to refinery and beyond. As a specialist <strong>metal importer exporter in India</strong> supplying pipeline projects for ONGC, GAIL, IOCL, and EPC contractors, Creative Metal Industries sources API 5L pipes in all grades and manufacturing types.
          </p>
        </div>

        {/* Introduction */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why API 5L is Essential for Pipeline Transportation</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>Unlike process piping (governed by ASTM A106/A312), pipeline transportation has unique requirements: thousands of kilometres of pipe buried underground or laid on the seabed, operating for 30-50 years with minimal maintenance, often in remote locations. API 5L addresses these specific needs with grades designed for high-strength-to-weight ratio, weldability in field conditions, and resistance to hydrogen-induced cracking in sour environments.</p>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>The specification covers pipe manufactured by seamless, ERW (Electric Resistance Welded), HSAW (Helical Submerged Arc Welded), and LSAW (Longitudinal Submerged Arc Welded) processes — each suited to different diameter ranges and applications.</p>

        {/* PSL1 vs PSL2 */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Product Specification Levels — PSL1 vs PSL2</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"1.5rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"550px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 1rem","text-align":"left"}}>Requirement</th><th style={{padding:"0.7rem 1rem"}}>PSL1</th><th style={{padding:"0.7rem 1rem"}}>PSL2</th></tr></thead>
            <tbody>
              {[["Impact testing","Not mandatory","Mandatory at specified temperature"],["Carbon Equivalent","Not controlled","CE(IIW) ≤ 0.43 or Pcm ≤ 0.25"],["Chemical tolerances","Wider","Tighter (lower max C, S, P)"],["Tensile properties","Min yield + tensile only","Min AND max yield + tensile range"],["NDE of weld seam","Not mandatory","100% UT or RT mandatory"],["Pipe traceability","Lot-based","Individual pipe traceability"],["Fracture toughness","Not required","Required per supplementary"],["Sour service (NACE)","Not addressed","Supplementary requirements available"],["Typical application","Low-pressure, non-critical","Critical, offshore, sour, HP"]].map((r,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 1rem","font-weight":"600"}}>{r[0]}</td><td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[1]}</td><td style={{padding:"0.6rem 1rem","text-align":"center","color":"#065F46","font-weight":"600"}}>{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{"font-size":"0.88rem",color:"#6b7280","margin-bottom":"2rem"}}>For Indian oil & gas projects (ONGC, GAIL, IOCL): PSL2 is almost always specified. PSL1 is used only for low-pressure water or non-critical utility lines.</p>

        {/* Grades */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Grades Explained — A25 Through X80</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"1.5rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"560px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 1rem","text-align":"left"}}>Grade</th><th style={{padding:"0.7rem 1rem"}}>Min Yield (MPa)</th><th style={{padding:"0.7rem 1rem"}}>Min Tensile (MPa)</th><th style={{padding:"0.7rem 1rem"}}>Typical Use</th></tr></thead>
            <tbody>
              {[["Grade A (L175)","175","310","Low-pressure water, structure"],["Grade B (L245)","245","415","General service, city gas, water mains"],["X42 (L290)","290","415","Onshore gathering lines"],["X46 (L320)","320","435","Moderate-pressure gas"],["X52 (L360)","360","460","Standard onshore oil/gas pipelines"],["X56 (L390)","390","490","Medium-pressure transmission"],["X60 (L415)","415","520","High-pressure gas pipelines"],["X65 (L450)","450","535","Offshore, high-pressure, GAIL mains"],["X70 (L485)","485","570","Long-distance HP gas, deepwater"],["X80 (L555)","555","625","Ultra-high-pressure, thinnest wall"]].map((r,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 1rem","font-weight":"700"}}>{r[0]}</td><td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[1]}</td><td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[2]}</td><td style={{padding:"0.6rem 1rem","font-size":"0.82rem",color:"#6b7280"}}>{r[3]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{"font-size":"0.88rem",color:"#6b7280","margin-bottom":"2rem"}}>In India, X52 and X65 are the most commonly specified grades — X52 for standard onshore oil pipelines, X65 for high-pressure gas transmission (GAIL network). X70/X80 are used for transcontinental gas pipelines where wall thickness reduction justifies the higher grade cost.</p>

        {/* Applications */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Applications — Onshore and Offshore Pipelines</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(250px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[{icon:"🛢️",title:"Onshore Oil Pipelines",desc:"Crude oil gathering, transmission, and distribution. ONGC, IOCL, BPCL, HPCL networks across India. Typically X52-X60, ERW or seamless."},{icon:"🔥",title:"Gas Transmission",desc:"GAIL HBJ pipeline, Dahej-Vijaipur, and all major gas trunk lines. High-pressure (80-100 bar) requiring X65-X70 HSAW/LSAW pipe."},{icon:"🌊",title:"Offshore/Subsea",desc:"Pipelines from offshore platforms to onshore terminals. Mumbai High, KG Basin. PSL2 with sour service supplementary. Concrete weight coating."},{icon:"💧",title:"Water Mains",desc:"Municipal and industrial water transmission. Grade B or X42 in large diameters (600-2000mm). HSAW is the most economical manufacturing method."}].map(app => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.25rem"}}>
              <span style={{"font-size":"1.5rem"}}>{app.icon}</span>
              <h3 style={{"font-size":"0.95rem","font-weight":"700",color:"#111827",margin:"0.5rem 0 0.3rem"}}>{app.title}</h3>
              <p style={{"font-size":"0.84rem",color:"#6b7280","line-height":"1.6",margin:0}}>{app.desc}</p>
            </div>
          ))}
        </div>

        {/* Why CMI */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Source API 5L from Creative Metal Industries?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>All manufacturing types:</strong> Seamless, ERW, HSAW (Helical SAW), LSAW (Longitudinal SAW) — sourced from Jindal SAW, Welspun, APL Apollo, Maharashtra Seamless, and imported mills</li>
          <li><strong>Grade range:</strong> Grade B through X70 in PSL1 and PSL2. Sour service (NACE/HIC) grades available with supplementary requirements</li>
          <li><strong>Coating coordination:</strong> 3LPE, 3LPP, FBE, and concrete weight coating — coordinated with approved coating yards for turnkey supply</li>
          <li><strong>Project volumes:</strong> 50 MT to 5000+ MT — supplying ONGC, GAIL, GSPL, IOCL, and EPC contractors (L&T, Punj Lloyd, Essar) on pipeline projects</li>
          <li><strong>Documentation:</strong> MTC 3.1/3.2, hydrostatic test certificates, NDE reports (UT/RT), NACE/HIC test reports — complete data book per project specification</li>
          <li><strong>Global sourcing:</strong> As an experienced <strong>metal importer exporter in India</strong>, we source from mills worldwide when Indian capacity is constrained — ensuring project timelines are met</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — API 5L</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {[{q:"What is API 5L pipe used for?",a:"Transporting oil, natural gas, and water in pipeline systems: onshore cross-country pipelines, offshore subsea pipelines, gas gathering/distribution, refinery interconnections, city gas networks. API 5L is the global standard for line pipe — accepted by every major oil company."},{q:"What is the difference between PSL1 and PSL2?",a:"PSL1 = standard quality (basic testing). PSL2 = enhanced quality requiring: mandatory impact test, tighter chemistry (CE control), 100% NDE of weld seam, individual pipe traceability, and max yield/tensile limits. PSL2 is always specified for critical, offshore, or sour service pipelines."},{q:"What do grades X42, X52, X65 mean?",a:"The number = minimum yield strength in ksi. X42 = 290 MPa yield, X52 = 360 MPa, X65 = 450 MPa, X70 = 485 MPa, X80 = 555 MPa. Higher grade = thinner wall for same pressure = lighter pipeline. But harder to weld and less ductile. X52 and X65 are most common in India."}].map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.3rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need API 5L Line Pipes?</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.92rem"}}>Grade B to X70. PSL1 & PSL2. Seamless, ERW, HSAW, LSAW. Project quantities. NACE/HIC available.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>Send Enquiry →</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Articles & Products</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[{href:"/blog/astm-a312-pipe-guide",label:"ASTM A312 Guide"},{href:"/blog/erw-vs-seamless-pipe",label:"ERW vs Seamless Pipe"},{href:"/blog/nace-hic-steel-plates-guide",label:"NACE HIC Plates"},{href:"/ss-pipe-supplier-vadodara",label:"SS Pipe Supplier Vadodara"},{href:"/carbon-steel-pipe-fittings-vadodara",label:"CS Pipe & Fittings"}].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/blog/api-5l-pipe-guide" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — API 5L Line Pipe Supplier India | Metal Importer Exporter</p>
        <p><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
