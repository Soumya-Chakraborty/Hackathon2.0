import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Sponsorship() {
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
            <span className="text-purple-400">sponsorship</span>{" "}
            <span className="text-red-400">=</span>{" "}
            <span className="text-orange-400">true</span>
            <span className="text-white">;</span>
          </h1>

          <div className="space-y-8 text-white/90 font-mono">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                <span className="text-blue-400">function</span>{" "}
                <span className="text-yellow-400">sponsorBenefits</span>
                <span className="text-white">()</span>{" "}
                <span className="text-blue-400">{`{`}</span>
              </h2>
              <p className="ml-4">
                As a sponsor, you'll receive:
              </p>
              <ul className="list-disc ml-8 mt-2 space-y-2">
                <li>Brand visibility to 500+ developers</li>
                <li>Direct access to top tech talent</li>
                <li>Product showcase opportunities</li>
                <li>Networking with industry leaders</li>
                <li>Recruitment opportunities</li>
              </ul>
              <span className="text-cyan-400">{`}`}</span>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                <span className="text-blue-400">function</span>{" "}
                <span className="text-yellow-400">sponsorshipTiers</span>
                <span className="text-white">()</span>{" "}
                <span className="text-blue-400">{`{`}</span>
              </h2>
              <p className="ml-4">
                Available sponsorship tiers:
              </p>
              <ul className="list-disc ml-8 mt-2 space-y-2">
                <li>Platinum: $10,000+</li>
                <li>Gold: $5,000+</li>
                <li>Silver: $2,500+</li>
                <li>Bronze: $1,000+</li>
                <li>In-Kind Sponsorship</li>
              </ul>
              <span className="text-cyan-400">{`}`}</span>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                <span className="text-blue-400">function</span>{" "}
                <span className="text-yellow-400">sponsorPerks</span>
                <span className="text-white">()</span>{" "}
                <span className="text-blue-400">{`{`}</span>
              </h2>
              <p className="ml-4">
                Exclusive sponsor perks include:
              </p>
              <ul className="list-disc ml-8 mt-2 space-y-2">
                <li>Logo placement on all materials</li>
                <li>Speaking opportunities</li>
                <li>Workshop hosting rights</li>
                <li>Recruitment booth access</li>
                <li>Social media mentions</li>
              </ul>
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
                For sponsorship inquiries, contact us at:
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