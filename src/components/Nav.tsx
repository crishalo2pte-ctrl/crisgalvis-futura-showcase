export function Nav() {
  return (
    <nav className="fixed inset-x-0 top-6 z-50 flex justify-center px-4">
      <div className="glass-surface flex items-center gap-6 rounded-full px-5 py-2.5 shadow-[0_12px_40px_oklch(0_0_0/0.08)]">
        <a href="#" className="text-sm font-semibold tracking-tight">crisgalvis</a>
        <div className="hidden items-center gap-6 md:flex">
          <a href="#proyectos" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Proyectos</a>
          <a href="#estudio" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Estudio</a>
          <a href="#proceso" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Proceso</a>
        </div>
        <div className="h-4 w-px bg-border" />
        <a
          href="https://wa.me/543516524083?text=Hola%2Cestoy%20interesado%20en%20tener%20mi%20pagina%20web%20para%20aumentar%20mis%20ventas%20"
          className="flex items-center gap-1.5 rounded-full bg-primary py-2 pl-2 pr-3 text-sm font-medium text-primary-foreground shadow-[0_4px_20px_oklch(0.62_0.18_255/0.35)] ring-1 ring-primary transition-transform active:scale-95"
        >
          <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-white/20">
            <span className="size-1.5 animate-pulse-dot rounded-full bg-white" />
          </span>
          Disponible
        </a>
      </div>
    </nav>
  );
}
