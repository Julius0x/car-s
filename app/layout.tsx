import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dryve PH - It’s Easy.Just Dryve!",
  description: "Dryve is an online car trading platform for secondhand vehicles. Sell used cars for a high offer or buy used cars for great deal!",
  keywords: "cars, buy cars, sell cars, used cars, pre-owned vehicles, Philippines, Dryve",
  openGraph: {
    title: "Dryve PH - It’s Easy.Just Dryve!",
    description: "Dryve is an online car trading platform for secondhand vehicles. Sell used cars for a high offer or buy used cars for great deal!",
    type: "website",
  },
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
