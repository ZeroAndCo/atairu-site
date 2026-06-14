import { buildCanonicalUrl, DEFAULT_OG_IMAGE_URL, SupportedLanguage } from "@/lib/site";

export type SeoRouteKey = "home" | "team" | "contact" | "notFound";

type LocalizedString = Record<SupportedLanguage, string>;

type RouteSeoConfig = {
  path: string;
  title: LocalizedString;
  description: LocalizedString;
  type?: "website" | "article";
};

const routeSeoConfig: Record<SeoRouteKey, RouteSeoConfig> = {
  home: {
    path: "/",
    title: {
      pt: "Ataîru — A infraestrutura digital do turismo cultural brasileiro",
      en: "Ataîru — The digital infrastructure for Brazilian cultural tourism",
      es: "Ataîru — La infraestructura digital del turismo cultural brasileño",
    },
    description: {
      pt: "Plataforma de turismo cultural e sustentável do Brasil. Conectamos o patrimônio cultural e natural brasileiro ao turismo nacional e internacional.",
      en: "Brazil's cultural and sustainable tourism platform. We connect Brazilian cultural and natural heritage to national and international tourism.",
      es: "Plataforma de turismo cultural y sostenible de Brasil. Conectamos el patrimonio cultural y natural brasileño al turismo nacional e internacional.",
    },
    type: "website",
  },
  team: {
    path: "/team",
    title: {
      pt: "Equipe Ataîru | Especialistas em patrimônio e sustentabilidade",
      en: "Ataîru team | Heritage and sustainability specialists",
      es: "Equipo Ataîru | Especialistas en patrimonio y sostenibilidad",
    },
    description: {
      pt: "Conheça as fundadoras da Ataîru e sua experiência em patrimônio cultural, sustentabilidade e impacto social.",
      en: "Meet Ataîru's founders and their experience in cultural heritage, sustainability, and social impact.",
      es: "Conoce a las fundadoras de Ataîru y su experiencia en patrimonio cultural, sostenibilidad e impacto social.",
    },
  },
  contact: {
    path: "/contact",
    title: {
      pt: "Contato | Fale com a Ataîru",
      en: "Contact | Talk to Ataîru",
      es: "Contacto | Habla con Ataîru",
    },
    description: {
      pt: "Entre em contato com a Ataîru para parcerias, dúvidas e novidades sobre o turismo cultural brasileiro.",
      en: "Contact Ataîru for partnerships, questions, and updates on Brazilian cultural tourism.",
      es: "Ponte en contacto con Ataîru para alianzas, dudas y novedades sobre el turismo cultural brasileño.",
    },
  },
  notFound: {
    path: "/404",
    title: {
      pt: "Página não encontrada | Ataîru",
      en: "Page not found | Ataîru",
      es: "Página no encontrada | Ataîru",
    },
    description: {
      pt: "A página solicitada não foi encontrada.",
      en: "The requested page was not found.",
      es: "La página solicitada no fue encontrada.",
    },
  },
};

export const getSeoMetadata = (routeKey: SeoRouteKey, language: SupportedLanguage) => {
  const config = routeSeoConfig[routeKey];

  return {
    title: config.title[language],
    description: config.description[language],
    path: config.path,
    canonicalUrl: buildCanonicalUrl(config.path),
    imageUrl: DEFAULT_OG_IMAGE_URL,
    type: config.type ?? "website",
  };
};

export const getOrganizationStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ataîru",
  url: buildCanonicalUrl("/"),
  email: "contato@atairu.tur.br",
  logo: DEFAULT_OG_IMAGE_URL,
  sameAs: ["https://www.instagram.com/atairu.tur.br/"],
});

export const getWebsiteStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ataîru",
  url: buildCanonicalUrl("/"),
  inLanguage: ["pt-BR", "en", "es"],
});
