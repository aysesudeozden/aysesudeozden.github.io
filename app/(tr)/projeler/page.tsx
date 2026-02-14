'use client';

export default function Projeler() {
    return (
        <section className="section-split hero-section">
            <div className="projects-container" style={{ width: '100%' }}>
                <h2 className="hero-subtitle" style={{ color: 'var(--accent-text)' }}>PORTFOLYO</h2>
                <h1 className="hero-title" style={{ marginBottom: '1rem' }}>SEÇİLMİŞ PROJELER</h1>
                <div style={{ width: '50px', height: '1px', background: 'currentColor', margin: '0 auto' }}></div>

                <div className="project-grid">
                    <div
                        className="project-card"
                        onClick={() => window.open('https://github.com/aysesudeozden', '_blank')}
                    >
                        <h3>GitHub Projeleri</h3>
                        <p>Açık kaynak kodlu çalışmalarım ve denemelerim.</p>
                    </div>

                    <div className="project-card">
                        <h3>Web Tasarım</h3>
                        <p>HTML & CSS ile geliştirdiğim arayüz çalışmaları.</p>
                    </div>

                    <div className="project-card">
                        <h3>Unity Oyunları</h3>
                        <p>C# ile geliştirdiğim oyun prototipleri.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
