import { createFileRoute } from "@tanstack/react-router";
import { PageHero, WhatsButton, meta } from "@/components/site/Layout";

export const Route = createFileRoute("/regras")({
  head: () => meta("Regras do Parque | Aquas do Cariri", "Orientações aos visitantes do Aquas do Cariri: alimentos e bebidas, entrada de animais e segurança nas atrações."),
  component: Page,
});

const regras = [
  { emoji: "🍱", titulo: "Alimentos e bebidas", textos: ["É permitida a entrada de alimentos para consumo próprio.", "Confirme antes da visita eventuais restrições sobre bebidas, recipientes, embalagens e outros itens."] },
  { emoji: "🐶", titulo: "Animais de estimação", textos: ["Animais de pequeno porte são permitidos, desde que permaneçam na guia e sob responsabilidade do tutor.", "O tutor deve recolher e descartar adequadamente os dejetos.", "Consulte as áreas permitidas (piscinas, restaurante e demais espaços) pelo WhatsApp."] },
  { emoji: "🛟", titulo: "Segurança nas atrações", textos: ["Respeite sempre as instruções da equipe do parque.", "Observe a sinalização de cada atração antes de utilizá-la.", "Orientações oficiais de segurança (altura, idade e peso) serão divulgadas pela administração."] },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Orientações" title="Regras do Parque">Para um dia seguro e divertido para todos.</PageHero>
      <div className="mx-auto mt-10 grid max-w-6xl gap-5 px-4 md:grid-cols-3">
        {regras.map((r) => (
          <section key={r.titulo} className="rounded-3xl bg-card p-6 shadow-soft">
            <p className="text-5xl" aria-hidden>{r.emoji}</p>
            <h2 className="mt-3 text-2xl font-extrabold text-deep">{r.titulo}</h2>
            <ul className="mt-3 grid list-disc gap-2 pl-5 text-sm">{r.textos.map((t) => <li key={t}>{t}</li>)}</ul>
          </section>
        ))}
      </div>
      <div className="mt-10 text-center"><WhatsButton msg="Olá! Tenho uma dúvida sobre as regras do Aquas do Cariri.">Tirar dúvidas sobre regras</WhatsButton></div>
    </>
  );
}
