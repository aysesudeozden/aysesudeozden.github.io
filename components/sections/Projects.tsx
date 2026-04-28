"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink, Github } from "lucide-react";

const PROJECTS = [
  {
    id: "01",
    title: "agent.exe",
    description: "proj.1.desc",
    tech: ["Vue", "Electron", "SQL Server"],
    status: "production",
    github: "https://github.com/aysesudeozden",
  },
  {
    id: "02",
    title: "KAVŞAK360",
    description: "proj.2.desc",
    tech: ["Python", "Raspberry Pi", "Hardware"],
    status: "archived",
    github: "https://github.com/aysesudeozden",
  },
  {
    id: "03",
    title: "Cinematch",
    description: "proj.3.desc",
    tech: ["Next.js", "Python", "PostgreSQL", "TailwindCSS"],
    status: "in-progress",
    github: "https://github.com/aysesudeozden",
  },
  {
    id: "04",
    title: "Portfolio v3",
    description: "proj.4.desc",
    tech: ["Next.js", "TypeScript", "CSS"],
    status: "production",
    github: "https://github.com/aysesudeozden",
  },
];

const STATUS_STYLES: Record<string, string> = {
  "production":   "text-green-400 border-green-400/30 bg-green-400/5",
  "in-progress":  "text-theme-accent border-theme-accent/30 bg-theme-accent/5",
  "archived":     "text-theme-text-muted border-theme-border bg-transparent",
};

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 px-6 md:px-12 relative">
      <div className="max-w-6xl mx-auto">

        {/* CLI header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-1 text-xs">
            <span className="text-theme-accent font-bold">sude@portfolio</span>
            <span className="text-theme-text-dim">:~$</span>
            <span className="text-theme-text ml-1">git log --oneline --all --projects</span>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <div className="w-1 h-8 bg-theme-amber rounded-full" />
            <h2 className="text-xl font-bold text-theme-text tracking-wider uppercase font-mono">
              {t("proj.title")}
            </h2>
          </div>
        </div>

        {/* Project cards as "commit" entries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              id={`project-${project.id}`}
              className="group relative bg-theme-surface border border-theme-border rounded-lg p-6 hover:border-theme-accent/50 transition-all hover:shadow-[0_0_25px_rgba(88,166,255,0.06)] cursor-default"
            >
              {/* Commit hash + status */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-theme-text-dim font-mono">
                  <span className="text-theme-amber">commit</span> {project.id}a7f3c
                </span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${STATUS_STYLES[project.status]}`}>
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-theme-text mb-2 group-hover:text-theme-accent transition-colors font-mono">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-theme-text-muted leading-relaxed mb-5">
                <span className="tok-comment">//</span> {t(project.description)}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[10px] font-mono text-syn-string bg-theme-surface-2 border border-theme-border/50 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 border-t border-theme-border/30 pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-theme-text-muted hover:text-theme-accent transition-colors font-mono"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github size={13} />
                  source
                </a>
                <span className="text-theme-text-dim">·</span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-theme-text-muted hover:text-theme-accent transition-colors font-mono"
                  aria-label={`Open ${project.title}`}
                >
                  <ExternalLink size={13} />
                  view
                </a>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-theme-accent to-theme-amber rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </article>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-8 text-xs text-theme-text-dim font-mono">
          <span className="text-theme-accent">▶</span>&nbsp; {PROJECTS.length} projects found &nbsp;·&nbsp;
          <a href="https://github.com/aysesudeozden" className="hover:text-theme-accent transition-colors underline underline-offset-2">
            view all on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
