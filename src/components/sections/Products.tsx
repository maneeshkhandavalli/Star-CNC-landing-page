import { parentCompany } from "@/lib/content";
import SectionLabel from "@/components/ui/SectionLabel";

const products = [
  {
    icon: "electrical_services",
    title: "Electronic & Electrical Enclosures",
    description:
      "Control panels, distribution boards, junction boxes — engineered for precision fit and durability.",
  },
  {
    icon: "electric_car",
    title: "EV Battery Enclosures & Child Parts",
    description:
      "Casings, mounting brackets, and structural parts for electric vehicle battery systems.",
  },
  {
    icon: "solar_power",
    title: "Solar Structures & Street Light Poles",
    description:
      "Mounting structures and galvanised poles for solar panels and street lighting.",
  },
  {
    icon: "inventory_2",
    title: "General Sheet Metal Products",
    description:
      "Cabinets, racks, lockers, trolleys, and lab furniture in any specification.",
  },
  {
    icon: "format_paint",
    title: "In-House Powder Coating",
    description:
      "Full RAL colour range with faster turnaround — no outsourcing delay.",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-light-gray py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-reveal="" className="text-center mb-8 lg:mb-14">
          <SectionLabel>Parent Company</SectionLabel>
          <h2 className="font-serif text-navy text-[28px] sm:text-4xl font-bold">
            {parentCompany.name}
          </h2>
          <p className="text-slate mt-3 max-w-xl mx-auto">
            Finished sheet metal products manufactured using Star CNC's precision
            cutting and bending capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {products.map((product, i) => (
            <div
              key={product.title}
              data-reveal=""
              data-reveal-delay={String(i * 100)}
              className="bg-white rounded-lg border border-border p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-full bg-teal/10 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-teal text-2xl">
                  {product.icon}
                </span>
              </div>
              <h3 className="font-serif text-navy text-lg font-semibold mb-2">
                {product.title}
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}

          {/* CTA card */}
          <div data-reveal="" data-reveal-delay="550" className="bg-teal-dark rounded-lg p-6 flex flex-col justify-between text-white">
            <div>
              <p className="text-white/50 text-xs uppercase tracking-widest mb-3">
                Visit
              </p>
              <h3 className="font-serif text-2xl font-bold mb-3">{parentCompany.name}</h3>
              <p className="text-white/65 text-sm leading-relaxed">
                Explore the full range of finished sheet metal products, custom
                enclosures, and industrial solutions.
              </p>
            </div>
            <a
              href={parentCompany.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-orange text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-orange-dark transition-colors"
            >
              Visit {parentCompany.website}
              <span className="material-symbols-outlined text-base">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
