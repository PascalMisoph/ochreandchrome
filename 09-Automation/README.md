# 09-Automation — Render + Post Pipeline

> Local Node scripts that turn the agent layer (`07-Agents/`) from "draft bundles" into "rendered, posted pins" with one human Y/N gate per pin. **Zero browser automation.** Codex CLI handles image generation through your existing ChatGPT subscription; Pinterest API handles posting.

---

## What this folder is

The agent layer (`07-Agents/`) writes pin **bundles** (`bundle.md` + `status.json` per pin). This folder runs the mechanical steps that follow:

```
bundle.md (agent-written)
   ↓
render-pin.mjs        →  Codex CLI    →  pin-final.png  +  status.json: rendered
   ↓
run-daily.mjs (Y/N gate — the only human moment)
   ↓
post-pin.mjs          →  Pinterest API →  posted pin    +  status.json: posted
```

Three commands cover the whole loop:

| Command | What it does | Time |
|---|---|---|
| `npm run render-pin -- P01` | Renders one pin via Codex | ~30 s |
| `npm run daily -- P01 P02 P03` | Renders + Y/N prompt + posts all three | 3–4 min incl. your 30 s/pin approval |
| `npm run post-pin -- P01` | Posts a manually-rendered pin (when you used Codex outside the script) | ~3 s |

---

## First-time setup (~15 minutes)

### 1. Install (10 s)
```bash
cd 09-Automation
npm install
```
Installs one package (`js-yaml`) — that's the only external dep.

### 2. Configure Codex (1 min)
```bash
cp .env.template .env
```
Open `.env`, confirm `CODEX_IMAGE_CMD` matches your actual `codex` command. The default assumes `codex image --prompt-file <FILE> --out <OUTPUT>`. If your codex binary takes a different shape, three example forms are commented in the template — uncomment the one that fits.

**Validate before running for real:**
```bash
npm run render-pin -- P01 --dry-run
```
Prints the exact command it *would* run, including the tempfile path. If the command looks right, drop `--dry-run` and run it for real.

### 3. Register the Pinterest app (~10 min, one-time)
- Go to https://developers.pinterest.com/apps/
- Create app. Name: "Ochre & Chrome Automation" (or whatever).
- Add redirect URI: `http://localhost:8000/callback` (exact match required).
- Copy **client_id** and **client_secret** into `09-Automation/.env`:
  ```
  PINTEREST_CLIENT_ID=...
  PINTEREST_CLIENT_SECRET=...
  ```

### 4. Authorize (30 s)
```bash
npm run auth
```
- Browser opens Pinterest OAuth page automatically.
- Approve the requested scopes (`boards:read`, `pins:read`, `pins:write`, `user_accounts:read`).
- Pinterest redirects to localhost; the script captures the code, exchanges for tokens, and writes them back into `.env` automatically.
- Done — you don't repeat this for ~30 days (refresh-token cycle).

### 5. Map board names to board IDs (~5 min, one-time)
Pinterest's API needs board IDs, not names. After auth, run:
```bash
npm run list-boards
```
You'll see each board name with its ID. Paste the IDs into `08-Integrations/pinterest-board-ids.yaml`:
```yaml
boards:
  "Afrohemian Decor & Interiors": "1234567890123456789"
  "Statement Brass Pendant Lighting": "..."
  ...
```

---

## Daily flow — the new operator UX

```bash
cd 09-Automation
npm run daily -- P01 P02 P03
```

For each pin:

1. **Render** — script calls Codex CLI with the §5 prompt from `bundle.md`. Image lands at `04-Content/pinterest/PENDING/2026-05-19/P01/pin-final.png`. (Skipped if image already exists.)
2. **Show metadata** — title, board, link, cultural-care status, image path printed to your terminal.
3. **Y / N / skip prompt** — you type one character:
   - `y` → status flips to `approved`, script posts to Pinterest, `status.json` updated to `posted` with the returned Pinterest pin ID and URL.
   - `n` → status flips to `rejected`, bundle stays in PENDING for revision.
   - `skip` → no status change; come back later.
4. **Next pin.**

Target time per pin: **5 seconds you spend reading, 1 keypress, ~3 seconds Pinterest API call.** Three pins = ~30 seconds of your active time per day (vs. ~15 minutes manual).

---

## Status state machine

`status.json` in each pin folder tracks the transitions:

```
queued
   ↓ render-pin called
rendering
   ↓ Codex returns                            ↓ Codex errors
rendered                                      render_failed
   ↓ daily Y prompt
approved
   ↓ post-pin called
posting
   ↓ Pinterest API 200                        ↓ API error
posted                                        post_failed
```

The watcher pattern (Stufe 2 from the architecture discussion) is easy to bolt on later — a small script polls `status.json` files for `ready_for_render` and chains them through. Not included today; `npm run daily` covers the same use case interactively.

---

## Safety gates the scripts enforce

- `post-pin.mjs` **refuses** to post if `bundle.md` frontmatter has `cultural_care.required: true` AND `cultural_care.status != PASS`. The cultural-care reviewer (`07-Agents/skills/cultural-care-review/SKILL.md`) is the only role allowed to stamp PASS.
- `render-pin.mjs` **refuses** to overwrite an existing `pin-final.png` unless `--force` is passed. Prevents accidental re-renders that consume Codex subscription quota.
- `post-pin.mjs` **refuses** if `pin-final.png` doesn't exist. Render must complete first.
- Tokens are refreshed automatically when within 5 minutes of expiry. If the refresh fails, the script tells you to re-run `npm run auth`.

---

## Files in this folder

```
09-Automation/
├── package.json
├── README.md                  ← you are here
├── .env.template              ← copy to .env and fill in
├── .gitignore                 ← excludes .env, node_modules/, *.log
└── scripts/
    ├── lib/
    │   ├── env.mjs            ← loads .env into process.env (zero-dep)
    │   ├── log.mjs            ← tiny console+file logger
    │   ├── bundle.mjs         ← parses bundle.md, manages status.json
    │   ├── codex.mjs          ← spawns Codex CLI, handles tempfile + timeout
    │   └── pinterest.mjs      ← Pinterest API client + OAuth refresh
    ├── render-pin.mjs         ← render one pin
    ├── render-pins.mjs        ← batch render
    ├── auth-pinterest.mjs     ← one-time OAuth flow (run with `npm run auth`)
    ├── post-pin.mjs           ← post one pin to Pinterest
    ├── post-pins.mjs          ← batch post
    ├── run-daily.mjs          ← orchestrator: render + Y/N + post
    └── list-boards.mjs        ← prints your board IDs (after auth)
```

---

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| `Codex command: ... ` then no image | Codex CLI command shape wrong | Check actual syntax with `codex --help`; update `CODEX_IMAGE_CMD` in `.env` |
| `Codex timed out` | Codex hung | Bump `CODEX_TIMEOUT_MS`; check Codex auth |
| `Token refresh failed: 401` | Refresh token expired (>60 days inactive) | Re-run `npm run auth` |
| `No Pinterest board ID for "X"` | Board name in bundle doesn't match `pinterest-board-ids.yaml` | Check exact spelling (case + spacing matter); run `npm run list-boards` to compare |
| `Refusing: cultural_care.status is PENDING` | Cultural-care reviewer hasn't stamped PASS yet | Run cultural-care review (manual or via agent skill) before posting |
| Pin posts but image looks low quality | Codex returned suboptimal render | Re-run `npm run render-pin -- P01 --force` |

---

## What this does NOT do

- **Scheduling** — `post-pin.mjs` posts immediately. Pinterest API supports scheduled pins for Business accounts; not wired yet. For now, run `npm run daily` at the time you want pins to go out.
- **Image quality auto-grading** — the production-model gate (5 visual checks from `Pin-Quality-Checklist.md`) is not automated yet. You see the image path; eyeball it before pressing Y.
- **Notion mirroring** — the spec at `08-Integrations/notion-sync.md` is scaffolded but not wired. Add later if you want mobile approval.

---

See also: `07-Agents/README.md` (the skill layer that produces the bundles), `08-Integrations/pinterest-bundle-format.md` (the bundle schema this consumes), `08-Integrations/chatgpt-image-prompt-contract.md` (the prompt variable schema Codex executes against).
