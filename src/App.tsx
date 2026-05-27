import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { Home } from './pages/Home';

// Lazy load secondary pages to shrink the initial bundle size
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Testimonials = lazy(() => import('./pages/Testimonials').then(m => ({ default: m.Testimonials })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));

// Scroll Restoration component to reset window scroll position on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as any // Use instant scroll to prevent sliding visuals during transition
    });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Pages Content wrapper */}
      <main style={{ flex: '1 0 auto', paddingTop: '0px' }}>
        <Suspense fallback={<div style={{ minHeight: '60vh', backgroundColor: '#faf5f0' }}></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>

      {/* Safari Footer */}
      <Footer />

      {/* Floating Action Elements (Call, WhatsApp, Top Scroll) */}
      <FloatingActions />
    </Router>
  );
}

export default App;
