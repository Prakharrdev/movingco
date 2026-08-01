# Moving Company

Overhaul of the Ascension Moving site — a moving company in Traverse City, MI.

## Stack

- **Astro** — static-first, data-driven pages
- **Tailwind CSS** — styling

## Project Structure

```
src/
├── assets/
│   ├── icons/          # SVG icons
│   ├── images/         # photos
│   └── illustrations/  # vector art
├── components/         # atoms, molecules, organisms
├── layouts/            # page shells
├── pages/              # routes
├── styles/             # global styles / design tokens
├── data/               # content layer (services, testimonials, site, nav)
└── scripts/            # build / migration utilities
```

## Commands

| Command            | Action                                        |
| :----------------- | :-------------------------------------------- |
| `npm install`      | Install dependencies                          |
| `npm run dev`      | Start local dev server at `localhost:4321`    |
| `npm run build`    | Build production site to `./dist/`            |
| `npm run preview`  | Preview the build locally                     |
| `astro dev --background` | Dev server in background mode           |

## Deployment

Every commit on `main` auto-deploys to Vercel.
