import React from 'react';
import { motion } from 'motion/react';

export default function QuranVerse() {
  const text = "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا";
  const words = text.split(" ");

  return (
    <section className="min-h-[50vh] flex flex-col items-center justify-center py-24 px-6 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="text-center w-full max-w-2xl mx-auto"
      >
        <p className="font-messiri font-bold text-2xl md:text-3xl text-olive mb-10">
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="w-full text-center px-4"
        >
          <p className="font-amiri text-2xl md:text-3xl lg:text-4xl leading-loose text-navy text-center md:leading-loose lg:leading-loose">
            {text}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12 flex justify-center"
        >
           <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 15Q30 5 60 15T110 15" stroke="#7E7150" strokeWidth="1" fill="none"/>
              <circle cx="60" cy="15" r="3" fill="#C9B79C" />
              <path d="M50 15 Q55 10 60 15 Q55 20 50 15 Z" fill="#9DB4C7" />
              <path d="M70 15 Q65 10 60 15 Q65 20 70 15 Z" fill="#9DB4C7" />
           </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
