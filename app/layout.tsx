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

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LL25WKRSH7"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LL25WKRSH7');
            `
          }}
        />          
        <script
          dangerouslySetInnerHTML={{
            __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1528358318152104');
        fbq('track', 'PageView');
      `
          }}
        />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1528358318152104&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

      </head>
      <body className={inter.className}> <Navbar /> {children} <Footer />
        <WhatsAppButton />
        <WhatsAppQRFloating />
      </body>
    </html>
  )
}
