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
        <p>Built with devotion for character building &amp; collective upliftment.</p>
      </div>
    </footer>
  );
};

export default Footer;
