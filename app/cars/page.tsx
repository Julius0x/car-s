import { CarGridStatic } from "@/components/cars/car-grid-static"
import { SearchFilters } from "@/components/cars/search-filters"

export default function CarsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-1/4">
          <SearchFilters />
        </aside>
        <main className="lg:w-3/4">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Browse Cars</h1>
            <p className="text-muted-foreground">Find your perfect vehicle</p>
          </div>
          <CarGridStatic />
        </main>
      </div>
    </div>
  )
}
