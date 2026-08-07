# Titus Vimal Raj — Resume Site

Animated Tech Slate resume site built with Gatsby. Includes a downloadable, designed PDF resume for recruiters.

## Stack

- Gatsby 5 + React 18 + TypeScript
- Framer Motion
- Static PDF via `@react-pdf/renderer`
- Netlify-ready (`netlify.toml`)

## Local development

```bash
npm install
npm run generate-pdf   # regenerates static/resume.pdf
npm run develop
```

Open [http://localhost:8000](http://localhost:8000).

## Build

```bash
npm run build
npm run serve
```

## Netlify

1. Push this repo to GitHub.
2. Create a new Netlify site from the repo.
3. Build command: `npm run build` (already in `netlify.toml`)
4. Publish directory: `public`

Or CLI:

```bash
npm run build
npx netlify deploy --prod --dir=public
```

## Content updates

Edit [`src/data/resume.ts`](src/data/resume.ts), then run:

```bash
npm run generate-pdf
```

Site and PDF stay in sync from that single source.
