import React from 'react';
import { motion } from 'motion/react';
import SectionTitle from './SectionTitle';

export default function Venue() {
  return (
    <section id="venue" className="py-24 px-4 flex flex-col justify-center items-center relative overflow-hidden z-10">
      <SectionTitle subtitle="ننتظركم بكل حب" title="مكان الحفل" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: "spring", bounce: 0.3 }}
        className="relative z-10 w-full max-w-sm mt-8"
      >
        <div className="bg-[#FCFAED] rounded-t-full pt-20 pb-12 px-6 text-center shadow-xl border border-[#e8dfce] relative overflow-hidden bg-parchment">
           
           {/* Hanging string (Visual only) */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-10 bg-gold/40 z-10"></div>
           <div className="absolute top-10 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-200 rounded-full shadow-inner border border-gray-300 z-10">
               <div className="absolute inset-[3px] bg-[#8CA6BE] rounded-full"></div>
           </div>

           {/* Inner decorative border */}
           <div className="absolute inset-x-3 top-3 bottom-3 border border-gold/30 rounded-t-full pointer-events-none z-10"></div>
           <div className="absolute inset-x-4 top-4 bottom-4 border border-dashed border-dusty-blue/30 rounded-t-full pointer-events-none z-10"></div>

           <div className="relative z-20 mt-8 flex flex-col items-center">
              <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center shadow-sm border border-gold/40 mb-6">
                 <svg className="w-8 h-8 text-dusty-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                 </svg>
              </div>

              <h3 className="font-messiri font-bold text-4xl text-navy mb-4 border-b border-gold/30 pb-4 w-3/4">قاعة جنتي</h3>
              <p className="font-cairo text-lg text-olive mb-2 font-bold">دسوق - كفر الشيخ</p>
              <p className="font-serif text-sm text-dusty-blue tracking-widest mb-10">8:00 PM</p>

              <a 
                href="https://maps.app.goo.gl/MM849P753dTaFrKU8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-dusty-blue text-white font-cairo px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-navy transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>اعرف الموقع على الخريطة</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 ml-1">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </a>
           </div>

           {/* Bottom decorative floral cutouts */}
           <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-olive/10 rounded-full blur-xl"></div>
           <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gold/20 rounded-full blur-xl"></div>
        </div>
      </motion.div>
    </section>
  );
}
