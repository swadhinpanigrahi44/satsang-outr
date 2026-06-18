// src/pages/Events.tsx
// Events page — two sections:
//   1. Upcoming events grid (Webinar, Satyanusarana, Meetups) — add to src/data/event-cards.data.ts
//   2. Career Counselling Seminar 2026 detail — data in src/features/events/data/events.data.ts
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import { GoldDivider, SectionHeading, SaffronBadge, AnimatedSection } from '@/components/shared/elements';
import EventCard from '@/features/events/components/EventCard';
import SessionRow from '@/features/events/components/SessionRow';
import PlenaryPanel from '@/features/events/components/PlenaryPanel';
import DomainBox from '@/features/events/components/DomainBox';
import { eventCards } from '@/data/event-cards.data';
import { careerSeminar2026 } from '@/features/events/data/events.data';

const Events = () => {
  return (
    <Layout>
      {/* === SECTION 1: Upcoming Events (Webinar / Satyanusarana / Meetups) === */}
      <section style={{ background: 'hsl(var(--background))' }} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-12">
            <SectionHeading
              title="Upcoming Events"
              highlight="Events"
              subtitle="Join us for webinars, spiritual gatherings, and campus meetups."
              centered
            />
          </AnimatedSection>
          {/* Add new event cards by editing src/data/event-cards.data.ts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {eventCards.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* === SECTION 2: Career Counselling Seminar 2026 === */}
      <section style={{ background: 'hsl(var(--background))' }} className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">

          {/* Title */}
          <AnimatedSection className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-3">
              {careerSeminar2026.title}
            </h1>
            <p className="text-[hsl(var(--muted-foreground))] mt-2 mb-6">{careerSeminar2026.subtitle}</p>
            <SaffronBadge>Registration Closed</SaffronBadge>
          </AnimatedSection>

          {/* Schedule */}
          <AnimatedSection className="mb-16" delay={0.1}>
            <SectionHeading title="Event Schedule" highlight="Schedule" className="mb-8" />
            <div className="space-y-6">
              {careerSeminar2026.schedule.map((session, i) => (
                <SessionRow key={i} session={session} />
              ))}
            </div>
          </AnimatedSection>

          <GoldDivider className="my-12" />

          {/* Plenary Grid */}
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

          {/* Parallel / One-to-One Counselling */}
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

          {/* Link to Event Reports page */}
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
