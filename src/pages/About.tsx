// src/pages/About.tsx
// About Sree Sree Thakur Anukulchandra — preserves all original biography content
import Layout from '@/components/Layout';
import { GoldDivider, SectionHeading, AnimatedSection, SpiritualCard } from '@/components/shared/elements';
import statueBlue from '@/assets/statue-blue.jpeg';

const biographyCards = [
  {
    title: 'Biography',
    body: 'Sree Sree Thakur Anukulchandra was born on 14th September 1888 in Himaitpur, a small village in the Pabna district of undivided Bengal (now in Bangladesh). From an early age, he displayed extraordinary spiritual awareness and a deep compassion for all beings. His life was a living example of the ideals he taught — devotion, discipline, and selfless service.',
  },
  {
    title: 'Spiritualism as Science',
    body: 'Sree Sree Thakur viewed spiritualism not as blind faith or superstition, but as a clear understanding of the laws that govern life, growth, and human potential. He taught that every individual can unlock their highest possibilities by aligning themselves with these natural and spiritual laws through devotion to the living Ideal.',
  },
  {
    title: 'Community & Service',
    body: 'He emphasized the importance of community living rooted in love, mutual respect, and shared responsibility. For him, true spiritual progress was inseparable from social responsibility — serving others, nurturing relationships, and contributing to the well-being of the collective.',
  },
  {
    title: 'Educator, Philosopher, Reformer',
    body: 'Beyond his spiritual role, Sree Sree Thakur was an educator who transformed the concept of learning, a philosopher who bridged ancient wisdom with modern thought, and a reformer who worked tirelessly for social justice, agricultural self-sufficiency, and the empowerment of every individual regardless of background.',
  },
];

const About = () => {
  return (
    <Layout>
      <section style={{ background: 'hsl(var(--background))' }} className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto">

            {/* Page heading */}
            <SectionHeading
              title="About Sree Sree Thakur Anukulchandra"
              highlight="Anukulchandra"
              subtitle="A spiritual guide, reformer, and humanitarian whose teachings continue to inspire millions towards purposeful living."
              centered
              className="mb-14"
            />

            <GoldDivider className="mb-10" />

            {/* Two-column layout: image + cards */}
            <div className="grid md:grid-cols-5 gap-10 items-start">

              {/* Statue image */}
              <div className="md:col-span-2">
                <div className="rounded-xl overflow-hidden shadow-xl shadow-black/40 ring-1 ring-[hsl(var(--brand-primary)/0.3)]">
                  <img
                    src={statueBlue}
                    alt="Sree Sree Thakur Anukulchandra"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Biography cards */}
              <div className="md:col-span-3 space-y-4">
                {biographyCards.map((card, i) => (
                  <AnimatedSection key={card.title} delay={i * 0.1}>
                    <SpiritualCard title={card.title} variant="dark">
                      <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
                        {card.body}
                      </p>
                    </SpiritualCard>
                  </AnimatedSection>
                ))}
              </div>
            </div>

          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
