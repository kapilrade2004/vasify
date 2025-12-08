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
  // SEO CHANGE: Title is now more specific and keyword-focused.
  title: "WhatsApp Business API Platform for Automated Engagement",

  // SEO CHANGE: Description now includes primary and secondary keywords naturally.
  description:
    "Supercharge customer engagement with VasifyTech's automated WhatsApp Business API platform. Our services help you connect, sell, and support with ease.",
  keywords:
    "WhatsApp Business Platform, WhatsApp Business API, WhatsApp automation, automated customer engagement, chatbot, business messaging, Meta Business Partner, VasifyTech",
  authors: [{ name: "VasifyTech" }],
  creator: "VasifyTech",
  publisher: "VasifyTech",
  robots: "index, follow",

  // SEO CHANGE: OpenGraph data now matches the new, improved title and description.
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vasifytech.com",
    title: "WhatsApp Business API Platform for Automated Engagement | VasifyTech",
    description:
      "Supercharge customer engagement with VasifyTech's automated WhatsApp Business API platform. Our services help you connect, sell, and support with ease.",
    siteName: "VasifyTech",
  },

  // SEO CHANGE: Twitter card data also updated for consistency.
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Business API Platform for Automated Engagement | VasifyTech",
    description:
      "Supercharge customer engagement with VasifyTech's automated WhatsApp Business API platform.",
    creator: "@vasifytech", // Make sure this is your correct Twitter handle
  },
  verification: {
    google: "your-google-verification-code", // Don't forget to add your code here
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
        {/* --- Google Analytics (NEW TAG ONLY) --- */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BDJFSL31B4"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BDJFSL31B4');
        `,
          }}
        />

        {/* --- Favicon & Canonical --- */}
        <link rel="icon" href="/logo.jpg" />
        <link rel="canonical" href="https://vasifytech.com" />

        {/* --- Meta Tags --- */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#10b981" />
        <meta name="google-site-verification" content="V_86hNVYNxpJT3WQCeTce5f3wdyJQ6GNXjwet7ypGwQ" />

        <meta
          name="google-site-verification"
          content="jg7XctR-_q90gexoVYGhKaZ1j1v0nVDRPO4b2cVIyWw"
        />

        {/* --- Facebook Pixel --- */}
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
        `,
          }}
        />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1528358318152104&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>

      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <WhatsAppQRFloating />
      </body>
    </html>

  )
}
