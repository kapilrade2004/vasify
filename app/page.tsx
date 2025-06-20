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
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import WhatsAppButton from "@/components/whatsapp-button"
import MobileNav from "@/components/mobile-nav"

export default function HomePage() {
  const trustedLogos = ["NICMAR", "Parul University", "RINGS & I", "SNAP", "Sri Balaji Society", "AFAIRS", "IMS"]

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-green-100 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">VasifyTech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Features
            </Link>
            <Link href="/how-it-works" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              How it Works
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Services
            </Link>
            <Link href="/testimonials" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Testimonials
            </Link>
            <Link href="/faq" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              FAQ
            </Link>
            <Link href="/contact">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Engage Customers on <span className="text-green-500">WhatsApp</span>, <br />
                  Effortlessly.
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Automate conversations, provide instant support, and drive sales with{" "}
                  <span className="font-semibold text-gray-900">VasifyTech</span> - the ultimate WhatsApp Business
                  Platform.
                </p>
              </div>

              {/* Meta Business Partner Badge */}
              <div className="flex items-center space-x-4">
                <div className="bg-white border-2 border-blue-200 rounded-lg px-4 py-3 flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">M</span>
                  </div>
                  <div>
                    <div className="font-bold text-blue-600 text-sm">Meta</div>
                    <div className="text-gray-600 text-xs">Business Partner</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-medium"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-medium"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Demo/Video Placeholder */}
            <div className="relative">
              <Link href="/contact">
                <div className="bg-green-500 rounded-3xl aspect-[4/3] flex items-center justify-center shadow-2xl cursor-pointer hover:bg-green-600 transition-colors">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="h-10 w-10 text-white ml-1" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Get Started with VasifyTech Today!</h3>
                    <p className="text-green-100">Watch how easy it is to set up</p>
                  </div>
                </div>
              </Link>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      {/* <section className="py-16 px-6 bg-white">
        <div className="container mx-auto text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">TRUSTED BY</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {trustedLogos.map((logo, index) => (
              <div key={index} className="text-gray-400 font-bold text-lg">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Core Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Key Offerings: Our Solution Ecosystem</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive WhatsApp business solutions designed to transform your customer engagement and drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-medium"
              >
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Target Industries Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Target Audience: Who We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for diverse industries, helping businesses of all sizes leverage WhatsApp for growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetIndustries.map((industry, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 h-full"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center`}
                  >
                    <industry.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Everything you need to succeed on WhatsApp
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to help you engage customers, automate workflows, and grow your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-2xl flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/features">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-green-500 text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg text-lg font-medium"
              >
                View All Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Get started in 3 simple steps</h2>
            <p className="text-xl text-gray-600">Set up your WhatsApp Business solution in minutes, not days.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Connect Your Number",
                description: "Link your WhatsApp Business number to our platform in seconds.",
              },
              {
                step: "02",
                title: "Set Up Automation",
                description: "Create automated responses and workflows with our visual builder.",
              },
              {
                step: "03",
                title: "Start Engaging",
                description: "Begin conversations with customers and watch your business grow.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-green-500 text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg text-lg font-medium"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Loved by businesses worldwide</h2>
            <p className="text-xl text-gray-600">See what our customers have to say about their experience.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 text-lg italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-green-500 text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg text-lg font-medium"
              >
                View All Testimonials
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-green-500">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to transform your WhatsApp experience?</h2>
            <p className="text-xl mb-8 text-green-100">
              Join thousands of businesses already using VasifyTech to engage customers and drive growth.
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">VasifyTech</span>
              </div>
              <p className="text-gray-400 mb-4">The ultimate WhatsApp Business Platform for modern businesses.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 VasifyTech. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}
