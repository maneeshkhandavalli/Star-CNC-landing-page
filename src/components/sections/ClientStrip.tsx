const stripClients = [
  "Toshiba",
  "Amara Raja",
  "HBL Power Systems",
  "Cygni Energy",
  "Race Energy",
];

// 6 repetitions = two identical halves of 3 reps each → -50% translate is seamless on any screen width
const loop = Array.from({ length: 6 }, () => stripClients).flat();

export default function ClientStrip() {
  return (
    <div
      data-reveal=""
      className="bg-white border-t border-b border-border py-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-5">
        {/* Label — hidden on mobile */}
        <p className="hidden md:block text-slate text-xs font-sans shrink-0 whitespace-nowrap">
          Trusted by India's leading companies
        </p>
        <span className="hidden md:block w-px h-4 bg-border shrink-0" />

        {/* Marquee */}
        <div className="overflow-hidden flex-1">
          <div
            className="marquee-track hover:[animation-play-state:paused]"
            style={{ animationDuration: "50s" }}
          >
            {loop.map((name, i) => (
              <span key={i} className="shrink-0 inline-flex items-center">
                <span className="text-navy text-sm font-medium whitespace-nowrap px-7">
                  {name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
