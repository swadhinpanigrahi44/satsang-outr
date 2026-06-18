// Event reports data — add new past event reports here
// Each report appears as a card on /events/reports
import type { EventReport } from '@/types/report.types';
import seminarGroup from '@/assets/seminar-group.png';
import seminarInteraction from '@/assets/seminar-interaction.png';
import seminarPresentation from '@/assets/seminar-presentation.png';
import seminarSpeaker from '@/assets/seminar-speaker.png';
import confidenceSession from '@/assets/confidence-session.png';
import gathering from '@/assets/gathering.png';

export const eventReports: EventReport[] = [
  {
    id: 'career-seminar-2026',
    title: 'Career Counselling Seminar 2026',
    date: 'March 28, 2026',
    venue: 'Convention Hall, SOA Campus 2, Near SUM Hospital, Bhubaneswar',
    summary:
      'A landmark career counselling seminar featuring 25+ eminent speakers from IIT Madras, DRDO, Wipro, IIM Ahmedabad, Oxford University, and government services. Over 300 students attended across civil services, higher education, management, and agriculture domains.',
    highlights: [
      '25+ speakers across 4 domains',
      'One-to-one career counselling sessions',
      'Domain-specific plenary panels',
      'Musical reflection performance by Kamalakhya Parida',
      '300+ student attendees',
    ],
    photos: [seminarGroup, seminarInteraction, seminarPresentation, seminarSpeaker],
    attendeeCount: 300,
  },
  {
    id: 'gathering-2025',
    title: 'Satsang OUTR Annual Gathering 2025',
    date: 'December 14, 2025',
    venue: 'OUTR Campus, Bhubaneswar',
    summary:
      'Annual gathering of Satsang OUTR members celebrating the birth anniversary of Sree Sree Thakur Anukulchandra. A day of spiritual readings, community bonding, and collective upliftment.',
    highlights: [
      "Spiritual readings from Sree Sree Thakur's teachings",
      'Community bonding activities',
      'Cultural performances',
      'Prasad distribution',
    ],
    photos: [gathering, confidenceSession],
    attendeeCount: 150,
  },
];
