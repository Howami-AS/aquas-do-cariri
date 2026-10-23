import { createFileRoute } from "@tanstack/react-router";
import { ingressos } from "@/content/site";
import { PageHero, WhatsButton, meta } from "@/components/site/Layout";

export const Route = createFileRoute("/ingressos")({
  head: () => meta("Ingressos e preços | Aquas do Cariri", "Valores de ingressos do Aquas do Cariri: acesso básico, completo, crianças, idosos e grupos. Consulte condições pelo WhatsApp."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Ingressos" title="Tarifas e valores">Valores iniciais informados, sujeitos a confirmação. A compra é feita diretamente no parque.</PageHero>
      <div className="mx-auto mt-10 max-w-6xl px-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ingressos.map((i) => (
            <div key={i.nome} className={`rounded-3xl p-6 shadow-soft ${i.destaque ? "bg-water text-primary-foreground" : "bg-card"}`}>
              {i.destaque && <span className="rounded-full bg-sun px-3 py-1 text-xs font-bold text-deep">Mais completo</span>}
              <p className="mt-2 font-display text-xl font-bold">{i.nome}</p>
              <p className={`mt-1 font-display text-4xl font-extrabold ${i.destaque ? "" : "text-primary"}`}>{i.preco}</p>
              <p className="mt-1 text-sm opacity-80">{i.publico}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 rounded-2xl bg-muted p-4 text-sm text-muted-foreground">
          * Valores sujeitos a confirmação. Faixas etárias, documentos exigidos, regras de meia-entrada, itens incluídos e eventuais taxas devem ser confirmados com o atendimento.
        </p>
        <div className="mt-8 text-center"><WhatsButton msg="Olá! Gostaria de consultar preços e condições dos ingressos do Aquas do Cariri.">Consultar preços e condições pelo WhatsApp</WhatsButton></div>
      </div>
    </>
  );
}
