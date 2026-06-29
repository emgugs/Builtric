# Builtric — Next.js

Marketing site cloned from [builtric.com](https://builtric.com) using Framer-exported React components (Unframer) and Next.js App Router.

## Stack

- **Next.js 15** (App Router)
- **Unframer** — Framer components in `src/framer/`
- **Tailwind CSS**
- **Framer MCP** — project structure and homepage layout reference

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/builtric-features` | Features |
| `/builtric-packages` | Packages |
| `/builtric-about` | About |
| `/builtric-who-we-serve` | Who We Serve |
| `/builtric-contact` | Contact |
| `/builtric-demo` | Book a demo |
| `/builtric-custom-quote` | Custom quote |
| `/builtric-legal` | Privacy & Terms |
| `/builtric-news` | News listing |
| `/builtric-news/[slug]` | News article |

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3001

## Re-sync Framer components

After changes in Framer, run:

```bash
npm run framer
```

Requires an active [React Export](https://www.framer.com/marketplace/plugins/react-export/) subscription.

## Project structure

```
src/
├── app/                  # Next.js routes (one folder per page)
├── components/           # Layout, sections, forms
├── data/                 # Static content (news, etc.)
└── framer/               # Auto-generated Framer components (do not edit)
```
