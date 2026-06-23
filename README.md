# NUTZ Calisthenics

אתר תדמית למותג **NUTZ** - ליווי ואימון קליסטניקס אונליין 1:1 עם ליאב ברודש.
אתר RTL בעברית, Next.js 14 (App Router) + TypeScript + Tailwind CSS + GSAP.

## הרצה מקומית

```bash
npm install
npm run dev     # http://localhost:3005
```

| סקריפט | פעולה |
|--------|-------|
| `npm run dev` | שרת פיתוח (פורט 3005, hot-reload) |
| `npm run build` | בילד פרודקשן |
| `npm start` | הרצת בילד פרודקשן (פורט 3005) |
| `npm run lint` | בדיקת ESLint |

## מבנה

```
src/
├── app/            # עמודים (App Router) + layout
├── components/
│   ├── layout/     # Header, Footer, FloatingCTA, AccessibilityWidget
│   ├── sections/   # סקשנים (Hero, Method, About, FAQ, ...)
│   ├── ui/         # רכיבי UI (Button, Card, ScrollReveal, ...)
│   └── seo/        # JsonLd (structured data)
├── data/           # תוכן (copy, faq, pricing, testimonials)
├── lib/            # site config, schema, gsap, form
└── styles/         # globals.css
```

## הערות חשובות

- **דומיין:** `src/lib/site.ts` → `SITE_URL` הוא **placeholder** — יש להחליף לדומיין הסופי בפריסה. כל ה-URLs המוחלטים (schema, metadataBase) נגזרים ממנו.
- **סטטוס הפרויקט:** מקור האמת לסטטוס ומשימות פתוחות — [`docs/STATUS.md`](docs/STATUS.md).
