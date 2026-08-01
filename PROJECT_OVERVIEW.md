# Revotek Elevators - Project Overview and Maintenance Guide

This document is the main technical guide for the Revotek Elevators website. It explains the project architecture, folder structure, coding conventions, content workflow, SEO system, validation process, and ongoing maintenance tasks.

Last repository review: August 1, 2026.

## 1. Project summary

Revotek Elevators is a content-driven business website built with the Next.js App Router. It presents elevator installation, maintenance, repair, modernization, AMC, and spare-parts services across Ahmedabad, Gujarat, and India.

The site is designed around four layers:

1. `content/*.json` stores editable page and service content.
2. `components/section/*` renders page sections from that content.
3. `app/*` composes routes and attaches metadata and structured data.
4. `seo-configs/*` and `lib/*` provide shared SEO, schema, indexing, and utility logic.

Most public pages are statically generated. Service detail pages are generated from `content/services.json` using `generateStaticParams`.

## 2. Technology stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16 App Router |
| Language | TypeScript with strict mode |
| UI | React 19 |
| Styling | Tailwind CSS 4 and global design tokens |
| Animation | Framer Motion |
| UI primitives | Base UI and shadcn components |
| Icons | Hugeicons |
| Forms | TanStack Form and Zod |
| Email | Nodemailer |
| SEO | Next.js Metadata API, JSON-LD, sitemap, robots, OG images |
| Indexing | IndexNow and sitemap submission script |

## 3. Local commands

```bash
npm install
npm run dev
npm run lint
npx tsc --noEmit
npm run build
npm run start
npm run submit-sitemap
```

- `npm run dev`: starts the local development server.
- `npm run lint`: runs ESLint across the project.
- `npx tsc --noEmit`: checks TypeScript without generating files.
- `npm run build`: performs the production compilation and static generation check.
- `npm run start`: serves a completed production build.
- `npm run submit-sitemap`: submits current URLs through the indexing integrations configured in `scripts/submit-sitemap.ts`.

## 4. Folder structure

```text
revotek-new/
|-- app/                         # Routes, layouts, metadata routes and APIs
|   |-- api/
|   |   |-- contact/route.ts     # Validates and emails contact submissions
|   |   `-- revalidate/route.ts  # Protected cache revalidation and IndexNow
|   |-- about/page.tsx
|   |-- contact/page.tsx
|   |-- cookie-policy/page.tsx
|   |-- privacy-policy/page.tsx
|   |-- services/
|   |   |-- page.tsx
|   |   `-- [slug]/page.tsx      # Static service detail pages
|   |-- terms-and-conditions/page.tsx
|   |-- layout.tsx               # Root metadata, schema, header and footer
|   |-- page.tsx                 # Home page
|   |-- not-found.tsx            # Branded 404 page
|   |-- manifest.ts
|   |-- opengraph-image.tsx
|   |-- robots.ts
|   `-- sitemap.ts
|-- components/
|   |-- common/                  # Breadcrumbs and shared helpers
|   |-- layout/                  # Header and footer
|   |-- section/                 # Route-specific page sections
|   |   |-- about/
|   |   |-- contact/
|   |   |-- home/
|   |   `-- services/
|   `-- ui/                      # Reusable low-level UI primitives
|-- content/                     # Editable JSON page, policy and service content
|-- lib/
|   |-- indexing/                # IndexNow integration
|   |-- og/                      # Shared Open Graph template
|   |-- seo/                     # Metadata builders
|   `-- structured-data/         # JSON-LD builders and SchemaScript
|-- public/                      # Static images, icons, PDF and llms.txt
|-- scripts/                     # Operational scripts such as sitemap submission
|-- seo-configs/                 # Global business data and root metadata
|-- styles/globals.css           # Tailwind imports and global design tokens
|-- next.config.ts               # Images, headers, caching and build options
`-- package.json                 # Dependencies and commands
```

## 5. Route overview

| Route | Source | Rendering |
| --- | --- | --- |
| `/` | `app/page.tsx` | Static |
| `/about` | `app/about/page.tsx` | Static |
| `/services` | `app/services/page.tsx` | Static |
| `/services/[slug]` | `app/services/[slug]/page.tsx` | Static paths from services JSON |
| `/contact` | `app/contact/page.tsx` | Static page plus contact API |
| `/cookie-policy` | `app/cookie-policy/page.tsx` | Static policy page |
| `/privacy-policy` | `app/privacy-policy/page.tsx` | Static |
| `/terms-and-conditions` | `app/terms-and-conditions/page.tsx` | Static |
| `/api/contact` | `app/api/contact/route.ts` | Dynamic API |
| `/api/revalidate` | `app/api/revalidate/route.ts` | Dynamic protected API |
| `/sitemap.xml` | `app/sitemap.ts` | Generated metadata route |
| `/robots.txt` | `app/robots.ts` | Generated metadata route |
| `/manifest.webmanifest` | `app/manifest.ts` | Generated web app manifest |
| `/opengraph-image` | `app/opengraph-image.tsx` | Generated default social image |
| `/llms.txt` | `public/llms.txt` | Static LLM-readable site summary |
| Unmatched routes | `app/not-found.tsx` | Branded 404 response |

## 6. Coding structure and conventions

### 6.1 Page composition

Route files should stay focused on page composition, metadata, and schema. Visual sections belong in `components/section/<route>/`.

Typical page structure:

```tsx
export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  title: "Page title",
  description: "Page-specific description",
  path: "/page-path",
  keywords: ["primary keyword", "local keyword"],
});

export default function Page() {
  const schema = buildWebPageSchema({
    title: "Page title",
    description: "Page description",
    path: "/page-path",
    type: "WebPage",
  });

  return (
    <>
      <SchemaScript schema={schema} />
      <main id="page-name">
        <Hero />
        <ContentSection />
      </main>
    </>
  );
}
```

### 6.2 Section components

- Place home sections in `components/section/home/`.
- Place About sections in `components/section/about/`.
- Export each section from the folder's `index.ts`.
- Read editable text from the matching JSON file instead of hard-coding business copy.
- Use semantic elements: `section`, `header`, `article`, `figure`, `blockquote`, `h2`, and `h3`.
- Give each section a stable `id` and connect `aria-labelledby` to its heading.
- Client-side sections must start with `"use client"`; use this only when state, events, browser APIs, or Framer Motion require it.
- Keep server components as the default when interactivity is not required.

### 6.3 Styling conventions

- Global tokens are declared in `styles/globals.css`.
- Use `text-brand-primary` and `bg-brand-primary` instead of repeating the brand color.
- Use `text-muted-foreground` for supporting copy.
- Follow the existing horizontal spacing pattern:

```text
px-3 sm:px-6 md:px-10 lg:px-10 xl:px-30 2xl:px-50
```

- Typical section spacing is `py-15`, `sm:py-20`, and `lg:py-25`.
- Responsive layouts should be mobile-first: one column by default, then two and three or more columns at appropriate breakpoints.
- Use `next/image` with meaningful `alt` text and an accurate `sizes` attribute.
- Preserve keyboard focus styles and visible focus rings on every interactive control.
- Respect reduced complexity on mobile; avoid forcing desktop card heights or excessive padding onto small screens.

### 6.4 Content files

| File | Responsibility |
| --- | --- |
| `content/home.json` | Home hero, services, industries, testimonials, FAQ and CTA |
| `content/about.json` | About hero, company content, mission, team, values |
| `content/services.json` | Service listing and every service detail page |
| `content/contact.json` | Contact page copy and contact details |
| `content/cookie.json` | Cookie policy sections and policy contact block |
| `content/privacy-policy.json` | Privacy policy content |
| `content/terms-and-conditions.json` | Terms content |

When editing JSON:

1. Keep valid JSON syntax; no comments or trailing commas.
2. Preserve the data shape expected by the component.
3. Add accurate image paths beginning with `/assets/`.
4. Write descriptive alt text that explains the image rather than repeating the filename.
5. Do not publish invented staff identities, certifications, customer reviews, statistics, or service guarantees.

### 6.5 Current conditional sliders

The Team and Testimonials sections are data-count aware:

- One to three items render as a static responsive grid without slider controls.
- Four or more items enable arrows, dots, keyboard navigation, and carousel semantics.
- Content can be added or removed in JSON without rewriting the threshold logic.

The current content has one team profile and two testimonials, so both sections render as static layouts. The testimonial entries contain a name, Ahmedabad location, service label, five-star rating, and review text. Preserve a verifiable source and permission for every published testimonial.

### 6.6 Cookie consent and policy

- `components/common/cookie-banner.tsx` is mounted globally from `app/layout.tsx`.
- The banner appears only when the browser has no `revotek-cookie-consent` value in `localStorage`.
- Accept and Reject store `accepted` or `rejected` respectively, then dismiss the banner.
- The banner links to the static `/cookie-policy` route, whose editable copy is in `content/cookie.json`.
- The current implementation records the choice but does not yet conditionally load or block analytics, marketing, maps, videos, or other optional integrations.
- If optional tracking is introduced, load it only after the appropriate consent and provide a visible way to reopen or change cookie preferences.

### 6.7 Adding a new home or About section

1. Add the content object to `content/home.json` or `content/about.json`.
2. Create `components/section/<route>/SectionName.tsx`.
3. Export it from that section folder's `index.ts`.
4. Import and place it in the matching `app/.../page.tsx`.
5. Use one page-level `h1`; section headings should normally be `h2`.
6. Add schema only when the visible content qualifies for that schema type.
7. Run lint, TypeScript, and a production build.

### 6.8 Adding a service

Add a complete service entry to `content/services.json`. The slug drives:

- The URL `/services/<slug>`.
- `generateStaticParams` during the build.
- Page metadata and canonical URL.
- Service page copy, FAQs, features, process, and images.
- The service entry in `app/sitemap.ts`.

Every service must have a unique slug, title, `metaTitle`, `metaDescription`, keywords, images, and complete section data. After adding a service, verify both `/services` and the generated detail route.

There are currently 12 generated service routes: installation, maintenance, repair, modernization, AMC, spare parts, passenger, hospital, goods, hydraulic, home, and machine-room-less elevators.

## 7. Environment variables

Never commit real credentials. Use `.env` locally and configure the same keys in the deployment platform.

| Variable | Purpose | Exposure |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Production origin used by canonical URLs, schema and sitemap | Public |
| `SMTP_HOST` | SMTP server hostname | Server only |
| `SMTP_PORT` | SMTP server port | Server only |
| `SMTP_SECURE` | Use `true` for a secure SMTP connection when required | Server only |
| `SMTP_USER` | SMTP username | Secret |
| `SMTP_PASS` | SMTP password | Secret |
| `SMTP_FROM_EMAIL` | Contact email sender | Server only |
| `CONTACT_EMAIL` | Contact form recipient | Server only |
| `INDEXNOW_API_KEY` | IndexNow submission key | Secret |
| `BING_WEBMASTER_API_KEY` | Bing sitemap submission integration | Secret |
| `REVALIDATION_SECRET` | Bearer token for `/api/revalidate` | Secret |
| `SITE_URL` | Optional script-only fallback for sitemap submission | Server only |

`NEXT_PUBLIC_SITE_URL` must be the exact HTTPS production origin without an incorrect staging domain. A wrong value affects canonicals, Open Graph URLs, sitemap entries, and structured data.

## 8. SEO architecture

### 8.1 Global business source of truth

`seo-configs/baseInfo.ts` contains the global business identity:

- Business, legal, and short names
- Default title and description
- Phone numbers and email addresses
- Postal address and map URL
- Coordinates and opening hours
- Social profiles
- Logo and default Open Graph image
- Service area, founding date, language, locale, and global keywords

Update this file whenever a real business detail changes. The values are reused by metadata, canonicals, LocalBusiness schema, the website schema, and other SEO outputs. Keep the footer/header contact details consistent with it.

### 8.2 Root metadata

`seo-configs/metadata.ts` defines the defaults inherited from `app/layout.tsx`:

- Metadata base URL
- Title template
- Default description and keywords
- Canonical home URL
- Robots directives
- Open Graph and Twitter cards
- Icons and manifest link
- Search-engine verification values
- LocalBusiness, WebSite, and home WebPage JSON-LD

Do not place page-specific titles in this file. Use a page metadata builder instead.

### 8.3 Static page metadata

Static routes use `buildPageMetadata` from `lib/seo/buildPageMetadata.ts`.

Each page should provide:

- A unique, concise page title.
- A useful description written for the page's search intent.
- The exact canonical path.
- A small set of page-specific keywords.
- An accurate OG image alt value when overriding the default.

Example:

```tsx
export const metadata = buildPageMetadata({
  title: "Elevator Maintenance Services",
  description:
    "Professional preventive elevator maintenance and AMC support across Ahmedabad and Gujarat.",
  path: "/services/elevator-maintenance",
  keywords: [
    "elevator maintenance Ahmedabad",
    "elevator AMC Gujarat",
  ],
});
```

The builder automatically handles canonical URLs, merged global keywords, robots, Open Graph, and Twitter metadata.

The SEO library also contains `buildListingMetadata`, `buildBlogMetadata`, and `buildProductMetadata`. These are reusable foundations for future listing, blog, and product routes; the current public route tree does not yet include blog or product pages. Likewise, `app/blog/[slug]/opengraph-image.tsx` is an OG-image foundation, not evidence of a live blog route.

### 8.4 Dynamic service metadata

`app/services/[slug]/page.tsx` reads `metaTitle`, `metaDescription`, and `keywords` from the matching service in `content/services.json`. The canonical path is based on the service slug.

When a slug changes:

1. Update the service slug in JSON.
2. Add a permanent redirect from the old URL in `next.config.ts`.
3. Confirm the sitemap contains the new URL.
4. Update internal links.
5. Revalidate and submit the new URL for indexing.

Never change a ranked URL without a redirect.

### 8.5 Structured data

Schema builders live in `lib/structured-data/`:

| Builder | Use |
| --- | --- |
| `buildWebPageSchema` | General pages and About page |
| `buildOrganizationSchema` | Organization/business details |
| `buildFaqSchema` | Visible FAQ sections |
| `buildBreadcrumbSchema` | Hierarchical navigation |
| `buildProductSchema` | Genuine product data only |
| `buildBlogPostSchema` | Blog articles when implemented |
| `SchemaScript` | Safely renders JSON-LD into a page |

Schema rules:

- Schema must match visible page content.
- Do not mark generic marketing copy as a review.
- Do not add ratings or aggregate ratings unless they are real, visible, and verifiable.
- FAQ schema items must match the visible FAQ question and answer text.
- Keep business name, address, phones, and URLs consistent across all schemas.
- Validate changed JSON-LD with Google's Rich Results Test and Schema.org Validator.

### 8.6 Sitemap

`app/sitemap.ts` generates `/sitemap.xml`. It currently contains:

- Home
- About
- Services listing
- Contact
- Privacy policy
- Terms and conditions
- Every service slug from `content/services.json`

The Cookie Policy route is not currently included in the sitemap. Add `/cookie-policy` to the static page list if it should be discoverable through the XML sitemap.

When adding a new standalone route, add it to the static page list. Service routes are included automatically from JSON. Use realistic `changeFrequency` and `priority` values; they are crawler hints, not ranking controls.

The current sitemap assigns `new Date()` to active pages on every generation. For stronger maintenance accuracy, use actual content modification dates when they become available instead of making every page appear newly modified.

### 8.7 Robots and crawler access

`app/robots.ts` generates `/robots.txt`. It allows public content and blocks API, framework-internal, admin, dashboard, private, and raw JSON paths. It includes rules for major search engines, selected AI crawlers, and low-value SEO crawlers.

Before changing robots rules:

- Never block `/`, service routes, images, CSS, or JavaScript required for rendering.
- Test the production `/robots.txt` after deployment.
- Keep the sitemap URL correct.
- Treat training-crawler preferences as a business decision rather than a ranking shortcut.

### 8.8 Open Graph images

The project uses `app/opengraph-image.tsx`, route-specific `opengraph-image.tsx` files, and `lib/og/OgTemplate.tsx`.

- Use 1200 x 630 output for social sharing.
- Keep text inside safe margins.
- Use a short title and recognizable brand mark.
- Confirm the metadata builder points to a route that actually exists.
- Test the final absolute image URL from the production domain.

### 8.9 On-page SEO and accessibility

For every page or major section:

- Use one clear `h1` per page.
- Keep heading levels sequential.
- Put important copy in rendered HTML, not only in images or animation state.
- Use descriptive internal link text instead of “click here.”
- Add accurate image alt text; use empty alt only for decorative images.
- Use semantic lists for repeated services, benefits, and industries.
- Connect section headings with `aria-labelledby`.
- Keep carousel controls keyboard accessible and hide them when the content count does not require a slider.
- Ensure mobile layouts do not create horizontal overflow.
- Keep local terms such as Ahmedabad and Gujarat natural; avoid keyword stuffing.

## 9. APIs, revalidation, and indexing

### 9.1 Contact API

`app/api/contact/route.ts` validates the request body with Zod and sends the submission through Nodemailer.

Maintenance requirements:

- Keep the form field names synchronized with `contactSchema`.
- Configure all SMTP variables in production.
- Return user-safe errors; do not expose SMTP credentials or provider responses.
- Add rate limiting, spam protection, and request-size limits before high-volume marketing campaigns.
- Review `tls.rejectUnauthorized: false`; production SMTP should normally use a valid certificate.
- Escape or sanitize untrusted values before inserting them into HTML email templates.

### 9.2 Revalidation API

`app/api/revalidate/route.ts` supports path, tag, and full-layout revalidation. POST requests require `REVALIDATION_SECRET` in the authorization header. It can also notify IndexNow after successful content revalidation.

Example request shape:

```json
{
  "type": "path",
  "path": ["/about", "/services"],
  "notify": true
}
```

Use a server-side bearer token. Never expose `REVALIDATION_SECRET` in browser code or commit it to the repository. Use full-site revalidation sparingly.

### 9.3 IndexNow and sitemap submission

- `lib/indexing/indexnow.ts` handles IndexNow notifications.
- `scripts/submit-sitemap.ts` supports operational URL/sitemap submission.
- Submit only canonical, public, indexable URLs.
- Re-submit after meaningful content additions, new routes, slug changes, or important corrections.
- Submission is discovery support; it does not guarantee indexing or rankings.

## 10. Performance and security maintenance

`next.config.ts` currently configures image formats, device sizes, static-asset caching, security headers, production console removal, and CSS optimization.

When making changes:

- Keep `next/image` for content images to preserve optimization.
- Avoid loading oversized images for cards or mobile screens.
- Do not add unnecessary client components or animation libraries to static content.
- Keep animations subtle and avoid layout shift.
- Check that custom cache headers do not conflict with Next.js behavior after framework upgrades.
- Maintain `X-Content-Type-Options`, frame protection, referrer policy, and permissions policy.
- Do not enable remote images without a narrow, trusted hostname configuration.

## 11. Validation workflow

Run this sequence before every production deployment:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Then manually verify:

1. Home, About, Services, Contact, Cookie Policy, other legal pages, and all service detail routes load.
2. Header, footer, forms, accordions, carousels, cookie consent controls, and WhatsApp links work.
3. Layouts work at approximately 320, 375, 768, 1024, and 1440 pixels.
4. There is no horizontal overflow.
5. Keyboard focus and carousel controls work.
6. Images have correct dimensions and alt text.
7. Page source includes the intended title, description, canonical, and JSON-LD.
8. `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`, `/llms.txt`, and OG image URLs respond successfully.
9. Contact email delivery works from the production environment.
10. No credentials or internal error details appear in client responses.

Recommended external checks:

- Google Search Console URL Inspection
- Google Rich Results Test
- Schema.org Validator
- PageSpeed Insights or Lighthouse
- Bing Webmaster Tools
- Social share preview debugger

## 12. SEO maintenance schedule

### After every content change

- Confirm factual accuracy and spelling.
- Check heading hierarchy and internal links.
- Update metadata when page intent changes.
- Verify images and alt text.
- Revalidate the changed path and notify IndexNow where appropriate.
- When cookie behavior changes, keep the banner, Cookie Policy, and Privacy Policy consistent.

### Monthly

- Review Search Console indexing, coverage, search queries, and Core Web Vitals.
- Check sitemap and robots responses.
- Check for broken internal links and 404s.
- Review contact details, opening hours, and service coverage.
- Confirm forms and conversion links work.
- Review page titles and descriptions for duplication.

### Quarterly

- Audit all business facts and schema.
- Review service copy against current offerings.
- Replace outdated project images and testimonials.
- Check dependency and Next.js upgrade notes.
- Run accessibility, performance, and mobile-layout audits.
- Review crawler rules and search verification tokens.

### When adding a new page

- Add a unique title, description, canonical, and keywords.
- Add WebPage and breadcrumb schema when appropriate.
- Add the URL to the sitemap if it is not data-generated.
- Add internal links from relevant existing pages.
- Add an OG image route or explicit image override.
- Test indexing directives before launch.

## 13. Current maintenance notes

These items should be reviewed during the next configuration cleanup:

1. `.env.example` has `SMTP_PASS` without an equals sign and does not currently list `REVALIDATION_SECRET` or optional `SITE_URL`.
2. Root metadata references `/manifest.json`, while the App Router currently generates `/manifest.webmanifest`; align the metadata URL with the generated route.
3. `app/layout.tsx` wraps route content in a `main`, while route pages also render `main`; HTML should contain one primary `main` landmark.
4. `NEXT_PUBLIC_SITE_URL` falls back to localhost. Production deployment must always define the real HTTPS domain.
5. Search verification tokens, social URLs, founding date, service area, coordinates, and opening hours in `baseInfo.ts` must be verified business data.
6. The two testimonials now identify reviewers and show five-star ratings. Retain evidence that the text, identity, rating, and permission are authentic before presenting them as customer reviews.
7. Review the custom `/_next/static/*` cache header whenever Next.js is upgraded; Next.js warns that overriding this header can affect framework behavior.
8. The contact API disables TLS certificate verification and needs production security review.
9. `/cookie-policy` is not currently included in `app/sitemap.ts` or the footer's legal links, so it is primarily discoverable from the first-visit banner.
10. Cookie consent currently stores a preference but does not gate optional scripts. The policy mentions analytics and third-party services, so connect future integrations to consent before enabling them.
11. Cookie-policy contact details are duplicated in `content/cookie.json`; keep them synchronized with `seo-configs/baseInfo.ts` or refactor them to use the shared business source.

## 14. Deployment checklist

- [ ] Production environment variables are configured.
- [ ] `NEXT_PUBLIC_SITE_URL` uses the final HTTPS domain.
- [ ] Lint and TypeScript checks pass.
- [ ] Production build completes.
- [ ] All service slugs generate successfully.
- [ ] Cookie consent choices persist and any optional scripts respect the stored choice.
- [ ] Cookie Policy, Privacy Policy, and visible consent wording describe the actual integrations in use.
- [ ] Metadata and canonical URLs use the production domain.
- [ ] Structured data validates.
- [ ] Sitemap and robots files are reachable.
- [ ] OG images render and share correctly.
- [ ] Contact email sends successfully.
- [ ] Mobile and keyboard testing is complete.
- [ ] Only verified business facts and reviews are published.
- [ ] Sitemap/IndexNow submission is completed after deployment.

## 15. Ownership map

| Change needed | Primary file or folder |
| --- | --- |
| Business phone, address, social profile | `seo-configs/baseInfo.ts` and visible layout/content |
| Global SEO defaults and verification | `seo-configs/metadata.ts` |
| Page-specific metadata | Matching `app/**/page.tsx` |
| Home content | `content/home.json` |
| About content and team | `content/about.json` |
| Services and service SEO | `content/services.json` |
| Cookie banner behavior | `components/common/cookie-banner.tsx` and `app/layout.tsx` |
| Cookie policy copy | `content/cookie.json` and `app/cookie-policy/page.tsx` |
| Page layout/order | Matching `app/**/page.tsx` |
| Section design | `components/section/**` |
| Global colors and typography | `styles/globals.css` and `lib/fonts.ts` |
| Structured data logic | `lib/structured-data/**` |
| Sitemap entries | `app/sitemap.ts` |
| Crawler rules | `app/robots.ts` |
| Contact mail handling | `app/api/contact/route.ts` |
| Cache refresh and IndexNow | `app/api/revalidate/route.ts`, `lib/indexing/` |
| Images and documents | `public/assets/` |

Keep this guide updated whenever the route structure, environment requirements, content model, or SEO workflow changes.
