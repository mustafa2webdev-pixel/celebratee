import React from 'react';
import { motion } from 'motion/react';

export default function ArchBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-40">
        <div className="relative w-full max-w-lg h-[120%] flex items-center justify-center mix-blend-multiply">
            {/* Background watercolor blobs */}
            <div className="absolute top-0 right-[-10%] w-80 h-80 bg-cream/80 backdrop-blur-3xl rounded-full"></div>
            <div className="absolute bottom-[10%] left-[-10%] w-96 h-96 bg-[#ebdabe]/40 backdrop-blur-3xl rounded-full"></div>
            
            {/* Layered Arches */}
            <div className="absolute w-[85%] h-[80%] bg-[#ebdabe]/20 border border-gold/10 rounded-t-[500px] shadow-sm transform translate-y-8 -translate-x-4"></div>
            <div className="absolute w-[80%] h-[80%] bg-cream/90 border border-gold/20 rounded-t-[500px] shadow-sm flex items-start justify-center pt-8">
               {/* Faux texture inside arch */}
               <div className="w-full h-full opacity-5" style={{ backgroundImage: 'radial-gradient(#7E7150 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            </div>
            
            {/* Faux Floral overlays (abstract shapes representing petals and leaves) */}
            <div className="absolute top-[10%] -left-8 w-32 h-48 bg-dusty-blue/20 rounded-full blur-xl rotate-45"></div>
            <div className="absolute bottom-[20%] -right-8 w-40 h-40 bg-dusty-blue/10 rounded-full blur-xl -rotate-12"></div>
            <div className="absolute top-[30%] -right-12 w-24 h-24 bg-olive/10 rounded-full blur-lg rotate-45"></div>
        </div>
    </div>
  )
}
