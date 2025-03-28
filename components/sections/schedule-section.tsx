import type React from "react";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";

interface ScheduleSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

export default function ScheduleSection({ sectionRef }: ScheduleSectionProps) {
  return (
    <section ref={sectionRef} id="schedule" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-r from-cyan-400/20 to-pink-500/20 blur-3xl rounded-full" />
        <div className="absolute right-0 bottom-1/4 w-1/3 h-1/2 bg-gradient-to-r from-purple-400/20 to-blue-500/20 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-white bg-white/10 backdrop-blur-sm rounded-full font-mono">
            <span className="text-gray-500">#</span> EVENT SCHEDULE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal-on-scroll font-mono">
            <span className="text-blue-400">int</span>{" "}
            <span className="text-purple-400">schedule</span>{" "}
            <span className="text-red-400">=</span>{" "}
            <span className="text-orange-400">12</span>
            <span className="text-white">;</span>
          </h2>
          <p className="text-lg text-white/70 reveal-on-scroll animation-delay-200 font-mono">
            <span className="text-gray-500">#</span> Every minute counts in this fast-paced hackathon. Here's how we'll make the most of our 12 hours together.
          </p>
        </div>

        <div className="space-y-8">
          <div className="mt-16 relative flex flex-col items-center">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/30 to-pink-600/30 blur-2xl rounded-full"></div>
            <div className="relative text-center">
              <p className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 animate-pulse font-mono mb-4">
                COMING SOON
              </p>
              <p className="text-2xl text-white/90 font-mono">
                <span className="text-gray-500"># </span> To Be Announced
              </p>
            </div>
          </div>

          {/* Original Schedule (Commented Out)
          {[
            {
              time: "9:00 AM",
              title: "Registration & Check-in",
              description: "Get your badge, swag bag, and find your team.",
              icon: Users,
              color: "from-blue-600 to-blue-800",
              textColor: "text-blue-200"
            },
            {
              time: "10:00 AM",
              title: "Opening Ceremony",
              description: "Welcome speech, rules overview, and team formation.",
              icon: Presentation,
              color: "from-purple-600 to-purple-800",
              textColor: "text-purple-200"
            },
            {
              time: "11:00 AM",
              title: "Hacking Begins",
              description: "Start building your innovative project.",
              icon: Code,
              color: "from-green-600 to-green-800",
              textColor: "text-green-200"
            },
            {
              time: "2:00 PM",
              title: "Lunch Break",
              description: "Refuel with free food and networking.",
              icon: Utensils,
              color: "from-orange-600 to-orange-800",
              textColor: "text-orange-200"
            },
            {
              time: "3:00 PM",
              title: "Workshop Sessions",
              description: "Learn from industry experts and mentors.",
              icon: BookOpen,
              color: "from-yellow-600 to-yellow-800",
              textColor: "text-yellow-200"
            },
            {
              time: "6:00 PM",
              title: "Dinner Break",
              description: "More free food and team bonding.",
              icon: Coffee,
              color: "from-indigo-600 to-indigo-800",
              textColor: "text-indigo-200"
            },
            {
              time: "7:00 PM",
              title: "Final Sprint",
              description: "Last push to complete your project.",
              icon: Rocket,
              color: "from-pink-600 to-pink-800",
              textColor: "text-pink-200"
            },
            {
              time: "9:00 PM",
              title: "Project Submission",
              description: "Submit your project and prepare for demo.",
              icon: FileCheck,
              color: "from-cyan-600 to-cyan-800",
              textColor: "text-cyan-200"
            },
            {
              time: "10:00 PM",
              title: "Project Demos",
              description: "Show off your hard work to judges.",
              icon: Presentation,
              color: "from-violet-600 to-violet-800",
              textColor: "text-violet-200"
            },
          ].map((item, index) => (
            <div
              key={index}
              className={cn(
                "group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all reveal-on-scroll",
                "animate-float hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-400/10",
                "relative overflow-hidden"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="flex items-start gap-4">
                <div className={cn(
                  "w-20 h-20 rounded-lg bg-gradient-to-br flex items-center justify-center font-mono text-lg font-bold",
                  "transition-transform duration-300 group-hover:scale-110",
                  item.color
                )}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className={cn("w-4 h-4", item.textColor)} />
                    <span className={cn("font-mono", item.textColor)}>{item.time}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-mono">
                    <span className="text-blue-400">int</span>{" "}
                    <span className={cn("text-purple-400", item.textColor)}>{item.title.toLowerCase().replace(/\s+/g, "_")}</span>{" "}
                    <span className="text-red-400">=</span>{" "}
                    <span className="text-orange-400">1</span>
                    <span className="text-white">;</span>
                  </h3>
                  <p className="text-white/70 font-mono">
                    <span className="text-gray-500">#</span> {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          */}
        </div>
      </div>
    </section>
  );
}