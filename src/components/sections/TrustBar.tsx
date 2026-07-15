import { trustStats } from "@/lib/content";

export default function TrustBar() {
  return (
    <section className="bg-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 divide-x divide-white/20">
          {trustStats.map((stat, i) => (
            <div key={stat.label} data-reveal="" data-reveal-delay={String(i * 120)} className="flex flex-col items-center text-center px-4">
              <p className="text-white text-2xl font-bold font-serif leading-snug">
                {stat.value}
              </p>
              <p className="text-white/65 text-xs font-medium mt-1 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
