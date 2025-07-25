import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, CheckCircle, Clock, Users } from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "Prepare Documents",
    description: "Gather Certificate of Registration (CR), Official Receipt (OR), and valid IDs of both parties.",
  },
  {
    icon: Users,
    title: "Meet at LTO",
    description: "Both buyer and seller must be present at the LTO office for the transfer process.",
  },
  {
    icon: Clock,
    title: "Process Transfer",
    description: "Submit documents, pay transfer fees, and wait for the new registration to be processed.",
  },
  {
    icon: CheckCircle,
    title: "Complete Transfer",
    description: "Receive new CR and OR with the buyer's name. Transfer is now complete!",
  },
]

const requirements = [
  "Certificate of Registration (CR) - Original",
  "Official Receipt (OR) - Original",
  "Deed of Sale - Notarized",
  "Valid ID of Seller - Photocopy",
  "Valid ID of Buyer - Photocopy",
  "Certificate of No Pending Case (if required)",
  "Emission Test Certificate (if applicable)",
]

export default function TransferPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Car Transfer Ownership</h1>
          <p className="text-xl text-gray-600">Complete guide to transferring vehicle ownership in the Philippines</p>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">Transfer Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">Required Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">Transfer Fees</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-700">Transfer Fee</span>
                <span className="font-semibold">₱450.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Registration Fee</span>
                <span className="font-semibold">Varies by vehicle</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Plate Fee (if new)</span>
                <span className="font-semibold">₱450.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Notarization</span>
                <span className="font-semibold">₱200-500</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Estimated Total</span>
                <span className="text-orange-600">₱1,100 - ₱1,400</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 p-8 bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Need Help with Transfer?</h2>
          <p className="text-gray-600 mb-6">
            Our team can guide you through the entire transfer process and help ensure all documents are in order.
          </p>
          <div className="text-lg font-semibold text-orange-600">Call us at (917) 547 8835</div>
        </div>
      </div>
    </div>
  )
}
