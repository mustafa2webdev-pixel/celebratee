import React from 'react';
import { motion } from 'motion/react';
import OrnateDivider from './OrnateDivider';

export default function SectionTitle({ title, subtitle, className = "" }: { title: string, subtitle?: string, className?: string }) {
  return (
    <div className={`relative flex flex-col items-center justify-center mb-16 text-center ${className}`}>
      {/* Decorative premium fine-line SVG behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-48 opacity-20 pointer-events-none z-0">
         <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,50 Q100,0 190,50" stroke="#D4AF37" strokeWidth="0.5" fill="none" />
            <path d="M10,50 Q100,100 190,50" stroke="#D4AF37" strokeWidth="0.5" fill="none" />
            <circle cx="100" cy="50" r="45" stroke="#9DB4C7" strokeWidth="0.5" fill="none" strokeDasharray="2 4"/>
         </svg>
      </div>
      
      {subtitle && (
        <span className="font-cairo text-xs text-olive uppercase tracking-[0.3em] mb-4 z-10 relative bg-cream/90 px-6 py-1 rounded-full border border-gold/30 shadow-sm backdrop-blur-md">
          {subtitle}
        </span>
      )}
      <h2 className="font-messiri font-bold text-4xl md:text-6xl text-navy z-10 relative drop-shadow-sm pt-2">
        {title}
      </h2>
      <OrnateDivider />
    </div>
  )
}
