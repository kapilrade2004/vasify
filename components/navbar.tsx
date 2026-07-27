import { useState, useRef, useEffect, Suspense } from "react"
import { Bot, IndianRupee, User, ChevronDown, Globe, MessageCircle, Megaphone } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import MobileNav from "@/components/mobile-nav"

const Navbar = () => {
    const [servicesOpen, setServicesOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const { pathname } = useLocation()

    const isServiceRoute = ["/ai-agent", "/whatsapp-services", "/website-development", "/digital-marketing"].some(r => pathname.startsWith(r))
    const isActive = (path: string) => pathname === path

    // Close dropdown when clicking outside
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setServicesOpen(false)
            }
        }
        document.addEventListener("mousedown", handler)
        return () => document.removeEventListener("mousedown", handler)
    }, [])

    return (
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-green-100 z-50">
            <div className="container mx-auto px-4 lg:px-6 py-3 flex items-center justify-between gap-4">
                <Link to="/" className="flex items-center flex-shrink-0">
                    <img
                        src="/logo.jpg"
                        alt="VasifyTech Logo"
                        width={200}
                        height={150}
                        className="rounded-full max-h-12 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 flex-wrap">

                    {/* Services Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setServicesOpen((prev) => !prev)}
                            className={`flex items-center gap-1 hover:text-green-600 font-medium transition-colors whitespace-nowrap text-sm lg:text-base focus:outline-none ${isServiceRoute ? "text-green-600 font-semibold" : "text-gray-700"}`}
                        >
                            Services
                            <ChevronDown
                                className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                            />
                        </button>

                        {servicesOpen && (
                            <div className="absolute left-0 top-full mt-2 w-52 bg-white rounded-xl shadow-xl border border-green-50 overflow-hidden animate-fade-in z-50">
                                <Link
                                    to="/ai-agent"
                                    onClick={() => setServicesOpen(false)}
                                    className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors font-medium border-b border-gray-50"
                                >
                                    <Bot className="h-4 w-4 text-green-500 flex-shrink-0" />
                                    AI Agent
                                </Link>
                                <Link
                                    to="/whatsapp-services"
                                    onClick={() => setServicesOpen(false)}
                                    className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors font-medium border-b border-gray-50"
                                >
                                    <MessageCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                    WhatsApp Services
                                </Link>
                                <Link
                                    to="/website-development"
                                    onClick={() => setServicesOpen(false)}
                                    className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors font-medium border-b border-gray-50"
                                >
                                    <Globe className="h-4 w-4 text-green-500 flex-shrink-0" />
                                    Website Development
                                </Link>
                                <Link
                                    to="/digital-marketing"
                                    onClick={() => setServicesOpen(false)}
                                    className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors font-medium"
                                >
                                    <Megaphone className="h-4 w-4 text-green-500 flex-shrink-0" />
                                    Digital Marketing
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link
                        to="/products"
                        className={`hover:text-green-600 font-medium transition-colors whitespace-nowrap text-sm lg:text-base ${isActive("/products") ? "text-green-600 font-semibold" : "text-gray-600"}`}
                    >
                        Products
                    </Link>

                    <Link
                        to="/free-whatsapp-business-guide"
                        className={`hover:text-green-600 font-medium transition-colors whitespace-nowrap text-sm lg:text-base ${isActive("/free-whatsapp-business-guide") ? "text-green-600 font-semibold" : "text-gray-600"}`}
                    >
                        Free Guide
                    </Link>

                    <Link
                        to="/pricing"
                        className={`flex items-center gap-1 hover:text-green-600 transition-colors whitespace-nowrap text-sm lg:text-base ${isActive("/pricing") ? "text-green-600 font-semibold" : "text-gray-700"}`}
                    >
                        <IndianRupee className="h-4 w-4" />
                        Pricing
                    </Link>

                    <Link
                        to="/blogs"
                        className={`hover:text-green-600 font-medium transition-colors whitespace-nowrap text-sm lg:text-base ${pathname.startsWith("/blogs") ? "text-green-600 font-semibold" : "text-gray-600"}`}
                    >
                        Blogs
                    </Link>

                    {/* User Login */}
                    <a
                        href="https://whatsapp.vasifytech.com/account/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-gray-700 hover:text-green-600 transition-colors font-medium whitespace-nowrap text-sm lg:text-base"
                    >
                        <User className="h-4 w-4" />
                        Login
                    </a>

                    <Link to="/contact">
                        <Button className="bg-green-500 hover:bg-green-600 text-white px-4 lg:px-6 py-2 rounded-lg font-medium text-sm lg:text-base whitespace-nowrap">
                            Contact Us
                        </Button>
                    </Link>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden flex-shrink-0">
                    <Suspense fallback={null}>
                        <MobileNav />
                    </Suspense>
                </div>
            </div>
        </nav>
    )
}

export default Navbar