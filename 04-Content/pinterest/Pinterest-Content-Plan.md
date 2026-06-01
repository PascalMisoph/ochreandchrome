---
id: pinterest-content-plan
type: plan
scope: pinterest
agent_readable: true
canonical_for: [pinterest-pin-program, article-to-pin-map, pin-cadence]
last_verified: 2026-06-01
location_note: "Pinterest content moved here from 99-Inbox/pins/ on 2026-06-01. Bundles live under ./PENDING/{date}/{PIN_ID}/ and are promoted to ./APPROVED/ on release."
---

# Pinterest Content Plan

Home for the live Pinterest pin program: the content plan plus the pin bundles themselves. Bundles live under `PENDING/{date}/{PIN_ID}/` (and move to `APPROVED/` once scheduled). Upstream strategy: [[Affiliate-Content-Opportunities]] (clusters + articles + cloak map). Boards: [[Existing-Board-Audit]]. Bundle schema: [[pinterest-bundle-format]]. Pin design default: full-bleed §7.B in [[AI-Prompts]].

## Folder shape

```
04-Content/pinterest/
├─ Pinterest-Content-Plan.md          ← this file
├─ _run-summary-article-1-rattan.md   ← per-article production summaries
├─ PENDING/{YYYY-MM-DD}/{PIN_ID}/      ← bundle.md + status.json (+ pin-final.png after render)
└─ APPROVED/{YYYY-MM-DD}/{PIN_ID}/     ← operator moves folder here after scheduling
```

## Cadence

**2 pins/day.** Each launch article gets up to 8 repurposed pins (distinct angle + description, full-bleed §7.B). Posting waits until the article's destination URL returns 200 on production.

## Article → pin program

| Article | Status | Pins | Boards | Bundles |
|---|---|---|---|---|
| 1 · Woven Rattan Pendants | published (branch) · **deploy pending** | 8 (A1P1–A1P8) | Afrohemian ×6, 2026 Trends ×2 | `PENDING/2026-06-02..05/` |
| 2 · Neo Deco Statement Lighting | published (branch) | pins TBD | Statement Brass Pendant Lighting, Neo Deco | — |
| 3 · Natural Fiber Rug Guide | drafting | pins TBD | Afrohemian | — |
| 4 · Why Burl Wood Is Back | drafting | pins TBD | Neo Deco, 2026 Trends | — |
| 5 · Afrohemian Vessels & Baskets | drafting | pins TBD | Afrohemian | — |

## Article 1 — pin slate (live)

See `_run-summary-article-1-rattan.md` for the full table. 8 pins, 2/day across 2026-06-02 → 06-05, angles: listicle · mistake · shop-the-look · comparison · moodboard · trend · how-to · before/after. All cultural-care self-audit PASS; **blocked on production deploy** before posting.

## Legacy bundles

`PENDING/2026-05-19/` and `PENDING/2026-05-20/` are earlier P01/P02-era bundles migrated from `99-Inbox/pins/` — left in place for history.

## Next

- Merge Article 1 PR to main → confirm `/journal/woven-rattan-pendant-lights/` is 200 → render + post A1P1/A1P2.
- Repurpose Articles 2–5 into 8 pins each once their URLs are live.
