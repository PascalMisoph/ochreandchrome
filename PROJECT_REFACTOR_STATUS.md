# Ochre & Chrome Production Readiness Plan

Status: P0 launch-readiness pass complete for safe code/content changes; legal owner data still requires human input.
Scope inspected: `03-Website/astro-site/src`, `public`, Astro build output, major repo content notes.
Last updated: 2026-05-06.

## Build And Structure Snapshot

- App: Astro static site in `03-Website/astro-site`.
- Build status: `npm run build` succeeds and generates 23 static pages.
- Main routes generated: `/`, `/about/`, `/affiliate-disclosure/`, `/impressum/`, `/guides/`, 4 guide detail pages, `/journal/`, 1 journal post, `/shop/`, `/trend-report/`, `/privacy/`, `/terms/`, and 8 product detail pages.
- Primary maintainability risk: nearly all visual systems for all pages are concentrated in one large stylesheet.

## Oversized Files And Components

Explicit oversized or high-risk files:

- `03-Website/astro-site/src/styles/global.css` - 3162 lines. This is unacceptable as the long-term styling surface. It mixes homepage, shared primitives, guide hub, guide detail, shop, product, trend report, journal, legal pages, responsive overrides, page-specific fixes, and repeated media queries.

Large but currently tolerable files to monitor:

- `03-Website/astro-site/src/pages/index.astro` - 352 lines. Homepage owns navigation, product data duplication, footer data, newsletter form, cards, hero, social grid, and footer markup directly.
- `03-Website/astro-site/src/data/site.ts` - 261 lines. Central data file mixes guides, products, trend chapters, material palettes, affiliate URL state, and content copy.
- `03-Website/astro-site/src/pages/guides/[slug].astro` - 144 lines. Guide detail template has enough page logic and markup to justify component extraction during the UI pass.
- `03-Website/astro-site/src/pages/guides/index.astro` - 123 lines. Guide hub footer/navigation and newsletter are duplicated instead of shared.

## Major Issues Found

### Architecture And Maintainability

- Global CSS is the main blocker. It contains unrelated page systems and many page-specific overrides in one file, making any visual fix risky.
- Shared navigation/footer systems are duplicated across homepage, guide hub, shop, trend report, guide detail, product detail, legal, and journal pages.
- Homepage duplicates product data instead of using `src/data/site.ts`, causing title/price/material mismatches with product detail pages.
- Newsletter forms are static UI only: homepage and guide hub forms use `button type="button"` and have no submission action, validation flow, or integration target.
- Product and guide data are hardcoded in one TypeScript file. This is acceptable for a prototype, but production should move toward typed content collections or smaller domain modules.
- Root project contains generated screenshots/logs in the Astro site directory, which adds noise and makes source review harder.

### UI, Visual Hierarchy, And Responsiveness

- CSS uses many fixed/min heights and complex grid templates, especially in hero, trend, guide, shop, and product sections. This is likely causing spacing, cropping, and mobile layout fragility.
- Several sections depend on `object-fit: cover`, fixed aspect ratios, and page-specific `object-position` overrides. Image crops should be reviewed page by page.
- Mobile rules are scattered across multiple breakpoint blocks rather than organized by page or component.
- Homepage hero and lead-card composition should be reviewed for mobile first-viewport quality; current CSS includes very tall hero minima and large responsive type.
- Guide hub, guide detail, shop, product, and trend pages use strong editorial layouts but need a systematic desktop/tablet/mobile screenshot pass before visual changes.
- Footer and nav styles are inconsistent across pages: homepage has a full footer, guides have a separate custom footer, legal pages have minimal navigation, journal has a separate back-link pattern.

### Content, Legal, And Accuracy

- `src/pages/privacy.astro` now contains safe interim static-site privacy copy, but final legal review is still required.
- `src/pages/terms.astro` now contains safe interim editorial terms, but final legal review is still required.
- Legal/info coverage now includes privacy, terms, affiliate disclosure, and impressum. Final launch requirements for contact, accessibility, cookie/privacy detail, shipping, returns, and trade program depend on launch market and business model.
- `src/pages/about.astro` is only a short interim paragraph and does not support the premium editorial brand position.
- Homepage and `/trend-report/` now both use `Spring / Summer 2026`.
- Shipping/returns/trade footer claims have been removed from active UI until real policies exist.
- Homepage social links now use the verified Pinterest handle and a safe email fallback for Instagram until a verified Instagram URL exists.
- Product detail `partnerUrl` values are empty until verified partner destinations are supplied; product CTAs now use a safe pending state.
- Shop and guide listing buttons now use `View Details` when linking to local product pages.
- Journal has only one content post; homepage says "Latest Styling Guides" but those are hardcoded guide cards, not journal/content collection output.

### Dead Links, Weak Links, And Missing Targets

Confirmed route-level internal links build successfully for the main static routes.

Resolved P0 link issues:

- All sample partner destinations have been removed from `src/data/site.ts`.
- Homepage footer category links now target real shop anchors.
- Shop category tabs now target real category sections.
- Footer links for Shipping, Returns, Trade Program, Careers, and Our Artisans were removed from active UI.
- Newsletter CTA controls are visibly disabled until a real signup flow exists.
- Trend report CTA now says `Request the Report` because it opens email rather than a download flow.

## P0 Launch Blocker Resolution

Completed safe P0 fixes:

- Replaced temporary privacy copy with a static-site privacy notice using only verified repo information.
- Replaced temporary terms copy with limited editorial terms using only verified repo information.
- Added `/impressum/` with verified contact email and explicit missing-operator-data notice.
- Added `/affiliate-disclosure/` and linked it from the homepage footer, guide footer, and shop disclosure.
- Removed all sample partner destinations from source data.
- Converted product detail partner CTAs without verified URLs into a safe disabled state: "Partner Link Pending".
- Changed shop and guide product listing CTAs from "View at Partner" to "View Details" where they route internally.
- Fixed homepage trend panel season to match `Spring / Summer 2026`.
- Replaced misleading homepage footer category anchors with real shop category anchors.
- Split shop product categories into valid anchored sections: `#furniture`, `#lighting`, `#decor`, `#textiles`.
- Removed misleading Shipping, Returns, Trade Program, Careers, and Our Artisans footer links from the active site UI.
- Replaced generic Pinterest link with the verified repo handle route `https://www.pinterest.com/ochreandchrome/`.
- Replaced generic Instagram link with a mailto fallback because no verified Instagram URL exists in the repo.
- Disabled newsletter/signup controls and changed their copy to "Newsletter coming soon" / "Coming Soon" so they no longer imply a working signup flow.
- Changed trend report CTA from "Get the Report" to "Request the Report" because it currently uses email rather than an automated download flow.

Unresolved P0 items requiring human/legal input before launch:

- Legal operator name for Impressum/terms/privacy.
- Postal address for Impressum.
- Responsible person/editor where required by jurisdiction.
- Business registration details, if applicable.
- VAT/tax identification details, if applicable.
- Final launch jurisdiction and applicable legal template requirements.
- Confirmed analytics, cookie, newsletter, and email marketing providers, if any will be used.
- Final privacy language for Google Fonts or any self-hosting decision.
- Verified affiliate partner URLs or a decision to keep all partner purchase CTAs disabled.
- Verified Instagram profile URL or a decision to remove Instagram entirely.
- Confirmed domain ownership/status for `ochreandchrome.com`.
- Shipping, returns, and trade-program policy decisions if the site will make commerce claims beyond editorial affiliate linking.

P0 validation performed:

- `npm run build` passes and generates 23 static pages.
- Source/repo search found no remaining sample partner domains, old trend-report season label, or former temporary legal phrases.
- Active site search found no misleading `View at Partner`, `Get the Report`, generic Instagram URL, generic Pinterest homepage URL, or old shipping/artisan/trade footer claims.
- Built internal route/anchor check found no broken internal page or anchor targets, excluding generated Astro asset links.

## Architecture Refactor Progress

Completed maintainability refactor milestones:

- Split the former `03-Website/astro-site/src/styles/global.css` monolith from 3162 lines into imported style modules.
- `global.css` now acts as a 15-line import manifest only.
- Added style modules:
  - `tokens.css`
  - `base.css`
  - `typography.css`
  - `layout.css`
  - `components.css`
  - `home.css`
  - `guides.css`
  - `guides-detail.css`
  - `shop.css`
  - `product.css`
  - `trend-report.css`
  - `journal.css`
  - `legal.css`
  - `responsive.css`
  - `responsive-editorial.css`
- Extracted shared Astro components:
  - `src/components/SiteHeader.astro`
  - `src/components/SiteFooter.astro`
  - `src/components/NewsletterSignup.astro`
  - `src/components/ProductCard.astro`
  - `src/components/GuideCard.astro`
  - `src/components/AffiliateDisclosure.astro`
- Added `src/data/home.ts` to move homepage-only nav, guide, product, trend, aesthetic, and social data out of `src/pages/index.astro`.
- Reduced major page files:
  - `src/pages/index.astro`: 353 lines to 169 lines.
  - `src/pages/guides/[slug].astro`: 144 lines to 132 lines.
  - `src/pages/guides/index.astro`: 124 lines to 117 lines.
  - `src/pages/shop/index.astro`: 95 lines to 68 lines.
  - `src/pages/products/[slug].astro`: 72 lines to 64 lines.
  - `src/pages/trend-report.astro`: 69 lines to 61 lines.

Remaining oversized files/components after this milestone:

- No Astro component exceeds 200 lines.
- `src/data/site.ts` remains 261 lines and still mixes several content domains. This is a future data/content architecture task.
- Large style modules remain by page/system area: `home.css` 740 lines, `responsive-editorial.css` 560 lines, `guides-detail.css` 401 lines, `responsive.css` 365 lines, and `guides.css` 346 lines. These are no longer one global monolith, but they should be refined during the later visual/responsive pass.

Intentional 200-line component exceptions:

- None.

Architecture validation performed:

- `npm run build` passes after CSS splitting.
- `npm run build` passes after component extraction and homepage data extraction.
- Static route count remains 23 pages.
- Component and page line-count audit completed.
- Guard search completed for sample partner domains, old trend-report season text, misleading partner CTA text, old report CTA text, and misleading newsletter/signup promises.

Remaining lower-priority refactor/UI tasks are unchanged below and should be handled after P0 legal data is supplied.

## Priority Order

### P0 - Production Blockers

- [x] Replace temporary legal copy: privacy, terms, affiliate disclosure, shipping/returns, contact/imprint as needed.
- [x] Remove sample partner URLs or remove partner CTAs until valid.
- [x] Fix misleading internal anchors and footer links.
- [x] Align content dates and claims for the trend report.
- [x] Decide newsletter/report capture behavior and implement real form handling or remove form promises.
- [ ] Supply final human/legal operator data listed in "Unresolved P0 items requiring human/legal input before launch."

### P1 - Architecture Refactor

- Split `global.css` into maintainable style modules.
- Extract shared layout components: `SiteHeader`, `SiteFooter`, `EditorialNav`, `NewsletterSignup`, `ProductCard`, `GuideCard`, `HeroMedia`, `AffiliateDisclosure`.
- Move homepage product cards to shared product data or a dedicated homepage data module.
- Separate content domains from `site.ts`: `guides.ts`, `products.ts`, `trendReport.ts`, `materials.ts`.
- Remove or relocate generated screenshots/logs from the source-facing site directory.

### P2 - UI And Responsive Repair

- Run page-by-page visual QA at mobile, tablet, laptop, and wide desktop sizes.
- Normalize spacing scale, section widths, type scale, and image aspect ratios.
- Rework hero and editorial page layouts mobile-first.
- Fix image cropping with explicit per-image focal points only where needed.
- Standardize nav/footer behavior and information architecture across all pages.

### P3 - Content And Editorial Polish

- Expand About into a credible editorial brand page.
- Decide whether Guides and Journal are separate surfaces or overlapping content types.
- Add real journal content or remove empty/prototype language.
- Validate product names, prices, materials, images, affiliate disclosures, and partner claims.
- Replace generic social links with real brand profiles or hide them.

### P4 - QA, Accessibility, SEO, And Launch Hygiene

- Add automated link checking for built `dist`.
- Add visual regression snapshots for key pages.
- Check accessibility: heading order, image alt text, form labels/states, focus states, nav landmarks.
- Add SEO basics: canonical URLs, Open Graph images, sitemap, robots, structured data where useful.
- Audit performance: image dimensions, formats, lazy loading, font loading, CSS payload.

## Pages And Components Affected

- Homepage: `src/pages/index.astro`, `global.css` lines 51-790 and responsive blocks.
- Shared layout: `src/layouts/BaseLayout.astro`.
- Global data: `src/data/site.ts`.
- Guides hub: `src/pages/guides/index.astro`.
- Guide detail: `src/pages/guides/[slug].astro`.
- Shop: `src/pages/shop/index.astro`.
- Product detail: `src/pages/products/[slug].astro`.
- Trend report: `src/pages/trend-report.astro`.
- Journal index/detail: `src/pages/journal/index.astro`, `src/pages/journal/[...slug].astro`, `src/content/journal`.
- Legal/info: `src/pages/privacy.astro`, `src/pages/terms.astro`, `src/pages/about.astro`, plus missing production pages.
- Assets: `public/ochre-assets`, `public/homepage-generated-assets-hires`, `public/homepage-mockup-assets`, `public/design-references`.

## Execution Checklist

### Architecture

- [ ] Create shared component directory and extract repeated nav/footer/card/newsletter pieces.
- [ ] Split `global.css` by layer: tokens/base, shared components, homepage, editorial pages, commerce/product, journal/legal, responsive utilities.
- [ ] Refactor homepage product and guide data to use shared source data.
- [ ] Split `src/data/site.ts` into smaller typed modules or Astro content collections.
- [ ] Clean generated visual QA files/logs out of the source working area or move them under an ignored artifacts folder.

### UI And Responsive

- [ ] Capture current screenshots for `/`, `/guides/`, `/guides/layering-like-a-designer/`, `/shop/`, `/products/vale-velvet-chair/`, `/trend-report/`, `/journal/`, `/about/`.
- [ ] Define target spacing/type/image rules before patching individual pages.
- [ ] Repair homepage hero, lead card, product grid, trend panel, social grid, and footer across mobile/desktop.
- [ ] Repair guide hub hero, filters, featured guide, guide grid, newsletter, and footer.
- [ ] Repair guide detail article hero, sidebar, content sections, swatches, shop layer, and next guides.
- [ ] Repair shop/product pages, especially category anchors, product cards, affiliate disclosure, and image crops.
- [ ] Repair trend report hero, chapter alternation, material forecast, and download CTA.
- [ ] Repair journal/legal pages to match the premium editorial system.

### Content And Legal

- [x] Replace temporary privacy and terms copy with safe interim copy.
- [x] Add or correctly route affiliate disclosure and impressum pages.
- [x] Remove misleading shipping, returns, and trade program links until policies exist.
- [x] Remove all sample affiliate links.
- [x] Correct trend report season inconsistency.
- [x] Replace generic social URLs with verified Pinterest and safe Instagram fallback.
- [x] Disable newsletter/report signup promises where no backend exists.
- [ ] Replace safe interim legal copy with final launch-ready legal copy after human/legal data is supplied.
- [ ] Reconcile homepage product names/prices with product detail data.

### QA

- [ ] Run `npm run build` after each refactor slice.
- [ ] Add internal route/anchor/link check against built output.
- [ ] Add visual regression checks for key breakpoints.
- [ ] Run accessibility checks and manually inspect focus/keyboard flows.
- [ ] Validate image loading, alt text, font loading, favicon, metadata, sitemap, and robots.

## Recommended Execution Order

1. Fix P0 content/legal/link blockers first so the site stops making false or temporary production claims.
2. Refactor shared architecture and split the stylesheet before doing a full visual pass.
3. Do visual/responsive repair page by page, starting with homepage, guide hub, guide detail, shop/product, trend report, then journal/legal.
4. Add QA automation and launch hygiene once the structure is stable.
