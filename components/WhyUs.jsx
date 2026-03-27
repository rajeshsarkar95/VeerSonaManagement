const reasons = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Expert Team',
    desc: 'Over 12 years of combined expertise. Our seasoned professionals have managed 500+ successful events across all formats and scales.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Creative Designs',
    desc: 'We don\'t do cookie-cutter events. Every concept is custom-designed to reflect your personality, brand, and vision.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Affordable Pricing',
    desc: 'Premium quality doesn\'t have to break the bank. We offer transparent, competitive packages for every budget.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'On-Time Execution',
    desc: 'Punctuality is our promise. Our detailed timelines and rehearsals ensure everything happens exactly when planned.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'PAN India Service',
    desc: 'From Delhi to Chennai, Mumbai to Kolkata — our network spans every corner of India including destination event management.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: '98% Client Satisfaction',
    desc: 'Our dedication to excellence has earned us glowing testimonials and repeat business from hundreds of delighted clients.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #c99208 0, #c99208 1px, transparent 0, transparent 50%)',
          backgroundSize: '24px 24px',
        }} />
      </div>

      {/* Gold circles */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-cormorant text-gold-400 text-xl italic mb-3">The Moments & Milestones Difference</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="gold-text">Us</span>
          </h2>
          <div className="decorative-line max-w-xs mx-auto mb-6">
            <span className="text-gold-400 text-lg">✦</span>
          </div>
          <p className="font-jost text-white/60 max-w-xl mx-auto leading-relaxed">
            We don't just plan events — we craft unforgettable experiences with a level of care and
            craftsmanship that sets us apart.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="group relative p-8 border border-white/5 bg-white/3 backdrop-blur-sm hover:border-gold-500/40 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-500/0 group-hover:border-gold-500/60 transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold-500/0 group-hover:border-gold-500/60 transition-all duration-500" />

              {/* Icon */}
              <div className="w-16 h-16 bg-gold-500/10 group-hover:bg-gold-500/20 rounded-none flex items-center justify-center text-gold-400 mb-6 transition-colors duration-300">
                {r.icon}
              </div>

              <h3 className="font-playfair text-xl font-bold text-white mb-3">{r.title}</h3>
              <p className="font-jost text-sm text-white/55 leading-relaxed">{r.desc}</p>

              {/* Number */}
              <div className="absolute top-6 right-6 font-playfair text-5xl font-bold text-white/5 group-hover:text-gold-500/10 transition-colors duration-300">
                {String(i + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="font-cormorant text-white/60 text-lg italic mb-6">
            Ready to experience the difference?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-gold-gradient text-charcoal font-jost font-600 text-sm tracking-widest uppercase px-8 py-4 hover:scale-105 transition-transform duration-300"
            style={{ backgroundSize: '200% auto' }}
          >
            Plan Your Event Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
