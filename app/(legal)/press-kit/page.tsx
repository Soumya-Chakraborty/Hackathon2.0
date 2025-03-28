"use client"

import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PressKit() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-cyan-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,255,0.15),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-12 font-mono"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 font-mono">
            <span className="text-blue-400">const</span>{" "}
            <span className="text-purple-400">pressKit</span>{" "}
            <span className="text-red-400">=</span>{" "}
            <span className="text-orange-400">true</span>
            <span className="text-white">;</span>
          </h1>

          <div className="space-y-8 text-white/90 font-mono">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                <span className="text-blue-400">function</span>{" "}
                <span className="text-yellow-400">brandAssets</span>
                <span className="text-white">()</span>{" "}
                <span className="text-blue-400">{`{`}</span>
              </h2>
              <p className="ml-4">
                Download our brand assets:
              </p>
              <ul className="list-disc ml-8 mt-2 space-y-2">
                <li>Logo (PNG, SVG, AI)</li>
                <li>Brand Guidelines</li>
                <li>Color Palette</li>
                <li>Typography Guide</li>
                <li>Social Media Kit</li>
              </ul>
              <button className="ml-8 mt-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors">
                Download Assets
              </button>
              <span className="text-cyan-400">{`}`}</span>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                <span className="text-blue-400">function</span>{" "}
                <span className="text-yellow-400">pressReleases</span>
                <span className="text-white">()</span>{" "}
                <span className="text-blue-400">{`{`}</span>
              </h2>
              <p className="ml-4">
                Latest press releases:
              </p>
              <ul className="list-disc ml-8 mt-2 space-y-2">
                <li>Kolkata Hackfest 2024 Announcement</li>
                <li>Sponsorship Program Launch</li>
                <li>Previous Event Highlights</li>
                <li>Community Impact Report</li>
                <li>Future Event Plans</li>
              </ul>
              <Link 
                href="/press-releases"
                className="ml-8 mt-4 inline-block px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors font-mono"
              >
                <span className="text-blue-400">return</span>{" "}
                <span className="text-green-400">"View Releases"</span>
                <span className="text-white">;</span>
              </Link>
              <span className="text-cyan-400">{`}`}</span>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                <span className="text-blue-400">function</span>{" "}
                <span className="text-yellow-400">mediaResources</span>
                <span className="text-white">()</span>{" "}
                <span className="text-blue-400">{`{`}</span>
              </h2>
              <p className="ml-4">
                Available media resources:
              </p>
              <ul className="list-disc ml-8 mt-2 space-y-2">
                <li>Event Photos</li>
                <li>Video Footage</li>
                <li>Infographics</li>
                <li>Fact Sheets</li>
                <li>Interview Opportunities</li>
              </ul>
              <button className="ml-8 mt-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors">
                Access Resources
              </button>
              <span className="text-cyan-400">{`}`}</span>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                <span className="text-blue-400">function</span>{" "}
                <span className="text-yellow-400">contactUs</span>
                <span className="text-white">()</span>{" "}
                <span className="text-blue-400">{`{`}</span>
              </h2>
              <p className="ml-4">
                For press inquiries, contact us at:
              </p>
              <p className="ml-8 mt-2 text-cyan-400">
                hackgenesis.hackathon@gmail.com
              </p>
              <span className="text-cyan-400">{`}`}</span>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 