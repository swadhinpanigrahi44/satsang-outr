// src/pages/Testimonials.tsx
// Route: /testimonials — text-only testimonials, no profile photos
// Add or edit testimonials in src/data/testimonials.data.ts
import { Quote } from 'lucide-react';
import Layout from '@/components/Layout';
import { SectionHeading, GoldDivider, AnimatedSection } from '@/components/shared/elements';
import { TestimonialCarousel } from '@/components/ui/testimonial';
import { testimonials } from '@/data/testimonials.data';

const Testimonials = () => {
  return (
    <Layout>
      <section style={{ background: 'hsl(var(--background))' }} className="py-20">
        <div className="container mx-auto px-4">

          <AnimatedSection className="mb-10">
            <SectionHeading
              title="Community Voices"
              highlight="Voices"
              subtitle="Words from those whose lives have been touched by Satsang OUTR — students, members, and seekers."
              centered
            />
          </AnimatedSection>

          <GoldDivider className="mb-16" />

          {/* Carousel */}
          <AnimatedSection delay={0.1} className="max-w-lg mx-auto mb-20">
            <TestimonialCarousel
              testimonials={testimonials}
              showArrows
              showDots
              className="py-8"
            />
          </AnimatedSection>

          <GoldDivider className="mb-12" />

          {/* Grid — text-only cards */}
          <AnimatedSection delay={0.15} className="mb-6">
            <h2 className="font-heading text-2xl font-bold text-center text-foreground mb-2">
              All <span className="text-gradient-saffron">Testimonials</span>
            </h2>
            <p className="text-center text-[hsl(var(--muted-foreground))] text-sm mb-10">
              Every voice matters. Here are all the stories from our community.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.id} delay={i * 0.08}>
                <div
                  className="p-6 rounded-2xl border border-[hsl(var(--brand-primary)/0.15)] h-full flex flex-col gap-4"
                  style={{ background: 'hsl(var(--brand-secondary)/0.4)' }}
                >
                  <Quote size={20} className="text-[hsl(var(--brand-primary)/0.4)] flex-shrink-0" />
                  <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed flex-1">
                    "{t.description}"
                  </p>
                  <div className="pt-2 border-t border-[hsl(var(--border)/0.3)]">
                    <p className="font-heading text-sm font-bold text-foreground">{t.name}</p>
                    {t.role && (
                      <p className="text-[hsl(var(--muted-foreground))] text-xs mt-0.5">{t.role}</p>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
