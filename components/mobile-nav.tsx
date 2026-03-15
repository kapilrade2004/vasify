// "use client"

// import { useState, useEffect } from "react"
// import { usePathname, useSearchParams } from "next/navigation"
// import { Menu, X, User, Bot, IndianRupee, ChevronDown, Globe, MessageCircle } from "lucide-react"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"

// export default function MobileNav() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [servicesOpen, setServicesOpen] = useState(false)
//   const pathname = usePathname()
//   const searchParams = useSearchParams()

//   useEffect(() => {
//     setIsOpen(false)
//     setServicesOpen(false)
//   }, [pathname, searchParams])

//   const toggleMenu = () => {
//     setIsOpen(!isOpen)
//   }

//   const closeMenu = () => {
//     setIsOpen(false)
//     setServicesOpen(false)
//   }

//   return (
//     <>
//       {/* Mobile Menu Button */}
//       <Button variant="ghost" size="sm" onClick={toggleMenu} className="p-2" aria-label="Toggle mobile menu">
//         {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//       </Button>

//       {/* Mobile Menu Overlay */}
//       {/* Backdrop */}
//       <div
//         className={`fixed inset-0 top-[73px] bg-black z-40 md:hidden transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
//           }`}
//         onClick={closeMenu}
//       />

//       {/* Menu Content */}
//       <div
//         className={`fixed inset-x-0 top-[73px] bg-white shadow-lg z-50 md:hidden border-t transform transition-all duration-300 ease-in-out ${isOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-4 opacity-0 pointer-events-none"
//           }`}
//       >
//         <div className="container mx-auto px-6 py-8">
//           <div className="flex flex-col space-y-6">

//             {/* Services Accordion */}
//             <div>
//               <button
//                 onClick={() => setServicesOpen((prev) => !prev)}
//                 className="flex items-center justify-between w-full text-lg font-medium text-gray-700 hover:text-green-600 transition-colors py-2 border-b border-gray-100"
//               >
//                 Services
//                 <ChevronDown
//                   className={`h-5 w-5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
//                 />
//               </button>

//               {servicesOpen && (
//                 <div className="mt-2 ml-2 flex flex-col space-y-1 border-l-2 border-green-100 pl-4 animate-fade-in">
//                   <Link
//                     href="/ai-agent"
//                     className="flex items-center gap-2 py-2 text-gray-600 hover:text-green-600 font-medium transition-colors"
//                     onClick={closeMenu}
//                   >
//                     <Bot className="h-4 w-4 text-green-500" />
//                     AI Agent
//                   </Link>
//                   <Link
//                     href="/whatsapp-services"
//                     className="flex items-center gap-2 py-2 text-gray-600 hover:text-green-600 font-medium transition-colors text-base"
//                     onClick={closeMenu}
//                   >
//                     <MessageCircle className="h-4 w-4 text-green-500" />
//                     WhatsApp Services
//                   </Link>
//                   <Link
//                     href="/website-development"
//                     className="flex items-center gap-2 py-2 text-gray-600 hover:text-green-600 font-medium transition-colors text-base"
//                     onClick={closeMenu}
//                   >
//                     <Globe className="h-4 w-4 text-green-500" />
//                     Website Development
//                   </Link>
//                 </div>
//               )}
//             </div>

//             <Link
//               href="/products"
//               className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors py-2 border-b border-gray-100"
//               onClick={closeMenu}
//             >
//               Products
//             </Link>

//             <Link href="/free-whatsapp-business-guide" className="text-green-600 font-medium text-xl transition-colors" onClick={closeMenu}>
//               Free Guide
//             </Link>

//             <Link
//               href="/pricing"
//               className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition-colors"
//               onClick={closeMenu}
//             >
//               <IndianRupee className="h-4 w-4" />
//               Pricing
//             </Link>

//             <Link href="/blogs" className="text-gray-600 hover:text-gray-900 font-medium text-lg transition-colors py-2 border-b border-gray-100" onClick={closeMenu}>
//               Blog
//             </Link>

//             <a
//               href="https://whatsapp.vasifytech.com/account/login"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors py-2 text-lg font-medium"
//               onClick={closeMenu}
//             >
//               <User className="h-5 w-5" />
//               Login
//             </a>

//             <div className="pt-4">
//               <Button asChild className="bg-green-500 hover:bg-green-600 text-white px-6 py-6 rounded-lg font-medium w-full shadow-md text-base" onClick={closeMenu}>
//                 <Link href="/contact">
//                   Contact Us
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }


//testing
"use client"

import { useState, useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { Menu, X, User, Bot, IndianRupee, ChevronDown, Globe, MessageCircle, Megaphone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    setIsOpen(false)
    setServicesOpen(false)
  }, [pathname, searchParams])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
    setServicesOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <Button variant="ghost" size="sm" onClick={toggleMenu} className="p-2" aria-label="Toggle mobile menu">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 top-[73px] bg-black z-40 md:hidden transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Menu Content */}
      <div
        className={`fixed inset-x-0 top-[73px] bg-white shadow-lg z-50 md:hidden border-t transform transition-all duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col space-y-6">

            {/* Services Accordion */}
            <div>
              <button
                onClick={() => setServicesOpen((prev) => !prev)}
                className="flex items-center justify-between w-full text-lg font-medium text-gray-700 hover:text-green-600 transition-colors py-2 border-b border-gray-100"
              >
                Services
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesOpen && (
                <div className="mt-2 ml-2 flex flex-col space-y-1 border-l-2 border-green-100 pl-4 animate-fade-in">
                  <Link
                    href="/ai-agent"
                    className="flex items-center gap-2 py-2 text-gray-600 hover:text-green-600 font-medium transition-colors"
                    onClick={closeMenu}
                  >
                    <Bot className="h-4 w-4 text-green-500" />
                    AI Agent
                  </Link>
                  <Link
                    href="/whatsapp-services"
                    className="flex items-center gap-2 py-2 text-gray-600 hover:text-green-600 font-medium transition-colors text-base"
                    onClick={closeMenu}
                  >
                    <MessageCircle className="h-4 w-4 text-green-500" />
                    WhatsApp Services
                  </Link>
                  <Link
                    href="/website-development"
                    className="flex items-center gap-2 py-2 text-gray-600 hover:text-green-600 font-medium transition-colors text-base"
                    onClick={closeMenu}
                  >
                    <Globe className="h-4 w-4 text-green-500" />
                    Website Development
                  </Link>
                  <Link
                    href="/digital-marketing"
                    className="flex items-center gap-2 py-2 text-gray-600 hover:text-green-600 font-medium transition-colors text-base"
                    onClick={closeMenu}
                  >
                    <Megaphone className="h-4 w-4 text-green-500" />
                    Digital Marketing
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/products"
              className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors py-2 border-b border-gray-100"
              onClick={closeMenu}
            >
              Products
            </Link>

            <Link href="/free-whatsapp-business-guide" className="text-green-600 font-medium text-xl transition-colors" onClick={closeMenu}>
              Free Guide
            </Link>

            <Link
              href="/pricing"
              className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition-colors"
              onClick={closeMenu}
            >
              <IndianRupee className="h-4 w-4" />
              Pricing
            </Link>

            <Link href="/blogs" className="text-gray-600 hover:text-gray-900 font-medium text-lg transition-colors py-2 border-b border-gray-100" onClick={closeMenu}>
              Blog
            </Link>

            <a
              href="https://whatsapp.vasifytech.com/account/login"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors py-2 text-lg font-medium"
              onClick={closeMenu}
            >
              <User className="h-5 w-5" />
              Login
            </a>

            <div className="pt-4">
              <Button asChild className="bg-green-500 hover:bg-green-600 text-white px-6 py-6 rounded-lg font-medium w-full shadow-md text-base" onClick={closeMenu}>
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}