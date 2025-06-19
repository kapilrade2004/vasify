import { ArrowRight, MessageCircle, CheckCircle, Users, BarChart3, Zap, Clock, Target, Shield } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function WhatsAppSolutionsPage() {
  const features = [
    {
      icon: Zap,
      title: "Automated Responses",
      description: "Instant replies to customer inquiries 24/7, ensuring no lead is lost",
    },
    {
      icon: Users,
      title: "Bulk Messaging",
      description: "Send personalized messages to thousands of contacts simultaneously",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track message delivery, open rates, and conversion metrics",
    },
    {
      icon: Target,
      title: "Lead Generation",
      description: "Capture and qualify leads automatically through WhatsApp",
    },
    {
      icon: Clock,
      title: "Scheduled Campaigns",
      description: "Plan and schedule your marketing campaigns in advance",
    },
    {
      icon: Shield,
      title: "Compliance Ready",
      description: "Fully compliant with WhatsApp Business API policies",
    },
  ]

  const packages = [
    {
      name: "Starter",
      price: "$297",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 1,000 messages/month",
        "Basic chatbot setup",
        "WhatsApp Business API",
        "Basic analytics",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$597",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 5,000 messages/month",
        "Advanced chatbot with AI",
        "Bulk messaging campaigns",
        "Advanced analytics dashboard",
        "Priority support",
        "Custom integrations",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$1,297",
      period: "/month",
      description: "For large-scale operations",
      features: [
        "Unlimited messages",
        "Custom AI chatbot development",
        "Multi-agent support",
        "Advanced automation workflows",
        "Dedicated account manager",
        "Custom reporting",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <MessageCircle className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              WhatsApp Pro
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-gray-600 hover:text-green-600 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-green-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-green-600 transition-colors">
              Contact
            </Link>
            <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-100">
              🚀 #1 WhatsApp Marketing Solution
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-green-600 to-emerald-600 bg-clip-text text-transparent">
              WhatsApp Business Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your customer engagement with our advanced WhatsApp automation platform. Generate more leads,
              increase sales, and build stronger customer relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-lg px-8 py-4 rounded-full"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 rounded-full border-2">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to dominate WhatsApp marketing and customer engagement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Choose Your Plan</h2>
            <p className="text-xl text-gray-600">Flexible pricing to match your business needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  pkg.popular ? "ring-2 ring-green-500 transform scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-600 to-green-700 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {pkg.price}
                    <span className="text-lg text-gray-600">{pkg.period}</span>
                  </div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      pkg.popular
                        ? "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                        : "bg-gray-900 hover:bg-gray-800"
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Proven Results</h2>
          <p className="text-xl mb-12 opacity-90">See what our WhatsApp solutions have achieved for businesses</p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "300%", label: "Increase in Leads" },
              { number: "85%", label: "Response Rate" },
              { number: "50M+", label: "Messages Sent" },
              { number: "24/7", label: "Automated Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join 500+ businesses already using our WhatsApp solutions to generate more leads and increase sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-lg px-8 py-4 rounded-full"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 rounded-full border-2">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
