import type { EventCard } from '@/types/event.types';

// === ADD NEW EVENTS HERE ===
// Update ctaUrl to link to registration form or external page
// Update status: 'upcoming' | 'ongoing' | 'past'
// For imageUrl: use Unsplash URL or import a local asset
export const eventCards: EventCard[] = [
  {
    id: 'webinar-2026-career',
    type: 'webinar',
    title: 'Online Career Guidance Webinar',
    description:
      'Join our expert panel for an interactive online webinar covering career planning, skill development, and spiritual alignment in professional life.',
    date: 'July 15, 2026',
    location: 'Online (Zoom / Google Meet)',
    imageUrl: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80',
    ctaLabel: 'Register Now',
    ctaUrl: '#',
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
    ctaLabel: 'Learn More',
    ctaUrl: 'https://www.satsang.org.in/home',
    status: 'upcoming',
  },
  {
    id: 'meetup-outr-july',
    type: 'meetup',
    title: 'OUTR Campus Meetup — July 2026',
    description:
      'Monthly campus meetup for Satsang OUTR members. Share experiences, discuss Thakur\'s teachings, and build community bonds.',
    date: 'July 20, 2026',
    location: 'OUTR Campus, Bhubaneswar',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    ctaLabel: 'Join WhatsApp Group',
    ctaUrl: 'https://chat.whatsapp.com/DrMF9pQJBEp5iIbq2IUF7x?mode=gi_t',
    status: 'upcoming',
  },
];
