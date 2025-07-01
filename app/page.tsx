"use client"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ProductGrid } from "@/components/product-grid"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch("/api/products")
        const data = await res.json()
        if (data.success) {
          setProducts(data.products)
        } else {
          setError(data.error || "Failed to fetch products")
        }
      } catch (err) {
        setError("Failed to fetch products")
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Navbar />
      <Hero />
      {loading ? (
        <div className="text-center text-gray-500 py-12">Loading products...</div>
      ) : error ? (
        <div className="text-center text-red-500 py-12">{error}</div>
      ) : (
        <ProductGrid products={products} />
      )}
      <Newsletter />
      <Footer />
    </div>
  )
}
