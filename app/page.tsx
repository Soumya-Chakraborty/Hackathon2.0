"use client"

import { useEffect, useRef, useState } from "react"
import Loading from "@/components/loading"
import Header from "@/components/sections/header"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ScheduleSection from "@/components/sections/schedule-section"
import PrizesSection from "@/components/sections/prizes-section"
import SponsorsSection from "@/components/sections/sponsors-section"
import FAQSection from "@/components/sections/faq-section"
import RegisterSection from "@/components/sections/register-section"
import Footer from "@/components/sections/footer"

export default function HackathonPage() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({})
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll progress for progress bar
      const scrollTop = window.scrollY
      const docHeight = document.body.offsetHeight - window.innerHeight
      const scrollPercent = scrollTop / docHeight
      setScrollProgress(scrollPercent)

      // Determine active section
      const sections = ["home", "about", "schedule", "prizes", "sponsors", "faq", "register"]
      let currentSection = sections[0]

      for (const section of sections) {
        const element = sectionsRef.current[section]
        if (!element) continue

        const rect = element.getBoundingClientRect()
        if (rect.top <= 150 && rect.bottom > 150) {
          currentSection = section
          break
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false)
    const section = sectionsRef.current[sectionId]
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  // Hackathon date - set to a future date
  const hackathonDate = new Date()
  hackathonDate.setDate(hackathonDate.getDate() + 30) // 30 days from now

  return (
    <div className="relative font-sans text-white bg-black overflow-hidden">
      <Loading isLoaded={isLoaded} />

      <Header
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
        scrollProgress={scrollProgress}
      />

      <main>
        <HeroSection
          sectionRef={(el) => (sectionsRef.current.home = el)}
          hackathonDate={hackathonDate}
          onScrollToSection={scrollToSection}
        />

        <AboutSection sectionRef={(el) => (sectionsRef.current.about = el)} />

        <ScheduleSection sectionRef={(el) => (sectionsRef.current.schedule = el)} />

        <PrizesSection sectionRef={(el) => (sectionsRef.current.prizes = el)} />

        <SponsorsSection sectionRef={(el) => (sectionsRef.current.sponsors = el)} />

        <FAQSection sectionRef={(el) => (sectionsRef.current.faq = el)} />

        <RegisterSection sectionRef={(el) => (sectionsRef.current.register = el)} />
      </main>

      <Footer onScrollToSection={scrollToSection} />
    </div>
  )
}

