"use client"

import { ArrowRight, MessageCircle, Plus, Minus, Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import WhatsAppButton from "@/components/whatsapp-button"
import { useState } from "react"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How quickly can I get started with VasifyTech?",
          answer:
            "You can get started immediately! After our initial consultation, we typically have your WhatsApp Business API set up and basic automation running within 24-48 hours. Full implementation usually takes 1-2 weeks depending on complexity.",
        },
        {
          question: "Do I need technical knowledge to use VasifyTech?",
          answer:
            "Not at all! Our platform is designed to be user-friendly for non-technical users. We provide comprehensive training and our support team handles all the technical setup. You'll be able to manage your campaigns through our intuitive dashboard.",
        },
        {
          question: "What do I need to get started?",
          answer:
            "You'll need a WhatsApp Business account, a verified business phone number, and access to your business information for account verification. We'll guide you through the entire setup process.",
        },
        {
          question: "Is there a free trial available?",
          answer:
            "Yes! We offer a 14-day free trial with full access to our platform features. No credit card required to start, and you can cancel anytime during the trial period.",
        },
      ],
    },
    {
      category: "WhatsApp Business API",
      questions: [
        {
          question: "What is WhatsApp Business API and why do I need it?",
          answer:
            "WhatsApp Business API is the official solution for medium and large businesses to communicate with customers at scale. It allows automation, integration with business systems, and handling of large message volumes that regular WhatsApp Business app cannot support.",
        },
        {
          question: "How is VasifyTech different from WhatsApp Business app?",
          answer:
            "WhatsApp Business app is limited to manual messaging and basic automation. VasifyTech uses the WhatsApp Business API which enables advanced automation, chatbots, integration with CRM systems, bulk messaging, and detailed analytics.",
        },
        {
          question: "Is VasifyTech compliant with WhatsApp policies?",
          answer:
            "We are a Meta Business Partner and fully compliant with all WhatsApp Business API policies. We ensure all messaging follows opt-in requirements and best practices to maintain your account in good standing.",
        },
        {
          question: "Can I use my existing WhatsApp Business number?",
          answer:
            "Yes, in most cases you can migrate your existing WhatsApp Business number to our platform. We'll help you through the migration process to ensure no disruption to your business communications.",
        },
      ],
    },
    {
      category: "Features & Functionality",
      questions: [
        {
          question: "What kind of automation can I set up?",
          answer:
            "You can automate welcome messages, FAQ responses, appointment booking, order tracking, lead qualification, customer support tickets, follow-up sequences, and much more. Our visual workflow builder makes it easy to create complex automation.",
        },
        {
          question: "Can I integrate VasifyTech with my existing CRM?",
          answer:
            "Yes! We offer integrations with popular CRMs like Salesforce, HubSpot, Zoho, and many others. We can also create custom integrations through our API to connect with your specific business systems.",
        },
        {
          question: "Does VasifyTech support multiple languages?",
          answer:
            "Yes, our platform supports 50+ languages with automatic translation capabilities. You can create multilingual chatbots and automated responses to serve your global customer base effectively.",
        },
        {
          question: "Can multiple team members use the platform?",
          answer:
            "Our platform supports multi-user access with role-based permissions. You can have different access levels for agents, managers, and administrators, with conversation assignment and collaboration features.",
        },
      ],
    },
    {
      category: "Pricing & Plans",
      questions: [
        {
          question: "How does VasifyTech pricing work?",
          answer:
            "Our pricing is based on the number of conversations and features you need. We offer Starter ($297/month), Professional ($597/month), and Enterprise ($1,297/month) plans. All plans include setup, training, and ongoing support.",
        },
        {
          question: "Are there any setup fees or hidden costs?",
          answer:
            "No hidden fees! Our pricing is transparent and includes setup, training, and ongoing support. The only additional cost might be WhatsApp's conversation fees, which are minimal (typically $0.005-$0.009 per conversation).",
        },
        {
          question: "Can I change my plan later?",
          answer:
            "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle, and we'll help you migrate your settings to ensure a smooth transition.",
        },
        {
          question: "Do you offer custom enterprise pricing?",
          answer:
            "Yes! For large enterprises with specific requirements, we offer custom pricing and solutions. Contact our sales team to discuss your needs and get a tailored quote.",
        },
      ],
    },
    {
      category: "Support & Training",
      questions: [
        {
          question: "What kind of support do you provide?",
          answer:
            "We provide 24/7 support through chat, email, and phone. Our support includes technical assistance, best practice guidance, and help with campaign optimization. Enterprise clients get dedicated account managers.",
        },
        {
          question: "Do you provide training for my team?",
          answer:
            "Yes! We provide comprehensive training including platform walkthrough, best practices, and ongoing coaching. We offer both group training sessions and individual coaching based on your needs.",
        },
        {
          question: "How do I get help if I'm stuck?",
          answer:
            "You can reach our support team 24/7 through the in-app chat, email (support@vasifytech.com), or phone. We also have extensive documentation, video tutorials, and a knowledge base available.",
        },
        {
          question: "Do you help with campaign strategy?",
          answer:
            "Our team includes WhatsApp marketing experts who can help you develop effective messaging strategies, optimize your automation workflows, and improve your conversion rates.",
        },
      ],
    },
    {
      category: "Security & Compliance",
      questions: [
        {
          question: "How secure is my data with VasifyTech?",
          answer:
            "We take security very seriously. All data is encrypted in transit and at rest, we're SOC 2 compliant, and we follow industry best practices for data protection. Your customer data is never shared with third parties.",
        },
        {
          question: "Are you GDPR compliant?",
          answer:
            "Yes, we are fully GDPR compliant. We provide tools to help you manage customer consent, data deletion requests, and other GDPR requirements. We also have data processing agreements available.",
        },
        {
          question: "Where is my data stored?",
          answer:
            "Your data is stored in secure, enterprise-grade data centers with multiple backups and redundancy. We can accommodate specific data residency requirements for enterprise clients.",
        },
        {
          question: "Can I export my data if I decide to leave?",
          answer:
            "Yes, you own your data and can export it at any time. We provide easy export tools and will assist with data migration if you decide to switch platforms.",
        },
      ],
    },
  ]

  const filteredFAQs = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-green-500">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find answers to common questions about VasifyTech's WhatsApp Business solutions. Can't find what you're
            looking for? Contact our support team.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search for answers..."
              className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-green-500 rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 mb-4">No results found for "{searchTerm}"</p>
              <p className="text-gray-500">Try searching with different keywords or browse all categories below.</p>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredFAQs.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-green-500 pb-4">
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, questionIndex) => {
                      const globalIndex = categoryIndex * 100 + questionIndex
                      const isOpen = openItems.includes(globalIndex)

                      return (
                        <Card
                          key={questionIndex}
                          className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                          <CardHeader className="cursor-pointer" onClick={() => toggleItem(globalIndex)}>
                            <CardTitle className="flex items-center justify-between text-left">
                              <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                              {isOpen ? (
                                <Minus className="h-5 w-5 text-green-600 flex-shrink-0" />
                              ) : (
                                <Plus className="h-5 w-5 text-green-600 flex-shrink-0" />
                              )}
                            </CardTitle>
                          </CardHeader>
                          {isOpen && (
                            <CardContent className="pt-0">
                              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </CardContent>
                          )}
                        </Card>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Our support team is here to help you succeed. Get in touch through any of these channels.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-2xl flex items-center justify-center">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Get instant answers from our support team</p>
                <Link href="/contact">
                  <Button className="bg-green-500 hover:bg-green-600 text-white">Start Chat</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <Search className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Knowledge Base</h3>
                <p className="text-gray-600 mb-4">Browse our comprehensive help articles</p>
                <Link href="/contact">
                  <Button variant="outline" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50">
                    Browse Articles
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <ArrowRight className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule Demo</h3>
                <p className="text-gray-600 mb-4">Book a personalized demo with our experts</p>
                <Link href="/contact">
                  <Button variant="outline" className="border-2 border-purple-500 text-purple-600 hover:bg-purple-50">
                    Book Demo
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-green-500">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-green-100">
              Don't let questions hold you back. Start your free trial today and experience the power of WhatsApp
              automation.
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
                  Contact Support
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
