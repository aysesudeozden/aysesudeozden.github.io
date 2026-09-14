"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink, Droplet } from "lucide-react";

const PROJECTS = [
  {
    id: "I",
    title: "agent.exe",
    description: "Automated workflow management.",
    tech: "Vue / Electron",
    link: "https://github.com/aysesudeozden",
  },
  {
    id: "II",
    title: "KAVŞAK360",
    description: "Computer vision intersection control.",
    tech: "Python / Raspberry Pi",
    link: "https://github.com/aysesudeozden",
  },
  {
    id: "III",
    title: "Cinematch",
    description: "Algorithmic movie recommendations.",
    tech: "Next.js / Python",
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

        <div className="flex flex-col gap-12 md:gap-0">
          {PROJECTS.map((project, idx) => (
            <a 
              key={idx} 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block py-8 md:py-16 border-b border-theme-border/50 hover:border-theme-accent transition-colors duration-500"
            >
              {/* Frosted Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-theme-surface to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"></div>
              
              <div className="flex flex-col md:flex-row items-baseline gap-4 md:gap-12 relative z-10">
                <span className="font-serif text-theme-secondary/50 text-2xl md:text-4xl w-16 md:w-24 group-hover:text-theme-accent transition-colors duration-500">
                  {project.id}
                </span>
                
                <h3 className="font-serif text-3xl md:text-6xl text-theme-text group-hover:translate-x-4 transition-transform duration-700 ease-out flex-1">
                  {project.title}
                </h3>
                
                <div className="flex-1 flex flex-col md:items-end text-left md:text-right mt-4 md:mt-0 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-theme-text-muted mb-2 font-light">{project.description}</p>
                  <p className="text-xs font-bold tracking-[0.2em] text-theme-secondary uppercase">{project.tech}</p>
                </div>

                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-theme-border group-hover:border-theme-accent group-hover:bg-theme-accent text-theme-text transition-all duration-500">
                  <ExternalLink size={16} className="group-hover:rotate-45 transition-transform duration-500" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
