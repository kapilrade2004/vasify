import type { Metadata } from "next"
import Link from "next/link"
import {
  Bot,
  MessageSquare,
  Globe,
  Database,
  Shield,
  Workflow,
  Building2,
  Brain,
  Languages,
  Smartphone,
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  Check,
  Crown,
  Rocket
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import IndustryChatbotClient from "./industry-chatbot-client"

export const metadata: Metadata = {
  title: "AI Agent - Intelligent Conversational AI for Business | VasifyTech",
  description:
    "Revolutionary AI Agent that handles unstructured conversations in all Indian languages. Easy WhatsApp, mobile & web integration with smart CRM connectivity and industry-specific automation flows.",
  keywords:
    "AI Agent, Conversational AI, WhatsApp AI, Multi-language AI, CRM Integration, Business Automation, Indian Languages AI, Intelligent Chatbot",
}

const aiAgentPlans = [
  {
    name: "Starter",
    price: "₹2,999",
    period: "/month",
    description: "Perfect for small businesses starting with AI",
    icon: <Bot className="h-6 w-6" />,
    popular: false,
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

export default function AIAgentPage() {
  const features = [
    {
      icon: <Languages className="h-8 w-8" />,
      title: "Multi-Language Conversational AI",
      description:
        "Text-based bot that handles unstructured conversations in all Indian languages and international languages with natural understanding.",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Universal Integration",
      description:
        "Easy integration with WhatsApp, mobile apps, and web platforms. Deploy anywhere your customers are with seamless connectivity.",
      gradient: "from-green-500 to-teal-600",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Smart Data Capture & CRM Sync",
      description:
        "Intelligently captures user inputs during conversations, stores in backend, and integrates with any 3rd party CRM system automatically.",
      gradient: "from-orange-500 to-red-600",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Intelligent Content Moderation",
      description:
        "Smartly handles negative & offensive inputs, redirecting conversations back to topic in a natural, conversational manner.",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "Custom Automation Flows",
      description:
        "Build personalized automation flows tailored to your specific products and services with drag-and-drop simplicity.",
      gradient: "from-indigo-500 to-blue-600",
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "All-Industry Support",
      description:
        "Comprehensive support for all industries - from e-commerce to healthcare, education to finance, and everything in between.",
      gradient: "from-teal-500 to-green-600",
    },
  ]

  const industries = [
    {
      name: "E-commerce & Retail",
      icon: "🛒",
      description: "Product recommendations, order tracking, customer support",
    },
    { name: "Healthcare", icon: "🏥", description: "Appointment booking, symptom checking, patient support" },
    { name: "Education", icon: "🎓", description: "Course enrollment, student queries, learning assistance" },
    { name: "Banking & Finance", icon: "🏦", description: "Account queries, loan assistance, financial guidance" },
    { name: "Real Estate", icon: "🏠", description: "Property search, lead qualification, viewing scheduling" },
    { name: "Travel & Hospitality", icon: "✈️", description: "Booking assistance, travel planning, customer service" },
    { name: "Food & Restaurants", icon: "🍽️", description: "Menu browsing, order taking, reservation management" },
    { name: "Automotive", icon: "🚗", description: "Service booking, product inquiries, dealer support" },
  ]

  const stats = [
    { number: "50+", label: "Languages Supported", icon: <Globe className="h-6 w-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <Clock className="h-6 w-6" /> },
    { number: "10K+", label: "Conversations/Day", icon: <MessageSquare className="h-6 w-6" /> },
    { number: "500+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white mt-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                <Bot className="h-4 w-4" />
                Revolutionary AI Technology
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Meet Your
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  AI Agent
                </span>
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                The most advanced conversational AI that understands every language, handles complex conversations, and
                integrates seamlessly with your business ecosystem.
              </p>
              {/* testing */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Start Free Trial
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-blue-100">AI Agent is online</span>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-white/20 rounded-lg p-3 text-sm">
                      <strong>User:</strong> मुझे अपने ऑर्डर की जानकारी चाहिए
                    </div>
                    <div className="bg-blue-500/30 rounded-lg p-3 text-sm">
                      <strong>AI Agent:</strong> बिल्कुल! मैं आपके ऑर्डर की जानकारी दे सकता हूं। कृपया अपना ऑर्डर नंबर बताएं।
                    </div>
                    <div className="bg-white/20 rounded-lg p-3 text-sm">
                      <strong>User:</strong> #ORD12345
                    </div>
                    <div className="bg-blue-500/30 rounded-lg p-3 text-sm">
                      <strong>AI Agent:</strong> आपका ऑर्डर #ORD12345 पैक हो गया है और कल डिलीवर होगा। ट्रैकिंग: TRK789
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Powerful Features That Set Us Apart</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI Agent combines cutting-edge technology with practical business solutions to deliver unmatched
              conversational experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>

                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Built for Every Industry</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI Agent adapts to your industry's unique needs and requirements, providing specialized solutions
              across all business sectors.
            </p>
          </div>
          <IndustryChatbotClient industries={industries} />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">How Our AI Agent Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple setup, powerful results. Get your AI Agent up and running in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Setup & Configure</h3>
              <p className="text-gray-600 leading-relaxed">
                Easy integration with your existing platforms. Configure language preferences, industry settings, and
                automation flows in minutes.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full text-white text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Train & Customize</h3>
              <p className="text-gray-600 leading-relaxed">
                Train the AI with your business data, products, and services. Customize responses and create
                industry-specific conversation flows.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full text-white text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Deploy & Scale</h3>
              <p className="text-gray-600 leading-relaxed">
                Launch your AI Agent across all channels. Monitor performance, gather insights, and scale conversations
                effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Why Choose Our AI Agent?</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Availability</h3>
                    <p className="text-gray-600">Never miss a customer inquiry. Our AI Agent works round the clock.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost Effective</h3>
                    <p className="text-gray-600">
                      Reduce customer service costs by up to 80% while improving response times.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Scalable Solution</h3>
                    <p className="text-gray-600">
                      Handle thousands of conversations simultaneously without compromising quality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Data-Driven Insights</h3>
                    <p className="text-gray-600">
                      Get valuable customer insights and analytics to improve your business strategy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Brain className="h-8 w-8" />
                    <h3 className="text-2xl font-bold">AI Performance</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Response Accuracy</span>
                        <span>98%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-white h-2 rounded-full" style={{ width: "98%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Customer Satisfaction</span>
                        <span>96%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-white h-2 rounded-full" style={{ width: "96%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Issue Resolution</span>
                        <span>94%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-white h-2 rounded-full" style={{ width: "94%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">AI Agent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect AI Agent plan for your business needs. Scale as you grow with flexible pricing.
            </p>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Customer Experience?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our AI Agent to provide exceptional customer service and drive
            growth across all channels.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2">
                Get Started Today
                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
            <Link href="/pricing">
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                View Pricing
              </button>
            </Link>
          </div>

          <div className="mt-8 text-blue-200">
            <p>✨ Free 14-day trial • No credit card required • Setup in 5 minutes</p>
          </div>
        </div>
      </section>
    </div>
  )
}


//testing
// import type { Metadata } from "next"
// import Link from "next/link"
// import {
//   Bot,
//   MessageSquare,
//   Globe,
//   Database,
//   Shield,
//   Workflow,
//   Building2,
//   Brain,
//   Languages,
//   Smartphone,
//   ArrowRight,
//   CheckCircle,
//   Users,
//   Clock,
//   Check,
//   Crown,
//   Rocket,
//   Zap
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import IndustryChatbotClient from "./industry-chatbot-client"

// export const metadata: Metadata = {
//   title: "AI Agent - Intelligent Conversational AI for Business | VasifyTech",
//   description:
//     "Revolutionary AI Agent that handles unstructured conversations in all Indian languages. Easy WhatsApp, mobile & web integration with smart CRM connectivity and industry-specific automation flows.",
//   keywords:
//     "AI Agent, Conversational AI, WhatsApp AI, Multi-language AI, CRM Integration, Business Automation, Indian Languages AI, Intelligent Chatbot",
// }

// const aiAgentPlans = [
//   {
//     name: "Starter",
//     price: "₹2,999",
//     period: "/month",
//     description: "Perfect for small businesses starting with AI",
//     icon: <Bot className="h-6 w-6" />,
//     popular: false,
//     features: [
//       "Multi-language support (10 languages)",
//       "1,000 conversations/month",
//       "WhatsApp integration",
//       "Basic CRM integration",
//       "Email support",
//       "Standard response time",
//       "Basic analytics dashboard",
//       "1 automation flow",
//     ],
//   },
//   {
//     name: "Professional",
//     price: "₹7,999",
//     period: "/month",
//     description: "Advanced AI for growing businesses",
//     icon: <Crown className="h-6 w-6" />,
//     popular: true,
//     features: [
//       "All Starter features",
//       "Multi-language support (50+ languages)",
//       "10,000 conversations/month",
//       "WhatsApp, Web & Mobile integration",
//       "Advanced CRM integration",
//       "Priority support",
//       "Advanced analytics & insights",
//       "5 custom automation flows",
//       "Content moderation",
//       "Custom training data",
//     ],
//   },
//   {
//     name: "Enterprise",
//     price: "Custom",
//     period: "/month",
//     description: "Unlimited AI power for large organizations",
//     icon: <Rocket className="h-6 w-6" />,
//     popular: false,
//     features: [
//       "All Professional features",
//       "Unlimited conversations",
//       "All platforms integration",
//       "Custom CRM & API integrations",
//       "24/7 dedicated support",
//       "Custom AI model training",
//       "Unlimited automation flows",
//       "White-label solution",
//       "Dedicated account manager",
//       "SLA guarantee",
//     ],
//   },
// ]

// export default function AIAgentPage() {
//   const features = [
//     {
//       icon: <Languages className="h-8 w-8" />,
//       title: "Multi-Language Conversational AI",
//       description:
//         "Text-based bot that handles unstructured conversations in all Indian languages and international languages with natural understanding.",
//       gradient: "from-blue-500 to-purple-600",
//     },
//     {
//       icon: <Smartphone className="h-8 w-8" />,
//       title: "Universal Integration",
//       description:
//         "Easy integration with WhatsApp, mobile apps, and web platforms. Deploy anywhere your customers are with seamless connectivity.",
//       gradient: "from-green-500 to-teal-600",
//     },
//     {
//       icon: <Database className="h-8 w-8" />,
//       title: "Smart Data Capture & CRM Sync",
//       description:
//         "Intelligently captures user inputs during conversations, stores in backend, and integrates with any 3rd party CRM system automatically.",
//       gradient: "from-orange-500 to-red-600",
//     },
//     {
//       icon: <Shield className="h-8 w-8" />,
//       title: "Intelligent Content Moderation",
//       description:
//         "Smartly handles negative & offensive inputs, redirecting conversations back to topic in a natural, conversational manner.",
//       gradient: "from-purple-500 to-pink-600",
//     },
//     {
//       icon: <Workflow className="h-8 w-8" />,
//       title: "Custom Automation Flows",
//       description:
//         "Build personalized automation flows tailored to your specific products and services with drag-and-drop simplicity.",
//       gradient: "from-indigo-500 to-blue-600",
//     },
//     {
//       icon: <Building2 className="h-8 w-8" />,
//       title: "All-Industry Support",
//       description:
//         "Comprehensive support for all industries - from e-commerce to healthcare, education to finance, and everything in between.",
//       gradient: "from-teal-500 to-green-600",
//     },
//   ]

//   const industries = [
//     {
//       name: "E-commerce & Retail",
//       icon: "🛒",
//       description: "Product recommendations, order tracking, customer support, cart recovery",
//     },
//     { 
//       name: "Healthcare", 
//       icon: "🏥", 
//       description: "Appointment booking, symptom checking, patient support, prescription refills" 
//     },
//     { 
//       name: "Education", 
//       icon: "🎓", 
//       description: "Course enrollment, student queries, learning assistance, admission support" 
//     },
//     { 
//       name: "Banking & Finance", 
//       icon: "🏦", 
//       description: "Account queries, loan assistance, financial guidance, fraud alerts" 
//     },
//     { 
//       name: "Real Estate", 
//       icon: "🏠", 
//       description: "Property search, lead qualification, viewing scheduling, EMI calculations" 
//     },
//     { 
//       name: "Travel & Hospitality", 
//       icon: "✈️", 
//       description: "Booking assistance, travel planning, customer service, itinerary management" 
//     },
//     { 
//       name: "Food & Restaurants", 
//       icon: "🍽️", 
//       description: "Menu browsing, order taking, reservation management, dietary preferences" 
//     },
//     { 
//       name: "Automotive", 
//       icon: "🚗", 
//       description: "Service booking, product inquiries, dealer support, test drive scheduling" 
//     },
//   ]

//   const stats = [
//     { number: "50+", label: "Languages Supported", icon: <Globe className="h-6 w-6" /> },
//     { number: "99.9%", label: "Uptime Guarantee", icon: <Clock className="h-6 w-6" /> },
//     { number: "10K+", label: "Conversations/Day", icon: <MessageSquare className="h-6 w-6" /> },
//     { number: "500+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white mt-24">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="relative container mx-auto px-6 py-20">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
//                 <Zap className="h-4 w-4" />
//                 Revolutionary AI Technology
//               </div>

//               <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
//                 Meet Your
//                 <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
//                   Industry-Specific AI Agent
//                 </span>
//               </h1>

//               <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
//                 The most advanced conversational AI that understands every language, handles complex conversations, and
//                 adapts to your industry's unique needs.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Link href="/contact">
//                   <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
//                     Start Free Trial
//                     <ArrowRight className="h-5 w-5" />
//                   </button>
//                 </Link>
//                 <button 
//                   onClick={() => document.getElementById('industries-section')?.scrollIntoView({ behavior: 'smooth' })}
//                   className="border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
//                 >
//                   Explore Industries
//                 </button>
//               </div>

//               <div className="flex items-center gap-6 text-sm text-blue-100">
//                 <div className="flex items-center gap-2">
//                   <CheckCircle className="h-5 w-5" />
//                   <span>14-day free trial</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <CheckCircle className="h-5 w-5" />
//                   <span>No credit card</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <CheckCircle className="h-5 w-5" />
//                   <span>Setup in 5 mins</span>
//                 </div>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
//                 <div className="space-y-4">
//                   <div className="flex items-center gap-3">
//                     <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
//                     <span className="text-sm text-blue-100">AI Agent is online</span>
//                   </div>

//                   <div className="space-y-3">
//                     <div className="bg-white/20 rounded-lg p-3 text-sm">
//                       <strong>User:</strong> मुझे अपने ऑर्डर की जानकारी चाहिए
//                     </div>
//                     <div className="bg-blue-500/30 rounded-lg p-3 text-sm">
//                       <strong>AI Agent:</strong> बिल्कुल! मैं आपके ऑर्डर की जानकारी दे सकता हूं। कृपया अपना ऑर्डर नंबर बताएं।
//                     </div>
//                     <div className="bg-white/20 rounded-lg p-3 text-sm">
//                       <strong>User:</strong> #ORD12345
//                     </div>
//                     <div className="bg-blue-500/30 rounded-lg p-3 text-sm">
//                       <strong>AI Agent:</strong> आपका ऑर्डर #ORD12345 पैक हो गया है और कल डिलीवर होगा। ट्रैकिंग: TRK789
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center group">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform duration-300">
//                   {stat.icon}
//                 </div>
//                 <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
//                 <div className="text-gray-600 font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <Badge className="mb-4">Core Capabilities</Badge>
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Powerful Features That Set Us Apart</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Our AI Agent combines cutting-edge technology with practical business solutions to deliver unmatched
//               conversational experiences across all industries.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <div key={index} className="group relative">
//                 <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//                   <div
//                     className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
//                   >
//                     {feature.icon}
//                   </div>

//                   <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>

//                   <p className="text-gray-600 leading-relaxed">{feature.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Industries Section */}
//       <section id="industries-section" className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <Badge className="mb-4 bg-blue-500">Industry Solutions</Badge>
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//               AI Agents Tailored for Your Industry
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Our AI Agent adapts to your industry's unique needs and requirements, providing specialized solutions
//               with industry-specific features, conversations, and automation flows.
//             </p>
//             <p className="text-lg text-blue-600 font-semibold mt-4">
//               👇 Click any industry to see live demos and features
//             </p>
//           </div>
//           <IndustryChatbotClient industries={industries} />
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <Badge className="mb-4">Simple Process</Badge>
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">How Our AI Agent Works</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Simple setup, powerful results. Get your AI Agent up and running in minutes.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center group">
//               <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
//                 1
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Setup & Configure</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Easy integration with your existing platforms. Configure language preferences, industry settings, and
//                 automation flows in minutes.
//               </p>
//             </div>

//             <div className="text-center group">
//               <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full text-white text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
//                 2
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Train & Customize</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Train the AI with your business data, products, and services. Customize responses and create
//                 industry-specific conversation flows.
//               </p>
//             </div>

//             <div className="text-center group">
//               <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full text-white text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
//                 3
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Deploy & Scale</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Launch your AI Agent across all channels. Monitor performance, gather insights, and scale conversations
//                 effortlessly.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <Badge className="mb-4">Business Impact</Badge>
//               <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Why Choose Our AI Agent?</h2>

//               <div className="space-y-6">
//                 <div className="flex items-start gap-4">
//                   <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
//                     <CheckCircle className="h-5 w-5 text-green-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Availability</h3>
//                     <p className="text-gray-600">Never miss a customer inquiry. Our AI Agent works round the clock.</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
//                     <CheckCircle className="h-5 w-5 text-green-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost Effective</h3>
//                     <p className="text-gray-600">
//                       Reduce customer service costs by up to 80% while improving response times.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
//                     <CheckCircle className="h-5 w-5 text-green-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-2">Scalable Solution</h3>
//                     <p className="text-gray-600">
//                       Handle thousands of conversations simultaneously without compromising quality.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
//                     <CheckCircle className="h-5 w-5 text-green-600" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-2">Data-Driven Insights</h3>
//                     <p className="text-gray-600">
//                       Get valuable customer insights and analytics to improve your business strategy.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
//                 <div className="space-y-6">
//                   <div className="flex items-center gap-3">
//                     <Brain className="h-8 w-8" />
//                     <h3 className="text-2xl font-bold">AI Performance</h3>
//                   </div>

//                   <div className="space-y-4">
//                     <div>
//                       <div className="flex justify-between mb-2">
//                         <span>Response Accuracy</span>
//                         <span>98%</span>
//                       </div>
//                       <div className="w-full bg-white/20 rounded-full h-2">
//                         <div className="bg-white h-2 rounded-full" style={{ width: "98%" }}></div>
//                       </div>
//                     </div>

//                     <div>
//                       <div className="flex justify-between mb-2">
//                         <span>Customer Satisfaction</span>
//                         <span>96%</span>
//                       </div>
//                       <div className="w-full bg-white/20 rounded-full h-2">
//                         <div className="bg-white h-2 rounded-full" style={{ width: "96%" }}></div>
//                       </div>
//                     </div>

//                     <div>
//                       <div className="flex justify-between mb-2">
//                         <span>Issue Resolution</span>
//                         <span>94%</span>
//                       </div>
//                       <div className="w-full bg-white/20 rounded-full h-2">
//                         <div className="bg-white h-2 rounded-full" style={{ width: "94%" }}></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <Badge className="mb-4">Flexible Plans</Badge>
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">AI Agent Pricing</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Choose the perfect AI Agent plan for your business needs. Scale as you grow with flexible pricing.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {aiAgentPlans.map((plan, index) => (
//               <Card
//                 key={index}
//                 className={`relative ${plan.popular ? "ring-2 ring-blue-500 shadow-xl scale-105" : "shadow-lg"} hover:shadow-xl transition-all duration-300`}
//               >
//                 {plan.popular && (
//                   <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                     <Badge className="bg-blue-500 text-white px-4 py-1">Most Popular</Badge>
//                   </div>
//                 )}
//                 <CardHeader className="text-center pb-8">
//                   <div
//                     className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${plan.popular ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600"}`}
//                   >
//                     {plan.icon}
//                   </div>
//                   <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
//                   <div className="mt-4">
//                     <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
//                     <span className="text-gray-600">{plan.period}</span>
//                   </div>
//                   <CardDescription className="mt-4 text-gray-600">{plan.description}</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <Link href="/contact">
//                     <Button
//                       className={`w-full mb-6 ${plan.popular ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-900 hover:bg-gray-800"} text-white`}
//                     >
//                       Choose Plan
//                     </Button>
//                   </Link>
//                   <div>
//                     <h4 className="font-semibold text-sm text-gray-700 mb-3">Features</h4>
//                     <ul className="space-y-2">
//                       {plan.features.map((feature, featureIndex) => (
//                         <li key={featureIndex} className="flex items-start gap-2">
//                           <Check className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
//                           <span className="text-sm text-gray-700">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Customer Experience?</h2>
//           <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
//             Join thousands of businesses already using our AI Agent to provide exceptional customer service and drive
//             growth across all channels.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="/contact">
//               <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2">
//                 Get Started Today
//                 <ArrowRight className="h-5 w-5" />
//               </button>
//             </Link>
//             <Link href="/pricing">
//               <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
//                 View Pricing
//               </button>
//             </Link>
//           </div>

//           <div className="mt-8 text-blue-200">
//             <p>✨ Free 14-day trial • No credit card required • Setup in 5 minutes</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }