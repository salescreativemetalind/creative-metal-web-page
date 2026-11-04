# Search Console Query-by-Page Acquisition Status

**Site:** `https://www.creativemetalind.com/`

**Checked:** 2026-11-04

## Result

The existing Search Console ZIP, `https___www.creativemetalind.com_-Performance-on-Search-2026-11-03.zip`, cannot establish query-to-page ownership. It contains separate aggregate files (`Queries.csv` and `Pages.csv`) rather than rows containing query, page and date together. These aggregates must not be joined by assumption.

A read-only API exporter is available at `scripts/gsc-query-page-export.mjs`. It requests these Search Analytics dimensions together:

- `query`
- `page`
- `date`

It requests final Web Search data, uses page-level aggregation, paginates API results and writes a CSV compatible with `scripts/seo-monitor.mjs`.

## Current blocker

No Search Console OAuth access token, service-account JSON path or property environment variable is configured in the current environment. Private Search Console data therefore has not been downloaded. No metrics were invented.

## Authentication option A: temporary OAuth access token

Set these values in the local shell without writing the token to a repository file:

```sh
export GOOGLE_SEARCH_CONSOLE_ACCESS_TOKEN='temporary-readonly-token'
export GOOGLE_SEARCH_CONSOLE_SITE_URL='https://www.creativemetalind.com/'
node scripts/gsc-query-page-export.mjs \
  --start-date 2026-08-01 \
  --end-date 2026-10-31 \
  --output data/seo-monitoring/private/gsc-query-page-2026-08-01-to-2026-10-31.csv
```

Use `sc-domain:creativemetalind.com` instead if that is the verified property to which the credential has access.

## Authentication option B: service account

1. Create or select a Google Cloud service account.
2. Enable the Google Search Console API in that Cloud project.
3. Add the service account email as a user of the applicable Search Console property.
4. Keep the JSON key outside the repository, or in another explicitly private location.
5. Run:

```sh
node scripts/gsc-query-page-export.mjs \
  --site-url 'https://www.creativemetalind.com/' \
  --start-date 2026-08-01 \
  --end-date 2026-10-31 \
  --service-account '/absolute/private/path/search-console-service-account.json' \
  --output data/seo-monitoring/private/gsc-query-page-2026-08-01-to-2026-10-31.csv
```

## Analyze the acquired data

After a successful export:

```sh
npm run seo:monitor -- \
  --gsc-current data/seo-monitoring/private/gsc-query-page-2026-08-01-to-2026-10-31.csv
```

For meaningful trend comparison, export equal-length current and previous periods separately and pass both files using `--gsc-current` and `--gsc-previous`.

## Privacy and interpretation

- `data/seo-monitoring/private/` is Git-ignored.
- Never commit OAuth tokens, service-account keys or private analytics exports.
- Search Console may omit anonymized and very low-volume queries, so exported rows do not represent all search demand.
- Query/page overlap is evidence for review, not automatic proof of keyword cannibalization.
