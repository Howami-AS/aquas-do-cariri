import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faq } from "@/content/site";
import { PageHero, WhatsButton, meta } from "@/components/site/Layout";

export const Route = createFileRoute("/faq")({
  head: () => meta("Perguntas frequentes | Aquas do Cariri", "Tire dúvidas sobre horários, ingressos, crianças, alimentos, animais, restaurante, estacionamento e excursões no Aquas do Cariri."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Perguntas frequentes" />
      <div className="mx-auto mt-10 max-w-3xl px-4">
        <Accordion type="single" collapsible className="rounded-3xl bg-card p-2 shadow-soft">
          {faq.map((f, i) => (
            <AccordionItem key={f.p} value={`q${i}`} className="px-4">
              <AccordionTrigger className="text-left font-display text-lg font-bold text-deep">{f.p}</AccordionTrigger>
              <AccordionContent className="text-base">{f.r}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-8 text-center"><WhatsButton>Ainda com dúvidas? Fale conosco</WhatsButton></div>
      </div>
    </>
  );
}
