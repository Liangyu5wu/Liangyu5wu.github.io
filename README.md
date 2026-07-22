# Liangyu Wu — Academic Website

Personal academic website showcasing research interests, publications, projects,
talks, and professional experience in experimental particle physics.

**Live site:** [https://liangyu5wu.github.io](https://liangyu5wu.github.io)

## How it works

This branch (`site`) is a **zero-build static site** — plain HTML, CSS, and
vanilla JavaScript, no framework or build step. GitHub Pages serves it directly.

```
index.html        # single-page app shell (navbar, mount point, footer)
css/style.css      # all styling; dark/light themes via CSS variables
js/data.js         # single content source (publications, talks, projects, …)
js/render.js       # renders sections + hash routing + particle-collision hero
js/theme.js        # dark/light toggle (persisted in localStorage)
assets/            # images, icons, avatar, favicon
uploads/           # PDFs (CV, slides, thesis)
.nojekyll          # tell GitHub Pages to serve files as-is (skip Jekyll)
```

## Editing content

Add a publication / talk / project / news item / course by editing the
corresponding array in `js/data.js`. Drop any images into `assets/content/`
and reference them by relative path. No rebuild needed — commit and push.

## Local preview

```bash
python3 -m http.server 8000     # then open http://localhost:8000
```

## History

The previous Hugo Blox Builder version is preserved on the `main` branch.
