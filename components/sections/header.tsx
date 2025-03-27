"use client"

import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface HeaderProps {
  activeSection: string
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  scrollToSection: (sectionId: string) => void
  scrollProgress: number
}

export default function Header({
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollToSection,
  scrollProgress,
}: HeaderProps) {
  return (
    <>
      {/* Mobile Navigation - Moved outside header */}
      <div
        className={cn(
          "fixed inset-0 bg-black/95 backdrop-blur-lg z-20 flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden",
          mobileMenuOpen 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center gap-8">
          {["home", "about", "schedule", "prizes", "sponsors", "faq", "register"].map((item, index) => (
            <button
              key={item}
              onClick={() => {
                scrollToSection(item)
                setMobileMenuOpen(false)
              }}
              className={cn(
                "text-2xl font-medium capitalize transition-all duration-300 hover:text-pink-500 hover:scale-110",
                activeSection === item ? "text-pink-500" : "text-white/80",
                mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-40 transition-all duration-300">
        {/* Progress bar */}
        <div
          className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 z-50"
          style={{ width: `${scrollProgress * 100}%` }}
        />

        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-pink-500 flex items-center justify-center">
              <span className="font-bold text-lg">&lt;/&gt;</span>
            </div>
            <span className="text-xl font-extrabold tracking-tight">
              FLASH<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">HACK</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["home", "about", "schedule", "prizes", "sponsors", "faq", "register"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={cn(
                  "text-sm font-medium capitalize transition-colors hover:text-pink-500 relative py-1",
                  activeSection === item ? "text-pink-500" : "text-white/80",
                )}
              >
                {item}
                {activeSection === item && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
    </>
  )
}

