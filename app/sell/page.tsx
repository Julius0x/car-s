import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car, Camera, FileText, DollarSign, Users, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "List Your Car",
    description: "Create a detailed listing with photos and specifications",
  },
  {
    icon: Camera,
    title: "Professional Photos",
    description: "We can arrange professional photography for your vehicle",
  },
  {
    icon: Users,
    title: "Connect with Buyers",
    description: "Serious buyers will contact you directly through our platform",
  },
  {
    icon: DollarSign,
    title: "Complete the Sale",
    description: "We'll help you with paperwork and transfer processes",
  },
]

const benefits = [
  "Free vehicle listing",
  "Professional photography service",
  "Verified buyer connections",
  "Complete paperwork assistance",
  "LTO transfer support",
  "Market value assessment",
]

export default function SellPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Sell Your Car on Dryve</h1>
          <p className="text-xl text-gray-600 mb-8">
            Connect with serious buyers and get the best value for your vehicle
          </p>
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg p-8">
            <div className="flex items-center justify-center mb-4">
              <Car className="h-16 w-16 text-orange-500" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Ready to Sell?</h2>
            <p className="text-gray-600 mb-6">
              Join thousands of successful sellers who have found buyers through Dryve
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
              Start Selling Now
            </Button>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">Why Sell on Dryve?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">Get Started Today</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Ready to sell your car? Our team is here to help you every step of the way.
              </p>
              <div className="space-y-3">
                <Button className="w-full bg-orange-500 hover:bg-orange-600">Create Free Listing</Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Get Vehicle Valuation
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Contact Our Team
                </Button>
              </div>
              <div className="text-center pt-4 border-t">
                <p className="text-sm text-gray-500 mb-2">Need help? Call us:</p>
                <p className="text-lg font-semibold text-orange-600">(917) 547 8835</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-orange-500 to-blue-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Start Selling Your Car Today</h2>
          <p className="text-lg mb-6 opacity-90">Join the Philippines' most trusted pre-owned vehicle marketplace</p>
          <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
            List Your Vehicle Now
          </Button>
        </div>
      </div>
    </div>
  )
}
