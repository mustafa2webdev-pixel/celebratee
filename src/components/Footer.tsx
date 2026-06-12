import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Footer() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 3000], [0, -300]);

  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-end py-24 px-4 overflow-hidden text-center">
      {/* Fake watercolor dark background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 opacity-60 scale-125 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-dusty-blue/10 to-transparent blur-2xl"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeIn" }}
        className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center"
      >
        <p className="font-messiri text-olive text-2xl mb-6 italic">بكل الحب،</p>
        <h2 className="font-messiri font-bold text-6xl md:text-8xl text-navy mb-8 drop-shadow-sm">
           محمود <span className="font-english-script text-gold-foil mx-2 text-7xl md:text-9xl">&</span> روان
        </h2>
        
        <div className="flex items-center justify-center w-full mb-10 opacity-60">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-gold"></div>
            <div className="mx-3 w-2 h-2 bg-gold rotate-45"></div>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-gold"></div>
        </div>
        
        <p className="font-messiri text-navy text-center leading-loose text-lg md:text-2xl mb-16 max-w-lg px-4 opacity-90">
          "تقبّل الله منّا ومنكم، وبارك الله لنا، وجمع بيننا في خير وعلى طاعته."
        </p>
        
        {/* Decorative Closing Flower Placeholder */}
        <div className="w-48 h-24 mb-8 flex items-center justify-center relative">
          <div className="absolute w-64 h-32 bg-dusty-blue/20 blur-xl rounded-full"></div>
          <svg className="w-16 h-16 text-olive/60 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.514M11 5v.01"></path>
          </svg>
        </div>

        <p className="font-cairo text-dusty-blue tracking-[0.2em] text-sm">18 . 06 . 2026</p>
      </motion.div>
    </section>
  );
}
