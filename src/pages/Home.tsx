import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  Compass, Tent, TreePine, Waves, Sparkles, 
  Award, Shield, Smile, Star, ArrowRight, Phone, ChevronDown,
  Users, Hotel, Utensils, Activity, Cake, Briefcase, MapPin
} from 'lucide-react';
import { SectionDivider } from '../components/SectionDivider';
import { LeafAnimation } from '../components/LeafAnimation';

// Count-up counter helper component
const AnimatedCounter: React.FC<{ end: number; duration?: number; suffix?: string }> = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const endValue = end;
    const totalFrames = Math.round(duration * 60);
    const increment = endValue / totalFrames;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      start += increment;
      if (frame >= totalFrames) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16.6);

    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export const Home: React.FC = () => {
  // Hero Image Slider State
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const heroImages = [
    "/images/leopard_safari.jpg", // Leopard and jungle safari walk
    "/images/luxury_villa.jpg", // Luxury villa retreat
    "/images/swimming_pool.jpg", // Premium infinity pool
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Testimonials Slider State
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    {
      quote: "Our stay at Jawai Rock Resort was magical. The luxury tents blend perfectly with the rugged wild hills. We spotted a leopard on our very first evening safari! The hospitality was exceptional.",
      author: "Aarav Sharma",
      role: "Wildlife Enthusiast"
    },
    {
      quote: "Peaceful environment, beautiful views near the Jawai Dam, and delicious local food. Highly recommend the family villa stays. It's budget-friendly yet feels incredibly premium.",
      author: "Priya Patel",
      role: "Family Vacationer"
    },
    {
      quote: "Organized our corporate retreat here and the experience was flawless. Excellent conference space, team-building safari packages, and stunning campfire nights among the granite rocks.",
      author: "Vikram Malhotra",
      role: "HR Director, TechCorp"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is the best time to visit Jawai Rock Resort for leopard safaris?",
      a: "While Jawai can be visited year-round due to the resident leopard population, the best time is between October and April when the weather is pleasant. Early morning and late afternoon safaris offer the highest sighting probabilities."
    },
    {
      q: "How can I book a jungle safari package at the resort?",
      a: "We offer complete safari stay packages that include luxury cottage accommodation, all meals, and open 4x4 Gypsy safaris guided by local trackers. You can contact us via WhatsApp or call us directly at 080585 71919 to reserve."
    },
    {
      q: "Do you offer group booking and corporate retreat options?",
      a: "Yes! We specialize in corporate group bookings and family retreats. We provide custom boarding, dining, guided treks, and exclusive safari slots tailored to group size."
    },
    {
      q: "Can we book the marriage garden and party plots for destination weddings?",
      a: "Absolutely. Jawai Rock Resort features an expansive, scenic marriage garden and party plot surrounded by majestic granite cliffs, creating a spectacular natural backdrop for destination weddings and private celebrations."
    },
    {
      q: "What facilities are included in the luxury villa and farm style stays?",
      a: "Our villas and farm style stays offer premium comforts including spacious air-conditioned rooms, private sit-out decks facing the hills, modern en-suite bathrooms, access to the swimming pool, and organic farm-to-table dining."
    },
    {
      q: "How far is Jawai Rock Resort from the nearest railway station?",
      a: "The resort is conveniently located near the Jawai Bandh railway station (approx. 10-15 minutes drive) and Falna railway station (approx. 25-30 minutes drive), making it easily accessible for arriving guests."
    }
  ];

  // Services Categories & State
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'stays', name: 'Luxury Stays' },
    { id: 'dining', name: 'Dining & Wellness' },
    { id: 'activities', name: 'Wilderness & Sports' },
    { id: 'events', name: 'Events & Parties' }
  ];

  // Services list mapping with categories and stock images
  const services = [
    { 
      title: "Eco Luxury Resort", 
      desc: "Boutique cottage suites combining rugged wild hills, premium modern amenities, and forest sit-outs.", 
      icon: <Hotel className="w-6 h-6 text-[#e07a5f]" />, 
      image: "/images/eco_resort.jpg",
      category: 'stays',
      themeClass: 'card-theme-gold'
    },
    { 
      title: "Fine Dining Restaurant", 
      desc: "Savor premium organic farm-to-table dining, local Rajasthani delicacies, and romantic campfire barbecues.", 
      icon: <Utensils className="w-6 h-6 text-[#e07a5f]" />, 
      image: "/images/fine_dining.jpg",
      category: 'dining',
      themeClass: 'card-theme-peach'
    },
    { 
      title: "Jungle Leopard Safari", 
      desc: "Explore wilderness safari trails in open-top 4x4 Gypsy trackers to spot local leopards and crocodiles.", 
      icon: <Compass className="w-6 h-6 text-[#e07a5f]" />, 
      image: "/images/jungle_safari.jpg",
      category: 'activities',
      themeClass: 'card-theme-sage'
    },
    { 
      title: "Private Luxury Villa", 
      desc: "Indulge in spacious, private villa retreats complete with luxury bedding, terraces, and personal service.", 
      icon: <TreePine className="w-6 h-6 text-[#e07a5f]" />, 
      image: "/images/private_villa.jpg",
      category: 'stays',
      themeClass: 'card-theme-gold'
    },
    { 
      title: "Scenic Swimming Pool", 
      desc: "Unwind at our outdoor infinity swimming pool surrounded by massive, spectacular granite boulders.", 
      icon: <Waves className="w-6 h-6 text-[#e07a5f]" />, 
      image: "/images/swimming_pool.jpg",
      category: 'dining',
      themeClass: 'card-theme-blue'
    },
    { 
      title: "Recreation & Sports", 
      desc: "Engage in outdoor games, trekking activities, and team-building sports across the private reserve area.", 
      icon: <Activity className="w-6 h-6 text-[#e07a5f]" />, 
      image: "/images/recreation.jpg",
      category: 'activities',
      themeClass: 'card-theme-green'
    },
    { 
      title: "Premium Tent House", 
      desc: "Experience high-end glamping inside luxury safari tents equipped with air conditioning and private decks.", 
      icon: <Tent className="w-6 h-6 text-[#e07a5f]" />, 
      image: "/images/jawai_dam.jpg",
      category: 'stays',
      themeClass: 'card-theme-peach'
    },
    { 
      title: "Birthday Party & Celebrations", 
      desc: "Celebrate birthdays and milestones under twinkling stars with bespoke setups, catering, and live music.", 
      icon: <Cake className="w-6 h-6 text-[#e07a5f]" />, 
      image: "/images/birthday_party.jpg",
      category: 'events',
      themeClass: 'card-theme-pink'
    },
    { 
      title: "Corporate Events & Meetings", 
      desc: "Conduct private conferences, retreats, and team-building camps against scenic, monolith vistas.", 
      icon: <Briefcase className="w-6 h-6 text-[#e07a5f]" />, 
      image: "/images/corporate_events.jpg",
      category: 'events',
      themeClass: 'card-theme-teal'
    }
  ];

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url('${img}')`,
              opacity: idx === currentHeroImage ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out',
              zIndex: 0
            }}
          />
        ))}
        <div className="overlay-dark" style={{ zIndex: 1 }} />
        
        {/* Animated leaves inside hero */}
        <LeafAnimation />

        <div className="container hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-orange font-bold uppercase tracking-super-wide text-sm block mb-4">
              Welcome to Wilderness Luxury
            </span>
            <h1 className="hero-title">
              Experience Luxury Amidst<br />
              <span className="text-orange">The Wild Beauty</span> Of Jawai
            </h1>
            <p className="hero-subtitle text-gray-300">
              Escape to a peaceful luxury sanctuary surrounded by towering granite rocks, wild leopards, and the serene Jawai Dam. Indulge in premier safari adventures and soulful hospitality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/services" className="btn btn-primary">
                <Compass className="w-5 h-5" />
                Explore Resort
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Contact Now
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Rock divider at bottom of Hero */}
        <SectionDivider type="rocks" color="#faf5f0" className="absolute bottom-0 left-0 w-full" />
      </section>

      {/* 2. ABOUT US SECTION */}
      <section className="section-padding relative overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Text details */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-title text-left mb-6">
                <span>About Jawai Rock Resort</span>
                <h2 className="text-white">Where Granite Hills Whisper The Stories Of The Wild</h2>
              </div>
              <p className="mb-6 leading-relaxed text-gray-300">
                Nestled on the scenic Jawai Bandh Road in Rajasthan, <strong className="text-[#112d15] font-bold">Jawai Rock Resort</strong> is an eco-luxury haven designed for adventurers and peace-seekers alike. We are surrounded by ancient granite monoliths formed millions of years ago, which serve as the natural habitat for the famous, peaceful leopards of Jawai.
              </p>
              <p className="mb-8 leading-relaxed text-gray-300">
                Here, luxury is redefined through our commitment to nature connection. Whether you choose our premium villas or farm-style cottages, you will discover a tranquil refuge that provides the perfect balance of rustic jungle atmosphere and state-of-the-art modern comforts.
              </p>
              <Link to="/about" className="btn btn-outline-green">
                Read Our Full Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Mobile View: Clean 2x2 Grid of Safari Images */}
            <div className="grid grid-cols-2 gap-4 md:hidden mt-8 w-full">
              <div className="rounded-2xl overflow-hidden shadow-md border border-black/5 h-40">
                <img 
                  src="/images/leopard_safari.jpg" 
                  alt="Wild Leopard" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md border border-black/5 h-40">
                <img 
                  src="/images/resort_pool.jpg" 
                  alt="Resort Pool" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md border border-black/5 h-40">
                <img 
                  src="/images/safari_tent.jpg" 
                  alt="Safari Tent" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md border border-black/5 h-40">
                <img 
                  src="/images/sunset_view.jpg" 
                  alt="Jawai Hills" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Desktop View: Creative Offset Overlapping Collage */}
            <motion.div
              className="hidden md:flex relative w-full items-center justify-center mt-0"
              style={{ height: '580px' }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Background Glow Ornament */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#e07a5f]/10 to-[#7b9e54]/10 rounded-full filter blur-3xl -z-10 w-72 h-72 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

              {/* Card 1: Wild Leopard (Main vertical card, top-left) */}
              <motion.div 
                className="absolute top-2 left-2 rounded-2xl overflow-hidden shadow-2xl border border-black/5 bg-white"
                style={{ width: '48%', height: '290px', rotate: -3 }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 40 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img 
                  src="/images/leopard_safari.jpg" 
                  alt="Wild Leopard in Jawai" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-10">
                  <span className="text-tiny text-[#e07a5f] uppercase font-bold tracking-widest block mb-0.5" style={{ fontSize: '9px' }}>Jawai Sanctuary</span>
                  <p className="text-xs font-bold text-white">Leopard Trackings</p>
                </div>
              </motion.div>

              {/* Card 2: Luxury Resort Pool (Top-Right, offset) */}
              <motion.div 
                className="absolute top-12 right-2 rounded-2xl overflow-hidden shadow-xl border border-black/5 bg-white"
                style={{ width: '45%', height: '200px', rotate: 4 }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 40 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img 
                  src="/images/resort_pool.jpg" 
                  alt="Resort Pool & Premium Stays" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Card 3: Luxury Safari Glamping Tent (Bottom-Left, horizontal) */}
              <motion.div 
                className="absolute bottom-10 left-6 rounded-2xl overflow-hidden shadow-lg border border-black/5 bg-white"
                style={{ width: '44%', height: '180px', rotate: 2 }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 40 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img 
                  src="/images/safari_tent.jpg" 
                  alt="Luxury Safari Glamping Tent" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Card 4: Jawai Sunset Granite Hills (Bottom-Right, tall overlay) */}
              <motion.div 
                className="absolute bottom-2 right-4 rounded-2xl overflow-hidden shadow-2xl border border-black/5 bg-white"
                style={{ width: '48%', height: '260px', rotate: -2 }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 40 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img 
                  src="/images/sunset_view.jpg" 
                  alt="Jawai Sunset Granite Hills" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-10">
                  <span className="text-tiny text-[#7b9e54] uppercase font-bold tracking-widest block mb-0.5" style={{ fontSize: '9px' }}>Granite Monoliths</span>
                  <p className="text-xs font-bold text-white">Jawai Wilderness</p>
                </div>
              </motion.div>

              {/* Circular Seal Badge Overlap */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-[#112d15] text-[#faf5f0] border-4 border-[#faf5f0] shadow-2xl flex flex-col items-center justify-center z-30 text-center p-2"
                initial={{ rotate: -10 }}
                animate={{ rotate: [ -10, 10, -10 ] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="uppercase tracking-wider font-semibold opacity-70" style={{ fontSize: '8px' }}>Jawai Rock</span>
                <span className="text-tiny font-extrabold leading-tight my-0.5 text-[#e07a5f]">ECO LUXURY</span>
                <span className="uppercase tracking-widest font-bold opacity-80" style={{ fontSize: '8px' }}>EST. 2018</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. KEY METRICS SECTION */}
      <section 
        className="py-20 relative overflow-hidden border-y border-white/5"
        style={{
          background: 'radial-gradient(circle at center, #1b3d20 0%, #112d15 100%)'
        }}
      >
        <div className="safari-pattern" />
        
        {/* Decorative background glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 rounded-full bg-[#e07a5f]/5 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 rounded-full bg-[#7b9e54]/10 blur-3xl pointer-events-none" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Metric 1 */}
            <motion.div 
              className="metric-card-fancy"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              {/* Backdrop watermark icon */}
              <div className="metric-watermark">
                <Users className="w-24 h-24" />
              </div>
              
              <div className="metric-icon-wrapper text-orange">
                <Users className="w-5 h-5" />
              </div>
              
              <div className="metric-number-wrapper">
                <AnimatedCounter end={1500} suffix="+" />
              </div>
              <div className="metric-label-fancy">Happy Guests</div>
              <p className="metric-desc">From all across the globe</p>
            </motion.div>

            {/* Metric 2 */}
            <motion.div 
              className="metric-card-fancy"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="metric-watermark">
                <Hotel className="w-24 h-24" />
              </div>
              
              <div className="metric-icon-wrapper text-green">
                <Hotel className="w-5 h-5" />
              </div>
              
              <div className="metric-number-wrapper">
                <AnimatedCounter end={24} suffix="+" />
              </div>
              <div className="metric-label-fancy">Luxury Rooms</div>
              <p className="metric-desc">Elegant forest-side cottages</p>
            </motion.div>

            {/* Metric 3 */}
            <motion.div 
              className="metric-card-fancy"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="metric-watermark">
                <Compass className="w-24 h-24" />
              </div>
              
              <div className="metric-icon-wrapper text-orange">
                <Compass className="w-5 h-5" />
              </div>
              
              <div className="metric-number-wrapper">
                <AnimatedCounter end={800} suffix="+" />
              </div>
              <div className="metric-label-fancy">Safari experiences</div>
              <p className="metric-desc">Guided leopard trackings</p>
            </motion.div>

            {/* Metric 4 */}
            <motion.div 
              className="metric-card-fancy"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="metric-watermark">
                <Award className="w-24 h-24" />
              </div>
              
              <div className="metric-icon-wrapper text-green">
                <Award className="w-5 h-5" />
              </div>
              
              <div className="metric-number-wrapper">
                <AnimatedCounter end={8} suffix="+" />
              </div>
              <div className="metric-label-fancy">Years experience</div>
              <p className="metric-desc">Uncompromising trust & service</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section className="section-padding bg-[#120e0a] relative overflow-hidden">
        <LeafAnimation />
        <div className="container">
          <div className="section-title">
            <span>Our Premium Services</span>
            <h2>Tailored Stays & Safari Experiences</h2>
            <p className="max-w-xl mx-auto mt-4 text-gray-400">
              From adventurous guided leopard tracking to peaceful farm-style stays and lavish events under the starlit sky, explore our dedicated hospitality packages.
            </p>
          </div>

          {/* Interactive Tab Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white bg-white/5 border border-white/5 hover:bg-white/10'
                }`}
                style={{ cursor: 'pointer' }}
              >
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-[#e07a5f] rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Dynamic Services Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  key={service.title}
                  className={`service-card-premium text-left ${service.themeClass}`}
                >
                  <div className="service-card-image-wrapper">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="service-card-image" 
                      loading="lazy"
                    />
                  </div>
                  <div className="service-card-content">
                    <div className="card-icon-container">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-white leading-snug">{service.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{service.desc}</p>
                    <Link to="/services" className="text-orange text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 mt-auto hover:text-white transition-colors group">
                      Learn More
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
        <SectionDivider type="canopy" color="#112d15" className="absolute bottom-0 left-0 w-full" />
      </section>

      {/* 5. MISSION & VISION SECTION */}
      <section className="section-padding bg-[#112d15] relative overflow-hidden">
        {/* Background glow effects */}
        <div className="green-glow-blob-1" />
        <div className="green-glow-blob-2" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Mission */}
            <motion.div
              className="mv-card mv-card-mission p-8 md:p-10 flex flex-col gap-4 text-left relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Compass className="mv-watermark absolute" />
              <div className="mv-icon-box p-3 rounded-xl bg-[#e07a5f]/10 border border-[#e07a5f]/20 w-fit relative z-10">
                <Compass className="w-8 h-8 text-[#e07a5f]" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mt-2 relative z-10">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed relative z-10">
                To connect travellers with the raw, untamed beauty of Jawai's wildlife and granite terrain while preserving the local ecology. We strive to provide a luxurious sanctuary that respects the delicate balance of leopards, shepherds, and visitors, creating sustainable, lifelong memories.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="mv-card mv-card-vision p-8 md:p-10 flex flex-col gap-4 text-left relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <TreePine className="mv-watermark absolute" />
              <div className="mv-icon-box p-3 rounded-xl bg-[#7b9e54]/10 border border-[#7b9e54]/20 w-fit relative z-10">
                <TreePine className="w-8 h-8 text-[#7b9e54]" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mt-2 relative z-10">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed relative z-10">
                To become Jawai's premier eco-resort destination where luxury hospitality and conservation coexist harmoniously. We envision a community-oriented retreat that showcases Jawai's natural wonders globally while serving as a benchmark for peaceful wilderness tourism.
              </p>
            </motion.div>
          </div>
        </div>
        <SectionDivider type="cliff" color="#faf5f0" className="absolute bottom-0 left-0 w-full" />
      </section>

      {/* 6. CORE VALUES SECTION */}
      <section className="section-padding bg-[#120e0a] relative overflow-hidden">
        {/* Background glow effects */}
        <div className="values-glow-blob-1" />
        <div className="values-glow-blob-2" />

        <div className="container relative z-10">
          <div className="section-title">
            <span>Our Foundation</span>
            <h2>Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Premium Hospitality", desc: "Warm, tailored guest treatment that mirrors Rajasthan's historic royal standard.", icon: <Award className="w-6 h-6 text-[#e07a5f]" />, themeClass: 'cv-theme-gold', bobClass: 'cv-card-bob-1', watermark: <Award className="cv-watermark absolute" /> },
              { title: "Nature Connection", desc: "Creating stays that encourage physical, mental, and visual alignment with wilderness.", icon: <TreePine className="w-6 h-6 text-[#7b9e54]" />, themeClass: 'cv-theme-green', bobClass: 'cv-card-bob-2', watermark: <TreePine className="cv-watermark absolute" /> },
              { title: "Uncompromising Comfort", desc: "Equipping every cottage and farm chalet with high-end beddings and modern en-suites.", icon: <Shield className="w-6 h-6 text-[#5a8ca0]" />, themeClass: 'cv-theme-blue', bobClass: 'cv-card-bob-3', watermark: <Shield className="cv-watermark absolute" /> },
              { title: "Luxury Experience", desc: "Open 4x4 tracks, gourmet local and international dining, and candlelit campfire events.", icon: <Sparkles className="w-6 h-6 text-[#9b59b6]" />, themeClass: 'cv-theme-purple', bobClass: 'cv-card-bob-2', watermark: <Sparkles className="cv-watermark absolute" /> },
              { title: "Peaceful Environment", desc: "Located away from commercial traffic, nested under ancient granite rocks.", icon: <Compass className="w-6 h-6 text-[#1abc9c]" />, themeClass: 'cv-theme-teal', bobClass: 'cv-card-bob-1', watermark: <Compass className="cv-watermark absolute" /> },
              { title: "Guest Satisfaction", desc: "Going the extra mile to ensure your leopard tracking and leisure wishes are met.", icon: <Smile className="w-6 h-6 text-[#e91e63]" />, themeClass: 'cv-theme-pink', bobClass: 'cv-card-bob-3', watermark: <Smile className="cv-watermark absolute" /> },
            ].map((value, idx) => (
              <motion.div
                key={value.title}
                className={`cv-card ${value.themeClass} ${value.bobClass} p-6 rounded-xl flex gap-4 text-left relative overflow-hidden`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                {value.watermark}
                <div className="cv-icon-box shrink-0 h-fit relative z-10">
                  {value.icon}
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-heading font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-300">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US SECTION - MODERN CARD GRID */}
      <section className="section-padding relative overflow-hidden">
        <div className="safari-pattern opacity-10" />
        
        {/* Animated glowing orbs for backdrop */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#7b9e54]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#e07a5f]/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Decorative Jungle Safari Ambience Elements */}
        {/* Left Side Decor */}
        <div className="wc-safari-decor wc-leaf-left-top absolute top-[8%] left-[-40px] w-[200px] h-[200px] pointer-events-none opacity-25 md:opacity-40 select-none z-0">
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#7b9e54]">
            <path d="M 10 110 Q 55 70 100 20" stroke="#5a753c" strokeWidth="2" strokeLinecap="round" />
            <path d="M 25 95 Q 10 88 5 78" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 38 83 Q 18 73 12 60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 50 71 Q 28 58 20 44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 63 58 Q 38 43 28 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 75 44 Q 48 28 38 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 88 30 Q 60 12 50 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            
            <path d="M 25 95 Q 35 105 45 110" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 38 83 Q 50 92 60 97" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 50 71 Q 65 80 75 84" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 63 58 Q 80 65 90 68" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 75 44 Q 92 49 102 52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 88 30 Q 105 34 115 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <div className="wc-safari-decor wc-leaf-left-bottom absolute bottom-[-30px] left-[-30px] w-[260px] h-[260px] pointer-events-none opacity-20 md:opacity-30 select-none z-0">
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#4a544d]">
            <path d="M -10 120 L 25 45 L 65 40 L 95 85 L 90 120 Z" fill="currentColor" />
            <path d="M -10 120 L 25 45 L 45 120 Z" fill="#6a786f" opacity="0.6" className="wc-rock-facet-light" />
            <path d="M 25 45 L 65 40 L 45 120 Z" fill="#353c37" opacity="0.4" />
            
            <path d="M 30 120 L 60 75 L 85 80 L 110 120 Z" fill="#33271e" />
            <path d="M 30 120 L 60 75 L 75 120 Z" fill="#d2bfab" opacity="0.5" className="wc-rock-facet-light" />
          </svg>
        </div>

        {/* Right Side Decor */}
        <div className="wc-safari-decor wc-leaf-right-top absolute top-[22%] right-[-50px] w-[220px] h-[220px] pointer-events-none opacity-25 md:opacity-40 select-none z-0">
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#5a753c]">
            <path d="M 120 10 C 90 20, 60 45, 10 90 C 25 80, 55 60, 120 10" fill="currentColor" fillOpacity="0.8" />
            <path d="M 120 10 C 95 35, 75 65, 30 110 C 42 95, 70 70, 120 10" fill="#1b3d20" fillOpacity="0.6" />
            <path d="M 120 10 C 90 20, 60 45, 10 90" stroke="#7b9e54" strokeWidth="1.5" strokeOpacity="0.4" />
            <path d="M 120 10 C 95 35, 75 65, 30 110" stroke="#7b9e54" strokeWidth="1.5" strokeOpacity="0.4" />
          </svg>
        </div>

        <div className="wc-safari-decor wc-leaf-right-bottom absolute bottom-[-40px] right-[-30px] w-[280px] h-[280px] pointer-events-none opacity-20 md:opacity-35 select-none z-0">
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M 100 120 Q 80 70 40 50 Q 60 85 100 120" fill="#2c5932" fillOpacity="0.4" />
            <path d="M 100 120 Q 90 60 60 30 Q 75 80 100 120" fill="#7b9e54" fillOpacity="0.3" />
            <path d="M 100 120 Q 110 50 95 20 Q 100 75 100 120" fill="#5a753c" fillOpacity="0.35" />
            
            <path d="M 35 120 L 65 65 L 90 55 L 125 100 L 120 120 Z" fill="#4a544d" />
            <path d="M 35 120 L 65 65 L 80 120 Z" fill="#6a786f" opacity="0.6" className="wc-rock-facet-light" />
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="section-title">
            <span>The Jawai Advantage</span>
            <h2>Why Choose Jawai Rock Resort</h2>
          </div>

          {/* Modern Cards Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16 relative z-10">
            {[
              { title: "Scenic Jawai Location", desc: "Perfectly positioned alongside the stunning granite monoliths, offering immediate scenic sunset viewpoints directly from our decks.", img: "/images/sunset_view.jpg", icon: <MapPin className="w-6 h-6" />, theme: "gold" },
              { title: "Peaceful Jungle Atmosphere", desc: "A truly quiet habitat where birds call, leopards roam the ridges, and city noise fades completely under starry Rajasthan skies.", img: "/images/campfires.jpg", icon: <TreePine className="w-6 h-6" />, theme: "green" },
              { title: "Budget Friendly Luxury", desc: "Unmatched value combining premium resort amenities, swimming pool, and organic dining without heavy, overpriced bills.", img: "/images/luxury_cottage.jpg", icon: <Shield className="w-6 h-6" />, theme: "blue" },
              { title: "Resort Near Safari Area", desc: "Located within short driving distance from the key leopard-sighting rocky areas, giving you priority access to early trackers.", img: "/images/jungle_safari.jpg", icon: <Compass className="w-6 h-6" />, theme: "purple" },
              { title: "Family Friendly Stay", desc: "Spacious multi-bedroom villas, outdoor lawn play zones, and child-safe bonfire events that cater to families of all sizes.", img: "/images/jawai_dam.jpg", icon: <Users className="w-6 h-6" />, theme: "pink" },
              { title: "Premium Hospitality", desc: "Experienced local guides, culinary chefs who customize spices, and resort staff trained to satisfy every bespoke boarding request.", img: "/images/leopard_wild.jpg", icon: <Sparkles className="w-6 h-6" />, theme: "teal" },
            ].map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`wc-card wc-theme-${card.theme}`}
              >
                {/* Image Wrapper */}
                <div className="wc-card-img-wrapper">
                  <img src={card.img} alt={card.title} className="wc-card-img" />
                </div>
                
                {/* Content Info */}
                <div className="wc-card-info">
                  {/* Icon Box */}
                  <div className="wc-card-icon-box">
                    {card.icon}
                  </div>
                  
                  <h3 className="wc-card-title">
                    {card.title}
                  </h3>
                  
                  <p className="wc-card-desc">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section 
        className="py-24 relative overflow-hidden bg-cover bg-center text-center"
        style={{
          backgroundImage: `url('/images/nature_banner.jpg')`,
          backgroundColor: '#112d15',
        }}
      >
        <div className="cta-overlay-dark" />
        <div className="container relative z-10 flex flex-col items-center justify-center gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-orange font-bold uppercase tracking-extra-wide text-sm block mb-2">
              Book Your Wilderness Escape
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold cta-title mb-6">
              Ready To Track The Leopards Of Jawai?
            </h2>
            <p className="cta-desc text-lg mb-8 leading-relaxed">
              Reserve your luxury cottage suite or farm stay today. Join us for guided morning safaris, stargazing dinners, and pure peace among Rajasthan's ancient monoliths.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:08058571919" className="btn btn-primary">
                <Phone className="w-5 h-5" style={{ color: '#ffffff', fill: '#ffffff' }} />
                Call Now
              </a>
              <Link to="/contact" className="btn btn-secondary-light">
                Book Your Stay
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. TESTIMONIALS SECTION */}
      <section className="section-padding bg-[#120e0a] relative overflow-hidden border-t border-white/5">
        <LeafAnimation />
        <div className="container">
          <div className="section-title">
            <span>Guest Experiences</span>
            <h2>Reviews From Our Travelers</h2>
          </div>

          <div className="testimonial-container">
            <AnimatePresence mode="wait">
              {testimonials.map((t, idx) => (
                idx === activeTestimonial && (
                  <motion.div
                    key={idx}
                    className="glass-panel testimonial-card text-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#e07a5f] text-[#e07a5f]" />
                      ))}
                    </div>
                    <blockquote className="testimonial-quote">
                      "{t.quote}"
                    </blockquote>
                    <cite className="block">
                      <span className="testimonial-author">{t.author}</span>
                      <span className="testimonial-role">{t.role}</span>
                    </cite>
                  </motion.div>
                )
              ))}
            </AnimatePresence>

            {/* Slider Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    idx === activeTestimonial ? 'bg-[#e07a5f]' : 'bg-white/20'
                  }`}
                  aria-label={`Go to testimonial slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="section-padding bg-[#120e0a] border-t border-white/5 relative overflow-hidden">
        <div className="container">
          <div className="section-title">
            <span>Have Questions?</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="faq-item">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="faq-question-btn"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#e07a5f]' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="faq-answer border-t border-white/5 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
