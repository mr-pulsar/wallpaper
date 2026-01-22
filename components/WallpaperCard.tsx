'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Download, Heart, Eye } from 'lucide-react'
import { useState, useEffect } from 'react'

interface Wallpaper {
  id: string
  title: string
  category: string
  image: string
  downloads: number
  likes: number
  resolution: string
}

interface WallpaperCardProps {
  wallpaper: Wallpaper
}

export default function WallpaperCard({ wallpaper }: WallpaperCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-xl sm:rounded-2xl glass cursor-pointer shadow-lg hover:shadow-glow-lg transition-all duration-300"
    >
      <Link href={`/wallpaper/${wallpaper.id}`}>
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={wallpaper.image}
            alt={wallpaper.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          
          {/* Enhanced overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Hover overlay with info - Always visible on mobile, hover on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered || isMobile ? 1 : 0, y: isHovered || isMobile ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4"
          >
            <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 line-clamp-1">{wallpaper.title}</h3>
            <div className="flex items-center justify-between text-xs sm:text-sm text-gray-300">
              <span className="px-2 py-0.5 sm:py-1 bg-gradient-to-r from-blue-500/40 to-purple-500/40 backdrop-blur-sm rounded-full text-xs font-semibold border border-white/20">{wallpaper.category}</span>
              <div className="flex items-center space-x-2 sm:space-x-4">
                <span className="flex items-center space-x-1">
                  <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">{wallpaper.downloads > 1000 ? `${(wallpaper.downloads / 1000).toFixed(1)}k` : wallpaper.downloads}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">{wallpaper.likes > 1000 ? `${(wallpaper.likes / 1000).toFixed(1)}k` : wallpaper.likes}</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick action buttons - Always visible on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered || isMobile ? 1 : 0, scale: isHovered || isMobile ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 flex items-center space-x-1 sm:space-x-2"
          >
            <button
              onClick={(e) => {
                e.preventDefault()
                setIsLiked(!isLiked)
              }}
              className={`p-1.5 sm:p-2 rounded-full backdrop-blur-md transition-colors active:scale-95 ${
                isLiked
                  ? 'bg-red-500 text-white'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <Heart className={`w-3 h-3 sm:w-4 sm:h-4 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault()
                // Handle download
              }}
              className="p-1.5 sm:p-2 rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white/30 transition-colors active:scale-95"
            >
              <Download className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </motion.div>
        </div>
      </Link>

      {/* Enhanced Resolution badge */}
      <div className="absolute top-2 left-2 sm:top-4 sm:left-4 px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-purple-600/90 to-pink-600/90 backdrop-blur-md rounded-full text-white text-[10px] sm:text-xs font-bold shadow-glow-pink border border-white/30">
        {wallpaper.resolution}
      </div>
    </motion.div>
  )
}

