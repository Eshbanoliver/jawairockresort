import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, MapPin, Phone, ArrowRight, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#120e0a] border-t border-white/5 pt-16 pb-8 overflow-hidden">
      {/* Subtle jungle background overlay */}
      <div 
        className="absolute inset-0 opacity-soft pointer-events-none"
        style={{
          backgroundImage: `url('/images/jawai_dam.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Forest tree silhouette decorative svg at the top of the footer */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10" style={{ height: '35px', transform: 'scaleY(-1) translateY(1px)' }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full" style={{ fill: '#1b3d20', opacity: 0.15 }}>
          <path d="M0,0 C90,40 130,80 220,50 C300,20 340,70 420,45 C500,20 540,80 620,50 C700,20 740,80 820,55 C900,30 940,80 1020,50 C1100,20 1140,65 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
 
       <div className="container relative z-10">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
           {/* Brand Info */}
           <div className="flex flex-col gap-5">
             <Link to="/" className="flex items-center gap-2">
               <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                 <Compass className="w-6 h-6 text-[#e07a5f]" />
               </div>
               <div>
                 <span className="font-heading font-extrabold text-xl tracking-wider block text-white">
                   JAWAI ROCK
                 </span>
                 <span className="text-tiny uppercase tracking-super-wide font-medium text-[#7b9e54] block -mt-1">
                   Luxury Safari Resort
                 </span>
               </div>
             </Link>
             <p className="text-sm text-gray-400">
              Immerse yourself in a luxurious wilderness sanctuary nestled among the ancient granite monoliths of Jawai. Experience premium safari lodge comfort, peaceful rocky landscapes, and thrilling wildlife tracking.
            </p>
            {/* Social Placeholder Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#e07a5f]/40 hover:text-[#e07a5f] transition-all flex items-center justify-center text-gray-400" aria-label="Facebook (link blank)">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h2V2h-3a4 4 0 00-4 4v2z"/>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#e07a5f]/40 hover:text-[#e07a5f] transition-all flex items-center justify-center text-gray-400" aria-label="Instagram (link blank)">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#e07a5f]/40 hover:text-[#e07a5f] transition-all flex items-center justify-center text-gray-400" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://wa.me/918058571919" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#28a745]/40 hover:text-[#28a745] transition-all" aria-label="WhatsApp Chat">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-white mb-5 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-[#e07a5f]">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 list-none">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-white flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#7b9e54] group-hover:translate-x-1 transition-transform" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-white flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#7b9e54] group-hover:translate-x-1 transition-transform" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-400 hover:text-white flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#7b9e54] group-hover:translate-x-1 transition-transform" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-sm text-gray-400 hover:text-white flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#7b9e54] group-hover:translate-x-1 transition-transform" />
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-white flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#7b9e54] group-hover:translate-x-1 transition-transform" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Main Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-white mb-5 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-[#e07a5f]">
              Our Stays & Safaris
            </h4>
            <ul className="flex flex-col gap-3 list-none">
              <li>
                <Link to="/services" className="text-sm text-gray-400 hover:text-white flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e07a5f] group-hover:scale-125 transition-transform" />
                  Luxury Resort & Villas
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-400 hover:text-white flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e07a5f] group-hover:scale-125 transition-transform" />
                  Jungle Safari Stay Packages
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-400 hover:text-white flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e07a5f] group-hover:scale-125 transition-transform" />
                  Peaceful Farm Style Stay
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-400 hover:text-white flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e07a5f] group-hover:scale-125 transition-transform" />
                  Marriage Garden & Event Plots
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-400 hover:text-white flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e07a5f] group-hover:scale-125 transition-transform" />
                  Corporate Group Bookings
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-white mb-5 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-[#e07a5f]">
              Reach Us
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#e07a5f] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400 leading-relaxed">
                  Jawai bandh road, near galthani panchayat, Jawai, Rajasthan – 306126
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#7b9e54] shrink-0" />
                <a href="tel:08058571919" className="text-sm text-gray-400 hover:text-white transition-colors">
                  080585 71919
                </a>
              </div>
              <div className="mt-2 p-3 rounded-lg bg-white/5 border border-white/5 text-center">
                <span className="text-xs uppercase tracking-widest text-[#7b9e54] font-semibold block mb-1">Safari Season</span>
                <span className="text-xs text-gray-400">Open year-round. Best sightings: October to April.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/5 pt-8 mt-8 text-center text-xs text-gray-500">
          <p className="leading-relaxed">
            ©️ Copyright 2026 | Jawai Rock Resort | All Rights Reserved | Powered by <a href="https://www.futurexdigitalmarketing.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#28a745', fontWeight: '500' }}>Future X Digital Marketing</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
