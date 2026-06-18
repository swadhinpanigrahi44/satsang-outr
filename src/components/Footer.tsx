// src/components/Footer.tsx
// Footer — reads nav links from src/data/navigation.ts and social links from src/data/social-links.ts
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Linkedin } from 'lucide-react';
import { navItems } from '@/data/navigation';
import { socialLinks } from '@/data/social-links';
import { siteConfig } from '@/data/site-config';
import { GoldDivider } from '@/components/shared/elements';
import logo from '@/assets/logo.jpeg';

// Real WhatsApp logo SVG (official brand mark)
const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
              {/* Real WhatsApp logo */}
              <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className={socialIconClass} aria-label="Join our WhatsApp group">
                <WhatsAppIcon size={18} />
              </a>
              <a href={`mailto:${socialLinks.email}`} className={socialIconClass} aria-label="Email us">
                <Mail size={18} />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={socialIconClass} aria-label="Connect on LinkedIn">
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
