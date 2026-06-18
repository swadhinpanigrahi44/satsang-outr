import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import outrGroup from "@/assets/outr-group.png";
import statueBlue2 from "@/assets/statue-blue2.png";
import statueClose from "@/assets/statue-close.png";
import Groupphoto1 from "@/assets/DSC_6024.JPG.jpeg";
import Groupphoto2 from "@/assets/WHITE GROUP.jpeg";
import statueClose1 from "@/assets/IMG-20260105-WA0197.jpg (1).jpeg";
import Layout from "@/components/Layout";
import RegistrationDialog from "@/components/RegistrationDialog";
import UpcomingEventCard from "@/components/UpcomingEventCard";
import React, { useState, useEffect } from "react";

// Fade-in/out gallery images
const scrollImages = [outrGroup, statueClose1,Groupphoto1,Groupphoto2];

// Fade-up animation variant for hero text
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Change gallery image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % scrollImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <RegistrationDialog />

      {/* Fade Image Gallery */}
      <section className="relative bg-[#243447] py-10 flex justify-center items-center">
        <div className="relative w-full max-w-6x1 h-[500px] md:h-[700px] overflow-hidden rounded-xl shadow-lg">
          {scrollImages.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`Gallery ${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: i === currentImage ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          ))}

          {/* Overlay Text */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <motion.h2
              variants={fadeUp}        // <--- now correctly defined
              initial="hidden"
              animate="visible"
              
            >
              
            </motion.h2>
          </div>
        </div>
      </section>
      {/* Hero */}
      <section className="relative bg-[#243447] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 50%, hsl(200 70% 55% / 0.15), transparent 60%), radial-gradient(circle at 70% 30%, hsl(200 60% 45% / 0.1), transparent 50%)",
            }}
          />
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              custom={0}
              variants={fadeUp}
              className="font-heading text-4xl md:text-6xl font-bold text-gradient-saffron mb-6"
            >
              Satsang –{" "}
              <span className="text-gradient-saffron">
                The Man Making Industries
              </span>
            </motion.h1>

            <motion.p
              custom={1}
              variants={fadeUp}
              className="text-lg md:text-xl text-gradient-saffron leading-relaxed mb-10"
            >
              A socio-cultural and philanthropic institution dedicated to
              character building, spiritual awakening, and collective
              upliftment.
            </motion.p>

            <motion.div
              custom={2}
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-4"
            >
             

              <a
  href="https://www.satsang.org.in/home"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full md:w-96 h-20 flex items-center justify-center bg-transparent border-2 border-white bg-white text-gradient-saffron font-bold text-xl shadow-lg hover:opacity-90 transition-opacity rounded-lg"
>
  Visit Official Website
</a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Last Photo */}
      <section className="bg-[#243447]">
        <div className="container mx-auto px-4 pb-12">
          <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg">
            <img
              src={statueClose}
              alt="Sree Sree Thakur Anukulchandra"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <UpcomingEventCard />

    

      {/* Our Mission */}
      <section className="py-20 bg-[#243447]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-gradient-saffron">
              Our <span className="text-gradient-saffron">Mission</span>
            </h2>

            <p className="text-gradient-saffron text-lg leading-relaxed">
              "Do never die, nor cause death; but resist death to death." This
              website introduces you to the man who roared out this extreme
              optimism against a backdrop of extreme violence and sadness
              devouring the world. He is SREE SREE THAKUR ANUKULCHANDRA,
              Fulfiller the Best of the age, whose clarion call to resist death,
              of all sorts, physical and spiritual, has rejuvenated innumerable
              dwindling souls and awakened umpteenth slumbering minds.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
