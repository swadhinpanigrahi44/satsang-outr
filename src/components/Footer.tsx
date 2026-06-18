import { Link } from "react-router-dom";
import { Instagram, Facebook, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">Satsang</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              A socio-cultural and philanthropic institution dedicated to character building,
              spiritual awakening, and collective upliftment through the teachings of
              Sree Sree Thakur Anukulchandra.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "Events", to: "/events" },
                
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">Official Website</h3>
            <p className="text-background/70 text-sm mb-4">
              Visit the official Satsang website for more information and resources.
            </p>
            <a
              href="https://www.satsang.org.in/home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 rounded-md bg-saffron-gradient text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Visit Official Website
            </a>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.instagram.com/satsang_outr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary/80 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/share/1F7it9rvLD/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary/80 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://chat.whatsapp.com/DrMF9pQJBEp5iIbq2IUF7x?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary/80 flex items-center justify-center transition-colors"
                aria-label="Join WhatsApp Group"
              >
                <MessageCircle size={20} className="fill-current" />
              </a>
            </div>
            <a
              href="mailto:satsangoutr@gmail.com"
              className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary/80 flex items-center justify-center transition-colors"
              aria-label="Email Us"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-background/50">
          © 2026 Satsang OUTR.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
