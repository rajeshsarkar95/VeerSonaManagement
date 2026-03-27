import Image from 'next/image'

const services = [
  {
    id: 'party',
    title: 'Party Organisers',
    subtitle: 'Private Parties & Theme Décor',
    description:
      'From intimate gatherings to grand celebrations, we transform every party into a spectacular event that guests will talk about for years.',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80',
    features: [
      'Birthday & private party planning',
      'Stunning theme decorations',
      'Balloon art & floral arrangements',
      'Entertainment & DJ management',
      'Catering coordination',
      'Venue dressing & lighting',
    ],
    accent: 'from-rose-400/20 to-pink-500/10',
    icon: '🎉',
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    subtitle: 'Professional & Impactful',
    description:
      'Elevate your brand with meticulously planned corporate events that leave lasting impressions on clients, partners, and teams.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    features: [
      'Conferences & seminars',
      'Product launches',
      'Annual functions & award nights',
      'Team-building events',
      'Exhibitions & trade shows',
      'Brand activations',
    ],
    accent: 'from-blue-400/20 to-indigo-500/10',
    icon: '🏢',
  },
  {
    id: 'weddings',
    title: 'Wedding Planning',
    subtitle: 'Your Dream Wedding, Our Expertise',
    description:
      'We orchestrate every detail of your big day with grace and precision — from the first ceremony to the last dance.',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
    features: [
      'Full wedding management',
      'Haldi, mehndi & sangeet',
      'Reception & baraat planning',
      'Destination weddings',
      'Mandap & venue decoration',
      'Wedding photography & video',
    ],
    accent: 'from-amber-400/20 to-yellow-500/10',
    icon: '💍',
  },
  {
    id: 'birthday',
    title: 'Birthday Party Organisers',
    subtitle: 'Making Every Birthday Magical',
    description:
      'We create magical birthday experiences for kids and adults alike — from themed kiddie parties to luxurious milestone celebrations.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    features: [
      'Kids themed parties (superheroes, princesses, etc.)',
      'Balloon decoration & arch setups',
      'Customised cake arrangements',
      'Surprise party planning',
      'Birthday photoshoots',
      'Entertainment & game management',
    ],
    accent: 'from-purple-400/20 to-pink-500/10',
    icon: '🎂',
  },

  {
  id: 'election',
  title: 'Election Prachar & Campaigning',
  subtitle: 'Winning Campaigns, Strong Public Reach',
  description:
    'We provide complete election promotion services including digital marketing, ground campaigns, and political branding to help candidates connect with voters effectively.',
  image: 'https://plus.unsplash.com/premium_photo-1705317716028-ceaa9f2d1786?q=80&w=1074&auto=format&fit=crop',
  features: [
    'Political campaign strategy',
    'Social media promotion (Facebook, Instagram)',
    'Banner, poster & hoarding design',
    'Rally & event management',
    'Video ads & speech coverage',
    'WhatsApp & bulk SMS campaigns',
  ],
  accent: 'from-orange-400/20 to-red-500/10',
  icon: '🗳️',
}

]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="section-subtitle mb-3">What We Offer</p>
          <h2 className="section-title mb-6">
            Our <span className="gold-text">Premium</span> Services
          </h2>
          <div className="decorative-line max-w-xs mx-auto mb-6">
            <span className="text-gold-400 text-lg">✦</span>
          </div>
          <p className="font-jost text-gray-600 max-w-xl mx-auto leading-relaxed">
            From intimate gatherings to grand celebrations, we bring creativity, precision, and
            passion to every event we manage across India.
          </p>
        </div>
        <div className="space-y-24">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center`}
            >
              <div className="w-full lg:w-1/2 group">
                <div className="relative overflow-hidden">
                  <div className={`absolute -inset-3 bg-gradient-to-br ${service.accent} blur-xl opacity-60`} />
                  <div className="relative">
                    <div className="absolute inset-0 border-2 border-gold-400/30 z-10 pointer-events-none" />
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={800}
                      height={560}
                      className="w-full h-80 lg:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 bg-charcoal/90 backdrop-blur-sm px-4 py-2 flex items-center gap-2">
                      <span className="text-xl">{service.icon}</span>
                      <span className="font-jost text-white text-xs tracking-widest uppercase">{service.title}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <p className="font-cormorant text-gold-600 text-lg italic mb-2">{service.subtitle}</p>
                <h3 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
                  {service.title}
                </h3>
                <div className="h-0.5 w-16 bg-gold-gradient mb-6" />
                <p className="font-jost text-gray-600 leading-relaxed mb-8">{service.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-jost text-sm text-gray-700">{feat}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 font-jost text-sm font-600 tracking-widest uppercase text-charcoal bg-gold-gradient px-7 py-3.5 hover:scale-105 transition-transform duration-300"
                  style={{ backgroundSize: '200% auto' }}
                >
                  Get a Free Quote
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
