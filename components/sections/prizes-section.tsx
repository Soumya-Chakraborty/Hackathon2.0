import type React from "react"
import { Trophy } from "lucide-react"

interface PrizesSectionProps {
  sectionRef: React.RefObject<HTMLElement>
}

export default function PrizesSection({ sectionRef }: PrizesSectionProps) {
  return (
    <section ref={sectionRef} id="prizes" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 bottom-1/4 w-1/3 h-1/2 bg-gradient-to-r from-cyan-400/20 to-pink-500/20 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-white bg-white/10 backdrop-blur-sm rounded-full">
            AMAZING REWARDS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal-on-scroll">
            Win Big with Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">Innovation</span>
          </h2>
          <p className="text-lg text-white/70 reveal-on-scroll animation-delay-200">
            Over $10,000 in prizes across multiple categories. Turn your 12-hour sprint into valuable rewards!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-b from-[#FFD700]/10 to-transparent backdrop-blur-sm rounded-xl p-8 border border-[#FFD700]/30 relative group hover:transform hover:scale-105 transition-all duration-300 reveal-on-scroll">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFD700]/50 to-[#FFA500]/50 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center mb-6">
                <Trophy size={28} />
              </div>
              <div className="text-[#FFD700] text-lg font-semibold mb-2">1st Place</div>
              <h3 className="text-3xl font-bold mb-4">$5,000</h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFD700"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>$5,000 cash prize</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFD700"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>Mentorship opportunity</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFD700"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>Premium tech gadgets</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#C0C0C0]/10 to-transparent backdrop-blur-sm rounded-xl p-8 border border-[#C0C0C0]/30 relative group hover:transform hover:scale-105 transition-all duration-300 reveal-on-scroll animation-delay-200">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#C0C0C0]/50 to-[#A9A9A9]/50 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#C0C0C0] to-[#A9A9A9] flex items-center justify-center mb-6">
                <Trophy size={28} />
              </div>
              <div className="text-[#C0C0C0] text-lg font-semibold mb-2">2nd Place</div>
              <h3 className="text-3xl font-bold mb-4">$3,000</h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C0C0C0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>$3,000 cash prize</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C0C0C0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>Cloud credits package</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C0C0C0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>Tech conference tickets</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#CD7F32]/10 to-transparent backdrop-blur-sm rounded-xl p-8 border border-[#CD7F32]/30 relative group hover:transform hover:scale-105 transition-all duration-300 reveal-on-scroll animation-delay-400">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#CD7F32]/50 to-[#B87333]/50 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#CD7F32] to-[#B87333] flex items-center justify-center mb-6">
                <Trophy size={28} />
              </div>
              <div className="text-[#CD7F32] text-lg font-semibold mb-2">3rd Place</div>
              <h3 className="text-3xl font-bold mb-4">$1,500</h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#CD7F32"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>$1,500 cash prize</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#CD7F32"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>Software licenses</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#CD7F32"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>Mentorship sessions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all reveal-on-scroll">
            <h3 className="text-2xl font-bold mb-4">Category Prizes</h3>
            <p className="text-white/70 mb-6">
              In addition to the main prizes, we offer special awards for excellence in specific categories:
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Best AI Integration", prize: "$500" },
                { title: "Best UI/UX Design", prize: "$500" },
                { title: "Most Innovative", prize: "$500" },
                { title: "Best Social Impact", prize: "$500" },
              ].map((item, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-cyan-400">{item.prize}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-pink-500/30 transition-all reveal-on-scroll animation-delay-200">
            <h3 className="text-2xl font-bold mb-4">Sponsor Prizes</h3>
            <p className="text-white/70 mb-6">
              Our sponsors offer additional prizes for projects that best utilize their technologies:
            </p>
            <div className="space-y-4">
              {[
                { sponsor: "TechCorp", prize: "Cloud credits worth $2,000" },
                { sponsor: "DevTools", prize: "Premium subscriptions" },
                { sponsor: "AI Solutions", prize: "API credits & mentorship" },
                { sponsor: "SecureNet", prize: "Security audit & consultation" },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-white/5 rounded-lg p-4">
                  <h4 className="font-bold">{item.sponsor}</h4>
                  <p className="text-pink-500">{item.prize}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

