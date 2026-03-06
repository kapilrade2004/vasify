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
    const phoneNumber = "919769026133"
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
      <section id="contact-form-section" className="mt-16 md:mt-20 py-12 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              {/* Left Column - Benefits */}
              <div className="order-2 md:order-1 mt-6 md:mt-0">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">Why Choose VasifyTech?</h2>
                <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                  We're not just another agency. We're your growth partners committed to delivering exceptional results
                  and outstanding service.
                </p>

                <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start md:items-center">
                      <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-3 md:mr-4 flex-shrink-0 mt-0.5 md:mt-0" />
                      <span className="text-base md:text-lg text-gray-700 leading-snug cursor-default">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* WhatsApp Contact Options */}
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-5 md:p-8 rounded-2xl text-white shadow-xl mb-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Ready to Get Started?</h3>
                  <p className="mb-5 md:mb-6 text-sm md:text-base text-green-50 leading-relaxed">
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
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 text-center cursor-default p-4 md:p-6"
              >
                <CardHeader className="p-0 mb-3 md:mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-5 bg-green-50 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-green-100">
                    <info.icon className="h-6 w-6 md:h-8 md:w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-lg md:text-xl font-bold text-gray-900">{info.title}</CardTitle>
                  <div className="text-base md:text-lg font-bold text-green-600 mt-1">{info.details}</div>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-500 text-sm md:text-base">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-gray-50/50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <div className="inline-block bg-green-100 text-green-700 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-4">FAQ</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">Frequently Asked Questions</h2>
              <p className="text-base md:text-xl text-gray-600">Get answers to common questions about our services</p>
            </div>

            <div className="space-y-4 md:space-y-6">
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
                <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white">
                  <CardHeader className="p-5 md:p-6 pb-2 md:pb-3">
                    <CardTitle className="text-lg md:text-xl font-bold text-gray-900 text-left leading-snug">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-5 md:p-6 pt-0">
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-green-500">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">Don't Wait - Start Growing Today</h2>
          <p className="text-base md:text-xl mb-8 md:mb-10 text-green-50 max-w-2xl mx-auto leading-relaxed">
            Every day you wait is another day your competitors are getting ahead. Start your transformation today with a
            free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center w-full max-w-md mx-auto sm:max-w-none">
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="w-full sm:w-auto min-h-[52px] md:min-h-[56px] text-base md:text-lg bg-white text-green-600 hover:bg-gray-50 hover:text-green-700 active:scale-[0.98] transition-all px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-lg font-bold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us Now
            </Button>
            <Button
              onClick={handlePhoneClick}
              size="lg"
              variant="outline"
              className="w-full sm:w-auto min-h-[52px] md:min-h-[56px] text-base md:text-lg bg-transparent border-2 border-white/90 text-white hover:bg-white/10 active:scale-[0.98] transition-all px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold backdrop-blur-sm shadow-lg hover:border-white"
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