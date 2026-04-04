"use client";

import React from 'react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Education from '@/components/sections/Education';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="relative flex flex-col bg-theme-bg overflow-x-hidden transition-colors duration-300 min-h-screen pt-16">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center text-theme-text-muted text-sm border-t border-theme-border/30">
        <p>&copy; {new Date().getFullYear()} Ayşe Sude Özden. {t('footer.rights')}</p>
      </footer>
    </main>
  );
}
