import type { EventCard } from '@/types/event.types';

// === ADD NEW EVENTS HERE ===
// Update ctaUrl to link to registration form or external page
// Update status: 'upcoming' | 'ongoing' | 'past'
// For imageUrl: use Unsplash URL or import a local asset
export const eventCards: EventCard[] = [
  {
    id: 'webinar-2026-career',
    type: 'webinar',
    title: 'Webinar on Various Topics for Students\' Life',
    description:
      'Join our expert panel for interactive online webinars covering career planning, skill development, mental well-being, and purposeful living for students.',
    date: 'July 15, 2026',
    location: 'Online (Zoom / Google Meet)',
    imageUrl: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80',
    ctaLabel: 'View Details',
    ctaUrl: '/events/webinar',
    status: 'upcoming',
  },
  {
    id: 'satyanusarana-2026',
    type: 'satyanusarana',
    title: 'Satyanusarana — Following the Truth',
    description:
      'A sacred gathering to study and reflect on the teachings of Sree Sree Thakur Anukulchandra. Open to all seekers of truth and right living.',
    date: 'August 3, 2026',
    location: 'Satsang Vihar, Bhubaneswar',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    ctaLabel: 'View Details',
    ctaUrl: '/events/satyanusaran',
    status: 'upcoming',
  },
  {
    id: 'meetup-outr-july',
    type: 'meetup',
    title: 'Volunteering Work & Meetups',
    description:
      'Regular campus meetups and volunteering activities for Satsang OUTR members. Share experiences, serve the community, and build bonds.',
    date: 'July 20, 2026',
    location: 'OUTR Campus, Bhubaneswar',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    ctaLabel: 'View Details',
    ctaUrl: '/events/meetups',
    status: 'upcoming',
  },
];
