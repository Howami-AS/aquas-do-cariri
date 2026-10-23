import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MapPin, MessageCircle, Users, Share2 } from "lucide-react";
import { instagramLink, mapsRouteLink, site, whatsappLink } from "@/content/site";
import { PageHero, meta } from "@/components/site/Layout";

export const Route = createFileRoute("/contato")({
  head: () => meta("Contato | Aquas do Cariri", "Fale com o Aquas do Cariri pelo WhatsApp +55 (88) 98876-2106, siga no Instagram e consulte valores para grupos e excursões."),
  component: Page,
});

function Page() {
  const share = () => {
    const url = window.location.origin;
    if (navigator.share) navigator.share({ title: site.nome, url }).catch(() => {});
    else navigator.clipboard.writeText(url);
  };
  const cards = [
    { icon: MessageCircle, titulo: "WhatsApp", texto: site.whatsappExibicao, href: whatsappLink(), cta: "Enviar mensagem" },
    { icon: Users, titulo: "Grupos e excursões", texto: "Valores negociados diretamente", href: whatsappLink("Olá! Gostaria de consultar valores para grupo/excursão no Aquas do Cariri."), cta: "Consultar grupo" },
    { icon: Instagram, titulo: "Instagram", texto: `@${site.instagramUser}`, href: instagramLink, cta: "Seguir no Instagram" },
    { icon: MapPin, titulo: "Endereço", texto: site.endereco, href: mapsRouteLink, cta: "Abrir rota" },
  ];
  return (
    <>
      <PageHero eyebrow="Contato" title="Fale com a gente">Atendimento pelo WhatsApp e novidades no Instagram.</PageHero>
      <div className="mx-auto mt-10 grid max-w-6xl gap-5 px-4 sm:grid-cols-2">
        {cards.map((c) => (
          <a key={c.titulo} href={c.href} target="_blank" rel="noopener noreferrer" className="rounded-3xl bg-card p-6 shadow-soft transition hover:-translate-y-1">
            <c.icon className="h-8 w-8 text-primary" />
            <p className="mt-3 font-display text-2xl font-bold text-deep">{c.titulo}</p>
            <p className="mt-1 text-muted-foreground">{c.texto}</p>
            <p className="mt-4 font-bold text-tropical">{c.cta} →</p>
          </a>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button onClick={share} className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 font-bold text-primary"><Share2 className="h-5 w-5" />Compartilhar o site</button>
      </div>
    </>
  );
}
