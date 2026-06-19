import type { EventCategory } from '@/types/event.types';

// ═══════════════════════════════════════════════════════════════
// SATYANUSARAN DISCOURSE
// ───────────────────────────────────────────────────────────────
// Edit this file to update the detail page at /events/satyanusaran
//
// HOW TO:
// - Change status     → edit 'status' field (upcoming | ongoing | completed | archived)
// - Add schedule      → add objects to 'schedule' array
// - Add speakers      → add objects to 'speakers' array
// - Add gallery photos→ import image, add to 'gallery' array
// - Open registration → set registrationStatus to 'open', add registrationUrl
// ═══════════════════════════════════════════════════════════════

export const satyanusaran: EventCategory = {
  slug: 'satyanusaran',
  title: 'Satyanusaran Discourse',
  tagline: 'Following the Truth — studying the words of Sree Sree Thakur Anukulchandra',
  description:
    'Satyanusaran Discourse is a sacred gathering dedicated to the study and reflection on the teachings of Sree Sree Thakur Anukulchandra. Through collective reading, discussion, and contemplation, participants deepen their understanding of truth, dharma, and purposeful living. These sessions are open to all seekers — whether new to Satsang or lifelong practitioners.',
  status: 'upcoming',
  nextDate: 'August 3, 2026',
  venue: 'Satsang Vihar, Bhubaneswar',
  frequency: 'Monthly',

  registrationStatus: 'open',
  registrationUrl: 'https://chat.whatsapp.com/FAHC7xSwhfl7Z5dgTvulpt',

  schedule: [
    {
      time: '09:00 AM – 09:30 AM',
      title: 'Gathering & Prayer',
      description: 'Community assembly with opening prayer and invocation',
    },
    {
      time: '09:30 AM – 10:30 AM',
      title: 'Satyanusaran Reading',
      description: 'Collective reading from the writings of Sree Sree Thakur Anukulchandra',
    },
    {
      time: '10:30 AM – 11:30 AM',
      title: 'Discussion & Reflection',
      description: 'Open discussion on the teachings and their relevance to daily life',
    },
    {
      time: '11:30 AM – 12:00 PM',
      title: 'Closing & Prasad',
      description: 'Closing prayer followed by community refreshments',
    },
  ],

  speakers: [
    { name: 'Senior Satsang Members', role: 'Discourse facilitators and discussion leaders' },
  ],

  gallery: [],
  reports: [],
};
