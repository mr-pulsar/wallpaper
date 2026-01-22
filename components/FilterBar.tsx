'use client'

import { categories } from '@/lib/data'
import { motion } from 'framer-motion'

interface FilterBarProps {
  selectedCategory: string | null
  onCategoryChange: (category: string | null) => void
  selectedResolution: string | null
  onResolutionChange: (resolution: string | null) => void
}

export default function FilterBar({
  selectedCategory,
  onCategoryChange,
  selectedResolution,
  onResolutionChange,
}: FilterBarProps) {
  const resolutions = ['Full HD', '4K', '8K']

  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
      {/* Category Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
        <span className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 whitespace-nowrap">Category:</span>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          <button
            onClick={() => onCategoryChange(null)}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all active:scale-95 ${
              selectedCategory === null
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                : 'glass hover:bg-white/20'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onCategoryChange(category.id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'glass hover:bg-white/20'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Resolution Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
        <span className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 whitespace-nowrap">Resolution:</span>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          <button
            onClick={() => onResolutionChange(null)}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all active:scale-95 ${
              selectedResolution === null
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                : 'glass hover:bg-white/20'
            }`}
          >
            All
          </button>
          {resolutions.map((resolution) => (
            <motion.button
              key={resolution}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onResolutionChange(resolution)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                selectedResolution === resolution
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'glass hover:bg-white/20'
              }`}
            >
              {resolution}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}

