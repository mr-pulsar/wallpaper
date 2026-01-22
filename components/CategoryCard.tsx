'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface Category {
  id: string
  name: string
  image: string
  count: number
  description: string
}

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/categories?cat=${category.id}`}>
      <motion.div
        whileHover={{ y: -10, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
        className="group relative overflow-hidden rounded-xl sm:rounded-2xl glass cursor-pointer h-48 sm:h-56 md:h-64 shadow-lg hover:shadow-glow-lg transition-all duration-300"
      >
        <div className="relative h-full">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            loading="lazy"
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-purple-900/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 md:p-6">
            <h3 className="text-white font-extrabold text-base sm:text-lg md:text-xl mb-1 sm:mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 drop-shadow-lg">
              {category.name}
            </h3>
            <p className="text-gray-200 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">
              {category.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-xs sm:text-sm font-semibold bg-white/10 px-2 py-1 rounded-full backdrop-blur-sm">{category.count} wallpapers</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="p-1.5 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-sm"
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-blue-300 transition-colors" />
              </motion.div>
            </div>
          </div>

          {/* Enhanced glow effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-2xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-cyan-500/20" />
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

