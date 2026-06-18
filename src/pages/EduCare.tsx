import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const qualities = [
  { title: "Concentration", desc: "The ability to focus deeply, channeling one's mental energy towards meaningful pursuits without distraction.", icon: "🎯" },
  { title: "Alertness", desc: "A keen awareness of one's surroundings and circumstances, enabling timely and wise responses to life's challenges.", icon: "👁️" },
  { title: "Agility", desc: "The capacity to adapt quickly, to learn from changing situations, and to remain flexible without losing one's center.", icon: "⚡" },
  { title: "Inquisitiveness", desc: "A genuine desire to understand, to question, and to seek deeper truths beyond surface appearances.", icon: "🔍" },
  { title: "Judiciousness", desc: "The wisdom to weigh options carefully, to think before acting, and to make decisions that serve the greater good.", icon: "⚖️" },
  { title: "Presence of Mind", desc: "The composure to remain calm under pressure, to think clearly in critical moments, and to act with confidence.", icon: "🧠" },
  { title: "Cordial Conduct", desc: "The practice of warmth, respect, and genuine kindness in all interactions — the hallmark of a truly educated person.", icon: "🤝" },
];

const EduCare = () => {
  return (
    <Layout>
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Edu-Care – <span className="text-gradient-saffron">Education with Purpose</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              True education is not merely the accumulation of facts. It is the cultivation of
              qualities that make a person strong, resourceful, and kind-hearted — capable of
              turning challenges into opportunities.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {qualities.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="p-6 bg-card rounded-xl border border-saffron hover:shadow-saffron transition-shadow text-center"
              >
                <div className="text-4xl mb-4">{q.icon}</div>
                <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">{q.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{q.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="max-w-3xl mx-auto p-8 bg-saffron-light rounded-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-2xl font-semibold mb-4 text-foreground">
              The Purpose of Education
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Education, in its truest sense, should create individuals who are not only
              knowledgeable but also compassionate, resilient, and resourceful. It should
              empower people to face adversity with courage, to serve their communities
              with dedication, and to live with integrity and purpose. When education
              nurtures both the mind and the heart, it becomes the most powerful force
              for positive transformation in the world.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default EduCare;
