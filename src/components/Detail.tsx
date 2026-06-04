import { Sparkles, Zap, Layers, Eye } from "lucide-react";
import optic from "@/assets/detail-optic.jpg";

const features = [
  { icon: Sparkles, label: "Animaciones físicas", color: "var(--apple-blue)" },
  { icon: Layers, label: "Sistemas escalables", color: "var(--apple-green)" },
  { icon: Zap, label: "Rendimiento crítico", color: "var(--apple-purple)" },
  { icon: Eye, label: "Diseño accesible", color: "var(--apple-orange)" },
];

export function Detail() {
  return (
    <section id="estudio" className="px-6 py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="glass-surface rounded-[48px] p-3 shadow-[0_40px_80px_-20px_oklch(0_0_0/0.18)] ring-1 ring-white/30">
            <div className="aspect-[3/2] overflow-hidden rounded-[38px]">
              <img
                src={optic}
                alt="Precisión óptica de pantalla"
                loading="lazy"
                width={1280}
                height={854}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">El estudio</span>
          <h2 className="mt-3 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            La sutileza es la máxima sofisticación.
          </h2>
          <p className="mt-6 max-w-[48ch] text-pretty text-lg text-muted-foreground">
            Trabajamos cada detalle como si fuera el último: tipografía calibrada,
            color en gamut P3, transiciones con física natural. El resultado son
            interfaces que la gente quiere tocar.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.label} className="glass-surface rounded-2xl p-5">
                <div
                  className="mb-4 flex size-8 items-center justify-center rounded-xl"
                  style={{ background: f.color, boxShadow: `0 0 14px ${f.color}` }}
                >
                  <f.icon className="size-4 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-sm font-semibold">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
