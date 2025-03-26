import type React from "react"
import { cn } from "@/lib/utils"

interface ScheduleSectionProps {
  sectionRef: React.RefObject<HTMLElement>
}

export default function ScheduleSection({ sectionRef }: ScheduleSectionProps) {
  return (
    <section ref={sectionRef} id="schedule" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-r from-cyan-400/20 to-pink-500/20 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-white bg-white/10 backdrop-blur-sm rounded-full">
            EVENT SCHEDULE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal-on-scroll">
            Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">12-Hour</span>{" "}
            Journey
          </h2>
          <p className="text-lg text-white/70 reveal-on-scroll animation-delay-200">
            Every minute counts in this fast-paced hackathon. Here's how we'll make the most of our 12 hours together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-pink-500 to-cyan-400 md:transform md:-translate-x-1/2" />

            <div className="space-y-8">
              {[
                {
                  time: "9:00 AM",
                  title: "Check-in & Breakfast",
                  desc: "Arrive, register, grab breakfast, and network with fellow participants",
                },
                {
                  time: "9:30 AM",
                  title: "Opening Ceremony",
                  desc: "Welcome address, introduction to sponsors, and hackathon rules",
                },
                { time: "10:00 AM", title: "Team Formation", desc: "Find teammates or join as a solo participant" },
                { time: "10:30 AM", title: "Hacking Begins", desc: "Start building your projects" },
                { time: "12:30 PM", title: "Lunch Break", desc: "Refuel with provided lunch while continuing to work" },
                { time: "2:00 PM", title: "Mentor Sessions", desc: "Get advice and feedback from industry experts" },
                { time: "4:00 PM", title: "Progress Check-in", desc: "Share your progress and get quick feedback" },
                { time: "6:00 PM", title: "Dinner Break", desc: "Enjoy dinner while finalizing your projects" },
                { time: "8:00 PM", title: "Submission Deadline", desc: "Submit your projects for judging" },
                {
                  time: "8:30 PM",
                  title: "Project Presentations",
                  desc: "Present your work to judges and other participants",
                },
                { time: "9:30 PM", title: "Awards Ceremony", desc: "Winners announced and prizes awarded" },
              ].map((event, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative flex items-start gap-8 reveal-on-scroll",
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse text-right",
                    `animation-delay-${index * 100}`,
                  )}
                >
                  <div className="hidden md:block w-1/2" />
                  <div className="absolute left-4 top-1 md:left-1/2 w-3 h-3 bg-pink-500 rounded-full transform md:-translate-x-1.5" />
                  <div className="pl-12 md:pl-0 md:w-1/2">
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all">
                      <div className="text-cyan-400 font-mono mb-2">{event.time}</div>
                      <h4 className="text-xl font-bold mb-2">{event.title}</h4>
                      <p className="text-white/70">{event.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

