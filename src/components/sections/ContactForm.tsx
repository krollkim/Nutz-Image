'use client'

import { useState } from 'react'
import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { submitForm, FormData } from '@/lib/form'

interface ContactFormProps {
  mode?: 'standalone' | 'embedded'
}

// Scattered mascot avatars (background texture). Add/remove entries to control density.
// Note: positions are explicit (not random) to avoid SSR hydration mismatch.
// className strings must stay literal so Tailwind detects them.
const MASCOT_DECORATIONS = [
  { src: 'super-avatar', className: 'absolute -top-4 -right-6 w-28 h-28 rotate-12 opacity-[0.09]' },
  { src: 'pointing-avatar', className: 'absolute -bottom-8 -left-5 w-32 h-32 -rotate-12 opacity-[0.09]' },
  { src: 'thumbsup-avatar', className: 'absolute top-1/3 -left-9 w-20 h-20 rotate-6 opacity-[0.08]' },
  { src: 'welcome-avatar', className: 'absolute bottom-1/4 -right-9 w-20 h-20 -rotate-6 opacity-[0.08]' },
  { src: 'thumbsup-avatar', className: 'absolute -top-5 left-1/4 w-16 h-16 -rotate-12 opacity-[0.07]' },
  { src: 'welcome-avatar', className: 'absolute top-2 left-1/2 w-14 h-14 rotate-6 opacity-[0.07]' },
  { src: 'super-avatar', className: 'absolute top-1/2 left-1/4 w-16 h-16 -rotate-6 opacity-[0.07]' },
  { src: 'pointing-avatar', className: 'absolute top-2/3 right-1/4 w-16 h-16 rotate-12 opacity-[0.07]' },
  { src: 'welcome-avatar', className: 'absolute top-[45%] right-8 w-14 h-14 rotate-12 opacity-[0.08]' },
  { src: 'super-avatar', className: 'absolute -bottom-5 right-1/3 w-16 h-16 rotate-6 opacity-[0.07]' },
  { src: 'thumbsup-avatar', className: 'absolute bottom-4 left-1/3 w-14 h-14 -rotate-12 opacity-[0.07]' },
  { src: 'pointing-avatar', className: 'absolute top-1/4 right-1/3 w-12 h-12 -rotate-6 opacity-[0.07]' },
]

export default function ContactForm({ mode = 'standalone' }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    plan: '',
    experience: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const result = await submitForm(formData)
    if (result.success) {
      setStatus('success')
      setFormData({ name: '', phone: '', plan: '', experience: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    } else {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }

    setIsLoading(false)
  }

  return (
    <section className={`${mode === 'embedded' ? 'pt-12 pb-24' : 'pt-20 pb-32'} ${mode === 'standalone' ? 'bg-surface' : ''}`}>
      <div className="max-w-2xl mx-auto px-4">
        {mode === 'standalone' && (
          <div className="mb-12">
            <SectionLabel className='mt-8'>LET'S GO</SectionLabel>
            <h1 className="font-rubik text-4xl md:text-5xl font-black text-text-primary mt-4 mb-4">
              הגשת מועמדות
            </h1>
            <p className="font-rubik text-muted">
              לא כל אחד מתקבל. מלא את הפרטים וליאב יחזור אליך תוך 24 שעות.
            </p>
          </div>
        )}

        <div className="relative overflow-hidden bg-gradient-card border border-[var(--border-subtle)] rounded-card shadow-gold p-6 sm:p-8">
          {/* Scattered mascot avatars - background texture */}
          <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
            {MASCOT_DECORATIONS.map((avatar, idx) => (
              <Image
                key={idx}
                src={`/images/mascot/${avatar.src}.png`}
                alt=""
                width={140}
                height={140}
                className={avatar.className}
              />
            ))}
          </div>

          <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
            <input
              type="text"
              name="name"
              placeholder="שם מלא"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full h-12 px-4 bg-bg border border-[var(--border-subtle)] rounded-card font-rubik text-right text-text-primary placeholder:text-muted focus:outline-none focus:border-amber transition-colors"
            />

            <input
              type="tel"
              name="phone"
              placeholder="טלפון"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full h-12 px-4 bg-bg border border-[var(--border-subtle)] rounded-card font-rubik text-right text-text-primary placeholder:text-muted focus:outline-none focus:border-amber transition-colors"
            />

            <select
              name="plan"
              value={formData.plan}
              onChange={handleChange}
              required
              className="w-full h-12 pr-4 pl-10 bg-bg border border-[var(--border-subtle)] rounded-card font-rubik text-right text-text-primary focus:outline-none focus:border-amber transition-colors appearance-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239A8868' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left 1rem center',
                backgroundSize: '16px',
              }}
            >
              <option value="">בחר מסלול</option>
              <option value="powerup-60">Power-Up שעה</option>
              <option value="powerup-120">Power-Up שעתיים</option>
              <option value="90-days">תהליך 90 ימים</option>
              <option value="180-days">תהליך 180 ימים</option>
              <option value="360-days">תהליך 360 ימים</option>
            </select>

            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full h-12 pr-4 pl-10 bg-bg border border-[var(--border-subtle)] rounded-card font-rubik text-right text-text-primary focus:outline-none focus:border-amber transition-colors appearance-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239A8868' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left 1rem center',
                backgroundSize: '16px',
              }}
            >
              <option value="">רמת ניסיון</option>
              <option value="beginner">מתחיל</option>
              <option value="up-to-year">מתאמן עד שנה</option>
              <option value="year-plus">מתאמן שנה+</option>
              <option value="competitive">מתחרה</option>
            </select>

            <textarea
              name="message"
              placeholder="משהו שחשוב לך שאדע?"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-bg border border-[var(--border-subtle)] rounded-card font-rubik text-right text-text-primary placeholder:text-muted focus:outline-none focus:border-amber resize-none transition-colors"
            />

            <Button
              variant="primary"
              size="lg"
              onClick={() => handleSubmit}
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? 'שליחה...' : 'שלח מועמדות'}
            </Button>

            {status === 'success' && (
              <p className="text-center font-rubik text-power-gold">
                המועמדות נשלחה! ליאב יבדוק ויחזור אליך תוך 24 שעות.
              </p>
            )}

            {status === 'error' && (
              <p className="text-center font-rubik text-red-500">
                הייתה שגיאה. אנא נסה שוב.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
