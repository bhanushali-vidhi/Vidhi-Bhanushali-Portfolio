
import React from 'react';

// Added style prop to all doodle components to support inline styles like animation-delay
export const DoodleArrow: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <svg viewBox="0 0 100 100" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M10,50 Q30,20 60,40 T90,50 M80,40 L90,50 L80,60" />
  </svg>
);

export const DoodleStar: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <svg viewBox="0 0 50 50" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M25,5 L30,20 L45,22 L32,30 L38,45 L25,35 L12,45 L18,30 L5,22 L20,20 Z" />
  </svg>
);

export const DoodleUnderline: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <svg viewBox="0 0 200 20" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
    <path d="M5,10 Q50,15 100,5 T195,10" />
  </svg>
);

export const DoodleCircle: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <svg viewBox="0 0 100 100" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M50,10 Q90,10 90,50 Q90,90 50,90 Q10,90 10,50 Q10,10 50,10 M48,8 Q92,12 92,50" />
  </svg>
);

export const DoodleSparkle: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <svg viewBox="0 0 40 40" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M20,0 L22,18 L40,20 L22,22 L20,40 L18,22 L0,20 L18,18 Z" />
  </svg>
);

export const DoodleSpiral: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <svg viewBox="0 0 100 100" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M50,50 m-1,0 a1,1 0 1,0 2,0 a2,2 0 1,0 -4,0 a4,4 0 1,0 8,0 a8,8 0 1,0 -16,0 a16,16 0 1,0 32,0 a32,32 0 1,0 -64,0" />
  </svg>
);
