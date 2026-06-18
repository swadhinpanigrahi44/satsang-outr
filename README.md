# Satsang OUTR

A modern, production-grade web presence for **Satsang OUTR** — a socio-cultural and philanthropic institution at OUTR (Odisha University of Technology and Research), Bhubaneswar, dedicated to character building, spiritual awakening, and collective upliftment through the teachings of Sree Sree Thakur Anukulchandra.

Live site: [satsangoutr.vercel.app](https://satsangoutr.vercel.app)

---

## Features

- **Hero carousel** — full-width crossfade slideshow with 4-second auto-advance, dot indicators, and keyboard navigation
- **About page carousel** — dedicated photo slideshow for Sree Sree Thakur Anukulchandra with hover arrows and slide counter
- **Interactive Bento Gallery** — drag-to-rearrange community photo grid with hover name/description overlays and full-screen modal
- **Events module** — structured event page with sessions, speakers, plenary panels, counselling domains, and an event reports sub-route
- **Gallery page** — category-filtered image grid (All / Group / Seminar / Events / Statues)
- **Testimonials page** — carousel + card grid layout
- **Dark / Light theme toggle** — persists to `localStorage`, no flash of incorrect theme on load
- **Glassmorphism navbar** — backdrop-blur navigation with animated sliding hover cursor
- **Contact form** — client-side validation with Zod + react-hook-form, opens mail client
- **Dharma & EduCare pages** — data-driven content pages with design tokens
- **WhatsApp floating button** — official brand SVG logo with pulse ring animation
- **Social links** — Instagram, Facebook, WhatsApp group, LinkedIn, Email
- **Code splitting** — all 10 page routes lazy-loaded via `React.lazy` + `Suspense`
- **SEO** — sitemap.xml, robots.txt, Open Graph tags, Twitter Card meta
- **Fully responsive** — mobile-first design with Tailwind CSS utility classes

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript 5 |
| Build tool | Vite 8 |
| Styling | Tailwind CSS 3 with custom design tokens |
| UI primitives | shadcn/ui (Radix UI) |
| Animations | Framer Motion |
| Routing | React Router v6 |
| Forms | React Hook Form + Zod |
| Fonts | Bodoni Moda SC (headings) + Inter (body) via Google Fonts |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher

### Installation

```bash
git clone https://github.com/swadhinpanigrahi44/satsang-outr.git
cd satsang-outr
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

```bash
npm run dev        # Start Vite development server with HMR
npm run build      # TypeScript check + production build to dist/
npm run preview    # Preview production build locally
npm run lint       # ESLint with TypeScript rules
```

---

## Screenshots

> Add screenshots here after running `npm run dev`.

| Page | URL |
|------|-----|
| Home | `/` |
| About | `/about` |
| Events | `/events` |
| Gallery | `/gallery` |
| Testimonials | `/testimonials` |
| Contact | `/contact` |

---

## Project Structure

```
satsang-outr/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/                 # Images
│   ├── components/
│   │   ├── Navbar.tsx          # Glassmorphism nav + theme toggle
│   │   ├── Footer.tsx          # Social links + quick nav
│   │   ├── Layout.tsx          # Page wrapper
│   │   ├── shared/elements/    # GoldDivider, SectionHeading, SpiritualCard, WhatsAppButton
│   │   ├── shared/sections/    # AnimatedSection
│   │   └── ui/                 # shadcn/ui primitives + InteractiveBentoGallery
│   ├── data/                   # All content as typed data files
│   │   ├── navigation.ts       # Nav items
│   │   ├── social-links.ts     # All social URLs (single source of truth)
│   │   ├── site-config.ts      # Site name, description, URL
│   │   └── community-gallery.data.ts  # Home bento gallery hover labels
│   ├── features/
│   │   ├── events/             # Events module (components + data)
│   │   ├── dharma/
│   │   └── educare/
│   ├── hooks/
│   │   └── useTheme.ts         # Dark/light toggle + localStorage
│   ├── pages/                  # One file per route
│   ├── types/                  # TypeScript interfaces
│   ├── App.tsx                 # Route definitions with React.lazy splitting
│   └── index.css               # CSS design tokens + global styles
├── index.html
├── tailwind.config.ts
├── vite.config.ts
└── vercel.json
```

---

## Design System

Token-based design defined in `src/index.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `--brand-primary` | Saffron gold `38 93% 41%` | Accents, headings, CTAs |
| `--brand-secondary` | Sacred indigo `215 38% 18%` | Card backgrounds |
| `font-heading` | Bodoni Moda SC 800 | All headings |
| `font-body` | Inter | Body text |

Dark mode is the default. Toggle via sun/moon button in the navbar.

---

## Adding Content

**Add photos to the About carousel** — copy image to `src/assets/`, add import + entry to `heroImages` array in `src/pages/About.tsx`

**Change community gallery hover labels** — edit `title` and `desc` in `src/data/community-gallery.data.ts`

**Add events / sessions** — edit `src/features/events/data/events.data.ts`

**Update social links** — edit `src/data/social-links.ts`

---

## Deployment

### Vercel (recommended)

1. Push to GitHub
2. Go to vercel.com → New Project → Import repo
3. Framework: **Vite** | Build: `npm run build` | Output: `dist`
4. Deploy

SPA routing is handled automatically by `vercel.json`.

### Manual

```bash
npm run build
# Deploy dist/ to any static host
```

---

## Roadmap

- Image optimization — convert assets to WebP
- PWA support with service worker
- Blog / articles section
- Odia language (i18n)
- Push notifications for events

---

## License

[MIT](LICENSE)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
Security issues: see [SECURITY.md](SECURITY.md).
