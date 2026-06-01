---
id: affiliate-content-opportunities
type: plan
scope: affiliates
agent_readable: true
canonical_for: [content-clusters, first-articles, product-to-article-map, recommends-cloak-map]
required_for: [draft-blog-post, product-card, repurpose-post-to-8-pins]
last_verified: 2026-06-01
source: ochre_chrome_affiliate_product_database.clean.md
link_strategy: cloak-now
---

# Affiliate Content Opportunities — Monetization Roadmap

This file turns the [[ochre_chrome_affiliate_product_database.clean|Affiliate Product Database]] (73 scored products) into a concrete revenue system: **6 content clusters → 4 launch articles → 20 pins (2/day)**. It is the bridge from data to revenue, and the single source of truth for which product maps to which article and which cloaked link.

Decisions locked 2026-06-01:
- **Link strategy: cloak now.** Mavely links are confirmed live; article CTAs point to `ochreandchrome.com/recommends/{slug}` from launch. See §4.
- **4th article: Burl Wood & Brass (Cluster 4b)** — chosen on trend data (burl wood Google searches +5,000% MoM; aligns with Pinterest's 2026 Neo Deco / brass / "Glamoratti" forecast). Vessels/baskets (4a) deferred to a later wave.

---

## §1. The 6 Content Clusters

Derived from Score-5 and Score-4 products only, ranked by monetization potential (commission × AOV × Pinterest fit × cultural-care ease), not raw Fit Score.

| # | Cluster | Product IDs | Commission | AOV | Primary Board | Cultural Care |
|---|---|---|---|---|---|---|
| **1** ⭐ | Woven Rattan Pendants | A29, A21, A30, A22, A31, A32, A33 | **21%** | $150–290 | Afrohemian Decor & Interiors | low (material-first) |
| **2** | Neo Deco Statement Lighting | N28, N29, N02, N23, N30, N24, N22, N25, N26 | 5.6–21% | $90–2,410 | Statement Brass Pendant Lighting | none |
| **3** | Natural Fiber / Jute Rugs | A23, A24, A45, A02, A25 | 5.6–7% | $50–279 | Afrohemian Decor & Interiors | low |
| **4** | Burl Wood & Brass Furniture | N05, N04, N07, N03, N01, N11 | 5.6% | $799–4,999 | Neo Deco Living Room + 2026 Trends | none |
| 4-alt | Afrohemian Vessels & Baskets | A34, A42, A43, A48, A44, A47 | 5.6–7% | $10–101 | Afrohemian Decor & Interiors | low | *(deferred — later wave)* |
| 5 | Adire / Indigo Textiles | A35 (+ Shortlist sourcing) | 5.6% | ~$170 | Authentic Adire Fabric & Textiles | **high** | *(deferred — too thin; needs cultural-care depth)* |

---

## §2. The 4 Launch Articles

All four are **affiliate-bridge posts** → published to the Astro `journal` collection at `/journal/{slug}`. Each follows the Affiliate Bridge Page Template in [[Site-Architecture]] and the voice rules in [[Brand-Voice]]. Cultural-care gate per [[Cultural-Care-Guidelines]].

### Article 1 — The Woven Rattan Pendant Edit ⭐
- **Working title:** "The Woven Rattan Pendant Edit: 7 Fixtures for a Warm, Layered Room"
- **Target keyword:** `woven rattan pendant` (secondary: warm dining nook lighting, natural fiber pendant, Afrohemian ceiling light)
- **URL:** `/journal/woven-rattan-pendant-lights`
- **Pinterest board:** Afrohemian Decor & Interiors (primary) → AllPins (secondary)
- **Products (hero → support):** A29, A21, A30, A22, A31, A32, A33
- **Pin angle:** Warm filtered glow over a dining nook; single hero pendant shot from below showing the weave; jute rug + plaster wall context.
- **Why first:** Highest commission in the entire database (21%), tight visual cluster, mid AOV, low cultural-care risk.

### Article 2 — The Neo Deco Statement Light
- **Working title:** "The Neo Deco Statement Light: 8 Sculptural Fixtures That Anchor a Room"
- **Target keyword:** `neo deco statement lighting` (secondary: sculptural pendant, modern art deco chandelier, brass and chrome pendant)
- **URL:** `/journal/neo-deco-statement-lighting`
- **Pinterest board:** Statement Brass Pendant Lighting (primary) → Neo Deco Living Room (secondary) → AllPins
- **Products:** N28, N29, N02, N23, N30, N24 (mix high-AOV heroes + accessible $90–150 entries for conversion spread)
- **Pin angle:** Cinematic hero pendant over marble or walnut; warm pool of light below; patina readable.
- **Why:** Highest-AOV affiliate channel; directly rides the Pinterest-forecast Neo Deco / brass resurgence.

### Article 3 — The Natural Fiber Rug Guide
- **Working title:** "The Natural Fiber Rug Guide: Jute Foundations for a Layered Room"
- **Target keyword:** `natural fiber rug` (secondary: jute rug, handwoven jute, Afrohemian foundation rug, jute vs sisal)
- **URL:** `/journal/natural-fiber-rug-guide`
- **Pinterest board:** Afrohemian Decor & Interiors (primary) → AllPins
- **Products:** A23, A24, A45, A02, A25
- **Pin angle:** Top-down texture layering — jute weave detail on warm floor, layered with a softer rug; foundation-first composition.
- **Why:** Natural-fiber rugs rated AOV 10 in [[Product-System]]; foundational, fast-converting, cheap entry price.

### Article 4 — Why Burl Wood Is Back
- **Working title:** "Why Burl Wood Is Back — and the Brass It Belongs With"
- **Target keyword:** `burl wood furniture` (secondary: burl wood revival, neo deco furniture, burl and brass, 1970s luxury furniture)
- **URL:** `/journal/why-burl-wood-is-back`
- **Pinterest board:** Neo Deco Living Room (primary) → 2026 Home Decor Trends (secondary, trend-translation) → AllPins
- **Products:** N05 (Laurent burl dining table), N04 (Arlo burl + brass bar cabinet), N07 (Laurent burl dining chair), N03 (Vesper brass + grasscloth console), N01 (Evening Muse brass floor lamp), N11 (Portal mirror)
- **Pin angle:** Chatoyant burl grain close-up + brass accent; "trend report" category label; magazine-cover energy for the Trends board. One pin can target the "reading nook" micro-trend with the N01 floor lamp.
- **Why:** Trend spike (+5,000% MoM) = discovery traffic now; high AOV; trend-translation framing earns the 2026 Trends board. **Voice rule:** frame as a cultural/editorial movement, never "Pinterest predicts" (see [[Brand-Voice]]).

**Pin runway:** 4 articles × 5 pins = 20 pins ÷ 2/day = **10 days** of Pinterest content. See §5 for the day-by-day slate.

---

## §3. Product Cards — build order

For each article, formulate the top products as clean cards via the `product-card` skill ([[Product-System]] template) before drafting. Priority order for card production:

1. **Article 1 cards** (7): A29, A21, A30, A22, A31, A32, A33
2. **Article 2 cards** (6): N28, N29, N02, N23, N30, N24
3. **Article 3 cards** (5): A23, A24, A45, A02, A25
4. **Article 4 cards** (6): N05, N04, N07, N03, N01, N11

Card rule (from [[Product-System]]): every "Why we like it" must give a **material or structural reason**, never "I love this". Afrohemian copy stays material-first per [[Cultural-Care-Guidelines]] — "woven rattan pendant", not "boho".

---

## §4. The `/recommends/` Cloak Map

**Architecture:** central map `03-Website/astro-site/src/data/affiliate-links.ts` (`slug → Mavely link`) + a `/recommends/[slug]` redirect route. All article CTAs link to `ochreandchrome.com/recommends/{slug}`. To swap any link later (e.g. Mavely deactivates a merchant) → edit one map entry, never the articles.

> Note: [[Affiliate-Programs]] describes a WordPress/ThirstyAffiliates flow. This site is static Astro on Vercel, so cloaking is a redirect map, not a plugin. Update Affiliate-Programs.md to reflect this once §4 ships.

### Slug → Mavely map (the 24 launch products)

| Slug | Product | Mavely link |
|---|---|---|
| `lampsmodern-wicker-rattan-pendant` | A29 Natural Wicker Hanging Light | https://mavely.app.link/p8dyuxc9A3b |
| `lampsmodern-scalloped-rattan-pendant` | A21 Retro Scalloped Woven Rattan | https://mavely.app.link/wWVhBCvRA3b |
| `lampsmodern-rattan-island-pendant` | A30 Rattan Kitchen Island Pendant | https://mavely.app.link/zbNyaVd9A3b |
| `lampsmodern-rattan-cone-pendant` | A22 Retro Woven Rattan Cone | https://mavely.app.link/A2VF5swRA3b |
| `lampsmodern-black-rattan-pendant` | A31 Modern Rattan Handwoven | https://mavely.app.link/mF0tXtf9A3b |
| `lampsmodern-simple-rattan-pendant` | A32 Modern Simple Handwoven Rattan | https://mavely.app.link/T3s0aSg9A3b |
| `lampsmodern-bamboo-basket-pendant` | A33 Bamboo Natural Basket Pendant | https://mavely.app.link/cVIRMTh9A3b |
| `gubi-multi-lite-pendant` | N28 Gubi Multi-Lite Pendant | https://mavely.app.link/fQZIiLpRA3b |
| `flos-2097-chandelier` | N29 FLOS 2097 Chandelier | https://mavely.app.link/ROWbW1qRA3b |
| `cb2-waltz-chandelier` | N02 Waltz Chandelier | https://mavely.app.link/goayqieMA3b |
| `lampsmodern-three-head-pendant` | N23 Three Heads Creative Pendant | https://mavely.app.link/yC8OuXiRA3b |
| `mitzi-stella-semi-flush` | N30 Mitzi Stella Semi Flush | https://mavely.app.link/4eI7X8rRA3b |
| `lampsmodern-amber-glass-flush` | N24 Vintage Amber Glass Semi-Flush | https://mavely.app.link/oE0lB1jRA3b |
| `rugsusa-handwoven-jute-blend` | A23 Perfect Handwoven Jute-Blend | https://mavely.app.link/rDYYKKxRA3b |
| `rugsusa-jute-braided-rug` | A24 Jute Braided Rug | https://mavely.app.link/qQuZNAARA3b |
| `safavieh-natural-black-diamond-rug` | A45 Natural/Black Diamond Woven | https://mavely.app.link/ZJZWMDw9A3b |
| `anthropologie-ferm-gesso-jute-rug` | A02 Ferm Living Gesso Jute | https://mavely.app.link/VoJS9CTQA3b |
| `rugsusa-chunky-jute-tasseled` | A25 Chunky Jute Tasseled | https://mavely.app.link/HvIxHBBRA3b |
| `cb2-laurent-burl-dining-table` | N05 Laurent Burl Wood Dining Table | https://mavely.app.link/3S5rHbtMA3b |
| `cb2-arlo-burl-bar-cabinet` | N04 Arlo Burl Wood & Brass Bar Cabinet | https://mavely.app.link/7Zt9YSmMA3b |
| `cb2-laurent-burl-dining-chair` | N07 Laurent Burl Wood Dining Chair | https://mavely.app.link/okmlsbHMA3b |
| `cb2-vesper-brass-console` | N03 Vesper Brass & Grasscloth Console | https://mavely.app.link/urjJ5DUKA3b |
| `cb2-evening-muse-floor-lamp` | N01 Evening Muse Floor Lamp | https://mavely.app.link/zKVZsa9LA3b |
| `cb2-portal-mirror` | N11 Portal Full Length Mirror | https://mavely.app.link/O89INhkNA3b |

---

## §5. Pinterest Cadence — 2 pins/day, 10-day runway

Each article gets 5 pins (different headline angle + image, same destination URL), released across the day-of-week board rotation in [[Pinterest-Calendar]]. Produced via `repurpose-post-to-8-pins` → `produce-daily-pin-bundle` → `09-Automation` `daily`.

| Day | Pin A | Pin B |
|---|---|---|
| 1 | Rattan #1 | Neo Deco Light #1 |
| 2 | Jute Rug #1 | Burl Wood #1 |
| 3 | Rattan #2 | Neo Deco Light #2 |
| 4 | Jute Rug #2 | Burl Wood #2 |
| 5 | Rattan #3 | Neo Deco Light #3 |
| 6 | Jute Rug #3 | Burl Wood #3 |
| 7 | Rattan #4 | Neo Deco Light #4 |
| 8 | Jute Rug #4 | Burl Wood #4 |
| 9 | Rattan #5 | Neo Deco Light #5 |
| 10 | Jute Rug #5 | Burl Wood #5 |

Pins must clear [[Pin-Quality-Checklist]]; Afrohemian/rattan pins get the cultural-care stamp per the pin-bundle skill.

---

## §6. Status & Next Actions

- [x] §0 Foundation — clusters + 4 articles + product map + cloak map (this file)
- [x] §1 Build `/recommends/` cloak infrastructure — `src/data/affiliate-links.ts` (24 slugs) + `astro.config.mjs` redirects; build emits 24 noindex redirect pages ✅ verified
- [x] §2 Product cards — Article 1 (7 rattan cards, embedded in draft)
- [x] §3 Draft Article 1 — `99-Inbox/posts/PENDING/woven-rattan-pendant-lights.md` (cultural-care: **self-audit PASS**, formal reviewer pass still recommended)
- [x] §4 Publish Article 1 → `src/content/journal/woven-rattan-pendant-lights.md`, build passes, all 7 CTAs cloaked, 0 raw-link leaks
- [x] §5 Repurpose Article 1 → **8** full-bleed pins (2/day, 2 boards, distinct angles) at `04-Content/pinterest/PENDING/2026-06-0{2..5}/` — **blocked on production deploy** before posting
- [x] Pin design rule changed → full-bleed default (§7.B) recorded in AI-Prompts, Visual-Direction, chatgpt-image-prompt-contract
- [x] Articles 2–5 published to `journal` (value-first; CTAs cloaked; build verified):
  - Neo Deco Statement Lighting · Natural Fiber Rug Guide · Why Burl Wood Is Back · Afrohemian Vessels & Baskets (+6 new cloak slugs)
  - **29 product CTAs across 5 articles, 30 `/recommends/` redirects, 0 raw-link leaks**
- [x] Pinterest content relocated → `04-Content/pinterest/` (plan + bundles); automation path + contract + CLAUDE.md updated
- [x] Committed + pushed to branch `feat/affiliate-monetization-article-1`
- [ ] **Next:** merge PR → production deploy → confirm article URLs 200 → repurpose Articles 2–5 into pins (8 each) → render + post
- [ ] Formal `cultural-care-review` pass for Afrohemian articles (1, 3, 5) — self-audit PASS done

See [[Affiliate-Programs]] (networks/links), [[Product-System]] (card format), [[Site-Architecture]] (post template), [[Existing-Board-Audit]] (boards).
