"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Users, Star } from "lucide-react"
import { DownloadModal } from "@/components/download-modal"

const guides = [
  {
    id: 1,
    title: "WhatsApp Business API Complete Setup Guide",
    description: "Step-by-step guide to set up WhatsApp Business API for your business with screenshots and examples.",
    pages: 45,
    category: "Setup",
    difficulty: "Beginner",
    downloadCount: 12500,
    rating: 4.9,
    thumbnail: "/placeholder.svg?height=200&width=300&text=WhatsApp+API+Guide",
    pdfUrl: "/guides/whatsapp-api-setup-guide.pdf",
    topics: ["API Setup", "Business Verification", "Webhook Configuration", "Message Templates"],
  },
  {
    id: 2,
    title: "WhatsApp Marketing Automation Strategies",
    description:
      "Advanced strategies for automating your WhatsApp marketing campaigns and increasing customer engagement.",
    pages: 62,
    category: "Marketing",
    difficulty: "Intermediate",
    downloadCount: 8900,
    rating: 4.8,
    thumbnail: "/placeholder.svg?height=200&width=300&text=Marketing+Automation",
    pdfUrl: "/guides/whatsapp-marketing-automation.pdf",
    topics: ["Campaign Planning", "Automation Flows", "Customer Segmentation", "Performance Tracking"],
  },
  {
    id: 3,
    title: "Chatbot Design Best Practices",
    description:
      "Learn how to design effective chatbots that provide excellent customer service and drive conversions.",
    pages: 38,
    category: "Chatbots",
    difficulty: "Intermediate",
    downloadCount: 15200,
    rating: 4.9,
    thumbnail: "/placeholder.svg?height=200&width=300&text=Chatbot+Design",
    pdfUrl: "/guides/chatbot-design-best-practices.pdf",
    topics: ["Conversation Design", "User Experience", "Flow Optimization", "Testing Strategies"],
  },
  {
    id: 4,
    title: "WhatsApp Business Compliance Guide",
    description:
      "Everything you need to know about WhatsApp Business policies, compliance, and avoiding account restrictions.",
    pages: 28,
    category: "Compliance",
    difficulty: "Beginner",
    downloadCount: 6700,
    rating: 4.7,
    thumbnail: "/placeholder.svg?height=200&width=300&text=Compliance+Guide",
    pdfUrl: "/guides/whatsapp-compliance-guide.pdf",
    topics: ["Policy Guidelines", "Message Templates", "Opt-in Requirements", "Account Safety"],
  },
  {
    id: 5,
    title: "Customer Support Automation with WhatsApp",
    description:
      "Transform your customer support with WhatsApp automation, reducing response times and improving satisfaction.",
    pages: 52,
    category: "Support",
    difficulty: "Advanced",
    downloadCount: 9800,
    rating: 4.8,
    thumbnail: "/placeholder.svg?height=200&width=300&text=Support+Automation",
    pdfUrl: "/guides/customer-support-automation.pdf",
    topics: ["Support Workflows", "Escalation Management", "Agent Handoff", "Performance Metrics"],
  },
  {
    id: 6,
    title: "WhatsApp E-commerce Integration",
    description: "Complete guide to integrating WhatsApp with your e-commerce platform for better customer experience.",
    pages: 41,
    category: "E-commerce",
    difficulty: "Intermediate",
    downloadCount: 11300,
    rating: 4.9,
    thumbnail: "/placeholder.svg?height=200&width=300&text=E-commerce+Integration",
    pdfUrl: "/guides/whatsapp-ecommerce-integration.pdf",
    topics: ["Order Management", "Payment Integration", "Shipping Updates", "Customer Notifications"],
  },
]

const categories = ["All", "Setup", "Marketing", "Chatbots", "Compliance", "Support", "E-commerce"]
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"]

export default function FreeGuidePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedDifficulty, setSelectedDifficulty] = useState("All")
  const [selectedGuide, setSelectedGuide] = useState<any>(null)
  const [showDownloadModal, setShowDownloadModal] = useState(false)

  const filteredGuides = guides.filter((guide) => {
    const categoryMatch = selectedCategory === "All" || guide.category === selectedCategory
    const difficultyMatch = selectedDifficulty === "All" || guide.difficulty === selectedDifficulty
    return categoryMatch && difficultyMatch
  })

  const handleDownload = (guide: any) => {
    setSelectedGuide(guide)
    setShowDownloadModal(true)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Free WhatsApp Business <span className="text-green-500">Guides</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download our comprehensive guides to master WhatsApp Business automation, marketing, and customer
              engagement. All guides are completely free and packed with actionable insights.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-green-500" />
                <span>50,000+ Downloads</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-500" />
                <span>6 Comprehensive Guides</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span>4.8 Average Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-green-500 hover:bg-green-600" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Difficulty</h3>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((difficulty) => (
                  <Button
                    key={difficulty}
                    variant={selectedDifficulty === difficulty ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className={selectedDifficulty === difficulty ? "bg-green-500 hover:bg-green-600" : ""}
                  >
                    {difficulty}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGuides.map((guide) => (
              <Card key={guide.id} className="hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={guide.thumbnail || "/placeholder.svg"}
                    alt={guide.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white text-gray-900">{guide.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className={getDifficultyColor(guide.difficulty)}>{guide.difficulty}</Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{guide.title}</CardTitle>
                  <CardDescription className="text-gray-600">{guide.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{guide.pages} pages</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>{guide.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Download className="w-4 h-4" />
                    <span>{guide.downloadCount.toLocaleString()} downloads</span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-900">What you'll learn:</h4>
                    <div className="flex flex-wrap gap-1">
                      {guide.topics.slice(0, 3).map((topic, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {guide.topics.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{guide.topics.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                    onClick={() => handleDownload(guide)}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Free Guide
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Implement What You've Learned?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Take your WhatsApp automation to the next level with VasifyTech's powerful platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white" asChild>
              <a href="/contact">Start Free Trial</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/contact">Schedule Demo</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Download Modal */}
      {showDownloadModal && selectedGuide && (
        <DownloadModal
          guide={selectedGuide}
          isOpen={showDownloadModal}
          onClose={() => {
            setShowDownloadModal(false)
            setSelectedGuide(null)
          }}
        />
      )}
    </div>
  )
}
