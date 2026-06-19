import type { GalleryImage } from '@/types/gallery.types';

// ═══════════════════════════════════════════════════════════════
// ADD / REMOVE GALLERY IMAGES HERE
// ───────────────────────────────────────────────────────────────
// 1. Copy your photo into src/assets/
// 2. Import it below
// 3. Add an entry to the galleryImages array
// Categories: seminar | satyanusaran | webinar | volunteering | community | statues
// All images display in 16:9 aspect ratio.
// ═══════════════════════════════════════════════════════════════

import seminarGroup from '@/assets/seminar-group.png';
import seminarInteraction from '@/assets/seminar-interaction.png';
import seminarPresentation from '@/assets/seminar-presentation.png';
import seminarSpeaker from '@/assets/seminar-speaker.png';
import outrGroup from '@/assets/outr-group.png';
import whiteGroup from '@/assets/white-group.jpeg';
import whatsapp20260312 from '@/assets/whatsapp-2026-03-12.jpeg';
import confidenceSession from '@/assets/confidence-session.png';
import gathering from '@/assets/gathering.png';
import pcodSession from '@/assets/pcod-session.jpeg';
import statueFlowers from '@/assets/statue-flowers.png';
import statueWhite from '@/assets/statue-white.png';

export const galleryImages: GalleryImage[] = [
  // ── Seminar photos ──
  { id: 'seminar-group', src: seminarGroup, alt: 'Career Counselling Seminar group', category: 'seminar', featured: true },
  { id: 'seminar-interaction', src: seminarInteraction, alt: 'Seminar interaction session', category: 'seminar' },
  { id: 'seminar-presentation', src: seminarPresentation, alt: 'Seminar presentation', category: 'seminar' },
  { id: 'seminar-speaker', src: seminarSpeaker, alt: 'Seminar speaker session', category: 'seminar' },

  // ── Satyanusaran Discourse ──
  // Add Satyanusaran photos here:
  // { id: 'satyanusaran-1', src: myPhoto, alt: 'Description', category: 'satyanusaran' },

  // ── Community activities ──
  { id: 'outr-group', src: outrGroup, alt: 'Satsang OUTR group photo', category: 'community', featured: true },
  { id: 'white-group', src: whiteGroup, alt: 'Satsang OUTR members in white', category: 'community' },
  { id: 'whatsapp-2026-03-12', src: whatsapp20260312, alt: 'Satsang community gathering March 2026', category: 'community' },
  { id: 'confidence-session', src: confidenceSession, alt: 'Confidence building session', category: 'community' },
  { id: 'gathering', src: gathering, alt: 'Satsang gathering', category: 'community' },
  { id: 'pcod-session', src: pcodSession, alt: 'Health awareness session', category: 'community' },

  // ── Statues ──
  { id: 'statue-flowers', src: statueFlowers, alt: 'Sree Sree Thakur statue with flowers', category: 'statues' },
  { id: 'statue-white', src: statueWhite, alt: 'Sree Sree Thakur statue', category: 'statues' },
];
