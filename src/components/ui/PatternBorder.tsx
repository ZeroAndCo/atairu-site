interface PatternBorderProps {
  variant?: 1 | 2;
  className?: string;
  /** Kept for backwards compatibility — no longer used. */
  position?: 'top' | 'bottom' | 'both';
  height?: number;
  opacity?: number;
}

/**
 * Section divider — a single thin line in the brand color.
 * Variant 1 → gold, variant 2 → terracotta (matches the prior pattern's dominant tone).
 */
export const PatternBorder = ({ variant = 1, className = '' }: PatternBorderProps) => {
  const color = variant === 1 ? 'bg-gold/60' : 'bg-terracotta/60';

  return (
    <div className={`w-full flex justify-center py-6 ${className}`} aria-hidden="true">
      <div className={`h-px w-24 ${color}`} />
    </div>
  );
};
