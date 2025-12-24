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
      title: "How AI Chatbot Development Is Transforming D2C Support on WhatsApp",
      excerpt:
        "Discover how AI chatbot development is revolutionizing D2C customer support on WhatsApp with AI agents, automation, lead generation, and real-world examples.",
      author: "VasifyTech Team",
      date: "Dec 15, 2025",
      readTime: "8 min read",
      image:
        "/How_AI_Chatbot_Development_Is_Transforming_D2C_Support_on_WhatsApp.png?height=300&width=500",
      tags: ["AI Chatbots", "D2C", "WhatsApp Automation", "Customer Support"],
      slug: "how-ai-chatbot-development-transforming-d2c-customer-support-whatsapp",
    },

    {
      title: "How WhatsApp Catalogues Are Overtaking Traditional E-Commerce in India",
      excerpt:
        "Learn how WhatsApp Catalogues are replacing traditional e-commerce platforms in India by enabling chat-based shopping, higher conversions, and lower costs.",
      author: "VasifyTech Team",
      date: "Jan 20, 2025",
      readTime: "8 min read",
      image: "/eblog1.png?height=300&width=500",
      tags: ["E-commerce", "D2C", "WhatsApp Commerce", "Catalogues"],
      slug: "how-whatsapp-catalogues-overtaking-traditional-ecommerce-india",
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
          title: "Redefining In-Store Shopping: QR Codes + WhatsApp",
          excerpt:
            "Learn how leading FMCG brands use WhatsApp to build customer loyalty, announce new products, and drive repeat purchases through personalized messaging.",
          author: "VasifyTech Team",
          date: "May 20, 2025",
          readTime: "10 min read",
          image: "/fblog1.png?height=300&width=500",
          tags: ["FMCG", "Marketing", "Loyalty"],
          slug: "redefining-in-store-shopping-qr-codes-whatsapp",
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
          title: "How Fintech Startups Are Streamlining Lending via WhatsApp",
          excerpt:
            "Comprehensive guide to implementing secure WhatsApp solutions for banking. Cover compliance, security protocols, and customer verification processes.",
          author: "VasifyTech Team",
          date: "Jan 30, 2025",
          readTime: "15 min read",
          image: "/bfblog1.png?height=300&width=500",
          tags: ["Banking", "Security", "Compliance"],
          slug: "how-fintech-startups-are-streamlining-lending-via-whatsapp",
        },
        //     {
        //       title: "Fintech Innovation: WhatsApp Payment Integration and KYC Automation",
        //       excerpt:
        //         "Explore how fintech companies are revolutionizing payments and KYC processes through WhatsApp integration. Real-world case studies and implementation guides.",
        //       author: "Alex Morgan",
        //       date: "Dec 9, 2024",
        //       readTime: "12 min read",
        //       image: "/placeholder.svg?height=300&width=500",
        //       tags: ["Fintech", "Payments", "KYC"],
        //       slug: "fintech-innovation-whatsapp-payment-integration-and-kyc-automation",
        //     },
        //     {
        //       title: "Insurance Claims Processing: Streamlining with WhatsApp Automation",
        //       excerpt:
        //         "Transform insurance claims processing with WhatsApp automation. Reduce processing time by 70% and improve customer satisfaction significantly.",
        //       author: "Jennifer Lee",
        //       date: "Dec 6, 2024",
        //       readTime: "8 min read",
        //       image: "/placeholder.svg?height=300&width=500",
        //       tags: ["Insurance", "Claims", "Automation"],
        //       slug: "insurance-claims-processing-streamlining-with-whatsapp-automation",
        //     },
      ],
    },
    "real-estate": {
      title: "Real Estate",
      description: "Lead management and client communication for real estate professionals",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      blogs: [
        {
          title: "Real Estate Marketing Redefined with WhatsApp Virtual Tours",
          excerpt:
            "Learn the exact WhatsApp lead generation system that successful real estate agents use to dominate their market. Includes templates and automation workflows.",
          author: "VasifyTech Team",
          date: "Feb 16, 2025",
          readTime: "11 min read",
          image: "/rblog1.png?height=300&width=500",
          tags: ["Lead Generation", "Real Estate", "Automation"],
          slug: "real-estate-marketing-redefined-with-whatsapp-virtual-tours",
        },
        {
      title: "Best WhatsApp Chatbot for Lead Generation in Real Estate",
      excerpt: "Discover how AI WhatsApp chatbots automate real estate lead generation from first inquiry to site visit booking. Perfect for Indian builders, brokers & developers.",
      author: "VasifyTech Team",
      date: "September 5, 2025",
      readTime: "10 min read",
      image: "/ai-chatbot-real-estate-lead-generation.png?height=300&width=500",
      tags: ["AI Chatbots", "Real Estate", "Lead Generation", "WhatsApp", "Automation"],
      slug: "best-whatsapp-chatbot-for-lead-generation-in-realestate",
    },
        // {
        //   title: "Property Showcase Revolution: Virtual Tours via WhatsApp",
        //   excerpt:
        //     "Transform property showcasing with WhatsApp virtual tours. Engage prospects with interactive property presentations and instant booking systems.",
        //   author: "Maria Garcia",
        //   date: "Dec 13, 2024",
        //   readTime: "9 min read",
        //   image: "/placeholder.svg?height=300&width=500",
        //   tags: ["Virtual Tours", "Property", "Showcase"],
        //   slug: "property-showcase-revolution-virtual-tours-via-whatsapp",
        // },
        // {
        //   title: "Real Estate CRM Integration: Managing Clients Through WhatsApp",
        //   excerpt:
        //     "Complete guide to integrating WhatsApp with your real estate CRM. Track leads, automate follow-ups, and close more deals efficiently.",
        //   author: "Tom Anderson",
        //   date: "Dec 10, 2024",
        //   readTime: "13 min read",
        //   image: "/placeholder.svg?height=300&width=500",
        //   tags: ["CRM", "Integration", "Client Management"],
        //   slug: "real-estate-crm-integration-managing-clients-through-whatsapp",
        // },
      ],
    },
"education-coaching": {
  title: "Education & Coaching",
  description: "Student engagement and enrollment automation for educational institutions",
  color: "text-indigo-600",
  bgColor: "bg-indigo-50",
  blogs: [
    {
      title: "AI Chatbot Development for Education: Automating Admissions & Student Support",
      excerpt:
        "Discover how AI chatbot development is transforming education by automating admissions and student support in Indian schools, colleges, and EdTech platforms.",
      author: "VasifyTech Team",
      date: "July 15, 2025",
      readTime: "12 min read",
      image: "/ai-chatbot-development-education.png?height=300&width=500",
      tags: ["AI Chatbots", "Education", "Automation", "Admissions", "Student Support"],
      slug: "ai-chatbot-development-education-automating-admissions-student-support",
    },
    {
      title: "Parent Communication Simplified: How WhatsApp Is Revolutionizing Education Engagement",
      excerpt:
        "Boost student engagement and retention with WhatsApp automation. Learn about assignment reminders, progress tracking, and parent communication systems.",
      author: "VasifyTech Team",
      date: "June 20, 2025",
      readTime: "10 min read",
      image: "/edblog1.png?height=300&width=500",
      tags: ["EdTech", "Student Engagement", "Automation"],
      slug: "parent-communication-simplified-how-whatsapp-is-revolutionizing-education-engagement",
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
      title: "AI Powered Chatbot in Healthcare: 24/7 Patient Support on WhatsApp",
      excerpt:
        "Discover how AI powered chatbots are enabling 24/7 patient support on WhatsApp for hospitals, clinics, and diagnostic centers in India.",
      author: "VasifyTech Team",
      date: "August 10, 2025",
      readTime: "11 min read",
      image: "/ai-powered-chatbot-healthcare.png?height=300&width=500",
      tags: ["AI Chatbots", "Healthcare", "WhatsApp", "Automation", "Patient Support"],
      slug: "ai-powered-chatbot-healthcare-247-patient-support-whatsapp",
    },
    {
      title: "How Multi-Clinic Chains Are Transforming Patient Experience with WhatsApp",
      excerpt:
        "Transform patient communication with secure WhatsApp solutions. Handle appointments, reminders, and follow-ups while maintaining HIPAA compliance.",
      author: "VasifyTech Team",
      date: "June 20, 2025",
      readTime: "14 min read",
      image: "/hblog1.png?height=300&width=500",
      tags: ["Healthcare", "Patient Communication", "HIPAA"],
      slug: "how-multi-clinic-chains-are-transforming-patient-experience-with-whatsapp",
    },
  ],
},
    "hospitality-travel": {
      title: "Hospitality & Travel",
      description: "Advanced WhatsApp customization and development solutions",
      color: "text-gray-600",
      bgColor: "bg-gray-50",
      blogs: [
        {
          title: "Transforming Hotel Bookings with WhatsApp Catalogues",
          excerpt:
            "Master WhatsApp Business API development. Build custom integrations, webhooks, and advanced automation systems for enterprise clients.",
          author: "VasifyTech Team",
          date: "Mar 25, 2025",
          readTime: "18 min read",
          image: "/cwblog1.png?height=300&width=500",
          tags: ["API", "Development", "Custom Solutions"],
          slug: "transforming-hotel-bookings-with-whatsapp-catalogues",
        },
        // {
        //   title: "Enterprise WhatsApp Solutions: Scaling for Large Organizations",
        //   excerpt:
        //     "Design and implement WhatsApp solutions for large enterprises. Multi-department integration, advanced analytics, and compliance management.",
        //   author: "Enterprise Solutions Team",
        //   date: "Dec 10, 2024",
        //   readTime: "20 min read",
        //   image: "/placeholder.svg?height=300&width=500",
        //   tags: ["Enterprise", "Scaling", "Integration"],
        //   slug: "enterprise-whatsapp-solutions-scaling-for-large-organizations",
        // },
      ],
    },
  }

  const currentCategory = blogData[category] || blogData["ecommerce-d2c"]

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
                      <Button>
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
      <section className="py-8 px-6 bg-white">
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
