export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px bg-theme-accent flex-1 opacity-20"></div>
          <h2 className="text-3xl font-bold tracking-wider text-theme-accent">Hakkımda</h2>
          <div className="h-px bg-theme-accent flex-1 opacity-20"></div>
        </div>
        
        <div className="space-y-6 text-theme-text-muted text-lg leading-relaxed">
          <p>
            Merhaba, ben <span className="text-white font-medium">Ayşe Sude Özden</span>. 
            Teknolojiye ve yazılıma duyduğum merakla, karmaşık problemleri sade ve zarif çözümlere dönüştürmeyi hedefleyen bir geliştiriciyim.
          </p>
          <p>
            İnsan merkezli, okunabilirliği yüksek ve performansı odakta tutan modern uygulamalar inşa etmekten keyif alıyorum. Geliştirdiğim her projede estetiği ve fonksiyonelliği bir araya getirmeye çabalıyorum.
          </p>
        </div>
      </div>
    </section>
  );
}
