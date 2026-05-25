import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LeafAnimation } from '../components/LeafAnimation';
import { SectionDivider } from '../components/SectionDivider';
import { Star, Quote, Compass, Tent, Users, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'safari' | 'stay' | 'events'>('all');

  const reviews = [
    {
      quote: "Our stay at Jawai Rock Resort was magical. The luxury tents blend perfectly with the rugged wild hills. We spotted a leopard on our very first evening safari! The hospitality was exceptional.",
      author: "Aarav Sharma",
      role: "Wildlife Enthusiast",
      category: 'safari',
      rating: 5,
      date: "April 2026",
      icon: <Compass className="w-3.5 h-3.5" />,
      themeClass: "card-theme-sage",
      badgeColor: "#7b9e54"
    },
    {
      quote: "Peaceful environment, beautiful views near the Jawai Dam, and delicious local food. Highly recommend the family villa stays. It's budget-friendly yet feels incredibly premium.",
      author: "Priya Patel",
      role: "Family Vacationer",
      category: 'stay',
      rating: 5,
      date: "May 2026",
      icon: <Tent className="w-3.5 h-3.5" />,
      themeClass: "card-theme-gold",
      badgeColor: "#e07a5f"
    },
    {
      quote: "Organized our corporate retreat here and the experience was flawless. Excellent conference space, team-building safari packages, and stunning campfire nights among the granite rocks.",
      author: "Vikram Malhotra",
      role: "HR Director, TechCorp",
      category: 'events',
      rating: 5,
      date: "March 2026",
      icon: <Users className="w-3.5 h-3.5" />,
      themeClass: "card-theme-teal",
      badgeColor: "#5a8ca0"
    },
    {
      quote: "The resort location is perfect. Just minutes from the leopard spots. Our tracker was incredibly skilled, tracking footmarks to find a mother and cub resting on a granite ledge. A dream come true!",
      author: "Robert Miller",
      role: "Nature Photographer (UK)",
      category: 'safari',
      rating: 5,
      date: "January 2026",
      icon: <Compass className="w-3.5 h-3.5" />,
      themeClass: "card-theme-sage",
      badgeColor: "#7b9e54"
    },
    {
      quote: "We hosted our destination wedding at the Jawai Rock Resort party plot. The granite cliffs illuminated with spotlights created a breathtaking view. The management handled dining for 200+ guests beautifully.",
      author: "Neha & Rohan Mehta",
      role: "Bride & Groom",
      category: 'events',
      rating: 5,
      date: "February 2026",
      icon: <Users className="w-3.5 h-3.5" />,
      themeClass: "card-theme-teal",
      badgeColor: "#5a8ca0"
    },
    {
      quote: "The farm-style cottages are extremely peaceful. Waking up to peacock sounds, eating freshly picked organic guavas, and sipping hot tea looking at the hills. Will definitely return next season.",
      author: "Sunita Deshmukh",
      role: "Solo Traveler",
      category: 'stay',
      rating: 5,
      date: "December 2025",
      icon: <Tent className="w-3.5 h-3.5" />,
      themeClass: "card-theme-gold",
      badgeColor: "#e07a5f"
    }
  ];

  const filteredReviews = filter === 'all' 
    ? reviews 
    : reviews.filter(r => r.category === filter);

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section 
        className="relative py-32 flex items-center justify-center bg-cover bg-center text-center overflow-hidden"
        style={{
          backgroundImage: `url('/images/campfires.jpg')`,
          minHeight: '400px'
        }}
      >
        <div className="absolute inset-0 bg-[#120e0adc]/80 z-1" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange font-bold uppercase tracking-extra-wide text-sm block mb-2">Guest Diaries</span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white">Testimonials</h1>
            <p className="text-gray-300 max-w-xl mx-auto mt-4 text-base">
              Read real stories and safari reviews shared by families, wedding parties, and wildlife trackers who stayed with us.
            </p>
          </motion.div>
        </div>
        <SectionDivider type="rocks" color="#faf5f0" className="absolute bottom-0 left-0 w-full" />
      </section>

      {/* Testimonials List */}
      <section className="section-padding bg-[#120e0a] relative overflow-hidden">
        <LeafAnimation />
        <div className="container">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: 'all',    label: 'All Reviews',      icon: <Sparkles className="w-3.5 h-3.5" /> },
              { id: 'stay',   label: 'Stays & Villas',    icon: <Tent     className="w-3.5 h-3.5" /> },
              { id: 'safari', label: 'Leopard Safaris',   icon: <Compass  className="w-3.5 h-3.5" /> },
              { id: 'events', label: 'Weddings & Events', icon: <Users    className="w-3.5 h-3.5" /> }
            ].map(btn => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 border ${
                  filter === btn.id 
                    ? 'bg-[#e07a5f] text-white border-[#e07a5f] shadow-[0_0_24px_rgba(224,122,95,0.4)]' 
                    : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/25'
                }`}
              >
                {btn.icon}
                {btn.label}
              </button>
            ))}
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto justify-center">
            <AnimatePresence mode="wait">
              {filteredReviews.map((review, idx) => (
                <motion.div
                  key={review.author}
                  className={`service-card-premium text-left group ${review.themeClass}`}
                  style={{
                    maxWidth: '380px',
                    width: '100%',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '320px'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15, delay: idx * 0.05 }}
                  whileHover={{ 
                    y: -8, 
                    borderColor: 'rgba(224, 122, 95, 0.45)',
                    boxShadow: '0 20px 40px rgba(224, 122, 95, 0.15)',
                  }}
                >
                  <div className="service-card-content flex flex-col gap-5 h-full">
                    {/* Header: Stars & Large Quote Icon */}
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#e07a5f] text-[#e07a5f] group-hover:scale-110 transition-transform duration-300" />
                        ))}
                      </div>
                      <Quote className="w-10 h-10 shrink-0 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" style={{ color: 'var(--sunset-orange)', opacity: 0.12 }} />
                    </div>

                    {/* Review Quote Text */}
                    <p className="text-gray-300 text-sm italic leading-relaxed flex-grow">
                      "{review.quote}"
                    </p>

                    {/* Divider Line */}
                    <div className="h-px w-full" style={{ backgroundColor: 'rgba(0, 0, 0, 0.06)' }} />

                    {/* Footer: Avatar + Author Info */}
                    <div className="flex justify-between items-center gap-3">
                      <div className="flex items-center gap-3">
                        {/* Circle Avatar Initials */}
                        <div 
                          className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-extrabold text-xs text-white shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105" 
                          style={{ 
                            background: review.badgeColor,
                            color: '#ffffff'
                          }}
                        >
                          {review.author.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-white text-sm leading-tight mb-0.5 group-hover:text-orange transition-colors duration-300">{review.author}</h4>
                          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold block">{review.role}</span>
                        </div>
                      </div>
                      
                      {/* Badge category icon & Date */}
                      <div className="flex flex-col items-end gap-1">
                        <span 
                          className="p-1.5 rounded-lg text-white shrink-0 flex items-center justify-center shadow-sm"
                          style={{ background: review.badgeColor, color: '#ffffff', opacity: 0.8 }}
                          title={review.category}
                        >
                          {review.icon}
                        </span>
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{review.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};
