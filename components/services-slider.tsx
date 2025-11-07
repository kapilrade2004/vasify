"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Bot, MessageSquare, Code, ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const services = [
  {
    title: "AI Chatbot Agent",
    tagline: "24/7 Intelligent Customer Engagement",
    description:
      "Deploy AI-powered chatbots that understand context, speak 50+ languages, and handle unlimited conversations simultaneously. Boost engagement by 300%.",
    // features: [
    //   "Multi-channel deployment (WhatsApp, Website, Facebook, Instagram)",
    //   "Natural language understanding & multilingual support",
    //   "Industry-specific templates (Real Estate, Healthcare, E-commerce)",
    //   "Smart lead qualification & automated follow-ups",
    // ],
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
    // features: [
    //   "Official WhatsApp API access & verified badge",
    //   "Broadcast messaging to unlimited customers",
    //   "Rich media support (images, videos, documents, catalogs)",
    //   "Advanced analytics & conversation insights",
    // ],
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
    // features: [
    //   "Responsive web design & progressive web apps",
    //   "iOS & Android native app development",
    //   "E-commerce platforms with payment integration",
    //   "Custom CRM, ERP & business automation tools",
    // ],
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
    // features: [
    //   "AI Chatbots - 24/7 intelligent responses",
    //   "WhatsApp API - Official Meta partner",
    //   "Website Development - Custom web solutions",
    //   "Mobile Apps - iOS & Android apps",
    //   "Lead Automation - Capture & qualify leads",
    //   "Analytics Dashboard - Track ROI & insights",
    // ],
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
      <Card className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white border-0 shadow-2xl max-w-full">
        <div
          className={`absolute inset-0 bg-gradient-to-r ${currentService.gradient} opacity-20 transition-opacity duration-500`}
        ></div>

        <div className="relative p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center max-w-full">
            {/* Left Content */}
            <div
              className={`space-y-4 md:space-y-6 transition-all duration-500 max-w-full ${isTransitioning ? "opacity-0 translate-x-[-20px]" : "opacity-100 translate-x-0"}`}
            >
              <div className="max-w-full">
                <p className="text-xs md:text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                  {currentService.tagline}
                </p>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 md:mb-4 leading-tight break-words">
                  {currentService.title}
                </h3>
                <p className="text-sm md:text-base lg:text-lg text-gray-200 leading-relaxed break-words">
                  {currentService.description}
                </p>
              </div>

              {/* {currentService.isHeroStyle ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 max-w-full">
                  {currentService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 group max-w-full">
                      <div
                        className={`w-5 h-5 md:w-6 md:h-6 ${currentService.accentColor} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}
                      >
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full" />
                      </div>
                      <span className="text-xs md:text-sm text-gray-200 break-words min-w-0">{feature}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-2 md:space-y-3 max-w-full">
                  {currentService.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 md:gap-3 group max-w-full">
                      <div
                        className={`w-5 h-5 md:w-6 md:h-6 ${currentService.accentColor} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}
                      >
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full" />
                      </div>
                      <span className="text-xs md:text-sm lg:text-base text-gray-200 break-words min-w-0">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              )} */}

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 max-w-full">
                <Button
                  size="lg"
                  className={`${currentService.accentColor} hover:opacity-90 text-white group w-full sm:w-auto text-sm md:text-base`}
                  asChild
                >
                  <Link href={currentService.href}>
                    {currentService.isHeroStyle ? "Start Free Trial" : `Explore ${currentService.title}`}
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                {currentService.isHeroStyle && (
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 hover:bg-white/20 text-white border-white/20 w-full sm:w-auto text-sm md:text-base"
                    asChild
                  >
                    <Link href="/ai-agent">Talk to AI Agent</Link>
                  </Button>
                )}
              </div>
            </div>

            {/* Right Image/Content */}
            <div
              className={`relative transition-all duration-500 max-w-full ${isTransitioning ? "opacity-0 translate-x-[20px] scale-95" : "opacity-100 translate-x-0 scale-100"}`}
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-2 md:border-4 border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                <img
                  src={currentService.image || "/placeholder.svg"}
                  alt={currentService.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${currentService.gradient} opacity-30`}></div>

                {!currentService.isHeroStyle && (
                  <div className="absolute bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-4 bg-white/95 backdrop-blur-md rounded-lg md:rounded-xl p-3 md:p-4 shadow-lg">
                    <div className="grid grid-cols-3 gap-2 md:gap-3">
                      <div className="text-center">
                        <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">24/7</p>
                        <p className="text-[10px] md:text-xs text-gray-600">Available</p>
                      </div>
                      <div className="text-center border-x border-gray-200">
                        <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">50+</p>
                        <p className="text-[10px] md:text-xs text-gray-600">Languages</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">99%</p>
                        <p className="text-[10px] md:text-xs text-gray-600">Uptime</p>
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
          className="absolute left-1 md:left-2 lg:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-1 md:right-2 lg:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
      </Card>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 md:gap-3 mt-4 md:mt-6">
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index
                ? "w-8 md:w-12 h-2 md:h-3 bg-primary"
                : "w-2 md:w-3 h-2 md:h-3 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
