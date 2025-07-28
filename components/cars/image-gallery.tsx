"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"
import { ClientImage } from "@/components/ui/client-image"

interface ImageGalleryProps {
  images: string[]
  carName: string
}

export function ImageGallery({ images, carName }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const imageRef = useRef<HTMLDivElement>(null)

  const nextImage = () => {
    if (images.length > 1) {
      setSelectedImage((prev) => (prev + 1) % images.length)
      resetZoom()
    }
  }

  const prevImage = () => {
    if (images.length > 1) {
      setSelectedImage((prev) => (prev - 1 + images.length) % images.length)
      resetZoom()
    }
  }

  const resetZoom = () => {
    setZoomLevel(1)
    setImagePosition({ x: 0, y: 0 })
  }

  const openModal = (index: number) => {
    setSelectedImage(index)
    setIsModalOpen(true)
    resetZoom()
  }

  const closeModal = () => {
    setIsModalOpen(false)
    resetZoom()
  }

  const zoomIn = () => {
    setZoomLevel((prev) => {
      const newZoom = Math.min(prev + 0.5, 3)
      return newZoom
    })
  }

  const zoomOut = () => {
    setZoomLevel((prev) => {
      const newZoom = Math.max(prev - 0.5, 1)
      if (newZoom === 1) {
        setImagePosition({ x: 0, y: 0 })
      }
      return newZoom
    })
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true)
      setDragStart({
        x: e.clientX - imagePosition.x,
        y: e.clientY - imagePosition.y,
      })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setImagePosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    e.preventDefault()
    switch (e.key) {
      case "ArrowRight":
        nextImage()
        break
      case "ArrowLeft":
        prevImage()
        break
      case "Escape":
        closeModal()
        break
      case "+":
      case "=":
        zoomIn()
        break
      case "-":
        zoomOut()
        break
    }
  }

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"
      const modalElement = document.querySelector('[role="dialog"]') as HTMLElement
      if (modalElement) {
        modalElement.focus()
      }
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isModalOpen])

  return (
    <>
      {/* Main Gallery */}
      <div className="space-y-4">
        {/* Main Image */}
        <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
          <ClientImage
            src={images[selectedImage] || "/placeholder.svg"}
            alt={`${carName} - Main view`}
            fill
            className="object-cover cursor-zoom-in hover:scale-105 transition-transform duration-300"
            onClick={() => openModal(selectedImage)}
            fallbackText="Car Image"
            priority={true}
          />

          {/* Image Counter */}
          <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
            {selectedImage + 1} / {images.length}
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                onClick={prevImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                onClick={nextImage}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}

          {/* Zoom Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white"
            onClick={() => openModal(selectedImage)}
          >
            <ZoomIn className="h-5 w-5" />
          </Button>
        </div>

        {/* Thumbnail Grid - Fixed to prevent horizontal scroll */}
        {images.length > 1 && (
          <div className="w-full overflow-hidden">
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
              {images.slice(0, 8).map((image, index) => (
                <div
                  key={index}
                  className={`relative aspect-video rounded overflow-hidden cursor-pointer border-2 transition-all ${
                    selectedImage === index
                      ? "border-orange-500 ring-2 ring-orange-200"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <ClientImage
                    src={image || "/placeholder.svg"}
                    alt={`${carName} - View ${index + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-200"
                    fallbackText="Car View"
                  />
                </div>
              ))}
            </div>
            {images.length > 8 && (
              <div className="text-center mt-2">
                <span className="text-sm text-gray-500">+{images.length - 8} more photos</span>
              </div>
            )}
          </div>
        )}

        {/* View Labels - Simplified to prevent overflow */}
        <div className="flex flex-wrap gap-2 text-sm text-gray-600 max-w-full">
          {images.map((_, index) => (
            <span
              key={index}
              className={`px-2 py-1 rounded-full cursor-pointer transition-colors flex-shrink-0 ${
                selectedImage === index ? "bg-orange-100 text-orange-700" : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedImage(index)}
            >
              {getImageLabel(index)}
            </span>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          style={{ outline: "none" }}
        >
          {/* Modal Content */}
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white"
              onClick={(e) => {
                e.stopPropagation()
                closeModal()
              }}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Zoom Controls */}
            <div className="absolute top-4 left-4 z-20 flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="bg-black/50 hover:bg-black/70 text-white"
                onClick={(e) => {
                  e.stopPropagation()
                  zoomOut()
                }}
                disabled={zoomLevel <= 1}
              >
                <ZoomOut className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-black/50 hover:bg-black/70 text-white"
                onClick={(e) => {
                  e.stopPropagation()
                  zoomIn()
                }}
                disabled={zoomLevel >= 3}
              >
                <ZoomIn className="h-5 w-5" />
              </Button>
              <div className="bg-black/50 text-white px-3 py-2 rounded text-sm flex items-center">
                {Math.round(zoomLevel * 100)}%
              </div>
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white z-20"
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white z-20"
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </>
            )}

            {/* Main Modal Image Container */}
            <div
              ref={imageRef}
              className="relative w-full h-full flex items-center justify-center cursor-move"
              style={{
                transform: `scale(${zoomLevel}) translate(${imagePosition.x / zoomLevel}px, ${imagePosition.y / zoomLevel}px)`,
                transition: isDragging ? "none" : "transform 0.2s ease-out",
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onClick={(e) => e.stopPropagation()}
            >
              <ClientImage
                src={images[selectedImage] || "/placeholder.svg?height=800&width=1200&text=Car+Image"}
                alt={`${carName} - View ${selectedImage + 1}`}
                width={1200}
                height={800}
                className="object-contain max-w-[90vw] max-h-[90vh] select-none"
                fallbackText="Car Image"
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm z-20">
              {getImageLabel(selectedImage)} ({selectedImage + 1} of {images.length})
            </div>

            {/* Thumbnail Strip - No horizontal scroll */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
                <div className="flex gap-2 bg-black/50 p-2 rounded-lg max-w-[90vw] justify-center">
                  {images.slice(0, 10).map((image, index) => (
                    <div
                      key={index}
                      className={`relative w-12 h-8 rounded overflow-hidden cursor-pointer border-2 flex-shrink-0 ${
                        selectedImage === index ? "border-orange-500" : "border-transparent hover:border-white/50"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedImage(index)
                        resetZoom()
                      }}
                    >
                      <ClientImage
                        src={image || "/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                        fallbackText=""
                      />
                    </div>
                  ))}
                  {images.length > 10 && (
                    <div className="flex items-center px-2 text-white/70 text-xs">+{images.length - 10}</div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

function getImageLabel(index: number): string {
  const labels = [
    "Exterior Front",
    "Interior Dashboard",
    "Exterior Side",
    "Interior Seats",
    "Exterior Rear",
    "Engine Bay",
    "Trunk/Cargo",
    "Wheels & Tires",
  ]
  return labels[index] || `View ${index + 1}`
}
