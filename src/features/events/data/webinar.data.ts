import type { EventCategory } from '@/types/event.types';

// ═══════════════════════════════════════════════════════════════
// WEBINAR ON VARIOUS TOPICS FOR STUDENTS' LIFE
// ───────────────────────────────────────────────────────────────
// Edit this file to update the webinar detail page at /events/webinar
//
// HOW TO:
// - Change status     → edit 'status' field (upcoming | ongoing | completed | archived)
// - Add schedule      → add objects to 'schedule' array
// - Add speakers      → add objects to 'speakers' array
// - Add gallery photos→ import image, add to 'gallery' array
// - Open registration → set registrationStatus to 'open', add registrationUrl
// ═══════════════════════════════════════════════════════════════

export const webinar: EventCategory = {
  slug: 'webinar',
  title: 'Webinar on Various Topics for Students\' Life',
  tagline: 'Interactive online sessions on career, well-being, and purposeful living',
  description:
    'A series of online webinars designed for students, covering career planning, skill development, mental well-being, spiritual alignment in professional life, and practical guidance from experienced mentors. These sessions aim to bridge the gap between academic learning and real-world readiness.',
  status: 'upcoming',
  nextDate: 'July 15, 2026',
  venue: 'Online (Zoom / Google Meet)',
  frequency: 'Monthly',

  registrationStatus: 'coming-soon',

  schedule: [
    {
      time: '06:00 PM – 06:15 PM',
      title: 'Welcome & Introduction',
      description: 'Brief overview of the session topic and introduction of the speaker',
    },
    {
      time: '06:15 PM – 07:15 PM',
      title: 'Main Session',
      description: 'Expert-led presentation with real-world insights and practical takeaways',
    },
    {
      time: '07:15 PM – 07:45 PM',
      title: 'Interactive Q & A',
      description: 'Open floor for questions, discussion, and mentorship',
    },
  ],

  speakers: [
    { name: 'To be announced', role: 'Upcoming speakers will be listed here' },
  ],

  gallery: [],
  reports: [],
};
