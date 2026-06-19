import type { EventCategory } from '@/types/event.types';
import { webinar } from './webinar.data';
import { satyanusaran } from './satyanusaran.data';
import { meetups } from './meetups.data';

// ─── All event categories ────────────────────────────────────
// To add a new category:
// 1. Create a new data file (e.g. retreat.data.ts)
// 2. Import it above
// 3. Add it to this array
// The route, hub card, and sitemap all update automatically.
export const eventCategories: EventCategory[] = [webinar, satyanusaran, meetups];

// Slug lookup — used by EventDetail.tsx to resolve /events/:slug
export const eventBySlug: Record<string, EventCategory> = Object.fromEntries(
  eventCategories.map(e => [e.slug, e]),
);
