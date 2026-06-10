import { Title, Meta, Link } from "@solidjs/meta";
import { createSignal, onMount, onCleanup, For, Index, createMemo, createEffect } from "solid-js";

// ─── Image path helpers ───────────────────────────────────────────────────────
const I  = (name: string) => `/img/${name}`;      // product cards (original size)
const IH = (name: string) => `/img-hq/${name}`;   // hero slideshow (1200px upscaled)

// Helper for Pexels CDN — returns full 1920×1080 high-quality image
const P = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop`;

// ─── Hero slideshow — local /img/ files, split layout ────────────────────────
const SLIDESHOW = [
  { img: IH("ss_seamless_pipe.webp"),     caption: "SS Seamless Pipes",          grade: "TP 304, 304L, 316, 316L, 317L, 321, 310S, 347, 904L",        spec: "ASTM A312 / A213 · SCH 5S to XXS · 6NB–600NB · IBR Form III-C" },
  { img: IH("ss_welded_pipe.jpeg"),       caption: "SS Welded Pipes",            grade: "TP 304, 316L, 321, 309, 310S",                                spec: "ASTM A312 ERW/EFW/SAW · 15NB–1200NB · All Schedules" },
  { img: IH("cs_seamless_pipe.webp"),     caption: "Carbon Steel Seamless Pipes",grade: "API 5L Gr.B, ASTM A106 Gr.B/C",                              spec: "ASTM A106/A53 · IBR Form III-C · ISMT, Jindal, Maharashtra Seamless" },
  { img: IH("alloy_steel_pipe.jpeg"),     caption: "Alloy Steel Pipes",          grade: "P-5, P-9, P-11, P-12, P-22, P-91, P-92",                    spec: "ASTM A335 · High-Temp Service · Sumitomo, Vallourec, ISMT" },
  { img: IH("erw_pipe.jpeg"),             caption: "ERW Pipes",                  grade: "IS 1239 / IS 3589 / API 5L",                                 spec: "15NB–600NB · Light/Medium/Heavy · APL Apollo, Tata, JSW" },
  { img: IH("ss_tubes.jpeg"),             caption: "SS Tubes",                   grade: "TP 304, 316L, 321, 347, Duplex 2205",                        spec: "ASTM A213/A249/A269/A270 · Heat Exchanger & Instrumentation" },
  { img: IH("boiler_tubes.jpeg"),         caption: "Boiler Tubes",               grade: "SA 179, SA 192, SA 210 Gr.A1, SA 213 T11/T22/T91",          spec: "IBR Form III-C · Hydraulic Test Cert · ISMT, Sandvik" },
  { img: IH("line_pipes.webp"),           caption: "Line Pipes",                 grade: "API 5L x42, x52, x60, x65, x70, x80",                       spec: "PSL1 & PSL2 · Seamless / ERW / HSAW / LSAW" },
  { img: IH("ss_buttweld_fittings.jpg"),  caption: "SS Buttweld Fittings",       grade: "TP 304, 316L, 317L, 321, 310, 904L, Duplex 2205",           spec: "ASTM A403/A815 · Elbows, Tees, Reducers · ASME B16.9" },
  { img: IH("forged_fittings.webp"),      caption: "Forged Fittings — SS",       grade: "F304, F316L, F321, F51 Duplex, F53 Super Duplex",            spec: "ASTM A182 · SW & Threaded · 2000# to 9000# · ASME B16.11" },
  { img: IH("olets_branch_fitting.webp"), caption: "Olets & Branch Fittings",    grade: "All grades SS / CS / AS / Duplex / Inconel",                 spec: "Weldolet, Sockolet, Threadolet · MSS SP-97" },
  { img: IH("ss_flanges.webp"),           caption: "SS Flanges",                 grade: "F304, F316L, F321, F51 Duplex, F53 Super Duplex",            spec: "ASTM A182 · ASME B16.5 (2500#) & B16.47 · IBR" },
  { img: IH("cs-flanges.webp"),           caption: "CS / AS Flanges",            grade: "A105, A350 LF2, F11, F22, F91, F92",                        spec: "ASTM A105/A182 · ASME B16.5/B16.47 · IBR Form III-C" },
  { img: IH("SS-Sheets.webp"),            caption: "SS Sheets & Plates",         grade: "SS 304, 316L, 317L, 321, 310, 409, 410, 904L",              spec: "ASTM A240/A480 · CR 0.4mm–6mm · Plates 5mm–150mm · Cut-to-size" },
  { img: IH("duplex-plates.webp"),        caption: "Duplex Steel Plates",        grade: "UNS S31803 (2205), S32205",                                  spec: "ASTM A240 · 3mm–100mm · Chemical, Desalination" },
  { img: IH("super_duplex-plates.webp"),  caption: "Super Duplex Plates",        grade: "UNS S32750 (2507), S32760, S32520",                          spec: "ASTM A240 · PREN > 40 · Offshore, Subsea, Seawater" },
  { img: IH("carbon-steel-plate.webp"),   caption: "Carbon Steel Plates",        grade: "IS 2062 E250/E350, SA 516 Gr.60/70, A36, A572 Gr.50",       spec: "Boiler Quality · NACE/HIC · IBR · 5mm–200mm · SAIL, AMNS" },
  { img: IH("alloy-steel-plate.webp"),    caption: "Alloy Steel Plates",         grade: "ASTM A387 Gr.5, 9, 11, 12, 22, 91 Cl.1 & 2",               spec: "High-Temp Pressure Vessel · Normalised & Tempered · IBR" },
  { img: IH("hardox-sheet-plate.webp"),   caption: "Hardox / Wear Plates",       grade: "Hardox 400/450/500/600, Abrex 400/500, S690QL",             spec: "SSAB, TATA, SAIL · Mining, Cement, Construction" },
  { img: IH("clad_plates.webp"),          caption: "Clad Plates",                grade: "CS/SS · CS/Inconel · CS/Monel · CS/Titanium",               spec: "ASTM A263/A264/A265 · Explosion & Roll Bonded" },
  { img: IH("ms-angle.webp"),             caption: "MS Angles (ISMC)",           grade: "IS 2062 E250/E350, ASTM A36",                               spec: "Equal 25×25 to 200×200mm · SAIL, VSP, JSW, TATA" },
  { img: IH("ms-channel.webp"),           caption: "MS Channels (ISMC)",         grade: "IS 2062 E250",                                               spec: "ISMC 75 to ISMC 400 · IS 808 · Crane Girders, Structures" },
  { img: IH("ms_beam.webp"),              caption: "MS Beams (ISMB / ISWB)",     grade: "IS 2062 E250",                                               spec: "ISMB 100–600, ISWB 150–600 · IS 808 · Heavy Structural" },
  { img: IH("ms-round-bar.webp"),         caption: "MS Round Bars",              grade: "IS 2062, EN8, EN9, EN24, EN31",                              spec: "6mm–500mm dia · Bright Drawn Available · SAIL, Rolling Mills" },
  { img: IH("TMT-Bars.webp"),             caption: "TMT Bars",                   grade: "Fe 500 / 500D / 550D / 600",                                 spec: "IS 1786 · 8mm–40mm · BIS Marked · SAIL, JSW, TATA, VSP" },
  { img: IH("duplex-steel.webp"),         caption: "Duplex Steel",               grade: "UNS S31803 (2205), S32205, S32304, S32101",                  spec: "ASTM A790/A240/A182 · Pipes, Plates, Fittings · 2× SS Strength" },
  { img: IH("super-duplex-steel.webp"),   caption: "Super Duplex Steel",         grade: "UNS S32750 (2507), S32760 (Zeron 100)",                      spec: "PREN > 40 · Seawater, Offshore, Subsea, Chemical Plants" },
  { img: IH("Inconel.webp"),              caption: "Inconel Alloys",             grade: "Alloy 600 (N06600), 625 (N06625), 718 (N07718), 825",       spec: "ASTM B444/B443/B407 · High-Temp Oxidation Resistant" },
  { img: IH("Monel.webp"),                caption: "Monel Alloys",               grade: "Monel 400 (N04400), K-500 (N05500)",                         spec: "ASTM B165/B127/B164 · Seawater & HF Acid Resistant" },
  { img: IH("hastelloy.webp"),            caption: "Hastelloy",                  grade: "C-22 (N06022), C-276 (N10276), B-2 (N10665), B-3",         spec: "ASTM B622/B575 · HCl, H₂SO₄, Wet Chlorine Resistant" },
  { img: IH("incoloy.webp"),              caption: "Incoloy / Alloy 20",         grade: "Incoloy 800/800H/800HT, Alloy 20 (N08020)",                 spec: "ASTM B407/B409/B729 · Carburisation Resistant" },
  { img: IH("titanium.webp"),             caption: "Titanium",                   grade: "Grade 1 (CP), Grade 2 (CP), Grade 5 (Ti-6Al-4V), Gr.7, 9", spec: "ASTM B337/B338/B265 · Seawater, HNO₃ · Aerospace, Chemical" },
  { img: IH("aluminium-alloys.webp"),     caption: "Aluminium & Alloys",         grade: "1100, 3003, 5052, 5083, 6061-T6, 6063-T5, 7075-T6",        spec: "ASTM B209/B210/B241 · Marine, Aerospace, Automotive" },
  { img: IH("brass-vs-copper.webp"),      caption: "Copper, Brass & Bronze",     grade: "ETP C11000, DHP C12200, CuNi 70/30, Naval Brass C46400",    spec: "ASTM B88/B111/B152 · Marine, Electrical, Heat Exchanger Tubes" },
];

const PRODUCT_CATEGORIES = [
  {
    id: "pipes-tubes",
    label: "Pipes & Tubes",
    icon: "🛢️",
    image: "/products/ss-pipe-fitting.webp",
    tagline: "Seamless & Welded Pipes and Tubes in SS, Carbon, Alloy Steel and Exotic Metals",
    items: [
      { name: "SS Seamless Pipe",  imgs: [I("ss_seamless_pipe.webp"), I("ss_seamless_pipes.jpeg")], grade: "TP 304, 304L, 316, 316L, 316Ti, 321, 310, 317L, 347, 410, 420, 904L", make: "Sandvik, Salzgitter, Ratnamani, Venus",   note: "ASTM A312/A213. All schedules SCH5S to XXS. 6NB to 600NB. IBR Form III-C. Oil & Gas, Petrochemical, Power." },
      { name: "SS Welded Pipe",    imgs: [I("ss_welded_pipe.jpeg")],                               grade: "TP 304, 316, 316L, 321, 309, 310S",                                     make: "Various approved mills",                note: "ASTM A312 ERW/EFW/SAW. 15NB to 1200NB. All schedules. Longitudinal and spiral welded." },
      { name: "CS Seamless Pipe",  imgs: [I("cs_seamless_pipe.webp")],                             grade: "Gr.B, Gr.C — IBR available",                                            make: "ISMT, Jindal, Maharashtra Seamless",    note: "ASTM A106/A53. 6NB to 600NB SCH 40 to XXS. API 5L Gr.B available. IBR Form III-C." },
      { name: "Alloy Steel Pipe",  imgs: [I("alloy_steel_pipe.jpeg"), I("Alloy.webp")],            grade: "P-5, P-9, P-11, P-12, P-22, P-91, P-92",                               make: "Sumitomo, Vallourec, ISMT",             note: "ASTM A335. High-temperature service. Creep-resistant P91/P92 for ultra-supercritical boilers. IBR." },
      { name: "ERW Pipe",          imgs: [I("erw_pipe.jpeg")],                                     grade: "IS 1239 / IS 3589 / API 5L",                                            make: "APL Apollo, Tata, JSW",                 note: "15NB to 600NB. Light/Medium/Heavy class. Black, galvanized, epoxy coated. SHS/RHS also available." },
      { name: "SS Tubes",          imgs: [I("ss_tubes.jpeg")],                                     grade: "TP 304, 316L, 321, 347, Duplex 2205",                                   make: "Sandvik, Plymouth, Tubacex",            note: "ASTM A213/A249/A269/A270. Heat exchanger, condenser, instrumentation, hygienic and U-bend tubes." },
      { name: "Boiler Tubes",      imgs: [I("boiler_tubes.jpeg")],                                 grade: "SA 179, SA 192, SA 210 Gr.A1, SA 213 T11/T22/T91",                     make: "ISMT, Sandvik",                         note: "Seamless boiler and superheater tubes. IBR Form III-C. Hydraulic test certification available." },
      { name: "Line Pipes",        imgs: [I("line_pipes.webp")],                                   grade: "API 5L x42, x46, x52, x56, x60, x65, x70, x80",                       make: "Jindal, APL, JSW",                      note: "Seamless/ERW/HSAW/LSAW. PSL1 and PSL2. Mill hydro test certificates and MTC provided." },
    ],
  },
  {
    id: "fittings",
    label: "Pipes, Fittings & Flanges",
    icon: "⚙️",
    image: "/products/ms-fittings.jpeg",
    tagline: "Buttweld, Forged, Branch Fittings & Flanges in SS, Carbon, Alloy and Exotic Metals — IBR & Non-IBR",
    items: [
      { name: "SS Buttweld Fittings",      imgs: [I("ss_buttweld_fittings.jpg")],                                grade: "TP 304, 316, 316L, 317L, 321, 310, 904L, Duplex 2205, Super Duplex 2507", make: "Various", note: "ASTM A403/A815. Elbows 45°/90°/180°, equal/reducing tees, reducers, stub ends, caps. SCH 10S to XXS. ASME B16.9." },
      { name: "CS/AS Buttweld Fittings",   imgs: [I("cs_buttweld_fitting.webp"), I("as_buttweld_fitting.webp")], grade: "WPB, WPC, WP11, WP22, WP91",                                              make: "Various", note: "ASTM A234/A420. All types. IBR Form III-C. ASME B16.9. SCH 40 to XXS. Power plants, oil refineries." },
      { name: "Forged Fittings (SS)",      imgs: [I("forged_fittings.webp")],                                    grade: "F304, F316L, F321, F51 Duplex, F53 Super Duplex",                         make: "Various", note: "ASTM A182. Socket weld and threaded. 2000# to 9000# class. ASME B16.11. Elbows, tees, couplings, plugs." },
      { name: "Forged Fittings (CS/AS)",   imgs: [I("forged_fitting_cs.webp"), I("forged_fitting_as.webp")],     grade: "A105, A350 LF2, F11, F22, F91",                                           make: "Various", note: "ASTM A105/A182. SW/Threaded. 2000# to 9000#. IBR Form III-C. ASME B16.11." },
      { name: "Olets / Branch Fittings",   imgs: [I("olets_branch_fitting.webp")],                               grade: "All grades SS/CS/AS/Duplex/Inconel",                                       make: "Various", note: "Weldolet, sockolet, threadolet, elbolet, latrolet, nipolet. MSS SP-97. All pressure classes." },
      { name: "SS Flanges",                imgs: [I("ss_flanges.webp")],                                         grade: "F304, F316, F316L, F317L, F321, F310, F904L, F51 Duplex, F53 Super Duplex",make: "Various", note: "ASTM A182. Slip-on, weld neck, blind, SW, threaded, lap joint, orifice. ASME B16.5 (2500#) & B16.47. IBR." },
      { name: "CS/AS Flanges",             imgs: [I("cs-flanges.webp"), I("as_flanges.webp")],                   grade: "A105, A350 LF2, F11, F22, F91, F92",                                      make: "Various", note: "ASTM A105/A182. All types. ASME B16.5/B16.47. IBR Form III-C. Raised face, flat face, RTJ." },
      { name: "Compression Tube Fittings", imgs: [I("compression-tube-fittings.webp")],                          grade: "SS 316/316L, CS, Duplex",                                                  make: "Swagelok / Parker type", note: "Double & single ferrule. 3mm to 38mm tube OD. Instrumentation, chemical injection, hydraulic systems." },
    ],
  },
  {
    id: "plates-sheets",
    label: "Plates & Sheets",
    icon: "📋",
    image: "/products/ss-sheet.jpeg",
    tagline: "Stainless, Carbon, Alloy, Boiler Quality, Wear Resistant Plates and Sheets — all mill standards",
    items: [
      { name: "SS Sheet / Plate",            imgs: [I("SS-Sheets.webp")],                                    grade: "TP 301, 304, 304L, 316, 316L, 317L, 321, 310, 309, 347, 409, 410, 420, 904L", make: "Jindal, POSCO, Aperam, Outokumpu", note: "ASTM A240/A480. CR sheets 0.4mm-6mm: 2B, BA, No.4, Mirror finishes. Plates 5mm-150mm. Cut-to-size." },
      { name: "Duplex / Super Duplex Plate", imgs: [I("duplex-plates.webp"), I("super_duplex-plates.webp")],  grade: "UNS S31803 (2205), UNS S32750 (2507), UNS S32760, S32205",                  make: "Outokumpu, Sandvik, POSCO",        note: "ASTM A240. Plates 3mm-100mm. High strength with excellent corrosion resistance. Chemical, desalination." },
      { name: "Carbon Steel Plate",          imgs: [I("carbon-steel-plate.webp"), I("ms_plate.webp")],        grade: "IS 2062 E250/E350, SA 516 Gr.60/70, SA 537 Cl.1/2, ASTM A36, A572 Gr.50",   make: "SAIL, AMNS, TATA, JSW",           note: "Boiler quality, pressure vessel, structural. NACE, HIC stock available. IBR. 5mm-200mm thick." },
      { name: "Alloy Steel Plate",           imgs: [I("alloy-steel-plate.webp")],                             grade: "ASTM A387 Gr.5, 9, 11, 12, 22, 91 Class 1 & 2",                             make: "SAIL, AMNS, TATA",                 note: "High-temperature pressure vessel service. Normalised and tempered. PWR tested. IBR available." },
      { name: "Hardox / Wear Plate",         imgs: [I("hardox-sheet-plate.webp"), I("wear_plate.webp")],      grade: "Hardox 400/450/500/600, Abrex 400/500, S690QL, Weldox 700/900",             make: "SSAB, TATA, SAIL, AMNS",          note: "Corten A/B, S355J2+N, Hiten, Welten in all sizes. Abrasion & impact resistant. Mining, cement, construction." },
      { name: "Clad Plates",                 imgs: [I("clad_plates.webp")],                                   grade: "CS/SS, CS/Inconel, CS/Monel, CS/Titanium",                                   make: "NobelClad, Titanium Industries",   note: "Explosion bonded and roll bonded. ASTM A263/A264/A265. Corrosion resistance + structural strength." },
    ],
  },
  {
    id: "structural",
    label: "Structural Steel",
    icon: "🏗️",
    image: "/products/structure.jpeg",
    tagline: "IS 2062 structural sections, bars and TMT — SAIL, JSW, TATA, VSP",
    items: [
      { name: "MS Angle",                     imgs: [I("ms-angle.webp")],                                                                grade: "IS 2062 E250/E350, ASTM A36",  make: "SAIL, VSP, JSW, TATA",            note: "Equal: 25×25 to 200×200mm. Unequal: 75×50 to 200×150mm. 3mm-20mm thick. Hot rolled. 6/9/12m lengths." },
      { name: "MS Channel (ISMC)",            imgs: [I("ms-channel.webp")],                                                             grade: "IS 2062 E250",                 make: "SAIL, VSP, JSW",                  note: "ISMC 75 to ISMC 400 as per IS 808. Crane girders, conveyor structures, building frames." },
      { name: "MS Beam (ISMB/ISWB/ISHB)",    imgs: [I("ms_beam.webp")],                                                                grade: "IS 2062 E250",                 make: "SAIL, VSP, JSW",                  note: "ISMB 100-600, ISWB 150-600, ISHB 150-450 per IS 808. Heavy structural applications." },
      { name: "MS Plate (HR / Chequered)",   imgs: [I("ms_plate.webp")],                                                               grade: "IS 2062 E250/E350, ASTM A36",  make: "SAIL, AMNS, JSW, TATA",           note: "3mm-150mm thick. All standard sizes. Cut-to-size. Chequered plates IS 3502 available." },
      { name: "MS Round/Square/Flat/Hex Bar", imgs: [I("ms-round-bar.webp"), I("ms_square_bar.webp"), I("ms-flat-bar.webp"), I("ms-hex-bar.webp")], grade: "IS 2062, EN8, EN9, EN24, EN31", make: "SAIL, Rolling Mills", note: "Round 6-500mm, Square 6-200mm, Flat 10-300mm, Hex 6-100mm A/F. Bright drawn available." },
      { name: "TMT / CRS Bars",              imgs: [I("TMT-Bars.webp"), I("CRS_Bars.webp")],                                          grade: "Fe 500 / 500D / 550D / 600",   make: "SAIL, JSW, TATA, VSP, Gallantt, Varrsana", note: "IS 1786. 8mm-40mm dia. 12m lengths. BIS marked. Primary and secondary ISI approved makes." },
    ],
  },
  {
    id: "special-alloys",
    label: "Special Alloys",
    icon: "✨",
    image: "/products/ss-pipe-fitting.webp",
    tagline: "Exotic & Special Alloys — Duplex, Inconel, Monel, Hastelloy, Incoloy, Titanium, Aluminium, Copper, Bronze",
    items: [
      { name: "Duplex Steel",       imgs: [I("duplex-steel.webp"), I("duplex-plates.webp")],             grade: "UNS S31803 (2205), S32205, S32304, S32101",                                  make: "Sandvik, Outokumpu, Tubacex",        note: "ASTM A790/A240/A182/A815. Pipes, plates, fittings, flanges, bars. 2× strength of austenitic SS. Chloride SCC resistant. Oil & gas, desalination." },
      { name: "Super Duplex",       imgs: [I("super-duplex-steel.webp"), I("super_duplex-plates.webp")], grade: "UNS S32750 (2507), UNS S32760 (Zeron 100), S32520",                          make: "Sandvik, Outokumpu, Voestalpine",    note: "ASTM A790/A240/A182. PREN > 40. Seawater, offshore, subsea, chemical plants. All product forms." },
      { name: "Inconel",            imgs: [I("Inconel.webp")],                                           grade: "Alloy 600 (N06600), 625 (N06625), 718 (N07718), 800 (N08800), 825 (N08825)", make: "Special Metals, Haynes, ThyssenKrupp", note: "ASTM B444/B443/B407/B409. Pipes, plates, bars, fittings, flanges. High-temp oxidation and corrosion resistance." },
      { name: "Monel",              imgs: [I("Monel.webp")],                                             grade: "Monel 400 (N04400), K-500 (N05500)",                                          make: "Special Metals, Corrotherm",         note: "ASTM B165/B127/B164/B366. Pipes, plates, bars, fittings. Excellent in seawater and hydrofluoric acid. Marine, oil refining." },
      { name: "Hastelloy",          imgs: [I("hastelloy.webp")],                                         grade: "C-22 (N06022), C-276 (N10276), C-4 (N06455), B-2 (N10665), B-3, X",         make: "Haynes, Special Metals",             note: "ASTM B622/B575/B574/B619. Pipes, plates, bars, fittings. Resists HCl, H2SO4, wet chlorine. Chemical, pharmaceutical." },
      { name: "Incoloy / Alloy 20", imgs: [I("incoloy.webp")],                                          grade: "Incoloy 800/800H/800HT (N08800), Alloy 20 (N08020)",                         make: "Special Metals, Haynes",             note: "ASTM B407/B409/B729. Carburisation and sulphidation resistance. Petrochemical furnace components, heat exchangers." },
      { name: "Titanium",           imgs: [I("titanium.webp")],                                          grade: "Grade 1 (CP), Grade 2 (CP), Grade 5 (Ti-6Al-4V), Grade 7, Grade 9",          make: "VSMPO, ATI, Timet",                  note: "ASTM B337/B338/B265/B348/B363. Pipes, sheets, bars, fittings, flanges. Seawater and HNO3 resistance. Aerospace, chemical." },
      { name: "Aluminium & Alloys", imgs: [I("aluminium-alloys.webp")],                                  grade: "1100, 2024, 3003, 5052, 5083, 6061-T6, 6063-T5, 7075-T6",                   make: "Hindalco, Nalco, Imported",          note: "ASTM B209/B210/B211/B241. Sheets 0.4-200mm, Pipes 6NB-300NB, Bars all shapes, Sections. Marine, aerospace, automotive." },
      { name: "Copper & Brass",     imgs: [I("brass-vs-copper.webp")],                                   grade: "ETP C11000, DHP C12200, CuNi 70/30 C71500, CuNi 90/10 C70600, Naval Brass C46400, Phosphor Bronze C51000", make: "Hindalco, Mueller, KME", note: "ASTM B88/B111/B152/B187. Pipes, tubes, sheets, bars, strips. Heat exchanger tubes, electrical conductors, marine, plumbing." },
    ],
  },
];

const BRANDS = [
  { name: "SAIL / JINDAL / JSW",  img: "https://cdn.lohalive.com/lohalive/images/5e457dca-7849-427f-b9f6-fa3f55e342a0.png" },
  { name: "JINDAL ODISHA",        img: "https://cdn.lohalive.com/lohalive/images/7c67d7e0-62eb-49ce-a961-517e6c655745.png" },
  { name: "TATA STEEL",           img: "https://cdn.lohalive.com/lohalive/images/05802b9c-b2ea-4ece-b9b2-2ff904b12490.png" },
  { name: "JSPL",                 img: "https://cdn.lohalive.com/lohalive/images/5c8f8a03-16e3-46de-b793-e7ecfe5493ff.png" },
  { name: "SAIL",                 img: "https://cdn.lohalive.com/lohalive/images/851a03b4-1b71-4e20-9d2a-256f29be4aa7.png" },
  { name: "AM/NS",                img: "https://cdn.lohalive.com/lohalive/images/4a934e66-0f9e-429e-ab9c-c1110b28a338.png" },
  { name: "RINL VIZAG",           img: "https://cdn.lohalive.com/lohalive/images/00afb9cb-8349-4050-8d26-86a0b6d374e2.png" },
  { name: "MSP",                  img: "https://cdn.lohalive.com/lohalive/images/e8596e1d-4652-47b5-a66a-b0c2dcd15cd4.png" },
];

const METALS = [
  { icon: "⚪", name: "Stainless Steel (Austenitic)", grade: "SS 304, 304L, 316, 316L, 317L, 321, 310, 347, 904L",          forms: "Pipes · Tubes · Plates · Fittings · Flanges · Bars", tag: "Most Stocked" },
  { icon: "🔩", name: "Carbon & Low Alloy Steel",     grade: "IS 2062, ASTM A106/A36, SA 516, API 5L",                      forms: "Pipes · Plates · Structural · ERW",                 tag: "IBR Available" },
  { icon: "🟠", name: "Alloy Steel",                  grade: "P5, P9, P11, P22, P91, P92, T11, T22, T91",                  forms: "Seamless Pipes · Tubes · Plates · Fittings",        tag: "High Temp" },
  { icon: "🔵", name: "Duplex & Super Duplex",        grade: "S31803 (2205), S32750 (2507), S32760, S32205",                forms: "Pipes · Plates · Fittings · Flanges · Bars",        tag: "Corrosion Resistant" },
  { icon: "🟡", name: "Inconel / Monel / Hastelloy",  grade: "Inconel 600/625/718, Monel 400, Hastelloy C-276/C-22",       forms: "Pipes · Plates · Bars · Fittings · Flanges",        tag: "Exotic Alloy" },
  { icon: "🔶", name: "Titanium",                     grade: "Grade 1, 2, 5 (Ti-6Al-4V), Grade 7, Grade 9",                forms: "Pipes · Sheets · Bars · Fittings · Flanges",        tag: "High Performance" },
  { icon: "🟤", name: "Copper & Cupro-Nickel",        grade: "ETP C11000, DHP C12200, CuNi 70/30, 90/10",                  forms: "Pipes · Tubes · Sheets · Bars · Strips",            tag: "Non-Ferrous" },
  { icon: "⬜", name: "Aluminium & Alloys",            grade: "1100, 5052, 5083, 6061-T6, 6063, 7075-T6",                  forms: "Sheets · Pipes · Bars · Sections",                  tag: "Lightweight" },
  { icon: "🟫", name: "Bronze & Brass",               grade: "Phosphor Bronze C51000, Naval Brass C46400, Al Bronze C63000",forms: "Pipes · Bars · Sheets · Flanges",                   tag: "Marine Grade" },
  { icon: "🔴", name: "Wear Resistant & Special Plate",grade: "Hardox 400/500, SA 516, Corten A/B, S690QL",               forms: "Plates · All Sizes · All Shapes",                    tag: "Specialty Steel" },
];

const NEWS = [
  { date: "Jun 2026", title: "India Safeguard Duty 12% on Flat Steel Imports",    body: "India imposed 12% safeguard duty on selected flat steel imports from China, Vietnam and Nepal. CMI domestic stock unaffected — full availability maintained." },
  { date: "May 2026", title: "SS 316L & Duplex 2205 Prices Firm on Nickel Rally", body: "Global nickel price increase pushes 316L and duplex 2205 pipe and plate rates higher. Lock your rates now — contact us for current pricing." },
  { date: "Apr 2026", title: "P91 Alloy Steel IBR Compliant Stock Available",     body: "We now carry ready stock of SA 335 P91 seamless pipes with IBR Form III-C certification for ultra-supercritical boiler projects." },
];

const BLOG_POSTS = [
  {
    slug: "ss-304-vs-316l",
    tag: "Technical Guide",
    date: "May 2026",
    title: "SS 304 vs SS 316L — Which Stainless Steel Grade Should You Choose?",
    excerpt: "Choosing between SS 304 and SS 316L is one of the most common decisions in process piping. This guide covers corrosion resistance, temperature limits, cost difference and ideal applications for each grade so you can make the right call for your project.",
    readTime: "5 min read",
    icon: "🔬",
  },
  {
    slug: "how-to-read-mtc",
    tag: "Buyer's Guide",
    date: "Apr 2026",
    title: "How to Read a Mill Test Certificate (MTC) — A Practical Guide for Engineers",
    excerpt: "A Mill Test Certificate (EN 10204 3.1/3.2) is your proof of material quality. We explain every field — chemical composition, mechanical properties, heat number, test methods — so you can verify your material is exactly what you ordered.",
    readTime: "6 min read",
    icon: "📄",
  },
  {
    slug: "duplex-vs-super-duplex",
    tag: "Material Science",
    date: "Mar 2026",
    title: "Duplex 2205 vs Super Duplex 2507 — Understanding the Difference",
    excerpt: "Both are dual-phase austenitic-ferritic steels but with very different performance profiles. Learn the PREN values, chloride resistance, strength levels, and when to specify each for offshore, desalination and chemical processing.",
    readTime: "7 min read",
    icon: "⚗️",
  },
  {
    slug: "p91-alloy-steel-power-plants",
    tag: "Industry Insight",
    date: "Feb 2026",
    title: "Why P91 Alloy Steel is Critical for Modern Power Plants",
    excerpt: "Grade P91 (9Cr-1Mo-V) has become the backbone of ultra-supercritical boiler systems. We explore its creep resistance, PWHT requirements, IBR compliance and why it commands a premium over P22 and P11 in high-temperature service.",
    readTime: "8 min read",
    icon: "⚡",
  },
  {
    slug: "astm-a312-vs-api-5l",
    tag: "Specification Guide",
    date: "Jan 2026",
    title: "ASTM A312 vs API 5L — Choosing the Right Pipe Standard for Your Application",
    excerpt: "Both cover steel pipes but for entirely different services. ASTM A312 governs austenitic stainless steel for chemical and general service, while API 5L covers carbon and low-alloy steel for oil and gas transmission. Full comparison inside.",
    readTime: "6 min read",
    icon: "📐",
  },
  {
    slug: "hastelloy-vs-inconel",
    tag: "Corrosion Control",
    date: "Dec 2025",
    title: "Hastelloy C-276 vs Inconel 625 — Which Nickel Alloy for Corrosive Service?",
    excerpt: "Two of the most popular exotic alloys, but they behave very differently in service. Hastelloy C-276 excels in reducing environments (HCl, H2SO4), while Inconel 625 is better at high-temperature oxidising conditions. Detailed comparison with use cases.",
    readTime: "7 min read",
    icon: "🧪",
  },
];

const SERVICES = [
  { icon: "🏭", title: "Manufacturer & Stockist",    desc: "We manufacture, stock and supply. Not a middleman — direct from our Vadodara facility and authorised mill network." },
  { icon: "🌍", title: "Import & Worldwide Sourcing", desc: "Direct import channels from Europe, Japan, Korea and USA for specialty grades not available domestically." },
  { icon: "📄", title: "MTC & IBR Documentation",    desc: "Mill Test Certificates (EN 10204 3.1/3.2), IBR Form III-C, NACE, HIC, PWHT reports for every consignment." },
  { icon: "🔬", title: "Third-Party Inspection",     desc: "Inspection under BVIS, DNV, TUV, SGS, LRIS and customer TPI agencies. Stage-wise inspection available." },
  { icon: "✂️", title: "Value-Added Processing",     desc: "Cut-to-size, bevel cutting, threading, polishing, pickling, passivation and heat treatment services." },
  { icon: "🚚", title: "Pan-India & Export Delivery", desc: "Dispatched from 1092 sq.mtr GIDC Makarpura yard. Exports to UAE, Oman, Bahrain, Kuwait, UK, USA and worldwide." },
];

const INDUSTRIES = [
  { icon: "🛢️", name: "Oil & Gas" },        { icon: "🏭", name: "Petrochemicals" },
  { icon: "⚡", name: "Power & Energy" },    { icon: "🌱", name: "Fertilizers" },
  { icon: "🧪", name: "Chemicals & Pharma" },{ icon: "🧱", name: "Cement & Mining" },
  { icon: "🚂", name: "Railways & Metro" },  { icon: "⚓", name: "Marine & Offshore" },
  { icon: "✈️", name: "Aerospace & Defence"},{ icon: "🏥", name: "Food & Pharma Equip" },
  { icon: "💧", name: "Water & Desalination"},{ icon: "🏗️", name: "Construction & EPC" },
];

const TICKER_ITEMS = [
  "SS Pipes · Plates · Fittings · Flanges",
  "Duplex Steel 2205 · Super Duplex 2507",
  "Inconel 625 · Monel 400 · Hastelloy C-276",
  "Carbon Steel IBR Certified",
  "Alloy Steel P91 · P22 · P11",
  "Titanium · Aluminium · Copper",
  "MTC · IBR · NACE · HIC Certified",
  "Manufacturer · Stockist · Supplier",
  "Export to 50+ Countries",
];

const FAQS = [
  {
    q: "What types of stainless steel pipes do you supply?",
    a: "We supply SS seamless and welded pipes in grades TP 304, 304L, 316, 316L, 317L, 321, 310S, 347, 409, 410, 420 and 904L as per ASTM A312 and A213. Available in all schedules from SCH 5S to XXS, sizes 6NB to 600NB. We also stock Duplex 2205 and Super Duplex 2507 pipes.",
  },
  {
    q: "Do you supply Alloy Steel Pipes for high-temperature service?",
    a: "Yes. We are stockists of Alloy Steel seamless pipes as per ASTM A335 in grades P5, P9, P11, P12, P22, P91 and P92. These are used in boilers, superheaters and ultra-supercritical power plants. Available with IBR Form III-C certification.",
  },
  {
    q: "Which exotic alloys do you stock?",
    a: "We stock Inconel (600/625/718/825), Monel (400/K500), Hastelloy (C-22/C-276/B-2/B-3), Incoloy (800/825), Duplex 2205, Super Duplex 2507, Titanium (Gr.1/2/5), Aluminium alloys (6061/6063/7075), Copper, Cupro-Nickel and Brass in all product forms.",
  },
  {
    q: "What certifications and documentation do you provide?",
    a: "We provide Mill Test Certificates (MTC) as per EN 10204 3.1/3.2, IBR Form III-C for boiler and pressure vessel materials, NACE MR-01-75 compliance, HIC tested plates, and third-party inspection under DNV, TUV, SGS, BVIS and LRIS.",
  },
  {
    q: "Do you supply to Oil & Gas and Petrochemical industries?",
    a: "Yes. Oil & Gas, Petrochemicals, Fertilizers, Power plants, Cement, Chemicals and Refineries are our primary industries. We supply API 5L Line Pipes (x42 to x80), SS seamless pipes, alloy steel P91/P22 pipes, and exotic alloys used in these critical applications.",
  },
  {
    q: "Do you export outside India?",
    a: "Yes. We export to UAE, Oman, Bahrain, Kuwait, Saudi Arabia, UK, USA and other countries. We handle export documentation, packing lists, and can arrange third-party inspection at our Vadodara facility before shipment.",
  },
  {
    q: "What is your minimum order quantity?",
    a: "We supply from single pieces to full truck/container loads. There is no fixed minimum — we cater to both small workshops and large EPC contractors. Contact us with your requirement and we will provide the best price and availability.",
  },
  {
    q: "Where are you located and how can I visit?",
    a: "Our office is at F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road, Vadodara 390001, Gujarat. Our godown and yard is at 386/B, GIDC Estate, Makarpura, Vadodara. We are open Monday to Saturday, 9 AM to 7 PM. Call Sunny Shah on +91 99982 80619 before visiting.",
  },
];

const ACHIEVEMENTS = [
  { num: "2012", label: "Year Established", icon: "🏭" },
  { num: "15+", label: "Years Experience", icon: "📅" },
  { num: "500+", label: "Projects Delivered", icon: "✅" },
  { num: "50+", label: "Countries Exported", icon: "🌍" },
  { num: "10+", label: "Metal Alloy Families", icon: "⚙️" },
  { num: "1092", label: "Sq.Mtr Yard Area", icon: "🏗️" },
];

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = createSignal(false);
  const [menuOpen, setMenuOpen] = createSignal(false);
  onMount(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    onCleanup(() => window.removeEventListener("scroll", fn));
  });
  const links = [
    { href: "#about",         label: "About Us" },
    { href: "#product-tabs",  label: "Products" },
    { href: "#metals",        label: "Materials" },
    { href: "#services",      label: "Services" },
    { href: "#industries", label: "Industries" },
    { href: "#faq",        label: "FAQ" },
    { href: "/blog",       label: "Blog" },
    { href: "#contact",    label: "Contact" },
  ];
  return (
    <>
      <nav class={`nav ${scrolled() ? "scrolled" : ""}`} aria-label="Main navigation">
        <div class="container nav-inner">
          <a href="/" class="nav-logo" aria-label="Creative Metal Industries — Home">
            <img
              src="/logo_cmi.png"
              alt="Creative Metal Industries — SS Pipes, Plates & Fittings Manufacturer, Vadodara"
              class="logo-img"
              width="160"
              height="81"
              fetchpriority="high"
            />
          </a>
          <ul class="nav-links">
            <For each={links}>{(l) => <li><a href={l.href}>{l.label}</a></li>}</For>
          </ul>
          <div class="nav-cta">
            <a href="tel:+919998280619" class="btn btn-outline" style="padding:0.5rem 1rem;font-size:0.83rem">📞 +91 99982 80619</a>
            <a href="#contact" class="btn btn-primary" style="padding:0.5rem 1rem;font-size:0.83rem">Get a Quote</a>
          </div>
          <button class="hamburger" aria-label="Open menu" onClick={() => setMenuOpen(true)}><span/><span/><span/></button>
        </div>
      </nav>
      <div class={`mobile-menu ${menuOpen() ? "open" : ""}`} role="dialog">
        <button class="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
        <For each={links}>{(l) => <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>}</For>
        <a href="#contact" class="btn btn-primary" onClick={() => setMenuOpen(false)}>Get a Quote</a>
      </div>
    </>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section class="hero" aria-label="Hero">
      <div class="hero-organic" aria-hidden="true"/>
      <div class="hero-organic2" aria-hidden="true"/>
      <div class="hero-rays" aria-hidden="true"/>
      <div class="container">
        <div class="hero-inner">
          <div class="hero-content">
            <div class="hero-badge">🏭 Manufacturer · Stockist · Supplier — Vadodara, Gujarat</div>
            <h1>Premium <em>SS Pipes, Pipe Fittings,<br/>Flanges &amp; Plates</em></h1>
            <p class="hero-sub">
              Creative Metal Industries, Vadodara — manufacturer, stockist and supplier of
              Stainless Steel, Duplex, Carbon &amp; Alloy Steel Pipes, Plates, Fittings,
              Flanges and Exotic Alloys. Serving Oil &amp; Gas, Petrochemical, Power and
              Fertilizer industries worldwide.
            </p>
            <div class="hero-actions">
              <a href="#contact" class="btn btn-primary">Request a Quote →</a>
              <a href="#product-tabs" class="btn btn-outline">View Products</a>
            </div>
            <div class="hero-stats">
              <div class="stat-item"><span class="stat-num">15+</span><span class="stat-label">Years Experience</span></div>
              <div class="stat-item"><span class="stat-num">50+</span><span class="stat-label">Countries Served</span></div>
              <div class="stat-item"><span class="stat-num">500+</span><span class="stat-label">Projects Done</span></div>
            </div>
          </div>
          <div class="hero-visual" aria-hidden="true">
            <div class="hero-card-main">
              <div class="hero-card-emoji">🛢️</div>
              <div class="hero-card-tag">📦 In Stock — Vadodara</div>
              <h3>SS 316L Seamless Pipes</h3>
              <p>ASTM A312 · SCH 10S to XXS · 6NB to 600NB · Ready stock at Vadodara</p>
            </div>
            <div class="hero-float-badge">
              <div class="badge-icon">�</div>
              <div><strong>Est. 2012</strong><span>Vadodara, Gujarat</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div class="ticker" aria-hidden="true">
      <div class="ticker-track">
        <For each={items}>{(item) => (<><span class="ticker-item">{item}</span><span class="ticker-dot"/></>)}</For>
      </div>
    </div>
  );
}

// ─── Mini image slideshow for product cards ──────────────────────────────────
function CardImgSlider(props: { imgs: string[]; name: string }) {
  const [idx, setIdx] = createSignal(0);
  let timer: ReturnType<typeof setInterval> | undefined;

  const startTimer = () => {
    if (props.imgs.length > 1) {
      timer = setInterval(() => setIdx(i => (i + 1) % props.imgs.length), 2200);
    }
  };
  const stopTimer = () => { clearInterval(timer); };

  onMount(startTimer);
  onCleanup(stopTimer);

  return (
    <div class="pdc-img-wrap"
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
    >
      <Index each={props.imgs}>{(src, i) => (
        <img
          src={src()}
          alt={`${props.name} ${i + 1}`}
          loading="lazy"
          class={`pdc-slide-img ${idx() === i ? "active" : ""}`}
        />
      )}</Index>
      {props.imgs.length > 1 && (
        <div class="pdc-slide-dots" aria-hidden="true">
          <Index each={props.imgs}>{(_, i) => (
            <span class={`pdc-slide-dot ${idx() === i ? "active" : ""}`} />
          )}</Index>
        </div>
      )}
    </div>
  );
}

// ─── Products — Slideshow + tabbed categories ────────────────────────────────
function ProductsSection() {
  const [slide, setSlide] = createSignal(0);
  onMount(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % SLIDESHOW.length), 3500);
    onCleanup(() => clearInterval(t));
  });
  const [activeTab, setActiveTab] = createSignal("pipes-tubes");
  const [selected, setSelected] = createSignal<null | typeof PRODUCT_CATEGORIES[0]["items"][0]>(null);
  const activeCategory = () => PRODUCT_CATEGORIES.find(c => c.id === activeTab())!;

  // Collect all images from all items in the active category
  const bannerImgs = createMemo(() =>
    activeCategory().items.flatMap(item => item.imgs)
  );
  const [bannerIdx, setBannerIdx] = createSignal(0);
  let bannerTimer: ReturnType<typeof setInterval> | undefined;

  const startBannerTimer = () => {
    clearInterval(bannerTimer);
    bannerTimer = setInterval(() =>
      setBannerIdx(i => (i + 1) % bannerImgs().length), 2000
    );
  };

  // Reset index and restart timer when tab changes
  createEffect(() => {
    bannerImgs(); // track dependency
    setBannerIdx(0);
    startBannerTimer();
  });

  onMount(startBannerTimer);
  onCleanup(() => clearInterval(bannerTimer));

  const cur = () => SLIDESHOW[slide()];

  return (
    <section class="products-section" id="products" aria-label="Product range">

      {/* ── Split-layout hero slideshow ── */}
      <div class="hero-split-slide" role="region" aria-label="Product slideshow">

        {/* Left: info panel */}
        <div class="hss-info">
          <span class="section-label">Creative Metal Industries · Vadodara</span>
          <h2 class="hss-title">{cur().caption}</h2>
          <div class="hss-grade">
            <span class="hss-label">Grade / Standard</span>
            <span>{cur().grade}</span>
          </div>
          <div class="hss-spec">
            <span class="hss-label">Specification</span>
            <span>{cur().spec}</span>
          </div>
          <div class="hss-actions">
            <a href="#contact" class="btn btn-primary">Request a Quote →</a>
            <a href="#product-tabs" class="btn btn-outline">View All Products</a>
          </div>
        </div>

        {/* Right: image panel */}
        <div class="hss-img-wrap">
          <For each={SLIDESHOW}>{(s, i) => (
            <img
              src={s.img}
              alt={s.caption}
              loading={i() === 0 ? "eager" : "lazy"}
              class={`hss-img ${slide() === i() ? "active" : ""}`}
            />
          )}</For>
          {/* Dot navigation */}
          <div class="hss-dots" role="tablist" aria-label="Slide navigation">
            <For each={SLIDESHOW}>{(_, i) => (
              <button
                role="tab"
                aria-selected={slide() === i()}
                aria-label={`Slide ${i() + 1}`}
                class={`hss-dot ${slide() === i() ? "active" : ""}`}
                onClick={() => setSlide(i())}
              />
            )}</For>
          </div>
          {/* Arrows */}
          <button class="hss-arrow hss-prev" aria-label="Previous"
            onClick={() => setSlide(s => (s - 1 + SLIDESHOW.length) % SLIDESHOW.length)}>‹</button>
          <button class="hss-arrow hss-next" aria-label="Next"
            onClick={() => setSlide(s => (s + 1) % SLIDESHOW.length)}>›</button>
        </div>

      </div>

      <div class="container" id="product-tabs">
        <div class="section-head-center" style="margin-top:4rem">
          <span class="section-label">Our Product Range</span>
          <h2>Pipes · Fittings · Plates · Structural · Special Alloys</h2>
          <p>Click a category to see full product list with specifications, grades and standards.</p>
        </div>
        <div class="prod-tabs" role="tablist">
          <For each={PRODUCT_CATEGORIES}>{(cat) => (
            <button role="tab" aria-selected={activeTab() === cat.id}
              class={`prod-tab ${activeTab() === cat.id ? "active" : ""}`}
              onClick={() => setActiveTab(cat.id)}>
              <span class="prod-tab-icon">{cat.icon}</span><span>{cat.label}</span>
            </button>
          )}</For>
        </div>
        <div class="cat-banner">
          <div class="cat-banner-img">
            <Index each={bannerImgs()}>{(src, i) => (
              <img
                src={src()}
                alt={`${activeCategory().label} ${i + 1}`}
                loading="lazy"
                class={`cat-banner-slide ${bannerIdx() === i ? "active" : ""}`}
              />
            )}</Index>
            {bannerImgs().length > 1 && (
              <div class="cat-banner-dots" aria-hidden="true">
                <Index each={bannerImgs()}>{(_, i) => (
                  <button
                    class={`cat-banner-dot ${bannerIdx() === i ? "active" : ""}`}
                    onClick={(e) => { e.stopPropagation(); setBannerIdx(i); startBannerTimer(); }}
                    aria-label={`Image ${i + 1}`}
                  />
                )}</Index>
              </div>
            )}
          </div>
          <div class="cat-banner-info">
            <span class="section-label">{activeCategory().icon} {activeCategory().label}</span>
            <h3>{activeCategory().tagline}</h3>
            <p style="color:var(--muted);font-size:0.9rem;margin-top:0.5rem">
              {activeCategory().items.length} products · {bannerImgs().length} images — click any card for full specifications
            </p>
          </div>
        </div>
        <div class="prod-detail-grid" role="list">
          <For each={activeCategory().items}>{(item) => (
            <button class="prod-detail-card" role="listitem"
              onClick={() => setSelected(item)} aria-label={`View ${item.name}`}>
              <CardImgSlider imgs={item.imgs} name={item.name} />
              <div class="pdc-body">
                <h4>{item.name}</h4>
                <div class="pdc-grade"><span class="pdc-label">Grade</span><span>{item.grade}</span></div>
                <div class="pdc-make"><span class="pdc-label">Make</span><span>{item.make}</span></div>
                <p class="pdc-note">{item.note}</p>
              </div>
              <span class="pdc-enquire">View &amp; Enquire →</span>
            </button>
          )}</For>
        </div>
        <div class="view-more-wrap">
          <a href="/products" class="btn btn-primary">📐 Steel Product Specifications &amp; Size Charts →</a>
          <a href="#contact" class="btn btn-outline">Can't find your grade? Send us an indent →</a>
        </div>
      </div>

      {selected() && (
        <div class="prod-modal-overlay" role="dialog" aria-modal="true"
          onClick={(e) => { if ((e.target as HTMLElement).classList.contains("prod-modal-overlay")) setSelected(null); }}>
          <div class="prod-modal">
            <button class="prod-modal-close" aria-label="Close" onClick={() => setSelected(null)}>✕</button>
            <div class="prod-modal-img">
              <img src={selected()!.imgs[0]} alt={selected()!.name}/>
            </div>
            <div class="prod-modal-body">
              <span class="section-label">{activeCategory().icon} {activeCategory().label}</span>
              <h2>{selected()!.name}</h2>
              <div class="prod-modal-specs">
                <div class="spec-row"><span class="spec-label">Grade / Standard</span><span class="spec-val">{selected()!.grade}</span></div>
                <div class="spec-row"><span class="spec-label">Available Make</span><span class="spec-val">{selected()!.make}</span></div>
                <div class="spec-row spec-note"><span class="spec-label">Product Details</span><span class="spec-val">{selected()!.note}</span></div>
              </div>
              <div class="prod-modal-actions">
                <a href="#contact" class="btn btn-primary" onClick={() => setSelected(null)}>Send Enquiry →</a>
                <a href="tel:+919998280619" class="btn btn-outline">📞 Call Now</a>
              </div>
              <p class="prod-modal-cert">🏅 IBR Form III-C · MTC on all material · Export worldwide</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// ─── Brands ──────────────────────────────────────────────────────────────────
function BrandsSection() {
  const logos = [...BRANDS, ...BRANDS];
  return (
    <section class="brands-section" aria-label="Mill sources">
      <div class="container">
        <div class="section-head-center">
          <span class="section-label">Our Mill Sources</span>
          <h2>Top Brands &amp; Mills</h2>
        </div>
        <div class="brands-track-wrap" aria-hidden="true">
          <div class="brands-track">
            <For each={logos}>{(b) => (
              <div class="brand-logo-item">
                <img src={b.img} alt={b.name} loading="lazy" width="120" height="60"/>
              </div>
            )}</For>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Metals & Alloys ─────────────────────────────────────────────────────────
function MetalsSection() {
  return (
    <section class="services" id="metals" style="background:var(--white)" aria-label="Metals">
      <div class="container">
        <div class="services-header">
          <div>
            <span class="section-label">What We Stock &amp; Supply</span>
            <h2>Metals &amp; Alloys</h2>
          </div>
          <p>Manufacturer, stockist and direct importer of all major grades — full traceability and certifications for critical applications.</p>
        </div>
        <div class="services-grid" role="list">
          <For each={METALS}>{(m) => (
            <article class="service-card metal-card" role="listitem">
              <div class="service-icon" aria-hidden="true">{m.icon}</div>
              <div class="metal-tag">{m.tag}</div>
              <h3>{m.name}</h3>
              <p style="font-size:0.82rem;margin-top:0.4rem;color:var(--muted)"><strong style="color:var(--ink)">Grades:</strong> {m.grade}</p>
              <p style="font-size:0.82rem;margin-top:0.25rem;color:var(--muted)"><strong style="color:var(--ink)">Forms:</strong> {m.forms}</p>
              <a href="#products" class="service-link">View Products →</a>
            </article>
          )}</For>
        </div>
        <div class="special-note-banner">
          <div class="snb-icon">✨</div>
          <div class="snb-body">
            <strong>We Manufacture &amp; Stock Special &amp; Exotic Grades</strong>
            <p>
              Duplex 2205 · Super Duplex 2507 · Inconel 600/625/718/825 · Monel 400/K500 ·
              Hastelloy C-22/C-276 · Aluminium 6061/6063/7075 · Bronze &amp; Brass ·
              Titanium Gr.1/2/5 · Copper &amp; Cupro-Nickel 70/30 &amp; 90/10
            </p>
            <p style="margin-top:0.4rem;font-size:0.8rem;opacity:0.8">
              Available in Pipes, Plates, Sheets, Bars, Fittings &amp; Flanges — all sizes and ASTM/ASME standards.
            </p>
          </div>
          <a href="#products" class="btn btn-primary snb-btn" style="flex-shrink:0">
            See All Special Grades →
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Services ────────────────────────────────────────────────────────────────
function ServicesSection() {
  return (
    <section class="services-alt" id="services" aria-label="Our services">
      <div class="container">
        <div class="section-head-center">
          <span class="section-label">What We Offer</span>
          <h2>Our Services</h2>
        </div>
        <div class="services-alt-grid" role="list">
          <For each={SERVICES}>{(s) => (
            <article class="service-alt-card" role="listitem">
              <div class="service-alt-icon" aria-hidden="true">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href="#contact" class="service-link">Learn More →</a>
            </article>
          )}</For>
        </div>
      </div>
    </section>
  );
}

// ─── Industries ───────────────────────────────────────────────────────────────
function Industries() {
  return (
    <section class="industries" id="industries" aria-label="Industries we serve">
      <div class="container">
        <div class="industries-header">
          <span class="section-label">Industries We Serve</span>
          <h2>Critical Industry Supply</h2>
          <p>Our IBR, NACE and MTC certified materials supply the most demanding industries across the globe.</p>
        </div>
        <div class="industries-grid" role="list">
          <For each={INDUSTRIES}>{(ind) => (
            <div class="industry-card" role="listitem">
              <div class="ind-icon" aria-hidden="true">{ind.icon}</div>
              <div class="ind-name">{ind.name}</div>
            </div>
          )}</For>
        </div>
      </div>
    </section>
  );
}

// ─── About / Company Profile ──────────────────────────────────────────────────
function AboutSection() {
  return (
    <section class="about-section" id="about" aria-label="About Creative Metal Industries">
      <div class="container">

        {/* ── Section label + heading ── */}
        <div class="about-top">
          <div class="about-top-left">
            <span class="section-label">About Us</span>
            <h2>Creative Metal Industries</h2>
            <p class="about-tagline">Vadodara's Trusted Manufacturer, Stockist &amp; Supplier of Industrial Steel &amp; Alloys</p>
          </div>
          <div class="about-top-divider" aria-hidden="true"/>
          <div class="about-top-right">
            <p>
              Established in <strong>2012</strong> and headquartered at <strong>Loha Bhavan,
              Lakkadpitha Road, Vadodara, Gujarat</strong>, Creative Metal Industries is a
              premier manufacturer, stockist and supplier of Stainless Steel, Carbon Steel,
              Alloy Steel and Exotic Metal products for the most demanding industrial
              applications.
            </p>
            <p>
              With over <strong>15 years of combined industry experience</strong>, our team of
              qualified engineers and procurement specialists delivers a comprehensive range
              of SS/CS/AS Pipes, Tubes, Plates, Sheets, Buttweld &amp; Forged Fittings,
              Flanges, Structural Steel and Special Alloys including Duplex, Inconel, Monel,
              Hastelloy, Titanium, Aluminium and Copper products.
            </p>
            <p>
              Operating from a <strong>1,092 sq.mtr warehouse and yard at GIDC Makarpura,
              Vadodara</strong>, we maintain deep ready stock and offer value-added services
              including cut-to-size, bevel cutting, threading and surface finishing. Materials
              are regularly inspected by <strong>DNV, TUV, SGS, BVIS and LRIS</strong>.
            </p>
            <p>
              We export to <strong>UAE, Oman, Bahrain, Kuwait, Saudi Arabia, UK, USA</strong> and
              over 50 countries globally, serving Oil &amp; Gas, Petrochemical, Power, Fertilizer,
              Cement, Chemical, Pharmaceutical, Marine and Defence industries.
            </p>
          </div>
        </div>

        {/* ── 4 pillars ── */}
        <div class="about-pillars">
          <div class="pillar-card">
            <div class="pillar-icon-wrap"><span class="pillar-icon">🎯</span></div>
            <div class="pillar-body">
              <h4>Our Mission</h4>
              <p>To supply the highest quality metals with complete documentation, at competitive prices, delivered on time — every time.</p>
            </div>
          </div>
          <div class="pillar-card">
            <div class="pillar-icon-wrap"><span class="pillar-icon">🔬</span></div>
            <div class="pillar-body">
              <h4>Quality Policy</h4>
              <p>All material supplied with original Mill Test Certificates. Third-party inspection accepted under any internationally recognised agency.</p>
            </div>
          </div>
          <div class="pillar-card">
            <div class="pillar-icon-wrap"><span class="pillar-icon">🌍</span></div>
            <div class="pillar-body">
              <h4>Global Reach</h4>
              <p>Export to 50+ countries with full documentation — packing lists, certificate of origin and sea/air freight support.</p>
            </div>
          </div>
          <div class="pillar-card">
            <div class="pillar-icon-wrap"><span class="pillar-icon">⚡</span></div>
            <div class="pillar-body">
              <h4>Fast Response</h4>
              <p>Quote within 24 hours. Urgent requirements on priority. Emergency stock dispatch from Vadodara same day.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── Achievement Stats Bar ────────────────────────────────────────────────────
function StatsBar() {
  return (
    <section class="stats-bar" aria-label="Company achievements">
      <div class="container">
        <div class="stats-grid" role="list">
          <For each={ACHIEVEMENTS}>{(a) => (
            <div class="stats-item" role="listitem">
              <div class="stats-icon-wrap" aria-hidden="true">
                <span class="stats-icon">{a.icon}</span>
              </div>
              <div class="stats-num">{a.num}</div>
              <div class="stats-label">{a.label}</div>
            </div>
          )}</For>
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose CMI ───────────────────────────────────────────────────────────
function WhyChooseUs() {
  const points = [
    { icon: "🏭", title: "Direct Manufacturer & Stockist", body: "We manufacture and stock — no middlemen, no mark-up layers. You get mill-direct pricing with full traceability from our Vadodara facility." },
    { icon: "📦", title: "Deep Ready Stock", body: "1,092 sq.mtr warehouse at GIDC Makarpura carries ready stock of SS 304/316L pipes, alloy steel P11/P22/P91, duplex 2205, carbon steel plates SA 516, and structural steel sections." },
    { icon: "🌐", title: "Worldwide Sourcing Network", body: "Direct import channels from Sandvik, Salzgitter, Outokumpu, POSCO, Sumitomo, Vallourec and other approved mills in Europe, Japan, Korea and USA." },
    { icon: "📄", title: "Complete Documentation", body: "MTC (EN 10204 3.1/3.2), IBR Form III-C, NACE, HIC, PWHT, hydro test and stage-wise inspection reports provided. Accepted by EIL, PDIL, Toyo, Technip and major EPCs." },
    { icon: "✂️", title: "Value-Added Processing", body: "Cut-to-size, plasma and oxy-fuel cutting, bevel cutting, threading, hot-dip galvanizing, pickling, passivation, polishing and heat treatment at our Vadodara facility." },
    { icon: "🚀", title: "Fastest Turnaround in Gujarat", body: "Same-day dispatch for stocked items. 48-hour quotation for indent materials. Export shipments handled within 7 working days of order confirmation." },
  ];
  return (
    <section class="why-choose-section" id="why-us" aria-label="Why choose Creative Metal Industries">
      <div class="container">
        <div class="section-head-center">
          <span class="section-label">Why Choose Us</span>
          <h2>Why Creative Metal Industries is Gujarat's Preferred Steel Supplier</h2>
          <p>Over 15 years of expertise, deep stock, complete documentation and a global sourcing network — here's what sets us apart.</p>
        </div>
        <div class="why-grid-6" role="list">
          <For each={points}>{(p) => (
            <article class="why-card" role="listitem">
              <div class="why-card-icon" aria-hidden="true">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </article>
          )}</For>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ Section ──────────────────────────────────────────────────────────────
function FAQSection() {
  const [open, setOpen] = createSignal<number | null>(0);
  const toggle = (i: number) => setOpen(o => o === i ? null : i);
  const left  = () => FAQS.filter((_, i) => i % 2 === 0);
  const right = () => FAQS.filter((_, i) => i % 2 !== 0);

  const FAQItem = (props: { faq: typeof FAQS[0]; globalIdx: number }) => (
    <div class={`faq-item ${open() === props.globalIdx ? "open" : ""}`}>
      <button
        class="faq-question"
        aria-expanded={open() === props.globalIdx}
        onClick={() => toggle(props.globalIdx)}
      >
        <span class="faq-q-num">0{props.globalIdx + 1}</span>
        <span class="faq-q-text">{props.faq.q}</span>
        <span class="faq-chevron" aria-hidden="true">
          {open() === props.globalIdx ? "−" : "+"}
        </span>
      </button>
      {open() === props.globalIdx && (
        <div class="faq-answer">
          <p>{props.faq.a}</p>
        </div>
      )}
    </div>
  );

  return (
    <section class="faq-section" id="faq" aria-label="Frequently asked questions">
      <div class="container">
        <div class="faq-header">
          <div class="faq-header-left">
            <span class="section-label">FAQ</span>
            <h2>Frequently Asked<br/>Questions</h2>
            <p>
              Can't find an answer? Call us at{" "}
              <a href="tel:+919998280619" style="color:var(--amber);font-weight:600">
                +91 99982 80619
              </a>{" "}
              or{" "}
              <a href="#contact" style="color:var(--amber);font-weight:600">
                send an enquiry
              </a>.
            </p>
          </div>
          <div class="faq-cols">
            <div class="faq-col">
              <For each={left()}>{(faq, i) => (
                <FAQItem faq={faq} globalIdx={i() * 2} />
              )}</For>
            </div>
            <div class="faq-col">
              <For each={right()}>{(faq, i) => (
                <FAQItem faq={faq} globalIdx={i() * 2 + 1} />
              )}</For>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Blog Section ─────────────────────────────────────────────────────────────
function BlogSection() {
  return (
    <section class="blog-section" id="blog" aria-label="Technical blog and guides">
      <div class="container">
        <div class="blog-header">
          <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:1rem">
            <div>
              <span class="section-label">Technical Blog</span>
              <h2>Steel &amp; Alloy Knowledge Hub</h2>
              <p>Technical guides, material comparisons and industry insights — written by our engineers for procurement teams, designers and fabricators.</p>
            </div>
            <a href="/blog" class="btn btn-outline" style="flex-shrink:0">View All Articles →</a>
          </div>
        </div>
        <div class="blog-grid" role="list">
          <For each={BLOG_POSTS}>{(post) => (
            <article class="blog-card" role="listitem">
              <div class="blog-card-top">
                <div class="blog-icon-wrap" aria-hidden="true">
                  <span>{post.icon}</span>
                </div>
                <div class="blog-meta">
                  <span class="blog-tag">{post.tag}</span>
                  <span class="blog-date">{post.date}</span>
                </div>
              </div>
              <h3 class="blog-title">{post.title}</h3>
              <p class="blog-excerpt">{post.excerpt}</p>
              <div class="blog-footer">
                <span class="blog-read-time">🕐 {post.readTime}</span>
                <a href={`/blog/${post.slug}`} class="blog-link">
                  Read Article →
                </a>
              </div>
            </article>
          )}</For>
        </div>
      </div>
    </section>
  );
}

// ─── Market News ─────────────────────────────────────────────────────────────
function NewsSection() {
  return (
    <section class="news-section" id="news" aria-label="Market news">
      <div class="container">
        <div class="section-head-center">
          <span class="section-label">Market Updates</span>
          <h2>Latest Industry News</h2>
        </div>
        <div class="news-grid" role="list">
          <For each={NEWS}>{(n) => (
            <article class="news-card" role="listitem">
              <div class="news-date">{n.date}</div>
              <h3>{n.title}</h3>
              <p>{n.body}</p>
              <a href="#contact" class="service-link">Read More →</a>
            </article>
          )}</For>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section class="cta-banner" aria-label="Call to action">
      <div class="container">
        <h2>Need a Specific Grade or Hard-to-Find Material?</h2>
        <p>We accept urgent and indent requirements. Send us the spec — we'll source it with full MTC documentation.</p>
        <div class="cta-actions">
          <a href="#contact" class="btn btn-white">Send Enquiry →</a>
          <a href="tel:+919998280619" class="btn btn-ghost-white btn-outline">📞 +91 99982 80619</a>
        </div>
        <div class="cta-contact-row">
          <span>✉ <a href="mailto:creativemetalind@gmail.com" style="color:rgba(255,255,255,0.85)">creativemetalind@gmail.com</a></span>
          <span>📱 <a href="https://wa.me/919998280619" style="color:rgba(255,255,255,0.85)" target="_blank" rel="noopener">WhatsApp Us</a></span>
          <span>🌐 <a href="https://www.creativemetalind.com" style="color:rgba(255,255,255,0.85)" target="_blank" rel="noopener">www.creativemetalind.com</a></span>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function ContactForm() {
  const [submitted, setSubmitted] = createSignal(false);
  const [loading, setLoading] = createSignal(false);
  const [error, setError] = createSignal("");

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.target as HTMLFormElement;
    const data = {
      name:    (form.elements.namedItem("name")    as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      phone:   (form.elements.namedItem("phone")   as HTMLInputElement).value,
      email:   (form.elements.namedItem("email")   as HTMLInputElement).value,
      metal:   (form.elements.namedItem("metal")   as HTMLSelectElement).value,
      product: (form.elements.namedItem("product") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.ok) {
        setSubmitted(true);
      } else {
        setError(json.error || "Something went wrong. Please call us directly.");
      }
    } catch {
      setError("Network error. Please call +91 99982 80619 directly.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section class="contact" id="contact" aria-label="Contact us">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <span class="section-label">Get In Touch</span>
            <h2>Request a Quote or Indent</h2>
            <p>Share material spec, grade, size, quantity and certifications needed. We respond with pricing promptly.</p>
            <address class="contact-details" style="font-style:normal">
              <div class="contact-item">
                <div class="contact-item-icon">📍</div>
                <div class="contact-item-text">
                  <strong>Office</strong>
                  <p>F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road,<br/>Vadodara 390001, Gujarat, India</p>
                </div>
              </div>
              {/* ── Map thumbnail ── */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Loha+Bhavan+Lakkadpitha+Road+Vadodara+Gujarat+India"
                target="_blank"
                rel="noopener noreferrer"
                class="map-thumb"
                aria-label="Open office location in Google Maps"
              >
                <iframe
                  title="Office location — Loha Bhavan, Vadodara"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=73.1810%2C22.2980%2C73.1910%2C22.3060&layer=mapnik&marker=22.3020%2C73.1860"
                  width="100%"
                  height="160"
                  style="border:0;border-radius:var(--radius-sm);display:block;pointer-events:none;"
                  loading="lazy"
                />
                <span class="map-thumb-label">📍 View in Google Maps ↗</span>
              </a>

              <div class="contact-item">
                <div class="contact-item-icon">🏭</div>
                <div class="contact-item-text">
                  <strong>Godown / Yard</strong>
                  <p>386/B, GIDC Estate, Makarpura, Vadodara</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-item-icon">📞</div>
                <div class="contact-item-text">
                  <strong>Sunny Shah (Contact)</strong>
                  <a href="tel:+919998280619">+91 99982 80619</a>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-item-icon">📞</div>
                <div class="contact-item-text">
                  <strong>Ghewar Shah (Marketing)</strong>
                  <a href="tel:+919825506110">+91 98255 06110</a>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-item-icon">✉️</div>
                <div class="contact-item-text">
                  <strong>Email</strong>
                  <a href="mailto:creativemetalind@gmail.com">creativemetalind@gmail.com</a><br/>
                  <a href="mailto:sales@creativemetalind.com">sales@creativemetalind.com</a>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-item-icon">☎️</div>
                <div class="contact-item-text">
                  <strong>Office Tel</strong>
                  <a href="tel:+912654107230">+91 265 410723</a>
                </div>
              </div>
            </address>
          </div>
          <div class="contact-form">
            {submitted() ? (
              <div class="form-success" role="alert">
                <p>✅</p>
                <p><strong>Enquiry received!</strong> We'll respond with pricing and availability shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} novalidate aria-label="Enquiry form">
                <div class="form-row">
                  <div class="form-group"><label for="name">Full Name *</label><input id="name" name="name" type="text" placeholder="Your name" required autocomplete="name"/></div>
                  <div class="form-group"><label for="company">Company</label><input id="company" name="company" type="text" placeholder="Company name" autocomplete="organization"/></div>
                </div>
                <div class="form-row">
                  <div class="form-group"><label for="phone">Phone / WhatsApp *</label><input id="phone" name="phone" type="tel" placeholder="+91 99982 80619" required autocomplete="tel"/></div>
                  <div class="form-group"><label for="email">Email</label><input id="email" name="email" type="email" placeholder="you@company.com" autocomplete="email"/></div>
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <label for="metal">Material Type *</label>
                    <select id="metal" name="metal" required>
                      <option value="" disabled selected>Select material</option>
                      <option>Stainless Steel</option><option>Carbon Steel</option><option>Alloy Steel</option>
                      <option>Duplex / Super Duplex</option><option>Inconel / Monel / Hastelloy</option>
                      <option>Titanium</option><option>Aluminium</option><option>Copper / Brass</option>
                      <option>Boiler Quality Steel</option><option>Wear Plate / Hardox</option><option>Other</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="product">Product Form *</label>
                    <select id="product" name="product" required>
                      <option value="" disabled selected>Select form</option>
                      <option>Plates / Sheets</option><option>Seamless Pipes</option><option>Welded Pipes</option>
                      <option>Tubes</option><option>Pipe Fittings</option><option>Flanges</option>
                      <option>Structural Steel</option><option>Bars / Sections</option><option>Other</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label for="message">Grade, Size, Quantity &amp; Certification Required</label>
                  <textarea id="message" name="message" placeholder="e.g. SS 316L Seamless Pipe ASTM A312, 2 inch SCH 40, 50 Mtrs, IBR Form III-C — delivery Vadodara"/>
                </div>
                <button type="submit" class="btn btn-primary form-submit" disabled={loading()}>
                  {loading() ? "Sending…" : "Send Enquiry →"}
                </button>
                {error() && (
                  <p style="color:var(--rose);font-size:0.875rem;margin-top:0.75rem;text-align:center">{error()}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer aria-label="Site footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="/" class="footer-logo nav-logo">
              <img
                src="/logo_cmi.png"
                alt="Creative Metal Industries — Vadodara"
                class="logo-img"
                width="180"
                height="91"
                loading="lazy"
              />
            </a>
            <p>Manufacturer, stockist &amp; supplier of SS, Carbon &amp; Alloy Steel Pipes, Plates, Fittings, Flanges and Exotic Alloys. Serving Oil &amp; Gas, Power &amp; Petrochemical industries since 2012.</p>
            <nav class="social-links" aria-label="Contact links">
              <a href="mailto:creativemetalind@gmail.com" class="social-link" aria-label="Email">✉</a>
              <a href="tel:+919998280619" class="social-link" aria-label="Phone">📞</a>
              <a href="https://wa.me/919998280619" class="social-link" aria-label="WhatsApp" target="_blank" rel="noopener">💬</a>
              <a href="https://www.creativemetalind.com" class="social-link" aria-label="Website" target="_blank" rel="noopener">🌐</a>
            </nav>
          </div>
          <nav aria-label="Materials">
            <h4>Materials</h4>
            <ul>
              <li><a href="#metals">Stainless Steel</a></li>
              <li><a href="#metals">Carbon Steel</a></li>
              <li><a href="#metals">Alloy Steel</a></li>
              <li><a href="#metals">Duplex &amp; Super Duplex</a></li>
              <li><a href="#metals">Inconel / Monel / Hastelloy</a></li>
              <li><a href="#metals">Titanium &amp; Aluminium</a></li>
            </ul>
          </nav>
          <nav aria-label="Products">
            <h4>Products</h4>
            <ul>
              <li><a href="#products">Seamless &amp; Welded Pipes</a></li>
              <li><a href="#products">Plates &amp; Sheets</a></li>
              <li><a href="#products">Buttweld Fittings</a></li>
              <li><a href="#products">Forged Fittings &amp; Flanges</a></li>
              <li><a href="#products">Structural Steel</a></li>
              <li><a href="#products">Special Alloys</a></li>
              <li><a href="/products">📐 Size &amp; Weight Charts</a></li>
            </ul>
          </nav>
          <div>
            <h4>Certifications</h4>
            <div class="footer-cert">
              <div class="cert-badge">🏅 IBR Form III-C</div>
              <div class="cert-badge">✅ NACE / HIC Compliant</div>
              <div class="cert-badge">📄 MTC on All Material</div>
              <div class="cert-badge">🔬 TPI: DNV, TUV, SGS</div>
              <div class="cert-badge">🌍 Export to 50+ Countries</div>
            </div>
            <div style="margin-top:1.5rem">
              <h4>Contact</h4>
              <p style="font-size:0.82rem;color:var(--muted);margin-bottom:0.3rem">Tel: +91 265 410723</p>
              <p style="font-size:0.82rem;color:var(--muted)">Loha Bhavan, Lakkadpitha Rd,<br/>Vadodara 390001, Gujarat</p>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© {year} Creative Metal Industries, Vadodara. All rights reserved.</p>
          <nav class="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Trade</a>
            <a href="https://www.creativemetalind.com" target="_blank" rel="noopener">www.creativemetalind.com</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

// ─── JSON-LD Schema ───────────────────────────────────────────────────────────
const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Creative Metal Industries",
  "description": "Manufacturer, stockist and supplier of Stainless Steel, Duplex, Carbon & Alloy Steel Pipes, Plates, Fittings, Flanges and Exotic Alloys (Inconel, Monel, Hastelloy, Titanium) for Oil & Gas, Petrochemical and Power industries. IBR, NACE, MTC certified.",
  "url": "https://www.creativemetalind.com",
  "telephone": "+91-99982-80619",
  "email": "creativemetalind@gmail.com",
  "foundingDate": "2012",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.creativemetalind.com/logo_cmi.png",
    "width": 1424,
    "height": 720
  },
  "image": "https://www.creativemetalind.com/logo_cmi.png",
  "areaServed": [
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "Country", "name": "Oman" },
    { "@type": "Country", "name": "Kuwait" },
    { "@type": "Country", "name": "Bahrain" },
    { "@type": "Country", "name": "Saudi Arabia" },
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "United Kingdom" }
  ],
  "sameAs": [
    "https://www.indiamart.com/creative-metal-industries-vadodara/"
  ],
  "geo": { "@type": "GeoCoordinates", "latitude": 22.3072, "longitude": 73.1812 },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "F-3, 1st Floor, Loha Bhavan, Lakkadpitha Road",
    "addressLocality": "Vadodara",
    "addressRegion": "Gujarat",
    "postalCode": "390001",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "09:00",
    "closes": "19:00"
  }],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-99982-80619",
      "contactType": "sales",
      "name": "Sunny Shah",
      "availableLanguage": ["English", "Hindi", "Gujarati"],
      "areaServed": "IN"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91-98255-06110",
      "contactType": "customer support",
      "name": "Ghewar Shah",
      "areaServed": "IN"
    }
  ],
  "knowsAbout": [
    "Stainless Steel Pipes and Tubes",
    "Duplex Steel 2205 and Super Duplex 2507",
    "Alloy Steel P91 P22 High Temperature Piping",
    "Carbon Steel Plates IBR Certified",
    "Inconel Hastelloy Monel Titanium Exotic Alloys",
    "IBR Form III-C Certification",
    "ASTM ASME API Steel Standards"
  ]
});

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQS.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
});

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Title>SS Pipes &amp; Plates Manufacturer Vadodara | Creative Metal Industries</Title>
      <Meta name="description" content="SS Pipes, Plates, Fittings &amp; Flanges — Creative Metal Industries, Vadodara. IBR, NACE, MTC certified. Stainless, Duplex, Alloy, Carbon Steel. Call +91 99982 80619." />
      <Link rel="canonical" href="https://www.creativemetalind.com/" />
      {/* Open Graph */}
      <Meta property="og:type" content="website" />
      <Meta property="og:site_name" content="Creative Metal Industries" />
      <Meta property="og:title" content="Creative Metal Industries | SS Pipes, Plates & Fittings — Vadodara" />
      <Meta property="og:description" content="Manufacturer & stockist of SS Pipes, Fittings, Flanges & Plates. IBR, NACE, MTC certified. Serving Oil & Gas, Petrochemical & Power industries. Call +91 99982 80619." />
      <Meta property="og:url" content="https://www.creativemetalind.com" />
      <Meta property="og:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <Meta property="og:locale" content="en_IN" />
      {/* Twitter Card */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Creative Metal Industries | SS Pipes, Plates & Fittings — Vadodara" />
      <Meta name="twitter:description" content="Manufacturer & stockist of SS Pipes, Fittings, Flanges & Plates. IBR, NACE, MTC certified. Call +91 99982 80619." />
      <Meta name="twitter:image" content="https://www.creativemetalind.com/og-image.jpg" />
      <script type="application/ld+json" innerHTML={SCHEMA} />
      <script type="application/ld+json" innerHTML={FAQ_SCHEMA} />
      <Nav />
      <main id="main-content">
        <Hero />
        <Ticker />
        <ProductsSection />
        <BrandsSection />
        <AboutSection />
        <StatsBar />
        <MetalsSection />
        <WhyChooseUs />
        <ServicesSection />
        <Industries />
        <FAQSection />
        <BlogSection />
        <NewsSection />
        <CTABanner />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
