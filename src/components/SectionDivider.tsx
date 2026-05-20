import React from 'react';

interface SectionDividerProps {
  type: 'rocks' | 'canopy' | 'curve' | 'cliff';
  color?: string;
  backgroundColor?: string;
  className?: string;
  flipped?: boolean;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  type,
  color = '#120e0a', // Earth brown dark
  backgroundColor = '#112d15', // Forest green
  className = '',
  flipped = false
}) => {
  const rotationStyle = flipped ? { transform: 'scaleY(-1)' } : {};

  return (
    <div 
      className={`relative w-full overflow-hidden leading-none z-10 ${className}`} 
      style={{ 
        height: type === 'canopy' ? '80px' : '50px',
        marginTop: '-1px',
        marginBottom: '-1px',
        ...rotationStyle
      }}
    >
      {type === 'rocks' && (
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-full"
          style={{ fill: color }}
        >
          <path d="M0,0 L180,95 L340,30 L520,105 L680,45 L860,110 L1020,55 L1200,120 L1200,120 L0,120 Z"></path>
        </svg>
      )}

      {type === 'cliff' && (
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-full"
          style={{ fill: color }}
        >
          <path d="M0,40 L120,60 L240,30 L380,85 L510,40 L690,95 L840,35 L990,75 L1100,50 L1200,90 L1200,120 L0,120 Z" opacity="0.5" style={{ fill: backgroundColor }}></path>
          <path d="M0,60 L140,80 L280,50 L420,100 L560,55 L720,105 L880,45 L1020,90 L1120,65 L1200,100 L1200,120 L0,120 Z"></path>
        </svg>
      )}

      {type === 'canopy' && (
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-full"
          style={{ fill: color }}
        >
          {/* Subtle background jungle layer */}
          <path 
            d="M0,60 C80,40 120,80 200,50 C280,20 320,70 400,45 C480,20 520,80 600,50 C680,20 720,80 800,55 C880,30 920,80 1000,50 C1080,20 1120,65 1200,40 L1200,120 L0,120 Z" 
            opacity="0.3" 
            style={{ fill: backgroundColor }}
          />
          {/* Foreground jungle leaves layer */}
          <path d="M0,80 C50,60 80,95 150,75 C220,55 250,90 320,70 C390,50 420,95 490,75 C560,55 590,90 660,70 C730,50 760,95 830,75 C900,55 930,90 1000,70 C1070,50 1100,85 1200,65 L1200,120 L0,120 Z" />
        </svg>
      )}

      {type === 'curve' && (
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-full"
          style={{ fill: color }}
        >
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      )}
    </div>
  );
};
