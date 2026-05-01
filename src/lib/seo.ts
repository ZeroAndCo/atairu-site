import { heritages } from "@/data/heritages";
import { buildCanonicalUrl, DEFAULT_OG_IMAGE_URL, SupportedLanguage } from "@/lib/site";

export type SeoRouteKey =
  | "home"
  | "about"
  | "heritage"
  | "map"
  | "team"
  | "contact"
  | "notFound";

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
      pt: "Ataîru - Seu Companheiro de Viagem ao Coração do Brasil",
      en: "Ataîru - Your Travel Companion to the Heart of Brazil",
      es: "Ataîru - Tu Compañero de Viaje al Corazón de Brasil",
    },
    description: {
      pt: "Seu companheiro de viagem para descobrir o Brasil autêntico",
      en: "Your travel companion to discover authentic Brazil",
      es: "Tu compañero de viaje para descubrir el Brasil auténtico",
    },
    type: "website",
  },
  about: {
    path: "/about",
    title: {
      pt: "Sobre a Ataîru | Missão e visão",
      en: "About Ataîru | Mission and vision",
      es: "Sobre Ataîru | Misión y visión",
    },
    description: {
      pt: "Conheça a proposta da Ataîru para valorizar os patrimônios brasileiros e ampliar o acesso a experiências culturais responsáveis.",
      en: "Learn how Ataîru highlights Brazilian heritage and broadens access to responsible cultural experiences.",
      es: "Conoce la propuesta de Ataîru para valorar el patrimonio brasileño y ampliar el acceso a experiencias culturales responsables.",
    },
  },
  heritage: {
    path: "/heritage",
    title: {
      pt: "Patrimônios do Brasil | Coleção Ataîru",
      en: "Brazilian Heritage | Ataîru collection",
      es: "Patrimonios de Brasil | Colección Ataîru",
    },
    description: {
      pt: "Navegue por patrimônios mundiais, materiais, imateriais e naturais do Brasil com filtros por categoria e região.",
      en: "Browse Brazil's world, material, intangible, and natural heritage with category and region filters.",
      es: "Explora los patrimonios mundiales, materiales, inmateriales y naturales de Brasil con filtros por categoría y región.",
    },
  },
  map: {
    path: "/map",
    title: {
      pt: "Mapa interativo | Patrimônios do Brasil",
      en: "Interactive map | Brazilian heritage",
      es: "Mapa interactivo | Patrimonios de Brasil",
    },
    description: {
      pt: "Visualize patrimônios brasileiros no mapa, aplique filtros por região, estado e categoria e descubra novos destinos.",
      en: "View Brazilian heritage on an interactive map, filter by region, state, and category, and discover new destinations.",
      es: "Visualiza el patrimonio brasileño en el mapa, filtra por región, estado y categoría y descubre nuevos destinos.",
    },
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
      pt: "Entre em contato com a Ataîru para parcerias, dúvidas e novidades sobre patrimônios e roteiros culturais do Brasil.",
      en: "Contact Ataîru for partnerships, questions, and updates on Brazilian heritage and cultural itineraries.",
      es: "Ponte en contacto con Ataîru para alianzas, dudas y novedades sobre patrimonio y rutas culturales de Brasil.",
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
      pt: "A página solicitada não foi encontrada. Continue explorando os patrimônios brasileiros com a Ataîru.",
      en: "The requested page was not found. Keep exploring Brazilian heritage with Ataîru.",
      es: "La página solicitada no fue encontrada. Sigue explorando el patrimonio brasileño con Ataîru.",
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

export const getHeritageCollectionStructuredData = (language: SupportedLanguage) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: routeSeoConfig.heritage.title[language],
  description: routeSeoConfig.heritage.description[language],
  url: buildCanonicalUrl("/heritage"),
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: heritages.length,
    itemListElement: heritages.slice(0, 10).map((heritage, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: heritage.name[language],
    })),
  },
});

export const getMapStructuredData = (language: SupportedLanguage) => ({
  "@context": "https://schema.org",
  "@type": "Map",
  name: routeSeoConfig.map.title[language],
  description: routeSeoConfig.map.description[language],
  url: buildCanonicalUrl("/map"),
});
