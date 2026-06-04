const steps = [
  { n: "01", t: "Descubrimiento", d: "Inmersión en tu marca, objetivos y audiencia. Mapeo de oportunidades." },
  { n: "02", t: "Concepto", d: "Direcciones visuales, prototipos navegables y storytelling de la interfaz." },
  { n: "03", t: "Diseño & UI", d: "Sistema de diseño completo, componentes y micro-interacciones." },
  { n: "04", t: "Lanzamiento", d: "Desarrollo pixel-perfect, optimización y entrega lista para crecer." },
];

export function Process() {
  return (
    <section id="proceso" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">Proceso</span>
          <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Cuatro fases, claridad absoluta.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="glass-surface group relative overflow-hidden rounded-[28px] p-6 transition-transform duration-500 hover:-translate-y-1"
            >
              <div
                className="absolute -right-12 -top-12 size-32 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-70"
                style={{ background: ["var(--apple-blue)", "var(--apple-green)", "var(--apple-purple)", "var(--apple-orange)"][i] }}
              />
              <div className="relative">
                <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
