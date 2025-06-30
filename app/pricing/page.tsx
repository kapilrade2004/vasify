import { Check, Star, Zap, Crown, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "7 days",
      description: "Perfect for getting started with WhatsApp Business",
      icon: <Zap className="h-6 w-6" />,
      popular: false,
      showConversationCharges: false,
      conversationCharges: {
        marketing: "As per usage",
        utility: "As per usage",
        authentication: "As per usage",
      },
      service: "Unlimited Free Service Conversations",
      features: [
        "Unlimited Free Service Conversations/month",
        "Free WhatsApp Business API",
        "Free WhatsApp Blue Tick Application",
        "₹1 Free Conversation Credit",
        "Unlimited Free Service Conversations (Live chat Replies to user messages)",
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
      showConversationCharges: true,
      conversationCharges: {
        marketing: "As per usage",
        utility: "As per usage",
        authentication: "As per usage",
      },
      service: "Unlimited Free Service Conversations",
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
        "Click to WhatsApp Ads Manager",
        "5 Chatbot Flows: $40 (charged separately)",
      ],
    },
    {
      name: "Pro",
      price: "₹1999",
      period: "/month",
      description: "Advanced features for growing businesses",
      icon: <Crown className="h-6 w-6" />,
      popular: true,
      showConversationCharges: true,
      conversationCharges: {
        marketing: "As per usage",
        utility: "As per usage",
        authentication: "As per usage",
      },
      service: "Unlimited Free Service Conversations",
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
        "Automatic Failed Message Retry",
        "5 Chatbot Flows: $40 (charged separately)",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "/month",
      description: "Complete solution for enterprises and agencies",
      icon: <Rocket className="h-6 w-6" />,
      popular: false,
      showConversationCharges: true,
      conversationCharges: {
        marketing: "As per usage",
        utility: "As per usage",
        authentication: "As per usage",
      },
      service: "Unlimited Free Service Conversations",
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
    <div className="min-h-screen bg-gray-50">
      <section className="py-20 bg-white mt-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our core WhatsApp automation features with no
            hidden fees.
          </p>
          <div className="flex justify-center items-center gap-4 mb-12">
            <span className="text-gray-600">Monthly Charges</span>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-0 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
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

                  {/* Conversation Charges - Only show for paid plans */}
                  {plan.showConversationCharges && (
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-sm text-gray-700 mb-3">Conversation Charges</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Marketing</span>
                          <span className="text-green-600 font-medium">({plan.conversationCharges.marketing})</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Utility</span>
                          <span className="text-green-600 font-medium">({plan.conversationCharges.utility})</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Authentication</span>
                          <span className="text-green-600 font-medium">
                            ({plan.conversationCharges.authentication})
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <div className="text-sm">
                          <span className="font-medium text-gray-700">Service: </span>
                          <span className="text-green-600">{plan.service}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Features */}
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Got questions? We've got answers.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What are conversation charges?</h3>
                  <p className="text-gray-600">
                    Conversation charges are WhatsApp's fees for different types of messages. Marketing, Utility, and
                    Authentication messages have separate charges as per WhatsApp's pricing.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Are service conversations really free?</h3>
                  <p className="text-gray-600">
                    Yes! Service conversations (replies to user messages within 24 hours) are completely free and
                    unlimited on all plans.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I upgrade or downgrade anytime?</h3>
                  <p className="text-gray-600">
                    You can change your plan at any time. Upgrades take effect immediately, and downgrades take effect
                    at the next billing cycle.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What's included in the Free plan?</h3>
                  <p className="text-gray-600">
                    The Free plan includes WhatsApp Business API, unlimited service conversations, basic features, and
                    $1 conversation credit to get started.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer custom solutions?</h3>
                  <p className="text-gray-600">
                    Yes! For enterprises with specific needs, we offer custom solutions with dedicated support and
                    tailored features.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a setup fee?</h3>
                  <p className="text-gray-600">
                    No setup fees! All plans come with free setup and onboarding support to get you started quickly.
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
                className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold bg-transparent"
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
