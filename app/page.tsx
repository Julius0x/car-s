import { HeroSection } from "@/components/home/hero-section"
import { SearchSection } from "@/components/home/search-section"
import { StatsSection } from "@/components/home/stats-section"
import { FeaturedCarsStatic } from "@/components/home/featured-cars-static"

export default function HomePage() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <SearchSection />
      <FeaturedCarsStatic />
      <StatsSection />
    </div>
  )
}
