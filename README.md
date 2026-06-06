# Qinpeng Personal Site

An Astro 6 personal site prototype for writing, works, lab notes, and interactive visual experiments.

## Commands

```bash
npm install --legacy-peer-deps
npm run dev
npm run build
npm run preview
```

Local dev runs at `http://localhost:4321` by default.

## Content

Writing lives in `src/content/writing`. Add Markdown or MDX files with frontmatter:

```md
---
title: "Post title"
description: "Short summary"
date: 2026-06-06
tags: ["site"]
draft: false
---
```

## Legacy Migration

The previous Hexo-generated GitHub Pages site from `https://qpwlkq.github.io/` is preserved under `public/`.

Important legacy paths still work after build:

- `/archives/`
- `/category/`
- `/tag/`
- `/2019/...`, `/2020/...`, `/2021/...`, `/2026/...`
- legacy assets under `/css/`, `/js/`, `/fonts/`, and `/image/`

The new Astro site owns `/`, `/about`, `/writing`, `/works`, `/lab`, and `/now`.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds `dist` and deploys it to GitHub Pages. It automatically sets Astro's `base` path for project pages, while keeping root user pages such as `username.github.io` at `/`.
