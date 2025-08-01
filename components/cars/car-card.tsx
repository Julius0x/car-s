import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Gauge, Fuel } from "lucide-react"
import { ClientImage } from "@/components/ui/client-image"

interface Car {
  id: string
  make: string
  model: string
  year: number
  price: number
  mileage: number
  images: string[]
  location?: string
  condition: string
  transmission: string
  fuelType: string
}

interface CarCardProps {
  car: Car
}

export function CarCard({ car }: CarCardProps) {
  // Use a placeholder image if no images are provided or construct the image path
  const mainImage = car.images && car.images.length > 0 
    ? car.images[0] // Assuming images array contains filenames like '/images/red-sedan.jpg'
    : "/placeholder.svg?height=200&width=300";

  console.log("Generated image path:", mainImage); // Log the generated path

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
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
      <Link href={`/cars/${car.id}`}>
        <div className="relative aspect-video min-h-48">
          <ClientImage
            src={mainImage}
            alt={`${car.year} ${car.make} ${car.model}`}
            fill
            className="object-cover"
            fallbackText="Car Image"
            priority={true}
          />
          <Badge className="absolute top-3 right-3 bg-orange-500 hover:bg-orange-600 text-white">{car.condition}</Badge>
        </div>

        <CardContent className="p-6">
          <h3 className="font-bold text-xl mb-3 text-gray-800">
            {car.year} {car.make} {car.model}
          </h3>

          <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-orange-500" />
              {car.year}
            </div>
            <div className="flex items-center">
              <Gauge className="h-4 w-4 mr-2 text-orange-500" />
              {car.mileage.toLocaleString()} km
            </div>
            <div className="flex items-center">
              <Fuel className="h-4 w-4 mr-2 text-orange-500" />
              {car.fuelType}
            </div>
            <div className="flex items-center">
              <span className="text-orange-500 mr-2">⚙</span>
              {car.transmission}
            </div>
          </div>

          {car.location && (
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <MapPin className="h-4 w-4 mr-2 text-orange-500" />
              {car.location}
            </div>
          )}
        </CardContent>

        <CardFooter className="p-6 pt-0">
          <div className="text-2xl font-bold text-orange-600">{formatPrice(car.price)}</div>
        </CardFooter>
      </Link>
    </Card>
  )
}
