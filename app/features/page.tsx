"use client"
import {
  ArrowRight,
  MessageCircle,
  Zap,
  Users,
  BarChart3,
  Shield,
  Bot,
  Clock,
  Globe,
  Smartphone,
  ShoppingCart,
  QrCode,
  Code,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import WhatsAppButton from "@/components/whatsapp-button"
import MobileNav from "@/components/mobile-nav"

export default function FeaturesPage() {
  const features = [
    {
      icon: Zap,
      title: "Instant Automation",
      description: "Set up automated responses and workflows in minutes, not hours",
      details: [
        "Quick reply templates",
        "Automated welcome messages",
        "Smart keyword triggers",
        "Custom workflow builder",
      ],
    },
    {
      icon: Users,
      title: "Multi-Agent Support",
      description: "Manage multiple customer conversations with team collaboration",
      details: ["Team inbox management", "Agent assignment rules", "Internal notes and tags", "Performance tracking"],
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track performance with detailed insights and reporting",
      details: [
        "Message delivery rates",
        "Response time metrics",
        "Customer engagement stats",
        "Custom report builder",
      ],
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with full compliance and data protection",
      details: ["End-to-end encryption", "GDPR compliance", "Data backup & recovery", "Access control management"],
    },
    {
      icon: Bot,
      title: "AI-Powered Chatbots",
      description: "Intelligent chatbots that understand and respond naturally",
      details: [
        "Natural language processing",
        "Context-aware responses",
        "Learning from interactions",
        "Seamless human handoff",
      ],
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a customer inquiry with round-the-clock automation",
      details: [
        "Always-on customer support",
        "Timezone-aware scheduling",
        "After-hours messaging",
        "Emergency escalation",
      ],
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Communicate with customers in their preferred language",
      details: [
        "50+ supported languages",
        "Auto-translation features",
        "Localized templates",
        "Cultural customization",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Optimized for mobile devices with native app experience",
      details: ["Responsive web interface", "Mobile app available", "Touch-friendly controls", "Offline message sync"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Powerful Features for <span className="text-green-500">WhatsApp Success</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Everything you need to automate, engage, and grow your business on WhatsApp. Built for modern businesses
            that demand results.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-medium"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Key Services Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Core WhatsApp Business Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our key offerings designed to transform your WhatsApp business communication and drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "WhatsApp CRM",
                description:
                  "Lead pipeline and sales automation seamlessly integrated within WhatsApp chat for streamlined operations.",
                details: [
                  "Lead management within WhatsApp",
                  "Sales pipeline automation",
                  "Customer data synchronization",
                  "Follow-up reminders",
                ],
              },
              {
                icon: ShoppingCart,
                title: "Smart Catalog & Ordering",
                description:
                  "Interactive product and service catalog complete with integrated payment functionalities.",
                details: [
                  "Interactive product catalogs",
                  "One-click ordering system",
                  "Payment gateway integration",
                  "Order tracking automation",
                ],
              },
              {
                icon: QrCode,
                title: "QR Code Journeys",
                description:
                  "Innovative offline-to-online conversion flows via QR codes for enhanced customer engagement.",
                details: [
                  "Custom QR code generation",
                  "Landing page creation",
                  "Conversion tracking",
                  "Campaign analytics",
                ],
              },
              {
                icon: Bot,
                title: "Prebuilt Chatbot Templates",
                description:
                  "Ready-to-use chatbot templates tailored for diverse sectors like real estate, education, and retail.",
                details: [
                  "Industry-specific templates",
                  "Customizable workflows",
                  "AI-powered responses",
                  "Multi-language support",
                ],
              },
              {
                icon: BarChart3,
                title: "Analytics & ROI Dashboard",
                description:
                  "Comprehensive analytics from chat interactions to conversion, providing clear ROI insights.",
                details: ["Real-time analytics", "Conversion tracking", "ROI calculations", "Performance reports"],
              },
              {
                icon: Code,
                title: "Developer Tools",
                description:
                  "Robust public APIs, seamless integrations, and webhook support for advanced customization and connectivity.",
                details: [
                  "REST API access",
                  "Webhook integrations",
                  "Custom development tools",
                  "Third-party integrations",
                ],
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-2xl flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
                  <p className="text-gray-600">{feature.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Additional Platform Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced capabilities that make VasifyTech the most comprehensive WhatsApp business platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-2xl flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
                  <p className="text-gray-600">{feature.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-green-500">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to experience these features?</h2>
            <p className="text-xl mb-8 text-green-100">
              Start your free trial today and see how VasifyTech can transform your WhatsApp business communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-medium"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg text-lg font-medium"
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
