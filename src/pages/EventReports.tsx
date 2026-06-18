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
