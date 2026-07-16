# madtech-website

MadTech company website. Next.js (App Router) with static export, deployed to GitHub Pages.

## Stack

- Next.js 15, React 19, TypeScript
- Plain CSS (no framework), Google Fonts via `next/font`
- Static export (`output: "export"`) — no server runtime needed

## Development

```bash
npm install
npm run dev
```

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the static
export and publishes it to GitHub Pages.

Live: https://iceangel313.github.io/madtech-website/

The `basePath` is set to `/madtech-website` in production (`next.config.ts`). If the
site moves to a custom domain or different host, remove or adjust `basePath`.
