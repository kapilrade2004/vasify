import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import WhatsAppButton from "@/components/whatsapp-button"
import WhatsAppQRFloating from "@/components/whatsapp-qr-floating"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VasifyTech - Engage Customers on WhatsApp, Effortlessly",
  description:
    "Automate conversations, provide instant support, and drive sales with VasifyTech - the ultimate WhatsApp Business Platform. Meta Business Partner.",
  keywords:
    "WhatsApp Business, WhatsApp automation, customer engagement, chatbot, business messaging, Meta Business Partner, WhatsApp API, VasifyTech",
  authors: [{ name: "VasifyTech" }],
  creator: "VasifyTech",
  publisher: "VasifyTech",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vasifytech.com",
    title: "VasifyTech - Engage Customers on WhatsApp, Effortlessly",
    description:
      "Automate conversations, provide instant support, and drive sales with VasifyTech - the ultimate WhatsApp Business Platform.",
    siteName: "VasifyTech",
  },
  twitter: {
    card: "summary_large_image",
    title: "VasifyTech - Engage Customers on WhatsApp, Effortlessly",
    description:
      "Automate conversations, provide instant support, and drive sales with VasifyTech - the ultimate WhatsApp Business Platform.",
    creator: "@vasifytech",
  },
  verification: {
    google: "your-google-verification-code",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.jpg" />
        <link rel="canonical" href="https://vasifytech.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#10b981" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17301719624"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17301719624');
            `
          }}
        />
      </head>
      <body className={inter.className}> <Navbar /> {children} <Footer />
        <WhatsAppButton />
        <WhatsAppQRFloating />
      </body>
    </html>
  )
}
