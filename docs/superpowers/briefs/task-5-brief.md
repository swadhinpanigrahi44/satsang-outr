# Task 5: Home Page Redesign

## Project Context

SatsangOUTR — Vite + React 18 + TypeScript + Tailwind CSS + shadcn/ui spiritual community site.
All prior tasks are complete: design tokens, data layer, shared components, Navbar/Footer.

Project root: `C:\Users\ASUS\Desktop\SatsangOUTR-main (1)\SatsangOUTR-main`

## What to Build

Completely rewrite `src/pages/Index.tsx` — the Home page.
All existing CONTENT must be preserved. The structure/layout/styling is what changes.

## Design Rules

- Background: `hsl(var(--background))` = deep indigo (do NOT use hardcoded `#243447`)
- Headings: `font-heading` (Bodoni Moda SC 800)
- Body text: `font-body` (Inter) or default
- Gold text: `text-gradient-saffron` (clip-text gradient)
- Gold gradient bg: `bg-saffron-gradient`
- Sections separated by `<GoldDivider />` from `@/components/shared/elements`
- Animations: use `<AnimatedSection>` from `@/components/shared/sections`
- All hardcoded hex colors FORBIDDEN — use CSS variable tokens only

## Imports Available

```tsx
// Assets (Task 1 renamed these):
import outrGroup from '@/assets/outr-group.png';
import statueClose from '@/assets/statue-close.png';
import statueBlue2 from '@/assets/statue-blue2.png';
import dsc6024 from '@/assets/dsc-6024.jpeg';           // renamed from DSC_6024.JPG.jpeg
import whatsappGroup2026 from '@/assets/whatsapp-group-2026.jpeg'; // renamed
import whiteGroup from '@/assets/white-group.jpeg';     // renamed
import statueClose1 from '@/assets/whatsapp-2026-03-12.jpeg'; // renamed, used in hero gallery

// Data:
import { galleryImages } from '@/data/gallery.data';
import { siteConfig } from '@/data/site-config';
import { socialLinks } from '@/data/social-links';

// Components:
import Layout from '@/components/Layout';
import { GoldDivider, AnimatedSection, SectionHeading, SaffronBadge } from '@/components/shared/elements';
import { AnimatedSection as AnimSection } from '@/components/shared/sections';
// (use whichever import path is correct based on barrel exports created in Task 3)

// shadcn:
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, MapPin, ArrowRight } from 'lucide-react';

// Event preview images:
import seminarGroup from '@/assets/seminar-group.png';
import seminarInteraction from '@/assets/seminar-interaction.png';
import seminarPresentation from '@/assets/seminar-presentation.png';
```

## Page Sections (in order)

### Section 1: Hero Gallery (Full-width image slideshow)

- Auto-crossfade between 4 images every 4 seconds
- Images: `outrGroup`, `statueClose1` (whatsapp-2026-03-12), `dsc6024`, `whiteGroup`
- Height: `h-[480px] md:h-[640px]`
- `object-cover` filling the container
- Gradient overlay at bottom third: `linear-gradient(to top, hsl(var(--background)) 0%, transparent 60%)`
- Dot indicators at bottom center (gold active dot, gray inactive)
- NO hero text overlay on the image — text comes in the section below
- Fix the existing typo: `max-w-6x1` → `max-w-6xl`

### Section 2: Hero Text

- Background: `hsl(var(--background))`
- Padding: `py-16 md:py-24`
- Centered, `max-w-3xl mx-auto`
- `<h1>` using `font-heading text-4xl md:text-6xl font-bold`:
  ```
  Satsang — The Man Making Industries
  ```
  (wrap "Man Making Industries" in `text-gradient-saffron` span)
- Subtitle `<p>`: "A socio-cultural and philanthropic institution dedicated to character building, spiritual awakening, and collective upliftment." in `text-[hsl(var(--muted-foreground))] text-lg md:text-xl`
- CTA button: "Visit Official Website" — outlined gold style:
  ```
  border-2 border-[hsl(var(--brand-primary))] text-[hsl(var(--brand-primary))] px-8 py-4 rounded-lg font-semibold hover:bg-saffron-gradient hover:text-[hsl(var(--brand-secondary-dark))] transition-all
  ```
- Entry animation via `<AnimatedSection>`

### Section 3: GoldDivider

### Section 4: Featured Statue Image

- Full-width image: `statue-close.png`
- Container: `max-w-4xl mx-auto`, rounded-xl, overflow-hidden, shadow-xl
- `alt="Sree Sree Thakur Anukulchandra"`
- `loading="lazy"`
- Wrapped in `<AnimatedSection>`

### Section 5: GoldDivider

### Section 6: Upcoming Event Preview

Rewrite of `UpcomingEventCard` inline (no separate component file needed — keep it in Index.tsx for now since UpcomingEventCard.tsx is a separate file that will still exist).

Actually: Keep the separate `src/components/UpcomingEventCard.tsx` file for now and just import it as before. The Events module rewrite in Task 6 will handle the full data-driven approach. For now, keep `<UpcomingEventCard />` in the Home page.

```tsx
import UpcomingEventCard from '@/components/UpcomingEventCard';
```

BUT update `UpcomingEventCard.tsx` to use design tokens (no hardcoded hex). Changes to make in UpcomingEventCard.tsx:
- Replace `bg-[#243447]` → use `style={{ background: 'hsl(var(--background))' }}`  
- Replace hardcoded card bg → `bg-card`
- Replace `border border-primary/20` → keep or use `border border-[hsl(var(--brand-primary)/0.2)]`
- The `bg-saffron-gradient` class is already correct after Task 1 (it now resolves to gold)
- Fix the `🔴 Live` badge — replace with `<SaffronBadge pulsing>Live</SaffronBadge>` if the event date is in the past (March 28 2026), otherwise just show "Registration Closed" badge
- Since March 28 2026 is already past, use `<SaffronBadge>Registration Closed</SaffronBadge>`

### Section 7: GoldDivider

### Section 8: Our Mission

- Background: `hsl(var(--background))`
- Padding: `py-20`
- Centered, `max-w-3xl mx-auto`
- `<SectionHeading title="Our Mission" highlight="Mission" centered />`
- Mission text (PRESERVE EXACTLY):
  ```
  "Do never die, nor cause death; but resist death to death." This website introduces you to the man who roared out this extreme optimism against a backdrop of extreme violence and sadness devouring the world. He is SREE SREE THAKUR ANUKULCHANDRA, Fulfiller the Best of the age, whose clarion call to resist death, of all sorts, physical and spiritual, has rejuvenated innumerable dwindling souls and awakened umpteenth slumbering minds.
  ```
- Text: `text-[hsl(var(--foreground)/0.85)] text-lg leading-relaxed`
- Wrap text block in a subtle gold-bordered card: `border border-[hsl(var(--brand-primary)/0.2)] rounded-xl p-8 bg-[hsl(var(--brand-secondary)/0.5)]`
- Wrap in `<AnimatedSection>`

### Section 9: GoldDivider

### Section 10: Home Gallery Preview (Scalable Photo Grid)

A configurable photo gallery section on the Home page. Future images added by updating `gallery.data.ts` — NO component changes needed.

```tsx
// Home Gallery — reads from gallery.data.ts
// To add photos: add to src/data/gallery.data.ts only
import { galleryImages } from '@/data/gallery.data';

// Show featured images only (featured: true) on Home, all on Gallery page
const featuredImages = galleryImages.filter((img) => img.featured);
```

Layout:
- Section heading: `<SectionHeading title="Our Community" highlight="Community" subtitle="Moments of togetherness, learning, and spiritual growth." centered />`
- Grid: `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3`
- Show max 8 images (slice first 8 from featured, or all featured if fewer)
- Each image: `aspect-square object-cover rounded-lg overflow-hidden` with `loading="lazy"`
- Hover: scale-105 transition
- "View Full Gallery" link button: `<Link to="/gallery">` with outlined gold style

```tsx
<section style={{ background: 'hsl(var(--background))' }} className="py-20">
  <div className="container mx-auto px-4">
    <AnimatedSection className="mb-10">
      <SectionHeading
        title="Our Community"
        highlight="Community"
        subtitle="Moments of togetherness, learning, and spiritual growth."
        centered
      />
    </AnimatedSection>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
      {galleryImages.filter(img => img.featured).slice(0, 8).map((img, i) => (
        <AnimatedSection key={img.id} delay={i * 0.05}>
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </AnimatedSection>
      ))}
    </div>
    <div className="text-center mt-8">
      <Link
        to="/gallery"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[hsl(var(--brand-primary))] text-[hsl(var(--brand-primary))] font-semibold hover:bg-saffron-gradient hover:text-[hsl(var(--brand-secondary-dark))] transition-all"
      >
        View Full Gallery <ArrowRight size={16} />
      </Link>
    </div>
  </div>
</section>
```

## Complete Index.tsx Structure

```tsx
// src/pages/Index.tsx
// Home page — entry point for satsangoutr.vercel.app
// PRESERVE all existing text content verbatim
// Gallery section driven by src/data/gallery.data.ts — add images there

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

import Layout from '@/components/Layout';
import UpcomingEventCard from '@/components/UpcomingEventCard';
import { GoldDivider, SectionHeading, AnimatedSection, SaffronBadge } from '@/components/shared/elements';

import { galleryImages } from '@/data/gallery.data';
import { socialLinks } from '@/data/social-links';

import outrGroup from '@/assets/outr-group.png';
import statueClose from '@/assets/statue-close.png';
import dsc6024 from '@/assets/dsc-6024.jpeg';
import whiteGroup from '@/assets/white-group.jpeg';
import statueClose1 from '@/assets/whatsapp-2026-03-12.jpeg';

// Hero gallery images — 4-second auto-crossfade
const heroImages = [outrGroup, statueClose1, dsc6024, whiteGroup];

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const featuredImages = galleryImages.filter((img) => img.featured).slice(0, 8);

  return (
    <Layout>
      {/* === SECTION 1: Hero Gallery === */}
      <section className="relative overflow-hidden" style={{ background: 'hsl(var(--background))' }}>
        <div className="relative w-full max-w-6xl mx-auto h-[480px] md:h-[640px] overflow-hidden">
          {heroImages.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`Satsang OUTR community photo ${i + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: i === currentImage ? 1 : 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 w-full h-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          ))}
          {/* Bottom gradient fade into page bg */}
          <div
            className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
            style={{ background: 'linear-gradient(to top, hsl(var(--background)), transparent)' }}
          />
          {/* Dot indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                aria-label={`View photo ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentImage
                    ? 'bg-[hsl(var(--brand-primary))] w-6'
                    : 'bg-[hsl(var(--foreground)/0.3)]'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* === SECTION 2: Hero Text === */}
      <section style={{ background: 'hsl(var(--background))' }} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Satsang —{' '}
              <span className="text-gradient-saffron">The Man Making Industries</span>
            </h1>
            <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] leading-relaxed mb-10">
              A socio-cultural and philanthropic institution dedicated to character building,
              spiritual awakening, and collective upliftment.
            </p>
            <a
              href={socialLinks.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-[hsl(var(--brand-primary))] text-[hsl(var(--brand-primary))] font-semibold text-lg hover:bg-saffron-gradient hover:text-[hsl(var(--brand-secondary-dark))] transition-all duration-300"
            >
              Visit Official Website <ExternalLink size={18} />
            </a>
          </AnimatedSection>
        </div>
      </section>

      <GoldDivider className="my-0" />

      {/* === SECTION 3: Featured Statue === */}
      <section style={{ background: 'hsl(var(--background))' }} className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl shadow-black/40">
            <img
              src={statueClose}
              alt="Sree Sree Thakur Anukulchandra"
              className="w-full h-auto"
              loading="lazy"
            />
          </AnimatedSection>
        </div>
      </section>

      <GoldDivider />

      {/* === SECTION 4: Upcoming Events === */}
      <UpcomingEventCard />

      <GoldDivider />

      {/* === SECTION 5: Our Mission === */}
      <section style={{ background: 'hsl(var(--background))' }} className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mx-auto">
            <SectionHeading title="Our Mission" highlight="Mission" centered className="mb-8" />
            <div className="border border-[hsl(var(--brand-primary)/0.25)] rounded-xl p-8 bg-[hsl(var(--brand-secondary)/0.4)]">
              <p className="text-[hsl(var(--foreground)/0.85)] text-lg leading-relaxed text-center">
                "Do never die, nor cause death; but resist death to death." This website introduces
                you to the man who roared out this extreme optimism against a backdrop of extreme
                violence and sadness devouring the world. He is{' '}
                <strong className="text-[hsl(var(--brand-primary))]">
                  SREE SREE THAKUR ANUKULCHANDRA
                </strong>
                , Fulfiller the Best of the age, whose clarion call to resist death, of all sorts,
                physical and spiritual, has rejuvenated innumerable dwindling souls and awakened
                umpteenth slumbering minds.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <GoldDivider />

      {/* === SECTION 6: Community Gallery Preview === */}
      {/* Add new images by editing src/data/gallery.data.ts — no changes needed here */}
      <section style={{ background: 'hsl(var(--background))' }} className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-10">
            <SectionHeading
              title="Our Community"
              highlight="Community"
              subtitle="Moments of togetherness, learning, and spiritual growth."
              centered
            />
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {featuredImages.map((img, i) => (
              <AnimatedSection key={img.id} delay={i * 0.06}>
                <div className="aspect-square overflow-hidden rounded-lg ring-1 ring-[hsl(var(--brand-primary)/0.15)]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[hsl(var(--brand-primary))] text-[hsl(var(--brand-primary))] font-semibold hover:bg-saffron-gradient hover:text-[hsl(var(--brand-secondary-dark))] transition-all"
            >
              View Full Gallery <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
```

## UpcomingEventCard.tsx Token Fix

Also update `src/components/UpcomingEventCard.tsx` to remove hardcoded hex:
- Replace `py-20 bg-[#243447]` → `py-20` with `style={{ background: 'hsl(var(--background))' }}`
- Replace any `bg-[-#0b1e3a]` (the typo version) → `bg-card`
- The `bg-saffron-gradient` class now correctly resolves to gold (set in Task 1) — keep it
- Remove the `🔴 Live` and replace badge with registration status text
- Keep all existing content/text verbatim

## Deliverables Checklist

- [ ] `src/pages/Index.tsx` rewritten — no hardcoded hex, uses design tokens
- [ ] Hero gallery: 4 images, 4s interval, dot indicators, gradient overlay
- [ ] Hero text: `font-heading`, `text-gradient-saffron`, gold CTA button
- [ ] Featured statue section preserved
- [ ] UpcomingEventCard section still appears
- [ ] Mission section: text preserved verbatim
- [ ] Gallery preview: reads from `galleryImages.filter(img => img.featured).slice(0, 8)`
- [ ] `src/components/UpcomingEventCard.tsx` — hardcoded hex removed
- [ ] No `max-w-6x1` typo (fixed to `max-w-6xl`)
- [ ] TypeScript clean (`npx tsc --noEmit`)
- [ ] Committed

## Report File

`docs/superpowers/briefs/task-5-report.md`

Return: status, commit hash(es), one-line summary, concerns.
