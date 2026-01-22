'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Download, Image, Zap } from 'lucide-react'

export default function AboutPage() {
  const features = [
    {
      icon: <Image className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Ultra HD Quality',
      description: 'All wallpapers are available in Full HD, 4K, and 8K resolutions',
    },
    {
      icon: <Download className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Free Downloads',
      description: 'Download any wallpaper completely free, no registration required',
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Fast Loading',
      description: 'Optimized images for quick loading and smooth browsing experience',
    },
    {
      icon: <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Premium Collection',
      description: 'Curated collection of stunning 3D and realistic wallpapers',
    },
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent px-4">
            About Us
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 px-4">
            Your premium destination for stunning wallpapers
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Our Mission</h2>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4">
            We are dedicated to providing you with the highest quality wallpapers in stunning 3D and realistic designs. 
            Our collection spans multiple categories including spiritual art, anime, vehicles, nature, abstract designs, 
            and gaming themes.
          </p>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            Every wallpaper in our collection is carefully curated to ensure premium quality and visual appeal. 
            We believe that your device deserves the best, and that's exactly what we deliver.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:scale-105 transition-transform active:scale-95"
            >
              <div className="text-blue-500 mb-3 sm:mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

