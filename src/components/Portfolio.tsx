import lumina from "@/assets/project-lumina.jpg";
import vera from "@/assets/project-vera.jpg";
import nexus from "@/assets/project-nexus.jpg";
import atelier from "@/assets/project-atelier.jpg";

type Project = {
  title: string;
  category: string;
  year: string;
  img: string;
  accent: string;
  dot: string;
};

const projects: Project[] = [
  { title: "Lumina Banking", category: "Fintech Systems", year: "2025", img: lumina, accent: "from-primary/15", dot: "var(--apple-blue)" },
  { title: "Vera Studio", category: "Arquitectura", year: "2025", img: vera, accent: "from-accent-green/15", dot: "var(--apple-green)" },
  { title: "Nexus AI", category: "Plataforma de datos", year: "2024", img: nexus, accent: "from-accent-purple/15", dot: "var(--apple-purple)" },
  { title: "Atelier Faune", category: "E-commerce de moda", year: "2024", img: atelier, accent: "from-accent-orange/15", dot: "var(--apple-orange)" },
];

export function Portfolio() {
  return (
    <section id="proyectos" className="relative py-32">
      <div className="absolute inset-0 -z-10 backdrop-blur-3xl" style={{ background: "var(--bg-alt)" }} />
      <div className="mx-auto mb-16 flex max-w-7xl items-end justify-between px-6">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">Selección 2025</span>
          <h2 className="mt-2 text-balance text-4xl font-semibold tracking-tight md:text-5xl">Trabajos recientes</h2>
        </div>
        <p className="hidden max-w-[36ch] text-pretty text-sm text-muted-foreground md:block">
          Cada proyecto es un equilibrio entre estética sensorial y utilidad técnica.
        </p>
      </div>

      <div
        className="no-scrollbar flex snap-x snap-mandatory gap-10 overflow-x-auto pb-12"
        style={{ paddingInline: "max(1.5rem, calc((100vw - 80rem) / 2))" }}
      >
        {projects.map((p) => (
          <article key={p.title} className="group w-[85vw] flex-none snap-start md:w-[640px]">
            <div className="glass-surface mb-8 rounded-[36px] p-2 shadow-[0_30px_80px_-20px_oklch(0_0_0/0.18)] transition-transform duration-500 group-hover:-translate-y-1">
              <div className={`relative aspect-[4/3] overflow-hidden rounded-[28px] bg-gradient-to-br ${p.accent} to-transparent`}>
                <div className="absolute inset-0 flex items-center justify-center p-10">
                  <div className="glass-surface relative h-full w-full overflow-hidden rounded-[20px] shadow-2xl">
                    <img
                      src={p.img}
                      alt={`Diseño de ${p.title}`}
                      loading="lazy"
                      width={1280}
                      height={960}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between px-4">
              <div>
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.category} · {p.year}</p>
              </div>
              <span
                className="size-2 rounded-full"
                style={{ background: p.dot, boxShadow: `0 0 14px ${p.dot}` }}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
