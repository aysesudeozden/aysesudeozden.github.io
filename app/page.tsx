import React from 'react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Education from '@/components/sections/Education';
import Projects from '@/components/sections/Projects';

export default function Home() {
  return (
    <main className="relative flex flex-col bg-theme-bg overflow-x-hidden">
      <Hero />
      <About />
      <Education />
      <Projects />
      
      {/* Footer */}
      <footer className="py-8 text-center text-theme-text-muted text-sm border-t border-theme-border/30">
        <p>&copy; {new Date().getFullYear()} Ayşe Sude Özden. All rights reserved.</p>
      </footer>
    </main>
  );
}
