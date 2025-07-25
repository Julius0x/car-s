import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Car, Users, Shield, FileText, Camera, Search, CreditCard, CheckCircle, Clock, Award } from "lucide-react"

const services = [
  {
    icon: Car,
    title: "Buy Pre-Owned Vehicles",
    description: "Browse thousands of verified pre-owned vehicles from trusted sellers nationwide",
    features: [
      "Verified vehicle listings",
      "Detailed inspection reports",
      "Direct seller communication",
      "Financing assistance",
      "Nationwide delivery options",
    ],
    price: "Free for buyers",
  },
  {
    icon: Users,
    title: "Sell Your Vehicle",
    description: "List your vehicle and connect with serious buyers across the Philippines",
    features: [
      "Free vehicle valuation",
      "Professional photography",
      "Premium listing options",
      "Marketing to qualified buyers",
      "Complete paperwork support",
    ],
    price: "Starting at ₱0",
  },
  {
    icon: FileText,
    title: "Transfer Ownership",
    description: "Complete LTO transfer assistance with expert guidance and support",
    features: [
      "Document preparation",
      "LTO processing assistance",
      "Legal compliance check",
      "Fast-track options available",
      "End-to-end support",
    ],
    price: "From ₱2,500",
  },
  {
    icon: Shield,
    title: "Vehicle Inspection",
    description: "Professional vehicle inspection and appraisal services",
    features: [
      "Comprehensive 120-point inspection",
      "Detailed condition report",
      "Market value assessment",
      "Certified inspector",
      "Digital inspection certificate",
    ],
    price: "₱3,500",
  },
  {
    icon: Camera,
    title: "Professional Photography",
    description: "High-quality vehicle photography to showcase your car's best features",
    features: [
      "Professional photographer",
      "Multiple angles and shots",
      "Interior and exterior photos",
      "Same-day delivery",
      "High-resolution images",
    ],
    price: "₱1,500",
  },
  {
    icon: CreditCard,
    title: "Financing Assistance",
    description: "Connect with trusted financing partners for your vehicle purchase",
    features: [
      "Multiple bank partnerships",
      "Competitive interest rates",
      "Quick approval process",
      "Flexible payment terms",
      "Expert loan guidance",
    ],
    price: "Free consultation",
  },
]

const additionalServices = [
  {
    icon: Search,
    title: "Vehicle History Check",
    description: "Comprehensive background check for pre-owned vehicles",
    price: "₱500",
  },
  {
    icon: Award,
    title: "Extended Warranty",
    description: "Additional protection for your pre-owned vehicle purchase",
    price: "From ₱15,000",
  },
  {
    icon: Clock,
    title: "Express Processing",
    description: "Fast-track your listing or transfer for priority handling",
    price: "₱1,000",
  },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Our Services</h1>
          <p className="text-xl text-gray-600">Comprehensive solutions for all your pre-owned vehicle needs</p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-center text-gray-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">{service.description}</p>

                <ul className="text-left space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <div className="text-lg font-bold text-orange-600 mb-4">{service.price}</div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <service.icon className="h-12 w-12 mx-auto mb-4 text-orange-500" />
                  <h3 className="font-bold text-lg mb-2 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="text-lg font-bold text-orange-600">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Process */}
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-bold mb-2">Contact Us</h3>
              <p className="text-sm text-gray-600">Call (917) 547 8835 or visit our website</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-bold mb-2">Choose Service</h3>
              <p className="text-sm text-gray-600">Select the service that fits your needs</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-bold mb-2">Schedule Appointment</h3>
              <p className="text-sm text-gray-600">Book a convenient time for our service</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-bold mb-2">Complete Transaction</h3>
              <p className="text-sm text-gray-600">Enjoy our professional service and support</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-orange-500 to-blue-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6 opacity-90">
            Contact our team today and let us help you with your pre-owned vehicle needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-orange-600"
            >
              <Link href="tel:+639175478835">Call (917) 547 8835</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
