import { useEffect } from "react";
import { Compass, Globe2, Map, Layers, Users, Sparkles, TrendingUp, Database, Building2, Briefcase, Heart, Target, Lightbulb, Rocket, Award, BarChart3, ArrowDown, MapPin, Leaf, Landmark, Camera, Handshake, Megaphone } from "lucide-react";
import logo from "@/assets/logo-atairu.png";

const headingFont = { fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' };

const Slide = ({ children, bg = "bg-cream", className = "" }: { children: React.ReactNode; bg?: string; className?: string }) => (
  <section className={`min-h-screen w-full flex items-center py-20 ${bg} ${className}`}>
    <div className="container mx-auto px-6 md:px-10 max-w-6xl w-full">{children}</div>
  </section>
);

const SectionTag = ({ children, color = "forest" }: { children: React.ReactNode; color?: string }) => {
  const map: Record<string, string> = {
    forest: "bg-forest/15 text-forest",
    gold: "bg-gold/20 text-[hsl(var(--unesco-brown))]",
    terracotta: "bg-terracotta/15 text-terracotta",
    navy: "bg-navy/15 text-navy",
    cream: "bg-cream/25 text-cream border border-cream/40",
  };
  return <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase ${map[color]}`}>{children}</span>;
};

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-3 items-start">
    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-current opacity-60 shrink-0" />
    <span>{children}</span>
  </li>
);

const PropostaComercial = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "Ataîru — Apresentação Comercial";

    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    return () => {
      document.title = prev;
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* 1 — Cover */}
      <Slide bg="bg-navy text-cream relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 20%, hsl(15 57% 53% / 0.35) 0%, transparent 55%), radial-gradient(ellipse at 85% 80%, hsl(45 68% 47% / 0.25) 0%, transparent 55%), linear-gradient(135deg, hsl(200 60% 10%) 0%, hsl(200 60% 14%) 60%, hsl(145 51% 18%) 100%)",
          }}
        />
        <div className="absolute inset-0 pattern-indigenous opacity-25" />
        <div className="relative z-10 text-center">
          <img src={logo} alt="Ataîru" className="w-56 md:w-64 mx-auto mb-2 drop-shadow-2xl" />
          <SectionTag color="cream">Apresentação Comercial e Estratégica</SectionTag>
          <h1 className="text-6xl md:text-8xl font-bold mt-6 mb-6 tracking-tight" style={headingFont}>
            ATAÎRU
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 font-light max-w-2xl mx-auto leading-relaxed">Plataforma de Turismo Cultural e Sustentável do Brasil</p>
          <div className="mt-16 animate-bounce">
            <ArrowDown className="w-8 h-8 mx-auto text-cream/70" />
          </div>
        </div>
      </Slide>

      {/* 2 — Tagline */}
      <Slide bg="bg-cream">
        <div className="text-center max-w-4xl mx-auto">
          <img src={logo} alt="" className="w-32 md:w-40 mx-auto mb-8" />
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 leading-tight" style={headingFont}>
            Seu companheiro de viagem ao <span className="text-terracotta">coração do Brasil</span>.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">A infraestrutura digital que conecta o patrimônio cultural e natural brasileiro ao turismo nacional e internacional.</p>
        </div>
      </Slide>

      {/* 3 — O Brasil que o mundo ainda não conhece */}
      <Slide bg="bg-background">
        <SectionTag color="forest">O Brasil que o mundo ainda não conhece</SectionTag>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mt-6 mb-8 leading-tight" style={headingFont}>
          Um dos patrimônios mais ricos do planeta — ainda fragmentado.
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            { n: "25", label: "Patrimônios Mundiais", icon: Landmark },
            { n: "15", label: "Patrimônios Naturais", icon: Leaf },
            { n: "07", label: "Patrimônios Culturais da Humanidade", icon: Sparkles },
          ].map((s, i) => (
            <div key={i} className="bg-card border border-border rounded-2xl p-8 shadow-brand/20">
              <s.icon className="w-8 h-8 text-forest mb-4" />
              <div className="text-5xl font-bold text-primary mb-2" style={headingFont}>
                {s.n}
              </div>
              <p className="text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-forest mb-3 text-lg" style={headingFont}>
              O que o Brasil oferece
            </h3>
            <ul className="space-y-2 text-foreground">
              {["patrimônios históricos", "patrimônios naturais", "patrimônios culturais e imateriais", "biomas únicos", "tradições vivas e gastronomias regionais", "festas populares e saberes ancestrais", "comunidades tradicionais"].map((b) => (
                <Bullet key={b}>{b}</Bullet>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-terracotta mb-3 text-lg" style={headingFont}>
              O que ainda falta
            </h3>
            <ul className="space-y-2 text-foreground">
              {["informação fragmentada", "pouca digitalização", "desconexão da experiência turística internacional", "ausência de integração tecnológica que transforme patrimônio em jornada"].map((b) => (
                <Bullet key={b}>{b}</Bullet>
              ))}
            </ul>
          </div>
        </div>
      </Slide>

      {/* 4 — Turismo cultural hoje */}
      <Slide bg="bg-navy text-cream">
        <SectionTag color="cream">Turismo cultural, hoje</SectionTag>
        <h2 className="text-3xl md:text-5xl font-bold mt-6 mb-10 leading-tight" style={headingFont}>
          Deixou de ser visitação. Hoje é <span className="text-gold">experiência</span>.
        </h2>
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {["experiência", "pertencimento", "conexão humana", "autenticidade", "sustentabilidade", "desenvolvimento territorial"].map((w) => (
            <div key={w} className="bg-cream/15 backdrop-blur-sm border border-cream/30 rounded-xl px-6 py-5 text-center text-cream/90 capitalize">
              {w}
            </div>
          ))}
        </div>
        <p className="text-xl text-cream/80 max-w-3xl">
          Nesse contexto, o <strong className="text-gold">Ataîru</strong> nasce para conectar o Brasil profundo ao turismo contemporâneo.
        </p>
      </Slide>

      {/* 5 — Contexto global */}
      <Slide bg="bg-cream">
        <SectionTag color="forest">Contexto global e oportunidade</SectionTag>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mt-6 mb-8 leading-tight" style={headingFont}>
          O turismo internacional vive uma transformação estrutural.
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-gradient-warm text-cream rounded-2xl p-8">
            <TrendingUp className="w-10 h-10 mb-4" />
            <div className="text-5xl font-bold mb-2" style={headingFont}>
              ≈ 9,3 mi
            </div>
            <p className="opacity-90">turistas estrangeiros no Brasil em 2025 — segundo recorde histórico consecutivo + 37,1% vs 2024.</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8">
            <Globe2 className="w-10 h-10 text-forest mb-4" />
            <h3 className="font-bold text-primary text-xl mb-2" style={headingFont}>
              O viajante global busca
            </h3>
            <p className="text-muted-foreground">autenticidade, experiências locais, culturas vivas, sustentabilidade, gastronomia, natureza e conexão emocional com destinos.</p>
          </div>
        </div>
        <div className="bg-forest/10 rounded-2xl p-8 border-l-4 border-forest">
          <h3 className="font-bold text-forest mb-3 text-lg" style={headingFont}>
            Vantagens competitivas únicas do Brasil
          </h3>
          <ul className="grid md:grid-cols-2 gap-2 text-foreground">
            {["uma das maiores biodiversidades do mundo", "diversidade cultural incomparável", "patrimônio reconhecido internacionalmente", "enorme potencial de turismo cultural e natural", "crescimento consistente do turismo internacional"].map(
              (b) => (
                <Bullet key={b}>{b}</Bullet>
              ),
            )}
          </ul>
        </div>
        <p className="text-lg text-muted-foreground mt-8 max-w-3xl">
          Ainda não existe no país uma infraestrutura digital capaz de organizar, conectar, promover, distribuir e monetizar o patrimônio brasileiro como experiência turística escalável.
          <strong className="text-primary"> É esse espaço que o Ataîru ocupa.</strong>
        </p>
      </Slide>

      {/* 6 — O que é o Ataîru */}
      <Slide bg="bg-background">
        <SectionTag color="terracotta">O que é o Ataîru</SectionTag>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mt-6 mb-8 leading-tight" style={headingFont}>
          Uma plataforma digital para conectar viajantes à essência do Brasil.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {["patrimônios culturais", "patrimônios naturais", "parques", "manifestações culturais", "gastronomia", "artesanato", "comunidades", "guias locais", "roteiros", "experiências", "pequenos negócios", "dados estratégicos"].map((t, i) => {
            const tones = ["forest", "terracotta", "gold", "navy"];
            const c = tones[i % tones.length];
            return (
              <div key={t} className={`bg-${c}/10 border-2 border-${c}/30 rounded-xl px-4 py-3 text-sm font-semibold text-${c} text-center`}>
                {t}
              </div>
            );
          })}
        </div>
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
          <p className="text-xl md:text-3xl font-bold leading-tight" style={headingFont}>
            Mais do que um aplicativo: <span className="text-gold">a infraestrutura digital do turismo cultural e sustentável brasileiro.</span>
          </p>
        </div>
      </Slide>

      {/* 7 — Visão estratégica */}
      <Slide bg="bg-cream">
        <SectionTag color="forest">Visão estratégica</SectionTag>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mt-6 mb-10 leading-tight" style={headingFont}>
          Quatro dimensões, simultaneamente.
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { n: "1", icon: Compass, title: "Descoberta", text: "Conecta visitantes ao patrimônio brasileiro por meio de conteúdo curado, mapas e jornadas digitais.", color: "forest" },
            { n: "2", icon: Map, title: "Experiência", text: "Roteiros personalizados, guias, experiências, hospedagens e benefícios para o viajante.", color: "terracotta" },
            { n: "3", icon: Building2, title: "Desenvolvimento Territorial", text: "Fortalece pequenos e médios empreendedores do ecossistema turístico e cultural.", color: "gold" },
            { n: "4", icon: BarChart3, title: "Inteligência Turística", text: "Gera dados, comportamento de visitantes e inteligência estratégica para instituições.", color: "navy" },
          ].map((d) => (
            <div key={d.n} className="bg-card border border-border rounded-2xl p-8 group hover:shadow-brand transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <span className={`text-5xl font-bold text-${d.color}`} style={headingFont}>
                  {d.n}
                </span>
                <d.icon className={`w-8 h-8 text-${d.color}`} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2" style={headingFont}>
                {d.title}
              </h3>
              <p className="text-muted-foreground">{d.text}</p>
            </div>
          ))}
        </div>
      </Slide>

      {/* 8 — Problema que resolve */}
      <Slide bg="bg-background">
        <SectionTag color="terracotta">O problema que o Ataîru resolve</SectionTag>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mt-6 mb-10 leading-tight" style={headingFont}>
          Hoje o patrimônio brasileiro sofre com fragmentação digital.
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-terracotta/10 border-l-4 border-terracotta rounded-r-2xl p-8">
            <h3 className="font-bold text-terracotta text-lg mb-4" style={headingFont}>
              Cenário atual
            </h3>
            <ul className="space-y-2 text-foreground">
              {[
                "baixa digitalização",
                "pouca integração entre patrimônio e turismo",
                "ausência de experiência digital unificada",
                "dificuldade de acesso à informação",
                "pouca conexão entre pequenos negócios e turistas",
                "baixa estruturação internacional",
                "pouca inteligência de dados aplicada",
              ].map((b) => (
                <Bullet key={b}>{b}</Bullet>
              ))}
            </ul>
          </div>
          <div className="bg-forest/10 border-l-4 border-forest rounded-r-2xl p-8">
            <h3 className="font-bold text-forest text-lg mb-4" style={headingFont}>
              Camada que o Ataîru cria
            </h3>
            <ul className="space-y-2 text-foreground">
              {["patrimônio", "território", "turismo", "cultura", "tecnologia", "visitantes", "desenvolvimento econômico local"].map((b) => (
                <Bullet key={b}>{b}</Bullet>
              ))}
            </ul>
          </div>
        </div>
      </Slide>

      {/* 9 — Posicionamento */}
      <Slide bg="bg-primary text-cream">
        <SectionTag color="cream">Posicionamento</SectionTag>
        <h2 className="text-3xl md:text-6xl font-bold mt-6 mb-10 leading-tight" style={headingFont}>
          Ataîru é a <span className="text-gold">infraestrutura digital</span> do turismo cultural brasileiro.
        </h2>
        <div className="grid md:grid-cols-5 gap-3">
          {["Plataforma de patrimônio", "Hub de experiências culturais", "Ecossistema de turismo sustentável", "Plataforma de inteligência territorial", "Infraestrutura para promoção internacional do Brasil"].map((t) => (
            <div key={t} className="bg-cream/15 backdrop-blur-sm border border-cream/30 rounded-xl p-5 text-center text-cream/95">
              {t}
            </div>
          ))}
        </div>
      </Slide>

      {/* 10 — Estrutura em camadas */}
      <Slide bg="bg-cream">
        <SectionTag color="navy">Estrutura da plataforma</SectionTag>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mt-6 mb-10 leading-tight" style={headingFont}>
          Desenvolvida em camadas, agregadas ao longo do tempo.
        </h2>
        <div className="space-y-4">
          {[
            {
              n: 1,
              title: "Mapa Vivo do Patrimônio",
              desc: "Mapa aberto com patrimônios Mundiais, Culturais, Naturais, Materiais e Imateriais. Geolocalização, filtros, busca, acessibilidade, multilíngue, favoritos e descoberta por proximidade.",
              access: "Camada Aberta",
              color: "forest",
            },
            { n: 2, title: "Experiência e Planejamento", desc: "Informações detalhadas, conteúdos complementares, roteiros, descontos e jornadas personalizadas.", access: "Camada Logada", color: "terracotta" },
            {
              n: 3,
              title: "Ecossistema Territorial",
              desc: "Integração com guias, pousadas, restaurantes, artesãos, lojas e operadores turísticos. Reservas de visitas em ateliês, experiências culturais, passeios e contratação de guias.",
              access: "Camada Logada",
              color: "gold",
            },
            { n: 4, title: "Comunidade e Dados", desc: "Comunidade entre viajantes, passaporte cultural, avaliações, gamificação, inteligência de dados, analytics institucionais, dashboards territoriais.", access: "Camada Logada", color: "navy" },
          ].map((l) => (
            <div key={l.n} className={`bg-card border-l-8 border-${l.color} rounded-r-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start`}>
              <div className={`text-6xl font-bold text-${l.color} shrink-0 w-24`} style={headingFont}>
                0{l.n}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <h3 className="text-2xl font-bold text-primary" style={headingFont}>
                    Camada {l.n} — {l.title}
                  </h3>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-${l.color}/15 text-${l.color}`}>{l.access}</span>
                </div>
                <p className="text-muted-foreground">{l.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Slide>

      {/* 11 — Roadmap */}
      <Slide bg="bg-background">
        <SectionTag color="forest">Roadmap estratégico do produto</SectionTag>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mt-6 mb-10 leading-tight" style={headingFont}>
          Quatro fases de evolução, do produto ao ecossistema.
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              n: 1,
              title: "Fundação e Descoberta",
              time: "3–4 meses",
              obj: "Lançar o Ataîru e construir a primeira base de usuários.",
              del: "Plataforma web, conteúdo patrimonial, mapa interativo, ~200 patrimônios mapeados, acessibilidade, multilíngue, analytics básicos.",
              res: "Produto funcional ao ar com usuários reais.",
              color: "forest",
            },
            {
              n: 2,
              title: "Monetização e Marketplace",
              time: "3–4 meses",
              obj: "Ativar a camada econômica da plataforma.",
              del: "Roteiros com IA, marketplace de guias, reservas, pagamentos, assinatura premium, dashboard de guias, certificação Ataîru Heritage.",
              res: "Primeiras receitas e transações reais.",
              color: "terracotta",
            },
            {
              n: 3,
              title: "Comunidade e Dados Institucionais",
              time: "4–5 meses",
              obj: "Plataforma de engajamento e inteligência territorial.",
              del: "Comunidade, passaporte de patrimônios visitados, integração com hotéis e restaurantes, dashboards institucionais, produto de dados para órgãos públicos.",
              res: "Abertura da camada B2G.",
              color: "gold",
            },
            {
              n: 4,
              title: "Experiências de Marca e Ecossistema B2B",
              time: "4–5 meses",
              obj: "Transformar o Ataîru em plataforma autossustentável.",
              del: "Experiências branded, APIs com outros serviços do ecossistema, analytics B2B, dashboards privados, parceiros corporativos.",
              res: "Múltiplas fontes de receita e escala nacional.",
              color: "navy",
            },
          ].map((f) => (
            <div key={f.n} className="bg-card border border-border rounded-2xl p-8 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className={`text-5xl font-bold text-${f.color}`} style={headingFont}>
                  Fase {f.n}
                </span>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-${f.color}/15 text-${f.color}`}>{f.time}</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3" style={headingFont}>
                {f.title}
              </h3>
              <p className="text-sm font-semibold text-foreground mb-1">Objetivo</p>
              <p className="text-muted-foreground mb-3">{f.obj}</p>
              <p className="text-sm font-semibold text-foreground mb-1">Entregas</p>
              <p className="text-muted-foreground mb-3">{f.del}</p>
              <p className="text-sm font-semibold text-foreground mb-1">Resultado</p>
              <p className="text-muted-foreground">{f.res}</p>
            </div>
          ))}
        </div>
      </Slide>

      {/* 12 — O grande ativo */}
      <Slide bg="bg-terracotta-dark text-cream">
        <SectionTag color="cream">O grande ativo</SectionTag>
        <h2 className="text-3xl md:text-5xl font-bold mt-6 mb-8 leading-tight" style={headingFont}>
          O banco vivo de patrimônios culturais e naturais brasileiros.
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="font-bold text-cream/95 text-lg mb-4" style={headingFont}>
              Esse banco será
            </h3>
            <ul className="space-y-2 text-cream/90">
              {["curado por especialistas", "estruturado em camadas", "continuamente expandido", "preparado para IA", "preparado para SEO", "preparado para APIs", "preparado para inteligência territorial"].map((b) => (
                <Bullet key={b}>{b}</Bullet>
              ))}
            </ul>
          </div>
          <div className="bg-cream/15 backdrop-blur-sm rounded-2xl p-8 border border-cream/20">
            <p className="text-2xl md:text-3xl font-bold leading-tight" style={headingFont}>
              Isso torna o Ataîru <span className="text-gold">defensável, escalável e único</span> no mercado brasileiro.
            </p>
          </div>
        </div>
      </Slide>

      {/* 13 — Financiamento & Receita */}
      <Slide bg="bg-cream">
        <SectionTag color="navy">Financiamento & Receita</SectionTag>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mt-6 mb-10 leading-tight" style={headingFont}>
          Estrutura em quatro camadas.
        </h2>
        <div className="space-y-4">
          {[
            {
              n: 1,
              tag: "B2G — Financiamento Inicial",
              title: "Patrocínios e Editais— Verbas Públicas e Privadas",
              items: ["Verbas municipais, estaduais ou federais", "Editais públicos", "Editais Investimento Social Privado"],
              note: "Traz os principais atores do ecossistema do turismo e da cultura para dentro da plataforma.",
              color: "forest",
            },
            {
              n: 2,
              tag: "B2C — Receita Inicial",
              title: "Entrada dos Usuários - Assinatura",
              items: ["Área Logada", "Opções de assinaturas"],
              note: "Os fluxos dos usuários desenham os caminhos de evolução e geram dados para parceiros institucionais.",
              color: "terracotta",
            },
            {
              n: 3,
              tag: "Marketplace",
              title: "Ecossistema Turismo e Cultura",
              items: ["Serviços turísticos", "Reserva de experiências culturais e locais", "Marketplace de negócios locais"],
              note: "Promove o ecossistema e gera fluxo e receita para todos, com segurança para o viajante.",
              color: "gold",
            },
            {
              n: 4,
              tag: "B2B — Marcas e Parceiros",
              title: "Ecossistema das Experiências das Marcas",
              items: ["Experiências de Marcas", "Conteúdos de Marcas"],
              note: "Marcas integradas à comunidade, criando experiências e conteúdo para os viajantes.",
              color: "navy",
            },
          ].map((c) => (
            <div key={c.n} className="bg-card border border-border rounded-2xl p-6 md:p-8 grid md:grid-cols-[120px_1fr] gap-6">
              <div className={`text-5xl md:text-6xl font-bold text-${c.color}`} style={headingFont}>
                0{c.n}
              </div>
              <div>
                <p className={`text-xs uppercase tracking-widest font-semibold text-${c.color} mb-1`}>
                  Camada {c.n} · {c.tag}
                </p>
                <h3 className="text-2xl font-bold text-primary mb-3" style={headingFont}>
                  {c.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {c.items.map((i) => (
                    <span key={i} className="text-sm bg-muted px-3 py-1 rounded-full text-foreground">
                      {i}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic">{c.note}</p>
              </div>
            </div>
          ))}
        </div>
      </Slide>

      {/* 14 — Ecossistema de parcerias + Alinhamento estratégico */}
      <Slide bg="bg-background">
        <SectionTag color="terracotta">Ecossistema de parcerias</SectionTag>
        <h2 className="text-2xl md:text-4xl font-bold text-primary mt-4 mb-6 leading-tight" style={headingFont}>
          O Ataîru quer conectar quatro mundos.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { icon: Briefcase, title: "Trade Turismo", desc: "Operadores, agências, guias e companhias.", color: "forest" },
            { icon: Landmark, title: "Instituições Públicas", desc: "Ministérios, secretarias, IPHAN, Embratur, municípios.", color: "navy" },
            { icon: Users, title: "Comunidade e Territórios", desc: "Comunidades tradicionais, artesãos, produtores locais.", color: "terracotta" },
            { icon: Megaphone, title: "Marcas", desc: "Parceiros corporativos para experiências e patrocínios.", color: "gold" },
          ].map((p) => (
            <div key={p.title} className="bg-card border border-border rounded-2xl p-5 text-center hover:shadow-brand transition">
              <div className={`w-12 h-12 mx-auto rounded-2xl bg-${p.color}/15 flex items-center justify-center mb-3`}>
                <p.icon className={`w-6 h-6 text-${p.color}`} />
              </div>
              <h3 className="text-base font-bold text-primary mb-1" style={headingFont}>
                {p.title}
              </h3>
              <p className="text-xs text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-6">
          <SectionTag color="forest">Alinhamento estratégico</SectionTag>
          <h2 className="text-2xl md:text-4xl font-bold text-primary mt-4 mb-6 leading-tight" style={headingFont}>
            Profundamente alinhado às agendas do Brasil.
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {["Acessibilidade", "Promoção Internacional", "Cultura", "Turismo Sustentável", "Plano Brasil Digital", "Transformação Digital", "Economia Criativa", "Fortalecimento Territorial", "Plano Brasis"].map((t, i) => {
              const palette = ["bg-forest text-cream", "bg-terracotta text-cream", "bg-gold text-navy", "bg-navy text-cream", "bg-primary text-cream"];
              return (
                <span key={t} className={`${palette[i % palette.length]} px-4 py-2 rounded-full text-sm md:text-base font-semibold`} style={headingFont}>
                  {t}
                </span>
              );
            })}
          </div>
        </div>
      </Slide>


      {/* 16 — Mercados internacionais */}
      <Slide bg="bg-navy text-cream">
        <SectionTag color="cream">Mercados internacionais prioritários</SectionTag>
        <h2 className="text-3xl md:text-5xl font-bold mt-6 mb-10 leading-tight" style={headingFont}>
          Alinhado aos Mercados de Crescimento da Embratur.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {["Canadá", "México", "Colômbia", "Peru", "Holanda", "Suíça", "Itália"].map((c) => (
            <div key={c} className="bg-cream/15 backdrop-blur-sm border border-cream/30 rounded-xl p-5 text-center">
              <MapPin className="w-5 h-5 mx-auto mb-2 text-gold" />
              <span className="font-semibold" style={headingFont}>
                {c}
              </span>
            </div>
          ))}
        </div>
        <div>
          <h3 className="font-bold text-gold mb-3" style={headingFont}>
            Objetivos
          </h3>
          <ul className="grid md:grid-cols-2 gap-2 text-cream/90">
            {["posicionamento internacional", "aumento de notoriedade", "presença no trade", "ampliação do turismo cultural brasileiro"].map((b) => (
              <Bullet key={b}>{b}</Bullet>
            ))}
          </ul>
        </div>
      </Slide>

      {/* 17 — Comunicação */}
      <Slide bg="bg-background">
        <SectionTag color="terracotta">Comunicação</SectionTag>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mt-6 mb-8 leading-tight" style={headingFont}>
          Multicanal, digital, integrada a todos os stakeholders.
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-3xl">Posicionar o Brasil como destino cultural, território de experiências autênticas, potência de biodiversidade e referência em turismo sustentável.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-2xl p-8">
            <Camera className="w-8 h-8 text-terracotta mb-3" />
            <h3 className="text-xl font-bold text-primary mb-4" style={headingFont}>
              Estratégia Digital
            </h3>
            <ul className="space-y-2 text-foreground">
              {["Campanhas Digitais", "PR internacional", "Creators", "Storytelling territorial", "Conteúdo proprietário"].map((b) => (
                <Bullet key={b}>{b}</Bullet>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8">
            <Megaphone className="w-8 h-8 text-forest mb-3" />
            <h3 className="text-xl font-bold text-primary mb-4" style={headingFont}>
              OOH e Institucional
            </h3>
            <ul className="space-y-2 text-foreground">
              {["Painéis eletrônicos em locais de grande fluxo", "Eventos trade e feiras internacionais", "Mídia especializada", "Webinários"].map((b) => (
                <Bullet key={b}>{b}</Bullet>
              ))}
            </ul>
          </div>
        </div>
      </Slide>

      {/* 18 — Impacto esperado */}
      <Slide bg="bg-cream">
        <SectionTag color="forest">Impacto esperado</SectionTag>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mt-6 mb-10 leading-tight" style={headingFont}>
          Quatro dimensões de impacto.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: TrendingUp, title: "Econômico", desc: "Fortalecimento do turismo cultural e do ecossistema turístico, geração de renda local.", color: "forest" },
            { icon: MapPin, title: "Territorial", desc: "Valorização patrimonial pelo fortalecimento regional e ativação de pequenos negócios.", color: "terracotta" },
            { icon: Heart, title: "Cultural", desc: "Preservação por meio de educação patrimonial, promovendo a diversidade brasileira.", color: "gold" },
            { icon: Globe2, title: "Internacional", desc: "Fortalecimento da Marca Brasil e posicionamento como destino cultural global.", color: "navy" },
          ].map((i) => (
            <div key={i.title} className="bg-card border border-border rounded-2xl p-6">
              <div className={`w-12 h-12 rounded-xl bg-${i.color}/15 flex items-center justify-center mb-4`}>
                <i.icon className={`w-6 h-6 text-${i.color}`} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2" style={headingFont}>
                {i.title}
              </h3>
              <p className="text-sm text-muted-foreground">{i.desc}</p>
            </div>
          ))}
        </div>
      </Slide>

      {/* 19 — Indicadores */}
      <Slide bg="bg-background">
        <SectionTag color="navy">Indicadores e métricas</SectionTag>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mt-6 mb-10 leading-tight" style={headingFont}>
          O que vamos medir.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Digitais", icon: Database, items: "Usuários, acessos, retenção, engajamento, conversão.", color: "forest" },
            { title: "Institucionais", icon: Landmark, items: "Integração de municípios, patrimônios ativados, parcerias.", color: "navy" },
            { title: "Econômicos", icon: TrendingUp, items: "Reservas, receitas, pequenos negócios conectados.", color: "gold" },
          ].map((m) => (
            <div key={m.title} className={`rounded-2xl p-8 bg-${m.color}/10 border-l-4 border-${m.color}`}>
              <m.icon className={`w-8 h-8 text-${m.color} mb-4`} />
              <h3 className="text-2xl font-bold text-primary mb-3" style={headingFont}>
                {m.title}
              </h3>
              <p className="text-muted-foreground">{m.items}</p>
            </div>
          ))}
        </div>
      </Slide>

      {/* 20 — Ondas de evolução */}
      <Slide bg="bg-cream">
        <SectionTag color="terracotta">Ondas de evolução</SectionTag>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mt-6 mb-10 leading-tight" style={headingFont}>
          Ondas sucessivas de investimento e produto.
        </h2>
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <table className="w-full text-left">
            <thead className="bg-primary text-primary-foreground" style={headingFont}>
              <tr>
                <th className="px-6 py-4">Fase</th>
                <th className="px-6 py-4">Objetivo</th>
                <th className="px-6 py-4">Tempo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr key="Fase 1">
                <td className="px-6 py-4 font-bold text-forest" style={headingFont}>
                  Fase 1 — Parcerias institucionais
                </td>
                <td className="px-6 py-4 text-foreground">Produto no ar</td>
                <td className="px-6 py-4 text-muted-foreground">03 a 04 meses</td>
              </tr>
              <tr key="Fase 2">
                <td className="px-6 py-4 font-bold text-terracotta" style={headingFont}>
                  Fase 2 — Captação institucional e pública
                </td>
                <td className="px-6 py-4 text-foreground">Receita e marketplace</td>
                <td className="px-6 py-4 text-muted-foreground">03 a 04 meses</td>
              </tr>
              <tr key="Fase 3">
                <td className="px-6 py-4 font-bold text-gold" style={headingFont}>
                  Fase 3 — Patrocínios, ativação de marketplace e dados.
                </td>
                <td className="px-6 py-4 text-foreground">Dados e comunidade</td>
                <td className="px-6 py-4 text-muted-foreground">04 a 05 meses</td>
              </tr>
              <tr key="Fase 4">
                <td className="px-6 py-4 font-bold text-navy" style={headingFont}>
                  Fase 4 - Receita privada e escala B2B.
                </td>
                <td className="px-6 py-4 text-foreground">B2B e escala</td>
                <td className="px-6 py-4 text-muted-foreground">04 a 05 meses</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Slide>

      {/* 21 — Cotas de patrocínio */}
      <Slide bg="bg-background">
        <SectionTag color="gold">Cotas de patrocínio</SectionTag>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mt-6 mb-10 leading-tight" style={headingFont}>
          Quatro fases, dois formatos de cota por fase.
        </h2>
        <div className="space-y-8">
          {[
            { phase: "Fase 1 — Parceiro Fundador", total: "R$ 300.000,00", master: "R$ 200.000,00", apoio: "R$ 50.000,00", color: "forest" },
            { phase: "Fase 2 — Marketplace", total: "R$ 350.000,00", master: "R$ 250.000,00", apoio: "R$ 50.000,00", color: "terracotta" },
            { phase: "Fase 3 — Comunidade e Dados Institucionais", total: "R$ 450.000,00", master: "R$ 350.000,00", apoio: "R$ 50.000,00", color: "gold" },
            { phase: "Fase 4 — Experiências de Marca e Ecossistema B2B", total: "R$ 350.000,00", master: "R$ 250.000,00", apoio: "R$ 50.000,00", color: "navy" },
          ].map((p) => (
            <div key={p.phase} className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className={`bg-${p.color} text-cream px-6 py-4 flex justify-between items-center flex-wrap gap-3`}>
                <h3 className="text-xl font-bold" style={headingFont}>
                  {p.phase}
                </h3>
                <span className="text-sm font-semibold">Total captação · {p.total}</span>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                {[
                  { label: "Cota Master", value: p.master },
                  { label: "Cota Apoio", value: p.apoio },
                ].map((c) => (
                  <div key={c.label} className="p-6">
                    <div className="flex justify-between items-baseline mb-3">
                      <h4 className="font-bold text-primary text-lg" style={headingFont}>
                        {c.label}
                      </h4>
                      <span className={`text-${p.color} font-bold`} style={headingFont}>
                        {c.value}
                      </span>
                    </div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Contrapartidas — 12 meses</p>
                    <ul className="text-sm space-y-1 text-foreground">
                      <Bullet>Logo no site e em todos os materiais</Bullet>
                      <Bullet>{c.label === "Cota Master" ? "Campanha de Marketing Digital conjunta de lançamento (2 meses · 1 mercado)" : "Participação na campanha digital de lançamento (2 meses · 1 mercado)"}</Bullet>
                      <Bullet>{c.label === "Cota Master" ? "PR conjunto de lançamento do projeto" : "Participação em PR conjunto de lançamento"}</Bullet>
                      <Bullet>Acesso aos dados e insights da plataforma por 12 meses</Bullet>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Slide>

      {/* 22 — Por que */}
      <Slide bg="bg-gradient-warm text-cream">
        <SectionTag color="cream">Por que o Ataîru</SectionTag>
        <h2 className="text-3xl md:text-6xl font-bold mt-6 mb-8 leading-tight" style={headingFont}>
          Porque o patrimônio cultural brasileiro é um dos ativos mais valiosos do país.
        </h2>
        <p className="text-xl text-cream/90 mb-8 max-w-3xl">E porque ainda não existe uma infraestrutura digital capaz de:</p>
        <div className="grid md:grid-cols-5 gap-3 mb-10">
          {["conectá-lo", "promovê-lo", "organizá-lo", "monetizá-lo", "transformá-lo em experiência"].map((t) => (
            <div key={t} className="bg-cream/15 backdrop-blur-sm border border-cream/20 rounded-xl p-5 text-center text-cream font-semibold capitalize">
              {t}
            </div>
          ))}
        </div>
        <p className="text-2xl md:text-3xl font-bold" style={headingFont}>
          O Ataîru nasce para construir essa infraestrutura.
        </p>
      </Slide>

      {/* 23 — Convite final */}
      <Slide bg="bg-gradient-hero text-cream relative overflow-hidden">
        <div className="absolute inset-0 pattern-indigenous opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <img src={logo} alt="Ataîru" className="w-40 md:w-48 mx-auto mb-8 drop-shadow-2xl" />
          <SectionTag color="cream">Convite final</SectionTag>
          <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-10 leading-tight" style={headingFont}>
            O Ataîru é um convite.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
            {["descobrir o Brasil", "fortalecer territórios", "preservar patrimônios", "conectar culturas", "desenvolver economias locais", "transformar o turismo cultural"].map((t) => (
              <div key={t} className="bg-cream/15 backdrop-blur-sm border border-cream/30 rounded-xl px-4 py-3 text-cream capitalize">
                {t}
              </div>
            ))}
          </div>
          <p className="text-xl md:text-3xl font-bold text-gold mb-12" style={headingFont}>
            Estamos construindo a infraestrutura digital do turismo cultural do Brasil.
          </p>
          <div className="pt-10 border-t border-cream/20">
            <p className="text-xs uppercase tracking-widest text-cream/70 mb-4">Contatos</p>
            <p className="text-xl md:text-2xl mb-2" style={headingFont}>
              Ataîru — seu companheiro de viagem ao coração do Brasil
            </p>
            <a href="mailto:contato@atairu.tur.br" className="inline-block mt-4 px-8 py-3 bg-gold text-navy rounded-full font-bold hover:bg-gold-light transition">
              contato@atairu.tur.br
            </a>
            <p className="text-sm text-cream/70 mt-8">Realização: CLIC + FAUZI + Zero&amp;CO</p>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default PropostaComercial;
