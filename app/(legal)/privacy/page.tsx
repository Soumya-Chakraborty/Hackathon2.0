import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
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
            <span className="text-purple-400">privacyPolicy</span>{" "}
            <span className="text-red-400">=</span>{" "}
            <span className="text-orange-400">true</span>
            <span className="text-white">;</span>
          </h1>

          <div className="space-y-8 text-white/90 font-mono">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                <span className="text-blue-400">function</span>{" "}
                <span className="text-yellow-400">dataCollection</span>
                <span className="text-white">()</span>{" "}
                <span className="text-blue-400">{`{`}</span>
              </h2>
              <p className="ml-4">
                We collect the following information when you register for Kolkata Hackfest:
              </p>
              <ul className="list-disc ml-8 mt-2 space-y-2">
                <li>Name and contact information (email, phone)</li>
                <li>Professional/social media profiles</li>
                <li>Technical skills and experience</li>
                <li>Team preferences and requirements</li>
                <li>Project ideas and interests</li>
              </ul>
              <span className="text-cyan-400">{`}`}</span>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                <span className="text-blue-400">function</span>{" "}
                <span className="text-yellow-400">dataUsage</span>
                <span className="text-white">()</span>{" "}
                <span className="text-blue-400">{`{`}</span>
              </h2>
              <p className="ml-4">
                Your information is used to:
              </p>
              <ul className="list-disc ml-8 mt-2 space-y-2">
                <li>Process your registration and team formation</li>
                <li>Communicate event updates and important information</li>
                <li>Provide personalized event experiences</li>
                <li>Share opportunities with sponsors and partners</li>
                <li>Improve future events and services</li>
              </ul>
              <span className="text-cyan-400">{`}`}</span>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                <span className="text-blue-400">function</span>{" "}
                <span className="text-yellow-400">dataProtection</span>
                <span className="text-white">()</span>{" "}
                <span className="text-blue-400">{`{`}</span>
              </h2>
              <p className="ml-4">
                We implement robust security measures to protect your data:
              </p>
              <ul className="list-disc ml-8 mt-2 space-y-2">
                <li>Encryption of sensitive information</li>
                <li>Secure data storage and transmission</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication</li>
                <li>Compliance with data protection regulations</li>
              </ul>
              <span className="text-cyan-400">{`}`}</span>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                <span className="text-blue-400">function</span>{" "}
                <span className="text-yellow-400">yourRights</span>
                <span className="text-white">()</span>{" "}
                <span className="text-blue-400">{`{`}</span>
              </h2>
              <p className="ml-4">
                You have the right to:
              </p>
              <ul className="list-disc ml-8 mt-2 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Request data deletion</li>
                <li>Opt-out of marketing communications</li>
                <li>Export your data</li>
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
                For privacy-related inquiries, contact us at:
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