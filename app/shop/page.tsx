"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ProductGrid } from "@/components/product-grid"

interface Product {
  _id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  description?: string;
  inStock: boolean;
}

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [cart, setCart] = useState<Product[]>([])
  const [showCart, setShowCart] = useState(false)

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

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product])
  }

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-serif text-[#111111] mb-8 tracking-wider text-center">Shop</h2>
        {/* Cart Button */}
        <div className="flex justify-end mb-8">
          <Button
            className="relative bg-[#111111] text-white hover:bg-[#444444] px-6 py-2 rounded-lg shadow-lg"
            onClick={() => setShowCart(true)}
          >
            Cart
            {cart.length > 0 && (
              <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-[#D4BFAA] rounded-full">
                {cart.length}
              </span>
            )}
          </Button>
        </div>
        {/* Product Grid */}
        {loading ? (
          <div className="text-center text-gray-500 py-12">Loading products...</div>
        ) : error ? (
          <div className="text-center text-red-500 py-12">{error}</div>
        ) : (
          <ProductGrid products={products} />
        )}
        {/* Cart Modal */}
        {showCart && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative animate-fade-in">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
                onClick={() => setShowCart(false)}
                aria-label="Close cart"
              >
                ×
              </button>
              <h3 className="text-2xl font-bold mb-6 text-center text-[#111111]">Your Cart</h3>
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center">Your cart is empty.</p>
              ) : (
                <>
                  <ul className="divide-y divide-gray-200 mb-6 max-h-60 overflow-y-auto">
                    {cart.map((item, idx) => (
                      <li key={idx} className="py-3 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-16 relative rounded overflow-hidden bg-[#F6F1EB]">
                            <Image src={item.imageUrl || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                          </div>
                          <div>
                            <div className="font-medium text-[#111111]">{item.name}</div>
                            <div className="text-xs text-[#444444]">{item.category}</div>
                          </div>
                        </div>
                        <span className="font-semibold text-[#111111]">₹{item.price.toLocaleString()}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold text-lg text-[#444444]">Total</span>
                    <span className="font-bold text-xl text-[#111111]">₹{totalAmount.toLocaleString()}</span>
                  </div>
                  <Button className="w-full bg-[#D4BFAA] text-white hover:bg-[#bfa77d] text-lg font-semibold py-3 rounded-lg transition-all duration-300">
                    Proceed to Pay
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
