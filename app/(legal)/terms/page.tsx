import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsOfService() {
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
            <span className="text-purple-400">termsOfService</span>{" "}
            <span className="text-red-400">=</span>{" "}
            <span className="text-orange-400">true</span>
            <span className="text-white">;</span>
          </h1>

          <div className="space-y-8 text-white/90 font-mono">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                <span className="text-blue-400">function</span>{" "}
                <span className="text-yellow-400">eligibility</span>
                <span className="text-white">()</span>{" "}
                <span className="text-blue-400">{`{`}</span>
              </h2>
              <h3 className="text-xl font-bold mb-4 text-white">Eligibility</h3>
              <p className="text-white/70 mb-4">
                To participate in Kolkata Hackfest, you must:
              </p>
              <ul className="list-disc ml-8 mt-2 space-y-2">
                <li>Be at least 18 years old</li>
                <li>Have a valid government-issued ID</li>
                <li>Register through our official platform</li>
                <li>Accept these terms and conditions</li>
                <li>Comply with our code of conduct</li>
              </ul>
              <span className="text-cyan-400">{`}`}</span>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                <span className="text-blue-400">function</span>{" "}
                <span className="text-yellow-400">intellectualProperty</span>
                <span className="text-white">()</span>{" "}
                <span className="text-blue-400">{`{`}</span>
              </h2>
              <p className="ml-4">
                Regarding project ownership and IP:
              </p>
              <ul className="list-disc ml-8 mt-2 space-y-2">
                <li>Participants retain ownership of their projects</li>
                <li>Teams must document all third-party resources used</li>
                <li>Projects must be original work</li>
                <li>Organizers may showcase projects for promotional purposes</li>
                <li>Participants grant non-exclusive license for event-related use</li>
              </ul>
              <span className="text-cyan-400">{`}`}</span>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                <span className="text-blue-400">function</span>{" "}
                <span className="text-yellow-400">liability</span>
                <span className="text-white">()</span>{" "}
                <span className="text-blue-400">{`{`}</span>
              </h2>
              <p className="ml-4">
                Important liability terms:
              </p>
              <ul className="list-disc ml-8 mt-2 space-y-2">
                <li>Participants attend at their own risk</li>
                <li>Organizers are not liable for personal injury or property damage</li>
                <li>Participants must have appropriate insurance coverage</li>
                <li>Organizers reserve right to modify or cancel the event</li>
                <li>Participants responsible for their own equipment and data</li>
              </ul>
              <span className="text-cyan-400">{`}`}</span>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                <span className="text-blue-400">function</span>{" "}
                <span className="text-yellow-400">disqualification</span>
                <span className="text-white">()</span>{" "}
                <span className="text-blue-400">{`{`}</span>
              </h2>
              <p className="ml-4">
                Grounds for disqualification:
              </p>
              <ul className="list-disc ml-8 mt-2 space-y-2">
                <li>Violation of code of conduct</li>
                <li>Use of pre-built solutions</li>
                <li>Plagiarism or copyright infringement</li>
                <li>Harassment or inappropriate behavior</li>
                <li>Failure to follow event rules</li>
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
                For questions about these terms, contact us at:
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