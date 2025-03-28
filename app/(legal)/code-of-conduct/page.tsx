import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CodeOfConduct() {
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
            <span className="text-purple-400">codeOfConduct</span>{" "}
            <span className="text-red-400">=</span>{" "}
            <span className="text-orange-400">true</span>
            <span className="text-white">;</span>
          </h1>

          <div className="space-y-8 text-white/90 font-mono">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                <span className="text-blue-400">function</span>{" "}
                <span className="text-yellow-400">inclusiveEnvironment</span>
                <span className="text-white">()</span>{" "}
                <span className="text-blue-400">{`{`}</span>
              </h2>
              <p className="ml-4">
                We are committed to creating an inclusive environment for all participants:
              </p>
              <ul className="list-disc ml-8 mt-2 space-y-2">
                <li>Treat everyone with respect and dignity</li>
                <li>Be inclusive and welcoming to all skill levels</li>
                <li>Value diverse perspectives and experiences</li>
                <li>Use inclusive language and communication</li>
                <li>Support and encourage fellow participants</li>
              </ul>
              <span className="text-cyan-400">{`}`}</span>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                <span className="text-blue-400">function</span>{" "}
                <span className="text-yellow-400">unacceptableBehavior</span>
                <span className="text-white">()</span>{" "}
                <span className="text-blue-400">{`{`}</span>
              </h2>
              <p className="ml-4">
                The following behaviors are unacceptable:
              </p>
              <ul className="list-disc ml-8 mt-2 space-y-2">
                <li>Harassment, discrimination, or bullying</li>
                <li>Inappropriate or offensive comments</li>
                <li>Intimidation or threats</li>
                <li>Disruptive or aggressive behavior</li>
                <li>Unauthorized sharing of personal information</li>
              </ul>
              <span className="text-cyan-400">{`}`}</span>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                <span className="text-blue-400">function</span>{" "}
                <span className="text-yellow-400">reportingIncidents</span>
                <span className="text-white">()</span>{" "}
                <span className="text-blue-400">{`{`}</span>
              </h2>
              <p className="ml-4">
                How to report incidents:
              </p>
              <ul className="list-disc ml-8 mt-2 space-y-2">
                <li>Contact event organizers immediately</li>
                <li>Use our anonymous reporting system</li>
                <li>Provide detailed information about the incident</li>
                <li>Include any relevant evidence or witnesses</li>
                <li>Expect prompt and confidential handling</li>
              </ul>
              <span className="text-cyan-400">{`}`}</span>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                <span className="text-blue-400">function</span>{" "}
                <span className="text-yellow-400">consequences</span>
                <span className="text-white">()</span>{" "}
                <span className="text-blue-400">{`{`}</span>
              </h2>
              <p className="ml-4">
                Violations may result in:
              </p>
              <ul className="list-disc ml-8 mt-2 space-y-2">
                <li>Warning or verbal notice</li>
                <li>Expulsion from the event</li>
                <li>Ban from future events</li>
                <li>Reporting to relevant authorities</li>
                <li>Legal action if necessary</li>
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
                For immediate assistance or to report incidents:
              </p>
              <p className="ml-8 mt-2 text-cyan-400">
                hackgenesis.hackathon@gmail.com
              </p>
              <p className="ml-8 mt-2 text-cyan-400">
                Emergency: +1 (555) 123-4567
              </p>
              <span className="text-cyan-400">{`}`}</span>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 