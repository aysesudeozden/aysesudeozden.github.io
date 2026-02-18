import React from 'react';
import FadeIn from '../FadeIn';

const InspiredBySection = () => {
    return (
        <section style={{ display: 'flex', minHeight: '500px', backgroundColor: '#3e0c0d', color: '#f3efe0', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 300px', padding: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid rgba(243, 239, 224, 0.1)' }}>
                <FadeIn delay={200} style={{ width: '300px', height: '400px', position: 'relative' }}>
                    <img
                        src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                        alt="Inspiration"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </FadeIn>
            </div>
            <div style={{ flex: '1 1 300px', padding: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <FadeIn delay={400}>
                    <h2 style={{ fontSize: '3rem', fontFamily: 'Playfair Display, serif', marginBottom: '1rem' }}>INSPIRED BY</h2>
                    <span style={{ display: 'block', width: '30px', height: '1px', background: '#f3efe0', margin: '0 auto 2rem' }}></span>
                </FadeIn>

                <FadeIn delay={600}>
                    <div style={{ fontSize: '0.8rem', letterSpacing: '2px', lineHeight: '2', textTransform: 'uppercase', opacity: 0.8 }}>
                        <p>FILM PHOTOS / BLACK & WHITE FILMS / ROAD TRIPS /</p>
                        <p>OLD MAGAZINES / VINYL COVERS / THE 90S / LATE</p>
                        <p>NIGHT TALKS / ART GALLERIES</p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default InspiredBySection;
