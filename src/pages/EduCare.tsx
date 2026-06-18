// src/pages/EduCare.tsx
// Edu-Care — Education with Purpose
// Qualities data from src/features/educare/data/educare.data.ts
import Layout from '@/components/Layout';
import { GoldDivider, SectionHeading, AnimatedSection, SpiritualCard } from '@/components/shared/elements';
import { qualities } from '@/features/educare/data/educare.data';

const purposeText = `Education, in its truest sense, should create individuals who are not only knowledgeable but also compassionate, resilient, and resourceful. It should empower people to face adversity with courage, to serve their communities with dedication, and to live with integrity and purpose. When education nurtures both the mind and the heart, it becomes the most powerful force for positive transformation in the world.`;

const EduCare = () => {
  return (
    <Layout>
      <section style={{ background: 'hsl(var(--background))' }} className="py-20">
        <div className="container mx-auto px-4">

          <AnimatedSection className="text-center mb-16">
            <SectionHeading
              title="Edu-Care — Education with Purpose"
              highlight="Education"
              subtitle="True education is not merely the accumulation of facts. It is the cultivation of qualities that make a person strong, resourceful, and kind-hearted."
              centered
            />
          </AnimatedSection>

          <GoldDivider className="mb-12" />

          {/* Qualities grid — edit src/features/educare/data/educare.data.ts to add/change */}
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {qualities.map((q, i) => (
              <AnimatedSection key={q.title} delay={i * 0.07}>
                <SpiritualCard icon={<span>{q.icon}</span>} title={q.title} variant="dark" hoverable className="text-center">
                  <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">{q.desc}</p>
                </SpiritualCard>
              </AnimatedSection>
            ))}
          </div>

          <GoldDivider className="mb-12" />

          {/* Purpose block */}
          <AnimatedSection delay={0.1} className="max-w-3xl mx-auto">
            <div className="p-8 rounded-2xl border border-[hsl(var(--brand-primary)/0.25)] bg-[hsl(var(--brand-secondary)/0.4)] text-center">
              <h2 className="font-heading text-2xl font-bold mb-4 text-foreground">The Purpose of Education</h2>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed text-sm">{purposeText}</p>
            </div>
          </AnimatedSection>

        </div>
      </section>
    </Layout>
  );
};

export default EduCare;
