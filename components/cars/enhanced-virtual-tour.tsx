"use client"

import type React from "react"

import { useState, useRef, useEffect, useCallback } from "react"
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
  Car,
} from "lucide-react"
import { ImageWithFallback } from "./image-fallback"

interface EnhancedVirtualTourProps {
  carName: string
  images360: string[]
  interiorImages?: string[]
}

export function EnhancedVirtualTour({ carName, images360, interiorImages = [] }: EnhancedVirtualTourProps) {
  const [currentFrame, setCurrentFrame] = useState(0)
  const [isAutoRotating, setIsAutoRotating] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [viewMode, setViewMode] = useState<"exterior" | "interior">("exterior")
  const [showInstructions, setShowInstructions] = useState(true)
  const [hasValidImages, setHasValidImages] = useState(true)

  const containerRef = useRef<HTMLDivElement>(null)
  const dragStartX = useRef(0)
  const lastFrameRef = useRef(0)
  const autoRotateInterval = useRef<NodeJS.Timeout>()

  const totalFrames = viewMode === "exterior" ? images360.length : interiorImages.length
  const currentImages = viewMode === "exterior" ? images360 : interiorImages

  // Check if we have valid images
  useEffect(() => {
    const hasExterior = images360.length > 0
    const hasInterior = interiorImages.length > 0
    setHasValidImages(hasExterior || hasInterior)

    if (!hasExterior && hasInterior) {
      setViewMode("interior")
    }
  }, [images360, interiorImages])

  // Auto rotation
  useEffect(() => {
    if (isAutoRotating && !isDragging && totalFrames > 0) {
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
      if (totalFrames === 0) return
      setIsDragging(true)
      dragStartX.current = e.clientX
      lastFrameRef.current = currentFrame
      setShowInstructions(false)
    },
    [currentFrame, totalFrames],
  )

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || totalFrames === 0) return

      const deltaX = e.clientX - dragStartX.current
      const sensitivity = 2
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
      if (totalFrames === 0) return
      setIsDragging(true)
      dragStartX.current = e.touches[0].clientX
      lastFrameRef.current = currentFrame
      setShowInstructions(false)
    },
    [currentFrame, totalFrames],
  )

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging || totalFrames === 0) return

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
      if (totalFrames === 0) return

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
    if (totalFrames === 0) return
    setCurrentFrame((prev) => (prev - 1 + totalFrames) % totalFrames)
  }

  const rotateRight = () => {
    if (totalFrames === 0) return
    setCurrentFrame((prev) => (prev + 1) % totalFrames)
  }

  const toggleAutoRotate = () => {
    if (totalFrames === 0) return
    setIsAutoRotating((prev) => !prev)
  }

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev)
  }

  const switchViewMode = (mode: "exterior" | "interior") => {
    const targetImages = mode === "exterior" ? images360 : interiorImages
    if (targetImages.length === 0) return

    setViewMode(mode)
    setCurrentFrame(0)
    setIsAutoRotating(false)
  }

  // Fallback component for no images
  const NoImagesAvailable = () => (
    <div
      className={`bg-gray-100 rounded-lg flex items-center justify-center ${isFullscreen ? "h-screen" : "aspect-video"}`}
    >
      <div className="text-center text-gray-500 p-8">
        <Car className="h-24 w-24 mx-auto mb-4 opacity-50" />
        <h3 className="text-xl font-semibold mb-2">360° Tour Not Available</h3>
        <p className="text-gray-600 mb-4">360-degree images are not available for this vehicle at the moment.</p>
        <p className="text-sm text-gray-500">Please check the regular photo gallery for more images of this car.</p>
      </div>
    </div>
  )

  const VirtualTourContent = () => (
    <div className="space-y-4">
      {/* View Mode Selector */}
      <div className="flex gap-2">
        <Button
          variant={viewMode === "exterior" ? "default" : "outline"}
          onClick={() => switchViewMode("exterior")}
          disabled={images360.length === 0}
          className={viewMode === "exterior" ? "bg-orange-500 hover:bg-orange-600" : ""}
        >
          Exterior 360° ({images360.length})
        </Button>
        {interiorImages.length > 0 && (
          <Button
            variant={viewMode === "interior" ? "default" : "outline"}
            onClick={() => switchViewMode("interior")}
            disabled={interiorImages.length === 0}
            className={viewMode === "interior" ? "bg-orange-500 hover:bg-orange-600" : ""}
          >
            Interior 360° ({interiorImages.length})
          </Button>
        )}
      </div>

      {/* 360° Viewer */}
      {!hasValidImages || totalFrames === 0 ? (
        <NoImagesAvailable />
      ) : (
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
          <ImageWithFallback
            src={currentImages[currentFrame] || ""}
            alt={`${carName} - 360° view frame ${currentFrame + 1}`}
            fill
            className="object-cover select-none pointer-events-none"
            priority
            fallbackText="360° View"
          />

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

          {/* Frame Counter */}
          <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
            {currentFrame + 1} / {totalFrames}
          </div>

          {/* Rotation Indicator */}
          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
            <RotateIcon className="h-4 w-4" />
            {totalFrames > 0 ? Math.round((currentFrame / totalFrames) * 360) : 0}°
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
      )}

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 p-4 bg-gray-50 rounded-lg">
        <Button variant="outline" size="icon" onClick={rotateLeft} disabled={isAutoRotating || totalFrames === 0}>
          <RotateCcw className="h-4 w-4" />
        </Button>

        <Button
          variant={isAutoRotating ? "default" : "outline"}
          onClick={toggleAutoRotate}
          disabled={totalFrames === 0}
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

        <Button variant="outline" size="icon" onClick={rotateRight} disabled={isAutoRotating || totalFrames === 0}>
          <RotateCw className="h-4 w-4" />
        </Button>

        <Button variant="outline" onClick={toggleFullscreen} disabled={totalFrames === 0}>
          <Maximize className="h-4 w-4 mr-2" />
          Fullscreen
        </Button>
      </div>

      {/* Progress Bar */}
      {totalFrames > 0 && (
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-orange-500 h-2 rounded-full transition-all duration-200"
            style={{ width: `${((currentFrame + 1) / totalFrames) * 100}%` }}
          />
        </div>
      )}

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
              <div className="font-semibold">
                {totalFrames > 0 ? Math.round((currentFrame / totalFrames) * 360) : 0}°
              </div>
            </div>
            <div>
              <span className="text-gray-600">Frame:</span>
              <div className="font-semibold">
                {totalFrames > 0 ? `${currentFrame + 1} of ${totalFrames}` : "No frames"}
              </div>
            </div>
            <div>
              <span className="text-gray-600">Status:</span>
              <div className="font-semibold">
                {totalFrames === 0 ? "Not available" : isAutoRotating ? "Auto-rotating" : "Manual"}
              </div>
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
