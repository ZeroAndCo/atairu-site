import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Compass,
  BookOpen,
  Building2,
  BarChart3,
  Sparkles,
  Heart,
  Globe2,
  Users,
  Mail,
  ChevronRight,
  TrendingUp,
  Leaf,
  Landmark,
  Languages,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Layout } from '@/components/layout/Layout';
import { PatternBorder } from '@/components/ui/PatternBorder';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { SEO } from '@/components/SEO';
import { getOrganizationStructuredData, getWebsiteStructuredData } from '@/lib/seo';
import { getSupportedLanguage } from '@/lib/site';

const Index = () => {
  const { t, i18n } = useTranslation();
  const currentLang = getSupportedLanguage(i18n.resolvedLanguage || i18n.language);

  const pillars = [
    { icon: Heart, key: 'tourism', color: 'text-terracotta', bg: 'bg-terracotta/10' },
    { icon: Users, key: 'social', color: 'text-forest', bg: 'bg-forest/10' },
    { icon: Leaf, key: 'territorial', color: 'text-gold', bg: 'bg-gold/10' },
  ];

  const ecosystem = [
    'culturalHeritage', 'naturalHeritage', 'parks', 'culturalExpressions',
    'gastronomy', 'crafts', 'communities', 'localGuides',
    'itineraries', 'experiences', 'smallBusinesses', 'strategicData',
  ];

  const dimensions = [
    { icon: Compass, key: 'discovery', color: 'forest' },
    { icon: BookOpen, key: 'experience', color: 'terracotta' },
    { icon: Building2, key: 'territorial', color: 'gold' },
    { icon: BarChart3, key: 'intelligence', color: 'navy' },
  ];

  const heritageNumbers = [
    { value: '25', key: 'worldHeritage' },
    { value: '15', key: 'naturalHeritage' },
    { value: '07', key: 'culturalHumanity' },
  ];

  const problemRows = ['fragmentation', 'integration', 'experience', 'access', 'business', 'international', 'data'];

  const advantages = ['biodiversity', 'recognition', 'growth', 'diversity', 'potential'];

  const positioning = ['platform', 'hub', 'ecosystem', 'intelligence', 'international'];

  const impacts = [
    { key: 'economic', icon: TrendingUp, color: 'forest' },
    { key: 'territorial', icon: Landmark, color: 'terracotta' },
    { key: 'cultural', icon: Sparkles, color: 'gold' },
    { key: 'international', icon: Globe2, color: 'navy' },
  ];

  const verbs = ['connect', 'promote', 'organize', 'monetize', 'transform'];

  return (
    <Layout>
      <SEO
        routeKey="home"
        language={currentLang}
        structuredData={[getOrganizationStructuredData(), getWebsiteStructuredData()]}
      />

      {/* ============ HERO ============ */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-navy overflow-hidden">
        <div className="absolute inset-0 pattern-indigenous opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-forest/40" />
        <div className="container mx-auto px-4 py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 bg-gold/20 text-gold border-gold/40 text-xs tracking-widest px-4 py-1 uppercase">
              {t('home.hero.eyebrow')}
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 leading-[1.05] tracking-tight">
              {t('home.hero.title')}
            </h1>
            <p className="text-lg md:text-2xl text-cream/85 mb-4 font-light leading-relaxed">
              {t('home.hero.tagline')}
            </p>
            <p className="text-base md:text-lg text-cream/70 max-w-2xl mx-auto">
              {t('home.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <PatternBorder variant={1} height={20} opacity={0.9} />

      {/* ============ O QUE É ============ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <p className="text-terracotta uppercase tracking-[0.3em] text-xs mb-3 font-semibold">
              {t('home.what.eyebrow')}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              {t('home.what.title')}
            </h2>
          </motion.div>
          <SectionDivider color="terracotta" className="mb-12" />

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5 text-left text-foreground/80 leading-relaxed"
            >
              <p className="text-lg">{t('home.what.p1')}</p>
              <p>{t('home.what.p2')}</p>
              <p>{t('home.what.p3')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-cream-dark border-l-4 border-gold p-8 rounded-r-lg"
            >
              <p className="text-2xl md:text-3xl font-semibold text-navy italic leading-snug">
                "{t('home.what.quote')}"
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-t-4 border-t-terracotta hover:shadow-brand transition-shadow">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg ${p.bg} flex items-center justify-center mb-4`}>
                      <p.icon className={`h-6 w-6 ${p.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {t(`home.what.pillars.${p.key}.title`)}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t(`home.what.pillars.${p.key}.text`)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <p className="text-center mt-10 text-muted-foreground italic text-sm tracking-wide">
            {t('home.what.footer')}
          </p>
        </div>
      </section>

      <PatternBorder variant={2} height={20} opacity={0.9} />

      {/* ============ COMO ============ */}
      <section className="py-24 bg-cream-dark">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <p className="text-forest uppercase tracking-[0.3em] text-xs mb-3 font-semibold">
              {t('home.how.eyebrow')}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 max-w-3xl mx-auto">
              {t('home.how.title')}
            </h2>
          </motion.div>
          <SectionDivider color="forest" className="mb-12" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
            {ecosystem.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-background border border-forest/20 rounded-lg p-4 text-center hover:border-forest hover:shadow-md transition-all"
              >
                <span className="text-sm md:text-base font-medium text-foreground">
                  {t(`home.how.items.${item}`)}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-navy text-cream p-8 md:p-10 rounded-lg text-center"
          >
            <p className="text-xl md:text-2xl font-semibold leading-snug">
              {t('home.how.statement')}
            </p>
          </motion.div>
        </div>
      </section>

      <PatternBorder variant={1} height={20} opacity={0.9} />

      {/* ============ VISÃO ESTRATÉGICA ============ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3 font-semibold">
              {t('home.vision.eyebrow')}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              {t('home.vision.title')}
            </h2>
          </motion.div>
          <SectionDivider color="gold" className="mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dimensions.map((d, i) => (
              <motion.div
                key={d.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <Card className={`h-full border-t-4 border-t-${d.color} hover:shadow-brand transition-shadow`}>
                  <CardContent className="p-6">
                    <div className={`flex items-center gap-3 mb-4`}>
                      <span className={`text-${d.color} text-3xl font-bold`}>0{i + 1}</span>
                      <d.icon className={`h-7 w-7 text-${d.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {t(`home.vision.items.${d.key}.title`)}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t(`home.vision.items.${d.key}.text`)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PatternBorder variant={2} height={20} opacity={0.9} />

      {/* ============ O BRASIL ============ */}
      <section className="py-24 bg-forest text-cream relative overflow-hidden">
        <div className="absolute inset-0 pattern-indigenous opacity-10" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <p className="text-cream/70 uppercase tracking-[0.3em] text-xs mb-3 font-semibold">
              {t('home.brazil.eyebrow')}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto">
              {t('home.brazil.title')}
            </h2>
            <p className="text-cream/80 max-w-2xl mx-auto text-lg">
              {t('home.brazil.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            {heritageNumbers.map((n, i) => (
              <motion.div
                key={n.key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center border border-cream/20 rounded-lg p-8 bg-cream/5 backdrop-blur-sm"
              >
                <p className="text-6xl md:text-7xl font-bold text-gold mb-3">{n.value}</p>
                <p className="text-cream/90 text-sm uppercase tracking-wider">
                  {t(`home.brazil.numbers.${n.key}`)}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gold">
                {t('home.brazil.offers.title')}
              </h3>
              <ul className="space-y-2 text-cream/85">
                {['offer1','offer2','offer3','offer4','offer5','offer6','offer7'].map((k) => (
                  <li key={k} className="flex gap-2">
                    <span className="text-gold">›</span>
                    <span>{t(`home.brazil.offers.${k}`)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-terracotta">
                {t('home.brazil.gaps.title')}
              </h3>
              <ul className="space-y-2 text-cream/85">
                {['gap1','gap2','gap3','gap4'].map((k) => (
                  <li key={k} className="flex gap-2">
                    <span className="text-terracotta">›</span>
                    <span>{t(`home.brazil.gaps.${k}`)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ PROBLEMA ============ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <p className="text-terracotta uppercase tracking-[0.3em] text-xs mb-3 font-semibold">
              {t('home.problem.eyebrow')}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              {t('home.problem.title')}
            </h2>
          </motion.div>
          <SectionDivider color="terracotta" className="mb-12" />

          <div className="grid md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden border border-border">
            <div className="bg-cream-dark p-5">
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                {t('home.problem.scenario')}
              </h3>
            </div>
            <div className="bg-forest p-5">
              <h3 className="text-xs uppercase tracking-widest text-cream font-semibold">
                {t('home.problem.layer')}
              </h3>
            </div>
            {problemRows.map((row) => (
              <>
                <div key={`${row}-s`} className="bg-background p-5 text-foreground/80">
                  {t(`home.problem.rows.${row}.scenario`)}
                </div>
                <div key={`${row}-l`} className="bg-forest/5 p-5 text-foreground font-medium">
                  {t(`home.problem.rows.${row}.layer`)}
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      <PatternBorder variant={1} height={20} opacity={0.9} />

      {/* ============ CONTEXTO GLOBAL ============ */}
      <section className="py-24 bg-cream-dark">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <p className="text-navy uppercase tracking-[0.3em] text-xs mb-3 font-semibold">
              {t('home.global.eyebrow')}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 max-w-3xl mx-auto">
              {t('home.global.title')}
            </h2>
          </motion.div>
          <SectionDivider color="navy" className="mb-12" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-navy text-cream rounded-lg p-8 md:p-12 text-center mb-12 max-w-3xl mx-auto"
          >
            <p className="text-5xl md:text-7xl font-bold text-gold mb-3">≈ 9,3 mi</p>
            <p className="text-cream/85 text-base md:text-lg">{t('home.global.stat')}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-terracotta">
              <CardContent className="p-8">
                <Languages className="h-8 w-8 text-terracotta mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {t('home.global.traveler.title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('home.global.traveler.text')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-forest">
              <CardContent className="p-8">
                <Sparkles className="h-8 w-8 text-forest mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {t('home.global.advantages.title')}
                </h3>
                <ul className="space-y-2 text-foreground/80 text-sm">
                  {advantages.map((a) => (
                    <li key={a} className="flex gap-2">
                      <span className="text-forest">●</span>
                      <span>{t(`home.global.advantages.${a}`)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12 text-foreground/80 text-lg italic max-w-3xl mx-auto"
          >
            {t('home.global.closing')}
          </motion.p>
        </div>
      </section>

      {/* ============ POSICIONAMENTO ============ */}
      <section className="py-24 bg-navy text-cream relative overflow-hidden">
        <div className="absolute inset-0 pattern-indigenous opacity-10" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3 font-semibold">
              {t('home.positioning.eyebrow')}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
              {t('home.positioning.title.before')}{' '}
              <span className="text-gold">{t('home.positioning.title.highlight')}</span>{' '}
              {t('home.positioning.title.after')}
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {positioning.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-gold/40 bg-gold/10 px-5 py-3 rounded-full text-cream text-sm md:text-base"
              >
                {t(`home.positioning.items.${p}`)}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ IMPACTO ============ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <p className="text-forest uppercase tracking-[0.3em] text-xs mb-3 font-semibold">
              {t('home.impact.eyebrow')}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              {t('home.impact.title')}
            </h2>
          </motion.div>
          <SectionDivider color="forest" className="mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impacts.map((im, i) => (
              <motion.div
                key={im.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className={`h-full border-t-4 border-t-${im.color} hover:shadow-brand transition-shadow`}>
                  <CardContent className="p-6">
                    <im.icon className={`h-8 w-8 text-${im.color} mb-4`} />
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {t(`home.impact.items.${im.key}.title`)}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t(`home.impact.items.${im.key}.text`)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PatternBorder variant={2} height={20} opacity={0.9} />

      {/* ============ POR QUE ATAÎRU ============ */}
      <section className="py-24 bg-terracotta text-cream relative overflow-hidden">
        <div className="absolute inset-0 pattern-indigenous opacity-10" />
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-cream/70 uppercase tracking-[0.3em] text-xs mb-3 font-semibold">
              {t('home.why.eyebrow')}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
              {t('home.why.title')}
            </h2>
            <p className="text-cream/85 text-lg max-w-2xl mx-auto">
              {t('home.why.subtitle')}
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {verbs.map((v, i) => (
              <motion.div
                key={v}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-cream text-terracotta font-semibold px-6 py-3 rounded-md uppercase tracking-wider text-sm"
              >
                {t(`home.why.verbs.${v}`)}
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-semibold mt-8"
          >
            {t('home.why.closing')}
          </motion.p>
        </div>
      </section>

      {/* ============ CONVITE FINAL ============ */}
      <section className="py-24 bg-navy text-cream relative overflow-hidden">
        <div className="absolute inset-0 pattern-indigenous opacity-15" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3 font-semibold">
              {t('home.invitation.eyebrow')}
            </p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              {t('home.invitation.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12 max-w-3xl mx-auto">
            {['discover','strengthen','preserve','connect','develop','transform'].map((k, i) => (
              <motion.div
                key={k}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="border border-cream/20 bg-cream/5 backdrop-blur-sm px-4 py-3 rounded text-center text-sm md:text-base text-cream/90"
              >
                {t(`home.invitation.verbs.${k}`)}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl md:text-2xl text-cream/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              {t('home.invitation.closing')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gold hover:bg-gold-light text-navy font-semibold px-8">
                <Link to="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  {t('home.invitation.contact')}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-cream/40 text-cream hover:bg-cream/10 px-8">
                <Link to="/team">
                  {t('home.invitation.team')}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <PatternBorder variant={1} height={20} opacity={0.9} />
    </Layout>
  );
};

export default Index;
