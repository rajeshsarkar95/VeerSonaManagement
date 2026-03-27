'use client'
import { useState } from 'react'

const eventTypes = [
  'Wedding', 'Corporate Event', 'Birthday Party', 'Private Party',
  'Photoshoot / Videography', 'Other'
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', eventType: '', date: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="font-cormorant text-gold-400 text-xl italic mb-3">Let's Create Together</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              Get a <span className="gold-text">Free Quote</span>
            </h2>
            <div className="h-0.5 w-16 bg-gold-gradient mb-8" />
            <p className="font-jost text-white/60 leading-relaxed mb-10">
              Tell us about your dream event and we'll craft the perfect plan for you.
              Our team typically responds within 2 hours.
            </p>

            {/* Contact details */}
            <div className="space-y-6 mb-10">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: 'Call / WhatsApp',
                  value: '+91 98765 43210',
                  href: 'tel:+919876543210',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: 'Email Us',
                  value: 'hello@momentsandmilestones.in',
                  href: 'mailto:hello@momentsandmilestones.in',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: 'Head Office',
                  value: 'Connaught Place, New Delhi — 110001',
                  href: '#',
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 border border-gold-500/30 group-hover:border-gold-500 flex items-center justify-center text-gold-400 flex-shrink-0 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-jost text-xs text-white/40 tracking-widest uppercase mb-1">{item.label}</div>
                    <div className="font-jost text-white group-hover:text-gold-400 transition-colors duration-300">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div>
              <p className="font-jost text-xs text-white/40 tracking-widest uppercase mb-4">Follow Us</p>
              <div className="flex gap-3">
                {['Instagram', 'Facebook', 'YouTube', 'Pinterest'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 border border-white/10 hover:border-gold-500 flex items-center justify-center text-white/40 hover:text-gold-400 transition-all duration-300 font-jost text-xs"
                    title={social}
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white/3 backdrop-blur-sm border border-white/10 p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 bg-gold-500/20 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-3">Thank You!</h3>
                <p className="font-jost text-white/60 leading-relaxed">
                  Your inquiry has been received. Our team will reach out within 2 hours with a personalized quote.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 font-jost text-xs tracking-widest uppercase text-gold-400 border border-gold-400/30 px-6 py-3 hover:border-gold-400 transition-colors duration-300"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-playfair text-xl font-bold text-white mb-6">Inquiry Form</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-jost text-xs text-white/50 tracking-widest uppercase block mb-2">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-white/5 border border-white/10 focus:border-gold-500 text-white placeholder-white/30 px-4 py-3 font-jost text-sm outline-none transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="font-jost text-xs text-white/50 tracking-widest uppercase block mb-2">
                      Phone *
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-white/5 border border-white/10 focus:border-gold-500 text-white placeholder-white/30 px-4 py-3 font-jost text-sm outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-jost text-xs text-white/50 tracking-widest uppercase block mb-2">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 focus:border-gold-500 text-white placeholder-white/30 px-4 py-3 font-jost text-sm outline-none transition-colors duration-300"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-jost text-xs text-white/50 tracking-widest uppercase block mb-2">
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      required
                      value={form.eventType}
                      onChange={handleChange}
                      className="w-full bg-charcoal border border-white/10 focus:border-gold-500 text-white px-4 py-3 font-jost text-sm outline-none transition-colors duration-300"
                    >
                      <option value="">Select type</option>
                      {eventTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-jost text-xs text-white/50 tracking-widest uppercase block mb-2">
                      Event Date
                    </label>
                    <input
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 focus:border-gold-500 text-white px-4 py-3 font-jost text-sm outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-jost text-xs text-white/50 tracking-widest uppercase block mb-2">
                    Tell Us About Your Event
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Venue, guest count, theme ideas, special requirements..."
                    className="w-full bg-white/5 border border-white/10 focus:border-gold-500 text-white placeholder-white/30 px-4 py-3 font-jost text-sm outline-none transition-colors duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold-gradient text-charcoal font-jost font-600 text-sm tracking-widest uppercase py-4 hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-3"
                  style={{ backgroundSize: '200% auto' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send My Inquiry
                </button>

                <p className="font-jost text-xs text-white/30 text-center">
                  We'll respond within 2 hours. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
