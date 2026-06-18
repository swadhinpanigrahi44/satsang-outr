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
