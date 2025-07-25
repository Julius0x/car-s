"use client"

import { useState } from "react"
import Image from "next/image"
import { Car } from "lucide-react"

interface ImageWithFallbackProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
  onClick?: () => void
  fallbackText?: string
}

export function ImageWithFallback({
  src,
  alt,
  width,
  height,
  fill,
  className = "",
  priority = false,
  onClick,
  fallbackText = "Car Image",
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleError = () => {
    setHasError(true)
    setIsLoading(false)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  if (hasError || !src) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        onClick={onClick}
        style={fill ? undefined : { width, height }}
      >
        <div className="text-center text-gray-500">
          <Car className="h-12 w-12 mx-auto mb-2 opacity-50" />
          <p className="text-sm font-medium">{fallbackText}</p>
          <p className="text-xs opacity-75">Image not available</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      {isLoading && (
        <div
          className={`absolute inset-0 bg-gray-200 flex items-center justify-center ${className}`}
          style={fill ? undefined : { width, height }}
        >
          <div className="text-center text-gray-500">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400 mx-auto mb-2"></div>
            <p className="text-xs">Loading...</p>
          </div>
        </div>
      )}
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={className}
        priority={priority}
        onClick={onClick}
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  )
}
