# Vasify - Modern Digital Solutions & AI Integration Platform

## Executive Summary

**Vasify** (VasifyTech) is an enterprise-grade digital solutions platform built with **React 18**, **Vite 5**, **TypeScript**, **Tailwind CSS**, **React Router v6**, and **Framer Motion**. Originally converted from Next.js into a high-performance Single Page Application (SPA), it serves as both the corporate web portal for VasifyTech—an official Meta Business Partner and AI agent service provider—and an interactive web application offering specialized AI products, industry-specific chatbots, WhatsApp Business Platform integrations, client utility tools, and an admin content management dashboard.

---

## Key Features & Product Modules

### 1. AI Chatbot Agent Platform (`/ai-agent`)
- 24/7 intelligent customer engagement chatbots capable of handling multi-turn conversations in 50+ languages.
- Integration with n8n AI workflows via client-side service (`services/chatService.ts`).
- Pre-configured industry bot personalities and interactive demos:
  - **Real Estate**: Lead qualification, property inquiries (e.g., 2BHK/3BHK searches), demo scheduling.
  - **Hospitality**: 24/7 guest inquiries, room availability, booking confirmations, rate queries.
  - **Healthcare**: Appointment scheduling, doctor availability, patient inquiry management.
  - **Education**: Course information, admission counseling, batch timing queries.
  - **BFSI (Banking & Fintech)**: Loan eligibility, policy details, financial queries.
  - **Travel & Visa**: Visa consultation, destination inquiries.
  - **E-commerce & D2C**: Product recommendations, order tracking, interactive upsells.

### 2. WhatsApp Business API Platform (`/whatsapp-services`)
- Meta Business Partner official WhatsApp API deployment.
- Broadcast messaging at scale with rich media support (catalogs, documents, images, video).
- Automated CRM communication flows, lead capture, and instant quick-reply setup.
- Interactive WhatsApp Floating Button and QR Code components for instant customer onboarding.

### 3. Website & Mobile App Development (`/website-development`)
- Showcase of custom Web Development (React, PWAs) and Mobile App solutions (iOS/Android native).
- Enterprise CRM, ERP, and bespoke automation tool development services.

### 4. Digital Marketing & Lead Generation (`/digital-marketing`)
- Performance marketing, SEO, social media strategy, and conversion rate optimization showcase.

### 5. Document AI & Utility Tools (`/tools/pdf-extractor`)
- **PDF Extractor & Table Parser**: Free interactive web tool leveraging **Google Gemini AI** (`@google/genai`, `gemini-3-flash-preview`).
- Page-by-page structured JSON data extraction (key-value pairs and multi-page tabular data).
- Built-in PDF security utility powered by `pdfjs-dist` and `pdf-lib` for password verification, unlock rendering, and canvas reconstruction.
- Styled Excel (`.xlsx`) exporter powered by `xlsx` with dynamic column width calculation and formatting preservation.

### 6. Resource Center & Blogs (`/blogs`, `/free-whatsapp-business-guide`)
- Dynamic blog system supporting category filters (`/blogs/:category`) and individual post reading (`/blogs/:category/:slug`).
- Lead magnet resource center (`/free-whatsapp-business-guide`) with PDF guide modal (`DownloadModal`) and automatic download trigger.
- Resilient offline fallback data ensuring content displays seamlessly even when backend network requests are delayed.

### 7. Admin Management Portal (`/admin`)
- Complete administrative management suite:
  - **Authentication** (`/admin/login`): Secure sign-in flow with React Router client-side navigation.
  - **Dashboard Home** (`/admin/admin-home-page`): Time-aware greeting, Recharts metrics breakdown, storage widget, AI suggestions, and CRUD management for Blogs, Categories, and Free Guides.
  - **Workspace Settings** (`/admin/settings`): Workspace preferences, appearance settings, and API integrations.

---

## Technical Architecture & Tech Stack

| Layer | Technology |
|---|---|
| **Build Tool / Bundler** | Vite 5.4 (`@vitejs/plugin-react`) |
| **Framework & Router** | React 18.3, React Router DOM v6.28 |
| **Type Safety** | TypeScript 5.8 (Strict Type Checking) |
| **Styling** | Tailwind CSS v3.4, PostCSS, `@tailwindcss/typography`, `tailwindcss-animate` |
| **UI Components** | Radix UI Primitives, Shadcn UI architecture, Lucide React (`lucide-react`) |
| **SEO & Head Tags** | `react-helmet-async` v2.0 |
| **Animations** | Framer Motion v12, Embla Carousel React |
| **State Management** | Zustand (`useUserStore`), React Hooks |
| **Forms & Validation** | React Hook Form, Zod (`^3.24.1`), `@hookform/resolvers` |
| **AI Integration** | Google GenAI SDK (`@google/genai`), n8n Webhook Chat Service |
| **Document Processing** | `pdfjs-dist`, `pdf-lib`, `xlsx` (SheetJS) |
| **Notifications** | Sonner toast notifications, Radix Toast |

---

## Detailed Directory Structure

```
vasify-website-frontend/
├── App.tsx                     # React Router V6 Route Configuration
├── index.html                  # HTML5 Entry Point with Meta Tags
├── index.tsx                   # React 18 Root Mounting Point
├── app/                        # Migrated Page Components & Views
│   ├── page.tsx                # Main Homepage with Animated Services Slider
│   ├── globals.css             # CSS Variables, Utility Classes & Animations
│   ├── admin/                  # Admin Management Pages
│   │   ├── login/              # Admin Login Page
│   │   ├── admin-home-page/    # Admin Dashboard (BlogForm, CategoryForm, GuideForm)
│   │   └── settings/           # Admin Settings Page
│   ├── ai-agent/               # AI Agent Solutions Page
│   ├── blogs/                  # Blog Directory & Sub-Pages ([category], [slug])
│   ├── contact/                # Contact Us Form & Direct Booking Section
│   ├── digital-marketing/      # Digital Marketing Service Page
│   ├── faq/                    # Frequently Asked Questions Page
│   ├── features/               # Platform Features Breakdown Page
│   ├── free-whatsapp-business-guide/ # Downloadable Free Guides Resource Page
│   ├── how-it-works/           # Workflow Explanation Page
│   ├── pricing/                # Plan Comparison Page
│   ├── privacy-policy/         # Legal Statement Page
│   ├── products/               # Product Suite Page
│   ├── services/               # Services Overview Page
│   ├── testimonials/           # Client Reviews Page
│   ├── thank-you/              # Conversion Confirmation Page
│   ├── tools/                  # PDF Extractor App & Auth Pages
│   ├── website-development/    # Web & Mobile Solutions Page
│   └── whatsapp-services/      # WhatsApp API Services Page
├── components/                 # Reusable Application Components
│   ├── breadcrumbs.tsx         # Dynamic Breadcrumbs Component
│   ├── command-palette.tsx     # Global Search Command Palette (Ctrl+K)
│   ├── contact-form.tsx        # Consultation Inquiry Form with Validation
│   ├── dashboard-header.tsx    # Admin Dashboard Top Bar (Notifications, Search, Profile)
│   ├── dashboard-sidebar.tsx   # Admin Dashboard Navigation Sidebar (Collapsible)
│   ├── download-modal.tsx      # Lead Magnet Resource Download Modal
│   ├── footer.tsx              # Public Site Footer
│   ├── mobile-bottom-nav.tsx   # Fixed Admin Mobile Navigation
│   ├── mobile-nav.tsx          # Public Mobile Drawer Navigation
│   ├── navbar.tsx              # Public Sticky Navigation Bar with Dropdown
│   ├── root-layout.tsx         # Public Layout Wrapper (Navbar, Main Spacer, Footer)
│   ├── services-slider.tsx     # Hero Animated Services Slider
│   ├── theme-provider.tsx      # Light/Dark Theme Provider Wrapper
│   ├── whatsapp-button.tsx     # Floating WhatsApp Click-to-Chat Button
│   └── dashboard/              # Dashboard Visualizations & Stat Cards
├── hooks/                      # Custom React Hooks & Zustand Stores
│   ├── use-mobile.tsx          # Responsive Breakpoint Detector
│   ├── use-toast.ts            # Toast Notification Hook
│   ├── use-user-store.ts       # User Chat Store
│   └── useChatMessages.ts      # Chat Communication Hook
├── services/                   # Service Layer
│   ├── chatService.ts          # n8n AI Chat Webhook Client
│   └── geminiService.ts        # Google Gemini AI Document Extraction Client
├── utils/                      # Helper Functions
│   ├── excelExport.ts          # Excel (.xlsx) Workbook Exporter
│   └── pdfUtils.ts             # PDF Password Check & Canvas Decryption
├── tailwind.config.ts          # Tailwind Theme Palette & Keyframes
├── vite.config.ts              # Vite Build & Path Alias Configuration
└── package.json                # Project Dependencies & Build Scripts
```

---

## Environment Variables Configuration

Create a `.env` or `.env.local` file in the root directory:

```env
# Production Backend API URL (Defaults to https://backend.vasifytech.com)
VITE_API_BASE_URL=https://backend.vasifytech.com

# Google Gemini API Key for Document AI extraction
VITE_GEMINI_API_KEY=your_google_gemini_api_key
```

---

## Development & Production Build Commands

- **Install Dependencies**: `npm install`
- **Start Development Server**: `npm run dev` (Runs Vite dev server at `http://localhost:5173`)
- **Type Checking**: `npm run lint` or `npx tsc --noEmit`
- **Build Production Bundle**: `npm run build` (Compiles TypeScript and builds `dist/` bundle)
- **Preview Production Build**: `npm run preview` (Serves static `dist/` bundle locally)

---

*Vasify Documentation updated after React 18 + Vite migration and optimization pass.*
