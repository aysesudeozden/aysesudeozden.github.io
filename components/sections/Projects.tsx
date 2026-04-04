import PixelCard from "../PixelCard";

export default function Projects() {
  const projects = [
    {
      title: "Proje 1",
      description: "Modern web teknolojileri kullanılarak geliştirilmiş interaktif platform.",
      tech: ["Next.js", "React", "TailwindCSS"]
    },
    {
      title: "Proje 2",
      description: "Gelişmiş kullanıcı deneyimi odaklı, hızlı ve güvenilir mobil uygulama arayüzü.",
      tech: ["TypeScript", "Framer Motion", "CSS"]
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px bg-theme-accent flex-1 opacity-20"></div>
          <h2 className="text-3xl font-bold tracking-wider text-theme-accent">Projeler</h2>
          <div className="h-px bg-theme-accent flex-1 opacity-20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <PixelCard 
              key={index} 
              colors="#cf1111,#520606,#8a0707" 
              gap={12} 
              speed={40} 
              className="h-[300px]"
            >
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-theme-text-muted mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 text-xs font-medium border border-theme-border rounded-md text-theme-text opacity-80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </PixelCard>
          ))}
        </div>
      </div>
    </section>
  );
}
