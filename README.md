# Ascension Moving Co. — Website

Official website for Ascension Moving Co. (Traverse City, MI). Built with Astro + Tailwind CSS, deployed on Vercel.

---

## The One Rule You Must Remember

> **Everything you edit lives in `src/` (pages, components, content) and `public/` (photos & files).**
>
> `dist/` is the **build output** — it is regenerated on every build. Never edit files inside `dist/`.

How the build works:

```
 src/pages/*.astro      (pages + form)    ─┐
 src/components/*.astro (sections)         │
 src/data/*.ts          (text content)     ├──▶  npm run build  ──▶  dist/  ──▶  Vercel  ──▶  Live site
 src/assets/            (icons, images)    │
 public/                (photos, favicons) ┘
```

---

## Folder Map

```
◄── EDIT HERE ───────────────────────────────────────────────────────►

 src/
 ├── pages/                 The site's pages (each file = one URL)
 │   ├── index.astro          Homepage
 │   ├── about-us.astro       About page
 │   ├── contact-us.astro     Contact page
 │   ├── services/            One page per service (9 files)
 │   ├── service-area/        Local area pages (Traverse City, Kalkaska, Kingsley)
 │   └── api/send-quote.ts    ⭐ Quote-form endpoint (sends the email)
 ├── components/            Page sections and UI pieces
 │   ├── hero/                Banners + quote form card
 │   ├── services/            Service cards
 │   ├── contact/             Contact page + form
 │   ├── about/               About page sections
 │   ├── layout/              Navbar + footer
 │   └── ui/                  Buttons, cards, badges
 ├── data/reviews.ts        ⭐ Customer reviews (plain text file)
 ├── emails/quote-template.html   Email layout for form submissions
 ├── layouts/Base.astro     Shared page shell (head, nav, footer)
 └── styles/                Global styles

 public/                    Static files served as-is
 └── images/                  Photos: services/, Logo/, hero-section.png, about/


◄── DO NOT TOUCH ───────────────────────────────────────────────────►

 dist/                      Build output — regenerated every build

 astro.config.mjs           Framework + deploy config
 tsconfig.json              TypeScript config
 package.json               Project commands
 AGENTS.md / CLAUDE.md      Developer notes (internal, can be ignored)
```

---

## How to Update Images (most common task)

1. Put the new file in **`public/images/`** — service photos in `public/images/services/`, logos in `public/images/Logo/`, etc.
2. **Keep the exact same file name** as the one you are replacing (e.g. replace `local-long-distance-moving.webp` with your new `local-long-distance-moving.webp`).
   - Same name = no code changes needed.
   - Adding a brand-new image? Simple name: lowercase, no spaces.
3. Commit, push, and it deploys (next section).

> **Supported formats:** `.webp` (best), `.png`, `.jpg`. Keep images a few hundred kB or less.

---

## How to Edit Text (reviews, headings, phone numbers)

- **Reviews** → `src/data/reviews.ts` (plain text file, easy to edit)
- **Page text** → the matching file in `src/pages/` or `src/components/`
- Save the file, commit, push.

---

## Run Locally (Developer)

Requirements: [Node.js](https://nodejs.org) (version 22 or newer).

```bash
# 1. Install dependencies (first time only)
npm install

# 2. Start the dev server
npm run dev
```

Then open **http://localhost:4321** — the page live-reloads as you edit.

| Command | What it does |
| --- | --- |
| `npm install` | Installs dependencies (run once after cloning) |
| `npm run dev` | Local dev server at localhost:4321 (live reload) |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro -- --help` | Astro CLI help |

---

## Deploy (Publish the Site)

The site is hosted on **Vercel** (https://www.ascensionmovingco.com), connected to the GitHub repository.

1. Edit files in `src/` or `public/`.
2. Commit and push to `main`.
3. Vercel builds and publishes automatically.

```
 Edit files  →  Commit + push to main  →  Vercel builds & deploys  →  Live site
```

---

## Environment Variables

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Sends quote-form emails (used by `src/pages/api/send-quote.ts`) |

Set it in **Vercel → Settings → Environment Variables**. Never put secret keys in the code.

---

## Quote Form

The quote form on the site submits to `src/pages/api/send-quote.ts`, which emails the submission via [Resend](https://resend.com) using the `quote-template.html` layout. Requires `RESEND_API_KEY` as described above.
