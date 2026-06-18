// AnimatedSection — wraps children in a whileInView fade-up animation
// Usage: <AnimatedSection delay={0.2}><YourContent /></AnimatedSection>
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** Direction of entry animation */
  direction?: 'up' | 'down' | 'left' | 'right';
}

const AnimatedSection = ({
  children,
  delay = 0,
  className,
  direction = 'up',
}: AnimatedSectionProps) => {
  const directionMap = {
    up: { y: 24 },
    down: { y: -24 },
    left: { x: 24 },
    right: { x: -24 },
  };

  const initial = { opacity: 0, ...directionMap[direction] };
  const animate = { opacity: 1, y: 0, x: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
