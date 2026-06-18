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
      className="animate-spin"
      style={{
        width: 40,
        height: 40,
        borderRadius: '50%',
        border: '3px solid hsl(var(--brand-primary) / 0.2)',
        borderTopColor: 'hsl(var(--brand-primary))',
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
