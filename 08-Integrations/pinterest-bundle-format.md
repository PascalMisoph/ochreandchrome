---
id: pinterest-bundle-format
type: integration-contract
scope: pinterest
agent_readable: true
canonical_for: [pin-bundle-schema, paste-ready-pin-packet]
required_for: [produce-daily-pin-bundle, repurpose-post-to-8-pins]
last_verified: 2026-05-18
---

# Pinterest Bundle Format

> The exact shape of a single approved-ready pin bundle. Optimised for **copy-paste into Pinterest web UI** — no API, no automation. The operator opens the bundle, generates the image, then pastes each field into Pinterest in <3 minutes.

## File location

> **Moved 2026-06-01.** Pinterest content now lives under `04-Content/pinterest/` (with the Pinterest content plan), not `99-Inbox/`. The lifecycle subfolders (`PENDING`/`APPROVED`) and per-pin folder shape are unchanged.

```
04-Content/pinterest/PENDING/{YYYY-MM-DD}/{PIN_ID}/
    bundle.md       ← agent writes here (the spec)
    status.json     ← lifecycle state machine (queued | rendering | rendered | approved | posted | …)
    pin-final.png   ← rendered image (written by 09-Automation/render-pin.mjs)
    render.log      ← Codex CLI stdout/stderr (written by render-pin)
```

Operator promotes by moving the whole folder:

```
04-Content/pinterest/APPROVED/{YYYY-MM-DD}/{PIN_ID}/      ← operator moves the folder here to release
```

`{PIN_ID}` is the queue ID (e.g. `P01`, `P02`). `{YYYY-MM-DD}` is the scheduled publish date.

> **Migrated on 2026-05-19.** The earlier flat-file format (`{PIN_ID}.md` as a single file at the date level) was superseded when the automation layer landed — the per-pin folder houses the bundle alongside its rendered image and status. Existing bundles were migrated; new bundles must use the folder form.

## Bundle schema (YAML frontmatter + markdown body)

```markdown
---
pin_id: P01
queue_row: 18
scheduled_date: 2026-05-19
scheduled_time: 09:00-CET
pillar: neo-deco               # neo-deco | afrohemian | adire | brass | trends | fusion
aesthetic_world: Neo Deco       # matches {AESTHETIC_WORLD} in image prompt
primary_board: Neo Deco Living Room Design
secondary_board: Ochre & Chrome — All Pins
destination_url: https://www.ochreandchrome.com/journal/neo-deco-revival/
destination_status: 200         # 200 | 404 | placeholder
keyword_primary: neo deco interior design
keywords_secondary:
  - modern art deco living room
  - red marble styling
  - velvet sofa living room
headline_formula_id: 61         # row in Headline-Formulas.md
difficulty: medium              # easy | medium | high
cultural_care:
  required: false               # true if pillar ∈ {afrohemian, adire} OR triggers per roles.yaml
  status: NOT_APPLICABLE        # NOT_APPLICABLE | PASS | FAIL | PENDING
  reviewer: null                # filled by cultural-care-reviewer if required
  notes: null
quality_gate:
  metadata_pass: true
  production_model_pass: PENDING_IMAGE_GEN   # PENDING_IMAGE_GEN | PASS | FAIL
  failed_checks: []
created_by: pin-producer
created_at: 2026-05-18T07:08:00Z
voice_anchor: Drafts/02-afrohemian-decor.md
status: PENDING                  # PENDING | APPROVED | SHIPPED | BLOCKED
---

# {PIN_ID} — {Working title for operator reference}

## 1. Pin title (≤40 chars)
> The Neo Deco Revival

## 2. On-image text (baked into image by ChatGPT Images v2)

- **Category label** (Zone 1): `NEO DECO  ·  TREND REPORT`
- **Headline** (Zone 2): `The Neo Deco Revival`
- **Subline** (Zone 3, optional, no period): `Modern Art Deco for 2026`

## 3. Pin description (300–500 chars, paste verbatim)

> Neo Deco is modern Art Deco for the post-minimalist home. Velvet, brass, fluted glass, red marble — held with cinematic restraint. Here's how to integrate the trend in a 2026 living room without it reading as 1980s pastiche. #NeoDeco #ModernArtDeco #InteriorDesign2026

## 4. Alt text (paste verbatim, ≤2 sentences)

> An editorial Pinterest pin showing a Neo Deco living room with a deep burgundy velvet sofa, a brass fan-arch mirror, and a red marble side table under warm cinematic lighting.

## 5. Image generation — runnable §7.A prompt

```
A complete, publication-ready editorial Pinterest pin design for the brand Ochre & Chrome. Vertical 2:3 aspect ratio, 1000 by 1500 pixels, mobile-first text hierarchy, premium interior-design-magazine feeling.

Layout, top to bottom (5 zones):
1. Top category label zone (≈8% of height). A small uppercase tracked-out label set in a clean modern sans... Text: NEO DECO  ·  TREND REPORT.
2. Headline zone (≈18%). A large editorial serif headline in Playfair Display feeling, weight bold, in deep navy #1A2A3A... Text: The Neo Deco Revival.
3. Optional subline zone (≈6%). Upright sans, never italic, no terminal period... Text: Modern Art Deco for 2026.
4. Hero interior image zone (≈55%). {IMAGE_BRIEF from §7.8 Neo Deco — filled here}.
5. Branded footer banner zone (≈13%). Solid warm-cream #F7F5F0 banner, "Ochre & Chrome" in Playfair Display, "ochreandchrome.com" in Montserrat all-caps tracked.

(... full §7.A block continues — agent expands the full prompt verbatim with the variables substituted ...)
```

## 6. Operator checklist (paste-flow into Pinterest)

```
[ ] Image generated and downloaded
[ ] Image filename: P01-2026-05-19.png
[ ] Title pasted (40 chars or fewer)
[ ] Description pasted (300+ chars)
[ ] Alt text pasted
[ ] Destination URL pasted
[ ] Primary board selected: Neo Deco Living Room Design
[ ] Secondary board selected: Ochre & Chrome — All Pins
[ ] Scheduled time set: 2026-05-19 09:00 CET
[ ] Posted/Scheduled
```

## 7. Save angle (one line — why a Pinterest user saves this)

> Reader wants to redo their living room in modern Art Deco without making it feel costume — this pin promises the *rules*, not just the look.

## 8. Post-ship updates (operator fills after posting)

- `pinterest_pin_id`:
- `posted_at`:
- `analytics.day_30.impressions`:
- `analytics.day_30.outbound_clicks`:
- `analytics.day_30.saves`:
- `analytics.day_30.ctr`:

---

## Notes & dependencies

- Image prompt = `06-Operations/AI-Prompts.md` §7.A filled per `08-Integrations/chatgpt-image-prompt-contract.md`.
- Boards = `04-Content/Existing-Board-Audit.md` (do not invent boards).
- Quality gate = `06-Operations/Pin-Quality-Checklist.md`.
- Cultural care (if required) = `01-Brand/Cultural-Care-Guidelines.md` + `99-Inbox/cultural-review-notes/{PIN_ID}.md`.
```

## Why this format

- **YAML frontmatter** so agents can grep status fields (`status: PENDING`, `cultural_care.status: PASS`) without parsing prose.
- **Sections numbered 1–8** so the operator's eye follows the same order every time.
- **Image prompt expanded inline** so the operator can paste it without re-deriving — the whole point is *not* to re-author at paste time.
- **Operator checklist (§6)** in the file itself so the bundle is self-contained — no second tab needed.
- **§8 post-ship updates** keep analytics tied to the bundle, so a future skill can re-read it for the weekly KPI digest.

## Operator's 3-minute paste flow (target)

```
0:00  Open .md bundle
0:10  Copy §5 prompt → ChatGPT Images v2 → generate
1:30  Image done; download
1:40  Pinterest web UI → Create Pin → upload image
2:00  Paste §1 title, §3 description, §4 alt text
2:20  Set destination URL from frontmatter
2:30  Apply boards from frontmatter (primary + secondary)
2:40  Set scheduled time from frontmatter
2:50  Click Schedule
3:00  Move bundle from PENDING/ to APPROVED/
```

If the flow takes >5 minutes per pin, the bundle format is failing — file an issue and revise this contract.

## Anti-patterns

- ❌ Linking to a 404 destination. The producer skill must validate `destination_status: 200` before writing the bundle.
- ❌ Mismatched headline between Zone 2 (image) and §1 (Pinterest title). Pinterest title should match or be a tighter version.
- ❌ Variant descriptions across multiple bundles for the same blog URL (Pinterest deprioritises). The producer skill varies descriptions automatically.
- ❌ Hashtags > 3. Pinterest deprioritises hashtag-heavy descriptions in 2026.

See also: `08-Integrations/chatgpt-image-prompt-contract.md`, `08-Integrations/notion-sync.md`, `06-Operations/Pin-Quality-Checklist.md`, `04-Content/Pinterest-Best-Practices-2026.md`.
