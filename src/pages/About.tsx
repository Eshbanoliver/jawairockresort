import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { LeafAnimation } from '../components/LeafAnimation';
import { SectionDivider } from '../components/SectionDivider';
import { Compass, Waves, Flame, Phone, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="w-full">
      <SEO 
        title="About Jawai Rock Resort & Bera Leopard Conservation"
        description="Learn the story of Jawai Rock Resort, where eco-luxury meets the ancient granite wilderness. Discover our commitment to wildlife conservation in Rajasthan."
        keywords="History of Jawai, Bera leopard conservation, Wildlife resort heritage, Jawai Rock Resort about, Eco luxury Jawai"
      />
      {/* Hero Header */}
      <section 
        className="relative py-32 flex items-center justify-center bg-cover bg-center text-center overflow-hidden"
        style={{
          backgroundImage: `url('/images/jawai_dam.jpg')`,
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
            <span className="text-orange font-bold uppercase tracking-extra-wide text-sm block mb-2">Our Roots</span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white">About Us</h1>
            <p className="text-gray-300 max-w-xl mx-auto mt-4 text-base">
              Learn the story of Jawai Rock Resort, where eco-luxury meets the ancient granite wilderness.
            </p>
          </motion.div>
        </div>
        <SectionDivider type="rocks" color="#faf5f0" className="absolute bottom-0 left-0 w-full" />
      </section>
 
       {/* Resort Story */}
       <section className="section-padding bg-[#120e0a] relative overflow-hidden">
         <LeafAnimation />
         <div className="container">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
             <motion.div 
               className="lg:col-span-7 flex flex-col gap-6 text-left"
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
             >
               <div className="section-title text-left mb-6">
                 <span>The Story</span>
                 <h2>Coexisting In Harmony With The Ancient Wilds</h2>
               </div>
               
               <p className="leading-relaxed">
                 The region of Jawai in Rajasthan is unlike any other wildlife sanctuary in the world. Here, leopards do not live inside dense forests; instead, they reside in the cavities of towering granite monoliths that date back millions of years. For centuries, the local Rabari herdsmen and these top-tier predators have shared a peaceful relationship based on respect and spiritual connection.
               </p>
               
               <p className="leading-relaxed">
                 **Jawai Rock Resort** was founded to celebrate this beautiful connection. Located on Jawai Bandh Road, near Galthani Panchayat, our resort is built to offer tourists an immersive, luxury-infused wilderness escape. We pride ourselves on preserving the peacefulness of the surrounding village and farm lands while opening a gateway for wildlife enthusiasts, birdwatchers, and families to discover Jawai's stunning ecosystem.
               </p>
 
               <p className="leading-relaxed">
                 Our architecture pays homage to the local textures. We use earth finishes, natural rocks, and organic wood panelings, allowing the resort to blend seamlessly into the granite hill backdrop. When you step into our rooms, you step into a sanctuary of peace.
               </p>
             </motion.div>
 
              <motion.div 
                className="lg:col-span-5 relative flex items-center justify-center mt-8 lg:mt-0"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Background Glow Ornament */}
                <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-[#e07a5f]/15 to-[#7b9e54]/15 filter blur-3xl pointer-events-none" style={{ zIndex: 0 }} />

                <motion.div 
                  className="rounded-2xl overflow-hidden border border-white/5 shadow-2xl relative w-full"
                  whileHover={{ scale: 1.03, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ zIndex: 1 }}
                >
                   <img 
                     src="/images/sunset_view.jpg" 
                     alt="Rabari shepherd and landscape" 
                     className="w-full object-cover"
                     style={{ height: '450px' }}
                   />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a]/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-6 glass-panel border border-white/10">
                    <span className="text-orange font-bold uppercase tracking-wider text-xs block mb-1">Local Vibe</span>
                    <p className="text-white text-sm font-medium">
                      "Every rock in Jawai holds a thousand stories of leopards and shepherds living together."
                    </p>
                  </div>
                </motion.div>
              </motion.div>
          </div>
        </div>
      </section>

      {/* Jungle Safari Lifestyle */}
      <section className="section-padding bg-[#112d15] relative overflow-hidden">
        <div className="safari-pattern" />
        <div className="container relative z-10">
          <div className="section-title">
            <span>The Lifestyle</span>
            <h2>The Jungle Safari Experience</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Morning Tracking",
                desc: "Awake to local herbal tea before climbing into open 4x4 Gypsies. Our local trackers read footprints left on sandy trails to guide you straight to the rocky leopard caves as the morning sun paints the monoliths red.",
                icon: <Compass className="w-6 h-6 text-[#e07a5f]" />,
                themeClass: "cv-theme-gold",
                watermark: <Compass className="cv-watermark absolute" />
              },
              {
                num: "02",
                title: "Dam Sunset Walks",
                desc: "Spend afternoons visiting Jawai Dam to watch crocodiles sunbathing along the shores and spot migratory birds like flamingoes and cranes nesting against the golden waters.",
                icon: <Waves className="w-6 h-6 text-[#7b9e54]" />,
                themeClass: "cv-theme-green",
                watermark: <Waves className="cv-watermark absolute" />
              },
              {
                num: "03",
                title: "Campfire Stories",
                desc: "As night falls, gather around an open pit bonfire at the resort. Enjoy Rajasthani folk performances, listen to tracking tales, and dine on authentic local cuisine cooked on wood fires.",
                icon: <Flame className="w-6 h-6 text-[#5a8ca0]" />,
                themeClass: "cv-theme-blue",
                watermark: <Flame className="cv-watermark absolute" />
              }
            ].map((item, idx) => (
              <motion.div
                key={item.num}
                className={`cv-card ${item.themeClass} p-8 rounded-xl flex flex-col gap-4 text-left relative overflow-hidden`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                {item.watermark}
                <div className="flex items-center justify-between relative z-10">
                  <div className="cv-icon-box shrink-0 h-fit">
                    {item.icon}
                  </div>
                  <span className="text-4xl text-white/20 font-extrabold font-heading tracking-tight">{item.num}</span>
                </div>
                <div className="relative z-10 mt-2">
                  <h3 className="text-xl font-heading font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <SectionDivider type="curve" color="#faf5f0" className="absolute bottom-0 left-0 w-full" />
      </section>


      {/* Call to Action Section */}
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
            className="max-w-2xl mx-auto"
          >
            <span className="text-orange font-bold uppercase tracking-extra-wide text-sm block mb-2">
              Embark on Your Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold cta-title mb-6">
              Experience the Majestic Granite Hills & Wild Leopards
            </h2>
            <p className="cta-desc text-lg mb-8 leading-relaxed">
              Plan your ultimate escape to Jawai Rock Resort. From early morning trackings in open 4x4 gypsies to starry campfire nights, immerse yourself in nature's absolute beauty.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:08058571919" className="btn btn-primary px-6 py-3 uppercase text-sm">
                <Phone className="w-5 h-5" style={{ color: '#ffffff', fill: '#ffffff' }} />
                Call Now
              </a>
              <Link to="/contact" className="btn btn-secondary-light px-6 py-3 uppercase text-sm">
                Book Your Stay
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
