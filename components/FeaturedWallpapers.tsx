'use client'

import { motion } from 'framer-motion'
import WallpaperCard from './WallpaperCard'
import { wallpapers } from '@/lib/data'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function FeaturedWallpapers() {
  const featured = wallpapers.slice(0, 6)

  return (
    <section id="featured" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 gradient-text drop-shadow-lg">
            Featured Wallpapers
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Handpicked premium wallpapers just for you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {featured.map((wallpaper, index) => (
            <motion.div
              key={wallpaper.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <WallpaperCard wallpaper={wallpaper} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/categories"
            className="inline-flex items-center space-x-2 px-6 py-3 glass rounded-full font-bold hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all group border-2 border-transparent hover:border-purple-500/50"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-purple-500" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

