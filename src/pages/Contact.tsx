import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionDivider } from '../components/SectionDivider';
import { LeafAnimation } from '../components/LeafAnimation';
import { 
  MapPin, Phone, MessageSquare, Send, CheckCircle, Map, ArrowRight, Hotel, Compass, Users 
} from 'lucide-react';

const glowColors: Record<string, string> = {
  stay: '#e07a5f',      // Sunset gold
  safari: '#7b9e54',    // Olive green
  wedding: '#db7093',   // Pink
  general: '#5a753c'    // Olive dark
};

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState('general');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', phone: '', subject: 'General Inquiry', message: '' });
      setSelectedInquiry('general');
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1800);
  };

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section 
        className="relative py-32 flex items-center justify-center bg-cover bg-center text-center overflow-hidden animate-fade-in"
        style={{
          backgroundImage: `url('/images/contact_banner.jpg')`,
          minHeight: '400px'
        }}
      >
        <div className="absolute inset-0 bg-[#120e0adc]/85 z-1" />
        
        {/* Floating background coordinates details ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 animate-spin-slow pointer-events-none z-0" style={{ animationDuration: '60s' }} />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#e07a5f] font-mono text-xs uppercase tracking-wider mb-4 animate-pulse">
              <MapPin className="w-3.5 h-3.5" />
              25.11747° N, 73.13475° E
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white">Contact Us</h1>
            <p className="text-gray-300 max-w-xl mx-auto mt-4 text-base leading-relaxed">
              Connect with our reservation desk to customize your stay packages, check safari availability, and schedule pick-ups.
            </p>
          </motion.div>
        </div>
        <SectionDivider type="rocks" color="#112d15" className="absolute bottom-0 left-0 w-full" />
      </section>

      {/* Main Form & Details */}
      <section 
        className="section-padding bg-[#112d15] relative overflow-hidden"
        style={{
          background: 'radial-gradient(circle at center, #1b3d20 0%, #112d15 100%)'
        }}
      >
        <div className="safari-pattern" />
        <LeafAnimation />

        {/* Dynamic backdrop glowing blobs based on selected inquiry */}
        <div 
          className="absolute top-1/4 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full blur-[100px] pointer-events-none transition-all duration-1000" 
          style={{ backgroundColor: `${glowColors[selectedInquiry]}15` }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 translate-y-1/2 w-96 h-96 rounded-full blur-[100px] pointer-events-none transition-all duration-1000" 
          style={{ backgroundColor: `${glowColors[selectedInquiry]}20` }}
        />

        <div className="container relative z-10 bg-[#112d15]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Details Panel */}
            <motion.div 
              className="lg:col-span-5 flex flex-col gap-6 text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-title text-left mb-4">
                <span className="text-[#e07a5f]">Reach Out</span>
                <h2>Contact Information</h2>
                <p className="text-sm text-gray-400 mt-2">
                  Our reservations desk is available from 8:00 AM to 10:00 PM IST. Get in touch for instant bookings.
                </p>
              </div>

              {/* Operating Status Badge */}
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-fit text-xs text-white">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7b9e54] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#7b9e54]"></span>
                </span>
                <span className="font-semibold text-white/90">Reservations Desk: Online &amp; Active</span>
              </div>

              {/* Coordinates List of Interactive Cards */}
              <div className="flex flex-col gap-5">
                
                {/* 1. Location Card */}
                <motion.div 
                  className="glass-panel relative p-5 flex gap-4 text-left border border-white/10 bg-white/5 group overflow-hidden rounded-2xl"
                  whileHover={{ 
                    y: -5, 
                    borderColor: 'rgba(224, 122, 95, 0.45)',
                    boxShadow: '0 15px 30px rgba(224, 122, 95, 0.12)' 
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                  <div className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-[#e07a5f]/5 blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
                  <div className="p-3.5 rounded-xl bg-white/5 w-fit h-fit border border-white/8 text-[#e07a5f] group-hover:border-[#e07a5f]/40 group-hover:bg-[#e07a5f]/10 group-hover:rotate-12 transition-all duration-300 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-base mb-1 group-hover:text-[#e07a5f] transition-colors duration-300">Our Location</h4>
                    <p className="text-sm text-gray-400 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      Jawai bandh road, near galthani panchayat, Jawai, Rajasthan – 306126
                    </p>
                    <span className="text-xs font-mono text-gray-500 block mt-1.5 uppercase tracking-wide group-hover:text-gray-400 transition-colors">
                      GPS: 25.11747° N, 73.13475° E
                    </span>
                  </div>
                </motion.div>

                {/* 2. Phone Card */}
                <motion.div 
                  className="glass-panel relative p-5 flex gap-4 text-left border border-white/10 bg-white/5 group overflow-hidden rounded-2xl"
                  whileHover={{ 
                    y: -5, 
                    borderColor: 'rgba(123, 158, 84, 0.45)',
                    boxShadow: '0 15px 30px rgba(123, 158, 84, 0.12)' 
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                  <div className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-[#7b9e54]/5 blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
                  <div className="p-3.5 rounded-xl bg-white/5 w-fit h-fit border border-white/8 text-[#7b9e54] group-hover:border-[#7b9e54]/40 group-hover:bg-[#7b9e54]/10 group-hover:rotate-12 transition-all duration-300 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-base mb-1 group-hover:text-[#7b9e54] transition-colors duration-300">Call Booking Desk</h4>
                    <a href="tel:08058571919" className="text-sm text-gray-400 hover:text-white transition-colors block font-semibold">
                      080585 71919
                    </a>
                    <span className="text-xs text-gray-500 block mt-1">Direct Mobile Call • 8 AM - 10 PM</span>
                  </div>
                </motion.div>

                {/* 3. WhatsApp Card */}
                <motion.div 
                  className="glass-panel relative p-5 flex gap-4 text-left border border-white/10 bg-white/5 group overflow-hidden rounded-2xl"
                  whileHover={{ 
                    y: -5, 
                    borderColor: 'rgba(37, 211, 102, 0.45)',
                    boxShadow: '0 15px 30px rgba(37, 211, 102, 0.12)' 
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                  <div className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-[#25d366]/5 blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
                  <div className="p-3.5 rounded-xl bg-white/5 w-fit h-fit border border-white/8 text-[#25d366] group-hover:border-[#25d366]/40 group-hover:bg-[#25d366]/10 group-hover:rotate-12 transition-all duration-300 shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-base mb-1 group-hover:text-[#25d366] transition-colors duration-300">WhatsApp Reservation</h4>
                    <a 
                      href="https://wa.me/918058571919" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm text-gray-400 hover:text-[#25d366] transition-colors block font-semibold"
                    >
                      Chat on WhatsApp
                    </a>
                    <span className="text-xs text-gray-500 block mt-1">Instant Response • Digital Safari Desk</span>
                  </div>
                </motion.div>

              </div>

              {/* Direct Buttons */}
              <div className="flex flex-wrap gap-4 mt-2">
                <a href="tel:08058571919" className="btn btn-primary px-6 py-3 uppercase text-sm" style={{ color: '#ffffff' }}>
                  <Phone className="w-4 h-4" />
                  Call 080585 71919
                </a>
                <a 
                  href="https://wa.me/918058571919" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp px-6 py-3 uppercase text-sm"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Contact Form Panel */}
            <motion.div 
              className="lg:col-span-7 glass-panel p-8 border border-white/10 bg-white/5 relative overflow-hidden flex flex-col justify-center rounded-3xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              style={{
                borderColor: `${glowColors[selectedInquiry]}33`
              }}
              whileHover={{ 
                borderColor: `${glowColors[selectedInquiry]}77`,
                boxShadow: `0 20px 40px ${glowColors[selectedInquiry]}15`
              }}
            >
              <h3 className="font-heading font-bold text-2xl text-white mb-5 text-left relative z-10 flex items-center gap-2">
                Send A Message
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
                {/* 1. Inquiry Type Selector (Interactive Chips) */}
                <div className="flex flex-col gap-2.5 text-left mb-2">
                  <label className="form-label text-white/80 font-bold text-xs uppercase tracking-wide block">
                    Choose Booking / Inquiry Category *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { id: 'stay', label: 'Luxury Stays', icon: <Hotel className="w-4 h-4" />, subject: 'Inquiry for Luxury cottage stays' },
                      { id: 'safari', label: 'Leopard Safaris', icon: <Compass className="w-4 h-4" />, subject: 'Inquiry for Jungle safari packages' },
                      { id: 'wedding', label: 'Weddings & Events', icon: <Users className="w-4 h-4" />, subject: 'Inquiry for destination weddings/events' },
                      { id: 'general', label: 'General Query', icon: <MessageSquare className="w-4 h-4" />, subject: 'General Enquiry / Other query' }
                    ].map(chip => (
                      <button
                        key={chip.id}
                        type="button"
                        onClick={() => {
                          setSelectedInquiry(chip.id);
                          setFormData(prev => ({ ...prev, subject: chip.subject }));
                        }}
                        className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all duration-300 gap-1.5 ${
                          selectedInquiry === chip.id
                            ? 'bg-white/10 border-white/40 text-white shadow-lg scale-[1.03]'
                            : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20 hover:text-white'
                        }`}
                      >
                        <div className={`p-1.5 rounded-lg ${selectedInquiry === chip.id ? 'bg-white/15' : 'bg-white/5'} text-white`}>
                          {chip.icon}
                        </div>
                        <span className="text-xs font-semibold leading-tight">{chip.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Grid for Name and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="form-group text-left">
                    <label htmlFor="name" className="form-label text-white/80 font-bold text-xs uppercase tracking-wide block mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="e.g. Aarav Sharma" 
                      className="form-input transition-all duration-300" 
                      style={{
                        background: focusedField === 'name' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.04)',
                        borderColor: focusedField === 'name' ? glowColors[selectedInquiry] : 'rgba(255, 255, 255, 0.1)',
                        boxShadow: focusedField === 'name' ? `0 0 15px ${glowColors[selectedInquiry]}33` : 'none',
                        color: '#ffffff',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div className="form-group text-left">
                    <label htmlFor="phone" className="form-label text-white/80 font-bold text-xs uppercase tracking-wide block mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="e.g. 09876543210" 
                      className="form-input transition-all duration-300"
                      style={{
                        background: focusedField === 'phone' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.04)',
                        borderColor: focusedField === 'phone' ? glowColors[selectedInquiry] : 'rgba(255, 255, 255, 0.1)',
                        boxShadow: focusedField === 'phone' ? `0 0 15px ${glowColors[selectedInquiry]}33` : 'none',
                        color: '#ffffff',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                {/* 3. Subject Input */}
                <div className="form-group text-left">
                  <label htmlFor="subject" className="form-label text-white/80 font-bold text-xs uppercase tracking-wide block mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="e.g. Luxury Suite Booking / Leopard Safari Quote" 
                    className="form-input transition-all duration-300"
                    style={{
                      background: focusedField === 'subject' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.04)',
                      borderColor: focusedField === 'subject' ? glowColors[selectedInquiry] : 'rgba(255, 255, 255, 0.1)',
                      boxShadow: focusedField === 'subject' ? `0 0 15px ${glowColors[selectedInquiry]}33` : 'none',
                      color: '#ffffff',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* 4. Message Area */}
                <div className="form-group text-left">
                  <label htmlFor="message" className="form-label text-white/80 font-bold text-xs uppercase tracking-wide block mb-2">Message / Details *</label>
                  <textarea 
                    id="message" 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell us about your travel dates, count of rooms, and safari slots required..." 
                    className="form-textarea transition-all duration-300"
                    style={{
                      background: focusedField === 'message' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.04)',
                      borderColor: focusedField === 'message' ? glowColors[selectedInquiry] : 'rgba(255, 255, 255, 0.1)',
                      boxShadow: focusedField === 'message' ? `0 0 15px ${glowColors[selectedInquiry]}33` : 'none',
                      color: '#ffffff',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Submit Feedback */}
                <AnimatePresence>
                  {submitSuccess && (
                    <motion.div 
                      className="flex items-center gap-2 bg-[#2c5932]/20 border border-[#7b9e54]/30 rounded-lg p-4 text-sm text-[#7b9e54] text-left"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <CheckCircle className="w-5 h-5 shrink-0" />
                      <span>Thank you! Your message has been sent. Our booking manager will contact you shortly.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Form Submit Button */}
                <motion.button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn btn-primary py-3.5 w-full uppercase flex items-center justify-center gap-2 mt-2 disabled:opacity-50 overflow-hidden group"
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  style={{ color: '#ffffff' }}
                >
                  <motion.div
                    animate={isSubmitting ? { 
                      x: [0, 8, -30, 50], 
                      y: [0, -8, -15, 0],
                      opacity: [1, 1, 0, 1]
                    } : {}}
                    transition={{ 
                      duration: 1.2, 
                      repeat: isSubmitting ? Infinity : 0, 
                      ease: "easeInOut" 
                    }}
                    className="flex items-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  >
                    <Send className="w-4 h-4" />
                  </motion.div>
                  <span>{isSubmitting ? 'Sending Ticket...' : 'Send Message'}</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Flipped divider at bottom transition to the Map section */}
        <SectionDivider type="rocks" color="#faf5f0" className="absolute bottom-0 left-0 w-full" flipped={true} />
      </section>

      {/* Embedded Google Maps Section */}
      <section className="bg-[#120e0a] relative overflow-hidden pb-12">
        {/* Upper sand color strip to divide map */}
        <div className="w-full h-12 bg-[#faf5f0]" />
        
        <div className="container relative py-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5 bg-[#1f1812] group max-w-5xl mx-auto h-[450px]">
            {/* Map Iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.538685530543!2d73.13475407537919!3d25.117472677762333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394295000d6ff47d%3A0x49a23393aa77867!2sJawai%20Rock%20Resort!5e0!3m2!1sen!2sin!4v1779250348232!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map location of Jawai Rock Resort"
              className="grayscale-[10%] contrast-[105%] group-hover:grayscale-0 transition-all duration-700 h-full"
            />
            
            {/* Floating Glass Directions Card */}
            <div className="absolute top-6 left-6 max-w-xs md:max-w-sm bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-2xl pointer-events-auto transform group-hover:translate-y-[-4px] transition-all duration-500 z-20">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-[#112d15]/10 rounded-lg text-[#112d15]">
                  <Map className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-extrabold text-sm md:text-base text-[#112d15]">Explore Our Monolith</h4>
              </div>
              <p className="text-xs text-gray-500 mb-3.5 leading-relaxed">
                Need navigation on your device? Tap below to open directions in Google Maps directly.
              </p>
              <a 
                href="https://maps.app.goo.gl/49a23393aa77867" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary px-4 py-2.5 w-full text-xs uppercase flex items-center justify-center gap-2 hover:scale-[1.03]"
                style={{ color: '#ffffff' }}
              >
                Get Directions
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
