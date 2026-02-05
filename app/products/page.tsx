"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Check,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  MousePointer,
  Upload,
  Download,
  CheckCircle,
  Sparkles,
  Users,
} from "lucide-react";

// ---------- HeroSection ----------
const heroTools = [
  {
    image: "/assets/hero-pdf-editor.png",
    label: "PDF Editor",
    gradient: "from-red-500/20 to-orange-500/20",
  },
  {
    image: "/assets/hero-seo-checker.png",
    label: "SEO Checker",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    image: "/assets/hero-image-optimizer.png",
    label: "Image Optimizer",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    image: "/assets/hero-qr-generator.png",
    label: "QR Generator",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
];

const HeroSection = () => (
  <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden gradient-hero">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto px-4 lg:px-8 relative">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Instant Tools • Pay Per Use
          </div>

          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground leading-tight mb-6">
            Get It Done Fast: <span className="text-gradient">Instant Tools</span>, Pay Only for What You Use
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-lg">
            No subscriptions. No commitments. Just powerful tools ready when you need them. Starting from just ₹99 per
            use.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link href="#tools">
              <Button
                size="lg"
                className="gradient-primary border-0 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Explore Tools
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-2 hover:bg-secondary bg-transparent"
            >
              How It Works
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span>Results in Seconds</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span>10,000+ Users</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative">
            <div className="bg-card rounded-3xl p-6 shadow-xl border border-border">
              <div className="grid grid-cols-2 gap-4">
                {heroTools.map((tool, index) => (
                  <motion.div
                    key={tool.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`bg-gradient-to-br ${tool.gradient} rounded-2xl p-3 flex flex-col items-center justify-center aspect-square cursor-pointer border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg`}
                  >
                    <img
                      src={tool.image || "/placeholder.svg"}
                      alt={tool.label}
                      className="w-3/4 h-3/4 object-contain mb-2"
                    />
                    <span className="text-sm font-semibold text-foreground">
                      {tool.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
            >
              From ₹99
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-lg border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">50K+</div>
                  <div className="text-sm text-muted-foreground">Tasks Completed</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// ---------- HowItWorks ----------
const steps = [
  {
    icon: MousePointer,
    title: "Choose Your Tool",
    description: "Browse our collection of instant tools and select the one that fits your needs.",
  },
  {
    icon: Upload,
    title: "Upload Your File",
    description: "Drag and drop your file or paste your content. We support all major formats.",
  },
  {
    icon: CheckCircle,
    title: "Process & Pay",
    description: "Our AI processes your task instantly. Pay only for successful completions.",
  },
  {
    icon: Download,
    title: "Download Results",
    description: "Get your processed file or results immediately. Simple as that!",
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-20 lg:py-28 bg-muted/30">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
          Simple Process
        </span>
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
          How It <span className="text-gradient">Works</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Get your tasks done in four simple steps. No learning curve, no complexity.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative"
          >
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-8 z-0" />
            )}

            <div className="relative z-10 text-center lg:text-left">
              <div className="inline-flex flex-col items-center lg:items-start mb-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/20">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ---------- ToolsGrid ----------
const tools = [
  {
    title: "PDF Editor Pro",
    description: "Professional PDF editing made simple",
    features: ["Unlimited edits", "50+ Templates", "Cloud sync"],
    price: "₹99",
    unit: "/use",
    badge: "Popular",
    badgeColor: "bg-primary",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=250&fit=crop",
    moreText: "+1 more plan",
    href: "/tools/pdf-editor",
  },
  // {
  //   title: "PDF Extractor",
  //   description: "Extract tables and key data from invoices in seconds",
  //   features: ["Multi-page support", "Excel export", "Password-protected PDFs"],
  //   price: "₹0",
  //   unit: "/7-day trial",
  //   badge: "New",
  //   badgeColor: "bg-emerald-500",
  //   image:
  //     "https://images.unsplash.com/photo-1523287562758-66c7fc58967a?w=400&h=250&fit=crop",
  //   moreText: "Includes 7-day free trial",
  //   href: "/tools/pdf-extractor", // signup + redirect flow will live here
  // },
   {
    title: "PDF Extractor",
    description: "Extract tables and key data from invoices in seconds",
    features: ["Multi-page support", "Excel export", "Password-protected PDFs"],
    price: "₹0",
    unit: "/7-day trial",
    badge: "New",
    badgeColor: "bg-emerald-500",
    image:
      // "https://images.unsplash.com/photo-1523287562758-66c7fc58967a?w=400&h=250&fit=crop",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop&q=80",
    moreText: "Includes 7-day free trial",
    href: "/tools/pdf-extractor", // important
  },
  {
    title: "SEO Score Checker",
    description: "Analyze and improve your website ranking",
    features: ["Full site audit", "Keyword analysis", "Competitor tracking"],
    price: "₹149",
    unit: "/scan",
    badge: "New",
    badgeColor: "bg-blue-500",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    moreText: "+1 more plan",
    href: "/contact",
  },
  {
    title: "Image Optimizer",
    description: "Compress images without losing quality",
    features: ["Batch processing", "All formats supported", "Smart compression"],
    price: "₹79",
    unit: "/batch",
    badge: "Popular",
    badgeColor: "bg-primary",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=250&fit=crop",
    moreText: "+1 more plan",
    href: "/contact",
  },
  {
    title: "QR Code Generator",
    description: "Create custom QR codes instantly",
    features: ["Custom colors", "Logo embedding", "Analytics tracking"],
    price: "₹49",
    unit: "/code",
    badge: null,
    badgeColor: "",
    image:
      "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=400&h=250&fit=crop",
    moreText: "+1 more plan",
    href: "/contact",
  },
  {
    title: "File Converter",
    description: "Convert files between formats instantly",
    features: ["100+ formats", "Batch conversion", "Secure processing"],
    price: "₹129",
    unit: "/file",
    badge: "Pro",
    badgeColor: "bg-orange-500",
    image:
      "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?w=400&h=250&fit=crop",
    moreText: "+1 more plan",
    href: "/contact",
  },
  {
    title: "Color Palette Generator",
    description: "AI-powered color schemes for your brand",
    features: ["AI suggestions", "Export to CSS", "Brand matching"],
    price: "₹59",
    unit: "/palette",
    badge: "New",
    badgeColor: "bg-blue-500",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=250&fit=crop",
    moreText: "+1 more plan",
    href: "/contact",
  },
];

const ToolsGrid = () => (
  <section id="tools" className="py-20 lg:py-28 bg-[#0f172a]">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
          Our Products
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Everything you need to build, grow, and scale your business. Start with any tool and expand as you grow.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="bg-[#1e293b] rounded-2xl overflow-hidden border border-gray-700/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tool.image}
                  alt={tool.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-transparent to-transparent" />
                {tool.badge && (
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full ${tool.badgeColor} text-white text-xs font-semibold`}
                  >
                    {tool.badge}
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{tool.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{tool.description}</p>

                <ul className="space-y-2 mb-6 flex-grow">
                  {tool.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-700/50">
                  <div>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-white">{tool.price}</span>
                      <span className="text-sm text-gray-400 ml-1">{tool.unit}</span>
                    </div>
                    <span className="text-xs text-gray-500">{tool.moreText}</span>
                  </div>
                  <Link href={tool.href}>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-4 py-2 text-sm font-medium group/btn">
                      {tool.title === "PDF Extractor" ? "Start Free Trial" : "Explore Now"}
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ---------- Page component ----------
export default function ProductsPage() {
  return (
    <div className="bg-background text-foreground">
      <HeroSection />
      <ToolsGrid />
      <HowItWorks />
    </div>
  );
}
