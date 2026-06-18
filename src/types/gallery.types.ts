// Gallery image item — adding to the config adds it to the gallery, no component change needed
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category?: 'events' | 'statues' | 'group' | 'seminar';
  featured?: boolean;
}
