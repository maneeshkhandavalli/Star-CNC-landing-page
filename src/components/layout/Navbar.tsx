"use client";
import { useState, useEffect } from "react";
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollTo(href);
  };

  const handleNavClickMobile = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    // slight delay so menu closes before scrolling
    setTimeout(() => scrollTo(href), 50);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white ${scrolled ? "shadow-sm border-b border-gray-100" : "border-b border-gray-200"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 text-teal font-bold text-lg">
          <span className="material-symbols-outlined text-orange text-2xl leading-none">
            precision_manufacturing
          </span>
          <span className="font-serif leading-tight">
            Star CNC
            <span className="block text-gray-400 text-[10px] font-sans font-normal tracking-wider uppercase leading-none">
              Engineering Works
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-gray-600 hover:text-teal text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button
            href="#contact"
            variant="primary"
            className="ml-2"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, "#contact")}
          >
            Get a Quote
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-teal p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {open ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-50 px-4 py-5 flex flex-col gap-4 border-t border-gray-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 text-base font-medium hover:text-teal transition-colors"
              onClick={(e) => handleNavClickMobile(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <Button
            href="#contact"
            variant="primary"
            className="mt-1 w-full justify-center text-base"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClickMobile(e, "#contact")}
          >
            Get a Quote
          </Button>
          <p className="text-gray-400 text-xs mt-2">
            {company.phone1} · {company.phone2}
          </p>
        </div>
      )}
    </nav>
  );
}
