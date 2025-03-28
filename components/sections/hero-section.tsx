"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import ParticleBackground from "@/components/particle-background"

interface HeroSectionProps {
  sectionRef: React.RefObject<HTMLElement>
  aboutRef: React.RefObject<HTMLElement>
  registerRef: React.RefObject<HTMLElement>
}

export default function HeroSection({ sectionRef, aboutRef, registerRef }: HeroSectionProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80 // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  const handlePreRegister = () => {
    scrollToSection("register")
  }

  const handleLearnMore = () => {
    scrollToSection("about")
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleBackground />
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-cyan-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,255,0.15),transparent_70%)]" />
        <div className="absolute left-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-r from-cyan-400/20 to-pink-500/20 blur-3xl rounded-full" />
        <div className="absolute right-0 bottom-1/4 w-1/3 h-1/2 bg-gradient-to-r from-purple-400/20 to-blue-500/20 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 mb-4 text-xs font-medium text-white bg-white/10 backdrop-blur-sm rounded-full font-mono"
          >
            <span className="text-gray-500">#</span> Kolkata Hackfest 2025
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-mono"
          >
            <span className="text-blue-400">const</span>{" "}
            <span className="text-purple-400">KolkataHackfest</span>{" "}
            <span className="text-red-400">=</span>{" "}
            <span className="text-orange-400">"2025"</span>
            <span className="text-white">;</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/70 mb-8 font-mono"
          >
            <span className="text-gray-500">#</span> Join us for 12 hours of coding, creativity, and collaboration.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={handlePreRegister}
                className="bg-gradient-to-r from-blue-400 to-purple-500 hover:opacity-90 transition-all duration-300 font-mono relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400/0 to-purple-500/0 group-hover:from-blue-400/20 group-hover:to-purple-500/20 transition-all duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-blue-200">function</span>{" "}
                  <span className="text-yellow-400">PreRegister</span>
                  <span className="text-white">()</span>{" "}
                  <span className="text-blue-400">{`{`}</span>{" "}
                  <span className="text-white">preRegister Now</span>{" "}
                  <span className="text-blue-400">{`}`}</span>
                </span>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={handleLearnMore}
                className="border-white/20 hover:bg-white/10 transition-all duration-300 font-mono relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/5 transition-all duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-blue-400">function</span>{" "}
                  <span className="text-yellow-400">learnMore</span>
                  <span className="text-white">()</span>{" "}
                  <span className="text-blue-400">{`{`}</span>{" "}
                  <span className="text-white">Learn More</span>{" "}
                  <span className="text-blue-400">{`}`}</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </motion.div>
          </motion.div>
          <div className="mt-16 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/30 to-pink-600/30 blur-2xl rounded-full"></div>
            <div className="relative">
              <p className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 animate-pulse font-mono mb-4">
                COMING SOON
              </p>
              <p className="text-2xl text-white/90 font-mono">
                <span className="text-gray-500">#</span> Event Date: To Be Announced
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

