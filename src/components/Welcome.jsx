// src/components/WelcomeOverlay.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const WelcomeOverlay = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowAnimation(false), 4000); // 4 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showAnimation && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full  z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          {/* Curtain Reveal Effect */}
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 2, ease: 'easeInOut', delay: 1 }}
            className="absolute w-full h-full origin-left bg-gradient-to-r from-accent via-black to-accent"
          />

          {/* Light burst in center */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0.8 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="w-40 h-40 bg-white rounded-full blur-2xl opacity-50"
          />
        
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeOverlay;
