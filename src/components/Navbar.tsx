import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpeg";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Events", to: "/events" },
   
  
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-text-gradient-saffron/90 backdrop-blur-md border-b border-[#243447]">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Satsang OUTR Logo" className="w-12 h-12 rounded-full object-cover" />
          <span className="font-heading text-lg md:text-xl font-semibold text-gradient-saffron">
            Satsang OUTR
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === item.to
                  ? "bg-saffron-light text-saffron-dark"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://www.satsang.org.in/home"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 rounded-md text-sm font-medium bg-saffron-gradient text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Official Website
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card border-b border-saffron"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.to
                      ? "bg-saffron-light text-saffron-dark"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://www.satsang.org.in/home"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-md text-sm font-medium bg-saffron-gradient text-primary-foreground text-center"
              >
                Official Website
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
