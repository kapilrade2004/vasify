import {
  ArrowRight,
  MessageCircle,
  Code,
  Smartphone,
  Palette,
  Zap,
  Search,
  ShoppingCart,
  Globe,
  Settings,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Award,
  Laptop,
  Check,
  Crown,
  Rocket
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import WhatsAppButton from "@/components/whatsapp-button"
import MobileNav from "@/components/mobile-nav"

export default function WebsiteDevelopmentPage() {
  const services = [
    {
      icon: ShoppingCart,
      title: "E-commerce Development",
      description:
        "Full-featured online stores with payment integration, inventory management, and conversion optimization.",
      features: ["Payment Gateway Integration", "Product Management", "Order Tracking", "Mobile Optimized"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Code,
      title: "Custom Web Applications",
      description: "Tailored web applications built with modern frameworks to solve your unique business challenges.",
      features: ["Custom Features", "Scalable Architecture", "API Integration", "Cloud Deployment"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that engage users and drive conversions through thoughtful design.",
      features: ["User Research", "Wireframing", "Prototyping", "Responsive Design"],
      color: "from-green-400 to-lime-500",
    },
    {
      icon: Smartphone,
      title: "Progressive Web Apps",
      description: "Modern PWAs that work offline, load fast, and feel like native apps on any device.",
      features: ["Offline Support", "Push Notifications", "App-like Experience", "Fast Loading"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Search engine optimized websites that rank higher and drive organic traffic to your business.",
      features: ["Keyword Research", "On-page SEO", "Technical SEO", "Performance Optimization"],
      color: "from-emerald-400 to-green-600",
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Ongoing website maintenance, updates, and technical support to keep your site running smoothly.",
      features: ["Regular Updates", "Bug Fixes", "Security Patches", "Performance Monitoring"],
      color: "from-green-600 to-emerald-700",
    },
  ]

  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "📘" },
    { name: "Node.js", icon: "🟢" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "AWS", icon: "☁️" },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We understand your business goals, target audience, and project requirements.",
      icon: Users,
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Create beautiful, user-friendly designs with interactive prototypes for your approval.",
      icon: Palette,
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Build your website with clean code, rigorous testing, and quality assurance.",
      icon: Code,
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deploy your website and provide ongoing support for smooth operations.",
      icon: Zap,
    },
  ]

  const industries = [
    { name: "E-commerce", count: "150+", icon: "🛍️" },
    { name: "Healthcare", count: "80+", icon: "🏥" },
    { name: "Education", count: "120+", icon: "🎓" },
    { name: "Real Estate", count: "90+", icon: "🏢" },
    { name: "Finance", count: "60+", icon: "💰" },
    { name: "Travel", count: "70+", icon: "✈️" },
  ]

  const achievements = [
    { icon: Award, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "98%", label: "Client Satisfaction" },
    { icon: Zap, value: "24/7", label: "Support Available" },
    { icon: TrendingUp, value: "250%", label: "Avg. Traffic Growth" },
  ]

  const websitePlans = [
    {
      name: "Basic Website",
      price: "₹19,999",
      period: "one-time",
      description: "Perfect landing page or portfolio website",
      icon: <Code className="h-6 w-6" />,
      popular: false,
      features: [
        "Up to 5 pages",
        "Responsive design",
        "Basic SEO optimization",
        "Contact form integration",
        "1 month free support",
        "Mobile optimized",
        "Fast loading speed",
        "Social media integration",
      ],
    },
    {
      name: "Business Website",
      price: "₹49,999",
      period: "one-time",
      description: "Complete business website with CMS",
      icon: <Crown className="h-6 w-6" />,
      popular: true,
      features: [
        "Up to 15 pages",
        "Custom design",
        "Advanced SEO optimization",
        "CMS integration",
        "3 months free support",
        "Blog functionality",
        "Analytics integration",
        "Payment gateway integration",
        "WhatsApp integration",
        "Email marketing setup",
      ],
    },
    {
      name: "E-commerce",
      price: "₹99,999",
      period: "one-time",
      description: "Full-featured online store",
      icon: <Rocket className="h-6 w-6" />,
      popular: false,
      features: [
        "Unlimited pages",
        "Custom e-commerce design",
        "Product management system",
        "Multiple payment gateways",
        "6 months free support",
        "Inventory management",
        "Order tracking system",
        "Customer accounts",
        "Advanced analytics",
        "Marketing automation",
        "Multi-vendor support (optional)",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-white"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md border border-green-100">
                <Globe className="h-4 w-4 text-green-600" />
                <span className="text-sm font-semibold text-gray-700">Professional Web Development</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  Build Stunning{" "}
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Websites
                  </span>{" "}
                  That Convert
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  From e-commerce platforms to custom web applications, we create high-performance websites optimized
                  for conversions and built with modern technology.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="flex-1 sm:flex-initial">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 rounded-xl text-lg font-semibold shadow-2xl hover:shadow-green-500/50 transition-all transform hover:-translate-y-1"
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact" className="flex-1 sm:flex-initial">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-green-300 px-8 py-6 rounded-xl text-lg font-semibold transition-all bg-transparent"
                  >
                    View Portfolio
                  </Button>
                </Link>
              </div>

              {/* Stats */}
            </div>

            {/* Right Column - Visual */}
            <div className="relative lg:block hidden">
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⚡ New
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <Laptop className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Modern Web Solutions</h3>
                        <p className="text-gray-600">Built with Latest Tech</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: "Fast Loading", value: "<2s" },
                        { label: "Mobile Ready", value: "100%" },
                        { label: "SEO Score", value: "95+" },
                        { label: "Security", value: "A+" },
                      ].map((stat, index) => (
                        <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl">
                          <div className="text-3xl font-bold text-green-600">{stat.value}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      {[
                        "Responsive design for all devices",
                        "Lightning-fast performance",
                        "SEO optimized structure",
                        "Secure & scalable architecture",
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Element */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">250%</div>
                      <div className="text-sm text-gray-600">Avg Traffic Growth</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                Our Services
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Web Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From design to deployment, we provide end-to-end web development solutions tailored to your business
              needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-gray-200 hover:border-green-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardHeader className="text-center pb-6 pt-8">
                  <div
                    className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-xl`}
                  >
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-3">{service.title}</CardTitle>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardHeader>
                <CardContent className="px-6 pb-8">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 px-4 sm:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                Technology Stack
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Built with Modern Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use industry-leading technologies to build fast, secure, and scalable websites.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-green-300 hover:shadow-lg transition-all text-center group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{tech.icon}</div>
                <div className="text-lg font-bold text-gray-800">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                Our Process
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined development process ensuring quality, efficiency, and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-xl flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 px-4 sm:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                Industries We Serve
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Diverse Industry Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've delivered successful projects across multiple industries, understanding unique challenges and
              requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-white to-green-50 border-2 border-gray-200 hover:border-green-300 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-green-600 font-semibold">{industry.count} Projects</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                Website Development Pricing
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Transparent Pricing for Quality Websites
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              One-time payment, lifetime ownership. Choose the package that fits your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {websitePlans.map((plan, index) => (
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
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 text-sm block mt-1">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-4 text-gray-600">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/contact">
                    <Button
                      className={`w-full mb-6 ${plan.popular ? "bg-green-500 hover:bg-green-600" : "bg-gray-900 hover:bg-gray-800"} text-white`}
                    >
                      Get Started
                    </Button>
                  </Link>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-3">Features</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
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

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 bg-gradient-to-br from-green-600 to-emerald-600 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto text-white">
            <div className="inline-block mb-6">
              <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                Get Started Today
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">Ready to Build Your Dream Website?</h2>
            <p className="text-xl lg:text-2xl mb-10 text-green-100 leading-relaxed">
              Let's create a stunning, high-performance website that drives results for your business. Get started with
              a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100 px-10 py-6 rounded-xl text-lg font-bold shadow-2xl hover:shadow-white/50 transition-all transform hover:-translate-y-1"
                >
                  Start Your Project
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
            <p className="mt-8 text-green-100 text-sm">Free consultation • Transparent pricing • On-time delivery</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                Client Success Stories
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from businesses we've helped transform through exceptional web development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "TechCorp E-commerce",
                role: "CEO",
                content:
                  "VasifyTech built our e-commerce platform from scratch. Sales increased 300% in the first quarter. Absolutely outstanding work!",
                rating: 5,
                image: "👩‍💼",
              },
              {
                name: "Michael Chen",
                company: "HealthPlus Clinic",
                role: "Director",
                content:
                  "Beautiful, functional website that perfectly represents our brand. The team was professional and delivered on time.",
                rating: 5,
                image: "👨‍⚕️",
              },
              {
                name: "Priya Reddy",
                company: "EduLearn Platform",
                role: "Founder",
                content:
                  "The custom web app they built handles 10K+ concurrent users smoothly. Excellent technical expertise and support.",
                rating: 5,
                image: "👩‍🏫",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                    <div className="text-4xl">{testimonial.image}</div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm font-semibold text-green-600">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}