"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Github, Linkedin, ArrowDown } from "lucide-react";

const LINES = [
  { delay: 0,   content: <><span className="tok-comment"># Initialize portfolio session</span></> },
  { delay: 300, content: <><span className="tok-key">const</span> <span className="tok-prop">engineer</span> <span className="tok-punct">= </span><span className="tok-bracket">{"{"}</span></> },
  { delay: 600, content: <>&nbsp;&nbsp;<span className="tok-str">&quot;name&quot;</span><span className="tok-punct">: </span><span className="tok-str">&quot;Ayşe Sude Özden&quot;</span><span className="tok-punct">,</span></> },
  { delay: 900, content: <>&nbsp;&nbsp;<span className="tok-str">&quot;role&quot;</span><span className="tok-punct">: </span><span className="tok-str">&quot;AI &amp; Data Engineer&quot;</span><span className="tok-punct">,</span></> },
  { delay: 1200, content: <>&nbsp;&nbsp;<span className="tok-str">&quot;location&quot;</span><span className="tok-punct">: </span><span className="tok-str">&quot;Turkey 🇹🇷&quot;</span><span className="tok-punct">,</span></> },
  { delay: 1500, content: <>&nbsp;&nbsp;<span className="tok-str">&quot;status&quot;</span><span className="tok-punct">: </span><span className="tok-bool">true</span><span className="tok-punct">,</span> <span className="tok-comment">// open to work</span></> },
  { delay: 1800, content: <><span className="tok-bracket">{"}"}</span></> },
];

export default function Hero() {
  const { t } = useLanguage();
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
        if (i === LINES.length - 1) {
          setTimeout(() => setShowCta(true), 400);
        }
      }, line.delay);
    });
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative px-6 md:px-12 pt-14"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(88,166,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(88,166,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(88,166,255,0.07),transparent)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl mx-auto">

        {/* Prompt line */}
        <div className="flex items-center gap-2 mb-6 text-xs text-theme-text-muted">
          <span className="text-theme-accent font-bold">sude@portfolio</span>
          <span className="text-theme-text-dim">:</span>
          <span className="text-syn-number">~</span>
          <span className="text-theme-text-dim">$</span>
          <span className="text-theme-text ml-1">node init.js</span>
        </div>

        {/* Terminal code block */}
        <div className="terminal-chrome mb-8">
          {/* Title bar */}
          <div className="terminal-titlebar">
            <div className="terminal-dot dot-red" />
            <div className="terminal-dot dot-yellow" />
            <div className="terminal-dot dot-green" />
            <span className="ml-3 text-xs text-theme-text-muted font-mono">engineer.js — portfolio</span>
          </div>

          {/* Code content */}
          <div className="p-6 font-mono text-sm leading-7 min-h-[240px]">
            {LINES.map((line, i) => (
              <div
                key={i}
                className={`flex gap-4 transition-all duration-300 ${
                  visibleLines.includes(i)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-1"
                }`}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="line-no text-theme-text-dim select-none w-4">{i + 1}</span>
                <span>{line.content}</span>
              </div>
            ))}
            {/* Blinking cursor */}
            {visibleLines.length === LINES.length && (
              <div className="flex gap-4">
                <span className="line-no text-theme-text-dim select-none w-4">{LINES.length + 1}</span>
                <span className="animate-blink text-theme-accent">█</span>
              </div>
            )}
          </div>
        </div>

        {/* Output block */}
        {showCta && (
          <div className="fade-in-up">
            <div className="text-xs text-theme-text-muted mb-2">
              <span className="text-theme-accent">▶</span> Compiled successfully &nbsp;·&nbsp; ready in 0.12s
            </div>
            <p className="text-theme-text-muted text-sm leading-relaxed mb-8 max-w-xl border-l-2 border-theme-border pl-4">
              {t("hero.subtitle")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                id="hero-contact-btn"
                href="mailto:aysesudeozden@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-theme-accent text-theme-bg text-sm font-bold rounded hover:bg-theme-accent-hover transition-all hover:shadow-[0_0_20px_rgba(88,166,255,0.35)] active:scale-95"
              >
                <Mail size={15} />
                {t("hero.contact")}
              </a>
              <a
                id="hero-github-btn"
                href="https://github.com/aysesudeozden"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-theme-border text-theme-text-muted text-sm font-bold rounded hover:border-theme-accent hover:text-theme-accent transition-all active:scale-95"
              >
                <Github size={15} />
                GitHub
              </a>
              <a
                id="hero-linkedin-btn"
                href="https://linkedin.com/in/aysesudeozden"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-theme-border text-theme-text-muted text-sm font-bold rounded hover:border-theme-accent hover:text-theme-accent transition-all active:scale-95"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] text-theme-text-muted tracking-widest uppercase">scroll</span>
        <ArrowDown size={14} className="text-theme-accent animate-bounce" />
      </div>
    </section>
  );
}
