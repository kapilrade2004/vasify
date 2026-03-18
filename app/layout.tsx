import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import WhatsAppButton from "@/components/whatsapp-button"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WhatsApp Business API Platform for Automated Engagement",
  description:
    "Supercharge customer engagement with VasifyTech's automated WhatsApp Business API platform. Our services help you connect, sell, and support with ease.",
  keywords:
    "WhatsApp Business Platform, WhatsApp Business API, WhatsApp automation, automated customer engagement, chatbot, business messaging, Meta Business Partner, VasifyTech",
  authors: [{ name: "VasifyTech" }],
  creator: "VasifyTech",
  publisher: "VasifyTech",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vasifytech.com",
    title: "WhatsApp Business API Platform for Automated Engagement | VasifyTech",
    description:
      "Supercharge customer engagement with VasifyTech's automated WhatsApp Business API platform. Our services help you connect, sell, and support with ease.",
    siteName: "VasifyTech",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Business API Platform for Automated Engagement | VasifyTech",
    description:
      "Supercharge customer engagement with VasifyTech's automated WhatsApp Business API platform.",
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

        {/* ❌ Google Tag Manager (DISABLED - causes conflict) */}
        {/*
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MRTJ72DT');`,
          }}
        />
        */}

        {/* ❌ Google Analytics (DISABLED - duplicate gtag) */}
        {/*
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
        */}

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

        {/* --- Schema --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "VasifyTech PVT LTD",
              "url": "https://vasifytech.com",
              "logo": "https://vasifytech.com/logo.jpg",
              "sameAs": [
                "https://www.facebook.com/",
                "https://www.instagram.com/vasifytech"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9769754446",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              }
            })
          }}
        />

        {/* ✅ Google Ads Tag (ACTIVE) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17525688605"
          strategy="afterInteractive"
        />

        <Script
          id="google-ads-gtag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17525688605');
            `,
          }}
        />
      </head>

      <body className={inter.className}>

        {/* ❌ GTM Noscript (DISABLED) */}
        {/*
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MRTJ72DT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        */}

        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}