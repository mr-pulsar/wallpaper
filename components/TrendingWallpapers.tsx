'use client'

import { motion } from 'framer-motion'
import WallpaperCard from './WallpaperCard'
import { wallpapers } from '@/lib/data'
import { TrendingUp } from 'lucide-react'

export default function TrendingWallpapers() {
  const trending = wallpapers.slice(6, 12)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-50/30 dark:via-blue-950/20 to-purple-50/30 dark:to-purple-950/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center space-x-3 mb-8 sm:mb-12"
        >
          <div className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-glow">
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold gradient-text drop-shadow-lg">
            Trending Now
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {trending.map((wallpaper, index) => (
            <motion.div
              key={wallpaper.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <WallpaperCard wallpaper={wallpaper} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

