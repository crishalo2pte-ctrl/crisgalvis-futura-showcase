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
  { title: "Aurora Analytics", category: "Plataforma SaaS de IA", year: "2025", img: aurora, accent: "from-primary/15", dot: "var(--apple-blue)", description: "Dashboard analítico con visualizaciones en tiempo real e IA predictiva." },
  { title: "Vera Studio", category: "Arquitectura", year: "2025", img: vera, accent: "from-accent-green/15", dot: "var(--apple-green)", description: "Sitio editorial para un estudio de arquitectura contemporánea." },
  { title: "Nexus AI", category: "Plataforma de datos", year: "2024", img: nexus, accent: "from-accent-purple/15", dot: "var(--apple-purple)", description: "Interfaz de datos masivos con flujos animados y reportes inteligentes." },
  { title: "Atelier Faune", category: "E-commerce de moda", year: "2024", img: atelier, accent: "from-accent-orange/15", dot: "var(--apple-orange)", description: "Tienda de moda premium con experiencia inmersiva y checkout fluido." },
  { title: "Lumen Health", category: "App de bienestar", year: "2025", img: aurora, accent: "from-accent-pink/15", dot: "var(--apple-pink)", description: "App de salud integral con seguimiento biométrico y coach IA." },
  { title: "Orbit Travel", category: "Plataforma de viajes", year: "2025", img: vera, accent: "from-primary/15", dot: "var(--apple-blue)", description: "Buscador de experiencias con mapas inteligentes y reservas en un toque." },
  { title: "Forge Studio", category: "Agencia creativa", year: "2024", img: nexus, accent: "from-accent-orange/15", dot: "var(--apple-orange)", description: "Portafolio interactivo con scroll cinemático y transiciones líquidas." },
  { title: "Pulse Fitness", category: "App fitness", year: "2025", img: atelier, accent: "from-accent-green/15", dot: "var(--apple-green)", description: "Entrenamientos adaptativos con métricas en tiempo real y comunidad." },
  { title: "Helix Crypto", category: "Wallet Web3", year: "2024", img: aurora, accent: "from-accent-purple/15", dot: "var(--apple-purple)", description: "Wallet multichain con UX simplificada y seguridad de nivel bancario." },
  { title: "Mira Beauty", category: "Marca de cosmética", year: "2025", img: atelier, accent: "from-accent-pink/15", dot: "var(--apple-pink)", description: "Storytelling de producto con paleta sensorial y compra sin fricción." },
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
          10 proyectos seleccionados — pasa el cursor para expandir cada tarjeta.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="group relative isolate overflow-hidden rounded-[28px] glass-surface shadow-[0_20px_60px_-25px_oklch(0_0_0/0.25)] transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_40px_100px_-25px_oklch(0_0_0/0.35)] sm:[&:hover]:scale-[1.03]"
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
                      Quiero algo así →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
