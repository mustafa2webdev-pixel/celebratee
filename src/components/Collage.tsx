import React from 'react';
import { motion } from 'motion/react';

export default function Collage() {
  const staggerDelay = 0.15;

  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden flex justify-center items-center">
      <div className="relative w-full max-w-3xl min-h-auto md:min-h-[700px] flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8 pt-8 md:pt-0">
        
        {/* Background decorative flower shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
          whileInView={{ opacity: 0.6, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: staggerDelay }}
          className="absolute top-10 right-0 md:-right-10 w-40 h-40 bg-gold/20 rounded-full blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
          whileInView={{ opacity: 0.4, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: staggerDelay * 2 }}
          className="absolute bottom-10 left-0 md:-left-10 w-48 h-48 bg-dusty-blue/30 rounded-full blur-2xl"
        ></motion.div>

        {/* Opened Envelope Top Flap (Decorative) */}
        <motion.div
           initial={{ opacity: 0, y: -30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: staggerDelay * 3 }}
           className="hidden md:block absolute top-[5%] lg:top-[-5%] left-1/2 -translate-x-1/2 w-64 h-32 opacity-50 z-0"
        >
          <div className="w-full h-full bg-dusty-blue" style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}></div>
        </motion.div>

        {/* Polaroid Placeholder */}
        <motion.div
           initial={{ opacity: 0, y: 30, rotate: 0 }}
           whileInView={{ opacity: 1, y: 0, rotate: -5 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: staggerDelay * 4 }}
           className="relative md:absolute z-20 w-40 h-56 bg-[url('/couple.png')] bg-gray-200 bg-cover bg-center p-2 shadow-lg border-[6px] border-white pb-8 md:top-1/4 md:-left-12 order-1 md:order-none"
        >
           <div className="absolute bottom-1 left-0 w-full text-center">
              <span className="font-english-script text-xl text-navy/70">M & R</span>
           </div>
        </motion.div>

        {/* Main Scalloped Card with parchment texture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-[95%] sm:w-[85%] max-w-sm bg-[#FCFAED] shadow-2xl px-1 py-1 rounded-sm bg-parchment order-2 md:order-none"
        >
          <div className="border border-gold/40 p-8 m-2 text-center flex flex-col items-center bg-white/40 h-full justify-between relative z-10 backdrop-blur-[2px]">
            <div>
               <p className="font-cairo text-dusty-blue mb-6 tracking-[0.2em] text-xs uppercase font-bold">يسعدنا دعوتكم لحفل خطوبة</p>
               <h2 className="font-messiri font-bold text-4xl sm:text-5xl md:text-6xl text-navy my-4 leading-tight drop-shadow-sm flex flex-col items-center">
                   <div className="relative inline-block whitespace-nowrap">
                      محمود
                      <svg className="absolute -top-3 -right-4 w-6 h-6 sm:w-8 sm:h-8 text-navy drop-shadow-sm rotate-[-15deg] opacity-90" viewBox="0 0 24 24" fill="currentColor">
                         <path d="M4 6L10 10V14L4 18V6ZM20 6L14 10V14L20 18V6ZM10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10V14C14 15.1 13.1 16 12 16C10.9 16 10 15.1 10 14V10Z" />
                      </svg>
                   </div>
                   <span className="font-english-script text-4xl sm:text-5xl text-gold-foil my-1 sm:my-2 inline-block">&</span>
                   <div className="relative inline-block whitespace-nowrap">
                      روان
                      <svg className="absolute -top-3 -left-1 w-6 h-6 sm:w-8 sm:h-8 text-gold drop-shadow-sm rotate-[10deg] opacity-90" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3 7h-6zM3 10l4 5h-2l-3-5zm18 0l-3 5h-2l4-5zm-1 7H4v4h16v-4z" />
                      </svg>
                   </div>
               </h2>
               
               <div className="flex items-center justify-center w-full my-6 opacity-60">
                   <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-gold"></div>
                   <div className="mx-2 w-1.5 h-1.5 bg-gold rotate-45"></div>
                   <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-gold"></div>
               </div>

               <p className="font-messiri text-xl text-navy tracking-wider mb-2 font-bold">١٨ يونيو ٢٠٢٦</p>
               <p className="font-cairo text-sm text-olive/80">قاعة جنتي - دسوق</p>
            </div>
          </div>
        </motion.div>

        {/* Round Details Button */}
        <motion.a
           href="#venue"
           initial={{ opacity: 0, y: 20, rotate: 0 }}
           whileInView={{ opacity: 1, y: 0, rotate: 10 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: staggerDelay * 6 }}
           className="absolute bottom-10 right-0 md:-right-8 w-28 h-28 rounded-full bg-dusty-blue/90 text-white shadow-lg flex items-center justify-center p-4 text-center z-20 cursor-pointer backdrop-blur-sm border border-white/20 hover:bg-navy transition-colors duration-300"
        >
           <span className="font-cairo text-xs leading-tight">للتفاصيل<br/>اضغط هنا</span>
        </motion.a>

      </div>
    </section>
  );
}
