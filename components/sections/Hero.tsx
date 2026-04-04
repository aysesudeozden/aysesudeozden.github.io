"use client";

import DecryptedText from "../DecryptedText";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative w-full px-6 pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(204,17,17,0.08),transparent_50%)] pointer-events-none" />
      
      <div className="z-10 text-center flex flex-col gap-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
          <DecryptedText
            text="Ayşe Sude Özden"
            speed={60}
            maxIterations={15}
            animateOn="load"
            className="text-theme-text"
          />
        </h1>
        <p className="text-theme-text-muted text-lg md:text-xl font-medium tracking-wide">
          {t('hero.subtitle')} <span className="text-theme-accent mx-2">&bull;</span> {t('hero.creative')}
        </p>
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
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  );
}
