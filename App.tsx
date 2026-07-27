import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import RootLayout from "@/components/root-layout";
import NotFoundPage from "@/components/not-found";

import HomePage from "@/app/page";
import WhatsAppServicesPage from "@/app/whatsapp-services/page";
import WebsiteDevelopmentPage from "@/app/website-development/page";
import DigitalMarketingPage from "@/app/digital-marketing/page";
import ServicesPage from "@/app/services/page";
import ProductsPage from "@/app/products/page";
import PricingPage from "@/app/pricing/page";
import FeaturesPage from "@/app/features/page";
import HowItWorksPage from "@/app/how-it-works/page";
import FaqPage from "@/app/faq/page";
import ContactPage from "@/app/contact/page";
import AIAgentPage from "@/app/ai-agent/page";
import BlogsPage from "@/app/blogs/page";
import CategoryBlogPage from "@/app/blogs/[category]/page";
import BlogArticlePage from "@/app/blogs/[category]/[slug]/BlogArticlePage";
import FreeGuidePage from "@/app/free-whatsapp-business-guide/page";
import TestimonialsPage from "@/app/testimonials/page";
import PrivacyPolicyPage from "@/app/privacy-policy/page";
import ThankYouPage from "@/app/thank-you/page";
import PdfExtractorAuthPage from "@/app/tools/pdf-extractor/page";
import PdfExtractorAppPage from "@/app/tools/pdf-extractor/app/page";
import AdminLoginPage from "@/app/admin/login/page";
import AdminHomePage from "@/app/admin/admin-home-page/page";
import SettingsPage from "@/app/admin/settings/page";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public pages with Navbar + Footer */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/whatsapp-services" element={<WhatsAppServicesPage />} />
          <Route path="/website-development" element={<WebsiteDevelopmentPage />} />
          <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ai-agent" element={<AIAgentPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:category" element={<CategoryBlogPage />} />
          <Route path="/blogs/:category/:slug" element={<BlogArticlePage />} />
          <Route path="/free-whatsapp-business-guide" element={<FreeGuidePage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/tools/pdf-extractor" element={<PdfExtractorAuthPage />} />
          <Route path="/tools/pdf-extractor/app" element={<PdfExtractorAppPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        {/* Admin pages without public Navbar/Footer */}
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/admin-home-page" element={<AdminHomePage />} />
        <Route path="/admin/settings" element={<SettingsPage />} />
      </Routes>
    </>
  );
}
