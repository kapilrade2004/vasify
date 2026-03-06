"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"

export default function ContactForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [selectedService, setSelectedService] = useState("")
  const [selectedProduct, setSelectedProduct] = useState("")

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Ensure service and product are present in FormData
      if (selectedService) {
        formData.set("service", selectedService)
      }
      if (selectedService === "Products" && selectedProduct) {
        formData.set("product", selectedProduct)
      }

      const data: { [key: string]: any } = {}
      formData.forEach((value, key) => {
        data[key] = value
      })

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(data.email)) {
        setSubmitStatus("error")
        alert("Please enter a valid email address.")
        setIsSubmitting(false)
        return
      }

      const phoneRegex = /^[0-9]{10}$/
      if (!phoneRegex.test(data.phone)) {
        setSubmitStatus("error")
        alert("Please enter a valid 10-digit phone number.")
        setIsSubmitting(false)
        return
      }

      if (!data.service) {
        setSubmitStatus("error")
        alert("Please select a service.")
        setIsSubmitting(false)
        return
      }

      if (data.service === "Products" && !data.product) {
        setSubmitStatus("error")
        alert("Please select a product.")
        setIsSubmitting(false)
        return
      }

      const response = await fetch("https://backend.vasifytech.com/api/contact", {
        // const response = await fetch("http://localhost:3001/api/contact", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
        setSelectedService("")
        setSelectedProduct("")
        router.push("/thank-you")
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
    <Card className="border-0 shadow-xl md:shadow-lg rounded-2xl overflow-hidden">
      <CardHeader className="text-center p-6 md:p-8 pb-4">
        <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Get Your Free Consultation</CardTitle>
        <p className="text-base md:text-lg text-gray-600 mt-2">Fill out the form and we'll get back to you within 2 hours</p>
      </CardHeader>
      <CardContent className="p-6 md:p-8 pt-0">
        <form id="contact-form" action={handleSubmit} className="space-y-5 md:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name *</label>
              <Input
                name="firstName"
                placeholder="John"
                className="min-h-[48px] border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-lg text-base"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name *</label>
              <Input
                name="lastName"
                placeholder="Doe"
                className="min-h-[48px] border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-lg text-base"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
            <Input
              name="email"
              type="email"
              placeholder="john@example.com"
              className="min-h-[48px] border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-lg text-base"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
            <Input
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              className="min-h-[48px] border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-lg text-base"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Company Name</label>
            <Input
              name="company"
              placeholder="Your Company"
              className="min-h-[48px] border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-lg text-base"
            />
          </div>

          {/* Service Select */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Service Interested In *</label>
            {/* Hidden input to ensure value is included in FormData */}
            <input type="hidden" name="service" value={selectedService} />
            <Select
              value={selectedService}
              onValueChange={setSelectedService}
              required
            >
              <SelectTrigger className="w-full min-h-[48px] p-3 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-green-500 text-base">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="WhatsApp Automation">WhatsApp business Api number</SelectItem>
                <SelectItem value="CRM Integration">Website development</SelectItem>
                <SelectItem value="WhatsApp Marketing">WhatsApp automation</SelectItem>
                <SelectItem value="Chatbot Development">Ai agent</SelectItem>
                <SelectItem value="Products">Products</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Product Select when Products is chosen */}
          {selectedService === "Products" && (
            <div className="animate-in fade-in slide-in-from-top-1">
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Select Product *</label>
              {/* Hidden input to ensure value is included in FormData */}
              <input type="hidden" name="product" value={selectedProduct} />
              <Select
                value={selectedProduct}
                onValueChange={setSelectedProduct}
                required
              >
                <SelectTrigger className="w-full min-h-[48px] p-3 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-green-500 text-base">
                  <SelectValue placeholder="Select a product" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PDF Editor pro">PDF Editor pro</SelectItem>
                  <SelectItem value="PDF Editor pro">PDF Extractor</SelectItem>
                  <SelectItem value="SEO score checker">SEO score checker</SelectItem>
                  <SelectItem value="Image Optimizer">Image Optimizer</SelectItem>
                  <SelectItem value="File converter">File converter</SelectItem>
                  <SelectItem value="Color palette Generator">Color Palette Generator</SelectItem>
                  <SelectItem value="QR Code Generator">QR Code Generator</SelectItem>
                  {/* <SelectItem value="Lead Management (CRM)">Lead Management (CRM)</SelectItem> */}
                </SelectContent>
              </Select>
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Describe Your Needs *</label>
            <Textarea
              name="message"
              placeholder="Tell us about your business, goals, and what you're looking to achieve..."
              className="border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-lg resize-y min-h-[100px] text-base"
              rows={4}
              required
            />
          </div>

          <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="mt-0.5 h-6 w-6 md:h-5 md:w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded cursor-pointer"
              required
            />
            <label htmlFor="terms" className="text-xs md:text-sm text-gray-600 leading-snug cursor-pointer flex-1">
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
            className="w-full min-h-[52px] md:min-h-[56px] bg-green-500 hover:bg-green-600 text-white text-base md:text-lg font-bold py-3 md:py-4 rounded-xl transition-all duration-200 active:scale-[0.98] md:hover:scale-[1.02] disabled:opacity-70 shadow-lg shadow-green-500/20"
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
