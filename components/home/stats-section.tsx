import { Card, CardContent } from "@/components/ui/card"
import { Car, Users, MapPin, Star, Shield, Award } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: Car,
      value: "15,000+",
      label: "Pre-Owned Vehicles",
      description: "Quality vehicles from trusted sellers",
    },
    {
      icon: Users,
      value: "75,000+",
      label: "Happy Customers",
      description: "Satisfied buyers and sellers nationwide",
    },
    {
      icon: MapPin,
      value: "All Philippines",
      label: "Nationwide Coverage",
      description: "From Luzon to Mindanao",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Customer Rating",
      description: "Based on 15,000+ reviews",
    },
  ]

  const features = [
    {
      icon: Shield,
      title: "Verified Listings",
      description: "All vehicles are inspected and verified for quality and authenticity",
    },
    {
      icon: Award,
      title: "Expert Support",
      description: "Our automotive experts guide you through every step of your journey",
    },
  ]

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Why Choose Dryve?</h2>
          <p className="text-xl text-gray-600">The Philippines' trusted pre-owned vehicle marketplace</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <stat.icon className="h-16 w-16 mx-auto mb-6 text-orange-500" />
                <div className="text-4xl font-bold mb-3 text-gray-800">{stat.value}</div>
                <div className="font-semibold mb-2 text-gray-700">{stat.label}</div>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-8 flex items-start space-x-4">
                <feature.icon className="h-12 w-12 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
