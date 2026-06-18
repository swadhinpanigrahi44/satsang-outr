# Task 2: Data Layer + Types

## Project Context

SatsangOUTR — Vite + React 18 + TypeScript + Tailwind + shadcn/ui spiritual community website.
Task 1 has established the design tokens, fonts, and color system. This task creates the data layer and TypeScript type definitions that all feature pages depend on.

Project root: `C:\Users\ASUS\Desktop\SatsangOUTR-main (1)\SatsangOUTR-main`

## Files to Create

### Type Definitions

**`src/types/nav.types.ts`**
```typescript
// Navigation item type
export interface NavItem {
  label: string;
  to: string;
  external?: boolean;
}
```

**`src/types/event.types.ts`**
```typescript
// Speaker at an event session
export interface Speaker {
  name: string;
  role: string;
  organization?: string;
  topic?: string;
}

// A single session in the event schedule
export interface Session {
  time: string;
  title: string;
  description?: string;
  speakers?: Speaker[];
  subSpeakers?: Speaker[]; // for sessions with multiple sub-speakers
}

// A domain panel in the plenary grid
export interface PlenaryPanel {
  id: string;
  title: string;
  timeRange: string;
  theme: string;
  moderator: Speaker;
  speakers: Speaker[];
}

// A domain box in the parallel one-to-one counselling section
export interface CounsellingDomain {
  id: string;
  title: string;
  speakers: Speaker[];
}

// Full event data
export interface EventData {
  id: string;
  title: string;
  subtitle: string;
  venue: string;
  date: string; // ISO string or display string
  registrationStatus: 'open' | 'closed' | 'live';
  schedule: Session[];
  plenaryPanels: PlenaryPanel[];
  counsellingDomains: CounsellingDomain[];
}

// New event card type (for Webinar, Satyanusarana, Meetups)
export interface EventCard {
  id: string;
  type: 'webinar' | 'satyanusarana' | 'meetup' | 'seminar';
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
  ctaLabel: string;
  ctaUrl?: string; // internal route or external link
  status: 'upcoming' | 'ongoing' | 'past';
}
```

**`src/types/testimonial.types.ts`**
```typescript
// Testimonial from community members
export interface Testimonial {
  id: number | string;
  name: string;
  avatar: string;
  description: string;
  role?: string; // e.g. "Student, OUTR" or "Community Member"
  source?: 'instagram' | 'whatsapp' | 'direct' | 'community';
}
```

**`src/types/gallery.types.ts`**
```typescript
// Gallery image item — adding to the config adds it to the gallery, no component change needed
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category?: 'events' | 'statues' | 'group' | 'seminar';
  featured?: boolean;
}
```

### Data Files

**`src/data/navigation.ts`** — Single source of truth for all nav items
```typescript
import type { NavItem } from '@/types/nav.types';

// All navigation items — used by Navbar and Footer
export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Events', to: '/events' },
  { label: 'Dharma', to: '/dharma' },
  { label: 'Edu-Care', to: '/edu-care' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
];
```

**`src/data/social-links.ts`**
```typescript
// Social media and contact links — update these to change all footer/navbar social icons
export const socialLinks = {
  instagram: 'https://www.instagram.com/satsang_outr',
  facebook: 'https://www.facebook.com/share/1F7it9rvLD/',
  whatsapp: 'https://chat.whatsapp.com/DrMF9pQJBEp5iIbq2IUF7x?mode=gi_t',
  whatsappPhone: '+916371519735',
  email: 'satsangoutr@gmail.com',
  officialWebsite: 'https://www.satsang.org.in/home',
};
```

**`src/data/site-config.ts`**
```typescript
// Site-wide configuration — single source for name, tagline, SEO
export const siteConfig = {
  name: 'Satsang OUTR',
  tagline: 'The Man Making Industries',
  description:
    'A socio-cultural and philanthropic institution dedicated to character building, spiritual awakening, and collective upliftment through the teachings of Sree Sree Thakur Anukulchandra.',
  url: 'https://satsangoutr.vercel.app',
  email: 'satsangoutr@gmail.com',
  officialWebsite: 'https://www.satsang.org.in/home',
};
```

**`src/data/gallery.data.ts`** — Configurable gallery image list
```typescript
import type { GalleryImage } from '@/types/gallery.types';

// To add images: import the image and add an object here. No component changes needed.
import outrGroup from '@/assets/outr-group.png';
import dsc6024 from '@/assets/dsc-6024.jpeg';
import whiteGroup from '@/assets/white-group.jpeg';
import whatsapp20260312 from '@/assets/whatsapp-2026-03-12.jpeg';
import seminarGroup from '@/assets/seminar-group.png';
import seminarInteraction from '@/assets/seminar-interaction.png';
import seminarPresentation from '@/assets/seminar-presentation.png';
import seminarSpeaker from '@/assets/seminar-speaker.png';
import confidenceSession from '@/assets/confidence-session.png';
import gathering from '@/assets/gathering.png';
import pcodSession from '@/assets/pcod-session.jpeg';
import statueFlowers from '@/assets/statue-flowers.png';
import statueWhite from '@/assets/statue-white.png';

export const galleryImages: GalleryImage[] = [
  { id: 'outr-group', src: outrGroup, alt: 'Satsang OUTR group photo', category: 'group', featured: true },
  { id: 'dsc-6024', src: dsc6024, alt: 'Satsang OUTR gathering', category: 'group', featured: true },
  { id: 'white-group', src: whiteGroup, alt: 'Satsang OUTR members in white', category: 'group' },
  { id: 'whatsapp-2026-03-12', src: whatsapp20260312, alt: 'Satsang community gathering March 2026', category: 'group' },
  { id: 'seminar-group', src: seminarGroup, alt: 'Career Counselling Seminar group', category: 'seminar', featured: true },
  { id: 'seminar-interaction', src: seminarInteraction, alt: 'Seminar interaction session', category: 'seminar' },
  { id: 'seminar-presentation', src: seminarPresentation, alt: 'Seminar presentation', category: 'seminar' },
  { id: 'seminar-speaker', src: seminarSpeaker, alt: 'Seminar speaker session', category: 'seminar' },
  { id: 'confidence-session', src: confidenceSession, alt: 'Confidence building session', category: 'events' },
  { id: 'gathering', src: gathering, alt: 'Satsang gathering', category: 'events' },
  { id: 'pcod-session', src: pcodSession, alt: 'Health awareness session', category: 'events' },
  { id: 'statue-flowers', src: statueFlowers, alt: 'Sree Sree Thakur statue with flowers', category: 'statues' },
  { id: 'statue-white', src: statueWhite, alt: 'Sree Sree Thakur statue', category: 'statues' },
];
```

**`src/data/testimonials.data.ts`** — Real editable testimonial data
```typescript
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
```

**`src/data/event-cards.data.ts`** — New event types: Webinar, Satyanusarana, Meetups
```typescript
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
```

**`src/features/events/data/events.data.ts`** — Extract ALL existing hardcoded speaker/session data from Events.tsx
This is the most critical data extraction. Pull ALL speaker and session data from the current `src/pages/Events.tsx` into typed objects. Here is the complete data:

```typescript
import type { EventData } from '@/types/event.types';

// Career Counselling Seminar 2026 — full data extracted from Events.tsx
export const careerSeminar2026: EventData = {
  id: 'career-seminar-2026',
  title: 'Career Counselling Seminar',
  subtitle: 'SATSANG VIHAR BHUBANESWAR',
  venue: 'Convention Hall, SOA Campus 2, Near SUM Hospital, Bhubaneswar',
  date: 'March 28, 2026',
  registrationStatus: 'closed',
  schedule: [
    {
      time: '09:00 AM – 10:00 AM',
      title: 'Registration & Orientation',
      description: 'Welcome of students and seminar overview, networking, Refreshment',
    },
    {
      time: '10:00 AM – 11:00 AM',
      title: 'Inaugural Session',
      description: 'Diya Prajwalan and Theme Song Dedicated to young Students',
    },
    {
      time: '11:00 AM – 01:00 PM',
      title: 'Career Counselling Session',
      subSpeakers: [
        {
          name: 'Mr. Surya Prakash Mahapatra',
          role: 'Global Head of AI Skilling, Wipro Ltd',
          topic: '"From career confusion to career clarity"',
        },
        {
          name: 'Dr. Sutanu Chakraborty',
          role: 'Professor, Dept. of Computer Science & Engineering, IIT Madras',
          topic: '"Y"our "Y"earning within: making the "Y" (WHY) matter"',
        },
        {
          name: 'Mr. Kalinga Keshari Rath',
          role: 'MD, EVOS Buildcon Pvt. Ltd.',
          topic: 'Entrepreneurship in youth generation',
        },
        {
          name: 'Dr. Jubilee Purkayastha',
          role: 'Scientist F & Joint Director, INMAS DRDO, Ministry of Defence, Govt. of India',
          topic: 'The philosophy of right livelihood: Career guidance for conscious Youth',
        },
      ],
      description: 'Interactive Q & A Session (Moderated discussion with all speakers)',
    },
    {
      time: '01:00 PM – 01:30 PM',
      title: 'Lunch Break',
      description: 'Take a break and enjoy lunch',
    },
    {
      time: '01:30 PM – 02:00 PM',
      title: 'Rhythm & Resonance',
      description:
        'Celebrating Harmony in Life, Purpose and Career Path: A Musical Reflection by Kamalakhya Parida, Bedashree Aparna Sahoo and Dipta. S Mohanty',
    },
  ],
  plenaryPanels: [
    {
      id: 'civil-defence',
      title: 'Civil, Staff & Defence Services',
      timeRange: '2:00 PM - 2:40 PM',
      theme: '"Uniform and Administration: Two paths, One Mission – Nation First"',
      moderator: {
        name: 'Dr. Jubilee Purkayastha',
        role: 'Scientist F & Joint Director, INMAS DRDO, Ministry of Defence, Govt. of India',
      },
      speakers: [
        { name: 'Lt. Raj Kumar Thakur', role: 'Armed Forces, Government of India' },
        { name: 'Mr. Shantanu Singh', role: 'IFS Officer, UPSC Civil Services, Govt of India' },
        { name: 'Mr. Pradyumna Mohapatra', role: 'IES, General Manager, ITS, BSNL, Balasore, Govt. of India' },
        { name: 'Mr. Purusottam Mishra', role: '(OAS) Assistant Collector, Govt. of Odisha' },
        { name: 'Er. Pratyush Kumar Pradhan', role: 'Superintending Engineer, Water Resource Department, Govt. of Odisha' },
        { name: 'Mr. Narasingha Jethi', role: 'IES, DDG, DD ODIA, Prasar Bharati, Govt of India' },
      ],
    },
    {
      id: 'higher-education',
      title: 'Higher Education & Research',
      timeRange: '2:45 PM - 3:25 PM',
      theme: '"The Research Practice Nexus: Aligning ourselves with Purpose"',
      moderator: {
        name: 'Dr. Sutanu Chakraborty',
        role: 'Professor, Dept. of Computer Science & Engineering, IIT Madras',
      },
      speakers: [
        { name: 'Dr. Pravakar Mohanty', role: "Scientist 'E' & Joint Director (R&D), Dept. of Science & Technology, Govt. of India" },
        { name: 'Mr. Sanchari Kundu', role: 'PhD Scholar, Virginia Tech USA' },
        { name: 'Dr. Sudhanshu Sekhar Sahoo', role: 'HOS, Mechanical Science, Associate Prof., OUTR' },
        { name: 'Dr. Abheek Ghosh', role: 'Postdoctoral Fellow, Oxford University' },
        { name: 'Dr. Bibhu Prasad Panda', role: 'Assistant Prof., SOA' },
      ],
    },
    {
      id: 'management-corporate',
      title: 'Management, Corporate and Business with Engineering Industries',
      timeRange: '3:30 PM - 4:10 PM',
      theme: '"Preparing for corporate careers in an uncertain world: skills, Mindset, and Strategy for the next decade"',
      moderator: {
        name: 'Mr. Surya Prakash Mahapatra',
        role: 'Global Head – Talent Transformation, Wipro Ltd.',
      },
      speakers: [
        { name: 'Mr. Kalinga Keshari Rath', role: 'MD, EVOS Buildcon Pvt. Ltd.' },
        { name: 'Mr. Biswojit Gouda', role: 'Senior Salesforce Consultant, Minneapolis' },
        { name: 'Dr. Partha Tripathy', role: 'PhD, PPP Specialist IFC in Worldbank' },
        { name: 'Er. Prasanta Kumar Panda', role: 'Principal Data Scientist, TCS, Bhubaneswar' },
        { name: 'Titash Nandi', role: 'IIM Ahmedabad, Operation Design Lead at Curefit / Ex Consultant Deloitte' },
      ],
    },
    {
      id: 'agriculture-technology',
      title: 'Agriculture & Technology',
      timeRange: '3:30 PM - 5:00 PM',
      theme: 'Insights, outcomes and future of Agri-allied',
      moderator: {
        name: 'Dr. Hrushikesh Senapati',
        role: 'Former Dean, OUAT, Bhubaneswar',
      },
      speakers: [
        { name: 'Dr. Trinath Mahararana', role: 'Former Professor & Head, OUAT, Bhubaneswar' },
        { name: 'Dr. Pramod Kumar Rout', role: 'Principal Scientist and Scientific Adviser (Animal Science), ICAR, New Delhi' },
        { name: 'Dr. Kalikinkar Bandyopadhyay', role: 'Principal Scientist, ICAR-(IIWM), Bhubaneswar' },
        { name: 'Dr. Priya Ranjan Sahoo', role: 'Aquaculture Specialist, Living Stone International University, South Africa' },
        { name: 'Mr. Hari Prasanna Sahoo', role: 'PhD Scholar, BHU' },
      ],
    },
  ],
  counsellingDomains: [
    {
      id: 'civil-staff-defence',
      title: 'Civil, Staff & Defence',
      speakers: [
        { name: 'Lt. Raj Kumar Thakur', role: 'Armed Forces' },
        { name: 'Mr. Shantanu Singh', role: 'Officer, Indian Foreign Services (IFS), UPSC, Civil Services, Government of India' },
        { name: 'Mr. Pradyumna Mohapatra', role: 'IES, General Manager, ITS, BSNL, Balasore, Govt. of India' },
        { name: 'Dr. Pravakar Mohanty', role: "Scientist 'E' & Joint Director (R&D), Dept. of Science & Technology, Government of India" },
        { name: 'Mr. Purusottam Mishra', role: '(OAS) Assistant Collector, Balasore, Govt. of Odisha' },
        { name: 'Er. Pratyush Kumar Pradhan', role: 'Superintending Engineer, Water Resource Development, Govt. of Odisha' },
        { name: 'Dr. Jubilee Purkayastha', role: 'Scientist F & Joint Director, INMAS DRDO' },
      ],
    },
    {
      id: 'management-engineering',
      title: 'Management & Engineering Industries',
      speakers: [
        { name: 'Mr. Surya Prakash Mahapatra', role: 'Global Head – Talent Transformation, Wipro Ltd.' },
        { name: 'Mr. Kalinga Keshari Rath', role: 'MD, EVOS Buildcon Pvt. Ltd.' },
        { name: 'Mr. Siddharth Das', role: 'AI Engineer at FORD, USA' },
        { name: 'Mr. Biswojit Gouda', role: 'Senior Salesforce Consultant, Minneapolis' },
        { name: 'Mr. Parkruti Ranjan Sahoo', role: 'IIM Raipur' },
        { name: 'Mr. Shirendu Banik', role: 'IIM Amritsar' },
        { name: 'Mrs. Mahasweta Behera', role: 'Manager, Customer Success' },
        { name: 'Er. Prasanta Kumar Panda', role: 'Principal Data Scientist, TCS, Bhubaneswar' },
        { name: 'Ms. Pratikshya Pattnaik', role: 'Human Capital at Deloitte USI' },
        { name: 'Titash Nandi', role: 'IIM Ahmedabad, Operation Design Lead at Curefit / Ex Consultant Deloitte' },
        { name: 'Kaibalya Kumar Sahoo', role: 'Assistant Manager at Odisha Hydro Power Corporation' },
      ],
    },
    {
      id: 'higher-education-research',
      title: 'Higher Education & Research',
      speakers: [
        { name: 'Dr. Sutanu Chakraborty', role: 'Professor, Dept. of Computer Science & Engineering, IIT Madras' },
        { name: 'Dr. Lingaraj Sahoo', role: 'Professor, Dept. of Bioscience and Bioengineering, IIT Guwahati & Adj. Prof., Jifu University, Japan' },
        { name: 'Dr. Abheek Ghosh', role: 'PhD Scholar, Oxford University' },
        { name: 'Mr. Rishikeshan Pradhan', role: 'PhD Scholar, NISER Bhubaneswar' },
        { name: 'Mr. Sanchari Kundu', role: 'PhD Scholar, Virginia Tech USA' },
        { name: 'Dr. Sudhanshu Sekhar Sahoo', role: 'Associate Professor, OUTR' },
        { name: 'Dr. Batakrishna Tripathy', role: 'Assistant Prof., SOA' },
      ],
    },
    {
      id: 'agricultural-technology',
      title: 'Agricultural Technology',
      speakers: [
        { name: 'Dr. Hrushikesh Senapati', role: 'Former Dean, OUAT' },
        { name: 'Dr. Trinath Mahararana', role: 'Former Professor & Head, Odisha University of Agriculture and Technology (OUAT), Bhubaneswar' },
        { name: 'Dr. Pramod Kumar Rout', role: 'Former Principal Scientist (Animal Science), Indian Council of Agricultural Research (ICAR), New Delhi' },
        { name: 'Dr. Kalikinkar Bandyopadhyay', role: 'Principal Scientist, ICAR-Indian Institute of Water Management (IIWM), Bhubaneswar' },
        { name: 'Dr. Priya Ranjan Sahoo', role: 'Aquaculture Specialist, Living Stone International University, South Africa' },
        { name: 'Mr. Hari Prasanna Sahoo', role: 'PhD Scholar, BHU' },
      ],
    },
  ],
};
```

**`src/features/dharma/data/dharma.data.ts`**
```typescript
// Dharma teachings — extracted from src/pages/Dharma.tsx
export interface DharmaPoint {
  title: string;
  desc: string;
  icon: string;
}

export const dharmaPoints: DharmaPoint[] = [
  {
    title: 'Sustaining Life',
    desc: 'Dharma is that which sustains and uplifts both individual and collective existence. It is the invisible thread that holds together families, communities, and civilizations.',
    icon: '🌿',
  },
  {
    title: 'Right Understanding',
    desc: 'True Dharma begins with seeing things as they are — understanding reality without delusion, recognizing one\'s duties, and acting with clarity of purpose.',
    icon: '💡',
  },
  {
    title: 'Right Intention',
    desc: 'Actions rooted in selfless intention carry the power of transformation. When the heart is pure and aligned with a higher purpose, every deed becomes an offering.',
    icon: '🎯',
  },
  {
    title: 'Right Action',
    desc: 'Dharma is not merely what we believe, but what we practice. It is expressed through honorable conduct, honest dealings, and consistent effort to do what is good and just.',
    icon: '⚖️',
  },
  {
    title: 'Adapts to Time & Place',
    desc: 'Dharma is not rigid dogma. It adapts to time, place, and circumstance while remaining rooted in eternal principles of truth, compassion, and growth.',
    icon: '🔄',
  },
  {
    title: 'Worship as Worth-ship',
    desc: 'To worship means to make oneself worthy — worthy through action, through service, through refining one\'s character. It is the daily practice of becoming a better human being.',
    icon: '✨',
  },
  {
    title: 'Character as Foundation',
    desc: 'Strong character is the bedrock of a meaningful life. Without integrity and inner strength, no external achievement can bring lasting fulfillment.',
    icon: '🏛️',
  },
  {
    title: 'Service & Devotion',
    desc: 'Devotion to the Ideal and service to fellow beings are not separate paths — they are two wings of the same bird, both essential for the flight of the soul.',
    icon: '🙏',
  },
];
```

**`src/features/educare/data/educare.data.ts`**
```typescript
// Edu-Care qualities — extracted from src/pages/EduCare.tsx
export interface Quality {
  title: string;
  desc: string;
  icon: string;
}

export const qualities: Quality[] = [
  { title: 'Concentration', desc: 'The ability to focus deeply, channeling one\'s mental energy towards meaningful pursuits without distraction.', icon: '🎯' },
  { title: 'Alertness', desc: 'A keen awareness of one\'s surroundings and circumstances, enabling timely and wise responses to life\'s challenges.', icon: '👁️' },
  { title: 'Agility', desc: 'The capacity to adapt quickly, to learn from changing situations, and to remain flexible without losing one\'s center.', icon: '⚡' },
  { title: 'Inquisitiveness', desc: 'A genuine desire to understand, to question, and to seek deeper truths beyond surface appearances.', icon: '🔍' },
  { title: 'Judiciousness', desc: 'The wisdom to weigh options carefully, to think before acting, and to make decisions that serve the greater good.', icon: '⚖️' },
  { title: 'Presence of Mind', desc: 'The composure to remain calm under pressure, to think clearly in critical moments, and to act with confidence.', icon: '🧠' },
  { title: 'Cordial Conduct', desc: 'The practice of warmth, respect, and genuine kindness in all interactions — the hallmark of a truly educated person.', icon: '🤝' },
];
```

## Directory Creation Required

Create these directories if they don't exist:
- `src/types/`
- `src/data/`
- `src/features/events/data/`
- `src/features/dharma/data/`
- `src/features/educare/data/`

## Important Notes

- Use `@/` alias for all imports (already configured in tsconfig)
- All data is EXACTLY extracted from existing pages — preserve every name, title, and description verbatim
- The image imports in `gallery.data.ts` reference the renamed assets from Task 1 (`dsc-6024.jpeg`, `white-group.jpeg`, `whatsapp-2026-03-12.jpeg`, `whatsapp-group-2026.jpeg`)
- The `src/pages/Events.tsx` file itself should NOT be modified in this task — just create the data file
- TypeScript strict mode is on — all types must be complete and correct

## Deliverables Checklist

- [ ] `src/types/nav.types.ts`
- [ ] `src/types/event.types.ts`
- [ ] `src/types/testimonial.types.ts`
- [ ] `src/types/gallery.types.ts`
- [ ] `src/data/navigation.ts`
- [ ] `src/data/social-links.ts`
- [ ] `src/data/site-config.ts`
- [ ] `src/data/gallery.data.ts`
- [ ] `src/data/testimonials.data.ts`
- [ ] `src/data/event-cards.data.ts`
- [ ] `src/features/events/data/events.data.ts`
- [ ] `src/features/dharma/data/dharma.data.ts`
- [ ] `src/features/educare/data/educare.data.ts`
- [ ] All TypeScript compiles without errors (`npx tsc --noEmit`)
- [ ] Committed with descriptive message

## Report File

Write your full implementation report to:
`docs/superpowers/briefs/task-2-report.md`

Return: status, commit hash(es), one-line summary, any concerns.
