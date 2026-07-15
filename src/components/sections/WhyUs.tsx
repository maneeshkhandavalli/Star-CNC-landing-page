import SectionLabel from "@/components/ui/SectionLabel";

const usps = [
  {
    icon: "history",
    title: "20+ Years Expertise",
    description:
      "Since 2009, delivering precision sheet metal work to India's most demanding manufacturers.",
  },
  {
    icon: "verified_user",
    title: "ISO 9001:2015 Certified",
    description:
      "Quality management systems certified at the group level — consistency you can depend on.",
  },
  {
    icon: "precision_manufacturing",
    title: "Advanced Machinery",
    description:
      "HSG fiber laser + SF3015G cutting system + CNC press brake — best-in-class equipment for every job.",
  },
  {
    icon: "layers",
    title: "All Major Metals",
    description:
      "Mild Steel, Aluminium, and Stainless Steel across a broad gauge range for every application.",
  },
  {
    icon: "inventory",
    title: "Prototype to Bulk",
    description:
      "One piece or ten thousand. Same quality, same precision, same turnaround discipline.",
  },
  {
    icon: "location_on",
    title: "Hyderabad Based",
    description:
      "Operating from Chinthal, Hyderabad — central location for fast delivery across Telangana and AP.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-light-gray py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-reveal="" className="text-center mb-8 lg:mb-14">
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2 className="font-serif text-navy text-[28px] sm:text-4xl font-bold">
            The Star CNC Advantage
          </h2>
          <p className="text-slate mt-3 max-w-xl mx-auto">
            Built on 20 years of precision manufacturing and a relentless focus
            on quality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {usps.map((usp, i) => (
            <div
              key={usp.title}
              data-reveal=""
              data-reveal-delay={String(i * 100)}
              className="bg-white rounded-lg border border-border p-7 hover:border-teal/40 hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-full bg-teal flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-white text-2xl">
                  {usp.icon}
                </span>
              </div>
              <h3 className="font-serif text-navy text-xl font-semibold mb-2">
                {usp.title}
              </h3>
              <p className="text-slate text-sm leading-relaxed">{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
