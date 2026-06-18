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
