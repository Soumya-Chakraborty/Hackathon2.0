import type React from "react"
import { Calendar, Clock, MapPin, Trophy } from "lucide-react"

interface RegisterSectionProps {
  sectionRef: React.RefObject<HTMLElement>
}

export default function RegisterSection({ sectionRef }: RegisterSectionProps) {
  return (
    <section ref={sectionRef} id="register" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-cyan-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,255,0.15),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10 relative overflow-hidden reveal-on-scroll">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-pink-500/20 rounded-full filter blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/20 rounded-full filter blur-3xl" />

            <div className="relative">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Ready to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
                    Flash
                  </span>
                  ?
                </h2>
                <p className="text-lg text-white/70 max-w-2xl mx-auto">
                  Join hundreds of hackers for an unforgettable 12-hour sprint of innovation, learning, and fun.
                  Register now to secure your spot!
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 flex items-center justify-center mt-1">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">Coming Soon</h3>
                        <p className="text-white/70">12 hours of hacking</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 flex items-center justify-center mt-1">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">Hybrid Event</h3>
                        <p className="text-white/70">In-person & Virtual</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 flex items-center justify-center mt-1">
                        <Trophy size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">$10,000+ in Prizes</h3>
                        <p className="text-white/70">Cash, swag, and opportunities</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 flex items-center justify-center mt-1">
                        <Clock size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">Registration Closes</h3>
                        <p className="text-white/70">One week before the event</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-4">Register Now</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">First Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Last Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Participation Type</label>
                      <select className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500">
                        <option>In-Person</option>
                        <option>Virtual</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Experience Level</label>
                      <select className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500">
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 text-base font-medium rounded-lg bg-gradient-to-r from-cyan-400 to-pink-500 hover:opacity-90 transition-opacity"
                    >
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

