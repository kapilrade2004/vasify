"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Bot, MessageSquare, Code, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const services = [
  {
    icon: Bot,
    title: "AI Chatbot Agent",
    tagline: "24/7 Intelligent Customer Engagement",
    description:
      "Deploy AI-powered chatbots that understand context, speak 50+ languages, and handle unlimited conversations simultaneously. Boost engagement by 300%.",
    features: [
      "Multi-channel deployment (WhatsApp, Website, Facebook, Instagram)",
      "Natural language understanding & multilingual support",
      "Industry-specific templates (Real Estate, Healthcare, E-commerce)",
      "Smart lead qualification & automated follow-ups",
    ],
    href: "/ai-agent",
    gradient: "from-blue-500 via-purple-500 to-indigo-600",
    accentColor: "bg-blue-500",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Business API",
    tagline: "Official Meta Business Partner",
    description:
      "Transform customer engagement with official WhatsApp Business API. Build custom CRM flows, automate responses, and manage conversations at scale.",
    features: [
      "Official WhatsApp API access & verified badge",
      "Broadcast messaging to unlimited customers",
      "Rich media support (images, videos, documents, catalogs)",
      "Advanced analytics & conversation insights",
    ],
    href: "/whatsappservices",
    gradient: "from-green-500 via-emerald-500 to-teal-600",
    accentColor: "bg-green-500",
  },
  {
    icon: Code,
    title: "Website & App Development",
    tagline: "Custom Digital Solutions",
    description:
      "Build stunning websites and mobile apps with cutting-edge technology. From e-commerce platforms to custom software, we bring your vision to life.",
    features: [
      "Responsive web design & progressive web apps",
      "iOS & Android native app development",
      "E-commerce platforms with payment integration",
      "Custom CRM, ERP & business automation tools",
    ],
    href: "/development",
    gradient: "from-orange-500 via-red-500 to-pink-600",
    accentColor: "bg-orange-500",
  },
]

export default function ServicesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const currentService = services[currentSlide]
  const Icon = currentService.icon

  return (
    <div className="relative w-full">
      {/* Main Slider Card */}
      <Card className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white border-0 shadow-2xl">
        <div className={`absolute inset-0 bg-gradient-to-r ${currentService.gradient} opacity-20`}></div>

        <div className="relative p-8 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div
                className={`inline-flex items-center justify-center w-20 h-20 ${currentService.accentColor} rounded-2xl shadow-lg`}
              >
                <Icon className="w-10 h-10 text-white" />
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-300 mb-2">{currentService.tagline}</p>
                <h3 className="text-4xl md:text-5xl font-bold mb-4">{currentService.title}</h3>
                <p className="text-lg text-gray-200 leading-relaxed">{currentService.description}</p>
              </div>

              <div className="space-y-3">
                {currentService.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div
                      className={`w-6 h-6 ${currentService.accentColor} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}
                    >
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <span className="text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className={`${currentService.accentColor} hover:opacity-90 text-white`} asChild>
                <Link href={currentService.href}>
                  Explore {currentService.title}
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className={`bg-gradient-to-br ${currentService.gradient} rounded-3xl p-8 shadow-2xl`}>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 ${currentService.accentColor} rounded-full flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{currentService.title}</p>
                      <p className="text-xs text-gray-200">Always Available</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-sm text-white">Ready to transform your business?</p>
                    </div>
                    <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4 ml-6">
                      <p className="text-sm text-white">Get started with {currentService.title} today!</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                      <p className="text-2xl font-bold text-white">24/7</p>
                      <p className="text-xs text-gray-200">Available</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                      <p className="text-2xl font-bold text-white">50+</p>
                      <p className="text-xs text-gray-200">Languages</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                      <p className="text-2xl font-bold text-white">99%</p>
                      <p className="text-xs text-gray-200">Uptime</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
      </Card>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-3 mt-6">
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index ? "w-12 h-3 bg-primary" : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
