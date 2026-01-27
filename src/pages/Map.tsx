import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { motion } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { 
  heritages, 
  Heritage, 
  HeritageCategory, 
  Region, 
  getAllStates,
  getCategoryIcon,
  getCategoryColor
} from '@/data/heritages';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom marker icons by category
const createCustomIcon = (category: HeritageCategory) => {
  const colors = {
    world: '#d4a574',
    material: '#e07a5f',
    intangible: '#1d3557',
    natural: '#1a4d2e'
  };

  return L.divIcon({
    html: `
      <div style="
        background-color: ${colors[category]};
        width: 32px;
        height: 32px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <span style="
          transform: rotate(45deg);
          font-size: 14px;
        ">${getCategoryIcon(category)}</span>
      </div>
    `,
    className: 'custom-marker',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
};

// Map component that responds to region filter
const MapController = ({ center, zoom }: { center: [number, number]; zoom: number }) => {
  const map = useMap();
  
  useEffect(() => {
    map.setView(center, zoom);
  }, [map, center, zoom]);
  
  return null;
};

const MapPage = () => {
  const { t, i18n } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentLang = i18n.language as 'pt' | 'en' | 'es';
  
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<HeritageCategory | 'all'>('all');
  const [regionFilter, setRegionFilter] = useState<Region | 'all'>(
    (searchParams.get('region') as Region) || 'all'
  );
  const [stateFilter, setStateFilter] = useState<string>('all');
  const [selectedHeritage, setSelectedHeritage] = useState<Heritage | null>(null);

  const states = getAllStates();

  const regionCenters: Record<Region | 'all', { center: [number, number]; zoom: number }> = {
    all: { center: [-14.235, -51.9253], zoom: 4 },
    norte: { center: [-3.0, -60.0], zoom: 5 },
    nordeste: { center: [-9.0, -38.0], zoom: 5 },
    'centro-oeste': { center: [-15.0, -56.0], zoom: 5 },
    sudeste: { center: [-22.0, -44.0], zoom: 6 },
    sul: { center: [-27.0, -51.0], zoom: 6 },
  };

  const filteredHeritages = useMemo(() => {
    return heritages.filter(h => {
      const matchesSearch = search === '' || 
        h.name[currentLang].toLowerCase().includes(search.toLowerCase()) ||
        h.city.toLowerCase().includes(search.toLowerCase()) ||
        h.state.toLowerCase().includes(search.toLowerCase());
      
      const matchesCategory = categoryFilter === 'all' || h.category === categoryFilter;
      const matchesRegion = regionFilter === 'all' || h.region === regionFilter;
      const matchesState = stateFilter === 'all' || h.state === stateFilter;
      
      return matchesSearch && matchesCategory && matchesRegion && matchesState;
    });
  }, [search, categoryFilter, regionFilter, stateFilter, currentLang]);

  const clearFilters = () => {
    setSearch('');
    setCategoryFilter('all');
    setRegionFilter('all');
    setStateFilter('all');
    setSearchParams({});
  };

  const hasActiveFilters = search || categoryFilter !== 'all' || regionFilter !== 'all' || stateFilter !== 'all';

  const mapConfig = regionCenters[regionFilter];

  return (
    <Layout>
      {/* Header */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6"
          >
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
              {t('map.title')}
            </h1>
            <p className="text-muted-foreground">
              {t('map.subtitle')}
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 justify-center items-center">
            {/* Search */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t('map.search')}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Desktop Filters */}
            <div className="hidden md:flex gap-3">
              <Select value={categoryFilter} onValueChange={(v) => setCategoryFilter(v as HeritageCategory | 'all')}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder={t('map.allCategories')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('map.allCategories')}</SelectItem>
                  <SelectItem value="world">{t('categories.world.name')}</SelectItem>
                  <SelectItem value="material">{t('categories.material.name')}</SelectItem>
                  <SelectItem value="intangible">{t('categories.intangible.name')}</SelectItem>
                  <SelectItem value="natural">{t('categories.natural.name')}</SelectItem>
                </SelectContent>
              </Select>

              <Select value={regionFilter} onValueChange={(v) => {
                setRegionFilter(v as Region | 'all');
                if (v !== 'all') {
                  setSearchParams({ region: v });
                } else {
                  setSearchParams({});
                }
              }}>
                <SelectTrigger className="w-44">
                  <SelectValue placeholder={t('map.allRegions')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('map.allRegions')}</SelectItem>
                  <SelectItem value="sul">{t('regions.sul')}</SelectItem>
                  <SelectItem value="sudeste">{t('regions.sudeste')}</SelectItem>
                  <SelectItem value="nordeste">{t('regions.nordeste')}</SelectItem>
                  <SelectItem value="centro-oeste">{t('regions.centro-oeste')}</SelectItem>
                  <SelectItem value="norte">{t('regions.norte')}</SelectItem>
                </SelectContent>
              </Select>

              <Select value={stateFilter} onValueChange={setStateFilter}>
                <SelectTrigger className="w-52">
                  <SelectValue placeholder={t('map.allStates')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('map.allStates')}</SelectItem>
                  {states.map(state => (
                    <SelectItem key={state} value={state}>{state}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Mobile Filter Sheet */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden">
                  <Filter className="h-4 w-4 mr-2" />
                  {t('map.filter')}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>{t('map.filter')}</SheetTitle>
                </SheetHeader>
                <div className="space-y-4 mt-6">
                  <Select value={categoryFilter} onValueChange={(v) => setCategoryFilter(v as HeritageCategory | 'all')}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('map.allCategories')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{t('map.allCategories')}</SelectItem>
                      <SelectItem value="world">{t('categories.world.name')}</SelectItem>
                      <SelectItem value="material">{t('categories.material.name')}</SelectItem>
                      <SelectItem value="intangible">{t('categories.intangible.name')}</SelectItem>
                      <SelectItem value="natural">{t('categories.natural.name')}</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={regionFilter} onValueChange={(v) => setRegionFilter(v as Region | 'all')}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('map.allRegions')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{t('map.allRegions')}</SelectItem>
                      <SelectItem value="sul">{t('regions.sul')}</SelectItem>
                      <SelectItem value="sudeste">{t('regions.sudeste')}</SelectItem>
                      <SelectItem value="nordeste">{t('regions.nordeste')}</SelectItem>
                      <SelectItem value="centro-oeste">{t('regions.centro-oeste')}</SelectItem>
                      <SelectItem value="norte">{t('regions.norte')}</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={stateFilter} onValueChange={setStateFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('map.allStates')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{t('map.allStates')}</SelectItem>
                      {states.map(state => (
                        <SelectItem key={state} value={state}>{state}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </SheetContent>
            </Sheet>

            {hasActiveFilters && (
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                <X className="h-4 w-4 mr-1" />
                Clear
              </Button>
            )}
          </div>

          {/* Results count */}
          <p className="text-center text-muted-foreground text-sm mt-4">
            {filteredHeritages.length} {t('stats.heritages').toLowerCase()}
          </p>
        </div>
      </section>

      {/* Map */}
      <section className="h-[60vh] md:h-[70vh] relative">
        <MapContainer
          center={mapConfig.center}
          zoom={mapConfig.zoom}
          className="h-full w-full"
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapController center={mapConfig.center} zoom={mapConfig.zoom} />
          
          {filteredHeritages.map((heritage) => (
            <Marker
              key={heritage.id}
              position={[heritage.coordinates.lat, heritage.coordinates.lng]}
              icon={createCustomIcon(heritage.category)}
              eventHandlers={{
                click: () => setSelectedHeritage(heritage)
              }}
            >
              <Popup>
                <div className="p-2 min-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{getCategoryIcon(heritage.category)}</span>
                    <h3 className="font-serif font-semibold text-sm">
                      {heritage.name[currentLang]}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    📍 {heritage.city}, {heritage.state}
                  </p>
                  <p className="text-xs mb-2">
                    {heritage.description[currentLang]}
                  </p>
                  {heritage.unesco && (
                    <span className="inline-block bg-amber-200 text-amber-900 text-xs px-2 py-0.5 rounded">UNESCO</span>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-card rounded-lg p-3 shadow-lg z-[1000]">
          <p className="text-xs font-semibold mb-2">Legenda:</p>
          <div className="space-y-1">
            {(['world', 'material', 'intangible', 'natural'] as HeritageCategory[]).map(cat => (
              <div key={cat} className="flex items-center gap-2 text-xs">
                <span>{getCategoryIcon(cat)}</span>
                <span>{t(`categories.${cat}.name`)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* No results */}
        {filteredHeritages.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-[1000]">
            <p className="text-muted-foreground">{t('map.noResults')}</p>
          </div>
        )}
      </section>

      {/* Selected Heritage Detail (Mobile) */}
      {selectedHeritage && (
        <Sheet open={!!selectedHeritage} onOpenChange={() => setSelectedHeritage(null)}>
          <SheetContent side="bottom" className="h-auto max-h-[50vh]">
            <div className="p-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{getCategoryIcon(selectedHeritage.category)}</span>
                <div>
                  <h3 className="font-serif text-xl font-bold">
                    {selectedHeritage.name[currentLang]}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    📍 {selectedHeritage.city}, {selectedHeritage.state}
                  </p>
                </div>
              </div>
              <p className="text-foreground/80 mb-4">
                {selectedHeritage.description[currentLang]}
              </p>
              <div className="flex gap-2">
                <span className={`inline-block px-2 py-1 rounded text-sm text-white bg-${getCategoryColor(selectedHeritage.category)}`}>
                  {t(`categories.${selectedHeritage.category}.name`)}
                </span>
                {selectedHeritage.unesco && (
                  <span className="inline-block px-2 py-1 rounded text-sm bg-amber-200 text-amber-900">UNESCO</span>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      )}
    </Layout>
  );
};

export default MapPage;
