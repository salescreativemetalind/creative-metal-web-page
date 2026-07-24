/**
 * /blog/ss-flange-types-guide
 * Target: "SS flange types explained", "WNRF vs SORF flange", "when to use blind flange"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../../components/RelatedPages";

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"SS Flange Types Explained — WNRF vs SORF vs Blind vs Socket Weld","author":{"@type":"Organization","name":"Creative Metal Industries"},"publisher":{"@type":"Organization","name":"Creative Metal Industries","logo":{"@type":"ImageObject","url":"https://www.creativemetalind.com/logo_cmi.png"}},"datePublished":"2026-06-20","image":"https://www.creativemetalind.com/og-image.jpg","url":"https://www.creativemetalind.com/blog/ss-flange-types-guide"});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the difference between WNRF and SORF flanges?","acceptedAnswer":{"@type":"Answer","text":"WNRF (Weld Neck Raised Face) has a long tapered hub that is butt-welded to the pipe — providing the strongest joint with full radiography capability. SORF (Slip-On Raised Face) slides over the pipe and is fillet-welded inside and outside — quicker to install but weaker. WNRF is specified for high-pressure, high-temperature, and critical services (ASME 600# and above). SORF is acceptable for low-pressure utilities and non-critical services up to ASME 300#."}},{"@type":"Question","name":"When should I use a blind flange?","acceptedAnswer":{"@type":"Answer","text":"Use blind flanges to: (1) Close off dead-end piping, (2) Provide future connection points, (3) Allow pigging access on pipelines, (4) Isolate equipment for maintenance (spading). Blind flanges experience the highest bending stress of all flange types because they resist full line pressure without pipe support — so they must be rated for the full design pressure and hydrotest pressure of the system."}},{"@type":"Question","name":"What is the difference between RF, FF, and RTJ flange faces?","acceptedAnswer":{"@type":"Answer","text":"RF (Raised Face) has a 1.6mm raised area that concentrates gasket seating stress — standard for ASME 150# to 2500# steel flanges. FF (Flat Face) has no raised area — mandatory when bolting to cast iron (to prevent cracking) and used in low-pressure HDPE/GRP systems. RTJ (Ring Type Joint) has a machined groove for a metal ring gasket — used for high-pressure/high-temperature services (ASME 900# and above, or where zero-leak is critical)."}}]});

export default function SsFlangeTypesGuide() {
  return (
    <>
      <Title>SS Flange Types Explained — WNRF vs SORF vs Blind | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="SS flange types explained — WNRF vs SORF vs Blind vs Socket Weld, pressure class selection, RF vs FF vs RTJ faces, ASME B16.5 class ratings. Creative Metal Industries Vadodara." />
      <Link rel="canonical" href="https://www.creativemetalind.com/blog/ss-flange-types-guide" />
      <Meta property="og:title" content="SS Flange Types Explained — WNRF vs SORF vs Blind vs Socket Weld" />
      <Meta property="og:description" content="Complete guide to stainless steel flange types. WNRF, SORF, blind, socket-weld, lap-joint — when to use each, pressure ratings, face types." />
      <Meta property="og:type" content="article" />
      <Meta property="og:url" content="https://www.creativemetalind.com/blog/ss-flange-types-guide" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS Flange Types Explained — WNRF vs SORF vs Blind | CMI" />
      <Meta name="twitter:description" content="WNRF vs SORF vs Blind vs Socket Weld flanges — when to use each type, pressure class selection, face types explained." />
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
        <span>SS Flange Types Guide</span>
      </div>

      <main style={{"max-width":"800px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem"}}>
          <span style={{background:"#DCFCE7",color:"#166534",padding:"0.25rem 0.7rem","border-radius":"99px","font-size":"0.75rem","font-weight":"700"}}>Technical Guide</span>
          <span style={{color:"#9ca3af","font-size":"0.82rem","margin-left":"0.75rem"}}>June 2026 · 10 min read</span>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"1rem 0 1.25rem","line-height":"1.2"}}>
            SS Flange Types Explained — WNRF vs SORF vs Blind vs Socket Weld
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8"}}>
            Flanges are the bolted connection points of every piping system — and selecting the wrong type for your service conditions leads to leaks, gasket blowouts, or expensive re-work. This guide covers the five main <strong>stainless steel flange types</strong>, when to use each, how to select pressure class and face type, and ASME B16.5 rating considerations. <strong>Creative Metal Industries Vadodara</strong> has supplied SS flanges in all types and pressure classes to EPC projects and maintenance teams across India since 2012, with full MTC documentation.
          </p>
        </div>

        {/* Flange Types */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Five Main Flange Types — When and Why</h2>

        <h3 style={{"font-size":"1.1rem","font-weight":"700",color:"#111827","margin":"1.5rem 0 0.5rem"}}>1. Weld Neck (WN) Flange</h3>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"0.75rem"}}>The strongest and most reliable flange type. Its long tapered hub provides a smooth stress transition from pipe to flange, resisting bending moments and cyclic loads. Butt-welded to the pipe with a single full-penetration V-weld that can be 100% radiographed.</p>
        <ul style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-bottom":"1.5rem","padding-left":"1.25rem"}}>
          <li><strong>Use when:</strong> High-pressure (ASME 600# and above), high-temperature, cyclic service, critical process piping, IBR-regulated steam systems</li>
          <li><strong>Advantages:</strong> Highest structural integrity, full NDE capability, excellent fatigue resistance, smooth bore flow</li>
          <li><strong>Bore:</strong> Matches pipe ID — no turbulence or crevice at the joint</li>
        </ul>

        <h3 style={{"font-size":"1.1rem","font-weight":"700",color:"#111827","margin":"1.5rem 0 0.5rem"}}>2. Slip-On (SO) Flange</h3>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"0.75rem"}}>Slides over the pipe and is fillet-welded both inside and outside. Easier to align and cheaper than weld neck, but the fillet welds cannot be radiographed and provide less fatigue strength (~2/3 of WN).</p>
        <ul style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-bottom":"1.5rem","padding-left":"1.25rem"}}>
          <li><strong>Use when:</strong> Low-to-moderate pressure (up to ASME 300#), non-critical utility services, where cost savings matter and NDE is not required</li>
          <li><strong>Avoid when:</strong> ASME 600# and above, cyclic/vibration service, services requiring radiography inspection</li>
          <li><strong>Cost:</strong> Typically 20-30% cheaper than equivalent WN flange</li>
        </ul>

        <h3 style={{"font-size":"1.1rem","font-weight":"700",color:"#111827","margin":"1.5rem 0 0.5rem"}}>3. Blind Flange</h3>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"0.75rem"}}>A solid disc with no bore — bolted to close off pipe ends, vessel nozzles, or valve outlets. Experiences the highest bending stress of all flange types because it resists full line pressure as a flat plate with no pipe support.</p>
        <ul style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-bottom":"1.5rem","padding-left":"1.25rem"}}>
          <li><strong>Use when:</strong> Dead-end closures, future connections, maintenance isolation (spading), pigging launcher/receiver doors</li>
          <li><strong>Design note:</strong> Must be rated for full design pressure AND hydrotest pressure — no reduction allowed</li>
          <li><strong>IBR note:</strong> Blind flanges on IBR steam systems require Form III-C certification like all other pressure components</li>
        </ul>

        <h3 style={{"font-size":"1.1rem","font-weight":"700",color:"#111827","margin":"1.5rem 0 0.5rem"}}>4. Socket Weld (SW) Flange</h3>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"0.75rem"}}>Has a recessed bore (socket) into which the pipe is inserted, then fillet-welded on the outside. Used for small-bore (up to 2") high-pressure piping where buttweld alignment is difficult.</p>
        <ul style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-bottom":"1.5rem","padding-left":"1.25rem"}}>
          <li><strong>Use when:</strong> Small-bore (1/2" to 2") high-pressure process connections, instrument piping, sampling points</li>
          <li><strong>Advantage:</strong> Easier pipe-to-flange alignment than WN in small sizes, stronger than threaded</li>
          <li><strong>Limitation:</strong> Socket gap can trap corrosive media — avoid in severe crevice corrosion environments</li>
        </ul>

        <h3 style={{"font-size":"1.1rem","font-weight":"700",color:"#111827","margin":"1.5rem 0 0.5rem"}}>5. Lap Joint Flange</h3>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"0.75rem"}}>Used with a stub end (lap) that is butt-welded to the pipe. The flange slides over the pipe and sits against the stub end face. The flange never contacts the process fluid — only the stub end does.</p>
        <ul style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>Use when:</strong> Exotic/expensive pipe materials (Inconel, Hastelloy, Titanium) where only the stub end needs to be corrosion-resistant — the backing flange can be cheaper carbon steel</li>
          <li><strong>Advantage:</strong> Easy bolt-hole alignment (flange rotates freely), significant cost savings on expensive alloy systems</li>
          <li><strong>Common in:</strong> Chemical plants with Inconel/Monel piping, offshore desalination systems, titanium heat exchangers</li>
        </ul>

        {/* Pressure Class Selection */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Pressure Class Selection — ASME B16.5 Ratings</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>ASME B16.5 defines seven pressure classes for pipe flanges. The pressure rating decreases with increasing temperature — always check the pressure-temperature table for your material group:</p>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"1.5rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.88rem","min-width":"560px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 1rem","text-align":"left"}}>Class</th><th style={{padding:"0.7rem 1rem"}}>Rating at 38°C (SS 304/316)</th><th style={{padding:"0.7rem 1rem"}}>Rating at 260°C</th><th style={{padding:"0.7rem 1rem"}}>Typical Application</th></tr></thead>
            <tbody>
              {[["150#","19.6 bar (285 psi)","16.2 bar","Utility water, low-P process"],["300#","51.1 bar (740 psi)","42.5 bar","Medium-pressure process"],["600#","102.1 bar (1480 psi)","85.0 bar","High-pressure hydrocarbon"],["900#","153.2 bar (2220 psi)","127.5 bar","HP separators, compressors"],["1500#","255.3 bar (3705 psi)","212.5 bar","Wellhead, HP/HT service"],["2500#","425.5 bar (6170 psi)","354.2 bar","Ultra-HP, research reactors"]].map((r,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 1rem","font-weight":"600"}}>{r[0]}</td><td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[1]}</td><td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[2]}</td><td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[3]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{"font-size":"0.88rem",color:"#6b7280","margin-bottom":"2rem"}}>Note: Ratings shown are for Material Group 2.2 (SS 304, 316). Carbon steel (Group 1.1) has different values. Always refer to ASME B16.5 Table 2 for the exact P-T rating of your material group.</p>

        {/* Face Types */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Face Types — RF vs FF vs RTJ</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(250px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[{icon:"📏",title:"RF (Raised Face)",desc:"Standard for steel-to-steel bolting. 1.6mm raised area concentrates gasket load. Uses spiral wound or sheet gaskets. Default face for ASME 150# to 2500# in process piping."},{icon:"📐",title:"FF (Flat Face)",desc:"No raised area — full gasket covers entire face. MANDATORY when bolting to cast iron, FRP, or HDPE flanges (to prevent uneven bending). Also used in low-pressure HVAC."},{icon:"💎",title:"RTJ (Ring Type Joint)",desc:"Machined groove holds a metal ring gasket (oval or octagonal). For high-pressure (900# and above), high-temperature, or zero-leak services. Self-energising — pressure increases sealing force."}].map(app => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.25rem"}}>
              <span style={{"font-size":"1.5rem"}}>{app.icon}</span>
              <h3 style={{"font-size":"0.95rem","font-weight":"700",color:"#111827",margin:"0.5rem 0 0.3rem"}}>{app.title}</h3>
              <p style={{"font-size":"0.84rem",color:"#6b7280","line-height":"1.6",margin:0}}>{app.desc}</p>
            </div>
          ))}
        </div>

        {/* Material Grades */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>SS Flange Material Grades</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>ASTM A182 F304/F304L:</strong> General-purpose austenitic SS — most common grade for chemical, pharma, food processing flanges</li>
          <li><strong>ASTM A182 F316/F316L:</strong> Molybdenum-enhanced — superior pitting resistance for chloride environments, marine, and offshore</li>
          <li><strong>ASTM A182 F321:</strong> Titanium-stabilised — for high-temperature welded service above 425°C (see our SS 304 vs 321 guide)</li>
          <li><strong>ASTM A182 F51 (Duplex 2205):</strong> High strength + corrosion resistance — seawater, chloride SCC, weight-critical offshore</li>
          <li><strong>ASTM A182 F55 (Super Duplex 2507):</strong> Maximum pitting resistance — subsea, hot chloride environments</li>
          <li><strong>ASTM A182 F44 (6Mo):</strong> 6% molybdenum superaustenitic — seawater systems, flue gas desulphurisation</li>
        </ul>

        {/* Why CMI */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>SS Flanges from Creative Metal Industries</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>All types in stock:</strong> WN, SO, Blind, SW, Lap Joint, Threaded — ASME 150# to 2500# in SS 304/316/321/Duplex</li>
          <li><strong>All face types:</strong> RF, FF, RTJ grooved — machined to ASME B16.5 dimensional tolerances</li>
          <li><strong>Full MTC:</strong> Chemical composition, mechanical properties, heat number traceability per EN 10204 3.1</li>
          <li><strong>IBR flanges:</strong> Form III-C certified flanges for steam system and boiler piping applications</li>
          <li><strong>Supplying since 2012:</strong> EPC contractors, refineries, chemical plants, pharma — Vadodara warehouse with pan-India delivery</li>
          <li><strong>Non-standard sizes:</strong> We source custom bore, non-standard OD, and large-diameter flanges (above 24") on project basis</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — SS Flange Types</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {[{q:"What is the difference between WNRF and SORF flanges?",a:"WNRF (Weld Neck Raised Face) is butt-welded with a tapered hub — strongest joint, 100% radiography capable, specified for ASME 600# and above and critical services. SORF (Slip-On Raised Face) slides over pipe and is fillet-welded — cheaper and easier to align but limited to ASME 300# and non-critical services. WNRF fatigue life is approximately 1.5x that of SORF."},{q:"When should I use a blind flange?",a:"Blind flanges close off dead-end piping, provide future connection points, allow pigging access, and isolate equipment for maintenance. They experience the highest bending stress of all flange types (full pressure on unsupported flat plate) — must be rated for full design AND hydrotest pressure without reduction."},{q:"What is the difference between RF, FF, and RTJ flange faces?",a:"RF (Raised Face) is standard for steel piping — 1.6mm raised area with spiral wound gaskets. FF (Flat Face) is mandatory when bolting to cast iron or FRP to prevent cracking. RTJ (Ring Type Joint) uses a metal ring gasket in a machined groove — for high-pressure (900#+), high-temperature, or zero-leak applications where elastomeric gaskets cannot perform."}].map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.3rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need SS Flanges — Any Type, Any Pressure Class?</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.92rem"}}>WN, SO, Blind, SW flanges in SS 304/316/321/Duplex. ASME 150# to 2500#. Full MTC, IBR available. Supplying from Vadodara since 2012.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>💬 WhatsApp</a>
            <a href="/ss-flanges-supplier-vadodara" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>View SS Flanges Stock →</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Articles & Products</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[{href:"/ss-flanges-supplier-vadodara",label:"SS Flanges Supplier Vadodara"},{href:"/ss-buttweld-fittings-supplier-india",label:"SS Buttweld Fittings"},{href:"/blog/ss-pipe-fittings-flanges-guide",label:"SS Fittings & Flanges Guide"},{href:"/blog/ss-304-vs-321-guide",label:"SS 304 vs 321 Guide"},{href:"/duplex-steel-supplier-vadodara",label:"Duplex Steel Supplier"}].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/blog/ss-flange-types-guide" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — SS Flange Types | WNRF SORF Blind Flanges Supplier | Vadodara, Gujarat</p>
        <p><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
