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
