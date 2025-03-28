import type React from "react";
import { motion } from "framer-motion";
import { Building2, Sparkles } from "lucide-react";

interface SponsorsSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
}

export default function SponsorsSection({ sectionRef, contactRef }: SponsorsSectionProps) {
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section ref={sectionRef} id="sponsors" className="relative py-12 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-r from-cyan-400/20 to-pink-500/20 blur-3xl rounded-full" />
        <div className="absolute right-0 bottom-1/4 w-1/3 h-1/2 bg-gradient-to-r from-purple-400/20 to-blue-500/20 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-8 sm:mb-16 text-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 mb-3 sm:mb-4 text-xs font-medium text-white bg-white/10 backdrop-blur-sm rounded-full font-mono"
          >
            <span className="text-gray-500">#</span> OUR SPONSORS
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-mono">
            <span className="text-blue-400">const</span>{" "}
            <span className="text-purple-400">sponsors</span>{" "}
            <span className="text-red-400">=</span>{" "}
            <span className="text-orange-400">1</span>
            <span className="text-white">;</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-mono">
            <span className="text-gray-500">#</span> Join us in supporting the next generation of innovators.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {[
            {
              title: "Platinum Sponsor",
              description: "Lead the way in innovation and technology",
              icon: Sparkles,
              color: "from-yellow-400 to-yellow-600"
            },
            {
              title: "Gold Sponsor",
              description: "Support the future of tech talent",
              icon: Building2,
              color: "from-amber-400 to-amber-600"
            },
            {
              title: "Silver Sponsor",
              description: "Help shape the next generation of developers",
              icon: Building2,
              color: "from-gray-400 to-gray-600"
            }
          ].map((sponsor, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10 hover:border-cyan-400/50 transition-all group"
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br ${sponsor.color} flex items-center justify-center mb-4 sm:mb-6`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <sponsor.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 font-mono">
                <span className="text-blue-400">const</span>{" "}
                <span className="text-purple-400">{sponsor.title.toLowerCase().replace(/\s+/g, '')}</span>{" "}
                <span className="text-red-400">=</span>{" "}
                <span className="text-orange-400">1</span>
                <span className="text-white">;</span>
              </h3>
              <p className="text-sm sm:text-base text-white/70 font-mono">
                <span className="text-gray-500">#</span> {sponsor.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-base sm:text-lg mb-3 sm:mb-4 animate-shimmer font-mono">
            <span className="text-gray-500">#</span> Want to become a sponsor?
          </p>
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-800 text-white hover:from-cyan-500 hover:to-cyan-700 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 animate-pulse font-mono focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50"
          >
            <span className="text-blue-200">void</span>{" "}
            <span className="text-yellow-400">contactUs</span>
            <span className="text-white">()</span>{" "}
            <span className="text-blue-400">{"{"}</span>{" "}
            <span className="text-white">Contact Us</span>{" "}
            <span className="text-blue-400">{"}"}</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}