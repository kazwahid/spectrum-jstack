'use client'

import { useState, useEffect } from 'react'

interface LiveTimeProps {
  variant?: 'header' | 'drawer'
}

const LiveTime = ({ variant = 'header' }: LiveTimeProps) => {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      })
      setCurrentTime(timeString)
    }

    // Update immediately
    updateTime()

    // Update every second
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  if (variant === 'header') {
    return (
      <span className="text-white/60 text-sm font-medium">
        Islamabad (PK) {currentTime}
      </span>
    )
  }

  return (
    <span className="text-white/60 text-sm font-medium">
      {currentTime}
    </span>
  )
}

export default LiveTime

