'use client'

import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="glass border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                3D Wallpapers
              </span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Premium wallpapers in Ultra HD and 4K quality
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categories?cat=god" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                  God
                </Link>
              </li>
              <li>
                <Link href="/categories?cat=anime" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                  Anime
                </Link>
              </li>
              <li>
                <Link href="/categories?cat=bike" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                  Bike
                </Link>
              </li>
              <li>
                <Link href="/categories?cat=cars" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                  Cars
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                  DMCA
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} 3D Wallpapers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

