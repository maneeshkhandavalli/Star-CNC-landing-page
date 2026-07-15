import { clients } from "@/lib/content";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Clients() {
  const doubled = [...clients, ...clients];

  return (
    <section id="clients" className="bg-off-white py-20 overflow-hidden">
      <div data-reveal="" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <SectionLabel>Trusted By</SectionLabel>
        <h2 className="font-serif text-navy text-3xl sm:text-4xl font-bold">
          Our Clients
        </h2>
        <p className="text-slate mt-3 max-w-lg mx-auto">
          Supplying India's leading EV, solar, and industrial companies from
          Hyderabad since 2009.
        </p>
      </div>

      <div className="flex flex-col gap-4 select-none">
        {/* Row 1 — forward */}
        <div className="overflow-hidden">
          <div className="marquee-track hover:[animation-play-state:paused]">
            {doubled.map((client, i) => (
              <div
                key={i}
                className="shrink-0 flex items-center gap-3 bg-off-white border border-border rounded-full px-6 py-3 mx-2"
              >
                <span className="material-symbols-outlined text-teal text-base">
                  verified
                </span>
                <span className="text-navy text-sm font-medium whitespace-nowrap">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — reverse */}
        <div className="overflow-hidden">
          <div className="marquee-track-reverse hover:[animation-play-state:paused]">
            {doubled.map((client, i) => (
              <div
                key={i}
                className="shrink-0 flex items-center gap-3 bg-off-white border border-border rounded-full px-6 py-3 mx-2"
              >
                <span className="material-symbols-outlined text-teal text-base">
                  business
                </span>
                <span className="text-navy text-sm font-medium whitespace-nowrap">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
