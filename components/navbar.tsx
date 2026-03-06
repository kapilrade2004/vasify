// "use client"

// import { Bot, IndianRupee, User } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import MobileNav from "@/components/mobile-nav"

// const Navbar = () => {
//     return (
//         <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-green-100 z-50">
//             <div className="container mx-auto px-6 py-4 flex items-center justify-between">
//                 <Link href="/" className="flex items-center space-x-3">
//                     <Image
//                         src="/logo.jpg"
//                         alt="VasifyTech Logo"
//                         width={200}
//                         height={150}
//                         className="rounded-full"
//                     />
//                 </Link>

//                 <div className="flex-grow" />

//                 {/* Desktop Navigation */}
//                 <div className="hidden md:flex items-center space-x-8">
//                     <Link
//                         href="/ai-agent"
//                         className="flex items-center gap-1 text-green-600 font-medium hover:text-green-600 transition-colors"
//                     >
//                         <Bot className="h-4 w-4" />
//                         AI Agent
//                     </Link>

//                     <Link href="/whatsapp-services" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
//                         Whatsapp Services
//                     </Link>

//                     <Link href="/website-development" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
//                         Website Development
//                     </Link>
//                     <Link
//   href="/products"
//   className="text-gray-600 hover:text-green-600 font-medium transition-colors"
// >
//   Products
// </Link>



//                     <Link href="/free-whatsapp-business-guide" className="text-green-600 font-medium transition-colors">
//                         Free Guide
//                     </Link>

//                     <Link
//                         href="/pricing"
//                         className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition-colors"
//                     >
//                         <IndianRupee className="h-4 w-4" />
//                         Pricing
//                     </Link>

//                     <Link href="/blogs" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
//                         Blogs
//                     </Link>

//                     {/* User Login (No Dropdown) */}
//                     <a
//                         href="https://whatsapp.vasifytech.com/account/login"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition-colors font-medium"
//                     >
//                         <User className="h-4 w-4" />
//                         User
//                     </a>

//                     <Link href="/contact">
//                         <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium">
//                             Contact Us
//                         </Button>
//                     </Link>
//                 </div>

//                 {/* Mobile Navigation */}
//                 <div className="md:hidden">
//                     <MobileNav />
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default Navbar

//testing
"use client"

import { useState, useRef, useEffect, Suspense } from "react"
import { Bot, IndianRupee, User, ChevronDown, Globe, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import MobileNav from "@/components/mobile-nav"

const Navbar = () => {
    const [servicesOpen, setServicesOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

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
                <Link href="/" className="flex items-center flex-shrink-0">
                    <Image
                        src="/logo.jpg"
                        alt="VasifyTech Logo"
                        width={200}
                        height={150}
                        className="rounded-full"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 flex-wrap">

                    {/* Services Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setServicesOpen((prev) => !prev)}
                            className="flex items-center gap-1 text-gray-700 hover:text-green-600 font-medium transition-colors whitespace-nowrap text-sm lg:text-base focus:outline-none"
                        >
                            Services
                            <ChevronDown
                                className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                            />
                        </button>

                        {servicesOpen && (
                            <div className="absolute left-0 top-full mt-2 w-52 bg-white rounded-xl shadow-xl border border-green-50 overflow-hidden animate-fade-in z-50">
                                <Link
                                    href="/ai-agent"
                                    onClick={() => setServicesOpen(false)}
                                    className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors font-medium border-b border-gray-50"
                                >
                                    <Bot className="h-4 w-4 text-green-500 flex-shrink-0" />
                                    AI Agent
                                </Link>
                                <Link
                                    href="/whatsapp-services"
                                    onClick={() => setServicesOpen(false)}
                                    className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors font-medium border-b border-gray-50"
                                >
                                    <MessageCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                    WhatsApp Services
                                </Link>
                                <Link
                                    href="/website-development"
                                    onClick={() => setServicesOpen(false)}
                                    className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors font-medium"
                                >
                                    <Globe className="h-4 w-4 text-green-500 flex-shrink-0" />
                                    Website Development
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link
                        href="/products"
                        className="text-gray-600 hover:text-green-600 font-medium transition-colors whitespace-nowrap text-sm lg:text-base"
                    >
                        Products
                    </Link>

                    <Link href="/free-whatsapp-business-guide" className="text-green-600 font-medium transition-colors whitespace-nowrap text-sm lg:text-base">
                        Free Guide
                    </Link>

                    <Link
                        href="/pricing"
                        className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap text-sm lg:text-base"
                    >
                        <IndianRupee className="h-4 w-4" />
                        Pricing
                    </Link>

                    <Link
                        href="/blogs"
                        className="text-gray-600 hover:text-green-600 font-medium transition-colors whitespace-nowrap text-sm lg:text-base"
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

                    <Link href="/contact">
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