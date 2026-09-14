"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink, Droplet } from "lucide-react";

const PROJECTS = [
  {
    id: "I",
    titleKey: "proj.1.title",
    descKey: "proj.1.desc",
    tech: "Next.js / TypeScript",
    link: "https://github.com/aysesudeozden",
  },
  {
    id: "II",
    titleKey: "proj.2.title",
    descKey: "proj.2.desc",
    tech: "React Native / Firebase",
    link: "https://github.com/aysesudeozden",
  },
  {
    id: "III",
    titleKey: "proj.3.title",
    descKey: "proj.3.desc",
    tech: "Python / ML",
    link: "https://github.com/aysesudeozden",
  },
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-32 px-8 lg:px-16 bg-theme-bg relative overflow-hidden">
      
      {/* Background mood lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-theme-accent/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8 border-b border-theme-border pb-8">
          <h2 className="font-serif text-5xl md:text-7xl text-theme-text font-light tracking-wide flex items-center gap-6">
            {t('proj.title')} <Droplet size={32} className="text-theme-accent opacity-50" />
          </h2>
          <p className="text-theme-text-muted max-w-sm font-light">
            {t('proj.desc')}
          </p>
        </div>

        <div className="space-y-16">
          {PROJECTS.map((project, index) => (
            <div key={index} className="group flex flex-col md:flex-row gap-8 items-start md:items-center justify-between border-b border-theme-border/30 pb-16 hover:border-theme-accent transition-colors duration-500">
              
              <div className="flex items-start gap-8 w-full md:w-1/2">
                <span className="font-serif text-4xl md:text-6xl text-theme-text-muted/30 group-hover:text-theme-accent/50 transition-colors italic leading-none">
                  {project.id}
                </span>
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl text-theme-text mb-4 group-hover:text-theme-secondary transition-colors">
                    {t(project.titleKey)}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 border border-theme-border text-theme-text-muted text-[10px] tracking-widest uppercase bg-theme-surface/30">
                      {project.tech}
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 md:pl-16">
                <p className="text-theme-text-muted font-light leading-relaxed mb-8">
                  {t(project.descKey)}
                </p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-theme-text hover:text-theme-accent transition-colors"
                >
                  Explore <ExternalLink size={14} />
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
