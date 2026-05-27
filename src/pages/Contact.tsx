import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/SEO';
import { SectionDivider } from '../components/SectionDivider';
import { LeafAnimation } from '../components/LeafAnimation';
import { MapPin, Phone, MessageSquare, Send, CheckCircle, Hotel, Compass, Users } from 'lucide-react';

const glowColors: Record<string, string> = {
  stay:    '#e07a5f',
  safari:  '#7b9e54',
  wedding: '#db7093',
  general: '#5a753c'
};

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', subject: 'General Inquiry', message: '' });
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
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', phone: '', subject: 'General Inquiry', message: '' });
      setSelectedInquiry('general');
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1800);
  };

  const activeGlow = glowColors[selectedInquiry];

  /* ── Shared inline styles ── */
  const darkCard: React.CSSProperties = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '16px',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%',
    padding: '0.9rem 1.25rem',
    borderRadius: '10px',
    fontFamily: 'var(--font-sans)',
    fontSize: '1rem',
    color: '#ffffff',
    outline: 'none',
    transition: 'all 0.3s ease',
    background: focusedField === field ? 'rgba(255,255,255,0.09)' : 'rgba(255,255,255,0.05)',
    border: `1px solid ${focusedField === field ? activeGlow : 'rgba(255,255,255,0.12)'}`,
    boxShadow: focusedField === field ? `0 0 16px ${activeGlow}44` : 'none',
  });

  return (
    <div className="w-full">
      <SEO 
        title="Contact Jawai Rock Resort | Book Leopard Safari"
        description="Contact Jawai Rock Resort to book your luxury villa or farm style stay. Inquire about leopard safari tours, wildlife photography, and event bookings."
        keywords="Contact Jawai Rock Resort, Book Jawai resort, Jawai booking, Resort near Jawai Dam"
      />

      {/* ── Hero ── */}
      <section
        style={{
          backgroundImage: `url('/images/contact_banner.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '400px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          overflow: 'hidden',
          padding: '8rem 0',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(18,14,10,0.82)', zIndex: 1 }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '4px 14px', borderRadius: '999px',
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
              color: '#e07a5f', fontFamily: 'monospace', fontSize: '0.72rem',
              textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem',
            }}>
              <MapPin style={{ width: 14, height: 14 }} />
              25.11747° N, 73.13475° E
            </span>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>
              Contact Us
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '36rem', margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
              Connect with our reservation desk to customize your stay packages, check safari availability, and schedule pick-ups.
            </p>
          </motion.div>
        </div>
        <SectionDivider type="rocks" color="#112d15" className="absolute bottom-0 left-0 w-full" />
      </section>

      {/* ── Main Form & Details ── */}
      <section
        className="section-padding bg-[#112d15]"
        style={{ background: 'radial-gradient(ellipse at 60% 40%, #1b3d20 0%, #112d15 70%)', position: 'relative', overflow: 'hidden' }}
      >
        <div className="safari-pattern" />
        <LeafAnimation />

        {/* Ambient glow blobs */}
        <div style={{
          position: 'absolute', top: '20%', left: '10%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: `${activeGlow}12`,
          filter: 'blur(90px)', pointerEvents: 'none', transition: 'background 1s ease',
        }} />
        <div style={{
          position: 'absolute', bottom: '15%', right: '8%',
          width: '350px', height: '350px', borderRadius: '50%',
          background: `${activeGlow}18`,
          filter: 'blur(80px)', pointerEvents: 'none', transition: 'background 1s ease',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>

          {/* Two-column grid via inline style */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}>

            {/* ── LEFT: Contact Info ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              <div>
                <span style={{ color: '#e07a5f', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: '0.5rem' }}>
                  Reach Out
                </span>
                <h2 style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                  Contact Information
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Our reservations desk is open 8 AM – 10 PM IST. Get in touch for instant bookings.
                </p>
              </div>

              {/* Online Status */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '999px', padding: '6px 16px', width: 'fit-content',
              }}>
                <span style={{ position: 'relative', display: 'flex', width: 10, height: 10 }}>
                  <span className="animate-ping" style={{
                    position: 'absolute', inset: 0, borderRadius: '50%',
                    background: '#7b9e54', opacity: 0.7,
                  }} />
                  <span style={{ borderRadius: '50%', background: '#7b9e54', width: 10, height: 10, display: 'block' }} />
                </span>
                <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.78rem', fontWeight: 600 }}>
                  Reservations Desk: Online &amp; Active
                </span>
              </div>

              {/* Info Cards */}
              {[
                {
                  icon: <MapPin style={{ width: 22, height: 22 }} />,
                  color: '#e07a5f',
                  title: 'Our Location',
                  line1: 'Jawai bandh road, near Galthani Panchayat',
                  line2: 'Jawai, Rajasthan – 306126',
                  line3: 'GPS: 25.11747° N, 73.13475° E',
                  href: undefined,
                },
                {
                  icon: <Phone style={{ width: 22, height: 22 }} />,
                  color: '#7b9e54',
                  title: 'Call Booking Desk',
                  line1: '080585 71919',
                  line2: 'Direct Mobile Call',
                  line3: '8 AM – 10 PM daily',
                  href: 'tel:08058571919',
                },
                {
                  icon: <MessageSquare style={{ width: 22, height: 22 }} />,
                  color: '#25d366',
                  title: 'WhatsApp Reservation',
                  line1: 'Chat on WhatsApp',
                  line2: 'Instant Response',
                  line3: 'Digital Safari Desk',
                  href: 'https://wa.me/918058571919',
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  style={{ ...darkCard, padding: '1.25rem 1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', cursor: 'default' }}
                  whileHover={{ y: -5, boxShadow: `0 16px 32px ${card.color}22`, borderColor: `${card.color}55` } as any}
                  transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                >
                  <div style={{
                    padding: '10px', borderRadius: '12px',
                    background: `${card.color}18`, border: `1px solid ${card.color}30`,
                    color: card.color, flexShrink: 0,
                  }}>
                    {card.icon}
                  </div>
                  <div>
                    <h4 style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', marginBottom: '4px' }}>
                      {card.title}
                    </h4>
                    {card.href ? (
                      <a href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem', fontWeight: 600, display: 'block' }}>
                        {card.line1}
                      </a>
                    ) : (
                      <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem', fontWeight: 600, display: 'block' }}>{card.line1}</span>
                    )}
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', display: 'block', marginTop: '2px' }}>{card.line2}</span>
                    <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', fontFamily: 'monospace', display: 'block', marginTop: '2px' }}>{card.line3}</span>
                  </div>
                </motion.div>
              ))}

              {/* CTA Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}>
                <a href="tel:08058571919" className="btn btn-primary" style={{ color: '#ffffff', fontSize: '0.85rem', padding: '0.75rem 1.5rem' }}>
                  <Phone style={{ width: 16, height: 16 }} />
                  Call 080585 71919
                </a>
                <a href="https://wa.me/918058571919" target="_blank" rel="noopener noreferrer"
                  className="btn btn-whatsapp" style={{ fontSize: '0.85rem', padding: '0.75rem 1.5rem' }}>
                  <MessageSquare style={{ width: 16, height: 16, color: '#ffffff' }} />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>

            {/* ── RIGHT: Contact Form ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ type: 'spring', stiffness: 100, damping: 18 }}
              style={{
                ...darkCard,
                padding: '2.5rem',
                border: `1px solid ${activeGlow}40`,
                transition: 'border-color 0.6s ease, box-shadow 0.6s ease',
                boxShadow: `0 20px 50px ${activeGlow}18`,
              }}
            >
              <h3 style={{ color: '#ffffff', fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1.75rem' }}>
                Send A Message
              </h3>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                {/* Inquiry Type Chips */}
                <div>
                  <label style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.75rem' }}>
                    Inquiry Category
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.6rem' }}>
                    {[
                      { id: 'stay',    label: 'Luxury Stays',     icon: <Hotel   style={{ width: 16, height: 16 }} />, subject: 'Inquiry for Luxury cottage stays' },
                      { id: 'safari',  label: 'Leopard Safaris',  icon: <Compass style={{ width: 16, height: 16 }} />, subject: 'Inquiry for Jungle safari packages' },
                      { id: 'wedding', label: 'Weddings & Events',icon: <Users   style={{ width: 16, height: 16 }} />, subject: 'Inquiry for destination weddings/events' },
                      { id: 'general', label: 'General Query',    icon: <MessageSquare style={{ width: 16, height: 16 }} />, subject: 'General Enquiry / Other query' },
                    ].map(chip => {
                      const isActive = selectedInquiry === chip.id;
                      return (
                        <button
                          key={chip.id} type="button"
                          onClick={() => { setSelectedInquiry(chip.id); setFormData(p => ({ ...p, subject: chip.subject })); }}
                          style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center',
                            justifyContent: 'center', gap: '6px',
                            padding: '0.75rem 0.5rem', borderRadius: '12px', cursor: 'pointer',
                            transition: 'all 0.25s ease',
                            background: isActive ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.04)',
                            border: `1px solid ${isActive ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.1)'}`,
                            color: isActive ? '#ffffff' : 'rgba(255,255,255,0.5)',
                            transform: isActive ? 'scale(1.03)' : 'scale(1)',
                            boxShadow: isActive ? `0 4px 16px ${activeGlow}33` : 'none',
                          }}
                        >
                          <span style={{ padding: '5px', borderRadius: '8px', background: isActive ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.04)', color: isActive ? '#ffffff' : 'rgba(255,255,255,0.5)' }}>
                            {chip.icon}
                          </span>
                          <span style={{ fontSize: '0.72rem', fontWeight: 600, textAlign: 'center', lineHeight: 1.3 }}>{chip.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name + Phone row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label htmlFor="name" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.4rem' }}>Full Name *</label>
                    <input type="text" id="name" name="name" required value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)}
                      placeholder="e.g. Aarav Sharma"
                      style={inputStyle('name')} />
                  </div>
                  <div>
                    <label htmlFor="phone" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.4rem' }}>Phone *</label>
                    <input type="tel" id="phone" name="phone" required value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField(null)}
                      placeholder="e.g. 09876543210"
                      style={inputStyle('phone')} />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.4rem' }}>Subject</label>
                  <input type="text" id="subject" name="subject" value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('subject')} onBlur={() => setFocusedField(null)}
                    placeholder="e.g. Luxury Suite Booking"
                    style={inputStyle('subject')} />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.4rem' }}>Message *</label>
                  <textarea id="message" name="message" required value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)}
                    placeholder="Tell us about your travel dates, rooms needed, safari slots..."
                    rows={4}
                    style={{ ...inputStyle('message'), resize: 'vertical', minHeight: '120px' }} />
                </div>

                {/* Success Banner */}
                <AnimatePresence>
                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '10px',
                        background: 'rgba(44,89,50,0.2)', border: '1px solid rgba(123,158,84,0.35)',
                        borderRadius: '10px', padding: '1rem', fontSize: '0.875rem', color: '#7b9e54',
                      }}
                    >
                      <CheckCircle style={{ width: 18, height: 18, flexShrink: 0 }} />
                      <span>Thank you! Your message has been sent. Our booking manager will contact you shortly.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <motion.button
                  type="submit" disabled={isSubmitting}
                  className="btn btn-primary"
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                  style={{ color: '#ffffff', width: '100%', marginTop: '0.5rem', opacity: isSubmitting ? 0.6 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                >
                  <motion.span
                    animate={isSubmitting ? { x: [0, 6, -20, 40], y: [0, -6, -12, 0], opacity: [1, 1, 0, 1] } : {}}
                    transition={{ duration: 1.1, repeat: isSubmitting ? Infinity : 0, ease: 'easeInOut' }}
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <Send style={{ width: 16, height: 16 }} />
                  </motion.span>
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </motion.button>
              </form>
            </motion.div>

          </div>
        </div>

        <SectionDivider type="rocks" color="#faf5f0" className="absolute bottom-0 left-0 w-full" flipped />
      </section>

      {/* ── Google Map ── */}
      <section style={{ background: '#120e0a', position: 'relative', overflow: 'hidden', paddingBottom: '4rem' }}>
        <div style={{ width: '100%', height: '12px', background: '#faf5f0' }} />
        <div className="container" style={{ paddingTop: '2rem' }}>
          <div style={{
            position: 'relative', borderRadius: '24px', overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
            border: '2px solid rgba(255,255,255,0.06)',
            maxWidth: '960px', margin: '0 auto', height: '450px',
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.538685530543!2d73.13475407537919!3d25.117472677762333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394295000d6ff47d%3A0x49a23393aa77867!2sJawai%20Rock%20Resort!5e0!3m2!1sen!2sin!4v1779250348232!5m2!1sen!2sin"
              width="100%" height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map – Jawai Rock Resort"
            />


          </div>
        </div>
      </section>

    </div>
  );
};
