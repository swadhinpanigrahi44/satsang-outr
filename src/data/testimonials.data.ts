import type { Testimonial } from '@/types/testimonial.types';

// ═══════════════════════════════════════════════════════════════
// ADD / EDIT TESTIMONIALS HERE
// ───────────────────────────────────────────────────────────────
// Copy a block, change the fields. No component changes needed.
// Avatar is optional — leave it out for text-only cards.
// ═══════════════════════════════════════════════════════════════
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rahul Kumar Panda',
    description:
      'Satsang OUTR has been a transformative part of my university journey. The seminars and spiritual guidance have helped me find clarity in my career path.',
    role: 'B.Tech Student, OUTR',
    source: 'community',
  },
  {
    id: 2,
    name: 'Priya Das',
    description:
      'The Career Counselling Seminar organized by Satsang OUTR was exceptional. I connected with mentors from IIT and DRDO who genuinely guided me.',
    role: 'M.Tech Scholar, OUTR',
    source: 'direct',
  },
  {
    id: 3,
    name: 'Soumya Ranjan Mohanty',
    description:
      'Being part of Satsang OUTR has taught me the value of character-building alongside academic excellence. Truly a man-making institution.',
    role: 'Final Year Student, OUTR',
    source: 'instagram',
  },
  {
    id: 4,
    name: 'Ankita Sahoo',
    description:
      'The Dharma sessions changed how I think about purpose and responsibility. I feel more grounded and motivated in everything I do.',
    role: 'Community Member, Bhubaneswar',
    source: 'whatsapp',
  },
  {
    id: 5,
    name: 'Debashish Nayak',
    description:
      'Attending the Satsang gatherings is always peaceful and uplifting. The teachings of Sree Sree Thakur Anukulchandra are profoundly relevant even today.',
    role: 'Alumni, OUTR',
    source: 'community',
  },
];
