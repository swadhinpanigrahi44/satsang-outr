# Task 9: Gallery Page — /gallery Route

## Project Context

SatsangOUTR — Vite + React 18 + TypeScript + Tailwind + shadcn/ui.
Tasks 1-8 complete. Design tokens, shared components, data layer, and all major pages are done.

Project root: `C:\Users\ASUS\Desktop\SatsangOUTR-main (1)\SatsangOUTR-main`

## Goal

Create a new `/gallery` page that:
1. Shows ALL 13 images from `galleryImages` in `src/data/gallery.data.ts`
2. Supports category filtering (group / seminar / events / statues)
3. Lazy-loads images
4. Is fully data-driven — adding images requires only editing `gallery.data.ts`, no component changes
5. Links to this page from the Home page "View Full Gallery" button already placed there

The `galleryImages` array has this shape:
```ts
interface GalleryImage {
  id: string;
  src: string;        // imported asset
  alt: string;
  category?: string;  // 'group' | 'seminar' | 'events' | 'statues'
  featured?: boolean;
}
```

Current categories in the data: `group`, `seminar`, `events`, `statues`

## Design System

- Background: `hsl(var(--background))` — deep indigo
- Surface/card: `hsl(var(--brand-secondary))` or `bg-card`
- Gold border: `border-[hsl(var(--brand-primary)/0.25)]`
- Heading: `font-heading` (Bodoni Moda SC 800)
- `text-gradient-saffron` for highlighted words
- `SectionHeading`, `GoldDivider`, `AnimatedSection` from `@/components/shared/elements`
- No hardcoded hex colors, no hardcoded font families

## Files to Create / Modify

### `src/pages/Gallery.tsx` (NEW)

```tsx
// src/pages/Gallery.tsx
// Full gallery page — all images from src/data/gallery.data.ts
// Add new images there; no component changes needed
// Category filter: All / Group / Seminar / Events / Statues

import { useState } from 'react';
import Layout from '@/components/Layout';
import { SectionHeading, GoldDivider, AnimatedSection } from '@/components/shared/elements';
import { galleryImages } from '@/data/gallery.data';
import type { GalleryImage } from '@/types/gallery.types';

// Derive unique categories from the data
const ALL_CATEGORIES = ['All', ...Array.from(new Set(galleryImages.filter(img => img.category).map(img => img.category!)))];

// Capitalize first letter for display
const formatCategory = (cat: string) => cat.charAt(0).toUpperCase() + cat.slice(1);

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filtered: GalleryImage[] =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter(img => img.category === activeCategory);

  return (
    <Layout>
      <section style={{ background: 'hsl(var(--background))' }} className="py-20">
        <div className="container mx-auto px-4">

          <AnimatedSection className="mb-10">
            <SectionHeading
              title="Our Gallery"
              highlight="Gallery"
              subtitle="Moments of togetherness, learning, and spiritual growth from Satsang OUTR."
              centered
            />
          </AnimatedSection>

          <GoldDivider className="mb-10" />

          {/* Category filter pills */}
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12" delay={0.05}>
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-saffron-gradient text-[hsl(var(--brand-secondary-dark))]'
                    : 'border border-[hsl(var(--brand-primary)/0.4)] text-[hsl(var(--brand-primary))] hover:border-[hsl(var(--brand-primary))]'
                }`}
                aria-pressed={activeCategory === cat}
              >
                {formatCategory(cat)}
              </button>
            ))}
          </AnimatedSection>

          {/* Responsive grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img, i) => (
              <AnimatedSection
                key={img.id}
                delay={Math.min(i * 0.05, 0.4)}
                className="group"
              >
                <div className="aspect-square overflow-hidden rounded-xl ring-1 ring-[hsl(var(--brand-primary)/0.2)] hover:ring-[hsl(var(--brand-primary)/0.6)] transition-all duration-300">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20 text-[hsl(var(--muted-foreground))]">
              No images in this category yet.
            </div>
          )}

        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
```

### `src/App.tsx` — Add /gallery Route

Add import and route:
```tsx
import Gallery from './pages/Gallery';
// In <Routes>:
<Route path="/gallery" element={<Gallery />} />
```

Keep ALL existing routes intact.

## Important Notes

- Do NOT hardcode category names in JSX — derive them from the data array (as shown above)
- `loading="lazy"` and `decoding="async"` on every `<img>` for performance
- `aria-pressed` on filter buttons for accessibility
- The Home page already has a "View Full Gallery" Link to `/gallery` — this task makes that route work
- `AnimatedSection` delay capped at `Math.min(i * 0.05, 0.4)` to avoid very long waits for images at the bottom

## Deliverables Checklist

- [ ] `src/pages/Gallery.tsx` created
- [ ] `src/App.tsx` — /gallery route added, existing routes preserved
- [ ] TypeScript clean (`npx tsc --noEmit`)
- [ ] Committed

## Report File

`docs/superpowers/briefs/task-9-report.md`

Return: status, commit hash, one-line summary, concerns.
