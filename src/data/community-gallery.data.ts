// Community gallery items shown on the Home page bento grid
// ═══════════════════════════════════════════════════════
// To change hover NAME:  edit the `title` field
// To change hover DESC:  edit the `desc` field
// To add a new image:    add a new import + a new object at the bottom
// To change grid layout: edit the `span` field (Tailwind col/row span classes)
// ═══════════════════════════════════════════════════════

import outrGroup from '@/assets/outr-group.png';
import seminarGroup from '@/assets/seminar-group.png';
import dsc6024 from '@/assets/dsc-6024.jpeg';
import whiteGroup from '@/assets/white-group.jpeg';
import seminarInteraction from '@/assets/seminar-interaction.png';
import gathering from '@/assets/gathering.png';

export interface CommunityItem {
  id: number;
  type: 'image' | 'video';
  title: string;   // ← name/label shown on hover
  desc: string;    // ← description shown on hover
  url: string;
  span: string;    // ← Tailwind col-span + row-span classes
}

export const communityBentoItems: CommunityItem[] = [
  {
    id: 1,
    type: 'image',
    title: 'Satsang OUTR Family',          // ← EDIT: hover name
    desc: 'Our vibrant community of seekers at OUTR',
    url: outrGroup,
    span: 'md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2',
  },
  {
    id: 2,
    type: 'image',
    title: 'Career Seminar 2026',           // ← EDIT: hover name
    desc: '300+ students guided by 25+ eminent speakers',
    url: seminarGroup,
    span: 'md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2',
  },
  {
    id: 3,
    type: 'image',
    title: 'Satsang Gathering',             // ← EDIT: hover name
    desc: 'Devotion and brotherhood united in one spirit',
    url: dsc6024,
    span: 'md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2',
  },
  {
    id: 4,
    type: 'image',
    title: 'Unity in White',                // ← EDIT: hover name
    desc: 'Dressed in purity — a mark of devotion',
    url: whiteGroup,
    span: 'md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2',
  },
  {
    id: 5,
    type: 'image',
    title: 'Seminar Interaction',            // ← EDIT: hover name
    desc: 'Students engaging with mentors one-on-one',
    url: seminarInteraction,
    span: 'md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2',
  },
  {
    id: 6,
    type: 'image',
    title: 'Annual Gathering 2025',          // ← EDIT: hover name
    desc: "Celebrating Thakur's birth anniversary together",
    url: gathering,
    span: 'md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2',
  },
];
