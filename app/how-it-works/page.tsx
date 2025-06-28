"use client"
import { ArrowRight, MessageCircle, CheckCircle, Users, Settings, Rocket, Phone, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import WhatsAppButton from "@/components/whatsapp-button"

export default function HowItWorksPage() {
  const steps = [
    {
      step: "01",
      title: "Discovery & Consultation",
      description:
        "We start with a comprehensive consultation to understand your business goals, target audience, and current challenges.",
      details: [
        "Free 30-minute strategy call",
        "Business needs assessment",
        "Goal setting and KPI definition",
        "Custom solution planning",
      ],
      icon: Phone,
      color: "from-blue-500 to-cyan-600",
    },
    {
      step: "02",
      title: "Setup & Configuration",
      description:
        "Our experts handle the complete setup of your WhatsApp Business API and configure all automation workflows.",
      details: [
        "WhatsApp Business API setup",
        "Account verification process",
        "Integration with existing systems",
        "Custom workflow configuration",
      ],
      icon: Settings,
      color: "from-green-500 to-emerald-600",
    },
    {
      step: "03",
      title: "Testing & Optimization",
      description:
        "We thoroughly test all systems and optimize performance to ensure maximum engagement and conversion rates.",
      details: [
        "Comprehensive system testing",
        "Message flow optimization",
        "Performance monitoring setup",
        "Quality assurance checks",
      ],
      icon: Zap,
      color: "from-purple-500 to-pink-600",
    },
    {
      step: "04",
      title: "Launch & Support",
      description:
        "Go live with your new WhatsApp automation system and receive ongoing support to ensure continued success.",
      details: [
        "Smooth system launch",
        "Team training sessions",
        "24/7 ongoing support",
        "Regular performance reviews",
      ],
      icon: Rocket,
      color: "from-orange-500 to-red-600",
    },
  ]

  const timeline = [
    { phase: "Week 1", title: "Discovery & Planning", description: "Initial consultation and strategy development" },
    { phase: "Week 2", title: "Setup & Integration", description: "Technical setup and system integration" },
    { phase: "Week 3", title: "Testing & Training", description: "System testing and team training" },
    { phase: "Week 4", title: "Launch & Optimize", description: "Go live and initial optimizations" },
  ]

  const benefits = [
    {
      icon: CheckCircle,
      title: "Proven Process",
      description: "Our 4-step process has been refined through 500+ successful implementations",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated specialists guide you through every step of the journey",
    },
    {
      icon: Zap,
      title: "Fast Results",
      description: "See improvements in customer engagement within the first week",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            How <span className="text-green-500">VasifyTech</span> Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our proven 4-step process transforms your WhatsApp communication from manual to automated, helping you
            engage more customers and drive better results.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-medium"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Proven Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to ongoing support, we guide you through every step of your WhatsApp automation
              journey.
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="text-6xl font-bold text-gray-200 mr-4">{step.step}</div>
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center`}
                    >
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-xl text-gray-600 mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div
                    className={`bg-gradient-to-r ${step.color} rounded-3xl aspect-[4/3] flex items-center justify-center shadow-2xl`}
                  >
                    <div className="text-center text-white">
                      <step.icon className="h-20 w-20 mx-auto mb-4 opacity-80" />
                      <h4 className="text-2xl font-bold mb-2">Step {step.step}</h4>
                      <p className="text-lg opacity-90">{step.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Implementation Timeline</h2>
            <p className="text-xl text-gray-600">Get up and running in just 4 weeks with our streamlined process</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? "" : "flex-row-reverse"}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                      <Card className="border-0 shadow-lg">
                        <CardHeader>
                          <div className="text-green-600 font-bold text-lg">{item.phase}</div>
                          <CardTitle className="text-2xl font-bold text-gray-900">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                    <div className="flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Why Our Process Works</h2>
            <p className="text-xl text-gray-600">Built on experience, refined through success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-2xl flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-green-500">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 text-green-100">
              Join hundreds of businesses that have transformed their customer engagement with our proven process.
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
