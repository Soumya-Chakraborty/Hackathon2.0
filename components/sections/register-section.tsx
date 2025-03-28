import type React from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, Trophy, User, Mail, Users } from "lucide-react"
import { useState } from "react"

interface RegisterSectionProps {
  sectionRef: React.RefObject<HTMLElement>
}

export default function RegisterSection({ sectionRef }: RegisterSectionProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    participationType: "individual"
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      alert("Registration successful! We'll be in touch soon.")
    } catch (error) {
      alert("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section ref={sectionRef} id="register" className="relative py-12 sm:py-20 overflow-hidden">
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
            <span className="text-gray-500">#</span> REGISTER NOW
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-mono">
            <span className="text-blue-400">void</span>{" "}
            <span className="text-purple-400">register</span>
            <span className="text-white">()</span>{" "}
            <span className="text-blue-400">{"{"}</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-mono">
            <span className="text-gray-500">#</span> Join us for an unforgettable coding experience.
          </p>
        </motion.div>

        <motion.form 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10"
        >
          <motion.div 
            variants={itemVariants}
            className="space-y-4 sm:space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm sm:text-base font-medium text-white mb-2 font-mono">
                <span className="text-blue-400">const</span>{" "}
                <span className="text-purple-400">name</span>{" "}
                <span className="text-red-400">=</span>{" "}
                <span className="text-orange-400">""</span>
                <span className="text-white">;</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-white/50" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 font-mono"
                  placeholder="Your name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm sm:text-base font-medium text-white mb-2 font-mono">
                <span className="text-blue-400">const</span>{" "}
                <span className="text-purple-400">email</span>{" "}
                <span className="text-red-400">=</span>{" "}
                <span className="text-orange-400">""</span>
                <span className="text-white">;</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-white/50" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 font-mono"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="participationType" className="block text-sm sm:text-base font-medium text-white mb-2 font-mono">
                <span className="text-blue-400">const</span>{" "}
                <span className="text-purple-400">participationType</span>{" "}
                <span className="text-red-400">=</span>{" "}
                <span className="text-orange-400">""</span>
                <span className="text-white">;</span>
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-white/50" />
                <select
                  id="participationType"
                  name="participationType"
                  value={formData.participationType}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 font-mono"
                >
                  <option value="individual">Individual</option>
                  <option value="team">Team (2-4 members)</option>
                </select>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-6 sm:mt-8"
          >
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-800 text-white hover:from-cyan-500 hover:to-cyan-700 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-mono focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full"
                  />
                  <span>Registering...</span>
                </span>
              ) : (
                <>
                  <span className="text-blue-200">void</span>{" "}
                  <span className="text-yellow-400">submit</span>
                  <span className="text-white">()</span>{" "}
                  <span className="text-blue-400">{"{"}</span>{" "}
                  <span className="text-white">Register Now</span>{" "}
                  <span className="text-blue-400">{"}"}</span>
                </>
              )}
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  )
}

