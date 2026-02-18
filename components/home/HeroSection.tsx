'use client';
import React, { useEffect, useState } from 'react';
import FadeIn from '../FadeIn';

type HeroProps = {
    subtitle: string;
    title: string;
    description: string;
    buttonText: string;
    videoSrc?: string;
    darkVideoSrc?: string;
    imageSrc?: string;
    buttonLink: string;
};

const HeroSection = ({
    subtitle = "SCARLET<br />MAROON",
    description = "Yazılım dünyasına yeni adım atmış bir bilgisayar mühendisiyim. Her gün yeni bir teknoloji öğreniyor ve GitHub üzerinde açık kaynaklı projeler geliştiriyorum.",
    buttonText = "DAHA FAZLA",
    videoSrc,
    darkVideoSrc,
    imageSrc,
    buttonLink = "#about"
}: HeroProps) => {
    // Default video sources if neither video nor image is provided
    const defaultVideoSrc = "/assets/1131.mp4";
    const defaultDarkVideoSrc = "/assets/1130.mp4";

    // Determine effective sources
    const effectiveVideoSrc = videoSrc || defaultVideoSrc;
    const effectiveDarkVideoSrc = darkVideoSrc || defaultDarkVideoSrc;

    const [currentVideoSrc, setCurrentVideoSrc] = useState(effectiveVideoSrc);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        // Only run theme logic if we are using video logic (i.e., no imageSrc provided)
        if (imageSrc) return;

        const updateTheme = () => {
            const isDarkBody = document.body.classList.contains('dark');
            const isDarkHtml = document.documentElement.classList.contains('dark');
            const isDark = isDarkBody || isDarkHtml;

            console.log('HeroSection: Theme update detected. isDark:', isDark);
            setCurrentVideoSrc(isDark ? effectiveDarkVideoSrc : effectiveVideoSrc);
        };

        // Initial check
        updateTheme();

        // Use MutationObserver to watch for class changes on body and html
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    updateTheme();
                }
            });
        });

        observer.observe(document.body, { attributes: true });
        observer.observe(document.documentElement, { attributes: true });

        // Also listen for event as backup/compatibility
        window.addEventListener('theme-change', updateTheme);
        return () => {
            observer.disconnect();
            window.removeEventListener('theme-change', updateTheme);
        };
    }, [effectiveVideoSrc, effectiveDarkVideoSrc, imageSrc]);

    return (
        <section className="section-split hero-section">
            <div className="col-left hero-left">
                <div style={{ maxWidth: '600px' }}>
                    <FadeIn delay={200}>
                        <h2 className="hero-subtitle" dangerouslySetInnerHTML={{ __html: subtitle }}></h2>
                    </FadeIn>
                    <div className="hero-image-container-mobile" style={{ display: 'none' }}>
                        {/* Mobile image would go here if needed, but per design it's split */}
                    </div>

                    <div className="mini-bio" style={{ marginTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '2rem' }}>
                        <FadeIn delay={400}>
                            <p style={{ fontSize: '0.8rem', letterSpacing: '1px', lineHeight: '1.8', textTransform: 'uppercase', marginBottom: '2rem' }}>
                                {description}
                            </p>
                        </FadeIn>
                        <FadeIn delay={600}>
                            <a href={buttonLink} className="btn-outline">{buttonText}</a>
                        </FadeIn>
                    </div>
                </div>
            </div>
            <div className="col-right hero-right">
                {imageSrc ? (
                    <img
                        src={imageSrc}
                        alt="Hero"
                        className="hero-video" // Reuse class for styling
                        style={{ objectPosition: 'center', width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                ) : (
                    <video
                        key={currentVideoSrc} // Force re-render on source change to ensure autoplay
                        src={currentVideoSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="hero-video"
                        style={{ objectPosition: 'center' }}
                    />
                )}
            </div>
        </section>
    );
};

export default HeroSection;
