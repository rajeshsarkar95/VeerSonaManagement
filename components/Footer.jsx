const footerLinks = {
  Services: [
    { label: 'Party Organisation', href: '#party' },
    { label: 'Corporate Events', href: '#corporate' },
    { label: 'Wedding Planning', href: '#weddings' },
    { label: 'Birthday Parties', href: '#birthday' },
    { label: 'Photography', href: '#photo' },
  ],
  Company: [
    { label: 'About Us', href: '#why-us' },
    { label: 'Our Team', href: '#' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#' },
    { label: 'Careers', href: '#' },
  ],
  'Quick Contact': [
    { label: '+91 7467869777', href: '+91 7534853541' },
    { label: 'info@veersona.com', href: 'info@veersona.com' },
    { label: 'India', href: '#' },
    { label: 'PAN India Service', href:'#'},
  ],
}

export default function Footer(){
  return (
    <footer className="bg-[#111] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <a href="#" className="flex flex-col leading-tight mb-5">
              <span className="font-playfair text-2xl font-bold text-white">
                Moments &amp; <span className="gold-text">Milestones</span>
              </span>
              <span className="font-cormorant text-xs text-gold-400 tracking-[0.3em] uppercase">
                Event Management
              </span>
            </a>
            <p className="font-jost text-sm text-white/40 leading-relaxed mb-6">
              India's premium event management company crafting unforgettable memories since 2012.
              PAN India service across 25+ cities.
            </p>
            <div className="flex gap-3">
              {['In', 'Fb', 'Yt', 'Pi'].map((s)=>(
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 border border-white/10 hover:border-gold-500/50 flex items-center justify-center text-white/30 hover:text-gold-400 transition-all duration-300 font-jost text-xs font-600"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-jost text-xs font-600 text-white tracking-widest uppercase mb-5">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-jost text-sm text-white/40 hover:text-gold-400 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-jost text-xs text-white/25">
          © {new Date().getFullYear()} Moments & Milestones Event Management. All rights reserved.
        </p>
        <div className="flex gap-6">
          {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
            <a
              key={item}
              href="#"
              className="font-jost text-xs text-white/25 hover:text-white/60 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
