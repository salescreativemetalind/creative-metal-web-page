/**
 * LocationContent — unique, per-city content block for location/supplier pages.
 *
 * WHY: The location pages were thin near-duplicate templates (~350-450 words),
 * which Google flagged as "Discovered - currently not indexed" (low-value
 * duplicates). This component injects substantial, genuinely different content
 * per city — real industrial areas, transport routes, dominant industries,
 * recommended grades, and city-specific FAQs — so each page earns indexing.
 *
 * Keyed by the city slug used in the route (e.g. "bharuch", "ankleshwar").
 */

type CityData = {
  city: string;            // display name
  region: string;          // state / area
  distanceKm: number;      // road distance from Vadodara warehouse
  lead: string;            // delivery lead time
  hubs: string[];          // named industrial areas / clusters served
  industries: string[];    // dominant local industries
  grades: string;          // materials most relevant to that market
  transport: string;       // realistic dispatch/route note
  faqs: { q: string; a: string }[];
};

// Sensible default used when a city isn't in the table (still unique via name).
function fallback(city: string, region = "India", distanceKm = 0): CityData {
  return {
    city,
    region,
    distanceKm,
    lead: distanceKm && distanceKm < 150 ? "same day" : distanceKm && distanceKm < 600 ? "1-2 days" : "2-4 days",
    hubs: [`${city} industrial area`, `${city} GIDC / MIDC estates`],
    industries: ["Chemical & process plants", "Fabrication & engineering workshops", "Infrastructure & construction"],
    grades: "SS 304/316L, carbon steel A106/A53, alloy steel P11/P22/P91, duplex 2205 and exotic alloys",
    transport: `Dispatched from our GIDC Makarpura, Vadodara warehouse to ${city} by road transport with full documentation.`,
    faqs: [
      { q: `Do you deliver steel pipes to ${city}?`, a: `Yes. Creative Metal Industries dispatches SS, carbon steel, alloy steel, duplex and exotic alloy pipes, fittings and flanges to ${city} from our Vadodara stockyard, with mill test certificates (MTC) on every consignment.` },
      { q: `What steel grades can I get delivered in ${city}?`, a: `We supply the full range to ${city}: SS 304, 316L, 321, 310, duplex 2205, super duplex 2507, Inconel, Monel, Hastelloy, titanium, carbon steel (A106/A53/API 5L) and alloy steel (P5/P9/P11/P22/P91) — in pipe, tube, plate, sheet, fitting and flange form.` },
    ],
  };
}

const CITIES: Record<string, CityData> = {
  "bharuch": {
    city: "Bharuch", region: "Gujarat", distanceKm: 75, lead: "same day",
    hubs: ["Dahej PCPIR", "Ankleshwar GIDC", "Jhagadia GIDC", "GNFC & GSFC complexes"],
    industries: ["Chemicals & fertilizers (GNFC, GSFC)", "Petrochemicals (Dahej PCPIR)", "Dyes & intermediates", "Thermal power"],
    grades: "SS 316L and Hastelloy C276 for acid service, duplex 2205 for chlorides, P91/P22 boiler-grade alloy steel, and carbon steel A106 for refinery lines",
    transport: "Bharuch is on the NH-48 corridor, ~75 km south of our Vadodara warehouse — most orders ship same day.",
    faqs: [
      { q: "Who is the best steel pipe supplier for Bharuch and Dahej PCPIR?", a: "Creative Metal Industries is ~75 km from Bharuch and supplies GNFC, GSFC and Dahej PCPIR units with SS, duplex, Hastelloy and carbon steel pipes — same-day delivery with MTC and IBR documentation." },
      { q: "Which material suits chemical plants around Bharuch?", a: "For mixed-acid and chloride service common in the Bharuch-Dahej belt we recommend SS 316L, Hastelloy C276 and duplex 2205. Our team can advise based on your process fluid, temperature and pressure." },
    ],
  },
  "ankleshwar": {
    city: "Ankleshwar", region: "Gujarat", distanceKm: 95, lead: "same day",
    hubs: ["Ankleshwar GIDC (one of Asia's largest chemical estates)", "Panoli GIDC", "Jhagadia GIDC"],
    industries: ["Bulk & specialty chemicals", "Dyes & pigments", "Agrochemicals", "Pharmaceutical intermediates"],
    grades: "SS 316L electropolished tube for pharma, Hastelloy C276 for HCl/mixed acids, duplex 2205 for chloride streams and alloy 20 for sulphuric service",
    transport: "Ankleshwar GIDC is ~95 km south of Vadodara on NH-48 — a core delivery zone for us with same-day dispatch.",
    faqs: [
      { q: "Who supplies SS pipes to Ankleshwar GIDC?", a: "Creative Metal Industries is among the closest stockists to Ankleshwar GIDC (~95 km from Vadodara). We hold SS 304, 316L, 321, duplex 2205 and Hastelloy C276 for the chemical and dye industry, ready for same-day delivery." },
      { q: "What material is best for chemical plants in Ankleshwar?", a: "SS 316L for mild acids, Hastelloy C276 for hydrochloric and mixed acids, duplex 2205 for chloride environments, and alloy 20 for sulphuric acid. We stock all of these and can recommend based on your process." },
    ],
  },
  "dahej": {
    city: "Dahej", region: "Gujarat", distanceKm: 90, lead: "same day",
    hubs: ["Dahej PCPIR", "Dahej SEZ", "OPaL & ONGC Petro complexes", "LNG terminal"],
    industries: ["Petrochemicals & LNG", "Bulk chemicals", "Fertilizers", "Port & marine infrastructure"],
    grades: "duplex 2205 and super duplex 2507 for seawater/marine, SS 316L, cryogenic carbon steel A333, and alloy steel P91/P22 for process heat",
    transport: "Dahej PCPIR is ~90 km from Vadodara — a priority industrial belt we serve with same-day road dispatch.",
    faqs: [
      { q: "Do you supply pipes to Dahej PCPIR and SEZ?", a: "Yes — Dahej is ~90 km from our Vadodara warehouse. We supply ONGC Petro (OPaL), Reliance, IOCL and other Dahej PCPIR units with SS, duplex, super duplex and carbon steel pipes, same day, with full MTC/IBR." },
      { q: "Which grade is used for seawater and LNG service at Dahej?", a: "Super duplex 2507 and duplex 2205 for seawater and cooling systems; cryogenic carbon steel A333 Gr 6 for LNG low-temperature lines. We stock and cut to requirement." },
    ],
  },
  "hazira": {
    city: "Hazira", region: "Gujarat", distanceKm: 145, lead: "same day",
    hubs: ["Hazira industrial area", "ONGC Hazira", "Reliance & Shell terminals", "L&T / Essar complexes"],
    industries: ["Oil & gas processing", "LNG regasification", "Heavy engineering & fabrication", "Steel & power"],
    grades: "duplex/super duplex for marine, alloy steel P22/P91 for process heat, carbon steel A106, and SS 316L for gas-sweetening units",
    transport: "Hazira (near Surat) is ~145 km from Vadodara — served with same-day to next-morning dispatch.",
    faqs: [
      { q: "Do you deliver to Hazira oil & gas and fabrication units?", a: "Yes. We supply ONGC Hazira, Reliance, Shell and L&T fabrication yards with SS, duplex, alloy steel and carbon steel pipes and plates, with MTC, IBR and NACE documentation where required." },
      { q: "What material suits sour-service lines at Hazira?", a: "NACE MR0175-compliant carbon and alloy steel with HIC testing for sour gas, plus duplex 2205 for chloride/CO2 environments. We stock NACE-HIC plate and can supply matching pipe/fittings." },
    ],
  },
  "vapi": {
    city: "Vapi", region: "Gujarat", distanceKm: 165, lead: "1-2 days",
    hubs: ["Vapi GIDC", "Sarigam GIDC", "Umbergaon industrial area"],
    industries: ["Chemicals & dyes", "Pharmaceuticals", "Paper & pulp", "Textile processing"],
    grades: "SS 316L, Hastelloy C276 and duplex 2205 for corrosive chemical and dye effluent service",
    transport: "Vapi GIDC is ~165 km south of Vadodara on NH-48, dispatched in 1-2 days.",
    faqs: [
      { q: "Who supplies SS pipes and fittings to Vapi GIDC?", a: "Creative Metal Industries supplies Vapi and Sarigam GIDC chemical, dye and pharma units with SS 316L, Hastelloy, duplex and carbon steel pipes, fittings and flanges with MTC." },
    ],
  },
  "panoli": {
    city: "Panoli", region: "Gujarat", distanceKm: 100, lead: "same day",
    hubs: ["Panoli GIDC", "Ankleshwar GIDC", "Jhagadia GIDC"],
    industries: ["Specialty chemicals", "Agrochemicals", "Pharma intermediates"],
    grades: "SS 316L, Hastelloy C276, duplex 2205 and alloy 20 for aggressive chemical service",
    transport: "Panoli GIDC is ~100 km from Vadodara in the Ankleshwar chemical belt — same-day dispatch.",
    faqs: [
      { q: "Do you supply to Panoli GIDC chemical units?", a: "Yes — Panoli GIDC sits in our core Ankleshwar-Bharuch delivery belt (~100 km). We stock SS 316L, Hastelloy, duplex and alloy 20 for corrosive chemical and agrochemical plants." },
    ],
  },
  "jhagadia": {
    city: "Jhagadia", region: "Gujarat", distanceKm: 105, lead: "same day",
    hubs: ["Jhagadia GIDC", "Ankleshwar GIDC", "Dahej corridor"],
    industries: ["Chemicals", "Metals & alloys", "Power & engineering"],
    grades: "SS 304/316L, duplex 2205, carbon steel A106 and alloy steel P22/P91",
    transport: "Jhagadia GIDC is ~105 km from Vadodara — same-day road dispatch.",
    faqs: [
      { q: "Do you deliver steel to Jhagadia GIDC?", a: "Yes, Jhagadia GIDC is in our Ankleshwar-Bharuch delivery belt (~105 km). Same-day dispatch of SS, carbon steel, alloy steel and duplex pipes with MTC." },
    ],
  },
  "nandesari": {
    city: "Nandesari", region: "Gujarat", distanceKm: 15, lead: "same day",
    hubs: ["Nandesari GIDC", "Vadodara industrial belt"],
    industries: ["Chemicals & petrochemicals", "Dyes & intermediates", "Engineering"],
    grades: "SS 304/316L, Hastelloy, duplex 2205, carbon steel and alloy steel — the full catalogue, local stock",
    transport: "Nandesari GIDC is only ~15 km from our warehouse — immediate same-day, often within hours.",
    faqs: [
      { q: "Who is the nearest steel supplier to Nandesari GIDC?", a: "Creative Metal Industries is ~15 km from Nandesari GIDC. We offer near-immediate delivery of SS, carbon steel, alloy steel, duplex and exotic alloy pipes, fittings and flanges." },
    ],
  },
  "makarpura": {
    city: "GIDC Makarpura", region: "Vadodara, Gujarat", distanceKm: 0, lead: "same day",
    hubs: ["GIDC Makarpura (our home estate)", "Vadodara industrial area"],
    industries: ["Engineering & machine tools", "Fabrication workshops", "Auto components", "Process equipment"],
    grades: "the complete range — SS, carbon steel, alloy steel, duplex, exotic alloys and structural steel, all ex-stock",
    transport: "Our warehouse is located in GIDC Makarpura itself — walk-in collection or immediate delivery.",
    faqs: [
      { q: "Where is Creative Metal Industries located in Makarpura?", a: "Our stockyard is at 386/B GIDC Estate, Makarpura, Vadodara 390010. Local buyers can collect directly or get same-day delivery across the Makarpura and Vadodara industrial belt." },
    ],
  },
  "koyali": {
    city: "Koyali", region: "Vadodara, Gujarat", distanceKm: 12, lead: "same day",
    hubs: ["IOCL Gujarat Refinery, Koyali", "Vadodara refinery belt"],
    industries: ["Oil refining (IOCL)", "Petrochemicals", "Fabrication for refinery shutdowns"],
    grades: "alloy steel P5/P9/P11/P22/P91 for refinery heaters, SS 321/347 for high-temperature service, and carbon steel A106",
    transport: "Koyali (IOCL Gujarat Refinery) is ~12 km from our warehouse — same-day and shutdown-priority delivery.",
    faqs: [
      { q: "Do you supply pipes for IOCL Koyali refinery shutdowns?", a: "Yes. Being ~12 km from IOCL Koyali, we support refinery turnarounds with alloy steel P11/P22/P91, SS 321/347 and carbon steel A106 pipes and fittings on priority, with MTC and IBR." },
    ],
  },
  "ahmedabad": {
    city: "Ahmedabad", region: "Gujarat", distanceKm: 110, lead: "same day",
    hubs: ["Naroda GIDC", "Odhav GIDC", "Vatva GIDC", "Changodar & Sanand industrial areas"],
    industries: ["Engineering & fabrication", "Pharmaceuticals", "Textiles & processing", "Automobile (Sanand)"],
    grades: "SS 304/316L, carbon steel, alloy steel and structural steel for engineering, pharma and auto industries",
    transport: "Ahmedabad is ~110 km north of Vadodara on NH-48 — same-day delivery to all GIDC estates.",
    faqs: [
      { q: "Who is a reliable SS pipe supplier in Ahmedabad?", a: "Creative Metal Industries delivers to Naroda, Odhav, Vatva and Sanand GIDC estates in Ahmedabad from our Vadodara warehouse (~110 km) — same day, with MTC on all material." },
    ],
  },
  "surat": {
    city: "Surat", region: "Gujarat", distanceKm: 150, lead: "same day",
    hubs: ["Sachin GIDC", "Pandesara GIDC", "Hazira industrial area", "Surat SEZ"],
    industries: ["Textile processing & dyeing", "Diamond & gems machinery", "Oil & gas (Hazira)", "Engineering"],
    grades: "SS 316L for dye/effluent lines, duplex for Hazira marine service, carbon and alloy steel for process plants",
    transport: "Surat is ~150 km from Vadodara — same-day to next-morning dispatch to Sachin, Pandesara and Hazira.",
    faqs: [
      { q: "Do you supply SS pipes to Surat textile and Hazira units?", a: "Yes. We serve Sachin and Pandesara GIDC dyeing units with SS 316L, and Hazira oil & gas units with duplex, alloy and carbon steel — dispatched from Vadodara same day." },
    ],
  },
  "rajkot": {
    city: "Rajkot", region: "Gujarat", distanceKm: 300, lead: "1-2 days",
    hubs: ["Aji GIDC", "Metoda GIDC", "Shapar-Veraval industrial area"],
    industries: ["CNC machining & casting", "Auto & bearing components", "Pump & engine manufacturing", "Engineering"],
    grades: "SS 304/316L bars and pipes, free-machining stainless, carbon steel and alloy steel for the machining hub",
    transport: "Rajkot is ~300 km from Vadodara — dispatched in 1-2 days to Metoda and Shapar clusters.",
    faqs: [
      { q: "Do you supply SS round bar and pipe to Rajkot machining units?", a: "Yes. Rajkot's Metoda and Shapar engineering clusters get SS 304/316L round bar, pipe and plate plus carbon and alloy steel from us, delivered in 1-2 days with MTC." },
    ],
  },
  "jamnagar": {
    city: "Jamnagar", region: "Gujarat", distanceKm: 320, lead: "1-2 days",
    hubs: ["Reliance Jamnagar Refinery (world's largest)", "Nayara Energy (Vadinar)", "Brass parts cluster"],
    industries: ["Oil refining (world's largest complex)", "Petrochemicals", "Brass components", "Marine & port"],
    grades: "alloy steel P91/P22 for refinery heaters, super duplex/duplex for seawater, SS 321/347 high-temp, NACE-HIC carbon steel for sour service",
    transport: "Jamnagar is ~320 km from Vadodara — supplied in 1-2 days, with shutdown-priority handling for refinery turnarounds.",
    faqs: [
      { q: "Do you supply pipes for Reliance and Nayara refineries at Jamnagar?", a: "Yes. We support Jamnagar refinery projects and shutdowns with alloy steel P22/P91, super duplex, SS 321/347 and NACE-HIC carbon steel, with full MTC, IBR and NACE documentation." },
    ],
  },
  "gandhidham": {
    city: "Gandhidham", region: "Kutch, Gujarat", distanceKm: 400, lead: "2-3 days",
    hubs: ["Kandla Port (Deendayal Port)", "Mundra Port & SEZ", "Gandhidham industrial area"],
    industries: ["Ports & logistics", "Salt & chemicals", "Power (Adani Mundra)", "Timber & handling equipment"],
    grades: "duplex/super duplex for marine and salt works, carbon steel for port structures, SS 316L for chemical handling",
    transport: "Gandhidham (Kandla-Mundra belt) is ~400 km from Vadodara — dispatched in 2-3 days by road.",
    faqs: [
      { q: "Do you deliver steel to Gandhidham, Kandla and Mundra?", a: "Yes. The Kutch port belt (Kandla, Mundra, Gandhidham) is supplied with duplex, super duplex, carbon steel and SS pipes and plates for marine, salt and power applications, delivered in 2-3 days." },
    ],
  },
  "mumbai": {
    city: "Mumbai", region: "Maharashtra", distanceKm: 420, lead: "1-2 days",
    hubs: ["MIDC Andheri", "Taloja MIDC", "JNPT / Nhava Sheva", "BARC & refinery belt"],
    industries: ["Oil & gas (BPCL, HPCL)", "Chemical & pharma", "Marine & shipbuilding", "Engineering & EPC"],
    grades: "super duplex/duplex for offshore & marine, SS 316L, Inconel/Monel for offshore, alloy steel for refineries",
    transport: "Mumbai is ~420 km from Vadodara on NH-48 — regular 1-2 day dispatch to MIDC and JNPT.",
    faqs: [
      { q: "Do you supply exotic alloy and duplex pipes in Mumbai?", a: "Yes. We supply Mumbai's offshore, marine and refinery EPC contractors with super duplex 2507, Inconel, Monel, SS 316L and alloy steel — delivered in 1-2 days with MTC, IBR and NACE certs." },
    ],
  },
  "navi-mumbai": {
    city: "Navi Mumbai", region: "Maharashtra", distanceKm: 430, lead: "1-2 days",
    hubs: ["Taloja MIDC", "Rabale & Mahape MIDC", "JNPT logistics belt"],
    industries: ["Chemical & pharma (Taloja)", "Engineering & EPC", "Logistics & warehousing"],
    grades: "SS 316L, Hastelloy and duplex for Taloja chemical units, carbon and alloy steel for EPC",
    transport: "Navi Mumbai (Taloja MIDC) is ~430 km from Vadodara — dispatched in 1-2 days.",
    faqs: [
      { q: "Who supplies SS and alloy pipes to Taloja MIDC, Navi Mumbai?", a: "Creative Metal Industries supplies Taloja and Rabale MIDC chemical, pharma and engineering units with SS 316L, Hastelloy, duplex, carbon and alloy steel, delivered in 1-2 days." },
    ],
  },
  "thane": {
    city: "Thane", region: "Maharashtra", distanceKm: 440, lead: "1-2 days",
    hubs: ["Wagle Estate MIDC", "Dombivli MIDC", "Ambernath & Badlapur MIDC"],
    industries: ["Chemical & dye", "Engineering & fabrication", "Pharma"],
    grades: "SS 316L, duplex, carbon and alloy steel for chemical and engineering units",
    transport: "Thane's MIDC belt is ~440 km from Vadodara — dispatched in 1-2 days.",
    faqs: [
      { q: "Do you deliver steel pipes to Thane and Dombivli MIDC?", a: "Yes. We supply Wagle Estate, Dombivli and Ambernath MIDC units with SS, duplex, carbon and alloy steel pipes and fittings, delivered in 1-2 days with MTC." },
    ],
  },
  "vasai": {
    city: "Vasai", region: "Maharashtra", distanceKm: 400, lead: "1-2 days",
    hubs: ["Vasai-Virar MIDC", "Sativali & Gauraipada industrial areas"],
    industries: ["Engineering & fabrication", "Chemical", "Steel fabrication"],
    grades: "SS 304/316L, carbon steel, alloy steel and structural steel for fabrication units",
    transport: "Vasai's industrial belt is ~400 km from Vadodara — dispatched in 1-2 days.",
    faqs: [
      { q: "Do you supply steel to Vasai-Virar fabrication units?", a: "Yes. We deliver SS, carbon steel, alloy steel and structural steel to Vasai, Sativali and Gauraipada fabrication units from Vadodara in 1-2 days." },
    ],
  },
  "pune": {
    city: "Pune", region: "Maharashtra", distanceKm: 560, lead: "1-2 days",
    hubs: ["Chakan MIDC", "Ranjangaon MIDC", "Pimpri-Chinchwad", "Talegaon MIDC"],
    industries: ["Automobile & auto components", "Heavy engineering", "Pharma & biotech", "Machine tools"],
    grades: "SS 304/316L, free-machining stainless bar, alloy steel and carbon steel for auto and engineering",
    transport: "Pune (Chakan-Ranjangaon belt) is ~560 km from Vadodara — dispatched in 1-2 days.",
    faqs: [
      { q: "Who supplies SS and alloy steel to Chakan and Pimpri-Chinchwad, Pune?", a: "Creative Metal Industries supplies Pune's automobile and engineering hubs (Chakan, Ranjangaon, PCMC) with SS 304/316L, alloy steel and carbon steel bar, pipe and plate, delivered in 1-2 days." },
    ],
  },
  "chakan": {
    city: "Chakan", region: "Pune, Maharashtra", distanceKm: 555, lead: "1-2 days",
    hubs: ["Chakan MIDC (Phase I-IV)", "Talegaon MIDC"],
    industries: ["Automobile OEMs (Mercedes, VW, Bajaj)", "Auto components", "Engineering"],
    grades: "SS 304/316L, free-machining stainless, alloy steel and carbon steel for automotive manufacturing",
    transport: "Chakan MIDC is ~555 km from Vadodara — dispatched in 1-2 days.",
    faqs: [
      { q: "Do you supply steel to Chakan MIDC automobile plants?", a: "Yes. We supply Chakan MIDC auto OEMs and component makers with SS 304/316L, alloy and carbon steel bar, pipe and plate, with MTC, delivered in 1-2 days." },
    ],
  },
  "aurangabad": {
    city: "Aurangabad", region: "Maharashtra", distanceKm: 500, lead: "1-2 days",
    hubs: ["Waluj MIDC", "Shendra MIDC", "AURIC (Aurangabad Industrial City)"],
    industries: ["Automobile & components", "Beverage & packaging", "Engineering", "Pharma"],
    grades: "SS 304/316L, carbon steel, alloy steel and structural steel for auto and packaging units",
    transport: "Aurangabad (Waluj-Shendra) is ~500 km from Vadodara — dispatched in 1-2 days.",
    faqs: [
      { q: "Do you deliver steel to Waluj and Shendra MIDC, Aurangabad?", a: "Yes. We supply Aurangabad's auto and packaging clusters (Waluj, Shendra, AURIC) with SS, carbon and alloy steel, delivered in 1-2 days with MTC." },
    ],
  },
  "nagpur": {
    city: "Nagpur", region: "Maharashtra", distanceKm: 680, lead: "2-3 days",
    hubs: ["Butibori MIDC (Asia's largest)", "Hingna MIDC", "MIHAN SEZ"],
    industries: ["Power (Koradi, Mauda)", "Engineering & defence", "Logistics (MIHAN)", "Mining equipment"],
    grades: "alloy steel P22/P91 and boiler tubes for power plants, carbon steel, SS 304/316L for engineering",
    transport: "Nagpur (Butibori/MIHAN) is ~680 km from Vadodara — dispatched in 2-3 days.",
    faqs: [
      { q: "Do you supply boiler tubes and alloy steel to Nagpur power plants?", a: "Yes. We supply Nagpur's power sector (Koradi, Mauda) and Butibori MIDC with boiler tubes, alloy steel P22/P91, carbon steel and SS pipes, delivered in 2-3 days with IBR and MTC." },
    ],
  },
  "chennai": {
    city: "Chennai", region: "Tamil Nadu", distanceKm: 1400, lead: "3-4 days",
    hubs: ["Ambattur & Sriperumbudur", "Manali petrochemical belt", "Ennore Port", "SIPCOT estates"],
    industries: ["Automobile (Detroit of India)", "Petrochemicals (Manali)", "Ports & desalination", "Engineering"],
    grades: "super duplex/duplex for desalination & marine, SS 316L, alloy steel for Manali refineries, carbon steel",
    transport: "Chennai is served by road/rail in 3-4 days from Vadodara, with export documentation available via Ennore/Chennai ports.",
    faqs: [
      { q: "Do you supply duplex and SS pipes to Chennai?", a: "Yes. We supply Chennai's Manali petrochemical belt, desalination projects and Ambattur/Sriperumbudur engineering units with duplex, super duplex, SS 316L and alloy steel, delivered in 3-4 days with MTC and NACE certs." },
    ],
  },
  "coimbatore": {
    city: "Coimbatore", region: "Tamil Nadu", distanceKm: 1300, lead: "3-4 days",
    hubs: ["SIDCO industrial estates", "Peelamedu & Kurichi", "Textile machinery cluster"],
    industries: ["Pump & motor manufacturing", "Textile machinery", "Foundry & casting", "Engineering"],
    grades: "SS 304/316L bar and pipe, free-machining stainless, carbon steel for pump and machinery makers",
    transport: "Coimbatore is dispatched in 3-4 days from Vadodara to its pump and textile-machinery clusters.",
    faqs: [
      { q: "Who supplies SS bar and pipe to Coimbatore pump industry?", a: "Creative Metal Industries supplies Coimbatore's pump, motor and textile-machinery makers with SS 304/316L round bar, pipe and plate plus carbon steel, delivered in 3-4 days with MTC." },
    ],
  },
  "salem": {
    city: "Salem", region: "Tamil Nadu", distanceKm: 1350, lead: "3-4 days",
    hubs: ["Salem Steel Plant (SAIL) belt", "SIDCO estates"],
    industries: ["Stainless steel processing (SAIL)", "Engineering & fabrication", "Foundries"],
    grades: "SS 304/316L, carbon steel and alloy steel for the stainless and engineering cluster",
    transport: "Salem is dispatched in 3-4 days from Vadodara.",
    faqs: [
      { q: "Do you supply SS and alloy pipes to Salem?", a: "Yes. We supply Salem's stainless and engineering cluster with SS 304/316L, carbon and alloy steel pipes, plates and fittings, delivered in 3-4 days with MTC." },
    ],
  },
  "madurai": {
    city: "Madurai", region: "Tamil Nadu", distanceKm: 1500, lead: "3-4 days",
    hubs: ["SIPCOT Kappalur", "Madurai industrial estates"],
    industries: ["Engineering & fabrication", "Food processing", "Textiles"],
    grades: "SS 304/316L, carbon steel and structural steel for engineering and food units",
    transport: "Madurai is dispatched in 3-4 days from Vadodara.",
    faqs: [
      { q: "Do you deliver steel to Madurai?", a: "Yes. We supply Madurai and SIPCOT Kappalur units with SS, carbon and structural steel, delivered in 3-4 days with MTC." },
    ],
  },
  "trichy": {
    city: "Trichy", region: "Tamil Nadu", distanceKm: 1450, lead: "3-4 days",
    hubs: ["BHEL Trichy", "SIDCO Thuvakudi", "Boiler & fabrication cluster"],
    industries: ["Boiler manufacturing (BHEL)", "Heavy fabrication", "Engineering"],
    grades: "alloy steel P11/P22/P91 and boiler tubes for BHEL boiler makers, SS 304/316L, carbon steel",
    transport: "Trichy (BHEL/Thuvakudi boiler belt) is dispatched in 3-4 days from Vadodara.",
    faqs: [
      { q: "Do you supply boiler tubes and alloy steel to Trichy BHEL belt?", a: "Yes. Trichy's boiler and fabrication cluster (BHEL, Thuvakudi) is supplied with boiler tubes, alloy steel P11/P22/P91, SS and carbon steel, with IBR and MTC, in 3-4 days." },
    ],
  },
  "hyderabad": {
    city: "Hyderabad", region: "Telangana", distanceKm: 1050, lead: "2-4 days",
    hubs: ["Balanagar & Jeedimetla", "Patancheru & Bollaram (pharma)", "Cherlapally industrial estate"],
    industries: ["Pharmaceuticals & bulk drugs", "Defence & aerospace", "Engineering", "Chemical"],
    grades: "SS 316L electropolished for pharma, Hastelloy and alloy 20 for bulk-drug reactors, duplex, carbon and alloy steel",
    transport: "Hyderabad is dispatched in 2-4 days from Vadodara to its pharma and engineering estates.",
    faqs: [
      { q: "Who supplies SS 316L and Hastelloy to Hyderabad pharma units?", a: "Creative Metal Industries supplies Patancheru, Bollaram and Jeedimetla bulk-drug and pharma units with SS 316L, Hastelloy C276, alloy 20 and duplex, delivered in 2-4 days with MTC." },
    ],
  },
  "bangalore": {
    city: "Bangalore", region: "Karnataka", distanceKm: 1200, lead: "3-4 days",
    hubs: ["Peenya Industrial Area (one of Asia's largest)", "Bommasandra & Jigani", "Whitefield"],
    industries: ["Aerospace & defence", "Machine tools & engineering", "Pharma & biotech", "Electronics"],
    grades: "SS 304/316L, titanium and Inconel for aerospace, alloy steel, free-machining stainless and carbon steel",
    transport: "Bangalore (Peenya/Bommasandra) is dispatched in 3-4 days from Vadodara.",
    faqs: [
      { q: "Do you supply titanium, Inconel and SS to Bangalore engineering units?", a: "Yes. We supply Peenya, Bommasandra and Whitefield aerospace and engineering units with titanium, Inconel, SS 304/316L and alloy steel, delivered in 3-4 days with MTC." },
    ],
  },
  "hubli": {
    city: "Hubli", region: "Karnataka", distanceKm: 650, lead: "2-3 days",
    hubs: ["Gokul Road industrial area", "Tarihal & Belur industrial estates"],
    industries: ["Engineering & fabrication", "Machine tools", "Food processing"],
    grades: "SS 304/316L, carbon steel and structural steel for engineering and fabrication",
    transport: "Hubli is dispatched in 2-3 days from Vadodara.",
    faqs: [
      { q: "Do you deliver steel to Hubli-Dharwad industrial area?", a: "Yes. We supply Hubli's Gokul Road and Tarihal estates with SS, carbon and structural steel, delivered in 2-3 days with MTC." },
    ],
  },
  "mangalore": {
    city: "Mangalore", region: "Karnataka", distanceKm: 900, lead: "2-4 days",
    hubs: ["MRPL refinery", "MSEZ (Mangalore SEZ)", "New Mangalore Port", "MCF fertilizers"],
    industries: ["Oil refining (MRPL)", "Petrochemicals & fertilizers", "Ports & marine"],
    grades: "alloy steel P22/P91 for refinery, super duplex/duplex for marine & seawater, NACE-HIC carbon steel, SS 316L",
    transport: "Mangalore (MRPL/MSEZ) is dispatched in 2-4 days from Vadodara, with NACE and IBR documentation.",
    faqs: [
      { q: "Do you supply refinery-grade pipe to MRPL and Mangalore SEZ?", a: "Yes. We supply MRPL and MSEZ with alloy steel P22/P91, super duplex, NACE-HIC carbon steel and SS 316L, delivered in 2-4 days with IBR, NACE and MTC." },
    ],
  },
  "kochi": {
    city: "Kochi", region: "Kerala", distanceKm: 1450, lead: "3-4 days",
    hubs: ["BPCL Kochi Refinery", "Cochin Port & shipyard", "Ambalamugal & Eloor industrial belt"],
    industries: ["Oil refining (BPCL Kochi)", "Shipbuilding (Cochin Shipyard)", "Chemical & fertilizer", "Marine"],
    grades: "super duplex/duplex for marine & shipbuilding, alloy steel for refinery, SS 316L, NACE-HIC carbon steel",
    transport: "Kochi is dispatched in 3-4 days from Vadodara, with export/port documentation available.",
    faqs: [
      { q: "Do you supply marine and refinery pipe to Kochi?", a: "Yes. We supply BPCL Kochi Refinery and Cochin Shipyard with super duplex, duplex, alloy steel and SS 316L, with NACE, IBR and MTC, delivered in 3-4 days." },
    ],
  },
  "kolkata": {
    city: "Kolkata", region: "West Bengal", distanceKm: 1900, lead: "4-5 days",
    hubs: ["Howrah engineering belt", "Kalyani & Dankuni", "Haldia petrochemical corridor"],
    industries: ["Heavy engineering & foundry", "Petrochemicals (Haldia)", "Power", "Ports"],
    grades: "carbon steel and alloy steel for engineering & power, SS 304/316L, duplex for Haldia petrochem",
    transport: "Kolkata is dispatched in 4-5 days from Vadodara by road/rail.",
    faqs: [
      { q: "Do you deliver steel pipes to Kolkata and Howrah?", a: "Yes. We supply Howrah, Kalyani and the Haldia corridor with carbon steel, alloy steel, SS and duplex pipes and plates, delivered in 4-5 days with MTC." },
    ],
  },
  "haldia": {
    city: "Haldia", region: "West Bengal", distanceKm: 1950, lead: "4-5 days",
    hubs: ["Haldia Petrochemicals (HPL)", "IOCL Haldia Refinery", "Haldia Port & industrial complex"],
    industries: ["Petrochemicals (HPL)", "Oil refining (IOCL)", "Ports & marine"],
    grades: "alloy steel P22/P91 for refinery, duplex/super duplex for marine, NACE-HIC carbon steel, SS 316L",
    transport: "Haldia is dispatched in 4-5 days from Vadodara with IBR/NACE documentation.",
    faqs: [
      { q: "Do you supply refinery and petrochem pipe to Haldia?", a: "Yes. We supply IOCL Haldia and Haldia Petrochemicals with alloy steel, duplex, NACE-HIC carbon steel and SS 316L, delivered in 4-5 days with IBR, NACE and MTC." },
    ],
  },
  "durgapur": {
    city: "Durgapur", region: "West Bengal", distanceKm: 1850, lead: "4-5 days",
    hubs: ["Durgapur Steel Plant (SAIL)", "Durgapur industrial belt"],
    industries: ["Steel & metallurgy (SAIL)", "Power & engineering", "Chemical"],
    grades: "carbon steel, alloy steel P22/P91, boiler tubes and SS for steel and power plants",
    transport: "Durgapur is dispatched in 4-5 days from Vadodara.",
    faqs: [
      { q: "Do you supply alloy steel and boiler tubes to Durgapur?", a: "Yes. We supply Durgapur's steel and power sector with alloy steel P22/P91, boiler tubes, carbon steel and SS, delivered in 4-5 days with IBR and MTC." },
    ],
  },
  "rourkela": {
    city: "Rourkela", region: "Odisha", distanceKm: 1550, lead: "4-5 days",
    hubs: ["Rourkela Steel Plant (SAIL)", "Kalunga industrial estate"],
    industries: ["Steel & metallurgy (SAIL)", "Fabrication & engineering", "Power"],
    grades: "carbon steel, alloy steel, boiler tubes and SS for the steel plant belt",
    transport: "Rourkela is dispatched in 4-5 days from Vadodara.",
    faqs: [
      { q: "Do you supply steel to Rourkela Steel Plant belt?", a: "Yes. We supply Rourkela and Kalunga estate with carbon steel, alloy steel, boiler tubes and SS pipes and plates, delivered in 4-5 days with MTC." },
    ],
  },
  "paradip": {
    city: "Paradip", region: "Odisha", distanceKm: 1650, lead: "4-5 days",
    hubs: ["IOCL Paradip Refinery", "Paradip Port", "PCPIR Paradip"],
    industries: ["Oil refining (IOCL Paradip)", "Petrochemicals", "Ports & marine", "Fertilizers (IFFCO, PPL)"],
    grades: "alloy steel P22/P91 for refinery, super duplex/duplex for seawater & marine, NACE-HIC carbon steel, SS 316L",
    transport: "Paradip is dispatched in 4-5 days from Vadodara with IBR/NACE documentation.",
    faqs: [
      { q: "Do you supply refinery and marine pipe to Paradip?", a: "Yes. We supply IOCL Paradip and Paradip PCPIR with alloy steel, super duplex, NACE-HIC carbon steel and SS 316L, delivered in 4-5 days with IBR, NACE and MTC." },
    ],
  },
  "bhubaneswar": {
    city: "Bhubaneswar", region: "Odisha", distanceKm: 1650, lead: "4-5 days",
    hubs: ["Mancheswar industrial estate", "Khordha & Chandaka estates"],
    industries: ["Engineering & fabrication", "Infrastructure", "Steel downstream"],
    grades: "carbon steel, structural steel, SS 304/316L and alloy steel for engineering and infrastructure",
    transport: "Bhubaneswar is dispatched in 4-5 days from Vadodara.",
    faqs: [
      { q: "Do you deliver steel to Bhubaneswar industrial estates?", a: "Yes. We supply Mancheswar and Khordha estates with carbon, structural, SS and alloy steel, delivered in 4-5 days with MTC." },
    ],
  },
  "kakinada": {
    city: "Kakinada", region: "Andhra Pradesh", distanceKm: 1500, lead: "4-5 days",
    hubs: ["Kakinada SEZ", "ONGC & gas processing", "Kakinada Deep Water Port"],
    industries: ["Oil & gas (KG basin)", "Fertilizers", "Ports & marine", "Edible oil"],
    grades: "duplex/super duplex for offshore & marine, alloy steel, NACE-HIC carbon steel for sour gas, SS 316L",
    transport: "Kakinada is dispatched in 4-5 days from Vadodara with NACE/IBR documentation.",
    faqs: [
      { q: "Do you supply oil & gas pipe to Kakinada and KG basin?", a: "Yes. We supply Kakinada SEZ and KG basin gas processing with duplex, super duplex, NACE-HIC carbon steel and alloy steel, delivered in 4-5 days with NACE, IBR and MTC." },
    ],
  },
  "vizag": {
    city: "Visakhapatnam (Vizag)", region: "Andhra Pradesh", distanceKm: 1600, lead: "4-5 days",
    hubs: ["Visakhapatnam Steel Plant (RINL)", "HPCL Visakh Refinery", "Vizag Port & shipyard"],
    industries: ["Steel (RINL)", "Oil refining (HPCL)", "Shipbuilding & defence", "Ports"],
    grades: "alloy steel P22/P91 for refinery, super duplex/duplex for marine & shipbuilding, NACE-HIC carbon steel, SS 316L",
    transport: "Vizag is dispatched in 4-5 days from Vadodara with IBR/NACE documentation.",
    faqs: [
      { q: "Do you supply refinery and marine pipe to Visakhapatnam?", a: "Yes. We supply HPCL Visakh Refinery, RINL and Vizag shipyard with alloy steel, super duplex, NACE-HIC carbon steel and SS 316L, delivered in 4-5 days with full documentation." },
    ],
  },
  "numaligarh": {
    city: "Numaligarh", region: "Assam", distanceKm: 2600, lead: "5-7 days",
    hubs: ["Numaligarh Refinery (NRL)", "Assam oil belt"],
    industries: ["Oil refining (NRL)", "Petrochemicals", "Bio-refinery"],
    grades: "alloy steel P11/P22/P91 for refinery heaters, SS 321/347 high-temp, carbon steel A106, NACE-HIC for sour service",
    transport: "Numaligarh is dispatched in 5-7 days from Vadodara with IBR/NACE documentation for refinery projects.",
    faqs: [
      { q: "Do you supply refinery pipe to Numaligarh Refinery (NRL)?", a: "Yes. We supply NRL and the Assam oil belt with alloy steel P22/P91, SS 321/347, NACE-HIC and carbon steel A106, with IBR and MTC, delivered in 5-7 days." },
    ],
  },
  "jaipur": {
    city: "Jaipur", region: "Rajasthan", distanceKm: 650, lead: "2-3 days",
    hubs: ["Vishwakarma & Sitapura industrial areas", "Bagru & Kaladera estates"],
    industries: ["Engineering & fabrication", "Marble & mineral processing", "Chemical", "Infrastructure"],
    grades: "SS 304/316L, carbon steel, structural steel and alloy steel for engineering and infrastructure",
    transport: "Jaipur is dispatched in 2-3 days from Vadodara to Sitapura and Vishwakarma estates.",
    faqs: [
      { q: "Do you supply SS and carbon steel to Jaipur?", a: "Yes. We supply Jaipur's Vishwakarma, Sitapura and Bagru estates with SS, carbon, structural and alloy steel, delivered in 2-3 days with MTC." },
    ],
  },
  "indore": {
    city: "Indore", region: "Madhya Pradesh", distanceKm: 350, lead: "1-2 days",
    hubs: ["Pithampur industrial area (auto hub)", "Sanwer Road estate", "Dewas industrial belt"],
    industries: ["Automobile (Pithampur)", "Pharma & food processing", "Engineering"],
    grades: "SS 304/316L, alloy steel, carbon steel and structural steel for auto and engineering units",
    transport: "Indore (Pithampur) is ~350 km from Vadodara — dispatched in 1-2 days.",
    faqs: [
      { q: "Do you supply steel to Pithampur auto hub near Indore?", a: "Yes. We supply Pithampur and Sanwer Road units with SS 304/316L, alloy and carbon steel, delivered in 1-2 days from Vadodara with MTC." },
    ],
  },
  "bhopal": {
    city: "Bhopal", region: "Madhya Pradesh", distanceKm: 550, lead: "2-3 days",
    hubs: ["Mandideep industrial area", "Govindpura industrial estate"],
    industries: ["Heavy electricals (BHEL)", "Engineering & fabrication", "Pharma"],
    grades: "alloy steel and boiler tubes for BHEL, SS 304/316L, carbon and structural steel",
    transport: "Bhopal (Mandideep) is dispatched in 2-3 days from Vadodara.",
    faqs: [
      { q: "Do you supply alloy steel and boiler tubes to Bhopal BHEL belt?", a: "Yes. We supply Bhopal's BHEL and Mandideep engineering units with alloy steel, boiler tubes, SS and carbon steel, delivered in 2-3 days with IBR and MTC." },
    ],
  },
  "raipur": {
    city: "Raipur", region: "Chhattisgarh", distanceKm: 1000, lead: "3-4 days",
    hubs: ["Urla & Siltara industrial areas", "Bhilai steel belt (nearby)"],
    industries: ["Steel & sponge iron", "Power", "Engineering & fabrication"],
    grades: "carbon steel, alloy steel, boiler tubes and SS for the steel and power belt",
    transport: "Raipur (Urla/Siltara) is dispatched in 3-4 days from Vadodara.",
    faqs: [
      { q: "Do you supply steel to Raipur and Bhilai belt?", a: "Yes. We supply Urla, Siltara and the Bhilai steel belt with carbon steel, alloy steel, boiler tubes and SS, delivered in 3-4 days with MTC." },
    ],
  },
  "kanpur": {
    city: "Kanpur", region: "Uttar Pradesh", distanceKm: 1000, lead: "3-4 days",
    hubs: ["Panki industrial area", "Dada Nagar & Fazalganj estates"],
    industries: ["Engineering & fabrication", "Leather & chemical", "Defence & fertilizer"],
    grades: "SS 304/316L, carbon steel, alloy steel and structural steel for engineering and chemical units",
    transport: "Kanpur (Panki/Dada Nagar) is dispatched in 3-4 days from Vadodara.",
    faqs: [
      { q: "Do you supply steel pipes to Kanpur industrial areas?", a: "Yes. We supply Panki, Dada Nagar and Fazalganj estates with SS, carbon, alloy and structural steel, delivered in 3-4 days with MTC." },
    ],
  },
  "mathura": {
    city: "Mathura", region: "Uttar Pradesh", distanceKm: 900, lead: "2-4 days",
    hubs: ["IOCL Mathura Refinery", "Mathura industrial belt"],
    industries: ["Oil refining (IOCL Mathura)", "Engineering", "Chemical"],
    grades: "alloy steel P11/P22/P91 for refinery, SS 321/347, carbon steel A106 and NACE-HIC for sour service",
    transport: "Mathura (IOCL Refinery) is dispatched in 2-4 days from Vadodara with IBR/NACE documentation.",
    faqs: [
      { q: "Do you supply refinery pipe to IOCL Mathura?", a: "Yes. We supply IOCL Mathura Refinery with alloy steel P22/P91, SS 321/347, NACE-HIC and carbon steel A106, with IBR and MTC, in 2-4 days." },
    ],
  },
  "panipat": {
    city: "Panipat", region: "Haryana", distanceKm: 1050, lead: "3-4 days",
    hubs: ["IOCL Panipat Refinery & Petrochemical Complex", "Panipat industrial estate"],
    industries: ["Oil refining & petrochemicals (IOCL)", "Textiles", "Engineering"],
    grades: "alloy steel P22/P91 for refinery, duplex, SS 316L, NACE-HIC carbon steel for sour service",
    transport: "Panipat (IOCL complex) is dispatched in 3-4 days from Vadodara with IBR/NACE documentation.",
    faqs: [
      { q: "Do you supply refinery and petrochem pipe to IOCL Panipat?", a: "Yes. We supply IOCL Panipat Refinery & Petrochemical Complex with alloy steel, duplex, NACE-HIC carbon steel and SS 316L, delivered in 3-4 days with full documentation." },
    ],
  },
  "chandigarh": {
    city: "Chandigarh", region: "Punjab/Haryana", distanceKm: 1150, lead: "3-4 days",
    hubs: ["Industrial Area Phase I & II", "Mohali & Panchkula estates"],
    industries: ["Engineering & fabrication", "Auto components", "Pharma"],
    grades: "SS 304/316L, carbon steel, alloy steel and structural steel for engineering units",
    transport: "Chandigarh (with Mohali & Panchkula) is dispatched in 3-4 days from Vadodara.",
    faqs: [
      { q: "Do you supply SS and alloy steel to Chandigarh, Mohali and Panchkula?", a: "Yes. We supply the Chandigarh tricity engineering and auto-component units with SS, carbon, alloy and structural steel, delivered in 3-4 days with MTC." },
    ],
  },
  "ludhiana": {
    city: "Ludhiana", region: "Punjab", distanceKm: 1200, lead: "3-4 days",
    hubs: ["Focal Point industrial estates", "Dhandari Kalan"],
    industries: ["Bicycle & auto parts (manufacturing hub)", "Hosiery & textile machinery", "Engineering & forging"],
    grades: "SS 304/316L, free-machining stainless, carbon steel and alloy steel for the forging and parts hub",
    transport: "Ludhiana (Focal Point) is dispatched in 3-4 days from Vadodara.",
    faqs: [
      { q: "Do you supply SS bar and carbon steel to Ludhiana?", a: "Yes. We supply Ludhiana's Focal Point auto-parts and forging cluster with SS 304/316L, carbon and alloy steel bar, pipe and plate, delivered in 3-4 days with MTC." },
    ],
  },
  "goa": {
    city: "Goa", region: "Goa", distanceKm: 700, lead: "2-3 days",
    hubs: ["Verna & Kundaim industrial estates", "Mormugao Port", "Vasco pharma belt"],
    industries: ["Pharmaceuticals", "Shipbuilding & marine", "Food & beverage", "Mining downstream"],
    grades: "SS 316L for pharma and food, duplex for marine, carbon and alloy steel for engineering",
    transport: "Goa (Verna/Kundaim) is dispatched in 2-3 days from Vadodara.",
    faqs: [
      { q: "Do you supply SS 316L and duplex to Goa pharma and marine units?", a: "Yes. We supply Verna and Kundaim pharma and Mormugao marine units with SS 316L, duplex, carbon and alloy steel, delivered in 2-3 days with MTC." },
    ],
  },
  "silvassa": {
    city: "Silvassa", region: "Dadra & Nagar Haveli", distanceKm: 180, lead: "1-2 days",
    hubs: ["Silvassa industrial estates", "Masat, Piparia & Khadoli areas"],
    industries: ["Engineering & fabrication", "Chemical & plastics", "Textiles"],
    grades: "SS 304/316L, carbon steel, alloy steel and structural steel for engineering and chemical units",
    transport: "Silvassa is ~180 km from Vadodara — dispatched in 1-2 days.",
    faqs: [
      { q: "Do you supply steel pipes to Silvassa industrial estates?", a: "Yes. We supply Silvassa's Masat, Piparia and Khadoli estates with SS, carbon, alloy and structural steel, delivered in 1-2 days from Vadodara with MTC." },
    ],
  },
  "mundra": {
    city: "Mundra", region: "Kutch, Gujarat", distanceKm: 420, lead: "2-3 days",
    hubs: ["Mundra Port & SEZ (Adani)", "Adani Power Mundra", "Mundra industrial complex"],
    industries: ["Ports & logistics", "Power (Adani)", "Petrochemicals", "Marine"],
    grades: "super duplex/duplex for seawater & marine, alloy steel and boiler tubes for power, carbon steel for port structures",
    transport: "Mundra Port/SEZ is ~420 km from Vadodara — dispatched in 2-3 days.",
    faqs: [
      { q: "Do you supply steel to Mundra Port and Adani Power?", a: "Yes. We supply Mundra SEZ, Mundra Port and Adani Power with super duplex, duplex, alloy steel, boiler tubes and carbon steel, delivered in 2-3 days with IBR and MTC." },
    ],
  },
  "kandla": {
    city: "Kandla", region: "Kutch, Gujarat", distanceKm: 400, lead: "2-3 days",
    hubs: ["Kandla Port (Deendayal Port)", "Kandla SEZ (KASEZ)", "Gandhidham belt"],
    industries: ["Ports & logistics", "Salt & chemicals", "Edible oil & storage tanks"],
    grades: "duplex/super duplex for marine & salt works, SS 316L for chemical handling, carbon steel for tanks & structures",
    transport: "Kandla Port/KASEZ is ~400 km from Vadodara — dispatched in 2-3 days.",
    faqs: [
      { q: "Do you supply steel to Kandla Port and KASEZ?", a: "Yes. We supply Kandla Port, KASEZ and the salt/edible-oil belt with duplex, super duplex, SS 316L and carbon steel, delivered in 2-3 days with MTC." },
    ],
  },
  "patalganga": {
    city: "Patalganga", region: "Maharashtra", distanceKm: 470, lead: "1-2 days",
    hubs: ["Patalganga MIDC", "Rasayani & Khopoli industrial belt"],
    industries: ["Chemical & pharma", "Petrochemical downstream", "Engineering"],
    grades: "SS 316L, Hastelloy, duplex 2205 and alloy steel for chemical and pharma units",
    transport: "Patalganga MIDC is ~470 km from Vadodara — dispatched in 1-2 days.",
    faqs: [
      { q: "Do you supply SS and Hastelloy to Patalganga MIDC?", a: "Yes. We supply Patalganga and Rasayani chemical/pharma units with SS 316L, Hastelloy, duplex and alloy steel, delivered in 1-2 days with MTC." },
    ],
  },
};

function resolve(slug: string): CityData {
  return CITIES[slug] || fallback(slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " "));
}

const h2 = { "font-size": "1.4rem", "font-weight": "700", color: "#111827", margin: "2.5rem 0 1rem", "border-bottom": "2px solid #E8821A", "padding-bottom": "0.5rem" } as const;
const p = { "font-size": "0.95rem", color: "#374151", "line-height": "1.8", "margin-bottom": "1rem" } as const;
const li = { "font-size": "0.92rem", color: "#374151", "line-height": "1.9" } as const;

/**
 * Renders the unique, city-specific content section.
 * Usage: <LocationContent slug="bharuch" />
 */
export function LocationContent(props: { slug: string }) {
  const d = resolve(props.slug);
  return (
    <section aria-label={`About supplying steel to ${d.city}`}>
      <h2 style={h2}>Steel & Pipe Supply for {d.city}, {d.region}</h2>
      <p style={p}>
        Creative Metal Industries is a Vadodara-based stockist and supplier serving <strong>{d.city}</strong> and its
        surrounding {d.region} industrial belt. Our warehouse at GIDC Makarpura is approximately
        {" "}{d.distanceKm > 0 ? `${d.distanceKm} km from ${d.city}` : `in ${d.city} itself`}, which means we can offer
        {" "}<strong>{d.lead}</strong> delivery of stainless steel, carbon steel, alloy steel, duplex and exotic-alloy
        pipes, tubes, plates, fittings and flanges. Every consignment ships with mill test certificates (MTC per
        EN 10204 3.1/3.2), and IBR / NACE documentation is available where the application requires it.
      </p>

      <h2 style={h2}>Industrial Areas & Clusters We Serve Near {d.city}</h2>
      <ul style={{ ...li, "padding-left": "1.25rem", "margin-bottom": "1.5rem" }}>
        {d.hubs.map(hub => <li>{hub}</li>)}
      </ul>

      <h2 style={h2}>Key Industries in {d.city}</h2>
      <ul style={{ ...li, "padding-left": "1.25rem", "margin-bottom": "1.5rem" }}>
        {d.industries.map(ind => <li>{ind}</li>)}
      </ul>
      <p style={p}>
        For these industries we most commonly supply {d.grades}. {d.transport}
      </p>

      <h2 style={h2}>Materials & Grades Stocked for {d.city} Projects</h2>
      <p style={p}>
        We hold ready stock across the full catalogue so buyers in {d.city} can source from a single supplier:
        stainless steel (SS 304, 304L, 316L, 321, 310, 347, 904L), duplex 2205 and super duplex 2507, nickel
        alloys (Inconel 625/600/718, Monel 400/K500, Hastelloy C276/C22, Incoloy 800/825, Alloy 20),
        titanium (Grade 2 & Grade 5), copper-nickel, carbon steel (A106, A53, API 5L, SA 516 plate),
        alloy steel (P5, P9, P11, P22, P91, P92) and structural steel (MS angle, channel, beam, plate, TMT bars).
        All available as pipe, tube, plate, sheet, round bar, buttweld fitting, forged fitting and flange.
      </p>

      <h2 style={h2}>Frequently Asked Questions — Steel Supply in {d.city}</h2>
      <div style={{ display: "flex", "flex-direction": "column", gap: "0.75rem", "margin-bottom": "2rem" }}>
        {d.faqs.map(f => (
          <details style={{ background: "#fff", border: "1px solid #e5e7eb", "border-radius": "10px", padding: "1rem 1.25rem" }}>
            <summary style={{ "font-weight": "700", "font-size": "0.92rem", color: "#111827", cursor: "pointer" }}>{f.q}</summary>
            <p style={{ "font-size": "0.88rem", color: "#374151", "line-height": "1.7", "margin-top": "0.6rem", "margin-bottom": 0 }}>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
