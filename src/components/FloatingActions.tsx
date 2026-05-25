import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
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
      {/* Left side actions: WhatsApp and Phone Call (fixed bottom-left via inline style) */}
      <div 
        className="fixed flex items-center gap-3 z-40"
        style={{ bottom: '24px', left: '24px' }}
      >
        {/* WhatsApp Link */}
        <motion.a
          href="https://wa.me/918058571919"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110"
          style={{ 
            backgroundColor: '#25d366',
            boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)'
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', delay: 0.8 }}
          title="Chat on WhatsApp"
        >
          <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24" style={{ fill: 'white' }}>
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.988 3.283 1.489 4.961 1.49 5.41-.002 9.814-4.402 9.817-9.814.002-2.623-1.01-5.087-2.854-6.932C16.666 2.053 14.204 1.04 11.58 1.04c-5.414 0-9.819 4.403-9.822 9.816-.001 1.834.485 3.626 1.41 5.203l-.955 3.487 3.57-.936c1.554.848 3.125 1.29 4.864 1.29zm8.56-5.83c-.272-.135-1.61-.795-1.86-.887-.25-.09-.43-.135-.61.135-.18.27-.694.887-.85 1.067-.158.18-.315.2-.587.065-.27-.135-1.147-.422-2.186-1.35-.808-.72-1.353-1.61-1.512-1.88-.16-.27-.017-.417.118-.552.12-.12.27-.315.405-.47.135-.16.18-.27.27-.45.09-.18.045-.337-.02-.47-.067-.135-.61-1.47-.837-2.013-.22-.53-.44-.46-.61-.47-.156-.01-.337-.01-.518-.01-.18 0-.477.068-.727.34-.25.272-.953.933-.953 2.276s.977 2.64 1.113 2.82c.136.18 1.922 2.936 4.658 4.117.65.28 1.157.447 1.553.573.654.208 1.248.178 1.717.108.523-.078 1.61-.658 1.837-1.296.226-.638.226-1.185.158-1.296-.068-.11-.25-.2-.522-.335z" />
          </svg>
        </motion.a>

        {/* Call Link */}
        <motion.a
          href="tel:08058571919"
          className="w-12 h-12 rounded-full text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110"
          style={{ 
            backgroundColor: '#e07a5f',
            boxShadow: '0 4px 14px rgba(224, 122, 95, 0.4)'
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', delay: 1 }}
          title="Call Now"
        >
          <Phone className="w-5 h-5 text-white" fill="white" />
        </motion.a>
      </div>

      {/* Right side action: Scroll to Top (fixed bottom-right via inline style) */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            className="fixed text-white flex items-center justify-center shadow-lg hover:brightness-110 transition-all z-40"
            style={{ 
              bottom: '24px',
              right: '24px',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#112d15',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 4px 14px rgba(17, 45, 21, 0.3)'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            title="Scroll to Top"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-5 h-5 text-white" color="white" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
