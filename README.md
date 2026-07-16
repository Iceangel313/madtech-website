# madtech-website

Static site for MadTech — mirror of the official site served at https://madtech.it (hosted on the company VPS behind Caddy, web root `shared-services/madtech-www`).

## Structure

- `site/` — plain static HTML (self-contained pages, inline CSS, no build step)
  - `index.html` — homepage: chi siamo, servizi, team, contatti
  - `team.html` — team page
  - `robots.txt`, `sitemap.xml` — point to the canonical host `madtech.it`

## Deploy

Every push to `main` publishes `site/` to GitHub Pages via `.github/workflows/deploy.yml`. No build step.

The canonical host is **madtech.it**; all pages carry `rel="canonical"` pointing there, so the Pages copy does not compete with the official site in search results.

To update: edit the files under `site/` (keep them in sync with the VPS web root) and push.
