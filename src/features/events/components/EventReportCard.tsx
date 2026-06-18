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
