"use client"
import {
  ArrowRight,
  Star,
  Users,
  Zap,
  Shield,
  BarChart3,
  Bot,
  Code,
  GraduationCap,
  MessageSquare,
  Brain,
  Languages,
  TrendingUp,
  ShoppingBag,
  Heart,
  Car,
  Hotel,
  Home,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import WhatsAppButton from "@/components/whatsapp-button"
import { useState } from "react"
import ServicesSlider from "@/components/services-slider"
import IndustryDemoSection from "@/components/industry-demo-section"
import BrandMarquee from "@/components/brand-marquee"

export default function HomePage() {
  const trustedLogos = [
    "NICMAR",
    "Parul University",
    "RINGS & I",
    "SNAP",
    "Sri Balaji Society",
    "AFAIRS",
    "IMS",
  ]

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
      cta: "Explore AI Chatbots",
      gradient: "from-primary/10 to-primary/5",
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
      href: "/whatsapp-api",
      cta: "Get WhatsApp API",
      gradient: "from-primary/10 to-primary/5",
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
      cta: "Build Your Platform",
      gradient: "from-primary/10 to-primary/5",
    },
  ]

  const whyChooseUs = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced AI that learns and adapts to your business needs",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Languages,
      title: "Multi-Language Support",
      description: "Communicate in 50+ languages including all Indian languages",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Instant responses and real-time processing",
      color: "from-lime-500 to-green-500",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with full compliance",
      color: "from-emerald-600 to-green-600",
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Round-the-clock customer support and monitoring",
      color: "from-teal-600 to-emerald-600",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Average 300% increase in customer engagement",
      color: "from-green-600 to-emerald-600",
    },
  ]

  const industries = [
    { name: "E-commerce", icon: "🛍️" },
    { name: "Healthcare", icon: "🏥" },
    { name: "Education", icon: "🎓" },
    { name: "Banking", icon: "🏦" },
    { name: "Real Estate", icon: "🏢" },
    { name: "Travel", icon: "✈️" },
    { name: "Retail", icon: "🛒" },
    { name: "Hospitality", icon: "🏨" },
  ]

  const industries1 = [
    {
      id: "real-estate",
      name: "Real Estate",
      icon: Home,
      caption:
        "See how our AI Agent handles customer queries, schedules demos, and shares pricing instantly.",
      demoPrompt:
        "Hi! I'm interested in 2BHK apartments in Mumbai. Can you show me available options?",
    },
    {
      id: "hospitality",
      name: "Hospitality",
      icon: Hotel,
      caption:
        "Automate 24x7 guest inquiries, booking confirmations, and service requests.",
      demoPrompt:
        "Do you have rooms available for this weekend? What are your rates?",
    },
    {
      id: "car-rental",
      name: "Car Rental",
      icon: Car,
      caption:
        "Handle booking inquiries, pricing, and availability checks automatically.",
      demoPrompt:
        "I need to rent an SUV for 3 days. What are your options and prices?",
    },
    {
      id: "healthcare",
      name: "Healthcare",
      icon: Heart,
      caption:
        "Simplify appointment scheduling and patient inquiry management.",
      demoPrompt:
        "I'd like to book an appointment with a dentist. Are there any slots available this week?",
    },
    {
      id: "ecommerce",
      name: "E-commerce",
      icon: ShoppingBag,
      caption: "Upsell instantly via chat, track orders, and answer product queries.",
      demoPrompt: "I'm looking for wireless headphones under ₹2000. What do you recommend?",
    },
    {
      id: "education",
      name: "Education",
      icon: GraduationCap,
      caption:
        "Automate student counseling, admissions, and course inquiries.",
      demoPrompt:
        "What are the admission requirements for MBA programs? When does the next batch start?",
    },
  ]

  const [activeTab, setActiveTab] = useState("real-estate")
  const [showDemo, setShowDemo] = useState(false)

  const currentIndustry = industries1.find((ind) => ind.id === activeTab)

  const features = [
    {
      icon: Zap,
      title: "Instant Automation",
      description: "Set up automated responses and workflows in minutes, not hours",
    },
    {
      icon: Users,
      title: "Multi-Agent Support",
      description: "Manage multiple customer conversations with team collaboration",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track performance with detailed insights and reporting",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with full compliance and data protection",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Hero Section with Slider */}
      <section className="pt-20 md:pt-24 pb-8 md:pb-12 px-2 sm:px-4">
        <div className="container mx-auto px-0 sm:px-2 md:px-4 lg:px-6 max-w-7xl">
          <ServicesSlider />
        </div>
      </section>

      {/* Brand Marquee Section */}
      <BrandMarquee />

      <IndustryDemoSection />

      {/* Core Services Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Complete Digital Transformation Solutions
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Everything you need to automate customer engagement, scale operations, and drive business growth
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className={`p-6 md:p-8 hover:shadow-card-hover transition-all duration-300 border-2 hover:border-primary/30 bg-gradient-to-br ${service.gradient} flex flex-col h-full`}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary flex items-center justify-center mb-4 md:mb-6">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-xs md:text-sm text-primary font-medium mb-3 md:mb-4">{service.tagline}</p>
                  <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">{service.description}</p>

                  <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs md:text-sm">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full group mt-auto" asChild>
                    <Link href={service.href}>
                      {service.cta}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Target Industries Section */}
      <section className="py-12 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
                Why VasifyTech
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
              Why Businesses Choose Us
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Industry-leading technology combined with unmatched customer support and proven results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                    >
                      <item.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{item.title}</h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-12 md:py-24 px-4 sm:px-6 bg-white">
        <div className="container mx-auto text-center px-4 sm:px-6">
          <div className="inline-block mb-4">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
              Industries We Serve
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
            Trusted Across Industries
          </h2>
          <p className="text-base md:text-xl text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
            From startups to enterprises, businesses across all sectors trust VasifyTech to power their growth
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-2xl border-2 border-gray-200 hover:border-green-300 hover:shadow-lg transition-all transform hover:-translate-y-1 group"
              >
                <div className="text-4xl md:text-5xl mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <div className="text-base md:text-lg font-bold text-gray-800">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 md:py-20 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
              Loved by businesses worldwide
            </h2>
            <p className="text-base md:text-xl text-gray-600 px-4">
              See what our customers have to say about their experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Rajesh Kumar",
                company: "NICMAR",
                content: "VasifyTech transformed how we handle student inquiries. Response time improved by 80%.",
                rating: 5,
              },
              {
                name: "Priya Sharma",
                company: "Parul University",
                content: "The automation features are incredible. We're now handling 10x more conversations.",
                rating: 5,
              },
              {
                name: "Amit Patel",
                company: "SNAP",
                content: "Best WhatsApp Business solution we've used. Setup was incredibly easy.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-sm">
                <CardContent className="p-6 md:p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-4 md:mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-bold text-sm md:text-base text-gray-900">{testimonial.name}</div>
                    <div className="text-xs md:text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link href="/testimonials">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-green-500 text-green-600 hover:bg-green-50 px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-medium bg-transparent"
              >
                View All Testimonials
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-green-500">
        <div className="container mx-auto text-center px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4">
              Ready to transform your WhatsApp experience?
            </h2>
            <p className="text-base md:text-xl mb-6 md:mb-8 text-green-100 px-4">
              Join thousands of businesses already using VasifyTech to engage customers and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-medium w-full sm:w-auto"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
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

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}