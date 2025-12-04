// "use client"

// import { useEffect, useRef } from "react"

// const brands = [
//   { name: "Li-Ning", logo: "/lining-logo.jpg" },
//   { name: "Amazon", logo: "/amazon-logo.jpg" },
//   { name: "Suzlon", logo: "/suzlon-logo.jpg" },
//   { name: "JLL", logo: "/jll-logo.jpg" },
//   { name: "Vedantu", logo: "/vedantu-logo.jpg" },
//   { name: "TikTok", logo: "/tiktok-logo.jpg" },
//   { name: "NICMAR", logo: "/nicmar-logo.jpg" },
//   { name: "Parul University", logo: "/parul-university-logo.jpg" },
// ]

// export default function BrandMarquee() {
//   const scrollRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const scrollContainer = scrollRef.current
//     if (!scrollContainer) return

//     let animationFrameId: number
//     let scrollPosition = 0

//     const scroll = () => {
//       scrollPosition += 1
//       if (scrollPosition >= scrollContainer.scrollWidth / 2) {
//         scrollPosition = 0
//       }
//       scrollContainer.scrollLeft = scrollPosition
//       animationFrameId = requestAnimationFrame(scroll)
//     }

//     animationFrameId = requestAnimationFrame(scroll)

//     return () => {
//       cancelAnimationFrame(animationFrameId)
//     }
//   }, [])

//   return (
//     <section className="py-8 md:py-12 px-4 bg-white overflow-hidden border-y border-gray-100">
//       <div className="container mx-auto max-w-7xl">
//         <div className="text-center mb-6 md:mb-8">
//           <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900">
//             World's Best Brands <span className="text-primary">Use Vasify for WhatsApp Business API</span>
//           </h3>
//         </div>

//         <div
//           ref={scrollRef}
//           className="flex gap-8 md:gap-12 lg:gap-16 overflow-hidden whitespace-nowrap"
//           style={{ scrollBehavior: "auto" }}
//         >
//           {/* First set of logos */}
//           {brands.map((brand, index) => (
//             <div
//               key={`brand-1-${index}`}
//               className="inline-flex items-center justify-center flex-shrink-0 px-4 md:px-6 py-3 md:py-4"
//             >
//               <img
//                 src={brand.logo || "/placeholder.svg"}
//                 alt={`${brand.name} logo`}
//                 className="h-14 md:h-20 lg:h-24 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
//               />
//             </div>
//           ))}
//           {/* Duplicate set for seamless loop */}
//           {brands.map((brand, index) => (
//             <div
//               key={`brand-2-${index}`}
//               className="inline-flex items-center justify-center flex-shrink-0 px-4 md:px-6 py-3 md:py-4"
//             >
//               <img
//                 src={brand.logo || "/placeholder.svg"}
//                 alt={`${brand.name} logo`}
//                 className="h-14 md:h-20 lg:h-24 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


//testing
"use client"

import { useEffect, useRef } from "react"

const brands = [
  { name: "Li-Ning", logo: "/lining-logo.jpg" },
  { name: "Amazon", logo: "/amazon-logo.jpg" },
  { name: "Suzlon", logo: "/suzlon-logo.jpg" },
  { name: "JLL", logo: "/jll-logo.jpg" },
  { name: "Vedantu", logo: "/vedantu-logo.jpg" },
  { name: "TikTok", logo: "/tiktok-logo.jpg" },
  { name: "NICMAR", logo: "/nicmar-logo.jpg" },
  { name: "Parul University", logo: "/parul-university-logo.jpg" },
]

export default function BrandMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0

    const scroll = () => {
      scrollPosition += 1
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-8 md:py-12 px-4 bg-white overflow-hidden border-y border-gray-100">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-6 md:mb-8">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900">
            World&apos;s Best Brands <span className="text-primary">Use Vasify for WhatsApp Business API</span>
          </h3>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 sm:gap-8 md:gap-12 lg:gap-16 overflow-hidden whitespace-nowrap max-w-full"
          style={{ scrollBehavior: "auto" }}
        >
          {/* First set of logos */}
          {brands.map((brand, index) => (
            <div
              key={`brand-1-${index}`}
              className="inline-flex items-center justify-center flex-shrink-0 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4"
            >
              <img
                src={brand.logo || "/placeholder.svg"}
                alt={`${brand.name} logo`}
                className="h-8 sm:h-10 md:h-14 lg:h-20 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {brands.map((brand, index) => (
            <div
              key={`brand-2-${index}`}
              className="inline-flex items-center justify-center flex-shrink-0 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4"
            >
              <img
                src={brand.logo || "/placeholder.svg"}
                alt={`${brand.name} logo`}
                className="h-8 sm:h-10 md:h-14 lg:h-20 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
