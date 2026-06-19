import type { EventCategory } from '@/types/event.types';

// ═══════════════════════════════════════════════════════════════
// VOLUNTEERING WORK & MEETUPS
// ───────────────────────────────────────────────────────────────
// Edit this file to update the detail page at /events/meetups
//
// HOW TO:
// - Change status     → edit 'status' field (upcoming | ongoing | completed | archived)
// - Add schedule      → add objects to 'schedule' array
// - Add speakers      → add objects to 'speakers' array
// - Add gallery photos→ import image, add to 'gallery' array
// - Open registration → set registrationStatus to 'open', add registrationUrl
// ═══════════════════════════════════════════════════════════════

export const meetups: EventCategory = {
  slug: 'meetups',
  title: 'Volunteering Work & Meetups',
  tagline: 'Serve the community, build bonds, grow together',
  description:
    'Regular campus meetups and volunteering activities for Satsang OUTR members. These gatherings combine community service with fellowship — sharing experiences, discussing the teachings of Sree Sree Thakur Anukulchandra, and strengthening the bonds of our Satsangee Parivar through meaningful action.',
  status: 'upcoming',
  nextDate: 'July 20, 2026',
  venue: 'OUTR Campus, Bhubaneswar',
  frequency: 'Monthly',

  registrationStatus: 'open',
  registrationUrl: 'https://chat.whatsapp.com/FAHC7xSwhfl7Z5dgTvulpt',

  schedule: [
    {
      time: '09:00 AM – 09:30 AM',
      title: 'Assembly & Planning',
      description: 'Meet at the designated spot, discuss the day\'s volunteering tasks',
    },
    {
      time: '09:30 AM – 12:00 PM',
      title: 'Volunteering Work',
      description: 'Community service activities — campus cleanup, plantation drives, or awareness campaigns',
    },
    {
      time: '12:00 PM – 01:00 PM',
      title: 'Community Meetup',
      description: 'Open discussion, experience sharing, and fellowship over refreshments',
    },
  ],

  speakers: [],

  gallery: [],
  reports: [],
};
