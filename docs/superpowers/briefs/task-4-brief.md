# Task 4: Navbar + Footer + Layout + WhatsApp Integration

## Project Context

SatsangOUTR — Vite + React 18 + TypeScript + Tailwind CSS + shadcn/ui.
- Task 1: Design tokens (Bodoni Moda SC + Inter, saffron gold + sacred indigo CSS vars)
- Task 2: Data layer (navigation.ts, social-links.ts, site-config.ts all ready)
- Task 3: Shared components (WhatsAppButton, SectionHeading, AnimatedSection, etc. ready)

This task rewrites Navbar, Footer, and Layout to use the new design system and data layer.

Project root: `C:\Users\ASUS\Desktop\SatsangOUTR-main (1)\SatsangOUTR-main`

## Design System Reference

CSS variables (from Task 1):
- `--brand-primary: 38 93% 41%` (saffron gold)
- `--brand-secondary: 215 38% 18%` (sacred indigo)
- `--brand-secondary-dark: 218 45% 10%` (deep bg)
- `--background: 218 45% 10%`
- `--foreground: 42 60% 92%` (warm ivory)
- `--muted-foreground: 40 20% 65%`
- `--border: 215 30% 28%`

Tailwind classes from Task 1:
- `font-heading` → Bodoni Moda SC 800
- `font-body` → Inter
- `text-gradient-saffron` → gold gradient text (clip-text)
- `bg-saffron-gradient` → gold gradient bg
- `shadow-gold` → gold glow

Data imports (from Task 2):
- `@/data/navigation.ts` → `navItems: NavItem[]`
- `@/data/social-links.ts` → `socialLinks` object
- `@/data/site-config.ts` → `siteConfig` object

Shared components (from Task 3):
- `@/components/shared/elements/WhatsAppButton` → floating WA button
- `@/components/shared/elements/GoldDivider` → decorative rule

## Files to Rewrite

### 1. `src/components/Navbar.tsx`

Full rewrite. Keep the same file path.

Requirements:
- Import `navItems` from `@/data/navigation.ts` (single source of truth — all 8 nav items)
- Import `logo` from `@/assets/logo.jpeg`
- Import `siteConfig` from `@/data/site-config.ts`
- Dark glass appearance: `bg-[hsl(var(--brand-secondary-dark))]/95 backdrop-blur-md`
- Logo: circular `w-10 h-10` image + `font-heading` site name in `text-gradient-saffron`
- Desktop nav links: small pill links; active = gold bottom border + gold text
- Active detection via `useLocation()` from react-router-dom
- "Official Website" CTA button: outlined gold style
- Mobile hamburger with `aria-expanded` + accessible label
- Mobile drawer: AnimatePresence slide-down with all nav items + Official Website link
- Close mobile menu on nav link click
- Fixed positioning, z-50, full width, border-b in brand-secondary-light color

```tsx
// src/components/Navbar.tsx
// Navigation bar — reads all nav items from src/data/navigation.ts
// Add new pages to navItems there, not here
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '@/data/navigation';
import { siteConfig } from '@/data/site-config';
import { socialLinks } from '@/data/social-links';
import logo from '@/assets/logo.jpeg';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (to: string) => location.pathname === to;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-[hsl(var(--brand-secondary-light))]"
      style={{ background: 'hsl(var(--brand-secondary-dark) / 0.95)', backdropFilter: 'blur(12px)' }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group" aria-label={`${siteConfig.name} — Home`}>
          <img
            src={logo}
            alt="Satsang OUTR logo"
            className="w-10 h-10 rounded-full object-cover ring-2 ring-[hsl(var(--brand-primary)/0.4)] group-hover:ring-[hsl(var(--brand-primary))] transition-all"
          />
          <span className="font-heading text-lg font-bold text-gradient-saffron hidden sm:block">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                isActive(item.to)
                  ? 'text-[hsl(var(--brand-primary))]'
                  : 'text-[hsl(var(--foreground)/0.7)] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--brand-secondary-light)/0.5)]'
              }`}
            >
              {item.label}
              {/* Gold underline for active */}
              {isActive(item.to) && (
                <motion.span
                  layoutId="nav-active-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                  style={{ background: 'hsl(var(--brand-primary))' }}
                />
              )}
            </Link>
          ))}
          <a
            href={socialLinks.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-4 py-2 rounded-md text-sm font-semibold border border-[hsl(var(--brand-primary))] text-[hsl(var(--brand-primary))] hover:bg-saffron-gradient hover:text-[hsl(var(--brand-secondary-dark))] transition-all"
          >
            Official Website
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground rounded-md hover:bg-[hsl(var(--brand-secondary-light)/0.5)] transition-colors"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-b border-[hsl(var(--brand-secondary-light))]"
            style={{ background: 'hsl(var(--brand-secondary-dark))' }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.to)
                      ? 'text-[hsl(var(--brand-primary))] bg-[hsl(var(--brand-secondary-light)/0.5)]'
                      : 'text-[hsl(var(--foreground)/0.8)] hover:text-foreground hover:bg-[hsl(var(--brand-secondary-light)/0.3)]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={socialLinks.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-3 rounded-md text-sm font-semibold text-center border border-[hsl(var(--brand-primary))] text-[hsl(var(--brand-primary))]"
              >
                Official Website ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
```

### 2. `src/components/Footer.tsx`

Full rewrite. Keep same file path.

Requirements:
- Import `navItems`, `socialLinks`, `siteConfig` from data layer
- 4-column responsive grid (stack to 2 on tablet, 1 on mobile)
- Column 1: Logo + brand name + tagline
- Column 2: Quick Links — ALL pages from `navItems`
- Column 3: Official Website CTA (gold button)
- Column 4: Connect with Us — Instagram, Facebook, WhatsApp, Email icons
- Add Twitter/X and LinkedIn icons (link to `#` placeholder — real links not provided)
- Background: `bg-[hsl(var(--brand-secondary-dark))]`
- Gold divider above copyright line
- Copyright: `© 2026 Satsang OUTR. All rights reserved.`
- All external links `target="_blank" rel="noopener noreferrer"`
- Each social icon: `w-10 h-10` circular, `aria-label` set

```tsx
// src/components/Footer.tsx
// Footer — reads nav links from src/data/navigation.ts and social links from src/data/social-links.ts
// Add new pages or social links in those data files, not here
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MessageCircle, Mail, Twitter, Linkedin } from 'lucide-react';
import { navItems } from '@/data/navigation';
import { socialLinks } from '@/data/social-links';
import { siteConfig } from '@/data/site-config';
import { GoldDivider } from '@/components/shared/elements';
import logo from '@/assets/logo.jpeg';

const Footer = () => {
  const socialIconClass =
    'w-10 h-10 rounded-full flex items-center justify-center text-[hsl(var(--foreground)/0.6)] bg-[hsl(var(--brand-secondary-light)/0.4)] hover:bg-[hsl(var(--brand-primary))] hover:text-[hsl(var(--brand-secondary-dark))] transition-all duration-200';

  return (
    <footer
      className="text-foreground"
      style={{ background: 'hsl(var(--brand-secondary-dark))' }}
      aria-label="Site footer"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <img src={logo} alt="Satsang OUTR logo" className="w-10 h-10 rounded-full object-cover" />
              <span className="font-heading text-xl font-bold text-gradient-saffron">{siteConfig.name}</span>
            </Link>
            <p className="text-[hsl(var(--foreground)/0.6)] text-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="font-heading text-base font-bold mb-5 text-[hsl(var(--brand-primary))] tracking-wide uppercase text-sm">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-[hsl(var(--foreground)/0.65)] hover:text-[hsl(var(--brand-primary))] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Official Website */}
          <div>
            <h3 className="font-heading text-base font-bold mb-5 text-[hsl(var(--brand-primary))] tracking-wide uppercase text-sm">
              Official Website
            </h3>
            <p className="text-sm text-[hsl(var(--foreground)/0.65)] mb-5 leading-relaxed">
              Visit the official Satsang website for more information, resources, and teachings.
            </p>
            <a
              href={siteConfig.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[hsl(var(--brand-primary))] text-[hsl(var(--brand-primary))] text-sm font-semibold hover:bg-saffron-gradient hover:text-[hsl(var(--brand-secondary-dark))] transition-all"
            >
              Visit Official Website ↗
            </a>
          </div>

          {/* Column 4 — Connect */}
          <div>
            <h3 className="font-heading text-base font-bold mb-5 text-[hsl(var(--brand-primary))] tracking-wide uppercase text-sm">
              Connect With Us
            </h3>
            <div className="flex flex-wrap gap-3 mb-4">
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className={socialIconClass} aria-label="Follow us on Instagram">
                <Instagram size={18} />
              </a>
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className={socialIconClass} aria-label="Follow us on Facebook">
                <Facebook size={18} />
              </a>
              <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className={socialIconClass} aria-label="Join our WhatsApp group">
                <MessageCircle size={18} />
              </a>
              <a href={`mailto:${socialLinks.email}`} className={socialIconClass} aria-label="Email us">
                <Mail size={18} />
              </a>
              <a href="#" className={socialIconClass} aria-label="Follow us on Twitter/X">
                <Twitter size={18} />
              </a>
              <a href="#" className={socialIconClass} aria-label="Connect on LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
            <a
              href={`mailto:${socialLinks.email}`}
              className="text-sm text-[hsl(var(--foreground)/0.55)] hover:text-[hsl(var(--brand-primary))] transition-colors"
            >
              {socialLinks.email}
            </a>
          </div>
        </div>
      </div>

      {/* Gold divider + copyright */}
      <GoldDivider />
      <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[hsl(var(--foreground)/0.4)]">
        <p>© 2026 {siteConfig.name}. All rights reserved.</p>
        <p>Built with devotion for character building & collective upliftment.</p>
      </div>
    </footer>
  );
};

export default Footer;
```

### 3. `src/components/Layout.tsx`

Update to add `WhatsAppButton` inside the layout so it appears on every page.

```tsx
// src/components/Layout.tsx
// Root layout — wraps every page with Navbar, main content, Footer, and floating WhatsApp button
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { WhatsAppButton } from '@/components/shared/elements';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'hsl(var(--background))' }}>
      <Navbar />
      <main className="flex-1 pt-16 md:pt-20">{children}</main>
      <Footer />
      {/* Floating WhatsApp contact button — shown on every page */}
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
```

## Important Notes

- `Linkedin` is the correct Lucide React icon name (capital L)
- `Twitter` is available in lucide-react (some versions have `Twitter`, others have `X` — use `Twitter` first, fallback to importing as `{ Twitter as TwitterIcon }` if needed)  
- The `GoldDivider` import comes from `@/components/shared/elements` (barrel export from Task 3)
- The `WhatsAppButton` import comes from `@/components/shared/elements` (barrel export from Task 3)
- `motion` layout animation for active nav indicator requires `layoutId` — framer-motion is installed
- Do NOT modify any page files — only Navbar, Footer, Layout

## Verification

- Run `npx tsc --noEmit` — must pass
- Check that `lucide-react` has `Twitter` and `Linkedin` icons (it does in v0.462 which is installed)

## Deliverables Checklist

- [ ] `src/components/Navbar.tsx` rewritten — 8 nav items from data, gold active indicator, aria-expanded
- [ ] `src/components/Footer.tsx` rewritten — all 8 links, 6 social icons, gold divider
- [ ] `src/components/Layout.tsx` updated — WhatsAppButton added
- [ ] TypeScript clean (`npx tsc --noEmit`)
- [ ] No page files modified
- [ ] Committed

## Report File

`docs/superpowers/briefs/task-4-report.md`

Return: status, commit hash(es), one-line summary, concerns.
