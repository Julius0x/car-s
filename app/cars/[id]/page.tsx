import { CarDetailsStatic } from "@/components/cars/car-details-static"
import { ContactFormStatic } from "@/components/cars/contact-form-static"

const sampleCar = {
  id: "1",
  make: "Toyota",
  model: "Vios",
  year: 2020,
  price: 750000,
  mileage: 35000,
  condition: "Used",
  transmission: "Automatic",
  fuelType: "Gasoline",
  bodyType: "Sedan",
  color: "White",
  description:
    "Well-maintained Toyota Vios with excellent fuel economy. This reliable sedan has been garage-kept and serviced regularly at Casa Toyota. Perfect for daily commuting or family trips. Complete with service records and original owner's manual. Features include power steering, air conditioning, central locking, and electric windows. No accident history, single owner, all maintenance records available.",
  images: [
    "/placeholder.svg?height=400&width=600&text=Toyota+Vios+Front+View",
    "/placeholder.svg?height=400&width=600&text=Interior+Dashboard",
    "/placeholder.svg?height=400&width=600&text=Side+Profile",
    "/placeholder.svg?height=400&width=600&text=Interior+Seats",
    "/placeholder.svg?height=400&width=600&text=Rear+View",
    "/placeholder.svg?height=400&width=600&text=Engine+Bay",
    "/placeholder.svg?height=400&width=600&text=Trunk+Space",
    "/placeholder.svg?height=400&width=600&text=Wheels+and+Tires",
  ],
  location: "Manila, Philippines",
  seller: {
    name: "Juan Dela Cruz",
    email: "juan@example.com",
    phone: "+639175478835",
  },
}

export default function CarPage({ params }: { params: { id: string } }) {
  // For demo purposes, always show the sample car
  const car = sampleCar

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CarDetailsStatic car={car} />
        </div>
        <div className="space-y-6">
          <ContactFormStatic carId={car.id} sellerId="seller1" />
        </div>
      </div>
    </div>
  )
}
