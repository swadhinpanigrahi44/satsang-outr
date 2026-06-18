import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import statueBlue from "@/assets/statue-blue.jpeg";

const About = () => {
  return (
    <Layout>
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-6">
              About <span className="text-gradient-saffron">Sree Sree Thakur Anukulchandra</span>
            </h1>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
              A spiritual guide, reformer, and humanitarian whose teachings continue to
              inspire millions towards purposeful living.
            </p>

            <div className="grid md:grid-cols-5 gap-10 items-start">
              <div className="md:col-span-2">
                <img
                  src={statueBlue}
                  alt="Sree Sree Thakur Anukulchandra"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
              <div className="md:col-span-3 space-y-6">
                <div className="p-6 bg-card rounded-xl border border-saffron">
                  <h2 className="font-heading text-2xl font-semibold mb-3 text-foreground">Biography</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Sree Sree Thakur Anukulchandra was born on 14th September 1888 in Himaitpur,
                    a small village in the Pabna district of undivided Bengal (now in Bangladesh).
                    From an early age, he displayed extraordinary spiritual awareness and a deep
                    compassion for all beings. His life was a living example of the ideals he taught —
                    devotion, discipline, and selfless service.
                  </p>
                </div>

                <div className="p-6 bg-card rounded-xl border border-saffron">
                  <h2 className="font-heading text-2xl font-semibold mb-3 text-foreground">
                    Spiritualism as Science
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Sree Sree Thakur viewed spiritualism not as blind faith or superstition, but as
                    a clear understanding of the laws that govern life, growth, and human potential.
                    He taught that every individual can unlock their highest possibilities by
                    aligning themselves with these natural and spiritual laws through devotion to
                    the living Ideal.
                  </p>
                </div>

                <div className="p-6 bg-card rounded-xl border border-saffron">
                  <h2 className="font-heading text-2xl font-semibold mb-3 text-foreground">
                    Community & Service
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    He emphasized the importance of community living rooted in love, mutual respect,
                    and shared responsibility. For him, true spiritual progress was inseparable from
                    social responsibility — serving others, nurturing relationships, and contributing
                    to the well-being of the collective.
                  </p>
                </div>

                <div className="p-6 bg-card rounded-xl border border-saffron">
                  <h2 className="font-heading text-2xl font-semibold mb-3 text-foreground">
                    Educator, Philosopher, Reformer
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Beyond his spiritual role, Sree Sree Thakur was an educator who transformed the
                    concept of learning, a philosopher who bridged ancient wisdom with modern thought,
                    and a reformer who worked tirelessly for social justice, agricultural self-sufficiency,
                    and the empowerment of every individual regardless of background.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
