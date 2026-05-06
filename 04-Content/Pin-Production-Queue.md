# Pin Production Queue

A live working file. Operators check the next 7–10 pins, produce them, mark them shipped, and move on. The full 30-day plan is in [[30-Day-Pinterest-Content-Plan]] — this is the *near-term* execution surface.

## Status legend

- `[ ]` queued, not started
- `[~]` in production (image generated, Canva in progress)
- `[✓]` shipped (uploaded, scheduled, metadata applied)
- `[!]` blocked (waiting on product, waiting on blog post, etc.)

## Next 10 pins (rolling)

Update this list every Friday during the weekly review.

| Status | ID | Day | Pillar | Title (truncated) | Board | Difficulty |
|---|---|---|---|---|---|---|
| [ ] | P01 | 1 | Neo Deco | The Neo Deco Revival | Neo Deco Living Room Design | medium |
| [ ] | P02 | 1 | Afrohemian | What Is Afrohemian, Really? | Afrohemian Decor & Interiors | medium |
| [ ] | P03 | 2 | Brass | 7 Brass Pendants Under $300 | Statement Brass Pendant Lighting | easy |
| [ ] | P04 | 2 | Adire | What Is Adire? | Authentic Adire Fabric & Textiles | medium |
| [ ] | P05 | 3 | Afrohemian | How to Layer Like a Designer | Afrohemian Decor & Interiors | medium |
| [ ] | P06 | 3 | Neo Deco | 10 Velvet Sofas | Neo Deco Living Room Design | medium |
| [ ] | P07 | 4 | Trends | Say Goodbye to White Quartz | 2026 Home Decor Trends | easy |
| [ ] | P08 | 4 | Afrohemian | Shop the Afrohemian Bedroom | Afrohemian Decor & Interiors | medium |
| [ ] | P09 | 5 | Adire | Authentic Adire vs. Inspired | Authentic Adire Fabric & Textiles | high |
| [ ] | P10 | 5 | Brass | How to Hang a Pendant | Statement Brass Pendant Lighting | medium |

## Daily checklist (per pin)

For each pin moving from `[ ]` to `[✓]`:

1. Read the pin spec in [[30-Day-Pinterest-Content-Plan]].
2. Confirm destination URL exists (or seed the blog post — [[AI-Prompts]] §7.1).
3. Generate Midjourney image using the prompt in the spec.
4. Open Canva, choose the template named in the spec, drop the image.
5. Apply title overlay per spec. Apply `ochreandchrome.com` watermark.
6. Export at 1000 × 1500.
7. Upload to Pinterest. Apply title, description, alt text, primary board, AllPins as secondary.
8. Run [[Pin-Quality-Checklist]] gate. If any item fails, do not schedule.
9. Schedule for the assigned day. Mark shipped.

## Blocked pins

Track here. Common blockers:

- **Waiting on blog post.** The destination URL doesn't exist yet. Block the pin until the post is published.
- **Waiting on affiliate approval.** Brass roundups can't ship until CB2 / Lulu & Georgia / Lumens links are live.
- **Cultural-care audit pending.** Adire and Afrohemian comparison pins must pass [[AI-Prompts]] §7.14 before scheduling.

| ID | Reason | Owner | Unblock by |
|---|---|---|---|
| (none yet) | | | |

## Backlog beyond 10

Pull from [[30-Day-Pinterest-Content-Plan]] in order. Don't skip ahead unless a pin is blocked.

See [[Daily-Pin-Production-Workflow]] for the per-day rhythm and [[Next-7-Days-Priority-Plan]] for the current week's emphasis.
