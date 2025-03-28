import type React from "react"
import Link from "next/link"
import { ArrowLeft, Mail, MapPin, Phone, Send } from "lucide-react"

export default function Contact() {
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
            <span className="text-purple-400">contactInfo</span>{" "}
            <span className="text-red-400">=</span>{" "}
            <span className="text-orange-400">{`{`}</span>
            <span className="text-white">;</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-black/50 backdrop-blur-sm border border-cyan-900/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Send us a Message
              </h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-cyan-400 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-black/50 border border-cyan-900/30 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-cyan-500/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-cyan-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-black/50 border border-cyan-900/30 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-cyan-500/50"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-cyan-400 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-black/50 border border-cyan-900/30 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-cyan-500/50"
                    placeholder="Message subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-cyan-400 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-black/50 border border-cyan-900/30 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-cyan-500/50"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors font-mono"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-black/50 backdrop-blur-sm border border-cyan-900/30 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-cyan-400 mt-1" />
                    <div>
                      <h3 className="font-medium text-white">Email</h3>
                      <p className="text-cyan-400">hackgenesis.hackathon@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-cyan-400 mt-1" />
                    <div>
                      <h3 className="font-medium text-white">Phone</h3>
                      <p className="text-cyan-400">+91 6290341877</p>
                      <p className="text-cyan-400">+91 8910927312</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                    <div>
                      <h3 className="font-medium text-white">Address</h3>
                      <p className="text-cyan-400">
                        123 Tech Street<br />
                        Innovation City, IC 12345<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 backdrop-blur-sm border border-cyan-900/30 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Business Hours
                </h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white/80">Monday - Friday</span>
                    <span className="text-cyan-400">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Saturday</span>
                    <span className="text-cyan-400">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Sunday</span>
                    <span className="text-cyan-400">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 