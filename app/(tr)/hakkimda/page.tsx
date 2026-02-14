export default function Hakkimda() {
    return (
        <section className="section-split hero-section">
            <div className="col-left about-content">
                <h2 className="hero-subtitle">HAKKIMDA</h2>
                <h1 className="hero-title">YENİ BİR<br />BAŞLANGIÇ</h1>
                <p style={{ marginBottom: '2rem', maxWidth: '500px' }}>
                    Yazılım dünyasına yeni adım atmış bir bilgisayar mühendisiyim.
                    Her gün yeni bir teknoloji öğreniyor ve GitHub üzerinde açık kaynaklı projeler geliştiriyorum.
                    Şu sıralar web teknolojileri ve oyun geliştirme (Unity) üzerine yoğunlaştım.
                </p>
                <a
                    href="https://github.com/aysesudeozden"
                    className="btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--text-color)', borderColor: 'var(--text-color)' }}
                >
                    GITHUB PROFİLİM
                </a>
            </div>

            <div className="col-right about-images">
                <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    className="about-img-small"
                    alt="Kodlama"
                />
            </div>
        </section>
    );
}
