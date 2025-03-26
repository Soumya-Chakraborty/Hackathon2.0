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
        <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-black/95 backdrop-blur-lg z-30 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <nav className="flex flex-col items-center gap-6">
          {["home", "about", "schedule", "prizes", "sponsors", "faq", "register"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={cn(
                "text-2xl font-medium capitalize transition-colors hover:text-pink-500",
                activeSection === item ? "text-pink-500" : "text-white/80",
              )}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

