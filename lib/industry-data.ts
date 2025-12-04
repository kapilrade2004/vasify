// File: lib/industry-data.ts
// Comprehensive industry-specific AI agent configurations

export interface IndustryDetail {
  name: string
  icon: string
  description: string
  tagline: string
  features: string[]
  useCases: string[]
  benefits: string[]
  demoConversations: {
    user: string
    agent: string
  }[]
  keyMetrics: {
    label: string
    value: string
  }[]
  pricing: {
    starter: string
    pro: string
    enterprise: string
  }
}

export const industryData: Record<string, IndustryDetail> = {
  ecommerce: {
    name: "E-commerce & Retail",
    icon: "🛒",
    description: "AI-powered shopping assistant for seamless customer experience",
    tagline: "Transform browsers into buyers with intelligent product recommendations",
    features: [
      "Product recommendations based on preferences",
      "Order tracking and status updates",
      "Cart abandonment recovery",
      "Size and fit guidance",
      "Inventory availability checks",
      "Return and refund processing",
      "Multi-language product catalog",
      "Payment assistance",
    ],
    useCases: [
      "24/7 product discovery and recommendations",
      "Automated order status updates",
      "Instant customer query resolution",
      "Personalized shopping experiences",
      "Flash sale notifications",
      "Stock alerts and waitlist management",
    ],
    benefits: [
      "Increase conversion rates by 35%",
      "Reduce cart abandonment by 40%",
      "Handle 10,000+ queries simultaneously",
      "24/7 shopping assistance",
      "Reduce support costs by 70%",
    ],
    demoConversations: [
      {
        user: "I'm looking for running shoes under ₹3000",
        agent: "Great! I have 15 excellent options for you. What's your preferred brand? Nike, Adidas, or Puma? Also, what size do you wear?",
      },
      {
        user: "Nike, size 9",
        agent: "Perfect! Here are 3 top-rated Nike running shoes in size 9 under ₹3000:\n1. Nike Revolution 6 - ₹2,895 ⭐4.5/5\n2. Nike Downshifter 12 - ₹2,695 ⭐4.3/5\n3. Nike Flex Experience - ₹2,495 ⭐4.4/5\n\nWould you like to see details or add any to cart?",
      },
    ],
    keyMetrics: [
      { label: "Avg. Response Time", value: "< 2 sec" },
      { label: "Query Resolution", value: "92%" },
      { label: "Customer Satisfaction", value: "4.8/5" },
    ],
    pricing: {
      starter: "₹3,999/mo",
      pro: "₹8,999/mo",
      enterprise: "Custom",
    },
  },
  healthcare: {
    name: "Healthcare",
    icon: "🏥",
    description: "HIPAA-compliant AI assistant for patient care and support",
    tagline: "Enhance patient care with 24/7 intelligent healthcare assistance",
    features: [
      "Appointment scheduling and reminders",
      "Symptom checker and triage",
      "Prescription refill requests",
      "Medical history collection",
      "Insurance verification",
      "Lab report explanations",
      "Post-treatment follow-ups",
      "HIPAA-compliant data handling",
    ],
    useCases: [
      "Automated appointment booking",
      "Patient intake and registration",
      "Medication reminders",
      "Test result notifications",
      "Doctor availability checks",
      "Emergency protocol guidance",
    ],
    benefits: [
      "Reduce no-shows by 45%",
      "Save 20 hours/week on scheduling",
      "Improve patient satisfaction by 60%",
      "24/7 patient support",
      "Reduce administrative burden by 50%",
    ],
    demoConversations: [
      {
        user: "I need to book an appointment with Dr. Sharma",
        agent: "I'd be happy to help you schedule an appointment with Dr. Sharma. What type of consultation do you need? (General checkup, Follow-up, or Specialist consultation)",
      },
      {
        user: "Follow-up for my diabetes checkup",
        agent: "Got it! Dr. Sharma has the following slots available this week:\n• Tomorrow at 10:30 AM\n• Thursday at 3:00 PM\n• Friday at 11:00 AM\n\nWhich time works best for you?",
      },
    ],
    keyMetrics: [
      { label: "Appointment Accuracy", value: "99.2%" },
      { label: "Patient Satisfaction", value: "4.9/5" },
      { label: "Response Time", value: "< 3 sec" },
    ],
    pricing: {
      starter: "₹4,999/mo",
      pro: "₹12,999/mo",
      enterprise: "Custom",
    },
  },
  education: {
    name: "Education",
    icon: "🎓",
    description: "Smart AI tutor for personalized learning experiences",
    tagline: "Empower students with 24/7 intelligent learning assistance",
    features: [
      "Course enrollment and registration",
      "Doubt clearing and tutoring",
      "Assignment submission reminders",
      "Exam schedule notifications",
      "Fee payment assistance",
      "Study material recommendations",
      "Progress tracking",
      "Parent-teacher communication",
    ],
    useCases: [
      "Student query resolution",
      "Course recommendations",
      "Admission inquiries",
      "Class schedule management",
      "Online assessment support",
      "Library resource access",
    ],
    benefits: [
      "Handle 5,000+ student queries daily",
      "Reduce admin workload by 60%",
      "Improve student engagement by 45%",
      "24/7 learning support",
      "Increase enrollment by 30%",
    ],
    demoConversations: [
      {
        user: "What are the eligibility criteria for MBA program?",
        agent: "Great question! For our MBA program, you need:\n✓ Bachelor's degree (any stream) with 50%+ marks\n✓ Valid CAT/MAT/XAT score\n✓ 2+ years work experience (preferred)\n\nWould you like to know about specializations or application process?",
      },
      {
        user: "What specializations are available?",
        agent: "We offer 6 MBA specializations:\n1. Marketing\n2. Finance\n3. Human Resources\n4. Operations\n5. Business Analytics\n6. International Business\n\nEach program is 2 years with industry internships. Which one interests you?",
      },
    ],
    keyMetrics: [
      { label: "Query Resolution", value: "94%" },
      { label: "Student Satisfaction", value: "4.7/5" },
      { label: "Enrollment Rate", value: "+32%" },
    ],
    pricing: {
      starter: "₹3,499/mo",
      pro: "₹7,999/mo",
      enterprise: "Custom",
    },
  },
  realestate: {
    name: "Real Estate",
    icon: "🏠",
    description: "AI assistant for property search and client management",
    tagline: "Convert property inquiries into site visits automatically",
    features: [
      "Property search and filtering",
      "Virtual tour scheduling",
      "Mortgage calculator",
      "Document checklist",
      "Lead qualification",
      "Neighborhood information",
      "Price negotiation assistance",
      "Legal compliance guidance",
    ],
    useCases: [
      "Automated lead capture and qualification",
      "Property recommendations based on budget",
      "Site visit scheduling",
      "Document collection",
      "EMI calculations",
      "Post-sale support",
    ],
    benefits: [
      "Increase lead conversion by 50%",
      "Reduce response time to < 1 minute",
      "Qualify 1000+ leads automatically",
      "24/7 property inquiry handling",
      "Save 30+ hours per week",
    ],
    demoConversations: [
      {
        user: "I'm looking for a 2BHK apartment in Andheri under ₹1.5 Cr",
        agent: "Excellent! I have 8 properties matching your criteria in Andheri. Let me ask a few quick questions:\n• Preferred location: Andheri East or West?\n• Furnishing: Furnished, Semi-furnished, or Unfurnished?\n• Possession: Ready to move or under construction?",
      },
      {
        user: "Andheri West, furnished, ready to move",
        agent: "Perfect! I found 3 ideal properties:\n\n1. **Andheri Heights** - ₹1.45 Cr\n   📍 Near Metro | 980 sq.ft | 15th Floor\n\n2. **Sunrise Residency** - ₹1.38 Cr\n   📍 Near Highway | 950 sq.ft | 8th Floor\n\n3. **Green Valley** - ₹1.49 Cr\n   📍 Near School | 1050 sq.ft | 12th Floor\n\nWould you like to schedule site visits?",
      },
    ],
    keyMetrics: [
      { label: "Lead Response", value: "< 1 min" },
      { label: "Site Visit Bookings", value: "+65%" },
      { label: "Conversion Rate", value: "28%" },
    ],
    pricing: {
      starter: "₹4,499/mo",
      pro: "₹9,999/mo",
      enterprise: "Custom",
    },
  },
  banking: {
    name: "Banking & Finance",
    icon: "🏦",
    description: "Secure AI banking assistant for financial services",
    tagline: "Deliver instant, secure banking support 24/7",
    features: [
      "Account balance inquiries",
      "Transaction history",
      "Loan eligibility checks",
      "Credit card applications",
      "Investment advice",
      "Fraud detection alerts",
      "Bill payment reminders",
      "KYC verification assistance",
    ],
    useCases: [
      "Instant account queries",
      "Loan application processing",
      "Credit card support",
      "Investment portfolio guidance",
      "Fraud alert management",
      "EMI calculations",
    ],
    benefits: [
      "Reduce call center load by 70%",
      "Process 50,000+ queries daily",
      "Improve CSAT by 55%",
      "Instant loan pre-qualification",
      "Save ₹20L+ annually on support",
    ],
    demoConversations: [
      {
        user: "What's my account balance?",
        agent: "For security, I'll need to verify your identity. Please provide your registered mobile number's last 4 digits.",
      },
      {
        user: "4567",
        agent: "Thank you! Your account details:\n\n💰 Savings Account (****3421)\nAvailable Balance: ₹1,24,567\nLast Transaction: ₹2,500 (Online Shopping)\n\nWould you like to see recent transactions or mini statement?",
      },
    ],
    keyMetrics: [
      { label: "Query Accuracy", value: "99.5%" },
      { label: "Security Score", value: "A+" },
      { label: "Response Time", value: "< 2 sec" },
    ],
    pricing: {
      starter: "₹5,999/mo",
      pro: "₹14,999/mo",
      enterprise: "Custom",
    },
  },
  travel: {
    name: "Travel & Hospitality",
    icon: "✈️",
    description: "AI travel concierge for bookings and customer service",
    tagline: "Create unforgettable travel experiences with AI assistance",
    features: [
      "Flight and hotel bookings",
      "Itinerary planning",
      "Travel recommendations",
      "Booking modifications",
      "Travel insurance guidance",
      "Local attraction suggestions",
      "Restaurant reservations",
      "Travel documentation help",
    ],
    useCases: [
      "Automated booking assistance",
      "Travel package recommendations",
      "Cancellation and refund processing",
      "Customer feedback collection",
      "Loyalty program management",
      "Emergency travel support",
    ],
    benefits: [
      "Increase bookings by 40%",
      "Reduce booking time by 60%",
      "Handle 24/7 customer queries",
      "Upsell success rate: 35%",
      "Save 25 hours/week on support",
    ],
    demoConversations: [
      {
        user: "I want to book a trip to Goa for 3 people next weekend",
        agent: "Wonderful choice! Let me help you plan an amazing Goa trip. Quick details:\n• Travel dates: Next Friday to Sunday?\n• Budget per person: ₹10K, ₹20K, or ₹30K+?\n• Preference: Beach resort, luxury hotel, or budget stay?\n• Interests: Adventure, relaxation, or party scene?",
      },
      {
        user: "Friday to Sunday, ₹20K per person, beach resort, relaxation",
        agent: "Perfect! I've found an amazing package:\n\n🏖️ **Goa Relaxation Package** - ₹58,500 for 3 people\n\n✈️ Round-trip flights from Mumbai\n🏨 3★ Beach Resort (Sea-facing rooms)\n🍽️ Breakfast & Dinner included\n🚗 Airport transfers\n🎯 Spa session for each person\n\n📅 Check-in: Fri 2 PM | Check-out: Sun 11 AM\n\nShall I proceed with booking?",
      },
    ],
    keyMetrics: [
      { label: "Booking Conversion", value: "42%" },
      { label: "Customer Satisfaction", value: "4.8/5" },
      { label: "Upsell Rate", value: "38%" },
    ],
    pricing: {
      starter: "₹4,999/mo",
      pro: "₹10,999/mo",
      enterprise: "Custom",
    },
  },
  food: {
    name: "Food & Restaurants",
    icon: "🍽️",
    description: "AI ordering assistant for restaurants and cloud kitchens",
    tagline: "Streamline orders and delight customers with smart AI",
    features: [
      "Menu browsing and recommendations",
      "Order placement and tracking",
      "Table reservations",
      "Dietary preference filtering",
      "Special requests handling",
      "Loyalty program integration",
      "Feedback collection",
      "Delivery coordination",
    ],
    useCases: [
      "Automated order taking",
      "Menu recommendations based on preferences",
      "Reservation management",
      "Allergy and dietary restrictions",
      "Order modifications",
      "Promotional offers delivery",
    ],
    benefits: [
      "Increase orders by 45%",
      "Reduce order errors by 80%",
      "Handle peak hours effortlessly",
      "Improve customer retention by 50%",
      "Save 15 hours/week on phone orders",
    ],
    demoConversations: [
      {
        user: "I want to order dinner for 2 people, vegetarian",
        agent: "Great! I'll help you create the perfect vegetarian dinner. What type of cuisine interests you?\n🍕 Italian | 🍛 Indian | 🍜 Chinese | 🌮 Mexican | 🥗 Continental",
      },
      {
        user: "Indian",
        agent: "Excellent choice! Here's our popular **Vegetarian Indian Combo for 2**:\n\n🍛 2 Main Courses:\n• Paneer Butter Masala\n• Dal Makhani\n\n🍚 Rice & Bread:\n• Jeera Rice\n• 4 Butter Naan\n\n🥗 Sides:\n• Raita\n• Mixed Veg Salad\n\n🍨 Dessert: 2 Gulab Jamun\n\n💰 Total: ₹699 (₹899 - 22% off)\n⏱️ Delivery: 35-40 mins\n\nShall I proceed with this order?",
      },
    ],
    keyMetrics: [
      { label: "Order Accuracy", value: "97%" },
      { label: "Avg Order Value", value: "+32%" },
      { label: "Customer Repeat Rate", value: "68%" },
    ],
    pricing: {
      starter: "₹2,999/mo",
      pro: "₹6,999/mo",
      enterprise: "Custom",
    },
  },
  automotive: {
    name: "Automotive",
    icon: "🚗",
    description: "AI assistant for vehicle sales and service support",
    tagline: "Drive sales and service excellence with intelligent automation",
    features: [
      "Vehicle information and comparison",
      "Test drive scheduling",
      "Service appointment booking",
      "Maintenance reminders",
      "Spare parts inquiries",
      "Insurance renewal alerts",
      "Trade-in valuation",
      "Finance and EMI calculations",
    ],
    useCases: [
      "Lead generation and qualification",
      "Vehicle recommendations",
      "Service scheduling",
      "Warranty information",
      "Accessory recommendations",
      "Feedback collection",
    ],
    benefits: [
      "Increase test drive bookings by 55%",
      "Reduce response time to < 2 minutes",
      "Improve lead conversion by 35%",
      "Handle 1000+ inquiries daily",
      "Boost service retention by 40%",
    ],
    demoConversations: [
      {
        user: "I'm interested in buying an SUV under ₹20 lakhs",
        agent: "Excellent! We have some fantastic SUV options for you. To narrow it down:\n• Usage: City driving, Highway, or Both?\n• Fuel: Petrol, Diesel, or Electric/Hybrid?\n• Seating: 5-seater or 7-seater?\n• Key priority: Performance, Mileage, or Features?",
      },
      {
        user: "City + Highway, Petrol, 5-seater, Features",
        agent: "Perfect match! Here are our top 3 recommendations:\n\n1. **Hyundai Creta SX(O)** - ₹18.5L\n   ⛽ 17 kmpl | 🎯 Sunroof, Ventilated Seats\n\n2. **Kia Seltos HTX Plus** - ₹19.2L\n   ⛽ 16.8 kmpl | 🎯 360° Camera, ADAS Level 1\n\n3. **MG Astor Sharp** - ₹17.8L\n   ⛽ 16.5 kmpl | 🎯 AI Assistant, Panoramic Sunroof\n\nWould you like to schedule test drives?",
      },
    ],
    keyMetrics: [
      { label: "Lead Conversion", value: "38%" },
      { label: "Test Drive Bookings", value: "+58%" },
      { label: "Customer Satisfaction", value: "4.7/5" },
    ],
    pricing: {
      starter: "₹4,499/mo",
      pro: "₹9,999/mo",
      enterprise: "Custom",
    },
  },
}