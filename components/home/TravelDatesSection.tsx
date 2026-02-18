import React from 'react';
import Link from 'next/link';
import FadeIn from '../FadeIn';

type ProjectProps = {
    title: string;
    items: {
        title: string;
        desc: string;
        linkText: string;
        linkUrl: string;
        image: string;
    }[]
};

const TravelDatesSection = ({
    title = "PROJECTS",
    items = [
        {
            title: "GITHUB / OPEN SOURCE",
            desc: "CODE & CONTRIBUTIONS",
            linkText: "VIEW PROFILE",
            linkUrl: "https://github.com/aysesudeozden",
            image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "WEB DESIGN",
            desc: "HTML, CSS & NEXT.JS",
            linkText: "VIEW PROJECTS",
            linkUrl: "/projeler",
            image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "GAME DEV",
            desc: "UNITY 3D & C#",
            linkText: "PLAY NOW",
            linkUrl: "/game-tr",
            image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        }
    ]
}: ProjectProps) => {
    return (
        <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--bg-color)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
            <FadeIn>
                <h2 className="hero-title" style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '3rem' }}>{title}</h2>
            </FadeIn>

            <div className="project-grid" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>

                {items.map((item, index) => (
                    <FadeIn key={index} delay={index * 200} className="project-card-wrapper" style={{ flex: '1 1 300px' }}>
                        <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
                            <div style={{ width: '100%', aspectRatio: '1/1', background: '#333', marginBottom: '1.5rem', overflow: 'hidden' }}>
                                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{item.title}</h3>
                            <p style={{ fontSize: '0.8rem', opacity: 0.7, marginBottom: '1rem' }}>{item.desc}</p>
                            <Link href={item.linkUrl} target={item.linkUrl.startsWith('http') ? '_blank' : undefined} style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', borderBottom: '1px solid currentColor' }}>{item.linkText}</Link>
                        </div>
                    </FadeIn>
                ))}

            </div>
        </section>
    );
};

export default TravelDatesSection;
