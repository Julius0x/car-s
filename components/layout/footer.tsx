import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-orange-400 to-blue-600 text-white font-bold text-xl px-3 py-1 rounded">
                Dryve
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              The Philippines' most trusted pre-owned vehicle marketplace. It's Easy. Just Dryve!
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">For Buyers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cars" className="hover:text-primary">
                  Browse Cars
                </Link>
              </li>
              <li>
                <Link href="/search" className="hover:text-primary">
                  Advanced Search
                </Link>
              </li>
              <li>
                <Link href="/financing" className="hover:text-primary">
                  Financing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">For Sellers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sell" className="hover:text-primary">
                  Sell Your Car
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/transfer" className="hover:text-primary">
                  Car Transfer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faqs" className="hover:text-primary">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Dryve
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Dryve Philippines. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
