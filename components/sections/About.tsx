"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="min-h-[70vh] flex items-center justify-center py-12 px-6 pt-16">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px bg-theme-accent flex-1 opacity-20"></div>
          <h2 className="text-3xl font-bold tracking-wider text-theme-accent uppercase">{t('about.title')}</h2>
          <div className="h-px bg-theme-accent flex-1 opacity-20"></div>
        </div>

        <div className="space-y-4 text-theme-text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          <p>{t('about.p1')}</p>
        </div>

        <div className="pt-8 border-t border-theme-border/20">
          <h3 className="text-xs font-semibold tracking-widest text-theme-accent uppercase mb-4 opacity-70">
            {t('skills.desc')}
          </h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {["React", "Next.js", "TypeScript", "JavaScript", "TailwindCSS", "Node.js", "Express", "HTML5", "CSS3", "Framer Motion", "Git", "Figma"].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-1.5 rounded-full border border-theme-border/50 bg-theme-surface/30 text-theme-text text-sm font-medium hover:border-theme-accent hover:text-theme-accent transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
