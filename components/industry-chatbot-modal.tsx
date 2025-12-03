"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Bot, Send } from "lucide-react"

interface IndustryChatbotModalProps {
  industry: {
    name: string
    icon: string
    description: string
  }
  isOpen: boolean
  onClose: () => void
}

const industryQuestions: Record<string, string[]> = {
  "E-commerce & Retail": [
    "How can AI help with product recommendations?",
    "Can you track my order status?",
    "What payment methods do you support?",
    "How do I handle returns and refunds?",
  ],
  Healthcare: [
    "How do I book an appointment?",
    "Can you help with symptom checking?",
    "What are your clinic hours?",
    "How do I access my medical records?",
  ],
  Education: [
    "How do I enroll in a course?",
    "What are the course fees?",
    "Can I get a course certificate?",
    "How do I contact my instructor?",
  ],
  "Banking & Finance": [
    "How do I check my account balance?",
    "Can you help me apply for a loan?",
    "What are your interest rates?",
    "How do I report a lost card?",
  ],
  "Real Estate": [
    "What properties are available?",
    "Can I schedule a property viewing?",
    "What are the payment plans?",
    "How do I apply for a home loan?",
  ],
  "Travel & Hospitality": [
    "How do I make a booking?",
    "What are your cancellation policies?",
    "Can you help plan my itinerary?",
    "What amenities do you offer?",
  ],
  "Food & Restaurants": [
    "Can I see your menu?",
    "How do I place an order?",
    "Do you offer delivery?",
    "Can I make a reservation?",
  ],
  Automotive: [
    "How do I book a service appointment?",
    "What models are available?",
    "Can I schedule a test drive?",
    "What financing options do you have?",
  ],
}

export default function IndustryChatbotModal({ industry, isOpen, onClose }: IndustryChatbotModalProps) {
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    {
      text: `Hi! I'm your ${industry.name} AI Assistant. I can help you with common queries. Try asking me one of the questions below!`,
      isBot: true,
    },
  ])
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null)

  const questions = industryQuestions[industry.name] || [
    "How can you help my business?",
    "What features do you offer?",
    "How do I get started?",
    "What's the pricing?",
  ]

  const handleQuestionClick = (question: string) => {
    setSelectedQuestion(question)
    setMessages((prev) => [...prev, { text: question, isBot: false }])

    // Simulate AI response
    setTimeout(() => {
      const responses: Record<string, string> = {
        "How can AI help with product recommendations?":
          "Our AI analyzes customer behavior and preferences to suggest personalized products, increasing conversion rates by up to 40%!",
        "Can you track my order status?":
          "Yes! I can provide real-time order tracking. Just share your order number and I'll fetch the latest status for you.",
        "How do I book an appointment?":
          "Booking is easy! Just tell me your preferred date and time, and I'll check availability and confirm your appointment instantly.",
        "How do I enroll in a course?":
          "I can guide you through the enrollment process! First, let me know which course interests you, and I'll provide all the details.",
        "How do I check my account balance?":
          "For security, I'll need to verify your identity first. Once verified, I can provide your current balance and recent transactions.",
        "What properties are available?":
          "I can show you properties based on your preferences! Tell me your budget, location, and property type, and I'll find the best matches.",
        "How do I make a booking?":
          "I can help you book right away! Let me know your travel dates, destination, and preferences, and I'll find the best options for you.",
        "Can I see your menu?":
          "I can show you our full menu with prices, ingredients, and special offers. What type of cuisine are you interested in?",
        "How do I book a service appointment?":
          "I can schedule your service appointment! Tell me your vehicle model, preferred date, and the type of service you need.",
      }

      const response =
        responses[question] ||
        `Great question! Our AI Agent can handle this and much more for your ${industry.name} business. It provides instant, accurate responses 24/7 in multiple languages. Would you like to see a demo or discuss implementation?`

      setMessages((prev) => [...prev, { text: response, isBot: true }])
    }, 1000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <span className="text-3xl">{industry.icon}</span>
            <div>
              <div>{industry.name} AI Assistant</div>
              <p className="text-sm font-normal text-muted-foreground mt-1">{industry.description}</p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto space-y-4 py-4">
          {/* Chat Messages */}
          <div className="space-y-3">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.isBot
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  {message.isBot && (
                    <div className="flex items-center gap-2 mb-1">
                      <Bot className="w-4 h-4" />
                      <span className="text-xs font-semibold">AI Assistant</span>
                    </div>
                  )}
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Questions */}
          {!selectedQuestion && (
            <div className="space-y-2 pt-4 border-t">
              <p className="text-sm font-semibold text-gray-700">Try asking:</p>
              <div className="grid gap-2">
                {questions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="justify-start text-left h-auto py-3 px-4 hover:bg-blue-50 hover:border-blue-300 bg-transparent"
                    onClick={() => handleQuestionClick(question)}
                  >
                    <Send className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{question}</span>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="border-t pt-4">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
            <p className="text-sm text-gray-700 mb-3">
              <strong>This is a demo of our AI Agent capabilities.</strong> Your actual AI Agent will be trained on your
              specific business data and can handle unlimited conversations simultaneously.
            </p>
            <a href="/contact">
            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
              Get Your Custom AI Agent
            </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}


//testing
// "use client"

// import { useState } from "react"
// import { X, CheckCircle, TrendingUp, Users, ArrowRight, Sparkles } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import Link from "next/link"
// import { industryData, IndustryDetail } from "@/lib/industry-data"

// interface Industry {
//   name: string
//   icon: string
//   description: string
// }

// interface IndustryChatbotModalProps {
//   industry: Industry
//   isOpen: boolean
//   onClose: () => void
// }

// export default function IndustryChatbotModal({ industry, isOpen, onClose }: IndustryChatbotModalProps) {
//   const [activeTab, setActiveTab] = useState<"features" | "demo" | "pricing">("demo")

//   if (!isOpen) return null

//   // Get detailed industry data
//   const industryKey = industry.name.toLowerCase().replace(/\s+&\s+/g, "").replace(/\s+/g, "")
//   const detailedData: IndustryDetail | undefined = industryData[industryKey]

//   if (!detailedData) {
//     return null
//   }

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
//       <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
//         {/* Header */}
//         <div className="sticky top-0 z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white px-8 py-6">
//           <div className="flex items-start justify-between">
//             <div className="flex items-center gap-4">
//               <div className="text-5xl">{detailedData.icon}</div>
//               <div>
//                 <h2 className="text-3xl font-bold">{detailedData.name}</h2>
//                 <p className="text-blue-100 mt-1">{detailedData.tagline}</p>
//               </div>
//             </div>
//             <button
//               onClick={onClose}
//               className="text-white/80 hover:text-white hover:bg-white/10 rounded-lg p-2 transition-all"
//             >
//               <X className="h-6 w-6" />
//             </button>
//           </div>

//           {/* Tabs */}
//           <div className="flex gap-2 mt-6">
//             <button
//               onClick={() => setActiveTab("demo")}
//               className={`px-6 py-2 rounded-lg font-semibold transition-all ${
//                 activeTab === "demo"
//                   ? "bg-white text-blue-600"
//                   : "bg-white/10 text-white hover:bg-white/20"
//               }`}
//             >
//               Live Demo
//             </button>
//             <button
//               onClick={() => setActiveTab("features")}
//               className={`px-6 py-2 rounded-lg font-semibold transition-all ${
//                 activeTab === "features"
//                   ? "bg-white text-blue-600"
//                   : "bg-white/10 text-white hover:bg-white/20"
//               }`}
//             >
//               Features & Benefits
//             </button>
//             <button
//               onClick={() => setActiveTab("pricing")}
//               className={`px-6 py-2 rounded-lg font-semibold transition-all ${
//                 activeTab === "pricing"
//                   ? "bg-white text-blue-600"
//                   : "bg-white/10 text-white hover:bg-white/20"
//               }`}
//             >
//               Pricing
//             </button>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="overflow-y-auto max-h-[calc(90vh-180px)] p-8">
//           {/* Demo Tab */}
//           {activeTab === "demo" && (
//             <div className="space-y-8">
//               {/* Key Metrics */}
//               <div className="grid grid-cols-3 gap-6">
//                 {detailedData.keyMetrics.map((metric, index) => (
//                   <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center">
//                     <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
//                     <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
//                   </div>
//                 ))}
//               </div>

//               {/* Demo Conversation */}
//               <div className="bg-gray-50 rounded-xl p-6">
//                 <div className="flex items-center gap-2 mb-6">
//                   <Sparkles className="h-5 w-5 text-blue-600" />
//                   <h3 className="text-xl font-bold text-gray-900">Live Conversation Demo</h3>
//                 </div>

//                 <div className="space-y-4">
//                   {detailedData.demoConversations.map((conv, index) => (
//                     <div key={index} className="space-y-3">
//                       {/* User Message */}
//                       <div className="flex justify-end">
//                         <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-5 py-3 max-w-md shadow-md">
//                           <p className="text-sm">{conv.user}</p>
//                         </div>
//                       </div>

//                       {/* Agent Message */}
//                       <div className="flex justify-start">
//                         <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-sm px-5 py-3 max-w-md shadow-md">
//                           <div className="flex items-center gap-2 mb-2">
//                             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                             <span className="text-xs text-gray-500 font-semibold">AI Agent</span>
//                           </div>
//                           <p className="text-sm text-gray-800 whitespace-pre-line">{conv.agent}</p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Use Cases */}
//               <div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">Common Use Cases</h3>
//                 <div className="grid grid-cols-2 gap-4">
//                   {detailedData.useCases.map((useCase, index) => (
//                     <div
//                       key={index}
//                       className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
//                     >
//                       <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
//                       <span className="text-sm text-gray-700">{useCase}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Features Tab */}
//           {activeTab === "features" && (
//             <div className="space-y-8">
//               {/* Features */}
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Agent Features</h3>
//                 <div className="grid grid-cols-2 gap-4">
//                   {detailedData.features.map((feature, index) => (
//                     <div
//                       key={index}
//                       className="flex items-start gap-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4"
//                     >
//                       <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
//                       <span className="text-sm text-gray-800 font-medium">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Benefits */}
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Benefits</h3>
//                 <div className="space-y-4">
//                   {detailedData.benefits.map((benefit, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center gap-4 bg-white border-l-4 border-green-500 rounded-lg p-5 shadow-sm"
//                     >
//                       <TrendingUp className="h-6 w-6 text-green-600 flex-shrink-0" />
//                       <span className="text-gray-800 font-medium">{benefit}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Integration Info */}
//               <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">Seamless Integration</h3>
//                 <div className="grid grid-cols-3 gap-4 text-center">
//                   <div>
//                     <div className="text-3xl mb-2">💬</div>
//                     <div className="text-sm font-semibold text-gray-700">WhatsApp</div>
//                   </div>
//                   <div>
//                     <div className="text-3xl mb-2">🌐</div>
//                     <div className="text-sm font-semibold text-gray-700">Website</div>
//                   </div>
//                   <div>
//                     <div className="text-3xl mb-2">📱</div>
//                     <div className="text-sm font-semibold text-gray-700">Mobile App</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Pricing Tab */}
//           {activeTab === "pricing" && (
//             <div className="space-y-8">
//               <div className="text-center mb-8">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Plan</h3>
//                 <p className="text-gray-600">Flexible pricing tailored for {detailedData.name}</p>
//               </div>

//               <div className="grid grid-cols-3 gap-6">
//                 {/* Starter Plan */}
//                 <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-all">
//                   <div className="text-center mb-6">
//                     <Badge className="mb-4">Starter</Badge>
//                     <div className="text-3xl font-bold text-gray-900">{detailedData.pricing.starter}</div>
//                     <p className="text-sm text-gray-600 mt-2">Perfect for small businesses</p>
//                   </div>
//                   <ul className="space-y-3 mb-6">
//                     <li className="flex items-center gap-2 text-sm">
//                       <CheckCircle className="h-4 w-4 text-green-500" />
//                       <span>1,000 conversations/month</span>
//                     </li>
//                     <li className="flex items-center gap-2 text-sm">
//                       <CheckCircle className="h-4 w-4 text-green-500" />
//                       <span>WhatsApp integration</span>
//                     </li>
//                     <li className="flex items-center gap-2 text-sm">
//                       <CheckCircle className="h-4 w-4 text-green-500" />
//                       <span>Basic analytics</span>
//                     </li>
//                     <li className="flex items-center gap-2 text-sm">
//                       <CheckCircle className="h-4 w-4 text-green-500" />
//                       <span>Email support</span>
//                     </li>
//                   </ul>
//                   <Link href="/contact">
//                     <Button variant="outline" className="w-full">
//                       Get Started
//                     </Button>
//                   </Link>
//                 </div>

//                 {/* Professional Plan */}
//                 <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl p-6 transform scale-105 shadow-xl relative">
//                   <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
//                     <Badge className="bg-yellow-400 text-gray-900">Most Popular</Badge>
//                   </div>
//                   <div className="text-center mb-6">
//                     <Badge className="mb-4 bg-white/20 text-white">Professional</Badge>
//                     <div className="text-3xl font-bold">{detailedData.pricing.pro}</div>
//                     <p className="text-sm text-blue-100 mt-2">For growing businesses</p>
//                   </div>
//                   <ul className="space-y-3 mb-6">
//                     <li className="flex items-center gap-2 text-sm">
//                       <CheckCircle className="h-4 w-4" />
//                       <span>10,000 conversations/month</span>
//                     </li>
//                     <li className="flex items-center gap-2 text-sm">
//                       <CheckCircle className="h-4 w-4" />
//                       <span>All platforms integration</span>
//                     </li>
//                     <li className="flex items-center gap-2 text-sm">
//                       <CheckCircle className="h-4 w-4" />
//                       <span>Advanced analytics</span>
//                     </li>
//                     <li className="flex items-center gap-2 text-sm">
//                       <CheckCircle className="h-4 w-4" />
//                       <span>Priority support</span>
//                     </li>
//                     <li className="flex items-center gap-2 text-sm">
//                       <CheckCircle className="h-4 w-4" />
//                       <span>Custom training</span>
//                     </li>
//                   </ul>
//                   <Link href="/contact">
//                     <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
//                       Get Started
//                     </Button>
//                   </Link>
//                 </div>

//                 {/* Enterprise Plan */}
//                 <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-all">
//                   <div className="text-center mb-6">
//                     <Badge className="mb-4">Enterprise</Badge>
//                     <div className="text-3xl font-bold text-gray-900">{detailedData.pricing.enterprise}</div>
//                     <p className="text-sm text-gray-600 mt-2">For large organizations</p>
//                   </div>
//                   <ul className="space-y-3 mb-6">
//                     <li className="flex items-center gap-2 text-sm">
//                       <CheckCircle className="h-4 w-4 text-green-500" />
//                       <span>Unlimited conversations</span>
//                     </li>
//                     <li className="flex items-center gap-2 text-sm">
//                       <CheckCircle className="h-4 w-4 text-green-500" />
//                       <span>Custom integrations</span>
//                     </li>
//                     <li className="flex items-center gap-2 text-sm">
//                       <CheckCircle className="h-4 w-4 text-green-500" />
//                       <span>White-label solution</span>
//                     </li>
//                     <li className="flex items-center gap-2 text-sm">
//                       <CheckCircle className="h-4 w-4 text-green-500" />
//                       <span>Dedicated manager</span>
//                     </li>
//                     <li className="flex items-center gap-2 text-sm">
//                       <CheckCircle className="h-4 w-4 text-green-500" />
//                       <span>SLA guarantee</span>
//                     </li>
//                   </ul>
//                   <Link href="/contact">
//                     <Button variant="outline" className="w-full">
//                       Contact Sales
//                     </Button>
//                   </Link>
//                 </div>
//               </div>

//               {/* Money-back Guarantee */}
//               <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
//                 <p className="text-green-800 font-semibold">
//                   ✨ 30-Day Money-Back Guarantee • Free Setup • No Credit Card Required
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Footer CTA */}
//         <div className="sticky bottom-0 bg-gradient-to-r from-gray-50 to-white border-t border-gray-200 px-8 py-5">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-gray-600">Ready to transform your {detailedData.name.toLowerCase()}?</p>
//               <p className="text-xs text-gray-500 mt-1">Join 500+ businesses using AI Agent</p>
//             </div>
//             <div className="flex gap-3">
//               <Link href="/contact">
//                 <Button variant="outline" className="gap-2">
//                   <Users className="h-4 w-4" />
//                   Schedule Demo
//                 </Button>
//               </Link>
//               <Link href="/contact">
//                 <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
//                   Start Free Trial
//                   <ArrowRight className="h-4 w-4" />
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }