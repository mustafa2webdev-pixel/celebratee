import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Cover({ onOpen }: { onOpen: () => void }) {
  const [isOpenAnimation, setIsOpenAnimation] = useState(false);

  const handleOpen = () => {
    setIsOpenAnimation(true);
    setTimeout(() => {
      onOpen();
    }, 1500); // Wait for animation
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isOpenAnimation ? '-100%' : 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
      className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-cream min-h-screen px-4"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft decorative blur */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-dusty-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-lg md:text-xl font-messiri text-olive mb-6 z-10 text-center tracking-wide"
      >
        بكل حب نتشرف بدعوتكم
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="font-messiri font-bold text-5xl sm:text-6xl md:text-8xl text-navy mb-14 z-10 text-center drop-shadow-md flex flex-row items-center justify-center gap-2 md:gap-4 relative"
      >
        <div className="relative inline-block whitespace-nowrap">
          محمود
          <svg className="absolute -top-3 -right-6 md:-top-5 md:-right-8 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 text-navy drop-shadow-sm rotate-[-15deg] opacity-90" viewBox="0 0 24 24" fill="currentColor">
             <path d="M4 6L10 10V14L4 18V6ZM20 6L14 10V14L20 18V6ZM10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10V14C14 15.1 13.1 16 12 16C10.9 16 10 15.1 10 14V10Z" />
          </svg>
        </div>
        <span className="font-english-script text-gold-foil mx-1 sm:mx-2 font-normal text-6xl sm:text-7xl md:text-9xl">&</span>
        <div className="relative inline-block whitespace-nowrap">
          روان
          <svg className="absolute -top-4 left-0 md:-top-6 md:left-2 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 text-gold drop-shadow-sm rotate-[10deg] opacity-90" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3 7h-6zM3 10l4 5h-2l-3-5zm18 0l-3 5h-2l4-5zm-1 7H4v4h16v-4z" />
          </svg>
        </div>
      </motion.div>

      <div className="relative w-64 h-48 md:w-80 md:h-56 cursor-pointer z-10 perspective-[1000px]" onClick={handleOpen}>
        <motion.div
          animate={{ scale: isOpenAnimation ? 1.3 : 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          {/* Envelope Body */}
          <div className="absolute inset-0 bg-dusty-blue rounded-sm shadow-xl flex items-center justify-center">
             {/* Back folds */}
             <div className="absolute inset-0 border-[40px] md:border-[50px] border-transparent border-b-dusty-blue/80 border-l-dusty-blue/60 border-r-dusty-blue/60" style={{ transform: 'scale(1.02)' }}></div>
          </div>
          
          {/* Envelope Flap (Top) */}
             <motion.div
              animate={{ rotateX: isOpenAnimation ? -180 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-[60%] bg-dusty-blue brightness-95 shadow-md origin-top flex items-end justify-center"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                transformOrigin: 'top'
              }}
            >
              {/* Wax Seal */}
              <motion.div 
               animate={{ opacity: isOpenAnimation ? 0 : 1 }}
               className="w-12 h-12 rounded-full bg-olive shadow-inner border border-gold/30 flex items-center justify-center mb-2"
               style={{ transform: 'translateY(50%)' }}
              >
                <span className="font-serif text-white text-lg">م & ر</span>
              </motion.div>
            </motion.div>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpenAnimation ? 0 : 1 }}
        transition={{ delay: 0.8, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="mt-16 text-sm font-cairo text-olive/80 tracking-widest z-10"
      >
        اضغط لفتح الدعوة
      </motion.p>
    </motion.div>
  );
}
