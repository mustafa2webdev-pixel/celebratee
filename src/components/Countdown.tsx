import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionTitle from './SectionTitle';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TimeUnit = ({ label, value }: { label: string, value: number }) => (
  <div className="flex flex-col items-center mx-1 md:mx-3 relative group">
    <div className="w-16 h-20 md:w-24 md:h-28 bg-[#fbf9f6] border border-[#e8dfce] shadow-sm rounded-sm flex items-center justify-center relative overflow-hidden mb-3 bg-ruled-paper transition-transform duration-300 group-hover:-translate-y-1">
       {/* Subtle inner fold effect */}
       <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-black/5 to-transparent z-0"></div>
       <div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-gray-300 z-0 opacity-50"></div>
       <AnimatePresence mode="popLayout">
         <motion.span
           key={value}
           initial={{ rotateX: -90, opacity: 0 }}
           animate={{ rotateX: 0, opacity: 1 }}
           exit={{ rotateX: 90, opacity: 0 }}
           transition={{ duration: 0.4 }}
           style={{ transformOrigin: 'bottom' }}
           className="font-serif text-3xl md:text-5xl text-dusty-blue relative z-10"
         >
           {value.toString().padStart(2, '0')}
         </motion.span>
       </AnimatePresence>
    </div>
    <span className="font-cairo text-sm md:text-base text-olive font-bold tracking-wider">{label}</span>
  </div>
);

export default function Countdown() {
  const targetDate = new Date('2026-06-18T20:00:00').getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate - new Date().getTime();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto px-4"
      >
        <SectionTitle subtitle="بانتظار اللحظة المنتظرة" title="فاضل على فرحتنا..." />
        
        <div className="bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 relative mt-8">
           {/* Decorative Wax Seal on Card */}
           <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-dusty-blue rounded-full shadow-md border border-white/40 flex items-center justify-center z-20">
              <span className="font-script italic text-white text-lg">M&R</span>
           </div>

           <div className="flex justify-center items-center flex-row-reverse" dir="ltr">
              <TimeUnit label="أيام" value={timeLeft.days} />
              <span className="text-2xl md:text-4xl text-gold/30 self-start mt-6 md:mt-8 font-serif">:</span>
              <TimeUnit label="ساعات" value={timeLeft.hours} />
              <span className="text-2xl md:text-4xl text-gold/30 self-start mt-6 md:mt-8 font-serif">:</span>
              <TimeUnit label="دقائق" value={timeLeft.minutes} />
              <span className="text-2xl md:text-4xl text-gold/30 self-start mt-6 md:mt-8 font-serif">:</span>
              <TimeUnit label="ثواني" value={timeLeft.seconds} />
           </div>
        </div>
      </motion.div>
    </section>
  );
}
