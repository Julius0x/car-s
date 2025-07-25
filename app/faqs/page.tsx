import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "How do I buy a car on Dryve?",
    answer:
      "Browse our listings, contact the seller directly, arrange for inspection, and complete the transaction. We provide guidance throughout the process.",
  },
  {
    question: "Is it safe to buy from Dryve?",
    answer:
      "Yes! All our listings are verified, and we provide secure communication channels between buyers and sellers. We also offer tips for safe transactions.",
  },
  {
    question: "How do I sell my car on Dryve?",
    answer:
      "Create a listing with photos and details of your vehicle. Our team will verify your listing, and interested buyers will contact you directly.",
  },
  {
    question: "What documents do I need for car transfer?",
    answer:
      "You'll need the Certificate of Registration (CR), Official Receipt (OR), and valid IDs. We can help guide you through the transfer process.",
  },
  {
    question: "Do you offer financing options?",
    answer:
      "We partner with various banks and financing companies to help buyers secure auto loans. Contact us for more information about financing options.",
  },
  {
    question: "How much does it cost to list my car?",
    answer:
      "Basic listings are free! We also offer premium listing options with enhanced visibility and additional features.",
  },
]

export default function FAQsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about buying and selling cars on Dryve
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <HelpCircle className="mr-3 h-5 w-5 text-orange-500" />
                  {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed pl-8">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Still have questions?</h2>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you with any questions about buying or selling your vehicle.
          </p>
          <div className="text-lg font-semibold text-orange-600">Call us at (917) 547 8835</div>
        </div>
      </div>
    </div>
  )
}
