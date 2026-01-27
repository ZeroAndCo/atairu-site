import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface RegionData {
  id: string;
  name: string;
  color: string;
  hoverColor: string;
  path: string;
}

const regions: RegionData[] = [
  {
    id: 'norte',
    name: 'Norte',
    color: '#1a4d2e',
    hoverColor: '#2d6b42',
    path: 'M 120 20 L 280 20 L 320 60 L 340 120 L 300 180 L 240 200 L 180 180 L 140 140 L 100 100 L 80 60 Z'
  },
  {
    id: 'nordeste',
    name: 'Nordeste',
    color: '#e07a5f',
    hoverColor: '#e8937a',
    path: 'M 320 60 L 380 40 L 420 80 L 430 140 L 410 200 L 360 240 L 300 220 L 280 180 L 300 180 L 340 120 Z'
  },
  {
    id: 'centro-oeste',
    name: 'Centro-Oeste',
    color: '#d4a574',
    hoverColor: '#e0b88a',
    path: 'M 180 180 L 240 200 L 300 220 L 320 280 L 280 340 L 220 360 L 160 320 L 140 260 L 140 200 Z'
  },
  {
    id: 'sudeste',
    name: 'Sudeste',
    color: '#1d3557',
    hoverColor: '#2b4a70',
    path: 'M 300 220 L 360 240 L 400 280 L 380 340 L 320 380 L 260 360 L 280 340 L 320 280 Z'
  },
  {
    id: 'sul',
    name: 'Sul',
    color: '#457b9d',
    hoverColor: '#5a92b5',
    path: 'M 220 360 L 280 340 L 320 380 L 320 440 L 280 480 L 220 480 L 180 440 L 180 400 Z'
  }
];

export const BrazilMap = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleRegionClick = (regionId: string) => {
    navigate(`/map?region=${regionId}`);
  };

  return (
    <div className="flex flex-col items-center">
      <svg
        viewBox="0 0 500 520"
        className="w-full max-w-lg h-auto"
        role="img"
        aria-label="Mapa do Brasil por regiões"
      >
        {/* Regions */}
        {regions.map((region, index) => (
          <motion.g
            key={region.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.path
              d={region.path}
              fill={region.color}
              stroke="white"
              strokeWidth="2"
              className="cursor-pointer"
              onClick={() => handleRegionClick(region.id)}
              whileHover={{ 
                fill: region.hoverColor,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            />
          </motion.g>
        ))}

        {/* Region Labels */}
        <text x="200" y="100" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" className="pointer-events-none">
          {t('regions.norte')}
        </text>
        <text x="370" y="140" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" className="pointer-events-none">
          {t('regions.nordeste')}
        </text>
        <text x="220" y="270" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle" className="pointer-events-none">
          {t('regions.centro-oeste')}
        </text>
        <text x="340" y="300" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle" className="pointer-events-none">
          {t('regions.sudeste')}
        </text>
        <text x="250" y="430" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle" className="pointer-events-none">
          {t('regions.sul')}
        </text>

        {/* Animated pins */}
        {[
          { cx: 200, cy: 80, delay: 0.5 },
          { cx: 360, cy: 120, delay: 0.6 },
          { cx: 230, cy: 250, delay: 0.7 },
          { cx: 330, cy: 280, delay: 0.8 },
          { cx: 260, cy: 410, delay: 0.9 },
        ].map((pin, i) => (
          <motion.circle
            key={i}
            cx={pin.cx}
            cy={pin.cy}
            r="8"
            fill="#d4a574"
            stroke="white"
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: pin.delay, type: 'spring', stiffness: 300 }}
            className="animate-pulse-soft"
          />
        ))}
      </svg>

      {/* Legend */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {regions.map((region) => (
          <button
            key={region.id}
            onClick={() => handleRegionClick(region.id)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
          >
            <span 
              className="w-4 h-4 rounded-full" 
              style={{ backgroundColor: region.color }}
            />
            <span className="text-sm font-medium">
              {t(`regions.${region.id}`)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
