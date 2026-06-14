import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const supporters = [
  { key: 'mtur', label: 'Ministério\ndo Turismo' },
  { key: 'embratur', label: 'Embratur' },
  { key: 'mcultura', label: 'Ministério\nda Cultura' },
  { key: 'unesco', label: 'UNESCO' },
  { key: 'iphan', label: 'IPHAN' },
  { key: 'icmbio', label: 'ICMBio' },
  { key: 'ocbpn', label: 'OCBPN' },
];

export const InstitutionalSupport = () => {
  const { t } = useTranslation();

  return (
    <section
      className="py-16 md:py-20 text-cream relative overflow-hidden"
      style={{ backgroundColor: 'hsl(var(--unesco-brown))' }}
    >
      <div className="absolute inset-0 pattern-indigenous opacity-[0.07]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <p className="text-cream/70 uppercase tracking-[0.3em] text-xs mb-3 font-semibold">
            {t('institutionalSupport.eyebrow')}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-cream">
            {t('institutionalSupport.title')}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-6xl mx-auto">
          {supporters.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="aspect-[3/2] flex items-center justify-center border border-cream/50 rounded-md px-3 py-4 text-center hover:border-cream hover:bg-cream/5 transition-colors"
              title={s.label.replace('\n', ' ')}
            >
              <span className="text-cream/90 text-xs md:text-sm font-semibold uppercase tracking-wider leading-tight whitespace-pre-line">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-8 text-cream/60 text-xs italic">
          {t('institutionalSupport.note')}
        </p>
      </div>
    </section>
  );
};
