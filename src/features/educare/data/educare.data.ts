// Edu-Care qualities — extracted from src/pages/EduCare.tsx
export interface Quality {
  title: string;
  desc: string;
  icon: string;
}

export const qualities: Quality[] = [
  { title: 'Concentration', desc: 'The ability to focus deeply, channeling one\'s mental energy towards meaningful pursuits without distraction.', icon: '🎯' },
  { title: 'Alertness', desc: 'A keen awareness of one\'s surroundings and circumstances, enabling timely and wise responses to life\'s challenges.', icon: '👁️' },
  { title: 'Agility', desc: 'The capacity to adapt quickly, to learn from changing situations, and to remain flexible without losing one\'s center.', icon: '⚡' },
  { title: 'Inquisitiveness', desc: 'A genuine desire to understand, to question, and to seek deeper truths beyond surface appearances.', icon: '🔍' },
  { title: 'Judiciousness', desc: 'The wisdom to weigh options carefully, to think before acting, and to make decisions that serve the greater good.', icon: '⚖️' },
  { title: 'Presence of Mind', desc: 'The composure to remain calm under pressure, to think clearly in critical moments, and to act with confidence.', icon: '🧠' },
  { title: 'Cordial Conduct', desc: 'The practice of warmth, respect, and genuine kindness in all interactions — the hallmark of a truly educated person.', icon: '🤝' },
];
