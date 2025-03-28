import type React from "react"
import { Calendar, Clock, MapPin, Trophy } from "lucide-react"
import { useState } from "react"

interface RegisterSectionProps {
  sectionRef: React.RefObject<HTMLElement>
}

export default function RegisterSection({ sectionRef }: RegisterSectionProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    participationType: "In-Person"
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Show success message or redirect
      alert("Pre-registration successful! We'll contact you soon.")
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <section ref={sectionRef} id="register" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-cyan-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,255,0.15),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10 relative overflow-hidden reveal-on-scroll">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-600 via-pink-600 to-cyan-600" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-pink-600/20 rounded-full filter blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-600/20 rounded-full filter blur-3xl" />

            <div className="relative">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
                  <span className="text-blue-400">int</span>{" "}
                  <span className="text-purple-400">readyForHackfest</span>{" "}
                  <span className="text-red-400">=</span>{" "}
                  <span className="text-orange-400">1</span>
                  <span className="text-white">;</span>
                </h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto font-mono">
                  <span className="text-gray-500">#</span> Join hundreds of hackers for an unforgettable 12-hour sprint of innovation, learning, and fun.
                  Register now to secure your spot!
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-800 flex items-center justify-center mt-1">
                        <Calendar className="w-5 h-5 text-cyan-200" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-1 font-mono">
                          <span className="text-blue-400">char</span>{" "}
                          <span className="text-purple-400">eventDate</span>{" "}
                          <span className="text-red-400">=</span>{" "}
                          <span className="text-green-400">"Coming Soon"</span>
                          <span className="text-white">;</span>
                        </h3>
                        <div className="relative mt-4">
                          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/30 to-pink-600/30 blur-2xl rounded-full"></div>
                          <div className="relative">
                            <p className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 animate-pulse font-mono mb-4">
                              COMING SOON
                            </p>
                            <p className="text-xl text-white/90 font-mono">
                              <span className="text-gray-500">#</span> Date to be announced
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-600 to-pink-800 flex items-center justify-center mt-1">
                        <MapPin className="w-5 h-5 text-pink-200" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1 font-mono">
                          <span className="text-blue-400">char</span>{" "}
                          <span className="text-purple-400">eventType</span>{" "}
                          <span className="text-red-400">=</span>{" "}
                          <span className="text-green-400">"Hybrid"</span>
                          <span className="text-white">;</span>
                        </h3>
                        <p className="text-white/90 font-mono">
                          <span className="text-gray-500">#</span> In-person & Virtual
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-800 flex items-center justify-center mt-1">
                        <Trophy className="w-5 h-5 text-yellow-200" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1 font-mono">
                          <span className="text-blue-400">int</span>{" "}
                          <span className="text-purple-400">totalPrizes</span>{" "}
                          <span className="text-red-400">=</span>{" "}
                          <span className="text-orange-400">10000</span>
                          <span className="text-white">;</span>
                        </h3>
                        <p className="text-white/90 font-mono">
                          <span className="text-gray-500">#</span> Cash, swag, and opportunities
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 flex items-center justify-center mt-1">
                        <Clock className="w-5 h-5 text-purple-200" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1 font-mono">
                          <span className="text-blue-400">char</span>{" "}
                          <span className="text-purple-400">registrationDeadline</span>{" "}
                          <span className="text-red-400">=</span>{" "}
                          <span className="text-green-400">"One week before"</span>
                          <span className="text-white">;</span>
                        </h3>
                        <p className="text-white/90 font-mono">
                          <span className="text-gray-500">#</span> Registration Closes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-4 font-mono">
                    <span className="text-blue-400">void</span>{" "}
                    <span className="text-yellow-400">preRegisterNow</span>
                    <span className="text-white">()</span>{" "}
                    <span className="text-blue-400">{`{`}</span>
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-1 font-mono">
                        <span className="text-gray-500">#</span> Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 font-mono text-white/90"
                        placeholder="Enter your name"
                        title="Name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1 font-mono">
                        <span className="text-gray-500">#</span> Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 font-mono text-white/90"
                        placeholder="Enter your email"
                        title="Email"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1 font-mono">
                        <span className="text-gray-500">#</span> Participation Type
                      </label>
                      <select 
                        name="participationType"
                        value={formData.participationType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 font-mono text-white/90"
                        title="Participation Type"
                      >
                        <option>In-Person</option>
                        <option>Virtual</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full px-8 py-3 text-base font-medium rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-800 hover:opacity-90 transition-opacity animate-pulse font-mono disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="text-blue-400">return</span>{" "}
                      <span className="text-green-400">
                        {isLoading ? '"Submitting..."' : '"Pre-Register Now"'}
                      </span>
                      <span className="text-white">;</span>
                    </button>
                  </form>
                  <span className="text-cyan-400 font-mono">{`}`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

