'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  defaultMode?: 'signin' | 'signup'
}

export default function AuthModal({ isOpen, onClose, defaultMode = 'signin' }: AuthModalProps) {
  const [mode, setMode] = useState<'signin' | 'signup'>(defaultMode)

  const overlayVariants = {
    hidden: { 
      opacity: 0,
      backdropFilter: 'blur(0px)'
    },
    visible: { 
      opacity: 1,
      backdropFilter: 'blur(8px)'
    },
    exit: { 
      opacity: 0,
      backdropFilter: 'blur(0px)'
    }
  }

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95, 
      y: 30,
      filter: 'blur(4px)'
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      filter: 'blur(0px)'
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      y: -20,
      filter: 'blur(2px)'
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="fixed inset-0 bg-black/60 z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 300,
                mass: 0.8,
                duration: 0.6
              }}
              className="relative w-full max-w-sm sm:max-w-md bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white transition-all duration-200 rounded-xl hover:bg-white/5 group"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:rotate-90 transition-transform duration-200">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </motion.button>

              {/* Form Content */}
              <AnimatePresence mode="wait">
                {mode === 'signin' ? (
                  <SignInForm
                    key="signin"
                    onSwitchToSignUp={() => setMode('signup')}
                    onClose={onClose}
                  />
                ) : (
                  <SignUpForm
                    key="signup"
                    onSwitchToSignIn={() => setMode('signin')}
                    onClose={onClose}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}


