import { company, parentCompany } from "@/lib/content";

export default function GroupBanner() {
  return (
    <div className="bg-[#E8F5F3] border-y border-teal/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-5">

        {/* Desktop: 3-zone horizontal layout */}
        <div className="hidden sm:flex items-stretch">

          {/* Left — Star CNC */}
          <div className="flex-1 flex flex-col gap-1 pr-8">
            <span className="text-[10px] font-semibold uppercase tracking-widest bg-teal/15 text-teal px-2.5 py-0.5 rounded-full w-fit">
              Laser · Bending
            </span>
            <p className="font-bold text-navy text-sm">Star CNC Engineering Works</p>
            <a
              href={`https://${company.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal text-xs font-medium hover:underline underline-offset-2 w-fit"
            >
              {company.website} →
            </a>
          </div>

          {/* Vertical divider */}
          <div className="w-px bg-teal/20 shrink-0" />

          {/* Center badge */}
          <div className="shrink-0 px-8 flex flex-col items-center justify-center gap-0.5 text-center">
            <span className="material-symbols-outlined text-teal/50 text-base leading-none">location_on</span>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate/60 whitespace-nowrap">
              Same Facility
            </p>
            <p className="text-[10px] text-slate/50 font-medium whitespace-nowrap">Hyderabad</p>
          </div>

          {/* Vertical divider */}
          <div className="w-px bg-teal/20 shrink-0" />

          {/* Right — P&P */}
          <div className="flex-1 flex flex-col gap-1 pl-8">
            <span className="text-[10px] font-semibold uppercase tracking-widest bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full w-fit">
              Finished Products
            </span>
            <p className="font-bold text-navy text-sm">{parentCompany.name}</p>
            <a
              href={parentCompany.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange text-xs font-medium hover:underline underline-offset-2 w-fit"
            >
              {parentCompany.website} →
            </a>
          </div>
        </div>

        {/* Mobile: stacked layout */}
        <div className="sm:hidden flex flex-col items-center gap-4 text-center">

          {/* Star CNC */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-semibold uppercase tracking-widest bg-teal/15 text-teal px-2.5 py-0.5 rounded-full">
              Laser · Bending
            </span>
            <p className="font-bold text-navy text-sm">Star CNC Engineering Works</p>
            <a
              href={`https://${company.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal text-xs font-medium hover:underline underline-offset-2"
            >
              {company.website} →
            </a>
          </div>

          {/* Center divider + badge */}
          <div className="flex items-center gap-3 w-full">
            <div className="flex-1 h-px bg-teal/20" />
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="material-symbols-outlined text-teal/50 text-sm leading-none">location_on</span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-slate/60 whitespace-nowrap">
                Same Facility · Hyderabad
              </span>
            </div>
            <div className="flex-1 h-px bg-teal/20" />
          </div>

          {/* P&P */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-semibold uppercase tracking-widest bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full">
              Finished Products
            </span>
            <p className="font-bold text-navy text-sm">{parentCompany.name}</p>
            <a
              href={parentCompany.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange text-xs font-medium hover:underline underline-offset-2"
            >
              {parentCompany.website} →
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
