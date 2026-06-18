import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CalendarDays, MapPin, ArrowRight, ExternalLink } from "lucide-react";
import seminarGroup from "@/assets/seminar-group.png";
import seminarInteraction from "@/assets/seminar-interaction.png";
import seminarPresentation from "@/assets/seminar-presentation.png";

const photos = [seminarGroup, seminarInteraction, seminarPresentation];

const UpcomingEventCard = () => {
  return (
    <section className="py-20 bg-[#243447]">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
<h2 className="font-heading text-3xl md:text-6xl font-bold text-gradient-saffron text-center mb-10">            
  Events 
          </h2>

          <motion.div
            className="rounded-2xl overflow-hidden border border-primary/20 bg[-#0b1e3a] shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/* Photo Gallery */}
            <div className="grid grid-cols-3 gap-1">
              {photos.map((img, i) => (
                <div key={i} className="aspect-[4/3] overflow-hidden">
                  <img
                    src={img}
                    alt={`Career Counselling Seminar ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="bg-saffron-gradient p-4 md:p-6 text-primary-foreground">
              <span className="inline-block px-3 py-1 rounded-full bg-White/20 text-sm font-medium mb-3">
                🔴 Live 
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold">
                🎓 Comprehensive Career Counselling Seminar
              </h3>
              <p className="mt-2 opacity-90">SATSANG VIHAR BHUBANESWAR</p>
            </div>

            <div className="p-4 md:p-6 space-y-4">
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                  <CalendarDays size={16} /> Date: 28 March 2026
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                  <MapPin size={16} /> Convention hall SOA Campus 2 Near sum Hospital,Bhubaneswar
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                A comprehensive career counselling seminar featuring eminent speakers from IIT, DRDO, WIPRO, SOA University, and more. Includes inaugural session, career counselling sessions, domain-specific plenary sessions, and interactive Q&A.
              </p>

              <div className="flex justify-center pt-2">
  <Link
    to="/events"
    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary/5 transition-colors"
  >
    View All Events <ArrowRight size={16} />
  </Link>
</div>
            </div>
          
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingEventCard;
