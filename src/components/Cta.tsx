import { ArrowUpRight } from "lucide-react";

export function Cta() {
  return (
    <section id="contacto" className="px-6 pb-32">
      <div className="mx-auto max-w-7xl">
        <div className="glass-surface relative overflow-hidden rounded-[48px] p-12 text-center shadow-[0_40px_80px_-20px_oklch(0_0_0/0.2)] md:p-20">
          <div
            className="animate-float-slow absolute -left-32 -top-32 size-[420px] rounded-full opacity-30 blur-[120px]"
            style={{ background: "var(--apple-blue)" }}
          />
          <div
            className="animate-float-slow-rev absolute -bottom-32 -right-32 size-[420px] rounded-full opacity-30 blur-[120px]"
            style={{ background: "var(--apple-purple)" }}
          />
          <div className="relative">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">Trabajemos juntos</span>
            <h2 className="mt-3 text-balance text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
              ¿Listos para <span className="bg-gradient-to-r from-primary via-accent-purple to-accent-pink bg-clip-text italic font-light text-transparent">elevar</span> tu marca?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-muted-foreground">
              Cupos limitados cada trimestre. Hablemos del proyecto que te tiene despierto en las noches.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:hola@crisgalvis.com"
                className="group flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background shadow-lg transition-transform active:scale-95"
              >
                Escríbeme
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#proyectos"
                className="glass-surface rounded-full px-7 py-4 text-sm font-medium transition-colors hover:text-primary"
              >
                Ver más trabajos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
