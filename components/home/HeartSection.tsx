import React from 'react';
import FadeIn from '../FadeIn';

type HeartProps = {
    subtitle: string;
    title: string;
    description: string;
};

const HeartSection = ({
    subtitle = "NEDEN YAPIYORUM",
    title = "THE HEART BEHIND<br/>SCARLET STUDIO",
    description = "Şu sıralar web teknolojileri ve oyun geliştirme (Unity) üzerine yoğunlaştım. Kod yazmak benim için sadece bir iş değil, aynı zamanda bir yaratım süreci. Karmaşık problemleri çözmek ve estetik, işlevsel arayüzler oluşturmak en büyük tutkum."
}: HeartProps) => {
    return (
        <section id="about" className="section-split" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)', borderBottom: 'none' }}>
            <div className="col-left" style={{ padding: '6rem 4rem', alignItems: 'flex-start' }}>
                <FadeIn>
                    <span className="hero-subtitle" style={{ color: 'var(--text-color)', borderBottom: 'none', marginBottom: '1rem' }}>{subtitle}</span>
                </FadeIn>
                <FadeIn delay={200}>
                    <h2 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '2rem', fontFamily: 'Playfair Display, serif' }} dangerouslySetInnerHTML={{ __html: title }}></h2>
                </FadeIn>
                <FadeIn delay={400}>
                    <p style={{ maxWidth: '500px', fontSize: '0.95rem', opacity: 0.8, marginBottom: '2rem' }}>
                        {description}
                    </p>
                </FadeIn>

                <FadeIn delay={600}>
                    <div style={{ display: 'flex', gap: '20px', marginTop: 'auto' }}>
                        <div style={{ width: '150px', height: '200px', background: '#ccc', overflow: 'hidden' }}>
                            <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Detail 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </FadeIn>
            </div>
            <div className="col-right" style={{ padding: '0', alignItems: 'center', justifyContent: 'center', backgroundColor: '#3e0c0d' }}>
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Portrait 2" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                </div>
            </div>
        </section>
    );
};

export default HeartSection;
