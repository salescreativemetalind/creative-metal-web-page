import test from "node:test";
import assert from "node:assert/strict";
import { fetchQueryPageRows, rowsToCsv } from "./gsc-query-page-export.mjs";

test("GSC exporter requests query, page and date together and paginates", async () => {
  const requests = [];
  const pages = [
    { rows: [
      { keys: ["ss pipe supplier", "https://www.creativemetalind.com/ss-pipe-supplier", "2026-10-01"], clicks: 1, impressions: 10, ctr: 0.1, position: 8.5 },
      { keys: ["stainless pipe", "https://www.creativemetalind.com/ss-pipe-supplier", "2026-10-01"], clicks: 0, impressions: 5, ctr: 0, position: 12 },
    ] },
    { rows: [] },
  ];
  const fetchImpl = async (url, options) => {
    requests.push({ url, body: JSON.parse(options.body), authorization: options.headers.authorization });
    return { ok: true, json: async () => pages.shift() };
  };
  const rows = await fetchQueryPageRows({
    siteUrl: "sc-domain:creativemetalind.com",
    startDate: "2026-10-01",
    endDate: "2026-10-31",
    accessToken: "private-token",
    rowLimit: 2,
    fetchImpl,
  });
  assert.equal(rows.length, 2);
  assert.equal(requests.length, 2);
  assert.deepEqual(requests[0].body.dimensions, ["query", "page", "date"]);
  assert.equal(requests[0].body.aggregationType, "byPage");
  assert.equal(requests[0].body.dataState, "final");
  assert.equal(requests[0].body.startRow, 0);
  assert.equal(requests[1].body.startRow, 2);
  assert.equal(requests[0].authorization, "Bearer private-token");
  assert.doesNotMatch(requests[0].url, /private-token/);
});

test("GSC exporter writes the combined query-page-date CSV contract without inventing joins", () => {
  const csv = rowsToCsv([
    { keys: ["ss pipe supplier, india", "https://www.creativemetalind.com/ss-pipe-supplier", "2026-10-01"], clicks: 2, impressions: 25, ctr: 0.08, position: 9.25 },
  ]);
  assert.equal(csv, [
    "Query,Page,Date,Clicks,Impressions,CTR,Position",
    '"ss pipe supplier, india",https://www.creativemetalind.com/ss-pipe-supplier,2026-10-01,2,25,8.000000%,9.250000',
    "",
  ].join("\n"));
});

test("GSC exporter rejects missing private authentication", async () => {
  await assert.rejects(
    fetchQueryPageRows({ siteUrl: "https://www.creativemetalind.com/", startDate: "2026-10-01", endDate: "2026-10-31", accessToken: "" }),
    /OAuth access token is required/,
  );
});
