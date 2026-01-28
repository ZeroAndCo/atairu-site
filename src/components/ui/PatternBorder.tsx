import indigenousPattern1 from '@/assets/patterns/indigenous-pattern-1.jpeg';
import indigenousPattern2 from '@/assets/patterns/indigenous-pattern-2.jpeg';

interface PatternBorderProps {
  position?: 'top' | 'bottom' | 'both';
  variant?: 1 | 2;
  height?: number;
  opacity?: number;
  className?: string;
}

export const PatternBorder = ({ 
  position = 'bottom', 
  variant = 1,
  height = 16,
  opacity = 0.8,
  className = ''
}: PatternBorderProps) => {
  const pattern = variant === 1 ? indigenousPattern1 : indigenousPattern2;
  
  const borderStyle = {
    height: `${height}px`,
    backgroundImage: `url(${pattern})`,
    backgroundRepeat: 'repeat-x',
    backgroundSize: 'auto 100%',
    opacity: opacity
  };

  return (
    <>
      {(position === 'top' || position === 'both') && (
        <div 
          className={`w-full ${className}`} 
          style={borderStyle}
          aria-hidden="true"
        />
      )}
      {(position === 'bottom' || position === 'both') && (
        <div 
          className={`w-full ${className}`} 
          style={borderStyle}
          aria-hidden="true"
        />
      )}
    </>
  );
};
