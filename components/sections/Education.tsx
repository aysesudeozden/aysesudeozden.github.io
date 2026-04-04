export default function Education() {
  const educationList = [
    {
      year: "2020 - 2024",
      degree: "Bilgisayar Mühendisliği (B.Sc)",
      institution: "Üniversite Adı",
      description: "Yazılım geliştirme, algoritmalar ve veri yapıları üzerine odaklanarak derece ile mezun oldum."
    },
    {
      year: "2016 - 2020",
      degree: "Lise Eğitimi",
      institution: "Lise Adı",
      description: "Sayısal bölüm."
    }
  ];

  return (
    <section id="education" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-3xl mx-auto w-full">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-theme-accent flex-1 opacity-20"></div>
          <h2 className="text-3xl font-bold tracking-wider text-theme-accent">Eğitim</h2>
          <div className="h-px bg-theme-accent flex-1 opacity-20"></div>
        </div>

        <div className="space-y-12">
          {educationList.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="md:col-span-1 mb-2 md:mb-0 md:text-right">
                  <span className="text-theme-accent font-semibold tracking-wider text-sm">{item.year}</span>
                </div>
                <div className="md:col-span-3 pb-8 md:pb-0 relative">
                  {/* Timeline dot */}
                  <div className="absolute left-[-2rem] md:left-[-1.5rem] top-1.5 w-3 h-3 rounded-full bg-theme-bg border border-theme-accent z-10 hidden md:block"></div>
                  {/* Timeline line */}
                  {index !== educationList.length - 1 && (
                    <div className="absolute left-[-1.125rem] top-4 w-px h-full bg-theme-border hidden md:block"></div>
                  )}

                  <h3 className="text-xl font-bold text-white mb-1">{item.degree}</h3>
                  <h4 className="text-theme-text-muted mb-3 font-medium">{item.institution}</h4>
                  <p className="text-theme-text opacity-80 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
