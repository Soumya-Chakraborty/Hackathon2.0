import type React from "react"
import Image from "next/image"
import { Code, Users, Zap } from "lucide-react"
import { motion } from "framer-motion"

interface AboutSectionProps {
  sectionRef: React.RefObject<HTMLElement>
}

export default function AboutSection({ sectionRef }: AboutSectionProps) {
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
    <section ref={sectionRef} id="about" className="relative py-12 sm:py-20 overflow-hidden">
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
            <span className="text-gray-500">#</span> ABOUT KOLKATA HACKFEST
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-mono">
            <span className="text-blue-400">int</span>{" "}
            <span className="text-purple-400">about</span>{" "}
            <span className="text-red-400">=</span>{" "}
            <span className="text-orange-400">1</span>
            <span className="text-white">;</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-mono">
            <span className="text-gray-500">#</span> A 12-hour coding marathon where innovation meets opportunity. Build, learn, and compete with the best.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10 hover:border-cyan-400/50 transition-all group"
            whileHover={{ y: -5 }}
          >
            <motion.div 
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-800 flex items-center justify-center mb-4 sm:mb-6"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-200" />
            </motion.div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 font-mono">
              <span className="text-blue-400">int</span>{" "}
              <span className="text-purple-400">fastPaced</span>{" "}
              <span className="text-red-400">=</span>{" "}
              <span className="text-orange-400">1</span>
              <span className="text-white">;</span>
            </h3>
            <p className="text-sm sm:text-base text-white/70 font-mono">
              <span className="text-gray-500">#</span> Just 12 hours to conceptualize, build, and present your project. Perfect for those who thrive under pressure.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10 hover:border-pink-500/50 transition-all group"
            whileHover={{ y: -5 }}
          >
            <motion.div 
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-pink-600 to-pink-800 flex items-center justify-center mb-4 sm:mb-6"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-pink-200" />
            </motion.div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 font-mono">
              <span className="text-blue-400">int</span>{" "}
              <span className="text-purple-400">teamBased</span>{" "}
              <span className="text-red-400">=</span>{" "}
              <span className="text-orange-400">1</span>
              <span className="text-white">;</span>
            </h3>
            <p className="text-sm sm:text-base text-white/70 font-mono">
              <span className="text-gray-500">#</span> Form teams of up to 4 people or join solo and we'll help you find teammates with complementary skills.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10 hover:border-purple-500/50 transition-all group"
            whileHover={{ y: -5 }}
          >
            <motion.div 
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center mb-4 sm:mb-6"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Code className="w-6 h-6 sm:w-8 sm:h-8 text-purple-200" />
            </motion.div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 font-mono">
              <span className="text-blue-400">int</span>{" "}
              <span className="text-purple-400">innovative</span>{" "}
              <span className="text-red-400">=</span>{" "}
              <span className="text-orange-400">1</span>
              <span className="text-white">;</span>
            </h3>
            <p className="text-sm sm:text-base text-white/70 font-mono">
              <span className="text-gray-500">#</span> Use any technology stack to build something amazing. The only limit is your imagination.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center"
        >
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 font-mono">
              <span className="text-blue-400">void</span>{" "}
              <span className="text-yellow-400">whyParticipate</span>
              <span className="text-white">()</span>{" "}
              <span className="text-blue-400">{`{`}</span>
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Build something meaningful in just 12 hours",
                "Network with industry professionals and peers",
                "Learn new technologies through hands-on experience",
                "Win prizes and recognition for your innovation",
                "Add a unique project to your portfolio",
              ].map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center gap-2 sm:gap-3 font-mono"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div 
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-800 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-cyan-200"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </motion.div>
                  <span className="text-cyan-400">//</span>{" "}
                  <span className="text-sm sm:text-base text-white/90">{item}</span>
                </motion.li>
              ))}
            </ul>
            <span className="text-cyan-400 font-mono">{`}`}</span>
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-pink-600 rounded-lg blur opacity-75"
              animate={{ 
                opacity: [0.5, 0.75, 0.5],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative bg-black rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Hackathon participants"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

