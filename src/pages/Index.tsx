// src/pages/Index.tsx
// Home page — entry point for satsangoutr.vercel.app
// PRESERVE all existing text content verbatim
// Gallery section driven by src/data/gallery.data.ts — add images there

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

import Layout from '@/components/Layout';
import UpcomingEventCard from '@/components/UpcomingEventCard';
import { GoldDivider, SectionHeading } from '@/components/shared/elements';
import { AnimatedSection } from '@/components/shared/sections';
import InteractiveBentoGallery from '@/components/ui/interactive-bento-gallery';

import { communityBentoItems } from '@/data/community-gallery.data';
import { socialLinks } from '@/data/social-links';

import outrGroup from '@/assets/outr-group.png';
import statueClose from '@/assets/statue-close.png';
import dsc6024 from '@/assets/dsc-6024.jpeg';
import whiteGroup from '@/assets/white-group.jpeg';
import statueClose1 from '@/assets/whatsapp-2026-03-12.jpeg';

// Hero gallery images — 4-second auto-crossfade
const heroImages = [outrGroup, statueClose1, dsc6024, whiteGroup];

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* === SECTION 1: Hero Gallery === */}
      <section className="relative overflow-hidden" style={{ background: 'hsl(var(--background))' }}>
        <div className="relative w-full max-w-6xl mx-auto h-[480px] md:h-[640px] overflow-hidden">
          {heroImages.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`Satsang OUTR community photo ${i + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: i === currentImage ? 1 : 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 w-full h-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          ))}
          {/* Bottom gradient fade into page bg */}
          <div
            className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
            style={{ background: 'linear-gradient(to top, hsl(var(--background)), transparent)' }}
          />
          {/* Dot indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                aria-label={`View photo ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentImage
                    ? 'bg-[hsl(var(--brand-primary))] w-6'
                    : 'w-2 bg-[hsl(var(--foreground)/0.3)]'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* === SECTION 2: Hero Text === */}
      <section style={{ background: 'hsl(var(--background))' }} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Satsang —{' '}
              <span className="text-gradient-saffron">The Man Making Industries</span>
            </h1>
            <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] leading-relaxed mb-10">
              A socio-cultural and philanthropic institution dedicated to character building,
              spiritual awakening, and collective upliftment.
            </p>
            <a
              href={socialLinks.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-[hsl(var(--brand-primary))] text-[hsl(var(--brand-primary))] font-semibold text-lg hover:bg-saffron-gradient hover:text-[hsl(var(--brand-secondary-dark))] transition-all duration-300"
            >
              Visit Official Website <ExternalLink size={18} />
            </a>
          </AnimatedSection>
        </div>
      </section>

      <GoldDivider className="my-0" />

      {/* === SECTION 3: Featured Statue === */}
      <section style={{ background: 'hsl(var(--background))' }} className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl shadow-black/40">
            <img
              src={statueClose}
              alt="Sree Sree Thakur Anukulchandra"
              className="w-full h-auto"
              loading="lazy"
            />
          </AnimatedSection>
        </div>
      </section>

      <GoldDivider />

      {/* === SECTION 4: Upcoming Events === */}
      <UpcomingEventCard />

      <GoldDivider />

      {/* === SECTION 5: Our Mission === */}
      <section style={{ background: 'hsl(var(--background))' }} className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mx-auto">
            <SectionHeading title="Our Mission" highlight="Mission" centered className="mb-8" />
            <div className="border border-[hsl(var(--brand-primary)/0.25)] rounded-xl p-8 bg-[hsl(var(--brand-secondary)/0.4)]">
              <p className="text-[hsl(var(--foreground)/0.85)] text-lg leading-relaxed text-center">
                "Do never die, nor cause death; but resist death to death." This website introduces
                you to the man who roared out this extreme optimism against a backdrop of extreme
                violence and sadness devouring the world. He is{' '}
                <strong className="text-[hsl(var(--brand-primary))]">
                  SREE SREE THAKUR ANUKULCHANDRA
                </strong>
                , Fulfiller the Best of the age, whose clarion call to resist death, of all sorts,
                physical and spiritual, has rejuvenated innumerable dwindling souls and awakened
                umpteenth slumbering minds.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <GoldDivider />

      {/* === SECTION 6: Community Gallery (Bento) === */}
      {/* To change hover names/descriptions: edit src/data/community-gallery.data.ts */}
      <section style={{ background: 'hsl(var(--background))' }} className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-10">
            <SectionHeading
              title="Our Community"
              highlight="Community"
              subtitle="Hover over any photo to see its story. Click to explore. Drag to rearrange."
              centered
            />
          </AnimatedSection>
          <InteractiveBentoGallery mediaItems={communityBentoItems} />
          <div className="text-center mt-10">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[hsl(var(--brand-primary))] text-[hsl(var(--brand-primary))] font-semibold hover:bg-saffron-gradient hover:text-[hsl(var(--brand-secondary-dark))] transition-all"
            >
              View Full Gallery <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
