---
id: chatgpt-image-prompt-contract
type: integration-contract
scope: imagery
agent_readable: true
canonical_for: [image-generation, prompt-variables, pin-image-output]
required_for: [produce-daily-pin-bundle, repurpose-post-to-8-pins]
last_verified: 2026-05-18
upstream_source: 06-Operations/AI-Prompts.md §7.A
---

# ChatGPT Images v2 — Prompt Contract

> **Layout default changed 2026-06-01 (operator direction).** The **default** master prompt is now `06-Operations/AI-Prompts.md` **§7.B** — a full-bleed editorial photograph with only a slim bottom `www.ochreandchrome.com` strip. The 5-zone whitespace layout (§7.A) is the **text-forward exception**, not the default. For §7.B the only variables an agent fills are `{AESTHETIC_WORLD}`, `{IMAGE_BRIEF}`, and the optional `{HEADLINE}`; the `{CATEGORY_LABEL}`, `{SUBLINE}`, and `{ALIGNMENT}` variables below apply only to the §7.A exception layout.

> **This file is a contract, not a prompt.** The master image prompts live at `06-Operations/AI-Prompts.md` §7.B (default) and §7.A (exception) and are the source of truth. This file specifies the **variable schema** an agent must fill before the master prompt is runnable, plus the validation rules that catch bad prompts before they burn an image generation.

## Why this file exists

Agents have a tendency to "improve" the master prompt by rewording it. Don't. The master prompt has been tested and produces consistent pins. The agent's only job is to fill the variables correctly and validate the result.

## Variable schema (the only thing an agent fills)

| Variable | Type | Constraint | Source |
|---|---|---|---|
| `{CATEGORY_LABEL}` | string | UPPERCASE, ≤24 chars total, dot-separator `·` between two parts, e.g. `NEO DECO  ·  TREND REPORT` | derived from pin's pillar + format |
| `{HEADLINE}` | string | ≤9 words, ≤55 chars, no terminal period unless intentional editorial effect, front-loads the keyword | from `Headline-Formulas.md`, with substitutions filled from the queue row |
| `{SUBLINE}` | string OR empty | ≤8 words, ≤45 chars, **no terminal period or full stop**, **never italic** | optional; skip if not adding clarity |
| `{ALIGNMENT}` | enum | `centred` \| `left-aligned` | `centred` for trend / inspiration / moodboard; `left-aligned` for product roundups & how-tos |
| `{AESTHETIC_WORLD}` | enum | `Neo Deco` \| `Afrohemian` \| `Adire` \| `Brass Lighting` \| `Cross-over fusion` | from the queue row's `pillar` |
| `{IMAGE_BRIEF}` | string | 2–4 sentences, specifies subject, materials, palette, light direction, composition | from `AI-Prompts.md` §7.7 (Afrohemian) / §7.8 (Neo Deco) / §7.9 (Adire) / §7.10 (Brass) — fill into the world fragment |

## Validation rules (run before submitting the prompt)

The agent MUST run this checklist before sending to ChatGPT Images v2:

```
[ ] {CATEGORY_LABEL} matches the regex: ^[A-Z ·]+$ and length ≤24
[ ] {HEADLINE} word_count(strip(headline)) ≤ 9
[ ] {HEADLINE} char_count ≤ 55
[ ] {SUBLINE} does NOT end with "." (em-dash and "?" allowed)
[ ] {SUBLINE} does NOT contain italic markers (asterisks at edges, <i> tags)
[ ] {ALIGNMENT} ∈ {centred, left-aligned}
[ ] {AESTHETIC_WORLD} ∈ {Neo Deco, Afrohemian, Adire, Brass Lighting, Cross-over fusion}
[ ] {IMAGE_BRIEF} sentence_count ∈ [2, 4]
[ ] {IMAGE_BRIEF} mentions: a subject, ≥2 materials, a palette cue, a lighting cue
[ ] If {AESTHETIC_WORLD} == "Adire": headline uses "Adire-inspired" UNLESS the linked
    product is documented Yoruba/Nigerian (in which case "Adire" alone is permitted)
[ ] If {AESTHETIC_WORLD} ∈ {Afrohemian, Adire}: no banned terms
    {tribal, ethnic, boho-chic, exotic, gypsy, ancient symbol, spiritual symbol}
```

Any failed check → revise the variable, do not submit.

## Submission format

The fully-filled prompt is the §7.A block from `AI-Prompts.md`, with the six variables substituted in place. Submit as a single ChatGPT Images v2 message. **One image generation = one publishable pin.** Do not request multiple aspect ratios. Do not request "variations" — regenerate fresh if the first output fails the visual gate.

## Output validation (after image returns)

Run `06-Operations/Pin-Quality-Checklist.md` production-model gate.

**For §7.B (default, full-bleed):**
1. Photograph fills the frame edge to edge — **no** whitespace text bands, no cream sandwich
2. Slim bottom strip present with `www.ochreandchrome.com` legible (and only that text, plus any optional floating headline)
3. If a floating `{HEADLINE}` was requested: it sits on the lower third over a soft scrim, readable, not over a busy area, not in its own band
4. Domain `www.ochreandchrome.com` correctly spelled, no artefacts
5. Brand-consistent editorial composition (palette + world identity)

**For §7.A (text-forward exception):**
1. Readable integrated text (label + headline + footer baked in, no artefacts)
2. Clear headline hierarchy (label → headline → subline)
3. Branded footer banner (warm cream `#F7F5F0`, wordmark in Playfair Display)
4. Domain `ochreandchrome.com` visible in footer banner
5. Brand-consistent editorial composition

If any fails: regenerate. Common fixes:
- Domain text broken → re-emphasize "slim bottom strip, one line, www.ochreandchrome.com" and retry.
- Image not edge-to-edge → re-state "full-bleed, photograph fills the entire frame, no whitespace bands".
- World identity wrong → reload the §7.7/7.8/7.9/7.10 fragment and re-fill `{IMAGE_BRIEF}`.

## Failure → escalate

After 3 failed regenerations on the same pin: stop, write a `regen-failure.md` note in the bundle, escalate to the operator with the variables you used and what failed. Do not "fix" by relaxing the brand rules.

## Examples (canonical)

Open in this order to see the variable schema applied:
- `06-Operations/Pin-Example-P01.md` — Neo Deco trend, centred, no subline
- `06-Operations/Pin-Example-P02.md` — Afrohemian educational, centred, cultural-care directive
- `06-Operations/Pin-Example-P03.md` — Brass roundup, left-aligned, 2×2 product grid

## What this file does NOT specify

- The exact prose of the master prompt — that's `AI-Prompts.md` §7.A. Read it directly.
- The visual world rules — those are `02-Style/{Neo-Deco,Afrohemian,Adire-Textile,Brass-Lighting}-Visual-Guide.md`.
- The post-image metadata (Pinterest title, description, alt) — that's `08-Integrations/pinterest-bundle-format.md`.

See also: `06-Operations/AI-Prompts.md`, `02-Style/Visual-Direction.md`, `06-Operations/Pin-Quality-Checklist.md`, `08-Integrations/pinterest-bundle-format.md`.
