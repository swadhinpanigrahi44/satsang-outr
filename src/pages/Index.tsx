// src/pages/Index.tsx
// Home page — entry point for satsangoutr.vercel.app
// Gallery section driven by src/data/community-gallery.data.ts
// Testimonials driven by src/data/testimonials.data.ts
// Events driven by src/features/events/data/event-registry.ts

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, CalendarDays, MapPin, Quote } from 'lucide-react';

import Layout from '@/components/Layout';
import { GoldDivider, SectionHeading, SaffronBadge } from '@/components/shared/elements';
import { AnimatedSection } from '@/components/shared/sections';
import InteractiveBentoGallery from '@/components/ui/interactive-bento-gallery';

import { communityBentoItems } from '@/data/community-gallery.data';
import { socialLinks } from '@/data/social-links';
import { testimonials } from '@/data/testimonials.data';
import { eventCategories } from '@/features/events/data/event-registry';

import outrGroup from '@/assets/outr-group.png';
import statueClose from '@/assets/statue-close.png';
import dsc6024 from '@/assets/dsc-6024.jpeg';
import whiteGroup from '@/assets/white-group.jpeg';
import statueClose1 from '@/assets/whatsapp-2026-03-12.jpeg';

const heroImages = [outrGroup, statueClose1, dsc6024, whiteGroup];
const feedbackPreview = testimonials.slice(0, 3);
const upcomingEvents = eventCategories.filter(e => e.status !== 'archived');

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
          <div
            className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
            style={{ background: 'linear-gradient(to top, hsl(var(--background)), transparent)' }}
          />
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

      {/* === SECTION 4: Upcoming Events Notice === */}
      <section style={{ background: 'hsl(var(--background))' }} className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-10">
            <SectionHeading
              title="Upcoming Events"
              highlight="Events"
              subtitle="Stay connected — join our webinars, discourses, and community activities."
              centered
            />
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-4">
            {upcomingEvents.map((event, i) => (
              <AnimatedSection key={event.slug} delay={i * 0.08}>
                <Link
                  to={`/events/${event.slug}`}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 rounded-xl border border-[hsl(var(--brand-primary)/0.15)] bg-[hsl(var(--brand-secondary)/0.3)] hover:border-[hsl(var(--brand-primary)/0.4)] hover:bg-[hsl(var(--brand-secondary)/0.5)] transition-all duration-200 group"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <SaffronBadge variant="outline">
                        {event.status === 'ongoing' ? 'Live Now' : 'Upcoming'}
                      </SaffronBadge>
                      {event.frequency && (
                        <span className="text-[hsl(var(--muted-foreground))] text-xs">{event.frequency}</span>
                      )}
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-[hsl(var(--brand-primary))] transition-colors">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 mt-1.5 text-xs text-[hsl(var(--muted-foreground))]">
                      {event.nextDate && (
                        <span className="flex items-center gap-1">
                          <CalendarDays size={12} className="text-[hsl(var(--brand-primary))]" />
                          {event.nextDate}
                        </span>
                      )}
                      {event.venue && (
                        <span className="flex items-center gap-1">
                          <MapPin size={12} className="text-[hsl(var(--brand-primary))]" />
                          {event.venue}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="flex items-center gap-1 text-[hsl(var(--brand-primary))] text-sm font-semibold group-hover:gap-2 transition-all flex-shrink-0">
                    View Details <ArrowRight size={14} />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[hsl(var(--brand-primary))] text-[hsl(var(--brand-primary))] font-semibold hover:bg-saffron-gradient hover:text-[hsl(var(--brand-secondary-dark))] transition-all"
            >
              View All Events <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

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

      {/* === SECTION 6: Feedback Preview === */}
      <section style={{ background: 'hsl(var(--background))' }} className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-10">
            <SectionHeading
              title="Community Voices"
              highlight="Voices"
              subtitle="Words from those whose lives have been touched by Satsang OUTR."
              centered
            />
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {feedbackPreview.map((t, i) => (
              <AnimatedSection key={t.id} delay={i * 0.08}>
                <div
                  className="p-6 rounded-2xl border border-[hsl(var(--brand-primary)/0.15)] h-full flex flex-col gap-4"
                  style={{ background: 'hsl(var(--brand-secondary)/0.4)' }}
                >
                  <Quote size={20} className="text-[hsl(var(--brand-primary)/0.4)]" />
                  <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed flex-1">
                    "{t.description}"
                  </p>
                  <div>
                    <p className="font-heading text-sm font-bold text-foreground">{t.name}</p>
                    {t.role && (
                      <p className="text-[hsl(var(--muted-foreground))] text-xs">{t.role}</p>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[hsl(var(--brand-primary))] text-[hsl(var(--brand-primary))] font-semibold hover:bg-saffron-gradient hover:text-[hsl(var(--brand-secondary-dark))] transition-all"
            >
              View All Testimonials <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* === SECTION 7: Community Gallery (Bento) === */}
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
