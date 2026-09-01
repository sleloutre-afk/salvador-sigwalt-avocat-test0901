import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Maître Eva Salvador-Sigwalt — Avocate à Bordeaux | Droit immobilier · Construction · Baux commerciaux',
  description: 'Cabinet Salvador-Sigwalt — Avocate au Barreau de Bordeaux spécialisée en droit immobilier, droit de la construction, baux commerciaux et urbanisme. 22 rue Fondaudège, 33000 Bordeaux.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
