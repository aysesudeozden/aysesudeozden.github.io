"use client";

import { useLanguage } from "@/context/LanguageContext";

const skills = [
  "React", "Next.js", "TypeScript", "JavaScript", "TailwindCSS", 
  "Node.js", "Express", "HTML5", "CSS3", "Framer Motion", "Git", "Figma"
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 px-6 pt-24 border-y border-theme-border/20 bg-theme-surface/30 overflow-hidden relative">
      <div className="max-w-5xl mx-auto w-full mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px bg-theme-accent flex-1 opacity-20"></div>
          <h2 className="text-3xl font-bold tracking-wider text-theme-accent">{t('skills.title')}</h2>
          <div className="h-px bg-theme-accent flex-1 opacity-20"></div>
        </div>
        <p className="text-center text-theme-text-muted">{t('skills.desc')}</p>
      </div>

      {/* Marquee Mask (fades edges) */}
      <div className="absolute left-0 right-0 h-32 pointer-events-none z-10 bg-gradient-to-r from-theme-bg via-transparent to-theme-bg content-['']"></div>

      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
          {/* Double repetition for seamless loop */}
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div 
              key={index} 
              className="mx-4 px-6 py-3 rounded-full border border-theme-border bg-theme-surface text-theme-text font-medium text-lg uppercase tracking-wider hover:border-theme-accent hover:text-theme-accent hover:shadow-[0_0_15px_rgba(225,29,72,0.3)] transition-all cursor-crosshair"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
