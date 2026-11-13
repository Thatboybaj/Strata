# STRATA — Astro theme for architecture studios

An editorial, chapter-based website for architecture and landscape studios that put the site ahead of the building. Every project is an *expedition*.

**Pages:** Home · About · Services (method) · Expeditions (filterable) · Expedition detail · Contact (working form) · Privacy · 404

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in ./dist
```

## Editing content

| What | Where |
| --- | --- |
| Expeditions (projects) | `src/content/expeditions/*.yaml` — one file per expedition |
| Team and field season | `src/data/studio.ts` |
| Services / method phases | `src/data/method.ts` |
| Studio email, phone, contact form endpoint | `src/data/site.ts` |
| Colours, type, grid | `src/styles/global.css` (`:root` tokens) |
| Images | `src/assets/images/` (optimised automatically to WebP) |

### Contact form
Set `formAction` in `src/data/site.ts` to a Formspree, Web3Forms or Basin endpoint. Left empty, the form opens the visitor's email app with the entry pre-filled.

## Deploy on Vercel
1. Push this folder to a GitHub repository.
2. In Vercel, **Add New → Project**, import the repository. Vercel detects Astro; keep the defaults (build `npm run build`, output `dist`).
3. Update `site` in `astro.config.mjs` to your final domain.

## Fonts
Inter Tight, Fraunces and Geist Mono, self-hosted via Fontsource (SIL Open Font License).

## License
See `LICENSE`.
