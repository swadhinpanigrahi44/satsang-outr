# Task 10: Testimonials Page — /testimonials Route

## Project Context

SatsangOUTR — Vite + React 18 + TypeScript + Tailwind + shadcn/ui.
Tasks 1-9 complete. All design tokens, shared components, data layer, and all pages done.

Project root: `C:\Users\ASUS\Desktop\SatsangOUTR-main (1)\SatsangOUTR-main`

## Goal

Create the `/testimonials` page using:
- `TestimonialCarousel` from `src/components/ui/testimonial.tsx`
- `testimonials` data from `src/data/testimonials.data.ts`

The `TestimonialCarousel` component signature:
```ts
interface TestimonialCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: Testimonial[]  // { id, name, avatar, description }
  showArrows?: boolean
  showDots?: boolean
}
```

The `Testimonial` type used by the carousel (from the ui component):
```ts
interface Testimonial {
  id: number | string
  name: string
  avatar: string
  description: string
}
```

Our data in `src/data/testimonials.data.ts` has 5 testimonials with fields: `id`, `name`, `avatar`, `description`, `role?`, `source?`. This is compatible — the carousel only needs the 4 required fields.

## Design System

- Background: `hsl(var(--background))` — deep indigo
- Gold border: `border-[hsl(var(--brand-primary)/0.25)]`
- `font-heading` for Bodoni Moda SC 800 headings
- `text-gradient-saffron`, `SectionHeading`, `GoldDivider`, `AnimatedSection` from `@/components/shared/elements`
- No hardcoded hex colors, no hardcoded font families

## Files to Create / Modify

### `src/pages/Testimonials.tsx` (NEW)

```tsx
// src/pages/Testimonials.tsx
// Route: /testimonials
// Testimonials from Satsang OUTR community members
// Add or edit testimonials in src/data/testimonials.data.ts
import Layout from '@/components/Layout';
import { SectionHeading, GoldDivider, AnimatedSection } from '@/components/shared/elements';
import { TestimonialCarousel } from '@/components/ui/testimonial';
import { testimonials } from '@/data/testimonials.data';

const Testimonials = () => {
  return (
    <Layout>
      <section style={{ background: 'hsl(var(--background))' }} className="py-20">
        <div className="container mx-auto px-4">

          <AnimatedSection className="mb-10">
            <SectionHeading
              title="Community Voices"
              highlight="Voices"
              subtitle="Words from those whose lives have been touched by Satsang OUTR — students, members, and seekers."
              centered
            />
          </AnimatedSection>

          <GoldDivider className="mb-16" />

          {/* Drag-to-swipe stacked card carousel */}
          {/* Add or edit testimonials in src/data/testimonials.data.ts */}
          <AnimatedSection delay={0.1} className="max-w-lg mx-auto mb-20">
            <TestimonialCarousel
              testimonials={testimonials}
              showArrows
              showDots
              className="py-8"
            />
          </AnimatedSection>

          <GoldDivider className="mb-12" />

          {/* Grid of all testimonials as cards */}
          <AnimatedSection delay={0.15} className="mb-6">
            <h2 className="font-heading text-2xl font-bold text-center text-foreground mb-2">
              All <span className="text-gradient-saffron">Testimonials</span>
            </h2>
            <p className="text-center text-[hsl(var(--muted-foreground))] text-sm mb-10">
              Every voice matters. Here are all the stories from our community.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.id} delay={i * 0.08}>
                <div
                  className="p-6 rounded-2xl border border-[hsl(var(--brand-primary)/0.2)] h-full flex flex-col gap-4"
                  style={{ background: 'hsl(var(--brand-secondary)/0.5)' }}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-[hsl(var(--brand-primary)/0.4)]"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-heading text-sm font-bold text-foreground">{t.name}</p>
                      {t.role && (
                        <p className="text-[hsl(var(--muted-foreground))] text-xs">{t.role}</p>
                      )}
                    </div>
                  </div>
                  <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed flex-1">
                    "{t.description}"
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
```

### `src/App.tsx` — Add /testimonials Route

```tsx
import Testimonials from './pages/Testimonials';
// In <Routes>:
<Route path="/testimonials" element={<Testimonials />} />
```

Keep ALL existing routes intact.

## Important Notes

- The `Testimonial` type from `@/components/ui/testimonial` is NOT the same as `@/types/testimonial.types` — the data has extra fields (`role`, `source`) that the carousel ignores. This is fine — TypeScript will accept it because the data satisfies all required fields.
- If TypeScript complains about the type mismatch, cast: `testimonials as import('@/components/ui/testimonial').Testimonial[]` — but try without casting first.
- The carousel component uses `dark:` Tailwind variants — it will render correctly in dark mode since `bg-white dark:bg-card` gives it the right background in dark theme
- `loading="lazy"` on the testimonial card avatars

## Deliverables Checklist

- [ ] `src/pages/Testimonials.tsx` created
- [ ] `src/App.tsx` — /testimonials route added, existing routes preserved
- [ ] TypeScript clean (`npx tsc --noEmit`)
- [ ] Committed

## Report File

`docs/superpowers/briefs/task-10-report.md`

Return: status, commit hash, one-line summary, concerns.
