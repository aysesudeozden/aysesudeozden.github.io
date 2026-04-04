"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Education() {
  const { t } = useLanguage();

  const educationList = [
    {
      year: "2020 - 2024",
      degree: t('edu.university'),
      institution: "Üniversite Adı",
      description: t('edu.university.desc')
    },
    {
      year: "2016 - 2020",
      degree: t('edu.highschool'),
      institution: "Lise Adı",
      description: t('edu.highschool.desc')
    }
  ];

  return (
    <section id="education" className="min-h-screen flex items-center justify-center py-20 px-6 pt-24">
      <div className="max-w-3xl mx-auto w-full text-center">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px bg-theme-accent flex-1 opacity-20"></div>
          <h2 className="text-3xl font-bold tracking-wider text-theme-accent uppercase">{t('edu.title')}</h2>
          <div className="h-px bg-theme-accent flex-1 opacity-20"></div>
        </div>

        <div className="relative flex flex-col items-center">
          {/* Vertical line through the center */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-theme-border opacity-20 hidden md:block"></div>

          <div className="space-y-16 w-full">
            {educationList.map((item, index) => (
              <div key={index} className="relative z-10 w-full group">
                {/* Visual marker in the center line */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 rounded-full bg-theme-accent hidden md:block shadow-[0_0_10px_rgba(225,29,72,0.5)]"></div>
                
                <div className="flex flex-col items-center">
                  <span className="text-theme-accent font-bold tracking-widest text-xs mb-3 px-3 py-1 bg-theme-accent/5 rounded-full border border-theme-accent/20">
                    {item.year}
                  </span>
                  <h3 className="text-2xl font-bold text-theme-text mb-1 tracking-tight group-hover:text-theme-accent transition-colors">
                    {item.degree}
                  </h3>
                  <h4 className="text-theme-text-muted font-semibold mb-4 text-base italic uppercase tracking-wider">
                    {item.institution}
                  </h4>
                  <p className="text-theme-text/80 leading-relaxed text-sm max-w-xl mx-auto">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
