/**
 * /ss-pipe-supplier
 * 
 * PRIMARY KEYWORD: "ss pipe supplier"
 * Commercial landing page for Creative Metal Industries' stainless-steel pipe enquiries
 * Target audience: Procurement managers, engineers, contractors, industrial buyers
 * Search intent: Commercial / transactional
 */

import { Title, Meta, Link } from "@solidjs/meta";
import { RelatedPages } from "../components/RelatedPages";

const GRADE_COMPARE: string[][] = [
  ["Property", "SS 304", "SS 304L", "SS 316", "SS 316L"],
  ["Chromium (%)", "18–20", "18–20", "16–18", "16–18"],
  ["Nickel (%)", "8–10.5", "8–12", "10–14", "10–14"],
  ["Molybdenum (%)", "—", "—", "2–3", "2–3"],
  ["Carbon max (%)", "0.08", "0.030", "0.08", "0.030"],
  ["Corrosion Resistance", "Good", "Good", "Excellent", "Excellent"],
  ["Chloride Resistance", "Moderate", "Moderate", "High", "High"],
  ["Cost", "Lower", "Lower", "Higher", "Higher"],
  ["Typical Use", "Food, dairy, general", "Welded fabrication", "Marine, chemical", "Pharmaceutical, chloride service"],
];

const SEAMLESS_VS_WELDED: string[][] = [
  ["Factor", "Seamless SS Pipe", "Welded SS Pipe"],
  ["Manufacturing", "Pierced from solid billet", "Welded from coil/strip (ERW/EFW)"],
  ["Pressure Rating", "Higher pressure capability", "Suitable for low-medium pressure"],
  ["Cost", "Higher cost", "More economical"],
  ["Size Availability", "6NB–600NB (limited above 16\")", "6NB–1200NB (better for large sizes)"],
  ["Typical Applications", "High pressure, critical service", "General piping, low pressure, architectural"],
];

const FAQs = [
  {
    q: "What types of stainless steel pipes can I enquire about?",
    a: "Creative Metal Industries supplies stainless-steel seamless and welded pipes for industrial and commercial requirements. Include the required pipe type, grade, specification, size and quantity so the team can confirm availability for your order.",
  },
  {
    q: "Which SS pipe grades can I enquire about?",
    a: "Our stainless-steel pipe range includes SS 304, 304L, 316, 316L, 317L, 321, 310/310S, 347 and 904L, as well as Duplex 2205 and Super Duplex 2507. Confirm the exact grade and availability against your project specification.",
  },
  {
    q: "What sizes and schedules can I request?",
    a: "Pipe enquiries can cover sizes from 6NB to 600NB and schedules from SCH 5S to XXS. Confirm the required dimensions and current availability with the sales team; the stated range is not a stock commitment.",
  },
  {
    q: "Which standards and documents should I specify?",
    a: "State the governing product standard and any inspection or documentation requirements in your purchase specification. Include any MTC, IBR or NACE requirements in your enquiry so the team can confirm what applies to the specific grade and order.",
  },
  {
    q: "How do I request a quotation?",
    a: "Call, use WhatsApp or submit our enquiry form. Include grade, seamless or welded type, size, schedule or wall thickness, quantity, required documents and delivery location so the team can respond to your requirement.",
  },
];

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.creativemetalind.com" },
        { "@type": "ListItem", position: 2, name: "SS Pipe Supplier", item: "https://www.creativemetalind.com/ss-pipe-supplier" },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://www.creativemetalind.com/ss-pipe-supplier",
      url: "https://www.creativemetalind.com/ss-pipe-supplier",
      name: "SS Pipe Supplier in India | Creative Metal Industries",
      description: "Enquire about stainless-steel seamless and welded pipes from Creative Metal Industries. Share your grade, size, schedule and quantity to request a quotation.",
      isPartOf: { "@id": "https://www.creativemetalind.com/#website" },
      about: { "@id": "https://www.creativemetalind.com/#organization" },
      primaryImageOfPage: "https://www.creativemetalind.com/img/ss_seamless_pipes.jpeg",
    },
  ],
});

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

const H2 = {
  "font-size": "1.4rem",
  "font-weight": "700",
  color: "#111827",
  margin: "2.5rem 0 1rem",
  "border-bottom": "2px solid #E8821A",
  "padding-bottom": "0.5rem",
} as const;

export default function SSPipeSupplierPage() {
  return (
    <>
      <Title>SS Pipe Supplier in India | Stainless Steel Seamless &amp; Welded Pipes</Title>
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://www.creativemetalind.com/ss-pipe-supplier" />
      <Meta name="robots" content="index, follow, max-image-preview:large" />
      <Meta name="description" content="Enquire about stainless-steel seamless and welded pipes from Creative Metal Industries. Send your grade, size, schedule and quantity for a quote." />
      <Link rel="canonical" href="https://www.creativemetalind.com/ss-pipe-supplier" />
      <Meta property="og:title" content="SS Pipe Supplier in India | Creative Metal Industries" />
      <Meta property="og:description" content="Enquire about stainless-steel seamless and welded pipes. Share your grade, size, schedule and quantity to request a quote." />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="SS Pipe Supplier in India | Creative Metal Industries" />
      <Meta name="twitter:description" content="Send your stainless-steel pipe grade, type, size and quantity to Creative Metal Industries to request a quotation." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />

      <nav style={{background:"#fff","border-bottom":"1px solid #e5e7eb",padding:"1rem 1.5rem",display:"flex","align-items":"center",gap:"1rem"}}>
        <img src="/logo_cmi.png" alt="Creative Metal Industries" width="140" height="71" />
        <div style={{flex:1}} />
        <a href="tel:+919998280619" class="btn btn-outline" style={{"font-size":"0.85rem",padding:"0.45rem 1rem"}}>📞 Call</a>
        <a href="/#contact" class="btn btn-primary" style={{"font-size":"0.85rem",padding:"0.45rem 1rem"}}>Get Quote</a>
      </nav>
      <div style={{background:"#f9fafb","border-bottom":"1px solid #e5e7eb",padding:"0.6rem 1.5rem","font-size":"0.82rem",color:"#6b7280"}}>
        <a href="/" style={{color:"#E8821A","text-decoration":"none"}}>Home</a> <span style={{margin:"0 0.5rem"}}>›</span>
        <span>SS Pipe Supplier</span>
      </div>

      <main style={{"max-width":"960px",margin:"0 auto",padding:"3rem 1.5rem"}}>
        <h1 style={{"font-size":"clamp(1.8rem,4vw,2.8rem)","font-weight":"800",color:"#111827","margin-bottom":"1.5rem"}}>SS Pipe Supplier</h1>

        <div style={{display:"flex",gap:"1.5rem","align-items":"flex-start","flex-wrap":"wrap","margin-bottom":"1.5rem"}}>
          <img
            src="/img/ss_seamless_pipes.jpeg"
            alt="Stainless steel pipes for industrial supply"
            width="274"
            height="184"
            loading="eager"
            decoding="async"
            style={{"border-radius":"10px",border:"1px solid #e5e7eb","flex-shrink":"0"}}
          />
          <p style={{"font-size":"1.05rem",color:"#374151","line-height":"1.8",margin:0,"min-width":"280px",flex:"1"}}>
            Creative Metal Industries supplies stainless-steel seamless and welded pipes from Vadodara for industrial and commercial requirements. Share your grade, standard, size, schedule, quantity and delivery location to request a quotation and confirm availability.
          </p>
        </div>

        <p style={{"font-size":"1rem","color":"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          For our broader local stainless-steel product range, visit the <a href="/stainless-steel-supplier-vadodara" style={{color:"#E8821A","font-weight":"600"}}>Stainless Steel Supplier in Vadodara</a> page. This page focuses on pipe types, grades, dimensions and the information needed to request a quote.
        </p>

        <h2 style={H2}>Stainless Steel Pipe Supply in India</h2>
        <p style={{"font-size":"1rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>
          Based in Vadodara, Gujarat, Creative Metal Industries supplies stainless-steel pipes to industrial and commercial buyers. Send your project specification and delivery destination for an order-specific quotation. Product availability, documentation and delivery terms are confirmed for each requirement.
        </p>

        <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.5rem","margin-bottom":"2rem"}}>
          <h3 style={{"font-size":"1.05rem","font-weight":"600",color:"#111827","margin-bottom":"1rem"}}>Details to Include in Your Pipe Enquiry</h3>
          <div style={{"display":"grid","grid-template-columns":"repeat(auto-fit,minmax(240px,1fr))",gap:"1rem"}}>
            {[
              {title:"Pipe type",desc:"Specify seamless or welded as required by the project"},
              {title:"Grade",desc:"Provide the grade designation from your material specification"},
              {title:"Dimensions",desc:"Include nominal size, schedule or wall thickness, and length"},
              {title:"Product standard",desc:"Name the governing ASTM or other project specification"},
              {title:"Quantity",desc:"State the number of lengths or required total quantity"},
              {title:"Documentation",desc:"List MTC, inspection and testing requirements for confirmation"},
              {title:"Delivery",desc:"Provide delivery destination and requested date"},
              {title:"Processing",desc:"Mention end finish or any required processing"},
            ].map(item => (
              <div style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"8px",padding:"1rem"}}>
                <h4 style={{"font-size":"0.9rem","font-weight":"600",color:"#111827","margin-bottom":"0.35rem"}}>✓ {item.title}</h4>
                <p style={{"font-size":"0.82rem",color:"#6b7280",margin:0,"line-height":"1.5"}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 style={H2}>SS Pipe Grades and Product Specifications</h2>
        <p style={{"font-size":"1rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Our pipe range covers austenitic and duplex stainless-steel grades. Confirm the exact grade, standard, dimensions and documentation against your purchase specification before placing an order.
        </p>

        <h3 style={{"font-size":"1.15rem","font-weight":"700",color:"#111827",margin:"1.75rem 0 0.75rem"}}>SS Pipe Grades</h3>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          We supply stainless-steel pipe grades including <strong>SS 304, 304L, 316, 316L, 317L, 321, 310S, 347 and 904L</strong>, plus Duplex 2205 and Super Duplex 2507. Confirm the requested grade, pipe standard and availability against your project specification.
        </p>

        <h2 style={H2}>Seamless and Welded SS Pipes</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Creative Metal Industries supplies seamless and welded stainless-steel pipes. Specify the required manufacturing type from your project documents. If your specification permits alternatives, state that in your enquiry. Selection should follow the project design and service requirements.
        </p>

        <h2 style={H2}>SS Pipe Sizes and Schedules</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>
          Enquiries can cover pipe sizes from 6NB to 600NB and schedules from SCH 5S to XXS. Confirm the size, wall thickness or schedule, length and end preparation required for your project; availability depends on the specific order.
        </p>
        <ul style={{"font-size":"0.9rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem","padding-left":"1.5rem"}}>
          <li><strong>SCH 5S:</strong> Extra light wall for low-pressure service</li>
          <li><strong>SCH 10S:</strong> Light wall for chemical plants</li>
          <li><strong>SCH 40S:</strong> Standard wall for general industrial piping</li>
          <li><strong>SCH 80S:</strong> Extra strong for higher pressures</li>
          <li><strong>SCH 160:</strong> Heavy wall for high-pressure service</li>
          <li><strong>XXS:</strong> Double extra strong for extreme pressure</li>
        </ul>

        <h2 style={H2}>Standards and Documentation</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Our product range references ASTM A312 for austenitic stainless-steel pipe and ASTM A790 for duplex pipe. Identify the governing specification in your enquiry and ask the sales team to confirm the standard and supporting documents for your requested product.
        </p>

        <h3 style={{"font-size":"1.15rem","font-weight":"700",color:"#111827",margin:"1.75rem 0 0.75rem"}}>Material Test Certificates and Inspection Requirements</h3>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>
          We can review Mill Test Certificate (MTC), inspection and testing requirements against the requested material and order. Include the required certificate type and inspection scope in your RFQ so the team can confirm applicable documentation.
        </p>
        <ul style={{"font-size":"0.9rem",color:"#374151","line-height":"1.8","margin-bottom":"2rem","padding-left":"1.5rem"}}>
          <li>Grade and heat/lot identification, where applicable</li>
          <li>Product standard and dimensional requirements</li>
          <li>Required chemical and mechanical test documentation</li>
          <li>Inspection and testing scope required by the order</li>
        </ul>

        <h2 style={H2}>SS 304 and SS 316L Pipe Information</h2>
        
        <h3 style={{"font-size":"1.15rem","font-weight":"700",color:"#111827",margin:"1.75rem 0 0.75rem"}}>SS 304 Stainless Steel Pipe</h3>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          <strong>SS 304</strong> (UNS S30400) is the most widely used austenitic stainless steel seamless pipes grade. With 18-20% chromium and 8-10.5% nickel, it provides excellent corrosion resistance in mild environments, good formability, and ease of fabrication. SS 304 pipe is ideal for food processing, dairy equipment, architectural applications, and general chemical service not involving chlorides or aggressive acids.
        </p>

        <h3 style={{"font-size":"1.15rem","font-weight":"700",color:"#111827",margin:"1.75rem 0 0.75rem"}}>SS 316L Stainless Steel Pipe</h3>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"2rem"}}>
          <strong>SS 316L</strong> (UNS S31603) combines the superior corrosion resistance and low-carbon advantage of 316. With maximum 0.030% carbon, 316L resists sensitization during welding, making it the universal choice for welded pharmaceutical, biotech, and food processing equipment. 316L pipe is also preferred for seawater piping, desalination plants, coastal chemical facilities, and any chloride-containing environment where welded construction is used.
        </p>

        <h2 style={H2}>304 vs 316 Stainless Steel Pipe</h2>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>
          The choice between <strong>304 vs 316 stainless steel</strong> is one of the most common material selection decisions. Here's a detailed comparison:
        </p>

        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"1.5rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.85rem","min-width":"640px"}}>
            <thead>
              <tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}>
                {GRADE_COMPARE[0].map(h => <th style={{padding:"0.7rem 1rem","text-align":h==="Property"?"left":"center"}}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {GRADE_COMPARE.slice(1).map((r,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}>
                  <td style={{padding:"0.6rem 1rem","font-weight":"600"}}>{r[0]}</td>
                  <td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[1]}</td>
                  <td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[2]}</td>
                  <td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[3]}</td>
                  <td style={{padding:"0.6rem 1rem","text-align":"center"}}>{r[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{background:"#eff6ff","border-left":"4px solid #3b82f6",padding:"1rem","border-radius":"6px","margin-bottom":"2rem"}}>
          <p style={{margin:0,color:"#1e3a8a","font-size":"0.9rem","line-height":"1.7"}}>
            <strong>Bottom line:</strong> Use SS 304 for general corrosion service, food processing, and non-chloride environments where cost is a consideration. Use SS 316 (or 316L) wherever chlorides are present, for marine/coastal installations, pharmaceutical applications, and aggressive chemical service. When welding is involved, specify L grades (304L or 316L) to prevent sensitization.
          </p>
        </div>

        <h2 style={H2}>Seamless vs Welded Stainless Steel Pipe</h2>
        
        <h3 style={{"font-size":"1.15rem","font-weight":"700",color:"#111827",margin:"1.75rem 0 0.75rem"}}>Seamless Stainless Steel Pipe</h3>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Seamless stainless steel pipes are manufactured by piercing a solid round billet at elevated temperature (1200°C+) to create a hollow shell, which is then rolled, stretched, and sized to final dimensions. Because there is no weld seam, seamless pipes offer uniform mechanical properties in all directions and can handle higher pressures, ensuring <strong>customer satisfaction</strong>. Seamless pipe is preferred for high-pressure systems, critical applications, and services where weld integrity is a concern.
        </p>

        <h3 style={{"font-size":"1.15rem","font-weight":"700",color:"#111827",margin:"1.75rem 0 0.75rem"}}>Welded Stainless Steel Pipe</h3>
        <p style={{"font-size":"0.95rem",color:"#374151","line-height":"1.8","margin-bottom":"1.5rem"}}>
          Welded stainless steel pipe is formed from stainless steel coil or strip, which is formed into a tubular shape and welded longitudinally using Electric Resistance Welding (ERW) or Electric Fusion Welding (EFW). Welded pipe offers excellent dimensional consistency, is more economical than seamless (especially in larger sizes), and is suitable for low to medium pressure applications that require <strong>high corrosion resistance</strong>.
        </p>

        <div style={{overflow:"auto",border:"1px solid #e5e7eb","border-radius":"10px","margin-bottom":"2rem"}}>
          <table style={{width:"100%","border-collapse":"collapse","font-size":"0.88rem","min-width":"600px"}}>
            <thead>
              <tr style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)",color:"#fff"}}>
                {SEAMLESS_VS_WELDED[0].map(h => <th style={{padding:"0.7rem 1rem","text-align":"left"}}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {SEAMLESS_VS_WELDED.slice(1).map((r,i) => (
                <tr style={{background:i%2===0?"#fff":"#f9fafb"}}>
                  <td style={{padding:"0.6rem 1rem","font-weight":"600","white-space":"nowrap"}}>{r[0]}</td>
                  <td style={{padding:"0.6rem 1rem"}}>{r[1]}</td>
                  <td style={{padding:"0.6rem 1rem"}}>{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={H2}>Industries and Applications</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(250px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {icon:"🧪",name:"Chemical Processing",desc:"Reactors, process piping, heat exchangers handling acids and corrosive chemicals"},
            {icon:"🍶",name:"Food & Beverage",desc:"Hygienic piping for dairy, breweries, beverage processing facilities in the food industry"},
            {icon:"💊",name:"Pharmaceutical",desc:"WFI, purified water, CIP/SIP systems requiring high purity (typically 316L electropolished)"},
            {icon:"🛢️",name:"Oil & Gas",desc:"Process piping, instrumentation tubing, offshore platforms, refineries"},
            {icon:"💧",name:"Water Treatment",desc:"Desalination plants, water distribution, wastewater treatment systems"},
            {icon:"🏗️",name:"Construction",desc:"Structural applications, handrails, architectural facades contributing to industrial growth"},
            {icon:"⚡",name:"Power Generation",desc:"Boiler tubes, steam piping, condenser tubes, heat recovery systems"},
            {icon:"🚗",name:"Automotive",desc:"Exhaust systems, catalytic converters, fuel lines, emissions control"},
            {icon:"🌊",name:"Marine",desc:"Seawater piping, ballast systems, deck equipment, offshore structures providing long service life"},
          ].map(ind => (
            <div style={{background:"#f9fafb",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1.25rem"}}>
              <span style={{"font-size":"1.5rem"}}>{ind.icon}</span>
              <h3 style={{"font-size":"0.92rem","font-weight":"700",color:"#111827",margin:"0.5rem 0 0.25rem"}}>{ind.name}</h3>
              <p style={{"font-size":"0.84rem",color:"#6b7280",margin:0,"line-height":"1.5"}}>{ind.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={H2}>Request a Quote for Stainless Steel Pipes</h2>
        <p style={{"font-size":"1rem",color:"#374151","line-height":"1.8","margin-bottom":"1rem"}}>
          To receive an accurate, complete quotation from a <strong>stainless steel pipe supplier</strong>, provide the following information in your Request for Quotation (RFQ):
        </p>

        <div style={{background:"#fff7ed",border:"1px solid #fed7aa","border-radius":"10px",padding:"1.5rem 2rem","margin-bottom":"2rem"}}>
          <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(260px,1fr))",gap:"0.5rem"}}>
            {[
              "Material grade (e.g., TP304, TP316L, TP321)",
              "Seamless or welded pipe",
              "Nominal pipe size (e.g., 2 inch NB, 100NB)",
              "Schedule or wall thickness (e.g., SCH 40S, SCH 80S)",
              "Length required (random length, fixed 6m, or cut-to-length)",
              "Quantity (number of pieces or total length in meters)",
              "ASTM/ASME specification (e.g., ASTM A312, ASTM A790)",
              "Surface finish (pickled & passivated, bright annealed, polished)",
              "End connection (plain end, beveled, threaded NPT/BSP)",
              "Mill Test Certificate (MTC) requirement (EN 10204 3.1 or 3.2)",
              "Third-party inspection (specify agency: DNV, TUV, SGS, etc.)",
              "Delivery location (city, state, country)",
              "Required delivery date",
              "Shipping terms/Incoterms (EXW, FOB, CIF, DDP, etc.)",
            ].map(item => (
              <div style={{display:"flex","align-items":"start"}}>
                <span style={{color:"#ea580c","font-weight":"bold","margin-right":"0.5rem","flex-shrink":"0"}}>✓</span>
                <span style={{"font-size":"0.88rem",color:"#431407"}}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <p style={{"font-size":"0.88rem",color:"#6b7280","line-height":"1.7","margin-bottom":"2rem"}}>
          Include complete technical and delivery details to help the team review your requirement. Pricing, lead time and order terms are confirmed in the quotation.
        </p>


        <h2 style={H2}>Why Enquire with Creative Metal Industries</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(240px,1fr))",gap:"1rem","margin-bottom":"2rem"}}>
          {[
            {icon:"📍",title:"Vadodara Location",desc:"Creative Metal Industries is based in Vadodara, Gujarat. Contact the team to confirm the relevant office or godown/yard location."},
            {icon:"🧰",title:"Pipe Product Range",desc:"We supply stainless-steel seamless and welded pipes; confirm the type and dimensions for your order."},
            {icon:"📋",title:"Specification-Led Enquiry",desc:"Submit grade, product standard, dimensions, quantity and documentation requirements."},
            {icon:"☎️",title:"Contact the Sales Team",desc:"Request a quote by telephone, WhatsApp or the website enquiry form."},
          ].map(benefit => (
            <div style={{display:"flex","align-items":"start",gap:"0.75rem"}}>
              <span style={{"font-size":"1.5rem","flex-shrink":"0"}}>{benefit.icon}</span>
              <div>
                <h3 style={{"font-size":"0.9rem","font-weight":"600",color:"#111827",margin:"0 0 0.25rem"}}>{benefit.title}</h3>
                <p style={{"font-size":"0.82rem",color:"#6b7280",margin:0,"line-height":"1.5"}}>{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 style={H2}>Frequently Asked Questions — SS Pipe Supplier</h2>
        <div style={{display:"flex","flex-direction":"column",gap:"0.75rem","margin-bottom":"3rem"}}>
          {FAQs.map(f => (
            <details style={{background:"#fff",border:"1px solid #e5e7eb","border-radius":"10px",padding:"1rem 1.25rem"}}>
              <summary style={{"font-weight":"700","font-size":"0.92rem",color:"#111827",cursor:"pointer"}}>{f.q}</summary>
              <p style={{"font-size":"0.88rem",color:"#374151","line-height":"1.7","margin-top":"0.6rem","margin-bottom":0}}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,#E8821A,#d85c2a)","border-radius":"12px",padding:"2.5rem","text-align":"center"}}>
          <h2 style={{color:"#fff","font-size":"1.4rem","font-weight":"800","margin-bottom":"0.75rem"}}>Request a Stainless Steel Pipe Quote</h2>
          <p style={{color:"rgba(255,255,255,0.9)","margin-bottom":"1.5rem"}}>Ready to source stainless steel pipes? Contact us with your requirements—grade, size, schedule, quantity, applicable standards, and delivery location.</p>
          <div style={{display:"flex",gap:"1rem","justify-content":"center","flex-wrap":"wrap"}}>
            <a href="tel:+919998280619" style={{background:"#fff",color:"#E8821A","font-weight":"800",padding:"0.75rem 1.75rem","border-radius":"8px","text-decoration":"none"}}>📞 +91 99982 80619</a>
            <a href="https://wa.me/919998280619" target="_blank" rel="noopener" style={{background:"#25D366",color:"#fff","font-weight":"800",padding:"0.75rem 1.75rem","border-radius":"8px","text-decoration":"none"}}>💬 WhatsApp</a>
            <a href="/#contact" style={{background:"rgba(255,255,255,0.15)",color:"#fff",border:"2px solid rgba(255,255,255,0.5)","font-weight":"700",padding:"0.75rem 1.75rem","border-radius":"8px","text-decoration":"none"}}>Send Enquiry →</a>
          </div>
        </div>

        <h2 style={{...H2,margin:"3rem 0 1rem"}}>Related Stainless Steel Pipe Resources</h2>
        <div style={{display:"grid","grid-template-columns":"repeat(auto-fit,minmax(220px,1fr))",gap:"0.75rem","margin-bottom":"2rem"}}>
          {[
            {href:"/stainless-steel-supplier-vadodara",label:"Stainless Steel Supplier in Vadodara"},
            {href:"/ss-304-316l-pipe-supplier-india",label:"SS 304 & 316L Pipe Supplier India"},
            {href:"/ss-seamless-pipe-supplier-india",label:"SS Seamless Pipe Supplier India"},
            {href:"/ss-321-pipe-supplier-india",label:"SS 321 Pipe Supplier India"},
            {href:"/ss-310-pipe-supplier-india",label:"SS 310 Pipe Supplier India"},
            {href:"/duplex-steel-supplier-vadodara",label:"Duplex 2205 Supplier India"},
          ].map(l => (
            <a href={l.href} style={{background:"#fff8f0",border:"1px solid #fde8cc","border-radius":"8px",padding:"0.85rem 1rem","font-size":"0.88rem","font-weight":"600",color:"#E8821A","text-decoration":"none"}}>{l.label} →</a>
          ))}
        </div>

        <RelatedPages currentPath="/ss-pipe-supplier" />
      </main>
      <footer style={{background:"#111827",color:"#9ca3af",padding:"2rem 1.5rem","text-align":"center","font-size":"0.82rem"}}><p><strong style={{color:"#fff"}}>Creative Metal Industries</strong> — SS Pipe Supplier in India | <a href="/stainless-steel-supplier-vadodara" style={{color:"#E8821A"}}>Stainless steel products in Vadodara</a></p></footer>
    </>
  );
}
