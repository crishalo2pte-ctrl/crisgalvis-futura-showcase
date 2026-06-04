import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative px-6 pb-32 pt-48">
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <span className="glass-surface animate-rise mb-8 rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary shadow-sm">
          Diseño web · SEO · EXPERIENCIAS
        </span>
        <h1 className="animate-rise mb-8 max-w-[18ch] text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]" style={{ animationDelay: "80ms" }}>
          Páginas web que se sienten <span className="bg-gradient-to-r from-primary via-accent-purple to-accent-pink bg-clip-text italic font-light text-transparent">vivas</span>.
        </h1>
        <p className="animate-rise mb-12 max-w-[52ch] text-pretty text-lg text-muted-foreground md:text-xl" style={{ animationDelay: "160ms" }}>
          Interfaces inspiradas en la precisión de Apple. Diseño impecable,
          micro-interacciones futuristas y rendimiento que transmite confianza
          desde el primer pixel.
        </p>
        <div className="animate-rise flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: "240ms" }}>
          <a
            href="#proyectos"
            className="group flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background shadow-lg transition-transform active:scale-95"
          >
            Ver proyectos
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contacto"
            className="glass-surface rounded-full px-6 py-3.5 text-sm font-medium transition-colors hover:text-primary"
          >
            Iniciar un proyecto
          </a>
        </div>

        {/* Stats */}
        <div className="animate-rise mt-20 grid w-full max-w-3xl grid-cols-3 gap-4" style={{ animationDelay: "320ms" }}>
          {[
            { k: "48+", v: "Proyectos entregados" },
            { k: "100%", v: "Clientes recurrentes" },
            { k: "0.9s", v: "Carga promedio" },
          ].map((s) => (
            <div key={s.v} className="glass-surface rounded-2xl px-4 py-5 text-left">
              <div className="text-2xl font-semibold tracking-tight md:text-3xl">{s.k}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
