import { company, materials, parentCompany } from "@/lib/content";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

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
    <section className="relative min-h-screen flex items-center bg-[#E8EAED] pt-16 lg:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-10 lg:py-20">
          {/* Content */}
          <div data-reveal="">
            <SectionLabel>Est. 2009 · Hyderabad · ISO 9001:2015</SectionLabel>
            <h1 className="font-serif text-navy text-[28px] sm:text-5xl lg:text-[52px] font-bold leading-tight mb-4 sm:mb-6">
              Precision Laser{" "}
              <span className="text-teal">Cutting</span>
              <br />& <span className="text-teal">CNC Bending</span>
            </h1>
            <p className="text-slate text-lg leading-relaxed mb-8 max-w-lg">
              Advanced fiber laser cutting and CNC press brake bending services for
              India's EV, solar, and industrial manufacturing sectors. Prototype
              to bulk — any volume.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button href="#contact" variant="primary" className="text-base px-8 py-3.5">
                <span className="material-symbols-outlined text-lg">description</span>
                Get a Quote
              </Button>
              <Button
                href={`tel:${company.phone1}`}
                variant="outline"
                className="text-base px-8 py-3.5"
              >
                <span className="material-symbols-outlined text-lg">call</span>
                {company.phone1}
              </Button>
            </div>

            {/* Mobile client strip — inline, below CTAs, not absolute */}
            <div className="lg:hidden flex items-center gap-0 mb-6 py-2.5 px-4 rounded-lg bg-white/30 backdrop-blur-sm border border-white/30 overflow-hidden">
              <p className="text-teal text-[10px] font-semibold uppercase tracking-widest shrink-0 whitespace-nowrap mr-4">
                Trusted by
              </p>
              <span className="w-px h-4 bg-white/40 shrink-0 mr-4" />
              <div className="overflow-hidden flex-1">
                <div className="marquee-track" style={{ animationDuration: "40s" }}>
                  {marqueeLoop.map((name, i) => (
                    <span key={i} className="shrink-0 inline-flex items-center">
                      <span className="text-navy text-xs font-medium whitespace-nowrap px-4">
                        {name}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-teal shrink-0" />
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Material spec row — hidden on mobile */}
            <div className="hidden sm:inline-block border border-border rounded-lg p-4 bg-off-white w-full sm:w-auto">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate mb-3">
                Material Capabilities
              </p>
              <div className="flex flex-wrap gap-2">
                {materials.map((mat) => (
                  <div
                    key={mat.name}
                    className="flex items-center gap-2 bg-white border border-border rounded-full px-4 py-1.5"
                  >
                    <span className="w-2 h-2 rounded-full bg-teal shrink-0" />
                    <span className="text-sm font-medium text-navy">{mat.name}</span>
                    <span className="text-xs text-slate">{mat.range}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-5 text-sm text-slate">
              Need finished products?{" "}
              <a
                href={parentCompany.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-teal-dark font-medium underline underline-offset-2"
              >
                Visit {parentCompany.name} →
              </a>
            </p>
          </div>

          {/* Visual panel */}
          <div data-reveal="" data-reveal-delay="300" className="hidden lg:block">
            <div className="relative w-full max-w-lg mx-auto aspect-square">
              {/* Main teal card */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal to-teal-dark overflow-hidden">
                {/* Engineering SVG pattern */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-20"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="grid"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="400" height="400" fill="url(#grid)" />
                  <circle cx="200" cy="200" r="80" fill="none" stroke="white" strokeWidth="0.8" />
                  <circle cx="200" cy="200" r="140" fill="none" stroke="white" strokeWidth="0.5" />
                  <circle cx="200" cy="200" r="180" fill="none" stroke="white" strokeWidth="0.3" />
                  <line x1="0" y1="200" x2="400" y2="200" stroke="white" strokeWidth="0.8" />
                  <line x1="200" y1="0" x2="200" y2="400" stroke="white" strokeWidth="0.8" />
                  <rect x="15" y="15" width="28" height="28" fill="none" stroke="white" strokeWidth="1.2" />
                  <rect x="357" y="15" width="28" height="28" fill="none" stroke="white" strokeWidth="1.2" />
                  <rect x="15" y="357" width="28" height="28" fill="none" stroke="white" strokeWidth="1.2" />
                  <rect x="357" y="357" width="28" height="28" fill="none" stroke="white" strokeWidth="1.2" />
                  <circle cx="200" cy="200" r="6" fill="white" />
                  <circle cx="200" cy="200" r="22" fill="none" stroke="white" strokeWidth="1.5" />
                </svg>

                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="material-symbols-outlined text-white/30 text-9xl">
                    precision_manufacturing
                  </span>
                  <p className="text-white/80 text-4xl font-bold font-serif mt-4 tracking-tight">
                    HSG Fiber
                  </p>
                  <p className="text-white/50 text-sm mt-1 tracking-widest uppercase">
                    SF3015G · CNC Press Brake
                  </p>
                </div>

                {/* Bottom stat row */}
                <div className="absolute bottom-0 left-0 right-0 p-5 grid grid-cols-3 gap-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <p className="text-white font-bold text-sm">15 mm</p>
                    <p className="text-white/55 text-xs">Max MS</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <p className="text-white font-bold text-sm">3 Metals</p>
                    <p className="text-white/55 text-xs">MS · AL · SS</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <p className="text-white font-bold text-sm">Any Vol.</p>
                    <p className="text-white/55 text-xs">Proto → Bulk</p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-orange text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                Est. 2009
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop client strip — absolute, pinned to hero bottom, floats over the edge */}
      <div className="hidden lg:flex absolute bottom-0 left-0 right-0 items-center px-8 py-3.5 bg-white/20 backdrop-blur-md border-t border-white/20 overflow-hidden">
        <p className="text-teal text-[10px] font-semibold uppercase tracking-widest shrink-0 whitespace-nowrap">
          Trusted by
        </p>
        <span className="w-px h-4 bg-white/30 shrink-0 mx-5" />
        <div className="overflow-hidden flex-1">
          <div className="marquee-track" style={{ animationDuration: "50s" }}>
            {marqueeLoop.map((name, i) => (
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
    </section>
  );
}
