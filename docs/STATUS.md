# NUTZ — סטטוס פרויקט (עדכון: יוני 2026)

**שפה:** עברית  
**משדרג:** Next.js 14, TypeScript, Tailwind CSS, GSAP  
**אתר:** RTL (עברית)

---

## 📋 סיכום ביצוע

### ✅ הושלם (מאומת בקוד)

| פריט | קובץ | סטטוס | הערה |
|------|------|-------|------|
| **תמונת ה-Planche** (split layout) | `src/components/sections/Method.tsx:33-47` | ✅ | גריד 2-טור: תמונה שמאל + טקסט ימין (RTL). `order-2/order-1` להפוך על דסקטופ. |
| **ניגודיות בין הסקשנים** (רקעים מתחלפים) | `src/components/sections/*` | ✅ | Hero/Stats/CtaSection = גרדיינטים; Hook/Testimonials = `bg-surface`; Method/About/Pricing/FAQ = `bg-bg`. ערבוב קבוע. |
| **תמונות גדולות** | `About.tsx:38` (Hero → split, ראה למטה) | ✅ | About teaser: `w-72 h-72`. ה-Hero שודרג מאז ל-split layout full-bleed (שורה נפרדת למטה). |
| **לוגו בהאדר** | `src/components/layout/Header.tsx:27-35` | ✅ | Image component, 52×52px, לא טקסט. |
| **סקשן התעודות** (גריד CSS אחיד) | `src/components/sections/About.tsx:100-145` | ✅ | CSS Grid: 3 עמודות דסקטופ / 2 טאבלט / 1 מובייל. `object-fit: contain`, ללא חיתוך. |
| **ניקוי IMG_1297** | `docs/NUTZ_STATUS.md:13,104` | ✅ | הוסר; מתייחס ל-`/images/hero/hero-image.JPG`. |
| **כותרת "למה NUTZ?"** (responsive) | `src/components/sections/About.tsx:31-33` | ✅ | `text-2xl sm:text-3xl md:text-4xl lg:text-5xl`, `text-right` (RTL), אין overflow. |
| **הפוטר** (מבנה אחיד + מותג + CTA) | `src/components/layout/Footer.tsx` | ✅ | Container אחיד אחד (`max-w-7xl`). 3 קופסאות RTL: כרטיס מותג (טקסט+CTA "הגשת מועמדות"+אווטאר סופר) \| THE NUTZ METHOD \| NUTZ. פס קופירייט `justify-between`. FloatingCTA נעלם בכניסת הפוטר (IntersectionObserver). |
| **טופס הגשת פרטים** (עיצוב + מיתוג) | `src/components/sections/ContactForm.tsx` | ✅ | עטוף ב-card (`bg-gradient-card`+border+`shadow-gold`). שדות אחידים `h-12`, `text-right` RTL, חצי select מותאמים עם מרווח (`pl-10`+SVG). 12 אווטארים מפוזרים ברקע (`MASCOT_DECORATIONS` array, opacity 7-9%). padding תחתון `pb-32`. |
| **סריקת Tailwind dynamic classes** | כל `src/**` | ✅ | נסרק — אין `pb-${...}` שבורים. כל ה-interpolations הם props/lookups/conditionals עם strings מלאים. הבאג היחיד (ContactForm) תוקן. |
| **פאזה 2 — Typography Scale** | `Method.tsx`, `Pricing.tsx`, `About.tsx` | ✅ | כותרות כרטיסים `text-lg`+bold; טקסט גוף `text-base` (16px) + `leading-relaxed`. |
| **פאזה 2 — Orange Accent** | `SectionLabel.tsx`, `Stats.tsx`, `Method.tsx`, `Pricing.tsx` | ✅ | SectionLabel: פס כתום `border-r-4 border-flame` (RTL, גלובלי). Stats: מספר ראשון `text-flame`. Method badge "שלב" כתום. Pricing מודגש `border-flame`. |
| **פאזה 2 — Dual CTA** | `DualCTA.tsx` + Method/About/Testimonials | ✅ | קומפוננטה לשימוש חוזר: "הגשת מועמדות" (primary) + כפתור "עוד" (secondary). ב-3 teaser בדף הבית. RTL: primary ראשון (ימין). רק ב-teaser, לא בדפים מלאים. |
| **Hero — Split Layout (full-bleed)** | `src/components/sections/Hero.tsx` | ✅ | דסקטופ: 2-טור `lg:h-screen`, תמונה ימין full-bleed edge-to-edge (`fill`+`object-cover`+`objectPosition 50% 25%`), טקסט שמאל. מובייל: תמונה למעלה `60vh` + טקסט מתחת. RTL. |
| **FloatingCTA — תזמון חכם** | `src/components/layout/FloatingCTA.tsx` | ✅ | לוגיקה דו-כיוונית: מוסתר כש-Hero בתצוגה, מופיע אחריו, מוסתר בפוטר (IntersectionObserver, בלי latch). מובייל בלבד (`md:hidden`), `px-6 py-2.5 text-base`. |
| **פאזה 3 — Scroll Reveals** | `ScrollReveal.tsx` | ✅ | fade-up על כותרות/בלוקים (GSAP ScrollTrigger, `once`). עוטף רק כותרות בסקשנים עם stagger — בלי חפיפת opacity עם הכרטיסים. |
| **פאזה 3 — Staggered Card Reveals** | `StaggerReveal.tsx` + Method/Pricing/Testimonials/Stats | ✅ | גל fade-up מדורג על קבוצות כרטיסים. **IntersectionObserver** (`threshold 0.15`, once) — לא ScrollTrigger, כדי שלא ייתקע בגלילה. ערכים: `duration 0.7`, `stagger 0.28`, `y 36`, `ease power2.out`. RTL: סדר DOM = ימין→שמאל. `gsap.set` ראשוני נגד FOUC. |
| **פאזה 3 — Count-up Stats** | `AnimatedCounter.tsx` + `Stats.tsx` | ✅ | מספרים מ-0 ל-target (IntersectionObserver, `threshold 0.5`). |
| **פאזה 3 — Hover Micro-interactions** | `Button.tsx`, `Card.tsx` | ✅ | Button: `transition-all` + `hover:scale-[1.02]` (+ brightness/lift קיימים). Card: `hover:shadow-gold` (+ border/lift קיימים). |

---

### 🔧 פתוח עכשיו (בעבודה)

_עיצוב (פאזות 1-3) הושלם. נפתחה קטגוריית **SEO + GEO + תוכן משפטי** (ראה למטה). ממשיכים גם במסלול שיפור מבוסס-משוב (עם ליאב)._

---

### 🔍 SEO + GEO + תוכן משפטי (פתוח — לפי דוח אבחון יוני 2026)

> GEO = Generative Engine Optimization (אופטימיזציה למנועי AI: ChatGPT/Perplexity/Google AI Overviews).
> מסודר לפי עדיפות. `[x]` = בוצע, `[ ]` = ממתין.

#### 🔴 עדיפות גבוהה (השפעה גבוהה)
- [x] **Structured Data (JSON-LD)** ✅ **מאומת** — `Organization`+`Person`+`WebSite` (גלובלי, `@graph` ב-layout), `Service`+5 `Offers` (דף method), `FAQPage`+18 שאלות (דף faq). קבצים: `lib/site.ts` (SITE_URL בר-עדכון), `lib/schema.ts`, `components/seo/JsonLd.tsx`. **אומת ב-validator.schema.org: 0 errors, 0 warnings בכל 3 הבלוקים.**
- [x] **Open Graph + Twitter cards + og:image + `metadataBase`** ✅ — ב-`layout.tsx`: `metadataBase: new URL(SITE_URL)`, `openGraph` (he_IL, siteName, תיאור, תמונה) + `twitter` (`summary`). OG image = הלוגו ב-`public/images/og/og-image.jpg` (JPEG 1036×1168). ניתן להחלפה בעתיד לעיצוב 1200×630 ייעודי.
- [x] **sitemap.xml + robots.txt + canonical** ✅ — `app/sitemap.ts` (9 דפים), `app/robots.ts` (allow all + sitemap + host), ו-`alternates.canonical` ב-9 הדפים. הכל נגזר מ-SITE_URL.
- [x] **SITE_URL סופי** ✅ — `https://liavbrodash.com` (קנוני, בלי www). הוחלף ב-`lib/site.ts`; אומת שאין שאריות `nutz.co.il`. Footer עודכן להשתמש ב-`INSTAGRAM_URL` מ-site.ts (במקום hard-coded). viewport הועבר ל-`viewport` export נפרד (build נקי).

> 🟢 **קטגוריית 🔴 (עדיפות גבוהה) הושלמה במלואה** — Structured Data + OG + sitemap/robots/canonical, כולל כל התלויי-דומיין. הדומיין הסופי: **https://liavbrodash.com**.

#### 🟡 עדיפות בינונית
- [ ] **תיקון H1** — דף `contact` חסר H1 (ContactForm משתמש ב-H2); דף `faq` עם כפילות H1/H2 (אותו טקסט "שאלות נפוצות").
- [x] **alt עברי תיאורי** ✅ — 8 התעודות (`"תעודת הסמכה מקצועית של ליאב ברודש — NUTZ (N)"`) וה-planche (`"ליאב ברודש מבצע תרגיל פלאנש..."`). בוצע ב-`About.tsx` + `Method.tsx`.
- [ ] **אופטימיזציית תמונות התעודות** — מעבר 8 התעודות מ-`<img>` רגיל ל-`next/image` (lazy-load + אופטימיזציה). כרגע ב-`About.tsx` הן `<img>` ידני.

#### 🟢 תוכן (דורש קלט מליאב/המשתמש — לא רק קוד)
- [ ] **הגדרות GEO מפורשות** — משפט קנוני ברור ל"מה זה NUTZ" ו"למי השיטה מתאימה"; הסמכות (דיקור/עיסוי/ספורטתרפיה) כ**טקסט מובנה**, לא רק כתמונות תעודות.
- [x] **דפים משפטיים** ✅ — `privacy`/`terms`/`accessibility`: layout (`pt-32` + `max-w-3xl` container + עיצוב עקבי RTL) **+ תוכן אמיתי מלא** (מבוסס פרטי ליאב, אימייל egozcali@gmail.com, בלי טלפון). placeholder יחיד שהוסר.
- [x] **תוסף נגישות קאסטום** ✅ — `AccessibilityWidget.tsx`: כפתור צף גלובלי + פאנל (גודל טקסט, ניגודיות גבוהה, עצירת אנימציות, הדגשת קישורים, איפוס). בלי ספריות, נשמר ב-localStorage, נגיש (aria). מאוחד עם FloatingCTA ב-container `justify-between` ב-layout. כך הצהרת הנגישות הפכה לאמת.

#### ✅ אימות (בסוף, אחרי ביצוע)
- [ ] מעבר אימות מלא: schema validated (Rich Results Test), OG מופיע בשיתוף, sitemap נגיש, canonical קיים, FAQPage מזוהה.

---

### ⏳ ממתין / אופציונלי (לפי משוב)

#### **Phase 4: The Wow Moment — נדחית להמשך / לפי משוב**
- ה-**count-up** של הסטטיסטיקות **כבר קיים ועובד** (`AnimatedCounter`).
- **כניסת ה-Hero** הקיימת (GSAP על label/title/subtitle/ctas) **מספקת** — לא נוגעים בה.
- אם יעלה צורך מהמשוב — אפשר להוסיף שכבת "wow" נוספת בהמשך.

#### **נדחה (אופציונלי)**
- [ ] **Parallax Hero** — תנועה עדינה בגלילה (max -50px). נדחה מפאזה 3; אפשר להחזיר בהמשך.

---

## 🛠️ כללי עבודה

1. **עברית לכל אורך:** הוראות, קוד, הערות — כל פה עברית
2. **ללא Playwright:** בדיקה ידנית בדפדפן. אין צילום-מסך אוטומטי — הוא בלבול יותר מאשר עזרה
3. **ניקוי .next cache:** אם משהו "שבור" לאחר שינויים (CSS 404, build error זר), חיסול `rm -rf .next` ובנייה חדשה
4. **Tailwind dynamic classes:** ✋ ללא `className="text-${size}"` או `pb-${value}"` — Tailwind compiler לא רואה אלה ב-build time. תמיד: `className={`${condition ? 'text-lg' : 'text-base'}`}` (explicit full strings)
5. **Hot-reload:** `npm run dev` נשאר פתוח. שינויים בקוד → hot-reload automatic. לא לעצור/להתחיל שוב מלחץ

---

## 📝 ערים ממשימות אחרונות

- **Planche image:** Layout שפיצנו — 2-col grid עם order flip עבור RTL
- **Section backgrounds:** Alternating colors = הרבה יותר טוב מ-brown monotony
- **Footer:** Consolidated container — סדרנו, אבל עדיין עדין
- **Certificates:** Simple CSS Grid (לא masonry, לא react-photo-album) — קל וקיים
- **Form padding:** Tailwind dynamic class bug תוקן — pb עכשיו חי

---

## 🎯 הבא

1. **🟡 אופטימיזציית 8 התעודות** — מעבר מ-`<img>` ל-`next/image` (lazy-load + אופטימיזציה). *(תיקון H1 + alt כבר בוצעו)*
2. **🟢 תוכן GEO** — הגדרות מפורשות "מה זה NUTZ"/"למי מתאים" + הסמכות כטקסט (דורש קלט מליאב).
3. **✅ אימות סופי** — Rich Results Test, בדיקת OG בשיתוף, sitemap/robots נגישים בפרודקשן.
4. *(אופציונלי)* פאזה 4 wow / Parallax Hero.

---

**סטטוס:** ✅ **פאזות 1-3 הושלמו** (עיצוב) + **משפטי/נגישות/alt**. 🔴 **קטגוריית SEO/GEO עדיפות גבוהה הושלמה במלואה** (Structured Data מאומת + OG + sitemap/robots/canonical + דומיין סופי **liavbrodash.com**). נותר: 🟡 אופטימיזציית תעודות, 🟢 תוכן GEO (קלט מליאב), ואימות פרודקשן.
