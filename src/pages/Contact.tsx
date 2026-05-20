import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionDivider } from '../components/SectionDivider';
import { LeafAnimation } from '../components/LeafAnimation';
import { MapPin, Phone, MessageSquare, Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
      setFormData({ name: '', phone: '', subject: '', message: '' });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section 
        className="relative py-32 flex items-center justify-center bg-cover bg-center text-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1920')`,
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
            <span className="text-orange font-bold uppercase tracking-[0.25em] text-sm block mb-2">Get In Touch</span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white">Contact Us</h1>
            <p className="text-gray-300 max-w-xl mx-auto mt-4 text-base">
              Connect with our reservation desk to customize your stay packages, check safari availability, and schedule pick-ups.
            </p>
          </motion.div>
        </div>
        <SectionDivider type="rocks" color="#120e0a" className="absolute bottom-0 left-0 w-full" />
      </section>

      {/* Main Form & Details */}
      <section className="section-padding bg-[#120e0a] relative overflow-hidden">
        <LeafAnimation />
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Details Panel */}
            <motion.div 
              className="lg:col-span-5 flex flex-col gap-8 text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-title text-left mb-6">
                <span>Reach Out</span>
                <h2>Contact Information</h2>
                <p className="text-sm text-gray-400 mt-2">
                  Our reservations desk is available from 8:00 AM to 10:00 PM IST. Get in touch for instant bookings.
                </p>
              </div>

              {/* Coordinates List */}
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-[#e07a5f] shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-base mb-1">Our Location</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Jawai bandh road, near galthani panchayat, Jawai, Rajasthan – 306126
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-[#7b9e54] shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-base mb-1">Call Booking Desk</h4>
                    <a href="tel:08058571919" className="text-sm text-gray-400 hover:text-white transition-colors block">
                      080585 71919
                    </a>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 block">Direct Mobile Call</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-[#25d366] shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-base mb-1">WhatsApp Reservation</h4>
                    <a 
                      href="https://wa.me/918058571919" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm text-gray-400 hover:text-[#25d366] transition-colors block"
                    >
                      Chat on WhatsApp
                    </a>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 block">Instant Response</span>
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="flex flex-wrap gap-4 mt-4">
                <a href="tel:08058571919" className="btn btn-primary px-6 py-3 uppercase text-sm">
                  <Phone className="w-4 h-4 fill-white" />
                  Call 080585 71919
                </a>
                <a 
                  href="https://wa.me/918058571919" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary px-6 py-3 uppercase text-sm border-white/10"
                >
                  <MessageSquare className="w-4 h-4 text-[#25d366]" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Contact Form Panel */}
            <motion.div 
              className="lg:col-span-7 glass-panel p-8 border border-white/10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-heading font-bold text-2xl text-white mb-6 text-left">Send A Message</h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Aarav Sharma" 
                      className="form-input" 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 09876543210" 
                      className="form-input" 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Luxury Suite Booking / Leopard Safari Quote" 
                    className="form-input" 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message / Details *</label>
                  <textarea 
                    id="message" 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your travel dates, count of rooms, and safari slots required..." 
                    className="form-textarea"
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

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn btn-primary py-3.5 w-full uppercase flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Embedded Google Maps Section */}
      <section className="bg-[#120e0a] border-t border-white/5 overflow-hidden">
        <div className="w-full relative h-[450px] overflow-hidden leading-none z-1">
          {/* We embed the map iframe responsively */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.538685530543!2d73.13475407537919!3d25.117472677762333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394295000d6ff47d%3A0x49a23393aa77867!2sJawai%20Rock%20Resort!5e0!3m2!1sen!2sin!4v1779250348232!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map location of Jawai Rock Resort"
          />
        </div>
      </section>
    </div>
  );
};
