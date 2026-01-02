"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Users, Star } from "lucide-react"
import { DownloadModal } from "@/components/download-modal"

export default function FreeGuidePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedDifficulty, setSelectedDifficulty] = useState("All")
  const [selectedGuide, setSelectedGuide] = useState<any>(null)
  const [showDownloadModal, setShowDownloadModal] = useState(false)
  const [guides, setGuides] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [categories, setCategories] = useState<string[]>(["All"])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)

        const [guidesResponse, categoriesResponse] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/free-guides?status=published&limit=100`),
          fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/categories?isActive=true&limit=100`),
        ])

        const guidesData = await guidesResponse.json()
        const categoriesData = await categoriesResponse.json()

        if (guidesData.success && guidesData.data.guides) {
          const mappedGuides = guidesData.data.guides.map((guide: any) => ({
            id: guide.id,
            title: guide.title,
            description: guide.description,
            pages: 3,
            category: guide.category_name || "Uncategorized",
            downloadCount: guide.download_count || 0,
            rating: 4.8,
            thumbnail: guide.thumbnail_image,
            pdfUrl: guide.pdf_url,
            topics: guide.tags ? guide.tags.map((tag: any) => tag.name) : [],
          }))
          setGuides(mappedGuides)
        }

        if (categoriesData.success && categoriesData.data.categories) {
          const categoryNames = categoriesData.data.categories.map((cat: any) => cat.name)
          setCategories(["All", ...categoryNames])
        }

        setError(null)
      } catch (err) {
        console.error("[v0] Error fetching data:", err)
        setError("Failed to load guides. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const filteredGuides = guides.filter((guide) => {
    const categoryMatch = selectedCategory === "All" || guide.category === selectedCategory
    return categoryMatch
  })

  const handleDownload = async (guide: any) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/free-guides/${guide.id}/download`, {
        method: "POST",
      })
     
    } catch (err) {
      console.error("[v0] Error incrementing download count:", err)
    }

    setSelectedGuide(guide)
    setShowDownloadModal(true)
  }

  return (
    <div className="min-h-screen bg-white">
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
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
              <p className="mt-4 text-gray-600">Loading guides...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-600">{error}</p>
            </div>
          )}

          {!loading && !error && (
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
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl">{guide.title}</CardTitle>
                    <CardDescription className="text-gray-600">{guide.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{guide.pages} pages</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span>{guide.rating}</span>
                      </div>
                    </div> */}

                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Download className="w-4 h-4" />
                      <span>{guide.downloadCount.toLocaleString()} downloads</span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-900">What you'll learn:</h4>
                      <div className="flex flex-wrap gap-1">
                        {guide.topics.slice(0, 3).map((topic: string, index: number) => (
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
          )}
        </div>
      </section>

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
