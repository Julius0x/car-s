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
    "/images/toyota-vios-front.jpg",
    "/images/car-interior-dashboard.jpg",
    "/images/honda-city-side.jpg", 
    "/images/red-sedan.jpg", 
    "/images/car-engine-bay.jpg",
    "/images/car-wheels-tires.jpg",
    "/images/classic-cars-showroom.jpg",
    "/images/dealership-keys.jpg",
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
