'use client'
import React from 'react'
import { motion } from "framer-motion"

export function DataTransformAnimation() {
  // Sparse original dataset with more realistic distribution
  const originalData = [
    { x: 20, y: 30 },
    { x: 70, y: 60 },
    { x: 40, y: 75 },
    { x: 85, y: 25 }
  ]
  
  // Augmented dataset with much more diverse points
  const augmentedData = [
    // Original points preserved
    { x: 20, y: 30 },
    { x: 70, y: 60 },
    { x: 40, y: 75 },
    { x: 85, y: 25 },
    // Additional diverse points
    { x: 15, y: 85 },
    { x: 30, y: 15 },
    { x: 45, y: 45 },
    { x: 60, y: 25 },
    { x: 75, y: 80 },
    { x: 90, y: 40 },
    { x: 25, y: 55 },
    { x: 50, y: 20 },
    { x: 80, y: 70 },
    { x: 35, y: 90 },
    { x: 65, y: 35 }
  ]

  return (
    <div className="flex items-center justify-center gap-24 h-52">
      {/* Original Dataset D */}
      <div className="relative">
        <span className="font-serif text-2xl absolute -top-8 left-1/2 -translate-x-1/2">D</span>
        <div className="w-40 h-40 border-2 border-foreground relative">
          {originalData.map((point, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-foreground"
              style={{ left: `${point.x}%`, top: `${point.y}%` }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.3 }}
            />
          ))}
        </div>
      </div>

      {/* Transformation Function ϕ */}
      <motion.div
        className="flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <span className="font-serif text-2xl">ϕ</span>
        <motion.div 
          className="w-20 h-1 bg-foreground"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        />
      </motion.div>

      {/* Augmented Dataset D′ */}
      <div className="relative">
        <span className="font-serif text-2xl absolute -top-8 left-1/2 -translate-x-1/2">D′</span>
        <div className="w-40 h-40 border-2 border-foreground relative">
          {augmentedData.map((point, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-foreground"
              style={{ left: `${point.x}%`, top: `${point.y}%` }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: i * 0.15 + 1.5,
                duration: 0.4
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}