"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Car } from "lucide-react"

const bodyTypes = [
  { name: "Hatchback", count: "150+ cars", image: "🚗" },
  { name: "Sedan", count: "200+ cars", image: "🚙" },
  { name: "SUV", count: "180+ cars", image: "🚐" },
  { name: "Van", count: "80+ cars", image: "🚌" },
  { name: "Luxury Sedan", count: "45+ cars", image: "🏎️" },
  { name: "Luxury SUV", count: "35+ cars", image: "🚗" },
  { name: "Pick-Up", count: "120+ cars", image: "🛻" },
]

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredTypes, setFilteredTypes] = useState(bodyTypes)
  const router = useRouter()

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim() === "") {
      setFilteredTypes(bodyTypes)
    } else {
      const filtered = bodyTypes.filter((type) => type.name.toLowerCase().includes(query.toLowerCase()))
      setFilteredTypes(filtered)
    }
  }

  const handleTypeClick = (typeName: string) => {
    // Navigate to cars page with body type filter
    const params = new URLSearchParams()
    params.set("bodyType", typeName)
    router.push(`/cars?${params.toString()}`)
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      const params = new URLSearchParams()
      params.set("search", searchQuery.trim())
      router.push(`/cars?${params.toString()}`)
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-orange-400 via-orange-500 to-blue-600 text-white overflow-hidden min-h-[80vh]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-6xl">🚗</div>
        <div className="absolute top-40 right-20 text-4xl">🚙</div>
        <div className="absolute bottom-40 left-20 text-5xl">🚐</div>
        <div className="absolute bottom-20 right-10 text-3xl">🛻</div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Search Panel */}
          <div className="space-y-6">
            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
              <CardContent className="p-6">
                {/* Search Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Find Your Perfect Car</h3>
                  <p className="text-gray-600">Search by make, model, or body type</p>
                </div>

                {/* Search Input */}
                <form onSubmit={handleSearchSubmit} className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search for Toyota, Honda, SUV, Sedan..."
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-gray-700 text-lg"
                    />
                    {searchQuery && (
                      <Button
                        type="submit"
                        size="sm"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600"
                      >
                        Search
                      </Button>
                    )}
                  </div>
                </form>

                {/* Body Types */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide flex items-center">
                    <Car className="h-4 w-4 mr-2" />
                    Popular Body Types
                  </h4>

                  {filteredTypes.length > 0 ? (
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {filteredTypes.map((type) => (
                        <button
                          key={type.name}
                          onClick={() => handleTypeClick(type.name)}
                          className="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-lg transition-all duration-200 group border border-transparent hover:border-orange-200"
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl group-hover:scale-110 transition-transform">{type.image}</span>
                            <div className="text-left">
                              <div className="font-medium">{type.name}</div>
                              <div className="text-sm text-gray-500">{type.count}</div>
                            </div>
                          </div>
                          <div className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">→</div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Car className="h-12 w-12 mx-auto mb-3 opacity-50" />
                      <p>No car types found matching "{searchQuery}"</p>
                      <p className="text-sm mt-1">Try searching for "SUV", "Sedan", or "Hatchback"</p>
                    </div>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      asChild
                      variant="outline"
                      className="border-orange-200 text-orange-700 hover:bg-orange-50 bg-transparent"
                    >
                      <Link href="/cars">Browse All Cars</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
                    >
                      <Link href="/sell">Sell Your Car</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right side - Hero Content */}
          <div className="text-center lg:text-left space-y-8">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                It's Easy.
                <br />
                <span className="text-blue-200 bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                  Just Dryve!
                </span>
              </h1>
              <p className="text-xl lg:text-2xl opacity-90 mb-8 leading-relaxed">
                Your trusted partner for pre-owned vehicle journey.
                <br />
                <span className="text-lg opacity-75">Find quality cars from verified sellers nationwide.</span>
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold">15K+</div>
                <div className="text-sm opacity-75">Cars Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">75K+</div>
                <div className="text-sm opacity-75">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">4.9★</div>
                <div className="text-sm opacity-75">Customer Rating</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-white/20 hover:bg-white/30 border-2 border-white/30 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/cars">
                  <Car className="mr-2 h-5 w-5" />
                  Buy A Car
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-semibold px-8 py-4 rounded-full text-lg backdrop-blur-sm hover:shadow-lg transition-all duration-300"
              >
                <Link href="/sell">Sell Your Car</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm opacity-75 mt-8">
              <div className="flex items-center">
                <span className="mr-1">🛡️</span>
                Verified Sellers
              </div>
              <div className="flex items-center">
                <span className="mr-1">📋</span>
                Complete Documentation
              </div>
              <div className="flex items-center">
                <span className="mr-1">🔧</span>
                Quality Inspected
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support Banner */}
      <div className="bg-blue-700 text-center py-3 text-sm border-t border-blue-600">
        <div className="container mx-auto px-4">
          Need Help? Call our support team at{" "}
          <a href="tel:+639175478835" className="font-semibold hover:underline">
            (917) 547 8835
          </a>{" "}
          or{" "}
          <Link href="/contact" className="font-semibold hover:underline">
            contact us online
          </Link>
        </div>
      </div>
    </section>
  )
}
