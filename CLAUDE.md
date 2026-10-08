# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal academic website of Liangyu Wu (experimental particle physics, Stanford / SLAC).
Live at https://liangyu5wu.github.io.

The working branch `site` is a **zero-build static site** — plain HTML, CSS and vanilla
JavaScript, served directly by GitHub Pages. The old Hugo Blox Builder version is preserved
on the `main` branch; do not edit Hugo files there unless explicitly asked.

## Development

- **Local preview**: `python3 -m http.server 8000`, then open http://localhost:8000
- **No build step**: edit, commit, push to `site`.
- **Sanity check after edits**: `node --check js/render.js` and load `js/data.js` in node
  (`global.window={}; require("./js/data.js")`) to catch syntax errors and broken slugs.

## Structure

```
index.html        # single-page app shell (navbar, #app mount point, footer)
css/style.css     # all styling; dark/light themes via CSS variables
js/data.js        # single content source: window.SITE = { profile, education, work,
                  #   publications, projectGroups, projects, talks, news, teaching, ... }
js/render.js      # rendering + hash routing + particle-collision hero
js/theme.js       # dark/light toggle (localStorage)
assets/content/   # images for publications, projects, talks, news, teaching
assets/media/     # avatar, favicon, section backgrounds, icons
uploads/          # PDFs (CV, slides, thesis)
```

## Routing (hash-based, in `render.js`)

`#/` home · `#about` etc. home anchors · `#/publications`, `#/publication/<slug>` ·
`#/projects`, `#/project/<slug>` · `#/talks`, `#/talk/<slug>` · `#/teaching[/<slug>]` ·
`#/news[/<slug>]` · `#/cv` · `#/tag/<tag>`

## Content Conventions (`js/data.js`)

- Every item has a unique `slug`; detail pages are looked up by slug.
- Publication `authors`: use `"admin"` for Liangyu (rendered bold).
- `body` / `about` fields are raw HTML strings; `summary` / `abstract` are escaped text.
- Images go in `assets/content/` and are referenced by relative path.
- `tags` are clickable and aggregate across all content types on `#/tag/<tag>`.

### Projects

- `projectGroups` (`{ name, logo }`) sets the section order on the Projects page; each
  project's `group` must match a group `name`. `logo` is an optional image path (or array of paths). Within a group, projects appear in array order.
- Publications and talks link to projects via `project: "<slug>"` or an array of slugs.
  Project detail pages list linked publications/talks automatically, and pub/talk pages show
  a "Related project" pill per linked project.
- When renaming or merging a project slug, update every `project:` reference and add the
  old slug to `PROJECT_ALIASES` in `render.js` so previously shared links keep working.
- Profile `research` text and `work` bullets describe projects in prose — keep them in sync
  when projects change meaningfully.
