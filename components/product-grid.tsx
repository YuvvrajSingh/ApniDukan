"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import React from "react"

interface Product {
  _id?: string;
  id?: string | number;
  name: string;
  price: number | string;
  category: string;
  imageUrl?: string;
  image?: string;
  description?: string;
  inStock?: boolean;
}

export function ProductGrid({ products }: { products: Product[] }) {
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
            <div key={product._id || product.id} className="group cursor-pointer transition-all duration-300 hover:scale-105">
              {/* Product Image */}
              <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-xl bg-[#F6F1EB]">
                <Image
                  src={product.imageUrl || product.image || "/placeholder.svg"}
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
                <p className="text-lg font-semibold text-[#111111] tracking-wide">₹{product.price}</p>
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
