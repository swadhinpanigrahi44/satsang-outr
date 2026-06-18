# Task 6: Events Module — Data-Driven Page + New Event Cards

## Project Context

SatsangOUTR — Vite + React 18 + TypeScript + Tailwind + shadcn/ui.
All prior tasks done: design tokens, data layer, shared components, Navbar/Footer, Home page.

Project root: `C:\Users\ASUS\Desktop\SatsangOUTR-main (1)\SatsangOUTR-main`

## Goals

1. Rewrite `src/pages/Events.tsx` to be fully data-driven using `events.data.ts`
2. Add a new "Upcoming Events" section at the TOP with cards for: Webinar, Satyanusarana, Meetups
3. Decompose the 620-line monolith into focused feature components
4. ALL speaker/session content preserved verbatim — just moved out of JSX into components

## New Files to Create

### `src/features/events/components/EventCard.tsx`
Premium card for upcoming events (Webinar, Satyanusarana, Meetup).

```tsx
// EventCard — premium card for upcoming/featured events
// Used for Webinar, Satyanusarana, and Meetup event types
import { motion } from 'framer-motion';
import { CalendarDays, MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { EventCard as EventCardType } from '@/types/event.types';
import { SaffronBadge } from '@/components/shared/elements';

const TYPE_LABELS: Record<EventCardType['type'], string> = {
  webinar: 'Webinar',
  satyanusarana: 'Satyanusarana',
  meetup: 'Meetup',
  seminar: 'Seminar',
};

const STATUS_CONFIG = {
  upcoming: { label: 'Upcoming', pulsing: false },
  ongoing: { label: 'Live Now', pulsing: true },
  past: { label: 'Completed', pulsing: false },
};

interface EventCardProps {
  event: EventCardType;
  index?: number;
}

const EventCard = ({ event, index = 0 }: EventCardProps) => {
  const status = STATUS_CONFIG[event.status];
  const isExternal = event.ctaUrl?.startsWith('http');

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col rounded-2xl overflow-hidden border border-[hsl(var(--brand-primary)/0.2)] bg-card shadow-lg hover:shadow-gold transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          <SaffronBadge variant="solid">{TYPE_LABELS[event.type]}</SaffronBadge>
          <SaffronBadge pulsing={status.pulsing} variant="outline">{status.label}</SaffronBadge>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <h3 className="font-heading text-xl font-bold text-foreground leading-snug">
          {event.title}
        </h3>
        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed flex-1">
          {event.description}
        </p>

        {/* Meta */}
        <div className="space-y-2 text-sm text-[hsl(var(--muted-foreground))]">
          <div className="flex items-center gap-2">
            <CalendarDays size={14} className="text-[hsl(var(--brand-primary))] flex-shrink-0" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-[hsl(var(--brand-primary))] flex-shrink-0" />
            <span>{event.location}</span>
          </div>
        </div>

        {/* CTA */}
        {event.ctaUrl && (
          isExternal ? (
            <a
              href={event.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-saffron-gradient text-[hsl(var(--brand-secondary-dark))] font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              {event.ctaLabel} <ExternalLink size={14} />
            </a>
          ) : (
            <Link
              to={event.ctaUrl}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-[hsl(var(--brand-primary))] text-[hsl(var(--brand-primary))] font-semibold text-sm hover:bg-saffron-gradient hover:text-[hsl(var(--brand-secondary-dark))] transition-all"
            >
              {event.ctaLabel} <ArrowRight size={14} />
            </Link>
          )
        )}
      </div>
    </motion.article>
  );
};

export default EventCard;
```

### `src/features/events/components/SessionRow.tsx`

```tsx
// SessionRow — single row in the event schedule timeline
import type { Session } from '@/types/event.types';

interface SessionRowProps {
  session: Session;
}

const SessionRow = ({ session }: SessionRowProps) => (
  <div className="flex gap-4 md:gap-6">
    <div className="text-[hsl(var(--brand-primary))] font-semibold text-sm w-36 flex-shrink-0 pt-1">
      {session.time}
    </div>
    <div
      className="flex-1 p-5 rounded-lg border-r-4 border-[hsl(var(--brand-primary))]"
      style={{ background: 'hsl(var(--brand-secondary-mid))' }}
    >
      <h3 className="font-heading text-white font-bold text-base mb-1">{session.title}</h3>
      {session.description && (
        <p className="text-[hsl(var(--muted-foreground))] text-sm">{session.description}</p>
      )}
      {session.subSpeakers && session.subSpeakers.length > 0 && (
        <ul className="mt-3 space-y-2">
          {session.subSpeakers.map((sp, i) => (
            <li key={i} className="text-sm">
              <span className="text-foreground font-medium">{sp.name}</span>
              {sp.organization && (
                <span className="text-[hsl(var(--muted-foreground))] text-xs block">{sp.organization}</span>
              )}
              {sp.role && !sp.organization && (
                <span className="text-[hsl(var(--muted-foreground))] text-xs block">{sp.role}</span>
              )}
              {sp.topic && (
                <span className="text-[hsl(var(--muted-foreground)/0.8)] text-xs italic block">
                  Topic: {sp.topic}
                </span>
              )}
            </li>
          ))}
          <li className="text-sm font-semibold text-[hsl(var(--brand-primary))]">
            Interactive Q &amp; A Session (Moderated discussion with all speakers)
          </li>
        </ul>
      )}
    </div>
  </div>
);

export default SessionRow;
```

### `src/features/events/components/PlenaryPanel.tsx`

```tsx
// PlenaryPanel — a single domain panel in the plenary grid
import type { PlenaryPanel as PlenaryPanelType } from '@/types/event.types';

interface PlenaryPanelProps {
  panel: PlenaryPanelType;
}

const PlenaryPanel = ({ panel }: PlenaryPanelProps) => (
  <div
    className="p-8 rounded-2xl shadow-lg"
    style={{ background: 'hsl(var(--brand-secondary-dark))' }}
  >
    <h3 className="font-heading text-lg font-bold text-white mb-2">{panel.title}</h3>
    <span className="text-[hsl(var(--muted-foreground))] text-xs mb-3 block">{panel.timeRange}</span>
    {panel.theme && (
      <p className="text-[hsl(var(--muted-foreground))] text-sm italic mb-4">{panel.theme}</p>
    )}

    {/* Moderator */}
    <div
      className="p-4 rounded-lg mb-4 border-l-4 border-[hsl(var(--brand-primary))]"
      style={{ background: 'hsl(var(--brand-secondary-mid))' }}
    >
      <p className="text-[hsl(var(--brand-primary))] text-xs font-bold uppercase tracking-wide">Moderator</p>
      <p className="text-white font-semibold text-sm mt-1">{panel.moderator.name}</p>
      <p className="text-[hsl(var(--muted-foreground))] text-xs">{panel.moderator.role}</p>
    </div>

    {/* Speakers */}
    <ul className="space-y-2">
      {panel.speakers.map((sp, i) => (
        <li key={i} className="text-sm">
          <span className="text-[hsl(var(--foreground)/0.9)]">{sp.name}</span>
          <span className="text-[hsl(var(--muted-foreground))] text-xs block">{sp.role}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default PlenaryPanel;
```

### `src/features/events/components/DomainBox.tsx`

```tsx
// DomainBox — one-to-one counselling domain box
import type { CounsellingDomain } from '@/types/event.types';

interface DomainBoxProps {
  domain: CounsellingDomain;
}

const DomainBox = ({ domain }: DomainBoxProps) => (
  <div
    className="w-full p-8 rounded-xl shadow-lg hover:shadow-gold transition-shadow"
    style={{ background: 'hsl(var(--brand-secondary-mid))' }}
  >
    <h4 className="font-heading text-lg font-bold text-gradient-saffron mb-4">{domain.title}</h4>
    <ul className="space-y-2">
      {domain.speakers.map((sp, i) => (
        <li key={i} className="text-sm">
          <span className="text-white">{sp.name}</span>
          <span className="text-[hsl(var(--muted-foreground))] text-xs block">{sp.role}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default DomainBox;
```

## Files to Rewrite

### `src/pages/Events.tsx` — Full Rewrite

The new Events page has TWO major sections:
1. **Upcoming Events grid** (new!) — shows Webinar, Satyanusarana, Meetup cards from `eventCards` data
2. **Career Seminar 2026 Detail** — existing content, now data-driven

```tsx
// src/pages/Events.tsx
// Events page — two sections:
//   1. Upcoming events grid (Webinar, Satyanusarana, Meetups) — add to src/data/event-cards.data.ts
//   2. Career Counselling Seminar 2026 detail — data in src/features/events/data/events.data.ts
import { motion } from 'framer-motion';
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

        </div>
      </section>
    </Layout>
  );
};

export default Events;
```

## Directory Creation

- `src/features/events/components/`

## Important Notes

- ALL speaker names, roles, and organizations must appear identically to what was in the original `Events.tsx` — the data was extracted in Task 2, so if you render from `careerSeminar2026` you preserve it automatically
- The `SessionRow` for the Career Counselling Session (11AM-1PM) uses `subSpeakers` array — render them with speaker name, role, and topic
- `AnimatedSection` is re-exported from both `@/components/shared/elements` and `@/components/shared/sections` — use the one from elements barrel for consistency with other tasks
- Run `npx tsc --noEmit` before committing

## Deliverables Checklist

- [ ] `src/features/events/components/EventCard.tsx`
- [ ] `src/features/events/components/SessionRow.tsx`
- [ ] `src/features/events/components/PlenaryPanel.tsx`
- [ ] `src/features/events/components/DomainBox.tsx`
- [ ] `src/pages/Events.tsx` rewritten — data-driven, no hardcoded speaker names in JSX
- [ ] Upcoming Events grid shows 3 event cards (Webinar, Satyanusarana, Meetup)
- [ ] Career Seminar 2026 section shows full schedule + plenary + counselling
- [ ] No hardcoded hex colors
- [ ] TypeScript clean
- [ ] Committed

## Report File

`docs/superpowers/briefs/task-6-report.md`

Return: status, commit hash, one-line summary, concerns.
