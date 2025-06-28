"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className="py-16 lg:py-24 bg-[#F6F1EB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-serif text-[#111111] mb-4 tracking-wider">Stay in Style</h2>
        <p className="text-[#444444] text-lg leading-loose mb-8 max-w-2xl mx-auto tracking-wide">
          Be the first to know about new arrivals, exclusive collections, and special offers from Apni Dukan
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-3">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white border-[#D4BFAA] focus:border-[#111111] tracking-wide"
              required
            />
            <Button
              type="submit"
              className="bg-[#111111] text-white hover:bg-[#444444] transition-all duration-300 px-6 tracking-wider"
            >
              Subscribe
            </Button>
          </div>
        </form>

        <p className="text-sm text-[#444444] mt-4 tracking-wide">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </section>
  )
}
