// GoldDivider — decorative horizontal rule with saffron gold gradient
// Usage: <GoldDivider className="my-12" />
import { cn } from '@/lib/utils';

interface GoldDividerProps {
  className?: string;
}

const GoldDivider = ({ className }: GoldDividerProps) => {
  return (
    <div
      className={cn('w-full h-px', className)}
      style={{
        background:
          'linear-gradient(to right, transparent, hsl(var(--brand-primary) / 0.6), hsl(var(--brand-primary)), hsl(var(--brand-primary) / 0.6), transparent)',
      }}
      role="separator"
      aria-hidden="true"
    />
  );
};

export default GoldDivider;
