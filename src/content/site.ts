// Conteúdo editável do site. Atualize preços, horários, avisos e contatos aqui.
// Itens marcados com `confirmar: true` aguardam validação da administração.

export const site = {
  nome: "Parque Aquático Aquas do Cariri",
  nomeCurto: "Aquas do Cariri",
  cidade: "Missão Velha – CE",
  endereco:
    "Baixa do Quaresma, bairro Novo Milênio, às margens da rodovia CE-293, Missão Velha — Ceará",
  whatsappNumero: "5588988762106",
  whatsappExibicao: "+55 (88) 98876-2106",
  mensagemWhatsapp:
    "Olá! Gostaria de informações sobre o Parque Aquático Aquas do Cariri, incluindo horários, ingressos e atrações disponíveis.",
  instagramUser: "parqueaquatico_aquasdocariri",
  aviso:
    "Os horários e as atrações disponíveis podem sofrer alterações. Consulte nossos canais oficiais antes de sua visita.",
};

export const whatsappLink = (msg: string = site.mensagemWhatsapp) =>
  `https://wa.me/${site.whatsappNumero}?text=${encodeURIComponent(msg)}`;
export const instagramLink = `https://www.instagram.com/${site.instagramUser}/`;
export const mapsQuery = "Parque Aquático Aquas do Cariri, CE-293, Missão Velha - CE";
export const mapsRouteLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapsQuery)}`;
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`;

export const destaques = [
  { valor: "16+", rotulo: "piscinas" },
  { valor: "20+", rotulo: "atrações familiares" },
  { valor: "🦖", rotulo: "Vale dos Dinossauros" },
  { valor: "⚓", rotulo: "Navio Encalhado" },
  { valor: "✈️", rotulo: "Avião real na recepção" },
  { valor: "🍖", rotulo: "Restaurante e churrascaria" },
];

export const horarios = [
  {
    dia: "Quinta-feira",
    hora: "7h às 17h",
    detalhe: "Funcionamento informado: somente a área do Navio Encalhado e seu restaurante temático.",
    destaque: false,
  },
  {
    dia: "Sexta a domingo",
    hora: "7h às 17h",
    detalhe: "Funcionamento informado: atrações, piscinas e toboáguas do complexo.",
    destaque: true,
  },
  {
    dia: "Feriados e datas especiais",
    hora: "Consulte",
    detalhe: "Poderão ocorrer aberturas adicionais, dependendo da programação do parque.",
    destaque: false,
  },
];

export const ingressos = [
  { nome: "Acesso básico", preco: "a partir de R$ 22,00", publico: "por adulto" },
  {
    nome: "Acesso completo",
    preco: "aprox. R$ 36,00",
    publico: "por pessoa — parque + Navio Encalhado",
    destaque: true,
  },
  { nome: "Crianças até 4 anos", preco: "Gratuito", publico: "entrada gratuita" },
  { nome: "Crianças de 5 a 11 anos", preco: "aprox. R$ 13,00", publico: "por criança" },
  { nome: "Idosos (60+)", preco: "aprox. R$ 20,00", publico: "por pessoa" },
  { nome: "Grupos e excursões", preco: "Sob consulta", publico: "valores negociados no atendimento" },
];

export const atracoes = [
  {
    id: "piscinas",
    titulo: "Piscinas e aventuras",
    emoji: "🌊",
    descricao: "Um complexo com mais de 16 piscinas e atrações aquáticas para todas as idades.",
    itens: [
      "Complexo com mais de 16 piscinas",
      "Rampas aquáticas",
      "Toboáguas",
      "Half pipes",
      "Baldes malucos",
      "Outras atrações aquáticas disponíveis no parque",
    ],
  },
  {
    id: "dinossauros",
    titulo: "Vale dos Dinossauros",
    emoji: "🦖",
    descricao:
      "Réplicas de dinossauros em meio à natureza — um espaço perfeito para passeios e fotografias em família.",
    itens: ["Réplicas de dinossauros", "Passeio em família", "Cenário para fotos"],
  },
  {
    id: "navio",
    titulo: "Navio Encalhado",
    emoji: "⚓",
    descricao:
      "Navio temático com restaurante e uma piscina que circunda toda a sua estrutura, com cachoeira.",
    itens: [
      "Navio temático",
      "Restaurante temático",
      "Piscina ao redor do navio",
      "Cachoeira",
      "Às quintas-feiras, o funcionamento divulgado é limitado a esta área",
    ],
  },
  {
    id: "estrutura",
    titulo: "Lazer, estrutura e alimentação",
    emoji: "🌴",
    descricao: "Tudo o que você precisa para passar o dia inteiro com conforto.",
    itens: [
      "Avião real na área da recepção",
      "Área verde arborizada",
      "Espaço para descanso e redes",
      "Campo de futebol",
      "Banheiros",
      "Estacionamento",
      "Restaurante self-service",
      "Churrascaria",
    ],
  },
];

// Espaços reservados: substitua por fotos/vídeos oficiais autorizados pela administração.
export const galeria = [
  "Piscinas",
  "Toboáguas",
  "Navio Encalhado",
  "Vale dos Dinossauros",
  "Avião da recepção",
  "Restaurante",
  "Churrascaria",
  "Áreas verdes",
].map((titulo) => ({ titulo, src: null as string | null }));

export const faq = [
  {
    p: "Quais são os dias e horários de funcionamento?",
    r: "Quintas-feiras, das 7h às 17h (somente área do Navio Encalhado), e de sexta a domingo, das 7h às 17h, com o complexo completo. Confirme antes da visita.",
  },
  {
    p: "Todas as atrações funcionam às quintas-feiras?",
    r: "Não. Às quintas-feiras, o funcionamento informado é somente da área do Navio Encalhado e seu restaurante temático.",
  },
  {
    p: "Quanto custam os ingressos?",
    r: "Valores iniciais: acesso básico a partir de R$ 22,00 por adulto e acesso completo aproximadamente R$ 36,00 por pessoa. Os preços estão sujeitos a confirmação pelo WhatsApp.",
  },
  {
    p: "Crianças pagam entrada?",
    r: "Crianças de até 4 anos têm entrada gratuita. De 5 a 11 anos, aproximadamente R$ 13,00. Confirme documentos e condições pelo WhatsApp.",
  },
  {
    p: "É permitida a entrada de alimentos?",
    r: "Sim, conforme as informações recebidas, é permitida a entrada de alimentos para consumo próprio. Confirme restrições sobre bebidas, recipientes e embalagens antes da visita.",
  },
  {
    p: "Posso levar meu animal de estimação?",
    r: "Animais de pequeno porte são permitidos, na guia e sob responsabilidade do tutor, que deve recolher os dejetos. Consulte as áreas permitidas pelo WhatsApp.",
  },
  { p: "O parque tem restaurante?", r: "Sim. Há restaurante self-service, churrascaria e o restaurante temático do Navio Encalhado." },
  { p: "Existe estacionamento?", r: "Sim, o parque possui estacionamento. Consulte condições pelo WhatsApp." },
  {
    p: "Como chegar ao parque?",
    r: "O parque fica na Baixa do Quaresma, bairro Novo Milênio, às margens da CE-293, em Missão Velha — CE, a aproximadamente 5 km do centro. Use o botão “Como chegar” para abrir a rota.",
  },
  {
    p: "Como consultar preços para excursões?",
    r: "Os valores para grupos e excursões são negociados diretamente com o atendimento pelo WhatsApp +55 (88) 98876-2106.",
  },
  {
    p: "Como verificar o funcionamento em feriados?",
    r: "Aberturas em feriados dependem da programação do parque. Consulte nosso WhatsApp ou Instagram antes da visita.",
  },
];
