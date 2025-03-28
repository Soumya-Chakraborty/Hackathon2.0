import type React from "react";
import Image from "next/image";

interface SponsorsSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
}

export default function SponsorsSection({ sectionRef, contactRef }: SponsorsSectionProps) {
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} id="sponsors" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-r from-cyan-400/20 to-pink-500/20 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-white bg-white/10 backdrop-blur-sm rounded-full font-mono">
            <span className="text-gray-500">#</span> OUR SPONSORS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal-on-scroll font-mono">
            <span className="text-blue-400">int</span>{" "}
            <span className="text-purple-400">sponsors</span>{" "}
            <span className="text-red-400">=</span>{" "}
            <span className="text-orange-400">2</span>
            <span className="text-white">;</span>
          </h2>
          <p className="text-lg text-white/70 reveal-on-scroll animation-delay-200 font-mono">
            <span className="text-gray-500">#</span> Proudly supported by industry leaders who share our passion for innovation and technology.
          </p>
        </div>

        <div className="space-y-12">
          {/* Platinum Sponsors */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center font-mono">
              <span className="text-blue-400">char</span>{" "}
              <span className="text-purple-400">platinumSponsors</span>{" "}
              <span className="text-red-400">=</span>{" "}
              <span className="text-pink-500">[</span>
              <span className="text-white">]</span>
              <span className="text-blue-400">;</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-on-scroll justify-center">
              <div className="backdrop-blur-sm border border-cyan-900/30 rounded-lg p-8 flex items-center justify-center hover:border-cyan-500/50 transition-colors">
                <Image
                  src="/logoacm.png"
                  alt="ACM Logo"
                  width={350}
                  height={125}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-on-scroll justify-center">
                <div className="backdrop-blur-sm border border-cyan-900/30 rounded-lg p-8 flex items-center justify-center hover:border-cyan-500/50 transition-colors">
                  <Image
                    src="/ETHindia.svg"
                    alt="ACM Logo"
                    width={250}
                    height={125}
                  />
                </div>
              </div>
              {/* Add more sponsors here if needed */}
            </div>
          </div>

          {/* Gold Sponsors */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center font-mono">
              <span className="text-blue-400">char</span>{" "}
              <span className="text-purple-400">goldSponsors</span>{" "}
              <span className="text-red-400">=</span>{" "}
              <span className="text-pink-500">[</span>
              <span className="text-white">]</span>
              <span className="text-blue-400">;</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal-on-scroll animation-delay-200">
              <div className="col-span-full text-center text-white/50 font-mono">
                <span className="text-gray-500">#</span> Coming Soon
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center reveal-on-scroll animation-delay-800">
          <p className="text-lg mb-4 animate-shimmer font-mono">
            <span className="text-gray-500">#</span> Want to become a sponsor?
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScvywvZfWPy0ys23I5qdOcF69jKHjxigL0NyeZ73WWHRwCM7w/viewform?usp=sharing">
          <button 
            onClick={scrollToContact}
            className="px-8 py-3 text-base font-medium rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 hover:opacity-90 transition-opacity animate-pulse font-mono"
          >
            <span className="text-blue-400">void</span>{" "}
            <span className="text-yellow-400">becomeSponsor</span>
            <span className="text-white">()</span>{" "}
            <span className="text-blue-400">{`{`}</span>{" "}
            <span className="text-white">Contact Us</span>{" "}
            <span className="text-blue-400">{`}`}</span>
          </button>
          </a>
        </div>
      </div>
    </section>
  );
}