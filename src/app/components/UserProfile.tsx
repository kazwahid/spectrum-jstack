"use client"

import { useSession, signOut } from "next-auth/react"
import { motion } from "framer-motion"

interface UserProfileProps {
  variant?: "header" | "bottom"
  showSignOut?: boolean
}

export default function UserProfile({ variant = "header", showSignOut = false }: UserProfileProps) {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white/10 rounded-full animate-pulse" />
        <div className="w-16 h-4 bg-white/10 rounded animate-pulse" />
      </div>
    )
  }

  if (!session?.user) {
    return null
  }

  const { user } = session

  if (variant === "header") {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center gap-3"
      >
        {/* Profile Picture */}
        <div className="relative">
          {user.image ? (
            <img
              src={user.image}
              alt={user.name || "User"}
              className="w-8 h-8 rounded-full border border-white/20 object-cover"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/10 border border-white/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          )}
          {/* Online indicator */}
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border border-black" />
        </div>

        {/* User Name */}
        <div className="flex flex-col">
          <span className="text-white text-sm font-medium leading-none">
            {user.name || user.email?.split('@')[0] || 'User'}
          </span>
          <span className="text-white/50 text-xs leading-none">
            {user.email}
          </span>
        </div>

        {/* Sign Out Button (if enabled) */}
        {showSignOut && (
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="ml-2 p-1.5 hover:bg-white/10 rounded-lg transition-colors group"
            title="Sign Out"
          >
            <svg className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        )}
      </motion.div>
    )
  }

  if (variant === "bottom") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2"
      >
        {/* Profile Picture */}
        <div className="relative">
          {user.image ? (
            <img
              src={user.image}
              alt={user.name || "User"}
              className="w-10 h-10 rounded-full border border-white/20 object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/10 border border-white/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          )}
          {/* Online indicator */}
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border border-black" />
        </div>

        {/* User Info */}
        <div className="flex flex-col">
          <span className="text-white text-sm font-medium leading-none">
            Welcome back, {user.name || user.email?.split('@')[0] || 'User'}
          </span>
          <span className="text-white/50 text-xs leading-none">
            {user.email}
          </span>
        </div>

        {/* Sign Out Button */}
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="ml-auto p-2 hover:bg-white/10 rounded-lg transition-colors group"
          title="Sign Out"
        >
          <svg className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </motion.div>
    )
  }

  return null
}


