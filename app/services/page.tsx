"use client"

import {
  ArrowRight,
  MessageCircle,
  Bot,
  ShoppingCart,
  Users,
  BarChart3,
  QrCode,
  Code,
  Globe,
  Smartphone,
  Database,
  TrendingUp,
  Palette,
  Shield,
  Server,
  Cloud,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import WhatsAppButton from "@/components/whatsapp-button"
import { useState } from "react"
import MobileNav from "@/components/mobile-nav"

export default function ServicesPage() {
  const [showCustomServices, setShowCustomServices] = useState(false)

  const whatsappServices = [
    {
      icon: Bot,
      title: "WhatsApp Automation",
      description: "Complete automation solutions for customer engagement and support on WhatsApp",
      features: ["Chatbot Development", "Automated Workflows", "Smart Responses", "Lead Qualification"],
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: ShoppingCart,
      title: "WhatsApp E-commerce",
      description: "Complete online store solutions integrated with WhatsApp for seamless shopping experience",
      features: ["Product Catalog", "Order Management", "Payment Integration", "Customer Support"],
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Users,
      title: "CRM Software Solutions",
      description: "Customer Relationship Management systems integrated with WhatsApp for streamlined sales",
      features: ["Lead Management", "Sales Pipeline", "Customer Analytics", "WhatsApp Integration"],
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: BarChart3,
      title: "Analytics & ROI Dashboard",
      description: "Comprehensive analytics from chat interactions to conversion, providing clear ROI insights",
      features: ["Chat Analytics", "Conversion Tracking", "ROI Reports", "Performance Metrics"],
      color: "from-orange-500 to-red-600",
    },
    {
      icon: QrCode,
      title: "QR Code Journeys",
      description: "Innovative offline-to-online conversion flows via QR codes for enhanced customer engagement",
      features: ["QR Code Generation", "Landing Pages", "Conversion Tracking", "Campaign Management"],
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: Code,
      title: "Developer Tools & APIs",
      description: "Robust public APIs, seamless integrations, and webhook support for advanced customization",
      features: ["REST APIs", "Webhook Support", "Custom Integrations", "Developer Documentation"],
      color: "from-teal-500 to-green-600",
    },
  ]

  const customServices = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Professional websites optimized for lead generation and conversions",
      features: ["Responsive Design", "SEO Optimization", "Fast Loading", "Lead Capture Forms"],
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["Native iOS/Android", "React Native", "Flutter Development", "App Store Optimization"],
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Database,
      title: "ERP Systems",
      description: "Enterprise Resource Planning solutions for complete business management",
      features: ["Inventory Management", "Financial Planning", "HR Management", "Supply Chain"],
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: Cloud,
      title: "SaaS Development",
      description: "Software as a Service platforms built for scalability and performance",
      features: ["Multi-tenant Architecture", "Subscription Management", "API Development", "Cloud Hosting"],
      color: "from-teal-500 to-green-600",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence",
      features: ["Social Media Marketing", "SEO/SEM", "Content Strategy", "Analytics & Reporting"],
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user experience and engagement",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security solutions to protect your business from cyber threats",
      features: ["Security Audits", "Penetration Testing", "Data Protection", "Compliance Management"],
      color: "from-red-500 to-pink-600",
    },
    {
      icon: Server,
      title: "Cloud Solutions",
      description: "Cloud migration and management services for scalable business operations",
      features: ["Cloud Migration", "AWS/Azure Setup", "DevOps Services", "Backup Solutions"],
      color: "from-blue-600 to-indigo-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-green-500">WhatsApp Business</span> Solutions & More
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From WhatsApp automation to custom software development, we provide end-to-end solutions to help your
            business thrive in the digital age.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-medium"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* WhatsApp Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">WhatsApp Business Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core WhatsApp services designed to transform your customer engagement and drive business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatsappServices.map((service, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-sm hover:shadow-lg active:shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:-translate-y-1 h-full"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Software Services Toggle */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Need More Than WhatsApp?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We also offer comprehensive custom software development services to meet all your business needs.
          </p>

          <Button
            onClick={() => setShowCustomServices(!showCustomServices)}
            size="lg"
            variant="outline"
            className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-lg text-lg font-medium"
          >
            {showCustomServices ? "Hide" : "View"} Custom Software Services
            {showCustomServices ? <ChevronUp className="ml-2 h-5 w-5" /> : <ChevronDown className="ml-2 h-5 w-5" />}
          </Button>
        </div>
      </section>

      {/* Custom Services Section */}
      {showCustomServices && (
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Custom Software Development</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete digital solutions including web development, mobile apps, and enterprise software.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {customServices.map((service, index) => (
                <Card
                  key={index}
                  className="bg-white border-0 shadow-sm hover:shadow-lg active:shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:-translate-y-1 h-full"
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <ul className="space-y-2 mb-6 flex-grow">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-gray-500 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                        Get Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Why Choose VasifyTech?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We combine technical expertise with business understanding to deliver solutions that drive real results.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "WhatsApp Experts",
                description: "Meta Business Partners with specialized expertise in WhatsApp Business solutions",
              },
              {
                title: "Proven Results",
                description: "500+ successful projects with measurable improvements in customer engagement",
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock support to ensure your business never misses an opportunity",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-green-500">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-xl mb-8 text-green-100">
              Let's discuss your project and create a custom solution that fits your business needs perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-medium"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-medium w-full sm:w-auto bg-transparent"
                >
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  )
}
