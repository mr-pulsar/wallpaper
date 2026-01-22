import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '3D Wallpapers - Premium Ultra HD Wallpapers',
  description: 'Download stunning 3D and realistic wallpapers in Ultra HD and 4K quality. Browse by categories: God, Anime, Bike, Cars, Nature, Abstract, Minimal, Gaming.',
  keywords: 'wallpapers, 3D wallpapers, 4K wallpapers, HD wallpapers, anime wallpapers, bike wallpapers, car wallpapers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

