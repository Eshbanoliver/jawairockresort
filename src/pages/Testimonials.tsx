import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LeafAnimation } from '../components/LeafAnimation';
import { SectionDivider } from '../components/SectionDivider';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'safari' | 'stay' | 'events'>('all');

  const reviews = [
    {
      quote: "Our stay at Jawai Rock Resort was magical. The luxury tents blend perfectly with the rugged wild hills. We spotted a leopard on our very first evening safari! The hospitality was exceptional.",
      author: "Aarav Sharma",
      role: "Wildlife Enthusiast",
      category: 'safari',
      rating: 5,
      date: "April 2026"
    },
    {
      quote: "Peaceful environment, beautiful views near the Jawai Dam, and delicious local food. Highly recommend the family villa stays. It's budget-friendly yet feels incredibly premium.",
      author: "Priya Patel",
      role: "Family Vacationer",
      category: 'stay',
      rating: 5,
      date: "May 2026"
    },
    {
      quote: "Organized our corporate retreat here and the experience was flawless. Excellent conference space, team-building safari packages, and stunning campfire nights among the granite rocks.",
      author: "Vikram Malhotra",
      role: "HR Director, TechCorp",
      category: 'events',
      rating: 5,
      date: "March 2026"
    },
    {
      quote: "The resort location is perfect. Just minutes from the leopard spots. Our tracker was incredibly skilled, tracking footmarks to find a mother and cub resting on a granite ledge. A dream come true!",
      author: "Robert Miller",
      role: "Nature Photographer (UK)",
      category: 'safari',
      rating: 5,
      date: "January 2026"
    },
    {
      quote: "We hosted our destination wedding at the Jawai Rock Resort party plot. The granite cliffs illuminated with spotlights created a breathtaking view. The management handled dining for 200+ guests beautifully.",
      author: "Neha & Rohan Mehta",
      role: "Bride & Groom",
      category: 'events',
      rating: 5,
      date: "February 2026"
    },
    {
      quote: "The farm-style cottages are extremely peaceful. Waking up to peacock sounds, eating freshly picked organic guavas, and sipping hot tea looking at the hills. Will definitely return next season.",
      author: "Sunita Deshmukh",
      role: "Solo Traveler",
      category: 'stay',
      rating: 5,
      date: "December 2025"
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
          backgroundImage: `url('https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1920')`,
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
            <span className="text-orange font-bold uppercase tracking-[0.25em] text-sm block mb-2">Guest Diaries</span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white">Testimonials</h1>
            <p className="text-gray-300 max-w-xl mx-auto mt-4 text-base">
              Read real stories and safari reviews shared by families, wedding parties, and wildlife trackers who stayed with us.
            </p>
          </motion.div>
        </div>
        <SectionDivider type="rocks" color="#120e0a" className="absolute bottom-0 left-0 w-full" />
      </section>

      {/* Testimonials List */}
      <section className="section-padding bg-[#120e0a] relative overflow-hidden">
        <LeafAnimation />
        <div className="container">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'all', label: 'All Reviews' },
              { id: 'stay', label: 'Stays & Villas' },
              { id: 'safari', label: 'Leopard Safaris' },
              { id: 'events', label: 'Weddings & Events' }
            ].map(btn => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as any)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all border ${
                  filter === btn.id 
                    ? 'bg-[#e07a5f] text-white border-[#e07a5f] shadow-lg' 
                    : 'bg-white/5 text-gray-300 border-white/10 hover:border-white/30'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Testimonial Cards Masonry/Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredReviews.map((review, idx) => (
                <motion.div
                  key={review.author}
                  className="glass-card p-8 flex flex-col gap-5 text-left border border-white/5"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#e07a5f] text-[#e07a5f]" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-white/5 shrink-0" />
                  </div>

                  <p className="text-gray-300 text-sm italic leading-relaxed">
                    "{review.quote}"
                  </p>

                  <hr className="border-white/5 mt-auto" />

                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-heading font-bold text-white text-base leading-none mb-1">{review.author}</h4>
                      <span className="text-[11px] text-gray-400 uppercase tracking-wider">{review.role}</span>
                    </div>
                    <span className="text-xs text-orange font-semibold uppercase tracking-wider">{review.date}</span>
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
