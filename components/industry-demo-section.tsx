"use client"

import { useState } from "react"
import { Bot, ShoppingCart, Heart, GraduationCap, Building2, Plane, Utensils } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import IndustryChatbotModal from "@/components/industry-chatbot-modal"

const industries1 = [
  {
    id: "ecommerce",
    name: "E-commerce & Retail",
    icon: ShoppingCart,
    caption: "Boost sales with AI-powered product recommendations and instant customer support",
    demoPrompt: "I'm looking for a blue dress in size M. Do you have any recommendations?",
    description: "Automate product queries, order tracking, and personalized shopping assistance",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Heart,
    caption: "Streamline appointment booking and provide 24/7 patient support",
    demoPrompt: "I need to book an appointment with a cardiologist for next week.",
    description: "Handle appointment scheduling, symptom checking, and medical inquiries",
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    caption: "Enhance student engagement with instant course information and enrollment support",
    demoPrompt: "What courses are available for web development? How much do they cost?",
    description: "Assist with course enrollment, fee inquiries, and student support",
  },
  {
    id: "realestate",
    name: "Real Estate",
    icon: Building2,
    caption: "Convert more leads with instant property information and viewing schedules",
    demoPrompt: "I'm looking for a 3BHK apartment in Mumbai under 1 crore.",
    description: "Provide property details, schedule viewings, and qualify leads",
  },
  {
    id: "travel",
    name: "Travel & Hospitality",
    icon: Plane,
    caption: "Simplify bookings and provide personalized travel recommendations",
    demoPrompt: "I want to book a family vacation to Goa for 5 days in December.",
    description: "Handle booking inquiries, itinerary planning, and travel assistance",
  },
  {
    id: "food",
    name: "Food & Restaurants",
    icon: Utensils,
    caption: "Take orders and reservations seamlessly with AI-powered assistance",
    demoPrompt: "Can I see your menu? I'd like to order for delivery.",
    description: "Manage orders, reservations, and menu inquiries",
  },
]

export default function IndustryDemoSection() {
  const [activeTab, setActiveTab] = useState(industries1[0].id)
  const [selectedIndustry, setSelectedIndustry] = useState<(typeof industries1)[0] | null>(null)

  const handleTryDemo = (industry: (typeof industries1)[0]) => {
    setSelectedIndustry(industry)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto max-w-6xl">
        {/* AI Agent Preview Card */}
        <div className="mb-12">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mb-4">
                  <Bot className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  Available 24x7. Speaks Your Customer's Language. Works on Every Platform.
                </h3>
                <p className="text-muted-foreground">
                  Our AI Chatbot Agent is built to engage, qualify, and convert your leads — across WhatsApp, websites,
                  or social media — while providing human-like responses powered by smart workflows and multilingual
                  capabilities.
                </p>
              </div>
              <div className="w-full md:w-1/3">
                <div className="bg-card rounded-xl p-6 shadow-lg border-2 border-primary/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <Bot className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold">AI Agent</p>
                      <p className="text-xs text-muted-foreground">Always Online</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <p className="text-sm">Hi! How can I help you today?</p>
                    </div>
                    <div className="bg-muted p-3 rounded-lg ml-6">
                      <p className="text-sm">I need information about your services</p>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <p className="text-sm">I'd be happy to help! Let me show you...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Industry Demo Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 lg:grid-cols-6 gap-2 h-auto p-2 bg-muted/50">
            {industries1.map((industry) => {
              const Icon = industry.icon
              return (
                <TabsTrigger
                  key={industry.id}
                  value={industry.id}
                  className="flex flex-col items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs font-medium">{industry.name}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {industries1.map((industry) => (
            <TabsContent key={industry.id} value={industry.id} className="mt-6">
              <Card className="p-8">
                <p className="text-muted-foreground mb-6 text-center">{industry.caption}</p>

                <div className="max-w-2xl mx-auto">
                  <div className="text-center">
                    <Button size="lg" onClick={() => handleTryDemo(industry)} className="group">
                      Try {industry.name} Demo
                      <Bot className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                      Experience how AI handles real customer scenarios
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Industry Chatbot Modal */}
        {selectedIndustry && (
          <IndustryChatbotModal
            industry={{
              name: selectedIndustry.name,
              icon: selectedIndustry.name.split(" ")[0],
              description: selectedIndustry.description,
            }}
            isOpen={!!selectedIndustry}
            onClose={() => setSelectedIndustry(null)}
          />
        )}
      </div>
    </section>
  )
}
