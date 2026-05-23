import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LeafAnimation } from '../components/LeafAnimation';
import { SectionDivider } from '../components/SectionDivider';
import {
  Tent, Sparkles, Compass, Users, Heart,
  Check, Phone, MessageSquare, BookOpen, Clock, ArrowRight
} from 'lucide-react';

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'stays' | 'safaris' | 'events'>('all');

  const serviceCategories = [
    {
      id: 'stays',
      title: "Luxury Stays & Villa Accommodations",
      tagline: "Unwind in pristine comfort",
      desc: "Premium lodging options that combine local aesthetic finishes with high-end modern amenities — a tranquil sanctuary after long safari drives.",
      img: "/images/luxury_cottage.jpg",
      badge: "Stays & Villas",
      features: [
        "Luxury Resort Cottages in Jawai",
        "Luxury Private Villas & Farm Stays",
        "Peaceful Farm-Style Mud-Cottages",
        "Exclusive Villas near Sumerpur & Jawai",
        "Air-conditioned rooms with private decks",
        "Swimming pool & organic orchard access"
      ],
      icon: <Tent className="w-4 h-4" />,
      color: "#e07a5f",
      accentClass: "from-[#e07a5f]"
    },
    {
      id: 'safaris',
      title: "Safari & Adventure Packages",
      tagline: "Track leopards in the wild",
      desc: "Expert trackers guide you through open 4x4 Gypsy safaris to spot Jawai's iconic leopards, crocodiles, and diverse birdlife near the dam.",
      img: "/images/leopard_safari.jpg",
      badge: "Safari & Wildlife",
      features: [
        "Jungle Safari Stay Packages (All-Inclusive)",
        "Resort close to main Safari area",
        "Guided tours & birdwatching walks",
        "Jawai Dam crocodile spotting trips",
        "4x4 open-top Gypsy safaris twice daily",
        "Forest high-tea & sunset viewpoint picnics"
      ],
      icon: <Compass className="w-4 h-4" />,
      color: "#7b9e54",
      accentClass: "from-[#7b9e54]"
    },
    {
      id: 'stays',
      title: "Budget & Family Friendly Lodging",
      tagline: "Comfort for every traveler",
      desc: "Clean, spacious, budget-friendly accommodations ideal for groups and families who want to experience the magic of Jawai without compromise.",
      img: "/images/safari_tent.jpg",
      badge: "Family Packages",
      features: [
        "Budget-Friendly Hotels in Jawai",
        "Luxury Budget Accommodations & Suites",
        "Spacious Group & Family Resort Stays",
        "10 mins from Jawai Railway Station",
        "Customized family dining options",
        "Safe outdoor play fields for children"
      ],
      icon: <Heart className="w-4 h-4" />,
      color: "#e07a5f",
      accentClass: "from-[#e07a5f]"
    },
    {
      id: 'events',
      title: "Marriage Garden & Corporate Events",
      tagline: "Celebrate among granite giants",
      desc: "Host breathtaking destination weddings and corporate conferences with extensive outdoor party plots and custom catering against majestic granite cliffs.",
      img: "/images/corporate_events.jpg",
      badge: "Events & Weddings",
      features: [
        "Expansive Marriage Garden & Party Plots",
        "Granite monoliths as natural backdrops",
        "Corporate Group Bookings & setups",
        "Buffet dining & high-teas included",
        "Team-building safaris & outdoor treks",
        "Sound, stage & cultural performance setups"
      ],
      icon: <Users className="w-4 h-4" />,
      color: "#7b9e54",
      accentClass: "from-[#7b9e54]"
    }
  ];

  const filteredCategories = activeTab === 'all'
    ? serviceCategories
    : serviceCategories.filter(cat => cat.id === activeTab);

  return (
    <div className="w-full">

      {/* ── Hero ── */}
      <section
        className="relative flex items-center justify-center bg-cover bg-center text-center overflow-hidden"
        style={{ backgroundImage: `url('/images/leopard_wild.jpg')`, minHeight: '520px' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#120e0a]/60 via-[#120e0a]/55 to-[#120e0a]/90 z-[1]" />
        <div className="container relative z-[3] py-36">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.span
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="inline-block text-[#e07a5f] font-bold uppercase tracking-[0.25em] text-xs mb-5 px-4 py-1.5 border border-[#e07a5f]/30 rounded-full bg-[#e07a5f]/10"
            >
              Our Services
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white leading-tight mb-5">
              Stays, Safaris
              <span className="block" style={{ color: '#e07a5f' }}>&amp; Events</span>
            </h1>
            <p className="text-gray-300 max-w-xl mx-auto text-base leading-relaxed">
              Tailored luxury cottages, leopard safaris, family packages, and destination weddings
              — all set against Jawai's iconic granite landscape.
            </p>
          </motion.div>
        </div>
        <SectionDivider type="rocks" color="#120e0a" className="absolute bottom-0 left-0 w-full" />
      </section>

      {/* ── Tab Filters ── */}
      <section className="bg-[#120e0a] pt-16 pb-4 relative z-10">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { id: 'all',     label: 'All Packages',      icon: <Sparkles className="w-3.5 h-3.5" /> },
              { id: 'stays',   label: 'Stays & Villas',    icon: <Tent     className="w-3.5 h-3.5" /> },
              { id: 'safaris', label: 'Safari & Wildlife', icon: <Compass  className="w-3.5 h-3.5" /> },
              { id: 'events',  label: 'Weddings & Events', icon: <Users    className="w-3.5 h-3.5" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 border ${
                  activeTab === tab.id
                    ? 'bg-[#e07a5f] text-white border-[#e07a5f] shadow-[0_0_24px_rgba(224,122,95,0.4)]'
                    : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/25'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Cards Grid ── */}
      <section className="bg-[#120e0a] relative overflow-hidden pb-24 pt-10">
        <LeafAnimation />
        <div className="container relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-7"
            >
              {filteredCategories.map((cat, idx) => (
                <motion.div
                  key={cat.title + idx}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group flex flex-col rounded-2xl overflow-hidden border border-white/8 bg-[#1a1410] hover:border-white/15 transition-all duration-500"
                  style={{ boxShadow: '0 8px 48px rgba(0,0,0,0.35)' }}
                >

                  {/* ── Card Image ── */}
                  <div className="relative overflow-hidden" style={{ height: '240px' }}>
                    <img
                      src={cat.img}
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      style={{ transition: 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)' }}
                    />
                    {/* Gradient scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/80 via-transparent to-transparent" />

                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className="inline-flex items-center gap-1.5 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{ background: cat.color, boxShadow: `0 2px 12px ${cat.color}66` }}
                      >
                        {cat.icon}
                        {cat.badge}
                      </span>
                    </div>

                    {/* Bottom tagline overlay */}
                    <div className="absolute bottom-4 left-5 right-5">
                      <p className="text-white/70 text-xs font-medium italic">{cat.tagline}</p>
                    </div>
                  </div>

                  {/* ── Card Body ── */}
                  <div className="flex flex-col gap-4 p-6 flex-1">

                    {/* Title */}
                    <h2 className="text-xl font-heading font-bold text-white leading-snug group-hover:text-[#e07a5f] transition-colors duration-300">
                      {cat.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">{cat.desc}</p>

                    {/* Accent divider */}
                    <div className="flex items-center gap-3">
                      <div className="h-px flex-1 bg-white/5" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">Includes</span>
                      <div className="h-px flex-1 bg-white/5" />
                    </div>

                    {/* Features */}
                    <ul className="grid grid-cols-1 gap-2">
                      {cat.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2.5 text-sm text-gray-300">
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: cat.color }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* CTA Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-2">
                      <a
                        href="tel:08058571919"
                        className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        Call to book
                      </a>
                      <a
                        href="https://wa.me/918058571919"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-full text-white transition-all duration-300 group/btn"
                        style={{ background: `linear-gradient(135deg, ${cat.color}, ${cat.color}cc)` }}
                      >
                        Enquire Now
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── How To Book ── */}
      <section className="section-padding bg-[#112d15] relative overflow-hidden">
        <div className="safari-pattern" />
        <div className="container relative z-10">
          <div className="section-title">
            <span>Seamless Booking</span>
            <h2>How To Book Your Stay</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { step: "01", title: "Select Package",   desc: "Browse stays and guided safari options and select your travel dates.", icon: <BookOpen className="w-6 h-6 text-[#e07a5f]" /> },
              { step: "02", title: "Contact Us",       desc: "Call or WhatsApp us at 080585 71919 with your requirements.", icon: <Phone    className="w-6 h-6 text-[#e07a5f]" /> },
              { step: "03", title: "Receive Quote",    desc: "Our team customizes your booking with a competitive pricing plan.", icon: <Sparkles className="w-6 h-6 text-[#e07a5f]" /> },
              { step: "04", title: "Confirm & Travel", desc: "Pay a deposit to confirm dates and we'll arrange your station pickup.", icon: <Clock    className="w-6 h-6 text-[#e07a5f]" /> },
            ].map((step, idx) => (
              <motion.div
                key={step.step}
                className="relative rounded-2xl p-6 border border-white/10 bg-white/5 flex flex-col gap-4 group hover:border-[#e07a5f]/30 hover:bg-white/8 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <span className="absolute top-4 right-5 font-heading font-extrabold text-5xl text-white/5 group-hover:text-[#e07a5f]/10 transition-colors duration-300 leading-none select-none">
                  {step.step}
                </span>
                {idx < 3 && <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-white/10 z-20" />}
                <div className="p-3 rounded-xl bg-white/5 w-fit border border-white/8 group-hover:border-[#e07a5f]/20 transition-all duration-300">
                  {step.icon}
                </div>
                <h3 className="text-base font-heading font-bold text-white">{step.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Banner */}
          <motion.div
            className="rounded-2xl p-8 border border-[#e07a5f]/20 bg-gradient-to-r from-[#e07a5f]/10 via-[#e07a5f]/5 to-transparent flex flex-col md:flex-row items-center justify-between gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-heading font-bold text-white mb-1">Need help customizing your package?</h3>
              <p className="text-sm text-gray-400">Check real-time room availability and leopard safari schedules.</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a href="tel:08058571919" className="btn btn-primary px-5 py-2.5 text-sm flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a href="https://wa.me/918058571919" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp px-5 py-2.5 text-sm flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
        <SectionDivider type="cliff" color="#faf5f0" className="absolute bottom-0 left-0 w-full" />
      </section>

    </div>
  );
};
