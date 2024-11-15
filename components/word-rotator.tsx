'use client'

import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import "./word-rotator.css" 

interface WordRotatorProps {
  words: string[]
  interval?: number
  className?: string
}

export function WordRotator({
  words = ['Hello', 'World', 'React'],
  interval = 3000,
  className
}: WordRotatorProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(-1)

  useEffect(() => {
    if (currentIndex < words.length - 1) {
      const timer = setTimeout(() => {
        setPrevIndex(currentIndex)
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, interval)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, interval, words.length])

  return (
    <div className={cn('relative h-20 px-5 overflow-hidden', className)}>
      {words.map((word, index) => {
        const isActive = index === currentIndex
        const isLeaving = index === prevIndex

        return (
          <div
            key={word}
            className={cn(
              'absolute top-0 left-0 w-full px-4 transition-all ease-in-out',
              isActive ? 'animate-word-enter z-10' : '',
              isLeaving ? 'animate-word-leave z-0' : '',
              (!isActive && !isLeaving) ? 'opacity-0' : ''
            )}
            style={{
              zIndex: isActive || isLeaving ? 1 : 0 // Ensure leaving or active words have higher z-index
            }}
            aria-hidden={!isActive && !isLeaving}
          >
            <div className="block pb-4 bg-gradient-to-br from-[#5B78F9] to-[#1EE4A2] bg-clip-text text-transparent font-bold whitespace-normal">
              {word}
            </div>
          </div>
        )
      })}
    </div>
  )
}

