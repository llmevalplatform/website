'use client'
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface UseCaseCardProps {
  title: string
  description: string
}

export function UseCaseCard({ title, description }: UseCaseCardProps) {
  return (
    <Card className="transition-all hover:shadow-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
} 