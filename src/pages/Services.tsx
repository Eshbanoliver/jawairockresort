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
      tagline: "Unwind in pristine comfort amid the rocky wilderness",
      desc: "Our premium lodging options combine local aesthetic finishes with high-end modern amenities, offering a tranquil sanctuary after long safari drives. Each cottage is thoughtfully designed to blend into the natural granite landscape.",
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
      icon: <Tent className="w-5 h-5" />,
      color: "#e07a5f"
    },
    {
      id: 'safaris',
      title: "Safari & Adventure Packages",
      tagline: "Track the resident leopards and explore Jawai's biodiversity",
      desc: "Guided by our expert trackers who know every rock and trail, embark on open 4x4 Gypsy safaris to spot wildlife and enjoy birdwatching near Jawai Dam. Experience the thrill of witnessing leopards in their natural granite habitat.",
      img: "/images/leopard_safari.jpg",
      badge: "Safari & Wildlife",
      features: [
        "Jungle Safari Stay Packages (All-Inclusive)",
        "Resort location very close to main Safari area",
        "Specialist guided tours & birdwatching walks",
        "Resort near Jawai Dam for crocodile spotting",
        "4x4 open-top Gypsy safaris twice daily",
        "Traditional forest high-tea & sunset viewpoint picnics"
      ],
      icon: <Compass className="w-5 h-5" />,
      color: "#7b9e54"
    },
    {
      id: 'stays',
      title: "Budget & Family Friendly Lodging",
      tagline: "Premium comfort accessible to every traveler",
      desc: "We believe that connecting with nature shouldn't be expensive. Explore clean, spacious, budget-friendly accommodations ideal for groups and families who want to experience the magic of Jawai without compromise.",
      img: "/images/safari_tent.jpg",
      badge: "Family Packages",
      features: [
        "Budget-Friendly Hotels in Jawai",
        "Luxury Budget Accommodations & Suites",
        "Spacious Group & Family Resort Stays",
        "Proximity (10 mins) to Jawai Railway Station",
        "Customized family dining & local spice adjustments",
        "Safe outdoor play fields for children"
      ],
      icon: <Heart className="w-5 h-5" />,
      color: "#e07a5f"
    },
    {
      id: 'events',
      title: "Marriage Garden & Corporate Events",
      tagline: "Celebrate grand moments against towering granite cliffs",
      desc: "Host breathtaking destination weddings and focused corporate conferences utilizing our extensive outdoor party plots and custom catering systems. The natural granite monoliths provide a majestic backdrop unlike any other.",
      img: "/images/corporate_events.jpg",
      badge: "Events & Weddings",
      features: [
        "Expansive Marriage Garden & green Party Plots",
        "Granite monoliths providing natural stage backdrops",
        "Corporate Group Bookings with conference setups",
        "Complete boarding, buffet dining & high-teas",
        "Team-building safari drives & outdoor treks",
        "Sound system, stage design & cultural performance setups"
      ],
      icon: <Users className="w-5 h-5" />,
      color: "#7b9e54"
    }
  ];

  const filteredCategories = activeTab === 'all'
    ? serviceCategories
    : serviceCategories.filter(cat => cat.id === activeTab);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative py-36 flex items-center justify-center bg-cover bg-center text-center overflow-hidden"
        style={{
          backgroundImage: `url('/images/leopard_wild.jpg')`,
          minHeight: '520px'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#120e0a]/70 via-[#120e0a]/60 to-[#120e0a]/90 z-[1]" />
        {/* decorative grain overlay */}
        <div className="absolute inset-0 z-[2]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.3
        }} />
        <div className="container relative z-[3]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, letterSpacing: '0.1em' }}
              animate={{ opacity: 1, letterSpacing: '0.25em' }}
              transition={{ duration: 1, delay: 0.2 }}
              className="inline-block text-[#e07a5f] font-bold uppercase tracking-[0.25em] text-xs mb-4 px-4 py-1.5 border border-[#e07a5f]/30 rounded-full bg-[#e07a5f]/10"
            >
              Our Services
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white leading-tight mb-4">
              Stays, Safaris
              <span className="block text-[#e07a5f]">&amp; Events</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-base leading-relaxed">
              Explore our tailored luxury cottages, leopard safaris, family villa packages,
              and majestic destination wedding layouts.
            </p>
          </motion.div>
        </div>
        <SectionDivider type="rocks" color="#120e0a" className="absolute bottom-0 left-0 w-full" />
      </section>

      {/* Tab Filters */}
      <section className="bg-[#120e0a] pt-16 pb-2 relative z-10">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { id: 'all', label: 'All Packages', icon: <Sparkles className="w-4 h-4" /> },
              { id: 'stays', label: 'Stays & Villas', icon: <Tent className="w-4 h-4" /> },
              { id: 'safaris', label: 'Safari & Wildlife', icon: <Compass className="w-4 h-4" /> },
              { id: 'events', label: 'Weddings & Events', icon: <Users className="w-4 h-4" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 border ${
                  activeTab === tab.id
                    ? 'bg-[#e07a5f] text-white border-[#e07a5f] shadow-[0_0_20px_rgba(224,122,95,0.35)]'
                    : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-[#120e0a] relative overflow-hidden pb-20 pt-10">
        <LeafAnimation />
        <div className="container relative z-10">
          <div className="flex flex-col gap-8">
            <AnimatePresence mode="wait">
              {filteredCategories.map((cat, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={cat.title + idx}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="group relative rounded-2xl overflow-hidden border border-white/8 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-500"
                    style={{ boxShadow: '0 4px 40px rgba(0,0,0,0.3)' }}
                  >
                    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[360px]`}>

                      {/* Image Panel */}
                      <div className="relative w-full lg:w-5/12 shrink-0 overflow-hidden min-h-[260px] lg:min-h-0">
                        <img
                          src={cat.img}
                          alt={cat.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          style={{ minHeight: '260px' }}
                        />
                        {/* image overlay gradient */}
                        <div className={`absolute inset-0 ${isEven ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-transparent to-[#120e0a]/60`} />
                        {/* Badge */}
                        <div className="absolute top-4 left-4">
                          <span
                            className="inline-flex items-center gap-1.5 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                            style={{ background: cat.color, boxShadow: `0 0 16px ${cat.color}55` }}
                          >
                            {cat.icon}
                            {cat.badge}
                          </span>
                        </div>
                      </div>

                      {/* Content Panel */}
                      <div className="flex flex-col justify-center gap-5 p-8 md:p-10 w-full">
                        {/* Tagline + Heading */}
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] block mb-2" style={{ color: cat.color }}>
                            {cat.tagline}
                          </span>
                          <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-white leading-tight">
                            {cat.title}
                          </h2>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                          {cat.desc}
                        </p>

                        {/* Divider */}
                        <div className="w-12 h-px" style={{ background: cat.color, opacity: 0.5 }} />

                        {/* Features Grid */}
                        <div>
                          <h4 className="text-[10px] font-heading font-bold text-white/50 uppercase tracking-widest mb-3">
                            Features Included
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {cat.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2 text-sm text-gray-300">
                                <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: cat.color }} />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA */}
                        <div className="mt-2">
                          <a
                            href="https://wa.me/918058571919"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full text-white transition-all duration-300 hover:gap-3 hover:shadow-lg"
                            style={{ background: cat.color, boxShadow: `0 0 0px ${cat.color}00` }}
                            onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 20px ${cat.color}55`)}
                            onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 0 0px ${cat.color}00`)}
                          >
                            Enquire Now
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Booking Information Workflow */}
      <section className="section-padding bg-[#112d15] relative overflow-hidden">
        <div className="safari-pattern" />
        <div className="container relative z-10">
          <div className="section-title">
            <span>Seamless Booking</span>
            <h2>How To Book Your Stay</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { step: "01", title: "Select Package", desc: "Browse our stay and guided safari options and select the dates for your visit.", icon: <BookOpen className="w-6 h-6 text-[#e07a5f]" /> },
              { step: "02", title: "Contact Us", desc: "Call or message us on WhatsApp at 080585 71919 with your details.", icon: <Phone className="w-6 h-6 text-[#e07a5f]" /> },
              { step: "03", title: "Receive Quote", desc: "Our desk will customize your booking and send a competitive pricing plan.", icon: <Sparkles className="w-6 h-6 text-[#e07a5f]" /> },
              { step: "04", title: "Confirm & Travel", desc: "Confirm your dates with a deposit, and we will schedule your station pickup.", icon: <Clock className="w-6 h-6 text-[#e07a5f]" /> },
            ].map((step, idx) => (
              <motion.div
                key={step.step}
                className="relative rounded-2xl p-6 border border-white/10 bg-white/5 flex flex-col gap-4 group hover:border-[#e07a5f]/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Step number */}
                <span className="absolute top-4 right-5 font-heading font-extrabold text-4xl text-white/5 group-hover:text-[#e07a5f]/10 transition-colors duration-300 leading-none select-none">
                  {step.step}
                </span>
                {/* Connector line */}
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-white/10 z-20" />
                )}
                <div className="p-3 rounded-xl bg-white/5 w-fit border border-white/5 group-hover:border-[#e07a5f]/20 transition-all duration-300">
                  {step.icon}
                </div>
                <h3 className="text-base font-heading font-bold text-white">{step.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Quick Call Banner */}
          <motion.div
            className="rounded-2xl p-8 border border-[#e07a5f]/20 bg-gradient-to-r from-[#e07a5f]/10 to-transparent flex flex-col md:flex-row items-center justify-between gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-heading font-bold text-white mb-1">Need help customizing your package?</h3>
              <p className="text-sm text-gray-400">Call us directly to check real-time room availability and leopard safari schedules.</p>
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
