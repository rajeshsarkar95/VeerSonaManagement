'use client'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Services', href: '#services'},
  { label: 'Weddings', href: '#weddings'},
  { label: 'Corporate', href: '#corporate'},
  { label: 'Gallery', href: '#gallery'},
  { label: 'About', href: '#why-us' },
  { label: 'Contact', href: '#contact'},
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll',onScroll)
  }, [])
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex flex-col leading-tight">
            <span className="font-playfair text-2xl font-bold text-white tracking-tight">
              Moments &amp; <span className="gold-text">VeerSona</span>
            </span>
            <span className="font-cormorant text-xs text-gold-400 tracking-[0.3em] uppercase">
              Event Management
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-charcoal font-jost font-600 text-xs tracking-widest uppercase px-6 py-3 transition-all duration-300 hover:scale-105"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book Now
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden bg-charcoal/98 backdrop-blur-md transition-all duration-500 overflow-hidden ${
          mobileOpen ? 'max-h-96 py-4' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col px-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-jost text-sm tracking-widest uppercase text-white/80 hover:text-gold-400 transition-colors duration-300 py-2 border-b border-white/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="bg-gold-500 text-charcoal font-600 text-xs tracking-widest uppercase px-6 py-3 text-center mt-2"
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  )
}
