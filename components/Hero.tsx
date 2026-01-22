'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-cyan-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 sm:mb-6 px-4"
          >
            <span className="gradient-text drop-shadow-2xl">
              Premium 3D
            </span>
            <br className="hidden sm:block" />
            <span className="gradient-text drop-shadow-2xl">
              Wallpapers
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4"
          >
            Download stunning Ultra HD and 4K wallpapers. Explore our curated collection of 3D and realistic designs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
          >
            <Link
              href="/categories"
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 btn-gradient text-white rounded-full font-bold text-base sm:text-lg flex items-center justify-center space-x-2 shadow-glow hover:shadow-glow-lg transform hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
              <span>Browse Wallpapers</span>
            </Link>
            <Link
              href="#featured"
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 glass text-gray-700 dark:text-gray-300 rounded-full font-bold text-base sm:text-lg hover:bg-white/30 dark:hover:bg-white/10 transition-all flex items-center justify-center space-x-2 active:scale-95 border-2 border-transparent hover:border-purple-500/50"
            >
              <span>Explore</span>
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

