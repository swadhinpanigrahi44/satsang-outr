// SessionRow — single row in the event schedule timeline
import type { Session } from '@/types/event.types';

interface SessionRowProps {
  session: Session;
}

const SessionRow = ({ session }: SessionRowProps) => (
  <div className="flex gap-4 md:gap-6">
    <div className="text-[hsl(var(--brand-primary))] font-semibold text-sm w-36 flex-shrink-0 pt-1">
      {session.time}
    </div>
    <div
      className="flex-1 p-5 rounded-lg border-r-4 border-[hsl(var(--brand-primary))]"
      style={{ background: 'hsl(var(--brand-secondary-mid))' }}
    >
      <h3 className="font-heading text-white font-bold text-base mb-1">{session.title}</h3>
      {session.description && (
        <p className="text-[hsl(var(--muted-foreground))] text-sm">{session.description}</p>
      )}
      {session.subSpeakers && session.subSpeakers.length > 0 && (
        <ul className="mt-3 space-y-2">
          {session.subSpeakers.map((sp, i) => (
            <li key={i} className="text-sm">
              <span className="text-foreground font-medium">{sp.name}</span>
              {sp.organization && (
                <span className="text-[hsl(var(--muted-foreground))] text-xs block">{sp.organization}</span>
              )}
              {sp.role && !sp.organization && (
                <span className="text-[hsl(var(--muted-foreground))] text-xs block">{sp.role}</span>
              )}
              {sp.topic && (
                <span className="text-[hsl(var(--muted-foreground)/0.8)] text-xs italic block">
                  Topic: {sp.topic}
                </span>
              )}
            </li>
          ))}
          <li className="text-sm font-semibold text-[hsl(var(--brand-primary))]">
            Interactive Q & A Session (Moderated discussion with all speakers)
          </li>
        </ul>
      )}
    </div>
  </div>
);

export default SessionRow;
