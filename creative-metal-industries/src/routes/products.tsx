import { Title, Meta, Link } from "@solidjs/meta";
import { createSignal, For } from "solid-js";
import "./products.css";

// ─── MS Angle sizes (IS 2062 / IS 808) ─────────────────────────────────────
const MS_ANGLE_EQUAL = [
  { size: "20×20×3",   wt_ft: "0.274", wt_m: "0.90"  },
  { size: "25×25×3",   wt_ft: "0.335", wt_m: "1.10"  },
  { size: "25×25×5",   wt_ft: "0.548", wt_m: "1.80"  },
  { size: "40×40×3",   wt_ft: "0.548", wt_m: "1.80"  },
  { size: "40×40×5",   wt_ft: "0.915", wt_m: "3.00"  },
  { size: "40×40×6",   wt_ft: "1.066", wt_m: "3.50"  },
  { size: "50×50×5",   wt_ft: "1.158", wt_m: "3.80"  },
  { size: "50×50×6",   wt_ft: "1.372", wt_m: "4.50"  },
  { size: "65×65×6",   wt_ft: "1.767", wt_m: "5.80"  },
  { size: "65×65×8",   wt_ft: "2.346", wt_m: "7.70"  },
  { size: "65×65×10",  wt_ft: "2.864", wt_m: "9.40"  },
  { size: "75×75×6",   wt_ft: "2.072", wt_m: "6.80"  },
  { size: "75×75×8",   wt_ft: "2.712", wt_m: "8.90"  },
  { size: "75×75×10",  wt_ft: "3.352", wt_m: "11.00" },
  { size: "100×100×8", wt_ft: "3.687", wt_m: "12.10" },
  { size: "100×100×10",wt_ft: "4.545", wt_m: "14.91" },
  { size: "100×100×12",wt_ft: "5.395", wt_m: "17.70" },
  { size: "130×130×10",wt_ft: "6.004", wt_m: "19.70" },
  { size: "150×150×10",wt_ft: "6.950", wt_m: "22.80" },
  { size: "150×150×12",wt_ft: "8.290", wt_m: "27.20" },
  { size: "150×150×16",wt_ft: "10.911",wt_m: "35.80" },
  { size: "200×200×16",wt_ft: "14.60", wt_m: "47.90" },
];

// ─── ISMC Channel (IS 808) ──────────────────────────────────────────────────
const ISMC = [
  { desig: "ISMC 75",  depth: 75,  flange: 40,  web: 4.4, wt_m: "7.14"  },
  { desig: "ISMC 100", depth: 100, flange: 50,  web: 5.0, wt_m: "9.56"  },
  { desig: "ISMC 125", depth: 125, flange: 65,  web: 5.3, wt_m: "13.10" },
  { desig: "ISMC 150", depth: 150, flange: 75,  web: 5.7, wt_m: "16.40" },
  { desig: "ISMC 175", depth: 175, flange: 75,  web: 6.0, wt_m: "19.60" },
  { desig: "ISMC 200", depth: 200, flange: 75,  web: 6.2, wt_m: "22.10" },
  { desig: "ISMC 225", depth: 225, flange: 80,  web: 6.5, wt_m: "26.10" },
  { desig: "ISMC 250", depth: 250, flange: 82,  web: 7.2, wt_m: "30.40" },
  { desig: "ISMC 300", depth: 300, flange: 90,  web: 7.8, wt_m: "36.30" },
  { desig: "ISMC 350", depth: 350, flange: 100, web: 8.1, wt_m: "42.70" },
  { desig: "ISMC 400", depth: 400, flange: 100, web: 8.6, wt_m: "49.40" },
];

// ─── ISMB Beam (IS 808) ─────────────────────────────────────────────────────
const ISMB = [
  { desig: "ISMB 100", depth: 100, flange: 75,  web: 4.0, wt_m: "11.5" },
  { desig: "ISMB 125", depth: 125, flange: 75,  web: 4.4, wt_m: "13.0" },
  { desig: "ISMB 150", depth: 150, flange: 80,  web: 4.8, wt_m: "14.9" },
  { desig: "ISMB 175", depth: 175, flange: 90,  web: 5.5, wt_m: "19.5" },
  { desig: "ISMB 200", depth: 200, flange: 100, web: 5.7, wt_m: "25.4" },
  { desig: "ISMB 225", depth: 225, flange: 110, web: 6.5, wt_m: "31.2" },
  { desig: "ISMB 250", depth: 250, flange: 125, web: 6.9, wt_m: "37.3" },
  { desig: "ISMB 300", depth: 300, flange: 140, web: 7.5, wt_m: "46.1" },
  { desig: "ISMB 350", depth: 350, flange: 140, web: 8.1, wt_m: "52.4" },
  { desig: "ISMB 400", depth: 400, flange: 140, web: 8.9, wt_m: "61.6" },
  { desig: "ISMB 450", depth: 450, flange: 150, web: 9.4, wt_m: "72.4" },
  { desig: "ISMB 500", depth: 500, flange: 180, web: 10.2,wt_m: "86.9" },
  { desig: "ISMB 550", depth: 550, flange: 190, web: 11.2,wt_m: "103.7"},
  { desig: "ISMB 600", depth: 600, flange: 210, web: 12.0,wt_m: "122.6"},
];

// ─── ERW Pipe IS 1239 (mm) ──────────────────────────────────────────────────
const ERW_PIPE = [
  { nb: "15",  od: "21.3",  light: "1.80", medium: "2.65", heavy: "3.25" },
  { nb: "20",  od: "26.9",  light: "2.00", medium: "2.65", heavy: "3.25" },
  { nb: "25",  od: "33.7",  light: "2.65", medium: "3.25", heavy: "4.05" },
  { nb: "32",  od: "42.4",  light: "2.65", medium: "3.25", heavy: "4.05" },
  { nb: "40",  od: "48.3",  light: "2.90", medium: "3.25", heavy: "4.05" },
  { nb: "50",  od: "60.3",  light: "2.90", medium: "3.65", heavy: "4.50" },
  { nb: "65",  od: "76.1",  light: "3.25", medium: "3.65", heavy: "4.50" },
  { nb: "80",  od: "88.9",  light: "3.25", medium: "4.05", heavy: "4.85" },
  { nb: "100", od: "114.3", light: "3.65", medium: "4.50", heavy: "5.40" },
  { nb: "125", od: "139.7", light: "-",    medium: "4.85", heavy: "5.40" },
  { nb: "150", od: "165.1", light: "-",    medium: "4.85", heavy: "5.40" },
  { nb: "200", od: "219.1", light: "-",    medium: "5.90", heavy: "6.35" },
  { nb: "250", od: "273.0", light: "-",    medium: "6.35", heavy: "7.10" },
  { nb: "300", od: "323.9", light: "-",    medium: "6.35", heavy: "7.90" },
];

// ─── TMT Bar diameters ───────────────────────────────────────────────────────
const TMT_BARS = [
  { dia: "8",   wt_m: "0.395", len: "12m", grade: "Fe 500/500D" },
  { dia: "10",  wt_m: "0.617", len: "12m", grade: "Fe 500/500D" },
  { dia: "12",  wt_m: "0.888", len: "12m", grade: "Fe 500/500D" },
  { dia: "16",  wt_m: "1.580", len: "12m", grade: "Fe 500/500D/550D" },
  { dia: "20",  wt_m: "2.469", len: "12m", grade: "Fe 500/500D/550D" },
  { dia: "25",  wt_m: "3.858", len: "12m", grade: "Fe 500/500D/550D/600" },
  { dia: "32",  wt_m: "6.313", len: "12m", grade: "Fe 500/500D/550D/600" },
  { dia: "36",  wt_m: "7.990", len: "12m", grade: "Fe 500/550D/600" },
  { dia: "40",  wt_m: "9.864", len: "12m", grade: "Fe 500/550D/600" },
];

// ─── MS Flat Bar ──────────────────────────────────────────────────────────────
const MS_FLAT = [
  { size: "20×3",  wt_m: "0.47" }, { size: "25×3",  wt_m: "0.59" },
  { size: "25×5",  wt_m: "0.98" }, { size: "32×5",  wt_m: "1.26" },
  { size: "40×5",  wt_m: "1.57" }, { size: "50×5",  wt_m: "1.96" },
  { size: "50×6",  wt_m: "2.36" }, { size: "65×6",  wt_m: "3.07" },
  { size: "75×6",  wt_m: "3.53" }, { size: "75×8",  wt_m: "4.71" },
  { size: "100×6", wt_m: "4.71" }, { size: "100×8", wt_m: "6.28" },
  { size: "100×10",wt_m: "7.85" }, { size: "150×10",wt_m: "11.78"},
  { size: "200×10",wt_m: "15.70"},
];

// ─── MS Round Bar ────────────────────────────────────────────────────────────
const MS_ROUND = [
  { dia: "6",   wt_m: "0.222" }, { dia: "8",   wt_m: "0.395" },
  { dia: "10",  wt_m: "0.617" }, { dia: "12",  wt_m: "0.888" },
  { dia: "16",  wt_m: "1.58"  }, { dia: "20",  wt_m: "2.47"  },
  { dia: "25",  wt_m: "3.86"  }, { dia: "32",  wt_m: "6.31"  },
  { dia: "40",  wt_m: "9.86"  }, { dia: "50",  wt_m: "15.42" },
  { dia: "63",  wt_m: "24.47" }, { dia: "75",  wt_m: "34.68" },
  { dia: "100", wt_m: "61.65" }, { dia: "125", wt_m: "96.33" },
  { dia: "150", wt_m: "138.72"},
];

// ─── MS Square Bar ───────────────────────────────────────────────────────────
const MS_SQUARE = [
  { size: "10",  wt_m: "0.79" }, { size: "12",  wt_m: "1.13" },
  { size: "16",  wt_m: "2.01" }, { size: "20",  wt_m: "3.14" },
  { size: "25",  wt_m: "4.91" }, { size: "32",  wt_m: "8.04" },
  { size: "40",  wt_m: "12.56"}, { size: "50",  wt_m: "19.63"},
  { size: "63",  wt_m: "31.16"}, { size: "75",  wt_m: "44.16"},
  { size: "100", wt_m: "78.50"},
];

// ─── SS Seamless Pipe ASTM A312 (NPS / Schedule) ─────────────────────────────
const SS_PIPE_SCHEDULE = [
  { nps: "1/2\"",  od: "21.34", sch10s: "2.11", sch40s: "2.77", sch80s: "3.73", sch160: "4.78" },
  { nps: "3/4\"",  od: "26.67", sch10s: "2.11", sch40s: "2.87", sch80s: "3.91", sch160: "5.56" },
  { nps: "1\"",    od: "33.40", sch10s: "2.77", sch40s: "3.38", sch80s: "4.55", sch160: "6.35" },
  { nps: "1½\"",   od: "48.26", sch10s: "2.77", sch40s: "3.68", sch80s: "5.08", sch160: "7.14" },
  { nps: "2\"",    od: "60.33", sch10s: "2.77", sch40s: "3.91", sch80s: "5.54", sch160: "8.74" },
  { nps: "2½\"",   od: "73.03", sch10s: "3.05", sch40s: "5.16", sch80s: "7.01", sch160: "9.53" },
  { nps: "3\"",    od: "88.90", sch10s: "3.05", sch40s: "5.49", sch80s: "7.62", sch160: "11.13"},
  { nps: "4\"",    od: "114.30",sch10s: "3.05", sch40s: "6.02", sch80s: "8.56", sch160: "13.49"},
  { nps: "6\"",    od: "168.28",sch10s: "3.40", sch40s: "7.11", sch80s: "10.97",sch160: "18.26"},
  { nps: "8\"",    od: "219.08",sch10s: "3.76", sch40s: "8.18", sch80s: "12.70",sch160: "23.01"},
  { nps: "10\"",   od: "273.05",sch10s: "4.19", sch40s: "9.27", sch80s: "12.70",sch160: "28.58"},
  { nps: "12\"",   od: "323.85",sch10s: "4.57", sch40s: "9.53", sch80s: "12.70",sch160: "33.32"},
];

// ─── Tabs config ─────────────────────────────────────────────────────────────
const TABS = [
  { id: "ms-angle",    label: "MS Angle" },
  { id: "ismc",        label: "ISMC Channel" },
  { id: "ismb",        label: "ISMB Beam" },
  { id: "erw-pipe",    label: "ERW Pipe" },
  { id: "tmt",         label: "TMT Bars" },
  { id: "ms-flat",     label: "MS Flat Bar" },
  { id: "ms-round",    label: "MS Round Bar" },
  { id: "ms-square",   label: "MS Square Bar" },
  { id: "ss-pipe",     label: "SS Pipe SCH" },
];

export default function ProductsPage() {
  const [tab, setTab] = createSignal("ms-angle");
  return (
    <>
      <Title>Steel Product Sizes & Weight Chart | Creative Metal Industries Vadodara</Title>
      <Meta name="description" content="Complete steel product size and weight charts — MS Angle IS 808, ISMC Channel, ISMB Beam, ERW Pipe IS 1239, TMT Bars IS 1786, MS Flat/Round/Square Bar, SS Seamless Pipe ASTM A312 schedules. Creative Metal Industries, Vadodara." />
      <Link rel="canonical" href="https://www.creativemetalind.com/products" />

      <header class="pt-header">
        <div class="container">
          <a href="/" class="pt-back">← Back to Home</a>
          <h1>Steel Product Specifications &amp; Size Charts</h1>
          <p>Reference tables for all structural steel, pipes and bars supplied by Creative Metal Industries, Vadodara</p>
        </div>
      </header>

      <main class="pt-main">
        <div class="container">
          {/* Tab strip */}
          <div class="pt-tabs" role="tablist">
            <For each={TABS}>{(t) => (
              <button role="tab" aria-selected={tab() === t.id}
                class={`pt-tab ${tab() === t.id ? "active" : ""}`}
                onClick={() => setTab(t.id)}>
                {t.label}
              </button>
            )}</For>
          </div>

          {/* MS Angle */}
          {tab() === "ms-angle" && (
            <div class="pt-panel">
              <div class="pt-panel-header">
                <h2>MS Equal Angle — IS 2062 / IS 808</h2>
                <p>Grade: E250 / E350 &nbsp;|&nbsp; Make: SAIL, VSP, JSW, TATA &nbsp;|&nbsp; Standard Length: 6m / 9m / 12m</p>
              </div>
              <div class="pt-table-wrap">
                <table class="pt-table">
                  <thead><tr><th>Size (mm × mm × mm)</th><th>Wt / Ft (kg)</th><th>Wt / Mtr (kg)</th><th>Wt 6m Bar (kg)</th></tr></thead>
                  <tbody>
                    <For each={MS_ANGLE_EQUAL}>{(r) => (
                      <tr>
                        <td><strong>{r.size}</strong></td>
                        <td>{r.wt_ft}</td>
                        <td>{r.wt_m}</td>
                        <td>{(parseFloat(r.wt_m) * 6).toFixed(2)}</td>
                      </tr>
                    )}</For>
                  </tbody>
                </table>
              </div>
              <div class="pt-note">Unequal leg angles also available: 65×50, 75×50, 100×65, 100×75, 130×65, 150×75, 150×100, 200×100, 200×150 — contact for rates.</div>
            </div>
          )}

          {/* ISMC Channel */}
          {tab() === "ismc" && (
            <div class="pt-panel">
              <div class="pt-panel-header">
                <h2>ISMC Channel — IS 2062 / IS 808</h2>
                <p>Grade: E250 &nbsp;|&nbsp; Make: SAIL, VSP, JSW &nbsp;|&nbsp; Standard Length: 6m / 9m / 12m</p>
              </div>
              <div class="pt-table-wrap">
                <table class="pt-table">
                  <thead><tr><th>Designation</th><th>Depth (mm)</th><th>Flange Width (mm)</th><th>Web Thickness (mm)</th><th>Wt / Mtr (kg)</th></tr></thead>
                  <tbody>
                    <For each={ISMC}>{(r) => (
                      <tr>
                        <td><strong>{r.desig}</strong></td>
                        <td>{r.depth}</td><td>{r.flange}</td><td>{r.web}</td><td>{r.wt_m}</td>
                      </tr>
                    )}</For>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ISMB Beam */}
          {tab() === "ismb" && (
            <div class="pt-panel">
              <div class="pt-panel-header">
                <h2>ISMB Beam — IS 2062 / IS 808</h2>
                <p>Grade: E250 &nbsp;|&nbsp; Make: SAIL, VSP, JSW &nbsp;|&nbsp; Standard Length: 6m / 9m / 12m</p>
              </div>
              <div class="pt-table-wrap">
                <table class="pt-table">
                  <thead><tr><th>Designation</th><th>Depth (mm)</th><th>Flange Width (mm)</th><th>Web Thickness (mm)</th><th>Wt / Mtr (kg)</th></tr></thead>
                  <tbody>
                    <For each={ISMB}>{(r) => (
                      <tr>
                        <td><strong>{r.desig}</strong></td>
                        <td>{r.depth}</td><td>{r.flange}</td><td>{r.web}</td><td>{r.wt_m}</td>
                      </tr>
                    )}</For>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ERW Pipe */}
          {tab() === "erw-pipe" && (
            <div class="pt-panel">
              <div class="pt-panel-header">
                <h2>ERW Pipe Wall Thickness — IS 1239 (Part 1)</h2>
                <p>All dimensions in mm &nbsp;|&nbsp; Black / Galvanized available &nbsp;|&nbsp; Make: APL Apollo, Tata, JSW</p>
              </div>
              <div class="pt-table-wrap">
                <table class="pt-table">
                  <thead><tr><th>NB (mm)</th><th>OD (mm)</th><th>Light (mm)</th><th>Medium (mm)</th><th>Heavy (mm)</th></tr></thead>
                  <tbody>
                    <For each={ERW_PIPE}>{(r) => (
                      <tr>
                        <td><strong>{r.nb}</strong></td>
                        <td>{r.od}</td><td>{r.light}</td><td>{r.medium}</td><td>{r.heavy}</td>
                      </tr>
                    )}</For>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TMT */}
          {tab() === "tmt" && (
            <div class="pt-panel">
              <div class="pt-panel-header">
                <h2>TMT / CRS Reinforcement Bars — IS 1786</h2>
                <p>Grades: Fe 500 / Fe 500D / Fe 550D / Fe 600 &nbsp;|&nbsp; Make: SAIL, JSW, TATA, VSP and ISI approved secondary</p>
              </div>
              <div class="pt-table-wrap">
                <table class="pt-table">
                  <thead><tr><th>Diameter (mm)</th><th>Wt / Mtr (kg)</th><th>Wt 12m Bar (kg)</th><th>Available Grades</th></tr></thead>
                  <tbody>
                    <For each={TMT_BARS}>{(r) => (
                      <tr>
                        <td><strong>{r.dia} mm</strong></td>
                        <td>{r.wt_m}</td>
                        <td>{(parseFloat(r.wt_m) * 12).toFixed(2)}</td>
                        <td>{r.grade}</td>
                      </tr>
                    )}</For>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* MS Flat */}
          {tab() === "ms-flat" && (
            <div class="pt-panel">
              <div class="pt-panel-header">
                <h2>MS Flat Bar — IS 2062</h2>
                <p>Width × Thickness (mm) &nbsp;|&nbsp; Grade: E250 &nbsp;|&nbsp; Make: Rolling Mills</p>
              </div>
              <div class="pt-table-wrap">
                <table class="pt-table">
                  <thead><tr><th>Size W×T (mm)</th><th>Wt / Mtr (kg)</th><th>Wt 6m Bar (kg)</th></tr></thead>
                  <tbody>
                    <For each={MS_FLAT}>{(r) => (
                      <tr><td><strong>{r.size}</strong></td><td>{r.wt_m}</td><td>{(parseFloat(r.wt_m)*6).toFixed(2)}</td></tr>
                    )}</For>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* MS Round */}
          {tab() === "ms-round" && (
            <div class="pt-panel">
              <div class="pt-panel-header">
                <h2>MS Round Bar — IS 2062</h2>
                <p>Grade: E250 / EN8 / EN24 &nbsp;|&nbsp; Make: SAIL, Rolling Mills</p>
              </div>
              <div class="pt-table-wrap">
                <table class="pt-table">
                  <thead><tr><th>Diameter (mm)</th><th>Wt / Mtr (kg)</th><th>Wt 6m Bar (kg)</th></tr></thead>
                  <tbody>
                    <For each={MS_ROUND}>{(r) => (
                      <tr><td><strong>{r.dia} mm</strong></td><td>{r.wt_m}</td><td>{(parseFloat(r.wt_m)*6).toFixed(2)}</td></tr>
                    )}</For>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* MS Square */}
          {tab() === "ms-square" && (
            <div class="pt-panel">
              <div class="pt-panel-header">
                <h2>MS Square Bar — IS 2062</h2>
                <p>Grade: E250 &nbsp;|&nbsp; Make: Rolling Mills</p>
              </div>
              <div class="pt-table-wrap">
                <table class="pt-table">
                  <thead><tr><th>Size (mm × mm)</th><th>Wt / Mtr (kg)</th><th>Wt 6m Bar (kg)</th></tr></thead>
                  <tbody>
                    <For each={MS_SQUARE}>{(r) => (
                      <tr><td><strong>{r.size}×{r.size}</strong></td><td>{r.wt_m}</td><td>{(parseFloat(r.wt_m)*6).toFixed(2)}</td></tr>
                    )}</For>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* SS Pipe Schedule */}
          {tab() === "ss-pipe" && (
            <div class="pt-panel">
              <div class="pt-panel-header">
                <h2>SS Seamless Pipe Wall Thickness — ASTM A312</h2>
                <p>All dimensions in mm &nbsp;|&nbsp; Grades: TP 304, 304L, 316, 316L, 321, 317L &nbsp;|&nbsp; Make: Sandvik, Ratnamani, Venus</p>
              </div>
              <div class="pt-table-wrap">
                <table class="pt-table">
                  <thead><tr><th>NPS</th><th>OD (mm)</th><th>SCH 10S (mm)</th><th>SCH 40S (mm)</th><th>SCH 80S (mm)</th><th>SCH 160 (mm)</th></tr></thead>
                  <tbody>
                    <For each={SS_PIPE_SCHEDULE}>{(r) => (
                      <tr>
                        <td><strong>{r.nps}</strong></td>
                        <td>{r.od}</td><td>{r.sch10s}</td><td>{r.sch40s}</td><td>{r.sch80s}</td><td>{r.sch160}</td>
                      </tr>
                    )}</For>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div class="pt-cta">
            <h3>Need a quote for any of these products?</h3>
            <p>Contact our team with quantity and delivery location — we'll respond within 24 hours.</p>
            <div class="pt-cta-btns">
              <a href="/#contact" class="btn btn-primary">Send Enquiry →</a>
              <a href="tel:+919998280619" class="btn btn-outline">📞 +91 99982 80619</a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
