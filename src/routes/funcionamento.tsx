import { createFileRoute } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { horarios } from "@/content/site";
import { Notice, PageHero, WhatsButton, meta } from "@/components/site/Layout";

export const Route = createFileRoute("/funcionamento")({
  head: () => meta("Horários de funcionamento | Aquas do Cariri", "Dias e horários do Aquas do Cariri: quintas no Navio Encalhado, sexta a domingo com o complexo completo e feriados."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Funcionamento" title="Dias e horários" />
      <div className="mx-auto mt-10 max-w-4xl px-4">
        <Notice />
        <div className="mt-6 grid gap-4">
          {horarios.map((h) => (
            <div key={h.dia} className={`flex flex-col gap-2 rounded-3xl p-6 md:flex-row md:items-center md:justify-between ${h.destaque ? "bg-lagoon text-primary-foreground" : "bg-secondary"}`}>
              <div>
                <p className="font-display text-2xl font-bold">{h.dia}</p>
                <p className="mt-1 max-w-lg text-sm opacity-90">{h.detalhe}</p>
              </div>
              <p className="flex items-center gap-2 font-display text-3xl font-extrabold"><Clock />{h.hora}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center"><WhatsButton msg="Olá! O Aquas do Cariri vai abrir no próximo feriado? Quais áreas estarão funcionando?">Confirmar funcionamento</WhatsButton></div>
      </div>
    </>
  );
}
