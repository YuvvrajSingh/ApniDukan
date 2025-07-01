import Link from "next/link"
import { Instagram, Facebook, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#D4BFAA]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-wider text-[#111111]">APNI DUKAN</h3>
            <p className="text-[#444444] leading-loose tracking-wide max-w-sm">
              Curating premium fashion pieces that define modern elegance and timeless sophistication for the
              contemporary wardrobe.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/dave_prateek/" className="text-[#444444] hover:text-[#111111] transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-[#444444] hover:text-[#111111] transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-[#444444] hover:text-[#111111] transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="pdave7758@gmail.com" className="text-[#444444] hover:text-[#111111] transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#111111] tracking-wider">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/shop" className="block text-[#444444] hover:text-[#111111] transition-colors tracking-wide">
                Shop All
              </Link>
              <Link
                href="/collections"
                className="block text-[#444444] hover:text-[#111111] transition-colors tracking-wide"
              >
                Collections
              </Link>
              <Link href="/about" className="block text-[#444444] hover:text-[#111111] transition-colors tracking-wide">
                About Us
              </Link>
              <Link
                href="/contact"
                className="block text-[#444444] hover:text-[#111111] transition-colors tracking-wide"
              >
                Contact
              </Link>
              <Link
                href="/size-guide"
                className="block text-[#444444] hover:text-[#111111] transition-colors tracking-wide"
              >
                Size Guide
              </Link>
            </div>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#111111] tracking-wider">Customer Care</h4>
            <div className="space-y-2">
              <Link
                href="/shipping"
                className="block text-[#444444] hover:text-[#111111] transition-colors tracking-wide"
              >
                Shipping Info
              </Link>
              <Link
                href="/returns"
                className="block text-[#444444] hover:text-[#111111] transition-colors tracking-wide"
              >
                Returns & Exchanges
              </Link>
              <Link href="/faq" className="block text-[#444444] hover:text-[#111111] transition-colors tracking-wide">
                FAQ
              </Link>
              <Link
                href="/privacy"
                className="block text-[#444444] hover:text-[#111111] transition-colors tracking-wide"
              >
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-[#444444] hover:text-[#111111] transition-colors tracking-wide">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#D4BFAA]/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#444444] text-sm tracking-wide">© 2024 Apni Dukan. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-[#444444] text-sm tracking-wide">We accept:</span>
            <div className="flex space-x-2">
              <div className="w-8 h-5 bg-[#D4BFAA] rounded-sm"></div>
              <div className="w-8 h-5 bg-[#D4BFAA] rounded-sm"></div>
              <div className="w-8 h-5 bg-[#D4BFAA] rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
