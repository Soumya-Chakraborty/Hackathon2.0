import type React from "react"
import Image from "next/image"
import { Code, Users, Zap } from "lucide-react"

interface AboutSectionProps {
  sectionRef: React.RefObject<HTMLElement>
}

export default function AboutSection({ sectionRef }: AboutSectionProps) {
  return (
    <section ref={sectionRef} id="about" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-r from-cyan-400/20 to-pink-500/20 blur-3xl rounded-full" />
        <div className="absolute right-0 bottom-1/4 w-1/3 h-1/2 bg-gradient-to-r from-purple-400/20 to-blue-500/20 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-white bg-white/10 backdrop-blur-sm rounded-full font-mono">
            <span className="text-gray-500">#</span> ABOUT KOLKATA HACKFEST
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal-on-scroll font-mono">
            <span className="text-blue-400">int</span>{" "}
            <span className="text-purple-400">about</span>{" "}
            <span className="text-red-400">=</span>{" "}
            <span className="text-orange-400">1</span>
            <span className="text-white">;</span>
          </h2>
          <p className="text-lg text-white/70 reveal-on-scroll animation-delay-200 font-mono">
            <span className="text-gray-500">#</span> A 12-hour coding marathon where innovation meets opportunity. Build, learn, and compete with the best.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all hover:translate-y-[-5px] group reveal-on-scroll">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-8 h-8 text-cyan-200" />
            </div>
            <h3 className="text-xl font-bold mb-3 font-mono">
              <span className="text-blue-400">int</span>{" "}
              <span className="text-purple-400">fastPaced</span>{" "}
              <span className="text-red-400">=</span>{" "}
              <span className="text-orange-400">1</span>
              <span className="text-white">;</span>
            </h3>
            <p className="text-white/70 font-mono">
              <span className="text-gray-500">#</span> Just 12 hours to conceptualize, build, and present your project. Perfect for those who thrive under
              pressure.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-pink-500/50 transition-all hover:translate-y-[-5px] group reveal-on-scroll animation-delay-200">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-pink-600 to-pink-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-pink-200" />
            </div>
            <h3 className="text-xl font-bold mb-3 font-mono">
              <span className="text-blue-400">int</span>{" "}
              <span className="text-purple-400">teamBased</span>{" "}
              <span className="text-red-400">=</span>{" "}
              <span className="text-orange-400">1</span>
              <span className="text-white">;</span>
            </h3>
            <p className="text-white/70 font-mono">
              <span className="text-gray-500">#</span> Form teams of up to 4 people or join solo and we'll help you find teammates with complementary skills.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-500/50 transition-all hover:translate-y-[-5px] group reveal-on-scroll animation-delay-400">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Code className="w-8 h-8 text-purple-200" />
            </div>
            <h3 className="text-xl font-bold mb-3 font-mono">
              <span className="text-blue-400">int</span>{" "}
              <span className="text-purple-400">innovative</span>{" "}
              <span className="text-red-400">=</span>{" "}
              <span className="text-orange-400">1</span>
              <span className="text-white">;</span>
            </h3>
            <p className="text-white/70 font-mono">
              <span className="text-gray-500">#</span> Use any technology stack to build something amazing. The only limit is your imagination.
            </p>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 relative overflow-hidden reveal-on-scroll">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400" />
            <h3 className="text-2xl font-bold mb-6 font-mono">
              <span className="text-blue-400">void</span>{" "}
              <span className="text-yellow-400">whyParticipate</span>
              <span className="text-white">()</span>{" "}
              <span className="text-blue-400">{`{`}</span>
            </h3>
            <ul className="space-y-3">
              {[
                "Build something meaningful in just 12 hours",
                "Network with industry professionals and peers",
                "Learn new technologies through hands-on experience",
                "Win prizes and recognition for your innovation",
                "Add a unique project to your portfolio",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 font-mono">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-800 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-cyan-200"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="text-cyan-400">//</span>{" "}
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
            <span className="text-cyan-400 font-mono">{`}`}</span>
          </div>
          <div className="relative reveal-on-scroll animation-delay-200">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-pink-600 rounded-lg blur opacity-75"></div>
            <div className="relative bg-black rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Hackathon participants"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

