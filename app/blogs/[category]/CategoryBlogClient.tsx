"use client"

import { MessageCircle, ArrowLeft, Clock, User, Calendar } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import WhatsAppButton from "@/components/whatsapp-button"
import MobileNav from "@/components/mobile-nav"
import { useParams } from "next/navigation"

export default function CategoryBlogClient() {
  const params = useParams()
  const category = params.category as string

  // Blog data for different categories
  const blogData: Record<string, any> = {
    "ecommerce-d2c": {
      title: "E-commerce & D2C",
      description: "WhatsApp strategies for online retail and direct-to-consumer brands",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      blogs: [
        {
          title: "10 WhatsApp Automation Strategies That Increased Sales by 300%",
          excerpt:
            "Discover proven automation strategies that top e-commerce brands use to boost their sales through WhatsApp. Learn about cart abandonment recovery, order updates, and customer support automation.",
          author: "Sarah Johnson",
          date: "Dec 15, 2024",
          readTime: "8 min read",
          image: "/placeholder.svg?height=300&width=500",
          tags: ["Automation", "Sales", "E-commerce"],
          slug: "10-whatsapp-automation-strategies-that-increased-sales-by-300",
        },
        {
          title: "WhatsApp Catalog Integration: Complete Guide for Online Stores",
          excerpt:
            "Step-by-step guide to integrating WhatsApp Business Catalog with your online store. Showcase products, enable direct ordering, and streamline the customer journey.",
          author: "Mike Chen",
          date: "Dec 12, 2024",
          readTime: "12 min read",
          image: "/placeholder.svg?height=300&width=500",
          tags: ["Catalog", "Integration", "D2C"],
          slug: "whatsapp-catalog-integration-complete-guide-for-online-stores",
        },
        {
          title: "Customer Support Revolution: WhatsApp vs Traditional Channels",
          excerpt:
            "Compare WhatsApp customer support with traditional channels. Learn why 89% of customers prefer WhatsApp for support and how to implement it effectively.",
          author: "Lisa Rodriguez",
          date: "Dec 10, 2024",
          readTime: "6 min read",
          image: "/placeholder.svg?height=300&width=500",
          tags: ["Support", "Customer Service", "Comparison"],
          slug: "customer-support-revolution-whatsapp-vs-traditional-channels",
        },
      ],
    },
    "retail-fmcg": {
      title: "Retail & FMCG",
      description: "Customer engagement solutions for retail and fast-moving consumer goods",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      blogs: [
        {
          title: "FMCG Brand Success: WhatsApp Marketing That Drives Repeat Purchases",
          excerpt:
            "Learn how leading FMCG brands use WhatsApp to build customer loyalty, announce new products, and drive repeat purchases through personalized messaging.",
          author: "David Kumar",
          date: "Dec 14, 2024",
          readTime: "10 min read",
          image: "/placeholder.svg?height=300&width=500",
          tags: ["FMCG", "Marketing", "Loyalty"],
          slug: "fmcg-brand-success-whatsapp-marketing-that-drives-repeat-purchases",
        },
        {
          title: "Retail Store Integration: Connecting Online and Offline with WhatsApp",
          excerpt:
            "Bridge the gap between your physical stores and digital presence. Implement click-and-collect, store locator, and inventory updates via WhatsApp.",
          author: "Emma Thompson",
          date: "Dec 11, 2024",
          readTime: "9 min read",
          image: "/placeholder.svg?height=300&width=500",
          tags: ["Retail", "Integration", "Omnichannel"],
          slug: "retail-store-integration-connecting-online-and-offline-with-whatsapp",
        },
        {
          title: "Seasonal Campaigns: Maximizing FMCG Sales During Peak Periods",
          excerpt:
            "Strategies for running successful WhatsApp campaigns during festivals, holidays, and seasonal peaks. Includes templates and automation workflows.",
          author: "Raj Patel",
          date: "Dec 8, 2024",
          readTime: "7 min read",
          image: "/placeholder.svg?height=300&width=500",
          tags: ["Campaigns", "Seasonal", "Sales"],
          slug: "seasonal-campaigns-maximizing-fmcg-sales-during-peak-periods",
        },
      ],
    },
    "bfsi-fintech": {
      title: "BFSI & Fintech",
      description: "Secure WhatsApp solutions for banking, finance, and fintech companies",
      color: "text-green-600",
      bgColor: "bg-green-50",
      blogs: [
        {
          title: "Banking on WhatsApp: Secure Customer Communication Best Practices",
          excerpt:
            "Comprehensive guide to implementing secure WhatsApp solutions for banking. Cover compliance, security protocols, and customer verification processes.",
          author: "Dr. Priya Sharma",
          date: "Dec 13, 2024",
          readTime: "15 min read",
          image: "/placeholder.svg?height=300&width=500",
          tags: ["Banking", "Security", "Compliance"],
          slug: "banking-on-whatsapp-secure-customer-communication-best-practices",
        },
        {
          title: "Fintech Innovation: WhatsApp Payment Integration and KYC Automation",
          excerpt:
            "Explore how fintech companies are revolutionizing payments and KYC processes through WhatsApp integration. Real-world case studies and implementation guides.",
          author: "Alex Morgan",
          date: "Dec 9, 2024",
          readTime: "12 min read",
          image: "/placeholder.svg?height=300&width=500",
          tags: ["Fintech", "Payments", "KYC"],
          slug: "fintech-innovation-whatsapp-payment-integration-and-kyc-automation",
        },
        {
          title: "Insurance Claims Processing: Streamlining with WhatsApp Automation",
          excerpt:
            "Transform insurance claims processing with WhatsApp automation. Reduce processing time by 70% and improve customer satisfaction significantly.",
          author: "Jennifer Lee",
          date: "Dec 6, 2024",
          readTime: "8 min read",
          image: "/placeholder.svg?height=300&width=500",
          tags: ["Insurance", "Claims", "Automation"],
          slug: "insurance-claims-processing-streamlining-with-whatsapp-automation",
        },
      ],
    },
    "real-estate": {
      title: "Real Estate",
      description: "Lead management and client communication for real estate professionals",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      blogs: [
        {
          title: "How Real Estate Agents Generate 50+ Leads Daily with WhatsApp",
          excerpt:
            "Learn the exact WhatsApp lead generation system that successful real estate agents use to dominate their market. Includes templates and automation workflows.",
          author: "Robert Wilson",
          date: "Dec 16, 2024",
          readTime: "11 min read",
          image: "/placeholder.svg?height=300&width=500",
          tags: ["Lead Generation", "Real Estate", "Automation"],
          slug: "how-real-estate-agents-generate-50-leads-daily-with-whatsapp",
        },
        {
          title: "Property Showcase Revolution: Virtual Tours via WhatsApp",
          excerpt:
            "Transform property showcasing with WhatsApp virtual tours. Engage prospects with interactive property presentations and instant booking systems.",
          author: "Maria Garcia",
          date: "Dec 13, 2024",
          readTime: "9 min read",
          image: "/placeholder.svg?height=300&width=500",
          tags: ["Virtual Tours", "Property", "Showcase"],
          slug: "property-showcase-revolution-virtual-tours-via-whatsapp",
        },
        {
          title: "Real Estate CRM Integration: Managing Clients Through WhatsApp",
          excerpt:
            "Complete guide to integrating WhatsApp with your real estate CRM. Track leads, automate follow-ups, and close more deals efficiently.",
          author: "Tom Anderson",
          date: "Dec 10, 2024",
          readTime: "13 min read",
          image: "/placeholder.svg?height=300&width=500",
          tags: ["CRM", "Integration", "Client Management"],
          slug: "real-estate-crm-integration-managing-clients-through-whatsapp",
        },
      ],
    },
    "education-coaching": {
      title: "Education & Coaching",
      description: "Student engagement and enrollment automation for educational institutions",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      blogs: [
        {
          title: "EdTech Success: Student Engagement Through WhatsApp Automation",
          excerpt:
            "Boost student engagement and retention with WhatsApp automation. Learn about assignment reminders, progress tracking, and parent communication systems.",
          author: "Dr. Anita Desai",
          date: "Dec 15, 2024",
          readTime: "10 min read",
          image: "/placeholder.svg?height=300&width=500",
          tags: ["EdTech", "Student Engagement", "Automation"],
          slug: "edtech-success-student-engagement-through-whatsapp-automation",
        },
        {
          title: "Coaching Business Growth: WhatsApp Marketing for Course Creators",
          excerpt:
            "Scale your coaching business with WhatsApp marketing strategies. From lead nurturing to course delivery, maximize your reach and revenue.",
          author: "Kevin Brown",
          date: "Dec 12, 2024",
          readTime: "8 min read",
          image: "/placeholder.svg?height=300&width=500",
          tags: ["Coaching", "Course Creation", "Marketing"],
          slug: "coaching-business-growth-whatsapp-marketing-for-course-creators",
        },
        {
          title: "Admission Process Automation: Streamlining Educational Enrollment",
          excerpt:
            "Automate your admission process with WhatsApp. Handle inquiries, document collection, and enrollment confirmation seamlessly.",
          author: "Dr. Suresh Kumar",
          date: "Dec 9, 2024",
          readTime: "12 min read",
          image: "/placeholder.svg?height=300&width=500",
          tags: ["Admissions", "Enrollment", "Education"],
          slug: "admission-process-automation-streamlining-educational-enrollment",
        },
      ],
    },
    "healthcare-wellness": {
      title: "Healthcare & Wellness",
      description: "Patient communication and appointment management for healthcare providers",
      color: "text-red-600",
      bgColor: "bg-red-50",
      blogs: [
        {
          title: "Healthcare Revolution: Patient Communication via WhatsApp",
          excerpt:
            "Transform patient communication with secure WhatsApp solutions. Handle appointments, reminders, and follow-ups while maintaining HIPAA compliance.",
          author: "Dr. Rachel Green",
          date: "Dec 14, 2024",
          readTime: "14 min read",
          image: "/placeholder.svg?height=300&width=500",
          tags: ["Healthcare", "Patient Communication", "HIPAA"],
          slug: "healthcare-revolution-patient-communication-via-whatsapp",
        },
        {
          title: "Telemedicine Integration: WhatsApp for Remote Consultations",
          excerpt:
            "Implement WhatsApp for telemedicine consultations. Secure video calls, prescription delivery, and patient monitoring made simple.",
          author: "Dr. James Miller",
          date: "Dec 11, 2024",
          readTime: "11 min read",
          image: "/placeholder.svg?height=300&width=500",
          tags: ["Telemedicine", "Remote Consultation", "Healthcare"],
          slug: "telemedicine-integration-whatsapp-for-remote-consultations",
        },
        {
          title: "Wellness Programs: Automated Health Coaching Through WhatsApp",
          excerpt:
            "Create automated wellness programs using WhatsApp. Daily health tips, progress tracking, and personalized coaching at scale.",
          author: "Dr. Lisa Wang",
          date: "Dec 8, 2024",
          readTime: "9 min read",
          image: "/placeholder.svg?height=300&width=500",
          tags: ["Wellness", "Health Coaching", "Automation"],
          slug: "wellness-programs-automated-health-coaching-through-whatsapp",
        },
      ],
    },
    "custom-whatsapp": {
      title: "Custom WhatsApp",
      description: "Advanced WhatsApp customization and development solutions",
      color: "text-gray-600",
      bgColor: "bg-gray-50",
      blogs: [
        {
          title: "WhatsApp API Mastery: Building Custom Business Solutions",
          excerpt:
            "Master WhatsApp Business API development. Build custom integrations, webhooks, and advanced automation systems for enterprise clients.",
          author: "Tech Team VasifyTech",
          date: "Dec 16, 2024",
          readTime: "18 min read",
          image: "/placeholder.svg?height=300&width=500",
          tags: ["API", "Development", "Custom Solutions"],
          slug: "whatsapp-api-mastery-building-custom-business-solutions",
        },
        {
          title: "Advanced Chatbot Development: AI-Powered WhatsApp Assistants",
          excerpt:
            "Create intelligent WhatsApp chatbots using AI and machine learning. Handle complex queries and provide personalized responses.",
          author: "AI Development Team",
          date: "Dec 13, 2024",
          readTime: "16 min read",
          image: "/placeholder.svg?height=300&width=500",
          tags: ["AI", "Chatbots", "Machine Learning"],
          slug: "advanced-chatbot-development-ai-powered-whatsapp-assistants",
        },
        {
          title: "Enterprise WhatsApp Solutions: Scaling for Large Organizations",
          excerpt:
            "Design and implement WhatsApp solutions for large enterprises. Multi-department integration, advanced analytics, and compliance management.",
          author: "Enterprise Solutions Team",
          date: "Dec 10, 2024",
          readTime: "20 min read",
          image: "/placeholder.svg?height=300&width=500",
          tags: ["Enterprise", "Scaling", "Integration"],
          slug: "enterprise-whatsapp-solutions-scaling-for-large-organizations",
        },
      ],
    },
  }

  const currentCategory = blogData[category] || blogData["ecommerce-d2c"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-green-100 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">VasifyTech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Features
            </Link>
            <Link href="/how-it-works" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              How it Works
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Services
            </Link>
            <Link href="/testimonials" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Testimonials
            </Link>
            <Link href="/faq" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              FAQ
            </Link>
            <Link href="/blogs" className="text-green-600 hover:text-green-700 font-medium transition-colors">
              Blogs
            </Link>
            <Link href="/contact">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Breadcrumb & Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto">
          <div className="flex items-center mb-8">
            <Link href="/blogs" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to All Categories
            </Link>
          </div>

          <div className={`${currentCategory.bgColor} p-8 rounded-2xl mb-8`}>
            <h1 className={`text-4xl lg:text-5xl font-bold ${currentCategory.color} mb-4`}>{currentCategory.title}</h1>
            <p className="text-xl text-gray-700 max-w-3xl">{currentCategory.description}</p>
          </div>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {currentCategory.blogs.map((blog: any, index: number) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-sm hover:shadow-lg active:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-video bg-gray-100 rounded-t-lg">
                  <img
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {blog.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {blog.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {blog.readTime}
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2">{blog.title}</h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">{blog.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.map((tag: string, tagIndex: number) => (
                        <span
                          key={tagIndex}
                          className={`px-3 py-1 ${currentCategory.bgColor} ${currentCategory.color} text-sm font-medium rounded-full`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link href={`/blogs/${category}/${blog.slug}`}>
                      <Button                      >
                        Read More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Other Industries</h2>
            <p className="text-lg text-gray-600">Discover WhatsApp solutions for different sectors</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(blogData)
              .filter(([key]) => key !== category)
              .slice(0, 4)
              .map(([key, data]) => (
                <Link key={key} href={`/blogs/${key}`}>
                  <Button
                    variant="outline"
                    className="border-green-200 text-green-600 hover:bg-green-50 active:bg-green-50"
                  >
                    {data.title}
                  </Button>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  )
}
