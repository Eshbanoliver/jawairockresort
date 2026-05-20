import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  Compass, Tent, TreePine, Waves, Sparkles, 
  Award, Shield, Smile, Star, ArrowRight, Phone, ChevronDown,
  Users, Hotel, Utensils, Activity, Cake, Briefcase
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
    "https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=1920", // Leopard and jungle safari walk
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1920", // Luxury villa retreat
    "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1920", // Premium infinity pool
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
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800",
      category: 'stays',
      themeClass: 'card-theme-gold'
    },
    { 
      title: "Fine Dining Restaurant", 
      desc: "Savor premium organic farm-to-table dining, local Rajasthani delicacies, and romantic campfire barbecues.", 
      icon: <Utensils className="w-6 h-6 text-[#e07a5f]" />, 
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800",
      category: 'dining',
      themeClass: 'card-theme-peach'
    },
    { 
      title: "Jungle Leopard Safari", 
      desc: "Explore wilderness safari trails in open-top 4x4 Gypsy trackers to spot local leopards and crocodiles.", 
      icon: <Compass className="w-6 h-6 text-[#e07a5f]" />, 
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800",
      category: 'activities',
      themeClass: 'card-theme-sage'
    },
    { 
      title: "Private Luxury Villa", 
      desc: "Indulge in spacious, private villa retreats complete with luxury bedding, terraces, and personal service.", 
      icon: <TreePine className="w-6 h-6 text-[#e07a5f]" />, 
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800",
      category: 'stays',
      themeClass: 'card-theme-gold'
    },
    { 
      title: "Scenic Swimming Pool", 
      desc: "Unwind at our outdoor infinity swimming pool surrounded by massive, spectacular granite boulders.", 
      icon: <Waves className="w-6 h-6 text-[#e07a5f]" />, 
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800",
      category: 'dining',
      themeClass: 'card-theme-blue'
    },
    { 
      title: "Recreation & Sports", 
      desc: "Engage in outdoor games, trekking activities, and team-building sports across the private reserve area.", 
      icon: <Activity className="w-6 h-6 text-[#e07a5f]" />, 
      image: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=800",
      category: 'activities',
      themeClass: 'card-theme-green'
    },
    { 
      title: "Premium Tent House", 
      desc: "Experience high-end glamping inside luxury safari tents equipped with air conditioning and private decks.", 
      icon: <Tent className="w-6 h-6 text-[#e07a5f]" />, 
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=800",
      category: 'stays',
      themeClass: 'card-theme-peach'
    },
    { 
      title: "Birthday Party & Celebrations", 
      desc: "Celebrate birthdays and milestones under twinkling stars with bespoke setups, catering, and live music.", 
      icon: <Cake className="w-6 h-6 text-[#e07a5f]" />, 
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800",
      category: 'events',
      themeClass: 'card-theme-pink'
    },
    { 
      title: "Corporate Events & Meetings", 
      desc: "Conduct private conferences, retreats, and team-building camps against scenic, monolith vistas.", 
      icon: <Briefcase className="w-6 h-6 text-[#e07a5f]" />, 
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800",
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
                  src="https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=800" 
                  alt="Wild Leopard" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md border border-black/5 h-40">
                <img 
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800" 
                  alt="Resort Pool" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md border border-black/5 h-40">
                <img 
                  src="https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=800" 
                  alt="Safari Tent" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md border border-black/5 h-40">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800" 
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
                  src="https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=800" 
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
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800" 
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
                  src="https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=800" 
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
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800" 
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
              { title: "Premium Hospitality", desc: "Warm, tailored guest treatment that mirrors Rajasthan's historic royal standard.", icon: <Award className="w-6 h-6 text-[#e07a5f]" />, themeClass: 'cv-theme-gold' },
              { title: "Nature Connection", desc: "Creating stays that encourage physical, mental, and visual alignment with wilderness.", icon: <TreePine className="w-6 h-6 text-[#7b9e54]" />, themeClass: 'cv-theme-green' },
              { title: "Uncompromising Comfort", desc: "Equipping every cottage and farm chalet with high-end beddings and modern en-suites.", icon: <Shield className="w-6 h-6 text-[#5a8ca0]" />, themeClass: 'cv-theme-blue' },
              { title: "Luxury Experience", desc: "Open 4x4 tracks, gourmet local and international dining, and candlelit campfire events.", icon: <Sparkles className="w-6 h-6 text-[#9b59b6]" />, themeClass: 'cv-theme-purple' },
              { title: "Peaceful Environment", desc: "Located away from commercial traffic, nested under ancient granite rocks.", icon: <Compass className="w-6 h-6 text-[#1abc9c]" />, themeClass: 'cv-theme-teal' },
              { title: "Guest Satisfaction", desc: "Going the extra mile to ensure your leopard tracking and leisure wishes are met.", icon: <Smile className="w-6 h-6 text-[#e91e63]" />, themeClass: 'cv-theme-pink' },
            ].map((value, idx) => (
              <motion.div
                key={value.title}
                className={`cv-card ${value.themeClass} p-6 rounded-xl flex gap-4 text-left relative overflow-hidden`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
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

      {/* 7. WHY CHOOSE US SECTION */}
      <section className="section-padding bg-[#1b3d20]/30 relative overflow-hidden border-y border-white/5">
        <div className="safari-pattern" />
        <div className="container relative z-10">
          <div className="section-title">
            <span>The Jawai Advantage</span>
            <h2>Why Choose Jawai Rock Resort</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Scenic Jawai Location", desc: "Perfectly positioned alongside the stunning granite monoliths, offering immediate scenic sunset viewpoints directly from our decks.", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400" },
              { title: "Peaceful Jungle Atmosphere", desc: "A truly quiet habitat where birds call, leopards roam the ridges, and city noise fades completely under starry Rajasthan skies.", img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=400" },
              { title: "Budget Friendly Luxury", desc: "Unmatched value combining premium resort amenities, swimming pool, and organic dining without heavy, overpriced bills.", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=400" },
              { title: "Resort Near Safari Area", desc: "Located within short driving distance from the key leopard-sighting rocky areas, giving you priority access to early trackers.", img: "https://images.unsplash.com/photo-1581888227599-779811939961?q=80&w=400" },
              { title: "Family Friendly Stay", desc: "Spacious multi-bedroom villas, outdoor lawn play zones, and child-safe bonfire events that cater to families of all sizes.", img: "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=400" },
              { title: "Premium Hospitality", desc: "Experienced local guides, culinary chefs who customize spices, and resort staff trained to satisfy every bespoke boarding request.", img: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?q=80&w=400" },
            ].map((card, idx) => (
              <motion.div
                key={card.title}
                className="glass-card flex flex-col text-left h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a] to-transparent opacity-60" />
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <h3 className="text-lg font-heading font-semibold text-white">{card.title}</h3>
                  <p className="text-sm text-gray-400">{card.desc}</p>
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
          backgroundImage: `url('https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-[#120e0ade]/90 z-1" />
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
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-6">
              Ready To Track The Leopards Of Jawai?
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Reserve your luxury cottage suite or farm stay today. Join us for guided morning safaris, stargazing dinners, and pure peace among Rajasthan's ancient monoliths.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:08058571919" className="btn btn-primary">
                <Phone className="w-5 h-5 fill-white text-[#e07a5f]" />
                Call Now
              </a>
              <Link to="/contact" className="btn btn-secondary">
                Book Your Stay
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
