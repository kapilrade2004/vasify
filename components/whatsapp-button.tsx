"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number (without + or spaces)
    const phoneNumber = "919769754446" // Your WhatsApp number
    const message = "Hi! I'm interested in VasifyTech's services. Can you help me get started?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        size="lg"
      >
        <MessageCircle className="h-8 w-8" />
      </Button>
    </div>
  )
}
