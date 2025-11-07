"use client"
import {
    MessageCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import MobileNav from "@/components/mobile-nav"
import { DollarSign, User, Bot } from "lucide-react"

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-green-100 z-50">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-3">
                    <Image
                        src="/logo.jpg"
                        alt="VasifyTech Logo"
                        width={200}
                        height={150}
                        className="rounded-full"
                    />
                </Link>
                <div className="flex-grow" />  {/* ← adds space between logo and nav */}

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link
                        href="/ai-agent"
                        className="flex items-center gap-1 text-green-600 font-medium hover:text-green-600 transition-colors"
                    >
                        <Bot className="h-4 w-4" />
                        AI Agent
                    </Link>

                    <Link href="/whatsappservices" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                        Whatsapp Services
                    </Link>
                    <Link href="/development" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                        Website Development
                    </Link>
                    <Link href="/free-guide" className="text-green-600 font-medium transition-colors">
                        Free Guide
                    </Link>
                    <Link
                        href="/pricing"
                        className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition-colors"
                    >
                        <DollarSign className="h-4 w-4" />
                        Pricing
                    </Link>
                    <Link href="/blogs" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                        Blogs
                    </Link>
                    <a
                        href="https://whatsapp.vasifytech.com/account/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition-colors"
                    >
                        <User className="h-4 w-4" />
                        User
                    </a>
                    <Link href="/contact">
                        <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium">
                            Contact Us
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