// src/pages/About.tsx
// About Sree Sree Thakur Anukulchandra
//
// ═══════════════════════════════════════════════════════════════
// HOW TO ADD MORE PHOTOS TO THE HERO SLIDESHOW
// ───────────────────────────────────────────────────────────────
// 1. Copy your photo into:  src/assets/
// 2. Add an import line below (follow the pattern of the existing ones)
// 3. Add the imported variable to the heroImages array
// That's it — the carousel picks it up automatically.
// ═══════════════════════════════════════════════════════════════

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Layout from '@/components/Layout';
import { GoldDivider, SectionHeading, AnimatedSection, SpiritualCard } from '@/components/shared/elements';

// ─── ADD / REMOVE HERO PHOTOS HERE ───────────────────────────
import statueBlue   from '@/assets/statue-blue.jpeg';
import statueClose  from '@/assets/statue-close.png';
import statueFlowers from '@/assets/statue-flowers.png';
import statueWhite  from '@/assets/statue-white.png';
import statueBlue2  from '@/assets/statue-blue2.png';
// Add more:  import myNewPhoto from '@/assets/my-new-photo.jpg';

const heroImages = [
  { src: statueBlue,    alt: 'Sree Sree Thakur Anukulchandra — blue tone' },
  { src: statueClose,   alt: 'Sree Sree Thakur Anukulchandra — close view' },
  { src: statueFlowers, alt: 'Sree Sree Thakur Anukulchandra — with flowers' },
  { src: statueWhite,   alt: 'Sree Sree Thakur Anukulchandra — white statue' },
  { src: statueBlue2,   alt: 'Sree Sree Thakur Anukulchandra — second view' },
  // Add more:  { src: myNewPhoto, alt: 'Description of the photo' },
];
// ─────────────────────────────────────────────────────────────

const biographyCards = [
  {
    title: 'Biography',
    body: 'Sree Sree Thakur Anukulchandra was born on 14th September 1888 in Himaitpur, a small village in the Pabna district of undivided Bengal (now in Bangladesh). From an early age, he displayed extraordinary spiritual awareness and a deep compassion for all beings. His life was a living example of the ideals he taught — devotion, discipline, and selfless service.',
  },
  {
    title: 'Spiritualism as Science',
    body: 'Sree Sree Thakur viewed spiritualism not as blind faith or superstition, but as a clear understanding of the laws that govern life, growth, and human potential. He taught that every individual can unlock their highest possibilities by aligning themselves with these natural and spiritual laws through devotion to the living Ideal.',
  },
  {
    title: 'Community & Service',
    body: 'He emphasized the importance of community living rooted in love, mutual respect, and shared responsibility. For him, true spiritual progress was inseparable from social responsibility — serving others, nurturing relationships, and contributing to the well-being of the collective.',
  },
  {
    title: 'Educator, Philosopher, Reformer',
    body: 'Beyond his spiritual role, Sree Sree Thakur was an educator who transformed the concept of learning, a philosopher who bridged ancient wisdom with modern thought, and a reformer who worked tirelessly for social justice, agricultural self-sufficiency, and the empowerment of every individual regardless of background.',
  },
];

const About = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const total = heroImages.length;

  // Auto-advance every 5 s; pause while the user hovers over the carousel
  useEffect(() => {
    if (isHovered) return;
    const id = setInterval(() => setCurrent(p => (p + 1) % total), 5000);
    return () => clearInterval(id);
  }, [isHovered, total]);

  const prev = () => setCurrent(p => (p - 1 + total) % total);
  const next = () => setCurrent(p => (p + 1) % total);

  return (
    <Layout>
      {/* ── HERO SLIDESHOW — full width, no side margins ── */}
      <section
        className="relative w-full overflow-hidden group"
        style={{ background: 'hsl(var(--background))' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Fixed height container */}
        <div className="relative w-full h-[60vh] md:h-[80vh] min-h-[380px] max-h-[780px]">

          {/* Crossfade images */}
          {heroImages.map((img, i) => (
            <motion.img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 w-full h-full object-cover object-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: i === current ? 1 : 0 }}
              transition={{ duration: 1.0, ease: 'easeInOut' }}
              loading={i === 0 ? 'eager' : 'lazy'}
              draggable={false}
            />
          ))}

          {/* Dark gradient — bottom fade into page bg */}
          <div
            className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
            style={{ background: 'linear-gradient(to top, hsl(var(--background)) 10%, transparent)' }}
          />

          {/* Dark vignette — top edge so navbar text stays readable */}
          <div
            className="absolute inset-x-0 top-0 h-24 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.35), transparent)' }}
          />

          {/* ── LEFT ARROW ── */}
          <button
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10
                       p-3 rounded-full bg-black/30 text-white backdrop-blur-sm
                       opacity-0 group-hover:opacity-100
                       hover:bg-black/55 hover:scale-110
                       transition-all duration-200"
          >
            <ChevronLeft size={26} strokeWidth={2} />
          </button>

          {/* ── RIGHT ARROW ── */}
          <button
            onClick={next}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10
                       p-3 rounded-full bg-black/30 text-white backdrop-blur-sm
                       opacity-0 group-hover:opacity-100
                       hover:bg-black/55 hover:scale-110
                       transition-all duration-200"
          >
            <ChevronRight size={26} strokeWidth={2} />
          </button>

          {/* ── DOT INDICATORS ── */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`View photo ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'bg-[hsl(var(--brand-primary))] w-7'
                    : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          {/* ── Photo counter top-right ── */}
          <div className="absolute top-6 right-6 z-10 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white/80 text-xs font-medium tabular-nums">
            {current + 1} / {total}
          </div>
        </div>
      </section>

      {/* ── PAGE HEADING ── */}
      <section style={{ background: 'hsl(var(--background))' }} className="pt-10 pb-4">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionHeading
              title="About Sree Sree Thakur Anukulchandra"
              highlight="Anukulchandra"
              subtitle="A spiritual guide, reformer, and humanitarian whose teachings continue to inspire millions towards purposeful living."
              centered
            />
          </AnimatedSection>
        </div>
      </section>

      <GoldDivider />

      {/* ── BIOGRAPHY CARDS ── */}
      <section style={{ background: 'hsl(var(--background))' }} className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {biographyCards.map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 0.1}>
                <SpiritualCard title={card.title} variant="dark">
                  <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
                    {card.body}
                  </p>
                </SpiritualCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
