// DomainBox — one-to-one counselling domain box
import type { CounsellingDomain } from '@/types/event.types';

interface DomainBoxProps {
  domain: CounsellingDomain;
}

const DomainBox = ({ domain }: DomainBoxProps) => (
  <div
    className="w-full p-8 rounded-xl shadow-lg hover:shadow-gold transition-shadow"
    style={{ background: 'hsl(var(--brand-secondary-mid))' }}
  >
    <h4 className="font-heading text-lg font-bold text-gradient-saffron mb-4">{domain.title}</h4>
    <ul className="space-y-2">
      {domain.speakers.map((sp, i) => (
        <li key={i} className="text-sm">
          <span className="text-white">{sp.name}</span>
          <span className="text-[hsl(var(--muted-foreground))] text-xs block">{sp.role}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default DomainBox;
