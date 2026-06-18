# Task 7: Event Reports — Nested Route /events/reports

## Project Context

SatsangOUTR — Vite + React 18 + TypeScript + Tailwind + shadcn/ui.
All prior tasks complete. The Events page now exists at `/events`.

Project root: `C:\Users\ASUS\Desktop\SatsangOUTR-main (1)\SatsangOUTR-main`

## Architecture Decision (already decided — implement this)

Use nested route `/events/reports` — a dedicated sub-page of Events.
Scalable approach: new event reports are added by editing a data file only.

The `/events` page gets a "View Event Reports" link at the bottom.
The `/events/reports` page shows Past Events, Event Gallery, and downloadable report cards.

## Files to Create

### `src/types/report.types.ts`

```typescript
// Event report type — add new reports to src/data/event-reports.data.ts
export interface EventReport {
  id: string;
  title: string;
  date: string;
  venue: string;
  summary: string;
  highlights: string[];
  photos: string[];       // array of image URLs or imported asset paths
  attendeeCount?: number;
  reportPdfUrl?: string;  // optional link to full report PDF
}
```

### `src/data/event-reports.data.ts`

```typescript
// Event reports data — add new past event reports here
// Each report appears as a card on /events/reports
import type { EventReport } from '@/types/report.types';
import seminarGroup from '@/assets/seminar-group.png';
import seminarInteraction from '@/assets/seminar-interaction.png';
import seminarPresentation from '@/assets/seminar-presentation.png';
import seminarSpeaker from '@/assets/seminar-speaker.png';
import confidenceSession from '@/assets/confidence-session.png';
import gathering from '@/assets/gathering.png';

export const eventReports: EventReport[] = [
  {
    id: 'career-seminar-2026',
    title: 'Career Counselling Seminar 2026',
    date: 'March 28, 2026',
    venue: 'Convention Hall, SOA Campus 2, Near SUM Hospital, Bhubaneswar',
    summary:
      'A landmark career counselling seminar featuring 25+ eminent speakers from IIT Madras, DRDO, Wipro, IIM Ahmedabad, Oxford University, and government services. Over 300 students attended across civil services, higher education, management, and agriculture domains.',
    highlights: [
      '25+ speakers across 4 domains',
      'One-to-one career counselling sessions',
      'Domain-specific plenary panels',
      'Musical reflection performance by Kamalakhya Parida',
      '300+ student attendees',
    ],
    photos: [seminarGroup, seminarInteraction, seminarPresentation, seminarSpeaker],
    attendeeCount: 300,
  },
  {
    id: 'gathering-2025',
    title: 'Satsang OUTR Annual Gathering 2025',
    date: 'December 14, 2025',
    venue: 'OUTR Campus, Bhubaneswar',
    summary:
      'Annual gathering of Satsang OUTR members celebrating the birth anniversary of Sree Sree Thakur Anukulchandra. A day of spiritual readings, community bonding, and collective upliftment.',
    highlights: [
      'Spiritual readings from Sree Sree Thakur\'s teachings',
      'Community bonding activities',
      'Cultural performances',
      'Prasad distribution',
    ],
    photos: [gathering, confidenceSession],
    attendeeCount: 150,
  },
];
```

### `src/features/events/components/EventReportCard.tsx`

```tsx
// EventReportCard — card displaying a past event report
// Add reports to src/data/event-reports.data.ts to show more cards
import { motion } from 'framer-motion';
import { CalendarDays, MapPin, Users } from 'lucide-react';
import type { EventReport } from '@/types/report.types';
import { SaffronBadge } from '@/components/shared/elements';

interface EventReportCardProps {
  report: EventReport;
  index?: number;
}

const EventReportCard = ({ report, index = 0 }: EventReportCardProps) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="rounded-2xl overflow-hidden border border-[hsl(var(--brand-primary)/0.2)] bg-card shadow-lg"
  >
    {/* Photo gallery strip */}
    {report.photos.length > 0 && (
      <div className="grid grid-cols-4 h-40">
        {report.photos.slice(0, 4).map((photo, i) => (
          <div key={i} className="overflow-hidden">
            <img
              src={photo}
              alt={`${report.title} photo ${i + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    )}

    {/* Content */}
    <div className="p-6 space-y-4">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-heading text-xl font-bold text-foreground leading-snug">
          {report.title}
        </h3>
        <SaffronBadge>Past Event</SaffronBadge>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap gap-4 text-sm text-[hsl(var(--muted-foreground))]">
        <span className="flex items-center gap-1.5">
          <CalendarDays size={14} className="text-[hsl(var(--brand-primary))]" />
          {report.date}
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin size={14} className="text-[hsl(var(--brand-primary))]" />
          {report.venue}
        </span>
        {report.attendeeCount && (
          <span className="flex items-center gap-1.5">
            <Users size={14} className="text-[hsl(var(--brand-primary))]" />
            {report.attendeeCount}+ attendees
          </span>
        )}
      </div>

      <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
        {report.summary}
      </p>

      {/* Highlights */}
      <ul className="space-y-1">
        {report.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-[hsl(var(--foreground)/0.8)]">
            <span className="text-[hsl(var(--brand-primary))] mt-0.5">✦</span>
            {h}
          </li>
        ))}
      </ul>

      {report.reportPdfUrl && (
        <a
          href={report.reportPdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[hsl(var(--brand-primary))] text-[hsl(var(--brand-primary))] text-sm font-semibold hover:bg-saffron-gradient hover:text-[hsl(var(--brand-secondary-dark))] transition-all"
        >
          Download Report PDF
        </a>
      )}
    </div>
  </motion.article>
);

export default EventReportCard;
```

### `src/pages/EventReports.tsx`

```tsx
// src/pages/EventReports.tsx
// Route: /events/reports
// Add new past event reports by editing src/data/event-reports.data.ts only
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/Layout';
import { GoldDivider, SectionHeading, AnimatedSection } from '@/components/shared/elements';
import EventReportCard from '@/features/events/components/EventReportCard';
import { eventReports } from '@/data/event-reports.data';
import dsc6024 from '@/assets/dsc-6024.jpeg';
import whiteGroup from '@/assets/white-group.jpeg';
import outrGroup from '@/assets/outr-group.png';
import whatsapp20260312 from '@/assets/whatsapp-2026-03-12.jpeg';
import seminarGroup from '@/assets/seminar-group.png';
import seminarInteraction from '@/assets/seminar-interaction.png';

// All gallery photos for the event gallery section
// Add new photos here or in gallery.data.ts
const eventGalleryPhotos = [
  { src: seminarGroup, alt: 'Career Counselling Seminar 2026' },
  { src: seminarInteraction, alt: 'Seminar interaction session' },
  { src: outrGroup, alt: 'Satsang OUTR group photo' },
  { src: dsc6024, alt: 'Satsang OUTR gathering' },
  { src: whiteGroup, alt: 'Satsang OUTR members' },
  { src: whatsapp20260312, alt: 'Satsang community gathering' },
];

const EventReports = () => {
  return (
    <Layout>
      <section style={{ background: 'hsl(var(--background))' }} className="py-16 md:py-24">
        <div className="container mx-auto px-4">

          {/* Back link */}
          <AnimatedSection className="mb-8">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-[hsl(var(--brand-primary))] text-sm font-medium hover:opacity-80 transition-opacity"
            >
              <ArrowLeft size={16} /> Back to Events
            </Link>
          </AnimatedSection>

          {/* Page title */}
          <AnimatedSection className="mb-12" delay={0.05}>
            <SectionHeading
              title="Event Reports"
              highlight="Reports"
              subtitle="Recaps, highlights, and galleries from our past events."
              centered
            />
          </AnimatedSection>

          {/* Past Event Report Cards */}
          {/* Add new reports in src/data/event-reports.data.ts */}
          <div className="space-y-8 max-w-4xl mx-auto mb-20">
            {eventReports.map((report, i) => (
              <EventReportCard key={report.id} report={report} index={i} />
            ))}
          </div>

          <GoldDivider className="my-12" />

          {/* Event Gallery */}
          <AnimatedSection className="mb-10" delay={0.1}>
            <SectionHeading
              title="Event Gallery"
              highlight="Gallery"
              subtitle="Moments captured from our events and gatherings."
              centered
            />
          </AnimatedSection>

          {/* Photo grid — add photos to eventGalleryPhotos array above */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {eventGalleryPhotos.map((photo, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-[hsl(var(--brand-primary)/0.15)]">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default EventReports;
```

## Update `src/pages/Events.tsx` — Add "View Reports" Link

At the very bottom of the Events page (after the counselling domains section), add:

```tsx
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
```

`ArrowRight` is already imported from `lucide-react` in Events.tsx — check; if not, add it.

## Route Registration (in App.tsx)

Add this route to `src/App.tsx`:
```tsx
<Route path="/events/reports" element={<EventReports />} />
```

Import: `import EventReports from './pages/EventReports';`

Do NOT remove the existing `/events` route.

## Important Notes

- `src/pages/Events.tsx` currently imports `ArrowRight` indirectly through components. Check if it needs to be imported directly before using it in the new link block.
- The `EventReports` page uses `Layout` so the WhatsApp button and Navbar/Footer appear automatically
- TypeScript: `eventReports` items in the data file use local image imports — these work fine since Vite handles them

## Deliverables Checklist

- [ ] `src/types/report.types.ts`
- [ ] `src/data/event-reports.data.ts` (2 report entries)
- [ ] `src/features/events/components/EventReportCard.tsx`
- [ ] `src/pages/EventReports.tsx`
- [ ] `src/pages/Events.tsx` — "View Reports" link added at bottom
- [ ] `src/App.tsx` — `/events/reports` route registered
- [ ] TypeScript clean
- [ ] Committed

## Report File

`docs/superpowers/briefs/task-7-report.md`

Return: status, commit hash, one-line summary, concerns.
