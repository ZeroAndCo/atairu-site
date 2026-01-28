import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, ChevronRight, Sparkles, TreePine, Building2, Music } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Layout } from '@/components/layout/Layout';
import { BrazilMap } from '@/components/home/BrazilMap';
import { heritages, getUnescoHeritages, getCategoryIcon } from '@/data/heritages';
import brazilMapHero from '@/assets/brazil-map-hero.png';

const Index = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'pt' | 'en' | 'es';

  const stats = [
    { value: heritages.length + '+', label: t('stats.heritages') },
    { value: getUnescoHeritages().length, label: t('stats.unesco') },
    { value: 5, label: t('stats.regions') },
    { value: 27, label: t('stats.states') },
  ];

  const categories = [
    { 
      key: 'world', 
      icon: Sparkles, 
      color: 'bg-gold text-foreground',
      borderColor: 'border-gold'
    },
    { 
      key: 'material', 
      icon: Building2, 
      color: 'bg-terracotta text-white',
      borderColor: 'border-terracotta'
    },
    { 
      key: 'intangible', 
      icon: Music, 
      color: 'bg-navy text-white',
      borderColor: 'border-navy'
    },
    { 
      key: 'natural', 
      icon: TreePine, 
      color: 'bg-forest text-white',
      borderColor: 'border-forest'
    },
  ];

  const featuredHeritages = heritages.filter(h => h.unesco).slice(0, 6);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-cream overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pattern-indigenous opacity-10" />
        
        {/* Content */}
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <Badge className="mb-6 bg-gold/20 text-foreground border-gold/50 text-sm px-4 py-1">
                🇧🇷 Brasil
              </Badge>
              
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {t('hero.tagline')}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
                >
                  <Link to="/map">
                    <MapPin className="mr-2 h-5 w-5" />
                    {t('hero.exploreMap')}
                  </Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline" 
                  size="lg"
                  className="border-primary/30 text-primary hover:bg-primary/10 font-semibold px-8"
                >
                  <Link to="/about">
                    {t('hero.learnMore')}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Brazil Map Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <img 
                src={brazilMapHero} 
                alt="Mapa do Brasil com pins de patrimônios" 
                className="max-w-xl w-full h-auto lg:max-w-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('map.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('map.subtitle')}
            </p>
          </motion.div>

          <BrazilMap />

          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/map">
                <MapPin className="mr-2 h-5 w-5" />
                {t('hero.exploreMap')}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('categories.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full border-2 ${category.borderColor} hover:shadow-brand transition-shadow cursor-pointer`}>
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4`}>
                      <category.icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-2">
                      {t(`categories.${category.key}.name`)}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t(`categories.${category.key}.description`)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Heritages Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-gold/20 text-gold border-gold/30">
              {t('common.featured')}
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              UNESCO World Heritage
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredHeritages.map((heritage, index) => (
              <motion.div
                key={heritage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-brand transition-shadow overflow-hidden group">
                  <div className="h-48 bg-muted flex items-center justify-center relative overflow-hidden">
                    <span className="text-6xl group-hover:scale-110 transition-transform">
                      {getCategoryIcon(heritage.category)}
                    </span>
                    <Badge className="absolute top-3 right-3 bg-gold text-foreground">
                      UNESCO
                    </Badge>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-serif text-lg font-semibold mb-2 line-clamp-2">
                      {heritage.name[currentLang]}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      📍 {heritage.city}, {heritage.state}
                    </p>
                    <p className="text-sm text-foreground/80 line-clamp-3">
                      {heritage.description[currentLang]}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/heritage">
                {t('common.seeAll')}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 pattern-indigenous opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              {t('hero.tagline')}
            </h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              {t('hero.subtitle')}
            </p>
            <Button 
              asChild
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-10"
            >
              <Link to="/map">
                <MapPin className="mr-2 h-5 w-5" />
                {t('hero.exploreMap')}
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
