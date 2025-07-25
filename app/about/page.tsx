import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, Users, Shield, Award, Clock, MapPin, CheckCircle, Star } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">About Dryve</h1>
          <p className="text-xl text-gray-600">The Philippines' most trusted pre-owned vehicle marketplace</p>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg p-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">It's Easy. Just Dryve!</h2>
            <p className="text-lg text-gray-600 mb-6">
              A partner for your pre-owned vehicle journey. We make buying and selling cars simple, safe, and convenient
              for everyone in the Philippines.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center border-0 shadow-lg">
            <CardContent className="p-6">
              <Car className="h-12 w-12 mx-auto mb-4 text-orange-500" />
              <h3 className="font-bold text-lg mb-2">Quality Vehicles</h3>
              <p className="text-gray-600 text-sm">
                Every vehicle is carefully inspected and verified for quality and authenticity
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg">
            <CardContent className="p-6">
              <Users className="h-12 w-12 mx-auto mb-4 text-orange-500" />
              <h3 className="font-bold text-lg mb-2">Trusted Community</h3>
              <p className="text-gray-600 text-sm">
                Join thousands of satisfied buyers and sellers across the Philippines
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg">
            <CardContent className="p-6">
              <Shield className="h-12 w-12 mx-auto mb-4 text-orange-500" />
              <h3 className="font-bold text-lg mb-2">Secure Transactions</h3>
              <p className="text-gray-600 text-sm">
                Safe and secure platform with verified listings and protected communications
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg">
            <CardContent className="p-6">
              <Award className="h-12 w-12 mx-auto mb-4 text-orange-500" />
              <h3 className="font-bold text-lg mb-2">Expert Support</h3>
              <p className="text-gray-600 text-sm">Professional automotive experts guide you through every step</p>
            </CardContent>
          </Card>
        </div>

        {/* Our Services */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Car className="mr-3 h-6 w-6 text-orange-500" />
                  Buy Pre-Owned Vehicles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Browse thousands of verified listings
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Direct communication with sellers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Detailed vehicle history and inspection reports
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Financing assistance available
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Users className="mr-3 h-6 w-6 text-orange-500" />
                  Sell Your Vehicle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Free vehicle listing and valuation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Professional photography service
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Marketing to qualified buyers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Complete paperwork assistance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Shield className="mr-3 h-6 w-6 text-orange-500" />
                  Transfer Ownership
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Complete LTO transfer assistance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Document preparation and verification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Fast-track processing available
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Legal compliance guaranteed
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Star className="mr-3 h-6 w-6 text-orange-500" />
                  Additional Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Vehicle inspection and appraisal
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Insurance assistance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Loan and financing options
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    After-sales support
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Choose Dryve */}
        <div className="bg-gradient-to-r from-orange-500 to-blue-600 text-white rounded-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Why Choose Dryve?</h2>
            <p className="text-lg opacity-90">The most comprehensive pre-owned vehicle platform in the Philippines</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-semibold mb-2">Fast & Efficient</h3>
              <p className="opacity-80">Quick listing process and fast buyer-seller connections</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-semibold mb-2">Nationwide Coverage</h3>
              <p className="opacity-80">Serving customers from Luzon to Mindanao</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-semibold mb-2">Trusted Brand</h3>
              <p className="opacity-80">Philippines' leading pre-owned vehicle marketplace</p>
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              At Dryve, we believe that buying or selling a pre-owned vehicle should be a straightforward, transparent,
              and enjoyable experience. We're committed to connecting Filipino buyers with quality vehicles and helping
              sellers reach the right audience, all while maintaining the highest standards of trust and reliability.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our platform combines cutting-edge technology with deep understanding of the Philippine automotive market,
              ensuring that every transaction is smooth, secure, and satisfactory for all parties involved.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Ready to Start Your Journey?</h2>
          <p className="text-gray-600 mb-6">
            Whether you're buying or selling, our team is here to help you every step of the way.
          </p>
          <div className="text-lg font-semibold text-orange-600">Call us at (917) 547 8835</div>
        </div>
      </div>
    </div>
  )
}
