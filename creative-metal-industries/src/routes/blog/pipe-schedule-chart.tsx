/**
 * /blog/pipe-schedule-chart
 * Target: "pipe schedule SCH 40 80 160 chart", "MS angle ISMC weight chart India", "steel stockist Vadodara"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../../components/RelatedPages";

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Pipe Schedule SCH 40, 80, and 160 — Complete Weight and Thickness Chart Guide","author":{"@type":"Organization","name":"Creative Metal Industries"},"publisher":{"@type":"Organization","name":"Creative Metal Industries","logo":{"@type":"ImageObject","url":"https://www.creativemetalind.com/logo_cmi.png"}},"datePublished":"2026-06-17","image":"https://www.creativemetalind.com/img/ss_seamless_pipe.webp","url":"https://www.creativemetalind.com/blog/pipe-schedule-chart"});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What does pipe schedule mean?","acceptedAnswer":{"@type":"Answer","text":"Pipe schedule is a dimensionless number that defines the wall thickness of a pipe relative to its nominal size. The formula is: Schedule ≈ 1000 × (P/S), where P = internal pressure (psi) and S = allowable stress (psi). Higher schedule = thicker wall = higher pressure rating. SCH 40 is 'standard weight', SCH 80 is 'extra strong', SCH 160 and XXS are for extreme pressure service."}},{"@type":"Question","name":"What is the difference between SCH 40 and SCH 80 pipe?","acceptedAnswer":{"@type":"Answer","text":"For the same nominal pipe size, SCH 80 has a thicker wall than SCH 40 but the SAME outside diameter. Example: 2-inch pipe OD = 60.3mm always. SCH 40 wall = 3.91mm, SCH 80 wall = 5.54mm. This means SCH 80 has a smaller inside diameter (bore), higher pressure rating (~60% more than SCH 40), and weighs more per metre."}},{"@type":"Question","name":"How do I calculate pipe weight per metre?","acceptedAnswer":{"@type":"Answer","text":"Formula: Weight (kg/m) = (OD - WT) × WT × 0.02466 × density factor. For carbon steel (density 7.85): Weight = (OD - WT) × WT × 0.02466. For stainless steel (density 8.0): multiply by 1.02. Example: 2-inch SCH 40 CS pipe: (60.3 - 3.91) × 3.91 × 0.02466 = 5.44 kg/m."}}]});

export default function PipeScheduleChart() {
  return (
    <>
      <Title>Pipe Schedule Chart | CMI</Title>
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Complete pipe schedule chart — SCH 5S, 10S, 40, 80, 160, XXS wall thickness and weight per metre for all sizes. Weight calculation formula. Steel stockist Vadodara. Creative Metal Industries." />
      <Link rel="canonical" href="https://www.creativemetalind.com/blog/pipe-schedule-chart" />
      <Meta property="og:title" content="Pipe Schedule SCH 40, 80, 160 — Complete Chart Guide" />
      <Meta property="og:type" content="article" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Pipe Schedule Chart — SCH 40, 80, 160 Weight & Thickness | CMI" />
      <Meta name="twitter:description" content="Complete pipe schedule chart — SCH 5S, 10S, 40, 80, 160, XXS wall thickness and weight per metre for all sizes. Weight calculation formula. Steel stockist Vadodara. Creative Metal Industries." />
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
        <span>Pipe Schedule Chart</span>
      </div>

      <main style={{"max-width":"900px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem"}}>
          <span style={{background:"#DBEAFE",color:"#1E40AF",padding:"0.25rem 0.7rem","border-radius":"99px","font-size":"0.75rem","font-weight":"700"}}>Technical Reference</span>
          <span style={{color:"#9ca3af","font-size":"0.82rem","margin-left":"0.75rem"}}>June 2026 · 6 min read</span>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"1rem 0 1.25rem","line-height":"1.2"}}>
            Pipe Schedule SCH 40, 80, and 160 — Complete Weight and Thickness Chart Guide
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8"}}>
            "What schedule pipe do I need?" — this is one of the most common questions asked by engineers and procurement teams specifying industrial piping. This reference guide explains what pipe schedule means, provides wall thickness charts for all common sizes, includes the weight calculation formula, and compares SCH 40, 80, and 160 for practical selection. As a <strong>steel stockist in Vadodara</strong> with all schedules in ready stock, Creative Metal Industries provides this as a free reference tool alongside our comprehensive <a href="/products" style={{color:"#E8821A"}}>steel weight charts</a> and <a href="/products" style={{color:"#E8821A"}}>MS angle ISMC weight chart</a>.
          </p>
        </div>

        {/* Section 1 — What does schedule mean */}
        <div style={{background:"#fffbf5",border:"1px solid #fde8cc","border-radius":"12px",padding:"1.5rem 1.75rem","margin-bottom":"1.5rem"}}>
          <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"0 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>What Does Pipe Schedule Mean?</h2>
          <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>Pipe schedule is a <strong>dimensionless number</strong> that defines the wall thickness of a pipe for a given nominal size. It was originally derived from the formula:</p>
          <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem","text-align":"center","font-size":"1.1rem","font-weight":"700",color:"#111827","margin-bottom":"1rem"}}>Schedule Number ≈ 1000 × (P ÷ S)</div>
          <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>Where P = internal working pressure (psi) and S = allowable stress of the material (psi).</p>
          <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8",margin:0}}>The key principle: <strong>for the same nominal pipe size (NPS), ALL schedules have the SAME outside diameter (OD)</strong>. Only the wall thickness changes. Higher schedule = thicker wall = smaller bore = higher pressure capacity = heavier pipe.</p>
        </div>

        {/* Section 2 — Wall Thickness Chart */}
        <div style={{background:"#fffbf5",border:"1px solid #fde8cc","border-radius":"12px",padding:"1.5rem 1.75rem","margin-bottom":"1.5rem"}}>
          <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"0 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Wall Thickness Chart — SCH 10S, 40, 80, 160 (mm)</h2>
          <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px"}}>
            <table style={{width:"100%","border-collapse":"collapse","font-size":"0.82rem","min-width":"620px"}}>
              <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.6rem 0.7rem","text-align":"left"}}>NPS</th><th style={{padding:"0.6rem 0.7rem"}}>OD (mm)</th><th style={{padding:"0.6rem 0.7rem"}}>SCH 10S</th><th style={{padding:"0.6rem 0.7rem"}}>SCH 40</th><th style={{padding:"0.6rem 0.7rem"}}>SCH 80</th><th style={{padding:"0.6rem 0.7rem"}}>SCH 160</th><th style={{padding:"0.6rem 0.7rem"}}>XXS</th></tr></thead>
              <tbody>
                {[["1/2\"","21.3","2.11","2.77","3.73","4.78","7.47"],["3/4\"","26.7","2.11","2.87","3.91","5.56","7.82"],["1\"","33.4","2.77","3.38","4.55","6.35","9.09"],["1-1/2\"","48.3","2.77","3.68","5.08","7.14","10.16"],["2\"","60.3","2.77","3.91","5.54","8.74","11.07"],["3\"","88.9","3.05","5.49","7.62","11.13","15.24"],["4\"","114.3","3.05","6.02","8.56","13.49","17.12"],["6\"","168.3","3.40","7.11","10.97","18.26","21.95"],["8\"","219.1","3.76","8.18","12.70","23.01","22.23"],["10\"","273.1","4.19","9.27","12.70","28.58","25.40"],["12\"","323.9","4.57","9.53","12.70","33.32","25.40"]].map((r,i) => (
                  <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.5rem 0.7rem","font-weight":"700"}}>{r[0]}</td><td style={{padding:"0.5rem 0.7rem"}}>{r[1]}</td><td style={{padding:"0.5rem 0.7rem","text-align":"center"}}>{r[2]}</td><td style={{padding:"0.5rem 0.7rem","text-align":"center","font-weight":"600"}}>{r[3]}</td><td style={{padding:"0.5rem 0.7rem","text-align":"center","font-weight":"600"}}>{r[4]}</td><td style={{padding:"0.5rem 0.7rem","text-align":"center"}}>{r[5]}</td><td style={{padding:"0.5rem 0.7rem","text-align":"center"}}>{r[6]}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{"font-size":"0.8rem",color:"#6b7280","margin-top":"0.75rem"}}>All values in mm. Per ASME B36.10M (carbon steel) and B36.19M (stainless steel). SCH 5S/10S are stainless steel schedules.</p>
        </div>

        {/* Section 3 — Weight Formula */}
        <div style={{background:"#fffbf5",border:"1px solid #fde8cc","border-radius":"12px",padding:"1.5rem 1.75rem","margin-bottom":"1.5rem"}}>
          <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"0 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Weight Calculation Formula</h2>
          <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem","margin-bottom":"1rem"}}>
            <p style={{"font-size":"1rem","font-weight":"700",color:"#111827",margin:"0 0 0.5rem","text-align":"center"}}>Weight (kg/m) = (OD − WT) × WT × 0.02466 × Density Factor</p>
            <p style={{"font-size":"0.85rem",color:"#6b7280","text-align":"center",margin:0}}>Where OD = outside diameter (mm), WT = wall thickness (mm)</p>
          </div>
          <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8","margin-bottom":"0.5rem"}}><strong>Density factors:</strong> Carbon Steel = 1.00 (7.85 g/cm³) | Stainless Steel = 1.02 (8.0 g/cm³) | Aluminium = 0.35</p>
          <p style={{"font-size":"0.92rem",color:"#374151","line-height":"1.8",margin:0}}><strong>Example:</strong> 2" SCH 40 CS pipe: (60.3 − 3.91) × 3.91 × 0.02466 = <strong>5.44 kg/m</strong></p>
        </div>

        {/* Section 4 — Key Differences */}
        <div style={{background:"#fffbf5",border:"1px solid #fde8cc","border-radius":"12px",padding:"1.5rem 1.75rem","margin-bottom":"1.5rem"}}>
          <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"0 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>SCH 40 vs SCH 80 vs SCH 160 — Key Differences</h2>
          <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px"}}>
            <table style={{width:"100%","border-collapse":"collapse","font-size":"0.88rem"}}>
              <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 1rem","text-align":"left"}}>Factor</th><th style={{padding:"0.7rem 1rem"}}>SCH 40</th><th style={{padding:"0.7rem 1rem"}}>SCH 80</th><th style={{padding:"0.7rem 1rem"}}>SCH 160</th></tr></thead>
              <tbody>
                {[["Also called","Standard Weight (STD)","Extra Strong (XS)","—"],["Wall (2\" pipe)","3.91 mm","5.54 mm","8.74 mm"],["Weight (2\" CS)","5.44 kg/m","7.48 kg/m","11.11 kg/m"],["Bore ID (2\")","52.5 mm","49.2 mm","42.8 mm"],["Relative pressure","Baseline (1.0×)","~1.4×","~2.2×"],["Cost","Lowest","~30% more","~80% more"],["Flow capacity","Highest","Reduced ~12%","Reduced ~34%"]].map((r,i) => (
                  <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 1rem","font-weight":"600"}}>{r[0]}</td><td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[1]}</td><td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[2]}</td><td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[3]}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 5 — Applications */}
        <div style={{background:"#fffbf5",border:"1px solid #fde8cc","border-radius":"12px",padding:"1.5rem 1.75rem","margin-bottom":"1.5rem"}}>
          <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"0 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Applications for Each Schedule</h2>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>SCH 5S / 10S:</strong> Low-pressure stainless steel process piping, pharmaceutical, food & dairy, instrument lines. Thin wall = economical for corrosion-resistant service where pressure is low.</li>
            <li><strong>SCH 40 (STD):</strong> Most common industrial schedule. General process piping, water supply, fire protection, HVAC, low-to-moderate pressure process lines up to ~150°C/20 bar.</li>
            <li><strong>SCH 80 (XS):</strong> Higher-pressure process piping, steam lines, hydraulic systems, chemical injection. When SCH 40 isn't sufficient but full high-pressure isn't needed.</li>
            <li><strong>SCH 120:</strong> Intermediate between 80 and 160. Less common — used when exact pressure calculation falls between 80 and 160 capabilities.</li>
            <li><strong>SCH 160:</strong> High-pressure service — refinery process piping, boiler feed water, high-pressure steam, ammonia service. Significant cost and weight premium.</li>
            <li><strong>XXS (Double Extra Strong):</strong> Maximum wall thickness. Extreme pressure (6000+ PSI), hydraulic jacks, high-pressure test lines, pipe used as structural columns.</li>
          </ul>
        </div>

        {/* Section 6 — Why CMI */}
        <div style={{background:"#fffbf5",border:"1px solid #fde8cc","border-radius":"12px",padding:"1.5rem 1.75rem","margin-bottom":"1.5rem"}}>
          <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"0 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Source Pipes from Creative Metal Industries?</h2>
          <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","padding-left":"1.25rem",margin:0}}>
            <li><strong>All schedules in stock:</strong> SCH 5S through XXS in carbon steel (ASTM A106/A53) and stainless steel (ASTM A312) at our Vadodara warehouse</li>
            <li><strong>All sizes:</strong> 1/2" to 24" — seamless and welded — ready for immediate dispatch</li>
            <li><strong>Weight charts available:</strong> Complete <a href="/products" style={{color:"#E8821A"}}>MS angle, ISMC, ISMB weight charts</a> and pipe schedule reference at our products page</li>
            <li><strong>Cut-to-length:</strong> Pipe cutting to your exact requirements — no wastage on odd lengths</li>
            <li><strong>Technical support:</strong> Not sure which schedule? Call us with your design pressure and temperature — we'll confirm the correct schedule per ASME B31.3</li>
            <li><strong>Same-day dispatch:</strong> Standard schedules (40, 80) in common sizes ship same day from GIDC Makarpura, Vadodara</li>
          </ul>
        </div>

        {/* FAQ */}
        <div style={{background:"#fffbf5",border:"1px solid #fde8cc","border-radius":"12px",padding:"1.5rem 1.75rem","margin-bottom":"1.5rem"}}>
          <h2 style={{"font-size":"1.4rem","font-weight":"700",color:"#111827","margin":"0 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — Pipe Schedules</h2>
          <div style={{display:"flex","flex-direction":"column",gap:"0.75rem"}}>
            {[{q:"What does pipe schedule mean?",a:"A dimensionless number defining wall thickness for a given pipe size. Formula: Schedule ≈ 1000 × (P/S). Higher schedule = thicker wall = higher pressure. SCH 40 = standard, SCH 80 = extra strong, SCH 160/XXS = extreme pressure. Same OD for all schedules — only wall changes."},{q:"What is the difference between SCH 40 and SCH 80?",a:"Same OD but different wall thickness. 2-inch example: SCH 40 wall = 3.91mm, SCH 80 = 5.54mm. SCH 80 has ~40% higher pressure rating, weighs ~38% more, costs ~30% more, and has ~12% less internal flow area (smaller bore)."},{q:"How to calculate pipe weight per metre?",a:"Weight (kg/m) = (OD - WT) × WT × 0.02466 for carbon steel. For stainless steel multiply by 1.02. Example: 2\" SCH 40 = (60.3 - 3.91) × 3.91 × 0.02466 = 5.44 kg/m. Or use our free weight chart at creativemetalind.com/products."}].map(f => (
              <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.3rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need Pipes in Any Schedule?</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.92rem"}}>SCH 5S to XXS. Carbon steel + stainless steel. All sizes in ready stock at Vadodara. Same-day dispatch.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>💬 WhatsApp</a>
            <a href="/products" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>Full Weight Charts →</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Articles & Products</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[{href:"/products",label:"Steel Weight Charts"},{href:"/blog/erw-vs-seamless-pipe",label:"ERW vs Seamless Pipe"},{href:"/blog/astm-a312-pipe-guide",label:"ASTM A312 Guide"},{href:"/ss-pipe-supplier-vadodara",label:"SS Pipe Supplier Vadodara"},{href:"/blog/api-5l-pipe-guide",label:"API 5L Guide"}].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/blog/pipe-schedule-chart" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — Steel Stockist Vadodara | Pipe Schedule Chart | Weight Reference</p>
        <p><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
