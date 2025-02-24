'use client'
import React from 'react'
import Image from 'next/image'

export function AnimatedLogo() {
  return (
    <div className="relative w-24 h-12">
      <Image
        src="/logo.png"
        alt="Phinity Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  )
} 