import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Gauge, Fuel, Palette, Settings, MapPin } from "lucide-react"

interface Car {
  id: string
  make: string
  model: string
  year: number
  price: number
  mileage: number
  condition: string
  transmission: string
  fuelType: string
  bodyType: string
  color: string
  description?: string
  images: string[]
  location?: string
  seller: {
    name: string
    email: string
    phone?: string
  }
}

interface CarDetailsStaticProps {
  car: Car
}

export function CarDetailsStatic({ car }: CarDetailsStaticProps) {
  const mainImage = car.images[0] || "/placeholder.svg?height=400&width=600"

  return (
    <div className="space-y-6">
      {/* Image Gallery */}
      <div className="space-y-4">
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src={mainImage || "/placeholder.svg"}
            alt={`${car.year} ${car.make} ${car.model}`}
            fill
            className="object-cover"
          />
        </div>

        {car.images.length > 1 && (
          <div className="grid grid-cols-4 gap-2">
            {car.images.slice(1, 5).map((image, index) => (
              <div key={index} className="relative aspect-video rounded overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${car.make} ${car.model} - Image ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Car Info */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">
            {car.year} {car.make} {car.model}
          </h1>
          <Badge variant="secondary">{car.condition}</Badge>
        </div>

        <div className="text-3xl font-bold text-primary mb-6">${car.price.toLocaleString()}</div>

        {/* Specifications */}
        <Card>
          <CardHeader>
            <CardTitle>Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Year: {car.year}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Gauge className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Mileage: {car.mileage.toLocaleString()} mi</span>
              </div>
              <div className="flex items-center space-x-2">
                <Settings className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Transmission: {car.transmission}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Fuel className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Fuel: {car.fuelType}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Palette className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Color: {car.color}</span>
              </div>
              {car.location && (
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{car.location}</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Description */}
        {car.description && (
          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{car.description}</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
