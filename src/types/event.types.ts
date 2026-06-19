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
  ctaUrl?: string;
  status: 'upcoming' | 'ongoing' | 'past';
}

// ─── EVENT CATEGORY (for /events/:slug detail pages) ────────
// Each category (webinar, satyanusaran, meetups) has one of these.
// Sections render only when data is present.
export interface EventCategoryReport {
  title: string;
  date: string;
  summary: string;
  url?: string;
}

export interface EventCategory {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  coverImage?: string;

  // Lifecycle — change this field to update the entire page state
  status: 'upcoming' | 'ongoing' | 'completed' | 'archived';

  // Scheduling
  nextDate?: string;
  venue?: string;
  frequency?: string;

  // Sections — only rendered if array has items
  schedule?: Session[];
  speakers?: Speaker[];
  gallery?: { src: string; alt: string }[];

  // Registration
  registrationUrl?: string;
  registrationStatus: 'open' | 'closed' | 'coming-soon';

  // Past event reports
  reports?: EventCategoryReport[];
}
