// Gallery image item — adding to the config adds it to the gallery, no component change needed
// ─── ADD NEW CATEGORIES HERE ─────────────────────────────────
// When adding a new category, also add it to this union type.
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category?: 'seminar' | 'satyanusaran' | 'webinar' | 'volunteering' | 'community' | 'statues';
  featured?: boolean;
}
