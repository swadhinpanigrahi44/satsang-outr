# Task 3: Shared Component Library + Testimonial Component

## Project Context

SatsangOUTR — Vite + React 18 + TypeScript + Tailwind CSS + shadcn/ui.
Task 1 set the design system (Bodoni Moda SC + Inter, saffron gold + sacred indigo).
Task 2 created all type definitions.
This task builds the shared component library that all feature pages will consume.

Project root: `C:\Users\ASUS\Desktop\SatsangOUTR-main (1)\SatsangOUTR-main`

## Design System Context

Brand colors (from CSS vars set in Task 1):
- Primary (Saffron Gold): `hsl(var(--brand-primary))` = `hsl(38, 93%, 41%)`
- Primary Light: `hsl(var(--brand-primary-light))` = `hsl(40, 85%, 55%)`
- Secondary (Sacred Indigo): `hsl(var(--brand-secondary))` = `hsl(215, 38%, 18%)`
- Background: `hsl(var(--background))` = `hsl(218, 45%, 10%)`

Tailwind classes available from Task 1:
- `font-heading` → Bodoni Moda SC 800
- `font-body` → Inter
- `text-gradient-saffron` → gold gradient text
- `bg-saffron-gradient` → gold gradient background
- `shadow-gold` → gold glow shadow
- `border-gold` → gold border

## Files to Create

### 1. `src/components/shared/elements/SectionHeading.tsx`

```tsx
// SectionHeading — reusable h2 + optional subtitle
// Usage: <SectionHeading title="Our Mission" highlight="Mission" subtitle="..." centered />
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  /** Word within title to render in gold gradient */
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  /** Override heading tag (default h2) */
  as?: 'h1' | 'h2' | 'h3';
}

const SectionHeading = ({
  title,
  highlight,
  subtitle,
  centered = false,
  className,
  as: Tag = 'h2',
}: SectionHeadingProps) => {
  // Split title around the highlight word and wrap it in gradient span
  const renderTitle = () => {
    if (!highlight) {
      return title;
    }
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-gradient-saffron">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={cn(centered && 'text-center', className)}>
      <Tag className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
        {renderTitle()}
      </Tag>
      {subtitle && (
        <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-2xl" style={centered ? { margin: '1rem auto 0' } : undefined}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
```

### 2. `src/components/shared/sections/AnimatedSection.tsx`

```tsx
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
```

### 3. `src/components/shared/elements/SpiritualCard.tsx`

```tsx
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
```

### 4. `src/components/shared/elements/GoldDivider.tsx`

```tsx
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
```

### 5. `src/components/shared/elements/SaffronBadge.tsx`

```tsx
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
```

### 6. `src/components/ui/testimonial.tsx` — PROVIDED BY USER

Copy this EXACTLY as given (do not modify):

```tsx
import * as React from "react"
import { motion, PanInfo } from "framer-motion"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number | string
  name: string
  avatar: string
  description: string
}

interface TestimonialCarouselProps
  extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: Testimonial[]
  showArrows?: boolean
  showDots?: boolean
}

const TestimonialCarousel = React.forwardRef<
  HTMLDivElement,
  TestimonialCarouselProps
>(
  (
    { className, testimonials, showArrows = true, showDots = true, ...props },
    ref,
  ) => {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [exitX, setExitX] = React.useState<number>(0)

    const handleDragEnd = (
      event: MouseEvent | TouchEvent | PointerEvent,
      info: PanInfo,
    ) => {
      if (Math.abs(info.offset.x) > 100) {
        setExitX(info.offset.x)
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % testimonials.length)
          setExitX(0)
        }, 200)
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          "h-72 w-full flex items-center justify-center",
          className
        )}
        {...props}
      >
        <div className="relative w-80 h-64">
          {testimonials.map((testimonial, index) => {
            const isCurrentCard = index === currentIndex
            const isPrevCard =
              index === (currentIndex + 1) % testimonials.length
            const isNextCard =
              index === (currentIndex + 2) % testimonials.length

            if (!isCurrentCard && !isPrevCard && !isNextCard) return null

            return (
              <motion.div
                key={testimonial.id}
                className={cn(
                  "absolute w-full h-full rounded-2xl cursor-grab active:cursor-grabbing",
                  "bg-white shadow-xl",
                  "dark:bg-card dark:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-1px_-1px_3px_rgba(255,255,255,0.1)]",
                )}
                style={{
                  zIndex: isCurrentCard ? 3 : isPrevCard ? 2 : 1,
                }}
                drag={isCurrentCard ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={isCurrentCard ? handleDragEnd : undefined}
                initial={{
                  scale: 0.95,
                  opacity: 0,
                  y: isCurrentCard ? 0 : isPrevCard ? 8 : 16,
                  rotate: isCurrentCard ? 0 : isPrevCard ? -2 : -4,
                }}
                animate={{
                  scale: isCurrentCard ? 1 : 0.95,
                  opacity: isCurrentCard ? 1 : isPrevCard ? 0.6 : 0.3,
                  x: isCurrentCard ? exitX : 0,
                  y: isCurrentCard ? 0 : isPrevCard ? 8 : 16,
                  rotate: isCurrentCard ? exitX / 20 : isPrevCard ? -2 : -4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                {showArrows && isCurrentCard && (
                  <div className="absolute inset-x-0 top-2 flex justify-between px-4">
                    <span className="text-2xl select-none cursor-pointer text-gray-300 hover:text-gray-400 dark:text-muted-foreground dark:hover:text-primary">
                      &larr;
                    </span>
                    <span className="text-2xl select-none cursor-pointer text-gray-300 hover:text-gray-400 dark:text-muted-foreground dark:hover:text-primary">
                      &rarr;
                    </span>
                  </div>
                )}

                <div className="p-6 flex flex-col items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-foreground">
                    {testimonial.name}
                  </h3>
                  <p className="text-center text-sm text-gray-600 dark:text-muted-foreground">
                    {testimonial.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
          {showDots && (
            <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    index === currentIndex
                      ? "bg-blue-500 dark:bg-primary"
                      : "bg-gray-300 dark:bg-muted-foreground/30",
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    )
  },
)
TestimonialCarousel.displayName = "TestimonialCarousel"

export { TestimonialCarousel, type Testimonial }
```

### 7. `src/components/shared/elements/WhatsAppButton.tsx` — Floating WhatsApp Button

```tsx
// WhatsAppButton — floating WhatsApp contact button
// Phone: +91 63715 19735
// Mobile optimized, accessible, animated
// Place this in Layout.tsx so it appears on every page
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_PHONE = '916371519735'; // +91 63715 19735 without spaces/+
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=Hello%20Satsang%20OUTR%2C%20I%20would%20like%20to%20know%20more.`;

const WhatsAppButton = () => {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Satsang OUTR on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-green-400 focus-visible:ring-offset-2"
      style={{ backgroundColor: '#25D366' }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse ring */}
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: '#25D366' }}
        animate={{ scale: [1, 1.4, 1.4], opacity: [0.7, 0, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
      />
      <MessageCircle size={28} className="text-white relative z-10" fill="white" />
    </motion.a>
  );
};

export default WhatsAppButton;
```

### 8. Index files for clean imports

**`src/components/shared/elements/index.ts`**
```ts
export { default as SectionHeading } from './SectionHeading';
export { default as GoldDivider } from './GoldDivider';
export { default as SaffronBadge } from './SaffronBadge';
export { default as SpiritualCard } from './SpiritualCard';
export { default as WhatsAppButton } from './WhatsAppButton';
```

**`src/components/shared/sections/index.ts`**
```ts
export { default as AnimatedSection } from './AnimatedSection';
```

## Directory Creation

Create these directories if they don't exist:
- `src/components/shared/elements/`
- `src/components/shared/sections/`

## Verification

- Run `npx tsc --noEmit` — must pass with zero errors
- Verify `framer-motion` is in `node_modules` (already installed per package.json)
- Do NOT modify any existing files in `src/components/ui/`

## Deliverables Checklist

- [ ] `src/components/shared/elements/SectionHeading.tsx`
- [ ] `src/components/shared/sections/AnimatedSection.tsx`
- [ ] `src/components/shared/elements/SpiritualCard.tsx`
- [ ] `src/components/shared/elements/GoldDivider.tsx`
- [ ] `src/components/shared/elements/SaffronBadge.tsx`
- [ ] `src/components/ui/testimonial.tsx` (exact copy — no changes)
- [ ] `src/components/shared/elements/WhatsAppButton.tsx`
- [ ] `src/components/shared/elements/index.ts`
- [ ] `src/components/shared/sections/index.ts`
- [ ] TypeScript passes `npx tsc --noEmit`
- [ ] Committed

## Report File

Write your full implementation report to:
`docs/superpowers/briefs/task-3-report.md`

Return: status, commit hash(es), one-line summary, any concerns.
