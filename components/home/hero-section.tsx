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
    <section className="relative bg-gradient-to-br from-orange-400 via-orange-500 to-blue-600 text-white overflow-hidden min-h-[70vh] flex items-center">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated car elements - adding more cars with lower opacity */}
        <div
          className="absolute top-16 left-8 text-5xl opacity-10 animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        >
          🚗
        </div>
        <div
          className="absolute top-32 right-16 text-4xl opacity-10 animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        >
          🚙
        </div>
        <div
          className="absolute bottom-32 left-16 text-6xl opacity-15 animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "3.5s" }}
        >
          🚐
        </div>
        <div
          className="absolute bottom-16 right-8 text-3xl opacity-10 animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "4.5s" }}
        >
          🛻
        </div>
        <div className="absolute top-1/2 left-1/4 text-4xl opacity-5 animate-pulse" style={{ animationDuration: "2s" }}>
          🏎️
        </div>
        <div
          className="absolute top-1/3 right-1/3 text-5xl opacity-10 animate-pulse"
          style={{ animationDuration: "2.5s" }}
        >
          🚌
        </div>

        {/* Adding more car elements to fill the background */}
        <div
          className="absolute top-1/4 left-1/3 text-5xl opacity-8 animate-bounce"
          style={{ animationDelay: "1.5s", animationDuration: "3.2s" }}
        >
          🚗
        </div>
        <div
          className="absolute bottom-1/4 right-1/4 text-4xl opacity-7 animate-bounce"
          style={{ animationDelay: "0.7s", animationDuration: "3.8s" }}
        >
          🚙
        </div>
        <div
          className="absolute top-2/3 left-2/3 text-5xl opacity-9 animate-pulse"
          style={{ animationDuration: "2.7s" }}
        >
          🚘
        </div>
        <div
          className="absolute top-10 right-1/4 text-6xl opacity-6 animate-bounce"
          style={{ animationDelay: "2.2s", animationDuration: "4.2s" }}
        >
          🚕
        </div>
        <div
          className="absolute bottom-20 left-1/2 text-4xl opacity-8 animate-pulse"
          style={{ animationDuration: "3.1s" }}
        >
          🚓
        </div>
        <div
          className="absolute top-1/2 right-20 text-5xl opacity-7 animate-bounce"
          style={{ animationDelay: "1.8s", animationDuration: "3.7s" }}
        >
          🚑
        </div>

        {/* Geometric background elements with reduced opacity */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/3 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-300/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-300/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Search Panel */}
          <div className="space-y-6">
            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 h-[450px] lg:h-[500px]">
              <CardContent className="p-6 h-full flex flex-col">
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

                {/* Body Types - Fixed height container */}
                <div className="flex-1 flex flex-col min-h-0">
                  <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide flex items-center mb-3">
                    <Car className="h-4 w-4 mr-2" />
                    Popular Body Types
                  </h4>

                  <div className="flex-1 min-h-0">
                    {filteredTypes.length > 0 ? (
                      <div className="h-full overflow-y-auto space-y-2 pr-2">
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
                            <div className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
                              →
                            </div>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="h-full flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <Car className="h-12 w-12 mx-auto mb-3 opacity-50" />
                          <p>No car types found matching "{searchQuery}"</p>
                          <p className="text-sm mt-1">Try searching for "SUV", "Sedan", or "Hatchback"</p>
                        </div>
                      </div>
                    )}
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
    </section>
  )
}
