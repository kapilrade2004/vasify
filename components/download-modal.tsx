"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Download, FileText, CheckCircle, AlertTriangle } from "lucide-react"

interface DownloadModalProps {
  guide: {
    id: number;
    title: string;
    description: string;
    pages: number;
    pdfUrl: string; // The public URL to the PDF file
    thumbnail: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export function DownloadModal({ guide, isOpen, onClose }: DownloadModalProps) {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  if (!isOpen) return null;

  // Function to trigger the file download in the browser
  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = guide.pdfUrl;
    // Create a clean filename like "My-Awesome-Guide.pdf"
    link.download = `${guide.title.replace(/[^a-zA-Z0-9]/g, "-")}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // 1. Prepare data for the backend
      const payload = {
        ...formData,
        guideTitle: guide.title,
        guidePdfUrl: guide.pdfUrl,
      };

      // 2. Send data to your new backend endpoint
      const response = await fetch("https://backend.vasifytech.com/api/guide-download", { // Adjust URL if needed
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        // Handle server-side validation errors or other issues
        throw new Error("Submission failed");
      }
      
      // 3. On success, update UI and trigger download
      setSubmitStatus("success");
      
      // Wait a moment so user can see success message, then start download
      setTimeout(() => {
        triggerDownload();
        
        // Wait a bit more, then close the modal and reset state
        setTimeout(() => {
          onClose();
          // Reset for next time modal opens
          setSubmitStatus("idle");
          setFormData({ name: "", phone: "", email: "" });
        }, 2000);

      }, 1000);

    } catch (error) {
      console.error("Download form submission error:", error);
      setSubmitStatus("error");
    } finally {
      // Only set isSubmitting to false if there was an error. 
      // On success, the button will be hidden anyway.
      if (submitStatus !== 'success') {
          setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm">
      <Card className="w-full max-w-md animate-in fade-in-0 zoom-in-95">
        <CardHeader className="relative">
          <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>

          {submitStatus !== 'success' ? (
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
                Provide your contact info to get this guide. We'll also email you the download link for your records.
              </p>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-xl text-green-600 mb-2">Download Starting!</CardTitle>
              <CardDescription>
                Thank you! Your download will begin shortly. We've also sent a copy to your email.
              </CardDescription>
            </div>
          )}
        </CardHeader>

        {submitStatus !== 'success' && (
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Form fields remain the same */}
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" type="text" placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required disabled={isSubmitting} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required disabled={isSubmitting}/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} disabled={isSubmitting}/>
              </div>

              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-800 text-sm rounded-lg p-3 flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Submission failed. Please check your details and try again.</span>
                </div>
              )}

              <div className="text-xs text-gray-500">
                By downloading, you agree to receive occasional updates. Unsubscribe anytime.
              </div>

              <div className="flex space-x-3 pt-2">
                <Button type="button" variant="outline" onClick={onClose} className="flex-1" disabled={isSubmitting}>Cancel</Button>
                <Button type="submit" className="flex-1 bg-green-500 hover:bg-green-600 text-white" disabled={isSubmitting}>
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