import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

interface Wish {
  id: string;
  name: string;
  message: string;
  timestamp: number;
}

export default function Wishes() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish = {
      name: name.trim(),
      message: message.trim(),
      timestamp: Date.now(),
    };

    try {
      await addDoc(collection(db, 'wishes'), newWish);
      setName('');
      setMessage('');
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error adding wish to Firestore:", error);
    }
  };

  return (
    <section className="py-24 px-4 max-w-3xl mx-auto relative z-10">
      <motion.div
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
         className="text-center mb-16"
      >
        <span className="font-cairo text-xs text-dusty-blue uppercase tracking-[0.3em] font-bold mb-4 block">رسائلكم تسعدنا</span>
        <h2 className="font-messiri font-bold text-5xl md:text-6xl text-navy mb-4">أمنيات للعروسين</h2>
        <p className="font-cairo text-olive">اتركوا لنا ذكرى جميلة من قلوبكم</p>
      </motion.div>

      {/* Envelope Form Design */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-lg mx-auto relative mb-24"
      >
         {/* Envelope Back */}
         <div className="absolute inset-0 bg-dusty-blue rounded-xl shadow-lg transform translate-y-8 z-0">
             <div className="absolute inset-2 border border-white/20 rounded-lg"></div>
         </div>
         
         {/* Envelope Flap (Opened) */}
         <div className="absolute -top-[120px] left-0 w-full h-[150px] bg-dusty-blue/90 z-0 origin-bottom shadow-sm" style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}></div>

         {/* The Letter (Form) */}
         <form id="wishes-form" onSubmit={handleSubmit} className="relative z-10 bg-[#fbf9f6] p-8 md:p-10 rounded-sm shadow-xl border border-[#e8dfce] mx-4 -mt-12 flex flex-col min-h-[300px] bg-ruled-paper transition-all duration-500">
            {/* Stamp decoration */}
            <div className="absolute top-4 left-4 w-12 h-14 border-2 border-[#e8dfce] p-1 opacity-70 rotate-3">
               <div className="w-full h-full border border-[#e8dfce] flex items-center justify-center font-serif text-[10px] text-olive/50 text-center leading-tight">
                  18<br/>JUN
               </div>
            </div>

            <div className="mt-8 mb-6 relative z-30">
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-none bg-transparent outline-none py-1 font-script italic text-3xl text-navy placeholder-dusty-blue/40 font-bold tracking-wide"
                placeholder="من: (اسمك)"
                required
              />
            </div>
            
            <div className="mb-6 relative flex-grow z-30">
              <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full border-none bg-transparent outline-none py-1 font-script italic text-3xl md:text-4xl text-navy/90 placeholder-dusty-blue/40 resize-none leading-loose tracking-wide pt-2"
                placeholder="إلى أجمل عروسين، ..."
                required
              ></textarea>
            </div>
         </form>
         
         {/* Envelope Front Flap */}
         <div className="absolute bottom-[-20px] left-0 w-full h-[60%] bg-dusty-blue z-20 rounded-b-xl shadow-[0_-5px_15px_rgba(0,0,0,0.05)] flex items-end justify-center pb-4 pointer-events-none" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 50% 30%, 0 0)'}}>
            {/* Wax Seal */}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-14 h-14 bg-olive rounded-full flex items-center justify-center shadow-inner border border-gold/30">
               <span className="text-white font-script text-xl italic">م & ر</span>
            </div>
         </div>

         {/* Submit Button Outside Envelope */}
         <div className="relative z-50 text-center mt-12 w-full">
            <button 
              type="submit" 
              form="wishes-form"
              className="bg-olive text-cream font-messiri px-10 py-3 rounded-full hover:bg-navy transition-colors cursor-pointer shadow-lg hover:-translate-y-1 transform duration-300 text-lg w-full md:w-auto"
            >
              إرسال الرسالة
            </button>
         </div>
      </motion.div>

      {/* Received Wishes - Masonry/Stacked style */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-6 text-center"
          >
            <p className="font-cairo text-navy font-bold text-lg">شكراً</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
