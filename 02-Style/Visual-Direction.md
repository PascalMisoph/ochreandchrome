---
id: visual-direction
type: visual-spec
scope: imagery
agent_readable: true
canonical_for: [5-zone-pin-layout, composition-rules, never-do-list, single-prompt-pin-production]
required_for: [produce-daily-pin-bundle, pin-quality-gate]
last_verified: 2026-05-18
---

# Visual Direction

> Editorial, expensive, curated, warm. **Architectural Digest meets boutique artisan catalog.**

## Production model — single-prompt fully-composed pins

**Pinterest pins are generated end-to-end via ChatGPT Images v2.** Each pin is a *complete* publishable design produced in a single image-generation call.

We **do not** use Canva as the composition tool. The Canva template document ([[Canva-Templates]]) is retained as a legacy type and layout reference only.

### Default layout — full-bleed image (changed 2026-06-01, operator direction)

**The default pin is a full-bleed editorial photograph** that fills the entire 2:3 frame, edge to edge, with **only a slim bottom strip carrying `www.ochreandchrome.com`**. There is no top label band, no headline band, no subline band, and no large cream footer block. Do **not** use the old "whitespace → headline → image → whitespace" sandwich as the standard pin. An optional single editorial headline may float directly on the lower third of the photograph (over a soft gradient scrim) when a hook is wanted — never in its own whitespace zone. The editorial hook otherwise lives in the Pinterest title + description, not on the image.

The default master prompt is [[AI-Prompts]] **§7.B**. World-specific image briefs are §7.7–§7.10.

### The 5-zone layout — text-forward EXCEPTION only

The earlier 5-zone stack (top label / headline / subline / image ~55% / cream footer banner) is **no longer the default**. Use it only for deliberately text-forward pins such as a trend-report cover. Its master prompt is [[AI-Prompts]] §7.A.

| Zone | Approx. height | Content | Type |
|---|---|---|---|
| 1 — Top category label | 8% | Short uppercase tracked label, e.g. `NEO DECO  ·  TREND REPORT` | Montserrat all-caps |
| 2 — Headline | 18% | Editorial serif headline, 1–3 lines, deep navy on warm cream | Playfair Display Bold |
| 3 — Subline (optional) | 6% | Short supporting line in clean sans, **upright (never italic), no trailing period** | Lato Regular |
| 4 — Hero interior image | 55% | Editorial Architectural-Digest-style interior, sharp on materials | — |
| 5 — Branded footer banner | 13% | "Ochre & Chrome" wordmark + `ochreandchrome.com` domain, on warm cream | Playfair + Montserrat |



## Composition rules

| Element | Spec |
|---|---|
| Photography | Natural lighting, sharp focus on materials (wood grain, velvet texture), well-styled but lived-in. No chaotic clutter. |
| Pin composition | Vertical **2:3**. **Default: full-bleed photograph** edge to edge + slim bottom `www.ochreandchrome.com` strip (§7.B). Text-forward exception only: top-image / bottom cream text box (§7.A). |
| Website imagery | Full-width hero images, beautifully aligned product grid cutouts with transparent backgrounds. |
| Product collage | Backgrounds removed. Arranged neatly, no chaotic overlap. Soft drop shadows: 10% opacity, 4px Y-axis. |
| Video pin | Slow cinematic pans of styled rooms. Smooth transitions. Subtle text overlays in sync with focal point. |
| Moodboard | Grid layouts mixing texture swatches (marble, grass weave) next to furniture pieces. |

## Texture & detail

- **Negative space is mandatory.** Let products and text breathe. Never pack to edges.
- **Texture is a feature.** Showcase Adire patterns, burl wood swirls, marble veining.
- **Borders:** 1–2px solid in Ochre or Navy to frame images within collages.
- **Labels:** small, elegant, Montserrat (e.g. *"Under $500"*, *"Top Pick"*).
- **Rounded corners:** subtle 4px or 8px on product cards. Never harsh sharp UI boxes.
- **Icons:** minimalist line-art only. No cartoon emojis.
- **Luxury cue:** convey via Playfair font + ample white space, not gold/glitter.

## Always do

- High text contrast (Navy on Cream).
- Strip backgrounds from product shots for collages.
- Match aspect ratio 2:3 for all pins.

## Never do

- Generic 3D-rendered sterile rooms.
- Cursive / script fonts.
- Text directly over busy parts of images.
- Neon colors.
- Cluttered, overlapping product collages.

See [[Color-Palette]], [[Typography]], and [[Canva-Templates]].
