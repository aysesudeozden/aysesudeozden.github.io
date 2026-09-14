"use client";

import React from 'react';
import Image from 'next/image';
import About from '@/components/sections/About';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col lg:flex-row">
      
      {/* Left Fixed Anchor (Desktop) */}
      <div className="relative w-full lg:w-1/2 lg:fixed h-screen border-b lg:border-b-0 lg:border-r border-theme-border/30 overflow-hidden flex items-center justify-center">
        
        {/* Cinematic Background Image */}
        <Image 
          src="/avatar.png" 
          alt="Ayşe Sude Özden" 
          fill 
          priority
          className="object-cover object-center grayscale opacity-60"
        />
        
        {/* Cinematic Overlays (Crimson gradient fade) */}
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-theme-bg via-theme-bg/80 to-theme-accent/20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-theme-bg/40"></div>
        
        {/* Massive Branding Typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center mix-blend-difference opacity-90 z-10">
          <h1 className="font-serif text-[15vw] lg:text-[8vw] font-bold tracking-tighter text-white uppercase" style={{ lineHeight: '0.8' }}>
            Sude<br/>Özden.
          </h1>
        </div>

        <Navbar />
      </div>

      {/* Right Scrollable Canvas (Desktop) */}
      <div className="w-full lg:w-1/2 lg:ml-[50%] bg-theme-bg relative z-20">
        <About />
        <Experience />
        <Education />
        <Projects />
        <Contact />

        {/* Footer */}
        <footer className="py-16 px-8 lg:px-16 border-t border-theme-border/30 bg-theme-surface">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="font-serif text-theme-text-muted text-xs tracking-[0.3em] uppercase">
              © {new Date().getFullYear()} Ayşe Sude Özden.
            </div>
            <div className="font-serif text-theme-text-muted text-xs italic">
              Designed for eternity.
            </div>
          </div>
        </footer>
      </div>

    </main>
  );
}
