import React from 'react';
import { motion } from 'framer-motion';
import { LeafAnimation } from '../components/LeafAnimation';
import { SectionDivider } from '../components/SectionDivider';

export const About: React.FC = () => {
  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600", caption: "Luxury Cottage & Pool View" },
    { url: "https://images.unsplash.com/photo-1581888227599-779811939961?q=80&w=600", caption: "Open Gypsy Jungle Safari" },
    { url: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?q=80&w=600", caption: "Jawai Wild Leopards" },
    { url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=600", caption: "Night Campfires & Bonfires" },
    { url: "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=600", caption: "Jawai Dam Bird Watching" },
    { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600", caption: "Granite Monolith Hills" },
  ];

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section 
        className="relative py-32 flex items-center justify-center bg-cover bg-center text-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1920')`,
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
            <span className="text-orange font-bold uppercase tracking-[0.25em] text-sm block mb-2">Our Roots</span>
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
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="rounded-2xl overflow-hidden border border-white/5 shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800" 
                  alt="Rabari shepherd and landscape" 
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a]/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 glass-panel border border-white/10">
                  <span className="text-orange font-bold uppercase tracking-wider text-xs block mb-1">Local Vibe</span>
                  <p className="text-white text-sm font-medium">
                    "Every rock in Jawai holds a thousand stories of leopards and shepherds living together."
                  </p>
                </div>
              </div>
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
            <motion.div 
              className="glass-panel p-6 border border-white/10 text-left flex flex-col gap-3"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-4xl text-orange font-extrabold font-heading">01</span>
              <h3 className="text-xl font-heading font-semibold text-white">Morning Tracking</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Awake to local herbal tea before climbing into open 4x4 Gypsies. Our local trackers read footprints left on sandy trails to guide you straight to the rocky leopard caves as the morning sun paints the monoliths red.
              </p>
            </motion.div>

            <motion.div 
              className="glass-panel p-6 border border-white/10 text-left flex flex-col gap-3"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-4xl text-orange font-extrabold font-heading">02</span>
              <h3 className="text-xl font-heading font-semibold text-white">Dam sunset walks</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Spend afternoons visiting Jawai Dam to watch crocodiles sunbathing along the shores and spot migratory birds like flamingoes and cranes nesting against the golden waters.
              </p>
            </motion.div>

            <motion.div 
              className="glass-panel p-6 border border-white/10 text-left flex flex-col gap-3"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-4xl text-orange font-extrabold font-heading">03</span>
              <h3 className="text-xl font-heading font-semibold text-white">Campfire Stories</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                As night falls, gather around an open pit bonfire at the resort. Enjoy Rajasthani folk performances, listen to tracking tales, and dine on authentic local cuisine cooked on wood fires.
              </p>
            </motion.div>
          </div>
        </div>
        <SectionDivider type="curve" color="#faf5f0" className="absolute bottom-0 left-0 w-full" />
      </section>

      {/* Full-width nature image banner */}
      <section 
        className="h-96 relative bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=1920')`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-[#120e0a]/50" />
      </section>

      {/* Gallery Layout */}
      <section className="section-padding bg-[#120e0a] relative overflow-hidden">
        <LeafAnimation />
        <div className="container">
          <div className="section-title">
            <span>Our Gallery</span>
            <h2>Moments Inside Jawai Rock Resort</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, idx) => (
              <motion.div 
                key={idx}
                className="relative rounded-xl overflow-hidden group border border-white/5 shadow-lg h-72"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <img 
                  src={image.url} 
                  alt={image.caption} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Hover overlay detail */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#120e0ad9] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="text-[#e07a5f] font-bold text-xs uppercase tracking-widest block mb-1">Jawai Rock</span>
                    <h4 className="text-white text-lg font-heading font-semibold">{image.caption}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
