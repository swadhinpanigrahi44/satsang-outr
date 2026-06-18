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
