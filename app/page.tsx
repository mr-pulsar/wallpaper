'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import FeaturedWallpapers from '@/components/FeaturedWallpapers'
import TrendingWallpapers from '@/components/TrendingWallpapers'
import CategoryGrid from '@/components/CategoryGrid'

export default function Home() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* Enhanced Background gradient */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.4) 0%, transparent 50%), radial-gradient(circle at 50% 20%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <FeaturedWallpapers />
        <TrendingWallpapers />
        <CategoryGrid />
      </motion.div>
    </div>
  )
}

