'use client'

import { useEffect, useState, useCallback } from 'react'

const STORAGE_KEY = 'nutz-a11y'
const FONT_MIN = 90
const FONT_MAX = 150
const FONT_STEP = 10

interface A11ySettings {
  fontScale: number
  highContrast: boolean
  noMotion: boolean
  highlightLinks: boolean
}

const DEFAULTS: A11ySettings = {
  fontScale: 100,
  highContrast: false,
  noMotion: false,
  highlightLinks: false,
}

function applySettings(s: A11ySettings) {
  const html = document.documentElement
  html.style.fontSize = `${s.fontScale}%`
  html.classList.toggle('a11y-high-contrast', s.highContrast)
  html.classList.toggle('a11y-no-motion', s.noMotion)
  html.classList.toggle('a11y-highlight-links', s.highlightLinks)
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false)
  const [settings, setSettings] = useState<A11ySettings>(DEFAULTS)

  // Restore saved settings on mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = { ...DEFAULTS, ...JSON.parse(raw) } as A11ySettings
        setSettings(parsed)
        applySettings(parsed)
      }
    } catch {
      // ignore corrupt storage
    }
  }, [])

  const update = useCallback((patch: Partial<A11ySettings>) => {
    setSettings((prev) => {
      const next = { ...prev, ...patch }
      applySettings(next)
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      } catch {
        // ignore
      }
      return next
    })
  }, [])

  const reset = useCallback(() => {
    applySettings(DEFAULTS)
    setSettings(DEFAULTS)
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      // ignore
    }
  }, [])

  return (
    <>
      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="פתיחת תפריט נגישות"
        aria-expanded={open}
        className="pointer-events-auto w-12 h-12 rounded-full bg-gradient-cta text-[#2A1606] shadow-cta flex items-center justify-center hover:brightness-110 transition-all focus:outline-none focus:ring-2 focus:ring-[var(--gold-bright)]"
      >
        {/* Universal access icon */}
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <circle cx="12" cy="3.5" r="2" />
          <path d="M21 7.5c-2.6.9-5.3 1.4-9 1.4S5.6 8.4 3 7.5l.6 2c2 .7 4 1.1 6 1.3v2.2c0 1-.2 2-.7 3.2L7 22l1.9.7 1.8-5h.6l1.8 5L15 22l-1.9-5.6c-.5-1.2-.7-2.2-.7-3.2v-2.2c2-.2 4-.6 6-1.3l.6-2z" />
        </svg>
      </button>

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="הגדרות נגישות"
          className="pointer-events-auto fixed bottom-20 right-6 z-[60] w-72 max-w-[calc(100vw-3rem)] bg-surface border border-[var(--border-mid)] rounded-card shadow-gold p-5 font-rubik text-right"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gold-bright">נגישות</h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="סגירת תפריט נגישות"
              className="text-muted hover:text-text-primary transition-colors text-xl leading-none"
            >
              ✕
            </button>
          </div>

          {/* Font size */}
          <div className="mb-4">
            <p className="text-sm text-muted mb-2">גודל טקסט ({settings.fontScale}%)</p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => update({ fontScale: Math.max(FONT_MIN, settings.fontScale - FONT_STEP) })}
                disabled={settings.fontScale <= FONT_MIN}
                aria-label="הקטנת טקסט"
                className="flex-1 py-2 rounded-pill border border-[var(--border-strong)] text-cream hover:bg-[rgba(212,162,78,0.08)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                א−
              </button>
              <button
                type="button"
                onClick={() => update({ fontScale: Math.min(FONT_MAX, settings.fontScale + FONT_STEP) })}
                disabled={settings.fontScale >= FONT_MAX}
                aria-label="הגדלת טקסט"
                className="flex-1 py-2 rounded-pill border border-[var(--border-strong)] text-cream hover:bg-[rgba(212,162,78,0.08)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                א+
              </button>
            </div>
          </div>

          {/* Toggles */}
          <div className="space-y-2">
            <ToggleRow
              label="ניגודיות גבוהה"
              active={settings.highContrast}
              onClick={() => update({ highContrast: !settings.highContrast })}
            />
            <ToggleRow
              label="עצירת אנימציות"
              active={settings.noMotion}
              onClick={() => update({ noMotion: !settings.noMotion })}
            />
            <ToggleRow
              label="הדגשת קישורים"
              active={settings.highlightLinks}
              onClick={() => update({ highlightLinks: !settings.highlightLinks })}
            />
          </div>

          <button
            type="button"
            onClick={reset}
            className="w-full mt-4 py-2 text-sm text-muted hover:text-text-primary transition-colors"
          >
            איפוס הגדרות
          </button>
        </div>
      )}
    </>
  )
}

interface ToggleRowProps {
  label: string
  active: boolean
  onClick: () => void
}

function ToggleRow({ label, active, onClick }: ToggleRowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      role="switch"
      aria-checked={active}
      className={`w-full flex items-center justify-between px-4 py-2.5 rounded-card border transition-colors ${
        active
          ? 'border-[var(--gold)] bg-[rgba(212,162,78,0.10)] text-text-primary'
          : 'border-[var(--border-subtle)] text-cream hover:bg-[rgba(212,162,78,0.05)]'
      }`}
    >
      <span>{label}</span>
      <span
        aria-hidden="true"
        className={`text-sm font-bold ${active ? 'text-amber' : 'text-muted'}`}
      >
        {active ? 'פעיל' : 'כבוי'}
      </span>
    </button>
  )
}
