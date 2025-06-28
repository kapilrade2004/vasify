"use client"
import { ArrowRight, MessageCircle, Star, Quote, TrendingUp, Users, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import WhatsAppButton from "@/components/whatsapp-button"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      title: "Director of Admissions",
      company: "NICMAR",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "VasifyTech transformed how we handle student inquiries. Our response time improved by 80%, and we're now converting 3x more leads into enrollments. The automation is seamless and feels natural to our prospective students.",
      rating: 5,
      results: "80% faster response time, 300% increase in conversions",
    },
    {
      name: "Priya Sharma",
      title: "Marketing Head",
      company: "Parul University",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The automation features are incredible. We're now handling 10x more conversations without increasing our team size. The AI chatbot understands context perfectly and provides relevant information to students.",
      rating: 5,
      results: "10x more conversations handled, 50% reduction in manual work",
    },
    {
      name: "Amit Patel",
      title: "Operations Manager",
      company: "SNAP",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Best WhatsApp Business solution we've used. Setup was incredibly easy, and the support team guided us through every step. Our customer satisfaction scores have improved significantly.",
      rating: 5,
      results: "95% customer satisfaction, 24/7 automated support",
    },
    {
      name: "Sneha Reddy",
      title: "CEO",
      company: "RINGS & I",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "VasifyTech helped us scale our customer support without hiring additional staff. The WhatsApp automation handles routine queries perfectly, allowing our team to focus on complex issues.",
      rating: 5,
      results: "60% reduction in support tickets, improved team efficiency",
    },
    {
      name: "Vikram Singh",
      title: "Business Development Head",
      company: "Sri Balaji Society",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The lead qualification system is amazing. We now get pre-qualified leads directly from WhatsApp, which has improved our sales team's efficiency by 200%. ROI was positive within the first month.",
      rating: 5,
      results: "200% improvement in sales efficiency, positive ROI in 30 days",
    },
    {
      name: "Anita Gupta",
      title: "Marketing Director",
      company: "AFAIRS",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The analytics and reporting features give us incredible insights into customer behavior. We can now optimize our messaging strategy based on real data, leading to better engagement rates.",
      rating: 5,
      results: "45% increase in engagement rates, data-driven optimization",
    },
    {
      name: "Rohit Mehta",
      title: "Founder",
      company: "IMS",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "VasifyTech's team understood our unique requirements and delivered a custom solution that perfectly fits our workflow. The integration with our existing CRM was seamless.",
      rating: 5,
      results: "Seamless CRM integration, custom workflow automation",
    },
    {
      name: "Kavya Nair",
      title: "Customer Success Manager",
      company: "TechStart Solutions",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The multi-language support feature has been a game-changer for our global customer base. We can now provide instant support in 15+ languages, significantly improving customer experience.",
      rating: 5,
      results: "15+ languages supported, global customer satisfaction improved",
    },
    {
      name: "Arjun Kapoor",
      title: "E-commerce Manager",
      company: "ShopEasy",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Order tracking and customer support automation through WhatsApp has reduced our support workload by 70%. Customers love getting instant updates about their orders.",
      rating: 5,
      results: "70% reduction in support workload, improved customer experience",
    },
  ]

  const stats = [
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "50M+", label: "Messages Processed", icon: MessageCircle },
    { number: "300%", label: "Average ROI Increase", icon: TrendingUp },
    { number: "24/7", label: "Support Availability", icon: Zap },
  ]

  const industries = [
    "Education",
    "E-commerce",
    "Healthcare",
    "Real Estate",
    "Finance",
    "Technology",
    "Retail",
    "Hospitality",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What Our <span className="text-green-500">Clients Say</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Don't just take our word for it. See how VasifyTech has transformed businesses across industries with our
            WhatsApp automation solutions.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-medium"
            >
              Join Our Success Stories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-2xl flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600">Real results from real businesses</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                      <Users className="h-8 w-8 text-gray-400" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.title}</div>
                      <div className="text-sm font-semibold text-green-600">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <div className="relative mb-4 flex-grow">
                    <Quote className="h-8 w-8 text-green-200 absolute -top-2 -left-2" />
                    <p className="text-gray-700 italic pl-6">{testimonial.content}</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg mt-auto">
                    <div className="text-sm font-semibold text-green-800 mb-1">Results:</div>
                    <div className="text-sm text-green-700">{testimonial.results}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Trusted Across Industries</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            From education to e-commerce, businesses across all industries trust VasifyTech for their WhatsApp
            automation needs.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-100 text-gray-800 px-6 py-3 rounded-full text-lg font-medium hover:bg-green-100 hover:text-green-800 transition-colors"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Video Testimonials</h2>
            <p className="text-xl text-gray-600">Hear directly from our satisfied clients</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video, index) => (
              <Link key={index} href="/contact">
                <Card className="bg-white border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <div className="aspect-video bg-green-500 rounded-t-lg flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ArrowRight className="h-8 w-8 text-white ml-1" />
                      </div>
                      <h3 className="text-xl font-bold">Client Success Story #{video}</h3>
                      <p className="text-green-100">Click to watch</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Success Story #{video}</h4>
                    <p className="text-gray-600">
                      See how we helped this client achieve remarkable results with WhatsApp automation.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-green-500">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Be Our Next Success Story?</h2>
            <p className="text-xl mb-8 text-green-100">
              Join hundreds of businesses that have transformed their customer engagement and achieved remarkable
              results with VasifyTech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-medium"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg text-lg font-medium"
                >
                  Schedule Demo
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
