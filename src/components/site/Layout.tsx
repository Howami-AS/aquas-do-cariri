import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, MessageCircle, Instagram, MapPin, AlertTriangle } from "lucide-react";
import { site, whatsappLink, instagramLink, mapsRouteLink } from "@/content/site";

const nav = [
  { to: "/atracoes", label: "Atrações" },
  { to: "/funcionamento", label: "Funcionamento" },
  { to: "/ingressos", label: "Ingressos" },
  { to: "/regras", label: "Regras" },
  { to: "/galeria", label: "Galeria" },
  { to: "/como-chegar", label: "Como chegar" },
  { to: "/faq", label: "FAQ" },
  { to: "/contato", label: "Contato" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 font-display text-xl font-extrabold text-deep">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-water text-lg text-primary-foreground">🌊</span>
      <span className="leading-none">
        Aquas<span className="block text-xs font-bold tracking-widest text-tropical">DO CARIRI</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Logo />
        <nav className="hidden gap-1 lg:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 hover:bg-secondary" activeProps={{ className: "bg-secondary text-primary" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="rounded-full p-2 lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="grid gap-1 border-t px-4 py-3 lg:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 font-semibold hover:bg-secondary">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Notice({ className = "" }: { className?: string }) {
  return (
    <p className={`flex items-start gap-2 rounded-2xl border border-sun bg-sun/15 p-4 text-sm font-semibold text-deep ${className}`}>
      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" /> {site.aviso}
    </p>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 bg-deep text-deep-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl font-extrabold">{site.nome}</p>
          <p className="mt-3 flex gap-2 text-sm opacity-80"><MapPin className="h-4 w-4 shrink-0" />{site.endereco}</p>
          <p className="mt-4 text-xs opacity-70">Preços, horários e programação podem mudar sem aviso prévio. Confirme pelos canais oficiais.</p>
        </div>
        <div>
          <p className="font-display text-lg font-bold">Navegue</p>
          <ul className="mt-3 grid gap-2 text-sm opacity-85">
            {nav.map((n) => <li key={n.to}><Link to={n.to} className="hover:underline">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="font-display text-lg font-bold">Fale conosco</p>
          <ul className="mt-3 grid gap-3 text-sm">
            <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline"><MessageCircle className="h-4 w-4" />{site.whatsappExibicao}</a></li>
            <li><a href={instagramLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline"><Instagram className="h-4 w-4" />@{site.instagramUser}</a></li>
            <li><a href={mapsRouteLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline"><MapPin className="h-4 w-4" />Abrir rota</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-deep-foreground/15 py-5 text-center text-xs opacity-70">
        © {new Date().getFullYear()} {site.nome}. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Fale pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-soft transition hover:scale-105">
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-water text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-14">
        <p className="text-sm font-bold uppercase tracking-widest opacity-85">{eyebrow}</p>
        <h1 className="mt-2 text-4xl font-extrabold md:text-6xl">{title}</h1>
        {children && <div className="mt-4 max-w-2xl text-lg opacity-90">{children}</div>}
      </div>
      <Wave />
    </section>
  );
}

export function Wave() {
  return (
    <svg className="absolute bottom-0 left-0 w-full text-background" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden>
      <path fill="currentColor" d="M0,40 C240,90 480,0 720,30 C960,60 1200,10 1440,40 L1440,80 L0,80 Z" />
    </svg>
  );
}

export function WhatsButton({ children, msg }: { children: ReactNode; msg?: string }) {
  return (
    <a href={whatsappLink(msg)} target="_blank" rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-bold text-primary-foreground shadow-soft transition hover:brightness-110">
      <MessageCircle className="h-5 w-5" />{children}
    </a>
  );
}

export const meta = (title: string, description: string) => ({
  meta: [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
