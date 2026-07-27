import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Users, Star } from "lucide-react"
import { DownloadModal } from "@/components/download-modal"

const FALLBACK_GUIDES = [
  {
    id: 1,
    title: "Complete WhatsApp Business Automation Guide 2026",
    description: "Learn how to setup automated quick replies, chatbots, and broadcast campaigns to 10x your sales conversion.",
    pages: 18,
    category: "Automation",
    downloadCount: 12450,
    rating: 4.9,
    thumbnail: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&auto=format&fit=crop&q=80",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    topics: ["Chatbots", "Broadcasts", "API Integration", "Lead Generation"],
  },
  {
    id: 2,
    title: "WhatsApp Marketing & D2C E-commerce Playbook",
    description: "Proven strategies for abandoned cart recovery, automated order notifications, and customer retention via WhatsApp.",
    pages: 24,
    category: "Marketing",
    downloadCount: 8920,
    rating: 4.8,
    thumbnail: "https://images.unsplash.com/photo-1556742049-0a67daf4004a?w=600&auto=format&fit=crop&q=80",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    topics: ["Abandoned Cart", "Retargeting", "Catalog Ads", "ROI Optimization"],
  },
  {
    id: 3,
    title: "Real Estate & Lead Qualification via WhatsApp AI",
    description: "Automate inquiry screening, site visit bookings, and instant brochure delivery directly on WhatsApp.",
    pages: 15,
    category: "Real Estate",
    downloadCount: 6540,
    rating: 4.7,
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=80",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    topics: ["Lead Screening", "Booking Bot", "CRM Sync", "Brochure Automation"],
  },
  {
    id: 4,
    title: "Customer Support Automation & Ticketing Strategy",
    description: "Reduce support resolution time by 70% using WhatsApp AI agents and multi-agent team inbox workflows.",
    pages: 20,
    category: "Support",
    downloadCount: 9310,
    rating: 4.9,
    thumbnail: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=600&auto=format&fit=crop&q=80",
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    topics: ["Team Inbox", "Ticket Routing", "Auto-Replies", "CSAT Metrics"],
  },
]

export default function FreeGuidePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
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

        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "https://backend.vasifytech.com"
        const [guidesResponse, categoriesResponse] = await Promise.all([
          fetch(`${apiBaseUrl}/api/free-guides?status=published&limit=100`),
          fetch(`${apiBaseUrl}/api/categories?isActive=true&limit=100`),
        ])

        if (!guidesResponse.ok || !categoriesResponse.ok) {
          throw new Error("Failed to fetch guides")
        }

        const guidesData = await guidesResponse.json()
        const categoriesData = await categoriesResponse.json()

        if (guidesData.success && guidesData.data?.guides && guidesData.data.guides.length > 0) {
          const mappedGuides = guidesData.data.guides.map((guide: any) => ({
            id: guide.id,
            title: guide.title,
            description: guide.description,
            pages: guide.pages || 15,
            category: guide.category_name || guide.category?.name || "Automation",
            downloadCount: guide.download_count || 1250,
            rating: 4.8,
            thumbnail: guide.thumbnail_image || "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&auto=format&fit=crop&q=80",
            pdfUrl: guide.pdf_url || "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            topics: guide.tags ? guide.tags.map((tag: any) => tag.name) : ["WhatsApp API", "Automation", "Marketing"],
          }))
          setGuides(mappedGuides)
        } else {
          setGuides(FALLBACK_GUIDES)
        }

        if (categoriesData.success && categoriesData.data?.categories && categoriesData.data.categories.length > 0) {
          const categoryNames: string[] = categoriesData.data.categories.map((cat: any) => String(cat.name))
          setCategories(["All", ...Array.from(new Set<string>(categoryNames))])
        } else {
          setCategories(["All", "Automation", "Marketing", "Real Estate", "Support"])
        }

        setError(null)
      } catch (err) {
        console.warn("[FreeGuidePage] Network fetch failed, falling back to static guides:", err)
        setGuides(FALLBACK_GUIDES)
        setCategories(["All", "Automation", "Marketing", "Real Estate", "Support"])
        setError(null)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const filteredGuides = guides.filter((guide) => {
    const categoryMatch = selectedCategory === "All" || guide.category.toLowerCase() === selectedCategory.toLowerCase()
    return categoryMatch
  })

  const handleDownload = async (guide: any) => {
    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "https://backend.vasifytech.com"
      await fetch(`${apiBaseUrl}/api/free-guides/${guide.id}/download`, {
        method: "POST",
      })
    } catch (err) {
      console.error("Error incrementing download count:", err)
    }

    setSelectedGuide(guide)
    setShowDownloadModal(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 pt-10 md:pt-14 pb-8 md:pb-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 px-3 py-1 text-xs font-semibold rounded-full">
              📚 100% Free Resources
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 tracking-tight">
              Free WhatsApp Business <span className="text-green-500">Guides</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Download our comprehensive guides to master WhatsApp Business automation, marketing, and customer
              engagement. All guides are completely free and packed with actionable insights.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-gray-600 pt-2">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-green-500" />
                <span className="font-semibold text-gray-800">50,000+ Downloads</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-500" />
                <span className="font-semibold text-gray-800">Actionable Playbooks</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="font-semibold text-gray-800">4.9 / 5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-slate-50/60 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Filter by Category</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-green-500 hover:bg-green-600 text-white rounded-full font-medium" : "rounded-full"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading && (
            <div className="text-center py-16">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
              <p className="mt-4 text-gray-600 font-medium">Loading free guides...</p>
            </div>
          )}

          {!loading && filteredGuides.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No guides found in this category.</p>
              <Button onClick={() => setSelectedCategory("All")} className="mt-4 bg-green-500 hover:bg-green-600 text-white">
                View All Guides
              </Button>
            </div>
          )}

          {!loading && filteredGuides.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGuides.map((guide) => (
                <Card key={guide.id} className="hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden border border-slate-200 rounded-2xl group">
                  <div className="relative overflow-hidden bg-slate-100 h-52">
                    <img
                      src={guide.thumbnail}
                      alt={guide.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-900 backdrop-blur-md shadow-sm font-semibold">{guide.category}</Badge>
                    </div>
                  </div>

                  <CardHeader className="flex-1">
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors leading-snug">
                      {guide.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-sm line-clamp-3 mt-2">
                      {guide.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4 pt-0">
                    <div className="flex items-center justify-between text-xs text-gray-500 border-t border-slate-100 pt-3">
                      <div className="flex items-center space-x-1.5">
                        <Download className="w-4 h-4 text-green-500" />
                        <span className="font-semibold text-gray-700">{guide.downloadCount.toLocaleString()} downloads</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-current" />
                        <span className="font-semibold text-gray-700">{guide.rating}</span>
                      </div>
                    </div>

                    {guide.topics && guide.topics.length > 0 && (
                      <div className="space-y-1.5">
                        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">What you'll learn</span>
                        <div className="flex flex-wrap gap-1.5">
                          {guide.topics.slice(0, 3).map((topic: string, index: number) => (
                            <Badge key={index} variant="outline" className="text-xs bg-slate-50 text-slate-700 border-slate-200">
                              {topic}
                            </Badge>
                          ))}
                          {guide.topics.length > 3 && (
                            <Badge variant="outline" className="text-xs bg-slate-50 text-slate-500 border-slate-200">
                              +{guide.topics.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}

                    <Button
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl py-2.5 flex items-center justify-center gap-2 shadow-md shadow-green-500/10"
                      onClick={() => handleDownload(guide)}
                    >
                      <Download className="w-4 h-4" />
                      Download Free Guide
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to Implement What You've Learned?</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Take your WhatsApp automation to the next level with VasifyTech's powerful platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl px-8" asChild>
              <a href="/contact">Start Free Trial</a>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-800 rounded-xl px-8" asChild>
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
