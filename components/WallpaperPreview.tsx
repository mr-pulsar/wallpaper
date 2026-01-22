'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Download, Heart, Share2, ArrowLeft, Check } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface Wallpaper {
  id: string
  title: string
  category: string
  image: string
  downloads: number
  likes: number
  resolution: string
  description?: string
}

interface WallpaperPreviewProps {
  wallpaper: Wallpaper
}

export default function WallpaperPreview({ wallpaper }: WallpaperPreviewProps) {
  const [selectedResolution, setSelectedResolution] = useState('4K')
  const [isLiked, setIsLiked] = useState(false)
  const [downloadSuccess, setDownloadSuccess] = useState(false)

  const resolutions = ['Full HD', '4K', '8K']

  const handleDownload = () => {
    // Simulate download
    setDownloadSuccess(true)
    setTimeout(() => setDownloadSuccess(false), 2000)
    
    // In a real app, this would trigger the actual download
    const link = document.createElement('a')
    link.href = wallpaper.image
    link.download = `${wallpaper.title}-${selectedResolution}.jpg`
    link.click()
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Back button */}
      <Link
        href="/categories"
        className="inline-flex items-center space-x-2 mb-8 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Categories</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {/* Main image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden glass">
            <Image
              src={wallpaper.image}
              alt={wallpaper.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
              priority
              quality={90}
              loading="eager"
            />
          </div>
        </motion.div>

        {/* Info panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 h-fit"
        >
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">{wallpaper.title}</h1>
          <div className="flex items-center space-x-2 mb-6">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold">
              {wallpaper.category}
            </span>
          </div>

          {wallpaper.description && (
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {wallpaper.description}
            </p>
          )}

          {/* Stats */}
          <div className="flex items-center space-x-6 mb-6 pb-6 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <Download className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="text-gray-700 dark:text-gray-300">{wallpaper.downloads} downloads</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="text-gray-700 dark:text-gray-300">{wallpaper.likes} likes</span>
            </div>
          </div>

          {/* Resolution selection */}
          <div className="mb-4 sm:mb-6">
            <label className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-3">Select Resolution</label>
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
              {resolutions.map((res) => (
                <button
                  key={res}
                  onClick={() => setSelectedResolution(res)}
                  className={`px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-bold transition-all active:scale-95 ${
                    selectedResolution === res
                      ? 'btn-gradient text-white shadow-glow'
                      : 'glass hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20'
                  }`}
                >
                  {res}
                </button>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-2 sm:space-y-3">
            <button
              onClick={handleDownload}
              className="w-full btn-gradient text-white py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-bold flex items-center justify-center space-x-2 active:scale-95 shadow-glow hover:shadow-glow-lg"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Download {selectedResolution}</span>
                </>
              )}
            </button>

            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center space-x-1 sm:space-x-2 active:scale-95 ${
                  isLiked
                    ? 'bg-red-500/20 text-red-500 border border-red-500/30'
                    : 'glass hover:bg-white/20'
                }`}
              >
                <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${isLiked ? 'fill-current' : ''}`} />
                <span>{isLiked ? 'Liked' : 'Like'}</span>
              </button>
              <button className="py-2 sm:py-3 rounded-lg glass text-xs sm:text-sm font-semibold hover:bg-white/20 transition-all flex items-center justify-center space-x-1 sm:space-x-2 active:scale-95">
                <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Image info */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex justify-between">
                <span>Resolution:</span>
                <span className="font-semibold">{wallpaper.resolution}</span>
              </div>
              <div className="flex justify-between">
                <span>Format:</span>
                <span className="font-semibold">JPG</span>
              </div>
              <div className="flex justify-between">
                <span>Size:</span>
                <span className="font-semibold">~5-10 MB</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

