"use client"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ProductGrid } from "@/components/product-grid"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Navbar />
      <Hero />
      <ProductGrid />
      <Newsletter />
      <Footer />
    </div>
  )
}
