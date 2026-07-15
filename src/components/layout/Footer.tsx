import { company, parentCompany } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-teal-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-orange text-2xl">
                precision_manufacturing
              </span>
              <span className="font-serif text-lg font-semibold">Star CNC</span>
            </div>
            <p className="text-white/65 text-sm leading-relaxed mb-4">
              Precision laser cutting & CNC bending for India's EV, solar, and
              industrial sectors. Est. 2009.
            </p>
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-teal bg-white/10 px-3 py-1 rounded-full">
              ISO 9001:2015 Certified
            </span>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                ["Services", "#services"],
                ["Products", "#products"],
                ["Clients", "#clients"],
                ["Why Us", "#why-us"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/75 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li>Laser Cutting — MS / AL / SS</li>
              <li>CNC Bending</li>
              <li>Prototype to Bulk</li>
              <li>Gate & Interior Cutting</li>
              <li>Elevation Design Cutting</li>
            </ul>
            <div className="mt-5 pt-5 border-t border-white/15">
              <p className="text-white/40 text-xs mb-2">Sister Company</p>
              <a
                href={parentCompany.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange hover:text-orange/80 text-sm font-medium transition-colors"
              >
                {parentCompany.name} →
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-5">
              Contact
            </h4>
            <address className="not-italic text-sm text-white/75 space-y-4">
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-teal text-base mt-0.5 shrink-0">
                  location_on
                </span>
                <span className="leading-relaxed">{company.address}</span>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-teal text-base shrink-0">
                  phone
                </span>
                <div>
                  <a href={`tel:${company.phone1}`} className="hover:text-white block">
                    {company.phone1}
                  </a>
                  <a href={`tel:${company.phone2}`} className="hover:text-white block">
                    {company.phone2}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-teal text-base shrink-0">
                  mail
                </span>
                <a href={`mailto:${company.email2}`} className="hover:text-white">
                  {company.email2}
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <p>© 2025 Star CNC Engineering Works. All rights reserved.</p>
          <p>{company.website}</p>
        </div>
      </div>
    </footer>
  );
}
