// src/components/Navbar.tsx
// Navigation — glassmorphism + sliding hover cursor + day/night theme toggle
import { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '@/data/navigation';
import { siteConfig } from '@/data/site-config';
import { socialLinks } from '@/data/social-links';
import { useTheme } from '@/hooks/useTheme';
import logo from '@/assets/logo.jpeg';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  // Sliding cursor state (desktop only)
  const navContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [cursor, setCursor] = useState({ left: 0, width: 0, opacity: 0 });

  const isActive = (to: string) => location.pathname === to;

  const handleMouseEnter = (index: number) => {
    const el = itemRefs.current[index];
    const container = navContainerRef.current;
    if (!el || !container) return;
    const cRect = container.getBoundingClientRect();
    const eRect = el.getBoundingClientRect();
    setCursor({ left: eRect.left - cRect.left, width: eRect.width, opacity: 1 });
  };

  const handleMouseLeave = () => setCursor(p => ({ ...p, opacity: 0 }));

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        background: 'hsl(var(--brand-secondary-dark) / 0.75)',
        backdropFilter: 'blur(20px) saturate(160%)',
        WebkitBackdropFilter: 'blur(20px) saturate(160%)',
        borderColor: 'hsl(var(--brand-secondary-light) / 0.4)',
      }}
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
        <div
          ref={navContainerRef}
          className="hidden lg:flex items-center gap-1 relative"
          onMouseLeave={handleMouseLeave}
        >
          {/* Sliding background pill */}
          <motion.div
            className="absolute top-1 bottom-1 rounded-md pointer-events-none"
            animate={cursor}
            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
            style={{ background: 'hsl(var(--brand-secondary-light) / 0.5)' }}
          />

          {navItems.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              ref={el => { itemRefs.current[i] = el; }}
              onMouseEnter={() => handleMouseEnter(i)}
              className={`relative z-10 px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                isActive(item.to)
                  ? 'text-[hsl(var(--brand-primary))]'
                  : 'text-[hsl(var(--foreground)/0.75)] hover:text-foreground'
              }`}
            >
              {item.label}
              {/* Gold underline for active route */}
              {isActive(item.to) && (
                <motion.span
                  layoutId="nav-active-indicator"
                  className="absolute bottom-0 left-1 right-1 h-0.5 rounded-full"
                  style={{ background: 'hsl(var(--brand-primary))' }}
                />
              )}
            </Link>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-md text-[hsl(var(--foreground)/0.7)] hover:text-foreground hover:bg-[hsl(var(--brand-secondary-light)/0.5)] transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <a
            href={socialLinks.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 rounded-md text-sm font-semibold border border-[hsl(var(--brand-primary))] text-[hsl(var(--brand-primary))] hover:bg-saffron-gradient hover:text-[hsl(var(--brand-secondary-dark))] transition-all"
          >
            Official Website
          </a>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 text-[hsl(var(--foreground)/0.7)] rounded-md hover:bg-[hsl(var(--brand-secondary-light)/0.5)] transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-foreground rounded-md hover:bg-[hsl(var(--brand-secondary-light)/0.5)] transition-colors"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden overflow-hidden"
            style={{
              background: 'hsl(var(--brand-secondary-dark) / 0.95)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid hsl(var(--brand-secondary-light) / 0.3)',
            }}
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
