"use client";

import React from 'react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Education from '@/components/sections/Education';
import Projects from '@/components/sections/Projects';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="relative flex flex-col overflow-x-hidden min-h-screen pt-14 font-mono">
      <Hero />
      <About />
      <Education />
      <Projects />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-theme-border/50 bg-theme-surface/20">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-theme-text-dim font-mono">
            <span className="text-theme-accent">▶</span>&nbsp;
            <span className="text-theme-text-muted">{t('footer.left')}</span>
          </div>
          <div className="text-xs text-theme-text-dim font-mono">
            © {new Date().getFullYear()} Ayşe Sude Özden &nbsp;·&nbsp;
            <span>{t('footer.rights')}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
