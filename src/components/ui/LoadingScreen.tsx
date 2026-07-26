"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"loading" | "exiting" | "gone">(() =>
    typeof window !== "undefined" && sessionStorage.getItem("starcnc_loaded")
      ? "gone"
      : "loading"
  );

  useEffect(() => {
    if (phase === "gone") return;

    document.body.style.overflow = "hidden";

    const exitTimer = setTimeout(() => {
      setPhase("exiting");
      document.body.style.overflow = "";
    }, 1800);

    const goneTimer = setTimeout(() => {
      setPhase("gone");
      sessionStorage.setItem("starcnc_loaded", "1");
    }, 2350);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(goneTimer);
      document.body.style.overflow = "";
    };
  }, [phase]);

  if (phase === "gone") return null;

  return (
    <>
      <style>{`
        @keyframes starcnc-logo-in {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes starcnc-line-draw {
          from { width: 0%; }
          to   { width: 100%; }
        }
        .starcnc-logo-wrap {
          animation: starcnc-logo-in 0.55s ease 0.1s both;
        }
        .starcnc-laser-line {
          width: 0%;
          animation: starcnc-line-draw 1.1s ease 0.55s forwards;
        }
      `}</style>
      <div
        className={`fixed inset-0 z-[100] bg-[#0f9d7a] flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
          phase === "exiting" ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="starcnc-logo-wrap flex flex-col items-center gap-3">
          <Image
            src="/favicon.png"
            alt="Star CNC Engineering Works"
            width={64}
            height={64}
            className="brightness-0 invert"
            priority
          />
          <p className="text-white text-4xl font-bold tracking-wider">
            STAR CNC
          </p>
          <p className="text-white/60 text-[11px] tracking-[0.3em] uppercase">
            Precision Laser Cutting &amp; CNC Bending
          </p>
        </div>

        <div className="mt-10 w-52 h-[2px] bg-white/20 rounded-full overflow-hidden">
          <div className="starcnc-laser-line h-full bg-[#F07B20] rounded-full" />
        </div>
      </div>
    </>
  );
}
