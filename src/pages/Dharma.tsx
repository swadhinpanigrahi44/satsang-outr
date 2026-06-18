import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const dharmaPoints = [
  {
    title: "Sustaining Life",
    desc: "Dharma is that which sustains and uplifts both individual and collective existence. It is the invisible thread that holds together families, communities, and civilizations.",
    icon: "🌿",
  },
  {
    title: "Right Understanding",
    desc: "True Dharma begins with seeing things as they are — understanding reality without delusion, recognizing one's duties, and acting with clarity of purpose.",
    icon: "💡",
  },
  {
    title: "Right Intention",
    desc: "Actions rooted in selfless intention carry the power of transformation. When the heart is pure and aligned with a higher purpose, every deed becomes an offering.",
    icon: "🎯",
  },
  {
    title: "Right Action",
    desc: "Dharma is not merely what we believe, but what we practice. It is expressed through honorable conduct, honest dealings, and consistent effort to do what is good and just.",
    icon: "⚖️",
  },
  {
    title: "Adapts to Time & Place",
    desc: "Dharma is not rigid dogma. It adapts to time, place, and circumstance while remaining rooted in eternal principles of truth, compassion, and growth.",
    icon: "🔄",
  },
  {
    title: "Worship as Worth-ship",
    desc: "To worship means to make oneself worthy — worthy through action, through service, through refining one's character. It is the daily practice of becoming a better human being.",
    icon: "✨",
  },
  {
    title: "Character as Foundation",
    desc: "Strong character is the bedrock of a meaningful life. Without integrity and inner strength, no external achievement can bring lasting fulfillment.",
    icon: "🏛️",
  },
  {
    title: "Service & Devotion",
    desc: "Devotion to the Ideal and service to fellow beings are not separate paths — they are two wings of the same bird, both essential for the flight of the soul.",
    icon: "🙏",
  },
];

const Dharma = () => {
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
              The Light of <span className="text-gradient-saffron">Dharma</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Dharma is the eternal principle that sustains, nurtures, and elevates life
              towards its highest potential.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
            {dharmaPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="p-6 bg-card rounded-xl border border-saffron hover:shadow-saffron transition-shadow"
              >
                <div className="text-3xl mb-3">{point.icon}</div>
                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                  {point.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dharma;
