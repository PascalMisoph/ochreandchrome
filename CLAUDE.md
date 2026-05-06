# Ochre & Chrome — Claude Operating Instructions

This directory is the **Ochre & Chrome** Obsidian vault and working folder. Ochre & Chrome is a Pinterest-first editorial interior design publication targeting the 2026 **Neo Deco × Afrohemian** aesthetic intersection. Brand line: **"Design With Depth."**

When working in this repo, always consult the relevant file below before drafting copy, planning content, or making brand decisions. Do not invent brand attributes — they are defined.

## Read this first

If you are an AI agent encountering this vault for the first time, open `[[Start-Here-For-Agents]]`. It is the 10-minute onboarding path. Everything else flows from there.

## Always-on rules

- **Brand voice is non-negotiable.** Read `[[Brand-Voice]]` before writing any user-facing copy. Authoritative, curated, slightly opinionated. Never "vibe", "obsessed", "you guys", "link in bio".
- **Two equal aesthetic worlds.** **Neo Deco** (geometry, glamour, polish) and **Afrohemian** (soul, texture, craft). Afrohemian is **not** a side trend — it carries equal strategic weight. See `[[Neo-Deco-vs-Afrohemian]]`.
- **Cultural care is mandatory** for Afrohemian and Adire content. See `[[Cultural-Care-Guidelines]]`. No "tribal," no "ethnic," no invented origin claims, no authenticity claims on AI-generated visuals.
- **Visuals follow the system** in `[[Color-Palette]]`, `[[Typography]]`, `[[Visual-Direction]]`, and the world-specific guides. Hex codes, fonts, and composition rules are fixed.
- **Pin production runs on ChatGPT Images v2 only.** Pins are generated as **fully-composed designs** (top label + headline + subline + interior image + branded footer + `ochreandchrome.com`) in a single image call using the master prompt in `[[AI-Prompts]]` §7.A. **Do not use Canva** — `[[Canva-Templates]]` is legacy reference only.
- **Six existing Pinterest boards are the operational truth.** Do not create new boards. See `[[Existing-Board-Audit]]`.
- **Affiliate disclosure is mandatory** at the top of every monetized post. See `[[Site-Architecture]]`.
- **Sister brands**: the user runs *catplay* and *pawandsage* in parallel. Do not cross-pollinate voice or visuals between the three. Ochre & Chrome is the editorial/luxury one.

## Where things live

### Brand
| Need | File |
|---|---|
| **Agent onboarding** (read first) | `[[Start-Here-For-Agents]]` |
| Brand name, positioning, audience | `[[Brand-Identity]]` |
| Voice rules, words to use/avoid | `[[Brand-Voice]]` |
| Long-form brand story | `[[Brand-Narrative-Design-With-Depth]]` |
| Two-world relationship | `[[Neo-Deco-vs-Afrohemian]]` |
| Afrohemian/Adire framing rules (mandatory) | `[[Cultural-Care-Guidelines]]` |
| Pinterest bio, profile, board roadmap | `[[Pinterest-Profile]]` |

### Style
| Need | File |
|---|---|
| Hex codes | `[[Color-Palette]]` |
| Fonts and pairings | `[[Typography]]` |
| Universal pin/photo composition | `[[Visual-Direction]]` |
| Canva template specs (12 templates) | `[[Canva-Templates]]` |
| Neo Deco visual rules | `[[Neo-Deco-Visual-Guide]]` |
| Afrohemian visual rules | `[[Afrohemian-Visual-Guide]]` |
| Adire textile visual rules | `[[Adire-Textile-Visual-Guide]]` |
| Brass lighting visual rules | `[[Brass-Lighting-Visual-Guide]]` |
| Logo mood + use rules | `[[Logo-Reference]]` |

### Website
| Need | File |
|---|---|
| Site pages, slugs, post structure | `[[Site-Architecture]]` |
| Frontend art-direction (for Codex) | `[[Frontend-Art-Direction]]` |
| Homepage mockup notes | `[[Homepage-Mockup-Review]]` |

### Content & calendar
| Need | File |
|---|---|
| Pillar system (8 pillars under 2 worlds) | `[[Content-Pillars]]` |
| Neo Deco pillar deep-dive | `[[Neo-Deco-Content-Pillar]]` |
| Afrohemian pillar deep-dive | `[[Afrohemian-Content-Pillar]]` |
| Adire textiles sub-pillar | `[[Adire-Textiles-Content-Pillar]]` |
| Brass & lighting sub-pillar | `[[Brass-Lighting-Content-Pillar]]` |
| **30-day, 75-pin operational plan** | `[[30-Day-Pinterest-Content-Plan]]` |
| 7-day evergreen rotation | `[[Pinterest-Calendar]]` |
| 90-day blog plan (45 posts) | `[[Blog-Plan-90d]]` |
| 75 reusable headline formulas | `[[Headline-Formulas]]` |
| Pinterest best practices 2026 | `[[Pinterest-Best-Practices-2026]]` |
| The 6 real Pinterest boards | `[[Existing-Board-Audit]]` |
| Board expansion roadmap | `[[Board-Strategy]]` |
| Live pin queue (rolling 10) | `[[Pin-Production-Queue]]` |
| This-week priorities | `[[Next-7-Days-Priority-Plan]]` |

### Affiliates
| Need | File |
|---|---|
| Networks, application copy, link cloaking | `[[Affiliate-Programs]]` |
| Categories, selection checklist, examples | `[[Product-System]]` |

### Operations
| Need | File |
|---|---|
| Reusable AI prompts (blog, pin, image, Canva, cultural-care, handoff) | `[[AI-Prompts]]` |
| Day-0 setup | `[[Setup-Checklist]]` |
| First 72 hours hour-by-hour | `[[First-72-Hours]]` |
| KPIs, dashboards, benchmarks | `[[KPIs-Tracking]]` |
| Per-day pin production rhythm | `[[Daily-Pin-Production-Workflow]]` |
| Per-pin quality gate | `[[Pin-Quality-Checklist]]` |
| Friday weekly review ritual | `[[Weekly-Content-Planning-Workflow]]` |
| Handoff message for fresh agents | `[[Agent-Handoff-Prompt]]` |

## Default behaviors when asked to draft content

1. **New pin** → pull next pin from `[[Pin-Production-Queue]]`, follow `[[Daily-Pin-Production-Workflow]]`, gate with `[[Pin-Quality-Checklist]]`. Image prompt from `[[AI-Prompts]]` §7.7–7.10. Cultural-care audit (§7.14) for Afrohemian/Adire content.
2. **Blog post** → use prompt structure in `[[AI-Prompts]]` §7.1, voice from `[[Brand-Voice]]`, post template from `[[Site-Architecture]]`.
3. **Pin copy from existing post** → headline from `[[Headline-Formulas]]`; description rules in `[[Brand-Voice]]` §3.2.
4. **Product card** → exact format in `[[Product-System]]`. Include "Why we like it" + structural reason, never just "I love this".
5. **Image prompt for Midjourney** → use the world-specific prompt in `[[AI-Prompts]]` §7.7 (Afrohemian), §7.8 (Neo Deco), §7.9 (Adire), §7.10 (Brass Lighting).
6. **Fresh pin from a new keyword** → use `[[AI-Prompts]]` §7.11 (one-pin spec generator).
7. **Repurposing a blog post into 8 pins** → use `[[AI-Prompts]]` §7.12.
8. **Weekly content plan** → use `[[Weekly-Content-Planning-Workflow]]`; AI prompt in §7.13.
9. **Handoff to a new agent** → use `[[Agent-Handoff-Prompt]]`.

## Do not

- Do not create new top-level folders without asking.
- Do not create new Pinterest boards. The 6 existing boards are the strategy. See `[[Existing-Board-Audit]]` and `[[Board-Strategy]]`.
- Do not write marketing copy outside the voice rules.
- Do not recommend products that fail the `[[Product-System]]` selection checklist.
- Do not use cursive/script fonts, neon colors, generic 3D-rendered rooms, or "boho-chic" terminology (use **Afrohemian**).
- Do not use "tribal," "ethnic," or invented cultural origin claims. See `[[Cultural-Care-Guidelines]]`.
- Do not claim AI-generated images are authentic artisan work.
- Do not cite Pinterest as the trend authority — frame trends as cultural and editorial movements.
- Do not treat Afrohemian as a side trend.
- Do not ship a pin that fails `[[Pin-Quality-Checklist]]`.
