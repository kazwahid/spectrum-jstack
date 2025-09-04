'use client'

import { motion } from 'framer-motion'
import { useSession } from 'next-auth/react'
import UserProfile from './UserProfile'


const MugenBottomBar = () => {
  const { data: session } = useSession()
  const notificationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      variants={notificationVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mugen-bottom-bar"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 items-center w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 gap-4 sm:gap-0">
        {/* Left - Notifications */}
        <motion.div
          variants={staggerVariants}
          
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-2 sm:gap-4 justify-center sm:justify-start"
        >
        <motion.a
          variants={itemVariants}
          href="https://spectrumv.io"
          target="_blank"
          rel="noopener noreferrer"
          className="mugen-notification-item mugen-interactive group"
        >
          <span className="group-hover:text-purple-400 transition-colors">SpectrumX</span>
          <svg className="w-3 h-3 ml-1 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </motion.a>
        
        <motion.a
          variants={itemVariants}
          href="https://spectrumv.space"
          target="_blank"
          rel="noopener noreferrer"
          className="mugen-notification-item mugen-interactive group"
        >
          <span className="group-hover:text-blue-400 transition-colors">SpectrumAI</span>
          <svg className="w-3 h-3 ml-1 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </motion.a>
        
        <motion.a
          variants={itemVariants}
          href="https://spectredb.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mugen-notification-item mugen-interactive group"
        >
          <span className="group-hover:text-green-400 transition-colors">SpectreDB</span>
          <svg className="w-3 h-3 ml-1 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </motion.a>
        </motion.div>

        {/* Center - User Profile (if signed in) */}
        {session?.user && (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center order-2 sm:order-none"
          >
            <UserProfile variant="bottom" />
          </motion.div>
        )}

        {/* Right - Social Links & Footer */}
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center sm:justify-end gap-3 sm:gap-6 order-3 sm:order-none"
        >
          {/* Social Links */}
          <div className="flex gap-2 sm:gap-4">
            <motion.a
              variants={itemVariants}
              href="https://x.com/spectrum"
              className="text-white/50 hover:text-white transition-all duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="https://instagram.com/spectrum"
              className="text-white/50 hover:text-white transition-all duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="https://github.com/spectrum"
              className="text-white/50 hover:text-white transition-all duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="https://linkedin.com/in/qaziwahid"
              className="text-white/50 hover:text-white transition-all duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>
          </div>
          
          {/* Footer Links */}
          <div className="flex gap-6">
            <motion.a
              variants={itemVariants}
              
              className="text-xs text-white/50 hover:text-white/80 transition-colors"
            >
              CONTACT
            </motion.a>
            <motion.a
              variants={itemVariants}
              
              className="text-xs text-white/50 hover:text-white/80 transition-colors"
            >
              TERMS
            </motion.a>
            <motion.a
              variants={itemVariants}
              
              className="text-xs text-white/50 hover:text-white/80 transition-colors"
            >
              PRIVACY
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default MugenBottomBar
