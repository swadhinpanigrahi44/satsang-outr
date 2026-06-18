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
