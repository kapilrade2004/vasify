"use client"

import { useState } from "react"
import { Bot, ShoppingCart, Heart, GraduationCap, Building2, Plane, Utensils } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import IndustryChatbotModal from "@/components/industry-chatbot-modal"

const industries = [
  {
    id: "ecommerce",
    name: "E-commerce & Retail",
    icon: ShoppingCart,
    tagline: "Boost Sales with AI-Powered Shopping Assistant",
    description:
      "Automate product queries, order tracking, and personalized shopping assistance. Increase conversions by 300% with instant responses and smart recommendations.",
    demoPrompt: "I'm looking for a blue dress in size M. Do you have any recommendations?",
    features: [
      "Product recommendations & upselling",
      "Order tracking & status updates",
      "Inventory availability checks",
      "Personalized shopping experience",
    ],
    image: "/e-commerce-shopping-cart-with-ai-chatbot-helping-c.jpg",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Heart,
    tagline: "Streamline Patient Care with 24/7 Support",
    description:
      "Handle appointment scheduling, symptom checking, and medical inquiries automatically. Reduce administrative workload by 70% while improving patient satisfaction.",
    demoPrompt: "I need to book an appointment with a cardiologist for next week.",
    features: [
      "Appointment scheduling & reminders",
      "Symptom assessment & triage",
      "Prescription refill requests",
      "Medical record access",
    ],
    image: "/healthcare-appointment-booking-interface-with-doct.jpg",
    gradient: "from-red-500 to-pink-500",
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    tagline: "Enhance Student Engagement Instantly",
    description:
      "Assist with course enrollment, fee inquiries, and student support. Handle 1000+ student queries simultaneously with personalized responses.",
    demoPrompt: "What courses are available for web development? How much do they cost?",
    features: [
      "Course information & enrollment",
      "Fee payment & scholarship queries",
      "Assignment submission tracking",
      "Student counseling support",
    ],
    image: "/education-platform-with-course-catalog-and-student.jpg",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "realestate",
    name: "Real Estate",
    icon: Building2,
    tagline: "Convert More Leads with Instant Responses",
    description:
      "Provide property details, schedule viewings, and qualify leads automatically. Close deals 50% faster with AI-powered property matching.",
    demoPrompt: "I'm looking for a 3BHK apartment in Mumbai under 1 crore.",
    features: [
      "Property search & recommendations",
      "Virtual tour scheduling",
      "Price negotiations & offers",
      "Document verification support",
    ],
    image: "/real-estate-property-listing-with-modern-apartment.jpg",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: "travel",
    name: "Travel & Hospitality",
    icon: Plane,
    tagline: "Simplify Bookings & Travel Planning",
    description:
      "Handle booking inquiries, itinerary planning, and travel assistance seamlessly. Increase booking rates by 40% with personalized recommendations.",
    demoPrompt: "I want to book a family vacation to Goa for 5 days in December.",
    features: [
      "Flight & hotel bookings",
      "Itinerary customization",
      "Travel insurance & visa support",
      "Real-time travel updates",
    ],
    image: "/travel-booking-interface-with-beach-destination-an.jpg",
    gradient: "from-teal-500 to-green-500",
  },
  {
    id: "food",
    name: "Food & Restaurants",
    icon: Utensils,
    tagline: "Take Orders Seamlessly with AI",
    description:
      "Manage orders, reservations, and menu inquiries automatically. Handle peak hours effortlessly with unlimited concurrent conversations.",
    demoPrompt: "Can I see your menu? I'd like to order for delivery.",
    features: [
      "Menu browsing & recommendations",
      "Order placement & tracking",
      "Table reservations",
      "Dietary preferences & allergies",
    ],
    image: "/placeholder.svg?height=500&width=600",
    gradient: "from-yellow-500 to-orange-500",
  },
]

export default function IndustryDemoSection() {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0])
  const [showChatbot, setShowChatbot] = useState(false)

  const handleIndustryClick = (industry: (typeof industries)[0]) => {
    setSelectedIndustry(industry)
  }

  const handleTryDemo = () => {
    setShowChatbot(true)
  }

  const SelectedIcon = selectedIndustry.icon

  return (
    <section className="py-12 md:py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 break-words px-2">
            💬 Meet Your New Digital Employee — The AI Agent
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
            Available 24x7. Speaks Your Customer's Language. Works on Every Platform.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-8 md:mb-12">
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <button
                key={industry.id}
                onClick={() => handleIndustryClick(industry)}
                className={`flex flex-col items-center gap-2 p-3 md:p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                  selectedIndustry.id === industry.id
                    ? `border-primary bg-primary/10 shadow-lg`
                    : "border-gray-200 bg-white hover:border-primary/50"
                }`}
              >
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all ${
                    selectedIndustry.id === industry.id
                      ? `bg-gradient-to-br ${industry.gradient} text-white`
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span
                  className={`text-xs md:text-sm font-medium text-center ${
                    selectedIndustry.id === industry.id ? "text-primary" : "text-gray-700"
                  }`}
                >
                  {industry.name}
                </span>
              </button>
            )
          })}
        </div>

        <Card className="overflow-hidden border-2 border-primary/20 shadow-xl max-w-full">
          <div className="grid lg:grid-cols-2 gap-0 max-w-full">
            <div className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center space-y-4 md:space-y-6 max-w-full overflow-hidden">
              <div
                className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${selectedIndustry.gradient} shadow-lg flex-shrink-0`}
              >
                <SelectedIcon className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
              </div>

              <div className="max-w-full overflow-hidden">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 break-words hyphens-auto">
                  {selectedIndustry.name}
                </h3>
                <p
                  className={`text-sm sm:text-base md:text-lg font-semibold bg-gradient-to-r ${selectedIndustry.gradient} bg-clip-text text-transparent mb-4 break-words hyphens-auto`}
                >
                  {selectedIndustry.tagline}
                </p>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed break-words hyphens-auto">
                  {selectedIndustry.description}
                </p>
              </div>

              <div className="space-y-3 max-w-full overflow-hidden">
                <p className="font-semibold text-sm md:text-base">Key Features:</p>
                {selectedIndustry.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 md:gap-3 group max-w-full">
                    <div
                      className={`w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br ${selectedIndustry.gradient} flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}
                    >
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <span className="text-xs sm:text-sm md:text-base text-gray-700 break-words min-w-0 flex-1">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                onClick={handleTryDemo}
                className={`bg-gradient-to-r ${selectedIndustry.gradient} hover:opacity-90 text-white group w-full md:w-auto text-sm md:text-base`}
              >
                Try {selectedIndustry.name} Demo Bot
                <Bot className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 md:p-8 lg:p-12 flex items-center justify-center max-w-full overflow-hidden">
              <div className="relative w-full aspect-[4/3] max-w-full">
                <img
                  src={selectedIndustry.image || "/placeholder.svg"}
                  alt={selectedIndustry.name}
                  className="w-full h-full object-cover rounded-2xl shadow-2xl border-2 md:border-4 border-white"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${selectedIndustry.gradient} opacity-20 rounded-2xl`}
                ></div>

                <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-white/95 backdrop-blur-md rounded-lg px-3 py-1.5 md:px-4 md:py-2 shadow-lg">
                  <p className="text-[10px] md:text-xs font-semibold text-gray-600">AI-Powered</p>
                  <p className="text-sm md:text-lg font-bold text-gray-900">24/7 Available</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {showChatbot && (
          <IndustryChatbotModal
            industry={{
              name: selectedIndustry.name,
              icon: selectedIndustry.name.split(" ")[0],
              description: selectedIndustry.description,
            }}
            isOpen={showChatbot}
            onClose={() => setShowChatbot(false)}
          />
        )}
      </div>
    </section>
  )
}
