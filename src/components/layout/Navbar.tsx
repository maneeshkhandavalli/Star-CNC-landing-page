"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { company } from "@/lib/content";
import Button from "@/components/ui/Button";
import { lenisScrollTo } from "@/components/providers/SmoothScrollProvider";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Clients", href: "#clients" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  lenisScrollTo(el, -64);
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, mobile = false) => {
    e.preventDefault();
    if (mobile) {
      setOpen(false);
      setTimeout(() => scrollTo(href), 50);
    } else {
      scrollTo(href);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-[#0f9d7a] ${scrolled ? "shadow-sm" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <img
              src="/main-logo.png"
              alt="Star CNC"
              style={{ height: "52px", width: "auto" }}
            />
          </Link>

          {/* Desktop nav — unchanged */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white hover:text-white/80 text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              href="#contact"
              variant="primary"
              className="ml-2 !bg-[#0b0f1a] !text-white font-semibold px-5 py-2 hover:!bg-[#1a2a3a]"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, "#contact")}
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile toggle — 3×3 dot grid */}
          <button
            className="md:hidden cursor-pointer"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <div className="grid grid-cols-3 gap-1 w-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} className="w-1.5 h-1.5 rounded-full bg-white block" />
              ))}
            </div>
          </button>
        </div>
      </nav>

      {/* Fullscreen mobile menu overlay — slides up from bottom */}
      <div
        className={`md:hidden fixed inset-0 z-[200] bg-[#0f9d7a] flex flex-col justify-center px-8 transition-transform duration-500 ${open ? "translate-y-0" : "translate-y-full"}`}
        style={{ transitionTimingFunction: "cubic-bezier(0.76,0,0.24,1)" }}
        aria-hidden={!open}
      >
        {/* Top bar: logo + X close */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-3">
          <Link href="/" onClick={() => setOpen(false)}>
            <img
              src="/main-logo.png"
              alt="Star CNC"
              style={{ height: "52px", width: "auto" }}
            />
          </Link>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="cursor-pointer"
          >
            <div className="relative w-6 h-6">
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="block w-6 h-[2px] bg-white rotate-45" />
              </span>
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="block w-6 h-[2px] bg-white -rotate-45" />
              </span>
            </div>
          </button>
        </div>

        {/* Navigation label */}
        <p className="text-xs tracking-[3px] uppercase text-white/40 mb-8">Navigation</p>

        {/* Nav links */}
        <div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, true)}
              className="text-4xl font-bold text-white py-4 border-b border-white/10 flex items-center justify-between hover:text-white/70 transition-colors"
            >
              {link.label}
              <span className="text-white/30">→</span>
            </a>
          ))}
        </div>

        {/* CTA button */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact", true)}
          className="w-full bg-[#0b0f1a] text-white font-semibold py-4 rounded-xl text-center block mt-8"
        >
          Get a Quote →
        </a>

        {/* Phone */}
        <p className="text-white/40 text-sm text-center mt-3">{company.phone1}</p>
      </div>
    </>
  );
}
