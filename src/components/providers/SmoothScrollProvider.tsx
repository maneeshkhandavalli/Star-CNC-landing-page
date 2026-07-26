"use client";
import { useEffect } from "react";
import type { ReactNode } from "react";
import Lenis from "lenis";

let _lenis: Lenis | null = null;

export function lenisScrollTo(target: HTMLElement | string | number, offset = 0) {
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

    // Global interceptor for all <a href="#..."> hash links not already handled
    // by a React onClick with e.preventDefault()
    function handleHashClick(e: MouseEvent) {
      if (e.defaultPrevented) return;
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const id = href.slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -80 });
    }
    document.addEventListener('click', handleHashClick);

    return () => {
      document.removeEventListener('click', handleHashClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      _lenis = null;
    };
  }, []);

  return <>{children}</>;
}
