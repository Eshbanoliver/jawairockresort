import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingActions: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Left side actions: WhatsApp and Phone Call */}
      <div className="fixed bottom-6 left-6 flex flex-col gap-4 z-40">
        {/* WhatsApp Link */}
        <motion.a
          href="https://wa.me/918058571919"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25d366] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110"
          style={{ animation: 'pulse-green 2s infinite' }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', delay: 0.8 }}
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-white text-[#25d366]" />
        </motion.a>

        {/* Call Link */}
        <motion.a
          href="tel:08058571919"
          className="w-12 h-12 rounded-full bg-[#e07a5f] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110"
          style={{ animation: 'pulse-glow 2s infinite' }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', delay: 1 }}
          title="Call Now"
        >
          <Phone className="w-5 h-5 fill-white text-[#e07a5f]" />
        </motion.a>
      </div>

      {/* Right side action: Scroll to Top */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#1b3d20] border border-white/10 text-white flex items-center justify-center shadow-lg hover:bg-[#2c5932] transition-colors z-40"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            title="Scroll to Top"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
