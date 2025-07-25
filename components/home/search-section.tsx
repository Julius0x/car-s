"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"

const carMakes = [
  "Toyota",
  "Honda",
  "Ford",
  "Chevrolet",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Volkswagen",
  "Nissan",
  "Hyundai",
  "Kia",
  "Mazda",
]

export function SearchSection() {
  const router = useRouter()
  const [searchData, setSearchData] = useState({
    make: "",
    model: "",
    maxPrice: "",
  })

  const handleSearch = () => {
    const params = new URLSearchParams()

    if (searchData.make) params.set("make", searchData.make)
    if (searchData.model) params.set("model", searchData.model)
    if (searchData.maxPrice) params.set("maxPrice", searchData.maxPrice)

    router.push(`/cars?${params.toString()}`)
  }

  return (
    <section className="container mx-auto px-4">
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Find Your Perfect Car</h2>
            <p className="text-muted-foreground">Search through thousands of vehicles</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select
              value={searchData.make}
              onValueChange={(value) => setSearchData((prev) => ({ ...prev, make: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Make" />
              </SelectTrigger>
              <SelectContent>
                {carMakes.map((make) => (
                  <SelectItem key={make} value={make}>
                    {make}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Input
              placeholder="Model"
              value={searchData.model}
              onChange={(e) => setSearchData((prev) => ({ ...prev, model: e.target.value }))}
            />

            <Input
              placeholder="Max Price"
              type="number"
              value={searchData.maxPrice}
              onChange={(e) => setSearchData((prev) => ({ ...prev, maxPrice: e.target.value }))}
            />

            <Button onClick={handleSearch} className="w-full">
              <Search className="mr-2 h-4 w-4" />
              Search Cars
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
