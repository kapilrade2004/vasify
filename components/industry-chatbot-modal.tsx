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
