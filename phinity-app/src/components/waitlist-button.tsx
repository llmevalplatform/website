'use client'
import React from 'react'
import { Button } from "@/components/ui/button"

interface WaitlistButtonProps {
  url: string
}

export function WaitlistButton({ url }: WaitlistButtonProps) {
  return (
    <Button 
      size="lg"
      onClick={() => window.location.href = url}
    >
      Join Waitlist
    </Button>
  )
} 