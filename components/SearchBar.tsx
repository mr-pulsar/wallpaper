'use client'

import { useState } from 'react'
import { Search, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface SearchBarProps {
  onSearch: (query: string) => void
  placeholder?: string
}

export default function SearchBar({ onSearch, placeholder = 'Search wallpapers...' }: SearchBarProps) {
  const [query, setQuery] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    onSearch(value)
  }

  const clearSearch = () => {
    setQuery('')
    onSearch('')
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto px-4 sm:px-0">
      <div className="relative">
        <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base glass border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500"
        />
        <AnimatePresence>
          {query && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={clearSearch}
              className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-white/20 transition-colors active:scale-95"
              aria-label="Clear search"
            >
              <X className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

