import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-4 nav-glass' 
            : 'py-6 bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#e07a5f]/40 transition-colors">
              <Compass className="w-6 h-6 text-[#e07a5f] group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div>
              <span className="font-heading font-extrabold text-xl tracking-wider block text-white group-hover:text-[#e07a5f] transition-colors">
                JAWAI ROCK
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-gray-400 block -mt-1">
                Luxury Safari Resort
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8 list-none">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className={`relative font-medium text-sm tracking-wide transition-colors py-2 uppercase ${
                        isActive ? 'text-[#e07a5f]' : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-0 w-full h-[2px] bg-[#e07a5f]"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link to="/contact" className="btn btn-primary px-5 py-2.5 text-sm uppercase">
              Book Your Stay
            </Link>
          </div>

          {/* Mobile Hamburguer Trigger */}
          <div className="md:hidden flex items-center gap-4">
            <Link to="tel:08058571919" className="p-2-5 rounded-lg bg-white/5 border border-white/10 text-white hover:text-[#e07a5f] transition-colors" aria-label="Call Jawai Rock Resort">
              <Phone className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2-5 rounded-lg bg-white/5 border border-white/10 text-white"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 top-[73px] w-full h-[calc(100vh-73px)] mobile-menu-glass z-40 md:hidden flex flex-col justify-between py-12 px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col gap-6 text-center list-none">
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`text-xl font-heading font-medium tracking-wider uppercase block py-2 ${
                        isActive ? 'text-[#e07a5f]' : 'text-gray-300'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            <motion.div
              className="flex flex-col gap-4 text-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/contact" className="btn btn-primary w-full max-w-xs py-3 uppercase">
                Book Your Stay
              </Link>
              <a href="tel:08058571919" className="text-sm font-medium text-gray-400 hover:text-white mt-2 block">
                Call us: 080585 71919
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
