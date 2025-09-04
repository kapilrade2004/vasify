"use client"

import { MessageCircle, ShoppingCart, Building2, CreditCard, Home, GraduationCap, Heart, Settings } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import WhatsAppButton from "@/components/whatsapp-button"
import MobileNav from "@/components/mobile-nav"

export default function BlogsPage() {
  const blogCategories = [
    {
      id: "ecommerce-d2c",
      title: "E-commerce & D2C",
      description: "WhatsApp strategies for online retail and direct-to-consumer brands",
      icon: ShoppingCart,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      id: "retail-fmcg",
      title: "Retail & FMCG",
      description: "Customer engagement solutions for retail and fast-moving consumer goods",
      icon: Building2,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      id: "bfsi-fintech",
      title: "BFSI & Fintech",
      description: "Secure WhatsApp solutions for banking, finance, and fintech companies",
      icon: CreditCard,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      id: "real-estate",
      title: "Real Estate",
      description: "Lead management and client communication for real estate professionals",
      icon: Home,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      id: "education-coaching",
      title: "Education & Coaching",
      description: "Student engagement and enrollment automation for educational institutions",
      icon: GraduationCap,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
    {
      id: "healthcare-wellness",
      title: "Healthcare & Wellness",
      description: "Patient communication and appointment management for healthcare providers",
      icon: Heart,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      id: "hospitality-travel",
      title: "Hospitality & Travel",
      description: "Advanced WhatsApp customization and development solutions",
      icon: Settings,
      color: "from-gray-500 to-gray-600",
      bgColor: "bg-gray-50",
      iconColor: "text-gray-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Industry <span className="text-green-500">Insights</span> & WhatsApp Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover how different industries are leveraging WhatsApp Business to transform their customer engagement,
            boost sales, and streamline operations.
          </p>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-0 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Choose Your Industry</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select your industry to discover tailored WhatsApp solutions, case studies, and best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogCategories.map((category) => (
              <Link key={category.id} href={`/blogs/${category.id}`}>
                <Card className="h-full bg-white border-0 shadow-sm hover:shadow-xl active:shadow-xl transition-all duration-300 hover:-translate-y-1 active:-translate-y-1 cursor-pointer group">
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-20 h-20 mx-auto mb-4 ${category.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <category.icon className={`h-10 w-10 ${category.iconColor}`} />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-6">{category.description}</p>
                    <Button
                      className={`bg-gradient-to-r ${category.color} hover:opacity-90 active:opacity-90 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300`}
                    >
                      Explore Articles
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Articles</h2>
            <p className="text-xl text-gray-600">Popular insights across all industries</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "How WhatsApp Catalogues Are Overtaking Traditional E-Commerce in India",
                category: "E-commerce & D2C",
                readTime: "8 min read",
                image: "/eblog1.png?height=200&width=400",
                excerpt:
                  "Discover proven automation strategies that top e-commerce brands use to boost their sales through WhatsApp.",
                link: "/blogs/ecommerce-d2c",
              },
              {
                title: "Redefining In-Store Shopping: QR Codes + WhatsApp",
                category: "Real Estate",
                readTime: "6 min read",
                image: "/fblog1.png?height=200&width=400",
                excerpt:
                  "Learn the exact WhatsApp lead generation system that successful real estate agents use to dominate their market.",
                link: "/blogs/real-estate",
              },
              {
                title: "How Fintech Startups Are Streamlining Lending via WhatsApp",
                category: "BFSI & Fintech",
                readTime: "10 min read",
                image: "/bfblog1.png?height=200&width=400",
                excerpt:
                  "Comprehensive guide to implementing secure WhatsApp solutions for banking and financial services.",
                link: "/blogs/bfsi-fintech",
              },
            ].map((article, index) => (
              <Link key={index} href={article.link}>
                <Card className="h-full bg-white border-0 shadow-sm hover:shadow-lg active:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <div className="aspect-video bg-gray-100 rounded-t-lg mb-4">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-green-600">{article.category}</span>
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    <Button
                      variant="outline"
                      className="w-full border-green-200 text-green-600 hover:bg-green-50 active:bg-green-50"
                    >
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-green-500">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Get personalized WhatsApp solutions for your industry. Book a free consultation with our experts.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 active:bg-gray-100 text-lg px-8 py-4 rounded-lg font-semibold"
            >
              Get Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  )
}
