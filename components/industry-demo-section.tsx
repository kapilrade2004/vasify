"use client"

import { useState } from "react"
import { Bot, ShoppingCart, Heart, GraduationCap, Building2, Plane, Utensils } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import ChatInterface from "@/components/chat/ChatInterface"
import { useUserStore } from "@/hooks/use-user-store"

const chatAgentKeyMap: { [key: string]: string } = {
  ecommerce: "e-com-retail",
  healthcare: "healthcare",
  education: "education",
  realestate: "real-estate",
  travel: "travel-hospitality",
  food: "food-restaurants",
}

const industries = [
  {
    id: "ecommerce",
    name: "E-commerce & Retail",
    icon: ShoppingCart,
    isLive: false, // Set to false
    tagline: "Boost Sales with AI-Powered Shopping Assistant",
    description: "Automate product queries, order tracking, and personalized shopping assistance. Increase conversions by 300% with instant responses and smart recommendations.",
    features: ["Product recommendations & upselling", "Order tracking & status updates", "Inventory availability checks", "Personalized shopping experience"],
    image: "/e-commerce-shopping-cart-with-ai-chatbot-helping-c.jpg",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Heart,
    isLive: true,
    tagline: "Streamline Patient Care with 24/7 Support",
    description: "Handle appointment scheduling, symptom checking, and medical inquiries automatically. Reduce administrative workload by 70% while improving patient satisfaction.",
    features: ["Appointment scheduling & reminders", "Symptom assessment & triage", "Prescription refill requests", "Medical record access"],
    image: "/healthcare-appointment-booking-interface-with-doct.jpg",
    gradient: "from-red-500 to-pink-500",
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    isLive: true,
    tagline: "Enhance Student Engagement Instantly",
    description: "Assist with course enrollment, fee inquiries, and student support. Handle 1000+ student queries simultaneously with personalized responses.",
    features: ["Course information & enrollment", "Fee payment & scholarship queries", "Assignment submission tracking", "Student counseling support"],
    image: "/education-platform-with-course-catalog-and-student.jpg",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "realestate",
    name: "Real Estate",
    icon: Building2,
    isLive: true,
    tagline: "Convert More Leads with Instant Responses",
    description: "Provide property details, schedule viewings, and qualify leads automatically. Close deals 50% faster with AI-powered property matching.",
    features: ["Property search & recommendations", "Virtual tour scheduling", "Price negotiations & offers", "Document verification support"],
    image: "/real-estate-property-listing-with-modern-apartment.jpg",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: "travel",
    name: "Travel & Hospitality",
    icon: Plane,
    isLive: true,
    tagline: "Simplify Bookings & Travel Planning",
    description: "Handle booking inquiries, itinerary planning, and travel assistance seamlessly. Increase booking rates by 40% with personalized recommendations.",
    features: ["Flight & hotel bookings", "Itinerary customization", "Travel insurance & visa support", "Real-time travel updates"],
    image: "/travel-booking-interface-with-beach-destination-an.jpg",
    gradient: "from-teal-500 to-green-500",
  },
  {
    id: "food",
    name: "Food & Restaurants",
    icon: Utensils,
    isLive: false, // Set to false
    tagline: "Take Orders Seamlessly with AI",
    description: "Manage orders, reservations, and menu inquiries automatically. Handle peak hours effortlessly with unlimited concurrent conversations.",
    features: ["Menu browsing & recommendations", "Order placement & tracking", "Table reservations", "Dietary preferences & allergies"],
    image: "/placeholder.svg?height=500&width=600",
    gradient: "from-yellow-500 to-orange-500",
  },
]

export default function IndustryDemoSection() {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[1]) // Start with a live one
  const [showChatbot, setShowChatbot] = useState(false)
  const { aiChatUsername, aiChatUserMobile, setAIChatUsername, setAIChatUserMobile } = useUserStore()
  const [showRegistration, setShowRegistration] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false); // <-- NEW: Add loading state


  const handleIndustryClick = (industry: (typeof industries)[0]) => {
    setSelectedIndustry(industry)
  }

  const handleTryDemo = () => {
    if (!aiChatUsername || !aiChatUserMobile) {
      setShowRegistration(true)
    } else {
      setShowRegistration(false)
    }
    setShowChatbot(true)
  }

  const handleLeadSubmit = async () => {
    setIsSubmitting(true);

    // Split full name into first and last name
    const nameParts = aiChatUsername.trim().split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '(No last name)';

    const leadData = {
      firstName: firstName,
      lastName: lastName,
      // Since we don't have email, we create a placeholder. The phone number is the key identifier.
      email: `${aiChatUserMobile}@lead.vasifytech.com`,
      phone: aiChatUserMobile,
      company: 'N/A - From home page AI Bot Demo',
      service: selectedIndustry.name, // The industry they are interested in
      message: `User started a demo for the "${selectedIndustry.name}" AI Agent.`,
    };

    try {
      // This is a "fire-and-forget" call. We don't block the user if it fails.
      await fetch("https://backend.vasifytech.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadData),
      });
      console.log("Lead submitted successfully:", leadData);
    } catch (error) {
      console.error("Failed to submit lead:", error);
    } finally {
      // IMPORTANT: Always proceed to the chat for a good user experience
      setIsSubmitting(false);
      setShowRegistration(false);
    }
  };

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
                className={`flex flex-col items-center gap-2 p-3 md:p-4 rounded-xl border-2 transition-all duration-300 ${selectedIndustry.id === industry.id
                  ? `border-primary bg-primary/10 shadow-lg`
                  : "border-gray-200 bg-white"
                  } ${!industry.isLive ? 'opacity-60' : 'hover:scale-105'}`} // Visual cue for disabled bots
              >
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all ${selectedIndustry.id === industry.id
                    ? `bg-gradient-to-br ${industry.gradient} text-white`
                    : "bg-gray-100 text-gray-600"
                    }`}
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span
                  className={`text-xs md:text-sm font-medium text-center ${selectedIndustry.id === industry.id ? "text-primary" : "text-gray-700"
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

              {/* ... Card content ... */}
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

              {/* CONDITIONAL BUTTON RENDERING */}
              {selectedIndustry.isLive ? (
                <Button
                  size="lg"
                  onClick={handleTryDemo}
                  className={`bg-gradient-to-r ${selectedIndustry.gradient} hover:opacity-90 text-white group w-full md:w-auto text-sm md:text-base`}
                >
                  Try {selectedIndustry.name} Demo Bot
                  <Bot className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                </Button>
              ) : (
                <Button
                  size="lg"
                  disabled
                  className="bg-gray-300 text-gray-500 cursor-not-allowed w-full md:w-auto text-sm md:text-base"
                >
                  Coming Soon
                </Button>
              )}
            </div>

            {/* ... Image section ... */}
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 md:p-8 lg:p-12 flex items-center justify-center max-w-full overflow-hidden">
              <div className="relative w-full max-w-xl aspect-[4/3] sm:aspect-[16/9] md:aspect-[4/3]">
                <img
                  src={selectedIndustry.image || "/placeholder.svg"}
                  alt={selectedIndustry.name}
                  className="w-full h-full object-cover md:object-contain rounded-2xl shadow-2xl border-2 md:border-4 border-white"
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

        {/* The Dialog logic remains the same */}
        <Dialog open={showChatbot} onOpenChange={setShowChatbot}>
          <DialogContent className="sm:max-w-[500px] h-[600px] max-h-[80vh] p-0">
            {showRegistration ? (
              <div className="p-6 space-y-4">
                <h2 className="text-lg font-bold">Please enter your details to start</h2>
                <Input placeholder="Your Name" value={aiChatUsername} onChange={(e) => setAIChatUsername(e.target.value)} />
                <PhoneInput country={'in'} value={aiChatUserMobile} onChange={(phone) => setAIChatUserMobile(phone)} inputClass="!w-full !h-10 !text-base !rounded-md !border-input !px-3 !py-2 !bg-background" containerClass="!w-full" buttonClass="!border-input !bg-background paddin-x-3" />
                <Button
                  className="w-full"
                  onClick={handleLeadSubmit}
                  disabled={!aiChatUsername || !aiChatUserMobile || isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Continue to Chat"}
                </Button>

                <Button variant="outline" className="w-full" onClick={() => setShowChatbot(false)}>
                  Cancel
                </Button>
              </div>
            ) : (
              <ChatInterface title={selectedIndustry.name} chatAgentKey={chatAgentKeyMap[selectedIndustry.id]} userName={aiChatUsername} userMobile={aiChatUserMobile} />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}