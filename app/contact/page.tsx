'use client'

import { motion } from 'framer-motion'
import { Mail, MessageSquare, Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

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
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 px-4">
            Have a question or suggestion? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Get in Touch</h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="p-2 sm:p-3 rounded-full bg-blue-500/20 text-blue-500 flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">Email</p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 break-all">contact@wallpapers.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="p-2 sm:p-3 rounded-full bg-purple-500/20 text-purple-500 flex-shrink-0">
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">Support</p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Available 24/7</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8"
          >
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base bg-white/10 dark:bg-black/20 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base bg-white/10 dark:bg-black/20 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base bg-white/10 dark:bg-black/20 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:from-blue-600 hover:to-purple-700 transition-all flex items-center justify-center space-x-2 active:scale-95"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Send Message</span>
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  )
}

