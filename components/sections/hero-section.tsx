"use client"

import type React from "react"

import { ChevronDown } from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"
import ParticleBackground from "@/components/particle-background"

interface HeroSectionProps {
  sectionRef: React.RefObject<HTMLElement>
  hackathonDate: Date
  onScrollToSection: (sectionId: string) => void
}

export default function HeroSection({ sectionRef, hackathonDate, onScrollToSection }: HeroSectionProps) {
  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <ParticleBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-white bg-white/10 backdrop-blur-sm rounded-full animate-fade-in-up animate-shimmer">
            12-HOUR CODING SPRINT
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight animate-fade-in-up animation-delay-200">
            FLASH<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 animate-pulse">HACK</span>{" "}
            2024
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-400 animate-typing">
            Ignite your creativity in just 12 hours of intense coding, collaboration, and innovation
          </p>

          <div className="mb-10 animate-fade-in-up animation-delay-600 animate-float">
            <CountdownTimer targetDate={hackathonDate} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-800">
            <button className="px-8 py-3 text-base font-medium rounded-lg bg-gradient-to-r from-cyan-400 to-pink-500 hover:opacity-90 transition-all hover:scale-105 animate-pulse">
              Register Now
            </button>
            <button className="px-8 py-3 text-base font-medium rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all hover:scale-105 animate-float">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={() => onScrollToSection("about")} aria-label="Scroll down">
          <ChevronDown size={32} className="text-white/50" />
        </button>
      </div>
    </section>
  )
}

