'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const updateVideoSource = () => {
      if (videoRef.current) {
        const isDark = document.body.classList.contains('dark');
        const newSrc = isDark ? '/assets/1130.mp4' : '/assets/1131.mp4';
        // Only reload if src changes
        if (!videoRef.current.src.includes(newSrc)) {
          videoRef.current.src = newSrc;
          videoRef.current.load();
          videoRef.current.play().catch(e => console.log("Autoplay failed", e));
        }
      }
    };

    // Initial check
    updateVideoSource();

    // Listen to theme change
    window.addEventListener('theme-change', updateVideoSource);
    return () => window.removeEventListener('theme-change', updateVideoSource);
  }, []);

  return (
    <header className="section-split hero-section">
      <div className="col-left hero-left">
        <div className="hero-content">
          <h2 className="hero-subtitle">BİLGİSAYAR MÜHENDİSİ</h2>
          <h1 className="hero-title">AYŞE SUDE<br />ÖZDEN</h1>
          <p className="mini-bio">
            Merhaba! Web tasarımı, HTML, SQL ve Unity üzerine çalışıyorum.
            Öğrendiklerimi ve geliştirdiğim projeleri burada derliyorum.
          </p>
          <Link href="/projeler" className="btn-outline">PROJELERİMİ GÖR</Link>
        </div>
      </div>

      <div className="col-right hero-right">
        <video
          ref={videoRef}
          id="heroVideo"
          className="hero-image"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/1131.mp4" type="video/mp4" />
          Tarayıcınız video etiketini desteklemiyor.
        </video>
      </div>
    </header>
  );
}
