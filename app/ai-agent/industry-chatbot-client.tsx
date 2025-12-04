"use client"

import { useState } from "react"
import IndustryChatbotModal from "@/components/industry-chatbot-modal"

interface Industry {
  name: string
  icon: string
  description: string
}
interface IndustryChatbotClientProps {
  industries: Industry[]
}

export default function IndustryChatbotClient({ industries }: IndustryChatbotClientProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((industry, index) => (
          <button key={index} onClick={() => setSelectedIndustry(industry)} className="group text-left">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{industry.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{industry.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{industry.description}</p>
              <p className="text-blue-600 text-sm font-semibold group-hover:underline">Click to see demo →</p>
            </div>
          </button>
        ))}
      </div>

      {selectedIndustry && (
        <IndustryChatbotModal
          industry={selectedIndustry}
          isOpen={!!selectedIndustry}
          onClose={() => setSelectedIndustry(null)}
        />
      )}
    </>
  )
}


