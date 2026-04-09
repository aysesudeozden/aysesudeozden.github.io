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
    <main className="relative flex flex-col bg-theme-bg overflow-x-hidden transition-colors duration-300 min-h-screen pt-16">
      <Hero />
      <About />
      <Education />
      <Projects />

      {/* Footer */}
      <footer className="py-8 text-center text-theme-text-muted text-sm border-t border-theme-border/30">
        <em><p>{t('footer.left')} <br /> &copy; {new Date().getFullYear()} {t('footer.rights')} </p></em>
      </footer>
    </main>
  );
}
