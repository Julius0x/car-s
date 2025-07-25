import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Gauge, Fuel, Settings, MapPin, Shield, Award, CheckCircle } from "lucide-react"
import { ImageGallery } from "./image-gallery"

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
  // Format price in Philippine Peso
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const features = [
    "Air Conditioning",
    "Power Steering",
    "Central Locking",
    "Electric Windows",
    "ABS Brakes",
    "Airbags",
    "Audio System",
    "Bluetooth Connectivity",
  ]

  return (
    <div className="space-y-8">
      {/* Regular Image Gallery Only */}
      <ImageGallery images={car.images} carName={`${car.year} ${car.make} ${car.model}`} />

      {/* Car Info Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-4xl font-bold text-gray-800">
            {car.year} {car.make} {car.model}
          </h1>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            {car.condition}
          </Badge>
        </div>

        <div className="text-4xl font-bold text-orange-600 mb-6">{formatPrice(car.price)}</div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Calendar className="h-6 w-6 mx-auto mb-2 text-orange-500" />
            <div className="font-semibold">{car.year}</div>
            <div className="text-sm text-gray-600">Year</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Gauge className="h-6 w-6 mx-auto mb-2 text-orange-500" />
            <div className="font-semibold">{car.mileage.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Kilometers</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Fuel className="h-6 w-6 mx-auto mb-2 text-orange-500" />
            <div className="font-semibold">{car.fuelType}</div>
            <div className="text-sm text-gray-600">Fuel Type</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Settings className="h-6 w-6 mx-auto mb-2 text-orange-500" />
            <div className="font-semibold">{car.transmission}</div>
            <div className="text-sm text-gray-600">Transmission</div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center text-xl">
            <Settings className="mr-2 h-5 w-5 text-orange-500" />
            Vehicle Specifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Make</span>
                <span className="font-semibold">{car.make}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Model</span>
                <span className="font-semibold">{car.model}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Year</span>
                <span className="font-semibold">{car.year}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Body Type</span>
                <span className="font-semibold">{car.bodyType}</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Mileage</span>
                <span className="font-semibold">{car.mileage.toLocaleString()} km</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Transmission</span>
                <span className="font-semibold">{car.transmission}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Fuel Type</span>
                <span className="font-semibold">{car.fuelType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Color</span>
                <span className="font-semibold">{car.color}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center text-xl">
            <Award className="mr-2 h-5 w-5 text-orange-500" />
            Features & Equipment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Description */}
      {car.description && (
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Shield className="mr-2 h-5 w-5 text-orange-500" />
              Vehicle Description
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">{car.description}</p>
          </CardContent>
        </Card>
      )}

      {/* Location */}
      {car.location && (
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <MapPin className="mr-2 h-5 w-5 text-orange-500" />
              Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">{car.location}</p>
            <p className="text-sm text-gray-500 mt-2">
              Vehicle is available for viewing at this location. Contact seller to schedule an appointment.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
