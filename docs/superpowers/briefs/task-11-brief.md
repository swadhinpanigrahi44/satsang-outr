# Task 11: Engineering Improvements — Code Splitting, Dead Code, SEO

## Project Context

SatsangOUTR — Vite + React 18 + TypeScript + Tailwind + shadcn/ui.
Tasks 1-10 complete. All pages built, all routes registered. This is the final engineering polish pass.

Project root: `C:\Users\ASUS\Desktop\SatsangOUTR-main (1)\SatsangOUTR-main`

## What Routes Exist (already done)

App.tsx already has all routes:
- `/` → Index
- `/events` → Events
- `/events/reports` → EventReports
- `/about` → About
- `/contact` → Contact
- `/dharma` → Dharma
- `/edu-care` → EduCare
- `/gallery` → Gallery
- `/testimonials` → Testimonials
- `*` → NotFound

## Goals

### 1. Remove Dead Code

Two files exist but are never imported anywhere:

**`src/components/NavLink.tsx`** — a wrapper around react-router NavLink. Not used anywhere (Navbar uses standard Link). Delete this file.

**`src/components/RegistrationDialog.tsx`** — dialog for the career seminar, hardcoded with `open={false}` so it NEVER renders. Not used anywhere. Delete this file.

Verify with grep before deleting: `grep -r "NavLink\|RegistrationDialog" src/ --include="*.tsx" --include="*.ts" -l` — should only find the files themselves. If found elsewhere, DO NOT delete.

### 2. Code Splitting with React.lazy

Convert `src/App.tsx` to use `React.lazy` + `React.Suspense` for all page imports (not Layout, shared components, or UI components — just pages):

```tsx
import React, { lazy, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy-loaded pages — each becomes a separate bundle chunk
const Index = lazy(() => import('./pages/Index'));
const Events = lazy(() => import('./pages/Events'));
const EventReports = lazy(() => import('./pages/EventReports'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Dharma = lazy(() => import('./pages/Dharma'));
const EduCare = lazy(() => import('./pages/EduCare'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Minimal fallback — the existing design keeps the background color consistent
const PageLoader = () => (
  <div
    style={{ minHeight: '100vh', background: 'hsl(var(--background))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    aria-label="Loading page"
  >
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: '50%',
        border: '3px solid hsl(var(--brand-primary) / 0.2)',
        borderTopColor: 'hsl(var(--brand-primary))',
        animation: 'spin 0.8s linear infinite',
      }}
    />
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/reports" element={<EventReports />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dharma" element={<Dharma />} />
            <Route path="/edu-care" element={<EduCare />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
```

Note: The `spin` keyframe is already defined in `src/index.css` as `@keyframes spin { to { transform: rotate(360deg); } }`. If it's not there, add it. You can check by reading `src/index.css`.

### 3. SEO — sitemap.xml

Create `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://satsangoutr.vercel.app/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://satsangoutr.vercel.app/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://satsangoutr.vercel.app/events</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://satsangoutr.vercel.app/events/reports</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://satsangoutr.vercel.app/dharma</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://satsangoutr.vercel.app/edu-care</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://satsangoutr.vercel.app/gallery</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://satsangoutr.vercel.app/testimonials</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://satsangoutr.vercel.app/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

### 4. Final TypeScript Verification

Run `npx tsc --noEmit` and fix any errors.

## Important Notes

- **Only delete NavLink.tsx and RegistrationDialog.tsx if they are NOT imported anywhere** — grep first
- The `spin` animation used in PageLoader: If `src/index.css` already has a Tailwind `animate-spin` definition via the `@keyframes spin` rule, the inline `animation: 'spin 0.8s linear infinite'` on the div will work. Alternatively, use `className="animate-spin"` on the spinner div (Tailwind has built-in animate-spin).
- For PageLoader, using `className="animate-spin"` is actually better — replace the inline animation style with that class
- The Suspense boundary wraps the entire Routes so it handles navigation lazy-loading globally
- NotFound page should also be lazy-loaded (not excluded from lazy)

## Deliverables Checklist

- [ ] `src/components/NavLink.tsx` deleted (only if unused)
- [ ] `src/components/RegistrationDialog.tsx` deleted (only if unused)
- [ ] `src/App.tsx` — all pages lazy-loaded with React.lazy + Suspense
- [ ] `public/sitemap.xml` created with all 9 URLs
- [ ] TypeScript clean
- [ ] Committed

## Report File

`docs/superpowers/briefs/task-11-report.md`

Return: status, commit hash, one-line summary, concerns.
