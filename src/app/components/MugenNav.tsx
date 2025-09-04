'use client'

import { motion } from 'framer-motion'
import { useSession, signOut } from 'next-auth/react'
import MenuDrawer from './MenuDrawer'
import UserProfile from './UserProfile'
import LiveTime from './LiveTime'
import { useMenu } from '../context/MenuContext'


const MugenNav = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenu()
  const { data: session } = useSession()

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  }

  const hamburgerVariants = {
    closed: { rotate: 0 },
    open: { rotate: 45 }
  }

  const lineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 }
  }

  const line2Variants = {
    closed: { opacity: 1 },
    open: { opacity: 0 }
  }

  const line3Variants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 }
  }

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="mugen-nav"
      >
        {/* Left - SPECTRUM */}
        <div className="mugen-nav-left">
          SPECTRUM
        </div>

        {/* Center - Location & Time */}
        <div className="mugen-nav-center">
          <LiveTime variant="header" />
        </div>

        {/* User Profile (if signed in) */}
        {session?.user && (
          <div className="mugen-nav-profile">
            <UserProfile variant="header" />
          </div>
        )}

        {/* Right - Our Work & Hamburger */}
        <div className="mugen-nav-right">
          <a href="#work" className="mugen-nav-work mugen-interactive">
            Our Work [12]
          </a>
          
          <motion.div
            className="mugen-hamburger mugen-interactive"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            variants={hamburgerVariants}
            animate={isMenuOpen ? "open" : "closed"}
          >
            <motion.div
              className="mugen-hamburger-line"
              variants={lineVariants}
              animate={isMenuOpen ? "open" : "closed"}
            />
            <motion.div
              className="mugen-hamburger-line"
              variants={line2Variants}
              animate={isMenuOpen ? "open" : "closed"}
            />
            <motion.div
              className="mugen-hamburger-line"
              variants={line3Variants}
              animate={isMenuOpen ? "open" : "closed"}
            />
          </motion.div>
        </div>
      </motion.nav>

    </>
  )
}

export default MugenNav
