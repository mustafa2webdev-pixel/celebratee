import React from 'react';
import { motion } from 'motion/react';

export default function OrnateDivider() {
  return (
    <div className="flex items-center justify-center w-full my-6 opacity-80">
        <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-gold"></div>
        <div className="mx-3 text-gold">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-45 opacity-80">
                <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor" opacity="0.6"/>
                <circle cx="12" cy="12" r="2" fill="currentColor"/>
            </svg>
        </div>
        <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-gold"></div>
    </div>
  )
}
