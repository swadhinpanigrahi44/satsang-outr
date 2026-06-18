// Testimonial from community members
export interface Testimonial {
  id: number | string;
  name: string;
  avatar: string;
  description: string;
  role?: string; // e.g. "Student, OUTR" or "Community Member"
  source?: 'instagram' | 'whatsapp' | 'direct' | 'community';
}
