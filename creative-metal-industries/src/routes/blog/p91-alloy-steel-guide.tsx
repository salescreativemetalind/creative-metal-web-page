/**
 * /blog/p91-alloy-steel-guide
 * Target: "P91 alloy steel power plant pipe", "SS pipe fittings flanges supplier India", "engineering material supplier India"
 */
import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../../components/RelatedPages";

const SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"P91 Alloy Steel — The Power Plant Piping Standard","author":{"@type":"Organization","name":"Creative Metal Industries"},"publisher":{"@type":"Organization","name":"Creative Metal Industries","logo":{"@type":"ImageObject","url":"https://www.creativemetalind.com/logo_cmi.png"}},"datePublished":"2026-06-17", "dateModified": "2026-06-17","image":"https://www.creativemetalind.com/img/alloy_steel_pipe.jpeg","url":"https://www.creativemetalind.com/blog/p91-alloy-steel-guide"});
const FAQ_SCHEMA = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is P91 alloy steel?","acceptedAnswer":{"@type":"Answer","text":"P91 (ASTM A335 Grade P91, also known as 9Cr-1Mo-V-Nb or X10CrMoVNb9-1) is a modified 9% Chromium, 1% Molybdenum alloy steel with controlled additions of Vanadium (0.2%), Niobium (0.06%), and Nitrogen (0.04%). These microalloying additions create fine MX-type carbonitride precipitates that give P91 roughly 2-3× the creep strength of P22 at 550°C, enabling ultra-supercritical steam conditions (580-600°C, 250+ bar) in modern power plants."}},{"@type":"Question","name":"Why is PWHT critical for P91?","acceptedAnswer":{"@type":"Answer","text":"After welding, P91 weld metal and HAZ are in the untempered martensite condition — extremely hard (350-450 HV) and brittle. Without PWHT, the joint WILL crack in service. PWHT at 760°C ±15°C for minimum 2 hours (typically 1 hour per 25mm thickness) tempers the martensite, reduces hardness below 265 HV, and develops the intended creep-resistant microstructure. Under-tempering (too low temperature or time) is the most common cause of premature P91 failures worldwide."}},{"@type":"Question","name":"What is the maximum service temperature for P91?","acceptedAnswer":{"@type":"Answer","text":"P91 is designed for continuous service up to 600°C (1112°F). Above this, creep strength drops rapidly and Grade 92 (P92 with tungsten addition) becomes preferred. Below 600°C, P91 is significantly over-specified compared to P22 (max 580°C) — but designers choose it for thinner walls, lighter weight, and better thermal fatigue resistance even at lower temperatures."}}]});

export default function P91AlloyGuide() {
  return (
    <>
      <Title>P91 Alloy Steel Guide | Power Plant Piping Standard | CMI</Title>
      <Meta property="og:description" content="P91 alloy steel (9Cr-1Mo-V-Nb) — creep properties, PWHT requirements, welding challenges, IBR compliance. The critical grade for ultra-supercritical power plants. Engineering material supplier India." />
      <Meta property="og:url" content="https://www.creativemetalind.com/blog/p91-alloy-steel-guide" />
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="P91 alloy steel (9Cr-1Mo-V-Nb) — creep properties, PWHT requirements, welding challenges, IBR compliance." />
      <Link rel="canonical" href="https://www.creativemetalind.com/blog/p91-alloy-steel-guide" />
      <Meta property="og:title" content="P91 Alloy Steel — The Power Plant Piping Standard" />
      <Meta property="og:type" content="article" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="P91 Alloy Steel Guide — Power Plant Piping Standard | CMI India" />
      <Meta name="twitter:description" content="P91 alloy steel (9Cr-1Mo-V-Nb) — creep properties, PWHT requirements, welding challenges, IBR compliance. The critical grade for ultra-supercritical power plants. Engineering material supplier India." />
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
        <span>P91 Alloy Steel Guide</span>
      </div>

      <main style={{"max-width":"800px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <div style={{"margin-bottom":"2.5rem"}}>
          <span style={{background:"#FEE2E2",color:"#991B1B",padding:"0.25rem 0.7rem","border-radius":"99px","font-size":"0.75rem","font-weight":"700"}}>Industry Insight</span>
          <span style={{color:"#9ca3af","font-size":"0.82rem","margin-left":"0.75rem"}}>June 2026 · 10 min read</span>
          <h1 style={{"font-size":"clamp(1.8rem,4vw,2.6rem)","font-weight":"800",color:"#111827","margin":"1rem 0 1.25rem","line-height":"1.2"}}>
            P91 Alloy Steel — The Power Plant Piping Standard
          </h1>
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8"}}>
            Modern ultra-supercritical power plants operate at steam conditions that would destroy conventional alloy steels within months. <strong>P91 alloy steel</strong> (ASTM A335 Grade P91) made these advanced steam cycles possible — enabling 600°C, 250+ bar main steam conditions that push thermal efficiency above 45%. As an <strong>engineering material supplier in India</strong> and specialist in high-temperature piping, Creative Metal Industries supplies IBR-certified P91 seamless pipes from the world's leading mills for India's power sector.
          </p>
        </div>

        {/* What makes P91 ideal */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>What Makes P91 Ideal for High-Temperature Piping?</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>Before P91 was developed (1980s, Oak Ridge National Laboratory), power plant designers used P22 (2.25Cr-1Mo) for main steam piping. P22's maximum capability is ~580°C — beyond this, creep life drops unacceptably. To reach 600°C+ (ultra-supercritical), a fundamentally different alloy was needed.</p>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>P91 achieves 2-3× the creep strength of P22 at 550-600°C through microalloying with Vanadium, Niobium, and controlled Nitrogen. These elements form extremely fine, thermally stable MX-type carbonitride precipitates (VN, NbC) that pin dislocation movement — the mechanism by which metals creep. The result: P91 piping can be designed with walls 30-50% thinner than P22 for the same operating conditions, reducing weight, thermal stress, and cost.</p>

        {/* Chemical Composition */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Chemical Composition — P91 (9Cr-1Mo-V-Nb)</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"1.5rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.88rem"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 1rem","text-align":"left"}}>Element</th><th style={{padding:"0.7rem 1rem"}}>P91 (wt%)</th><th style={{padding:"0.7rem 1rem"}}>P22 (for comparison)</th><th style={{padding:"0.7rem 1rem"}}>Role in Creep Resistance</th></tr></thead>
            <tbody>
              {[["Chromium (Cr)","8.0–9.5%","1.9–2.6%","Oxidation resistance + carbide former"],["Molybdenum (Mo)","0.85–1.05%","0.87–1.13%","Solid solution strengthener + carbide stability"],["Vanadium (V)","0.18–0.25%","—","Forms VN precipitates — primary creep strengthener"],["Niobium (Nb)","0.06–0.10%","—","Forms NbC — prevents grain coarsening at service temp"],["Nitrogen (N)","0.030–0.070%","—","Combines with V to form VN; stabilises precipitates"],["Carbon (C)","0.08–0.12%","0.05–0.15%","Forms Cr₂₃C₆ on lath boundaries; moderate for toughness"],["Manganese (Mn)","0.30–0.60%","0.30–0.60%","Kept moderate — high Mn reduces creep strength"],["Silicon (Si)","0.20–0.50%","≤ 0.50%","Oxidation resistance; kept moderate"],["Nickel (Ni)","≤ 0.40%","—","Must be LOW — Ni reduces creep life of P91"]].map((r,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 1rem","font-weight":"600"}}>{r[0]}</td><td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[1]}</td><td style={{padding:"0.6rem 1rem","text-align":"center",color:"#9ca3af"}}>{r[2]}</td><td style={{padding:"0.6rem 1rem","font-size":"0.82rem",color:"#6b7280"}}>{r[3]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mechanical Properties */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Mechanical Properties — Creep Strength at Elevated Temperature</h2>
        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"1.5rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.88rem"}}>
            <thead><tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}><th style={{padding:"0.7rem 1rem","text-align":"left"}}>Property</th><th style={{padding:"0.7rem 1rem"}}>P91</th><th style={{padding:"0.7rem 1rem"}}>P22</th></tr></thead>
            <tbody>
              {[["Tensile Strength (room temp)","585–760 MPa","415–585 MPa"],["Yield Strength (room temp)","415 MPa min","205 MPa min"],["Elongation","20% min","30% min"],["Hardness (tempered)","187–265 HBW","—"],["100,000hr Creep Rupture at 600°C","~94 MPa","~35 MPa"],["Max Design Temperature","600°C","580°C"],["Wall Thickness (for same pressure)","~50% of P22","Baseline"],["Thermal Expansion Coefficient","12.5 × 10⁻⁶/°C","12.9 × 10⁻⁶/°C"]].map((r,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}><td style={{padding:"0.6rem 1rem","font-weight":"600"}}>{r[0]}</td><td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[1]}</td><td style={{padding:"0.6rem 1rem","text-align":"center",color:"#9ca3af"}}>{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{"font-size":"0.88rem",color:"#6b7280","margin-bottom":"2rem"}}>The 2.7× higher creep rupture strength at 600°C is the defining advantage of P91 — it enables ultra-supercritical steam cycles that are impossible with P22.</p>

        {/* Applications */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Key Applications — Power Plants, Refineries, Petrochemicals</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(250px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[{icon:"⚡",title:"Main Steam Piping",desc:"600°C, 250+ bar live steam from boiler superheater to HP turbine. The most critical piping in any power plant. Failure = catastrophic explosion."},{icon:"🔥",title:"Hot Reheat Piping",desc:"560-600°C steam between HP turbine exhaust and IP turbine inlet. Large diameters (400-800mm) with thick walls — P91 saves 30-50% weight vs P22."},{icon:"🏭",title:"Superheater Headers",desc:"Collect superheated steam from tube banks. Complex geometry with multiple stub connections. Each weld is a potential failure site — PWHT is non-negotiable."},{icon:"🛢️",title:"Refinery Heater Piping",desc:"Transfer lines from fired heaters to reactors in hydrocracker, reformer, and FCC units. High temperature + hydrogen + H₂S environment."}].map(app => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.25rem"}}>
              <span style={{"font-size":"1.5rem"}}>{app.icon}</span>
              <h3 style={{"font-size":"0.95rem","font-weight":"700",color:"#111827",margin:"0.5rem 0 0.3rem"}}>{app.title}</h3>
              <p style={{"font-size":"0.84rem",color:"#6b7280","line-height":"1.6",margin:0}}>{app.desc}</p>
            </div>
          ))}
        </div>

        {/* Weldability & Heat Treatment */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Weldability and Heat Treatment — The Critical Details</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>P91 is the most demanding alloy steel to weld correctly. More P91 failures have occurred from incorrect welding/PWHT than from any other cause. The rules are strict and non-negotiable:</p>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>Preheat:</strong> 200-250°C minimum — mandatory before striking any arc. Maintains above 200°C throughout welding</li>
          <li><strong>Interpass:</strong> 200-300°C — do NOT exceed 300°C (promotes delta-ferrite that cannot be removed)</li>
          <li><strong>Filler metal:</strong> ER90S-B9 (TIG) / E9015-B9 (MMA) — matching Cr-Mo-V-Nb composition. NEVER use P22 filler on P91</li>
          <li><strong>Post-weld bake:</strong> Hold at 200-250°C for 2 hours after welding to allow hydrogen diffusion before cooling</li>
          <li><strong>PWHT (non-negotiable):</strong> 760°C ±15°C for minimum 2 hours (1 hr per 25mm). Heating rate ≤ 200°C/hr above 400°C. Cooling rate ≤ 200°C/hr to 400°C. This tempers martensite and develops the creep-resistant microstructure</li>
          <li><strong>Critical error — under-tempering:</strong> PWHT below 730°C leaves untempered martensite with Type IV cracking susceptibility. This single mistake has caused dozens of premature failures in Indian power plants</li>
          <li><strong>Hardness check:</strong> After PWHT, base + weld + HAZ must be 187-265 HBW. Outside this range = incorrect heat treatment. Reject and re-treat</li>
        </ul>

        {/* Why CMI */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Why Source P91 from Creative Metal Industries?</h2>
        <ul style={{"font-size":"0.92rem",color:"#374151","line-height":"1.9","margin-bottom":"2rem","padding-left":"1.25rem"}}>
          <li><strong>IBR Form III-C certified:</strong> Mandatory for all boiler piping in India — we stock only IBR-certified P91 from approved mills</li>
          <li><strong>Premium mill sources:</strong> Sumitomo (Japan), Vallourec (France), ISMT (India), Tenaris — all NTPC/BHEL approved</li>
          <li><strong>Complete MTC:</strong> Chemical analysis (with V, Nb, N, Al), mechanical properties (room temp + elevated temp), hardness traverse, and normalise + temper heat treatment record</li>
          <li><strong>Matching consumables:</strong> ER90S-B9 TIG wire + E9015-B9 electrodes stocked alongside parent pipes — single-source convenience</li>
          <li><strong>Fittings & flanges:</strong> ASTM A234 WP91 butt-weld fittings + A182 F91 flanges available as a complete <strong>SS pipe fittings flanges supplier in India</strong> covering alloy grades</li>
          <li><strong>Technical guidance:</strong> We advise on WPS parameters, PWHT requirements, and post-weld hardness acceptance — drawing on 15 years of supplying P91 to NTPC, BHEL, L&T, and state genco projects</li>
        </ul>

        {/* FAQ */}
        <h2 style={{"font-size":"1.5rem","font-weight":"700",color:"#111827","margin":"2.5rem 0 1rem","border-bottom":"2px solid #E8821A","padding-bottom":"0.5rem"}}>Frequently Asked Questions — P91 Alloy Steel</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {[{q:"What is P91 alloy steel?",a:"P91 (ASTM A335 Gr.P91) is a modified 9Cr-1Mo alloy with V, Nb, and N additions that create fine carbonitride precipitates for creep resistance. It has 2-3× the creep strength of P22 at 550-600°C. Designed for ultra-supercritical power plant main steam and hot reheat piping operating at 580-600°C and 250+ bar."},{q:"Why is PWHT critical for P91?",a:"After welding, P91 is in untempered martensite condition — 350-450 HV hardness, extremely brittle. Without PWHT (760°C ±15°C, min 2 hours), the joint WILL crack in service from Type IV cracking in the HAZ. Under-tempering (below 730°C) is equally dangerous — leaves residual hard zones that fail prematurely."},{q:"What is the maximum service temperature for P91?",a:"600°C (1112°F) for continuous service with acceptable 100,000-hour creep life. Above 600°C, Grade P92 (9Cr-2W-Mo-V-Nb) is preferred. P91 can operate at lower temperatures (500-580°C) where P22 is technically adequate — but designers choose it for 30-50% thinner walls, lighter weight, and better thermal fatigue."}].map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}><summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary><p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p></details>
          ))}
        </div>

        {/* CTA */}
        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2rem","text-align":"center","margin-bottom":"2rem"}}>
          <h2 style={{color:"#fff","font-size":"1.3rem","font-weight":"800","margin-bottom":"0.6rem"}}>Need P91 Alloy Steel Pipes?</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.25rem","font-size":"0.92rem"}}>IBR Form III-C certified. Sumitomo, Vallourec, ISMT mills. Matching fittings + flanges + welding consumables.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.7rem 1.5rem","border-radius":"8px","text-decoration":"none","font-size":"0.92rem"}}>Send Enquiry →</a>
          </div>
        </div>

        <h3 style={{"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem"}}>Related Articles & Products</h3>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(200px,1fr))",gap:"0.75rem"}}>
          {[{href:"/blog/sa-516-carbon-steel-plate-guide",label:"SA 516 Plate Guide"},{href:"/blog/inconel-625-guide",label:"Inconel 625 Guide"},{href:"/blog/nace-hic-steel-plates-guide",label:"NACE HIC Plates"},{href:"/ss-pipe-supplier-vadodara",label:"SS Pipe Supplier Vadodara"},{href:"/duplex-steel-supplier-vadodara",label:"Duplex Steel Vadodara"}].map(l => (
            <a href={l.href} style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"8px",padding:"0.75rem 1rem","font-size":"0.85rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>
      
        <RelatedPages currentPath="/blog/p91-alloy-steel-guide" />
      </main>

      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}>
        <p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — P91 Alloy Steel Pipe Supplier India | Engineering Material Supplier | Vadodara</p>
        <p><a href="tel:+919998280619" style={{color:"#E8821A"}}>+91 99982 80619</a> | <a href="https://www.creativemetalind.com" style={{color:"#E8821A"}}>creativemetalind.com</a></p>
      </footer>
    </>
  );
}
