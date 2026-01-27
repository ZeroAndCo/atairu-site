import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, MapPin, Sparkles, Building2, Music, TreePine } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  heritages, 
  HeritageCategory,
  getHeritagesByCategory,
  getCategoryIcon 
} from '@/data/heritages';

const Heritage = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'pt' | 'en' | 'es';
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<HeritageCategory | 'all'>('all');

  const categories = [
    { key: 'all' as const, icon: null, label: 'Todos', count: heritages.length },
    { key: 'world' as HeritageCategory, icon: Sparkles, label: t('categories.world.name'), count: getHeritagesByCategory('world').length },
    { key: 'material' as HeritageCategory, icon: Building2, label: t('categories.material.name'), count: getHeritagesByCategory('material').length },
    { key: 'intangible' as HeritageCategory, icon: Music, label: t('categories.intangible.name'), count: getHeritagesByCategory('intangible').length },
    { key: 'natural' as HeritageCategory, icon: TreePine, label: t('categories.natural.name'), count: getHeritagesByCategory('natural').length },
  ];

  const filteredHeritages = useMemo(() => {
    let filtered = activeTab === 'all' ? heritages : getHeritagesByCategory(activeTab);
    
    if (search) {
      filtered = filtered.filter(h => 
        h.name[currentLang].toLowerCase().includes(search.toLowerCase()) ||
        h.city.toLowerCase().includes(search.toLowerCase()) ||
        h.state.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    return filtered;
  }, [activeTab, search, currentLang]);

  const getCategoryBadgeColor = (category: HeritageCategory) => {
    const colors = {
      world: 'bg-gold text-foreground',
      material: 'bg-terracotta text-white',
      intangible: 'bg-navy text-white',
      natural: 'bg-forest text-white'
    };
    return colors[category];
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 pattern-indigenous opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              {t('categories.title')}
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              {t('map.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Search */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder={t('map.search')}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as HeritageCategory | 'all')} className="w-full">
            <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent justify-center mb-8">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.key}
                  value={cat.key}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2"
                >
                  {cat.icon && <cat.icon className="h-4 w-4 mr-2" />}
                  {cat.label}
                  <Badge variant="secondary" className="ml-2">
                    {cat.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeTab}>
              {filteredHeritages.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">{t('map.noResults')}</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredHeritages.map((heritage, index) => (
                    <motion.div
                      key={heritage.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: Math.min(index * 0.05, 0.5) }}
                    >
                      <Card className="h-full hover:shadow-brand transition-shadow overflow-hidden group">
                        <div className="h-40 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative">
                          <span className="text-5xl group-hover:scale-110 transition-transform">
                            {getCategoryIcon(heritage.category)}
                          </span>
                          <Badge className={`absolute top-3 right-3 ${getCategoryBadgeColor(heritage.category)}`}>
                            {t(`categories.${heritage.category}.name`)}
                          </Badge>
                          {heritage.unesco && (
                            <Badge className="absolute top-3 left-3 bg-gold text-foreground">
                              UNESCO
                            </Badge>
                          )}
                        </div>
                        <CardContent className="p-5">
                          <h3 className="font-serif text-lg font-semibold mb-2 line-clamp-2">
                            {heritage.name[currentLang]}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3 flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {heritage.city}, {heritage.state}
                          </p>
                          <p className="text-sm text-foreground/80 line-clamp-3 mb-4">
                            {heritage.description[currentLang]}
                          </p>
                          <Button asChild variant="outline" size="sm" className="w-full">
                            <Link to={`/map?heritage=${heritage.id}`}>
                              {t('map.viewDetails')}
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Heritage;
