// Event report type — add new reports to src/data/event-reports.data.ts
export interface EventReport {
  id: string;
  title: string;
  date: string;
  venue: string;
  summary: string;
  highlights: string[];
  photos: string[];       // array of image URLs or imported asset paths
  attendeeCount?: number;
  reportPdfUrl?: string;  // optional link to full report PDF
}
