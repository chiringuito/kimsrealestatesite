# KIM REIDY WEBSITE — COMPLETE SETUP GUIDE
## Netlify + GitHub + Decap CMS + Google Email
### Last updated: March 2026

---

## WHAT YOU'LL END UP WITH

- Website live at a FREE Netlify test URL (e.g. kimreidy.netlify.app) for testing
- Then switched to www.kimreidy.com when ready
- Kim can log into kimreidy.com/admin and write/edit blog posts herself
- All contact/lead forms email directly to kim@pointe3.com via Netlify
- Google Workspace email completely unaffected throughout
- SSL certificate automatic and free
- Monthly hosting cost: $0

---

## WHAT YOU NEED BEFORE STARTING

- [ ] A computer with a web browser
- [ ] Your GoDaddy login (for DNS changes — at the end only)
- [ ] About 90 minutes for the full setup
- [ ] The kimreidy-netlify.zip file from Claude

---

## PART 1 — CREATE A FREE GITHUB ACCOUNT (10 min)

GitHub stores your website files and connects to Netlify.
Think of it as a Google Drive specifically for website code.

1. Go to https://github.com
2. Click "Sign up"
3. Enter email, create a password, choose a username
   - Suggestion: use something like "kimreidy-web" or your own name
4. Verify your email address
5. On the "What kind of work do you do?" screen — select "Other" and skip
6. Choose the FREE plan
7. ✅ GitHub account created

---

## PART 2 — CREATE THE WEBSITE REPOSITORY (10 min)

A "repository" (repo) is just a folder on GitHub that holds your site files.

1. Log into GitHub
2. Click the green "New" button (top left) or go to https://github.com/new
3. Fill in:
   - Repository name: `kimreidy-website`
   - Description: `Kim Reidy Real Estate Website`
   - Select: ✅ Public  (required for free Netlify)
   - Do NOT check "Add a README file"
4. Click "Create repository"
5. You'll see an empty repo page — leave this open

### Upload your site files:
6. Click "uploading an existing file" (link on the empty repo page)
7. Unzip the kimreidy-netlify.zip file on your computer
8. Drag ALL the files and folders into the GitHub upload window
   ⚠️  IMPORTANT: Upload the CONTENTS of the folder, not the folder itself
   You should see: index.html, style.css, about.html, admin/, blog/, etc.
9. Scroll down, add a commit message: "Initial site upload"
10. Click "Commit changes"
11. ✅ All files are now on GitHub

---

## PART 3 — CREATE A FREE NETLIFY ACCOUNT (5 min)

1. Go to https://netlify.com
2. Click "Sign up"
3. Choose "Sign up with GitHub" — this links the two accounts automatically
4. Authorize Netlify to access your GitHub
5. ✅ Netlify account created and linked to GitHub

---

## PART 4 — DEPLOY THE SITE ON NETLIFY (10 min)

1. In Netlify dashboard, click "Add new site" → "Import an existing project"
2. Click "Deploy with GitHub"
3. Select your `kimreidy-website` repository
4. Build settings — fill in:
   - Branch to deploy: `main`
   - Base directory: (leave blank)
   - Build command: `node build-manifest.js`
   - Publish directory: `.`
5. Click "Deploy site"
6. Netlify will assign a random URL like: `amazing-curie-abc123.netlify.app`
   - You can rename this: Site settings → Site details → Change site name
   - Change it to something like: `kimreidy-preview.netlify.app`
7. Wait ~1 minute for first deploy to complete (green checkmark)
8. Click your Netlify URL — your site is LIVE for testing! 🎉

### Rename your Netlify subdomain:
9. Go to: Site settings → General → Site details → Change site name
10. Type: `kimreidy` (if available) or `kimreidy-site`
11. Your test URL becomes: `kimreidy.netlify.app`

---

## PART 5 — ENABLE NETLIFY IDENTITY (for CMS login) (10 min)

This is what lets Kim log into /admin and write blog posts.

1. In Netlify dashboard, go to your site
2. Click "Integrations" in the top menu
3. Search for "Identity" → click "Enable Identity"
   OR go to: Site settings → Identity → Enable Identity
4. Under "Registration preferences" → change to "Invite only"
   (This means only people YOU invite can log in — important for security)
5. Scroll down to "Services" → under "Git Gateway" → click "Enable Git Gateway"
   (This is what allows the CMS to save posts back to GitHub)
6. ✅ Identity enabled

### Invite Kim as a CMS user:
7. Go to: Identity tab → click "Invite users"
8. Enter Kim's email address
9. Kim will receive an email invitation
10. Kim clicks the link, sets a password
11. ✅ Kim can now log into kimreidy.netlify.app/admin

---

## PART 6 — TEST THE CMS (Kim's editing experience) (15 min)

Have Kim (or you) test this before going live:

1. Go to: https://kimreidy.netlify.app/admin
2. Log in with Kim's email and password
3. She should see the CMS dashboard with sections:
   - Blog Posts
   - About Kim (Bio)
   - Testimonials
   - Site Settings

### Test creating a blog post:
4. Click "Blog Posts" → "New Blog Post"
5. Fill in Title, Date, Category, Excerpt, Body
6. Click "Publish" (or "Save Draft" to save without publishing)
7. Wait ~1 minute for Netlify to rebuild the site
8. Visit https://kimreidy.netlify.app/blog.html
9. The new post should appear ✅

### Kim's CMS workflow going forward:
1. Go to kimreidy.com/admin
2. Log in
3. Click Blog Posts → New Blog Post
4. Write post (works like a word processor)
5. Add category, excerpt, optional photo
6. Click Publish
7. Post goes live on the site within ~60 seconds

---

## PART 7 — SET UP NETLIFY FORMS (forms email to Kim) (5 min)

Netlify handles your contact/lead forms automatically — no Formspree needed.

1. After first deploy, go to: Netlify dashboard → Forms tab
2. You should see forms already detected:
   - contact
   - home-finder
   - home-evaluation
   - newsletter
3. Click on "contact" form → "Form notifications"
4. Click "Add notification" → "Email notification"
5. Enter: kim@pointe3.com
6. Repeat for home-finder, home-evaluation, and newsletter forms
7. ✅ All form submissions now email directly to Kim

### Test a form:
8. Go to your test site → Contact page
9. Fill out and submit the form
10. Check kim@pointe3.com — email should arrive within a few minutes

---

## PART 8 — TEST EVERYTHING BEFORE GOING LIVE (20 min)

Work through this checklist on your Netlify test URL:

### Pages
- [ ] Homepage loads correctly with all images
- [ ] Navigation works — all dropdown menus open
- [ ] Mobile menu works (test on phone)
- [ ] About page loads
- [ ] Blog page shows posts
- [ ] Blog post opens and reads correctly
- [ ] Listings page — RealScout iframe loads
- [ ] Price range cards link to correct RealScout searches
- [ ] Buyer's Guide, Seller's Guide pages load
- [ ] Mortgage Calculator calculates correctly
- [ ] Home Finder page loads
- [ ] Home Evaluation page loads
- [ ] Testimonials page loads
- [ ] Contact page loads

### Forms
- [ ] Contact form submits → Kim receives email
- [ ] Home Finder form submits → Kim receives email
- [ ] Home Evaluation form submits → Kim receives email
- [ ] Newsletter form submits → Kim receives email

### Blog CMS
- [ ] Kim can log into /admin
- [ ] Kim can create a new blog post
- [ ] Post appears on blog page after publish
- [ ] Individual post page loads correctly

### SSL & Security
- [ ] Site loads as https:// (padlock icon in browser)

---

## PART 9 — SWITCH YOUR DOMAIN TO NETLIFY (15 min)
## ⚠️  Only do this after Part 8 is fully complete and tested

Your domain is registered and DNS is managed at GoDaddy.
Your Google Workspace email uses GoDaddy DNS MX records.
We will ONLY change the A and CNAME records — NOT the MX records.
Google email will NOT be affected.

### Step 1 — Add your custom domain to Netlify
1. In Netlify dashboard → Domain management → Add custom domain
2. Enter: www.kimreidy.com → click "Verify"
3. Also add: kimreidy.com (non-www)
4. Netlify shows you the values you need to enter in GoDaddy

### Step 2 — Get Netlify's DNS values
Netlify will give you something like:
- For www.kimreidy.com: CNAME → [your-site].netlify.app
- For kimreidy.com (root): A record → 75.2.60.5
  (Netlify's load balancer IP — they call this an "ALIAS" or "ANAME" record)

Write these down before going to GoDaddy.

### Step 3 — Update DNS records in GoDaddy
⚠️  DO NOT touch any MX records (those are for Google email)

1. Log into GoDaddy → My Products → DNS
2. Find the domain: kimreidy.com → Manage DNS

**Update the A record (root domain):**
3. Find the row: Type=A, Name=@
4. Click the pencil/edit icon
5. Change the Value to: 75.2.60.5 (Netlify's IP)
6. TTL: 600 (10 minutes, for faster propagation)
7. Save

**Update or add the CNAME record (www):**
8. Find the row: Type=CNAME, Name=www
9. Click edit
10. Change Value to: [your-site-name].netlify.app
    (Use the exact subdomain Netlify showed you)
11. TTL: 600
12. Save

**LEAVE THESE RECORDS ALONE:**
- MX records (starts with mail routing — these are Google email)
- TXT records (Google verification, SPF, DKIM — these are also email)

### Step 4 — Enable SSL on Netlify
13. Back in Netlify → Domain management → HTTPS
14. Click "Verify DNS configuration"
15. Click "Provision certificate" 
16. SSL certificate is issued automatically (takes 5–15 minutes)

### Step 5 — Wait for DNS propagation
17. DNS changes take 15 minutes to 2 hours to fully propagate worldwide
18. Test by visiting: https://www.kimreidy.com
19. You should see your new site with the padlock 🔒

---

## PART 10 — GOOGLE WORKSPACE EMAIL: WHAT TO DO

### Short answer: Nothing. Your email keeps working.

Here's why: Your Google Workspace email (kim@pointe3.com) is configured
via MX records in GoDaddy DNS. Those records tell the internet
"send email for this domain to Google's servers."

Since you're only changing the A and CNAME records (which control
where the WEBSITE goes), and leaving the MX records alone,
Google email continues to work exactly as before.

### Verification after DNS switch:
After switching the domain, verify email still works by:
1. Sending a test email TO kim@pointe3.com from a different account
2. Verify it arrives in Google Workspace
3. Send a test email FROM kim@pointe3.com
4. Verify it sends successfully
5. ✅ If both work, email is unaffected (it will be)

### What if you ever need to add a NEW Google Workspace account?
When Google asks you to add DNS records, you add them in GoDaddy DNS
exactly as you do today — the hosting change doesn't affect this process.

---

## THIRD-PARTY SERVICES CHECKLIST

Here's every external service connected to the site and its status:

| Service | Purpose | Status | Action needed |
|---------|---------|--------|---------------|
| Netlify | Hosting | ✅ Free | Set up in this guide |
| Netlify Identity | CMS login | ✅ Free (included) | Enable in Part 5 |
| Netlify Forms | Contact/lead forms | ✅ Free (100/mo) | Enable in Part 7 |
| GitHub | File storage | ✅ Free | Set up in Part 1 |
| RealScout | Property search/MLS | 💰 Paid subscription | Already active — just keep paying |
| Google Workspace | Kim's email | 💰 Paid subscription | No changes needed |
| GoDaddy | Domain + DNS | 💰 ~$15/yr domain | Update 2 DNS records only |
| Facebook Pixel | Ad tracking | ✅ Free | Already in site code (ID: 648674219568220) |
| Font Awesome | Icons | ✅ Free CDN | Already in site code |
| Google Fonts | Typography | ✅ Free CDN | Already in site code |

### Services you can CANCEL after migration:
- Bluehost hosting (keep only if you need it for something else)
  → Cancel the hosting plan, keep the domain at GoDaddy

### Services NOT YET connected (optional upgrades):
- **Google Analytics** — add free tracking to see visitor stats
  → Create GA4 account at analytics.google.com
  → Add 2 lines of code to each HTML page (I can do this for you)

- **Mailchimp newsletter** — if Kim wants to build an email list properly
  → The newsletter form currently just collects emails in Netlify
  → Mailchimp gives a proper email list with campaign sending
  → Free up to 500 subscribers

---

## ONGOING MAINTENANCE

### What you manage:
- Making site changes → tell Claude, get updated file, push to GitHub
- Adding new blog posts on Kim's behalf → use /admin or tell Claude
- Renewing domain at GoDaddy (~$15/year)
- Renewing RealScout subscription (same as today)

### What Netlify manages automatically:
- SSL certificate renewal
- Site deployments when GitHub changes
- Form submission collection

### What requires zero maintenance:
- Server security (no server)
- Plugin updates (no plugins)
- WordPress core updates (no WordPress)
- Database backups (no database)

---

## TROUBLESHOOTING

**Site not loading after DNS change:**
DNS propagation can take up to 48 hours in rare cases.
Check status at: https://dnschecker.org/#A/kimreidy.com

**SSL padlock not showing:**
In Netlify → Domain management → HTTPS → click "Verify DNS configuration"
then "Provision certificate." Wait 15 minutes and refresh.

**CMS login not working:**
Make sure Git Gateway is enabled:
Netlify → Integrations → Identity → scroll to Git Gateway → Enable

**Form submissions not arriving:**
Check Netlify → Forms tab → verify notifications are set up with
kim@pointe3.com as the email address. Check spam folder.

**Blog post not appearing after Kim publishes:**
Wait 60-90 seconds for Netlify to rebuild. If still not showing
after 2 minutes, check Netlify → Deploys tab for error messages.

**Images not loading:**
The site currently links to images on kimreidy.com (old WordPress site).
Before canceling Bluehost, download all images and upload to GitHub
in an /images/ folder, then update image paths in the HTML files.
(Claude can update all the image paths for you — just ask.)

---

## CONTACT FOR SITE UPDATES

For any site changes, blog posts, or technical issues:
Paste this document + your change request into Claude at claude.ai
Claude has full context of how this site is built and can update
any file immediately.
