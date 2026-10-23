import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Ticket, Waves, Clock } from "lucide-react";
import { destaques, horarios, mapsRouteLink, site } from "@/content/site";
import { Notice, Wave, WhatsButton, meta } from "@/components/site/Layout";

export const Route = createFileRoute("/")({
  head: () => meta("Parque Aquático Aquas do Cariri | Missão Velha – CE", "Conheça o Aquas do Cariri, em Missão Velha, Ceará. Confira atrações, piscinas, funcionamento, ingressos, localização e informações para sua visita."),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-water text-primary-foreground">
        <div className="pointer-events-none absolute -right-10 top-10 text-[10rem] opacity-20 md:text-[16rem]" aria-hidden>🌴</div>
        <div className="mx-auto max-w-6xl px-4 pb-28 pt-16 md:pt-24">
          <p className="inline-block rounded-full bg-primary-foreground/15 px-4 py-1 text-sm font-bold">📍 {site.cidade}</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-extrabold md:text-7xl">Aquas do Cariri — diversão para toda a família!</h1>
          <p className="mt-5 max-w-xl text-lg opacity-90 md:text-xl">Um dia de aventura, lazer, natureza e momentos inesquecíveis em Missão Velha, Ceará.</p>
          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
            <Link to="/atracoes" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-6 py-3 font-bold text-deep shadow-soft"><Waves className="h-5 w-5" />Conheça nossas atrações</Link>
            <Link to="/ingressos" className="inline-flex items-center justify-center gap-2 rounded-full bg-sun px-6 py-3 font-bold text-deep shadow-soft"><Ticket className="h-5 w-5" />Consulte ingressos e horários</Link>
            <WhatsButton>Fale pelo WhatsApp</WhatsButton>
            <a href={mapsRouteLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground px-6 py-3 font-bold"><MapPin className="h-5 w-5" />Como chegar</a>
          </div>
        </div>
        <Wave />
      </section>

      <section className="relative z-10 mx-auto -mt-10 max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {destaques.map((d) => (
            <div key={d.rotulo} className="rounded-3xl bg-card p-5 text-center shadow-soft">
              <p className="font-display text-4xl font-extrabold text-primary">{d.valor}</p>
              <p className="mt-1 text-sm font-bold text-deep">{d.rotulo}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-4">
        <h2 className="text-4xl font-extrabold text-deep">Quando visitar</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {horarios.map((h) => (
            <div key={h.dia} className={`rounded-3xl p-6 ${h.destaque ? "bg-lagoon text-primary-foreground" : "bg-secondary"}`}>
              <p className="flex items-center gap-2 font-display text-xl font-bold"><Clock className="h-5 w-5" />{h.dia}</p>
              <p className="mt-2 font-display text-3xl font-extrabold">{h.hora}</p>
              <p className="mt-2 text-sm opacity-90">{h.detalhe}</p>
            </div>
          ))}
        </div>
        <Notice className="mt-5" />
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-4">
        <div className="grid items-center gap-8 rounded-[2rem] bg-deep p-8 text-deep-foreground md:grid-cols-2 md:p-12">
          <div>
            <h2 className="text-4xl font-extrabold">Vem em grupo ou excursão?</h2>
            <p className="mt-3 opacity-85">Valores para grupos e excursões são negociados diretamente com nosso atendimento.</p>
          </div>
          <div className="md:text-right"><WhatsButton msg="Olá! Gostaria de consultar valores para grupo/excursão no Aquas do Cariri.">Negociar pelo WhatsApp</WhatsButton></div>
        </div>
      </section>
    </>
  );
}
