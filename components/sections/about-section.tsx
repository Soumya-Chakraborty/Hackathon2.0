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
        <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-r from-cyan-400/20 to-pink-500/20 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-white bg-white/10 backdrop-blur-sm rounded-full">
            ABOUT THE EVENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal-on-scroll">
            12 Hours of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">Innovation</span>
          </h2>
          <p className="text-lg text-white/70 reveal-on-scroll animation-delay-200">
            FlashHack is an intense 12-hour coding sprint designed to challenge your skills, spark creativity, and build
            something amazing in a limited timeframe. Whether you're a seasoned developer or just starting out, this is
            your chance to shine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all hover:translate-y-[-5px] group reveal-on-scroll">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-400 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Fast-Paced</h3>
            <p className="text-white/70">
              Just 12 hours to conceptualize, build, and present your project. Perfect for those who thrive under
              pressure.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-pink-500/50 transition-all hover:translate-y-[-5px] group reveal-on-scroll animation-delay-200">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-400 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Team-Based</h3>
            <p className="text-white/70">
              Form teams of up to 4 people or join solo and we'll help you find teammates with complementary skills.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all hover:translate-y-[-5px] group reveal-on-scroll animation-delay-400">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-400 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Code size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Tech-Focused</h3>
            <p className="text-white/70">
              Build with any technology stack you prefer. Web, mobile, AI, hardware—all innovations are welcome.
            </p>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal-on-scroll">
            <h3 className="text-3xl font-bold mb-6">Why FlashHack?</h3>
            <p className="text-lg text-white/70 mb-6">
              Unlike traditional hackathons that span multiple days, FlashHack condenses the experience into a single
              12-hour sprint. This format encourages rapid prototyping, efficient teamwork, and focused
              creativity—skills that are invaluable in today's fast-paced tech industry.
            </p>
            <ul className="space-y-3">
              {[
                "Build something meaningful in just 12 hours",
                "Network with industry professionals and peers",
                "Learn new technologies through hands-on experience",
                "Win prizes and recognition for your innovation",
                "Add a unique project to your portfolio",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 flex items-center justify-center">
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
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative reveal-on-scroll animation-delay-200">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-lg blur opacity-75"></div>
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

