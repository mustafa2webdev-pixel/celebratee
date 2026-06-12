import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

export default function CustomScrollbar() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const ringY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="fixed left-2 md:left-4 top-[15%] bottom-[15%] w-4 z-50 pointer-events-none flex flex-col items-center opacity-80 md:opacity-100">
      {/* Decorative top dot */}
      <div className="w-1.5 h-1.5 rounded-full bg-gold/50 mb-2"></div>
      
      <div className="h-full w-px bg-dusty-blue/20 relative rounded-full">
        <motion.div 
          className="absolute top-0 left-0 w-full bg-gold origin-top rounded-full shadow-[0_0_8px_rgba(201,183,156,0.8)]"
          style={{ height: '100%', scaleY }}
        />
        
        {/* The sliding element (Ring) */}
        <motion.div 
          className="absolute left-1/2 -ml-2.5 flex items-center justify-center pt-1"
          style={{ top: ringY }}
        >
          <div className="relative flex items-center justify-center w-5 h-5">
             <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gold drop-shadow-md">
                <circle cx="12" cy="14" r="6" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6L14 10H10L12 6Z" fill="currentColor"/>
                <circle cx="12" cy="6" r="1.5" fill="white"/>
             </svg>
             <motion.div 
               animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.2, 1] }} 
               transition={{ duration: 2, repeat: Infinity }} 
               className="absolute inset-0 bg-gold/20 blur-md rounded-full -z-10"
             ></motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom dot */}
      <div className="w-1.5 h-1.5 rounded-full bg-gold/50 mt-2"></div>
    </div>
  );
}
