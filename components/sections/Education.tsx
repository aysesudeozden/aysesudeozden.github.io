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

  const experienceList = [
    {
      year: "2023",
      role: t('exp.intern1.title'),
      company: t('exp.company'),
      description: t('exp.intern1.desc')
    },
    {
      year: "2022",
      role: t('exp.intern2.title'),
      company: t('exp.company'),
      description: t('exp.intern2.desc')
    },
    {
      year: "2021",
      role: t('exp.intern3.title'),
      company: t('exp.company'),
      description: t('exp.intern3.desc')
    }
  ];

  return (
    <section id="education" className="min-h-screen py-20 px-6 pt-24 bg-theme-bg/50">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-4 mb-20">
          <div className="h-px bg-theme-accent flex-1 opacity-20"></div>
          <h2 className="text-3xl font-bold tracking-wider text-theme-accent uppercase">{t('edu_exp.title')}</h2>
          <div className="h-px bg-theme-accent flex-1 opacity-20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative">
          {/* Vertical divider for desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-theme-border opacity-10 hidden md:block -translate-x-1/2"></div>

          {/* Education Column */}
          <div className="space-y-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-8 rounded-lg bg-theme-accent/10 flex items-center justify-center text-theme-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </span>
              <h3 className="text-xl font-bold text-theme-text uppercase tracking-widest">{t('edu.title')}</h3>
            </div>
            
            <div className="space-y-12 border-l border-theme-border/20 pl-8 ml-4">
              {educationList.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-[37px] top-1.5 w-[11px] h-[11px] rounded-full bg-theme-bg border-2 border-theme-accent group-hover:bg-theme-accent transition-colors"></div>
                  <span className="text-theme-accent/80 font-bold text-xs tracking-widest block mb-2">{item.year}</span>
                  <h4 className="text-lg font-bold text-theme-text mb-1 group-hover:text-theme-accent transition-colors">{item.degree}</h4>
                  <p className="text-theme-text-muted text-sm font-semibold mb-3 italic uppercase">{item.institution}</p>
                  <p className="text-theme-text/70 text-sm leading-relaxed max-w-md">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div className="space-y-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-8 rounded-lg bg-theme-accent/10 flex items-center justify-center text-theme-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </span>
              <h3 className="text-xl font-bold text-theme-text uppercase tracking-widest">{t('exp.title')}</h3>
            </div>

            <div className="space-y-12 border-l border-theme-border/20 pl-8 ml-4">
              {experienceList.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-[37px] top-1.5 w-[11px] h-[11px] rounded-full bg-theme-bg border-2 border-theme-accent group-hover:bg-theme-accent transition-colors"></div>
                  <span className="text-theme-accent/80 font-bold text-xs tracking-widest block mb-2">{item.year}</span>
                  <h4 className="text-lg font-bold text-theme-text mb-1 group-hover:text-theme-accent transition-colors">{item.role}</h4>
                  <p className="text-theme-text-muted text-sm font-semibold mb-3 italic uppercase">{item.company}</p>
                  <p className="text-theme-text/70 text-sm leading-relaxed max-w-md">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
