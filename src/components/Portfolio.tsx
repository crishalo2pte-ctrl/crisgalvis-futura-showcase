import { useState } from "react";
import aurora from "@/assets/project-aurora.jpg";
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
  description: string;
};

const projects: Project[] = [
  { title: "Aurora Analytics", category: "Dashboard", year: "2025", img: aurora, accent: "from-primary/15", dot: "var(--apple-blue)", description: "Dashboard analítico con visualizaciones en tiempo real e IA predictiva." },
  { title: "Vera Studio", category: "Landing", year: "2025", img: vera, accent: "from-accent-green/15", dot: "var(--apple-green)", description: "Sitio editorial para un estudio de arquitectura contemporánea." },
  { title: "Nexus AI", category: "SaaS", year: "2024", img: nexus, accent: "from-accent-purple/15", dot: "var(--apple-purple)", description: "Interfaz de datos masivos con flujos animados y reportes inteligentes." },
  { title: "Atelier Faune", category: "E-commerce", year: "2024", img: atelier, accent: "from-accent-orange/15", dot: "var(--apple-orange)", description: "Tienda de moda premium con experiencia inmersiva y checkout fluido." },
  { title: "Lumen Health", category: "SaaS", year: "2025", img: aurora, accent: "from-accent-pink/15", dot: "var(--apple-pink)", description: "App de salud integral con seguimiento biométrico y coach IA." },
  { title: "Orbit Travel", category: "Landing", year: "2025", img: vera, accent: "from-primary/15", dot: "var(--apple-blue)", description: "Buscador de experiencias con mapas inteligentes y reservas en un toque." },
  { title: "Forge Studio", category: "Landing", year: "2024", img: nexus, accent: "from-accent-orange/15", dot: "var(--apple-orange)", description: "Portafolio interactivo con scroll cinemático y transiciones líquidas." },
  { title: "Pulse Fitness", category: "SaaS", year: "2025", img: atelier, accent: "from-accent-green/15", dot: "var(--apple-green)", description: "Entrenamientos adaptativos con métricas en tiempo real y comunidad." },
  { title: "Helix Crypto", category: "Dashboard", year: "2024", img: aurora, accent: "from-accent-purple/15", dot: "var(--apple-purple)", description: "Wallet multichain con UX simplificada y seguridad de nivel bancario." },
  { title: "Mira Beauty", category: "E-commerce", year: "2025", img: atelier, accent: "from-accent-pink/15", dot: "var(--apple-pink)", description: "Storytelling de producto con paleta sensorial y compra sin fricción." },
];

const filters = ["Todos", "SaaS", "E-commerce", "Landing", "Dashboard"];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filtered =
    activeFilter === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="proyectos" className="relative py-32">
      <div className="absolute inset-0 -z-10 backdrop-blur-3xl" style={{ background: "var(--bg-alt)" }} />
      <div className="mx-auto mb-10 flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">Seleccion 2025</span>
          <h2 className="mt-2 text-balance text-4xl font-semibold tracking-tight md:text-5xl">Trabajos recientes</h2>
        </div>
        <p className="hidden max-w-[36ch] text-pretty text-sm text-muted-foreground md:block">
          {filtered.length} proyecto{filtered.length !== 1 ? "s" : ""} — pasa el cursor para expandir cada tarjeta.
        </p>
      </div>

      <div className="mx-auto mb-12 flex max-w-7xl flex-wrap items-center gap-3 px-6">
        {filters.map((f) => {
          const count =
            f === "Todos" ? projects.length : projects.filter((p) => p.category === f).length;
          const isActive = activeFilter === f;
          return (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`relative rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-[0_0_24px_-6px_var(--primary)]"
                  : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground"
              }`}
            >
              {f}
              <span
                className={`ml-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full text-[10px] font-bold transition-colors duration-300 ${
                  isActive ? "bg-primary-foreground/20 text-primary-foreground" : "bg-white/10 text-muted-foreground"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
        <span className="ml-auto text-sm text-muted-foreground md:hidden">
          {filtered.length} resultado{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="relative">
        <div className="mx-auto flex max-w-7xl snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 no-scrollbar md:gap-6">
          {filtered.map((p, i) => (
            <article
              key={p.title}
              className="group relative isolate w-[78vw] flex-shrink-0 snap-start overflow-hidden rounded-[28px] glass-surface shadow-[0_20px_60px_-25px_oklch(0_0_0/0.25)] transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_40px_100px_-25px_oklch(0_0_0/0.35)] sm:w-[320px] md:w-[360px] lg:w-[400px]"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${p.accent} via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100`} />
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={`Diseño de ${p.title}`}
                  loading="lazy"
                  width={1280}
                  height={1600}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span
                  className="absolute right-4 top-4 size-2 rounded-full animate-pulse-dot"
                  style={{ background: p.dot, boxShadow: `0 0 16px ${p.dot}` }}
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  {p.year}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/70">{p.category}</p>
                  <h3 className="mt-1 text-xl font-semibold tracking-tight">{p.title}</h3>
                  <div className="grid grid-rows-[0fr] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grid-rows-[1fr] group-hover:mt-3">
                    <div className="overflow-hidden">
                      <p className="text-sm leading-relaxed text-white/85 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        {p.description}
                      </p>
                      <a
                        href="https://wa.me/543516524083?text=Hola%2Cestoy%20interesado%20en%20tener%20mi%20pagina%20web%20para%20aumentar%20mis%20ventas%20"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black opacity-0 transition-all duration-500 delay-100 group-hover:opacity-100"
                      >
                        Quiero algo asi →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
