# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal academic website built with Hugo Blox Builder (formerly Hugo Academic theme), deployed on Netlify. The site showcases Liangyu Wu's academic profile, publications, projects, and research interests in experimental particle physics.

## Development Commands

### Build and Development
- **Local development**: `hugo server` (serves at http://localhost:1313)
- **Production build**: `hugo --gc --minify`
- **Build with search**: `hugo --gc --minify && npx pagefind --source 'public'`

### Hugo Version
- Hugo version: 0.136.5 (specified in netlify.toml and hugoblox.yaml)
- Go version: 1.19+ (from go.mod)

## Site Architecture

### Configuration Structure
- **Main config**: `config/_default/hugo.yaml` - core Hugo settings
- **Site parameters**: `config/_default/params.yaml` - appearance, SEO, header/footer
- **Navigation**: `config/_default/menus.yaml`
- **Modules**: `config/_default/module.yaml` - Hugo Blox imports
- **Languages**: `config/_default/languages.yaml`

### Content Organization
```
content/
├── _index.md              # Homepage with landing sections
├── authors/admin/         # Author profile (main user)
├── publication/           # Academic publications
├── project/              # Research projects
├── event/                # Talks and presentations
├── post/                 # News/blog posts
├── teaching/             # Teaching materials
├── experience.md         # Work experience page
└── publications.md       # Publications listing page
```

### Theme and Styling
- Uses Hugo Blox Builder modules for layout blocks
- Tailwind CSS integration via `blox-tailwind` module
- Custom icons in `assets/media/icons/custom/`
- Color theme: blue (configurable in params.yaml)

### Key Features
- **Landing page blocks**: Biography, publications, talks, news sections
- **Academic focus**: Publications with citations, research projects, CV
- **Responsive design**: Mobile-friendly layout
- **Search functionality**: Pagefind integration for site search
- **SEO optimized**: Structured data for academic profiles

### Content Types
- **Publications**: BibTeX citations, featured flags, PDF links
- **Projects**: Research descriptions with images and external links
- **Events**: Conference talks and presentations
- **Posts**: News updates and blog content
- **Authors**: Researcher profiles with detailed academic info

### Deployment
- **Platform**: Netlify
- **Build command**: `hugo --gc --minify -b $URL && npx pagefind --source 'public'`
- **Publish directory**: `public`
- **Branch**: main (auto-deploy from GitHub)

## Important Files to Know
- `content/_index.md`: Homepage layout and sections
- `content/authors/admin/_index.md`: Main author profile with education, work, skills
- `static/uploads/`: PDF files (CV, papers, presentations)
- `netlify.toml`: Deployment configuration
- `hugoblox.yaml`: Hugo version specification for builds