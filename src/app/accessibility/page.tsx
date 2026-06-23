import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'הצהרת נגישות - NUTZ Calisthenics',
  description: 'הצהרת הנגישות של NUTZ Calisthenics - מחויבות לנגישות בהתאם לת"י 5568 ו-WCAG 2.0 AA.',
}

export default function AccessibilityPage() {
  return (
    <main>
      <section className="pt-32 pb-20 bg-bg">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-rubik text-4xl md:text-5xl font-black text-text-primary mb-2">
            הצהרת נגישות
          </h1>
          <p className="font-rubik text-sm text-muted mb-10">עודכן לאחרונה: 22 ביוני 2026</p>

          <div className="font-rubik space-y-8 leading-relaxed">
            <p className="text-muted">
              NUTZ / ליאב ברודש רואה חשיבות רבה במתן שירות נגיש לכלל המשתמשים, לרבות
              אנשים עם מוגבלות, ופועלת להנגשת האתר ככל שניתן.
            </p>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-amber mb-3">תקני הנגישות</h2>
              <p className="text-muted">
                האתר הונגש בהתאם לתקן הישראלי ת"י 5568, המבוסס על הנחיות WCAG 2.0 ברמה
                AA, ובהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות),
                התשע"ג-2013.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-amber mb-3">מה הונגש באתר</h2>
              <ul className="list-disc pr-5 space-y-2 text-muted">
                <li>טקסט חלופי (alt) לתמונות</li>
                <li>ניגודיות צבעים מספקת בין טקסט לרקע</li>
                <li>מבנה כותרות היררכי וברור</li>
                <li>תוויות (labels) בשדות הטפסים</li>
                <li>התאמה לקוראי מסך</li>
                <li>הגדרת שפה וכיווניות תקינה (lang="he", dir="rtl")</li>
                <li>תוסף נגישות באתר המאפשר התאמות תצוגה</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-amber mb-3">פניות בנושא נגישות</h2>
              <p className="text-muted mb-4">
                נתקלת בקושי בגלישה או בבעיית נגישות? נשמח לקבל את פנייתך ולסייע:
              </p>
              <ul className="list-none space-y-2 text-muted">
                <li>איש קשר: ליאב ברודש</li>
                <li>
                  אימייל:{' '}
                  <a href="mailto:egozcali@gmail.com" className="text-amber hover:text-text-primary transition-colors">
                    egozcali@gmail.com
                  </a>
                </li>
                <li>זמן טיפול בפנייה: עד 5 ימי עסקים</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
