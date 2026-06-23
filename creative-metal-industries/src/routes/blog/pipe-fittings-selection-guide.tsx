/**
 * /blog/pipe-fittings-selection-guide
 * Target: "pipe fittings for refinery", "buttweld vs forged fittings", "pipe fittings supplier India"
 */
import { Title, Meta, Link } from "@solidjs/meta";

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"How to Select Pipe Fittings for Refinery Piping — Engineer's Guide","author":{"@type":"Organization","name":"Creative Metal Industries"},"publisher":{"@type":"Organization","name":"Creative Metal Industries","logo":{"@type":"ImageObject","url":"https://www.creativemetalind.com/logo_cmi.png"}},"datePublished":"2026-06-20","image":"https://www.creativemetalind.com/og-image.jpg","url":"https://www.creativemetalind.com/blog/pipe-fittings-selection-guide"});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the difference between buttweld and forged fittings?","acceptedAnswer":{"@type":"Answer","text":"Buttweld fittings (ASME B16.9) are manufactured by forming plate/pipe into shape and welding — used for 2-inch NPS and above. Forged fittings (ASME B16.11) are machined from solid forged bar stock — used for small-bore piping (typically 2-inch and below). Buttweld fittings are joined by butt welding to the pipe; forged fittings use socket weld or threaded connections."}},{"@type":"Question","name":"Must fitting schedule match pipe schedule?","acceptedAnswer":{"@type":"Answer","text":"Yes, absolutely. The fitting schedule (wall thickness) must match the connecting pipe schedule to ensure uniform wall thickness at the weld joint. A Schedule 80 pipe requires Schedule 80 fittings. Mismatched schedules create stress concentration points and violate ASME B31.3 requirements for refinery piping."}},{"@type":"Question","name":"When should I use threaded fittings in a refinery?","acceptedAnswer":{"@type":"Answer","text":"Threaded fittings are generally restricted in refinery piping. Per most refinery piping specifications, threaded connections are limited to: (1) non-critical utility services below 150°C, (2) instrument connections, (3) drain and vent connections 1-inch and below. Never use threaded fittings for hydrocarbon, toxic, or high-temperature services."}},{"@type":"Question","name":"What documentation should pipe fittings come with?","acceptedAnswer":{"@type":"Answer","text":"Every fitting lot must include: (1) Material Test Certificate (MTC/Mill TC) per EN 10204 3.1 with heat number, chemical composition, and mechanical properties, (2) PMI (Positive Material Identification) test report for alloy grades, (3) Dimensional inspection report, (4) NDE reports (radiography/UT for buttweld, MPI/DPT for forged) as applicable per the piping class."}}]});

export default function PipeFittingsSelectionGuide() {
  return (
    <>
      <Title>How to Select Pipe Fittings for Refinery Piping | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Guide to selecting pipe fittings for refinery and petrochemical piping — buttweld vs forged, schedule matching, material grade selection, pressure class. Creative Metal Industries." />
      <Link rel="canonical" href="https://www.creativemetalind.com/blog/pipe-fittings-selection-guide" />
      <Meta property="og:title" content="How to Select Pipe Fittings for Refinery Piping — Engineer's Guide" />
      <Meta property="og:type" content="article" />
      <Meta property="og:url" content="https://www.creativemetalind.com/blog/pipe-fittings-selection-guide" />
      <Meta property="og:description" content="Guide to selecting pipe fittings for refinery and petrochemical piping — buttweld vs forged, schedule matching, material grade selection, pressure class." />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="How to Select Pipe Fittings for Refinery Piping | CMI" />
      <Meta name="twitter:description" content="Guide to selecting pipe fittings for refinery and petrochemical piping — buttweld vs forged, schedule matching, material grade selection, pressure class." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <a href="/"><img src="/logo_cmi.png" alt="Creative Metal Industries" width="140" height="71" /></a>
        <div style={{flex:1}} />
        <a href="/blog" style={{color:"#E8821A","font-weight":"600","font-size":"0.9rem","text-decoration":"none"}}>&#8592; All Articles</a>
      </nav>

      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <a href="/blog" style={{color:"#E8821A","text-decoration":"none"}}>Blog</a><span style={{margin:"0 0.5rem"}}>{"\u203A"}</span>
        <span>Pipe Fittings Selection Guide</span>
      </div>

      <main style={{"max-width":"800px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem"}}>
          <span style={{background:"#FEF3C7",color:"#92400e",padding:"0.25rem 0.7rem","border-radius":"99px","font-size":"0.75rem","font-weight":"700"}}>Engineering Guide</span>
          <span style={{color:"#9ca3af","font-size":"0.82rem","margin-left":"0.75rem"}}>June 2026 · 10 min read</span>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"1rem 0 1.25rem","line-height":"1.2"}}>
            How to Select Pipe Fittings for Refinery Piping — Engineer's Guide
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8"}}>
            Pipe fittings in refinery piping are not afterthoughts — they are critical pressure boundary components that must match the pipe in grade, schedule, and quality. A single wrong fitting can compromise an entire piping system rated for high pressure, high temperature, or toxic service. This guide covers the engineering fundamentals of fitting selection per ASME B31.3 and common refinery piping specifications. <strong>Creative Metal Industries</strong> is a trusted <strong>pipe fittings supplier in India</strong> serving refineries, petrochemical plants, and EPC contractors.
          </p>
        </div>

        {/* Fitting Types */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Fitting Types — Buttweld vs Forged vs Threaded</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(220px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0","border-radius":"10px",padding:"1.25rem"}}>
            <h3 style={{"font-size":"0.95rem","font-weight":"700",color:"#166534","margin-bottom":"0.5rem"}}>Buttweld (BW) Fittings</h3>
            <ul style={{"font-size":"0.84rem",color:"#374151","line-height":"1.7","padding-left":"1rem",margin:0}}>
              <li>Standard: ASME B16.9</li>
              <li>Size range: 1/2" to 48" NPS</li>
              <li>Types: Elbows, Tees, Reducers, Caps</li>
              <li>Joining: Butt weld to pipe</li>
              <li>Best for: 2" NPS and above</li>
              <li>Full-penetration weld = full strength</li>
            </ul>
          </div>
          <div style={{background:"#eff6ff",border:"1px solid #bfdbfe","border-radius":"10px",padding:"1.25rem"}}>
            <h3 style={{"font-size":"0.95rem","font-weight":"700",color:"#1e40af","margin-bottom":"0.5rem"}}>Forged (SW/THD) Fittings</h3>
            <ul style={{"font-size":"0.84rem",color:"#374151","line-height":"1.7","padding-left":"1rem",margin:0}}>
              <li>Standard: ASME B16.11</li>
              <li>Size range: 1/8" to 4" NPS</li>
              <li>Types: Elbows, Tees, Couplings, Unions</li>
              <li>Joining: Socket weld or Threaded</li>
              <li>Best for: 2" NPS and below</li>
              <li>Pressure classes: 3000#, 6000#, 9000#</li>
            </ul>
          </div>
          <div style={{background:"#fef3c7",border:"1px solid #fde68a","border-radius":"10px",padding:"1.25rem"}}>
            <h3 style={{"font-size":"0.95rem","font-weight":"700",color:"#92400e","margin-bottom":"0.5rem"}}>Threaded Fittings</h3>
            <ul style={{"font-size":"0.84rem",color:"#374151","line-height":"1.7","padding-left":"1rem",margin:0}}>
              <li>Standard: ASME B16.11</li>
              <li>Size range: 1/8" to 4" NPS</li>
              <li>Types: Same as forged SW</li>
              <li>Joining: NPT/BSP threads</li>
              <li>Best for: Utility, instrumentation</li>
              <li>NOT for hydrocarbon service in most specs</li>
            </ul>
          </div>
        </div>

        {/* When to Use Each */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>When to Use Each Type</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>Buttweld fittings:</strong> All pipe sizes 2" NPS and above; any critical service regardless of size; high-pressure/high-temperature service; piping requiring 100% radiography</li>
          <li><strong>Socket weld fittings:</strong> Small-bore piping (2" and below) in non-critical hydrocarbon services; instrument tubing connections; drain and vent manifolds; where full-penetration butt welding is impractical in small diameters</li>
          <li><strong>Threaded fittings:</strong> Utility services only (cooling water, instrument air, nitrogen); instrument connections; temporary installations; where fire risk is minimal and temperature is below 150°C</li>
        </ul>

        {/* Material Matching */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Material Grade Matching — Non-Negotiable Rule</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>The fitting material grade must match the pipe material grade exactly. This ensures compatible mechanical properties, corrosion resistance, and weldability across the joint. Mixing grades creates galvanic couples, differential expansion problems, and violates code requirements.</p>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"1.5rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.88rem","min-width":"500px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 1rem","text-align":"left"}}>Pipe Grade</th><th style={{padding:"0.7rem 1rem"}}>BW Fitting Grade</th><th style={{padding:"0.7rem 1rem"}}>Forged Fitting Grade</th></tr></thead>
            <tbody>
              {[["A106 Gr.B (CS)","A234 WPB","A105"],["A335 P11 (Alloy)","A234 WP11","A182 F11"],["A312 TP304 (SS)","A403 WP304","A182 F304"],["A312 TP316L (SS)","A403 WP316L","A182 F316L"],["A312 TP321 (SS)","A403 WP321","A182 F321"],["A358 TP304 (SS Welded)","A403 WP304W","A182 F304"]].map((r,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 1rem","font-weight":"600"}}>{r[0]}</td><td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[1]}</td><td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Schedule Matching */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Schedule Matching — Wall Thickness Consistency</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>Fitting schedule (wall thickness) must match the connecting pipe schedule. Per ASME B16.9, buttweld fittings are designated by nominal pipe size and schedule — a 4" Sch 80 elbow has the same wall thickness as 4" Sch 80 pipe at the weld end.</p>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>Standard schedules:</strong> SCH 5S, 10S, 40S, 80S for stainless steel; SCH 40, 80, 120, 160, XXS for carbon and alloy steel</li>
          <li><strong>Weld end preparation:</strong> Must match pipe bevel (37.5° standard) with proper root face for full-penetration weld</li>
          <li><strong>Reducers:</strong> Inlet end matches larger pipe schedule; outlet end matches smaller pipe schedule</li>
          <li><strong>Mismatch consequences:</strong> Uneven wall at weld joint causes stress concentration, turbulence, and potential code violation</li>
        </ul>

        {/* Dimensional Standards */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Dimensional Standards and Pressure Classes</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"1rem","padding-left":"1.25rem"}}>
          <li><strong>ASME B16.9:</strong> Factory-made wrought buttweld fittings — elbows (LR/SR), tees (equal/reducing), reducers (concentric/eccentric), caps, stub ends</li>
          <li><strong>ASME B16.11:</strong> Forged fittings — socket weld and threaded elbows, tees, couplings, unions, crosses, caps in pressure classes 2000#, 3000#, 6000#, 9000#</li>
          <li><strong>ASME B16.28:</strong> Short-radius elbows and returns — used where space is limited</li>
          <li><strong>MSS SP-75:</strong> High-test wrought buttweld fittings for pipeline applications</li>
        </ul>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"2rem"}}>For forged fittings, the pressure class (3000# or 6000#) determines the wall thickness and pressure-temperature rating. A 3000# socket weld fitting on Schedule 80 pipe can handle the full pipe pressure rating. For critical high-pressure service, 6000# fittings on Schedule 160 or XXS pipe are specified.</p>

        {/* NDE Requirements */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>NDE and Documentation Requirements</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"1rem","padding-left":"1.25rem"}}>
          <li><strong>Radiography (RT):</strong> Required for buttweld fittings in critical/lethal services per ASME B31.3 Table 341.3.2</li>
          <li><strong>Ultrasonic testing (UT):</strong> Volumetric inspection for thick-wall fittings where RT geometry is difficult</li>
          <li><strong>Magnetic particle (MPI):</strong> Surface inspection for ferromagnetic forged fittings</li>
          <li><strong>Liquid penetrant (DPT):</strong> Surface inspection for non-magnetic (austenitic SS) fittings</li>
          <li><strong>PMI (Positive Material Identification):</strong> Mandatory for alloy and stainless steel fittings — verifies actual chemistry matches specification</li>
        </ul>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"2rem"}}><strong>Documentation checklist:</strong> Material Test Certificate (MTC) per EN 10204 Type 3.1, PMI report, dimensional inspection report, NDE reports (RT/UT/MPI/DPT as applicable), heat number traceability, and marking verification. Creative Metal Industries supplies all fittings with complete documentation packages for refinery and EPC project requirements.</p>

        {/* FAQ */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {[{q:"What is the difference between buttweld and forged fittings?",a:"Buttweld fittings (B16.9) are formed from plate/pipe and joined by butt welding — used for 2\" and above. Forged fittings (B16.11) are machined from solid forged bar — used for small-bore (2\" and below) with socket weld or threaded connections. Buttweld provides full-penetration weld joints; forged fittings use fillet welds or threads."},{q:"Must fitting schedule match pipe schedule?",a:"Yes, always. The fitting wall thickness must match the pipe wall thickness at the joint. A SCH 80 pipe requires SCH 80 fittings. Mismatch creates stress concentration, turbulence, and code violations. For reducers, the inlet matches the larger pipe schedule and the outlet matches the smaller pipe schedule."},{q:"When should I use threaded fittings in a refinery?",a:"Threaded fittings are restricted in refinery piping per most project specifications. Permitted only for: non-critical utility services below 150°C, instrument connections (tubing to pipe), drain/vent connections 1\" and below. Never permitted for hydrocarbon, toxic, H2S, or high-temperature services due to leak potential."},{q:"What documentation should pipe fittings come with?",a:"Every fitting lot requires: (1) Material Test Certificate (MTC) per EN 10204 3.1 showing heat number, chemical analysis, and mechanical properties, (2) PMI report for alloy/SS grades, (3) Dimensional inspection report, (4) NDE reports as applicable per piping class, (5) Marking verification showing ASTM spec, grade, size, schedule, heat number, and manufacturer."}].map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.3rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Pipe Fittings for Your Refinery Project?</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.92rem"}}>Buttweld and forged fittings in SS, CS, Alloy Steel — with full MTC, PMI, and NDE documentation.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>💬 WhatsApp</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Articles and Products</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[{href:"/ss-buttweld-fittings-supplier-india",label:"SS Buttweld Fittings Supplier"},{href:"/ss-flanges-supplier-vadodara",label:"SS Flanges Supplier Vadodara"},{href:"/blog/ss-pipe-fittings-flanges-guide",label:"Pipe Fittings & Flanges Guide"},{href:"/carbon-steel-pipe-fittings-vadodara",label:"CS Pipe Fittings Vadodara"}].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} {"\u2192"}</a>
          ))}
        </div>
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Pipe Fittings Supplier for Refinery Piping | Buttweld and Forged Fittings | Vadodara India</p>
        <p><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
