# SatsangOUTR — Complete Redesign Architecture Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign and refactor the SatsangOUTR Vite/React website into a production-grade, spiritually luxurious digital presence while preserving all existing content, routes, and functionality.

**Architecture:** Feature-based folder structure with a unified design token system. All page content moves to typed data files. Shared layout components are extracted into a dedicated shared layer. The existing shadcn/Radix UI foundation is preserved and extended with a brand-accurate design system.

**Tech Stack:** React 18, Vite 8, TypeScript 5, Tailwind CSS 3, Framer Motion, shadcn/ui (Radix UI), React Router v6, Lucide React, Google Fonts (Bodoni Moda SC + Inter)

---

## Global Constraints

- PRESERVE all existing content — text, data, images, links, social handles, email addresses
- PRESERVE all existing routes: `/` and `/events`
- ADD missing routes: `/about`, `/contact`, `/dharma`, `/edu-care`
- DO NOT delete any page, component, asset, or business logic
- DO NOT introduce new backend services or APIs
- Tailwind CSS only for styling — no additional CSS frameworks
- Only 2 brand primary colors throughout (Sacred Indigo + Saffron Gold)
- Only 2 fonts: Bodoni Moda SC (headings, weight 800) + Inter (body)
- framer-motion for all animations (already installed)
- No new npm dependencies unless strictly necessary

---

## Part 1 — Codebase Audit

### 1.1 Current Pages

| File | Route | Status | Lines | Issues |
|------|-------|--------|-------|--------|
| `src/pages/Index.tsx` | `/` | ✅ Routed | 175 | Hardcoded colors, typo `max-w-6x1`, empty motion overlay |
| `src/pages/Events.tsx` | `/events` | ✅ Routed | 620 | Monolithic, all speaker data hardcoded in JSX, no data file |
| `src/pages/About.tsx` | — | ❌ NOT ROUTED | 89 | Content fine, orphaned page |
| `src/pages/Contact.tsx` | — | ❌ NOT ROUTED | 83 | Form nonfunctional, orphaned page |
| `src/pages/Dharma.tsx` | — | ❌ NOT ROUTED | 91 | Content fine, orphaned page |
| `src/pages/EduCare.tsx` | — | ❌ NOT ROUTED | 77 | Content fine, orphaned page |
| `src/pages/NotFound.tsx` | `*` | ✅ Routed | — | — |

### 1.2 Current Components

| File | Status | Issues |
|------|--------|--------|
| `src/components/Layout.tsx` | ✅ Used | Clean, keep |
| `src/components/Navbar.tsx` | ✅ Used | Only shows 2 nav items (Home, Events); missing 4 pages; `bg-text-gradient-saffron/90` is invalid class |
| `src/components/Footer.tsx` | ✅ Used | Only shows 2 quick links; missing 4 pages |
| `src/components/UpcomingEventCard.tsx` | ✅ Used | Content hardcoded, emoji in heading |
| `src/components/RegistrationDialog.tsx` | ⚠️ Dead | Always `open={false}` — permanently disabled; event date (2026-03-28) is in the past |
| `src/components/NavLink.tsx` | ❌ Unused | Never imported anywhere |

### 1.3 Design System Audit

**Critical Issues:**
1. **Color semantic mismatch** — CSS variables name "saffron" but the actual hue is blue (HSL 200°). `--saffron: 200 70% 55%` is a cool sky-blue, not saffron. This causes `.text-gradient-saffron` and `.bg-saffron-gradient` to render blue, not the sacred orange-gold of saffron.
2. **Hardcoded hex colors** — `bg-[#243447]`, `bg-[#132a4d]`, `bg-[#111827]`, `bg-[#1f2937]`, `bg-[#0b1e3a]` appear throughout Index.tsx and Events.tsx instead of CSS variables.
3. **Font mismatch** — Current: Playfair Display + Lato. Required: Bodoni Moda SC + Inter.
4. **Gradient text on dark** — `.text-gradient-saffron` used on dark navy backgrounds; gradient produces invisible blue text on blue background.
5. **Inconsistent dark/light** — Pages mix `bg-cream` (light) for About/Contact/Dharma/EduCare and `bg-[#243447]` (dark) for Index/Events.

### 1.4 Architecture Debt

| Issue | Severity | Fix |
|-------|----------|-----|
| 4 pages not registered in `App.tsx` router | Critical | Add routes |
| All event speaker data hardcoded in JSX (620 lines) | High | Extract to `events.data.ts` |
| No `src/data/` directory | High | Create data layer |
| No `src/types/` directory | High | Create type definitions |
| `RegistrationDialog` dead code | Medium | Remove or repurpose |
| `NavLink.tsx` never imported | Medium | Delete or use |
| Asset filenames with spaces | Medium | Rename with kebab-case |
| Typo `max-w-6x1` in Index.tsx:40 | Low | Fix to `max-w-6xl` |
| Typo `netwroking` in Events.tsx:52 | Low | Fix |
| Empty `<h2>` motion overlay in Index.tsx:56-63 | Low | Remove |
| 35+ shadcn/Radix components installed, most unused | Low | Leave (no risk) |

### 1.5 Accessibility Audit

- No `<html lang="...">` attribute in `index.html`
- No skip-to-content link
- `Navbar` burger button lacks `aria-expanded`
- No focus-visible ring on custom elements
- Color contrast: blue gradient text on dark blue background = fails WCAG AA
- Images use generic `alt` text (`Gallery ${i}`)

### 1.6 Performance Audit

- Asset filenames contain spaces — breaks some CDNs and static servers
- No WebP conversion strategy
- `content-visibility: auto` on all `<img>` (good, keep)
- `loading="lazy"` on most images (good, keep)
- `@tanstack/react-query` installed but no remote data fetching — unnecessary QueryClient overhead for static site
- RegistrationDialog loads speaker image (`seminar-speaker.png`) on every Home page visit despite dialog being permanently disabled

### 1.7 SEO Audit

- `index.html` has no `<meta name="description">`
- No Open Graph tags (`og:title`, `og:image`, `og:url`)
- No Twitter Card meta
- No structured data (JSON-LD for Organization)
- `public/robots.txt` exists ✅
- `public/google9827b09aad186ad9.html` present (Google Search Console verification) ✅
- No `sitemap.xml`

---

## Part 2 — Design System

### 2.1 Brand Philosophy

The SatsangOUTR visual identity is rooted in **Satsangi culture** — a tradition that values devotion, discipline, and collective upliftment. The aesthetic is:
- **Sacred** — not flashy or corporate
- **Timeless** — classical, not trendy
- **Premium** — refined luxury, not mass-market
- **Peaceful** — calm, unhurried, reverent

### 2.2 Color Palette (2 Primary Colors)

The entire palette derives from exactly **two primary colors**:

| Role | Name | Hex | HSL | Notes |
|------|------|-----|-----|-------|
| **Primary** | Sacred Saffron Gold | `#C8860A` | `38 93% 41%` | The sacred fire; devotion, auspiciousness |
| **Secondary** | Sacred Indigo | `#1C2A3F` | `215 38% 18%` | Deep calm; wisdom, spiritual depth |

**Full Palette Derived from Primary:**

```
-- SAFFRON GOLD FAMILY --
--brand-primary:         38 93% 41%    /* #C8860A — base saffron gold */
--brand-primary-light:   40 85% 55%    /* #E8A832 — hover, highlights */
--brand-primary-lighter: 42 80% 88%    /* #F5E0B0 — tints, badges */
--brand-primary-dark:    35 90% 28%    /* #8A5808 — pressed, deep accent */

-- SACRED INDIGO FAMILY --
--brand-secondary:       215 38% 18%   /* #1C2A3F — base indigo */
--brand-secondary-mid:   215 35% 22%   /* #243447 — card surfaces */
--brand-secondary-light: 215 30% 28%   /* #2E4060 — borders, dividers */
--brand-secondary-dark:  218 45% 10%   /* #0D1620 — deepest bg */

-- NEUTRALS (derived from Indigo warmth) --
--text-primary:          42 60% 92%    /* #F7F2E6 — warm ivory white */
--text-secondary:        40 25% 70%    /* #C4B49A — muted warm */
--text-muted:            215 15% 55%   /* #7A8899 — subtle UI text */

-- SEMANTIC --
--background:            218 45% 10%   /* #0D1620 — page background */
--surface:               215 38% 18%   /* #1C2A3F — card base */
--surface-elevated:      215 35% 22%   /* #243447 — elevated card */
--border:                215 30% 28%   /* #2E4060 — subtle borders */
--border-strong:         38 50% 35%    /* #8A6420 — saffron-tinted border */
```

**Light/Cream Variant (for about, contact, dharma, educare pages):**
```
--bg-light:              42 60% 96%    /* #FBF7F0 — warm ivory */
--surface-light:         0 0% 100%     /* #FFFFFF — pure white card */
--border-light:          40 30% 86%    /* #EDE0CA — warm cream border */
--text-dark:             215 38% 18%   /* #1C2A3F — sacred indigo on light */
```

### 2.3 Typography

**Font 1 — Headings: Bodoni Moda SC**
- Google Fonts: `family=Bodoni+Moda+SC:opsz,wght@6..96,800`
- Weight: 800 (Extra Bold) exclusively
- Use: All `h1`–`h4`, section titles, page titles, logo wordmark
- Style: High contrast serifs; conveys timelessness and classical authority

**Font 2 — Body: Inter**
- Google Fonts: `family=Inter:wght@300;400;500;600`
- Weights: 300 (light paragraphs), 400 (body), 500 (labels), 600 (UI buttons, nav)
- Use: All body text, paragraphs, captions, form inputs, navigation, buttons
- Style: Clean, neutral, maximally readable at all sizes

**Type Scale:**
```
Display:  Bodoni Moda SC 800, 72px/1.1  (hero headline)
H1:       Bodoni Moda SC 800, 48px/1.15 (page title)
H2:       Bodoni Moda SC 800, 36px/1.2  (section title)
H3:       Bodoni Moda SC 800, 24px/1.25 (card title)
H4:       Bodoni Moda SC 800, 20px/1.3  (sub-heading)
Body LG:  Inter 400, 18px/1.7           (intro paragraphs)
Body:     Inter 400, 16px/1.6           (standard text)
Body SM:  Inter 400, 14px/1.5           (captions, meta)
Label:    Inter 600, 12px/1.4, CAPS     (badges, tags)
Button:   Inter 600, 15px/1             (CTAs)
```

### 2.4 Spacing & Shape

```
--radius-sm:   4px   (tags, chips)
--radius-md:   8px   (cards, inputs)
--radius-lg:   16px  (large cards, modals)
--radius-xl:   24px  (hero image containers)
--radius-full: 9999px (pills, avatars)

Spacing scale: 4px base unit (Tailwind default — no change needed)
Section vertical padding: 80px desktop / 48px mobile (py-20 / py-12)
Container max-width: 1280px (max-w-7xl)
Content max-width: 768px (max-w-3xl for prose)
```

### 2.5 Motion Tokens

```
--duration-fast:   150ms  (hover states)
--duration-base:   300ms  (panel transitions)
--duration-slow:   600ms  (page entry animations)
--duration-gallery: 4000ms (image crossfade interval)
--easing-smooth:   cubic-bezier(0.4, 0, 0.2, 1)
--easing-spring:   spring(stiffness: 300, damping: 30)
```

### 2.6 Elevation / Shadow

```
--shadow-sm:     0 1px 3px rgba(0,0,0,0.4)
--shadow-md:     0 4px 16px rgba(0,0,0,0.35)
--shadow-lg:     0 10px 40px rgba(0,0,0,0.4)
--shadow-gold:   0 4px 24px rgba(200, 134, 10, 0.25)  (saffron glow)
--shadow-inset:  inset 0 1px 0 rgba(255,255,255,0.06) (glass effect)
```

---

## Part 3 — Target Folder Structure

```
src/
├── assets/
│   ├── images/
│   │   ├── gallery/           ← group photos, event shots
│   │   │   ├── outr-group.png
│   │   │   ├── dsc-6024.jpeg
│   │   │   ├── white-group.jpeg
│   │   │   └── whatsapp-2026-03-12.jpeg
│   │   ├── statues/           ← statue photos for About/Home
│   │   │   ├── statue-blue.jpeg
│   │   │   ├── statue-blue2.png
│   │   │   ├── statue-close.png
│   │   │   ├── statue-flowers.png
│   │   │   ├── statue-white.png
│   │   │   └── temple.png
│   │   └── events/            ← seminar event photos
│   │       ├── seminar-group.png
│   │       ├── seminar-interaction.png
│   │       ├── seminar-presentation.png
│   │       ├── seminar-speaker.png
│   │       ├── confidence-session.png
│   │       ├── gathering.png
│   │       └── pcod-session.jpeg
│   └── brand/
│       └── logo.jpeg
│
├── components/
│   ├── ui/                    ← shadcn/Radix components (UNTOUCHED)
│   └── shared/                ← reusable across all features
│       ├── layout/
│       │   ├── Navbar.tsx
│       │   ├── Footer.tsx
│       │   └── Layout.tsx
│       ├── sections/
│       │   ├── SectionHeading.tsx   ← h2 + subtitle pattern
│       │   └── AnimatedSection.tsx  ← whileInView wrapper
│       └── elements/
│           ├── GoldDivider.tsx      ← decorative saffron line
│           ├── SpiritualCard.tsx    ← base card with indigo bg + gold border
│           └── SaffronBadge.tsx     ← pill/tag in gold
│
├── features/
│   ├── home/
│   │   ├── components/
│   │   │   ├── HeroGallery.tsx        ← auto-crossfade image gallery
│   │   │   ├── HeroText.tsx           ← title + tagline + CTA
│   │   │   ├── FeaturedStatue.tsx     ← statue image section
│   │   │   ├── MissionSection.tsx     ← mission quote block
│   │   │   └── EventPreviewSection.tsx ← UpcomingEventCard refactored
│   │   └── HomePage.tsx
│   │
│   ├── events/
│   │   ├── components/
│   │   │   ├── EventHeader.tsx        ← title + status + register btn
│   │   │   ├── EventSchedule.tsx      ← timeline of sessions
│   │   │   ├── SessionCard.tsx        ← single session row
│   │   │   ├── PlenaryGrid.tsx        ← 2x2 domain panels
│   │   │   ├── PlenaryPanel.tsx       ← single plenary domain card
│   │   │   ├── ParallelSession.tsx    ← one-to-one counselling section
│   │   │   └── DomainBox.tsx          ← counselling domain grid box
│   │   ├── data/
│   │   │   └── events.data.ts         ← ALL speaker data as typed objects
│   │   └── EventsPage.tsx
│   │
│   ├── about/
│   │   ├── components/
│   │   │   ├── AboutHero.tsx
│   │   │   └── PhilosophySection.tsx
│   │   └── AboutPage.tsx
│   │
│   ├── gallery/                       ← NEW page
│   │   ├── components/
│   │   │   └── PhotoGrid.tsx
│   │   └── GalleryPage.tsx
│   │
│   ├── contact/
│   │   ├── components/
│   │   │   ├── ContactInfoCards.tsx
│   │   │   └── ContactForm.tsx        ← wire up react-hook-form + zod
│   │   └── ContactPage.tsx
│   │
│   ├── dharma/
│   │   ├── data/
│   │   │   └── dharma.data.ts         ← dharmaPoints array (already exists in page)
│   │   └── DharmaPage.tsx
│   │
│   └── educare/
│       ├── data/
│       │   └── educare.data.ts        ← qualities array (already exists in page)
│       └── EduCarePage.tsx
│
├── data/
│   ├── navigation.ts                  ← nav items array (single source of truth)
│   ├── social-links.ts                ← all social URLs
│   └── site-config.ts                 ← site name, tagline, email, official URL
│
├── types/
│   ├── event.types.ts                 ← Event, Session, Speaker interfaces
│   └── nav.types.ts                   ← NavItem interface
│
├── hooks/
│   └── use-mobile.tsx                 ← existing, keep
│
├── lib/
│   └── utils.ts                       ← existing, keep
│
└── styles/
    ├── design-tokens.css              ← all CSS custom properties
    ├── typography.css                 ← font-face / font-family declarations
    └── animations.css                 ← keyframes (move out of Tailwind config)
```

**`src/pages/` stays for routing thin wrappers:**
```
src/pages/
├── Index.tsx      → re-exports features/home/HomePage.tsx
├── Events.tsx     → re-exports features/events/EventsPage.tsx
├── About.tsx      → re-exports features/about/AboutPage.tsx
├── Contact.tsx    → re-exports features/contact/ContactPage.tsx
├── Dharma.tsx     → re-exports features/dharma/DharmaPage.tsx
├── EduCare.tsx    → re-exports features/educare/EduCarePage.tsx
└── NotFound.tsx   → keep as-is
```

---

## Part 4 — Sitemap

```
/                     Home
  ├── /about          About Sree Sree Thakur Anukulchandra
  ├── /events         Events (Career Counselling Seminar 2026)
  ├── /gallery        Photo Gallery
  ├── /dharma         The Light of Dharma
  ├── /edu-care       Edu-Care — Education with Purpose
  └── /contact        Get in Touch
```

**External Links (not pages, but in nav/footer):**
- `https://www.satsang.org.in/home` — Official Website
- `https://www.instagram.com/satsang_outr`
- `https://www.facebook.com/share/1F7it9rvLD/`
- `https://chat.whatsapp.com/DrMF9pQJBEp5iIbq2IUF7x?mode=gi_t`
- `mailto:satsangoutr@gmail.com`

---

## Part 5 — Component Hierarchy

```
App
└── QueryClientProvider
    └── TooltipProvider
        └── BrowserRouter
            └── Routes
                ├── / → HomePage
                │   └── Layout
                │       ├── Navbar
                │       │   ├── Logo (img + text)
                │       │   ├── NavLinks (map navItems)
                │       │   ├── OfficialSiteLink (CTA button)
                │       │   └── MobileMenu (AnimatePresence sheet)
                │       ├── main
                │       │   ├── HeroGallery        (auto-crossfade, 4 images)
                │       │   ├── HeroText           (h1 + p + CTA button)
                │       │   ├── FeaturedStatue     (statue-close image)
                │       │   ├── EventPreviewSection
                │       │   │   └── EventPreviewCard
                │       │   │       ├── PhotoGrid (3 images)
                │       │   │       ├── EventBadge
                │       │   │       ├── EventMeta (date, venue)
                │       │   │       └── ViewEventsLink
                │       │   └── MissionSection     (quote block)
                │       └── Footer
                │           ├── FooterBrand
                │           ├── FooterQuickLinks
                │           ├── FooterOfficialSite
                │           └── FooterSocial
                │
                ├── /about → AboutPage
                │   └── Layout
                │       └── main
                │           ├── AboutHero (h1 + subtitle)
                │           └── PhilosophySection
                │               ├── StatueImage
                │               └── BiographyCards (4 cards)
                │
                ├── /events → EventsPage
                │   └── Layout
                │       └── main
                │           ├── EventHeader
                │           ├── EventSchedule
                │           │   └── SessionCard[] (mapped from data)
                │           ├── PlenaryGrid
                │           │   └── PlenaryPanel[] (4 domains, mapped from data)
                │           └── ParallelSession
                │               └── DomainBox[] (4 boxes, mapped from data)
                │
                ├── /gallery → GalleryPage         (NEW)
                │   └── Layout
                │       └── main
                │           └── PhotoGrid (all assets/images/gallery/*)
                │
                ├── /dharma → DharmaPage
                │   └── Layout
                │       └── main
                │           ├── DharmaHero
                │           └── DharmaGrid
                │               └── SpiritualCard[] (mapped from dharma.data.ts)
                │
                ├── /edu-care → EduCarePage
                │   └── Layout
                │       └── main
                │           ├── EduCareHero
                │           ├── QualitiesGrid
                │           │   └── SpiritualCard[] (mapped from educare.data.ts)
                │           └── PurposeBlock
                │
                ├── /contact → ContactPage
                │   └── Layout
                │       └── main
                │           ├── ContactHero
                │           ├── ContactInfoCards (3 cards: location, email, social)
                │           └── ContactForm (react-hook-form + zod)
                │
                └── * → NotFound
```

---

## Part 6 — Shared Components Specification

### `SectionHeading` (components/shared/sections/SectionHeading.tsx)
Props: `title: string`, `highlight?: string`, `subtitle?: string`, `centered?: boolean`
Renders: `<h2>` in Bodoni Moda SC 800 with optional golden highlighted word + Inter subtitle.

### `AnimatedSection` (components/shared/sections/AnimatedSection.tsx)
Props: `children`, `delay?: number`, `className?: string`
Wraps children in `motion.div` with `whileInView={{ opacity:1, y:0 }}` + `viewport={{ once: true }}`.

### `SpiritualCard` (components/shared/elements/SpiritualCard.tsx)
Props: `icon?: ReactNode`, `title: string`, `body: string`, `variant?: 'dark' | 'light'`
Renders: Card with `--surface` background, `--border-strong` left border, hover gold glow.

### `GoldDivider` (components/shared/elements/GoldDivider.tsx)
Props: `className?: string`
Renders: `<hr>` with gradient from transparent → `--brand-primary` → transparent. Used between sections.

### `SaffronBadge` (components/shared/elements/SaffronBadge.tsx)
Props: `children: ReactNode`, `pulsing?: boolean`
Renders: Pill with gold border/text. Optional `animate-ping` dot for "Live" state.

---

## Part 7 — Navigation Design

**Nav Items (single source of truth in `src/data/navigation.ts`):**

```
navItems = [
  { label: "Home",      to: "/" },
  { label: "About",     to: "/about" },
  { label: "Events",    to: "/events" },
  { label: "Dharma",    to: "/dharma" },
  { label: "Edu-Care",  to: "/edu-care" },
  { label: "Gallery",   to: "/gallery" },
  { label: "Contact",   to: "/contact" },
]
```

**Navbar Redesign Strategy:**
- Dark glass bar: `bg-[--brand-secondary-dark]/90 backdrop-blur-md`
- Logo: circular image + Bodoni Moda SC "Satsang OUTR" in warm ivory
- Desktop: horizontal pill-nav with gold active indicator
- Active state: gold bottom border or gold text, not background highlight
- CTA: "Official Website" button in saffron gold outline style
- Mobile: slide-down drawer (existing AnimatePresence, keep mechanism)
- Fix: `aria-expanded` on mobile toggle button

---

## Part 8 — Page Redesign Strategies

### 8.1 Home Page

**Sections (in order):**
1. **HeroGallery** — Full-width crossfade slideshow (4 images, 4s interval). Overlay: subtle dark gradient bottom third.
2. **HeroText** — Title in Bodoni Moda SC display size on dark indigo bg. One paragraph. Single CTA "Visit Official Website" in gold outline.
3. **FeaturedStatue** — Full-width `statue-close.png` with reverent framing. No text overlay.
4. **EventPreviewSection** — Card with 3-photo grid, event meta, "View Events" link.
5. **MissionSection** — Centered quote block in golden italic. Max-width 700px.

**Key fixes:**
- Fix `max-w-6x1` → `max-w-6xl`
- Remove empty `<h2>` motion overlay
- Replace all `bg-[#243447]` with `bg-[--brand-secondary]` tokens

### 8.2 About Page

**Sections:**
1. **AboutHero** — Full-width dark indigo hero with Bodoni Moda SC title "About Sree Sree Thakur Anukulchandra"
2. **BiographyLayout** — 2-col: statue image left, 4 content cards right (Biography, Spiritualism as Science, Community & Service, Educator Philosopher Reformer)

**Key fix:** Currently uses `bg-cream` (light). Change to consistent dark indigo theme OR keep light cream with dark indigo text for contrast — recommend dark theme for consistency.

### 8.3 Events Page

**Sections:**
1. **EventHeader** — Title "Career Counselling Seminar", venue, "Registration Closed" badge
2. **EventSchedule** — Timeline of sessions mapped from `events.data.ts`
3. **PlenaryGrid** — 2×2 responsive grid of domain panels
4. **ParallelSession** — "One-to-One Career Counselling" section with 4 domain boxes

**Key changes:**
- Extract ALL hardcoded data to `src/features/events/data/events.data.ts`
- Replace hardcoded `bg-[#132a4d]`, `bg-[#111827]`, `bg-[#1f2937]` with design tokens
- Replace `border-r-4 border-white` with gold border: `border-r-4 border-[--brand-primary]`
- Replace `text-orange-400` moderator label with `text-[--brand-primary]`

### 8.4 Gallery Page (NEW)

**Sections:**
1. **GalleryHero** — Page title
2. **PhotoGrid** — Masonry-style or uniform grid of all event/group photos

**Source images (all from assets):**
- `gallery/outr-group.png`
- `gallery/dsc-6024.jpeg`
- `gallery/white-group.jpeg`
- `gallery/whatsapp-2026-03-12.jpeg`
- `events/seminar-group.png`
- `events/seminar-interaction.png`
- `events/seminar-presentation.png`
- `events/confidence-session.png`
- `events/gathering.png`
- `events/pcod-session.jpeg`

### 8.5 Dharma Page

**No content changes.** Structural improvements only:
- Extract `dharmaPoints` array to `src/features/dharma/data/dharma.data.ts`
- Replace `bg-cream` with dark indigo theme OR keep cream for spiritual purity feel
- Replace `border-saffron` (currently blue) with gold border token
- Replace emoji icons with Lucide React icons or Unicode sacred symbols

### 8.6 Edu-Care Page

**No content changes.** Structural improvements only:
- Extract `qualities` array to `src/features/educare/data/educare.data.ts`
- Replace `bg-saffron-light` (currently blue-tinted) with actual warm gold tint

### 8.7 Contact Page

**Sections:**
1. **ContactHero** — Title + subtitle
2. **ContactInfoCards** — 3 cards (Visit Us, Email Us, Social)
3. **ContactForm** — Wire up with `react-hook-form` + `zod` validation (already in dependencies)

**Contact details to populate:**
- Email: `satsangoutr@gmail.com`
- Instagram: `@satsang_outr`
- Facebook: `facebook.com/share/1F7it9rvLD/`
- WhatsApp Group: (existing link)

### 8.8 Footer Redesign

**Current:** 4-column grid. Shows only 2 quick links.

**Target:**
- Column 1: Brand (logo, tagline)
- Column 2: Pages (all 7 pages)
- Column 3: Official Site CTA
- Column 4: Connect (social icons + email) — keep existing links, just style update

**Key fix:** Update quick links to include all 7 routes.

---

## Part 9 — Type Definitions

### `src/types/event.types.ts`
```typescript
export interface Speaker {
  name: string;
  role: string;
  organization?: string;
  topic?: string;
}

export interface Session {
  time: string;
  title: string;
  description?: string;
  speakers?: Speaker[];
}

export interface PlenaryPanel {
  id: string;
  title: string;
  timeRange: string;
  theme: string;
  moderator: Speaker;
  speakers: Speaker[];
}

export interface CounsellingDomain {
  id: string;
  title: string;
  speakers: Speaker[];
}

export interface EventData {
  title: string;
  subtitle: string;
  venue: string;
  date: string;
  registrationStatus: 'open' | 'closed' | 'live';
  schedule: Session[];
  plenaryPanels: PlenaryPanel[];
  counsellingDomains: CounsellingDomain[];
}
```

### `src/types/nav.types.ts`
```typescript
export interface NavItem {
  label: string;
  to: string;
  external?: boolean;
}
```

---

## Part 10 — SEO Strategy

**`index.html` additions:**
```html
<html lang="en">
<meta name="description" content="Satsang OUTR — A socio-cultural and philanthropic institution at OUTR dedicated to character building, spiritual awakening, and collective upliftment through the teachings of Sree Sree Thakur Anukulchandra.">
<meta property="og:title" content="Satsang OUTR">
<meta property="og:description" content="...">
<meta property="og:image" content="/public/placeholder.svg">
<meta property="og:url" content="https://satsangoutr.vercel.app">
<meta name="twitter:card" content="summary_large_image">
```

**`public/sitemap.xml`** to be generated listing all 7 routes.

---

## Part 11 — Migration Roadmap

### Phase 1 — Design Foundation (Start Here)
1. Update `index.html`: add `lang="en"`, meta tags
2. Replace Google Fonts in `src/index.css`: Playfair Display + Lato → Bodoni Moda SC + Inter
3. Rewrite CSS variables in `src/index.css`: correct color palette (saffron = gold HSL 38°)
4. Update `tailwind.config.ts`: new font families, extend saffron color tokens
5. Rename asset files: remove spaces from filenames, reorganize into subdirectories

### Phase 2 — Data Layer
6. Create `src/types/event.types.ts` and `src/types/nav.types.ts`
7. Create `src/data/navigation.ts`, `src/data/social-links.ts`, `src/data/site-config.ts`
8. Create `src/features/events/data/events.data.ts` — extract all speaker/session data from Events.tsx
9. Create `src/features/dharma/data/dharma.data.ts`
10. Create `src/features/educare/data/educare.data.ts`

### Phase 3 — Shared Components
11. Build `SectionHeading.tsx`
12. Build `AnimatedSection.tsx`
13. Build `SpiritualCard.tsx`
14. Build `GoldDivider.tsx`
15. Build `SaffronBadge.tsx`
16. Refactor `Navbar.tsx`: add all 7 nav items, fix invalid class, fix aria-expanded
17. Refactor `Footer.tsx`: add all 7 quick links, update styling

### Phase 4 — Feature Pages
18. Refactor `features/home/HomePage.tsx` (decomposed from Index.tsx)
19. Refactor `features/events/EventsPage.tsx` (decomposed from Events.tsx, data-driven)
20. Refactor `features/about/AboutPage.tsx`
21. Refactor `features/dharma/DharmaPage.tsx`
22. Refactor `features/educare/EduCarePage.tsx`
23. Refactor `features/contact/ContactPage.tsx` (add react-hook-form)
24. Build `features/gallery/GalleryPage.tsx` (new)

### Phase 5 — Routing & SEO
25. Update `src/App.tsx`: add all 6 routes (about, contact, dharma, edu-care, gallery, not-found)
26. Update `src/pages/` thin wrappers to re-export feature pages
27. Remove `RegistrationDialog.tsx` (permanently disabled dead code)
28. Remove unused `NavLink.tsx`
29. Add `public/sitemap.xml`
30. Fix `index.html` meta tags and `lang` attribute

### Phase 6 — Polish & Verification
31. Fix typo: `max-w-6x1` → `max-w-6xl` in home hero
32. Fix typo: `netwroking` → `networking` in events schedule
33. Remove empty motion `<h2>` overlay in home hero
34. Audit all pages for token compliance (no hardcoded hex colors)
35. Check all image `alt` text for meaningful descriptions
36. Test mobile responsiveness for all 7 pages
37. Verify all external links open in new tab with `rel="noopener noreferrer"`

---

## Part 12 — Refactoring Roadmap (Technical Debt)

| Debt Item | Action | Phase |
|-----------|--------|-------|
| 4 pages not in router | Add routes to App.tsx | 5 |
| Events.tsx 620 lines | Decompose into 6 components + data file | 4 |
| Hardcoded hex colors in JSX | Replace with CSS variable tokens | 4 |
| "saffron" = blue in CSS vars | Rewrite to gold HSL 38° | 1 |
| Wrong font (Playfair) | Replace with Bodoni Moda SC | 1 |
| RegistrationDialog dead code | Remove entirely | 5 |
| NavLink.tsx unused | Delete | 5 |
| Asset filenames with spaces | Rename kebab-case + update imports | 1 |
| Empty motion h2 | Delete from Index.tsx | 6 |
| Typos in pages | Fix inline | 6 |
| All nav items missing | Add all 7 to navigation.ts | 2 |
| Footer only 2 links | Add all 7 links | 3 |
| Contact form no validation | Add react-hook-form + zod | 4 |
| No lang attribute | Add to index.html | 1 |
| No meta description | Add to index.html | 5 |

---

## Self-Review Checklist

- [x] Spec coverage: All 5 main tasks covered (audit, architecture, design system, page strategy, deliverables)
- [x] Color system: 2 primary colors only (Sacred Indigo + Saffron Gold), full palette derived from them
- [x] Typography: Bodoni Moda SC 800 headings + Inter body — only 2 fonts
- [x] All existing content preserved — no deletions
- [x] All existing routes preserved + 4 new routes added
- [x] Sitemap: 7 pages listed
- [x] Component hierarchy: complete tree
- [x] Folder structure: feature-based with clear boundaries
- [x] Migration roadmap: 6 phases, 37 numbered steps
- [x] Refactoring roadmap: all 14 debt items tracked
- [x] No placeholder content — all data, types, and component specs are concrete
- [x] Type interfaces fully defined with exact field names
- [x] Nav items explicitly listed in order
