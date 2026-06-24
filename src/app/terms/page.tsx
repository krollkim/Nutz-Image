import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/terms' },
  title: 'תנאי שימוש - NUTZ Calisthenics',
  description: 'תנאי השימוש של NUTZ Calisthenics - תיאור השירות, תשלום, ביטולים, אחריות וקניין רוחני.',
}

export default function TermsPage() {
  return (
    <main>
      <section className="pt-32 pb-20 bg-bg">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-rubik text-4xl md:text-5xl font-black text-text-primary mb-2">
            תנאי שימוש
          </h1>
          <p className="font-rubik text-sm text-muted mb-10">עודכן לאחרונה: 22 ביוני 2026</p>

          <div className="font-rubik space-y-8 leading-relaxed">
            <p className="text-muted">
              תנאים אלה חלים על השירותים הניתנים על ידי NUTZ / ליאב ברודש ("השירות").
              השימוש בשירות ובאתר מהווה הסכמה לתנאים המפורטים להלן.
            </p>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-amber mb-3">תיאור השירות</h2>
              <p className="text-muted">
                ליווי קליסטניקס אונליין 1:1, הכולל תוכנית אימון מותאמת אישית, מעקב וליווי
                מרחוק. השירות ניתן אונליין (מרחוק) בלבד ואינו כולל מפגשים פנים-אל-פנים.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-amber mb-3">תנאי תשלום</h2>
              <p className="text-muted">
                מחצית מהתשלום תשולם מראש, והיתרה תשולם בתחילת התהליך.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-amber mb-3">ביטולים והחזרים</h2>
              <p className="text-muted">
                לא קיימת מדיניות ביטולים ולא יינתנו החזרים כספיים. ניתן להקפיא את התהליך
                בהתראה מראש.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-amber mb-3">הבהרה רפואית ואחריות</h2>
              <p className="text-muted">
                טרם תחילת הליווי מתקיימת פגישת התאמה הכוללת בירור של רמת הכושר והמצב
                הבריאותי של המתאמן. במידת הצורך תינתן המלצה לפנות לייעוץ רפואי טרם תחילת
                האימונים. האחריות לדיווח מלא ומדויק על כל מצב רפואי רלוונטי, וכן לביצוע
                בטוח ונכון של התרגילים - חלה על המתאמן.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-amber mb-3">הסמכה וביטוח</h2>
              <p className="text-muted">
                ליאב ברודש הוא מאמן מוסמך ובעל ביטוח אחריות מקצועית. יחד עם זאת, מאחר
                שהשירות ניתן אונליין (מרחוק) וללא פיקוח פיזי ישיר בזמן האימון, האחריות
                לביצוע נכון ובטוח של התרגילים ולהתאמת סביבת האימון נותרת על המתאמן. אין
                באמור כדי להבטיח כיסוי ביטוחי כלשהו למתאמן.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-amber mb-3">קניין רוחני</h2>
              <p className="text-muted">
                כל התכנים, התוכניות והחומרים הניתנים במסגרת השירות הם קניינם של NUTZ /
                ליאב ברודש. אין להעתיק, לשכפל, להפיץ או לעשות בהם שימוש מסחרי ללא אישור
                מראש ובכתב.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-amber mb-3">יצירת קשר</h2>
              <p className="text-muted">
                בכל שאלה בנוגע לתנאים אלה:{' '}
                <a href="mailto:egozcali@gmail.com" className="text-amber hover:text-text-primary transition-colors">
                  egozcali@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
