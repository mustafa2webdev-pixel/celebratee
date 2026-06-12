import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import ArchBackground from './ArchBackground';

export default function Welcome() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1500], [0, -150]);

  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden flex items-center justify-center min-h-[60vh]">
      <ArchBackground />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-2xl text-center"
      >
        <div className="inline-block p-8 md:p-12 bg-white/60 backdrop-blur-md rounded-lg shadow-sm border border-white/50">
           <svg className="w-12 h-12 mx-auto text-dusty-blue/50 mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
           
           <p className="font-amiri text-lg md:text-2xl lg:text-3xl leading-relaxed md:leading-loose text-navy italic">
             وسط فرحتنا الكبيرة، يطيب لنا أن نشاركم أجمل لحظة في حياتنا.<br/>
             بحضوركم تكتمل الفرحة، وبدعائكم تزداد بهجتنا.<br/>
             يسعدنا ويشرّفنا حضوركم لمشاركتنا هذه اللحظة
           </p>
        </div>
      </motion.div>
    </section>
  );
}
