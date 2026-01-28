import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Sparkles, Building2, Music, TreePine, Heart, Eye, BookOpen } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { PatternBorder } from '@/components/ui/PatternBorder';
import { SectionDivider } from '@/components/ui/SectionDivider';

const About = () => {
  const { t } = useTranslation();

  const heritageTypes = [
    { icon: Sparkles, key: 'world', color: 'bg-gold text-foreground', borderColor: 'border-gold' },
    { icon: Building2, key: 'material', color: 'bg-terracotta text-white', borderColor: 'border-terracotta' },
    { icon: Music, key: 'intangible', color: 'bg-navy text-white', borderColor: 'border-navy' },
    { icon: TreePine, key: 'natural', color: 'bg-forest text-white', borderColor: 'border-forest' },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 bg-forest overflow-hidden">
        <div className="absolute inset-0 pattern-indigenous opacity-15" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-6">
              {t('about.title')}
            </h1>
          </motion.div>
        </div>
      </section>
      
      {/* Pattern Border */}
      <PatternBorder variant={1} height={20} opacity={0.9} />

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-forest/30 hover:border-forest/50 transition-colors">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mb-6">
                    <Heart className="h-8 w-8 text-forest" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                    {t('about.mission.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('about.mission.text')}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-terracotta/30 hover:border-terracotta/50 transition-colors">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-terracotta/10 flex items-center justify-center mb-6">
                    <Eye className="h-8 w-8 text-terracotta" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                    {t('about.vision.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('about.vision.text')}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pattern Border */}
      <PatternBorder variant={2} height={16} opacity={0.85} />

      {/* Story Section */}
      <section className="py-20 bg-cream-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-6 w-6 text-navy" />
              <h2 className="font-serif text-3xl font-bold text-foreground">
                {t('about.story.title')}
              </h2>
            </div>
            <SectionDivider color="navy" className="mb-6 justify-start" />
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                {t('about.story.text')}
              </p>
              <p>
                {t('about.story.origin')}
              </p>
              <p>
                {t('about.story.purpose')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pattern Border */}
      <PatternBorder variant={1} height={16} opacity={0.85} />

      {/* Heritage Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              {t('about.heritage.title')}
            </h2>
          </motion.div>
          
          <SectionDivider color="gold" className="mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {heritageTypes.map((type, index) => (
              <motion.div
                key={type.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full hover:shadow-brand transition-shadow border-l-4 ${type.borderColor}`}>
                  <CardContent className="p-6 flex gap-4">
                    <div className={`w-12 h-12 rounded-full ${type.color} flex items-center justify-center shrink-0`}>
                      <type.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold mb-2">
                        {t(`categories.${type.key}.name`)}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {t(`about.heritage.${type.key}`)}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Bottom Pattern Border */}
      <PatternBorder variant={2} height={20} opacity={0.9} />
    </Layout>
  );
};

export default About;
