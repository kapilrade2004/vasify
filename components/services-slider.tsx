"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const services = [
  {
    title: "AI Chatbot Agent",
    tagline: "24/7 Intelligent Customer Engagement",
    description:
      "Deploy AI-powered chatbots that understand context, speak 50+ languages, and handle unlimited conversations simultaneously. Boost engagement by 300%.",
    href: "/ai-agent",
    gradient: "from-blue-500 via-purple-500 to-indigo-600",
    accentColor: "bg-blue-500",
    image: "/ai-chatbot-interface-with-conversation-bubbles-and.jpg",
  },
  {
    title: "WhatsApp Business API",
    tagline: "Official Meta Business Partner",
    description:
      "Transform customer engagement with official WhatsApp Business API. Build custom CRM flows, automate responses, and manage conversations at scale.",
    href: "/whatsappservices",
    gradient: "from-green-500 via-emerald-500 to-teal-600",
    accentColor: "bg-green-500",
    image: "/whatsapp-business-api-interface-with-message-templ.jpg",
  },
  {
    title: "Website & App Development",
    tagline: "Custom Digital Solutions",
    description:
      "Build stunning websites and mobile apps with cutting-edge technology. From e-commerce platforms to custom software, we bring your vision to life.",
    href: "/development",
    gradient: "from-orange-500 via-red-500 to-pink-600",
    accentColor: "bg-orange-500",
    image: "/modern-website-and-mobile-app-development-with-res.jpg",
  },
  {
    title: "Automate Your Business with AI Chatbots, WhatsApp API & Custom Development",
    tagline: "Meta Business Partner",
    description:
      "Complete digital transformation solutions: Deploy intelligent AI chatbots, automate WhatsApp engagement, and build custom websites & apps. Power your growth with VasifyTech.",
    href: "/",
    gradient: "from-emerald-500 via-green-500 to-teal-600",
    accentColor: "bg-emerald-500",
    image: "/slider1.png",
    isHeroStyle: true,
  },
]

export default function ServicesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      handleSlideChange((currentSlide + 1) % services.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentSlide])

  const handleSlideChange = (newIndex: number) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide(newIndex)
      setIsTransitioning(false)
    }, 300)
  }

  const nextSlide = () => {
    handleSlideChange((currentSlide + 1) % services.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    handleSlideChange((currentSlide - 1 + services.length) % services.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    handleSlideChange(index)
    setIsAutoPlaying(false)
  }

  const currentService = services[currentSlide]

  return (
    <div className="relative w-full overflow-hidden">
      {/* Main Slider Card */}
      <Card className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white border-0 shadow-2xl w-full rounded-xl sm:rounded-2xl">
        <div
          className={`absolute inset-0 bg-gradient-to-r ${currentService.gradient} opacity-20 transition-opacity duration-500`}
        ></div>

        <div className="relative p-3 sm:p-4 md:p-6 lg:p-10 xl:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 items-center w-full">
            {/* Left Content */}
            <div
              className={`space-y-3 sm:space-y-4 md:space-y-5 transition-all duration-500 w-full order-2 lg:order-1 ${
                isTransitioning ? "opacity-0 -translate-x-5" : "opacity-100 translate-x-0"
              }`}
            >
              <div className="w-full">
                <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-300 mb-1 sm:mb-2 uppercase tracking-wide">
                  {currentService.tagline}
                </p>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 sm:mb-3 leading-tight">
                  {currentService.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed">
                  {currentService.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1 sm:pt-2 w-full">
                <Button
                  size="lg"
                  className={`${currentService.accentColor} hover:opacity-90 text-white group w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 py-2 sm:px-5 sm:py-2.5 h-9 sm:h-10 md:h-11`}
                  asChild
                >
                  <Link href={currentService.href}>
                    {currentService.isHeroStyle ? "Start Free Trial" : `Explore ${currentService.title}`}
                    <ArrowRight className="ml-1.5 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                {currentService.isHeroStyle && (
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 hover:bg-white/20 text-white border-white/20 w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 py-2 sm:px-5 sm:py-2.5 h-9 sm:h-10 md:h-11"
                    asChild
                  >
                    <Link href="/ai-agent">Talk to AI Agent</Link>
                  </Button>
                )}
              </div>
            </div>

            {/* Right Image/Content */}
            <div
              className={`relative transition-all duration-500 w-full order-1 lg:order-2 ${
                isTransitioning ? "opacity-0 translate-x-5 scale-95" : "opacity-100 translate-x-0 scale-100"
              }`}
            >
              <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] md:aspect-[16/10] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <img
                  src={currentService.image || "/placeholder.svg"}
                  alt={currentService.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${currentService.gradient} opacity-30`}></div>

                {!currentService.isHeroStyle && (
                  <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 md:bottom-4 md:left-4 md:right-4 bg-white/95 backdrop-blur-md rounded-md sm:rounded-lg md:rounded-xl p-2 sm:p-2.5 md:p-3 shadow-lg">
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-3">
                      <div className="text-center">
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900">24/7</p>
                        <p className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-600">Available</p>
                      </div>
                      <div className="text-center border-x border-gray-200">
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900">50+</p>
                        <p className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-600">Languages</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900">99%</p>
                        <p className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-600">Uptime</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0.5 sm:left-1 md:left-2 lg:left-3 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-11 lg:h-11 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0.5 sm:right-1 md:right-2 lg:right-3 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-11 lg:h-11 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white group-hover:scale-110 transition-transform" />
        </button>
      </Card>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-1.5 sm:gap-2 md:gap-2.5 mt-3 sm:mt-4 md:mt-5">
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index
                ? "w-5 sm:w-7 md:w-10 h-1.5 sm:h-2 md:h-2.5 bg-primary"
                : "w-1.5 sm:w-2 md:w-2.5 h-1.5 sm:h-2 md:h-2.5 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}