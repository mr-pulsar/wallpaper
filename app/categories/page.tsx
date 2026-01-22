'use client'

import { useState, useEffect, useMemo, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import CategoryCard from '@/components/CategoryCard'
import WallpaperCard from '@/components/WallpaperCard'
import SearchBar from '@/components/SearchBar'
import FilterBar from '@/components/FilterBar'
import { categories, wallpapers } from '@/lib/data'

function CategoriesContent() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedResolution, setSelectedResolution] = useState<string | null>(null)
  const [showWallpapers, setShowWallpapers] = useState(false)

  useEffect(() => {
    const catParam = searchParams.get('cat')
    if (catParam) {
      setSelectedCategory(catParam)
      setShowWallpapers(true)
    }
  }, [searchParams])

  const filteredWallpapers = useMemo(() => {
    return wallpapers.filter((wallpaper) => {
      const matchesSearch = wallpaper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        wallpaper.category.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = !selectedCategory || wallpaper.category === categories.find(c => c.id === selectedCategory)?.name
      const matchesResolution = !selectedResolution || wallpaper.resolution === selectedResolution
      return matchesSearch && matchesCategory && matchesResolution
    })
  }, [searchQuery, selectedCategory, selectedResolution])

  const filteredCategories = useMemo(() => {
    if (!searchQuery) return categories
    return categories.filter(category =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {showWallpapers ? 'Wallpapers' : 'Browse Categories'}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            {showWallpapers
              ? 'Explore our stunning collection of wallpapers'
              : 'Explore our stunning collection of wallpapers organized by category'}
          </p>
          <SearchBar onSearch={setSearchQuery} />
        </motion.div>

        {showWallpapers ? (
          <>
            <div className="mb-6">
              <button
                onClick={() => {
                  setShowWallpapers(false)
                  setSelectedCategory(null)
                }}
                className="px-4 py-2 glass rounded-lg hover:bg-white/20 transition-colors"
              >
                ← Back to Categories
              </button>
            </div>
            <FilterBar
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedResolution={selectedResolution}
              onResolutionChange={setSelectedResolution}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWallpapers.length > 0 ? (
                filteredWallpapers.map((wallpaper, index) => (
                  <motion.div
                    key={wallpaper.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <WallpaperCard wallpaper={wallpaper} />
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    No wallpapers found matching your criteria
                  </p>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => {
                  setSelectedCategory(category.id)
                  setShowWallpapers(true)
                }}
              >
                <CategoryCard category={category} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function CategoriesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-pulse">Loading...</div>
          </div>
        </div>
      </div>
    }>
      <CategoriesContent />
    </Suspense>
  )
}

