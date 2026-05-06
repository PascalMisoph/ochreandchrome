# Ochre & Chrome Astro Site

Astro implementation of the Ochre & Chrome homepage using the generated image-to-code asset pack as the source of truth.

## Commands

- `npm.cmd install`
- `npm.cmd run build`
- `npm.cmd run dev -- --host 127.0.0.1 --port 4321`
- `npm.cmd run preview -- --host 127.0.0.1 --port 4321`

If PowerShell blocks `npm`, use `npm.cmd`.

## Content

Future blog posts live in `src/content/journal` as Markdown files with frontmatter:

```md
---
title: "Post title"
description: "Short SEO description."
publishDate: 2026-04-29
category: "Neo Deco"
image: "/homepage-generated-assets-hires/guide-layering-like-a-designer.png"
---

Post body here.
```

The generated homepage assets are served from `../../assets` via `astro.config.mjs`.
