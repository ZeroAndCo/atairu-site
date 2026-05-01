import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import {
  type Heritage,
  isIphanRegistered,
  isMistoHeritage,
} from '@/data/heritages';
import unescoMark from '@/assets/heritage-marks/unesco-world-heritage.svg';
import iphanMark from '@/assets/heritage-marks/iphan-patrimonio-cultural.png';
import contranCultural from '@/assets/heritage-marks/contran-cultural.svg';
import contranNatural from '@/assets/heritage-marks/contran-natural.svg';
import contranMisto from '@/assets/heritage-marks/contran-misto.svg';

export type HeritageMarkKind =
  | 'unesco'
  | 'iphan'
  | 'contran-cultural'
  | 'contran-natural'
  | 'contran-misto';

const sizeMap: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'h-8 w-8',
  md: 'h-12 w-12',
  lg: 'h-20 w-20',
};

const markSrc: Record<HeritageMarkKind, string> = {
  unesco: unescoMark,
  iphan: iphanMark,
  'contran-cultural': contranCultural,
  'contran-natural': contranNatural,
  'contran-misto': contranMisto,
};

/**
 * Returns the official marks that apply to a heritage item, in priority
 * order. The first mark is always the most "official" tier the item
 * qualifies for; the trailing Contran pictogram is the contextual tourism
 * sign drivers/visitors will recognize.
 */
export function getHeritageMarks(heritage: Heritage): HeritageMarkKind[] {
  const marks: HeritageMarkKind[] = [];
  if (heritage.unesco) marks.push('unesco');
  if (isIphanRegistered(heritage)) marks.push('iphan');

  if (isMistoHeritage(heritage)) {
    marks.push('contran-misto');
  } else if (heritage.tags.includes('natural')) {
    marks.push('contran-natural');
  } else if (heritage.tags.includes('cultural')) {
    marks.push('contran-cultural');
  }
  return marks;
}

interface HeritageMarkProps {
  kind: HeritageMarkKind;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const HeritageMark = ({ kind, size = 'md', className }: HeritageMarkProps) => {
  const { t } = useTranslation();
  const label = t(`marks.${kind}.label`, { defaultValue: kind });
  return (
    <img
      src={markSrc[kind]}
      alt={label}
      role="img"
      aria-label={label}
      className={cn(sizeMap[size], 'rounded-sm shrink-0', className)}
    />
  );
};

interface HeritageMarksProps {
  heritage: Heritage;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'stack' | 'row' | 'primary-only';
  className?: string;
}

/**
 * Renders the stack of official marks that apply to a given heritage item.
 * Use `variant="primary-only"` to render only the highest-tier mark.
 */
export const HeritageMarks = ({
  heritage,
  size = 'md',
  variant = 'row',
  className,
}: HeritageMarksProps) => {
  const marks = getHeritageMarks(heritage);
  const visible = variant === 'primary-only' ? marks.slice(0, 1) : marks;
  if (visible.length === 0) return null;

  return (
    <div
      className={cn(
        'flex gap-1.5',
        variant === 'stack' ? 'flex-col' : 'flex-row items-center',
        className,
      )}
    >
      {visible.map((kind) => (
        <HeritageMark key={kind} kind={kind} size={size} />
      ))}
    </div>
  );
};
