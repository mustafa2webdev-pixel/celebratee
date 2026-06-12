/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Cover from './components/Cover';
import QuranVerse from './components/QuranVerse';
import Collage from './components/Collage';
import Welcome from './components/Welcome';
import Countdown from './components/Countdown';
import Venue from './components/Venue';
import TeamChallenge from './components/TeamChallenge';
import Wishes from './components/Wishes';
import Footer from './components/Footer';
import FloatingPetals from './components/FloatingPetals';
import DecorativeFloral from './components/DecorativeFloral';
import CustomScrollbar from './components/CustomScrollbar';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="relative min-h-screen bg-cream text-navy overflow-hidden">
      {/* Canvas Texture Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 bg-noise mix-blend-multiply opacity-20"></div>
      
      {isOpened && <CustomScrollbar />}

      <AnimatePresence>
        {!isOpened && <Cover onOpen={() => setIsOpened(true)} />}
      </AnimatePresence>

      {isOpened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full relative z-10"
        >
          <DecorativeFloral />
          <FloatingPetals />
          <QuranVerse />
          <Collage />
          <Welcome />
          <Countdown />
          <Venue />
          <TeamChallenge />
          <Wishes />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
