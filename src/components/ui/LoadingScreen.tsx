"use client";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [fade, setFade] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const fadeTimer = setTimeout(() => {
      setFade(true);
      document.body.style.overflow = "";
    }, 1800);

    const goneTimer = setTimeout(() => setGone(true), 2350);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(goneTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center transition-opacity duration-500 ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <p className="font-serif text-teal text-5xl font-bold tracking-wider mb-2">
        STAR CNC
      </p>
      <p className="text-slate text-xs tracking-[0.3em] uppercase mb-10">
        Engineering Works
      </p>
      <div className="w-52 h-[2px] bg-border rounded-full overflow-hidden">
        <div
          className="h-full bg-teal rounded-full"
          style={{ animation: "progress 1.8s ease-in-out forwards" }}
        />
      </div>
    </div>
  );
}
