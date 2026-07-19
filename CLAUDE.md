# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Alejandro Fontan's personal academic website (`alejandrofontan.github.io`), hosted via GitHub Pages. It is a
hand-built static site (HTML/CSS/vanilla JS) — **not** a real Jekyll site, despite the Jekyll scaffolding present.

## Commands

- Local preview: `bundle exec jekyll serve` (uses the Gemfile / `_config.yml`). This just serves the static files;
  it does not template them meaningfully (see Architecture below).
- No JS package manager, build step, linter, or test suite exists in this repo. There is nothing to `npm install`
  or `npm test`.
- Deployment is automatic: GitHub Pages builds and publishes on every push to `main` (repo is `*.github.io`, no
  `.github/workflows` CI config). Pushing to `main` **is** the deploy.

## Architecture

**Jekyll is vestigial.** `_config.yml`, `index.md`, `about.md`, and `_posts/` are unmodified default scaffolding
from the `minima` theme (`_config.yml` still literally says `title: Your awesome title`). The real content pages
are the top-level `.html` files (`index.html`, `bio.html`, `publications.html`, `code.html`, `students.html`,
`404.html`), which are static HTML consumed directly by GitHub Pages — do not confuse the `.md`/Jekyll files with
the actual site.

**Runtime template pattern.** Every real page ships empty containers (`<header id="header">`, `<tbody>` inside
`<table id="tableConferences">`, etc.) and populates them client-side via plain JS on page load. There is no
server-side or build-time templating — all rendering happens in the browser. The pattern repeats across pages:

1. `assets/js/build-header-footer.js` — injects the shared header/nav/footer into every page (single source of
   truth for site chrome, nav links, and social icons). Runs unconditionally at the bottom of the script (calls
   `buildHeadFootNav(...)` itself), included via `<script>` tag on every page.
2. A page-specific data file under `publications/*.js` defines a plain JS array/object of content (e.g.
   `pubConferences`, `pubWorkshops`, `pubNews`, `pubCode`, `journalVenues`).
3. A page-specific `assets/js/build-*.js` reads that data and writes HTML into the page's placeholder elements:
   - `build-publication.js` — fills publication `<table>`s (`buildTable(data, tableId)` / `addTableRow`), used by
     `publications.html` for conferences/workshops/journals/etc.
   - `build-news.js` — fills the homepage news feed and wires up the `poptrox` lightbox for news images.
   - `build-opensource.js` — fills `code.html` project cards, including live GitHub star/fork buttons.
   - `build-talks.js` — analogous builder for the talks list.

**Editing content = editing data files, not HTML.** To add/change a publication, news item, or code project, edit
the corresponding array in `publications/*.js` (`conferences.js`, `conferencesCoauthor.js`, `conferencesOther.js`,
`workshops.js`, `journals.js`, `news.js`, `code.js`, `talks.js`, `preprints.js`, `other.js`). Follow the existing
object shape in that file (`authors`, `title`, `venue`, `thumbimage`, `thumblink`, `year`, `pages`, `links`, and
optional `awards`/`stars`/`citations` for publications; `title`/`date`/`image`/`thumb`/`caption` for news). Several
of these files have most entries commented out — check whether an entry should be live or left as a commented
placeholder before adding near it.

- `build-publication.js` auto-bolds Alejandro Fontan's name when it matches specific casings/formats
  (`"a. fontan"`, `"alejandro fontan"`, `"fontan, a."`, `"fontan, alejandro"`, case-insensitive) — use one of
  those exact forms in an `authors` array for the bolding (and optional `sharedfirst` asterisk) to apply.
- Journal/conference venue strings are looked up from a `*Venues` object keyed by short code (e.g.
  `conferenceVenues["IROS"]`) at the top of the corresponding data file — reuse an existing key or add a new one
  there rather than inlining venue strings.
- News thumbnails/images live in `images/news/`; publication thumbnails in `images/publications/`; open-source
  project images in `images/code/`.

**Styling.** `assets/css/main.css` is compiled from `assets/sass/main.scss` (based on the HTML5 UP "Strata"
template). `.sass-cache/` and `.jekyll-cache/` are build caches; `_site/` is Jekyll's generated output — none of
these are hand-edited, and `_site/` in particular is a stale mirror of the real top-level HTML files.
