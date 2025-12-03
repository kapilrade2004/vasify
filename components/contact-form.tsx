"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! We've received your message and will get back to you within 2 hours.",
        })
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        })
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again or contact us directly.",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-white border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-gray-900">Send Us a Message</CardTitle>
        <p className="text-gray-600 mt-2">Fill out the form below and we'll get back to you within 2 hours.</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-gray-700 font-semibold">
              Full Name *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="mt-2 border-gray-300 focus:border-green-500 focus:ring-green-500"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-gray-700 font-semibold">
              Email Address *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="mt-2 border-gray-300 focus:border-green-500 focus:ring-green-500"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-gray-700 font-semibold">
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 9876543210"
              className="mt-2 border-gray-300 focus:border-green-500 focus:ring-green-500"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <Label htmlFor="company" className="text-gray-700 font-semibold">
              Company Name
            </Label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your Company Ltd."
              className="mt-2 border-gray-300 focus:border-green-500 focus:ring-green-500"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <Label htmlFor="service" className="text-gray-700 font-semibold">
              Service Interested In
            </Label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              disabled={isSubmitting}
            >
              <option value="">Select a service</option>
              <option value="WhatsApp Automation">WhatsApp business Api number</option>
              <option value="CRM Integration">Website development </option>
              <option value="WhatsApp Marketing">WhatsApp automation</option>
              <option value="Chatbot Development">Ai agent</option>
              {/* <option value="Custom Development">Custom Development</option>
              <option value="Consultation">Consultation</option> */}
            </select>
          </div>

          <div>
            <Label htmlFor="message" className="text-gray-700 font-semibold">
              Message *
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project and how we can help..."
              rows={5}
              className="mt-2 border-gray-300 focus:border-green-500 focus:ring-green-500"
              disabled={isSubmitting}
            />
          </div>

          {/* Status Messages */}
          {submitStatus.type === "success" && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-green-800 text-sm">{submitStatus.message}</p>
            </div>
          )}

          {submitStatus.type === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-red-800 text-sm">{submitStatus.message}</p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-6 text-lg rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending Message...
              </>
            ) : (
              "Send Message"
            )}
          </Button>

          <p className="text-sm text-gray-500 text-center">
            By submitting this form, you agree to our Privacy Policy and Terms of Service.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}