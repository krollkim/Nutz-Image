'use client'

import { useState } from 'react'
import SectionLabel from '@/components/ui/SectionLabel'
import { faqs, FaqCategory } from '@/data/faq'

interface FAQProps {
  category?: FaqCategory
  className?: string
  /** Render the section's own heading. Disable when the page already provides an H1. */
  showHeading?: boolean
}

export default function FAQ({ category = 'all', className = '', showHeading = true }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const filteredFaqs = category === 'all'
    ? faqs
    : faqs.filter((faq) => faq.categories.includes(category))

  return (
    <section className={`py-20 bg-bg ${className}`}>
      <div className="max-w-4xl mx-auto px-4">
        {category === 'all' && showHeading && (
          <div className="mb-12">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="font-rubik text-4xl md:text-5xl font-black text-text-primary mt-4">
              שאלות נפוצות
            </h2>
          </div>
        )}

        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div key={index} className="border border-[var(--border-subtle)] rounded-card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 bg-surface hover:bg-warm-lift transition-colors text-right flex items-center justify-between"
              >
                <h3 className="font-rubik font-bold text-text-primary">{faq.question}</h3>
                <span className="text-amber ml-4 text-lg font-bold">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-bg border-t border-[var(--border-subtle)]">
                  <p className="font-rubik text-muted">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
