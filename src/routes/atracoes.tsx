import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { atracoes } from "@/content/site";
import { PageHero, meta } from "@/components/site/Layout";

export const Route = createFileRoute("/atracoes")({
  head: () => meta("Atrações | Aquas do Cariri", "Piscinas, toboáguas, Vale dos Dinossauros, Navio Encalhado com cachoeira, avião real, restaurante e churrascaria no Aquas do Cariri."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Atrações" title="Aventura para todas as idades">Mais de 20 atrações familiares e mais de 16 piscinas em meio à natureza do Cariri.</PageHero>
      <div className="mx-auto mt-10 grid max-w-6xl gap-6 px-4 md:grid-cols-2">
        {atracoes.map((a) => (
          <article key={a.id} id={a.id} className="overflow-hidden rounded-3xl bg-card shadow-soft">
            <div className="grid h-40 place-items-center bg-lagoon text-7xl" aria-hidden>{a.emoji}</div>
            <div className="p-6">
              <h2 className="text-3xl font-extrabold text-deep">{a.titulo}</h2>
              <p className="mt-2 text-muted-foreground">{a.descricao}</p>
              <ul className="mt-4 grid gap-2">
                {a.itens.map((i) => (
                  <li key={i} className="flex gap-2 text-sm font-semibold"><Check className="h-5 w-5 shrink-0 text-tropical" />{i}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
