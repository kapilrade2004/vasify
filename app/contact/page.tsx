"use client"

import { ArrowRight, MessageCircle, Phone, Mail, MapPin, Clock, CheckCircle, Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import WhatsAppButton from "@/components/whatsapp-button"
import ContactForm from "@/components/contact-form"
import WhatsAppQR from "@/components/whatsapp-qr"
import { useEffect } from "react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 9769754446",
      description: "Mon-Fri from 9am to 6pm EST",
    },
    {
      icon: Mail,
      title: "Email",
      details: "Sushil@vasifytech.com sudhanshu@vasifytech.com",
      description: "We'll respond within 2 hours",
    },
    {
      icon: MapPin,
      title: "Office",
      details: "601, 6th floor, Kohinoor CHS, Dattamandir road, dahanukarwadi, kandivali west, Mumbai – 400067",
      description: "Available for meetings",
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "< 2 Hours",
      description: "Average response time",
    },
  ]

  const benefits = [
    "Free consultation & strategy session",
    "30-day money-back guarantee",
    "24/7 dedicated support",
    "Proven track record with 500+ clients",
    "Custom solutions for your business",
    "No long-term contracts required",
  ]

  const handlePhoneClick = () => {
    window.location.href = "tel:+919769754446"
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = "919769026133" // Replace with actual WhatsApp number
    const message = "Hi! I'm interested in VasifyTech's services. Can you help me get started?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  // Auto-scroll to form section when page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      const formSection = document.getElementById("contact-form-section")
      if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
        <section id="contact-form-section" className="mt-20 py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column - Benefits */}
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose VasifyTech?</h2>
                <p className="text-xl text-gray-600 mb-8">
                  We're not just another agency. We're your growth partners committed to delivering exceptional results
                  and outstanding service.
                </p>

                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                      <span className="text-lg text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* WhatsApp Contact Options */}
                <div className="bg-green-500 p-6 rounded-2xl text-white mb-6">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="mb-6 text-green-100">
                    Book a free 30-minute strategy call to discuss your business goals and how we can help you achieve
                    them.
                  </p>

                  {/* Contact Buttons */}
                  <div className="space-y-3">
                    <Button
                      onClick={handleWhatsAppClick}
                      className="w-full bg-white text-green-600 hover:bg-gray-100 active:bg-gray-100 font-semibold text-left justify-start"
                    >
                      <MessageCircle className="mr-3 h-5 w-5" />
                      Chat on WhatsApp
                    </Button>

                    <Button
                      onClick={handlePhoneClick}
                      variant="outline"
                      className="w-full bg-white text-green-600 hover:bg-gray-100 active:bg-gray-100 font-semibold text-left justify-start"
                    >
                      <Phone className="mr-3 h-5 w-5" />
                      Call: +91 9769754446
                    </Button>

                    <div className="flex space-x-3 mb-4">
                      <Button
                        onClick={() => window.open("https://www.facebook.com/profile.php?id=61564894984098&mibextid=ZbWKwL", "_blank")}
                        variant="outline"
                      className="w-full bg-white text-green-600 hover:bg-gray-100 active:bg-gray-100 font-semibold text-left justify-start"
                      >
                        <Facebook className="mr-2 h-5 w-5" />
                        Facebook
                      </Button>
                      <Button
                        onClick={() => window.open("https://www.instagram.com/vasifytech?igsh=dnIweG5zdmhvemRo", "_blank")}
                        variant="outline"
                      className="w-full bg-white text-green-600 hover:bg-gray-100 active:bg-gray-100 font-semibold text-left justify-start"
                      >
                        <Instagram className="mr-2 h-5 w-5" />
                        Instagram
                      </Button>
                    </div>


                    {/* QR Code Option */}
                    <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-white mb-1">Scan QR Code</h4>
                          <p className="text-green-100 text-sm">Quick WhatsApp access</p>
                        </div>
                        <WhatsAppQR />
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-4 bg-white/20 hover:bg-white/30 active:bg-white/30 text-white border border-white/30 font-semibold">
                    Schedule Free Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section */}
      {/* <section className="pt-20 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Let's <span className="text-green-500">Transform</span> Your Business Together
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to revolutionize your WhatsApp business communication? Get your free consultation and discover how
            VasifyTech can help you achieve your goals.
          </p>
        </div>
      </section> */}

      {/* Contact Info Cards */}
      <section className="py-8 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-sm hover:shadow-lg active:shadow-lg transition-shadow duration-300 text-center cursor-pointer"
              >
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-2xl flex items-center justify-center">
                    <info.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{info.title}</CardTitle>
                  <div className="text-xl font-bold text-green-600">{info.details}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Get answers to common questions about our services</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How quickly can you start working on my project?",
                  answer:
                    "We can typically start within 24-48 hours after our initial consultation and agreement. For WhatsApp automation, we can often have you up and running within a week.",
                },
                {
                  question: "Do you work with businesses of all sizes?",
                  answer:
                    "Yes! We work with startups, small businesses, and large enterprises. Our solutions are scalable and can be customized to fit any business size and budget.",
                },
                {
                  question: "What makes your WhatsApp solutions different?",
                  answer:
                    "Our WhatsApp solutions are built with advanced AI, proven automation workflows, and focus on compliance and deliverability. We're Meta Business Partners with a track record of 500+ successful implementations.",
                },
                {
                  question: "Do you provide ongoing support?",
                  answer:
                    "All our packages include ongoing support, and we offer 24/7 support for our premium clients. We're here to ensure your continued success and growth.",
                },
                {
                  question: "Can you integrate with existing systems?",
                  answer:
                    "Yes, we can integrate with your existing CRM, e-commerce platform, or any other business system through APIs and custom integrations.",
                },
              ].map((faq, index) => (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md active:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 text-left">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-green-500">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Don't Wait - Start Growing Today</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Every day you wait is another day your competitors are getting ahead. Start your transformation today with a
            free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 active:bg-gray-100 text-lg px-8 py-4 rounded-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us Now
            </Button>
            <Button
              onClick={handlePhoneClick}
              size="lg"
              variant="outline"
              className="bg-white text-green-600 active:bg-gray-100 text-lg px-8 py-4 rounded-lg font-semibold"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +91 9769754446
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  )
}
