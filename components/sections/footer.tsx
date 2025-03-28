"use client"

import type React from "react"
import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-cyan-900/30">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6">
            <div>
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
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 sm:gap-3 text-white/70 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <a href="mailto:hackgenesis.hackathon@gmail.com" className="text-sm sm:text-base font-mono">
                  hackgenesis.hackathon@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 text-white/70">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-1" />
                <p className="text-sm sm:text-base font-mono">
                  South Canal Road,<br />
                  Beleghata, Kolkata,<br />
                  West Bengal, India
                </p>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://github.com/hackgenesis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://twitter.com/hackgenesis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-cyan-400 transition-colors"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://linkedin.com/company/hackgenesis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white font-mono">
              <span className="text-blue-400">function</span>{" "}
              <span className="text-yellow-400">quickLinks</span>
              <span className="text-white">()</span>{" "}
              <span className="text-blue-400">{`{`}</span>
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/about" className="text-sm sm:text-base text-white/70 hover:text-cyan-400 transition-colors font-mono">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm sm:text-base text-white/70 hover:text-cyan-400 transition-colors font-mono">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm sm:text-base text-white/70 hover:text-cyan-400 transition-colors font-mono">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/sponsorship" className="text-sm sm:text-base text-white/70 hover:text-cyan-400 transition-colors font-mono">
                  Sponsorship
                </Link>
              </li>
            </ul>
            <span className="text-cyan-400">{`}`}</span>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white font-mono">
              <span className="text-blue-400">function</span>{" "}
              <span className="text-yellow-400">legal</span>
              <span className="text-white">()</span>{" "}
              <span className="text-blue-400">{`{`}</span>
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/privacy" className="text-sm sm:text-base text-white/70 hover:text-cyan-400 transition-colors font-mono">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm sm:text-base text-white/70 hover:text-cyan-400 transition-colors font-mono">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/code-of-conduct" className="text-sm sm:text-base text-white/70 hover:text-cyan-400 transition-colors font-mono">
                  Code of Conduct
                </Link>
              </li>
              <li>
                <Link href="/press-kit" className="text-sm sm:text-base text-white/70 hover:text-cyan-400 transition-colors font-mono">
                  Press Kit
                </Link>
              </li>
            </ul>
            <span className="text-cyan-400">{`}`}</span>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <p className="text-center text-xs sm:text-sm text-white/50 font-mono">
            <span className="text-gray-500">//</span>{" "}
            <span className="text-blue-400">const</span>{" "}
            <span className="text-purple-400">copyright</span>{" "}
            <span className="text-red-400">=</span>{" "}
            <span className="text-orange-400">{`"© ${new Date().getFullYear()} Kolkata Hackfest. All rights reserved."`}</span>
            <span className="text-white">;</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

