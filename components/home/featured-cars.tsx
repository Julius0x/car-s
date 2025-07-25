import { CarCard } from "@/components/cars/car-card"
import { getFeaturedCars } from "@/lib/cars"

export async function FeaturedCars() {
  const cars = await getFeaturedCars()

  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured Cars</h2>
        <p className="text-muted-foreground">Discover our handpicked selection of quality vehicles</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  )
}
