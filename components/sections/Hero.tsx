"use client";

import DecryptedText from "../DecryptedText";
import CanvasAvatar from "../CanvasAvatar";
import { useLanguage } from "@/context/LanguageContext";
import { Mail } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center relative w-full px-6 gap-8 md:gap-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(225,29,72,0.05),transparent_70%)] pointer-events-none" />

      {/* Left Column: Text Content */}
      <div className="z-10 text-center md:text-left flex flex-col gap-4 max-w-xl order-2 md:order-1">
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter text-white mb-2 uppercase">
          <DecryptedText
            text="Ayşe"
            speed={60}
            maxIterations={20}
            animateOn="load"
            className="text-theme-text"
          />
          <br />
          Sude Özden
        </h1>
        <p className="text-theme-text-muted text-lg md:text-2xl font-medium tracking-wide">
          <span className="text-theme-accent mx-2">&bull;</span><em>{t('hero.creative')}</em><br />{t('hero.subtitle')}
        </p>

        {/* Call to Action or extra flair could go here */}
        <div className="mt-8 flex justify-center md:justify-start">
          <div className="h-1 w-24 bg-theme-accent rounded-full opacity-50"></div>
        </div>
        <a
          href="mailto:aysesudeozden@gmail.com"
          className="inline-flex justify-center gap-3 py-4 bg-theme-accent hover:bg-theme-accent-hover text-white font-bold rounded-lg transition-all hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(225,29,72,0.3)] mb-16"
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
