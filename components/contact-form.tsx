<<<<<<< HEAD
=======
// "use client"

// import { useState } from "react"
// import { ArrowRight } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { useRouter } from "next/navigation"

// export default function ContactForm() {
//   const router = useRouter()
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

//   async function handleSubmit(formData: FormData) {
//     setIsSubmitting(true)
//     setSubmitStatus("idle")

//     try {
//       const data: { [key: string]: any } = {}
//       formData.forEach((value, key) => {
//         data[key] = value
//       })
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//       if (!emailRegex.test(data.email)) {
//         setSubmitStatus("error")
//         alert("Please enter a valid email address.")
//         setIsSubmitting(false)
//         return
//       }

//       // --- Phone validation ---
//       // Accepts +countrycode or plain digits, 10–15 total
//       const phoneRegex = /^[0-9]{10}$/;
//       if (!phoneRegex.test(data.phone)) {
//         setSubmitStatus("error");
//         alert("Please enter a valid 10-digit phone number.");
//         setIsSubmitting(false);
//         return;
//       }
//       const response = await fetch("https://backend.vasifytech.com/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       })
//       const result = await response.json()
//       if (result.success) {
//         setSubmitStatus("success")
//         // Reset form
//         const form = document.getElementById("contact-form") as HTMLFormElement
//         form?.reset()
//         router.push("/thank-you")
//       } else {
//         setSubmitStatus("error")
//       }
//     } catch (error) {
//       setSubmitStatus("error")
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <Card className="border-0 shadow-lg">
//       <CardHeader className="text-center">
//         <CardTitle className="text-3xl font-bold text-gray-900">Get Your Free Consultation</CardTitle>
//         <p className="text-lg text-gray-600">Fill out the form and we'll get back to you within 2 hours</p>
//       </CardHeader>
//       <CardContent className="p-8">
//         <form id="contact-form" action={handleSubmit} className="space-y-6">
//           <div className="grid md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
//               <Input
//                 name="firstName"
//                 placeholder="John"
//                 className="border-gray-300 focus:border-green-500 focus:ring-green-500"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
//               <Input
//                 name="lastName"
//                 placeholder="Doe"
//                 className="border-gray-300 focus:border-green-500 focus:ring-green-500"
//                 required
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
//             <Input
//               name="email"
//               type="email"
//               placeholder="john@example.com"
//               className="border-gray-300 focus:border-green-500 focus:ring-green-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
//             <Input
//               name="phone"
//               placeholder="+1 (555) 123-4567"
//               className="border-gray-300 focus:border-green-500 focus:ring-green-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
//             <Input
//               name="company"
//               placeholder="Your Company"
//               className="border-gray-300 focus:border-green-500 focus:ring-green-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In *</label>
//             <select
//               name="service"
//               className="w-full p-3 border border-gray-300 rounded-md focus:border-green-500 focus:ring-green-500"
//               required
//             >
//               <option value="">Select a service</option>
//               <option value="whatsapp">WhatsApp Automation</option>
//               <option value="crm">CRM Solutions</option>
//               <option value="WhatsApp E-commerce">WhatsApp E-commerce</option>
//               <option value="saas">SaaS Development</option>
//               <option value="Analytics & ROI Dashboard">Analytics & ROI Dashboard</option>
//               <option value="QR Code Journeys">QR Code Journeys</option>
//               <option value="Developer Tools & APIs">Developer Tools & APIs</option>
//               <option value="all">All Services</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Describe Your Needs *</label>
//             <Textarea
//               name="message"
//               placeholder="Tell us about your business, goals, and what you're looking to achieve..."
//               className="border-gray-300 focus:border-green-500 focus:ring-green-500"
//               rows={4}
//               required
//             />
//           </div>

//           <div className="flex items-start space-x-3">
//             <input
//               type="checkbox"
//               id="terms"
//               name="terms"
//               className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
//               required
//             />
//             <label htmlFor="terms" className="text-sm text-gray-600">
//               I agree to receive communications from VasifyTech and understand that I can unsubscribe at any time. *
//             </label>
//           </div>

//           {submitStatus === "success" && (
//             <div className="bg-green-50 border border-green-200 rounded-lg p-4">
//               <p className="text-green-800 font-medium">
//                 Thank you! Your message has been sent successfully. We'll get back to you within 2 hours.
//               </p>
//             </div>
//           )}

//           {submitStatus === "error" && (
//             <div className="bg-red-50 border border-red-200 rounded-lg p-4">
//               <p className="text-red-800 font-medium">
//                 Sorry, there was an error sending your message. Please try again or contact us directly.
//               </p>
//             </div>
//           )}

//           <Button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-4 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {isSubmitting ? "Sending..." : "Get Free Consultation"}
//             {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
//           </Button>

//           <p className="text-center text-sm text-gray-500">
//             We respect your privacy. Your information will never be shared.
//           </p>
//         </form>
//       </CardContent>
//     </Card>
//   )
// }


//testing 
// File: components/contact-form.tsx
>>>>>>> 65de131dcdfc309458f454c42c6bbd0ac17622d8
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
<<<<<<< HEAD
              <option value="WhatsApp Automation">WhatsApp business Api number</option>
              <option value="CRM Integration">Website development </option>
              <option value="WhatsApp Marketing">WhatsApp automation</option>
              <option value="Chatbot Development">Ai agent</option>
              {/* <option value="Custom Development">Custom Development</option>
              <option value="Consultation">Consultation</option> */}
=======
              <option value="WhatsApp Automation">WhatsApp Automation</option>
              <option value="WhatsApp Marketing">WhatsApp Marketing</option>
              <option value="Chatbot Development">Chatbot Development</option>
              <option value="CRM Integration">CRM Integration</option>
              <option value="Custom Development">Custom Development</option>
              <option value="Consultation">Consultation</option>
>>>>>>> 65de131dcdfc309458f454c42c6bbd0ac17622d8
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