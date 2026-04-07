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

        <div className="space-y-6 text-theme-text-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
          <p>{t('about.p1')}</p>
        </div>

        <div className="pt-10 border-t border-theme-border/20">
          <h3 className="text-sm font-semibold tracking-widest text-theme-accent uppercase mb-6 opacity-70">
            {t('skills.desc')}
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
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
