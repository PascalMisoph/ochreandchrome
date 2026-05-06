# AI Prompt Library

Reusable prompts. Always pair with [[Brand-Voice]] rules.

> **Production model: ChatGPT Images v2.** Ochre & Chrome pins are generated as **complete, fully-composed Pinterest designs** in a single image-generation call — including category label, headline, subline, hero interior image, branded footer banner, and `ochreandchrome.com` domain. We do **not** use Canva as the composition tool. The Canva template doc ([[Canva-Templates]]) is retained as a legacy type/layout reference only. The master prompt formula is §7.A below; the world-specific prompts (§7.7–§7.10) inherit from it.

---

## 7.A — Editorial Pinterest Pin (master image prompt)

Use this formula for **every** Ochre & Chrome pin. Fill the variables, then run as a single ChatGPT Images v2 prompt. The output is a publishable pin — no Canva post-processing needed.

> A complete, publication-ready editorial Pinterest pin design for the brand **Ochre & Chrome**. Vertical 2:3 aspect ratio, 1000 by 1500 pixels, mobile-first text hierarchy, premium interior-design-magazine feeling.
>
> **Layout, top to bottom (5 zones):**
>
> 1. **Top category label zone (≈8% of height).** A small uppercase tracked-out label set in a clean modern sans (Montserrat-feeling), letter-spacing wide, in deep navy `#1A2A3A` on a warm cream `#F7F5F0` strip. Text: `{CATEGORY_LABEL}` — for example `NEO DECO  ·  TREND REPORT` or `AFROHEMIAN  ·  STYLING GUIDE`.
> 2. **Headline zone (≈18% of height).** A large editorial serif headline in Playfair Display feeling, weight bold, in deep navy `#1A2A3A`, set across 1–3 lines, generous tracking, centred or left-aligned per `{ALIGNMENT}`. Text: `{HEADLINE}`.
> 3. **Optional subline zone (≈6% of height).** A short supporting subline in clean sans, weight regular, **upright (never italic)**, in soft black `#2C2C2C` on warm cream. **Never end the subline with a period or any other terminal punctuation** — sublines are typographic labels, not sentences. A question mark or em-dash is acceptable when grammatically required; a full stop is not. Skip the zone if `{SUBLINE}` is empty. Text: `{SUBLINE}`.
> 4. **Hero interior image zone (≈55% of height).** A premium architectural-digest-style editorial interior photograph filling the central majority of the frame. Subject, materials, palette, lighting, and composition per `{IMAGE_BRIEF}`. The image should feel like a still from a high-end interior magazine — sharp focus on materials, warm natural light, no people, no clutter, no overlapping elements with the type zones above and below.
> 5. **Branded footer banner zone (≈13% of height).** A solid warm-cream `#F7F5F0` banner across the full width at the bottom of the pin. Centred inside the banner: the small wordmark **Ochre & Chrome** in Playfair Display, deep navy `#1A2A3A`, immediately followed below by the domain `ochreandchrome.com` in Montserrat all-caps, tracked out, in soft black `#2C2C2C`, smaller scale. Optional micro-divider rule between wordmark and domain in brushed brass `#D4AF37`.
>
> **Brand visual identity (non-negotiable):**
> - Palette: warm cream `#F7F5F0`, deep navy `#1A2A3A`, rich ochre `#C48B36`, terracotta `#A95C45`, oatmeal `#E5E0D8`, soft black `#2C2C2C`, brushed brass `#D4AF37` as restrained accent only.
> - Typography feeling: editorial serif (Playfair Display) for the headline, clean modern sans (Lato) for body/subline, all-caps tracked sans (Montserrat) for the top category label and the footer domain.
> - Composition: generous negative space, mobile-readable text at thumbnail scale, restrained luxury, never cluttered.
> - Mood: warm, polished, cinematic, editorial — *Architectural Digest* meets *boutique artisan catalog*. Premium interior-design-magazine feeling. Not playful. Not a pet brand. Not a SaaS template.
>
> **World-specific direction (apply per `{AESTHETIC_WORLD}`):**
> - **Neo Deco** — geometry, glamour, polish: brass, chrome, fluted glass, red marble, jewel-tone velvet, lacquered walnut, fan-arch and chevron motifs, cinematic restraint, hotel-lounge calm. See [[Neo-Deco-Visual-Guide]].
> - **Afrohemian** — soul, texture, craft: linen, jute, sisal, carved wood, terracotta ceramic, woven baskets, oxidised brass, warm earth tones, layered but edited. See [[Afrohemian-Visual-Guide]] and [[Cultural-Care-Guidelines]].
> - **Adire** — indigo resist-dye textile, hand-drawn irregularity, slight dye bleed, layered against cream linen, framed against ivory plaster, careful caption discipline. Use "Adire-inspired" unless the underlying piece is documented Yoruba/Nigerian. See [[Adire-Textile-Visual-Guide]].
> - **Brass Lighting** — single sculptural fixture as the subject, warm pool of light below, patina readable, marble or walnut surface receiving the light. See [[Brass-Lighting-Visual-Guide]].
>
> **Cultural-care for Afrohemian / Adire pins:** No "tribal" anything. No invented cultural origin claims. No authenticity claims for the AI-generated visual itself. See [[Cultural-Care-Guidelines]].
>
> **Strict do-not-include list:** no people, no logos other than the Ochre & Chrome wordmark in the footer, no watermarks other than `ochreandchrome.com`, no neon, no glitter, no cursive or script fonts, no 1980s pastiche, no Vegas-Deco kitsch, no boho-chic clichés (dreamcatchers, pastel mandala), no plastic finishes pretending to be brass, no Canva-template feel, no generic SaaS-card grid, no startup illustration, no chaotic overlapping product collages, no embedded text other than the specified label, headline, subline, wordmark, and domain.
>
> **Image generation parameters:**
> - `{CATEGORY_LABEL}`: short uppercase combo, e.g. `NEO DECO  ·  TREND REPORT`
> - `{HEADLINE}`: ≤9 words, the on-image headline (typically the pin's editorial overlay line)
> - `{SUBLINE}`: optional, ≤8 words; or leave empty
> - `{ALIGNMENT}`: `centred` for trend / inspiration pins, `left-aligned` for product roundups and how-tos
> - `{AESTHETIC_WORLD}`: `Neo Deco` | `Afrohemian` | `Adire` | `Brass Lighting` | `Cross-over fusion`
> - `{IMAGE_BRIEF}`: 2–4 sentences specifying subject, materials, palette, light direction, composition

**Output:** a finished, publishable Pinterest pin image — no further composition required. Upload directly to Pinterest with the title, description, and alt text from the pin spec.

**Worked examples (canonical references):**
- [[Pin-Example-P01]] — Neo Deco trend / inspiration pin, single-image hero, centred (`assets/pin/example 1.png`).
- [[Pin-Example-P02]] — Afrohemian educational pin with cultural-care directive, single-image hero, centred (`assets/pin/example 2.png`).
- [[Pin-Example-P03]] — Brass Lighting product roundup, 2×2 product grid, left-aligned headline + numbered quadrants.

When prompting a new pin, copy the §7.A frame from the example closest to the pin's world and format, then swap `{CATEGORY_LABEL}`, `{HEADLINE}`, `{SUBLINE}`, and the Zone 4 image brief.

## 7.1 — Blog Writing Prompt

> Act as a high-end interior design editor for the publication **Ochre & Chrome**. Your tone is authoritative, curated, and sophisticated (no fluff, no "hey guys"). Write a 1,200-word SEO-optimized article targeting the keyword **[KEYWORD]**.
>
> **Structure:**
> 1. Engaging PAS (Problem, Agitation, Solution) introduction.
> 2. A "Rules of Styling" section explaining the architectural or aesthetic logic.
> 3. An affiliate product roundup section featuring **[N]** items. For each item, leave a placeholder for an image and provide: *Why it works*, *Styling note*, and a CTA button reading *"Check Price on [Retailer]"*.
> 4. A "Mistakes to Avoid" section.
> 5. An FAQ section targeting common Google PAA questions.
>
> Provide a Meta Title (under 60 chars) and Meta Description (under 160 chars).

## 7.2 — Product Roundup Prompt

> Act as a luxury personal shopper. I am creating a product roundup for **[CATEGORY]**. Write the copy for 5 product cards using this exact format:
>
> ```
> Product Name: [Placeholder]
> Best For: [Use case]
> Why We Selected It: [Material/structural reason]
> Styling Note: [1 sentence on what to pair it with in a room]
> Pros & Cons: [Brief]
> CTA: [Actionable button text]
> ```

## 7.3 — Pinterest Pin Copy Prompt

> Act as a Pinterest SEO expert. I have a blog post titled **[TITLE]**.
>
> 1. Generate 10 highly clickable Pinterest pin titles (max 40 characters, power words, front-load the keyword).
> 2. Generate 10 Pinterest pin descriptions (max 500 characters). First sentence = natural hook. Then weave in long-tail keywords: **[K1, K2, K3]**. End with a clear CTA. Include 3 relevant hashtags.
> 3. Suggest the exact text overlay for the pin graphic.

## 7.4 — AI Image Prompt Generator (for Midjourney)

> Act as an AI image prompt engineer for Midjourney. I need 3 photorealistic interior design image prompts for the aesthetic **[AESTHETIC]**.
>
> Brand style: high-end editorial photography, warm natural light, soft shadows, no people, highly aesthetic, 2:3 aspect ratio.
>
> 1. Hero shot of a **[ROOM]**. Focus on **[FOCAL POINT]**.
> 2. Close-up detail of **[MATERIAL/PRODUCT]**. Focus on texture.
> 3. Flat-lay moodboard featuring 3 specific textures/materials: **[X, Y, Z]**.

## 7.5 — Canva Production Prompt *(LEGACY — retained as type reference only)*

**Status:** Deprecated. We no longer use Canva as the composition tool. Pins are now generated as fully-composed designs via §7.A on ChatGPT Images v2. The block below is preserved only because the type and colour specs are still useful as a typography reference for the §7.A prompt and for the rare case where a manual touch-up is needed.

> *(Legacy reference)* Canvas 1000 × 1500 px · background `#F7F5F0` · headline Playfair Display Bold `#1A2A3A` · domain `ochreandchrome.com` Montserrat 12pt bottom-centre · product cutouts with background removed and 10% opacity 4px Y-axis drop shadow.

## 7.6 — Affiliate Product Research Prompt

> Act as a merchandising analyst. Research the product category **[CATEGORY]**. Identify 3 high-ticket options and 2 budget dupes that fit the **[AESTHETIC]** trend.
>
> For each: Retailer · Estimated Price · Commission Rate (if known) · Visual Fit (1–10) · One specific reason it fits the aesthetic *structurally*.

## 7.7 — Afrohemian {IMAGE_BRIEF} fragment (cultural-care aware)

Inherits the §7.A master formula. Drop this fragment into `{IMAGE_BRIEF}`.

> The hero zone shows an Afrohemian interior scene. Choose 3–4 elements (do not list all generically): layered linen and jute textiles, terracotta ceramic vessel, handwoven natural-fibre basket cluster, sculptural carved-wood stool, framed neutral artisan textile wall art, dried botanicals (sparingly), oxidised brass candlestick or sconce. Palette: ochre, terracotta, walnut, ivory, tobacco, deep clay; restrained black or oxidised brass accents. Room types: warm modern living room, reading nook, bedroom corner, entryway with bench. Lighting: warm afternoon side-rake, eye-level, lived-in. Forbidden: fake "tribal" motifs, generic boho string lights, dreamcatchers, mass-market "African mask" décor, AI-melted hands or faces. Do not claim the result is "authentic" — caption discipline is owned by the pin description, see [[Cultural-Care-Guidelines]].

## 7.8 — Neo Deco {IMAGE_BRIEF} fragment

Inherits the §7.A master formula. Drop into `{IMAGE_BRIEF}`.

> The hero zone shows a Neo Deco interior scene. Required materials (any 3): unlacquered solid brass pendant or sconce, fluted glass, red marble (Portoro / Calacatta Viola / Levanto), jewel-tone velvet seating (emerald, oxblood, sapphire), lacquered walnut or burl wood cabinetry, fan-arch geometric mirror, chevron parquet floor. Palette: warm ivory or deep burgundy walls, warm brass and restrained chrome metals, dark walnut or lacquered-black wood, jewel velvet, red marble veining. Lighting: cinematic warm key from camera left, single dominant pool, controlled shadow on the right. Mood: hotel-lounge calm, controlled glamour. Forbidden: Vegas-Deco gold-plate, 1980s pastel pastiche, plastic shades pretending to be brass, "roaring 20s" costume props.

## 7.9 — Adire {IMAGE_BRIEF} fragment

Inherits the §7.A master formula. Drop into `{IMAGE_BRIEF}`.

> The hero zone shows a tight editorial composition centred on indigo Adire-inspired resist-dye textile. Compositions to choose from: close-up of folded indigo cushion on cream linen sofa, framed Adire-inspired textile on warm ivory plaster wall, layered indigo throws on a low natural-jute pouf, flat-lay of indigo pillow + oxidised brass candlestick + terracotta ceramic vessel on a warm cream surface. Pattern detail: hand-drawn batik feeling, irregular indigo geometry, slight resist-dye bleed at the edges; avoid crisp digital screen-print look. Palette: indigo, cream, ivory, warm walnut, restrained oxidised brass accent. Lighting: warm afternoon natural side light. **Caption discipline rule for the pin description and headline (not the image itself): use "Adire" only when the underlying piece is documented Yoruba/Nigerian; otherwise the headline should say "Adire-inspired."** See [[Cultural-Care-Guidelines]].

## 7.10 — Statement Brass Lighting {IMAGE_BRIEF} fragment

Inherits the §7.A master formula. Drop into `{IMAGE_BRIEF}`.

> The hero zone shows a single sculptural brass lighting fixture as the subject — pendant, sconce, or floor lamp — in a richly styled but restrained interior. Composition options: brass pendant over walnut dining table with warm light pool below, three pendants in a row over a red marble kitchen island, brass wall sconce flanking an arched mirror over a burl wood console, sculptural brass floor lamp beside a velvet armchair. Material focus: unlacquered solid brass with subtle living patina, ribbed or fluted glass diffuser, blackened-bronze contrast detail. Lighting: dusk or evening warm key, the fixture's own light reading as the dominant pool on the surface beneath. Forbidden: thin brass-plate cheap look, plastic shades, IKEA-feel identical big-box pendants, rose gold (it's not brass).

## 7.11 — One-Pin Concept Prompt (full pin spec generator)

> Act as the Ochre & Chrome Pinterest editor. Given the input below, output a complete pin spec.
>
> Inputs: `{aesthetic_world}` (Neo Deco | Afrohemian) · `{content_pillar}` · `{board}` · `{target_keyword}` · `{format}` (Product Roundup | Shop the Look | How-To | Comparison | Mistakes | Trend Forecast | Moodboard | Blog Teaser | Checklist) · `{destination_url}`
>
> Output, in this order:
> 1. **Pin title** — max 40 characters, keyword front-loaded, from a [[Headline-Formulas]] formula
> 2. **On-image overlay** — 2 lines, max 8 words total
> 3. **Pin description** — 2 sentences, weave in 3 long-tail keywords, end in a specific CTA
> 4. **Primary keyword + 4 secondaries**
> 5. **Alt text** — 1–2 sentences describing the image plainly for accessibility
> 6. **Image brief** — 2–3 sentences specifying subject, materials, palette, lighting (this becomes `{IMAGE_BRIEF}` in §7.A)
> 7. **Full §7.A image prompt** — the complete ChatGPT Images v2 prompt with `{CATEGORY_LABEL}`, `{HEADLINE}`, `{SUBLINE}`, `{ALIGNMENT}`, `{AESTHETIC_WORLD}`, and `{IMAGE_BRIEF}` filled. The output must be runnable as-is.
> 8. **Suggested board** (must be one of the 6 existing boards in [[Existing-Board-Audit]])
> 9. **Production difficulty** — easy / medium / high
> 10. **Save angle** — one sentence on why a Pinterest user saves this

## 7.12 — Repurpose-Blog-To-8-Pins Prompt

> Given a published Ochre & Chrome blog post URL and its primary keyword, output 8 pin specs (using the 7.11 format) that all link to the same URL but each lead with a different angle: (1) listicle hook · (2) mistake hook · (3) shop-the-look · (4) comparison · (5) moodboard · (6) trend forecast · (7) checklist · (8) before/after. Use 2 different existing boards. Vary headline formulas — never repeat one.

## 7.13 — Weekly Content Plan Prompt

> Given last week's top 3 pins by outbound clicks and the current 30-day pillar gap (which board is below quota in [[30-Day-Pinterest-Content-Plan]]), output the next 7 days as 14–21 pin specs, balanced 2/3 between Neo Deco and Afrohemian (≈45/55), at least one Adire and one Brass pin, at least 2 trend-translation pins.

## 7.14 — Cultural-Care Copy Audit Prompt

> Review the supplied copy for an Afrohemian or Adire pin/post. Flag any of: vague "tribal" or "ethnic" language, invented cultural origin claims, Authenticity overclaim on AI-generated visuals, missing Yoruba/Nigerian framing where Adire is named, "boho-chic" usage. Rewrite using approved language from [[Cultural-Care-Guidelines]].

## 7.15 — Agent Handoff Prompt

> See [[Agent-Handoff-Prompt]] for the full handoff template.

## 7.16 — Pinterest SEO Research Prompt

> Act as a Pinterest SEO researcher. For the broad topic **[TOPIC]**, generate:
>
> 1. 5 primary broad keywords.
> 2. 15 long-tail, high buyer-intent keywords (e.g. "buy [product]", "best [product] for [room]").
> 3. 5 specific Pinterest board name ideas based on these keywords.
> 4. 5 seasonal angles (e.g. how to adapt for fall hosting).
