"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <Button variant="ghost" size="sm" onClick={toggleMenu} className="p-2" aria-label="Toggle mobile menu">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 top-[73px] bg-black bg-opacity-50 z-40 md:hidden" onClick={closeMenu} />

          {/* Menu Content */}
          <div className="fixed inset-x-0 top-[73px] bg-white shadow-lg z-50 md:hidden border-t">
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col space-y-6">
                <Link
                  href="/features"
                  className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors py-2 border-b border-gray-100"
                  onClick={closeMenu}
                >
                  Features
                </Link>
                <Link
                  href="/how-it-works"
                  className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors py-2 border-b border-gray-100"
                  onClick={closeMenu}
                >
                  How it Works
                </Link>
                <Link
                  href="/services"
                  className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors py-2 border-b border-gray-100"
                  onClick={closeMenu}
                >
                  Services
                </Link>
                <Link href="/blogs" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Blogs
                </Link>

                <Link
                  href="/testimonials"
                  className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors py-2 border-b border-gray-100"
                  onClick={closeMenu}
                >
                  Testimonials
                </Link>
                <Link
                  href="/faq"
                  className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors py-2 border-b border-gray-100"
                  onClick={closeMenu}
                >
                  FAQ
                </Link>
                <div className="pt-4">
                  <Link href="/contact" onClick={closeMenu}>
                    <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium w-full shadow-md">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
