"use client"

import { useEffect, useState } from "react"
import {
  Loader2,
  AlertCircle,
  ShoppingCart,
  Building2,
  CreditCard,
  Home,
  GraduationCap,
  Heart,
  Settings,
  Clock,
  User,
  Calendar,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import WhatsAppButton from "@/components/whatsapp-button"

interface Category {
  id: string
  name: string
  slug: string
  description: string
  image_url?: string
}

interface Blog {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  featured_image?: string
  status: string
  is_featured: boolean
  published_at: string
  created_at: string
  author_name: string
  category_name: string
  category_slug: string
  meta_title?: string
  tags?: Array<{ id: string; name: string; slug: string }>
}

const categoryIcons: Record<string, any> = {
  "ecommerce-d2c": ShoppingCart,
  "retail-fmcg": Building2,
  "bfsi-fintech": CreditCard,
  "real-estate": Home,
  "education-coaching": GraduationCap,
  "healthcare-wellness": Heart,
  "hospitality-travel": Settings,
}

const colorSchemes: Record<string, any> = {
  "ecommerce-d2c": { from: "from-blue-500", to: "to-blue-600", bg: "bg-blue-50", icon: "text-blue-600" },
  "retail-fmcg": { from: "from-purple-500", to: "to-purple-600", bg: "bg-purple-50", icon: "text-purple-600" },
  "bfsi-fintech": { from: "from-green-500", to: "to-green-600", bg: "bg-green-50", icon: "text-green-600" },
  "real-estate": { from: "from-orange-500", to: "to-orange-600", bg: "bg-orange-50", icon: "text-orange-600" },
  "education-coaching": { from: "from-indigo-500", to: "to-indigo-600", bg: "bg-indigo-50", icon: "text-indigo-600" },
  "healthcare-wellness": { from: "from-red-500", to: "to-red-600", bg: "bg-red-50", icon: "text-red-600" },
  "hospitality-travel": { from: "from-gray-500", to: "to-gray-600", bg: "bg-gray-50", icon: "text-gray-600" },
}

export default function BlogsPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [featuredBlogs, setFeaturedBlogs] = useState<Blog[]>([])
  const [blogsLoading, setBlogsLoading] = useState(true)

  const fetchCategories = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/categories?isActive=true&limit=20`)
      const data = await response.json()
      console.log("Fetched categories:", data)
      if (!response.ok) {
        throw new Error("Failed to fetch categories")
      }

      setCategories(data.data.categories)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
      setCategories([])
    } finally {
      setLoading(false)
    }
  }

  const fetchFeaturedBlogs = async () => {
    try {
      setBlogsLoading(true)
      const params = new URLSearchParams({
        status: "published",
        isFeatured: "true",
        limit: "3",
      })

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs?${params.toString()}`)
      const data = await response.json()

      if (response.ok) {
        setFeaturedBlogs(data.data.blogs)
      }
    } catch (err) {
      console.error("Error fetching featured blogs:", err)
    } finally {
      setBlogsLoading(false)
    }
  }

  useEffect(() => {
    fetchCategories()
    fetchFeaturedBlogs()
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200
    const wordCount = content.split(/\s+/).length
    const readTime = Math.ceil(wordCount / wordsPerMinute)
    return `${readTime} min read`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Latest Guide<span className="text-green-500"> Guides </span> on WhatsApp Business, AI & Digital Growth.
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Read expert articles, WhatsApp business strategies,
            industry case-studies and best practices on VasifyTech's blog — your go-to source for growth & automation
            tips.
          </p>
        </div>
      </section>



      {/* Choose Your Industry Section */}
      <section className="py-8 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-green-500">Industry</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select your industry to discover tailored WhatsApp solutions, case studies, and best practices.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-6 mb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="h-12 w-12 text-indigo-600 animate-spin mb-4" />
              <p className="text-gray-700 text-lg font-medium">Loading categories...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 rounded-3xl p-8 max-w-md shadow-lg">
                <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-red-900 text-center mb-2">Error Loading Categories</h3>
                <p className="text-red-700 text-center mb-6">{error}</p>
                <Button
                  onClick={fetchCategories}
                  className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  Try Again
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <p className="text-gray-600 text-lg font-medium">
                  Showing {categories.length} of {categories.length} categories
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {categories.map((category, index) => {
                  console.log("CATEGORY:", category.name, category.slug)
                  const Icon = categoryIcons[category.slug] || Settings

                  // Beautiful static color schemes rotating through categories
                  const staticColors = [
                    {
                      bg: 'bg-gradient-to-br from-indigo-500 to-purple-600',
                      icon: 'text-white',
                      button: 'from-indigo-500 to-purple-600',
                      border: 'border-indigo-200',
                      shadow: 'hover:shadow-indigo-200/50'
                    },
                    {
                      bg: 'bg-gradient-to-br from-pink-500 to-rose-600',
                      icon: 'text-white',
                      button: 'from-pink-500 to-rose-600',
                      border: 'border-pink-200',
                      shadow: 'hover:shadow-pink-200/50'
                    },
                    {
                      bg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
                      icon: 'text-white',
                      button: 'from-emerald-500 to-teal-600',
                      border: 'border-emerald-200',
                      shadow: 'hover:shadow-emerald-200/50'
                    },
                    {
                      bg: 'bg-gradient-to-br from-amber-500 to-orange-600',
                      icon: 'text-white',
                      button: 'from-amber-500 to-orange-600',
                      border: 'border-amber-200',
                      shadow: 'hover:shadow-amber-200/50'
                    },
                    {
                      bg: 'bg-gradient-to-br from-cyan-500 to-blue-600',
                      icon: 'text-white',
                      button: 'from-cyan-500 to-blue-600',
                      border: 'border-cyan-200',
                      shadow: 'hover:shadow-cyan-200/50'
                    },
                    {
                      bg: 'bg-gradient-to-br from-violet-500 to-purple-600',
                      icon: 'text-white',
                      button: 'from-violet-500 to-purple-600',
                      border: 'border-violet-200',
                      shadow: 'hover:shadow-violet-200/50'
                    },
                  ]

                  const colors = staticColors[index % staticColors.length]

                  return (
                    <Link key={category.id} href={`/blogs/${category.slug}`}>
                      <Card className={`h-full bg-white rounded-2xl shadow-lg ${colors.shadow} hover:shadow-2xl active:shadow-2xl transition-all duration-500 hover:-translate-y-2 active:-translate-y-2 cursor-pointer group overflow-hidden flex flex-col`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <CardHeader className="text-center pb-4 items-center relative z-10">
                          {category.image_url ? (
                            <div className="w-full h-52 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                              <img
                                src={category.image_url || "/placeholder.svg"}
                                alt={category.name}
                                className="w-full h-full object-top object-center transform group-hover:scale-110 transition-transform duration-700"
                              />
                            </div>
                          ) : (
                            <div
                              className={`w-24 h-24 mx-auto mb-6 ${colors.bg} rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                            >
                              <Icon className={`h-12 w-12 ${colors.icon}`} />
                            </div>
                          )}
                          <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                            {category.name}
                          </CardTitle>
                        </CardHeader>

                        <CardContent className="text-center relative z-10 flex-grow flex flex-col justify-between pb-6">
                          <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                            {category.description}
                          </p>
                          <Button
                            className={`bg-gradient-to-r ${colors.button} hover:opacity-90 active:opacity-90 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform group-hover:scale-105 w-fit mx-auto`}
                          >
                            Explore Articles
                          </Button>
                        </CardContent>
                      </Card>
                    </Link>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </section>
      {/* ⭐ FEATURED ARTICLES SECTION ⭐ */}
      {!blogsLoading && featuredBlogs.length > 0 && (
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="mb-10 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                Featured <span className="text-green-500">Articles</span>
              </h2>
              <p className="text-lg text-gray-600">Our top recommended guides for you</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {featuredBlogs.map((blog) => (
                <Card
                  key={blog.id}
                  className="bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl"
                >
                  {blog.featured_image && (
                    <div className="aspect-video bg-gray-100 rounded-t-xl overflow-hidden">
                      <img
                        src={blog.featured_image || "/placeholder.svg"}
                        alt={blog.meta_title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-full">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">
                        {blog.category_name}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {blog.meta_title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center space-x-4 text-xs text-gray-500 mb-5">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {blog.author_name}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(blog.published_at || blog.created_at)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {calculateReadTime(blog.content)}
                      </div>
                    </div>

                    <Link href={`/blogs/${blog.category_slug}/${blog.slug}`}>
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-6 bg-green-500 mt-20">
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