'use client'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Priya & Rohan Sharma',
    role: 'Wedding Couple, Delhi',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80',
    rating: 5,
    text: 'Moments & Milestones made our dream wedding a breathtaking reality. Every detail — from the mandap flowers to the choreographed entry — was executed flawlessly. Our guests are still talking about it!',
    event: 'Destination Wedding, Udaipur',
  },
  {
    name: 'Vikram Malhotra',
    role: 'VP Marketing, TechCorp India',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80',
    rating: 5,
    text: 'We hired them for our annual product launch event in Mumbai. The professionalism was outstanding — zero hiccups, exceptional stage setup, and the AV team was world-class. Highly recommend for corporate events.',
    event: 'Product Launch, Mumbai',
  },
  {
    name: 'Sunita Gupta',
    role: 'Mother, Jaipur',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80',
    rating: 5,
    text: "My daughter's 7th birthday was like a fairy tale! The princess theme decoration was magical, kids loved every moment, and the cake setup was exactly as we imagined. Worth every rupee!",
    event: "Kids Birthday Party, Jaipur",
  },
  {
    name: 'Arjun & Neha Kapoor',
    role: 'Couple, Bangalore',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&q=80',
    rating: 5,
    text: 'The pre-wedding photoshoot they organized was cinematic! The team scouted perfect locations, handled lighting beautifully, and delivered edited photos within the promised timeline. Absolutely stunning work.',
    event: 'Pre-Wedding Shoot, Coorg',
  },
  {
    name: 'Rajesh Agarwal',
    role: 'CEO, Agarwal Industries',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80',
    rating: 5,
    text: 'Our company anniversary celebration was handled with exceptional grace. 400 guests, live performances, awards ceremony — everything ran like clockwork. The team is professional, creative, and stress-free to work with.',
    event: 'Annual Function, Noida',
  },
]

const StarRating = ({ count }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className={`w-4 h-4 ${i < count ? 'text-gold-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-playfair text-[12rem] font-bold text-gray-100 select-none pointer-events-none whitespace-nowrap">
        Reviews
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="section-subtitle mb-3">Voices of Joy</p>
          <h2 className="section-title mb-6">
            What Our <span className="gold-text">Clients</span> Say
          </h2>
          <div className="decorative-line max-w-xs mx-auto">
            <span className="text-gold-400 text-lg">✦</span>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative bg-white p-10 md:p-14 shadow-xl">
            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-gold-400" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-gold-400" />
            <div className="font-playfair text-8xl text-gold-200 leading-none mb-4 -mt-4">"</div>
            <p className="font-cormorant text-xl md:text-2xl text-gray-700 leading-relaxed italic mb-8">
              {testimonials[active].text}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold-300">
                  <img
                    src={testimonials[active].avatar}
                    alt={testimonials[active].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-playfair font-bold text-charcoal text-lg">
                    {testimonials[active].name}
                  </div>
                  <div className="font-jost text-sm text-gray-500">{testimonials[active].role}</div>
                </div>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-1">
                <StarRating count={testimonials[active].rating} />
                <span className="font-jost text-xs text-gold-600 tracking-widest uppercase">
                  {testimonials[active].event}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-3 p-3 pr-5 border transition-all duration-300 ${active === i
                  ? 'border-gold-400 bg-white shadow-md'
                  : 'border-gray-200 hover:border-gold-300'
                }`}
            >
              <div className={`w-10 h-10 rounded-full overflow-hidden border-2 ${active === i ? 'border-gold-400' : 'border-gray-200'}`}>
                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <div className="font-jost text-xs font-600 text-charcoal">{t.name.split(' ')[0]}</div>
                <div className="font-jost text-xs text-gray-400">{t.event.split(',')[0]}</div>
              </div>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
          {[
            { value: '500+', label: 'Events Completed' },
            { value: '12+', label: 'Years of Excellence' },
            { value: '25+', label: 'Cities Served' },
            { value: '98%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white p-6 border border-gray-100 shadow-sm">
              <div className="font-playfair text-4xl font-bold gold-text mb-1">{stat.value}</div>
              <div className="font-jost text-xs text-gray-500 tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
