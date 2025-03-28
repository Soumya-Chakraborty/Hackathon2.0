import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface FAQSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
}

export default function FAQSection({ sectionRef, contactRef }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const router = useRouter();

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
    <section ref={sectionRef} id="faq" className="relative py-12 sm:py-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-r from-cyan-400/20 to-pink-500/20 blur-3xl rounded-full" />
        <div className="absolute right-0 bottom-1/4 w-1/3 h-1/2 bg-gradient-to-r from-purple-400/20 to-blue-500/20 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
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
            <span className="text-gray-500">#</span> FREQUENTLY ASKED QUESTIONS
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 reveal-on-scroll font-mono">
            <span className="text-blue-400">int</span>{" "}
            <span className="text-purple-400">faq</span>{" "}
            <span className="text-red-400">=</span>{" "}
            <span className="text-orange-400">1</span>
            <span className="text-white">;</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 reveal-on-scroll animation-delay-200 font-mono">
            <span className="text-gray-500">#</span> Got questions? We've got
            answers. Here's everything you need to know about Kolkata Hackfest.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-3 sm:space-y-4"
        >
          {[
            {
              q: "What is Kolkata Hackfest?",
              a: "Kolkata Hackfest is a 12-hour coding marathon where participants build innovative projects from scratch. It's a fast-paced event designed to challenge your skills and spark creativity in a limited timeframe.",
            },
            {
              q: "Who can participate?",
              a: "Anyone with a passion for coding! Whether you're a student, professional developer, or just starting your coding journey, Kolkata Hackfest welcomes all skill levels. Teams can have up to 4 members.",
            },
            {
              q: "What should I bring?",
              a: "Bring your laptop, charger, and enthusiasm! We'll provide food, drinks, and a great workspace. Make sure to have your development environment set up before the event.",
            },
            {
              q: "Is it free to participate?",
              a: "Yes! Kolkata Hackfest is completely free to attend. We provide food, drinks, and all necessary resources. You just need to bring your laptop and creativity.",
            },
            {
              q: "What kind of projects can I build?",
              a: "You can build anything! Web apps, mobile apps, AI/ML projects, hardware hacks, or any other innovative solution. The only limit is your imagination and the 12-hour timeframe.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10 hover:border-cyan-400/30 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left"
                whileHover={{ x: 5 }}
              >
                <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 animate-shimmer font-mono">
                  <span className="text-blue-400">char</span>{" "}
                  <span className="text-purple-400">question</span>{" "}
                  <span className="text-red-400">=</span>{" "}
                  <span className="text-green-400">{`"${item.q}"`}</span>
                  <span className="text-white">;</span>
                </h4>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                  )}
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm sm:text-base text-white/90 animate-typing font-mono pt-4">
                      <span className="text-gray-500">#</span> {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <p className="text-base sm:text-lg mb-3 sm:mb-4 animate-shimmer font-mono">
            <span className="text-gray-500">#</span> Still have questions?
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