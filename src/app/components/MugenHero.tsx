'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import AuthModal from '../../components/auth/AuthModal'


const MugenHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showAuthModal, setShowAuthModal] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Mugen Mesh Background System */}
      <div className="mugen-mesh-bg" />
      <div className="mugen-mesh-overlay" />
      
      {/* Single Large Triangle */}
      <div className="mugen-geometric-shapes">
        <div className="mugen-triangle" />
      </div>
      
      {/* Enhanced Grain Texture */}
      <div className="mugen-grain-texture" />
      
      {/* Prismatic Rays */}
      <div className="mugen-prismatic-rays" />

      {/* Main Hero Section */}
      <section className="relative h-screen mugen-hero-section flex items-center overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-20 items-center h-full">
            
            {/* Left Side - Typography (6 columns) */}
            <div className="col-span-1 md:col-span-6 relative flex items-center">
              <div className="w-full">
                {/* Modern Hero Heading with Subtle Interactivity */}
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative group"
                  style={{
                    transform: `translate(${mousePosition.x * 0.002}px, ${mousePosition.y * 0.002}px)`
                  }}
                >
                           <h1 className="text-[60px] sm:text-[80px] md:text-[120px] lg:text-[140px] font-thin leading-[0.85] tracking-[-0.03em] text-white/95 group-hover:text-white transition-all duration-700 ease-out">
           SPECTRUM
         </h1>
                  
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-white/10 blur-2xl"></div>
                  </div>
                  
                  {/* Underline accent - aligned with right side */}
                  <motion.div
                    className="absolute -bottom-2 left-0 h-px bg-white/60"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
                  />
                </motion.div>

                {/* Supporting Details - Below main heading */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="mt-8 space-y-2"
                >
                  <p className="font-caption text-caption text-gray-400 tracking-wider text-sm sm:text-base md:text-lg lg:text-xl">
                  Since — 2025
                  </p>
                  
                  <motion.div
                    className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-white/60 to-transparent"
                    initial={{ width: 0 }}
                    animate={{ width: 64 }}
                    transition={{ delay: 2.5, duration: 1.2, ease: "easeOut" }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Right Side - Copy Block (6 columns) */}
            <div className="col-span-1 md:col-span-6 relative flex items-center">
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="w-full space-y-6"
                style={{
                  transform: `translate(${mousePosition.x * -0.003}px, ${mousePosition.y * -0.003}px)`
                }}
              >
                <div className="relative">
                  <h3 className="font-display text-display-lg text-white leading-relaxed">
                   map your path. grow your spectrum.
                  </h3>
                  
                  {/* Underline accent - aligned with left side */}
                  <motion.div
                    className="absolute -bottom-2 left-0 h-px bg-white/60"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
                  />
                </div>
                
                <div className="flex items-center space-x-6">
                  <motion.div
                    className="w-20 h-px bg-white/50"
                    initial={{ width: 0 }}
                    animate={{ width: 80 }}
                    transition={{ delay: 3, duration: 1.2, ease: "easeOut" }}
                  />
                  <motion.div
                    className="w-3 h-3 bg-white/60 rounded-full"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="pt-8 flex items-center gap-4"
                >
                  <button 
                    onClick={() => setShowAuthModal(true)}
                    className="group relative px-4 py-2 sm:px-6 sm:py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm flex items-center gap-2 text-white/80 hover:text-white text-xs sm:text-sm font-medium"
                  >
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Join Spectrum</span>
                    <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                  
                  <button 
                    onClick={() => window.open('https://github.com/spectrum', '_blank')}
                    className="group relative px-4 py-2 sm:px-6 sm:py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm flex items-center gap-2 text-white/80 hover:text-white text-xs sm:text-sm font-medium"
                  >
                    <svg 
                      className="w-4 h-4" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>View on GitHub</span>
                    <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </>
  )
}

export default MugenHero