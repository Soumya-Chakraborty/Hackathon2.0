import type React from "react"
interface FAQSectionProps {
  sectionRef: React.RefObject<HTMLElement>
}

export default function FAQSection({ sectionRef }: FAQSectionProps) {
  return (
    <section ref={sectionRef} id="faq" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-r from-cyan-400/20 to-pink-500/20 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-white bg-white/10 backdrop-blur-sm rounded-full">
            QUESTIONS & ANSWERS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal-on-scroll">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">Questions</span>
          </h2>
          <p className="text-lg text-white/70 reveal-on-scroll animation-delay-200">
            Everything you need to know about FlashHack. Can't find the answer you're looking for? Feel free to contact
            us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              q: "Who can participate in FlashHack?",
              a: "FlashHack is open to everyone! Whether you're a student, professional, or just passionate about technology, you're welcome to join. Participants must be at least 18 years old or have parental consent.",
            },
            {
              q: "Do I need to have a team?",
              a: "No, you don't need to have a team beforehand. You can form a team of up to 4 members during our team formation event. Solo participants are also welcome!",
            },
            {
              q: "What if I'm a beginner?",
              a: "FlashHack is designed for participants of all skill levels! We'll have mentors and resources to help beginners get started and build something amazing in the 12-hour timeframe.",
            },
            {
              q: "Is there a participation fee?",
              a: "No, participation is completely free! We provide meals, snacks, and beverages throughout the event, as well as swag and resources.",
            },
            {
              q: "What should I bring?",
              a: "Bring your laptop, charger, any hardware you plan to use, and your creativity! Consider bringing toiletries if you think you'll need them during the 12-hour sprint.",
            },
            {
              q: "Can I work on a pre-existing project?",
              a: "No, all projects must be started from scratch at the beginning of the hackathon. You can come with ideas, but the coding and development must begin when the hackathon starts.",
            },
            {
              q: "Is FlashHack in-person or virtual?",
              a: "FlashHack is a hybrid event! You can participate in-person at our venue or join virtually from anywhere in the world.",
            },
            {
              q: "How are projects judged?",
              a: "Projects will be judged based on innovation, technical complexity, design, practicality, and presentation. Our panel of judges includes industry experts and sponsors.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all reveal-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h4 className="text-xl font-bold mb-3">{item.q}</h4>
              <p className="text-white/70">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal-on-scroll animation-delay-800">
          <p className="text-lg mb-4">Still have questions?</p>
          <button className="px-8 py-3 text-base font-medium rounded-lg bg-gradient-to-r from-cyan-400 to-pink-500 hover:opacity-90 transition-opacity">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}

