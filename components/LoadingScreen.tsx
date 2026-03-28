import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const messages = [
  "Sharpening the pencils...",
  "Sketching the vision...",
  "Mixing the ink...",
  "Polishing the pixels...",
  "Curating the vibe..."
];

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    const messageTimer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 800);

    return () => {
      clearInterval(timer);
      clearInterval(messageTimer);
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 bg-paper z-[9999] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-doodle-pattern"></div>
      
      <div className="relative w-full max-w-xs px-6">
        {/* Progress Number */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl font-serif font-bold text-ink mb-4 text-center tracking-tighter"
        >
          {progress}%
        </motion.div>

        {/* Minimal Progress Bar */}
        <div className="h-[1px] w-full bg-gray-200 relative overflow-hidden mb-8">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-ink"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        {/* Rotating Messages */}
        <div className="h-6 flex justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={messageIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-pencil font-hand text-xl italic text-center"
            >
              {messages[messageIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Subtle Floating Doodle */}
      <motion.div
        animate={{ 
          rotate: [0, 5, -5, 0],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-12 right-12 opacity-10"
      >
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 50C20 50 35 30 50 30C65 30 80 50 80 50C80 50 65 70 50 70C35 70 20 50 20 50Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
