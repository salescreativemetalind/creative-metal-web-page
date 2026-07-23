/**
 * AllPagesLinks — SEO internal links section for homepage
 * Lists ALL 410+ new pages organized by category
 */

const linkStyle = {background:"#fff",border:"1px solid #e5e7eb","border-radius":"6px",padding:"0.35rem 0.7rem","font-size":"0.78rem","font-weight":"600",color:"#374151","text-decoration":"none"};
const headingStyle = {"font-size":"1rem","font-weight":"700",color:"#111827","margin-bottom":"0.75rem","margin-top":"1.5rem"};
const wrapStyle = {display:"flex","flex-wrap":"wrap",gap:"0.4rem","margin-bottom":"1rem"};

export function AllPagesLinks() {
  return (
    <>
      <h3 style={headingStyle}>💰 Price &amp; Rate Guides</h3>
      <div style={wrapStyle}>
        {PRICE_LINKS.map(l => <a href={l.href} style={linkStyle}>{l.label}</a>)}
      </div>

      <h3 style={headingStyle}>⚖️ Weight Charts &amp; Calculators</h3>
      <div style={wrapStyle}>
        {WEIGHT_LINKS.map(l => <a href={l.href} style={linkStyle}>{l.label}</a>)}
      </div>

      <h3 style={headingStyle}>⚔️ Material Comparisons</h3>
      <div style={wrapStyle}>
        {COMPARISON_LINKS.map(l => <a href={l.href} style={linkStyle}>{l.label}</a>)}
      </div>

      <h3 style={headingStyle}>📋 Specifications &amp; Standards</h3>
      <div style={wrapStyle}>
        {SPEC_LINKS.map(l => <a href={l.href} style={linkStyle}>{l.label}</a>)}
      </div>

      <h3 style={headingStyle}>🏭 Industry Application Guides</h3>
      <div style={wrapStyle}>
        {INDUSTRY_LINKS.map(l => <a href={l.href} style={linkStyle}>{l.label}</a>)}
      </div>

      <h3 style={headingStyle}>🔧 How-To &amp; Process Guides</h3>
      <div style={wrapStyle}>
        {HOWTO_LINKS.map(l => <a href={l.href} style={linkStyle}>{l.label}</a>)}
      </div>

      <h3 style={headingStyle}>📚 Material Knowledge</h3>
      <div style={wrapStyle}>
        {KNOWLEDGE_LINKS.map(l => <a href={l.href} style={linkStyle}>{l.label}</a>)}
      </div>

      <h3 style={headingStyle}>🛒 Buyer Guides &amp; Procurement</h3>
      <div style={wrapStyle}>
        {BUYER_LINKS.map(l => <a href={l.href} style={linkStyle}>{l.label}</a>)}
      </div>

      <h3 style={headingStyle}>📏 Size Charts &amp; Dimensions</h3>
      <div style={wrapStyle}>
        {SIZE_LINKS.map(l => <a href={l.href} style={linkStyle}>{l.label}</a>)}
      </div>

      <h3 style={headingStyle}>❓ FAQ &amp; Questions</h3>
      <div style={wrapStyle}>
        {FAQ_LINKS.map(l => <a href={l.href} style={linkStyle}>{l.label}</a>)}
      </div>

      <h3 style={headingStyle}>📋 Case Studies</h3>
      <div style={wrapStyle}>
        {CASE_LINKS.map(l => <a href={l.href} style={linkStyle}>{l.label}</a>)}
      </div>
    </>
  );
}

const PRICE_LINKS = [
  {href:"/blog/ss-304-pipe-price-per-kg",label:"SS 304 Pipe Price"},
  {href:"/blog/ss-316l-pipe-price-per-kg",label:"SS 316L Pipe Price"},
  {href:"/blog/ss-304-sheet-price-per-kg",label:"SS 304 Sheet Price"},
  {href:"/blog/ss-316-sheet-price-per-kg",label:"SS 316 Sheet Price"},
  {href:"/blog/ss-304-plate-price-india",label:"SS 304 Plate Price"},
  {href:"/blog/ss-316l-plate-price-india",label:"SS 316L Plate Price"},
  {href:"/blog/duplex-2205-pipe-price-india",label:"Duplex 2205 Pipe Price"},
  {href:"/blog/super-duplex-2507-pipe-price",label:"Super Duplex 2507 Price"},
  {href:"/blog/duplex-2205-plate-price",label:"Duplex 2205 Plate Price"},
  {href:"/blog/inconel-625-pipe-price-india",label:"Inconel 625 Pipe Price"},
  {href:"/blog/inconel-600-pipe-price",label:"Inconel 600 Pipe Price"},
  {href:"/blog/monel-400-pipe-price-india",label:"Monel 400 Pipe Price"},
  {href:"/blog/hastelloy-c276-pipe-price",label:"Hastelloy C276 Price"},
  {href:"/blog/titanium-pipe-price-india",label:"Titanium Pipe Price"},
  {href:"/blog/copper-nickel-pipe-price",label:"CuNi Pipe Price"},
  {href:"/blog/alloy-20-pipe-price-india",label:"Alloy 20 Pipe Price"},
  {href:"/blog/alloy-steel-p91-pipe-price",label:"P91 Pipe Price"},
  {href:"/blog/alloy-steel-p22-pipe-price",label:"P22 Pipe Price"},
  {href:"/blog/alloy-steel-p11-pipe-price",label:"P11 Pipe Price"},
  {href:"/blog/carbon-steel-a106-pipe-price",label:"A106 CS Pipe Price"},
  {href:"/blog/erw-pipe-price-india",label:"ERW Pipe Price"},
  {href:"/blog/api-5l-pipe-price-india",label:"API 5L Pipe Price"},
  {href:"/blog/ss-pipe-price-list-india",label:"SS Pipe Price List 2026"},
  {href:"/blog/ss-fittings-price-india",label:"SS Fittings Price"},
  {href:"/blog/ss-flange-price-india",label:"SS Flange Price"},
  {href:"/blog/forged-fittings-price-india",label:"Forged Fittings Price"},
  {href:"/blog/sa-516-plate-price-india",label:"SA 516 Plate Price"},
  {href:"/blog/sa-387-plate-price-india",label:"SA 387 Plate Price"},
  {href:"/blog/boiler-tube-price-india",label:"Boiler Tube Price"},
  {href:"/blog/ss-round-bar-price-india",label:"SS Round Bar Price"},
  {href:"/blog/ms-angle-price-today",label:"MS Angle Price Today"},
  {href:"/blog/ms-channel-price-today",label:"MS Channel Price Today"},
  {href:"/blog/ms-beam-price-today",label:"MS Beam Price Today"},
  {href:"/blog/ms-plate-price-vadodara",label:"MS Plate Price Vadodara"},
  {href:"/blog/tmt-bar-price-today-gujarat",label:"TMT Bar Price Gujarat"},
  {href:"/blog/incoloy-800-price-india",label:"Incoloy 800 Price"},
  {href:"/blog/nickel-200-price-india",label:"Nickel 200 Price"},
  {href:"/blog/hardox-plate-price-india",label:"Hardox Plate Price"},
  {href:"/blog/nickel-lme-price-impact-ss",label:"Nickel LME Impact"},
  {href:"/blog/steel-price-forecast-india-2026",label:"Steel Price Forecast 2026"},
];

const WEIGHT_LINKS = [
  {href:"/blog/pipe-weight-calculator",label:"Pipe Weight Calculator"},
  {href:"/blog/steel-weight-calculator",label:"Steel Weight Calculator"},
  {href:"/blog/ss-pipe-weight-chart",label:"SS Pipe Weight Chart"},
  {href:"/blog/cs-pipe-weight-chart",label:"CS Pipe Weight Chart"},
  {href:"/blog/alloy-steel-pipe-weight-chart",label:"Alloy Pipe Weight"},
  {href:"/blog/erw-pipe-weight-chart",label:"ERW Pipe Weight Chart"},
  {href:"/blog/ms-angle-weight-chart",label:"MS Angle Weight"},
  {href:"/blog/ismc-channel-weight-chart",label:"ISMC Weight Chart"},
  {href:"/blog/ismb-beam-weight-chart",label:"ISMB Weight Chart"},
  {href:"/blog/tmt-bar-weight-chart",label:"TMT Bar Weight"},
  {href:"/blog/ms-flat-bar-weight-chart",label:"MS Flat Bar Weight"},
  {href:"/blog/ms-round-bar-weight-chart",label:"MS Round Bar Weight"},
  {href:"/blog/ms-square-bar-weight-chart",label:"MS Square Bar Weight"},
  {href:"/blog/ss-plate-weight-calculator",label:"SS Plate Weight Calc"},
  {href:"/blog/ms-plate-weight-calculator",label:"MS Plate Weight Calc"},
  {href:"/blog/ss-round-bar-weight-chart",label:"SS Round Bar Weight"},
  {href:"/blog/flange-weight-chart",label:"Flange Weight Chart"},
  {href:"/blog/gi-pipe-weight-chart",label:"GI Pipe Weight"},
  {href:"/blog/copper-nickel-pipe-weight",label:"CuNi Pipe Weight"},
  {href:"/blog/inconel-pipe-weight-chart",label:"Inconel Pipe Weight"},
  {href:"/blog/duplex-pipe-weight-chart",label:"Duplex Pipe Weight"},
  {href:"/blog/titanium-pipe-weight-chart",label:"Titanium Pipe Weight"},
  {href:"/blog/monel-pipe-weight-chart",label:"Monel Pipe Weight"},
  {href:"/blog/hastelloy-pipe-weight-chart",label:"Hastelloy Pipe Weight"},
  {href:"/blog/pipe-elbow-weight-chart",label:"Pipe Elbow Weight"},
  {href:"/blog/ss-sheet-weight-calculator",label:"SS Sheet Weight Calc"},
  {href:"/blog/hollow-section-weight-chart",label:"Hollow Section Weight"},
  {href:"/blog/chequered-plate-weight-chart",label:"Chequered Plate Weight"},
  {href:"/blog/ss-angle-weight-chart",label:"SS Angle Weight"},
  {href:"/blog/pipe-volume-calculator",label:"Pipe Volume Calculator"},
];

const COMPARISON_LINKS = [
  {href:"/blog/carbon-steel-vs-stainless-steel",label:"CS vs SS"},
  {href:"/blog/ss-304-vs-ss-316-difference",label:"SS 304 vs 316"},
  {href:"/blog/alloy-steel-vs-carbon-steel",label:"Alloy vs Carbon"},
  {href:"/blog/duplex-2205-vs-inconel-625",label:"Duplex vs Inconel"},
  {href:"/blog/astm-vs-asme-difference",label:"ASTM vs ASME"},
  {href:"/blog/is-1239-vs-is-3589",label:"IS 1239 vs IS 3589"},
  {href:"/blog/ss-304-vs-ss-202",label:"SS 304 vs 202"},
  {href:"/blog/seamless-vs-spiral-welded-pipe",label:"Seamless vs Spiral"},
  {href:"/blog/ss-pipe-vs-gi-pipe",label:"SS vs GI Pipe"},
  {href:"/blog/forged-vs-cast-fittings",label:"Forged vs Cast"},
  {href:"/blog/indian-mill-vs-imported-pipe",label:"Indian vs Imported"},
  {href:"/blog/ss-304-vs-ss-304l",label:"SS 304 vs 304L"},
  {href:"/blog/ss-316-vs-ss-316l",label:"SS 316 vs 316L"},
  {href:"/blog/wn-flange-vs-so-flange",label:"WN vs SO Flange"},
  {href:"/blog/socket-weld-vs-threaded",label:"SW vs Threaded"},
  {href:"/blog/a312-vs-a358-pipe",label:"A312 vs A358"},
  {href:"/blog/duplex-2205-vs-ss-316l",label:"Duplex vs 316L"},
  {href:"/blog/sa516-gr60-vs-gr70",label:"SA516 Gr60 vs Gr70"},
  {href:"/blog/ss-310-vs-ss-304",label:"SS 310 vs 304"},
  {href:"/blog/ss-321-vs-ss-347",label:"SS 321 vs 347"},
  {href:"/blog/inconel-625-vs-inconel-600",label:"Inconel 625 vs 600"},
  {href:"/blog/inconel-625-vs-hastelloy-c276",label:"Inconel vs Hastelloy"},
  {href:"/blog/monel-400-vs-monel-k500",label:"Monel 400 vs K500"},
  {href:"/blog/titanium-vs-stainless-steel",label:"Titanium vs SS"},
  {href:"/blog/duplex-vs-super-duplex",label:"Duplex vs Super Duplex"},
  {href:"/blog/p91-vs-p22-alloy-steel",label:"P91 vs P22"},
  {href:"/blog/p11-vs-p22-difference",label:"P11 vs P22"},
  {href:"/blog/sa-179-vs-sa-192-boiler-tube",label:"SA 179 vs SA 192"},
  {href:"/blog/sa-213-vs-sa-249-tube",label:"SA 213 vs SA 249"},
  {href:"/blog/sa-106-vs-api-5l",label:"A106 vs API 5L"},
  {href:"/blog/rf-vs-ff-vs-rtj-flange",label:"RF vs FF vs RTJ"},
  {href:"/blog/ansi-flange-vs-din-flange",label:"ANSI vs DIN Flange"},
  {href:"/blog/class-150-vs-class-300-flange",label:"Class 150 vs 300"},
  {href:"/blog/schedule-10-vs-schedule-40",label:"SCH 10 vs SCH 40"},
  {href:"/blog/sch-80-vs-sch-160-pipe",label:"SCH 80 vs 160"},
  {href:"/blog/butt-weld-vs-socket-weld",label:"BW vs SW Fittings"},
  {href:"/blog/3000-vs-6000-lb-fittings",label:"3000# vs 6000#"},
  {href:"/blog/nace-mr0175-vs-mr0103",label:"MR0175 vs MR0103"},
  {href:"/blog/psl1-vs-psl2-api-5l",label:"PSL1 vs PSL2"},
  {href:"/blog/hot-rolled-vs-cold-rolled-steel",label:"HR vs CR Steel"},
  {href:"/blog/austenitic-vs-ferritic-stainless",label:"Austenitic vs Ferritic"},
  {href:"/blog/austenitic-vs-martensitic",label:"Austenitic vs Martensitic"},
  {href:"/blog/seamless-vs-welded-ss-pipe",label:"SS Seamless vs Welded"},
  {href:"/blog/a234-wpb-vs-a420-wpl6",label:"WPB vs WPL6"},
  {href:"/blog/cs-plate-vs-alloy-plate",label:"CS vs Alloy Plate"},
  {href:"/blog/fe500-vs-fe500d-tmt",label:"Fe500 vs Fe500D"},
  {href:"/blog/sail-vs-jsw-tmt-bars",label:"SAIL vs JSW TMT"},
  {href:"/blog/ss-304-vs-316-food-industry",label:"304 vs 316 Food"},
  {href:"/blog/copper-nickel-9010-vs-7030",label:"CuNi 90/10 vs 70/30"},
  {href:"/blog/en10204-31-vs-32-certificate",label:"EN10204 3.1 vs 3.2"},
];

const SPEC_LINKS = [
  {href:"/blog/asme-b16-5-flange-dimensions",label:"ASME B16.5 Flanges"},
  {href:"/blog/asme-b16-9-fittings-dimensions",label:"ASME B16.9 Fittings"},
  {href:"/blog/asme-b16-11-forged-fittings",label:"ASME B16.11"},
  {href:"/blog/asme-b16-47-large-flanges",label:"ASME B16.47 Large Flanges"},
  {href:"/blog/asme-b36-10-pipe-dimensions",label:"ASME B36.10 CS Pipe"},
  {href:"/blog/asme-b36-19-ss-pipe-dimensions",label:"ASME B36.19 SS Pipe"},
  {href:"/blog/is-1239-pipe-specification",label:"IS 1239 Specification"},
  {href:"/blog/is-3589-pipe-specification",label:"IS 3589 Specification"},
  {href:"/blog/is-2062-steel-specification",label:"IS 2062 Steel Spec"},
  {href:"/blog/is-1786-tmt-bar-specification",label:"IS 1786 TMT Bar"},
  {href:"/blog/is-808-structural-sections",label:"IS 808 Structural"},
  {href:"/blog/astm-a182-forged-fittings",label:"ASTM A182 Forged"},
  {href:"/blog/astm-a403-buttweld-fittings",label:"ASTM A403 Buttweld"},
  {href:"/blog/astm-a240-ss-plate-spec",label:"ASTM A240 SS Plate"},
  {href:"/blog/astm-a269-tube-specification",label:"ASTM A269 Tube"},
  {href:"/blog/astm-a249-tube-specification",label:"ASTM A249 Tube"},
  {href:"/blog/astm-a335-alloy-pipe-spec",label:"ASTM A335 Alloy Pipe"},
  {href:"/blog/astm-a105-flange-spec",label:"ASTM A105 Flange"},
  {href:"/blog/astm-a106-pipe-specification",label:"ASTM A106 CS Pipe"},
  {href:"/blog/astm-a333-low-temp-pipe",label:"ASTM A333 Low Temp"},
  {href:"/blog/astm-a358-welded-pipe-spec",label:"ASTM A358 EFW"},
  {href:"/blog/astm-a691-pipe-spec",label:"ASTM A691 Pipe"},
  {href:"/blog/astm-a815-duplex-fittings",label:"ASTM A815 Duplex"},
  {href:"/blog/astm-b444-inconel-pipe-spec",label:"ASTM B444 Inconel"},
  {href:"/blog/astm-b574-hastelloy-spec",label:"ASTM B574 Hastelloy"},
  {href:"/blog/astm-b861-titanium-pipe-spec",label:"ASTM B861 Titanium"},
  {href:"/blog/astm-b165-monel-pipe-spec",label:"ASTM B165 Monel"},
  {href:"/blog/astm-b466-copper-nickel-spec",label:"ASTM B466 CuNi"},
  {href:"/blog/api-5l-specification-guide",label:"API 5L Guide"},
  {href:"/blog/api-5ct-casing-specification",label:"API 5CT Casing"},
  {href:"/blog/din-flange-dimensions-chart",label:"DIN Flange Dimensions"},
  {href:"/blog/en-10216-seamless-pipe-spec",label:"EN 10216 Seamless"},
  {href:"/blog/en-10217-welded-pipe-spec",label:"EN 10217 Welded"},
  {href:"/blog/nace-mr0175-material-guide",label:"NACE MR0175 Guide"},
  {href:"/blog/nace-tm0284-hic-test-procedure",label:"NACE TM0284 HIC"},
  {href:"/blog/ibr-form-iiic-complete-guide",label:"IBR Form III-C Guide"},
  {href:"/blog/pmi-testing-complete-guide",label:"PMI Testing Guide"},
  {href:"/blog/ndt-testing-methods-pipes",label:"NDT Testing Methods"},
  {href:"/blog/sa-516-plate-specification",label:"SA 516 Plate Spec"},
  {href:"/blog/sa-387-plate-specification",label:"SA 387 Plate Spec"},
];

const INDUSTRY_LINKS = [
  {href:"/blog/piping-material-oil-refinery",label:"Oil Refinery"},
  {href:"/blog/steel-for-power-plant-boiler",label:"Power Plant"},
  {href:"/blog/piping-for-chemical-plant",label:"Chemical Plant"},
  {href:"/blog/ss-pipe-for-pharma-industry",label:"Pharma Industry"},
  {href:"/blog/ss-pipe-for-dairy-food",label:"Dairy & Food"},
  {href:"/blog/piping-for-fertilizer-plant",label:"Fertilizer Plant"},
  {href:"/blog/ss-pipe-for-water-treatment",label:"Water Treatment"},
  {href:"/blog/piping-for-sugar-mill",label:"Sugar Mill"},
  {href:"/blog/ss-pipe-for-marine-offshore",label:"Marine & Offshore"},
  {href:"/blog/structural-steel-for-building",label:"Building Structure"},
  {href:"/blog/steel-for-cement-plant",label:"Cement Plant"},
  {href:"/blog/piping-for-pulp-paper-mill",label:"Pulp & Paper"},
  {href:"/blog/piping-for-desalination-plant",label:"Desalination"},
  {href:"/blog/steel-for-solar-power-plant",label:"Solar Power"},
  {href:"/blog/piping-for-lng-terminal",label:"LNG Terminal"},
  {href:"/blog/steel-for-shipbuilding",label:"Shipbuilding"},
  {href:"/blog/piping-for-brewery-distillery",label:"Brewery"},
  {href:"/blog/steel-for-nuclear-power-plant",label:"Nuclear Power"},
  {href:"/blog/piping-for-paint-chemical",label:"Paint & Chemical"},
  {href:"/blog/piping-for-gas-distribution",label:"Gas Distribution"},
  {href:"/blog/ss-pipe-for-hospital-medical-gas",label:"Hospital Gas"},
  {href:"/blog/piping-for-ethanol-biofuel",label:"Ethanol & Biofuel"},
  {href:"/blog/steel-for-peb-warehouse",label:"PEB Warehouse"},
  {href:"/blog/piping-for-cng-station",label:"CNG Station"},
  {href:"/blog/ss-pipe-for-swimming-pool",label:"Swimming Pool"},
  {href:"/blog/piping-for-oil-gas-pipeline",label:"Oil & Gas Pipeline"},
  {href:"/blog/steel-for-metro-rail",label:"Metro Rail"},
  {href:"/blog/piping-for-hydrogen-plant",label:"Hydrogen Plant"},
  {href:"/blog/piping-for-ammonia-urea",label:"Ammonia & Urea"},
  {href:"/blog/steel-for-cold-storage",label:"Cold Storage"},
  {href:"/blog/ss-for-architecture-building",label:"Architecture"},
  {href:"/blog/piping-for-effluent-treatment",label:"ETP"},
  {href:"/blog/piping-for-geothermal-plant",label:"Geothermal"},
  {href:"/blog/steel-for-wind-turbine",label:"Wind Turbine"},
  {href:"/blog/ss-pipe-for-kitchen-equipment",label:"Kitchen Equipment"},
  {href:"/blog/piping-for-natural-gas-city",label:"Natural Gas CGD"},
  {href:"/blog/piping-for-textile-industry",label:"Textile Industry"},
  {href:"/blog/steel-for-bridge-construction",label:"Bridge Construction"},
  {href:"/blog/piping-for-oil-well-drilling",label:"Oil Well Drilling"},
  {href:"/blog/material-for-heat-exchanger",label:"Heat Exchanger"},
];

const HOWTO_LINKS = [
  {href:"/blog/how-to-calculate-pipe-weight",label:"Calculate Pipe Weight"},
  {href:"/blog/how-to-read-pipe-marking",label:"Read Pipe Marking"},
  {href:"/blog/how-to-identify-ss-grade",label:"Identify SS Grade"},
  {href:"/blog/how-to-do-hydrostatic-test",label:"Hydrostatic Test"},
  {href:"/blog/how-to-weld-p91-steel",label:"Weld P91 Steel"},
  {href:"/blog/how-to-weld-duplex-2205",label:"Weld Duplex 2205"},
  {href:"/blog/how-to-weld-inconel-625",label:"Weld Inconel 625"},
  {href:"/blog/how-to-weld-ss-304-316",label:"Weld SS 304/316"},
  {href:"/blog/how-to-weld-carbon-steel-pipe",label:"Weld CS Pipe"},
  {href:"/blog/how-to-weld-monel-400",label:"Weld Monel 400"},
  {href:"/blog/how-to-passivate-ss-pipe",label:"Passivate SS Pipe"},
  {href:"/blog/how-to-do-pmi-testing",label:"PMI Testing"},
  {href:"/blog/how-to-read-mill-test-certificate",label:"Read MTC"},
  {href:"/blog/how-to-calculate-flange-bolt-load",label:"Flange Bolt Load"},
  {href:"/blog/how-to-select-gasket-type",label:"Select Gasket"},
  {href:"/blog/how-to-do-radiography-testing",label:"Radiography Testing"},
  {href:"/blog/how-to-do-ultrasonic-testing",label:"Ultrasonic Testing"},
  {href:"/blog/how-to-check-ss-pipe-quality",label:"Check SS Quality"},
  {href:"/blog/how-to-check-tmt-bar-quality",label:"Check TMT Quality"},
  {href:"/blog/how-to-store-stainless-steel",label:"Store SS"},
  {href:"/blog/how-to-store-carbon-steel-pipe",label:"Store CS Pipe"},
  {href:"/blog/how-to-prevent-galvanic-corrosion",label:"Galvanic Corrosion"},
  {href:"/blog/how-to-do-hardness-testing",label:"Hardness Testing"},
  {href:"/blog/how-to-do-impact-test-charpy",label:"Charpy Impact Test"},
  {href:"/blog/how-to-select-pipe-schedule",label:"Select Pipe Schedule"},
  {href:"/blog/how-to-do-dye-penetrant-test",label:"DPT Testing"},
  {href:"/blog/how-to-bend-ss-pipe",label:"Bend SS Pipe"},
  {href:"/blog/how-to-calculate-plate-weight",label:"Plate Weight Formula"},
  {href:"/blog/how-to-read-piping-isometric",label:"Read Isometric"},
  {href:"/blog/how-to-do-ferrite-testing",label:"Ferrite Testing"},
  {href:"/blog/how-to-pickle-passivate-ss",label:"Pickling SS"},
  {href:"/blog/how-to-select-expansion-joint",label:"Expansion Joint"},
  {href:"/blog/how-to-do-magnetic-particle-test",label:"MPT Testing"},
  {href:"/blog/how-to-calculate-thermal-expansion",label:"Thermal Expansion"},
  {href:"/blog/how-to-do-heat-treatment",label:"Heat Treatment"},
  {href:"/blog/how-to-insulate-hot-pipe",label:"Pipe Insulation"},
  {href:"/blog/how-to-do-pwht-procedure",label:"PWHT Procedure"},
  {href:"/blog/how-to-choose-valve-piping",label:"Valve Selection"},
  {href:"/blog/how-to-prepare-piping-mto",label:"Prepare MTO"},
  {href:"/blog/how-to-prevent-stress-corrosion",label:"SCC Prevention"},
];

const KNOWLEDGE_LINKS = [
  {href:"/blog/what-is-stainless-steel",label:"What is SS?"},
  {href:"/blog/what-is-duplex-stainless-steel",label:"What is Duplex?"},
  {href:"/blog/what-is-super-duplex-steel",label:"What is Super Duplex?"},
  {href:"/blog/what-is-alloy-steel",label:"What is Alloy Steel?"},
  {href:"/blog/what-is-carbon-steel",label:"What is Carbon Steel?"},
  {href:"/blog/what-is-mild-steel",label:"What is Mild Steel?"},
  {href:"/blog/what-is-inconel-alloy",label:"What is Inconel?"},
  {href:"/blog/what-is-monel-alloy",label:"What is Monel?"},
  {href:"/blog/what-is-hastelloy",label:"What is Hastelloy?"},
  {href:"/blog/what-is-titanium-alloy",label:"What is Titanium?"},
  {href:"/blog/what-is-nickel-alloy",label:"What is Nickel Alloy?"},
  {href:"/blog/what-is-copper-nickel-alloy",label:"What is CuNi?"},
  {href:"/blog/what-is-alloy-20",label:"What is Alloy 20?"},
  {href:"/blog/what-is-incoloy-800",label:"What is Incoloy 800?"},
  {href:"/blog/what-is-ibr-certification",label:"What is IBR?"},
  {href:"/blog/what-is-nace-mr0175",label:"What is NACE?"},
  {href:"/blog/what-is-hic-testing",label:"What is HIC Testing?"},
  {href:"/blog/what-is-pwht",label:"What is PWHT?"},
  {href:"/blog/what-is-pmi-testing",label:"What is PMI?"},
  {href:"/blog/what-is-ndt-testing",label:"What is NDT?"},
  {href:"/blog/what-is-mill-test-certificate",label:"What is MTC?"},
  {href:"/blog/what-is-seamless-pipe",label:"What is Seamless Pipe?"},
  {href:"/blog/what-is-erw-pipe",label:"What is ERW Pipe?"},
  {href:"/blog/what-is-lsaw-pipe",label:"What is LSAW Pipe?"},
  {href:"/blog/what-is-pipe-schedule",label:"What is Pipe Schedule?"},
  {href:"/blog/what-is-nominal-bore",label:"What is NB?"},
  {href:"/blog/what-is-buttweld-fitting",label:"What is BW Fitting?"},
  {href:"/blog/what-is-forged-fitting",label:"What is Forged Fitting?"},
  {href:"/blog/what-is-flanges-types",label:"What is Flange?"},
  {href:"/blog/what-is-gasket-types",label:"Gasket Types"},
  {href:"/blog/what-is-pren-number",label:"What is PREN?"},
  {href:"/blog/what-is-sensitization-ss",label:"Sensitization in SS"},
  {href:"/blog/what-is-intergranular-corrosion",label:"IGC Corrosion"},
  {href:"/blog/what-is-pitting-corrosion",label:"Pitting Corrosion"},
  {href:"/blog/what-is-crevice-corrosion",label:"Crevice Corrosion"},
  {href:"/blog/what-is-stress-corrosion-cracking",label:"SCC in SS"},
  {href:"/blog/what-is-creep-in-steel",label:"Creep in Steel"},
  {href:"/blog/what-is-hydrogen-embrittlement",label:"H2 Embrittlement"},
  {href:"/blog/what-is-sigma-phase",label:"Sigma Phase"},
  {href:"/blog/what-is-heat-affected-zone",label:"HAZ Explained"},
  {href:"/blog/what-is-cathodic-protection",label:"Cathodic Protection"},
  {href:"/blog/what-is-solution-annealing",label:"Solution Annealing"},
  {href:"/blog/what-is-normalizing-steel",label:"Normalizing Steel"},
  {href:"/blog/what-is-quenching-tempering",label:"Quench & Temper"},
  {href:"/blog/what-is-electropolishing",label:"Electropolishing"},
  {href:"/blog/what-is-pickling-passivation",label:"Pickling & Passivation"},
  {href:"/blog/types-of-stainless-steel",label:"Types of SS"},
  {href:"/blog/types-of-corrosion-in-steel",label:"Types of Corrosion"},
  {href:"/blog/types-of-pipe-manufacturing",label:"Pipe Manufacturing"},
  {href:"/blog/types-of-steel-plates",label:"Types of Steel Plates"},
];

const BUYER_LINKS = [
  {href:"/blog/how-to-buy-steel-pipe-online-india",label:"Buy Steel Pipe Online"},
  {href:"/blog/bulk-steel-procurement-tips",label:"Bulk Procurement Tips"},
  {href:"/blog/third-party-inspection-guide",label:"TPI Guide"},
  {href:"/blog/packing-marking-export-pipes",label:"Export Packing"},
  {href:"/blog/material-selection-corrosive-service",label:"CRA Selection"},
  {href:"/blog/how-to-verify-steel-supplier",label:"Verify Supplier"},
  {href:"/blog/steel-pipe-import-procedure-india",label:"Import Procedure"},
  {href:"/blog/steel-pipe-export-documentation",label:"Export Documentation"},
  {href:"/blog/hs-code-for-steel-pipes",label:"HS Code Steel"},
  {href:"/blog/gst-on-steel-pipes-india",label:"GST on Steel"},
  {href:"/blog/bis-certification-steel-india",label:"BIS Certification"},
  {href:"/blog/astm-equivalent-indian-standards",label:"ASTM to IS Equivalent"},
  {href:"/blog/how-to-read-piping-specification",label:"Read Piping Spec"},
  {href:"/blog/how-to-prepare-material-requisition",label:"Prepare MR"},
  {href:"/blog/approved-vendor-list-steel",label:"AVL Guide"},
  {href:"/blog/how-to-calculate-piping-cost",label:"Piping Cost"},
  {href:"/blog/lead-time-steel-pipes-india",label:"Lead Time India"},
  {href:"/blog/minimum-order-quantity-steel",label:"MOQ Steel"},
  {href:"/blog/what-is-indent-steel-buying",label:"Indent Process"},
  {href:"/blog/epc-contractor-steel-supply",label:"EPC Steel Supply"},
  {href:"/blog/material-traceability-steel",label:"Material Traceability"},
  {href:"/blog/quality-assurance-plan-steel",label:"QAP Steel"},
  {href:"/blog/inspection-test-plan-steel",label:"ITP Guide"},
  {href:"/blog/how-to-check-fake-mtc",label:"Detect Fake MTC"},
  {href:"/blog/steel-procurement-common-mistakes",label:"Procurement Mistakes"},
  {href:"/blog/how-to-negotiate-steel-price",label:"Negotiate Price"},
  {href:"/blog/steel-storage-best-practices",label:"Storage Practices"},
  {href:"/blog/packaging-standard-steel-export",label:"Packaging Standard"},
  {href:"/blog/shipping-terms-fob-cif-steel",label:"FOB vs CIF"},
  {href:"/blog/letter-of-credit-steel-buying",label:"LC for Steel"},
];

const SIZE_LINKS = [
  {href:"/blog/ss-pipe-size-chart",label:"SS Pipe Size Chart"},
  {href:"/blog/cs-pipe-size-chart",label:"CS Pipe Size Chart"},
  {href:"/blog/flange-dimensions-chart-150-300",label:"Flange Dim 150/300"},
  {href:"/blog/flange-dimensions-chart-600-900",label:"Flange Dim 600/900"},
  {href:"/blog/flange-dimensions-chart-1500-2500",label:"Flange Dim 1500/2500"},
  {href:"/blog/elbow-dimensions-chart",label:"Elbow Dimensions"},
  {href:"/blog/tee-dimensions-chart",label:"Tee Dimensions"},
  {href:"/blog/reducer-dimensions-chart",label:"Reducer Dimensions"},
  {href:"/blog/stub-end-dimensions-chart",label:"Stub End Dimensions"},
  {href:"/blog/ss-sheet-size-chart",label:"SS Sheet Sizes"},
  {href:"/blog/ss-plate-thickness-chart",label:"SS Plate Thickness"},
  {href:"/blog/ms-plate-size-chart",label:"MS Plate Sizes"},
  {href:"/blog/ms-angle-size-chart-is-808",label:"MS Angle Sizes"},
  {href:"/blog/ismc-dimensions-chart",label:"ISMC Dimensions"},
  {href:"/blog/ismb-dimensions-chart",label:"ISMB Dimensions"},
  {href:"/blog/pipe-nb-to-od-conversion",label:"NB to OD Chart"},
  {href:"/blog/inch-to-mm-conversion-pipes",label:"Inch to mm"},
  {href:"/blog/swg-to-mm-wire-gauge",label:"SWG to mm"},
  {href:"/blog/ss-tube-size-chart",label:"SS Tube Sizes"},
  {href:"/blog/forged-fittings-dimensions",label:"Forged Fittings Dim"},
  {href:"/blog/pipe-bend-dimensions-chart",label:"Pipe Bend 3D/5D"},
  {href:"/blog/olet-fittings-size-chart",label:"Olet Sizes"},
  {href:"/blog/spiral-wound-gasket-sizes",label:"Gasket Sizes"},
  {href:"/blog/ring-joint-gasket-dimensions",label:"RTJ Gasket Dim"},
  {href:"/blog/flange-bolt-chart",label:"Flange Bolt Chart"},
  {href:"/blog/pipe-pressure-rating-chart",label:"Pressure Rating"},
  {href:"/blog/alloy-pipe-dimensions-chart",label:"Alloy Pipe Dim"},
  {href:"/blog/duplex-pipe-dimensions-chart",label:"Duplex Pipe Dim"},
  {href:"/blog/inconel-pipe-size-chart",label:"Inconel Pipe Sizes"},
  {href:"/blog/copper-nickel-pipe-size-chart",label:"CuNi Pipe Sizes"},
];

const FAQ_LINKS = [
  {href:"/blog/why-ss-pipe-is-expensive",label:"Why SS Expensive?"},
  {href:"/blog/why-inconel-is-costly",label:"Why Inconel Costly?"},
  {href:"/blog/why-duplex-steel-preferred-offshore",label:"Why Duplex Offshore?"},
  {href:"/blog/why-ibr-certification-mandatory",label:"Why IBR Mandatory?"},
  {href:"/blog/why-pwht-required-p91",label:"Why PWHT for P91?"},
  {href:"/blog/why-pmi-test-important",label:"Why PMI Important?"},
  {href:"/blog/why-nace-compliance-needed",label:"Why NACE Needed?"},
  {href:"/blog/why-seamless-pipe-preferred",label:"Why Seamless?"},
  {href:"/blog/why-titanium-used-chemical",label:"Why Titanium?"},
  {href:"/blog/why-monel-used-marine",label:"Why Monel Marine?"},
  {href:"/blog/when-to-use-duplex-steel",label:"When Use Duplex?"},
  {href:"/blog/when-to-use-inconel-alloy",label:"When Use Inconel?"},
  {href:"/blog/when-to-use-hastelloy",label:"When Use Hastelloy?"},
  {href:"/blog/when-to-use-titanium-pipe",label:"When Use Titanium?"},
  {href:"/blog/when-to-use-copper-nickel",label:"When Use CuNi?"},
  {href:"/blog/when-to-use-alloy-steel-pipe",label:"When Use Alloy Steel?"},
  {href:"/blog/when-to-use-ss-321-vs-304",label:"When SS 321 vs 304?"},
  {href:"/blog/when-to-use-ss-310-high-temp",label:"When Use SS 310?"},
  {href:"/blog/can-ss-304-be-used-outdoor",label:"SS 304 Outdoor?"},
  {href:"/blog/can-erw-pipe-be-used-gas",label:"ERW for Gas?"},
  {href:"/blog/can-ss-pipe-be-painted",label:"Can SS Be Painted?"},
  {href:"/blog/can-duplex-be-welded-easily",label:"Can Duplex Be Welded?"},
  {href:"/blog/can-carbon-steel-resist-corrosion",label:"CS Corrosion?"},
  {href:"/blog/difference-pipe-and-tube",label:"Pipe vs Tube"},
  {href:"/blog/difference-supplier-stockist-dealer",label:"Supplier vs Stockist"},
  {href:"/blog/difference-seamless-erw-spiral",label:"Seamless vs ERW vs Spiral"},
  {href:"/blog/what-is-heat-number-steel",label:"Heat Number"},
  {href:"/blog/what-is-annealing-ss-pipe",label:"Annealing SS"},
  {href:"/blog/what-is-bright-annealing-tube",label:"Bright Annealing"},
  {href:"/blog/what-is-cold-worked-pipe",label:"Cold Worked Pipe"},
  {href:"/blog/what-is-hydrostatic-test",label:"Hydrostatic Test"},
  {href:"/blog/what-is-eddy-current-testing",label:"ECT Testing"},
  {href:"/blog/what-is-igc-test-ss",label:"IGC Test SS"},
  {href:"/blog/what-is-flattening-test",label:"Flattening Test"},
  {href:"/blog/faq-ss-pipe-buying-india",label:"SS Pipe Buying FAQ"},
  {href:"/blog/faq-carbon-steel-pipe-buying",label:"CS Pipe Buying FAQ"},
  {href:"/blog/faq-alloy-steel-pipe-buying",label:"Alloy Pipe FAQ"},
  {href:"/blog/faq-exotic-alloy-buying",label:"Exotic Alloy FAQ"},
  {href:"/blog/faq-structural-steel-buying",label:"Structural Steel FAQ"},
  {href:"/blog/faq-pipe-fittings-flanges",label:"Fittings & Flanges FAQ"},
];

const CASE_LINKS = [
  {href:"/blog/project-oil-refinery-ss-cs-supply",label:"Oil Refinery Supply"},
  {href:"/blog/project-power-plant-p91-boiler",label:"Power Plant P91"},
  {href:"/blog/project-chemical-plant-exotic-alloy",label:"Chemical Plant Exotic"},
  {href:"/blog/project-offshore-duplex-supply",label:"Offshore Duplex"},
  {href:"/blog/project-pharma-ss316l-electropolished",label:"Pharma SS 316L EP"},
  {href:"/blog/project-water-treatment-ss-pipe",label:"Water Treatment SS"},
  {href:"/blog/project-fertilizer-plant-piping",label:"Fertilizer Plant"},
  {href:"/blog/project-export-middle-east-steel",label:"Export Middle East"},
  {href:"/blog/project-building-construction-tmt",label:"Building Construction"},
  {href:"/blog/project-lng-cryogenic-piping",label:"LNG Cryogenic"},
];
