// src/pages/Events.tsx
// Events hub — 3 program category cards at top, Career Seminar detail below
// Category data: src/features/events/data/event-registry.ts
// Seminar data:  src/features/events/data/events.data.ts
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import { GoldDivider, SectionHeading, SaffronBadge, AnimatedSection } from '@/components/shared/elements';
import EventCategoryCard from '@/features/events/components/EventCategoryCard';
import SessionRow from '@/features/events/components/SessionRow';
import PlenaryPanel from '@/features/events/components/PlenaryPanel';
import DomainBox from '@/features/events/components/DomainBox';
import { eventCategories } from '@/features/events/data/event-registry';
import { careerSeminar2026 } from '@/features/events/data/events.data';

const Events = () => {
  return (
    <Layout>
      {/* === SECTION 1: Our Programs — category cards === */}
      <section style={{ background: 'hsl(var(--background))' }} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-12">
            <SectionHeading
              title="Our Programs"
              highlight="Programs"
              subtitle="Explore our webinars, discourses, and community activities. Click any card for full details."
              centered
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {eventCategories.map((cat, i) => (
              <EventCategoryCard key={cat.slug} event={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* === SECTION 2: Career Counselling Seminar 2026 (past event detail) === */}
      <section style={{ background: 'hsl(var(--background))' }} className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">

          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-3">
              {careerSeminar2026.title}
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] mt-2 mb-6">{careerSeminar2026.subtitle}</p>
            <SaffronBadge>Registration Closed</SaffronBadge>
          </AnimatedSection>

          <AnimatedSection className="mb-16" delay={0.1}>
            <SectionHeading title="Event Schedule" highlight="Schedule" className="mb-8" />
            <div className="space-y-6">
              {careerSeminar2026.schedule.map((session, i) => (
                <SessionRow key={i} session={session} />
              ))}
            </div>
          </AnimatedSection>

          <GoldDivider className="my-12" />

          <AnimatedSection delay={0.15}>
            <SectionHeading
              title="Domain-Specific Plenary Sessions"
              highlight="Plenary"
              subtitle="Concurrent sessions across four career domains."
              className="mb-8"
            />
            <div className="grid md:grid-cols-2 gap-6">
              {careerSeminar2026.plenaryPanels.map((panel) => (
                <PlenaryPanel key={panel.id} panel={panel} />
              ))}
            </div>
          </AnimatedSection>

          <GoldDivider className="my-12" />

          <AnimatedSection delay={0.2}>
            <div className="flex items-center gap-3 mb-6">
              <SaffronBadge pulsing variant="solid">Parallel Session</SaffronBadge>
            </div>
            <SectionHeading
              title="One-to-One Career Counselling"
              highlight="Career Counselling"
              subtitle="2:00 PM to 5:00 PM"
              className="mb-8"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {careerSeminar2026.counsellingDomains.map((domain) => (
                <DomainBox key={domain.id} domain={domain} />
              ))}
            </div>
          </AnimatedSection>

          <div className="text-center mt-16 pt-8 border-t border-[hsl(var(--border))]">
            <p className="text-[hsl(var(--muted-foreground))] mb-4 text-sm">
              Looking for past event summaries and photo galleries?
            </p>
            <Link
              to="/events/reports"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[hsl(var(--brand-primary))] text-[hsl(var(--brand-primary))] font-semibold hover:bg-saffron-gradient hover:text-[hsl(var(--brand-secondary-dark))] transition-all"
            >
              View Event Reports & Gallery <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Events;
