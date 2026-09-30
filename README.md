# Ismail Ourdou — Portfolio

Bilingual portfolio built with Next.js, React, TypeScript, Tailwind CSS, Framer Motion, and React Three Fiber.

## Local development

```bash
pnpm install
pnpm dev
```

## Quality checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```

The production build is a static export written to `out/`.

## GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` automatically builds and deploys the site whenever `main` is updated. It derives the GitHub Pages base path from the repository name, so images, the CV preview, and the downloadable PDF work from a project URL such as:

`https://g0ne-i.github.io/portfolio-/`

In the GitHub repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
