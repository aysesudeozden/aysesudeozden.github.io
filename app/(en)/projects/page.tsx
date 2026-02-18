'use client';
import FadeIn from '@/components/FadeIn';

export default function Projects() {
    return (
        <section className="section-split hero-section">
            <div className="projects-container" style={{ width: '100%' }}>
                <FadeIn delay={200}>
                    <h2 className="hero-subtitle" style={{ color: 'var(--accent-text)' }}>PORTFOLIO</h2>
                </FadeIn>
                <FadeIn delay={400}>
                    <h1 className="hero-title" style={{ marginBottom: '1rem' }}>SELECTED PROJECTS</h1>
                    <div style={{ width: '50px', height: '1px', background: 'currentColor', margin: '0 auto' }}></div>
                </FadeIn>

                <div className="project-grid">
                    <FadeIn delay={600} className="project-card-wrapper" style={{ flex: '1 1 300px' }}>
                        <div
                            className="project-card"
                            onClick={() => window.open('https://github.com/aysesudeozden', '_blank')}
                            style={{ cursor: 'pointer' }}
                        >
                            <h3>GitHub Projects</h3>
                            <p>My open source work and experiments.</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={800} className="project-card-wrapper" style={{ flex: '1 1 300px' }}>
                        <div className="project-card">
                            <h3>Web Design</h3>
                            <p>Interface works developed with HTML & CSS.</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={1000} className="project-card-wrapper" style={{ flex: '1 1 300px' }}>
                        <div className="project-card">
                            <h3>Unity Games</h3>
                            <p>Game prototypes developed with C#.</p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
