import { parentCompany } from "@/lib/content";

const stripClients = [
  "Toshiba",
  "Amara Raja",
  "HBL Power Systems",
  "Cygni Energy",
  "Race Energy",
];
const marqueeLoop = Array.from({ length: 6 }, () => stripClients).flat();

export default function Hero() {
  return (
    <section className="bg-[#fafaf8] px-8 md:px-16 pt-16 md:pt-20 pb-6">
      {/* Top section — two column text row */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-20 md:gap-32 mb-12">
        {/* Left column */}
        <div className="md:w-[60%]">
          <p className="text-xs tracking-[0.2em] uppercase text-[#0f9d7a] font-semibold mb-3">
            Est. 2009 · Hyderabad · ISO 9001:2015
          </p>
          <h1 className="text-6xl md:text-7xl font-bold text-[#0b0f1a] leading-[1.05] pb-4">
            Precision laser cutting & CNC bending.
          </h1>
        </div>

        {/* Right column */}
        <div className="md:w-[40%] pt-4 md:pt-4">
          <p className="text-base text-gray-500 leading-relaxed mb-6 max-w-sm">
            Advanced fiber laser cutting and CNC press brake bending for
            India&apos;s EV, solar, and industrial sectors. Prototype to bulk —
            any volume.
          </p>
          <div className="flex gap-3">
            <a
              href="#contact"
              className="bg-[#0b0f1a] text-white text-sm font-semibold px-6 py-3 rounded-md hover:bg-[#1a2a3a] transition-colors"
            >
              Get a quote
            </a>
            <a
              href="#infrastructure"
              className="border border-gray-200 text-gray-600 text-sm px-5 py-3 rounded-md hover:border-gray-400 transition-colors"
            >
              Our machines →
            </a>
          </div>
        </div>
      </div>

      {/* Full width image container */}
      <div className="relative w-full h-[42vh] md:h-[46vh] rounded-2xl overflow-hidden mt-2 mb-4">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/imagesforstarcnc/cnc-machine.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => (e.currentTarget.style.display = "none")}
        >
          <source src="/Close_up_shot_of_a_CNC_laser_c.mp4" type="video/mp4" />
        </video>
        {/* Dark tint overlay */}
        <div className="absolute inset-0 bg-black/25" />
        {/* Dark gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Stats overlay at bottom */}
        <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 md:flex gap-4">
          <div className="flex-1 bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-5">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl md:text-3xl font-bold text-white tracking-tight" style={{ fontVariantNumeric: 'tabular-nums', fontFamily: 'ui-monospace, system-ui, sans-serif' }}>15</span>
              <span className="text-sm text-white/50 font-normal">mm</span>
            </div>
            <p className="text-[9px] tracking-[0.15em] uppercase text-white/40 mt-1">
              MAX MS THICKNESS
            </p>
          </div>
          <div className="flex-1 bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-5">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl md:text-3xl font-bold text-white tracking-tight" style={{ fontVariantNumeric: 'tabular-nums', fontFamily: 'ui-monospace, system-ui, sans-serif' }}>3</span>
              <span className="text-sm text-white/50 font-normal">metals</span>
            </div>
            <p className="text-[9px] tracking-[0.15em] uppercase text-white/40 mt-1">
              MS · AL · SS
            </p>
          </div>
          <div className="flex-1 bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-5">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl md:text-3xl font-bold text-white tracking-tight" style={{ fontVariantNumeric: 'tabular-nums', fontFamily: 'ui-monospace, system-ui, sans-serif' }}>Any</span>
              <span className="text-sm text-white/50 font-normal">vol.</span>
            </div>
            <p className="text-[9px] tracking-[0.15em] uppercase text-white/40 mt-1">
              PROTO → BULK
            </p>
          </div>
          <div className="flex-1 bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-5">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl md:text-3xl font-bold text-white tracking-tight" style={{ fontVariantNumeric: 'tabular-nums', fontFamily: 'ui-monospace, system-ui, sans-serif' }}>20</span>
              <span className="text-sm text-white/50 font-normal">+</span>
            </div>
            <p className="text-[9px] tracking-[0.15em] uppercase text-white/40 mt-1">
              YEARS EXPERTISE
            </p>
          </div>
        </div>
      </div>

      {/* Material capabilities strip */}
      <div className="flex flex-wrap items-center gap-4 py-5 mt-4">
        <span className="text-xs tracking-[0.15em] uppercase text-gray-400 shrink-0">
          Materials
        </span>
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-[#f0f0ec] rounded-md px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0f9d7a] shrink-0" />
            <span className="text-xs text-gray-600 font-medium">Mild steel</span>
            <span className="text-xs text-gray-400">0.5–15mm</span>
          </div>
          <div className="flex items-center gap-2 bg-[#f0f0ec] rounded-md px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0f9d7a] shrink-0" />
            <span className="text-xs text-gray-600 font-medium">Aluminium</span>
            <span className="text-xs text-gray-400">1–10mm</span>
          </div>
          <div className="flex items-center gap-2 bg-[#f0f0ec] rounded-md px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0f9d7a] shrink-0" />
            <span className="text-xs text-gray-600 font-medium">Stainless steel</span>
            <span className="text-xs text-gray-400">0.5–10mm</span>
          </div>
        </div>
        <a
          href={parentCompany.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#f0f0ec] border border-gray-200 rounded-lg px-4 py-2 ml-auto flex items-center gap-2 hover:border-[#0f9d7a] transition-colors shrink-0"
        >
          <span className="text-xs text-gray-500">Need finished products?</span>
          <span className="text-xs text-[#0f9d7a] font-semibold">Visit P&amp;P Works →</span>
        </a>
      </div>

      {/* Client marquee */}
      <div className="border-t border-gray-100 py-5 mt-2">
        <div className="flex items-center overflow-hidden">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#00897B] shrink-0 whitespace-nowrap">
            Trusted by
          </p>
          <span className="w-px h-4 bg-gray-200 shrink-0 mx-5" />
          <div className="overflow-hidden flex-1">
            <div className="marquee-track" style={{ animationDuration: "50s" }}>
              {marqueeLoop.map((name, i) => (
                <span key={i} className="shrink-0 inline-flex items-center">
                  <span className="text-[#1A2340] text-sm font-medium whitespace-nowrap px-7">
                    {name}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00897B] shrink-0" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
