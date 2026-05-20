import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LeafAnimation } from '../components/LeafAnimation';
import { SectionDivider } from '../components/SectionDivider';
import { 
  Tent, Sparkles, Compass, Users, Heart, 
  Check, Phone, MessageSquare, BookOpen, Clock 
} from 'lucide-react';

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'stays' | 'safaris' | 'events'>('all');

  const serviceCategories = [
    {
      id: 'stays',
      title: "Luxury Stays & Villa Accommodations",
      tagline: "Unwind in pristine comfort amid the rocky wilderness",
      desc: "Our premium lodging options combine local aesthetic finishes with high-end modern amenities, offering a tranquil sanctuary after long safari drives.",
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
      features: [
        "Luxury Resort Cottages in Jawai",
        "Luxury Private Villas & Farm Stays",
        "Peaceful Farm-Style Mud-Cottages",
        "Exclusive Villas near Sumerpur & Jawai",
        "Air-conditioned rooms with private decks",
        "Swimming pool & organic orchard access"
      ],
      icon: <Tent className="w-6 h-6 text-[#e07a5f]" />
    },
    {
      id: 'safaris',
      title: "Safari & Adventure Packages",
      tagline: "Track the resident leopards and explore Jawai's biodiversity",
      desc: "Guided by our expert trackers who know every rock and trail, embark on open 4x4 Gypsy safaris to spot wildlife and enjoy birdwatching near Jawai Dam.",
      img: "https://images.unsplash.com/photo-1581888227599-779811939961?q=80&w=800",
      features: [
        "Jungle Safari Stay Packages (All-Inclusive)",
        "Resort location very close to main Safari area",
        "Specialist guided tours & birdwatching walks",
        "Resort near Jawai Dam for crocodile spotting",
        "4x4 open-top Gypsy safaris twice daily",
        "Traditional forest high-tea & sunset viewpoint picnics"
      ],
      icon: <Compass className="w-6 h-6 text-[#e07a5f]" />
    },
    {
      id: 'stays', // grouped under stays for filtering
      title: "Budget & Family Friendly Lodging",
      tagline: "Premium comfort accessible to every traveler",
      desc: "We believe that connecting with nature shouldn't be expensive. Explore clean, spacious, budget-friendly accommodations ideal for groups and families.",
      img: "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=800",
      features: [
        "Budget-Friendly Hotels in Jawai",
        "Luxury Budget Accommodations & Suites",
        "Spacious Group & Family Resort Stays",
        "Proximity (10 mins) to Jawai Railway Station",
        "Customized family dining & local spice adjustments",
        "Safe outdoor play fields for children"
      ],
      icon: <Heart className="w-6 h-6 text-[#e07a5f]" />
    },
    {
      id: 'events',
      title: "Marriage Garden & Corporate Events",
      tagline: "Celebrate grand moments against towering granite cliffs",
      desc: "Host breathtaking destination weddings and focused corporate conferences utilizing our extensive outdoor party plots and custom catering systems.",
      img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800",
      features: [
        "Expansive Marriage Garden & green Party Plots",
        "Granite monoliths providing natural stage backdrops",
        "Corporate Group Bookings with conference setups",
        "Complete boarding, buffet dining & high-teas",
        "Team-building safari drives & outdoor treks",
        "Sound system, stage design & cultural performance setups"
      ],
      icon: <Users className="w-6 h-6 text-[#e07a5f]" />
    }
  ];

  const filteredCategories = activeTab === 'all' 
    ? serviceCategories 
    : serviceCategories.filter(cat => cat.id === activeTab);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section 
        className="relative py-32 flex items-center justify-center bg-cover bg-center text-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581888227599-779811939961?q=80&w=1920')`,
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
            <span className="text-orange font-bold uppercase tracking-[0.25em] text-sm block mb-2">Our Services</span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white">Stays & Events</h1>
            <p className="text-gray-300 max-w-xl mx-auto mt-4 text-base">
              Explore our tailored luxury cottages, leopard safaris, family villa packages, and majestic destination wedding layouts.
            </p>
          </motion.div>
        </div>
        <SectionDivider type="rocks" color="#120e0a" className="absolute bottom-0 left-0 w-full" />
      </section>

      {/* Services Grid & Tab Filters */}
      <section className="section-padding bg-[#120e0a] relative overflow-hidden">
        <LeafAnimation />
        <div className="container">
          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'all', label: 'All Packages' },
              { id: 'stays', label: 'Stays & Villas' },
              { id: 'safaris', label: 'Safari & Dam Tours' },
              { id: 'events', label: 'Weddings & Corporates' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all border ${
                  activeTab === tab.id 
                    ? 'bg-[#e07a5f] text-white border-[#e07a5f] shadow-lg' 
                    : 'bg-white/5 text-gray-300 border-white/10 hover:border-white/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Cards List */}
          <div className="flex flex-col gap-12">
            <AnimatePresence mode="wait">
              {filteredCategories.map((cat, idx) => (
                <motion.div
                  key={cat.title}
                  className="glass-panel p-6 md:p-10 border border-white/10 flex flex-col lg:flex-row gap-10 items-center text-left"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  {/* Category Image */}
                  <div className="w-full lg:w-5/12 h-64 md:h-80 rounded-xl overflow-hidden shrink-0 shadow-xl border border-white/5">
                    <img src={cat.img} alt={cat.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>

                  {/* Category Info */}
                  <div className="flex flex-col gap-5 w-full">
                    <div className="flex items-center gap-3">
                      <div className="p-2-5 rounded-lg bg-white/5 border border-white/5 w-fit">
                        {cat.icon}
                      </div>
                      <div>
                        <span className="text-orange text-xs font-bold uppercase tracking-widest block">{cat.tagline}</span>
                        <h2 className="text-xl md:text-2xl font-heading font-bold text-white mt-0.5">{cat.title}</h2>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">{cat.desc}</p>
                    
                    <hr className="border-white/5" />
                    
                    <h4 className="text-sm font-heading font-semibold text-white uppercase tracking-wider">Features Included:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none">
                      {cat.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-sm text-gray-400">
                          <Check className="w-4 h-4 text-[#7b9e54] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Select Package", desc: "Browse our stay and guided safari options and select the dates for your visit.", icon: <BookOpen className="w-6 h-6 text-[#e07a5f]" /> },
              { step: "02", title: "Contact Us", desc: "Call or message us on WhatsApp at 080585 71919 with your details.", icon: <Phone className="w-6 h-6 text-[#e07a5f]" /> },
              { step: "03", title: "Receive Quote", desc: "Our desk will customize your booking and send a competitive pricing plan.", icon: <Sparkles className="w-6 h-6 text-[#e07a5f]" /> },
              { step: "04", title: "Confirm & Travel", desc: "Confirm your dates with a deposit, and we will schedule your station pickup.", icon: <Clock className="w-6 h-6 text-[#e07a5f]" /> },
            ].map((step, idx) => (
              <motion.div
                key={step.step}
                className="glass-panel p-6 border border-white/10 text-left flex flex-col gap-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-lg bg-white/5 w-fit border border-white/5">
                    {step.icon}
                  </div>
                  <span className="font-heading font-extrabold text-2xl text-orange/30">{step.step}</span>
                </div>
                <h3 className="text-lg font-heading font-bold text-white mt-2">{step.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Quick Call Banner */}
          <motion.div 
            className="glass-panel p-8 border border-white/10 mt-12 flex flex-col md:flex-row items-center justify-between gap-6 max-w-3xl mx-auto text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-heading font-bold text-white mb-1">Need help customizing your package?</h3>
              <p className="text-sm text-gray-300">Call us directly to check real-time room availability and leopard safari schedules.</p>
            </div>
            <div className="flex items-center gap-3">
              <a href="tel:08058571919" className="btn btn-primary px-5 py-2.5 text-sm">
                <Phone className="w-4 h-4 fill-white" />
                Call Now
              </a>
              <a href="https://wa.me/918058571919" target="_blank" rel="noopener noreferrer" className="btn btn-secondary px-5 py-2.5 text-sm border-white/10">
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
        <SectionDivider type="cliff" color="#120e0a" className="absolute bottom-0 left-0 w-full" />
      </section>
    </div>
  );
};
