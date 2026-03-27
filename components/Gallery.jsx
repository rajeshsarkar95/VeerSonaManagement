import Image from 'next/image'

const galleryItems = [
  {
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    label: 'Wedding Ceremony',
    category: 'Wedding',
    span: 'col-span-2 row-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80',
    label: 'Corporate Gala',
    category: 'Corporate',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80',
    label: 'Birthday Setup',
    category: 'Birthday',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=80',
    label: 'Theme Party',
    category: 'Party',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80',
    label: 'Photoshoot',
    category: 'Photography',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
    label: 'Pre-Wedding Shoot',
    category: 'Photography',
    span: 'col-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
    label: 'Product Launch',
    category: 'Corporate',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80',
    label: 'Reception Décor',
    category: 'Wedding',
    span: '',
  },
]

const categories = ['All', 'Wedding', 'Corporate', 'Birthday', 'Party', 'Photography']

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle mb-3">Our Work Speaks</p>
          <h2 className="section-title mb-6">
            Portfolio &amp; <span className="gold-text">Gallery</span>
          </h2>
          <div className="decorative-line max-w-xs mx-auto mb-6">
            <span className="text-gold-400 text-lg">✦</span>
          </div>
          <p className="font-jost text-gray-500 max-w-xl mx-auto">
            A glimpse into the magical moments we've crafted for our clients. Every event
            tells a story — here are a few of ours.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`font-jost text-xs tracking-widest uppercase px-5 py-2.5 border transition-all duration-300 ${
                cat === 'All'
                  ? 'bg-charcoal text-white border-charcoal'
                  : 'bg-transparent text-gray-600 border-gray-300 hover:border-gold-500 hover:text-gold-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[240px]">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`relative group overflow-hidden ${item.span} cursor-pointer`}
            >
              <Image
                src={item.url}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-all duration-500" />

              {/* Content on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-4">
                <span className="font-jost text-gold-400 text-xs tracking-widest uppercase mb-2">
                  {item.category}
                </span>
                <span className="font-playfair text-white text-lg font-bold text-center">
                  {item.label}
                </span>
                <div className="w-8 h-0.5 bg-gold-400 mt-3" />
              </div>

              {/* Category badge */}
              <div className="absolute top-3 left-3 bg-charcoal/70 backdrop-blur-sm px-3 py-1">
                <span className="font-jost text-gold-400 text-xs tracking-widest uppercase">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View more */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border border-charcoal text-charcoal font-jost text-xs font-600 tracking-widest uppercase px-8 py-4 hover:bg-charcoal hover:text-white transition-all duration-300"
          >
            View Full Portfolio
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
