import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import type { EventCategory } from '@/types/event.types';
import { SaffronBadge } from '@/components/shared/elements';

const STATUS_CONFIG: Record<EventCategory['status'], { label: string; pulsing: boolean }> = {
  upcoming: { label: 'Upcoming', pulsing: false },
  ongoing: { label: 'Live Now', pulsing: true },
  completed: { label: 'Completed', pulsing: false },
  archived: { label: 'Archived', pulsing: false },
};

interface Props {
  event: EventCategory;
  index?: number;
}

const EventCategoryCard = ({ event, index = 0 }: Props) => {
  const status = STATUS_CONFIG[event.status];

  if (event.status === 'archived') return null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/events/${event.slug}`}
        className="block p-6 rounded-2xl border border-[hsl(var(--brand-primary)/0.2)] hover:border-[hsl(var(--brand-primary)/0.5)] bg-[hsl(var(--brand-secondary)/0.4)] hover:bg-[hsl(var(--brand-secondary)/0.6)] transition-all duration-300 group h-full"
      >
        <div className="flex items-center gap-2 mb-4">
          <SaffronBadge pulsing={status.pulsing} variant="outline">{status.label}</SaffronBadge>
          {event.frequency && (
            <span className="text-[hsl(var(--muted-foreground))] text-xs">{event.frequency}</span>
          )}
        </div>

        <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-[hsl(var(--brand-primary))] transition-colors">
          {event.title}
        </h3>

        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed mb-4">
          {event.tagline}
        </p>

        {(event.nextDate || event.venue) && (
          <div className="space-y-1.5 mb-4 text-sm text-[hsl(var(--muted-foreground))]">
            {event.nextDate && (
              <div className="flex items-center gap-2">
                <CalendarDays size={14} className="text-[hsl(var(--brand-primary))] flex-shrink-0" />
                <span>{event.nextDate}</span>
              </div>
            )}
            {event.venue && (
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[hsl(var(--brand-primary))] flex-shrink-0" />
                <span>{event.venue}</span>
              </div>
            )}
          </div>
        )}

        <span className="inline-flex items-center gap-1 text-[hsl(var(--brand-primary))] text-sm font-semibold group-hover:gap-2 transition-all">
          View Details <ArrowRight size={14} />
        </span>
      </Link>
    </motion.article>
  );
};

export default EventCategoryCard;
