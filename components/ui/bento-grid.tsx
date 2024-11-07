"use client"
import React, { useState, useEffect, useRef } from 'react'
import { cn } from "@/lib/utils"

type Star = {
  left?: string;
  top?: string;
  opacity?: string;
  right?: string;
  size?: string;
  tailLength?: string;
  animationDuration?: string;
  animationDelay?: string;
  type?: string;
};

export const BentoGridLayout = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {

  const [stars, setStars] = useState<Star[]>([])
  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 500; i++) {
        newStars.push({
          left: `${Math.random() * 150}%`,
          top: `${Math.random() * 100}%`,
          size: `${Math.random() * 0.5 + 1}px`,
					opacity: `%${Math.random() * 10 + 1}`,
          animationDuration: `${Math.random() * 100 + 10}s`,
          animationDelay: `${Math.random() * 0.1}s`,
          type: "static",
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, [])

  return (
    <div className="relative w-full px-4  pb-32 sm:px-6 md:px-8 mx-auto mt-24 md:mt-40 overflow-hidden">
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {stars.map((star, index) => (
          <div
              key={index}
              className={`absolute ${star.type === "shooting" ? "shooting-star" : "static-star"
                }`}
              style={{
                left: star.left,
                top: star.top,
                opacity: star.opacity,
                right: star.right,
                width: star.size,
                height: star.size,
                animationDuration: star.animationDuration,
                animationDelay: star.animationDelay,
            }}
          />
        ))}
      </div>
      <div className="flex flex-col items-start md:items-center">
        <span className="text-base md:text-lg text-cyan-400 transition-colors duration-300 font-semibold">
          Services
        </span>
        <h3 className="text-start text-3xl md:text-5xl font-semibold">
          What we can achieve?
        </h3>
      </div>
      <div className="mx-auto w-full sm:w-4/5 md:w-3/4 overflow-hidden min-h-screen">
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto relative z-10 p-4",
            className
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    const element = ref.current
    if (element) {
      element.addEventListener('mousemove', handleMouseMove)
      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        element.removeEventListener('mousemove', handleMouseMove)
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <>
      <div
        ref={ref}
        className={cn(
          "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-cyan-400 dark:shadow-none p-4 bg-gray-900 justify-between flex flex-col space-y-4 overflow-hidden relative min-h-[20rem]",
          className
        )}
        style={{
          '--x': `${position.x}px`,
          '--y': `${position.y}px`,
          '--hover': isHovering ? '1' : '0',
        } as React.CSSProperties}
      >
        <div
          className="absolute inset-0 rounded-xl transition-opacity duration-300 opacity-0 group-hover/bento:opacity-100 pointer-events-none"
          style={{
            boxShadow: '0 0 40px 20px rgba(20, 92, 250, 0.1), 0 0 0 1px rgba(139, 92, 246, 0.5), 0 0 20px rgba(139, 92, 246, 0.3) inset',
          }}
        />
        {header && <div className="h-60">{header}</div>}
        <div className="group-hover/bento:translate-x-2 transition duration-200 relative z-10">
          {icon}
          <div className="font-sans font-bold text-cyan-400 mb-2 mt-2">{title}</div>
          <div className="font-sans font-normal text-cyan-400 text-xs">{description}</div>
        </div>
      </div>
    </>
  )
}
