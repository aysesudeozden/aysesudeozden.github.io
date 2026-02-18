import React from 'react';
import Link from 'next/link';
import FadeIn from '../FadeIn';

type FooterProps = {
    title: string;
    buttonText: string;
    location: string;
    copyright: string;
};

const FooterSection = ({
    title = "LET'S TELL YOUR STORY",
    buttonText = "INQUIRE",
    location = "Based in Istanbul, TR",
    copyright = "© 2026 Ayşe Sude Özden"
}: FooterProps) => {
    return (
        <section style={{ height: '500px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
            <img
                src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Footer Background"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1, filter: 'brightness(0.6)' }}
            />

            <FadeIn delay={200}>
                <h2 style={{ fontSize: '2.5rem', fontFamily: 'Playfair Display, serif', marginBottom: '2rem', letterSpacing: '2px' }}>{title}</h2>
            </FadeIn>

            <FadeIn delay={400}>
                <Link href="/iletisim" className="btn-outline" style={{ borderColor: '#fff', color: '#fff', padding: '1rem 3rem' }}>
                    {buttonText}
                </Link>
            </FadeIn>

            <div style={{ position: 'absolute', bottom: '2rem', left: 0, width: '100%', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>
                <div>{location}</div>
                <div>{copyright}</div>
            </div>
        </section>
    );
};

export default FooterSection;
