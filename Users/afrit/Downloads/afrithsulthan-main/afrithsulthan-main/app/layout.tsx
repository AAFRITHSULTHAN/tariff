import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Afrith Sulthan - Full Stack Developer Portfolio',
  description: 'Explore the portfolio of Afrith Sulthan, a Full Stack Developer specializing in building intelligent, user-focused digital solutions. View projects, skills, and contact information.',
  generator: 'v0.app',
  openGraph: {
    title: 'Afrith Sulthan - Full Stack Developer Portfolio',
    description: 'Explore the portfolio of Afrith Sulthan, a Full Stack Developer specializing in building intelligent, user-focused digital solutions.',
    url: 'https://afrithsulthan.com', // Replace with actual URL if known, or keep generic
    siteName: 'Afrith Sulthan Portfolio',
    images: [
      {
        url: '/images/img-removebg-preview-20-281-29.png',
        width: 800,
        height: 600,
        alt: 'Afrith Sulthan Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/images/img-removebg-preview-20-281-29.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/img-removebg-preview-20-281-29.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/images/img-removebg-preview-20-281-29.png',
        type: 'image/png',
      },
    ],
    apple: '/images/img-removebg-preview-20-281-29.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
