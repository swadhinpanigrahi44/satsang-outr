# Task 5 Report — Home Page Redesign

## Status
COMPLETE — TypeScript clean (0 errors)

## Files Changed

### `src/pages/Index.tsx`
- Fully rewritten from scratch.
- Hero gallery: 4 images with 4-second auto-crossfade via `motion.img` + `useState`/`useEffect`. Dot indicators with active gold pill. Bottom gradient overlay using CSS var.
- Fixed typo: `max-w-6x1` → `max-w-6xl`.
- Removed duplicate `import { motion }` that was present in the brief (only one framer-motion import).
- Hero text: `font-heading`, `text-gradient-saffron` on "The Man Making Industries", gold outlined CTA button using CSS vars.
- Featured statue section: `statue-close.png` with `max-w-4xl`, `shadow-xl`, `rounded-xl`.
- `<UpcomingEventCard />` preserved in place.
- Mission section: text preserved verbatim, wrapped in gold-bordered card using CSS vars, `<SectionHeading>` with highlight.
- Community gallery: reads `galleryImages.filter(img => img.featured).slice(0, 8)`, 4-column grid, `<Link to="/gallery">` CTA.
- All sections separated by `<GoldDivider />`.
- Zero hardcoded hex — all `hsl(var(--*))` tokens.
- Imports: `AnimatedSection` from `@/components/shared/sections`, `GoldDivider`/`SectionHeading`/`SaffronBadge` from `@/components/shared/elements`.

### `src/components/UpcomingEventCard.tsx`
- Replaced `bg-[#243447]` with `style={{ background: 'hsl(var(--background))' }}`.
- Replaced `bg[-#0b1e3a]` (typo className) with `bg-card`.
- Replaced `border border-primary/20` with `border border-[hsl(var(--brand-primary)/0.2)]`.
- Removed `🔴 Live` badge; replaced with `<SaffronBadge variant="solid">Registration Closed</SaffronBadge>` (event date March 28 2026 is past).
- Removed unused `ExternalLink` import.
- All existing text/content preserved verbatim.

## TypeScript
`npx tsc --noEmit` — 0 errors.

## Concerns
- `/gallery` route does not exist yet (no `src/pages/Gallery.tsx`) — the "View Full Gallery" link will 404 at runtime until Task 6 or a gallery page task adds it. This is expected per the brief ("Task 6 will handle the full data-driven approach").
- Only 3 images in `galleryImages` have `featured: true` (`outr-group`, `dsc-6024`, `seminar-group`), so the gallery grid will show only 3 tiles on the home page. More can be added by setting `featured: true` in `src/data/gallery.data.ts`.

## Commit Hash
`f21ced2`
