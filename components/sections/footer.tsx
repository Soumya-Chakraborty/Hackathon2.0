"use client"

import type React from "react"
import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
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
    <footer className="bg-black border-t border-cyan-900/30">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12"
        >
          {/* Company Info */}
          <motion.div 
            variants={itemVariants}
            className="space-y-4 sm:space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white font-mono">
                <span className="text-blue-400">const</span>{" "}
                <span className="text-purple-400">kolkataHackfest</span>{" "}
                <span className="text-red-400">=</span>{" "}
                <span className="text-orange-400">true</span>
                <span className="text-white">;</span>
              </h3>
              <p className="text-sm sm:text-base text-white/70 font-mono">
                Empowering developers to build the future through innovative hackathons.
              </p>
            </motion.div>
            <div className="space-y-3 sm:space-y-4">
              <motion.a 
                href="mailto:hackgenesis.hackathon@gmail.com"
                className="flex items-center gap-2 sm:gap-3 text-white/70 hover:text-cyan-400 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base font-mono">
                  hackgenesis.hackathon@gmail.com
                </span>
              </motion.a>
              <motion.div 
                className="flex items-start gap-2 sm:gap-3 text-white/70"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-1" />
                <p className="text-sm sm:text-base font-mono">
                  South Canal Road,<br />
                  Beleghata, Kolkata,<br />
                  West Bengal, India
                </p>
              </motion.div>
            </div>
            <motion.div 
              className="flex gap-3 sm:gap-4"
              variants={containerVariants}
            >
              {[
                { icon: Github, href: "https://github.com/hackgenesis" },
                { icon: Twitter, href: "https://twitter.com/hackgenesis" },
                { icon: Linkedin, href: "https://linkedin.com/company/hackgenesis" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-cyan-400 transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  variants={itemVariants}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            variants={itemVariants}
            className="space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white font-mono">
              <span className="text-blue-400">function</span>{" "}
              <span className="text-yellow-400">quickLinks</span>
              <span className="text-white">()</span>{" "}
              <span className="text-blue-400">{`{`}</span>
            </h3>
            <motion.ul 
              className="space-y-2 sm:space-y-3"
              variants={containerVariants}
            >
              {[
                { text: "About Us", href: "/about" },
                { text: "Blog", href: "/blog" },
                { text: "Contact", href: "/contact" },
                { text: "Sponsorship", href: "/sponsorship" }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link 
                      href={link.href}
                      className="text-sm sm:text-base text-white/70 hover:text-cyan-400 transition-colors font-mono"
                    >
                      {link.text}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
            <span className="text-cyan-400">{`}`}</span>
          </motion.div>

          {/* Legal */}
          <motion.div 
            variants={itemVariants}
            className="space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white font-mono">
              <span className="text-blue-400">function</span>{" "}
              <span className="text-yellow-400">legal</span>
              <span className="text-white">()</span>{" "}
              <span className="text-blue-400">{`{`}</span>
            </h3>
            <motion.ul 
              className="space-y-2 sm:space-y-3"
              variants={containerVariants}
            >
              {[
                { text: "Privacy Policy", href: "/privacy" },
                { text: "Terms of Service", href: "/terms" },
                { text: "Code of Conduct", href: "/code-of-conduct" },
                { text: "Press Kit", href: "/press-kit" }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link 
                      href={link.href}
                      className="text-sm sm:text-base text-white/70 hover:text-cyan-400 transition-colors font-mono"
                    >
                      {link.text}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
            <span className="text-cyan-400">{`}`}</span>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-t border-white/10 mt-8 sm:mt-12 pt-6 sm:pt-8"
        >
          <p className="text-center text-xs sm:text-sm text-white/50 font-mono">
            <span className="text-gray-500">//</span>{" "}
            <span className="text-blue-400">const</span>{" "}
            <span className="text-purple-400">copyright</span>{" "}
            <span className="text-red-400">=</span>{" "}
            <span className="text-orange-400">{`"© ${new Date().getFullYear()} Kolkata Hackfest. All rights reserved."`}</span>
            <span className="text-white">;</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

