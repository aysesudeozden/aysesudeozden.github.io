"use client";

import { useLanguage } from "@/context/LanguageContext";
import { projects, ui } from "@/content/site";
import { Reveal, Section } from "@/components/ui";

export default function Projects() {
  const { tx } = useLanguage();

  return (
    <Section id="projects" meta={ui.sections.projects}>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={(i % 2) * 80} className="h-full">
            <article className="group flex h-full flex-col rounded-lg border border-line bg-surface/60 p-6 transition-colors hover:border-bordo-text/60">
              <div className="flex items-center justify-between gap-3 font-mono text-[12px] text-dim">
                <span>
                  <span className="text-bordo-text">{String(i + 1).padStart(2, "0")}</span>
                  {project.context && <> · {tx(project.context)}</>}
                </span>
                {project.year && <span>{project.year}</span>}
              </div>
              <h3 className="mt-3 text-[1.35rem] font-semibold tracking-tight text-ink">{project.name}</h3>
              {project.subtitle && <p className="text-[14.5px] text-ink/70">{tx(project.subtitle)}</p>}
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{tx(project.desc)}</p>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 font-mono text-[12px]">
                <span className="text-dim">
                  {project.tags.map((t) => `#${t.toLowerCase().replace(/[\s.]+/g, "-")}`).join(" ")}
                </span>
                <span className="flex gap-4">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted transition-colors hover:text-ink"
                    >
                      {tx(ui.code)} ↗
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-bordo-text transition-opacity hover:opacity-75"
                    >
                      {tx(ui.live)} ↗
                    </a>
                  )}
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
