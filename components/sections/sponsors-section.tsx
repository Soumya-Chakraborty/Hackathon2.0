import type React from "react"
import Image from "next/image"

interface SponsorsSectionProps {
  sectionRef: React.RefObject<HTMLElement>
}

export default function SponsorsSection({ sectionRef }: SponsorsSectionProps) {
  return (
    <section ref={sectionRef} id="sponsors" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 bottom-1/4 w-1/3 h-1/2 bg-gradient-to-r from-cyan-400/20 to-pink-500/20 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-white bg-white/10 backdrop-blur-sm rounded-full">
            OUR PARTNERS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal-on-scroll">
            Backed by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
              Industry Leaders
            </span>
          </h2>
          <p className="text-lg text-white/70 reveal-on-scroll animation-delay-200">
            FlashHack is made possible by the generous support of our sponsors who are committed to fostering
            innovation.
          </p>
        </div>

        <div className="space-y-12">
          {/* Platinum Sponsors */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Platinum Sponsors</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 reveal-on-scroll">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 flex items-center justify-center border border-white/10 hover:border-cyan-400/30 transition-all"
                >
                  <Image
                    src="/placeholder.svg?height=80&width=200"
                    alt={`Platinum Sponsor ${i}`}
                    width={200}
                    height={80}
                    className="max-h-16 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Gold Sponsors */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Gold Sponsors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal-on-scroll animation-delay-200">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center border border-white/10 hover:border-cyan-400/30 transition-all"
                >
                  <Image
                    src="/placeholder.svg?height=60&width=150"
                    alt={`Gold Sponsor ${i}`}
                    width={150}
                    height={60}
                    className="max-h-12 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center reveal-on-scroll animation-delay-400">
          <h3 className="text-2xl font-bold mb-6">Become a Sponsor</h3>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Interested in supporting the next generation of tech innovators? Join our growing list of sponsors and get
            your brand in front of top talent.
          </p>
          <button className="px-8 py-3 text-base font-medium rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
            Sponsorship Opportunities
          </button>
        </div>
      </div>
    </section>
  )
}

