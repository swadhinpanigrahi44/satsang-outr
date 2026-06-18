// src/pages/Dharma.tsx
// The Light of Dharma — content read from src/features/dharma/data/dharma.data.ts
// Add or edit dharma points in that file, not here
import Layout from '@/components/Layout';
import { GoldDivider, SectionHeading, AnimatedSection, SpiritualCard } from '@/components/shared/elements';
import { dharmaPoints } from '@/features/dharma/data/dharma.data';

const Dharma = () => {
  return (
    <Layout>
      <section style={{ background: 'hsl(var(--background))' }} className="py-20">
        <div className="container mx-auto px-4">

          <AnimatedSection className="text-center mb-16">
            <SectionHeading
              title="The Light of Dharma"
              highlight="Dharma"
              subtitle="Dharma is the eternal principle that sustains, nurtures, and elevates life towards its highest potential."
              centered
            />
          </AnimatedSection>

          <GoldDivider className="mb-12" />

          {/* Dharma points grid — edit src/features/dharma/data/dharma.data.ts to add/change */}
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
            {dharmaPoints.map((point, i) => (
              <AnimatedSection key={point.title} delay={i * 0.07}>
                <SpiritualCard icon={<span>{point.icon}</span>} title={point.title} variant="dark" hoverable>
                  <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">{point.desc}</p>
                </SpiritualCard>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Dharma;
