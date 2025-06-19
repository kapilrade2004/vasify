"use client"

import { useState } from "react"
import { QrCode, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function WhatsAppQR() {
  const [isOpen, setIsOpen] = useState(false)

  // Replace with your actual WhatsApp number (without + or spaces)
  const phoneNumber = "919769754446"
  const message = "Hi! I'm interested in VasifyTech's services. Can you help me get started?"
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  // Generate QR code URL using QR Server API
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(whatsappUrl)}&bgcolor=ffffff&color=000000&margin=20`

  const downloadQR = () => {
    const link = document.createElement("a")
    link.href = qrCodeUrl
    link.download = "vasifytech-whatsapp-qr.png"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-white/20 hover:bg-white/30 active:bg-white/30 text-white border-white/30 hover:border-white/50 active:border-white/50 rounded-lg px-4 py-2 font-medium transition-all duration-200"
          size="sm"
        >
          <QrCode className="h-4 w-4 mr-2" />
          Show QR
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-gray-800">Scan to Chat on WhatsApp</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center space-y-6 p-4">
          {/* QR Code */}
          <div className="bg-white p-4 rounded-lg shadow-md border-2 border-green-100">
            <img src={qrCodeUrl || "/placeholder.svg"} alt="WhatsApp QR Code" className="w-64 h-64 object-contain" />
          </div>

          {/* Instructions */}
          <div className="text-center space-y-2">
            <p className="text-gray-600 font-medium">Scan with your phone camera or WhatsApp</p>
            <p className="text-sm text-gray-500">This will open a WhatsApp chat with VasifyTech</p>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 w-full">
            <Button
              onClick={downloadQR}
              variant="outline"
              className="flex-1 border-green-500 text-green-600 hover:bg-green-50 active:bg-green-50"
            >
              <Download className="h-4 w-4 mr-2" />
              Download QR
            </Button>
            <Button
              onClick={() => window.open(whatsappUrl, "_blank")}
              className="flex-1 bg-green-500 hover:bg-green-600 active:bg-green-600 text-white"
            >
              Open WhatsApp
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
