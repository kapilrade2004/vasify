"use client"
import {
  ArrowRight,
  MessageCircle,
  Play,
  Star,
  Users,
  Zap,
  Shield,
  BarChart3,
  Bot,
  ShoppingCart,
  QrCode,
  Code,
  Building,
  GraduationCap,
  CreditCard,
  Plane,
  UserCheck,
  Check,
  Crown,
  Rocket
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ClipboardList, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import WhatsAppButton from "@/components/whatsapp-button"
import Image from "next/image"

export default function HomePage() {
  const coreServices = [
    {
      icon: Users,
      title: "WhatsApp CRM",
      description:
        "Lead pipeline and sales automation seamlessly integrated within WhatsApp chat for streamlined operations.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: ShoppingCart,
      title: "Smart Catalog & Ordering",
      description: "Interactive product and service catalog complete with integrated payment functionalities.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: QrCode,
      title: "QR Code Journeys",
      description: "Innovative offline-to-online conversion flows via QR codes for enhanced customer engagement.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Bot,
      title: "Prebuilt Chatbot Templates",
      description:
        "Ready-to-use chatbot templates tailored for diverse sectors like real estate, education, and retail.",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: BarChart3,
      title: "Analytics & ROI Dashboard",
      description: "Comprehensive analytics from chat interactions to conversion, providing clear ROI insights.",
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: Code,
      title: "Developer Tools",
      description:
        "Robust public APIs, seamless integrations, and webhook support for advanced customization and connectivity.",
      color: "from-gray-600 to-gray-800",
    },
  ]

  const targetIndustries = [
    {
      icon: ShoppingCart,
      title: "Retail & Services",
      description:
        "Retailers, salons, gyms, and clinics looking to enhance customer engagement and streamline operations.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Building,
      title: "Real Estate",
      description:
        "Agents and developers aiming to automate lead management and client communication directly via WhatsApp.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: GraduationCap,
      title: "EdTech & Coaching",
      description: "Institutes and platforms seeking efficient student communication and enrollment processes.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: CreditCard,
      title: "BFSI & Insurance",
      description: "Advisors in banking, finance, and insurance requiring secure and automated client interactions.",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: Plane,
      title: "Hospitality & Travel",
      description: "Hotels and travel agents looking to manage bookings and customer inquiries seamlessly.",
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: UserCheck,
      title: "Freelancers & Consultants",
      description:
        "Independent professionals and regional service providers needing a robust tool for client acquisition and management.",
      color: "from-teal-500 to-green-600",
    },
  ]

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

  const whatsappPlans = [
    {
      name: "Free",
      price: "₹0",
      period: "7 days",
      description: "Perfect for getting started with WhatsApp Business",
      icon: <Zap className="h-6 w-6" />,
      popular: false,
      features: [
        "Unlimited Free Service Conversations/month",
        "Free WhatsApp Business API",
        "Free WhatsApp Blue Tick Application",
        "₹1 Free Conversation Credit",
        "Click to WhatsApp Ads Manager",
        "Upload & Manage Contacts",
        "Create tags & attributes",
        "Upto 10 Tags",
        "Live Chat Dashboard",
      ],
    },
    {
      name: "Basic",
      price: "₹999",
      period: "/month",
      description: "Ideal for small businesses with growing needs",
      icon: <Star className="h-6 w-6" />,
      popular: false,
      features: [
        "All features in Free Plan",
        "Unlimited Agent Logins",
        "Smart Audience Segregation",
        "Broadcasting & Retargeting",
        "Template Message APIs",
        "Multi-Agent Live Chat",
        "Marketplace Integrations",
        "2400 Messages/min",
        "Shopify & WooCommerce Integrations",
      ],
    },
    {
      name: "Pro",
      price: "₹1999",
      period: "/month",
      description: "Advanced features for growing businesses",
      icon: <Crown className="h-6 w-6" />,
      popular: true,
      features: [
        "All features in Basic Plan",
        "Upto 100 Tags",
        "Upto 20 Custom Attributes",
        "Campaign Scheduler",
        "Campaign Click Tracking",
        "Smart Agent Routing",
        "Campaign Budget Analytics",
        "Project APIs",
        "Custom Agent Rules",
        "Google Sheets Integration",
        "User Access Control",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "/month",
      description: "Complete solution for enterprises",
      icon: <Rocket className="h-6 w-6" />,
      popular: false,
      features: [
        "All features in Pro Plan",
        "Recommended for Brands with 5 Lac+ Users",
        "Unlimited Tags",
        "Unlimited Attributes",
        "Downloadable Reports",
        "Dedicated Account Manager",
        "Priority Customer Support",
        "Webhooks",
        "Higher Messaging Speed",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="pt-16 pb-10 px-2 sm:pt-24 sm:pb-14 md:pt-32 md:pb-20 md:px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  The Ultimate <span className="text-green-500">WhatsApp Business Platform</span> for Automated Engagement
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg">
                  Use the official WhatsApp Business API to build custom CRM flows, automated chatbots, and more. Power your customer engagement with VasifyTech.
                </p>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4">
                <div className="bg-white border-2 border-blue-200 rounded-lg px-2 py-2 sm:px-4 sm:py-3 flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">M</span>
                  </div>
                  <div>
                    <div className="font-bold text-blue-600 text-xs sm:text-sm">Meta</div>
                    <div className="text-gray-600 text-xs">Business Partner</div>
                  </div>
                </div>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-green-500 hover:bg-green-600 text-white px-4 sm:px-8 py-2 sm:py-4 rounded-lg text-base sm:text-lg font-medium"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <a
                href="https://youtu.be/JuC47lwhk78"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-xl md:rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
              >
                <Image
                  src="/whatsapphero.jpg"
                  alt="VasifyTech WhatsApp Business Platform Demo Video"
                  width={600}
                  height={350}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" fill="white" />
                  </div>
                </div>
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-red-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-md text-xs sm:text-sm font-semibold flex items-center gap-2">
                  <Play className="w-4 h-4" fill="white" />
                  Watch Demo
                </div>
              </a>
              <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 sm:w-6 sm:h-6 bg-blue-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-8 px-2 sm:py-16 sm:px-4 md:py-20 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-6">Our WhatsApp Business Platform Services</h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl md:max-w-3xl mx-auto">
              Comprehensive WhatsApp automation solutions designed to transform your customer engagement and drive growth.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {coreServices.map((service, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-4 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center`}
                  >
                    <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle className="text-sm sm:text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center text-xs sm:text-base">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-12">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white px-4 sm:px-8 py-2 sm:py-4 rounded-lg text-base sm:text-lg font-medium"
              >
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-8 px-2 sm:py-16 sm:px-4 md:py-20 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-6">
              Powerful Features of Our WhatsApp Automation Platform
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl md:max-w-3xl mx-auto">
              Engage customers, automate workflows, and grow your business with our enterprise-grade features.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-4 bg-green-100 rounded-2xl flex items-center justify-center">
                    <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-sm sm:text-xl font-bold text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center text-xs sm:text-base">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-12">
            <Link href="/features">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-green-500 text-green-600 hover:bg-green-50 px-4 sm:px-8 py-2 sm:py-4 rounded-lg text-base sm:text-lg font-medium"
              >
                View All Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Target Industries Section */}
      <section className="py-8 px-2 sm:py-16 sm:px-4 md:py-20 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-6">WhatsApp Solutions For Your Industry</h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl md:max-w-3xl mx-auto">
              Tailored solutions for diverse industries like real estate and retail, helping businesses of all sizes leverage WhatsApp for growth.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {targetIndustries.map((industry, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 h-full"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-4 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center`}
                  >
                    <industry.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle className="text-sm sm:text-xl font-bold text-gray-900">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center text-xs sm:text-base">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



           {/* WhatsApp Services Pricing (Get Started Card) */}
      <section className="py-8 px-2 sm:py-16 sm:px-4 md:py-20 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-6">WhatsApp Services Pricing</h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl md:max-w-3xl mx-auto">
              Choose the perfect plan for your WhatsApp Business automation needs. Start free and scale as you grow.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {whatsappPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "ring-2 ring-green-500 shadow-xl scale-105" : "shadow-lg"} hover:shadow-xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-500 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <div
                    className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${plan.popular ? "bg-green-500 text-white" : "bg-gray-100 text-gray-600"}`}
                  >
                    {plan.icon}
                  </div>
                  <CardTitle className="text-lg sm:text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-2 sm:mt-4">
                    <span className="text-xl sm:text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="ml-1 text-gray-600">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2 sm:mt-4 text-gray-600">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/contact">
                    <Button
                      className={`w-full mb-4 sm:mb-6 ${plan.popular ? "bg-green-500 hover:bg-green-600" : "bg-gray-900 hover:bg-gray-800"} text-white`}
                    >
                      {plan.name === "Free" ? "Get Started Free" : "Choose Plan"}
                    </Button>
                  </Link>
                  <div>
                    <h4 className="font-semibold text-xs sm:text-sm text-gray-700 mb-2 sm:mb-3">Features</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-requisites Section (Styled Like Other Cards, More Compact + Responsive) */}
     









<section className="py-8 sm:py-14 md:py-16 px-4 sm:px-6 bg-gradient-to-br from-white via-green-50 to-green-100 relative overflow-hidden">
  <div className="container mx-auto max-w-full px-4 sm:px-6 relative z-10">

    {/* Header */}
    <div className="text-center mb-8 sm:mb-12 px-2 sm:px-0">
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent mb-4">
        Pre-requisites for WhatsApp Business API Setup
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Make sure you have these essentials ready before starting your WhatsApp Business API journey.
      </p>
    </div>

    {/* FIRST CARD (Full Width Requirements Card) */}
  

    {/* THREE FEATURE CARDS */}
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2">

      {/* Card 1 */}
      <Card className="min-h-[330px] sm:min-h-[360px] md:min-h-[380px] border-0 shadow-xl rounded-3xl bg-white/90 backdrop-blur-sm p-6 flex flex-col transition-all hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">
        <CardHeader>
            {/* <h4>Step 1</h4> */}
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center">
              <ClipboardList className="w-6 h-6 text-green-700" />
            </div>
            <h3 className="text-green-700 font-semibold text-lg">Requirements</h3>
          </div>
        </CardHeader>

        <CardContent className="flex-1">
          <ul className="mt-3 space-y-4 text-gray-800 text-sm sm:text-base">
            {[
              "Meta Business Manager Account",
              "Active Facebook Page",
              "New Phone Number",
              "Display Name & Branding",
              "Authorized Contact Details",
            ].map((item, i) => (
              <li
                key={i}
                className="flex gap-3 items-center text-gray-700"
              >
                <Check className="w-4 h-4 text-green-600" />
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Card 2 */}
      <Card className="min-h-[330px] sm:min-h-[360px] md:min-h-[380px] border-0 shadow-xl rounded-3xl bg-white/90 backdrop-blur-sm p-6 flex flex-col items-center justify-center text-center transition-all hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">
       {/* <h4>Step 2</h4> */}
        <div className="flex flex-col items-center gap-4">
          <div className="rounded-full bg-blue-100 w-14 h-14 flex items-center justify-center shadow-inner">
            <Phone className="w-7 h-7 text-blue-700" />
          </div>
          <span className="text-blue-700 font-semibold text-xl">
            Our Team Will Connect Your Number
          </span>
        </div>
      </Card>

      {/* Card 3 */}
      <Card className="min-h-[330px] sm:min-h-[360px] md:min-h-[380px] border-0 shadow-xl rounded-3xl bg-white/90 backdrop-blur-sm p-6 flex flex-col items-center justify-center text-center transition-all hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">
        <div className="flex flex-col items-center gap-4">
          <div className="rounded-full bg-purple-100 w-14 h-14 flex items-center justify-center shadow-inner">
            <Rocket className="w-7 h-7 text-purple-700" />
          </div>
          <span className="text-purple-700 font-semibold text-xl">
            Start Campaign
          </span>
        </div>
      </Card>

    </div>

  </div>

  {/* Background accents */}
  <div className="absolute top-0 left-0 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-40 -z-10 animate-pulse"></div>
  <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-300 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>
</section>




 

      {/* CTA Section */}
      <section className="py-10 px-2 sm:py-16 sm:px-4 md:py-20 md:px-6 bg-green-500">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Ready to transform your WhatsApp experience?</h2>
            <p className="text-base sm:text-xl mb-4 sm:mb-8 text-green-100">
              Join thousands of businesses already using VasifyTech to engage customers and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100 px-4 sm:px-8 py-2 sm:py-4 rounded-lg text-base sm:text-lg font-medium"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-3 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-medium"
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
