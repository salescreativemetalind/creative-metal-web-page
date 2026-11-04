#!/usr/bin/env node
import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const API_ROOT = "https://searchconsole.googleapis.com/webmasters/v3/sites";
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const READONLY_SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";
const args = process.argv.slice(2);

function flag(name, fallback = "") {
  const index = args.indexOf(name);
  return index >= 0 ? args[index + 1] ?? fallback : fallback;
}

function isoDate(value, label) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) throw new Error(`${label} must use YYYY-MM-DD.`);
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.valueOf()) || date.toISOString().slice(0, 10) !== value) throw new Error(`${label} is not a valid calendar date.`);
  return value;
}

function defaultDates() {
  const end = new Date();
  end.setUTCDate(end.getUTCDate() - 3);
  const start = new Date(end);
  start.setUTCDate(start.getUTCDate() - 27);
  return { startDate: start.toISOString().slice(0, 10), endDate: end.toISOString().slice(0, 10) };
}

function base64url(value) {
  return Buffer.from(value).toString("base64url");
}

async function serviceAccountAccessToken(file, fetchImpl = fetch) {
  const credentials = JSON.parse(await fs.readFile(path.resolve(process.cwd(), file), "utf8"));
  if (!credentials.client_email || !credentials.private_key) throw new Error("Service-account JSON must contain client_email and private_key.");
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64url(JSON.stringify({
    iss: credentials.client_email,
    scope: READONLY_SCOPE,
    aud: credentials.token_uri || TOKEN_URL,
    iat: now,
    exp: now + 3600,
  }));
  const unsigned = `${header}.${claims}`;
  const signature = crypto.sign("RSA-SHA256", Buffer.from(unsigned), credentials.private_key).toString("base64url");
  const response = await fetchImpl(credentials.token_uri || TOKEN_URL, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: `${unsigned}.${signature}` }),
    signal: AbortSignal.timeout(30_000),
  });
  if (!response.ok) throw new Error(`OAuth token request failed (${response.status}): ${await response.text()}`);
  const payload = await response.json();
  if (!payload.access_token) throw new Error("OAuth token response did not contain access_token.");
  return payload.access_token;
}

function csvCell(value) {
  const text = String(value ?? "");
  return /[",\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

export function rowsToCsv(rows) {
  const columns = ["Query", "Page", "Date", "Clicks", "Impressions", "CTR", "Position"];
  const records = rows.map(row => {
    const [query = "", page = "", date = ""] = row.keys || [];
    return [query, page, date, row.clicks ?? 0, row.impressions ?? 0, `${((row.ctr ?? 0) * 100).toFixed(6)}%`, Number(row.position ?? 0).toFixed(6)];
  });
  return `${[columns, ...records].map(record => record.map(csvCell).join(",")).join("\n")}\n`;
}

export async function fetchQueryPageRows({ siteUrl, startDate, endDate, accessToken, rowLimit = 25_000, fetchImpl = fetch }) {
  if (!siteUrl) throw new Error("A Search Console property is required via --site-url.");
  if (!accessToken) throw new Error("A Search Console OAuth access token is required.");
  const rows = [];
  let startRow = 0;
  while (true) {
    const response = await fetchImpl(`${API_ROOT}/${encodeURIComponent(siteUrl)}/searchAnalytics/query`, {
      method: "POST",
      headers: { authorization: `Bearer ${accessToken}`, "content-type": "application/json" },
      body: JSON.stringify({
        startDate,
        endDate,
        dimensions: ["query", "page", "date"],
        type: "web",
        dataState: "final",
        aggregationType: "byPage",
        rowLimit,
        startRow,
      }),
      signal: AbortSignal.timeout(60_000),
    });
    if (!response.ok) throw new Error(`Search Console API request failed (${response.status}): ${await response.text()}`);
    const payload = await response.json();
    const pageRows = payload.rows || [];
    rows.push(...pageRows);
    if (pageRows.length < rowLimit) break;
    startRow += pageRows.length;
  }
  return rows;
}

async function main() {
  if (args.includes("--help")) {
    console.log("Usage: node scripts/gsc-query-page-export.mjs --site-url PROPERTY [--start-date YYYY-MM-DD] [--end-date YYYY-MM-DD] [--output data/seo-monitoring/private/gsc-query-page.csv] [--service-account path.json]\n\nAuthentication: set GOOGLE_SEARCH_CONSOLE_ACCESS_TOKEN for a temporary OAuth token, or pass --service-account with a private JSON key. The Search Console property must grant that user/service account access. PROPERTY may be a URL-prefix property such as https://www.creativemetalind.com/ or a domain property such as sc-domain:creativemetalind.com.");
    return;
  }
  const defaults = defaultDates();
  const siteUrl = flag("--site-url", process.env.GOOGLE_SEARCH_CONSOLE_SITE_URL || "");
  const startDate = isoDate(flag("--start-date", defaults.startDate), "--start-date");
  const endDate = isoDate(flag("--end-date", defaults.endDate), "--end-date");
  if (startDate > endDate) throw new Error("--start-date must not be after --end-date.");
  const output = path.resolve(ROOT, flag("--output", "data/seo-monitoring/private/gsc-query-page.csv"));
  const serviceAccount = flag("--service-account", process.env.GOOGLE_SEARCH_CONSOLE_SERVICE_ACCOUNT_FILE || "");
  const accessToken = process.env.GOOGLE_SEARCH_CONSOLE_ACCESS_TOKEN || (serviceAccount ? await serviceAccountAccessToken(serviceAccount) : "");
  if (!accessToken) throw new Error("Authentication missing. Set GOOGLE_SEARCH_CONSOLE_ACCESS_TOKEN or pass --service-account path/to/private-key.json. Do not commit credentials.");
  const rows = await fetchQueryPageRows({ siteUrl, startDate, endDate, accessToken });
  await fs.mkdir(path.dirname(output), { recursive: true });
  await fs.writeFile(output, rowsToCsv(rows), { mode: 0o600 });
  console.log(`Search Console query/page/date export: ${path.relative(ROOT, output)}`);
  console.log(`Property: ${siteUrl}; dates: ${startDate} to ${endDate}; rows: ${rows.length}`);
  console.log("The API may omit anonymized and very low-volume queries; exported rows must not be treated as complete search demand.");
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch(error => { console.error(`GSC export failed: ${error.message}`); process.exitCode = 1; });
}
