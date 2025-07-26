import { CarCard } from "./car-card"

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
    ],
    location: "Iloilo City, Philippines",
  },
  {
    id: "7",
    make: "Nissan",
    model: "Navara",
    year: 2020,
    price: 1320000,
    mileage: 22000,
    condition: "Used",
    transmission: "Automatic",
    fuelType: "Diesel",
    bodyType: "Pick-Up",
    color: "Gray",
    images: [
      "/images/pickup-truck.jpg", 
      "/images/car-lot-aerial.jpg", 
      "/images/dealership-keys.jpg",
      "/images/car-handover.jpg",
    ],
    location: "Baguio City, Philippines",
  },
  {
    id: "8",
    make: "Isuzu",
    model: "mu-X",
    year: 2019,
    price: 1180000,
    mileage: 31000,
    condition: "Used",
    transmission: "Automatic",
    fuelType: "Diesel",
    bodyType: "SUV",
    color: "White",
    images: [
      "/images/suv-exterior.jpg", 
      "/images/van-family.jpg", 
      "/images/car-engine-bay.jpg",
      "/images/car-handover.jpg",
    ],
    location: "Cagayan de Oro, Philippines",
  },
  {
    id: "9",
    make: "Mazda",
    model: "CX-5",
    year: 2021,
    price: 1680000,
    mileage: 16000,
    condition: "Used",
    transmission: "Automatic",
    fuelType: "Gasoline",
    bodyType: "SUV",
    color: "Red",
    images: [
      "/images/suv-exterior.jpg", 
      "/images/car-interior-dashboard.jpg", 
      "/images/white-luxury-car.jpg",
      "/images/red-sedan.jpg", 
    ],
    location: "Bacolod City, Philippines",
  },
  {
    id: "10",
    make: "Toyota",
    model: "Innova",
    year: 2020,
    price: 1150000,
    mileage: 28000,
    condition: "Used",
    transmission: "Manual",
    fuelType: "Diesel",
    bodyType: "Van",
    color: "Silver",
    images: [
      "/images/van-family.jpg",
      "/images/car-interior-dashboard.jpg",
      "/images/dealership-keys.jpg",
      "/images/car-handover.jpg",
    ],
    location: "Taguig City, Philippines",
  },
  {
    id: "11",
    make: "Honda",
    model: "CR-V",
    year: 2019,
    price: 1380000,
    mileage: 24000,
    condition: "Used",
    transmission: "CVT",
    fuelType: "Gasoline",
    bodyType: "SUV",
    color: "White",
    images: [
      "/images/suv-exterior.jpg", 
      "/images/car-dashboard.jpg",
      "/images/car-lot-aerial.jpg",
      "/images/dealership-keys.jpg",
    ],
    location: "Pasig City, Philippines",
  },
  {
    id: "12",
    make: "Toyota",
    model: "Fortuner",
    year: 2021,
    price: 1950000,
    mileage: 18000,
    condition: "Used",
    transmission: "Automatic",
    fuelType: "Diesel",
    bodyType: "SUV",
    color: "Black",
    images: [
      "/images/suv-exterior.jpg", 
      "/images/car-lot-aerial.jpg", 
      "/images/car-interior-dashboard.jpg", 
      "/images/car-handover.jpg",
    ],
    location: "Antipolo City, Philippines",
  },
  {
    id: "13",
    make: "Toyota",
    model: "Camry",
    year: 2020,
    price: 1750000,
    mileage: 20000,
    condition: "Used",
    transmission: "Automatic",
    fuelType: "Gasoline",
    bodyType: "Sedan",
    color: "Pearl White",
    images: [
      "/images/white-luxury-car.jpg",
      "/images/car-interior-dashboard.jpg", 
      "/images/classic-cars-showroom.jpg",
      "/images/dealership-keys.jpg",
    ],
    location: "Ortigas, Philippines",
  },
  {
    id: "14",
    make: "Honda",
    model: "Civic",
    year: 2019,
    price: 1050000,
    mileage: 32000,
    condition: "Used",
    transmission: "CVT",
    fuelType: "Gasoline",
    bodyType: "Sedan",
    color: "Blue",
    images: [
      "/images/hatchback-blue.jpg", 
      "/images/red-sedan.jpg", 
      "/images/car-engine-bay.jpg", 
      "/images/car-interior-dashboard.jpg", 
    ],
    location: "Las Piñas, Philippines",
  },
  {
    id: "15",
    make: "Subaru",
    model: "Forester",
    year: 2020,
    price: 1580000,
    mileage: 26000,
    condition: "Used",
    transmission: "CVT",
    fuelType: "Gasoline",
    bodyType: "SUV",
    color: "Forest Green",
    images: [
      "/images/suv-exterior.jpg", 
      "/images/car-lot-aerial.jpg", 
      "/images/dealership-keys.jpg",
      "/images/car-handover.jpg",
    ],
    location: "Alabang, Philippines",
  },
]

export function CarGridStatic() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-muted-foreground">Showing {sampleCars.length} cars</p>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <select className="text-sm border rounded px-2 py-1">
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Year: Newest First</option>
            <option>Year: Oldest First</option>
            <option>Mileage: Low to High</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-8">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium">
          Load More Cars
        </button>
      </div>
    </div>
  )
}
