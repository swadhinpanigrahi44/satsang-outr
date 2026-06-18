import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Get in <span className="text-gradient-saffron">Touch</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-12">
              We welcome you to connect with Satsang OUTR. Reach out to us for
              any inquiries, to participate in events, or to learn more about the teachings.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {[
                { icon: <MapPin size={28} />, title: "Visit Us", text: "Satsang OUTR, India" },
                { icon: <Phone size={28} />, title: "Call Us", text: "Contact for details" },
                { icon: <Mail size={28} />, title: "Email Us", text: "Contact for details" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-card rounded-xl border border-saffron text-center"
                >
                  <div className="flex justify-center mb-3 text-saffron-dark">{item.icon}</div>
                  <h3 className="font-heading text-lg font-semibold mb-1 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="p-8 bg-card rounded-xl border border-saffron">
              <h2 className="font-heading text-2xl font-semibold mb-6 text-foreground">
                Send a Message
              </h2>
              <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg bg-saffron-gradient text-primary-foreground font-medium shadow-saffron hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
