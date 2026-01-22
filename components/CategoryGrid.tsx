'use client'

import { motion } from 'framer-motion'
import CategoryCard from './CategoryCard'
import { categories } from '@/lib/data'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CategoryGrid() {
  const featuredCategories = categories.slice(0, 8)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Explore Categories
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Discover wallpapers by your favorite themes
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {featuredCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CategoryCard category={category} />
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
            className="inline-flex items-center space-x-2 px-6 py-3 glass rounded-full font-semibold hover:bg-white/20 transition-all group"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

