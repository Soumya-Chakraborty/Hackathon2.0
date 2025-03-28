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
          "fixed inset-0 bg-black/95 backdrop-blur-lg z-20 flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden font-mono",
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
                "text-2xl font-medium capitalize transition-all duration-300 hover:text-cyan-400 hover:scale-110",
                activeSection === item ? "text-cyan-400" : "text-white/90",
                mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => scrollToSection("home")}
              className="text-xl font-bold font-mono"
            >
              <span className="text-blue-400">const</span>{" "}
              <span className="text-purple-400">KolkataHackfest</span>{" "}
              <span className="text-red-400">=</span>{" "}
              <span className="text-orange-400">true</span>
              <span className="text-white">;</span>
            </button>

            <nav className="hidden md:flex items-center gap-8 font-mono">
              {["home", "about", "schedule", "prizes", "sponsors", "faq", "register"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={cn(
                    "text-sm font-medium capitalize transition-colors hover:text-cyan-400 relative py-1",
                    activeSection === item ? "text-cyan-400" : "text-white/90",
                  )}
                >
                  <span className="text-gray-500">//</span>{" "}
                  {item}
                  {activeSection === item && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-600 to-cyan-800 rounded-full" />
                  )}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white/90 hover:text-cyan-400 p-2 hover:bg-white/10 rounded-lg transition-colors font-mono" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

