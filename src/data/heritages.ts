export type HeritageCategory = 'world' | 'material' | 'intangible' | 'natural';
export type Region = 'sul' | 'sudeste' | 'nordeste' | 'centro-oeste' | 'norte';

export interface Heritage {
  id: string;
  name: {
    pt: string;
    en: string;
    es: string;
  };
  category: HeritageCategory;
  region: Region;
  state: string;
  city: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  description: {
    pt: string;
    en: string;
    es: string;
  };
  unesco: boolean;
  imageUrl?: string;
}

export const heritages: Heritage[] = [
  // REGIÃO SUL - Rio Grande do Sul
  {
    id: 'missoes-jesuiticas',
    name: {
      pt: 'Missões Jesuíticas Guaranis',
      en: 'Jesuit Missions of the Guaranis',
      es: 'Misiones Jesuíticas Guaraníes'
    },
    category: 'world',
    region: 'sul',
    state: 'Rio Grande do Sul',
    city: 'São Miguel das Missões',
    coordinates: { lat: -28.5558, lng: -54.5612 },
    description: {
      pt: 'Ruínas e sítio arqueológico das missões jesuíticas, Patrimônio Mundial da UNESCO.',
      en: 'Ruins and archaeological site of the Jesuit missions, UNESCO World Heritage.',
      es: 'Ruinas y sitio arqueológico de las misiones jesuíticas, Patrimonio Mundial de la UNESCO.'
    },
    unesco: true
  },
  {
    id: 'parque-aparados-serra',
    name: {
      pt: 'Parque Nacional Aparados da Serra',
      en: 'Aparados da Serra National Park',
      es: 'Parque Nacional Aparados da Serra'
    },
    category: 'natural',
    region: 'sul',
    state: 'Rio Grande do Sul',
    city: 'Cambará do Sul',
    coordinates: { lat: -29.1833, lng: -50.1000 },
    description: {
      pt: 'Faz parte do Geoparque Mundial da UNESCO - Caminho dos Cânions.',
      en: 'Part of the UNESCO Global Geopark - Path of the Canyons.',
      es: 'Parte del Geoparque Mundial de la UNESCO - Camino de los Cañones.'
    },
    unesco: true
  },
  {
    id: 'pelotas-doceira',
    name: {
      pt: 'Região Doceira de Pelotas',
      en: 'Pelotas Confectionery Region',
      es: 'Región Dulcera de Pelotas'
    },
    category: 'intangible',
    region: 'sul',
    state: 'Rio Grande do Sul',
    city: 'Pelotas',
    coordinates: { lat: -31.7654, lng: -52.3376 },
    description: {
      pt: 'Tradição doceira reconhecida como patrimônio imaterial brasileiro.',
      en: 'Confectionery tradition recognized as Brazilian intangible heritage.',
      es: 'Tradición dulcera reconocida como patrimonio inmaterial brasileño.'
    },
    unesco: false
  },
  {
    id: 'centro-historico-pelotas',
    name: {
      pt: 'Centro Histórico de Pelotas',
      en: 'Historic Center of Pelotas',
      es: 'Centro Histórico de Pelotas'
    },
    category: 'material',
    region: 'sul',
    state: 'Rio Grande do Sul',
    city: 'Pelotas',
    coordinates: { lat: -31.7719, lng: -52.3425 },
    description: {
      pt: 'Conjunto arquitetônico com casarões do período charqueador.',
      en: 'Architectural ensemble with mansions from the charque period.',
      es: 'Conjunto arquitectónico con casonas del período charqueador.'
    },
    unesco: false
  },
  // Santa Catarina
  {
    id: 'florianopolis-ponte-hercilio',
    name: {
      pt: 'Ponte Hercílio Luz',
      en: 'Hercílio Luz Bridge',
      es: 'Puente Hercílio Luz'
    },
    category: 'material',
    region: 'sul',
    state: 'Santa Catarina',
    city: 'Florianópolis',
    coordinates: { lat: -27.5965, lng: -48.5629 },
    description: {
      pt: 'Maior ponte pênsil do Brasil e cartão-postal de Florianópolis.',
      en: 'Largest suspension bridge in Brazil and Florianópolis postcard.',
      es: 'El puente colgante más grande de Brasil y postal de Florianópolis.'
    },
    unesco: false
  },
  {
    id: 'boi-de-mamao',
    name: {
      pt: 'Boi de Mamão',
      en: 'Boi de Mamão',
      es: 'Boi de Mamão'
    },
    category: 'intangible',
    region: 'sul',
    state: 'Santa Catarina',
    city: 'Florianópolis',
    coordinates: { lat: -27.5954, lng: -48.5480 },
    description: {
      pt: 'Folguedo tradicional catarinense com influências açorianas.',
      en: 'Traditional Santa Catarina folk celebration with Azorean influences.',
      es: 'Fiesta tradicional catarinense con influencias azorianas.'
    },
    unesco: false
  },
  // Paraná
  {
    id: 'parque-iguacu',
    name: {
      pt: 'Parque Nacional do Iguaçu',
      en: 'Iguaçu National Park',
      es: 'Parque Nacional del Iguazú'
    },
    category: 'world',
    region: 'sul',
    state: 'Paraná',
    city: 'Foz do Iguaçu',
    coordinates: { lat: -25.6953, lng: -54.4367 },
    description: {
      pt: 'Cataratas do Iguaçu, uma das Sete Novas Maravilhas da Natureza.',
      en: 'Iguazu Falls, one of the New Seven Wonders of Nature.',
      es: 'Cataratas del Iguazú, una de las Siete Nuevas Maravillas de la Naturaleza.'
    },
    unesco: true
  },
  {
    id: 'fandango-caicara',
    name: {
      pt: 'Fandango Caiçara',
      en: 'Caiçara Fandango',
      es: 'Fandango Caiçara'
    },
    category: 'intangible',
    region: 'sul',
    state: 'Paraná',
    city: 'Paranaguá',
    coordinates: { lat: -25.5205, lng: -48.5095 },
    description: {
      pt: 'Expressão musical e coreográfica do litoral paranaense.',
      en: 'Musical and choreographic expression of the Paraná coast.',
      es: 'Expresión musical y coreográfica del litoral paranaense.'
    },
    unesco: false
  },

  // REGIÃO SUDESTE - São Paulo
  {
    id: 'masp',
    name: {
      pt: 'Museu de Arte de São Paulo (MASP)',
      en: 'São Paulo Museum of Art (MASP)',
      es: 'Museo de Arte de São Paulo (MASP)'
    },
    category: 'material',
    region: 'sudeste',
    state: 'São Paulo',
    city: 'São Paulo',
    coordinates: { lat: -23.5614, lng: -46.6558 },
    description: {
      pt: 'Principal museu de arte do Brasil com acervo de relevância internacional.',
      en: 'Brazil\'s main art museum with internationally significant collection.',
      es: 'Principal museo de arte de Brasil con acervo de relevancia internacional.'
    },
    unesco: false
  },
  {
    id: 'serra-bocaina',
    name: {
      pt: 'Parque Nacional da Serra da Bocaina',
      en: 'Serra da Bocaina National Park',
      es: 'Parque Nacional de la Sierra de Bocaina'
    },
    category: 'natural',
    region: 'sudeste',
    state: 'São Paulo',
    city: 'São José do Barreiro',
    coordinates: { lat: -22.7500, lng: -44.6167 },
    description: {
      pt: 'Mata Atlântica preservada entre São Paulo e Rio de Janeiro.',
      en: 'Preserved Atlantic Forest between São Paulo and Rio de Janeiro.',
      es: 'Mata Atlántica preservada entre São Paulo y Río de Janeiro.'
    },
    unesco: false
  },
  // Rio de Janeiro
  {
    id: 'rio-paisagem-cultural',
    name: {
      pt: 'Rio de Janeiro: Paisagem Carioca',
      en: 'Rio de Janeiro: Carioca Landscapes',
      es: 'Río de Janeiro: Paisajes Cariocas'
    },
    category: 'world',
    region: 'sudeste',
    state: 'Rio de Janeiro',
    city: 'Rio de Janeiro',
    coordinates: { lat: -22.9068, lng: -43.1729 },
    description: {
      pt: 'Paisagem cultural entre o mar e a montanha, Patrimônio Mundial.',
      en: 'Cultural landscape between the sea and mountains, World Heritage.',
      es: 'Paisaje cultural entre el mar y la montaña, Patrimonio Mundial.'
    },
    unesco: true
  },
  {
    id: 'cais-valongo',
    name: {
      pt: 'Cais do Valongo',
      en: 'Valongo Wharf',
      es: 'Muelle de Valongo'
    },
    category: 'world',
    region: 'sudeste',
    state: 'Rio de Janeiro',
    city: 'Rio de Janeiro',
    coordinates: { lat: -22.8967, lng: -43.1867 },
    description: {
      pt: 'Sítio arqueológico do antigo cais de desembarque de africanos escravizados.',
      en: 'Archaeological site of the former landing wharf for enslaved Africans.',
      es: 'Sitio arqueológico del antiguo muelle de desembarco de africanos esclavizados.'
    },
    unesco: true
  },
  {
    id: 'samba-carioca',
    name: {
      pt: 'Samba Carioca',
      en: 'Rio Samba',
      es: 'Samba Carioca'
    },
    category: 'intangible',
    region: 'sudeste',
    state: 'Rio de Janeiro',
    city: 'Rio de Janeiro',
    coordinates: { lat: -22.9035, lng: -43.2096 },
    description: {
      pt: 'Gênero musical e cultural símbolo da identidade brasileira.',
      en: 'Musical and cultural genre symbol of Brazilian identity.',
      es: 'Género musical y cultural símbolo de la identidad brasileña.'
    },
    unesco: false
  },
  // Minas Gerais
  {
    id: 'ouro-preto',
    name: {
      pt: 'Ouro Preto',
      en: 'Ouro Preto',
      es: 'Ouro Preto'
    },
    category: 'world',
    region: 'sudeste',
    state: 'Minas Gerais',
    city: 'Ouro Preto',
    coordinates: { lat: -20.3856, lng: -43.5035 },
    description: {
      pt: 'Cidade histórica do ciclo do ouro, Patrimônio Mundial.',
      en: 'Historic city from the gold cycle, World Heritage.',
      es: 'Ciudad histórica del ciclo del oro, Patrimonio Mundial.'
    },
    unesco: true
  },
  {
    id: 'pampulha',
    name: {
      pt: 'Conjunto Moderno da Pampulha',
      en: 'Pampulha Modern Ensemble',
      es: 'Conjunto Moderno de Pampulha'
    },
    category: 'world',
    region: 'sudeste',
    state: 'Minas Gerais',
    city: 'Belo Horizonte',
    coordinates: { lat: -19.8533, lng: -43.9700 },
    description: {
      pt: 'Obras de Oscar Niemeyer e jardins de Burle Marx.',
      en: 'Works by Oscar Niemeyer and gardens by Burle Marx.',
      es: 'Obras de Oscar Niemeyer y jardines de Burle Marx.'
    },
    unesco: true
  },
  {
    id: 'queijo-canastra',
    name: {
      pt: 'Modo de Fazer Queijo de Minas',
      en: 'Minas Cheese Making',
      es: 'Modo de Hacer Queso de Minas'
    },
    category: 'intangible',
    region: 'sudeste',
    state: 'Minas Gerais',
    city: 'São Roque de Minas',
    coordinates: { lat: -20.2500, lng: -46.3667 },
    description: {
      pt: 'Tradição queijeira das regiões do Serro, Canastra e Salitre.',
      en: 'Cheese-making tradition from the Serro, Canastra, and Salitre regions.',
      es: 'Tradición quesera de las regiones del Serro, Canastra y Salitre.'
    },
    unesco: false
  },

  // REGIÃO NORDESTE - Bahia
  {
    id: 'salvador-centro-historico',
    name: {
      pt: 'Centro Histórico de Salvador',
      en: 'Historic Center of Salvador',
      es: 'Centro Histórico de Salvador'
    },
    category: 'world',
    region: 'nordeste',
    state: 'Bahia',
    city: 'Salvador',
    coordinates: { lat: -12.9714, lng: -38.5014 },
    description: {
      pt: 'Pelourinho, conjunto arquitetônico colonial, Patrimônio Mundial.',
      en: 'Pelourinho, colonial architectural ensemble, World Heritage.',
      es: 'Pelourinho, conjunto arquitectónico colonial, Patrimonio Mundial.'
    },
    unesco: true
  },
  {
    id: 'capoeira',
    name: {
      pt: 'Capoeira',
      en: 'Capoeira',
      es: 'Capoeira'
    },
    category: 'intangible',
    region: 'nordeste',
    state: 'Bahia',
    city: 'Salvador',
    coordinates: { lat: -12.9777, lng: -38.5016 },
    description: {
      pt: 'Arte marcial afro-brasileira que combina luta, dança e música.',
      en: 'Afro-Brazilian martial art combining fight, dance, and music.',
      es: 'Arte marcial afrobrasileña que combina lucha, danza y música.'
    },
    unesco: true
  },
  {
    id: 'chapada-diamantina',
    name: {
      pt: 'Parque Nacional da Chapada Diamantina',
      en: 'Chapada Diamantina National Park',
      es: 'Parque Nacional de Chapada Diamantina'
    },
    category: 'natural',
    region: 'nordeste',
    state: 'Bahia',
    city: 'Lençóis',
    coordinates: { lat: -12.4500, lng: -41.4500 },
    description: {
      pt: 'Planalto com cachoeiras, cavernas e formações rochosas únicas.',
      en: 'Plateau with waterfalls, caves, and unique rock formations.',
      es: 'Meseta con cascadas, cuevas y formaciones rocosas únicas.'
    },
    unesco: false
  },
  // Pernambuco
  {
    id: 'olinda',
    name: {
      pt: 'Centro Histórico de Olinda',
      en: 'Historic Center of Olinda',
      es: 'Centro Histórico de Olinda'
    },
    category: 'world',
    region: 'nordeste',
    state: 'Pernambuco',
    city: 'Olinda',
    coordinates: { lat: -8.0089, lng: -34.8553 },
    description: {
      pt: 'Cidade colonial com igrejas barrocas e ladeiras históricas.',
      en: 'Colonial city with baroque churches and historic slopes.',
      es: 'Ciudad colonial con iglesias barrocas y laderas históricas.'
    },
    unesco: true
  },
  {
    id: 'frevo',
    name: {
      pt: 'Frevo',
      en: 'Frevo',
      es: 'Frevo'
    },
    category: 'intangible',
    region: 'nordeste',
    state: 'Pernambuco',
    city: 'Recife',
    coordinates: { lat: -8.0476, lng: -34.8770 },
    description: {
      pt: 'Ritmo e dança típicos do carnaval pernambucano.',
      en: 'Rhythm and dance typical of Pernambuco carnival.',
      es: 'Ritmo y danza típicos del carnaval pernambucano.'
    },
    unesco: true
  },
  {
    id: 'fernando-noronha',
    name: {
      pt: 'Fernando de Noronha',
      en: 'Fernando de Noronha',
      es: 'Fernando de Noronha'
    },
    category: 'world',
    region: 'nordeste',
    state: 'Pernambuco',
    city: 'Fernando de Noronha',
    coordinates: { lat: -3.8547, lng: -32.4280 },
    description: {
      pt: 'Arquipélago com praias paradisíacas e rica vida marinha.',
      en: 'Archipelago with paradise beaches and rich marine life.',
      es: 'Archipiélago con playas paradisíacas y rica vida marina.'
    },
    unesco: true
  },
  // Maranhão
  {
    id: 'sao-luis-centro-historico',
    name: {
      pt: 'Centro Histórico de São Luís',
      en: 'Historic Center of São Luís',
      es: 'Centro Histórico de São Luis'
    },
    category: 'world',
    region: 'nordeste',
    state: 'Maranhão',
    city: 'São Luís',
    coordinates: { lat: -2.5307, lng: -44.3068 },
    description: {
      pt: 'Conjunto de casarões coloniais com azulejos portugueses.',
      en: 'Ensemble of colonial mansions with Portuguese tiles.',
      es: 'Conjunto de casonas coloniales con azulejos portugueses.'
    },
    unesco: true
  },
  {
    id: 'lencois-maranhenses',
    name: {
      pt: 'Parque Nacional dos Lençóis Maranhenses',
      en: 'Lençóis Maranhenses National Park',
      es: 'Parque Nacional de los Lençóis Maranhenses'
    },
    category: 'natural',
    region: 'nordeste',
    state: 'Maranhão',
    city: 'Barreirinhas',
    coordinates: { lat: -2.4833, lng: -43.1167 },
    description: {
      pt: 'Dunas e lagoas cristalinas em paisagem única no mundo.',
      en: 'Dunes and crystal lagoons in a unique landscape.',
      es: 'Dunas y lagunas cristalinas en un paisaje único en el mundo.'
    },
    unesco: false
  },
  {
    id: 'bumba-meu-boi',
    name: {
      pt: 'Bumba Meu Boi',
      en: 'Bumba Meu Boi',
      es: 'Bumba Meu Boi'
    },
    category: 'intangible',
    region: 'nordeste',
    state: 'Maranhão',
    city: 'São Luís',
    coordinates: { lat: -2.5297, lng: -44.3028 },
    description: {
      pt: 'Festa tradicional que une música, dança e teatro popular.',
      en: 'Traditional festival combining music, dance, and popular theater.',
      es: 'Fiesta tradicional que une música, danza y teatro popular.'
    },
    unesco: true
  },
  // Piauí
  {
    id: 'serra-capivara',
    name: {
      pt: 'Parque Nacional Serra da Capivara',
      en: 'Serra da Capivara National Park',
      es: 'Parque Nacional Sierra de Capivara'
    },
    category: 'world',
    region: 'nordeste',
    state: 'Piauí',
    city: 'São Raimundo Nonato',
    coordinates: { lat: -8.8333, lng: -42.5500 },
    description: {
      pt: 'Maior concentração de sítios arqueológicos das Américas.',
      en: 'Largest concentration of archaeological sites in the Americas.',
      es: 'Mayor concentración de sitios arqueológicos de las Américas.'
    },
    unesco: true
  },

  // REGIÃO CENTRO-OESTE - Goiás
  {
    id: 'cidade-goias',
    name: {
      pt: 'Cidade de Goiás',
      en: 'City of Goiás',
      es: 'Ciudad de Goiás'
    },
    category: 'world',
    region: 'centro-oeste',
    state: 'Goiás',
    city: 'Goiás',
    coordinates: { lat: -15.9333, lng: -50.1333 },
    description: {
      pt: 'Antiga capital do estado, preserva arquitetura colonial.',
      en: 'Former state capital, preserves colonial architecture.',
      es: 'Antigua capital del estado, preserva arquitectura colonial.'
    },
    unesco: true
  },
  {
    id: 'chapada-veadeiros',
    name: {
      pt: 'Parque Nacional da Chapada dos Veadeiros',
      en: 'Chapada dos Veadeiros National Park',
      es: 'Parque Nacional de Chapada dos Veadeiros'
    },
    category: 'world',
    region: 'centro-oeste',
    state: 'Goiás',
    city: 'Alto Paraíso de Goiás',
    coordinates: { lat: -14.1000, lng: -47.5333 },
    description: {
      pt: 'Cerrado preservado com cachoeiras e formações de cristal.',
      en: 'Preserved cerrado with waterfalls and crystal formations.',
      es: 'Cerrado preservado con cascadas y formaciones de cristal.'
    },
    unesco: true
  },
  // Distrito Federal
  {
    id: 'brasilia',
    name: {
      pt: 'Brasília',
      en: 'Brasília',
      es: 'Brasilia'
    },
    category: 'world',
    region: 'centro-oeste',
    state: 'Distrito Federal',
    city: 'Brasília',
    coordinates: { lat: -15.7942, lng: -47.8825 },
    description: {
      pt: 'Capital modernista projetada por Lucio Costa e Oscar Niemeyer.',
      en: 'Modernist capital designed by Lucio Costa and Oscar Niemeyer.',
      es: 'Capital modernista diseñada por Lucio Costa y Oscar Niemeyer.'
    },
    unesco: true
  },
  // Mato Grosso do Sul
  {
    id: 'pantanal',
    name: {
      pt: 'Parque Nacional do Pantanal Matogrossense',
      en: 'Pantanal Matogrossense National Park',
      es: 'Parque Nacional del Pantanal Matogrossense'
    },
    category: 'world',
    region: 'centro-oeste',
    state: 'Mato Grosso do Sul',
    city: 'Poconé',
    coordinates: { lat: -17.8833, lng: -57.4000 },
    description: {
      pt: 'Maior planície alagável do mundo, rica em biodiversidade.',
      en: 'World\'s largest wetland, rich in biodiversity.',
      es: 'Mayor llanura inundable del mundo, rica en biodiversidad.'
    },
    unesco: true
  },
  {
    id: 'viola-cocho',
    name: {
      pt: 'Modo de Fazer Viola de Cocho',
      en: 'Viola de Cocho Making',
      es: 'Modo de Hacer Viola de Cocho'
    },
    category: 'intangible',
    region: 'centro-oeste',
    state: 'Mato Grosso do Sul',
    city: 'Corumbá',
    coordinates: { lat: -19.0092, lng: -57.6517 },
    description: {
      pt: 'Instrumento musical artesanal típico do Pantanal.',
      en: 'Traditional handmade musical instrument from the Pantanal.',
      es: 'Instrumento musical artesanal típico del Pantanal.'
    },
    unesco: false
  },

  // REGIÃO NORTE - Amazonas
  {
    id: 'teatro-amazonas',
    name: {
      pt: 'Teatro Amazonas',
      en: 'Amazon Theatre',
      es: 'Teatro Amazonas'
    },
    category: 'material',
    region: 'norte',
    state: 'Amazonas',
    city: 'Manaus',
    coordinates: { lat: -3.1303, lng: -60.0233 },
    description: {
      pt: 'Ópera do ciclo da borracha, candidato a Patrimônio Mundial.',
      en: 'Opera house from the rubber boom era, World Heritage candidate.',
      es: 'Ópera del ciclo del caucho, candidato a Patrimonio Mundial.'
    },
    unesco: false
  },
  {
    id: 'festival-parintins',
    name: {
      pt: 'Festival de Parintins',
      en: 'Parintins Festival',
      es: 'Festival de Parintins'
    },
    category: 'intangible',
    region: 'norte',
    state: 'Amazonas',
    city: 'Parintins',
    coordinates: { lat: -2.6286, lng: -56.7353 },
    description: {
      pt: 'Complexo cultural do Boi-Bumbá, maior festa folclórica do Norte.',
      en: 'Boi-Bumbá cultural complex, largest folk festival in the North.',
      es: 'Complejo cultural del Boi-Bumbá, mayor fiesta folclórica del Norte.'
    },
    unesco: true
  },
  {
    id: 'parque-jau',
    name: {
      pt: 'Parque Nacional do Jaú',
      en: 'Jaú National Park',
      es: 'Parque Nacional del Jaú'
    },
    category: 'world',
    region: 'norte',
    state: 'Amazonas',
    city: 'Novo Airão',
    coordinates: { lat: -1.9000, lng: -62.6167 },
    description: {
      pt: 'Maior parque de floresta tropical do mundo, Patrimônio Natural.',
      en: 'World\'s largest tropical rainforest park, Natural Heritage.',
      es: 'Mayor parque de bosque tropical del mundo, Patrimonio Natural.'
    },
    unesco: true
  },
  // Pará
  {
    id: 'cirio-nazare',
    name: {
      pt: 'Círio de Nazaré',
      en: 'Círio de Nazaré',
      es: 'Círio de Nazaré'
    },
    category: 'intangible',
    region: 'norte',
    state: 'Pará',
    city: 'Belém',
    coordinates: { lat: -1.4558, lng: -48.4902 },
    description: {
      pt: 'Maior procissão católica do Brasil, realizada em outubro.',
      en: 'Largest Catholic procession in Brazil, held in October.',
      es: 'Mayor procesión católica de Brasil, realizada en octubre.'
    },
    unesco: true
  },
  {
    id: 'ver-o-peso',
    name: {
      pt: 'Mercado Ver-o-Peso',
      en: 'Ver-o-Peso Market',
      es: 'Mercado Ver-o-Peso'
    },
    category: 'material',
    region: 'norte',
    state: 'Pará',
    city: 'Belém',
    coordinates: { lat: -1.4530, lng: -48.5024 },
    description: {
      pt: 'Maior feira livre da América Latina, símbolo de Belém.',
      en: 'Largest open-air market in Latin America, symbol of Belém.',
      es: 'Mayor mercado abierto de América Latina, símbolo de Belém.'
    },
    unesco: false
  },
  {
    id: 'carimbo',
    name: {
      pt: 'Carimbó',
      en: 'Carimbó',
      es: 'Carimbó'
    },
    category: 'intangible',
    region: 'norte',
    state: 'Pará',
    city: 'Belém',
    coordinates: { lat: -1.4558, lng: -48.4902 },
    description: {
      pt: 'Gênero musical e dança típica do Pará.',
      en: 'Musical genre and typical dance of Pará.',
      es: 'Género musical y danza típica de Pará.'
    },
    unesco: true
  }
];

// Helper functions
export const getHeritagesByCategory = (category: HeritageCategory) => 
  heritages.filter(h => h.category === category);

export const getHeritagesByRegion = (region: Region) => 
  heritages.filter(h => h.region === region);

export const getHeritagesByState = (state: string) => 
  heritages.filter(h => h.state === state);

export const getUnescoHeritages = () => 
  heritages.filter(h => h.unesco);

export const getAllStates = () => 
  [...new Set(heritages.map(h => h.state))].sort();

export const getCategoryColor = (category: HeritageCategory): string => {
  const colors = {
    world: 'heritage-world',
    material: 'heritage-material', 
    intangible: 'heritage-intangible',
    natural: 'heritage-natural'
  };
  return colors[category];
};

export const getCategoryIcon = (category: HeritageCategory): string => {
  const icons = {
    world: '🏛️',
    material: '🏗️',
    intangible: '🎭',
    natural: '🌿'
  };
  return icons[category];
};
