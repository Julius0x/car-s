import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"

const bodyTypes = ["Hatchback", "Sedan", "SUV", "Van", "Luxury Sedan", "Luxury SUV", "Pick-Up"]

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-orange-400 via-orange-500 to-blue-600 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Search Panel */}
          <div className="space-y-6">
            <Card className="bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Search className="h-5 w-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Looking for..."
                    className="w-full border-none outline-none text-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Body Types</h3>
                  {bodyTypes.map((type) => (
                    <button
                      key={type}
                      className="block w-full text-left py-2 px-3 text-gray-700 hover:bg-gray-100 rounded transition-colors"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right side - Hero Content */}
          <div className="text-center lg:text-left space-y-8">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                It's Easy.
                <br />
                <span className="text-blue-200">Just Drive!</span>
              </h1>
              <p className="text-xl lg:text-2xl opacity-90 mb-8">A partner for your pre-owned vehicle journey.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-white/20 hover:bg-white/30 border-2 border-white/30 backdrop-blur-sm text-white font-semibold px-8 py-3 rounded-full"
              >
                <Link href="/cars">Buy A Car</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-semibold px-8 py-3 rounded-full"
              >
                <Link href="/sell">Sell Your Car</Link>
              </Button>
            </div>

            {/* Car Image */}
            <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 opacity-20">
              <img src="/placeholder.svg?height=400&width=600&text=White+SUV" alt="White SUV" className="w-96 h-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Support Banner */}
      <div className="bg-blue-700 text-center py-2 text-sm">
        Need Help? Call our support team at <span className="font-semibold">(917) 547 8835</span>
      </div>
    </section>
  )
}
