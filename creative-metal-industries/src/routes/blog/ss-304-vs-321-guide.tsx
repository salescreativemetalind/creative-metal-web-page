/**
 * /blog/ss-304-vs-321-guide
 * Target: "SS 304 vs SS 321", "when to use SS 321", "SS 321 stabilised grade"
 */
import { Title, Meta, Link } from "@solidjs/meta";

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"SS 304 vs SS 321 — When to Use the Stabilised Stainless Steel Grade","author":{"@type":"Organization","name":"Creative Metal Industries"},"publisher":{"@type":"Organization","name":"Creative Metal Industries","logo":{"@type":"ImageObject","url":"https://www.creativemetalind.com/logo_cmi.png"}},"datePublished":"2026-06-20","image":"https://www.creativemetalind.com/og-image.jpg","url":"https://www.creativemetalind.com/blog/ss-304-vs-321-guide"});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the difference between SS 304 and SS 321?","acceptedAnswer":{"@type":"Answer","text":"SS 321 contains titanium (5×C minimum) that stabilises the grade against chromium carbide precipitation during welding and high-temperature service (425–900°C). SS 304 lacks this stabilisation and is susceptible to sensitisation (intergranular corrosion) when held at 425–815°C. For welded components in high-temperature service, SS 321 is the safer specification."}},{"@type":"Question","name":"When should I specify SS 321 over SS 304?","acceptedAnswer":{"@type":"Answer","text":"Specify SS 321 when: (1) Operating temperature is continuously above 425°C, (2) The component will be welded and cannot be solution-annealed after welding, (3) The application involves thermal cycling between 425–815°C, (4) Post-weld heat treatment (PWHT) above 425°C is required. If operating below 425°C with no sustained high-temp exposure, SS 304/304L is sufficient and more economical."}},{"@type":"Question","name":"Is SS 321 more expensive than SS 304?","acceptedAnswer":{"@type":"Answer","text":"Yes — SS 321 typically costs 15–25% more than SS 304 due to the titanium addition and lower production volumes. However, the cost difference is small compared to the risk of intergranular corrosion failure in high-temperature welded service. For critical applications above 425°C, the cost premium is easily justified by reliability and reduced maintenance."}}]});

export default function Ss304Vs321Guide() {
  return (
    <>
      <Title>SS 304 vs SS 321 — When to Use the Stabilised Grade | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="SS 304 vs SS 321 comparison — titanium stabilisation, sensitisation resistance, composition table, mechanical properties, when to specify 321 over 304 for high-temp welded service. Creative Metal Industries Vadodara." />
      <Link rel="canonical" href="https://www.creativemetalind.com/blog/ss-304-vs-321-guide" />
      <Meta property="og:title" content="SS 304 vs SS 321 — When to Use the Stabilised Grade" />
      <Meta property="og:description" content="Complete technical comparison of SS 304 vs SS 321. When to specify the stabilised grade for high-temperature welded piping." />
      <Meta property="og:type" content="article" />
      <Meta property="og:url" content="https://www.creativemetalind.com/blog/ss-304-vs-321-guide" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS 304 vs SS 321 — When to Use the Stabilised Grade | CMI" />
      <Meta name="twitter:description" content="SS 304 vs SS 321 comparison — titanium stabilisation, sensitisation resistance, when to specify 321 for high-temp welded service." />
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
        <span>SS 304 vs SS 321 Guide</span>
      </div>

      <main style={{"max-width":"800px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem"}}>
          <span style={{background:"#DBEAFE",color:"#1E40AF",padding:"0.25rem 0.7rem","border-radius":"99px","font-size":"0.75rem","font-weight":"700"}}>Material Comparison</span>
          <span style={{color:"#9ca3af","font-size":"0.82rem","margin-left":"0.75rem"}}>June 2026 · 9 min read</span>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"1rem 0 1.25rem","line-height":"1.2"}}>
            SS 304 vs SS 321 — When to Use the Stabilised Stainless Steel Grade
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8"}}>
            Both SS 304 and SS 321 are austenitic stainless steels with 18% Cr and 8% Ni — but 321 contains a critical addition: <strong>titanium</strong>. This single alloying element prevents a failure mechanism called sensitisation that can destroy welded 304 components in high-temperature service. As a specialist <strong>SS pipe and fittings supplier in India</strong> since 2012, <strong>Creative Metal Industries Vadodara</strong> supplies both grades with full MTC (Mill Test Certificate) documentation and helps procurement engineers select the right specification for their operating conditions.
          </p>
        </div>

        {/* Why 321 Exists */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why SS 321 Exists — The Sensitisation Problem</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>When austenitic stainless steel (like 304) is heated to 425-815°C — either during welding or in service — carbon atoms diffuse to grain boundaries and combine with chromium to form chromium carbides (Cr23C6). This depletes chromium from the adjacent matrix below the 12% threshold needed for passivation. The result: a narrow zone along grain boundaries that is no longer "stainless" and corrodes preferentially. This is called <strong>sensitisation</strong> or <strong>intergranular corrosion (IGC)</strong>.</p>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>SS 321 solves this by adding titanium (Ti), which has a stronger affinity for carbon than chromium does. Titanium preferentially forms titanium carbides (TiC), leaving chromium in solid solution to maintain corrosion resistance. This is why 321 is called a <strong>stabilised grade</strong> — it is stabilised against sensitisation.</p>
        <p style={{"font-size":"0.92rem",color:"#6b7280","line-height":"1.7","margin-bottom":"2rem"}}>The titanium content must be at least 5 times the carbon content (Ti ≥ 5×C) per ASTM A240 to provide effective stabilisation.</p>

        {/* When to Specify 321 */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>When to Specify SS 321 Over SS 304</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>Continuous service above 425°C:</strong> Exhaust manifolds, furnace parts, heat exchangers operating in the sensitisation range</li>
          <li><strong>Welded components without post-weld solution anneal:</strong> If you cannot solution-anneal (1050°C + water quench) after welding, use 321 to prevent HAZ sensitisation</li>
          <li><strong>Thermal cycling between 425-815°C:</strong> Repeated heating/cooling through the sensitisation range accelerates carbide precipitation in 304</li>
          <li><strong>Post-weld heat treatment (stress relief) above 425°C:</strong> PWHT at 600-650°C would sensitise 304 but not 321</li>
          <li><strong>Refinery and petrochemical piping:</strong> Process lines carrying corrosive media at elevated temperatures where IGC would cause catastrophic leaks</li>
        </ul>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"2rem"}}>If your operating temperature stays below 425°C and no high-temperature welding/PWHT is involved, SS 304 or 304L is perfectly adequate and more cost-effective. The "L" grade (low carbon, 0.03% max) also resists sensitisation but has lower high-temperature strength.</p>

        {/* Composition Comparison */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Composition Comparison — SS 304 vs SS 321</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"1.5rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.88rem","min-width":"480px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 1rem","text-align":"left"}}>Element</th><th style={{padding:"0.7rem 1rem"}}>SS 304 (UNS S30400)</th><th style={{padding:"0.7rem 1rem"}}>SS 321 (UNS S32100)</th></tr></thead>
            <tbody>
              {[["Carbon","0.08% max","0.08% max"],["Chromium","18.0–20.0%","17.0–19.0%"],["Nickel","8.0–10.5%","9.0–12.0%"],["Titanium","None","5×C min (typ. 0.4–0.7%)"],["Manganese","2.0% max","2.0% max"],["Silicon","0.75% max","0.75% max"],["Phosphorus","0.045% max","0.045% max"],["Sulphur","0.030% max","0.030% max"]].map((r,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 1rem","font-weight":"600"}}>{r[0]}</td><td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[1]}</td><td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{"font-size":"0.88rem",color:"#6b7280","margin-bottom":"2rem"}}>Note: 321 has slightly higher nickel (9-12% vs 8-10.5%) to maintain austenitic stability after titanium addition. The key differentiator is the titanium content.</p>

        {/* Mechanical Properties */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Mechanical Properties Comparison</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"1.5rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.88rem","min-width":"480px"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 1rem","text-align":"left"}}>Property</th><th style={{padding:"0.7rem 1rem"}}>SS 304</th><th style={{padding:"0.7rem 1rem"}}>SS 321</th></tr></thead>
            <tbody>
              {[["Tensile Strength (min)","515 MPa","515 MPa"],["Yield Strength (min)","205 MPa","205 MPa"],["Elongation (min)","40%","40%"],["Hardness (max)","201 HB","217 HB"],["Max Continuous Service Temp","870°C (intermittent 925°C)","870°C (stabilised)"],["Creep Strength (550°C)","Lower","Higher (Ti carbides pin grain boundaries)"],["Weldability","Excellent","Excellent (no sensitisation risk)"]].map((r,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 1rem","font-weight":"600"}}>{r[0]}</td><td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[1]}</td><td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{"font-size":"0.88rem",color:"#6b7280","margin-bottom":"2rem"}}>At room temperature, both grades have similar strength. The advantage of 321 emerges at elevated temperatures where its superior creep resistance and freedom from sensitisation provide longer service life.</p>

        {/* Applications */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Typical Applications for SS 321</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(250px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[{icon:"🔥",title:"Exhaust Systems",desc:"Aircraft and automotive exhaust manifolds, bellows, flexible connectors — cyclic thermal exposure in the 500-800°C range."},{icon:"🏭",title:"Refinery Piping",desc:"Process piping for catalytic reformers, crude distillation overheads, hydrogen service lines operating above 425°C."},{icon:"⚡",title:"Power Generation",desc:"Boiler superheater tubes, expansion joints, flue gas ducting — IBR-certified 321 tubes for thermal power plants."},{icon:"🧪",title:"Chemical Processing",desc:"Reactor vessels, heat exchangers, jacketed piping in high-temperature corrosive environments."}].map(app => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.25rem"}}>
              <span style={{"font-size":"1.5rem"}}>{app.icon}</span>
              <h3 style={{"font-size":"0.95rem","font-weight":"700",color:"#111827",margin:"0.5rem 0 0.3rem"}}>{app.title}</h3>
              <p style={{"font-size":"0.84rem",color:"#6b7280","line-height":"1.6",margin:0}}>{app.desc}</p>
            </div>
          ))}
        </div>

        {/* Cost Difference */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Cost Difference — Is 321 Worth the Premium?</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>SS 321 typically costs 15-25% more than SS 304 depending on product form (pipe, plate, fittings) and quantity. The premium comes from:</p>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"1.5rem","padding-left":"1.25rem"}}>
          <li><strong>Titanium addition:</strong> Raw material cost for Ti ferro-alloy</li>
          <li><strong>Lower production volumes:</strong> 321 is a specialty grade with smaller mill campaigns</li>
          <li><strong>Tighter process control:</strong> Ti content must be precisely controlled relative to carbon</li>
          <li><strong>Longer lead times:</strong> Not always in stock at mills — may require planned production</li>
        </ul>
        <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"2rem"}}>However, for high-temperature welded service, the 15-25% material premium is negligible compared to the cost of an in-service IGC failure — which can mean unplanned shutdowns, repair welding, and potential safety incidents. At Creative Metal Industries, we maintain ready stock of SS 321 seamless pipes and fittings to minimise lead times for our customers.</p>

        {/* FAQ */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — SS 304 vs SS 321</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {[{q:"What is the difference between SS 304 and SS 321?",a:"SS 321 contains titanium (minimum 5× carbon content) that stabilises the grade against sensitisation — chromium carbide precipitation at grain boundaries during 425–815°C exposure. SS 304 lacks this protection. Both have similar room-temperature properties, but 321 is far more reliable in welded, high-temperature applications."},{q:"When should I specify SS 321 over SS 304?",a:"Specify 321 when: (1) Continuous operating temperature exceeds 425°C, (2) Welded joints cannot be solution-annealed post-weld, (3) Thermal cycling through 425–815°C occurs, (4) PWHT at 600°C+ is required. Below 425°C with no high-temp exposure, 304 or 304L is sufficient and cheaper."},{q:"Is SS 321 more expensive than SS 304?",a:"Yes — typically 15–25% more expensive due to titanium addition, lower production volumes, and tighter process control. However, the premium is easily justified in high-temperature welded applications where sensitisation failure of 304 would result in far costlier shutdowns and repairs."}].map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.3rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need SS 321 Pipes, Fittings or Plates?</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.92rem"}}>Ready stock of SS 321 seamless pipes, welded tubes, and buttweld fittings. Full MTC with titanium content verification. Supplying since 2012.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>💬 WhatsApp</a>
            <a href="/ss-seamless-pipe-supplier-india" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>View SS Seamless Pipes →</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Articles & Products</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[{href:"/ss-pipe-supplier-vadodara",label:"SS Pipe Supplier Vadodara"},{href:"/ss-seamless-pipe-supplier-india",label:"SS Seamless Pipe Supplier India"},{href:"/blog/ss-304-stainless-steel-guide",label:"SS 304 Complete Guide"},{href:"/ss-buttweld-fittings-supplier-india",label:"SS Buttweld Fittings"},{href:"/blog/ss-pipe-fittings-flanges-guide",label:"SS Fittings & Flanges Guide"}].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — SS 321 Stabilised Grade Supplier | SS 304 vs 321 Specialist | Vadodara, Gujarat</p>
        <p><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
