import React from 'react';
import { motion } from 'motion/react';
import { Flower2, Flower } from 'lucide-react';

export default function DecorativeFloral() {
    return (
        <div className="fixed inset-0 pointer-events-none z-[3] overflow-hidden">
            {/* Top Right Floral Array */}
            <motion.div 
               initial={{ opacity: 0, x: 20, y: -20 }}
               animate={{ opacity: 1, x: 0, y: 0 }}
               transition={{ duration: 1.5, delay: 1 }}
               className="absolute -top-16 -right-16 text-dusty-blue/30 rotate-45"
            >
                <div className="relative w-64 h-64">
                    <Flower2 className="absolute top-10 left-10 w-32 h-32" strokeWidth={1} />
                    <Flower className="absolute top-20 left-32 w-20 h-20 text-olive/20" strokeWidth={1} />
                    <Flower2 className="absolute top-32 left-10 w-16 h-16 text-gold/30" strokeWidth={1} />
                    {/* Add some dots/bubbles for baby's breath feel */}
                    <div className="absolute top-24 left-16 w-3 h-3 bg-white/80 rounded-full blur-[1px]"></div>
                    <div className="absolute top-12 left-32 w-4 h-4 bg-white/80 rounded-full blur-[1px]"></div>
                    <div className="absolute top-16 left-40 w-2 h-2 bg-white/80 rounded-full blur-[1px]"></div>
                </div>
            </motion.div>

            {/* Bottom Left Floral Array */}
            <motion.div 
               initial={{ opacity: 0, x: -20, y: 20 }}
               animate={{ opacity: 1, x: 0, y: 0 }}
               transition={{ duration: 1.5, delay: 1.5 }}
               className="absolute -bottom-16 -left-16 text-olive/20 -rotate-45"
            >
                <div className="relative w-64 h-64">
                    <Flower2 className="absolute bottom-10 right-10 w-32 h-32" strokeWidth={1} />
                    <Flower className="absolute bottom-20 right-32 w-20 h-20 text-dusty-blue/30" strokeWidth={1} />
                    <Flower2 className="absolute bottom-32 right-10 w-16 h-16 text-gold/30" strokeWidth={1} />
                    <div className="absolute bottom-24 right-16 w-3 h-3 bg-white/80 rounded-full blur-[1px]"></div>
                    <div className="absolute bottom-12 right-32 w-4 h-4 bg-white/80 rounded-full blur-[1px]"></div>
                </div>
            </motion.div>
        </div>
    )
}
