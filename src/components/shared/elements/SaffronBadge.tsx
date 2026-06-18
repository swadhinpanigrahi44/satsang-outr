// SaffronBadge — pill/tag in saffron gold styling
// Usage: <SaffronBadge pulsing>Live</SaffronBadge>
// Usage: <SaffronBadge>Registration Closed</SaffronBadge>
import { cn } from '@/lib/utils';

interface SaffronBadgeProps {
  children: React.ReactNode;
  /** Adds a pulsing dot before the text (for "live" indicators) */
  pulsing?: boolean;
  variant?: 'outline' | 'solid';
  className?: string;
}

const SaffronBadge = ({
  children,
  pulsing = false,
  variant = 'outline',
  className,
}: SaffronBadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase',
        variant === 'outline'
          ? 'border border-[hsl(var(--brand-primary))] text-[hsl(var(--brand-primary))]'
          : 'bg-[hsl(var(--brand-primary))] text-[hsl(var(--brand-secondary-dark))] font-semibold',
        className
      )}
    >
      {pulsing && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--brand-primary))] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[hsl(var(--brand-primary))]" />
        </span>
      )}
      {children}
    </span>
  );
};

export default SaffronBadge;
