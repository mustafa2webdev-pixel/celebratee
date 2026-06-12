import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

// Elegant SVG paths instead of emojis
const paths = [
  "M15,0 C22,0 28,6 28,15 C28,24 22,30 15,30 C8,30 2,24 2,15 C2,6 8,0 15,0 Z", // Circle-ish petal
  "M15,0 C25,0 30,10 30,20 C30,30 15,30 0,20 C0,10 5,0 15,0 Z", // Drop petal
  "M0,15 C0,15 5,0 15,0 C25,0 30,15 30,15 C30,15 25,30 15,30 C5,30 0,15 0,15 Z"  // Pointy leaf
];

export default function FloatingPetals() {
  const [petals, setPetals] = useState<any[]>([]);

  useEffect(() => {
    // Generate petals only on right side (x: 50vw to 100vw)
    const newPetals = Array.from({ length: 20 }).map((_, i) => {
      const colors = ['text-white/40', 'text-dusty-blue/20', 'text-gold/20'];
      return {
        id: i,
        // x coordinate restricted to the right half of the screen
        x: 50 + Math.random() * 45, 
        delay: Math.random() * 15,
        duration: 20 + Math.random() * 20,
        size: 15 + Math.random() * 20, 
        path: paths[Math.floor(Math.random() * paths.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 0.4 + Math.random() * 0.4,
        rotation: Math.random() * 360,
      };
    });
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden w-full h-full">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ 
            y: -100, 
            rotate: petal.rotation,
            opacity: 0 
          }}
          animate={{ 
            y: '100vh', 
            rotate: petal.rotation + 360,
            opacity: [0, petal.opacity, petal.opacity, 0]
          }}
          transition={{ 
            duration: petal.duration, 
            repeat: Infinity, 
            delay: petal.delay,
            ease: "linear"
          }}
          className={`absolute drop-shadow-sm filter ${petal.color}`}
          style={{ 
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            left: `${petal.x}%`
          }}
        >
          <svg viewBox="0 0 30 30" fill="currentColor" className="w-full h-full">
            <path d={petal.path} />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
