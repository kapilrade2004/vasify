import {
  ArrowRight,
  BarChart3,
  Target,
  TrendingUp,
  Users,
  Zap,
  Search,
  Globe,
  Settings,
  CheckCircle,
  Star,
  Award,
  MessageSquare,
  Check,
  Crown,
  Rocket,
  Megaphone,
  PenTool,
  LineChart,
  MousePointer,
  Mail,
  Instagram,
} from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata = {
  title: "Digital Marketing Services in India | SEO, Google Ads, Meta Ads | VasifyTech",
  description:
    "VasifyTech offers expert digital marketing services including SEO, Google Ads, Meta/Facebook Ads, and content strategy to grow your business online.",
  openGraph: {
    title: "Digital Marketing Services in India | SEO, Google Ads, Meta Ads | VasifyTech",
    description:
      "VasifyTech offers expert digital marketing services including SEO, Google Ads, Meta/Facebook Ads, and content strategy to grow your business online.",
    url: "https://vasifytech.com/digital-marketing",
    type: "website",
    siteName: "VasifyTech",
  },
};

export default function DigitalMarketingPage() {
  const services = [
    {
      icon: Search,
      title: "Search Engine Optimization (SEO)",
      description:
        "Rank higher on Google and drive consistent organic traffic with our data-driven SEO strategies tailored for your business.",
      features: ["Keyword Research & Strategy", "On-Page & Technical SEO", "Link Building", "Monthly Performance Reports"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Target,
      title: "Google Ads (PPC)",
      description:
        "Get immediate visibility on Google Search and Display Network with high-converting ad campaigns managed by certified experts.",
      features: ["Search & Display Campaigns", "Shopping Ads", "Remarketing Campaigns", "Conversion Tracking"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Instagram,
      title: "Meta & Facebook Ads",
      description:
        "Reach your ideal audience on Facebook and Instagram with precisely targeted ad campaigns that maximize ROI.",
      features: ["Audience Targeting & Lookalikes", "Carousel & Video Ads", "Lead Generation Ads", "A/B Testing"],
      color: "from-green-400 to-lime-500",
    },
    {
      icon: PenTool,
      title: "Content Strategy & Marketing",
      description:
        "Build brand authority and engage your audience with compelling content that attracts, educates, and converts.",
      features: ["Content Planning & Calendar", "Blog & Article Writing", "Social Media Content", "Video Script Writing"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Globe,
      title: "Social Media Management",
      description:
        "Grow your brand presence across all major social platforms with consistent, engaging content and community management.",
      features: ["Profile Optimization", "Regular Posting Schedule", "Community Engagement", "Competitor Analysis"],
      color: "from-emerald-400 to-green-600",
    },
    {
      icon: Mail,
      title: "Email & WhatsApp Marketing",
      description:
        "Nurture leads and retain customers with personalized email and WhatsApp campaigns that drive repeat business.",
      features: ["Campaign Design & Copywriting", "Automation Workflows", "Segmentation & Personalization", "Performance Analytics"],
      color: "from-green-600 to-emerald-700",
    },
  ]

  const tools = [
    { name: "Google Ads", icon: "🎯" },
    { name: "Meta Ads", icon: "📘" },
    { name: "Google Analytics", icon: "📊" },
    { name: "SEMrush", icon: "🔍" },
    { name: "Canva Pro", icon: "🎨" },
    { name: "Mailchimp", icon: "✉️" },
    { name: "HubSpot", icon: "🧲" },
    { name: "Hootsuite", icon: "🦉" },
  ]

  const process = [
    {
      step: "01",
      title: "Audit & Research",
      description: "We analyze your current digital presence, competitors, and target audience to build a solid foundation.",
      icon: Search,
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "A custom marketing roadmap aligned with your business goals, budget, and target market.",
      icon: Target,
    },
    {
      step: "03",
      title: "Execute & Launch",
      description: "Creative campaigns go live across channels with continuous optimization for maximum performance.",
      icon: Megaphone,
    },
    {
      step: "04",
      title: "Report & Scale",
      description: "Detailed monthly reports with insights and scaling strategies to compound your growth.",
      icon: LineChart,
    },
  ]

  const industries = [
    { name: "E-commerce", count: "150+", icon: "🛍️" },
    { name: "Healthcare", count: "80+", icon: "🏥" },
    { name: "Education", count: "120+", icon: "🎓" },
    { name: "Real Estate", count: "90+", icon: "🏢" },
    { name: "Finance", count: "60+", icon: "💰" },
    { name: "Travel", count: "70+", icon: "✈️" },
  ]

  const achievements = [
    { icon: Award, value: "300+", label: "Campaigns Launched" },
    { icon: Users, value: "98%", label: "Client Retention" },
    { icon: Zap, value: "5X", label: "Avg. ROAS Delivered" },
    { icon: TrendingUp, value: "400%", label: "Avg. Traffic Growth" },
  ]

  const marketingPlans = [
    {
      name: "Starter",
      price: "₹14,999",
      period: "per month",
      description: "Perfect for small businesses getting started online",
      icon: <MousePointer className="h-6 w-6" />,
      popular: false,
      features: [
        "SEO optimization (up to 10 keywords)",
        "Google Ads management (up to ₹20K ad spend)",
        "Social media management (2 platforms)",
        "8 social media posts/month",
        "Monthly performance report",
        "WhatsApp support",
        "Basic competitor analysis",
        "Google My Business optimization",
      ],
    },
    {
      name: "Growth",
      price: "₹29,999",
      period: "per month",
      description: "For growing businesses ready to scale fast",
      icon: <Crown className="h-6 w-6" />,
      popular: true,
      features: [
        "SEO optimization (up to 30 keywords)",
        "Google Ads + Meta Ads management",
        "Social media management (4 platforms)",
        "20 social media posts/month",
        "Content creation (4 blogs/month)",
        "Weekly performance report",
        "Email/WhatsApp marketing campaigns",
        "Landing page optimization",
        "Dedicated account manager",
        "Competitor tracking dashboard",
      ],
    },
    {
      name: "Enterprise",
      price: "₹59,999",
      period: "per month",
      description: "Full-service digital marketing for large businesses",
      icon: <Rocket className="h-6 w-6" />,
      popular: false,
      features: [
        "Unlimited SEO keywords",
        "All ad platforms (Google, Meta, YouTube)",
        "Social media management (all platforms)",
        "40 social media posts/month",
        "Content creation (8 blogs + videos/month)",
        "Daily performance monitoring",
        "Advanced email automation",
        "Custom landing pages",
        "Dedicated team of specialists",
        "Quarterly strategy review",
        "Influencer outreach (optional)",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-white"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md border border-green-100">
                <Megaphone className="h-4 w-4 text-green-600" />
                <span className="text-sm font-semibold text-gray-700">Result-Driven Digital Marketing</span>
              </div>
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-900 leading-tight">
                  Digital Marketing Services{" "}
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    That Drive Real Growth
                  </span>
                </h1>
                <h2 className="text-xl lg:text-xl text-gray-600 leading-relaxed">
                  From SEO to Google Ads, Meta campaigns to content strategy — we build data-driven marketing engines
                  that bring more traffic, leads, and revenue to your business.
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="flex-1 sm:flex-initial">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 rounded-xl text-lg font-semibold shadow-2xl hover:shadow-green-500/50 transition-all transform hover:-translate-y-1"
                  >
                    Get Free Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact" className="flex-1 sm:flex-initial">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-green-300 px-8 py-6 rounded-xl text-lg font-semibold transition-all bg-transparent"
                  >
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative lg:block hidden">
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    📈 Live Results
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <BarChart3 className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Performance Marketing</h3>
                        <p className="text-gray-600">ROI-Focused Campaigns</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: "Avg. ROAS", value: "5X" },
                        { label: "Lead Growth", value: "300%" },
                        { label: "SEO Traffic", value: "+400%" },
                        { label: "Ad Quality Score", value: "9/10" },
                      ].map((stat, index) => (
                        <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl">
                          <div className="text-3xl font-bold text-green-600">{stat.value}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      {[
                        "Google & Meta Certified experts",
                        "Transparent reporting — no fluff",
                        "Performance-optimized campaigns",
                        "Dedicated account manager",
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Element */}
                <div className="absolute -bottom-14 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">5X ROAS</div>
                      <div className="text-sm text-gray-600">Average Return on Ad Spend</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center">
            {achievements.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold">{item.value}</div>
                <div className="text-green-100 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                Our Services
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Full-Suite Digital Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every channel, every strategy, one unified team. We handle all aspects of your digital marketing so you
              can focus on running your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-gray-200 hover:border-green-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardHeader className="text-center pb-6 pt-8">
                  <div
                    className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-xl`}
                  >
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-3">{service.title}</CardTitle>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardHeader>
                <CardContent className="px-6 pb-8">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools We Use */}
      <section className="py-24 px-4 sm:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                Tools & Platforms
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Industry-Leading Marketing Tools</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the most powerful platforms and tools to deliver measurable results for your campaigns.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-green-300 hover:shadow-lg transition-all text-center group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{tool.icon}</div>
                <div className="text-lg font-bold text-gray-800">{tool.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                Our Process
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">How We Deliver Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven 4-step process to turn your marketing budget into measurable business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-xl flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 px-4 sm:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                Industries We Serve
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Diverse Industry Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've run successful campaigns across multiple industries, knowing exactly what works for each niche.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-white to-green-50 border-2 border-gray-200 hover:border-green-300 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-green-600 font-semibold">{industry.count} Campaigns</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                Digital Marketing Pricing
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Transparent Monthly Marketing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No hidden fees, no lock-in contracts. Choose a plan that matches your goals and scale anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {marketingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "ring-2 ring-green-500 shadow-xl scale-105" : "shadow-lg"} hover:shadow-xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-500 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <div
                    className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${plan.popular ? "bg-green-500 text-white" : "bg-gray-100 text-gray-600"}`}
                  >
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 text-sm block mt-1">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-4 text-gray-600">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/contact">
                    <Button
                      className={`w-full mb-6 ${plan.popular ? "bg-green-500 hover:bg-green-600" : "bg-gray-900 hover:bg-gray-800"} text-white`}
                    >
                      Get Started
                    </Button>
                  </Link>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-3">What's Included</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 bg-gradient-to-br from-green-600 to-emerald-600 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto text-white">
            <div className="inline-block mb-6">
              <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                Start Growing Today
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">Ready to Dominate Your Market Online?</h2>
            <p className="text-xl lg:text-2xl mb-10 text-green-100 leading-relaxed">
              Let's build a digital marketing strategy that puts your brand in front of the right people at the right
              time. Start with a free audit today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100 px-10 py-6 rounded-xl text-lg font-bold shadow-2xl hover:shadow-white/50 transition-all transform hover:-translate-y-1"
                >
                  Get Free Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-green-600 hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg text-lg font-medium"
                >
                  Schedule a Call
                </Button>
              </Link>
            </div>
            <p className="mt-8 text-green-100 text-sm">Free audit • No lock-in contracts • Certified experts</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                Client Success Stories
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from businesses we've helped grow through smart digital marketing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Arjun Mehta",
                company: "Urban Threads (E-commerce)",
                role: "Founder",
                content:
                  "VasifyTech's Meta Ads campaigns doubled our online sales in just 2 months. Their targeting strategy is next level.",
                rating: 5,
                image: "👨‍💼",
              },
              {
                name: "Dr. Neha Kapoor",
                company: "CareFirst Clinics",
                role: "Director",
                content:
                  "SEO traffic grew by 350% in 6 months. We're now getting 200+ patient inquiries every month from Google alone.",
                rating: 5,
                image: "👩‍⚕️",
              },
              {
                name: "Vikram Singh",
                company: "PropNest Realty",
                role: "CEO",
                content:
                  "Our Google Ads ROAS went from 1.5X to 6X after partnering with VasifyTech. Absolutely worth every rupee.",
                rating: 5,
                image: "👨‍💻",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                    <div className="text-4xl">{testimonial.image}</div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm font-semibold text-green-600">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}