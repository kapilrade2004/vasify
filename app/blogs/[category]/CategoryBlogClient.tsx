"use client"

import { useEffect, useState } from "react"
import { ArrowLeft, Clock, User, Calendar, Loader2, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import WhatsAppButton from "@/components/whatsapp-button"
import { useParams } from "next/navigation"

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
  author_email: string
  category_name: string
  category_slug: string
  meta_title?: string
  tags?: Array<{ id: string; name: string; slug: string }>
}

interface Category {
  id: string
  name: string
  slug: string
  description: string
}

interface ApiResponse {
  success: boolean
  data: {
    blogs: Blog[]
    pagination: {
      page: number
      limit: number
      total: number
      totalPages: number
    }
  }
}

export default function CategoryBlogClient() {
  const params = useParams()
  const categorySlug = params.category as string

  const [blogs, setBlogs] = useState<Blog[]>([])
  const [category, setCategory] = useState<Category | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  })
  const [allCategories, setAllCategories] = useState<Category[]>([])

  const fetchCategory = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/categories/slug/${categorySlug}`)
      const data = await response.json()
      console.log("Category data:", data)
      if (!response.ok) throw new Error("Failed to fetch category")

      setCategory(data.data.category)
    } catch (err) {
      console.error("Error fetching category:", err)
    }
  }

  const fetchBlogs = async (currentPage = 1) => {
    try {
      setLoading(true)
      setError(null)

      const categoryResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/categories/slug/${categorySlug}`)
      const categoryData = await categoryResponse.json()

      if (!categoryResponse.ok) throw new Error("Category not found")

      const categoryId = categoryData.data.category.id

      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: "10",
        status: "published",
        categoryId: categoryId,
      })

      console.log("Fetching blogs for category:", categorySlug, "with ID:", categoryId) // Debug log

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs?${params.toString()}`)
      const data: ApiResponse = await response.json()
      console.log("Blogs data:", data)
      if (!response.ok) throw new Error("Failed to fetch blogs")

      setBlogs(data.data.blogs)
      setPagination(data.data.pagination)
    } catch (err) {
      console.error("Error fetching blogs:", err)
      setError(err instanceof Error ? err.message : "Something went wrong")
      setBlogs([])
    } finally {
      setLoading(false)
    }
  }

  const fetchAllCategories = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/categories?isActive=true&limit=6`)
      const data = await response.json()

      if (response.ok) {
        const otherCategories = data.data.categories
          .filter((cat: Category) => cat.slug !== categorySlug)
          .slice(0, 5)

        setAllCategories(otherCategories)
      }
    } catch (err) {
      console.error("Error fetching categories:", err)
    }
  }

  // ✅ KEY FIX: Reset page to 1 when category changes
  useEffect(() => {
    setPage(1) // Reset to page 1 when category changes
    setBlogs([]) // Clear previous blogs
    setCategory(null) // Clear previous category
    fetchCategory()
    fetchBlogs(1) // Always fetch page 1 when category changes
    fetchAllCategories()
  }, [categorySlug]) // Only depend on categorySlug

  // ✅ Separate effect for page changes within the same category
  useEffect(() => {
    if (page !== 1) { // Only fetch if page is not 1 (page 1 is handled above)
      fetchBlogs(page)
    }
  }, [page])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200
    const wordCount = content.split(/\s+/).length
    return `${Math.ceil(wordCount / wordsPerMinute)} min read`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">

      {/* Breadcrumb & Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto">
          <div className="flex items-center mb-8">
            <Link href="/blogs" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to All Categories
            </Link>
          </div>

          {category && (
            <div className="bg-green-50 p-8 rounded-2xl mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-green-600 mb-4">{category.name}</h1>
              <p className="text-xl text-gray-700 max-w-3xl">{category.description}</p>
            </div>
          )}
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-12 px-6">
        <div className="container mx-auto">

          {loading ? (
            <div className="flex flex-col items-center py-20">
              <Loader2 className="h-12 w-12 text-green-500 animate-spin mb-4" />
              <p className="text-gray-600 text-lg">Loading blogs...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center py-20">
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 max-w-md">
                <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-center mb-2">Error Loading Blogs</h3>
                <p className="text-center mb-4">{error}</p>
                <Button onClick={() => fetchBlogs(page)} className="w-full bg-red-500 text-white">
                  Try Again
                </Button>
              </div>
            </div>
          ) : blogs.length === 0 ? (
            <div className="flex flex-col items-center py-20">
              <h3 className="text-xl font-bold mb-2">No Blogs Found</h3>
              <p>No blogs are available in this category yet.</p>
            </div>
          ) : (
            <>
              

              <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {blogs.map((blog) => (
                  <Card key={blog.id} className="bg-white border-0 shadow-sm hover:shadow-lg transition">
                    {blog.featured_image && (
                      <div className="aspect-video bg-gray-100 rounded-t-lg">
                        <img
                          src={blog.featured_image}
                          alt={blog.title}
                          className="w-full h-full object-cover rounded-t-lg"
                        />
                      </div>
                    )}

                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {blog.author_name}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(blog.published_at || blog.created_at)}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {calculateReadTime(blog.content)}
                        </div>
                      </div>

                      <h2 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2">
                        {blog.meta_title}
                      </h2>

                      <p className="text-gray-600 mb-6 line-clamp-3">{blog.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-green-50 text-green-600 text-sm rounded-full">
                            {blog.category_name}
                          </span>

                          {blog.tags?.slice(0, 2).map((tag) => (
                            <span key={tag.id} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                              {tag.name}
                            </span>
                          ))}
                        </div>

                        <Link href={`/blogs/${categorySlug}/${blog.slug}`}>
                          <Button className="bg-green-500 text-white">Read More</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {pagination.totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-16">
                  <Button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    variant="outline"
                    className="border-green-200 text-green-600"
                  >
                    Previous
                  </Button>

                  {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                    let pageNumber =
                      pagination.totalPages <= 5
                        ? i + 1
                        : page <= 3
                        ? i + 1
                        : page >= pagination.totalPages - 2
                        ? pagination.totalPages - 4 + i
                        : page - 2 + i

                    return (
                      <Button
                        key={pageNumber}
                        onClick={() => setPage(pageNumber)}
                        variant={page === pageNumber ? "default" : "outline"}
                        className={
                          page === pageNumber
                            ? "bg-green-500 text-white"
                            : "border-green-200 text-green-600"
                        }
                      >
                        {pageNumber}
                      </Button>
                    )
                  })}

                  <Button
                    onClick={() => setPage((p) => Math.min(pagination.totalPages, p + 1))}
                    disabled={page === pagination.totalPages}
                    variant="outline"
                    className="border-green-200 text-green-600"
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-8 px-6 bg-white">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore Other Industries</h2>
          <p className="text-lg text-gray-600">Discover WhatsApp solutions for different sectors</p>
        </div>

        {allCategories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4">
            {allCategories.map((cat) => (
              <Link key={cat.id} href={`/blogs/${cat.slug}`}>
                <Button variant="outline" className="border-green-200 text-green-600">
                  {cat.name}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </section>

      <WhatsAppButton />
    </div>
  )
}