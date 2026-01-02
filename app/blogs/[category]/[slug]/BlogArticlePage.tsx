"use client"

import { useEffect, useState } from "react"
import { Clock, User, Calendar, Share2, Loader2, AlertCircle, BookmarkPlus } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
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
  meta_title?: string
  meta_description?: string
  is_featured: boolean
  published_at: string
  created_at: string
  author_name: string
  author_email: string
  category_name: string
  category_slug: string
  tags?: Array<{ id: string; name: string; slug: string }>
}

interface ApiResponse {
  success: boolean
  data: Blog
}

export default function BlogArticlePage() {
  const params = useParams()
  const categorySlug = params.category as string
  const blogSlug = params.slug as string

  const [blog, setBlog] = useState<Blog | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchBlog = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs/slug/${blogSlug}`)
      const data: ApiResponse = await response.json()

      if (!response.ok) {
        throw new Error("Blog not found")
      }

      setBlog(data.data)
    } catch (err) {
      console.error("Error fetching blog:", err)
      setError(err instanceof Error ? err.message : "Something went wrong")
      setBlog(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBlog()
  }, [blogSlug])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
  }

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200
    const wordCount = content.split(/\s+/).length
    const readTime = Math.ceil(wordCount / wordsPerMinute)
    return `${readTime} min read`
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog?.title,
        text: blog?.excerpt,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <Loader2 className="h-12 w-12 text-green-500 animate-spin mb-4" />
          <p className="text-gray-600 text-lg">Loading blog...</p>
        </div>
      </div>
    )
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 flex items-center justify-center">
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 max-w-md">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-red-900 text-center mb-2">Blog Not Found</h3>
          <p className="text-red-700 text-center mb-4">{error || "The blog you're looking for doesn't exist."}</p>
          <Link href="/blogs">
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Back to Categories</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Article Content */}
      <article className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <div className="flex items-center mb-8 text-sm">
            <Link href="/blogs" className="text-gray-600 hover:text-gray-900 transition-colors">
              Blogs
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link
              href={`/blogs/${categorySlug}`}
              className="text-gray-600 hover:text-gray-900 transition-colors capitalize"
            >
              {categorySlug.replace("-", " ")}
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">Current Article</span>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">{blog.title}</h1>

            <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span className="font-medium">{blog.author_name}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{formatDate(blog.published_at || blog.created_at)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{calculateReadTime(blog.content)}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-full">
                {blog.category_name}
              </span>
              {blog.tags && blog.tags.length > 0 && (
                <>
                  {blog.tags.map((tag) => (
                    <span key={tag.id} className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                      {tag.name}
                    </span>
                  ))}
                </>
              )}
            </div>

            {/* Article Actions */}
            <div className="flex items-center gap-4 mb-8">
              <Button
                onClick={handleShare}
                variant="outline"
                className="flex items-center gap-2 border-green-200 text-green-600 hover:bg-green-50 bg-transparent"
              >
                <Share2 className="h-4 w-4" />
                Share Article
              </Button>
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <BookmarkPlus className="h-4 w-4" />
                Save for Later
              </Button>
            </div>

            {/* Featured Image */}
            {blog.featured_image && (
              <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden mb-12">
                <img
                  src={blog.featured_image || "/placeholder.svg"}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </header>

          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-green-600 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Article Footer */}
          <footer className="mt-16 pt-12 border-t border-gray-200">
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Implement These Strategies?</h3>
              <p className="text-gray-700 mb-6">
                Get personalized WhatsApp solutions for your business. Our experts will help you implement these
                strategies and achieve similar results.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3">
                  Get Free Consultation
                </Button>
              </Link>
            </div>
          </footer>
        </div>
      </article>

      <WhatsAppButton />
    </div>
  )
}
