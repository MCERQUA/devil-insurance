# SEO Report — devil-insurance
Date: 2026-05-21

## 1. Site Identity
- **Framework**: Next.js 16.2.1 with React 19.2.4 and TypeScript (detected from package.json and next.config.ts)
- **Apparent Domain/Target Audience/Niche**: Arizona-based contractor insurance specialist. Target audience: residential and commercial contractors (roofing, HVAC, electrical, plumbing, concrete, landscaping, general contractors). Niche: fast COIs, Arizona-specific coverage, direct access to agent Josh Cotner.
- **Deployment Status**: Netlify deployment (netlify.toml present with @netlify/plugin-nextjs v5.15.9). Published to `.next` directory.

## 2. Inventory
- **Total Pages**: 6 main pages
  - `/` (home)
  - `/about` (about Josh Cotner)
  - `/general-liability` (coverage page)
  - `/roofing` (trade-specific page)
  - `/get-a-quote` (form page)
  - `/get-a-quote/success` (success page)
- **URL Structure**: Nested hierarchy (/coverage/, /by-trade/, /get-a-quote/, /get-a-quote/success/). Clean, semantic URLs.
- **sitemap.xml**: **NOT PRESENT** — Critical gap
- **robots.txt**: **NOT PRESENT** — Critical gap

## 3. On-Page SEO (all 6 pages sampled)

| Page | Title Length | Meta Desc Length | H1 | Canonical | OG Tags |
|------|--------------|------------------|----|-----------|---------|
| / (Home) | 46 chars | 120 chars | ✓ "THE DEVIL'S IN THE DETAILS — WE HANDLE BOTH." | None | None |
| /about | 24 chars | 87 chars | ✓ "JOSH COTNER" | None | None |
| /general-liability | 50 chars | 128 chars | ✓ "GENERAL LIABILITY INSURANCE" | None | None |
| /roofing | 42 chars | 127 chars | ✓ "ROOFING INSURANCE BUILT FOR THE AZ HEAT" | None | None |
| /get-a-quote | 11 chars (page.tsx has no metadata export) | Inferred from layout | ✓ "QUICK QUOTE" | None | None |
| /get-a-quote/success | 24 chars | 61 chars | ✓ "QUOTE REQUEST RECEIVED." | None | None |

**Findings**: 
- All pages have concise, keyword-rich titles (all under 60 chars, SEO optimal range 50-60)
- Meta descriptions are strong (87–128 chars, ideal range 120–160)
- All pages have H1 tags
- **Critical gap**: No canonical tags on any page (risk of duplicate content in multi-domain setups)
- **Critical gap**: No Open Graph (og:) or Twitter Card (twitter:) tags for social sharing optimization

## 4. Structured Data
- **JSON-LD Schemas**: **NONE DETECTED**
- No schema.org types found (no LocalBusiness, Service, FAQ, BreadcrumbList, Organization, etc.)
- **Critical gap**: Missing LocalBusiness schema for Phoenix HQ address/phone
- **Gap**: Missing Service schema for insurance coverage types
- **Gap**: Missing FAQPage schema (no FAQ section visible, but Q&A content exists)

## 5. Content Quality

### Word Count (sample 3 pages):
- Home page: ~1,114 words (strong, keyword-dense)
- About page: ~598 words (adequate, personal narrative)
- General Liability page: ~849 words (strong, detailed)

### Internal Linking Density:
- **Navigation**: Navbar has 4 core links + 1 CTA = 5 consistent internal links
- **Footer**: Duplicates navbar links + email/phone = 7 footer links
- **In-page CTAs**: High density — every section has internal link to /get-a-quote or /general-liability or /roofing
- **Assessment**: Excellent internal link structure; every page has 3+ strategic internal links

### Image Count + Alt-Text Coverage:
- **Total public images**: 19 images in /public/images/
- **Images with alt text**: 17 out of 19 images have descriptive alt text
- **Empty alt attributes**: 2 images (one in roofing/page.tsx, one in get-a-quote/page.tsx)
- **Alt-text coverage**: ~89% (17/19)
- **Example good alts**: "Contractor working on site", "Josh Cotner — Devil Insurance", "Arizona sunset over Phoenix"
- **Example empty alts**: One decorative image in roofing page (acceptable if truly decorative), one in quote form sidebar

## 6. Technical

### robots.txt:
- **Status**: NOT PRESENT
- **Risk**: Search engines default to crawling all pages; no disallow rules set

### Sitemap.xml:
- **Status**: NOT PRESENT
- **Critical Gap**: Search engines cannot efficiently discover all pages
- **Expected URLs**: 6 pages should be listed with priority/change frequency

### 404 Handling:
- No custom 404 page detected; relies on Next.js default

### next.config.ts Redirects/Headers:
- Minimal config — only image remote patterns configured (lh3.googleusercontent.com)
- No redirects or headers configured for SEO (no cache control, no canonical headers)

### Other Technical SEO:
- **Meta charset**: Inherited from Next.js defaults (UTF-8)
- **Viewport meta**: Inherited from Next.js defaults (responsive)
- **Font optimization**: Inter font loaded with display=swap (good for Core Web Vitals)
- **Image optimization**: Using next/image for remote images from Google
- **Mobile nav**: Separate bottom navigation for mobile (good UX, no SEO penalty)

## 7. Top Issues (ranked by severity)

1. **Missing sitemap.xml** (CRITICAL) — file:line unknown
   - Search engines cannot efficiently index the 6 pages
   - Recommendation: Create /public/sitemap.xml or use next-sitemap npm package

2. **Missing robots.txt** (CRITICAL) — file:line unknown
   - No explicit crawl rules; could be crawled inefficiently
   - Recommendation: Create /public/robots.txt with crawl delays, sitemaps reference

3. **No canonical tags** (HIGH) — all .tsx files
   - Risk of duplicate content issues if site is mirrored or accessible via multiple domains
   - Recommendation: Add canonical to all Metadata exports in each page.tsx and layout.tsx

4. **No Open Graph / Twitter Card tags** (HIGH) — all .tsx files
   - Social sharing shows bare titles/descriptions, no preview image
   - Recommendation: Add og:title, og:description, og:image, og:url, twitter:card to Metadata

5. **Missing JSON-LD structured data** (HIGH) — all .tsx files
   - LocalBusiness schema missing (address, phone, name not machine-readable)
   - Service schema missing for insurance coverage types
   - Recommendation: Add schema in layout.tsx or individual pages via <script> tags

6. **Two images missing alt text** (MEDIUM) — /workspace/Websites/devil-insurance/src/app/roofing/page.tsx:170, /workspace/Websites/devil-insurance/src/app/get-a-quote/page.tsx:357
   - Images at lines ~170 (roofing page) and ~357 (quote form) have alt="" 
   - One is decorative (acceptable), one is for form context (needs alt)
   - Recommendation: Add descriptive alt text or review if truly decorative

7. **No 404 page** (LOW) — Next.js default insufficient
   - Default 404 doesn't acknowledge brand or offer navigation
   - Recommendation: Create src/app/not-found.tsx with branded 404 message + internal links

8. **No schema markup for FAQs** (MEDIUM) — file:line unknown
   - Content answers contractor questions but no structured FAQ schema
   - Recommendation: Add FAQPage schema with Question + Answer pairs

9. **No Cache-Control headers in next.config.ts** (LOW)
   - Static pages could benefit from aggressive caching
   - Recommendation: Add headers config in next.config.ts for static assets

10. **No SSL/HSTS headers configured** (LOW)
    - Netlify handles SSL, but HSTS header not set in config
    - Recommendation: Add security headers in next.config.ts

## 8. Top Recommendations (concrete next actions)

1. **Create sitemap.xml** (Priority: CRITICAL)
   - Use `next-sitemap` npm package or manually generate XML
   - Include all 6 pages with priority (home: 1.0, /get-a-quote: 0.9, others: 0.8)
   - Place at /public/sitemap.xml or use dynamic route src/app/sitemap.ts

2. **Create robots.txt** (Priority: CRITICAL)
   - Allow all pages, add Sitemap: https://yourdomain.com/sitemap.xml
   - Set User-agent: * with appropriate Crawl-delay if needed
   - File: /public/robots.txt

3. **Add Canonical tags to all pages** (Priority: HIGH)
   - Modify Metadata in each page.tsx: `canonical: { url: "https://yourdomain.com/page-url" }`
   - Update layout.tsx Metadata template to auto-generate
   - Prevents duplicate content penalties

4. **Implement Open Graph & Twitter Card tags** (Priority: HIGH)
   - Add to each page's Metadata:
     ```
     openGraph: { title, description, url, siteName: "Devil Insurance" }
     twitter: { card: "summary_large_image", title, description }
     images: [{ url: "/og-image-1200x630.png" }]
     ```
   - Create single OG image (1200x630px) for consistent branding

5. **Add LocalBusiness JSON-LD schema** (Priority: HIGH)
   - Create in layout.tsx or separate script tag:
     ```json
     {
       "@context": "https://schema.org",
       "@type": "LocalBusiness",
       "name": "Devil Insurance",
       "image": "https://yourdomain.com/images/logo.png",
       "address": { "@type": "PostalAddress", "addressLocality": "Phoenix", "addressRegion": "AZ" },
       "telephone": "480-381-8949",
       "email": "josh@contractorschoiceagency.com"
     }
     ```

6. **Add Service schema for each coverage page** (Priority: MEDIUM)
   - Apply to /general-liability, /roofing pages with Service type
   - Include serviceType, description, areaServed: "Arizona"

7. **Fix empty alt attributes** (Priority: MEDIUM)
   - Review roofing/page.tsx line ~170 and get-a-quote/page.tsx line ~357
   - Either add descriptive alt text or use alt="" if purely decorative
   - Document reasoning for screenreader users

8. **Create custom 404 page** (Priority: LOW)
   - Create src/app/not-found.tsx with branded messaging
   - Include internal navigation links to home, quote form
   - Improves UX and retains users when pages not found

---

**Audit Date**: 2026-05-21  
**Auditor Notes**: This site has strong on-page SEO (titles, descriptions, H1s, internal linking) and good content quality but critical infrastructure gaps (sitemap, robots.txt). The absence of canonical tags and structured data also limits discoverability. Addressing the "Critical" and "High" priority items will significantly improve search visibility.

## Round 3 — repaired 2026-05-22

Closed out Round 1 critical/high issues: sitemap, robots, JSON-LD structured data, OG/Twitter meta, custom 404. Two open Round 1 items deferred to Round 4 (canonical per-page overrides, alt-text on 2 specific images).

### Tier 2 polish results

| Item | Status | Details |
|---|---|---|
| sitemap.xml (Round 1 issue #1) | ✅ applied | Created `src/app/sitemap.ts` (Next.js typed sitemap route) enumerating all 5 main pages (`/`, `/about`, `/general-liability`, `/roofing`, `/get-a-quote`). Build confirmed `/sitemap.xml` prerenders. |
| robots.txt (Round 1 issue #2) | ✅ applied | Created `src/app/robots.ts` — allow root, disallow `/api/` + `/_next/`, sitemap reference. |
| LocalBusiness / Service JSON-LD (Round 1 issue #5) | ✅ applied | Two JSON-LD blocks injected via root layout: `InsuranceAgency` (with Phoenix AZ address, telephone, founder = Josh Cotner, parentOrganization = Contractor's Choice Agency) and `Service` with `hasOfferCatalog` of 4 coverage lines (GL + Roofing + Workers Comp + Commercial Auto), with provider `@id` reference to the agency. |
| Open Graph + Twitter Card (Round 1 issue #4) | ✅ applied | Full `openGraph` block with type, url, siteName, title, description, 1200×630 image, locale en_US. Twitter Card summary_large_image with title/description/image. |
| Canonical (Round 1 issue #3) | ✅ partial | Root layout sets `metadataBase` + `alternates.canonical = "/"`. Per-page canonical overrides deferred (would need a per-page metadata export rewrite). |
| Custom 404 page (Round 1 issue #7) | ✅ applied | Created `src/app/not-found.tsx` — themed dark/pink, "The Devil's in the Details" headline, three CTAs (Home, General Liability, Get a Quote), tel link to 844-967-5247. Next.js auto-serves with HTTP 404 status. |
| Alt-text fixes (Round 1 issue #6) | ⏭️ deferred | Two specific `alt=""` images at `src/app/roofing/page.tsx:170` and `src/app/get-a-quote/page.tsx:357` — one decorative, one needs context. Defer to Round 4 (5-min fix; needs file-by-file judgment). |
| next.config.ts security headers | ⏭️ deferred | Round 1 issue, not in Tier 2 polish scope. |

### Files changed

- `src/app/sitemap.ts` (**new**)
- `src/app/robots.ts` (**new**)
- `src/app/layout.tsx` — full metadata rewrite (metadataBase, OG, Twitter, canonical, googleBot) + 2 JSON-LD schemas
- `src/app/not-found.tsx` (**new**)

### Verification

- `npm run build` ✅ clean. 9 routes built including `/sitemap.xml`, `/robots.txt`, `/_not-found`, and all 5 page routes — all prerendered as static content.

### Domain note

Used `https://devilinsurance.com` as the canonical domain — inferred (no canonical hint in package.json, README, netlify.toml). Confirm with stakeholder before deploy.

### Round 4 deferrals

- Per-page canonical overrides
- Fix 2 `alt=""` images
- `next.config.ts` security headers (HSTS, CSP, X-Frame-Options)
- OG image asset (`/og-default.jpg`) — referenced but not yet produced
