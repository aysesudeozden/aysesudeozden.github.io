'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function EnglishHome() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const updateVideoSource = () => {
            if (videoRef.current) {
                const isDark = document.body.classList.contains('dark');
                const newSrc = isDark ? '/assets/1130.mp4' : '/assets/1131.mp4';
                if (!videoRef.current.src.includes(newSrc)) {
                    videoRef.current.src = newSrc;
                    videoRef.current.load();
                    videoRef.current.play().catch(e => console.log("Autoplay failed", e));
                }
            }
        };
        updateVideoSource();
        window.addEventListener('theme-change', updateVideoSource);
        return () => window.removeEventListener('theme-change', updateVideoSource);
    }, []);

    return (
        <header className="section-split hero-section">
            <div className="col-left hero-left">
                <div className="hero-content">
                    <h2 className="hero-subtitle">COMPUTER ENGINEER</h2>
                    <h1 className="hero-title">AYŞE SUDE<br />ÖZDEN</h1>
                    <p className="mini-bio">
                        Hello! I work on web design, HTML, SQL and Unity.
                        I compile what I have learnt and the projects I have developed here.
                    </p>
                    <Link href="/projects" className="btn-outline">VIEW MY PROJECTS</Link>
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
                    Your browser does not support the video tag.
                </video>
            </div>
        </header>
    );
}
