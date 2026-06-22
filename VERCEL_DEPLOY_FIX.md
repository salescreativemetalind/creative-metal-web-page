# Vercel Deployment Fix — `Cannot find package 'vinxi'`

## The error
```
Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'vinxi'
imported from /var/task/index.mjs
```
Every route (`/`, `/blog/...`) returned **HTTP 500** on production.

## Root cause
The build artifact directory **`creative-metal-industries/.vercel/`** was
**committed to git**, but `.gitignore` contained a blanket `node_modules/`
rule. That rule also matched the dependencies bundled *inside* the committed
function:

```
creative-metal-industries/.vercel/output/functions/__fallback.func/node_modules/  <-- IGNORED
```

So git stored a **prebuilt serverless function without its dependencies**
(`vinxi`, `solid-js`, `nodemailer`, …). On deploy, Vercel served that committed
`.vercel/output`, and at runtime the Lambda did `import 'vinxi'` → not found → 500.

This was **not** caused by the SEO content / new blog pages. A local
`npm run build` produces a correct, complete output every time.

## The fix (applied)
1. Added `.vercel/` to `.gitignore`.
2. Removed the stale build output from git tracking:
   `git rm -r --cached creative-metal-industries/.vercel`
   (local files were kept — only git tracking was removed).

Vercel now performs a **fresh build** on each deploy and produces a complete
function with all dependencies bundled.

## How to deploy the fix (scoped commit)

> NOTE: the working tree has many PRE-EXISTING deletions unrelated to this fix
> (e.g. SEO_ALL_FIXES.txt). Do NOT use `git commit -a`. Stage only what you want.

```bash
# 1. Stage the deploy fix
git add .gitignore
git add -u creative-metal-industries/.vercel   # stages the .vercel removals

# 2. Stage the new SEO blog pages + wiring
git add creative-metal-industries/src/routes/blog/
git add creative-metal-industries/public/sitemap.xml

# 3. Commit
git commit -m "Fix Vercel deploy (untrack .vercel build output) + add SEO blog pages"

# 4. Push to your branch (NOT directly to main unless that's your flow)
git push origin main
```

## Verify in Vercel after deploy
1. Vercel → your project → **Settings → Build & Output**
   - **Root Directory** must be `creative-metal-industries`
   - Framework Preset: **SolidStart** (or "Other" with `npm run build`)
   - Build Command: `npm run build` (vinxi build)
   - **Output Directory: leave EMPTY** (SolidStart uses the Build Output API at
     `.vercel/output` automatically — do not override it)
2. Trigger a **fresh deploy** with **"Use existing Build Cache" OFF**
   (Deployments → ⋯ → Redeploy → uncheck cache).
3. Open `https://www.creativemetalind.com/` → should return 200, not 500.

## If it still fails
- Confirm Vercel is building (logs show `vinxi build`), not just uploading a
  prebuilt folder.
- Ensure `vinxi` stays under `dependencies` (it is) — never `devDependencies`.
- As a fallback you can deploy locally with:
  `cd creative-metal-industries && npx vercel deploy --prebuilt`
  after a clean `npm run build`.
