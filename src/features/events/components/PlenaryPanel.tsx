// PlenaryPanel — a single domain panel in the plenary grid
import type { PlenaryPanel as PlenaryPanelType } from '@/types/event.types';

interface PlenaryPanelProps {
  panel: PlenaryPanelType;
}

const PlenaryPanel = ({ panel }: PlenaryPanelProps) => (
  <div
    className="p-8 rounded-2xl shadow-lg"
    style={{ background: 'hsl(var(--brand-secondary-dark))' }}
  >
    <h3 className="font-heading text-lg font-bold text-white mb-2">{panel.title}</h3>
    <span className="text-[hsl(var(--muted-foreground))] text-xs mb-3 block">{panel.timeRange}</span>
    {panel.theme && (
      <p className="text-[hsl(var(--muted-foreground))] text-sm italic mb-4">{panel.theme}</p>
    )}

    {/* Moderator */}
    <div
      className="p-4 rounded-lg mb-4 border-l-4 border-[hsl(var(--brand-primary))]"
      style={{ background: 'hsl(var(--brand-secondary-mid))' }}
    >
      <p className="text-[hsl(var(--brand-primary))] text-xs font-bold uppercase tracking-wide">Moderator</p>
      <p className="text-white font-semibold text-sm mt-1">{panel.moderator.name}</p>
      <p className="text-[hsl(var(--muted-foreground))] text-xs">{panel.moderator.role}</p>
    </div>

    {/* Speakers */}
    <ul className="space-y-2">
      {panel.speakers.map((sp, i) => (
        <li key={i} className="text-sm">
          <span className="text-[hsl(var(--foreground)/0.9)]">{sp.name}</span>
          <span className="text-[hsl(var(--muted-foreground))] text-xs block">{sp.role}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default PlenaryPanel;
