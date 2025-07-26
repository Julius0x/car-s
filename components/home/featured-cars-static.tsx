import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CarCard } from "@/components/cars/car-card"

const sampleCars = [
  {
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
    images: [
      "/images/toyota-vios-front.jpg",
      "/images/car-interior-dashboard.jpg",
      "/images/honda-city-side.jpg",
      "/images/red-sedan.jpg",
      "/images/car-engine-bay.jpg",
      "/images/car-wheels-tires.jpg",
      "/images/car-handover.jpg",
      "/images/dealership-keys.jpg",
    ],
    location: "Manila, Philippines",
  },
  {
    id: "2",
    make: "Honda",
    model: "City",
    year: 2019,
    price: 680000,
    mileage: 28000,
    condition: "Used",
    transmission: "CVT",
    fuelType: "Gasoline",
    bodyType: "Sedan",
    color: "Silver",
    images: [
      "/images/honda-city-side.jpg",
      "/images/car-interior-mirror.jpg",
      "/images/car-engine-bay.jpg",
      "/images/toyota-vios-front.jpg",
      "/images/car-dashboard.jpg",
      "/images/classic-cars-showroom.jpg",
    ],
    location: "Quezon City, Philippines",
  },
  {
    id: "3",
    make: "Mitsubishi",
    model: "Montero Sport",
    year: 2021,
    price: 1850000,
    mileage: 15000,
    condition: "Used",
    transmission: "Automatic",
    fuelType: "Diesel",
    bodyType: "SUV",
    color: "Black",
    images: [
      "/images/suv-exterior.jpg",
      "/images/car-interior-dashboard.jpg",
      "/images/car-lot-aerial.jpg",
      "/images/pickup-truck.jpg",
      "/images/white-luxury-car.jpg",
      "/images/van-family.jpg",
    ],
    location: "Makati, Philippines",
  },
  {
    id: "4",
    make: "Ford",
    model: "Ranger",
    year: 2022,
    price: 1450000,
    mileage: 12000,
    condition: "Used",
    transmission: "Automatic",
    fuelType: "Diesel",
    bodyType: "Pick-Up",
    color: "Blue",
    images: [
      "/images/pickup-truck.jpg",
      "/images/car-wheels-tires.jpg",
      "/images/car-lot-aerial.jpg",
      "/images/dealership-keys.jpg",
      "/images/car-handover.jpg",
      "/images/classic-cars-showroom.jpg",
    ],
    location: "Cebu City, Philippines",
  },
  {
    id: "5",
    make: "Hyundai",
    model: "Tucson",
    year: 2020,
    price: 1250000,
    mileage: 25000,
    condition: "Used",
    transmission: "Automatic",
    fuelType: "Gasoline",
    bodyType: "SUV",
    color: "Red",
    images: [
      "/images/red-sedan.jpg",
      "/images/car-interior-dashboard.jpg",
      "/images/classic-cars-showroom.jpg",
      "/images/dealership-keys.jpg",
      "/images/suv-exterior.jpg",
      "/images/hatchback-blue.jpg",
    ],
    location: "Davao City, Philippines",
  },
  {
    id: "6",
    make: "Suzuki",
    model: "Swift",
    year: 2021,
    price: 650000,
    mileage: 18000,
    condition: "Used",
    transmission: "Manual",
    fuelType: "Gasoline",
    bodyType: "Hatchback",
    color: "Blue",
    images: [
      "/images/hatchback-blue.jpg",
      "/images/car-dashboard.jpg",
      "/images/car-lot-aerial.jpg",
      "/images/dealership-keys.jpg",
      "/images/toyota-vios-front.jpg",
      "/images/honda-city-side.jpg",
    ],
    location: "Iloilo City, Philippines",
  },
]

export function FeaturedCarsStatic() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Featured Pre-Owned Vehicles</h2>
        <p className="text-xl text-gray-600">
          Discover our handpicked selection of quality vehicles from trusted sellers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sampleCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full">
          <Link href="/cars">View All Vehicles</Link>
        </Button>
      </div>
    </section>
  )
}
