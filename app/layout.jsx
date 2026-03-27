import './globals.css'

export const metadata = {
  title: 'Moments & Milestones | Premium Event Management Company India',
  description:
    'India\'s finest event management company specializing in weddings, corporate events, birthday parties, party organization, and professional photography & videography. PAN India service. Get a free quote today.',
  keywords:
    'event management company India, wedding planner India, birthday party organizer, corporate event services, party organizers Delhi, wedding planning India, photoshoot videography India, destination wedding planner',
  openGraph: {
    title: 'Moments & Milestones | Premium Event Management Company India',
    description:
      'Turning every occasion into a memorable experience. Weddings, corporate events, birthday parties & more across India.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
