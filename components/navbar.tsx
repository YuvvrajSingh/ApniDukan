"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent hydration mismatch by not rendering scroll-dependent styles until mounted
  const navClasses =
    mounted && isScrolled
      ? "bg-white/95 backdrop-blur-md shadow-sm"
      : "bg-transparent";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold tracking-wider text-[#111111]">
              APNI DUKAN
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-[#444444] hover:text-[#111111] transition-colors tracking-wide"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-[#444444] hover:text-[#111111] transition-colors tracking-wide"
            >
              Shop
            </Link>
            <Link
              href="/collections"
              className="text-[#444444] hover:text-[#111111] transition-colors tracking-wide"
            >
              Collections
            </Link>
            <Link
              href="/about"
              className="text-[#444444] hover:text-[#111111] transition-colors tracking-wide"
            >
              About
            </Link>
          </div>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-[#444444] hover:text-[#111111]"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-[#444444] hover:text-[#111111]"
            >
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-[#444444] hover:text-[#111111]"
            >
              <User className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-[#444444] hover:text-[#111111]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-[#444444] hover:text-[#111111] tracking-wide"
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="block px-3 py-2 text-[#444444] hover:text-[#111111] tracking-wide"
              >
                Shop
              </Link>
              <Link
                href="/collections"
                className="block px-3 py-2 text-[#444444] hover:text-[#111111] tracking-wide"
              >
                Collections
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-[#444444] hover:text-[#111111] tracking-wide"
              >
                About
              </Link>
            </div>
            <div className="border-t px-4 py-3 flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-[#444444] hover:text-[#111111]"
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#444444] hover:text-[#111111]"
              >
                <ShoppingBag className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#444444] hover:text-[#111111]"
              >
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
