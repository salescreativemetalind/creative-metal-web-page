import { Title, Meta, Link } from "@solidjs/meta";
import { useParams } from "@solidjs/router";
import { PageLayout } from "../../components/Layout";

const ARTICLES: Record<string, {
  title: string; seoTitle: string; seoDesc: string; tag: string; date: string; readTime: string;
  intro: string; sections: { heading: string; body: string }[];
}> = {
  "ss-304-vs-316l": {
    title: "SS 304 vs SS 316L — Which Stainless Steel Grade Should You Choose?",
    seoTitle: "SS 304 vs 316L — Which Grade to Choose? | CMI Vadodara",
    seoDesc: "SS 304 vs SS 316L: corrosion resistance, temperature limits, cost and applications explained. Creative Metal Industries, Vadodara stocks both grades.",
    tag: "Technical Guide", date: "May 2026", readTime: "5 min read",
    intro: "Stainless Steel 304 and 316L are the two most widely used austenitic stainless steel grades. While they look identical and share many properties, the differences in composition make them suited for very different environments. Here is a complete comparison to help you specify the right grade.",
    sections: [
      { heading: "Chemical Composition", body: "SS 304 contains 18% chromium and 8% nickel (18/8). SS 316L adds 2–3% molybdenum to this composition, which dramatically improves resistance to pitting and crevice corrosion — especially in chloride-containing environments. The 'L' suffix in 316L means low carbon (max 0.03%), reducing the risk of sensitisation during welding." },
      { heading: "Corrosion Resistance", body: "SS 316L is significantly more resistant to chloride attack than 304. In marine environments, coastal areas, and applications involving seawater, saline solutions, or halides, 316L is the correct choice. SS 304 will pit and crevice corrode in such conditions. However, for general atmospheric exposure, food processing, and non-chloride environments, SS 304 performs excellently at a lower cost." },
      { heading: "Temperature Range", body: "Both grades perform well in service temperatures from -196°C (cryogenic) to approximately 870°C. However, above 425°C, the L-grade (low carbon) versions are preferred because standard carbon grades can sensitise at grain boundaries, leading to intergranular corrosion." },
      { heading: "Mechanical Properties", body: "SS 304 and 316L have almost identical mechanical properties. Both have a minimum tensile strength of around 515 MPa and yield strength of 205 MPa (annealed condition). Neither grade should be considered where high-strength structural steel is required." },
      { heading: "Applications", body: "SS 304: Kitchen equipment, food processing, architectural cladding, chemical containers, heat exchangers (non-chloride service), general process piping.\n\nSS 316L: Pharmaceutical equipment, chemical reactors, marine hardware, coastal structures, pulp and paper mills, desalination plants, welded assemblies in chemical service." },
      { heading: "Cost Difference", body: "SS 316L typically costs 20–40% more than SS 304 due to the addition of molybdenum. For non-chloride applications, specifying 316L where 304 is sufficient adds unnecessary cost. Always match the grade to the actual service environment." },
    ],
  },
  "how-to-read-mtc": {
    title: "How to Read a Mill Test Certificate (MTC) — A Practical Guide",
    seoTitle: "How to Read a Mill Test Certificate (MTC) | CMI",
    seoDesc: "Learn to read EN 10204 3.1 and 3.2 Mill Test Certificates — heat number, chemical composition, mechanical properties explained by Creative Metal Industries.",
    tag: "Buyer's Guide", date: "Apr 2026", readTime: "6 min read",
    intro: "A Mill Test Certificate (MTC) — also called a Material Test Report (MTR) — is a quality assurance document that certifies the material composition and mechanical properties of a metal product as produced by the mill. Understanding how to read one is essential for any procurement engineer or quality inspector.",
    sections: [
      { heading: "EN 10204 3.1 vs 3.2 — What's the Difference?", body: "EN 10204 defines the types of inspection documents. Type 3.1 is issued by the mill's own quality department — the most common form. Type 3.2 is countersigned by an independent third-party inspector (e.g., DNV, TUV, SGS, LLOYDS) in addition to the mill. Critical applications like pressure vessels, boilers, and nuclear equipment typically require 3.2." },
      { heading: "Heat Number / Cast Number", body: "Every steel heat (batch) cast at the mill is assigned a unique heat number. This is the primary traceability identifier — it links the physical material to the MTC. Always cross-check that the heat number stamped or stencilled on the material matches the MTC." },
      { heading: "Chemical Composition", body: "The MTC lists the actual ladle analysis (chemical composition) of the heat. Compare these values against the applicable standard (e.g., ASTM A312 for SS seamless pipes). All elements — C, Mn, Si, P, S, Cr, Ni, Mo — must be within specification limits." },
      { heading: "Mechanical Properties", body: "Tensile strength, yield strength (0.2% proof stress), elongation and hardness (Brinell or Rockwell) are listed. These must meet or exceed the minimum values specified in the relevant ASTM, ASME, IS or EN standard for the grade and product form." },
      { heading: "Product Dimensions", body: "The MTC confirms the actual dimensions — outside diameter, wall thickness, length — of the supplied material. For pipes, this includes the schedule or wall thickness designation." },
      { heading: "Test Performed", body: "The MTC will list tests performed: hydrostatic, non-destructive examination (UT, RT, PT, MT), impact test (Charpy), intergranular corrosion test, etc. Ensure all tests required by your purchase order or project specification are present and passed." },
    ],
  },
  "duplex-vs-super-duplex": {
    title: "Duplex 2205 vs Super Duplex 2507 — Understanding the Difference",
    seoTitle: "Duplex 2205 vs Super Duplex 2507 | CMI Vadodara",
    seoDesc: "Duplex 2205 vs Super Duplex 2507 — PREN values, chloride resistance, strength and when to specify each. Stocked at Creative Metal Industries, Vadodara.",
    tag: "Material Science", date: "Mar 2026", readTime: "7 min read",
    intro: "Duplex and Super Duplex stainless steels are dual-phase alloys containing approximately equal proportions of austenite and ferrite. This microstructure gives them roughly twice the strength of standard austenitic grades while maintaining excellent corrosion resistance. But when should you choose 2205 over 2507?",
    sections: [
      { heading: "Composition and PREN Value", body: "The Pitting Resistance Equivalent Number (PREN) determines chloride pitting resistance: PREN = %Cr + 3.3×%Mo + 16×%N.\n\nDuplex 2205 (UNS S31803/S32205): ~22% Cr, 3% Mo, 5.5% Ni, 0.15% N → PREN ≈ 35\nSuper Duplex 2507 (UNS S32750): ~25% Cr, 4% Mo, 7% Ni, 0.27% N → PREN ≈ 42\n\nA PREN above 40 is required for seawater service. This makes 2507 the correct choice for offshore and subsea applications." },
      { heading: "Corrosion Resistance", body: "Both grades resist chloride stress corrosion cracking (SCC) far better than austenitic 316L. Duplex 2205 is suitable for mildly corrosive chloride environments — coastal structures, desalination, chemical processing. Super Duplex 2507 is designed for severe chloride service — offshore platforms, subsea umbilicals, seawater cooling systems." },
      { heading: "Mechanical Strength", body: "2205: UTS ≈ 620 MPa, Yield ≈ 450 MPa\n2507: UTS ≈ 795 MPa, Yield ≈ 550 MPa\n\nBoth are approximately twice as strong as austenitic grades, allowing thinner wall sections and lighter weight designs." },
      { heading: "Weldability and Fabrication", body: "Both grades require careful heat input control during welding to maintain the austenite-ferrite phase balance. Intermetallic phases (sigma phase) can precipitate at 700–1000°C, causing embrittlement. Post-weld solution annealing is recommended for critical service. Super duplex is more sensitive and requires tighter process control." },
      { heading: "Applications", body: "Duplex 2205: Chemical plant piping, heat exchangers, pressure vessels, FGD scrubbers, paper and pulp digesters, general offshore structural.\n\nSuper Duplex 2507: Seawater handling, subsea equipment, high-pressure injection lines, desalination high-pressure sections, oil & gas umbilicals." },
      { heading: "Cost Comparison", body: "Super Duplex 2507 typically costs 30–50% more than Duplex 2205, reflecting its higher alloy content (particularly molybdenum and nickel). Specify 2507 only where the PREN > 40 requirement or the extreme corrosion resistance is genuinely needed." },
    ],
  },
  // ── New articles ────────────────────────────────────────────────────────────

  "p91-alloy-steel-power-plants": {
    title: "Why P91 Alloy Steel is Critical for Modern Power Plants",
    seoTitle: "P91 Alloy Steel Pipe Supplier India | CMI Vadodara",
    seoDesc: "P91 alloy steel ASTM A335 pipes — properties, PWHT, IBR compliance and why it is essential for ultra-supercritical boilers. Stockist in Vadodara.",
    tag: "Industry Insight", date: "Feb 2026", readTime: "8 min read",
    intro: "P91 alloy steel — formally designated ASTM A335 Grade P91 or SA 335 P91 — is a 9% chromium, 1% molybdenum steel with vanadium and niobium additions that has become the material of choice for ultra-supercritical (USC) and advanced ultra-supercritical (AUSC) power plant piping systems. As India accelerates its power generation capacity with higher-efficiency boilers operating above 600°C and 250 bar, P91 is no longer optional — it is mandatory. Creative Metal Industries, Vadodara stocks P91 seamless pipes with IBR Form III-C certification for immediate dispatch.",
    sections: [
      {
        heading: "What Makes P91 Different from P22 and P11",
        body: "Alloy steel grades P11 (1.25% Cr, 0.5% Mo) and P22 (2.25% Cr, 1% Mo) have been workhorses of power plant piping for decades. However, as boiler operating temperatures rose beyond 565°C, both grades showed insufficient creep strength — their ability to resist deformation under sustained high-temperature stress.\n\nP91 solves this with a composition of 8.0–9.5% chromium, 0.85–1.05% molybdenum, 0.18–0.25% vanadium and 0.06–0.10% niobium. This combination creates a tempered martensitic microstructure that provides dramatically superior creep rupture strength — approximately 3× higher than P22 at 600°C. This means thinner wall sections can be used, reducing weight, thermal stress and overall material cost in large power plant projects.",
      },
      {
        heading: "Chemical Composition and Mechanical Properties",
        body: "Per ASTM A335 / ASME SA-335, P91 has the following specified composition: Carbon 0.08–0.12%, Manganese 0.30–0.60%, Silicon 0.20–0.50%, Chromium 8.00–9.50%, Molybdenum 0.85–1.05%, Vanadium 0.18–0.25%, Niobium 0.06–0.10%, Nitrogen 0.030–0.070%.\n\nMechanical properties (minimum, annealed and tempered condition): Tensile Strength 585 MPa, Yield Strength (0.2% proof) 415 MPa, Elongation 20%, Hardness max 250 HBW.\n\nThe normalising and tempering heat treatment is critical — P91 must be normalised at 1040–1080°C and tempered at 730–800°C to achieve the correct microstructure. Improperly heat-treated P91 will fail prematurely in creep service. Creative Metal Industries supplies P91 pipes with full heat treatment certification confirming the correct thermal cycle.",
      },
      {
        heading: "Post-Weld Heat Treatment (PWHT) Requirements",
        body: "PWHT is mandatory for P91 and is one of the most critical fabrication requirements. The specified PWHT temperature range is 730–780°C, held for a minimum of 2 hours per 25mm of wall thickness.\n\nDeviation from this range — particularly under-tempering — leaves the weld heat-affected zone in a brittle, under-tempered martensitic state that will crack under thermal cycling. Over-tempering above 800°C can result in a mixed microstructure with insufficient creep strength.\n\nAll PWHT operations must be performed with calibrated thermocouples attached directly to the weld zone and recorded on time-temperature charts. These PWHT records must accompany the material documentation for IBR inspection. Creative Metal Industries can supply P91 pipes with supplier PWHT records or arrange PWHT at our Vadodara facility for cut pieces.",
      },
      {
        heading: "IBR Compliance for P91 in India",
        body: "In India, any boiler pressure part operating above 1 kg/cm² steam pressure must comply with the Indian Boiler Regulations (IBR) 1950. For P91 pipes used in steam lines, superheaters and reheaters, IBR Form III-C — the material test certificate counter-signed by an IBR inspecting authority — is mandatory.\n\nCreative Metal Industries maintains ready stock of SA 335 P91 seamless pipes with IBR Form III-C certification from approved mills. We can also arrange IBR inspection at our Vadodara warehouse by empanelled IBR inspectors for project-specific requirements.\n\nFor ultra-supercritical boilers, EN 10216-2 Grade X10CrMoVNb9-1 (the European equivalent of P91) is also accepted in some projects. We stock both ASTM and EN equivalent material with dual certification.",
      },
      {
        heading: "Applications in Power and Petrochemical Industries",
        body: "P91 alloy steel is used wherever sustained high-temperature service is required above 565°C:\n\nPower Plants: Main steam lines, hot reheat lines, superheater headers, steam turbine inlet piping, boiler pressure parts. Essential for supercritical (SC), ultra-supercritical (USC) and advanced ultra-supercritical (AUSC) units operating at 600–650°C and 250–300 bar.\n\nPetrochemical and Refinery: High-temperature process lines in hydrotreaters, reformers and fluid catalytic cracking (FCC) units. Hydrocracker reactor outlet piping where hydrogen-enhanced creep is a concern.\n\nFertiliser Plants: Ammonia synthesis loop piping operating at 400–500°C and high pressure.\n\nNuclear: Some Gen-IV reactor designs use modified 9Cr steels derived from P91 chemistry for primary circuit components.",
      },
      {
        heading: "P91 vs P92 — When to Upgrade",
        body: "P92 (ASTM A335 Grade P92, also known as NF616 or Cr9W2) adds tungsten (1.5–2.0%) to the P91 composition. This further improves creep rupture strength by approximately 20–30% compared to P91, allowing even thinner walls in the highest-temperature zones (above 620°C).\n\nHowever, P92 is significantly more expensive and has a narrower PWHT window, making fabrication more challenging. Most Indian power projects use P91 as the standard grade, reserving P92 for the highest-temperature superheater sections in AUSC demonstration projects.\n\nCreative Metal Industries stocks both P91 and P92 seamless pipes. P92 is available on indent from Sumitomo, Vallourec and ISMT with 4–6 week delivery from order.",
      },
      {
        heading: "Source P91 Alloy Steel from Creative Metal Industries, Vadodara",
        body: "Creative Metal Industries is one of Gujarat's largest stockists of alloy steel seamless pipes including ASTM A335 P91, P92, P22 and P11. Our Vadodara warehouse at GIDC Makarpura carries ready stock across sizes 1 inch NB to 24 inch NB in schedules SCH 40 to XXS.\n\nEvery P91 pipe is supplied with: Mill Test Certificate (EN 10204 3.1 or 3.2), Heat treatment report (normalising and tempering), IBR Form III-C (on request), Hardness test certificate, Positive Material Identification (PMI) certificate.\n\nFor project requirements, we can arrange phased delivery with mill source approval documentation acceptable to EIL, PDIL, TOYO, TECHNIP and other major EPC agencies. Call us on +91 99982 80619 or email creativemetalind@gmail.com for current stock availability and pricing.",
      },
    ],
  },

  "astm-a312-vs-api-5l": {
    title: "ASTM A312 vs API 5L — Choosing the Right Pipe Standard for Your Application",
    seoTitle: "ASTM A312 vs API 5L Pipe Standard | CMI Vadodara",
    seoDesc: "ASTM A312 stainless steel pipes vs API 5L carbon steel line pipes — material, service, grades and when to use each. Stockist in Vadodara, Gujarat.",
    tag: "Specification Guide", date: "Jan 2026", readTime: "6 min read",
    intro: "Two of the most commonly referenced pipe standards in industrial procurement are ASTM A312 and API 5L. Both govern steel pipes, but for entirely different materials, services and industries. Specifying the wrong standard leads to incorrect material procurement, failed inspection and potentially dangerous installations. This guide by Creative Metal Industries, Vadodara clarifies the differences so procurement engineers can specify confidently.",
    sections: [
      {
        heading: "What is ASTM A312",
        body: "ASTM A312 is the Standard Specification for Seamless, Welded and Heavily Cold Worked Austenitic Stainless Steel Pipes, published by ASTM International. It covers austenitic stainless steel pipes intended for high-temperature and general corrosive service.\n\nKey scope: Austenitic stainless steels only — grades such as TP304, TP304L, TP316, TP316L, TP317L, TP321, TP347, TP310S and TP904L. Available as seamless (S), straight-seam welded (W) and heavily cold worked (HCW). Size range: 1/8 NPS to 30 NPS (6NB to 750NB). Wall thickness expressed in schedules: SCH 5S, 10S, 40S, 80S, 160, XXS. Mandatory tests: hydrostatic test or NDE (UT/ET), mechanical tests (tensile, hardness), intergranular corrosion test for 'L' grades.\n\nASTM A312 is the go-to standard for SS pipes in chemical processing, pharmaceutical, food and beverage, oil and gas (non-sour), power generation and general process industry. Creative Metal Industries stocks ASTM A312 pipes in all major grades from Sandvik, Salzgitter, Ratnamani and Venus mills.",
      },
      {
        heading: "What is API 5L",
        body: "API 5L is the Specification for Line Pipe published by the American Petroleum Institute. It covers seamless and welded steel pipes used in transportation of oil, gas and water in the oil and gas industry — primarily pipeline applications.\n\nKey scope: Carbon steel and low-alloy steel only. Two product specification levels: PSL 1 (standard quality) and PSL 2 (higher quality with mandatory CVN impact testing, fracture toughness requirements and tighter dimensional tolerances). Grade system based on yield strength: Grade B (245 MPa), X42, X46, X52, X56, X60, X65, X70, X80. Available in seamless, ERW, SAW (HSAW and LSAW) configurations. PSL 2 pipe has mandatory hydrostatic test, tensile test, CVN impact test, NDE and dimensional inspection.\n\nAPI 5L is mandatory for oil and gas gathering lines, transmission pipelines, offshore flow lines and subsea pipelines. The X-grade designation (e.g. X65) indicates the minimum yield strength in ksi — X65 means 65,000 psi (448 MPa) minimum yield.",
      },
      {
        heading: "Key Differences — Side by Side",
        body: "Material type: A312 covers austenitic stainless steel. API 5L covers carbon and low-alloy steel.\n\nService intent: A312 is for corrosive and high-temperature process service. API 5L is for oil, gas and water transportation pipelines.\n\nGrade designation: A312 uses TP (Tubular Product) prefix — TP304, TP316L. API 5L uses X-grade — X52, X65, X70.\n\nPressure design: A312 pipes are designed to ASME B31.3 (Process Piping). API 5L pipes are designed to ASME B31.4 (Liquid Pipelines) or B31.8 (Gas Pipelines).\n\nChemical resistance: A312 austenitic grades resist oxidising and mildly reducing acids. API 5L carbon steel has no corrosion resistance — external coating and cathodic protection are used for buried pipelines.\n\nInspection documents: A312 requires EN 10204 3.1 MTC with chemical and mechanical. API 5L PSL 2 additionally requires CVN impact test results and NDE reports.",
      },
      {
        heading: "When to Specify ASTM A312",
        body: "Use ASTM A312 when: The process fluid is corrosive (acids, chlorides, solvents, sea water in low-velocity service). Operating temperature is above 300°C where carbon steel loses strength and requires alloy or stainless. The application is in pharmaceutical, food processing or semiconductor fabrication where contamination must be prevented. The specification calls for austenitic SS in piping class designations (e.g. A1A, A2B in EPC piping classes). Hygiene or cleanliness is important — SS has smooth internal surface with low roughness.\n\nTypical A312 applications: Chemical plant process piping, refinery overhead systems, pharmaceutical purified water lines, food processing equipment piping, desalination plant membranes.",
      },
      {
        heading: "When to Specify API 5L",
        body: "Use API 5L when: The application is an oil or gas transmission or gathering pipeline. The design standard is ASME B31.4 or B31.8. High strength is required for large-diameter, long-distance pipeline to reduce wall thickness and weight. The service involves high-pressure gas or liquid hydrocarbon transport. PSL 2 is required for offshore, sour service (with NACE MR-0175 supplementary requirements) or high-consequence area (HCA) pipelines.\n\nTypical API 5L applications: Cross-country oil pipelines, natural gas transmission mains, offshore flow lines, city gas distribution mains (with additional IS/EN standards), subsea pipelines in X65/X70/X80 grades.",
      },
      {
        heading: "Source from Creative Metal Industries, Vadodara",
        body: "Creative Metal Industries is a trusted stockist and supplier of both ASTM A312 stainless steel pipes and API 5L line pipes in Vadodara, Gujarat. Our stock includes:\n\nASTM A312: TP304, TP304L, TP316, TP316L, TP317L, TP321, TP347, TP310S, TP904L — all schedules SCH 5S to XXS — sizes 6NB to 600NB — seamless and welded.\n\nAPI 5L: Grade B, X42, X52, X56, X60, X65, X70 — PSL 1 and PSL 2 — seamless, ERW and HSAW/LSAW — IBR available for applicable grades.\n\nAll material supplied with original Mill Test Certificates. IBR Form III-C available for applicable grades. Third-party inspection under DNV, TUV, SGS, BVIS and LRIS accepted. Contact us at +91 99982 80619 for current availability and competitive pricing.",
      },
    ],
  },

  "hastelloy-vs-inconel": {
    title: "Hastelloy C-276 vs Inconel 625 — Which Nickel Alloy for Corrosive Service?",
    seoTitle: "Hastelloy C-276 vs Inconel 625 | Nickel Alloy Supplier CMI",
    seoDesc: "Hastelloy C-276 vs Inconel 625 — corrosion resistance, temperature performance and applications compared. Exotic alloy supplier in Vadodara, India.",
    tag: "Corrosion Control", date: "Dec 2025", readTime: "7 min read",
    intro: "When a process environment is too corrosive for stainless steel — whether due to hydrochloric acid, sulphuric acid, wet chlorine or high-temperature oxidising conditions — engineers turn to nickel-based superalloys. Hastelloy C-276 and Inconel 625 are the two most widely specified exotic alloys for such service. They look similar in catalogue listings but perform very differently in practice. Creative Metal Industries, Vadodara stocks both in pipes, plates, bars, fittings and flanges.",
    sections: [
      {
        heading: "Hastelloy C-276 — Composition and Properties",
        body: "Hastelloy C-276 (UNS N10276) is a nickel-molybdenum-chromium alloy with the following nominal composition: Nickel 57% (balance), Molybdenum 15–17%, Chromium 14.5–16.5%, Iron 4–7%, Tungsten 3–4.5%, Cobalt max 2.5%.\n\nThe very high molybdenum content (15–17%) is the defining feature of C-276. Molybdenum is the primary element responsible for resistance to reducing environments — particularly hydrochloric acid (HCl), sulphuric acid (H₂SO₄) and phosphoric acid. The combination of Mo, Cr and W gives C-276 outstanding resistance to pitting, crevice corrosion and stress corrosion cracking across a wide range of temperatures and concentrations.\n\nMechanical properties: Tensile strength 690 MPa minimum, Yield strength 0.2% 283 MPa minimum, Elongation 40% minimum. Density 8.89 g/cm³. Maximum service temperature in oxidising environments approximately 1040°C.",
      },
      {
        heading: "Inconel 625 — Composition and Properties",
        body: "Inconel 625 (UNS N06625) is a nickel-chromium-molybdenum alloy with niobium, with nominal composition: Nickel 58% minimum, Chromium 20–23%, Molybdenum 8–10%, Niobium + Tantalum 3.15–4.15%, Iron max 5%.\n\nThe key difference from C-276 is the higher chromium content (20–23% vs 14.5–16.5%) and the addition of niobium. High chromium gives 625 excellent resistance to oxidising environments and high-temperature oxidation. Niobium strengthens the alloy through precipitation hardening at elevated temperatures.\n\nMechanical properties (annealed): Tensile strength 827 MPa minimum, Yield strength 414 MPa minimum, Elongation 30% minimum. Density 8.44 g/cm³. Service temperature capability up to 980°C in oxidising atmospheres — significantly higher than C-276 in oxidising conditions.",
      },
      {
        heading: "Corrosion Resistance Comparison",
        body: "Reducing environments (HCl, H₂SO₄, wet process phosphoric acid): Hastelloy C-276 wins clearly. The 15–17% molybdenum content makes C-276 the benchmark alloy for HCl service. Inconel 625 has insufficient molybdenum for concentrated reducing acid service.\n\nOxidising environments (HNO₃, high-temperature oxidation, hot sulphuric acid above 60%): Inconel 625 wins. The high chromium forms a stable oxide layer. C-276 is not recommended for strongly oxidising acids.\n\nChloride pitting and crevice corrosion in seawater: Both perform well, but C-276 has a slight edge due to higher Mo. Both are used for seawater handling at ambient temperature.\n\nMixed acid environments (H₂SO₄ + HCl, or process streams with alternating oxidising and reducing conditions): C-276 is the safer choice due to its wider chemical resistance envelope.\n\nHigh-temperature service above 650°C: Inconel 625 is preferred — it maintains strength and oxidation resistance at temperatures where C-276 becomes borderline.",
      },
      {
        heading: "Weldability and Fabrication",
        body: "Both alloys are weldable using GTAW (TIG), GMAW (MIG) and SMAW processes. Both are supplied as ASTM B622 / B575 / B619 / B626 welded and seamless pipes, B443 sheets and plates, B564 forgings.\n\nHastelloy C-276 welding: Matching filler ERNiCrMo-4 (AWS A5.14). No PWHT required for most applications. The alloy is sensitive to sensitisation in the 600–800°C range — prolonged exposure must be avoided during fabrication.\n\nInconel 625 welding: Matching filler ERNiCrMo-3 (AWS A5.14). No PWHT required. 625 is very weld-stable and is actually used as overlay/cladding material on carbon steel pressure vessels to provide corrosion resistance at lower cost than solid 625 construction.\n\nBoth alloys work-harden rapidly during cold forming — intermediate annealing may be needed for complex shapes.",
      },
      {
        heading: "Real-World Applications",
        body: "Hastelloy C-276 applications: Flue gas desulphurisation (FGD) scrubbers in power plants, HCl acid production equipment, sulphuric acid coolers, pulp bleaching equipment, pharmaceutical reactor vessels, chemical waste treatment systems, sour gas (H₂S-containing) production equipment.\n\nInconel 625 applications: Offshore riser clamps and subsea components (seawater + cathodic protection), exhaust systems and heat shields in aerospace, gas turbine combustion liners and transition ducts, furnace hardware at temperatures above 700°C, nuclear reactor spacer grids and springs, high-strength flexible risers for deepwater oil production, weld overlay on carbon steel pressure vessels.\n\nBoth appear in the same industries — oil and gas, chemical, marine — but in different parts of the plant depending on the specific corrosive challenge.",
      },
      {
        heading: "Cost and Availability from Creative Metal Industries",
        body: "Both Hastelloy C-276 and Inconel 625 are premium-priced exotic alloys. In general, Inconel 625 is priced slightly lower than C-276 due to its lower molybdenum content (Mo is expensive). However, pricing varies significantly with form (pipe vs plate vs bar) and prevailing nickel and molybdenum prices.\n\nCreative Metal Industries, Vadodara stocks both alloys in pipes, plates, sheets, bars, buttweld fittings and flanges from approved mills including Haynes International, Special Metals (now PCC), VDM Metals and ThyssenKrupp. All material supplied with EN 10204 3.1 Mill Test Certificates with full chemical and mechanical test results.\n\nFor project requirements or urgent needs, contact our team at +91 99982 80619. We provide quotes within 24 hours with full material traceability documentation.",
      },
    ],
  },

  "understanding-pipe-schedules": {
    title: "Pipe Schedules Explained — SCH 5S, 10S, 40, 80, 160, XXS",
    seoTitle: "Pipe Schedule Chart SCH 40 80 160 Explained | CMI India",
    seoDesc: "Pipe schedule SCH 5S, 10S, 40S, 80S, 160, XXS explained — wall thickness, pressure rating and how to choose the right schedule. By Creative Metal Industries.",
    tag: "Technical Guide", date: "Nov 2025", readTime: "5 min read",
    intro: "Pipe schedule is one of the most frequently misunderstood concepts in piping engineering. Engineers and procurement teams often ask for 'schedule 40 pipe' without fully understanding what that means — or that the same schedule number means different wall thicknesses for different pipe sizes. This guide by Creative Metal Industries, Vadodara explains pipe schedules clearly, from SCH 5S to XXS, with practical guidance on how to select the right one for your application.",
    sections: [
      {
        heading: "What is a Pipe Schedule",
        body: "Pipe schedule is a number that defines the wall thickness of a pipe relative to its nominal bore (NB) size. The term comes from ASME/ANSI B36.10 (for carbon and alloy steel) and ASME/ANSI B36.19 (for stainless steel).\n\nCritically: the schedule number is NOT the wall thickness itself. It is a code that, combined with the nominal pipe size (NPS or NB), gives a specific wall thickness in millimetres. For example, a 2-inch (50NB) pipe in SCH 40 has a wall thickness of 3.91mm. The same 2-inch pipe in SCH 80 has a wall thickness of 5.54mm. Same outer diameter — completely different wall, weight and pressure rating.\n\nThe outer diameter (OD) of a pipe is fixed for a given NPS regardless of schedule. Only the wall thickness (and therefore the bore/inner diameter) changes with schedule.",
      },
      {
        heading: "The Schedule Number System — How It Works",
        body: "The original ANSI schedule system was defined so that: Schedule Number ≈ 1000 × (P/S), where P = service pressure in psi and S = allowable stress of the material in psi.\n\nThis means higher schedule numbers were designed for higher pressure service. Schedule 40 and 80 are the most common for general process piping. However, for stainless steel pipes, the 'S' suffix (SCH 10S, SCH 40S, SCH 80S) indicates the thinner-wall stainless steel schedules defined in ASME B36.19.\n\nImportant: SCH 40 and SCH 40S have the same wall thickness for pipes up to 10-inch NPS but differ for larger sizes. Always specify 'S' for stainless steel to ensure you are referencing ASME B36.19 dimensions.",
      },
      {
        heading: "SCH 5S, 10S, 40S, 80S, 160 and XXS — Practical Differences",
        body: "SCH 5S: Lightest wall. Used in low-pressure applications — instrument air, cooling water, gravity drain lines. Not recommended for high-pressure steam or process gas.\n\nSCH 10S: Standard for stainless steel process piping in low to medium pressure service. Common in pharmaceutical, food and general chemical plant piping where pressure is moderate and corrosion resistance is the primary requirement.\n\nSCH 40 / 40S: The workhorse schedule. Default for carbon steel process piping (ASTM A106 Gr.B, API 5L) and standard SS process piping. Suitable for most general process applications up to moderate pressure.\n\nSCH 80 / 80S: Heavier wall for higher pressure or elevated temperature service. Also used where erosion or corrosion allowance is needed. Common in high-pressure steam lines, hydraulic systems and slurry piping.\n\nSCH 160: Very heavy wall. Used in high-pressure, high-temperature critical service such as boiler steam headers, HP steam turbine inlet piping and high-pressure hydraulics.\n\nXXS (Extra Extra Strong): The heaviest standard schedule. Used in extreme high-pressure service, often with PWHT. Wall thickness can be 2–3× that of SCH 40 for the same pipe size.",
      },
      {
        heading: "Common Mistakes When Specifying Pipe Schedule",
        body: "Not specifying 'S' for stainless steel: Ordering 'SCH 40 SS pipe' without the S suffix can result in carbon steel schedule dimensions being applied. Always specify SCH 40S, SCH 10S for stainless.\n\nConfusing NB with OD: Nominal bore is NOT the outer diameter. A 2-inch (50NB) SS pipe has an OD of 60.33mm — significantly larger than 50mm. This matters for flange selection, fitting procurement and structural clearances.\n\nAssuming the same schedule means the same wall: A 4-inch SCH 40 pipe has a wall of 6.02mm. An 8-inch SCH 40 pipe has a wall of 8.18mm. The same schedule number gives different walls for different pipe sizes.\n\nNot checking pressure-temperature rating: The allowable working pressure of a schedule 40 pipe in SS 316L at 300°C is very different from the same pipe at 20°C. Always refer to ASME B31.3 tables for your specific material, schedule and temperature.",
      },
      {
        heading: "Creative Metal Industries Pipe Stock — All Schedules in Vadodara",
        body: "Creative Metal Industries maintains one of the most comprehensive pipe schedule inventories in Gujarat, Vadodara. Our ready stock covers:\n\nStainless Steel Pipes (ASTM A312): Grades TP304, TP304L, TP316, TP316L, TP317L, TP321, TP310S, TP347, TP904L in SCH 5S, 10S, 40S, 80S, 160 and XXS — sizes 6NB to 600NB.\n\nCarbon Steel Seamless Pipes (ASTM A106 Gr.B): SCH 40, 80, 160, XXS — sizes 6NB to 600NB. IBR Form III-C available.\n\nAlloy Steel Seamless Pipes (ASTM A335 P11, P22, P91): SCH 40 to XXS — IBR certified.\n\nAll pipes are supplied with original Mill Test Certificates from ISMT, Ratnamani, Sandvik, Salzgitter and other approved mills. Cut-to-size, bevel cutting and threading available at our Vadodara facility. Call +91 99982 80619 for current stock and pricing.",
      },
    ],
  },

  "titanium-grades-comparison": {
    title: "Titanium Grade 2 vs Grade 5 (Ti-6Al-4V) — Properties and Applications",
    seoTitle: "Titanium Grade 2 vs Grade 5 Properties | CMI India",
    seoDesc: "Titanium Grade 2 vs Grade 5 Ti-6Al-4V — corrosion resistance, strength, weight and applications compared. Titanium pipe and plate supplier in India.",
    tag: "Material Science", date: "Oct 2025", readTime: "6 min read",
    intro: "Titanium is one of the most remarkable engineering materials — combining very low density (4.5 g/cm³), outstanding corrosion resistance in seawater and oxidising acids, and mechanical strength comparable to steel. But not all titanium grades are the same. Grade 2 (commercially pure) and Grade 5 (Ti-6Al-4V, the most widely used titanium alloy) are the two grades most frequently specified in industrial and engineering applications. This guide by Creative Metal Industries explains which to choose for your application.",
    sections: [
      {
        heading: "Titanium Grade 2 — Commercially Pure Titanium",
        body: "Grade 2 is commercially pure (CP) titanium with a minimum 99.2% titanium content. The composition is essentially titanium with controlled levels of oxygen (max 0.25%), iron (max 0.30%), carbon, nitrogen and hydrogen as the only significant non-titanium elements.\n\nThe oxygen content is the primary strengthening element in CP titanium — Grade 1 (lowest oxygen) is the softest and most formable, while Grade 4 (highest oxygen among CP grades) is the strongest CP grade. Grade 2 sits in the middle with excellent balance of strength, corrosion resistance and formability.\n\nMechanical properties (ASTM B337 / B338 seamless and welded tubes): Tensile strength 344 MPa minimum, Yield strength 275 MPa minimum, Elongation 20% minimum. Density 4.51 g/cm³ — approximately 56% of steel density. Excellent cold formability — can be bent, drawn, rolled and welded without special precautions beyond titanium-specific cleanliness requirements.",
      },
      {
        heading: "Titanium Grade 5 — Ti-6Al-4V",
        body: "Grade 5 is the most widely used titanium alloy worldwide, accounting for approximately 50% of all titanium usage. Its nominal composition is Titanium 90%, Aluminium 5.5–6.75%, Vanadium 3.5–4.5%, with controlled levels of Fe, O, C, N and H.\n\nAluminium stabilises the alpha phase and provides solid-solution strengthening. Vanadium stabilises the beta phase. The resulting alpha-beta microstructure gives Ti-6Al-4V approximately twice the strength of Grade 2 while retaining good toughness and corrosion resistance.\n\nMechanical properties (ASTM B265 sheet, ASTM B337 pipe, annealed condition): Tensile strength 895 MPa minimum, Yield strength 828 MPa minimum, Elongation 10% minimum. Density 4.43 g/cm³. Hardness approximately 30–36 HRC. The high strength-to-weight ratio makes Grade 5 the standard material for aerospace structural components, medical implants and high-performance engineering.",
      },
      {
        heading: "Corrosion Resistance Comparison",
        body: "Both Grade 2 and Grade 5 form a stable, adherent titanium dioxide (TiO₂) passive film that provides excellent corrosion resistance in most environments. However, there are significant differences in specific environments:\n\nSeawater and marine: Both grades perform excellently in seawater at ambient temperature. Grade 2 is actually preferred for seawater handling in desalination plants and marine heat exchangers because the lower strength does not need to be fully utilised, and Grade 2 is cheaper and more readily available in tube form.\n\nOxidising acids (HNO₃): Both grades are excellent. Titanium is one of the best materials for concentrated nitric acid service.\n\nReducing acids (HCl, H₂SO₄): Both grades have limited resistance to hot reducing acids. Grade 7 (Grade 2 + 0.12–0.25% palladium) dramatically improves reducing acid resistance and should be specified if HCl or H₂SO₄ exposure is expected.\n\nHigh-temperature oxidising service: Grade 5 is preferred — it retains useful mechanical properties up to approximately 300°C in continuous service compared to Grade 2's practical limit of around 260°C.",
      },
      {
        heading: "Which Grade for Your Application",
        body: "Choose Grade 2 (CP Titanium) when: Corrosion resistance in seawater, chlorides or nitric acid is the primary requirement and high mechanical strength is not needed. Applications include desalination plant condenser tubes (ASTM B338), pharmaceutical reactor vessels, seawater cooling system piping, chemical plant heat exchanger tubes and architectural cladding.\n\nChoose Grade 5 (Ti-6Al-4V) when: High strength at low weight is the primary requirement — aerospace structural components, medical implants (ASTM F136 ELI grade for implants), automotive connecting rods, marine propeller shafts, high-performance fasteners, pressure vessel domes and sports equipment.\n\nChoose Grade 7 (Ti-0.2Pd) when: Reducing acid environments (HCl, H₂SO₄) are present. The palladium addition dramatically expands corrosion resistance to include hot reducing acids.\n\nChoose Grade 9 (Ti-3Al-2.5V) when: An intermediate option between Grade 2 and Grade 5 is needed — better strength than Grade 2 with better cold workability than Grade 5. Used in aerospace hydraulic tubing and bicycle frames.",
      },
      {
        heading: "Titanium Supply from Creative Metal Industries, Vadodara",
        body: "Creative Metal Industries is an established supplier of titanium in India, stocking Grade 1, Grade 2, Grade 5 (Ti-6Al-4V), Grade 7 and Grade 9 in multiple product forms from approved mills including VSMPO-AVISMA (Russia), ATI Metals (USA) and Timet (USA/Europe).\n\nAvailable forms: Seamless pipes and tubes (ASTM B337, B338), sheets and plates (ASTM B265), round bars and hex bars (ASTM B348), buttweld fittings (ASTM B363), forged flanges (ASTM B381), welded pipes (ASTM B338).\n\nAll titanium material supplied with EN 10204 3.1 Mill Test Certificates confirming chemistry and mechanical properties to the applicable ASTM grade. Special documentation requirements for aerospace or medical applications available on request.\n\nFor current pricing and stock availability across all titanium grades, contact Creative Metal Industries on +91 99982 80619 or visit our office at Loha Bhavan, Lakkadpitha Road, Vadodara 390001.",
      },
    ],
  },

  "erw-vs-seamless-pipe": {
    title: "ERW vs Seamless Pipe — When to Use Which?",
    seoTitle: "ERW vs Seamless Pipe — Difference & When to Use | CMI",
    seoDesc: "ERW vs seamless pipe — manufacturing, pressure rating, cost and applications compared. SS and CS pipe stockist in Vadodara supplying both types.",
    tag: "Buyer's Guide", date: "Sep 2025", readTime: "5 min read",
    intro: "The most fundamental choice in industrial pipe procurement is often: ERW (Electric Resistance Welded) or seamless? Both serve the same basic purpose — conveying fluids under pressure — but they differ fundamentally in manufacturing process, strength, inspection requirement, cost and suitability for different service conditions. This guide by Creative Metal Industries, Vadodara helps procurement engineers and project teams make the right choice.",
    sections: [
      {
        heading: "How Seamless Pipe is Made",
        body: "Seamless pipes are produced without any weld seam. The manufacturing process starts with a solid cylindrical steel billet that is heated and pierced to create a hollow shell (the Mannesmann process), then elongated and rolled to the required outside diameter and wall thickness.\n\nBecause there is no weld, the pipe has uniform metallurgical properties throughout its entire cross-section. There are no weld-related defects — no lack of fusion, no porosity, no heat-affected zone (HAZ) with potentially reduced toughness. This makes seamless pipe inherently stronger and more reliable than welded pipe in high-stress applications.\n\nSeamless pipes are governed by ASTM A106 (carbon steel), ASTM A312 (stainless steel), ASTM A335 (alloy steel) and API 5L (line pipe) among others. Size range is typically 6NB to 600NB, with heavier schedules more readily available in seamless than in ERW.",
      },
      {
        heading: "How ERW Pipe is Made",
        body: "ERW (Electric Resistance Welded) pipes are made from flat steel strip (skelp) that is formed into a cylindrical shape and welded longitudinally using high-frequency electric resistance welding. The heat generated by electrical resistance at the joint interface fuses the steel edges together without adding filler material.\n\nModern HFI (High Frequency Induction) ERW pipes produced by quality mills such as APL Apollo, Tata Steel, JSW and Tenaris have weld quality that is verified by automated NDT — ultrasonic testing (UT), eddy current or flux leakage testing of the weld seam.\n\nERW pipes are governed by IS 1239 (for general structural use in India), API 5L (for line pipe), ASTM A53 and ASTM A513. The typical size range is 15NB to 600NB. Heavier walls (beyond SCH 40–80) become progressively less available in ERW and seamless becomes the more practical option.",
      },
      {
        heading: "Pressure and Temperature Rating Differences",
        body: "For the same material, size and wall thickness, an ERW pipe and a seamless pipe of equal dimensions should have theoretically identical pressure ratings. In practice, however, design codes apply a joint efficiency factor (E) that reduces the allowable stress of welded pipe:\n\nASME B31.3 (Process Piping): Seamless pipe E = 1.0. ERW pipe E = 0.85. This means you need a thicker wall ERW pipe to achieve the same pressure rating as a seamless pipe.\n\nIBR (Indian Boiler Regulations): IBR does not permit ERW pipes in boiler pressure parts or superheater tubes — only seamless pipes are permitted. This is a critical regulatory requirement that makes seamless mandatory for steam service.\n\nAt elevated temperatures above 450°C: Only seamless pipes should be specified. ERW pipes may have weld seam properties that degrade faster than the parent material at high temperatures.",
      },
      {
        heading: "Cost Comparison",
        body: "ERW pipes are significantly cheaper than seamless pipes of the same material, size and wall thickness. The cost difference is typically:\n\nCarbon steel IS 1239 ERW vs ASTM A106 seamless: ERW is 20–40% cheaper for the same NB and weight.\n\nStainless steel ERW (ASTM A312 welded) vs seamless: ERW is typically 25–45% cheaper, depending on grade. SS 304 and 316L welded pipes represent the majority of stainless pipe usage in chemical and food industries because most applications do not require seamless.\n\nThis cost difference can be substantial in large projects. A refinery engineer who specifies seamless SS 316L throughout a low-pressure cooling water system is spending 30–45% more than necessary on material cost.",
      },
      {
        heading: "When to Use Seamless vs ERW — Decision Guide",
        body: "Always use seamless when: Boiler, superheater or steam service (IBR requirement). High-temperature service above 450°C. High-pressure service (above 70 bar). Design code requires joint efficiency E = 1.0. Alloy steel grades P11, P22, P91 (these are only available in seamless). Sour service with NACE MR-0175 compliance. Critical line classifications in oil and gas projects where full inspection is required.\n\nERW is acceptable and preferred when: Low to medium pressure process piping (below 40 bar). General service — cooling water, instrument air, utility lines. Structural applications — handrails, frames, mechanical tubing. IS 1239 class piping for building services. Large diameter (above 600NB) where seamless is not commercially available — SAW/LSAW is used. API 5L line pipe in PSL 1 moderate service (ERW X52/X65 is widely used for gas distribution).",
      },
      {
        heading: "Stock ERW and Seamless Pipes from Creative Metal Industries",
        body: "Creative Metal Industries maintains comprehensive ready stock of both ERW and seamless pipes at our GIDC Makarpura warehouse in Vadodara:\n\nSeamless Pipes: ASTM A106 Gr.B/C (carbon steel), ASTM A312 TP304/316L/321/347 (stainless), ASTM A335 P11/P22/P91 (alloy steel), API 5L Gr.B to X70 — IBR Form III-C available — sizes 6NB to 600NB.\n\nERW / HFW Pipes: IS 1239 light/medium/heavy (APL Apollo, Tata, JSW), API 5L ERW Grade B to X65, ASTM A53 ERW, SS 304/316L welded (ASTM A312 welded) — sizes 15NB to 1200NB.\n\nAll material supplied with Mill Test Certificates. IBR Form III-C for seamless pipes as required. Third-party inspection accepted. Contact +91 99982 80619 or email creativemetalind@gmail.com for availability and pricing.",
      },
    ],
  },
};

export default function BlogPost() {
  const params = useParams();
  const article = ARTICLES[params.slug];

  if (!article) {
    return (
      <PageLayout active="Blog">
        <Title>Article Not Found | Creative Metal Industries Blog</Title>
        <Meta name="robots" content="noindex, follow" />
        <Meta name="description" content="This article is not available. Browse our technical guides on stainless steel, alloy steel, duplex and exotic alloys." />
        <section class="page-hero">
          <div class="container">
            <h1>Article Not Found</h1>
            <p>This article does not exist. <a href="/blog" style="color:var(--amber)">Browse all articles →</a></p>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout active="Blog">
      <Title>{article.seoTitle}</Title>
      <Meta name="description" content={article.seoDesc} />
      <Link rel="canonical" href={`https://www.creativemetalind.com/blog/${params.slug}`} />
      <Meta property="og:type"        content="article" />
      <Meta property="og:title"       content={article.seoTitle} />
      <Meta property="og:description" content={article.seoDesc} />
      <Meta property="og:url"         content={`https://www.creativemetalind.com/blog/${params.slug}`} />
      <Meta property="og:image"       content="https://www.creativemetalind.com/logo_cmi.png" />
      <Meta name="twitter:card"        content="summary_large_image" />
      <Meta name="twitter:title"       content={article.seoTitle} />
      <Meta name="twitter:description" content={article.seoDesc} />

      <section class="page-hero page-hero-sm">
        <div class="container">
          <div class="article-meta-top">
            <span class="blog-tag">{article.tag}</span>
            <span class="blog-date">{article.date}</span>
            <span class="blog-read-time">🕐 {article.readTime}</span>
          </div>
          <h1 class="article-title">{article.title}</h1>
          <p class="article-intro">{article.intro}</p>
          <a href="/blog" class="blog-link" style="font-size:0.875rem">← Back to Blog</a>
        </div>
      </section>

      <section class="article-body">
        <div class="container">
          <div class="article-content">
            {article.sections.map(s => (
              <div class="article-section">
                <h2>{s.heading}</h2>
                {s.body.split("\n\n").map(para => <p>{para}</p>)}
              </div>
            ))}
            <div class="article-cta-box">
              <h3>Need to source this material?</h3>
              <p>Creative Metal Industries stocks SS 304, 316L, Duplex 2205, Super Duplex 2507 and all other grades in pipes, plates, fittings and flanges. Call us or send an enquiry.</p>
              <div style="display:flex;gap:1rem;flex-wrap:wrap;margin-top:1.25rem">
                <a href="/#contact" class="btn btn-primary">Send Enquiry →</a>
                <a href="tel:+919998280619" class="btn btn-outline">📞 +91 99982 80619</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
