"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6 pt-24">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px bg-theme-accent flex-1 opacity-20"></div>
          <h2 className="text-3xl font-bold tracking-wider text-theme-accent uppercase">{t('about.title')}</h2>
          <div className="h-px bg-theme-accent flex-1 opacity-20"></div>
        </div>

        <div className="space-y-6 text-theme-text-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          <p>{t('about.p1')}</p>
        </div>
      </div>
    </section>
  );
}
