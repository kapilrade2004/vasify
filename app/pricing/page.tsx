import { Check, Star, Zap, Crown, Rocket, Bot, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function PricingPage() {
  const whatsappPlans = [
    {
      name: "Free",
      price: "₹0",
      period: "7 days",
      description: "Perfect for getting started with WhatsApp Business",
      icon: <Zap className="h-6 w-6" />,
      popular: false,
      service: "WhatsApp Services",
      features: [
        "Unlimited Free Service Conversations/month",
        "Free WhatsApp Business API",
        "Free WhatsApp Blue Tick Application",
        "₹1 Free Conversation Credit",
        "Click to WhatsApp Ads Manager",
        "Upload & Manage Contacts",
        "Create tags & attributes",
        "Upto 10 Tags",
        "Upto 5 Custom Attributes",
        "Create template messages",
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
      service: "WhatsApp Services",
      features: [
        "All features in Free Plan",
        "Up to 10 Tags",
        "Up to 5 Custom Attributes",
        "Unlimited Agent Logins",
        "Smart Audience Segregation",
        "Broadcasting & Retargeting",
        "Template Message APIs",
        "Multi-Agent Live Chat",
        "Agent Transfer & Manager Monitoring",
        "Marketplace Integrations",
        "2400 Messages/min",
        "Shopify & WooCommerce Integrations",
        "Dialogflow Chatbot Integration",
        "Shared Team Inbox",
      ],
    },
    {
      name: "Pro",
      price: "₹1999",
      period: "/month",
      description: "Advanced features for growing businesses",
      icon: <Crown className="h-6 w-6" />,
      popular: true,
      service: "WhatsApp Services",
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
        "Carousel Template Click Tracking",
        "CSV Campaign Scheduler",
        "Google Sheets Integration",
        "Birthday automation message",
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
      service: "WhatsApp Services",
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

  const aiAgentPlans = [
    {
      name: "Starter",
      price: "₹2,999",
      period: "/month",
      description: "Perfect for small businesses starting with AI",
      icon: <Bot className="h-6 w-6" />,
      popular: false,
      service: "AI Agent",
      features: [
        "Multi-language support (10 languages)",
        "1,000 conversations/month",
        "WhatsApp integration",
        "Basic CRM integration",
        "Email support",
        "Standard response time",
        "Basic analytics dashboard",
        "1 automation flow",
      ],
    },
    {
      name: "Professional",
      price: "₹7,999",
      period: "/month",
      description: "Advanced AI for growing businesses",
      icon: <Crown className="h-6 w-6" />,
      popular: true,
      service: "AI Agent",
      features: [
        "All Starter features",
        "Multi-language support (50+ languages)",
        "10,000 conversations/month",
        "WhatsApp, Web & Mobile integration",
        "Advanced CRM integration",
        "Priority support",
        "Advanced analytics & insights",
        "5 custom automation flows",
        "Content moderation",
        "Custom training data",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "/month",
      description: "Unlimited AI power for large organizations",
      icon: <Rocket className="h-6 w-6" />,
      popular: false,
      service: "AI Agent",
      features: [
        "All Professional features",
        "Unlimited conversations",
        "All platforms integration",
        "Custom CRM & API integrations",
        "24/7 dedicated support",
        "Custom AI model training",
        "Unlimited automation flows",
        "White-label solution",
        "Dedicated account manager",
        "SLA guarantee",
      ],
    },
  ]

  const websitePlans = [
    {
      name: "Basic Website",
      price: "₹9999",
      period: "one-time",
      description: "Perfect landing page or portfolio website",
      icon: <Code className="h-6 w-6" />,
      popular: false,
      service: "Website Development",
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
      price: "₹19,999",
      period: "one-time",
      description: "Complete business website with CMS",
      icon: <Crown className="h-6 w-6" />,
      popular: true,
      service: "Website Development",
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
      price: "₹49,999",
      period: "one-time",
      description: "Full-featured online store",
      icon: <Rocket className="h-6 w-6" />,
      popular: false,
      service: "Website Development",
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
    <div className="min-h-screen bg-gray-50">
      <section className="py-20 bg-white mt-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our core features with no hidden fees.
          </p>
        </div>
      </section>

      {/* WhatsApp Services Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">WhatsApp Services</h2>
            <p className="text-lg text-gray-600">Automate your WhatsApp business communication</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-4 text-gray-600">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/contact">
                    <Button
                      className={`w-full mb-6 ${plan.popular ? "bg-green-500 hover:bg-green-600" : "bg-gray-900 hover:bg-gray-800"} text-white`}
                    >
                      {plan.name === "Free" ? "Get Started Free" : "Choose Plan"}
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

      {/* AI Agent Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Agent</h2>
            <p className="text-lg text-gray-600">Intelligent conversational AI for your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {aiAgentPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "ring-2 ring-blue-500 shadow-xl scale-105" : "shadow-lg"} hover:shadow-xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-500 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <div
                    className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${plan.popular ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600"}`}
                  >
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-4 text-gray-600">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/contact">
                    <Button
                      className={`w-full mb-6 ${plan.popular ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-900 hover:bg-gray-800"} text-white`}
                    >
                      Choose Plan
                    </Button>
                  </Link>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-3">Features</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
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

      {/* Website Development Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Website Development</h2>
            <p className="text-lg text-gray-600">Professional websites built for your business</p>
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Got questions? We've got answers.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I switch between plans?</h3>
                  <p className="text-gray-600">
                    Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the next billing
                    cycle.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer custom solutions?</h3>
                  <p className="text-gray-600">
                    For enterprises with specific needs, we offer custom solutions with tailored features and dedicated
                    support.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
                  <p className="text-gray-600">
                    We accept all major credit cards, debit cards, UPI, and bank transfers for your convenience.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a setup fee?</h3>
                  <p className="text-gray-600">
                    No setup fees! All plans come with free setup and onboarding support to get you started quickly.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I cancel anytime?</h3>
                  <p className="text-gray-600">
                    Yes, you can cancel your subscription at any time. No long-term contracts or cancellation fees.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you provide training?</h3>
                  <p className="text-gray-600">
                    Yes! We provide comprehensive training and documentation to help your team get up to speed quickly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Start with our Free plan and scale as you grow. No credit card required to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Start Free Now
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
      </section>
    </div>
  )
}
