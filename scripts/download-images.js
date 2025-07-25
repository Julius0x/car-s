// Script to download and organize car images from Unsplash
import fs from "fs"
import path from "path"

const imageUrls = [
  {
    name: "car-handover.jpg",
    url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80",
    description: "Car key handover scene",
  },
  {
    name: "white-luxury-car.jpg",
    url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "White luxury sports car in showroom",
  },
  {
    name: "classic-cars-showroom.jpg",
    url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1983&q=80",
    description: "Classic muscle cars in showroom",
  },
  {
    name: "car-lot-aerial.jpg",
    url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Aerial view of car lot",
  },
  {
    name: "car-dashboard.jpg",
    url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    description: "Car dashboard and speedometer",
  },
  {
    name: "dealership-keys.jpg",
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
    description: "Person holding car keys at dealership",
  },
  {
    name: "car-interior-mirror.jpg",
    url: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
    description: "Car interior view through rearview mirror",
  },
  {
    name: "red-sedan.jpg",
    url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Red sedan exterior shot",
  },
]

async function downloadImages() {
  console.log("🚗 Starting Dryve car image download...")

  // Create images directory if it doesn't exist
  const imagesDir = path.join(process.cwd(), "public", "images")
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true })
    console.log("📁 Created images directory")
  }

  let downloadCount = 0

  for (const image of imageUrls) {
    try {
      console.log(`📥 Downloading ${image.name}...`)

      const response = await fetch(image.url)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const buffer = await response.arrayBuffer()
      const filePath = path.join(imagesDir, image.name)

      fs.writeFileSync(filePath, Buffer.from(buffer))
      downloadCount++

      console.log(`✅ Downloaded ${image.name} - ${image.description}`)

      // Add small delay to be respectful to Unsplash
      await new Promise((resolve) => setTimeout(resolve, 500))
    } catch (error) {
      console.error(`❌ Failed to download ${image.name}:`, error.message)
    }
  }

  console.log(`\n🎉 Download complete! Successfully downloaded ${downloadCount}/${imageUrls.length} images`)
  console.log("📸 Images are now available in /public/images/")
  console.log("🚀 The Dryve car marketplace now has professional automotive photography!")
}

// Run the download
downloadImages().catch(console.error)
