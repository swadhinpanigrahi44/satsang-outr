// Testimonial from community members
export interface Testimonial {
  id: number | string;
  name: string;
  avatar?: string;
  description: string;
  role?: string;
  source?: 'instagram' | 'whatsapp' | 'direct' | 'community';
}
