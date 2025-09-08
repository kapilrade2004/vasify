"use client"

import { useState } from "react"
import { Menu, X, DollarSign, User, Bot } from "lucide-react"
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
                  href="/ai-agent"
                  className="flex items-center gap-1 text-green-600 font-medium text-xl hover:text-green-600 transition-colors"
                  onClick={closeMenu}

                >
                  <Bot className="h-4 w-4" />
                  AI Agent
                </Link>
                <Link
                  href="/services"
                  className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors py-2 border-b border-gray-100"
                  onClick={closeMenu}
                >
                  Services
                </Link>
                <Link href="/free-guide" className="text-green-600 font-medium text-xl transition-colors">
                  Free Guide
                </Link>
                <Link
                  href="/pricing"
                  className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition-colors"
                >
                  <DollarSign className="h-4 w-4" />
                  Pricing
                </Link>

                <Link href="/blogs" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Industries
                </Link>
                <a
                  href="https://bot.greentickapi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition-colors"
                >
                  <User className="h-4 w-4" />
                  User
                </a>
                <div className="pt-4">
                  <Link href="/contact" onClick={closeMenu}>
                    <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium w-full shadow-md">
                      Contact Us
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
