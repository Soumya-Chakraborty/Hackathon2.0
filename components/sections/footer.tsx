"use client"

import type React from "react"
import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-cyan-900/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white font-mono">
                <span className="text-blue-400">const</span>{" "}
                <span className="text-purple-400">hackGenesis</span>{" "}
                <span className="text-red-400">=</span>{" "}
                <span className="text-orange-400">true</span>
                <span className="text-white">;</span>
              </h3>
              <p className="text-white/70 font-mono">
                Empowering developers to build the future through innovative hackathons.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/70 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
                <a href="mailto:hackgenesis.hackathon@gmail.com" className="font-mono">
                  hackgenesis.hackathon@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 mt-1" />
                <p className="font-mono">
                  South Canal Road,<br />
                  Beleghata, Kolkata,<br />
                  West Bengal, India
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/hackgenesis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/hackgenesis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-cyan-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/hackgenesis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white font-mono">
              <span className="text-blue-400">function</span>{" "}
              <span className="text-yellow-400">quickLinks</span>
              <span className="text-white">()</span>{" "}
              <span className="text-blue-400">{`{`}</span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/70 hover:text-cyan-400 transition-colors font-mono">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-cyan-400 transition-colors font-mono">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-cyan-400 transition-colors font-mono">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/sponsorship" className="text-white/70 hover:text-cyan-400 transition-colors font-mono">
                  Sponsorship
                </Link>
              </li>
            </ul>
            <span className="text-cyan-400">{`}`}</span>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white font-mono">
              <span className="text-blue-400">function</span>{" "}
              <span className="text-yellow-400">legal</span>
              <span className="text-white">()</span>{" "}
              <span className="text-blue-400">{`{`}</span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-cyan-400 transition-colors font-mono">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 hover:text-cyan-400 transition-colors font-mono">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/code-of-conduct" className="text-white/70 hover:text-cyan-400 transition-colors font-mono">
                  Code of Conduct
                </Link>
              </li>
              <li>
                <Link href="/press-kit" className="text-white/70 hover:text-cyan-400 transition-colors font-mono">
                  Press Kit
                </Link>
              </li>
            </ul>
            <span className="text-cyan-400">{`}`}</span>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-center text-white/50 text-sm font-mono">
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

