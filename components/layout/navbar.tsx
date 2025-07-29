"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from 'next/image'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Top Support Bar */}
      <div className="bg-blue-700 text-white text-center py-2 text-sm">
        Need Help? Call our support team at <span className="font-semibold">(917) 547 8835</span>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image className="w-20 h-20" src="/logo.png" alt="Dryve Logo" width={80} height={80} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/cars" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Buy A Car
              </Link>
              <Link href="/sell" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Sell Your Car
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Services
              </Link>
              <Link href="/transfer" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Car Transfer
              </Link>
              <Link href="/faqs" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                FAQs
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                About Dryve
              </Link>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button asChild variant="ghost" size="sm">
                <Link href="/contact">Contact</Link>
              </Button>
              <Button asChild size="sm" className="bg-orange-500 hover:bg-orange-600">
                <Link href="/cars">Browse Cars</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t bg-white py-4">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/cars"
                  className="text-gray-700 hover:text-orange-500 font-medium px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Buy A Car
                </Link>
                <Link
                  href="/sell"
                  className="text-gray-700 hover:text-orange-500 font-medium px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sell Your Car
                </Link>
                <Link
                  href="/services"
                  className="text-gray-700 hover:text-orange-500 font-medium px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/transfer"
                  className="text-gray-700 hover:text-orange-500 font-medium px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Car Transfer
                </Link>
                <Link
                  href="/faqs"
                  className="text-gray-700 hover:text-orange-500 font-medium px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQs
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-orange-500 font-medium px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Dryve
                </Link>
                <div className="flex flex-col space-y-2 px-4 pt-4 border-t">
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/contact">Contact</Link>
                  </Button>
                  <Button asChild size="sm" className="bg-orange-500 hover:bg-orange-600">
                    <Link href="/cars">Browse Cars</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
