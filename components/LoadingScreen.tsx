import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-paper flex flex-col items-center justify-center p-6 text-center">
      <div className="relative mb-8">
        {/* Sketchy Pen/Pencil Doodle */}
        <svg viewBox="0 0 200 100" className="w-64 h-32 text-ink">
          <path 
            className="scribble-line" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round"
            d="M20,80 Q50,20 80,80 T140,80 Q170,20 190,50" 
          />
          <path 
            className="scribble-line" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1" 
            strokeLinecap="round"
            d="M15,85 L185,85" 
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-4xl md:text-5xl font-hand font-bold transform -rotate-2">
              Vidhi Bhanushali
            </h1>
        </div>
      </div>
      
      <div className="space-y-2">
        <p className="font-hand text-2xl text-pencil">
          Sharpening pencils{dots}
        </p>
        <div className="w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden mx-auto border border-ink">
          <div className="h-full bg-ink animate-[scribble_2.5s_ease-in-out_infinite]" style={{ width: '40%' }}></div>
        </div>
      </div>
      
      <div className="absolute bottom-10 text-sm font-serif italic text-gray-400">
        Turning pages...
      </div>
    </div>
  );
};

export default LoadingScreen;