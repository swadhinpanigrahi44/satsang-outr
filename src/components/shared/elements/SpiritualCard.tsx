// SpiritualCard — base card component for spiritual content
// Variant 'dark': indigo bg + gold left border (default, for dark pages)
// Variant 'light': white bg + gold left border (for light/cream sections)
// Usage: <SpiritualCard title="Biography" icon={<BookOpen />} variant="dark">Content</SpiritualCard>
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SpiritualCardProps {
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  variant?: 'dark' | 'light';
  className?: string;
  /** Hover effect: gold glow shadow */
  hoverable?: boolean;
}

const SpiritualCard = ({
  title,
  icon,
  children,
  variant = 'dark',
  className,
  hoverable = true,
}: SpiritualCardProps) => {
  return (
    <motion.div
      whileHover={hoverable ? { y: -2 } : undefined}
      transition={{ duration: 0.2 }}
      className={cn(
        'rounded-xl border-l-4 p-6 transition-shadow duration-300',
        variant === 'dark'
          ? 'bg-card border-l-[hsl(var(--brand-primary))] text-card-foreground'
          : 'bg-white border-l-[hsl(var(--brand-primary))] text-foreground',
        hoverable && 'hover:shadow-gold',
        className
      )}
    >
      {icon && (
        <div className="mb-3 text-[hsl(var(--brand-primary))]">
          {icon}
        </div>
      )}
      {title && (
        <h3 className="font-heading text-xl font-bold mb-3 text-foreground">
          {title}
        </h3>
      )}
      {children}
    </motion.div>
  );
};

export default SpiritualCard;
