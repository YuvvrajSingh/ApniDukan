"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Cashmere Blend Coat",
    price: "₹12,999",
    image: "/placeholder.svg?height=400&width=300",
    category: "Outerwear",
  },
  {
    id: 2,
    name: "Silk Midi Dress",
    price: "₹8,499",
    image: "/placeholder.svg?height=400&width=300",
    category: "Dresses",
  },
  {
    id: 3,
    name: "Tailored Blazer",
    price: "₹9,999",
    image: "/placeholder.svg?height=400&width=300",
    category: "Blazers",
  },
  {
    id: 4,
    name: "Merino Wool Sweater",
    price: "₹6,999",
    image: "/placeholder.svg?height=400&width=300",
    category: "Knitwear",
  },
  {
    id: 5,
    name: "Wide Leg Trousers",
    price: "₹7,499",
    image: "/placeholder.svg?height=400&width=300",
    category: "Bottoms",
  },
  {
    id: 6,
    name: "Leather Handbag",
    price: "₹15,999",
    image: "/placeholder.svg?height=400&width=300",
    category: "Accessories",
  },
  {
    id: 7,
    name: "Cotton Shirt",
    price: "₹4,999",
    image: "/placeholder.svg?height=400&width=300",
    category: "Shirts",
  },
  {
    id: 8,
    name: "Ankle Boots",
    price: "₹11,999",
    image: "/placeholder.svg?height=400&width=300",
    category: "Footwear",
  },
]

export function ProductGrid() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif text-[#111111] mb-4 tracking-wider">Featured Collection</h2>
          <p className="text-[#444444] text-lg leading-loose max-w-2xl mx-auto tracking-wide">
            Carefully curated pieces that embody modern sophistication and timeless elegance
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer transition-all duration-300 hover:scale-105">
              {/* Product Image */}
              <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-xl bg-[#F6F1EB]">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-all duration-300 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300" />
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <p className="text-sm text-[#444444] tracking-wider uppercase">{product.category}</p>
                <h3 className="text-lg font-medium text-[#111111] tracking-wide">{product.name}</h3>
                <p className="text-lg font-semibold text-[#111111] tracking-wide">{product.price}</p>
                <Button
                  variant="outline"
                  className="w-full mt-3 border-[#D4BFAA] text-[#111111] hover:bg-[#D4BFAA] hover:text-white transition-all duration-300 tracking-wider bg-transparent"
                >
                  Explore
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-[#111111] text-white hover:bg-[#444444] transition-all duration-300 px-8 py-3 tracking-wider"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
