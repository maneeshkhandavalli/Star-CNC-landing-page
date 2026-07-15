"use client";
import { useEffect } from "react";
import type { ReactNode } from "react";
import Lenis from "lenis";

let _lenis: Lenis | null = null;

export function lenisScrollTo(target: HTMLElement | string, offset = 0) {
  _lenis?.scrollTo(target as HTMLElement, { offset });
}

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.0 });
    _lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      _lenis = null;
    };
  }, []);

  return <>{children}</>;
}
