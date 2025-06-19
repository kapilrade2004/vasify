"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { submitContactForm } from "@/app/actions/contact"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const result = await submitContactForm(formData)
      if (result.success) {
        setSubmitStatus("success")
        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-gray-900">Get Your Free Consultation</CardTitle>
        <p className="text-lg text-gray-600">Fill out the form and we'll get back to you within 2 hours</p>
      </CardHeader>
      <CardContent className="p-8">
        <form id="contact-form" action={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
              <Input
                name="firstName"
                placeholder="John"
                className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
              <Input
                name="lastName"
                placeholder="Doe"
                className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
            <Input
              name="email"
              type="email"
              placeholder="john@example.com"
              className="border-gray-300 focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
            <Input
              name="phone"
              placeholder="+1 (555) 123-4567"
              className="border-gray-300 focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
            <Input
              name="company"
              placeholder="Your Company"
              className="border-gray-300 focus:border-green-500 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In *</label>
            <select
              name="service"
              className="w-full p-3 border border-gray-300 rounded-md focus:border-green-500 focus:ring-green-500"
              required
            >
              <option value="">Select a service</option>
              <option value="whatsapp">WhatsApp Automation</option>
              <option value="website">Website Development</option>
              <option value="mobile">Mobile App Development</option>
              <option value="crm">CRM Solutions</option>
              <option value="erp">ERP Systems</option>
              <option value="saas">SaaS Development</option>
              <option value="software">Custom Software</option>
              <option value="marketing">Digital Marketing</option>
              <option value="ecommerce">E-commerce Development</option>
              <option value="uiux">UI/UX Design</option>
              <option value="cybersecurity">Cybersecurity Solutions</option>
              <option value="cloud">Cloud Solutions</option>
              <option value="all">All Services</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Budget Range</label>
            <select
              name="budget"
              className="w-full p-3 border border-gray-300 rounded-md focus:border-green-500 focus:ring-green-500"
            >
              <option value="">Select budget range</option>
              <option value="under-1k">Under $1,000</option>
              <option value="1k-5k">$1,000 - $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-plus">$25,000+</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
            <Textarea
              name="message"
              placeholder="Tell us about your business, goals, and what you're looking to achieve..."
              className="border-gray-300 focus:border-green-500 focus:ring-green-500"
              rows={4}
              required
            />
          </div>

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to receive communications from VasifyTech and understand that I can unsubscribe at any time. *
            </label>
          </div>

          {submitStatus === "success" && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 font-medium">
                Thank you! Your message has been sent successfully. We'll get back to you within 2 hours.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 font-medium">
                Sorry, there was an error sending your message. Please try again or contact us directly.
              </p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-4 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Get Free Consultation"}
            {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
          </Button>

          <p className="text-center text-sm text-gray-500">
            We respect your privacy. Your information will never be shared.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
