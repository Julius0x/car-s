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
      "/placeholder.svg?height=300&width=400&text=Toyota+Vios+2020",
      "/placeholder.svg?height=300&width=400&text=Interior+Dashboard",
      "/placeholder.svg?height=300&width=400&text=Side+View",
      "/placeholder.svg?height=300&width=400&text=Rear+View",
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
      "/placeholder.svg?height=300&width=400&text=Honda+City+2019",
      "/placeholder.svg?height=300&width=400&text=Interior+View",
      "/placeholder.svg?height=300&width=400&text=Engine+Bay",
      "/placeholder.svg?height=300&width=400&text=Trunk+Space",
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
      "/placeholder.svg?height=300&width=400&text=Mitsubishi+Montero+Sport",
      "/placeholder.svg?height=300&width=400&text=SUV+Interior",
      "/placeholder.svg?height=300&width=400&text=Off+Road+Capable",
      "/placeholder.svg?height=300&width=400&text=Cargo+Space",
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
      "/placeholder.svg?height=300&width=400&text=Ford+Ranger+2022",
      "/placeholder.svg?height=300&width=400&text=Pickup+Truck+Bed",
      "/placeholder.svg?height=300&width=400&text=4x4+Capability",
      "/placeholder.svg?height=300&width=400&text=Towing+Power",
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
      "/placeholder.svg?height=300&width=400&text=Hyundai+Tucson+2020",
      "/placeholder.svg?height=300&width=400&text=Modern+Interior",
      "/placeholder.svg?height=300&width=400&text=Safety+Features",
      "/placeholder.svg?height=300&width=400&text=Fuel+Efficient",
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
      "/placeholder.svg?height=300&width=400&text=Suzuki+Swift+2021",
      "/placeholder.svg?height=300&width=400&text=Compact+Design",
      "/placeholder.svg?height=300&width=400&text=City+Driving",
      "/placeholder.svg?height=300&width=400&text=Economical",
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
      "/placeholder.svg?height=300&width=400&text=Nissan+Navara+2020",
      "/placeholder.svg?height=300&width=400&text=Rugged+Design",
      "/placeholder.svg?height=300&width=400&text=Work+Ready",
      "/placeholder.svg?height=300&width=400&text=Adventure+Ready",
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
      "/placeholder.svg?height=300&width=400&text=Isuzu+mu-X+2019",
      "/placeholder.svg?height=300&width=400&text=7+Seater+SUV",
      "/placeholder.svg?height=300&width=400&text=Family+Vehicle",
      "/placeholder.svg?height=300&width=400&text=Reliable+Engine",
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
      "/placeholder.svg?height=300&width=400&text=Mazda+CX-5+2021",
      "/placeholder.svg?height=300&width=400&text=Premium+Interior",
      "/placeholder.svg?height=300&width=400&text=SKYACTIV+Technology",
      "/placeholder.svg?height=300&width=400&text=Sporty+Design",
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
      "/placeholder.svg?height=300&width=400&text=Toyota+Innova+2020",
      "/placeholder.svg?height=300&width=400&text=8+Seater+MPV",
      "/placeholder.svg?height=300&width=400&text=Family+Van",
      "/placeholder.svg?height=300&width=400&text=Spacious+Interior",
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
      "/placeholder.svg?height=300&width=400&text=Honda+CR-V+2019",
      "/placeholder.svg?height=300&width=400&text=Crossover+SUV",
      "/placeholder.svg?height=300&width=400&text=Honda+SENSING",
      "/placeholder.svg?height=300&width=400&text=Versatile+Space",
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
      "/placeholder.svg?height=300&width=400&text=Toyota+Fortuner+2021",
      "/placeholder.svg?height=300&width=400&text=Premium+SUV",
      "/placeholder.svg?height=300&width=400&text=Off+Road+Beast",
      "/placeholder.svg?height=300&width=400&text=Luxury+Interior",
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
      "/placeholder.svg?height=300&width=400&text=Toyota+Camry+2020",
      "/placeholder.svg?height=300&width=400&text=Executive+Sedan",
      "/placeholder.svg?height=300&width=400&text=Hybrid+Available",
      "/placeholder.svg?height=300&width=400&text=Premium+Features",
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
      "/placeholder.svg?height=300&width=400&text=Honda+Civic+2019",
      "/placeholder.svg?height=300&width=400&text=Sport+Sedan",
      "/placeholder.svg?height=300&width=400&text=Turbo+Engine",
      "/placeholder.svg?height=300&width=400&text=Modern+Tech",
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
      "/placeholder.svg?height=300&width=400&text=Subaru+Forester+2020",
      "/placeholder.svg?height=300&width=400&text=All+Wheel+Drive",
      "/placeholder.svg?height=300&width=400&text=EyeSight+Safety",
      "/placeholder.svg?height=300&width=400&text=Adventure+Ready",
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
