"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Download, FileText, CheckCircle } from "lucide-react"

interface DownloadModalProps {
  guide: {
    id: number
    title: string
    description: string
    pages: number
    pdfUrl: string
    thumbnail: string
  }
  isOpen: boolean
  onClose: () => void
}

export function DownloadModal({ guide, isOpen, onClose }: DownloadModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Store the download request (in real app, this would go to your backend)
    const downloadData = {
      ...formData,
      guideId: guide.id,
      guideTitle: guide.title,
      downloadedAt: new Date().toISOString(),
    }

    // Save to localStorage for demo purposes
    const existingDownloads = JSON.parse(localStorage.getItem("guideDownloads") || "[]")
    existingDownloads.push(downloadData)
    localStorage.setItem("guideDownloads", JSON.stringify(existingDownloads))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Start download after a short delay
    setTimeout(() => {
      // Create a temporary link to trigger download
      const link = document.createElement("a")
      link.href = guide.pdfUrl
      link.download = `${guide.title.replace(/[^a-zA-Z0-9]/g, "-")}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      // Close modal after download starts
      setTimeout(() => {
        onClose()
        setIsSuccess(false)
        setFormData({ name: "", phone: "", email: "" })
      }, 2000)
    }, 1000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <Card className="w-full max-w-md">
        <CardHeader className="relative">
          <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>

          {!isSuccess ? (
            <>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-lg">Download Free Guide</CardTitle>
                  <CardDescription className="text-sm">{guide.pages} pages</CardDescription>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{guide.title}</h3>
              <p className="text-sm text-gray-600">
                Please provide your contact information to download this free guide. We'll also send you updates about
                new guides and WhatsApp automation tips.
              </p>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-xl text-green-600 mb-2">Download Starting!</CardTitle>
              <CardDescription>
                Thank you! Your download will begin shortly. Check your downloads folder.
              </CardDescription>
            </div>
          )}
        </CardHeader>

        {!isSuccess && (
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address (Optional)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="text-xs text-gray-500">
                By downloading this guide, you agree to receive occasional updates about WhatsApp automation and new
                resources. You can unsubscribe at any time.
              </div>

              <div className="flex space-x-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1 bg-transparent"
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 mr-2" />
                      Download Guide
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        )}
      </Card>
    </div>
  )
}
