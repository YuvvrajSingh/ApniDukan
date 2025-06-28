"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Use a small delay to ensure proper hydration
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Fashion Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero Content */}
      <div
        className={`relative z-10 h-full flex items-center justify-center text-center px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        suppressHydrationWarning
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 tracking-wider leading-tight">
            Elevate Your
            <br />
            <span className="italic">Style</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-loose tracking-wide">
            Discover our curated collection of premium fashion pieces that
            define modern elegance and timeless sophistication.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#111111] hover:bg-[#F6F1EB] transition-all duration-300 px-8 py-3 text-lg tracking-wider hover:scale-105"
          >
            Explore Collection
          </Button>
        </div>
      </div>
    </section>
  );
}
