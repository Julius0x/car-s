"use client"

import type React from "react"

import { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  RotateCcw,
  RotateCw,
  Play,
  Pause,
  Rotate3dIcon as RotateIcon,
  Maximize,
  X,
  Info,
  MousePointer2,
} from "lucide-react"

interface VirtualTourProps {
  carName: string
  images360: string[]
  interiorImages?: string[]
}

export function VirtualTour({ carName, images360, interiorImages = [] }: VirtualTourProps) {
  const [currentFrame, setCurrentFrame] = useState(0)
  const [isAutoRotating, setIsAutoRotating] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [viewMode, setViewMode] = useState<"exterior" | "interior">("exterior")
  const [showInstructions, setShowInstructions] = useState(true)

  const containerRef = useRef<HTMLDivElement>(null)
  const dragStartX = useRef(0)
  const lastFrameRef = useRef(0)
  const autoRotateInterval = useRef<NodeJS.Timeout>()

  const totalFrames = viewMode === "exterior" ? images360.length : interiorImages.length
  const currentImages = viewMode === "exterior" ? images360 : interiorImages

  // Auto rotation
  useEffect(() => {
    if (isAutoRotating && !isDragging) {
      autoRotateInterval.current = setInterval(() => {
        setCurrentFrame((prev) => (prev + 1) % totalFrames)
      }, 100) // 10 FPS
    } else {
      if (autoRotateInterval.current) {
        clearInterval(autoRotateInterval.current)
      }
    }

    return () => {
      if (autoRotateInterval.current) {
        clearInterval(autoRotateInterval.current)
      }
    }
  }, [isAutoRotating, isDragging, totalFrames])

  // Mouse drag handlers
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      setIsDragging(true)
      dragStartX.current = e.clientX
      lastFrameRef.current = currentFrame
      setShowInstructions(false)
    },
    [currentFrame],
  )

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return

      const deltaX = e.clientX - dragStartX.current
      const sensitivity = 2 // Adjust sensitivity
      const frameChange = Math.floor(deltaX / sensitivity)
      const newFrame = (lastFrameRef.current + frameChange + totalFrames) % totalFrames

      setCurrentFrame(newFrame)
    },
    [isDragging, totalFrames],
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Touch handlers for mobile
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      setIsDragging(true)
      dragStartX.current = e.touches[0].clientX
      lastFrameRef.current = currentFrame
      setShowInstructions(false)
    },
    [currentFrame],
  )

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return

      const deltaX = e.touches[0].clientX - dragStartX.current
      const sensitivity = 2
      const frameChange = Math.floor(deltaX / sensitivity)
      const newFrame = (lastFrameRef.current + frameChange + totalFrames) % totalFrames

      setCurrentFrame(newFrame)
    },
    [isDragging, totalFrames],
  )

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentFrame((prev) => (prev - 1 + totalFrames) % totalFrames)
      } else if (e.key === "ArrowRight") {
        setCurrentFrame((prev) => (prev + 1) % totalFrames)
      } else if (e.key === " ") {
        e.preventDefault()
        setIsAutoRotating((prev) => !prev)
      } else if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false)
      }
    }

    if (isFullscreen) {
      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }
  }, [totalFrames, isFullscreen])

  const rotateLeft = () => {
    setCurrentFrame((prev) => (prev - 1 + totalFrames) % totalFrames)
  }

  const rotateRight = () => {
    setCurrentFrame((prev) => (prev + 1) % totalFrames)
  }

  const toggleAutoRotate = () => {
    setIsAutoRotating((prev) => !prev)
  }

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev)
  }

  const switchViewMode = (mode: "exterior" | "interior") => {
    setViewMode(mode)
    setCurrentFrame(0)
    setIsAutoRotating(false)
  }

  const VirtualTourContent = () => (
    <div className="space-y-4">
      {/* View Mode Selector */}
      <div className="flex gap-2">
        <Button
          variant={viewMode === "exterior" ? "default" : "outline"}
          onClick={() => switchViewMode("exterior")}
          className={viewMode === "exterior" ? "bg-orange-500 hover:bg-orange-600" : ""}
        >
          Exterior 360°
        </Button>
        {interiorImages.length > 0 && (
          <Button
            variant={viewMode === "interior" ? "default" : "outline"}
            onClick={() => switchViewMode("interior")}
            className={viewMode === "interior" ? "bg-orange-500 hover:bg-orange-600" : ""}
          >
            Interior 360°
          </Button>
        )}
      </div>

      {/* 360° Viewer */}
      <div
        ref={containerRef}
        className={`relative bg-gray-100 rounded-lg overflow-hidden cursor-grab ${
          isDragging ? "cursor-grabbing" : ""
        } ${isFullscreen ? "h-screen" : "aspect-video"}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Main 360° Image */}
        <div className="relative w-full h-full">
          <Image
            src={currentImages[currentFrame] || "/placeholder.svg?height=400&width=600&text=Car+360+View"}
            alt={`${carName} - 360° view frame ${currentFrame + 1}`}
            fill
            className="object-cover select-none pointer-events-none"
            priority
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = "/placeholder.svg?height=400&width=600&text=Car+360+View"
            }}
          />
        </div>

        {/* Instructions Overlay */}
        {showInstructions && !isFullscreen && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-sm text-center">
              <MousePointer2 className="h-12 w-12 mx-auto mb-4 text-orange-500" />
              <h3 className="font-bold text-lg mb-2">360° Virtual Tour</h3>
              <p className="text-gray-600 mb-4">
                Drag left or right to rotate the car. Use controls below for auto-rotation.
              </p>
              <Button onClick={() => setShowInstructions(false)} className="bg-orange-500 hover:bg-orange-600">
                Start Tour
              </Button>
            </div>
          </div>
        )}

        {/* Loading Indicator */}
        {!currentImages[currentFrame] && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          </div>
        )}

        {/* Frame Counter */}
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
          {currentFrame + 1} / {totalFrames}
        </div>

        {/* Rotation Indicator */}
        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
          <RotateIcon className="h-4 w-4" />
          {Math.round((currentFrame / totalFrames) * 360)}°
        </div>

        {/* Auto-rotate indicator */}
        {isAutoRotating && (
          <div className="absolute top-16 left-4 bg-orange-500 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
            <div className="animate-spin rounded-full h-3 w-3 border border-white border-t-transparent"></div>
            Auto-rotating
          </div>
        )}

        {/* Fullscreen button */}
        {!isFullscreen && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white"
            onClick={toggleFullscreen}
          >
            <Maximize className="h-5 w-5" />
          </Button>
        )}

        {/* Close fullscreen button */}
        {isFullscreen && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white z-10"
            onClick={toggleFullscreen}
          >
            <X className="h-6 w-6" />
          </Button>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 p-4 bg-gray-50 rounded-lg">
        <Button variant="outline" size="icon" onClick={rotateLeft} disabled={isAutoRotating}>
          <RotateCcw className="h-4 w-4" />
        </Button>

        <Button
          variant={isAutoRotating ? "default" : "outline"}
          onClick={toggleAutoRotate}
          className={isAutoRotating ? "bg-orange-500 hover:bg-orange-600" : ""}
        >
          {isAutoRotating ? (
            <>
              <Pause className="h-4 w-4 mr-2" />
              Pause
            </>
          ) : (
            <>
              <Play className="h-4 w-4 mr-2" />
              Auto Rotate
            </>
          )}
        </Button>

        <Button variant="outline" size="icon" onClick={rotateRight} disabled={isAutoRotating}>
          <RotateCw className="h-4 w-4" />
        </Button>

        <Button variant="outline" onClick={toggleFullscreen}>
          <Maximize className="h-4 w-4 mr-2" />
          Fullscreen
        </Button>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-orange-500 h-2 rounded-full transition-all duration-200"
          style={{ width: `${((currentFrame + 1) / totalFrames) * 100}%` }}
        />
      </div>

      {/* Info Panel */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center text-lg">
            <Info className="mr-2 h-5 w-5 text-orange-500" />
            360° Virtual Tour
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Current View:</span>
              <div className="font-semibold capitalize">{viewMode}</div>
            </div>
            <div>
              <span className="text-gray-600">Rotation:</span>
              <div className="font-semibold">{Math.round((currentFrame / totalFrames) * 360)}°</div>
            </div>
            <div>
              <span className="text-gray-600">Frame:</span>
              <div className="font-semibold">
                {currentFrame + 1} of {totalFrames}
              </div>
            </div>
            <div>
              <span className="text-gray-600">Status:</span>
              <div className="font-semibold">{isAutoRotating ? "Auto-rotating" : "Manual"}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 bg-black z-50 p-4">
        <VirtualTourContent />
      </div>
    )
  }

  return <VirtualTourContent />
}
