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
