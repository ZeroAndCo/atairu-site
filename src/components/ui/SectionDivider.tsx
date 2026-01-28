import { cn } from '@/lib/utils';

interface SectionDividerProps {
  color?: 'primary' | 'secondary' | 'gold' | 'terracotta' | 'navy' | 'forest';
  className?: string;
}

export const SectionDivider = ({ 
  color = 'gold',
  className 
}: SectionDividerProps) => {
  const colorClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    gold: 'bg-gold',
    terracotta: 'bg-terracotta',
    navy: 'bg-navy',
    forest: 'bg-forest'
  };

  return (
    <div className={cn('flex items-center justify-center gap-2 py-2', className)}>
      <div className={cn('h-1 w-8 rounded-full', colorClasses[color])} />
      <div className={cn('h-1.5 w-1.5 rounded-full', colorClasses[color])} />
      <div className={cn('h-1 w-8 rounded-full', colorClasses[color])} />
    </div>
  );
};
