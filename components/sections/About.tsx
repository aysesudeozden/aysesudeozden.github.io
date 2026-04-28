"use client";

import { useLanguage } from "@/context/LanguageContext";

// JSON-rendered tech stack
const techStack = {
  languages: ["Python", "Java", "TypeScript", "JavaScript"],
  frameworks: ["Next.js", "React", "Node.js", "FastAPI"],
  data_ai: ["Pandas", "NumPy", "Scikit-learn", "SQL", "PostgreSQL"],
  networking: ["Cisco IOS", "VLAN", "TCP/IP", "Network Management"],
  tools: ["Git", "Docker", "Linux", "Figma"],
};

function JsonLine({
  indent = 0,
  children,
  className = "",
}: {
  indent?: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex gap-4 leading-7 ${className}`}>
      <span className="line-no text-theme-text-dim select-none w-4" />
      <span style={{ paddingLeft: `${indent * 1.5}rem` }}>{children}</span>
    </div>
  );
}

function ArrayField({ name, items }: { name: string; items: string[] }) {
  return (
    <>
      <JsonLine indent={1}>
        <span className="tok-str">&quot;{name}&quot;</span>
        <span className="tok-punct">: [</span>
      </JsonLine>
      {items.map((item, i) => (
        <JsonLine key={item} indent={2}>
          <span className="tok-str">&quot;{item}&quot;</span>
          <span className="tok-punct">{i < items.length - 1 ? "," : ""}</span>
        </JsonLine>
      ))}
      <JsonLine indent={1}>
        <span className="tok-punct">]{name !== "tools" ? "," : ""}</span>
      </JsonLine>
    </>
  );
}

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-6 md:px-12 relative">
      {/* Subtle accent glow */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-theme-accent to-transparent opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* Left: About Me as JSON */}
        <div>
          {/* Section prompt */}
          <div className="flex items-center gap-2 mb-5 text-xs">
            <span className="text-theme-accent font-bold">sude@portfolio</span>
            <span className="text-theme-text-dim">:~$</span>
            <span className="text-theme-text ml-1">cat about.json</span>
          </div>

          <div className="terminal-chrome glow-pulse">
            <div className="terminal-titlebar">
              <div className="terminal-dot dot-red" />
              <div className="terminal-dot dot-yellow" />
              <div className="terminal-dot dot-green" />
              <span className="ml-3 text-xs text-theme-text-muted">about.json</span>
            </div>
            <div className="p-5 font-mono text-sm">
              {/* Line numbers & JSON */}
              {(() => {
                let line = 1;
                const L = (content: React.ReactNode, indent = 0) => (
                  <div key={line} className="flex gap-3 leading-7">
                    <span className="line-no text-theme-text-dim select-none text-right" style={{ minWidth: "1.5rem" }}>
                      {line++}
                    </span>
                    <span style={{ paddingLeft: `${indent * 1.5}rem` }}>{content}</span>
                  </div>
                );
                return [
                  L(<><span className="tok-bracket">{"{"}</span></>),
                  L(<><span className="tok-str">&quot;name&quot;</span><span className="tok-punct">: </span><span className="tok-str">&quot;Ayşe Sude Özden&quot;</span><span className="tok-punct">,</span></>, 1),
                  L(<><span className="tok-str">&quot;role&quot;</span><span className="tok-punct">: </span><span className="tok-str">&quot;AI &amp; Data Engineer&quot;</span><span className="tok-punct">,</span></>, 1),
                  L(<><span className="tok-str">&quot;degree&quot;</span><span className="tok-punct">: </span><span className="tok-str">&quot;B.Sc Computer Engineering&quot;</span><span className="tok-punct">,</span></>, 1),
                  L(<><span className="tok-str">&quot;university&quot;</span><span className="tok-punct">: </span><span className="tok-str">&quot;Giresun University&quot;</span><span className="tok-punct">,</span></>, 1),
                  L(<><span className="tok-str">&quot;erasmus&quot;</span><span className="tok-punct">: </span><span className="tok-str">&quot;Kazimierz Wielki University, Poland&quot;</span><span className="tok-punct">,</span></>, 1),
                  L(<><span className="tok-str">&quot;open_to_work&quot;</span><span className="tok-punct">: </span><span className="tok-bool">true</span><span className="tok-punct">,</span></>, 1),
                  L(<><span className="tok-str">&quot;languages&quot;</span><span className="tok-punct">: [</span><span className="tok-str">&quot;Turkish&quot;</span><span className="tok-punct">, </span><span className="tok-str">&quot;English&quot;</span><span className="tok-punct">],</span></>, 1),
                  L(<><span className="tok-str">&quot;bio&quot;</span><span className="tok-punct">: </span></>, 1),
                  L(<><span className="tok-str">&quot;{t("about.p1")}&quot;</span></>, 2),
                  L(<><span className="tok-bracket">{"}"}</span></>),
                ];
              })()}
            </div>
          </div>

          {/* Status chips */}
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              { label: "● available", color: "text-green-400 border-green-400/30 bg-green-400/5" },
              { label: "⚡ AI & Data", color: "text-theme-accent border-theme-accent/30 bg-theme-accent/5" },
              { label: "🌍 Erasmus+", color: "text-theme-amber border-theme-amber/30 bg-theme-amber/5" },
            ].map((chip) => (
              <span key={chip.label} className={`px-3 py-1 text-xs font-mono border rounded-full ${chip.color}`}>
                {chip.label}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Tech Stack as JSON */}
        <div>
          <div className="flex items-center gap-2 mb-5 text-xs">
            <span className="text-theme-accent font-bold">sude@portfolio</span>
            <span className="text-theme-text-dim">:~$</span>
            <span className="text-theme-text ml-1">cat tech_stack.json</span>
          </div>

          <div className="terminal-chrome">
            <div className="terminal-titlebar">
              <div className="terminal-dot dot-red" />
              <div className="terminal-dot dot-yellow" />
              <div className="terminal-dot dot-green" />
              <span className="ml-3 text-xs text-theme-text-muted">tech_stack.json</span>
            </div>
            <div className="p-5 font-mono text-sm">
              {(() => {
                let line = 1;
                const entries = Object.entries(techStack);
                const L = (content: React.ReactNode, indent = 0) => (
                  <div key={`ts-${line}`} className="flex gap-3 leading-7">
                    <span className="line-no text-theme-text-dim select-none text-right" style={{ minWidth: "1.5rem" }}>
                      {line++}
                    </span>
                    <span style={{ paddingLeft: `${indent * 1.5}rem` }}>{content}</span>
                  </div>
                );
                const rows = [L(<><span className="tok-bracket">{"{"}</span></>)];
                entries.forEach(([key, items], ei) => {
                  rows.push(L(<><span className="tok-str">&quot;{key}&quot;</span><span className="tok-punct">: [</span></>, 1));
                  items.forEach((item, ii) => {
                    rows.push(L(<><span className="tok-str">&quot;{item}&quot;</span>{ii < items.length - 1 ? <span className="tok-punct">,</span> : null}</>, 2));
                  });
                  rows.push(L(<><span className="tok-punct">]{ei < entries.length - 1 ? "," : ""}</span></>, 1));
                });
                rows.push(L(<><span className="tok-bracket">{"}"}</span></>));
                return rows;
              })()}
            </div>
          </div>

          {/* Skill badges */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {["Python", "Java", "Next.js", "Network Mgmt", "SQL", "FastAPI"].map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 px-3 py-2 bg-theme-surface border border-theme-border rounded text-xs text-theme-text-muted hover:border-theme-accent hover:text-theme-accent transition-all group cursor-default"
              >
                <span className="text-theme-accent/40 group-hover:text-theme-accent transition-colors">▸</span>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
