'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80',
    label: 'Weddings',
  },
  {
    url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80',
    label: 'Corporate Events',
  },
  {
    url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&q=80',
    label: 'Birthday Celebrations',
  },
]

export default function Hero() {
  const currentSlide = useRef(0)
  const slidesRef = useRef([])

  useEffect(() => {
    const interval = setInterval(() => {
      if (slidesRef.current.length === 0) return
      slidesRef.current[currentSlide.current].style.opacity = '0'
      currentSlide.current = (currentSlide.current + 1) % slides.length
      slidesRef.current[currentSlide.current].style.opacity = '1'
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          ref={(el) => (slidesRef.current[i] = el)}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === 0 ? 1 : 0 }}
        >
          <Image
            src={slide.url}
            alt={slide.label}
            fill
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-hero-gradient"/>
      <div className="absolute inset-6 md:inset-10 border border-gold-500/20 pointer-events-none" />
      <div className="absolute inset-8 md:inset-12 border border-gold-500/10 pointer-events-none" />
      {['top-6 left-6', 'top-6 right-6', 'bottom-6 left-6', 'bottom-6 right-6'].map((pos, i) => (
        <div key={i} className={`absolute ${pos} w-8 h-8 md:w-12 md:h-12 pointer-events-none`}>
          <div className={`absolute border-gold-400 border-opacity-60 ${
            i === 0 ? 'top-0 left-0 border-t-2 border-l-2 w-6 h-6' :
            i === 1 ? 'top-0 right-0 border-t-2 border-r-2 w-6 h-6' :
            i === 2 ? 'bottom-0 left-0 border-b-2 border-l-2 w-6 h-6' :
            'bottom-0 right-0 border-b-2 border-r-2 w-6 h-6'
          }`} />
        </div>
      ))}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <div className="h-px w-12 bg-gold-400" />
          <span className="font-jost text-gold-400 text-xs tracking-[0.4em] uppercase">
            India's Premium Event Management
          </span>
          <div className="h-px w-12 bg-gold-400" />
        </div>
        <h1
          className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 animate-fade-up"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        >
          Turning Every{' '}
          <span className="gold-text text-shadow-gold block md:inline">Occasion</span>
          <br className="hidden md:block" /> into a Memorable{' '}
          <span className="italic font-normal">Experience</span>
        </h1>
        <p
          className="font-cormorant text-xl md:text-2xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          From dream weddings to grand corporate galas — we craft moments that last a lifetime,
          with elegance and precision across all of India.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
          style={{ animationDelay: '0.7s', opacity: 0 }}
        >
          <a href="#contact" className="btn-gold group">
            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book Your Event
          </a>
          <a href="#services" className="btn-outline group text-white border-white/40 hover:border-gold-400">
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            Explore Services
          </a>
        </div>
        <div
          className="grid grid-cols-3 gap-4 mt-16 max-w-md mx-auto animate-fade-up"
          style={{animationDelay:'0.9s', opacity:0}}
        >
          {[
            { value: '500+',label:'Events Done'},
            { value: '12+',label:'Years Experience'},
            { value: '98%',label: 'Happy Clients'},
          ].map((stat) => (
            <div key={stat.label} className="text-center border-r last:border-0 border-white/20">
              <div className="font-playfair text-3xl font-bold gold-text">{stat.value}</div>
              <div className="font-jost text-xs text-white/60 tracking-widest uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="font-jost text-xs text-white/40 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold-400 to-transparent" />
      </div>
    </section>
  )
}
