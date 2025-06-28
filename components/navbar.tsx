"use client"
import {
    MessageCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import MobileNav from "@/components/mobile-nav"

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-green-100 z-50">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-3">
                    <Image
                        src="/logo.jpg"  // adjust to your actual path (e.g. "/images/logo.png")
                        alt="VasifyTech Logo"
                        width={200}
                        height={150}
                        className="rounded-full"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                        Features
                    </Link>
                    <Link href="/how-it-works" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                        How it Works
                    </Link>
                    <Link href="/services" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                        Services
                    </Link>
                    <Link href="/blogs" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                        Industries
                    </Link>
                    <Link href="/testimonials" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                        Testimonials
                    </Link>
                    <Link href="/faq" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                        FAQ
                    </Link>
                    <Link href="/contact">
                        <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium">
                            Get Started
                        </Button>
                    </Link>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <MobileNav />
                </div>
            </div>
        </nav>
    )
}

export default Navbar