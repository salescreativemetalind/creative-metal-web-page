/**
 * /blog/pipe-fittings-selection-guide
 * Target: "how to select pipe fittings", "pipe fittings for refinery", "buttweld vs forged fittings"
 */
import { Title, Meta, Link } from "@solidjs/meta";

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"How to Select Pipe Fittings for Refinery and Process Piping","author":{"@type":"Organization","name":"Creative Metal Industries"},"publisher":{"@type":"Organization","name":"Creative Metal Industries","logo":{"@type":"ImageObject","url":"https://www.creativemetalind.com/logo_cmi.png"}},"datePublished":"2026-06-20","image":"https://www.creativemetalind.com/og-image.jpg","url":"https://www.creativemetalind.com/blog/pipe-fittings-selection-guide"});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the difference between buttweld and forged fittings?","acceptedAnswer":{"@type":"Answer","text":"Buttweld fittings (ASME B16.9) are formed from pipe/plate and welded to the pipe — used for large bore (2\" and above) high-pressure applications. Forged fittings (ASME B16.11) are machined from forged bar/billet with socket-weld or threaded ends — used for small bore (up to 2\") connections. Buttweld gives full-penetration joints with 100% radiography capability; forged fittings are quicker to install but limited to smaller sizes."}},{"@type":"Question","name":"When should I use threaded fittings vs socket-weld fittings?","acceptedAnswer":{"@type":"Answer","text":"Use threaded (NPT/BSP) fittings for: non-critical utility services, instrument connections, temporary installations, or where disassembly is needed. Use socket-weld fittings for: process piping up to 2\" where leak-tight permanent joints are needed but radiography is not required. Socket-weld is stronger than threaded and suitable for higher pressures, but threaded allows easier maintenance."}},{"@type":"Question","name":"Which pressure class should I select for refinery pipe fittings?","acceptedAnswer":{"@type":"Answer","text":"For forged fittings: Class 3000 handles most refinery applications up to ASME 300# flange ratings; Class 6000 is for high-pressure services (above 300# or where extra wall thickness is needed). Class 9000 exists but is rare. For buttweld fittings: match the schedule of the connecting pipe (Sch 40, Sch 80, Sch 160, XXS). The fitting schedule must equal or exceed the pipe schedule."}}]});

export default function PipeFittingsSelectionGuide() {
  return (
    <>
      <Title>How to Select Pipe Fittings for Refinery Piping | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="How to select pipe fittings for refinery and process piping — buttweld vs forged vs threaded, pressure class selection, ASME B16.9 vs B16.11, material selection guide. Creative Metal Industries Vadodara." />
      <Link rel="canonical" href="https://www.creativemetalind.com/blog/pipe-fittings-selection-guide" />
      <Meta property="og:title" content="How to Select Pipe Fittings for Refinery Piping" />
      <Meta property="og:description" content="Complete selection guide for buttweld, forged, and threaded pipe fittings. Pressure class, material, and size considerations for process piping." />
      <Meta property="og:type" content="article" />
      <Meta property="og:url" content="https://www.creativemetalind.com/blog/pipe-fittings-selection-guide" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="How to Select Pipe Fittings for Refinery Piping | CMI" />
      <Meta name="twitter:description" content="Buttweld vs forged vs threaded fittings — complete selection guide for refinery and process piping applications." />
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
        <span>Pipe Fittings Selection Guide</span>
      </div>

      <main style={{"max-width":"800px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem"}}>
          <span style={{background:"#FEF3C7",color:"#92400E",padding:"0.25rem 0.7rem","border-radius":"99px","font-size":"0.75rem","font-weight":"700"}}>Selection Guide</span>
          <span style={{color:"#9ca3af","font-size":"0.82rem","margin-left":"0.75rem"}}>June 2026 · 10 min read</span>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"1rem 0 1.25rem","line-height":"1.2"}}>
            How to Select Pipe Fittings for Refinery and Process Piping
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8"}}>
            Selecting the wrong fitting type for a refinery piping system can mean failed hydrotests, weld rejection at radiography, or catastrophic in-service leaks. This guide walks procurement engineers through the three main fitting categories — <strong>buttweld, forged (socket-weld/threaded), and speciality fittings</strong> — with clear decision criteria for type, pressure class, material, and applicable ASME standard. <strong>Creative Metal Industries</strong> has supplied pipe fittings to EPC contractors and refineries across India since 2012, with full MTC and IBR certification where required.
          </p>
        </div>

        {/* Types of Fittings */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Three Categories of Pipe Fittings</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(250px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[{icon:"🔩",title:"Buttweld Fittings (B16.9)",desc:"Elbows, tees, reducers, caps formed from pipe/plate. Welded with full-penetration butt joints. Used for 2\" and above in process piping. 100% radiography capable."},{icon:"⚙️",title:"Forged Fittings (B16.11)",desc:"Elbows, tees, couplings, unions machined from forged bar. Socket-weld or threaded ends. Used for small-bore (up to 2\") process and instrument piping."},{icon:"🔧",title:"Speciality Fittings",desc:"Olets (weldolet, sockolet, threadolet), swage nipples, pipe nipples, bull plugs. For branch connections and transitions not covered by standard fittings."}].map(app => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.25rem"}}>
              <span style={{"font-size":"1.5rem"}}>{app.icon}</span>
              <h3 style={{"font-size":"0.95rem","font-weight":"700",color:"#111827",margin:"0.5rem 0 0.3rem"}}>{app.title}</h3>
              <p style={{"font-size":"0.84rem",color:"#6b7280","line-height":"1.6",margin:0}}>{app.desc}</p>
            </div>
          ))}
        </div>

        {/* When to Use Each */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>When to Use Each Type — Decision Matrix</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"1.5rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.88rem","min-width":"560px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 1rem","text-align":"left"}}>Criteria</th><th style={{padding:"0.7rem 1rem"}}>Buttweld (B16.9)</th><th style={{padding:"0.7rem 1rem"}}>Socket-Weld (B16.11)</th><th style={{padding:"0.7rem 1rem"}}>Threaded (B16.11)</th></tr></thead>
            <tbody>
              {[["Pipe Size","2\" and above","1/8\" to 2\"","1/8\" to 2\""],["Pressure Suitability","All (match pipe schedule)","Class 3000/6000/9000","Class 2000/3000/6000"],["Joint Type","Full-penetration butt weld","Fillet weld into socket","Threaded (NPT/BSP)"],["RT/UT Capable","Yes — full radiography","No (fillet weld)","No"],["Typical Service","Main process lines","Small-bore process","Utility, instrument, drain"],["Disassembly","No (permanent)","No (permanent)","Yes (removable)"],["Crevice Corrosion","None","Socket gap possible","Thread gap possible"],["IBR Applicability","Yes","Yes (Class 6000)","Limited"]].map((r,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 1rem","font-weight":"600"}}>{r[0]}</td><td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[1]}</td><td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[2]}</td><td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[3]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pressure Class Selection */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Pressure Class Selection</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}><strong>For buttweld fittings:</strong> The fitting must match the connecting pipe schedule. A Sch 80 pipe requires Sch 80 fittings. The wall thickness of the fitting at the weld-end must equal the pipe wall thickness for proper joint alignment and weld quality.</p>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}><strong>For forged fittings:</strong> Select class based on the connected flange rating:</p>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>Class 3000:</strong> Suitable for up to ASME 300# flange rating (most refinery applications). Socket-weld 3000# is the standard for small-bore process piping</li>
          <li><strong>Class 6000:</strong> For high-pressure applications — HP separators, compressor discharge, wellhead piping. Equivalent to Sch 160/XXS pipe</li>
          <li><strong>Class 9000:</strong> Ultra-high-pressure — rare in refineries, used in HP/HT well completions and special reactor piping</li>
          <li><strong>Class 2000:</strong> Threaded fittings only — utility services, air, water, low-pressure drain</li>
        </ul>

        {/* Material Selection */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Material Selection — CS vs SS vs Alloy</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"1.5rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.88rem","min-width":"560px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 1rem","text-align":"left"}}>Material</th><th style={{padding:"0.7rem 1rem"}}>Specification</th><th style={{padding:"0.7rem 1rem"}}>Typical Service</th><th style={{padding:"0.7rem 1rem"}}>Temp Range</th></tr></thead>
            <tbody>
              {[["Carbon Steel","A234 WPB / A105","Hydrocarbons, steam, general","-29°C to 425°C"],["Low-Temp CS","A420 WPL6 / A350 LF2","Cryogenic, LPG, propane","-46°C to 340°C"],["SS 304/304L","A403 WP304 / A182 F304","Corrosive chemicals, food","-196°C to 425°C"],["SS 316/316L","A403 WP316 / A182 F316","Marine, chlorides, pharma","-196°C to 425°C"],["Alloy Steel","A234 WP11/WP22 / A182 F11/F22","High-temp steam, creep","-29°C to 600°C"],["Duplex 2205","A815 S31803 / A182 F51","Seawater, high-chloride","-50°C to 315°C"],["Inconel 625","SB366 UNS N06625","Extreme corrosion + temp","-200°C to 980°C"]].map((r,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 1rem","font-weight":"600"}}>{r[0]}</td><td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[1]}</td><td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[2]}</td><td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[3]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{"font-size":"0.88rem",color:"#6b7280","margin-bottom":"2rem"}}>Always verify that the fitting material specification matches the pipe material — mixing ASTM/ASME specs (e.g., A234 fittings with A106 pipe, or A403 fittings with A312 pipe) is standard practice, but cross-material welding requires qualified WPS.</p>

        {/* ASME B16.9 vs B16.11 */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>ASME B16.9 vs B16.11 — Standard Differences</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>B16.9:</strong> Factory-made wrought buttwelding fittings — covers elbows (LR, SR), tees (equal, reducing), reducers (concentric, eccentric), caps, stub ends. Size range: 1/2" to 48". Dimensional tolerances and wall thickness requirements defined</li>
          <li><strong>B16.11:</strong> Forged fittings — covers socket-weld and threaded elbows, tees, crosses, couplings, half-couplings, caps, plugs, bushings, unions. Size range: 1/8" to 4" (socket-weld), 1/8" to 4" (threaded). Pressure classes: 2000, 3000, 6000, 9000</li>
          <li><strong>B16.28:</strong> Short-radius (SR) buttweld elbows and returns — same material as B16.9 but with R = 1D instead of 1.5D</li>
          <li><strong>MSS SP-75:</strong> High-test buttweld fittings for pipeline (X42-X80 grades) — not for refinery process piping</li>
          <li><strong>MSS SP-97:</strong> Integrally reinforced branch connections (weldolets, latrolets) — dimensions and ratings</li>
        </ul>

        {/* Size Considerations */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Size Considerations and Practical Tips</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>2" boundary rule:</strong> Below 2" NB — use forged fittings (socket-weld or threaded). 2" and above — use buttweld fittings. This is standard refinery practice per most EPC piping specifications</li>
          <li><strong>Reducing ratio:</strong> Avoid reductions greater than 2:1 in a single fitting (e.g., 4" x 2" is acceptable; 6" x 1" is not — use two steps)</li>
          <li><strong>Branch connections:</strong> When branch-to-header ratio is 0.5 or less, use olets (weldolet, sockolet) instead of reducing tees. More economical and structurally sound</li>
          <li><strong>Long-radius vs short-radius:</strong> Always use LR (1.5D) elbows unless space constraints demand SR (1D). LR elbows have lower pressure drop and better flow characteristics</li>
          <li><strong>Eccentric vs concentric reducers:</strong> Use eccentric (flat-on-bottom) for horizontal lines to avoid liquid trapping. Concentric for vertical lines or vapour service</li>
        </ul>

        {/* Why CMI */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Source Fittings from Creative Metal Industries?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>Complete range:</strong> Buttweld + Forged + Olets in CS, SS, Alloy Steel, Duplex, Inconel, Monel — single-source convenience</li>
          <li><strong>IBR-certified stock:</strong> Form III-C available for boiler-grade fittings — saves weeks of procurement time</li>
          <li><strong>Full MTC with every lot:</strong> Chemical + mechanical + heat number traceability as required by EPC inspection</li>
          <li><strong>EPC-approved vendor:</strong> Supplying to L&T, Thermax, BHEL, Toyo, and refinery maintenance teams since 2012 from Vadodara</li>
          <li><strong>Right-sized inventory:</strong> We stock both standard and odd sizes (Sch 160, XXS, Class 6000) that others don't keep</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Pipe Fittings Selection</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {[{q:"What is the difference between buttweld and forged fittings?",a:"Buttweld fittings (ASME B16.9) are formed from pipe/plate and welded to the pipe with full-penetration butt joints — used for 2\" and above. Forged fittings (ASME B16.11) are machined from forged bar with socket-weld or threaded ends — used for small-bore up to 2\". Buttweld joints are radiography-capable; forged fitting fillet welds are not."},{q:"When should I use threaded vs socket-weld fittings?",a:"Threaded fittings suit non-critical utility services, instrument connections, and where disassembly is needed. Socket-weld fittings suit permanent small-bore process piping at higher pressures. Socket-weld eliminates the thread-root stress concentration and provides a stronger, more leak-resistant joint."},{q:"Which pressure class for refinery pipe fittings?",a:"Class 3000 socket-weld covers most refinery applications up to ASME 300# ratings. Class 6000 is for high-pressure services (HP separators, compressor discharge). For buttweld fittings, match the schedule of the connecting pipe — the fitting wall at the weld-end must equal pipe wall thickness."}].map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.3rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Pipe Fittings for Your Refinery Project?</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.92rem"}}>Buttweld, forged, and olet fittings in CS, SS, and alloy steel. Full MTC, IBR where required. Ready stock from Vadodara since 2012.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>💬 WhatsApp</a>
            <a href="/ss-buttweld-fittings-supplier-india" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>View Buttweld Fittings →</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Articles & Products</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[{href:"/ss-buttweld-fittings-supplier-india",label:"SS Buttweld Fittings Supplier"},{href:"/carbon-steel-pipe-fittings-vadodara",label:"CS Pipe Fittings Vadodara"},{href:"/blog/ss-pipe-fittings-flanges-guide",label:"SS Fittings & Flanges Guide"},{href:"/ss-flanges-supplier-vadodara",label:"SS Flanges Supplier"},{href:"/alloy-steel-pipe-supplier-india",label:"Alloy Steel Pipe Supplier"}].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Pipe Fittings for Refinery | Buttweld &amp; Forged Fittings Supplier | Vadodara, Gujarat</p>
        <p><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
