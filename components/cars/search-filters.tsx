"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

const carMakes = [
  "Toyota",
  "Honda",
  "Ford",
  "Chevrolet",
  "Mitsubishi",
  "Nissan",
  "Hyundai",
  "Kia",
  "Mazda",
  "Suzuki",
  "Isuzu",
  "Subaru",
]

const bodyTypes = [
  "Sedan",
  "Hatchback",
  "SUV",
  "Pick-Up",
  "Van",
  "Crossover",
  "Coupe",
  "Wagon",
  "Luxury Sedan",
  "Luxury SUV",
]

const fuelTypes = ["Gasoline", "Diesel", "Hybrid", "Electric"]

export function SearchFilters() {
  const searchParams = useSearchParams()
  const [filters, setFilters] = useState({
    make: "",
    model: "",
    bodyType: "",
    fuelType: "",
    search: "",
    minPrice: 300000,
    maxPrice: 3000000,
    minYear: 2010,
    maxYear: 2024,
  })

  // Initialize filters from URL params
  useEffect(() => {
    const bodyType = searchParams.get("bodyType")
    const search = searchParams.get("search")

    if (bodyType || search) {
      setFilters((prev) => ({
        ...prev,
        bodyType: bodyType || "",
        search: search || "",
      }))
    }
  }, [searchParams])

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const applyFilters = () => {
    // For demo purposes, just show an alert with applied filters
    const activeFilters = Object.entries(filters)
      .filter(([key, value]) => {
        if (key === "minPrice" || key === "maxPrice" || key === "minYear" || key === "maxYear") {
          return true // Always include range filters
        }
        return value !== ""
      })
      .map(([key, value]) => `${key}: ${value}`)
      .join(", ")

    alert(`Filters applied: ${activeFilters || "Default ranges only"} (Demo mode)`)
  }

  const clearFilters = () => {
    setFilters({
      make: "",
      model: "",
      bodyType: "",
      fuelType: "",
      search: "",
      minPrice: 300000,
      maxPrice: 3000000,
      minYear: 2010,
      maxYear: 2024,
    })
  }

  // Format price in Philippine Peso
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <span className="mr-2">🔍</span>
          Filter Cars
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search Query */}
        {filters.search && (
          <div>
            <Label htmlFor="search">Search Query</Label>
            <Input
              id="search"
              placeholder="Search term"
              value={filters.search}
              onChange={(e) => handleFilterChange("search", e.target.value)}
              className="bg-orange-50 border-orange-200"
            />
          </div>
        )}

        {/* Body Type - Highlighted if from URL */}
        <div>
          <Label htmlFor="bodyType">Body Type</Label>
          <Select value={filters.bodyType} onValueChange={(value) => handleFilterChange("bodyType", value)}>
            <SelectTrigger className={filters.bodyType ? "bg-orange-50 border-orange-200" : ""}>
              <SelectValue placeholder="Select body type" />
            </SelectTrigger>
            <SelectContent>
              {bodyTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="make">Make</Label>
          <Select value={filters.make} onValueChange={(value) => handleFilterChange("make", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select make" />
            </SelectTrigger>
            <SelectContent>
              {carMakes.map((make) => (
                <SelectItem key={make} value={make}>
                  {make}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="model">Model</Label>
          <Input
            id="model"
            placeholder="Enter model"
            value={filters.model}
            onChange={(e) => handleFilterChange("model", e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="fuelType">Fuel Type</Label>
          <Select value={filters.fuelType} onValueChange={(value) => handleFilterChange("fuelType", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select fuel type" />
            </SelectTrigger>
            <SelectContent>
              {fuelTypes.map((fuel) => (
                <SelectItem key={fuel} value={fuel}>
                  {fuel}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Price Range</Label>
          <div className="px-2 py-4">
            <Slider
              value={[filters.minPrice, filters.maxPrice]}
              onValueChange={([min, max]) => {
                handleFilterChange("minPrice", min)
                handleFilterChange("maxPrice", max)
              }}
              max={3000000}
              min={300000}
              step={50000}
              className="w-full"
            />
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{formatPrice(filters.minPrice)}</span>
            <span>{formatPrice(filters.maxPrice)}</span>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div>
              <Label htmlFor="minPrice" className="text-xs">
                Min Price
              </Label>
              <Input
                id="minPrice"
                type="number"
                placeholder="Min"
                value={filters.minPrice}
                onChange={(e) => handleFilterChange("minPrice", Number.parseInt(e.target.value) || 300000)}
                className="text-xs"
              />
            </div>
            <div>
              <Label htmlFor="maxPrice" className="text-xs">
                Max Price
              </Label>
              <Input
                id="maxPrice"
                type="number"
                placeholder="Max"
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange("maxPrice", Number.parseInt(e.target.value) || 3000000)}
                className="text-xs"
              />
            </div>
          </div>
        </div>

        <div>
          <Label>Year Range</Label>
          <div className="px-2 py-4">
            <Slider
              value={[filters.minYear, filters.maxYear]}
              onValueChange={([min, max]) => {
                handleFilterChange("minYear", min)
                handleFilterChange("maxYear", max)
              }}
              max={2024}
              min={2010}
              step={1}
              className="w-full"
            />
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{filters.minYear}</span>
            <span>{filters.maxYear}</span>
          </div>
        </div>

        <div className="space-y-2">
          <Button onClick={applyFilters} className="w-full bg-orange-500 hover:bg-orange-600">
            Apply Filters
          </Button>
          <Button onClick={clearFilters} variant="outline" className="w-full bg-transparent">
            Clear All
          </Button>
        </div>

        {/* Quick Price Filters */}
        <div>
          <Label className="text-sm font-medium">Quick Price Filters</Label>
          <div className="grid grid-cols-1 gap-2 mt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                handleFilterChange("minPrice", 300000)
                handleFilterChange("maxPrice", 800000)
              }}
              className="text-xs justify-start"
            >
              Budget: ₱300K - ₱800K
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                handleFilterChange("minPrice", 800000)
                handleFilterChange("maxPrice", 1500000)
              }}
              className="text-xs justify-start"
            >
              Mid-Range: ₱800K - ₱1.5M
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                handleFilterChange("minPrice", 1500000)
                handleFilterChange("maxPrice", 3000000)
              }}
              className="text-xs justify-start"
            >
              Premium: ₱1.5M - ₱3M+
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
