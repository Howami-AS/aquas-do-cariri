import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Camera, PlayCircle, Instagram } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { galeria, instagramLink, site } from "@/content/site";
import { PageHero, meta } from "@/components/site/Layout";

export const Route = createFileRoute("/galeria")({
  head: () => meta("Galeria de fotos e vídeos | Aquas do Cariri", "Fotos e vídeos das piscinas, toboáguas, Navio Encalhado, Vale dos Dinossauros e áreas verdes do Aquas do Cariri."),
  component: Page,
});

function Page() {
  const [aberto, setAberto] = useState<number | null>(null);
  const item = aberto !== null ? galeria[aberto] : null;
  return (
    <>
      <PageHero eyebrow="Galeria" title="Fotos e vídeos">As fotos oficiais do parque serão publicadas aqui em breve. Enquanto isso, acompanhe nosso Instagram.</PageHero>
      <div className="mx-auto mt-10 max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {galeria.map((g, i) => (
            <button key={g.titulo} onClick={() => setAberto(i)} className="group relative aspect-square overflow-hidden rounded-3xl bg-lagoon text-left focus-visible:ring-4 focus-visible:ring-ring">
              {g.src ? <img src={g.src} alt={g.titulo} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" /> : (
                <div className="grid h-full place-items-center text-primary-foreground"><Camera className="h-10 w-10 opacity-70" /></div>
              )}
              <span className="absolute bottom-0 left-0 right-0 bg-deep/70 p-2 text-sm font-bold text-deep-foreground">{g.titulo}{!g.src && " · foto em breve"}</span>
            </button>
          ))}
        </div>

        <h2 className="mt-14 text-3xl font-extrabold text-deep">Vídeos</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {["Vídeo de apresentação do parque", "Novidades e atrações"].map((v) => (
            <div key={v} className="grid aspect-video place-items-center rounded-3xl bg-water text-center text-primary-foreground">
              <div><PlayCircle className="mx-auto h-14 w-14 opacity-80" /><p className="mt-2 font-bold">{v}</p><p className="text-sm opacity-80">Vídeo oficial em breve</p></div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-deep px-6 py-3 font-bold text-deep-foreground"><Instagram className="h-5 w-5" />Seguir @{site.instagramUser}</a>
        </div>
      </div>

      <Dialog open={aberto !== null} onOpenChange={(o) => !o && setAberto(null)}>
        <DialogContent className="max-w-3xl">
          <DialogTitle>{item?.titulo}</DialogTitle>
          {item?.src ? <img src={item.src} alt={item.titulo} className="w-full rounded-2xl" /> : (
            <div className="grid aspect-video place-items-center rounded-2xl bg-lagoon text-primary-foreground"><div className="text-center"><Camera className="mx-auto h-12 w-12" /><p className="mt-2 font-bold">Foto oficial em breve</p></div></div>
          )}
          <div className="flex justify-between">
            <button className="font-bold text-primary" onClick={() => setAberto((aberto! - 1 + galeria.length) % galeria.length)}>← Anterior</button>
            <button className="font-bold text-primary" onClick={() => setAberto((aberto! + 1) % galeria.length)}>Próxima →</button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
