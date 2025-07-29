"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Rotate3dIcon as RotateIcon } from "lucide-react"

interface EnhancedImageGalleryProps {
  images: string[]
  images360?: string[]
  interiorImages360?: string[]
  carName: string
}

export function EnhancedImageGallery({
  images,
  images360 = [],
  interiorImages360 = [],
  carName,
}: EnhancedImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [activeTab, setActiveTab] = useState("photos")

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length)
    setZoomLevel(1)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length)
    setZoomLevel(1)
  }

  const openModal = (index: number) => {
    setSelectedImage(index)
    setIsModalOpen(true)
    setZoomLevel(1)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setZoomLevel(1)
  }

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3))
  }

  const zoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 1))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") nextImage()
    if (e.key === "ArrowLeft") prevImage()
    if (e.key === "Escape") closeModal()
  }

  return (
    <>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="photos">Photo Gallery</TabsTrigger>
          <TabsTrigger value="360tour" disabled={images360.length === 0}>
            <RotateIcon className="h-4 w-4 mr-2" />
            360° Tour
          </TabsTrigger>
        </TabsList>

        <TabsContent value="photos" className="space-y-4 mt-6">
          {/* Regular Photo Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={images[selectedImage] || "/placeholder.svg?height=400&width=600&text=Car+Image"}
                alt={`${carName} - Main view`}
                fill
                className="object-cover cursor-zoom-in hover:scale-105 transition-transform duration-300"
                onClick={() => openModal(selectedImage)}
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.svg?height=400&width=600&text=Car+Image"
                }}
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

            {/* Thumbnail Grid */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`relative aspect-video rounded overflow-hidden cursor-pointer border-2 transition-all ${
                      selectedImage === index
                        ? "border-orange-500 ring-2 ring-orange-200"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={image || "/placeholder.svg?height=150&width=200&text=Car+View"}
                      alt={`${carName} - View ${index + 1}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-200"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg?height=150&width=200&text=Car+View"
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>

      {/* Modal Overlay for regular photos */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Modal Content */}
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
              onClick={closeModal}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Zoom Controls */}
            <div className="absolute top-4 left-4 z-10 flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="bg-black/50 hover:bg-black/70 text-white"
                onClick={zoomOut}
                disabled={zoomLevel <= 1}
              >
                <ZoomOut className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-black/50 hover:bg-black/70 text-white"
                onClick={zoomIn}
                disabled={zoomLevel >= 3}
              >
                <ZoomIn className="h-5 w-5" />
              </Button>
              <div className="bg-black/50 text-white px-3 py-2 rounded text-sm">{Math.round(zoomLevel * 100)}%</div>
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white z-10"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white z-10"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </>
            )}

            {/* Main Modal Image */}
            <div
              className="relative max-w-full max-h-full overflow-hidden cursor-move"
              style={{
                transform: `scale(${zoomLevel})`,
                transition: "transform 0.2s ease-in-out",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedImage] || "/placeholder.svg?height=800&width=1200&text=Car+Image"}
                alt={`${carName} - View ${selectedImage + 1}`}
                width={1200}
                height={800}
                className="object-contain max-w-full max-h-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.svg?height=800&width=1200&text=Car+Image"
                }}
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
              Image {selectedImage + 1} of {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
