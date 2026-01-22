'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import WallpaperPreview from '@/components/WallpaperPreview'
import { wallpapers } from '@/lib/data'

export default function WallpaperPage() {
  const params = useParams()
  const [wallpaper, setWallpaper] = useState<any>(null)

  useEffect(() => {
    const found = wallpapers.find(w => w.id === params.id)
    setWallpaper(found)
  }, [params.id])

  if (!wallpaper) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Wallpaper not found</h2>
          <p className="text-gray-600 dark:text-gray-400">The wallpaper you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    >
      <WallpaperPreview wallpaper={wallpaper} />
    </motion.div>
  )
}

