export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 md:flex-row md:items-center">
        <div className="max-w-[32ch]">
          <h3 className="text-lg font-semibold">crisgalvis</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Diseño de páginas web con intención. SEO · EXPERIENCIAS.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground opacity-70">Social</span>
            <a href="#" className="text-sm font-medium transition-colors hover:text-primary">Dribbble</a>
            <a href="#" className="text-sm font-medium transition-colors hover:text-primary">Instagram</a>
            <a href="#" className="text-sm font-medium transition-colors hover:text-primary">LinkedIn</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground opacity-70">Contacto</span>
            <a href="mailto:hola@crisgalvis.com" className="text-sm font-medium transition-colors hover:text-primary">Email</a>
            <a href="#" className="text-sm font-medium transition-colors hover:text-primary">WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl items-center justify-between border-t border-border pt-8">
        <p className="text-xs text-muted-foreground">© 2025 crisgalvis. Diseñado con intención.</p>
        <div className="flex gap-2">
          <span className="size-1.5 rounded-full" style={{ background: "var(--apple-blue)" }} />
          <span className="size-1.5 rounded-full" style={{ background: "var(--apple-green)" }} />
          <span className="size-1.5 rounded-full" style={{ background: "var(--apple-purple)" }} />
          <span className="size-1.5 rounded-full" style={{ background: "var(--apple-orange)" }} />
        </div>
      </div>
    </footer>
  );
}
