# Cherepanova Tattoo — Studio Landing Page

A production-ready, SEO-optimised landing page for a tattoo artist based in Warsaw. Built as a multilingual single-page application with a separate aftercare guide and contacts page. Designed for a European audience — clean, minimal, conversion-focused.

**Live site:** [https://cherepanova.tattoo/](cherepanova.tattoo)

---

## Features

- **Multilingual (i18n)** — English and Polish via `next-intl`. Route-based locale switching (`/en`, `/pl`) with `hreflang` alternates and SEO-correct canonical URLs.
- **SEO-first** — Per-page `<Metadata>`, Open Graph, Twitter Cards, `robots.txt`, `sitemap.xml`. JSON-LD structured data: `TattooParlor` schema on the homepage, `FAQPage` schema in the FAQ section.
- **Dark / Light theme** — System-aware default with manual toggle, powered by `next-themes`.
- **Static export** — Fully static output (`next export`), deployable to any CDN (Vercel, Netlify, S3 + CloudFront).
- **Accessible UI** — Radix UI primitives (Accordion, Sheet, Select), keyboard-navigable, ARIA-correct.

## Pages

| Route | Description |
|---|---|
| `/[locale]` | Main landing page (all sections) |
| `/[locale]/contacts` | Booking / contact form page |
| `/[locale]/aftercare` | Tattoo aftercare guide |
| `404` | Custom not-found page |

## Sections (main page)

Hero → Works Gallery → About → Why Me → Process → Pricing → Reviews → FAQ → Instagram → Contacts → Final CTA

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16, App Router, static export |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4, `clsx`, `tailwind-merge`, CVA |
| Components | shadcn/ui, Radix UI |
| Icons | @tabler/icons-react |
| i18n | next-intl 4 |
| Theme | next-themes |
| React | React 19 |

## Running locally

```bash
npm install
npm run dev      # dev server → http://localhost:3000
npm run build    # static export → /out
npm run lint     # ESLint
```
