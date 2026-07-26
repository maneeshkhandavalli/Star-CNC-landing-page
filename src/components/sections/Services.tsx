import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const services = [
  {
    id: "laser",
    image: "/imagesforstarcnc/cnc-cutting.avif",
    icon: "local_fire_department",
    title: "Laser Cutting",
    subtitle: "HSG Fiber Laser · SF3015G",
    description:
      "High-precision fiber laser cutting for complex profiles, intricate patterns, and tight tolerances — gates, interiors, elevations, and all engineering jobwork.",
    capabilities: [
      "Gate Design Cutting",
      "Interior Design Cutting",
      "Elevation Design Cutting",
      "All Metal Cuttings",
      "Engineering Jobworks",
    ],
    specBadge: "MS · 0.5–15mm   |   AL · 1–10mm   |   SS · 0.5–10mm",
    accent: "teal" as const,
  },
  {
    id: "bending",
    image: "/imagesforstarcnc/bending-image.jpg",
    icon: "construction",
    title: "CNC Bending",
    subtitle: "CNC Press Brake",
    description:
      "Precision CNC press brake bending for enclosure panels, EV battery frames, structural components, and custom fabrications. Any angle, any volume.",
    capabilities: [
      "Enclosure Panels",
      "EV Battery Frames",
      "Structural Parts",
      "Brackets",
      "Custom Fabrication",
    ],
    specBadge: "MS · AL · SS — All Gauges",
    accent: "orange" as const,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-off-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div data-reveal="" className="text-center mb-12">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="text-navy text-[28px] sm:text-4xl font-bold">
            Our Services
          </h2>
          <p className="text-slate mt-3 max-w-xl mx-auto">
            Advanced sheet metal processing for India&apos;s industrial leaders. From
            prototype to bulk production.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={service.id}
              data-reveal=""
              data-reveal-delay={String(i * 150)}
              className="bg-white rounded-lg border border-border overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              {/* Image */}
              <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Header */}
              <div
                className={`p-5 lg:p-8 ${
                  service.accent === "teal"
                    ? "bg-gradient-to-br from-teal/8 to-teal/3"
                    : "bg-gradient-to-br from-orange/8 to-orange/3"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    service.accent === "teal" ? "bg-teal" : "bg-orange"
                  }`}
                >
                  <span className="material-symbols-outlined text-white text-2xl">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-navy text-2xl font-bold mb-1">
                  {service.title}
                </h3>
                <p className="text-slate text-sm">{service.subtitle}</p>
              </div>

              {/* Body */}
              <div className="p-5 lg:p-8">
                <p className="text-slate text-base leading-relaxed mb-5">
                  {service.description}
                </p>

                <div className="block w-full overflow-x-auto bg-off-white border border-border rounded-lg px-3 py-2 text-[10px] sm:text-xs font-mono text-slate mb-6 whitespace-pre">
                  {service.specBadge}
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate mb-3">
                    Capabilities
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                    {service.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="text-xs uppercase tracking-wider text-gray-400"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                <Button href="#contact" variant="outline" className="mt-7">
                  Request {service.title} Quote →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
