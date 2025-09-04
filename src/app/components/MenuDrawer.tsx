'use client'

import { motion, AnimatePresence } from 'framer-motion'
import LiveTime from './LiveTime'

interface MenuDrawerProps {
  isOpen: boolean
  onClose: () => void
}

const MenuDrawer = ({ isOpen, onClose }: MenuDrawerProps) => {
  const menuItems = [
    { name: 'Compass', count: null },
    { name: 'Work', count: 4 },
    { name: 'Articles', count: 7 },
    { name: 'Pricing', count: null },
    { name: 'Contact', count: null },
  ]

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

  const drawerVariants = {
    hidden: { 
      x: '100%',
      scale: 0.95,
      opacity: 0
    },
    visible: { 
      x: 0,
      scale: 1,
      opacity: 1
    },
    exit: { 
      x: '100%',
      scale: 0.95,
      opacity: 0
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9,
      filter: 'blur(4px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: 'blur(0px)'
    },
    exit: { 
      opacity: 0, 
      y: -20,
      scale: 0.95,
      filter: 'blur(2px)'
    }
  }

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
        duration: 0.6
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
        duration: 0.3
      }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
        <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeOut"
            }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Split Screen Container */}
          <motion.div
            variants={drawerVariants}
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
            className="fixed inset-0 z-40 flex"
          >
            {/* Left Side - SPECTRUM Logo with Blurred Background */}
            <div className="flex-1 relative overflow-hidden">
              {/* Blurred Background */}
              <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl" />
              
              {/* SPECTRUM Logo */}
              <div className="relative z-10 h-full flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-center group cursor-pointer"
                >
                  <h1 className="text-[120px] font-thin leading-[0.85] tracking-[-0.03em] text-white/95 group-hover:text-white transition-all duration-700 ease-out">
                    SPECTRUM
                  </h1>
                  
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-white/10 blur-2xl"></div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-6"
                  >
                    <p className="text-xl text-white/70 font-light">
                      We live in a age of artificial capability and human confusion. Our mandate is to deliver clarity.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Right Side - Menu Drawer */}
            <div className="w-full sm:w-80 md:w-96 lg:w-102 bg-black border-l border-white/10 overflow-y-auto">
              <div className="p-4 sm:p-6 h-full flex flex-col">
                
                {/* Hamburger Close Button */}
                <motion.div 
                  className="flex justify-end mb-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <motion.div
                    className="mugen-hamburger mugen-interactive cursor-pointer"
                    onClick={onClose}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ 
                      scale: 0.95,
                      rotate: -5,
                      transition: { duration: 0.1 }
                    }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <motion.div
                      className="mugen-hamburger-line"
                      animate={{ 
                        rotate: 45, 
                        y: 8,
                        transition: { 
                          delay: 0.5, 
                          duration: 0.3,
                          ease: "easeOut"
                        }
                      }}
                    />
                    <motion.div
                      className="mugen-hamburger-line"
                      animate={{ 
                        opacity: 0,
                        scale: 0.8,
                        transition: { 
                          delay: 0.5, 
                          duration: 0.2,
                          ease: "easeOut"
                        }
                      }}
                    />
                    <motion.div
                      className="mugen-hamburger-line"
                      animate={{ 
                        rotate: -45, 
                        y: -8,
                        transition: { 
                          delay: 0.5, 
                          duration: 0.3,
                          ease: "easeOut"
                        }
                      }}
                    />
                  </motion.div>
                </motion.div>

                {/* Menu Section */}
          <motion.div
                  variants={staggerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
                  className="mb-4"
                >
                  <h2 className="text-sm text-white/50 font-medium mb-6 tracking-wider uppercase">Menu</h2>
                  
                  <nav className="space-y-1">
                    {menuItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={`#${item.name.toLowerCase()}`}
                        variants={itemVariants}
                        className="group flex items-center justify-between text-2xl font-bold text-white hover:text-white/80 transition-colors py-1"
                        onClick={onClose}
                      >
                        <span>{item.name}</span>
                        {item.count && (
                          <span className="text-white/50 font-normal text-lg">[{item.count}]</span>
                        )}
                        <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                    ))}
                  </nav>
                  
                  <div className="w-full h-px bg-white/20 mt-6"></div>
                </motion.div>

                {/* Contact Section */}
                <motion.div
                  variants={staggerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="mb-4"
                >
                  <h3 className="text-sm text-white/50 font-medium mb-1 tracking-wider uppercase">Let's Talk</h3>
                  
                  <a 
                    href="mailto:contact@spectrum.com" 
                    className="text-2xl font-bold text-white hover:text-white/80 transition-colors block"
                  >
                    contact@spectrum.com +
                  </a>
                  
                  <div className="w-full h-px bg-white/20 mt-4"></div>
                </motion.div>

                {/* Location and Time */}
                    <motion.div 
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="mb-6"
                >
                  <div className="flex justify-between items-center text-sm text-white">
                    <span className="text-white/90">Islamabad (PK)</span>
                    <LiveTime variant="drawer" />
                  </div>
                      </motion.div>

                {/* Social Media */}
                      <motion.div 
                  variants={staggerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="mb-8"
                >
                  <h4 className="text-sm text-white/50 font-medium mb-6 tracking-wider uppercase">Socials</h4>
                  
                  <div className="flex items-center space-x-6">
                    {/* Twitter/X */}
                    <motion.a
                      href="https://x.com/spectrum"
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      className="text-white/70 hover:text-white transition-all duration-300"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </motion.a>

                    {/* Instagram */}
                    <motion.a
                      href="https://instagram.com/spectrum"
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      className="text-white/70 hover:text-white transition-all duration-300"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </motion.a>

                    {/* GitHub */}
                    <motion.a
                      href="https://github.com/spectrum"
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      className="text-white/70 hover:text-white transition-all duration-300"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </motion.a>

                    {/* LinkedIn */}
                    <motion.a
                      href="https://linkedin.com/in/qaziwahid"
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      className="text-white/70 hover:text-white transition-all duration-300"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>

            
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MenuDrawer