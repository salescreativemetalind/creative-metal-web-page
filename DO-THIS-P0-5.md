# DO THIS — Turn On Google Analytics + Search Console

Your website is not tracking visitors yet. Follow these steps once.
Time needed: about 15 minutes. Tick each box as you finish.

--------------------------------------------------------------------

## [ ] 1. Get your Analytics ID

- Go to: https://analytics.google.com
- Click the gear icon (Admin) at bottom-left
- Click "Data Streams" > click your website
- Copy the "Measurement ID" (looks like: G-ABC1234XYZ )

Write it here:  G-______________________

--------------------------------------------------------------------

## [ ] 2. Get your Search Console code

- Go to: https://search.google.com/search-console
- Pick your site: www.creativemetalind.com
- Open the "HTML tag" option
- You'll see:  content="abc123..."
- Copy ONLY the code inside the quotes

Write it here:  ______________________

(Already verified before? You can skip this one.)

--------------------------------------------------------------------

## [ ] 3. Add both to Vercel

- Go to: https://vercel.com  >  your project
- Open:  Settings  >  Environment Variables
- Add these two (tick "Production" for each, then Save):

    Name: VITE_GA4_ID            Value: your G-XXXX code from step 1
    Name: VITE_GSC_VERIFICATION  Value: your code from step 2

--------------------------------------------------------------------

## [ ] 4. Redeploy (important — nothing goes live without this)

- In Vercel, open the "Deployments" tab
- Click the newest one > "..." menu > Redeploy > confirm
- Wait until it says "Ready"

--------------------------------------------------------------------

## [ ] 5. Check it worked

- Open: https://www.creativemetalind.com
- Press Ctrl+U, then Ctrl+F and search for:  googletagmanager
    (found = Analytics is ON)
- In Search Console, click "Verify"
- In Analytics, open Reports > Realtime and browse your site.
    You should see yourself show up.

--------------------------------------------------------------------

## [ ] 6. Tell me

Reply:  "P0-5 verified"
Then we start the next fix (getting more clicks from Google).

Tip: If you have the two codes from steps 1 and 2, just paste them to
me and I'll also save them into your local .env file.
