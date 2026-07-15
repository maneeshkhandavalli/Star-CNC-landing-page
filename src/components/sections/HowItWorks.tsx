import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    icon: "upload_file",
    title: "Share Requirement",
    desc: "Send your DXF, PDF, or sketch via WhatsApp or email. Mention material, thickness, and quantity.",
  },
  {
    number: "02",
    icon: "request_quote",
    title: "Receive Quote",
    desc: "Get a detailed quote within hours — pricing, lead time, and material availability confirmed.",
  },
  {
    number: "03",
    icon: "event_available",
    title: "Confirm & Schedule",
    desc: "Approve the quote and lock in your production slot. We handle scheduling around your timeline.",
  },
  {
    number: "04",
    icon: "local_shipping",
    title: "Cut, Bend & Deliver",
    desc: "Precision laser cut and CNC bent to spec. Parts delivered or ready for pickup at our Chinthal facility.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-off-white py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-14" data-reveal="">
          <SectionLabel>Process</SectionLabel>
          <h2 className="font-serif text-navy text-[28px] sm:text-4xl font-bold mt-1">
            How It Works
          </h2>
          <p className="text-slate mt-3 max-w-xl mx-auto text-sm sm:text-base">
            From drawing to delivered part — a straightforward four-step process with no surprises.
          </p>
        </div>

        {/* Mobile: vertical timeline — desc hidden, steps connected by teal line */}
        <div className="lg:hidden" data-reveal="">
          {steps.map((step, i) => (
            <div key={step.number} className="flex items-stretch gap-4">
              {/* Circle + vertical connector */}
              <div className="flex flex-col items-center shrink-0 w-10">
                <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center shadow-sm z-10">
                  <span className="text-white text-xs font-bold">{step.number}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-teal/25 my-1" />
                )}
              </div>
              {/* Icon + title only (desc hidden on mobile) */}
              <div className={`flex-1 ${i < steps.length - 1 ? "pb-6" : ""}`}>
                <div className="flex items-center gap-2 h-10">
                  <span className="material-symbols-outlined text-teal text-lg leading-none">{step.icon}</span>
                  <h3 className="font-serif text-navy text-[15px] font-bold">{step.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: horizontal steps with dashed arrows between */}
        <div className="hidden lg:flex items-start justify-center">
          {steps.map((step, i) => (
            <div key={step.number} className="flex items-start">
              {/* Step */}
              <div
                data-reveal=""
                className="flex flex-col items-center text-center w-48 xl:w-56 px-4"
              >
                <div className="w-12 h-12 rounded-full bg-teal/10 border-2 border-teal flex items-center justify-center">
                  <span className="material-symbols-outlined text-teal text-2xl">{step.icon}</span>
                </div>
                <span className="text-teal text-xs font-bold tracking-widest mt-1 mb-3">{step.number}</span>
                <h3 className="font-serif text-navy text-lg font-bold mb-1">{step.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{step.desc}</p>
              </div>
              {/* Dashed arrow between steps */}
              {i < steps.length - 1 && (
                <div className="flex items-center shrink-0 mt-6 pt-0.5">
                  <div className="w-6 border-t-2 border-dashed border-teal/35" />
                  <span className="text-teal/35 text-base leading-none">›</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
