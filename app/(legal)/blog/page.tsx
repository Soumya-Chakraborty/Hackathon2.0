import type React from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"

export default function Blog() {
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
            <span className="text-purple-400">blogPosts</span>{" "}
            <span className="text-red-400">=</span>{" "}
            <span className="text-orange-400">[]</span>
            <span className="text-white">;</span>
          </h1>

          <div className="space-y-8">
            {/* Featured Post */}
            <article className="bg-black/50 backdrop-blur-sm border border-cyan-900/30 rounded-lg p-6 hover:border-cyan-500/50 transition-colors">
              <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
                <Calendar className="w-4 h-4" />
                <span>March 15, 2024</span>
                <span className="text-white/30">•</span>
                <span>Team Kolkata Hackfest</span>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-white">
                Introducing Kolkata Hackfest 2024: A New Era of Innovation
              </h2>
              <p className="text-white/70 mb-6">
                Get ready for the most exciting hackathon of the year! Kolkata Hackfest 2024 brings together the brightest minds in technology for an unforgettable 12-hour coding marathon.
              </p>
              <Link 
                href="/blog/introducing-hackgenesis-2024"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
              >
                Read More →
              </Link>
            </article>

            {/* Regular Posts */}
            <div className="grid gap-6 md:grid-cols-2">
              <article className="bg-black/50 backdrop-blur-sm border border-cyan-900/30 rounded-lg p-6 hover:border-cyan-500/50 transition-colors">
                <div className="flex items-center gap-4 text-sm text-cyan-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    March 10, 2024
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    4 min read
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-3 text-white">
                  How to Prepare for Your First Hackathon
                </h2>
                <p className="text-white/80 mb-4">
                  Essential tips and tricks to make your hackathon experience successful and enjoyable.
                </p>
                <Link 
                  href="/blog/preparing-for-your-first-hackathon"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
                >
                  Read More →
                </Link>
              </article>

              <article className="bg-black/50 backdrop-blur-sm border border-cyan-900/30 rounded-lg p-6 hover:border-cyan-500/50 transition-colors">
                <div className="flex items-center gap-4 text-sm text-cyan-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    March 5, 2024
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    3 min read
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-3 text-white">
                  The Power of Team Collaboration in Hackathons
                </h2>
                <p className="text-white/80 mb-4">
                  Learn how effective teamwork can make or break your hackathon project.
                </p>
                <Link 
                  href="/blog/team-collaboration-in-hackathons"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
                >
                  Read More →
                </Link>
              </article>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-black/50 backdrop-blur-sm border border-cyan-900/30 rounded-lg p-6 mt-12">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Stay Updated
              </h2>
              <p className="text-white/80 mb-6">
                Subscribe to our newsletter for the latest updates, blog posts, and hackathon announcements.
              </p>
              <form className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-black/50 border border-cyan-900/30 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-cyan-500/50"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors font-mono"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 