"""
IndexNow Submission (ALL pages) — Creative Metal Industries
Pulls every URL from the live sitemap-index and submits them to
IndexNow-compatible engines (Bing, Yandex, IndexNow.org partners) for
instant crawl notification.

NOTE: Google does NOT support IndexNow. For Google, submit the sitemap in
Search Console and use URL Inspection > Request Indexing (manual, needs login).

Run: python submit-indexnow-all.py
"""

import json
import re
import urllib.request

INDEXNOW_KEY = "b4d3f8e2a1c7905d6e4f1b8a3c2d7e9f"
HOST = "www.creativemetalind.com"
KEY_LOCATION = f"https://{HOST}/indexnow-key.txt"
SITEMAP_INDEX = f"https://{HOST}/sitemap-index.xml"

UA = {"User-Agent": "Mozilla/5.0 (IndexNow submitter)"}


def fetch(url):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read().decode("utf-8", errors="replace")


def get_locs(xml):
    """Return all <loc> values from a sitemap or sitemap index."""
    return re.findall(r"<loc>\s*(.*?)\s*</loc>", xml, re.IGNORECASE | re.DOTALL)


def collect_all_urls():
    index_xml = fetch(SITEMAP_INDEX)
    child_sitemaps = get_locs(index_xml)
    all_urls = []
    seen = set()
    for sm in child_sitemaps:
        try:
            sm_xml = fetch(sm)
        except Exception as e:
            print(f"  ! failed to fetch {sm}: {e}")
            continue
        locs = get_locs(sm_xml)
        # a child sitemap contains page URLs (not nested sitemaps)
        for u in locs:
            if u not in seen and HOST in u:
                seen.add(u)
                all_urls.append(u)
        print(f"  - {sm.split('/')[-1]}: {len(locs)} urls")
    return all_urls


def submit_batch(engine_url, urls):
    payload = {"host": HOST, "key": INDEXNOW_KEY, "keyLocation": KEY_LOCATION, "urlList": urls}
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        engine_url, data=data,
        headers={"Content-Type": "application/json; charset=utf-8"}, method="POST")
    try:
        with urllib.request.urlopen(req, timeout=60) as response:
            print(f"    OK {engine_url} -> HTTP {response.status}")
            return True
    except Exception as e:
        print(f"    ERR {engine_url} -> {e}")
        return False


if __name__ == "__main__":
    print("Collecting all URLs from live sitemaps...")
    urls = collect_all_urls()
    print(f"\nTotal unique URLs collected: {len(urls)}\n")

    if not urls:
        print("No URLs found — aborting.")
        raise SystemExit(1)

    engines = [
        "https://www.bing.com/indexnow",
        "https://yandex.com/indexnow",
        "https://api.indexnow.org/indexnow",
    ]
    # IndexNow accepts up to 10,000 URLs per request; batch at 5000 to be safe.
    BATCH = 5000
    for engine in engines:
        print(f"Submitting to {engine} ...")
        for i in range(0, len(urls), BATCH):
            submit_batch(engine, urls[i:i + BATCH])

    print(f"\nDone. {len(urls)} URLs pinged to {len(engines)} IndexNow engines.")
    print("\nGoogle (no IndexNow): submit sitemap-index.xml in Search Console")
    print("and use URL Inspection > Request Indexing for priority pages.")
