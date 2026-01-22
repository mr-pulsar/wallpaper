'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X, Search, Sparkles } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/categories', label: 'Categories' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1 sm:space-x-2 group">
            <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-glow">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-base sm:text-xl font-extrabold gradient-text">
              3D Wallpapers
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg transition-all font-medium ${
                  pathname === link.href
                    ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-white shadow-glow'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Link
              href="/categories"
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </Link>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg transition-all ${
                    pathname === link.href
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

