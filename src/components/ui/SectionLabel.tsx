import type { ReactNode } from "react";

export default function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block text-teal text-xs font-semibold tracking-widest uppercase mb-3">
      {children}
    </span>
  );
}
