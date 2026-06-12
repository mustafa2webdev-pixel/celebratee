import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionTitle from './SectionTitle';
import { collection, addDoc, onSnapshot, query } from 'firebase/firestore';
import { db } from '../firebase';

export default function TeamChallenge() {
  const [groomVotes, setGroomVotes] = useState(0);
  const [brideVotes, setBrideVotes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const [animatingTeam, setAnimatingTeam] = useState<'groom' | 'bride' | null>(null);
  const [votedTeam, setVotedTeam] = useState<'groom' | 'bride' | null>(null);

  useEffect(() => {
    // Keep local storage for preventing multiple votes per browser device
    if (localStorage.getItem('votes:hasVoted')) {
      setHasVoted(true);
      setVotedTeam(localStorage.getItem('votes:team') as 'groom' | 'bride' | null);
    }

    const q = query(collection(db, 'votes'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      let groom = 0;
      let bride = 0;
      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.team === 'groom') groom++;
        if (data.team === 'bride') bride++;
      });
      setGroomVotes(groom);
      setBrideVotes(bride);
    }, (error) => {
      console.error("Firestore Error:", error);
    });

    return () => unsubscribe();
  }, []);

  const handleVote = async (team: 'groom' | 'bride') => {
    if (hasVoted) return;

    // Optimistically select the team
    localStorage.setItem('votes:hasVoted', 'true');
    localStorage.setItem('votes:team', team);
    setHasVoted(true);
    setAnimatingTeam(team);
    setVotedTeam(team);

    try {
      await addDoc(collection(db, 'votes'), {
        team,
        timestamp: Date.now()
      });
    } catch (error) {
      console.error("Error adding vote to Firestore:", error);
    }
  };

  const totalVotes = groomVotes + brideVotes;
  const groomPercentage = totalVotes === 0 ? 50 : Math.round((groomVotes / totalVotes) * 100);
  const bridePercentage = totalVotes === 0 ? 50 : Math.round((brideVotes / totalVotes) * 100);

  return (
    <section className="py-24 px-4 w-full max-w-4xl mx-auto overflow-hidden relative z-10">
      <motion.div
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
      >
        <SectionTitle subtitle="تحدي الحبايب" title="مين أكتر ؟" />
        <p className="font-cairo text-olive text-lg text-center mb-10 -mt-8 relative z-10">فريق العريس ولا فريق العروسة؟</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 flex flex-col items-center relative overflow-hidden"
      >
         {/* Subtle decoration inside card */}
         <div className="absolute -top-10 -right-10 w-32 h-32 bg-dusty-blue/5 rounded-full blur-2xl"></div>
         <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gold/5 rounded-full blur-2xl"></div>

         <div className="w-full flex flex-row items-center justify-between mb-10 md:px-8 relative z-10">
            
            {/* Groom side */}
            <div className="text-center w-[40%] flex flex-col items-center">
               <div className="w-16 h-16 md:w-20 md:h-20 bg-dusty-blue/10 rounded-full flex items-center justify-center mb-4 border border-dusty-blue/20">
                   <h3 className="font-script text-3xl md:text-4xl text-dusty-blue mt-2 pt-1">M</h3>
               </div>
               <h3 className="font-cairo text-lg md:text-xl text-navy font-bold mb-1">فريق محمود</h3>
               
               <motion.p 
                 key={groomVotes}
                 initial={{ scale: animatingTeam === 'groom' ? 1.5 : 1, color: animatingTeam === 'groom' ? '#9DB4C7' : '#7E7150' }}
                 animate={{ scale: 1, color: '#7E7150' }}
                 className="font-serif text-3xl md:text-4xl text-olive mb-6"
               >
                  {groomVotes}
               </motion.p>
               
               <button 
                  onClick={() => handleVote('groom')}
                  disabled={hasVoted}
                  className={`font-cairo text-sm md:text-base px-4 py-2 md:px-8 md:py-3 rounded-full transition-all w-full max-w-[160px] ${
                     hasVoted 
                     ? 'bg-light-gray/20 text-gray-400 cursor-not-allowed opacity-50' 
                     : 'bg-dusty-blue text-white shadow-md hover:bg-navy hover:shadow-lg hover:-translate-y-1 cursor-pointer transform'
                  }`}
               >
                  صوت للعريس
               </button>
            </div>

            {/* VS Badge */}
            <div className="text-center w-[20%] flex items-center justify-center relative">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-cream flex items-center justify-center shadow-inner border border-gold/20 z-10 text-xl md:text-2xl text-gold/80 font-serif italic absolute">
                   VS
                </div>
            </div>

            {/* Bride side */}
            <div className="text-center w-[40%] flex flex-col items-center">
               <div className="w-16 h-16 md:w-20 md:h-20 bg-olive/10 rounded-full flex items-center justify-center mb-4 border border-olive/20">
                   <h3 className="font-script text-3xl md:text-4xl text-olive mt-2 pt-1">R</h3>
               </div>
               <h3 className="font-cairo text-lg md:text-xl text-navy font-bold mb-1">فريق روان</h3>
               
               <motion.p 
                 key={brideVotes}
                 initial={{ scale: animatingTeam === 'bride' ? 1.5 : 1, color: animatingTeam === 'bride' ? '#7E7150' : '#7E7150' }}
                 animate={{ scale: 1, color: '#7E7150' }}
                 className="font-serif text-3xl md:text-4xl text-olive mb-6"
               >
                  {brideVotes}
               </motion.p>
               
               <button 
                  onClick={() => handleVote('bride')}
                  disabled={hasVoted}
                  className={`font-cairo text-sm md:text-base px-4 py-2 md:px-8 md:py-3 rounded-full transition-all w-full max-w-[160px] ${
                     hasVoted 
                     ? 'bg-light-gray/20 text-gray-400 cursor-not-allowed opacity-50' 
                     : 'bg-olive text-white shadow-md hover:bg-navy hover:shadow-lg hover:-translate-y-1 cursor-pointer transform'
                  }`}
               >
                  صوتي للعروسة
               </button>
            </div>

         </div>

         {/* Progress Bar Container */}
         <div className="w-full relative px-2">
             <div className="w-full h-3 md:h-4 bg-light-gray/20 rounded-full overflow-hidden flex shadow-inner relative z-10">
                <motion.div 
                   initial={{ width: '50%' }}
                   animate={{ width: `${groomPercentage}%` }}
                   transition={{ duration: 1, type: "spring", bounce: 0.2 }}
                   className="h-full bg-dusty-blue"
                ></motion.div>
                <div className="h-full w-0.5 bg-white absolute shrink-0" style={{ left: `${groomPercentage}%` }}></div>
                <motion.div 
                   initial={{ width: '50%' }}
                   animate={{ width: `${bridePercentage}%` }}
                   transition={{ duration: 1, type: "spring", bounce: 0.2 }}
                   className="h-full bg-olive/80"
                ></motion.div>
             </div>
             
             {/* Percentages Text */}
             <div className="flex justify-between mt-2 px-1">
                <span className="font-cairo text-xs md:text-sm text-dusty-blue font-bold">{Math.round(groomPercentage)}%</span>
                <span className="font-cairo text-xs md:text-sm text-olive font-bold">{Math.round(bridePercentage)}%</span>
             </div>
         </div>

         <AnimatePresence>
         {hasVoted && (
             <motion.div 
               initial={{ opacity: 0, y: 10, height: 0 }}
               animate={{ opacity: 1, y: 0, height: 'auto' }}
               className="font-cairo text-navy mt-6 text-base md:text-lg text-center font-bold tracking-wide flex items-center justify-center gap-2"
             >
               <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-olive">
                  <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="currentColor" fillOpacity="0.1"/>
                  <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
               {votedTeam === 'groom' ? 'أنت من فريق الأولاد 🤵' : votedTeam === 'bride' ? 'أنتِ من فريق البنات 👰' : null}
             </motion.div>
         )}
         </AnimatePresence>
      </motion.div>
    </section>
  );
}
