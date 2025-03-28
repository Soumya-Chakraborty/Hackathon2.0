import type React from "react"
import { Trophy, Medal, Award, Gift } from "lucide-react"

interface PrizesSectionProps {
  sectionRef: React.RefObject<HTMLElement>
}

export default function PrizesSection({ sectionRef }: PrizesSectionProps) {
  return (
    <section ref={sectionRef} id="prizes" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-r from-cyan-400/20 to-pink-500/20 blur-3xl rounded-full" />
        <div className="absolute right-0 bottom-1/4 w-1/3 h-1/2 bg-gradient-to-r from-purple-400/20 to-blue-500/20 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-white bg-white/10 backdrop-blur-sm rounded-full font-mono">
            <span className="text-gray-500">#</span> PRIZES & REWARDS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal-on-scroll font-mono">
            <span className="text-blue-400">int</span>{" "}
            <span className="text-purple-400">prizes</span>{" "}
            <span className="text-red-400">=</span>{" "}
            <span className="text-orange-400">TBD</span>
            <span className="text-white">;</span>
          </h2>
          <p className="text-lg text-white/70 reveal-on-scroll animation-delay-200 font-mono">
            <span className="text-gray-500">#</span> Compete for amazing prizes and recognition. Show off your skills and win big!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-yellow-400/50 transition-all hover:translate-y-[-5px] group reveal-on-scroll">
            <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-yellow-600 to-yellow-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Trophy className="w-10 h-10 text-yellow-200" />
            </div>
            <h3 className="text-2xl font-bold mb-2 font-mono">
              <span className="text-blue-400">int</span>{" "}
              <span className="text-purple-400">firstPrize</span>{" "}
              <span className="text-red-400">=</span>{" "}
              <span className="text-orange-400">TBD</span>
              <span className="text-white">;</span>
            </h3>
            <p className="text-white/90 font-mono">
              <span className="text-gray-500">#</span> First place winners take home cash prizes, plus exclusive mentorship opportunities and premium tech gadgets.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-gray-400/50 transition-all hover:translate-y-[-5px] group reveal-on-scroll animation-delay-200">
            <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Medal className="w-10 h-10 text-gray-200" />
            </div>
            <h3 className="text-2xl font-bold mb-2 font-mono">
              <span className="text-blue-400">int</span>{" "}
              <span className="text-purple-400">secondPrize</span>{" "}
              <span className="text-red-400">=</span>{" "}
              <span className="text-orange-400">TBD</span>
              <span className="text-white">;</span>
            </h3>
            <p className="text-white/90 font-mono">
              <span className="text-gray-500">#</span> Second place winners receive cash prizes, along with premium tech gadgets and networking opportunities.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-amber-600/50 transition-all hover:translate-y-[-5px] group reveal-on-scroll animation-delay-400">
            <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Award className="w-10 h-10 text-amber-200" />
            </div>
            <h3 className="text-2xl font-bold mb-2 font-mono">
              <span className="text-blue-400">int</span>{" "}
              <span className="text-purple-400">thirdPrize</span>{" "}
              <span className="text-red-400">=</span>{" "}
              <span className="text-orange-400">TBD</span>
              <span className="text-white">;</span>
            </h3>
            <p className="text-white/90 font-mono">
              <span className="text-gray-500">#</span> Third place winners get cash prizes, plus tech gadgets and valuable networking opportunities.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center reveal-on-scroll animation-delay-800">
          <p className="text-lg mb-4 animate-shimmer font-mono">
            <span className="text-gray-500">#</span> Additional prizes and swag for all participants!
          </p>
          
        </div>
      </div>
    </section>
  )
}

