import FadeIn from '@/components/FadeIn';

export default function AboutMe() {
    return (
        <section className="section-split hero-section">
            <div className="col-left about-content">
                <FadeIn delay={200}>
                    <h2 className="hero-subtitle">ABOUT ME</h2>
                </FadeIn>
                <FadeIn delay={400}>
                    <h1 className="hero-title">A NEW <br />START</h1>
                </FadeIn>
                <FadeIn delay={600}>
                    <p style={{ marginBottom: '2rem', maxWidth: '500px' }}>
                        I am a computer engineer who has recently entered the world of software.
                        Every day I learn a new technology and develop open-source projects on GitHub.
                        Currently, I am focusing on web technologies and game development (Unity).
                    </p>
                </FadeIn>
                <FadeIn delay={800}>
                    <a
                        href="https://github.com/aysesudeozden"
                        className="btn-outline"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--text-color)', borderColor: 'var(--text-color)' }}
                    >
                        GITHUB PROFILE
                    </a>
                </FadeIn>
            </div>

            <div className="col-right about-images">
                <FadeIn delay={600} animationName="animate-scale">
                    <img
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        className="about-img-small"
                        alt="Coding"
                    />
                </FadeIn>
            </div>
        </section>
    );
}
