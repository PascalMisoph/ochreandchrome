# Daily Pin Production Workflow

The per-day rhythm for shipping 2–3 pins. Optimised for ~90 minutes of focused work per day; an experienced operator can compress to 60.

## Inputs

- [[Pin-Production-Queue]] — the next 10 pins.
- [[30-Day-Pinterest-Content-Plan]] — full pin specs.
- [[AI-Prompts]] — master pin prompt §7.A (composes the full pin in one call), world-specific image fragments (§7.7–§7.10), and the one-pin spec generator (§7.11).
- [[Pin-Quality-Checklist]] — the gate (production-model + metadata).
- ChatGPT Images v2 (the only image-generation tool — produces fully-composed pins end-to-end).
- Pinterest Business account.
- WordPress + ThirstyAffiliates for the destination URL.

> **Tooling note:** Canva is **not** in the production loop. Pins are generated as complete, publishable designs (label + headline + subline + interior image + branded footer + `ochreandchrome.com`) directly via ChatGPT Images v2 §7.A. Skip any past instruction to "drop image into Canva" or "add overlay later." [[Canva-Templates]] is retained as type / layout reference only.

## Daily rhythm (60 minutes)

| Time | Task | Output |
|---|---|---|
| 0–10 | **Open the queue.** Read today's pin specs in [[Pin-Production-Queue]]. Confirm destination URLs exist. If any 404, switch to writing the blog post first (use [[AI-Prompts]] §7.1) or push the pin to next-available date. | Today's pin list confirmed |
| 10–35 | **Generate fully-composed pins.** For each pin, fill the §7.A master prompt with the spec's `{CATEGORY_LABEL}`, `{HEADLINE}`, `{SUBLINE}`, `{ALIGNMENT}`, `{AESTHETIC_WORLD}`, and the world-specific `{IMAGE_BRIEF}` fragment from §7.7–§7.10. Run on ChatGPT Images v2. Pick the best output. Regenerate if the rendered text or footer is wrong. | 2–3 publishable pin images |
| 35–50 | **Upload + metadata.** For each pin: upload, paste title (≤40 chars), paste description (with 3 long-tail keywords + CTA + 2–3 hashtags), paste alt text (concrete description per the spec), apply primary board, apply AllPins as secondary, set destination URL. Schedule for the assigned day. | 2–3 pins scheduled |
| 50–60 | **Quality gate + log.** Run [[Pin-Quality-Checklist]] (both production-model gate and metadata gate). If any item fails — regenerate via §7.A or pull the pin. Once all pass, mark `[✓]` in [[Pin-Production-Queue]]. Log in spreadsheet (see [[KPIs-Tracking]]). | Queue updated, KPIs logged |

> **Why this is faster.** Old workflow: image generate → Canva compose → export → upload. New workflow: §7.A generate → upload. The Canva middle-step is gone, which is why daily production drops from 90 min to 60 min.

## Pre-flight check

Before starting the day's work, confirm:

- Pinterest scheduler is live (no auth issues).
- WordPress is live (no maintenance mode).
- ThirstyAffiliates links resolve (test one).
- Today's destination URLs return 200 OK.

If any of those fail, fix infrastructure before producing pins.

## Escalations

- **Cultural-care concern.** Stop. Run [[AI-Prompts]] §7.14 audit on the copy. If the pin can't be reframed to comply with [[Cultural-Care-Guidelines]], pull it.
- **Affiliate link returns "out of stock."** Stop. Check the [[Product-System]] selection checklist. Either swap the product or push the pin until a replacement is found.
- **Image quality fails the [[Pin-Quality-Checklist]] visual test.** Regenerate via §7.A — most failures are wrong `{HEADLINE}` length or unclear `{IMAGE_BRIEF}`. If text rendering still breaks after three regenerations, simplify the headline to ≤6 words and retry. Escalate to commissioned real photography only for high-difficulty cultural-care pins (P09, P49, etc.) where editorial credibility outweighs production speed.
- **Too tired / time-pressed to do the quality gate.** Ship 1 pin instead of 3. Half-baked pins under-perform and burn impressions.

## Weekly cadence (in addition to daily)

| Day | Extra task |
|---|---|
| Monday | Write 1–2 blog posts to fill destination URLs for the week (see [[Blog-Plan-90d]]) |
| Wednesday | Refresh 5 older pins (new image, same URL) targeting top-performers |
| Friday | Run [[Weekly-Content-Planning-Workflow]] — review KPIs, update [[Next-7-Days-Priority-Plan]], top up [[Pin-Production-Queue]] |

## After 30 days

When the 75-pin plan is shipped:

1. Run a full retro: top-3 / bottom-3 pins by saves, by outbound clicks, by CTR.
2. Identify which world (Neo Deco, Afrohemian) drove more revenue. Lean into it (per [[KPIs-Tracking]] day-90 protocol).
3. Use [[AI-Prompts]] §7.13 to generate the next 30-day plan.
4. Update [[Existing-Board-Audit]] with new pin counts per board.

See [[Pin-Quality-Checklist]] for the gate, [[Weekly-Content-Planning-Workflow]] for Friday rituals, and [[Pin-Production-Queue]] for what's next.
