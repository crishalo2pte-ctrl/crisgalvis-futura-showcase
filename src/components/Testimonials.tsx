const items = [
  {
    q: "El diseño se convirtió en nuestra mayor ventaja competitiva. La gente nota la diferencia en segundos.",
    n: "María L.",
    r: "CEO, Lumina",
  },
  {
    q: "Una atención al detalle obsesiva. Cada interacción se siente premium.",
    n: "Andrés P.",
    r: "Fundador, Atelier Faune",
  },
  {
    q: "Pasamos de tener una web a tener un producto. La diferencia es abismal.",
    n: "Daniela R.",
    r: "Product, Nexus AI",
  },
];

export function Testimonials() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">Confianza</span>
          <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Lo que dicen los clientes
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((it) => (
            <figure key={it.n} className="glass-surface flex flex-col justify-between rounded-[28px] p-8">
              <blockquote className="text-lg font-medium leading-relaxed tracking-tight">
                "{it.q}"
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent-purple text-sm font-semibold text-white">
                  {it.n.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold">{it.n}</div>
                  <div className="text-xs text-muted-foreground">{it.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
