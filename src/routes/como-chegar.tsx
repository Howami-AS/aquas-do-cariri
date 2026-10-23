import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Navigation } from "lucide-react";
import { mapsEmbed, mapsRouteLink, site } from "@/content/site";
import { PageHero, meta } from "@/components/site/Layout";

export const Route = createFileRoute("/como-chegar")({
  head: () => meta("Como chegar | Aquas do Cariri", "Localização do Aquas do Cariri na Baixa do Quaresma, às margens da CE-293, em Missão Velha – CE. Abra a rota no seu app de mapas."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Localização" title="Como chegar">No coração da região do Cariri, em Missão Velha — Ceará.</PageHero>
      <div className="mx-auto mt-10 grid max-w-6xl gap-6 px-4 md:grid-cols-5">
        <div className="rounded-3xl bg-card p-6 shadow-soft md:col-span-2">
          <p className="flex gap-2 font-semibold"><MapPin className="h-5 w-5 shrink-0 text-primary" />{site.endereco}</p>
          <ul className="mt-5 grid gap-2 text-sm text-muted-foreground">
            <li>• Aproximadamente 5 km do centro de Missão Velha.</li>
            <li>• Cerca de 15 minutos de carro do Aeroporto de Juazeiro do Norte (informação recebida, sujeita a verificação).</li>
          </ul>
          <a href={mapsRouteLink} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground"><Navigation className="h-5 w-5" />Como chegar</a>
        </div>
        <iframe title="Mapa do Aquas do Cariri" src={mapsEmbed} loading="lazy" className="h-96 w-full rounded-3xl border-0 shadow-soft md:col-span-3" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </>
  );
}
