import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import embraturLogo from '@/assets/embratur-logo.svg.asset.json';
import mincLogo from '@/assets/minc-logo.png.asset.json';
import mturLogo from '@/assets/mtur-logo.webp.asset.json';
import unescoLogo from '@/assets/unesco-logo.svg.asset.json';
import iphanLogo from '@/assets/iphan-logo.png.asset.json';
import icmbioLogo from '@/assets/icmbio-logo.png.asset.json';

const institutional = [
  { key: 'mtur', label: 'Ministério\ndo Turismo', image: mturLogo.url, noBorder: true },
  { key: 'embratur', label: 'Embratur', image: embraturLogo.url, noBorder: true },
  { key: 'mcultura', label: 'Ministério\nda Cultura', image: mincLogo.url, noBorder: true },
  { key: 'unesco', label: 'UNESCO', image: unescoLogo.url, noBorder: true },
  { key: 'iphan', label: 'IPHAN', image: iphanLogo.url, noBorder: true },
  { key: 'icmbio', label: 'ICMBio', image: icmbioLogo.url, noBorder: true },
  { key: 'ocbpn', label: 'OCBPN' },
];

const sponsors = [
  { key: 'marcaX', label: 'Marca X' },
  { key: 'marcaY', label: 'Marca Y' },
  { key: 'marcaZ', label: 'Marca Z' },
];

const media = [
  { key: 'midiaA', label: 'Mídia A' },
  { key: 'midiaB', label: 'Mídia B' },
  { key: 'midiaC', label: 'Mídia C' },
  { key: 'midiaD', label: 'Mídia D' },
];

interface SupporterItem {
  key: string;
  label: string;
  image?: string;
  noBorder?: boolean;
}

interface SupporterGridProps {
  items: SupporterItem[];
  startDelay?: number;
}

const SupporterGrid = ({ items, startDelay = 0 }: SupporterGridProps) => (
  <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
    {items.map((s, i) => (
      <motion.div
        key={s.key}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: startDelay + i * 0.05 }}
        className={`w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.75rem)] md:w-[calc(25%-0.75rem)] lg:w-[150px] aspect-[3/2] flex items-center justify-center rounded-md px-3 py-4 text-center transition-colors ${
          s.noBorder
            ? ''
            : 'border border-cream/50 hover:border-cream hover:bg-cream/5'
        }`}
        title={s.label.replace('\n', ' ')}
      >
        {s.image ? (
          <img
            src={s.image}
            alt={s.label}
            className="max-w-full max-h-full object-contain"
          />
        ) : (
          <span className="text-cream/90 text-xs md:text-sm font-semibold uppercase tracking-wider leading-tight whitespace-pre-line">
            {s.label}
          </span>
        )}
      </motion.div>
    ))}
  </div>
);

export const InstitutionalSupport = () => {
  const { t } = useTranslation();

  return (
    <section
      className="py-16 md:py-20 text-cream relative overflow-hidden"
      style={{ backgroundColor: 'hsl(var(--unesco-brown))' }}
    >
      <div className="absolute inset-0 pattern-indigenous opacity-[0.07]" />
      <div className="container mx-auto px-4 relative z-10 space-y-16">
        {/* Institutional Support */}
        <div>
          <div className="text-center mb-10">
            <p className="text-cream/70 uppercase tracking-[0.3em] text-xs mb-3 font-semibold">
              {t('institutionalSupport.eyebrow')}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-cream">
              {t('institutionalSupport.title')}
            </h2>
          </div>
          <SupporterGrid items={institutional} />
          <p className="text-center mt-8 text-cream/60 text-xs italic">
            {t('institutionalSupport.note')}
          </p>
        </div>

        {/* Sponsors */}
        <div>
          <div className="text-center mb-10">
            <p className="text-cream/70 uppercase tracking-[0.3em] text-xs mb-3 font-semibold">
              {t('institutionalSupport.sponsors.eyebrow')}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-cream">
              {t('institutionalSupport.sponsors.title')}
            </h2>
          </div>
          <SupporterGrid items={sponsors} startDelay={0.2} />
        </div>

        {/* Media Partners */}
        <div>
          <div className="text-center mb-10">
            <p className="text-cream/70 uppercase tracking-[0.3em] text-xs mb-3 font-semibold">
              {t('institutionalSupport.media.eyebrow')}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-cream">
              {t('institutionalSupport.media.title')}
            </h2>
          </div>
          <SupporterGrid items={media} startDelay={0.2} />
        </div>
      </div>
    </section>
  );
};
