# NUTZ — Project Status
## Last updated: June 11, 2026

---

## Current Phase: Planning ✅ | Infrastructure ✅ | Build ✅ | Copy ✅ | Design System ✅ | **Design Polish (Phase A)** | Deploy

---

## 📋 DESIGN POLISH BRIEF — Ready for Approval (June 15, 2026)

### Phase 1: Structure & Layout — 5 Tasks ⏳ Planned
- [x] 1️⃣ IMG_1297 Asset Resolution — drop placeholder references ✅ Done
- [ ] 2️⃣ Planche Image (letterboxing) — split layout or full-bleed ⏳ Planned
- [ ] 3️⃣ Footer — reduce bloat, merge duplicate CTA ⏳ Planned
- [ ] 4️⃣ Certificates Section — masonry/collage layout ⏳ Planned
- [ ] 5️⃣ Logo Sizing — header + footer visibility ⏳ Planned

### Phase 2: Visual Hierarchy — 2 Tasks ⏳ Planned
- [ ] 6️⃣ Typography — larger scale, clearer hierarchy ⏳ Planned
- [ ] 7️⃣ Animations — scroll-triggered staggered reveals ⏳ Planned

### Phase 3: Motion & Interaction — 3 Tasks ⏳ Planned
- [ ] 8️⃣ Count-up on Stats Numbers ⏳ Planned
- [ ] 9️⃣ Parallax on Hero Images ⏳ Planned
- [ ] 🔟 Hover Micro-interactions ⏳ Planned

### Phase 4: Strategic Elevation — 4 Tasks ⏳ Planned
- [ ] 1️⃣1️⃣ Contrast Between Sections (alternate backgrounds) ⏳ Planned
- [ ] 1️⃣2️⃣ Large, Edge-to-Edge Imagery ⏳ Planned
- [ ] 1️⃣3️⃣ Orange Accent — used more boldly ⏳ Planned
- [ ] 1️⃣4️⃣ Create One "Wow" Moment ⏳ Planned

**Full detailed plan:** See `docs/DESIGN_POLISH_PLAN.md`

---

## ✅ COMPLETE — Design System Implementation (June 11, 2026)

### Design Token System
- [x] Warm palette applied — deep brown (#120C06), chocolate (#2A1C0E), cream (#F0E4CC)
- [x] Gradient system — hero radial, sections linear, CTA orange flame
- [x] Accent colors — gold (#D4A24E) primary, flame (#E07B2D) secondary
- [x] Border radius — pill (999px) + card (16px) standards
- [x] Spacing & typography hierarchy finalized

### UI Component Updates (9 components)
- [x] Button.tsx — gradient CTA, pill shape, hover lift + shadow
- [x] Card.tsx — gradient bg, subtle borders, hover effects
- [x] Badge.tsx — pill radius, gold borders
- [x] SectionLabel.tsx — spacing refinement
- [x] ImagePlaceholder.tsx (NEW) — dashed gold borders for pending assets
- [x] Header.tsx — glassmorphism backdrop, gold logo
- [x] Footer.tsx — warm chocolate bg
- [x] FloatingCTA.tsx — gradient pill button
- [x] ScrollReveal.tsx (NEW) — GSAP scroll animations, SSR-safe

### Section Components (10 sections)
- [x] Hero.tsx — radial gradient, load animation, image placeholder
- [x] Stats.tsx — gold numbers, gradient bg
- [x] Hook.tsx — gold-bright quote
- [x] Method.tsx — Card-styled POWERUP box
- [x] About.tsx — image placeholders (portrait + certificates), gold stats
- [x] Testimonials.tsx — warm bg, cream text
- [x] Pricing.tsx — gold featured card shadow
- [x] FAQ.tsx — warm bg, polished accordion
- [x] ContactForm.tsx — rounded-card fields
- [x] CtaSection.tsx — gradient-section bg

### All Pages Updated (6 routes)
- [x] / (home) — full hero + teasers + ScrollReveal animations
- [x] /method — hero + full method + pricing + ScrollReveal
- [x] /results — hero + testimonials + ScrollReveal
- [x] /about — hero + full about + placeholders + ScrollReveal
- [x] /contact — form + FAQ (client-side animations)
- [x] /faq — intro + all FAQ categories + ScrollReveal

### Build Status
- [x] npm run build — ✅ zero errors
- [x] Dev server running — http://localhost:3001
- [x] All pages functional with new design
- [x] Screenshots captured (6 full-page images)

---

## Ready

### Strategy and Content
- [x] Positioning statement
- [x] Tagline — Start and advance in calisthenics online
- [x] Hook — I don't teach exercises. I teach you to control your body.
- [x] Full origin story (3 paragraphs)
- [x] Copy for every section on every page
- [x] FAQ bank with categories
- [x] Meta descriptions for all pages
- [x] Plans and pricing

### Branding
- [x] Logo (PNG) — NUTZ acorn
- [x] Mascot — muscular squirrel avatar set
- [x] Color palette defined
- [x] Style — Dark and Powerful + anime energy
- [x] Fonts — Rubik (Hebrew) + Bebas Neue (English labels)
- [x] Hero image — /images/hero/hero-image.JPG (direct gaze, sunset) for homepage
- [x] Secondary image — IMG_1294 (power pose) for about page
- [x] OG image — NUTZ logo on dark background with tagline

### Architecture
- [x] Page map (7 routes + 3 legal)
- [x] Homepage flow (8 sections)
- [x] Interior page structure
- [x] CTA architecture
- [x] Contextual FAQ filtering strategy
- [x] Schema markup plan
- [x] Tech stack defined — Next.js 14, TypeScript, Tailwind, GSAP, Netlify
- [x] Folder structure defined

### Testimonials
- [x] Tamsegen (25) — story + quote
- [x] Eden (19) — story + quote
- [x] Yonatan (23) — story only (quote = placeholder)

### Visual Assets
- [x] Hero images — two sunset options
- [x] Photos of Liav — available
- [x] Squirrel mascot avatars — full set
- [x] Certificates wall photo

### Technical
- [x] Form automation — same mechanism as landing pages + tag branding site
- [x] Instagram — https://www.instagram.com/liavbrodash

### Legal
- [x] Privacy policy — exists
- [x] Accessibility — exists

---

## Pending

### Content
- [ ] Quote from Yonatan (placeholder for now)
- [ ] Terms of use — will be written later

### Assets (All wired and ready)
- [x] Hero image — `/images/hero/hero-image.JPG` (live on all pages)
- [x] About portrait — Liav headshot (live on /about)
- [x] Certificates wall — individual certificates (live on /about full)

### Design System
- [x] Full warm palette implementation — all 6 pages
- [x] Gradient backgrounds — hero radial, sections linear, CTAs orange
- [x] Component library — 9 UI components + 10 sections
- [x] Animations — GSAP entrance + scroll reveals
- [x] Image placeholders — for pending hero & certificate wall images
- [x] 60-30-10 color ratio maintained (warm base → cream text → gold/flame accents)

### Technical
- [ ] Domain — not relevant until build is done
- [ ] YouTube link (if exists)
- [ ] TikTok link (if exists)

---

## Removed from plan
- Nadav Hadar — not part of website testimonials
- Domain purchase — postponed to end

---

## Build Status
✅ **COMPLETE AND FUNCTIONAL**
- Full responsive design system implemented
- All 6 pages live with animations
- Production build: `npm run build` → zero errors
- Dev server running and tested
- Ready for asset integration and Netlify deployment

## Not blocking deploy
All pending items (Yonatan quote, Terms, real images) can be added post-launch. ImagePlaceholders are live and UX-complete — drop in real images and they'll render perfectly.
