"use client";

import DecryptedText from "../DecryptedText";
import CanvasAvatar from "../CanvasAvatar";
import { useLanguage } from "@/context/LanguageContext";
import { Mail } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center relative w-full px-6 gap-8 md:gap-16 transition-colors duration-500">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_70%)] pointer-events-none" />

      {/* Left Column: Text Content */}
      <div className="z-10 text-center md:text-left flex flex-col gap-4 max-w-xl order-2 md:order-1">
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-2 uppercase">
          <DecryptedText
            text="Sude"
            speed={60}
            maxIterations={20}
            animateOn="load"
            className="text-theme-text"
          />
          <span className="text-theme-text"></span>
        </h1>
        <div className="text-theme-text-muted text-lg md:text-2xl font-medium tracking-wide">
          {t('hero.subtitle')}
        </div>
        <a
          href="mailto:aysesudeozden@gmail.com"
          className="inline-flex items-center justify-center gap-3 py-4 bg-theme-accent hover:bg-theme-accent-hover text-white font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_8px_30px_rgba(59,130,246,0.25)] mb-16"
        >
          <Mail size={20} />
          {t('hero.contact')}
        </a>
      </div>

      {/* Right Column: Binary Avatar */}
      <div className="z-10 order-1 md:order-2">
        <CanvasAvatar />
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-theme-accent"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
