import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { company } from "@/lib/content";

const machines = [
  {
    tag: "Fiber Laser",
    name: "HSG Fiber Laser",
    specs: [
      "3000W high-power fiber source",
      "Cutting area: 3000 × 1500 mm",
      "MS up to 15 mm · AL up to 10 mm · SS up to 10 mm",
    ],
  },
  {
    tag: "Laser System",
    name: "SF3015G Laser System",
    specs: [
      "High-speed precision cutting head",
      "Auto nozzle exchange & focus adjust",
      "Enclosed protective cabin — safe batch runs",
    ],
  },
  {
    tag: "CNC Bending",
    name: "CNC Press Brake",
    specs: [
      "Bending length up to 3000 mm",
      "CNC-controlled back-gauge for repeatability",
      "Multi-stage bending programs — complex profiles",
    ],
  },
];

const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(company.address)}`;

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="bg-white py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-14" data-reveal="">
          <SectionLabel>Infrastructure</SectionLabel>
          <h2 className="font-serif text-navy text-[28px] sm:text-4xl font-bold mt-1">
            Our Machines
          </h2>
          <p className="text-slate mt-3 max-w-xl mx-auto">
            Advanced equipment purpose-built for sheet metal precision — laser cutting and CNC bending under one roof.
          </p>
        </div>

        {/* Machine cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-reveal="">
          {machines.map((m) => (
            <div
              key={m.name}
              className="border border-border rounded-xl p-6 bg-off-white hover:shadow-md transition-shadow duration-200"
            >
              {/* Teal tag */}
              <span className="inline-block bg-teal/10 text-teal text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                {m.tag}
              </span>
              <h3 className="font-serif text-navy text-xl font-bold mb-4">{m.name}</h3>
              <ul className="hidden lg:block space-y-2.5">
                {m.specs.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-slate text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0 mt-1.5" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Factory address banner */}
        <div
          data-reveal=""
          className="rounded-xl bg-[#E8F5F3] border border-teal/20 px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between"
        >
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-teal text-2xl shrink-0 mt-0.5">location_on</span>
            <div>
              <p className="text-navy text-sm font-semibold">Facility Address</p>
              <p className="text-slate text-sm mt-0.5">{company.address}</p>
            </div>
          </div>
          <Button href={mapsUrl} variant="primary" className="shrink-0 whitespace-nowrap">
            <span className="material-symbols-outlined text-base">directions</span>
            Get Directions
          </Button>
        </div>
      </div>
    </section>
  );
}
