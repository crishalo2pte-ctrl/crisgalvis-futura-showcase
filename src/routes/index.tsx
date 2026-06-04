import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Detail } from "@/components/Detail";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BgBlobs } from "@/components/BgBlobs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "crisgalvis — Diseño de páginas web futuristas" },
      { name: "description", content: "crisgalvis — Diseño web profesional: páginas que impresionan. Portafolio de diseño premium con estética iPhone, animaciones futuristas y gamut de máxima calidad." },
      { property: "og:title", content: "crisgalvis — Diseño de páginas web futuristas" },
      { property: "og:description", content: "Páginas web que se sienten vivas. Diseño premium inspirado en Apple para marcas que buscan destacar." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <BgBlobs />
      <Nav />
      <Hero />
      <Portfolio />
      <Detail />
      <Process />
      <Testimonials />
      <Cta />
      <Footer />
      <ThemeToggle />
    </main>
  );
}
