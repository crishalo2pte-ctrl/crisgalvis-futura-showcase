import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefers = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(stored ? stored === "dark" : prefers);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    if (typeof window !== "undefined") localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      aria-label="Cambiar tema"
      onClick={() => setDark((v) => !v)}
      className="glass-surface fixed bottom-6 right-6 z-[60] flex items-center gap-2 rounded-full p-1.5 pl-3 shadow-[0_12px_40px_oklch(0_0_0/0.12)] transition-transform active:scale-95"
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {dark ? "Dark" : "Light"}
      </span>
      <div className="relative flex h-7 w-12 items-center rounded-full bg-muted px-1">
        <div
          className="flex size-5 items-center justify-center rounded-full bg-background shadow-md transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          style={{ transform: dark ? "translateX(20px)" : "translateX(0)" }}
        >
          {dark ? <Moon className="size-3 text-primary" /> : <Sun className="size-3 text-primary" />}
        </div>
      </div>
    </button>
  );
}
