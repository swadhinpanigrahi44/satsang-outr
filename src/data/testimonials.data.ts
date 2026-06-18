import type { Testimonial } from '@/types/testimonial.types';

// === ADD YOUR TESTIMONIALS HERE ===
// To add: copy a block, update id/name/avatar/description/role/source
// For avatar: use a URL (like a photo link) or import a local image
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rahul Kumar Panda',
    avatar: 'https://i.pravatar.cc/150?img=11',
    description:
      'Satsang OUTR has been a transformative part of my university journey. The seminars and spiritual guidance have helped me find clarity in my career path.',
    role: 'B.Tech Student, OUTR',
    source: 'community',
  },
  {
    id: 2,
    name: 'Priya Das',
    avatar: 'https://i.pravatar.cc/150?img=47',
    description:
      'The Career Counselling Seminar organized by Satsang OUTR was exceptional. I connected with mentors from IIT and DRDO who genuinely guided me.',
    role: 'M.Tech Scholar, OUTR',
    source: 'direct',
  },
  {
    id: 3,
    name: 'Soumya Ranjan Mohanty',
    avatar: 'https://i.pravatar.cc/150?img=32',
    description:
      'Being part of Satsang OUTR has taught me the value of character-building alongside academic excellence. Truly a man-making institution.',
    role: 'Final Year Student, OUTR',
    source: 'instagram',
  },
  {
    id: 4,
    name: 'Ankita Sahoo',
    avatar: 'https://i.pravatar.cc/150?img=56',
    description:
      'The Dharma sessions changed how I think about purpose and responsibility. I feel more grounded and motivated in everything I do.',
    role: 'Community Member, Bhubaneswar',
    source: 'whatsapp',
  },
  {
    id: 5,
    name: 'Debashish Nayak',
    avatar: 'https://i.pravatar.cc/150?img=25',
    description:
      'Attending the Satsang gatherings is always peaceful and uplifting. The teachings of Sree Sree Thakur Anukulchandra are profoundly relevant even today.',
    role: 'Alumni, OUTR',
    source: 'community',
  },
];
